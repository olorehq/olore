---
title: Query the Storefront API
description: >-
  Create a Hydrogen Storefront API client, write queries with gql, localize them
  for a market, and handle errors in any JavaScript framework.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/data-fetching'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/data-fetching.md'
api_name: hydrogen
---

# Query the Storefront API

Hydrogen's Storefront API client is a typed GraphQL client for the [Storefront API](https://shopify.dev/docs/api/storefront). It works anywhere you can call `fetch`, so you can use it in loaders, server components, route handlers, middleware, and background jobs in any framework. This guide shows how to choose a client type, create a client, and query the Storefront API.

***

## How it works

[`createStorefrontClient()`](https://shopify.dev/docs/api/hydrogen/latest/storefront-client/create-storefront-client) takes three inputs:

* **`type`:** Which token the client uses, and whether it forwards buyer IP.
* **`requestContext`:** The Shopify request context for the current request, created with [`createShopifyRequestContext()`](https://shopify.dev/docs/api/hydrogen/latest/request-handling/create-shopify-request-context). It carries the request, the resolved market, and the buyer IP. To learn more, refer to [The request context](https://shopify.dev/docs/storefronts/hydrogen#the-request-context).
* **`config`:** Your store domain, token, and optional settings like `storefrontId`, `cache`, `waitUntil`, and a custom `fetch`.

Queries go through `client.graphql(query, {variables})`. There are no typed helper methods like `client.product()`. You write normal Storefront API queries with [`gql()`](https://shopify.dev/docs/api/hydrogen/latest/storefront-client/gql), and your editor infers the result type from the query.

Hydrogen's cart, predictive search, and request handlers all accept the same client, so one client per request serves your whole server.

***

## Requirements

* Complete the [Deploy a template](https://shopify.dev/docs/storefronts/hydrogen/getting-started/deploy-a-template) tutorial, or install `@shopify/hydrogen` in a server-rendered project.
* To query a real store, get a public or private Storefront API token from the [Headless channel](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/manage-headless-channels) or the [Hydrogen channel](https://apps.shopify.com/hydrogen). You don't need a token to query [mock.shop](https://shopify.dev/docs/storefronts/headless/mock-shop).

***

## Step 1: Choose a client type

Pick the client type based on where the code runs, which token is safe there, and whether you have a customer's request:

| Type | Token | Use it for |
| - | - | - |
| `"public"` | Public token, or no token | Browser-safe reads, mock.shop, and the default scaffold before you have tokens. |
| `"private"` | Private token, with a trusted buyer IP | Server-rendered requests on behalf of a customer, like the cart and personalized pages. |
| `"private_no_buyer_context"` | Private token, without a buyer IP | Catalog reads that are the same for every customer, like prerendering, static generation, sitemaps, and webhooks. |

A public client accepts `undefined` as its token, which means tokenless access. When you move to a real store, use a token-backed client: product tags, [metaobjects](https://shopify.dev/docs/apps/build/metaobjects), [metafields](https://shopify.dev/docs/apps/build/metafields), menus, and customer data require a token.

Private tokens are server-only. `createStorefrontClient()` throws if you create a private client in the browser.

### Use mock.​shop during development

To build before you have a store, create a tokenless public client and set the store domain to a mock.shop host:

```ts
const client = createStorefrontClient({
  type: 'public',
  requestContext,
  config: {storeDomain: 'pets.mock.shop'},
});
```

mock.shop rejects private tokens. To pick a store and learn what mock.shop supports, refer to [Building with mock.shop](https://shopify.dev/docs/storefronts/headless/mock-shop).

***

## Step 2: Create a client

Create the client in server-only code. Create a client that uses a customer's request, like a `"private"` client or any client with the incoming request's headers, once per request. You can create a client with a static request context, like a `"private_no_buyer_context"` client for catalog reads, once at module scope.

## Create a request-scoped Storefront API client

lib/storefront.ts

```ts
import {
  createShopifyRequestContext,
  createStorefrontClient,
} from '@shopify/hydrogen';


import {getBuyerIp} from './buyer-ip';
import {env} from './env';


export function createRequestStorefrontClient(request: Pick<Request, 'headers'>) {
  return createStorefrontClient({
    type: 'private',
    requestContext: createShopifyRequestContext({
      request,
      i18n: {country: 'US', language: 'EN'},
      buyerIp: getBuyerIp(request.headers),
    }),
    config: {
      storeDomain: env.PUBLIC_STORE_DOMAIN,
      privateStorefrontToken: env.PRIVATE_STOREFRONT_API_TOKEN,
      storefrontId: env.PUBLIC_STOREFRONT_ID,
    },
  });
}
```

`env` stands for your server environment. Read the variables with your framework's environment API, like `process.env` on Node or the `env` binding on [Oxygen](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen) and Cloudflare Workers. To cache queries, also pass a `cache` store and `waitUntil` in `config`. Refer to [Caching](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/caching).

Call `createRequestStorefrontClient()` once per request from your app's request entry point. Then share the client with your page loaders through request-scoped context. Run Hydrogen's request handlers in the same entry point, and apply the response headers at your framework's response boundary. For where this code goes in React Router and Next.js, refer to [Framework wiring](https://shopify.dev/docs/storefronts/hydrogen/request-handlers#framework-wiring).

In Next.js, Server Components receive headers instead of a `Request`. `createShopifyRequestContext()` needs only the request headers, so pass `{headers}` as the request. Wrap the client in React's `cache()` so every component in one render shares it.

### Create a client for catalog reads

Catalog pages that serve the same data to every customer don't need buyer context. A module-scoped `"private_no_buyer_context"` client with a static request context doesn't read request headers. In Next.js, that keeps the page statically renderable.

## Module-scoped catalog client

lib/storefront-static.ts

```ts
import {
  createShopifyRequestContext,
  createStorefrontClient,
} from '@shopify/hydrogen';


import {env} from './env';


export const staticStorefrontClient = createStorefrontClient({
  type: 'private_no_buyer_context',
  requestContext: createShopifyRequestContext({
    request: {headers: new Headers()},
    i18n: {country: 'US', language: 'EN'},
  }),
  config: {
    storeDomain: env.PUBLIC_STORE_DOMAIN,
    privateStorefrontToken: env.PRIVATE_STOREFRONT_API_TOKEN,
  },
});
```

All requests through a client without buyer context share one rate limit bucket. That's fine for catalog data, but use a request-scoped `"private"` client for the cart and anything personalized.

In Next.js, use both clients: the static client for catalog reads, and the request-scoped client for the cart.

***

## Step 3: Pass a trusted buyer IP

A `"private"` client forwards trusted buyer context, including the buyer's IP address, to the Storefront API with each request. Hydrogen doesn't guess which header holds the IP address. Your app reads it from a header that your hosting provider sets and that customers can't spoof.

| Provider | Header |
| - | - |
| Oxygen | `oxygen-buyer-ip` |
| Cloudflare | `CF-Connecting-IP` |
| Vercel | `x-forwarded-for` |
| Fly.io | `Fly-Client-IP` |

On Fly.io, parse `X-Forwarded-For` only when another reverse proxy sits in front of your app.

The following helper reads the first address from `x-forwarded-for`, which Vercel sets. It falls back to a loopback address during local development and throws in production when the header is missing:

## Read the buyer IP

lib/buyer-ip.ts

```ts
export function getBuyerIp(headers: Pick<Headers, 'get'>): string {
  const buyerIp = headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  if (buyerIp) return buyerIp;


  if (process.env.NODE_ENV !== 'production') return '127.0.0.1';


  throw new Error('x-forwarded-for is required for private Storefront API clients');
}
```

Pass the buyer IP to `createShopifyRequestContext()`, not to the client config. Hydrogen's Storefront API proxy and your own `client.graphql()` calls both read buyer identity from the request context.

***

## Step 4: Query data

Write queries with `gql()` from `@shopify/hydrogen`, then run them with `client.graphql()`. Keep `gql()` calls in server modules and route modules. If a `gql()` call is reachable from browser code, then bundlers include it in the browser bundle.

## Query a product

lib/product.ts

```ts
import {gql, type StorefrontClient} from '@shopify/hydrogen';


const PRODUCT_QUERY = gql(`
  query Product($handle: String!) {
    product(handle: $handle) {
      title
      description
    }
  }
`);


export async function loadProduct(storefront: StorefrontClient, handle: string) {
  const {data} = await storefront.graphql(PRODUCT_QUERY, {
    variables: {handle},
  });


  return data?.product ?? null;
}


export type Product = Awaited<ReturnType<typeof loadProduct>>;
```

Call `loadProduct()` from your page's server data loader, then render the result:

## Render the product

## lib/render-product.ts

##### Vanilla JavaScript

```ts
import type {Product} from './product';

export function renderProduct(root: HTMLElement, product: Product) {
  const heading = document.createElement('h1');
  heading.textContent = product?.title ?? 'Product not found';
  root.replaceChildren(heading);
}
```

##### React

```tsx
import type {Product} from '~/lib/product';

export function ProductTitle({product}: {product: Product}) {
  return <h1>{product?.title ?? 'Product not found'}</h1>;
}
```

##### Vue

```html
<script setup lang="ts">
import type {Product} from '~/lib/product';

defineProps<{product: Product}>();
</script>

<template>
  <h1>{{ product?.title ?? 'Product not found' }}</h1>
</template>
```

`data` is typed from the query. To set up editor validation and derive types for fragments and variables, refer to [Typed queries and validation](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/typed-queries).

To cache catalog queries, refer to [Caching](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/caching).

***

## Step 5: Localize queries

The Storefront API returns prices, availability, and translated content for a market when a query uses the `@inContext` directive. Hydrogen fills in the `$country` and `$language` variables from the request context's `i18n` whenever your query declares them. You pass only the variables you own:

```ts
const COLLECTION_QUERY = gql(`
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      products(first: 10) {
        nodes {
          title
        }
      }
    }
  }
`);


const {data} = await storefront.graphql(COLLECTION_QUERY, {
  variables: {handle: 'summer-sale'},
});
```

Hydrogen doesn't add `@inContext` for you. If your query doesn't declare `$country` and `$language` and use them in `@inContext`, then the Storefront API returns the store's default market. The request context's country and language override values in `variables`.

To resolve the market for each request, refer to [Markets](https://shopify.dev/docs/storefronts/hydrogen/markets).

***

## Step 6: Handle errors

Transport errors throw, and the client returns GraphQL errors:

* **Thrown:** Non-2xx responses, network failures, and JSON parse errors throw [`StorefrontApiError`](https://shopify.dev/docs/api/hydrogen/latest/storefront-client/storefront-errors). Timeouts throw `StorefrontTimeoutError`, which extends `StorefrontApiError`.
* **Returned:** A 200 response with a GraphQL `errors` array doesn't throw, because partial success is valid in GraphQL. Check `errors` alongside `data`.

```ts
import {StorefrontApiError, StorefrontTimeoutError} from '@shopify/hydrogen';


try {
  const {data, errors, headers} = await storefront.graphql(PRODUCT_QUERY, {
    variables: {handle},
  });


  if (errors) {
    console.error('Storefront API returned errors', errors);
  }
} catch (error) {
  if (error instanceof StorefrontTimeoutError) {
    // The request timed out.
  } else if (error instanceof StorefrontApiError) {
    // The request failed, or the response wasn't valid JSON.
  }
  throw error;
}
```

Every successful result includes `headers`, the `Headers` object from the Storefront API response.

Queries with missing or renamed fields can pass `tsc` but fail at runtime, often looking like empty results. On a product page, that can look like a missing product and turn into a misleading 404. To catch these errors before you deploy, [validate your queries in CI](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/typed-queries).

***

## Step 7: Test your client

To test code that uses the client, pass a mock `fetch` in the client config. The client calls it instead of the global `fetch`:

## Mock the Storefront API

storefront.test.ts

```ts
import {
  createShopifyRequestContext,
  createStorefrontClient,
  gql,
} from '@shopify/hydrogen';
import {expect, test, vi} from 'vitest';


test('reads the shop name', async () => {
  const mockFetch = vi.fn().mockResolvedValue(
    new Response(JSON.stringify({data: {shop: {name: 'Test'}}})),
  );


  const client = createStorefrontClient({
    type: 'public',
    requestContext: createShopifyRequestContext({
      request: {headers: new Headers()},
      i18n: {country: 'US', language: 'EN'},
    }),
    config: {
      storeDomain: 'test.myshopify.com',
      publicStorefrontToken: 'test-token',
      fetch: mockFetch,
    },
  });


  const {data} = await client.graphql(gql(`query { shop { name } }`));


  expect(data?.shop.name).toBe('Test');
});
```

***

## Next steps

[Typed queries and validation\
\
](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/typed-queries)

[Get editor validation for your queries and catch schema errors in CI.](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/typed-queries)

[Caching\
\
](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/caching)

[Cache catalog reads on Oxygen, Next.js, and other runtimes.](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/caching)

[Request handlers\
\
](https://shopify.dev/docs/storefronts/hydrogen/request-handlers)

[Pass your client to Hydrogen's routes and redirects.](https://shopify.dev/docs/storefronts/hydrogen/request-handlers)

[Storefront API client reference\
\
](https://shopify.dev/docs/api/hydrogen/latest/storefront-client/create-storefront-client)

[Review the client's options, types, and caching settings.](https://shopify.dev/docs/api/hydrogen/latest/storefront-client/create-storefront-client)

***
