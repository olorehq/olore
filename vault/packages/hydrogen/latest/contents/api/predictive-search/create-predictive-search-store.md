---
title: Predictive search store
description: >-
  The createPredictiveSearchStore function creates a store that searches as the
  customer types and holds the latest results. Use the store to build
  search-as-you-type UI in DOM code or in UI frameworks without Hydrogen
  bindings.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/predictive-search/create-predictive-search-store
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/predictive-search/create-predictive-search-store.md
api_name: hydrogen
---

# Predictive search store

The `createPredictiveSearchStore` function creates a store that searches as the customer types and holds the latest results. Use the store to build search-as-you-type UI in DOM code or in UI frameworks without Hydrogen bindings.

React and Vue apps use [`PredictiveSearchProvider`](https://shopify.dev/docs/api/hydrogen/latest/predictive-search/predictive-search-provider).

Import `createPredictiveSearchStore` from `@shopify/hydrogen`.

***

## Store setup

## create​Predictive​Search​Store(**[options](#createpredictivesearchstore-propertydetail-options)**​)

Creates a store that searches as the customer types and holds the latest predictive search results. Use the store in DOM code or in UI frameworks without Hydrogen bindings. In React and Vue, use `PredictiveSearchProvider`.

Call `search()` with each new term, read results with `getState()` or `subscribe()`, and call `destroy()` when the search UI unmounts. By default, the store requests results from the route that `createPredictiveSearchServerHandlers` serves.

The function throws an error when you omit the `fetch` option in a runtime without a global `fetch`.

### Parameters

* **options**

  **CreatePredictiveSearchStoreOptions**

  **Default: {}**

  Endpoint, timing, and search settings for the store.

### Returns

* **PredictiveSearchStore\<TData extends PredictiveSearchData = PredictiveSearchData>**

  A store with no term and empty results, ready to search.

### CreatePredictiveSearchStoreOptions

Endpoint, timing, and search settings for a predictive search store. The store sends each search setting to the endpoint as a URL parameter of the same name. The server handlers apply their own defaults to omitted settings.

* debounceInMs

  Milliseconds to wait after the latest term change before searching. Defaults to \`150\`. Pass \`0\` to search right away. Negative and non-finite values use the default.

  ```ts
  number
  ```

* fetch

  Function that sends search requests. Defaults to the global \`fetch\`. Pass a function for tests or for runtimes without a global \`fetch\`.

  ```ts
  { (input: RequestInfo | URL, init?: RequestInit): Promise<Response>; (input: string | Request | URL, init?: RequestInit): Promise<Response>; }
  ```

* limit

  Maximum number of results, from 1 to 10. The server handlers clamp other values to that range.

  ```ts
  number
  ```

* limitScope

  Whether the limit applies to each result type or to all result types combined.

  ```ts
  PredictiveSearchLimitScope
  ```

* minTermLength

  Number of characters a term needs, after trimming, before the store searches. Defaults to \`1\`. Negative and non-finite values use the default.

  ```ts
  number
  ```

* predictiveSearchEndpoint

  Route that returns predictive search results as JSON, in the shape that \`createPredictiveSearchServerHandlers\` returns. Defaults to \`/api/predictive-search\`.

  ```ts
  string
  ```

* searchableFields

  Fields to search for page, article, and collection results.

  ```ts
  SearchableField[]
  ```

* types

  Result types to include.

  ```ts
  PredictiveSearchType[]
  ```

* unavailableProducts

  Whether results hide unavailable products, show them, or list them last.

  ```ts
  SearchUnavailableProductsType
  ```

### PredictiveSearchStore

Holds the search term, status, and results, and runs searches as the customer types.

* clear

  Cancels any pending search and returns the store to the idle state with no term and empty results. Call \`clear()\` when the customer closes the search UI.

  ```ts
  () => void
  ```

* connect

  Restarts a store after \`destroy()\`. A new store doesn't need this call.

  ```ts
  () => void
  ```

* destroy

  Stops the store. Call \`destroy()\` when the search UI unmounts. The store cancels any pending search, keeps its current state, and ignores searches until you call \`connect()\`.

  ```ts
  () => void
  ```

* getState

  Returns the current search term, status, results, and error.

  ```ts
  () => PredictiveSearchState<TData>
  ```

* search

  Searches for a term after the debounce delay. Call the method on every keystroke. Each call cancels the previous pending search. A term shorter than the minimum length, after trimming, returns the store to \`idle\` with empty results. Otherwise, the status changes to \`loading\` until the search ends with \`success\` or \`error\`. Responses for earlier terms never replace newer results. The returned promise resolves when the search ends, or when a later search, \`clear()\`, or \`destroy()\` cancels the search.

  ```ts
  (term: string) => Promise<void>
  ```

* subscribe

  Calls your function with the new state on every change. Returns a function that stops the calls.

  ```ts
  (listener: (state: PredictiveSearchState<TData>) => void) => () => void
  ```

### PredictiveSearchState

Current search term, status, results, and error of a predictive search.

* error

  Message from the latest failed search, or \`null\` when the current search hasn't failed. A custom endpoint sets the message with a JSON body of \`{error: {message}}\`.

  ```ts
  string | null
  ```

* result

  Results of the latest successful search. Previous results stay in place while a new search loads and after a search fails. The idle state holds empty results.

  ```ts
  TData
  ```

* status

  Status of the search for the current term.

  ```ts
  PredictiveSearchStatus
  ```

* term

  Latest search term, without surrounding whitespace.

  ```ts
  string
  ```

### PredictiveSearchStatus

Status of the current search.

```ts
"idle" | "loading" | "success" | "error"
```

### PredictiveSearchData

Predictive search results, with the search term and the result count. The type parameter sets the shape of the results and defaults to the results of Hydrogen's built-in query. For a custom query, use the awaited return type of \`queryPredictiveSearch\` for that query.

* items

  Results grouped by type.

  ```ts
  TItems
  ```

* term

  Search term for the results, without surrounding whitespace.

  ```ts
  string
  ```

* total

  Number of results in the response across every result type, including query suggestions. The count leaves out matches beyond the limit.

  ```ts
  number
  ```

### Examples

* #### Create a predictive search store

  ##### Description

  Create a store that searches products and query suggestions. This example logs product results and errors as the results arrive, then stops listening and destroys the store.

  ##### TypeScript

  ```ts
  import { createPredictiveSearchStore } from "@shopify/hydrogen";

  const store = createPredictiveSearchStore({
    debounceInMs: 200,
    minTermLength: 2,
    limit: 5,
    types: ["PRODUCT", "QUERY"],
  });

  const unsubscribe = store.subscribe((state) => {
    if (state.status === "error") console.error(state.error);
    if (state.status === "success") console.log(state.result.items.products);
  });

  await store.search("snowboard");

  unsubscribe();
  store.destroy();
  ```

***
