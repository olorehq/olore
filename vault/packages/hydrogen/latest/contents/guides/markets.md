---
title: Support multiple markets
description: >-
  Resolve the customer's market on the server and pass it to Hydrogen's request
  context, so Storefront API queries return localized prices, languages, and
  availability.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/markets'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/markets.md'
api_name: hydrogen
---

# Support multiple markets

With [Shopify Markets](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/markets), merchants can sell in multiple countries and languages from one store. A headless storefront decides which market each request belongs to, and then asks the [Storefront API](https://shopify.dev/docs/api/storefront) for data in that market's context.

Hydrogen doesn't decide how your storefront picks a market. You might use subdomains, per-market domains, path prefixes, cookies, or a customer's saved preference. Hydrogen's part is the request context: you resolve the market once on the server, pass it as `i18n` to [`createShopifyRequestContext()`](https://shopify.dev/docs/api/hydrogen/latest/request-handling/create-shopify-request-context), and the Storefront API client adds the market's country and language to every query that asks for them.

In this guide, you'll resolve a market from each request, pass it to Hydrogen, and keep Shopify's browser scripts and your links in the same market.

***

## Requirements

* Set up markets for your store. For more information, refer to [Shopify Markets](https://help.shopify.com/manual/markets).
* Create a [Storefront API client](https://shopify.dev/docs/storefronts/hydrogen/data-fetching) in your server request lifecycle.
* Decide how your storefront maps requests to markets: subdomains, per-market domains, or path prefixes.

***

## Step 1: Resolve the market

Write a small, explicit resolver that maps each request to a market. A market has a `country` and a `language`, using the uppercase codes that the Storefront API expects, such as `US`, `CA`, `EN`, and `FR`. Always return a default market so that the request context never has an undefined market.

## Market shape

lib/markets.ts

```ts
import type {I18nConfig} from '@shopify/hydrogen';


type Market = {
  country: I18nConfig['country'];
  language: I18nConfig['language'];
  pathPrefix?: string;
};


const DEFAULT_MARKET = {
  country: 'US',
  language: 'EN',
} satisfies Market;
```

Keep any labels or alternate domains that your app needs as extra fields on your own market objects. Only `country` and `language` are required. `pathPrefix` is optional.

Choose one of the following strategies, depending on how your storefront's URLs identify markets.

### Subdomains

Use subdomains when each market lives under one domain, such as `ca.example.com` or `fr.example.com`:

## Resolve a market from the subdomain

lib/markets.ts

```ts
const MARKET_BY_SUBDOMAIN: Record<string, Market> = {
  ca: {country: 'CA', language: 'EN'},
  fr: {country: 'FR', language: 'FR'},
};


export function getMarketFromRequest(request: Request): Market {
  const {hostname} = new URL(request.url);
  const [subdomain] = hostname.toLowerCase().split('.');


  return Object.hasOwn(MARKET_BY_SUBDOMAIN, subdomain)
    ? MARKET_BY_SUBDOMAIN[subdomain]
    : DEFAULT_MARKET;
}
```

### Per-market domains

Use per-market domains when each market has its own domain, such as `example.com`, `example.ca`, and `example.fr`:

## Resolve a market from the domain

lib/markets.ts

```ts
const MARKET_BY_HOST: Record<string, Market> = {
  'example.com': {country: 'US', language: 'EN'},
  'example.ca': {country: 'CA', language: 'EN'},
  'example.fr': {country: 'FR', language: 'FR'},
};


export function getMarketFromRequest(request: Request): Market {
  const host = new URL(request.url).hostname.toLowerCase();


  return Object.hasOwn(MARKET_BY_HOST, host) ? MARKET_BY_HOST[host] : DEFAULT_MARKET;
}
```

Map hosts from an allowlist like `MARKET_BY_HOST`. Don't trust the request's host for anything security-sensitive.

### Path prefixes

Use path prefixes when markets share one domain and the URL path identifies the market, such as `/en-ca/products/shirt` or `/fr-fr/products/shirt`. Give each prefixed market a `pathPrefix`:

## Resolve a market from the path prefix

lib/markets.ts

```ts
const MARKET_BY_PATH_PREFIX: Record<string, Market> = {
  'en-ca': {country: 'CA', language: 'EN', pathPrefix: '/en-ca'},
  'fr-fr': {country: 'FR', language: 'FR', pathPrefix: '/fr-fr'},
};


export function getMarketFromRequest(request: Request): Market {
  const {pathname} = new URL(request.url);
  const [firstSegment] = pathname.split('/').filter(Boolean);


  if (!firstSegment) return DEFAULT_MARKET;


  const key = firstSegment.toLowerCase();
  return Object.hasOwn(MARKET_BY_PATH_PREFIX, key) ? MARKET_BY_PATH_PREFIX[key] : DEFAULT_MARKET;
}
```

Your router needs to match product and collection routes with the prefix in front of them, such as a `:market` route segment or a localized route group.

***

## Step 2: Pass the market to the request context

Resolve the market where your app creates its Shopify request context, and pass it as `i18n`. Use the same request context for the Storefront API client and for `handleShopifyRoutes()`. This example shows only the market-specific part of your server request handler. For the rest of the handler, refer to [Request handlers](https://shopify.dev/docs/storefronts/hydrogen/request-handlers).

## Pass the market to the request context

lib/shopify.ts

```ts
import {createShopifyRequestContext, createStorefrontClient} from '@shopify/hydrogen';


import {env} from './env';
import {getMarketFromRequest} from './markets';


export async function handleRequest(
  request: Request,
  next: (request: Request) => Promise<Response>,
) {
  const requestContext = createShopifyRequestContext({
    request,
    i18n: getMarketFromRequest(request),
  });
  const storefrontClient = createStorefrontClient({
    type: 'public',
    requestContext,
    config: {
      storeDomain: env.PUBLIC_STORE_DOMAIN,
      publicStorefrontToken: env.PUBLIC_STOREFRONT_API_TOKEN,
    },
  });


  // Run handleShopifyRoutes() and your router with this request context
  // and client, then apply the response headers.
  // ...
}
```

Call `handleRequest()` from your app's request entry point. For where that is in React Router and Next.js, refer to [Framework wiring](https://shopify.dev/docs/storefronts/hydrogen/request-handlers#framework-wiring).

The Storefront API client exposes the resolved market as `client.i18n`. Hydrogen normalizes `client.i18n.pathPrefix` to either an empty string or a prefix with a leading slash and no trailing slash, such as `/en-ca`.

In React Router, middleware and loaders receive the full `Request`, so the resolvers from Step 1 work as written. The next two subsections apply only to Next.js.

### Resolve the market from forwarded headers in Next.​js

In Next.js, Server Components receive only the request headers, not a `Request` or the current URL. Return `requestContext.getForwardedRequestHeaders()` from `proxy.ts`. Those headers include the original URL in the `x-storefront-url` header, so your server code can resolve the market from them:

## Resolve a market from forwarded headers

lib/markets.ts

```ts
export function getMarketFromHeaders(headers: Pick<Headers, 'get'>): Market {
  const forwardedUrl = headers.get('x-storefront-url');
  if (!forwardedUrl) return DEFAULT_MARKET;


  return getMarketFromRequest(new Request(forwardedUrl));
}
```

Then create the request context with the headers alone, such as `createShopifyRequestContext({request: {headers}, i18n: getMarketFromHeaders(headers)})`. Reading headers with `headers()` is a request-time API, so pages that use this client render dynamically. For path-prefixed markets, use route params instead, as described in the next subsection.

### Path prefixes in Next.​js

In Next.js, model a path-prefixed market as a route segment, such as `app/[market]/products/[handle]/page.tsx`, and read it from `params` instead of from headers:

## Resolve a market from route params

lib/markets.ts

```ts
const MARKET_BY_PARAM: Record<string, Market> = {
  'en-ca': {country: 'CA', language: 'EN', pathPrefix: '/en-ca'},
  'fr-fr': {country: 'FR', language: 'FR', pathPrefix: '/fr-fr'},
};


export function getMarketFromParam(marketParam: string): Market {
  const key = marketParam.toLowerCase();
  return Object.hasOwn(MARKET_BY_PARAM, key) ? MARKET_BY_PARAM[key] : DEFAULT_MARKET;
}
```

Because the market comes from `params`, you can prerender pages with `generateStaticParams` as long as they don't call request-time APIs such as `headers()` or `cookies()`. For prerendered or cached pages, use a `private_no_buyer_context` client with a static request context:

## Static client for a market

lib/static-storefront.ts

```ts
import {createShopifyRequestContext, createStorefrontClient} from '@shopify/hydrogen';


import {getMarketFromParam} from './markets';


export function createStaticStorefrontClient(marketParam: string) {
  const requestContext = createShopifyRequestContext({
    request: {headers: new Headers()},
    i18n: getMarketFromParam(marketParam),
  });


  return createStorefrontClient({
    type: 'private_no_buyer_context',
    requestContext,
    config: {
      storeDomain: process.env.NEXT_PUBLIC_STORE_DOMAIN!,
      privateStorefrontToken: process.env.PRIVATE_STOREFRONT_API_TOKEN!,
    },
  });
}
```

Pages that need customer-specific data, such as the cart, need a private client with trusted buyer context. Those pages render dynamically.

***

## Step 3: Localize your queries

The client doesn't rewrite your query text. It fills in `$country` and `$language` from the request context's `i18n` when a query declares them. For the Storefront API to use them, the query also needs the `@inContext` directive:

## Market-aware query

lib/queries.ts

```ts
import {gql} from '@shopify/hydrogen';


export const PRODUCTS_QUERY = gql(`
  query Products($first: Int!, $country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    products(first: $first) {
      nodes {
        title
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
`);
```

Don't pass `country` or `language` in each `client.graphql()` call. Resolve the market once at the request boundary and let the client add it.

Render prices from the `amount` and `currencyCode` that Shopify returns for the market, and format them with [`formatMoney()`](https://shopify.dev/docs/api/hydrogen/latest/money) and the market's locale. Don't convert currency in your app.

***

## Step 4: Keep scripts and links in the same market

Several parts of your storefront need the same market as your Storefront API queries:

* **Shopify scripts:** Resolve the market on the server and pass its `country`, `language`, and `pathPrefix`, plus `localization.country.currency.isoCode` as `currency`, to the `i18n` prop of `ShopifyScripts` so that Shopify's browser globals match your queries.

* **Route templates:** Keep market prefixes out of your [route templates](https://shopify.dev/docs/storefronts/hydrogen/routing). Hydrogen adds `i18n.pathPrefix` to product `?variant=` redirects and to redirects from Shopify's standard paths.

* **Your own links:** When your app builds links for a path-prefixed market, add `client.i18n.pathPrefix` in front of the path:

  ```ts
  const href = `${storefrontClient.i18n.pathPrefix}/products/${product.handle}`;
  ```

* **Predictive search:** Pass `pathPrefix: i18n.pathPrefix` to `getPredictiveSearchItemUrl()`. Refer to [Add predictive search](https://shopify.dev/docs/storefronts/hydrogen/collections-search#step-7-add-predictive-search).

Shopify Markets localizes Shopify data, such as product titles, prices, and availability. Your app's own interface text, such as button labels, still needs your app's translation system.

If your storefront detects a market from the customer's location, then treat that as a suggestion. Customers travel, use VPNs, and choose markets on purpose. If customers can switch markets in your storefront, then save their choice.

***

## Step 5: Test market resolution

The subdomain resolver takes a standard `Request`, so you can test it without a framework test harness:

## Market resolver test

lib/markets.test.ts

```ts
import {describe, expect, it} from 'vitest';


import {getMarketFromRequest} from './markets';


describe('getMarketFromRequest', () => {
  it('resolves a subdomain market', () => {
    const request = new Request('https://ca.example.com/products/shirt');


    expect(getMarketFromRequest(request)).toEqual({
      country: 'CA',
      language: 'EN',
    });
  });


  it('falls back to the default market', () => {
    const request = new Request('https://www.example.com/');


    expect(getMarketFromRequest(request)).toEqual({
      country: 'US',
      language: 'EN',
    });
  });
});
```

Also test at least one Storefront API call with a mock `fetch`, and check that the GraphQL variables include the expected `country` and `language`. To learn how to pass a mock `fetch` to the client, refer to [Storefront API client](https://shopify.dev/docs/storefronts/hydrogen/data-fetching).

***

## Next steps

[Route templates\
\
](https://shopify.dev/docs/storefronts/hydrogen/routing)

[Describe your storefront's URL shape without market prefixes.](https://shopify.dev/docs/storefronts/hydrogen/routing)

***
