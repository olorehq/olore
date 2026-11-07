---
title: Caching
description: >-
  The caching functions cache Storefront API queries, third-party API responses,
  and other async work. Use the functions to choose how long each result stays
  fresh and to cache data under a key that you choose.
api_version: 2026-10
source_url:
  html: 'https://shopify.dev/docs/api/hydrogen/latest/storefront-client/caching'
  md: 'https://shopify.dev/docs/api/hydrogen/latest/storefront-client/caching.md'
api_name: hydrogen
---

# Caching

The caching functions cache Storefront API queries, third-party API responses, and other async work. Use the functions to choose how long each result stays fresh and to cache data under a key that you choose.

For Storefront API reads, use the `cache` option on [`createStorefrontClient`](https://shopify.dev/docs/api/hydrogen/latest/storefront-client/create-storefront-client). For other third-party requests, use `createFetchWithCache`. For any other async work, use `createRunWithCache`.

To cache catalog queries and other data, refer to [Cache Storefront API queries](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/caching).

Import `Cache`, `createFetchWithCache`, and `createRunWithCache` from `@shopify/hydrogen`.

***

## Cache strategies

#### Cache

Creates caching strategies for Storefront API queries, cached fetches, and cached runs. Call `Cache` with options for a custom strategy, or use the `short`, `long`, and `none` presets.

* **long**

  **(overrideOptions?: CacheOptions) => CachingStrategy**

  **required**

  Keeps public entries fresh for 1 hour, then serves stale entries for 23 more hours while the cache refreshes them. Pass options to override the mode or either duration, or to add `staleIfError`.

* **none**

  **() => NoStoreStrategy**

  **required**

  Returns a strategy that skips the cache. The preset takes no options.

* **short**

  **(overrideOptions?: CacheOptions) => CachingStrategy**

  **required**

  Keeps public entries fresh for 1 second, then serves stale entries for 9 more seconds while the cache refreshes them. Pass options to override the mode or either duration, or to add `staleIfError`.

### CacheOptions

Options for a custom caching strategy. A duration that you leave out counts as zero seconds.

* maxAge

  How long an entry stays fresh.

  ```ts
  CacheDuration
  ```

* mode

  The cache mode, \`public\` or \`private\`. Defaults to \`public\`. Web Cache stores receive the mode in the \`cache-control\` header. The Storefront API client throws an error for \`private\`.

  ```ts
  ExpirableCacheMode
  ```

* staleIfError

  How long after the stale-while-revalidate window the cache serves a stale entry when a refresh fails.

  ```ts
  CacheDuration
  ```

* staleWhileRevalidate

  How long after the fresh window the cache serves a stale entry while it refreshes the entry in the background.

  ```ts
  CacheDuration
  ```

### CacheDuration

A number of seconds, or an object such as \`{ minutes: 10 }\`. \`Cache\` throws an error for a duration that isn't a finite, non-negative number, and rounds fractional totals up to whole seconds.

```ts
number | {
      seconds?: number;
      minutes?: number;
      hours?: number;
      days?: number;
    }
```

### ExpirableCacheMode

The modes that a custom strategy accepts, \`public\` or \`private\`. \`Cache\` throws an error for any other mode.

```ts
typeof PUBLIC | typeof PRIVATE
```

### CachingStrategy

A caching strategy, with every duration in whole seconds. Create a strategy with \`Cache\`.

* maxAge

  How many seconds an entry stays fresh.

  ```ts
  number
  ```

* mode

  The cache mode. A \`no-store\` strategy skips the cache.

  ```ts
  CacheMode
  ```

* staleIfError

  How many seconds after the stale window the cache serves a stale entry when the refresh fails.

  ```ts
  number
  ```

* staleWhileRevalidate

  How many seconds after the fresh window the cache serves a stale entry while it refreshes the entry in the background.

  ```ts
  number
  ```

### CacheMode

The cache mode of a strategy, \`public\`, \`private\`, or \`no-store\`. A \`no-store\` strategy skips the cache.

```ts
typeof PUBLIC | typeof PRIVATE | typeof NO_STORE
```

### NoStoreStrategy

A strategy that skips the cache.

```ts
CachingStrategy & {
  mode: typeof NO_STORE;
}
```

### Examples

* #### Cache a product list query

  ##### Description

  Opt a product list query into \`Cache.long()\`. This example opens a Web Cache and passes the cache to the client with \`waitUntil\`.

  ##### TypeScript

  ```ts
  import {
    Cache,
    createShopifyRequestContext,
    createStorefrontClient,
    gql,
  } from "@shopify/hydrogen";

  const PRODUCTS_QUERY = gql(`query { products(first: 10) { nodes { title } } }`);

  export async function getProducts(request: Request, waitUntil: (promise: Promise<unknown>) => void) {
    const storefront = createStorefrontClient({
      type: "public",
      requestContext: createShopifyRequestContext({ request, i18n: { country: "US", language: "EN" } }),
      config: {
        storeDomain: process.env.PUBLIC_STORE_DOMAIN!,
        publicStorefrontToken: process.env.PUBLIC_STOREFRONT_API_TOKEN,
        cache: await caches.open("hydrogen"),
        waitUntil,
      },
    });

    return storefront.graphql(PRODUCTS_QUERY, { cache: Cache.long() });
  }
  ```

* #### Build a custom strategy

  ##### Description

  Create caching strategies from durations and presets. This example builds a custom strategy, overrides a preset with \`staleIfError\`, and creates a no-store strategy.

  ##### TypeScript

  ```ts
  import { Cache } from "@shopify/hydrogen";

  export const tenMinutes = Cache({
    maxAge: { minutes: 10 },
    staleWhileRevalidate: { hours: 1 },
  });

  export const longWithFallback = Cache.long({ staleIfError: { minutes: 5 } });

  export const noStore = Cache.none();
  ```

***

## Cached fetch

## create​Fetch​With​Cache(**[input1](#createfetchwithcache-propertydetail-input1)**​)

Creates a fetch function that caches responses from third-party APIs. Call the function like `fetch()`, and pass a `key` and `strategy` in the third argument to cache the response. Calls without the third argument skip the cache. Return `false` from a `shouldCacheResponse` option to skip caching one response.

The function caches only OK responses with no body or with a JSON, text, XML, HTML, GraphQL, or JavaScript content type. Other responses skip the cache. The function removes the `set-cookie` and `server-timing` headers from each cached response, including the response that a cache miss returns. With `staleIfError`, the function serves a stale entry only after a `500`, `502`, `503`, or `504` status, or when the fetch throws.

### Parameters

* **input1**

  **CreateFetchWithCacheOptions**

  **required**

  A cache, or the function from `createRunWithCache` to share its cache, plus an optional fetch function.

### Returns

* **FetchWithCache**

  A fetch function that adds a `Cache-Status` header to calls with cache options, unless `annotateCacheStatus` is `false`.

### CreateFetchWithCacheOptions

Pass a cache and an optional \`waitUntil\` function, or pass \`runWithCache\` from \`createRunWithCache\` to share its cache. Set \`fetch\` to replace the global fetch function.

```ts
(
  | CreateRunWithCacheOptions
  | {
      runWithCache: RunWithCache;
    }
) & {
  fetch?: typeof fetch;
}
```

### CreateRunWithCacheOptions

The cache and the background-work function for \`createRunWithCache\`.

* cache

  The cache that holds entries. \`createRunWithCache\` throws a \`TypeError\` when the cache is neither a Web Cache API cache nor a key-value store.

  ```ts
  CacheInstance
  ```

* waitUntil

  Keeps the runtime alive for background cache writes and refreshes. Without \`waitUntil\`, each call waits for its cache write before it resolves.

  ```ts
  WaitUntil
  ```

### CacheInstance

The cache that holds entries, either a Web Cache API cache or a key-value store.

```ts
WebCacheLike | KeyValueCacheLike
```

### WebCacheLike

A cache with the \`match()\`, \`put()\`, and \`delete()\` methods of the Web Cache API, such as a cache from \`caches.open()\`.

* delete

  The \*\*\`delete()\`\*\* method of the Cache interface finds the Cache entry whose key is the request, and if found, deletes the Cache entry and returns a Promise that resolves to \`true\`. \[MDN Reference]\(https://developer.mozilla.org/docs/Web/API/Cache/delete)

  ```ts
  (request: RequestInfo | URL, options?: CacheQueryOptions) => Promise<boolean>
  ```

* match

  The \*\*\`match()\`\*\* method of the Cache interface returns a Promise that resolves to the Response associated with the first matching request in the Cache object. \[MDN Reference]\(https://developer.mozilla.org/docs/Web/API/Cache/match)

  ```ts
  (request: RequestInfo | URL, options?: CacheQueryOptions) => Promise<Response>
  ```

* put

  The \*\*\`put()\`\*\* method of the Often, you will just want to Window/fetch one or more requests, then add the result straight to your cache. \[MDN Reference]\(https://developer.mozilla.org/docs/Web/API/Cache/put)

  ```ts
  (request: RequestInfo | URL, response: Response) => Promise<void>
  ```

### KeyValueCacheLike

A key-value store with \`get()\`, \`set()\`, and an optional \`delete()\` method. Hydrogen passes each entry to \`set()\` as an object. Serialize the object in your store when the store saves only strings.

* delete

  Removes the value under the key.

  ```ts
  (key: string) => unknown
  ```

* get

  Returns the value under the key. Hydrogen treats a value that it didn't write as a cache miss.

  ```ts
  (key: string) => unknown
  ```

* set

  Saves the value under the key. Expire the entry after the \`ttl\` option, in seconds.

  ```ts
  (key: string, value: unknown, options?: KeyValueCacheSetOptions) => unknown
  ```

### KeyValueCacheSetOptions

Options that Hydrogen passes when it writes an entry to a key-value store.

* ttl

  How many seconds to keep the entry. Hydrogen passes the sum of the strategy's \`maxAge\`, \`staleWhileRevalidate\`, and \`staleIfError\`, rounded up.

  ```ts
  number
  ```

### WaitUntil

Keeps the runtime alive until a background cache write or refresh finishes, such as a worker's \`waitUntil\` function. Hydrogen ignores errors that the function throws.

* promise

  The background cache write or refresh to wait for.

  ```ts
  Promise<unknown>
  ```

returns

Nothing. Hydrogen ignores the return value.

```ts
void
```

### RunWithCache

Returns cached data for the key, or runs the callback and caches the result. Resolves with the data and the cache status.

* options

  The cache key and caching strategy for this call.

  ```ts
  RunWithCacheOptions
  ```

* run

  Produces the data and decides whether to cache it. Runs whenever the cache has no fresh entry. The context's \`background\` field is \`true\` during a stale-while-revalidate refresh.

  ```ts
  RunCallback<T>
  ```

returns

The data and the cache status.

```ts
interface Promise<T> {
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
}, interface Promise<T> {}, Promise: PromiseConstructor, interface Promise<T> {
    readonly [Symbol.toStringTag]: string;
}, interface Promise<T> {
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}
```

### RunWithCacheOptions

Options for one cached run.

* key

  Identifies the cache entry. \`runWithCache\` throws a \`TypeError\` for an array key with empty slots or with entries other than strings, numbers, booleans, and \`null\`.

  ```ts
  CacheKey
  ```

* strategy

  Sets how long the result stays fresh, how long the cache serves it stale while refreshing it, and how long the cache serves it stale after an error.

  ```ts
  CachingStrategy
  ```

### CacheKey

Identifies a cache entry, as a string or an array of strings, numbers, booleans, and \`null\`. Include every value that changes the cached data.

```ts
string | readonly CacheKeyPrimitive[]
```

### CacheKeyPrimitive

One entry in an array cache key. The number \`1\` and the string \`"1"\` produce different keys.

```ts
string | number | boolean | null
```

### RunCallback

Produces the data for a cached run and decides whether to cache the data.

* context

  Tells the callback whether it refreshes a stale entry in the background.

  ```ts
  RunWithCacheContext
  ```

returns

The data and whether to cache the data, or a promise that resolves to both.

```ts
MaybePromise<CacheDecision<T>>
```

### RunWithCacheContext

The context that \`runWithCache\` passes to its callback.

* background

  \`true\` when the callback refreshes a stale entry after the cache already returned the stale value.

  ```ts
  boolean
  ```

### MaybePromise

A value, or a promise that resolves to the value.

```ts
T | Promise<T>
```

### CacheDecision

The callback's return value, with the data and whether to cache the data.

* data

  The data to return and cache. Web Cache stores save the data as JSON.

  ```ts
  T
  ```

* shouldCache

  Set to \`false\` to return the data without storing it.

  ```ts
  boolean
  ```

### FetchWithCache

A fetch function that caches the response when you pass cache options as the third argument.



### Examples

* #### Cache a third-party API response

  ##### Description

  Cache an external API response with \`Cache.short()\`. This example skips caching when the response body contains errors.

  ##### TypeScript

  ```ts
  import { Cache, createFetchWithCache } from "@shopify/hydrogen";

  export async function fetchReviews(productId: string, waitUntil: (promise: Promise<unknown>) => void) {
    const fetchWithCache = createFetchWithCache({
      cache: await caches.open("reviews"),
      waitUntil,
    });

    const url = `https://reviews.example.com/products/${productId}`;

    return fetchWithCache(url, undefined, {
      key: ["reviews", productId],
      strategy: Cache.short(),
      shouldCacheResponse: async ({ json }) => {
        const payload = await json?.().catch(() => undefined);
        return typeof payload === "object" && payload != null && !("errors" in payload);
      },
    });
  }
  ```

***

## Cached runs

## create​Run​With​Cache(**[input1](#createrunwithcache-propertydetail-input1)**​)

Creates a function that caches the result of any async work, such as data that several API calls produce together. For a single fetch response, use `createFetchWithCache`.

### Parameters

* **input1**

  **CreateRunWithCacheOptions**

  **required**

  The cache, and the function that keeps the runtime alive for background cache writes.

### Returns

* **RunWithCache**

  A function that returns cached data or runs your callback, and reports the cache status.

## run​With​Cache(**[options](#runwithcache-propertydetail-options)**​,**[run](#runwithcache-propertydetail-run)**​)

Returns cached data for the key, or runs the callback and caches the result.

The callback returns an object with `data` and a boolean `shouldCache`. The function throws a `TypeError` for any other shape. During the `staleWhileRevalidate` window, the function returns the stale data right away and runs the callback in the background. During the `staleIfError` window, the function returns the stale data when the callback throws. A `no-store` strategy runs the callback and skips the cache.

### Parameters

* **options**

  **RunWithCacheOptions**

  **required**

  The cache key and caching strategy for this call.

* **run**

  **() => MaybePromise\<CacheDecision\<SerializableCacheValue>>**

  **required**

  Produces the data and decides whether to cache it. Runs whenever the cache has no fresh entry.

### Returns

* **Promise\<RunWithCacheResult\<SerializableCacheValue>>**

  The data, and whether the data came from the cache, the callback, or a bypass.

### SerializableCacheValue

The plain object that you cache. Web Cache stores save the object as JSON. Return data that survives a round trip through \`JSON.stringify\`.



### RunWithCacheResult

The data, and whether the data came from the cache or the callback.

* cacheStatus

  \`hit\` when the data comes from the cache, \`miss\` when the callback runs, and \`bypass\` for a \`no-store\` strategy.

  ```ts
  'hit' | 'miss' | 'bypass'
  ```

* data

  The cached data on a hit, or the callback's data otherwise.

  ```ts
  T
  ```

### Examples

* #### Cache computed data

  ##### Description

  Cache an inventory summary under an array key. This example returns the cache status with the data.

  ##### TypeScript

  ```ts
  import { Cache, createRunWithCache } from "@shopify/hydrogen";

  export async function getInventorySummary(
    handle: string,
    waitUntil: (promise: Promise<unknown>) => void,
  ) {
    const runWithCache = createRunWithCache({
      cache: await caches.open("inventory"),
      waitUntil,
    });

    const { data, cacheStatus } = await runWithCache(
      { key: ["inventory-summary", handle], strategy: Cache.short() },
      async () => {
        const response = await fetch(`https://inventory.example.com/${handle}`);
        if (!response.ok) {
          throw new Error(`Inventory request failed with ${response.status}`);
        }
        const summary: { available: number } = await response.json();
        return { data: summary, shouldCache: true };
      },
    );

    return { ...data, cacheStatus };
  }
  ```

***

## Storefront API queries

To cache a Storefront API query, pass a cache to the Storefront API client and a `Cache` strategy to the query. Leave cart and customer queries without a strategy, and cache customer-specific work with `createRunWithCache` under a key unique to that customer.

***
