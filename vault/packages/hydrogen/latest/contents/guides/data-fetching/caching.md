---
title: Cache Storefront API queries
description: >-
  Cache catalog reads from the Storefront API with Hydrogen's sub-request cache
  on Oxygen and other runtimes, or with your framework's data cache.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/data-fetching/caching'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/data-fetching/caching.md'
api_name: hydrogen
---

# Cache Storefront API queries

Catalog data like products, collections, and pages changes far less often than customers request it. When you cache those reads, pages load faster, and you reduce the number of requests your storefront sends to the [Storefront API](https://shopify.dev/docs/api/storefront). This guide shows how to cache Storefront API queries with Hydrogen's sub-request cache, how to cache other data with the same strategies, and how Next.js storefronts cache with the framework instead.

***

## How it works

Hydrogen's sub-request cache stores the results of individual Storefront API queries on the server. It works on any runtime that gives you a cache store, like the Cache API on [Oxygen](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen) and Cloudflare Workers.

You configure caching in two places:

1. Pass a `cache` store, and optionally `waitUntil`, to `createStorefrontClient()`.
2. Pass a caching strategy, like [`Cache.long()`](https://shopify.dev/docs/api/hydrogen/latest/storefront-client/caching), to each query that you want to cache.

The client caches a query only when the query has a strategy. A client with a `cache` store and no per-query strategies caches nothing, and the client never caches mutations. The client builds the cache key from the query and its variables, and it doesn't cache responses that contain GraphQL errors.

When a cached entry is stale but still within its `staleWhileRevalidate` window, Hydrogen returns the cached result right away and refreshes the entry in the background. With `waitUntil`, that background refresh can finish after the server sends the response.

Hydrogen includes the following strategies:

| Strategy | `maxAge` | `staleWhileRevalidate` | Use it for |
| - | - | - | - |
| `Cache.long()` | 1 hour | 23 hours | Data that rarely changes, like collections, pages, and menus. |
| `Cache.short()` | 1 second | 9 seconds | Data that changes often but can be briefly stale. |
| `Cache.none()` | None | None | Explicitly opting a query out of caching. |

`Cache.long()` and `Cache.short()` accept overrides, like `Cache.short({maxAge: 60})`. To define your own strategy, call `Cache()` with `maxAge`, `staleWhileRevalidate`, and `staleIfError`. Durations are in seconds, or an object like `{minutes: 5}`.

***

## Requirements

* Create a [Storefront API client](https://shopify.dev/docs/storefronts/hydrogen/data-fetching).
* Use a runtime with a cache store, like Oxygen or Cloudflare Workers, for Hydrogen's sub-request cache. Next.js storefronts use the framework's data cache instead.

***

## Step 1: Pass a cache to the client

Add `cache` and `waitUntil` to the request-scoped client that you created in [Storefront API client](https://shopify.dev/docs/storefronts/hydrogen/data-fetching#step-2-create-a-client):

## Pass a cache to the Storefront API client

lib/storefront.ts

```ts
import {
  type CacheInstance,
  createShopifyRequestContext,
  createStorefrontClient,
} from '@shopify/hydrogen';


import {getBuyerIp} from './buyer-ip';
import {env} from './env';


export function createRequestStorefrontClient(
  request: Pick<Request, 'headers'>,
  cache: CacheInstance,
  waitUntil: (promise: Promise<unknown>) => void,
) {
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
      cache,
      waitUntil,
    },
  });
}
```

On Oxygen and Cloudflare Workers, open the cache with `await caches.open('hydrogen')` in your worker's `fetch` handler, and pass `executionContext.waitUntil.bind(executionContext)` as `waitUntil`. If you create the client in your app's request entry point, then pass both through request-scoped context. In React Router, the template's `server.ts` sets them on the router context, and its root middleware passes them to the client. For where this code goes, refer to [Framework wiring](https://shopify.dev/docs/storefronts/hydrogen/request-handlers#framework-wiring).

Pass the cache that `caches.open()` returns directly. Don't wrap it in an adapter, and don't replace it with a process-local cache like an LRU.

On other runtimes, `cache` also accepts a key-value store that implements `get()`, `set()`, and optionally `delete()`.

***

## Step 2: Cache catalog queries

Pass a strategy as `cache` in the options of each query that you want to cache:

## Cache a collection query

lib/collection.ts

```ts
import {
  Cache,
  type CachingStrategy,
  gql,
  type StorefrontClient,
} from '@shopify/hydrogen';


const COLLECTION_QUERY = gql(`
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      title
      products(first: 24) {
        nodes {
          handle
          title
        }
      }
    }
  }
`);


export async function loadCollection(
  storefront: StorefrontClient<{cache?: CachingStrategy}>,
  handle: string,
) {
  const {data} = await storefront.graphql(COLLECTION_QUERY, {
    variables: {handle},
    cache: Cache.long(),
  });


  return data?.collection ?? null;
}
```

Call `loadCollection()` from your page's server data loader with the request's client. The `StorefrontClient<{cache?: CachingStrategy}>` type accepts any client that you created with a `cache` store.

Never pass a strategy to personalized queries, like the cart or anything that uses a customer's session. The client doesn't support the `private` cache mode. Keep personalized reads uncached on a request-scoped client.

***

## Step 3: Cache other data

To cache data that doesn't come from the Storefront API client, like a third-party API or a computed value, use `createRunWithCache()` with the same cache store and strategies. You provide the cache key, and your function decides whether to cache the result:

## Cache a third-party request

lib/reviews.ts

```ts
import {Cache, type CacheInstance, createRunWithCache} from '@shopify/hydrogen';


export async function getProductReviews(
  productHandle: string,
  cache: CacheInstance,
  waitUntil: (promise: Promise<unknown>) => void,
) {
  const runWithCache = createRunWithCache({cache, waitUntil});


  const {data} = await runWithCache(
    {key: ['reviews', productHandle], strategy: Cache.short({maxAge: 60})},
    async () => {
      const response = await fetch(
        `https://reviews.example.com/products/${productHandle}`,
      );
      return {data: {reviews: await response.json()}, shouldCache: response.ok};
    },
  );


  return data;
}
```

The value you return in `data` must be a JSON-serializable object. To cache raw `fetch` responses instead, use `createFetchWithCache()`, which takes the same `cache` and `waitUntil` options.

If you need to cache customer-specific data, then use `createRunWithCache()` with a key that's private to that customer, so that the cache never serves one customer's data to another.

***

## Step 4: Cache in Next.​js

Next.js has its own data cache, so a Next.js storefront doesn't need to pass caching strategies to its catalog queries. Instead, wrap catalog reads in functions marked with the `"use cache"` directive, and set a lifetime with `cacheLife()` and tags with `cacheTag()`. This approach requires `cacheComponents: true` in `next.config.ts`.

## Cache a catalog read in Next.js

app/collections/page.tsx

```tsx
import {cacheLife, cacheTag} from 'next/cache';


import {COLLECTIONS_QUERY} from '@/lib/queries';
import {staticStorefrontClient} from '@/lib/storefront-static';


async function fetchCollections(after?: string) {
  'use cache';
  cacheLife('hours');
  cacheTag('collections');


  const {data, errors} = await staticStorefrontClient.graphql(
    COLLECTIONS_QUERY,
    {variables: {first: 24, after}},
  );
  if (errors) {
    console.error('Collections query failed', errors);
  }


  return data?.collections?.nodes ?? [];
}
```

Keep the following in mind when you cache with Next.js:

* **Use a client without buyer context:** Cached functions run with the module-scoped `"private_no_buyer_context"` client, not a client that reads request headers. For more information, refer to [Create a client for catalog reads](https://shopify.dev/docs/storefronts/hydrogen/data-fetching#create-a-client-for-catalog-reads).
* **Pass serializable arguments:** `"use cache"` serializes its arguments, and a `URLSearchParams` loses its methods across that boundary. Pass the search string as a plain string, and create `new URLSearchParams()` inside the cached function.
* **Don't cache the cart:** Keep cart reads on the request-scoped client, outside any cached function.

***

## Next steps

[Deploy your storefront\
\
](https://shopify.dev/docs/storefronts/hydrogen/deploy)

[Deploy your storefront to Oxygen, Vercel, or another runtime.](https://shopify.dev/docs/storefronts/hydrogen/deploy)

***
