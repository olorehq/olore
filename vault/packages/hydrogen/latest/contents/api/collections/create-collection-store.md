---
title: Collection store
description: >-
  The createCollectionStore function creates a store that holds the customer's
  filter and sort choices for a collection or search page. Use the store to
  change filters and sort from your UI, navigate to the new URL after each
  change, and show a loading state until your loader returns new results.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/collections/create-collection-store
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/collections/create-collection-store.md
api_name: hydrogen
---

# Collection store

The `createCollectionStore` function creates a store that holds the customer's filter and sort choices for a collection or search page. Use the store to change filters and sort from your UI, navigate to the new URL after each change, and show a loading state until your loader returns new results.

In React and Vue apps, use [`CollectionProvider`](https://shopify.dev/docs/api/hydrogen/latest/collections/collection-provider), which creates the store for you.

Import `createCollectionStore`, `createCollectionReconciler`, and `createInitialCollectionState` from `@shopify/hydrogen`.

***

## Filter and sort store

## create​Collection​Store(**[options](#createcollectionstore-propertydetail-options)**​)

Creates a store that holds the customer's filter and sort choices for one collection. Your loader fetches the products.

The store reads its starting filters and sort from `urlSearch`, or from `dataSearch` when you omit `urlSearch`. In React, use `CollectionProvider`, which creates the store for you and keeps the store in sync with the URL.

### Parameters

* **options**

  **CreateCollectionStoreOptions**

  **required**

  The collection data, the current URL search string, and the browse change callback.

### Returns

* **CollectionStore**

  A store with methods that change the filters and sort and report the loading status.

### CreateCollectionStoreOptions

Options for \`createCollectionStore\`.

* data

  The collection handle and the search string that your loader fetched products for.

  ```ts
  CollectionData
  ```

* onBrowseChange

  Runs after each filter or sort change from a store method. Navigate to the new URL in the callback. Syncing from URL params and settling the store don't run the callback.

  ```ts
  () => void
  ```

* urlSearch

  Current URL search string from your router, with or without a leading \`?\`. Defaults to the \`dataSearch\` string from \`data\`.

  ```ts
  string
  ```

### CollectionData

The collection handle and the search string that your loader fetched products for.

* dataSearch

  Search string that your loader used for the Storefront API query, with or without a leading \`?\`. Pass the exact string. The status stays \`loading\` until this string and the URL search hold the same filters, sort key, and sort direction.

  ```ts
  string
  ```

* handle

  Collection handle, such as \`shoes\`. On search pages, pass a handle such as \`search:${term}\` to keep separate filter and sort state for each search term. When the handle changes, the collection provider reads the filters and sort from the URL again.

  ```ts
  string
  ```

### CollectionStore

Holds the customer's filter and sort choices for a collection or search page, and reports when new results are loading. Each change updates the state right away and sets the status to \`loading\`. Your app then navigates, your loader fetches the new products, and you call \`settle()\` when the data arrives. The collection provider navigates and settles the store for you. The store keeps the sort direction only for the price, title, created, and ID sort keys. For other sort keys, \`reverse\` reads \`false\`. The store keeps at most one availability filter. Adding a second availability filter removes both availability filters.

* getFilterRemovalUrl

  Returns a query string with the store's filters and sort, minus the given filter. Use the query string in remove-filter links and buttons. The string starts with \`?\` and leaves out URL params that the store doesn't manage.

  ```ts
  (filter: ProductFilter) => string
  ```

* getState

  Returns the current filter and sort state.

  ```ts
  () => CollectionState
  ```

* handleFormSubmit

  Applies a submitted filter form to the store. The form's filter fields replace the active filters. The sort changes only when the form includes a \`sort\_by\` field. Call \`event.preventDefault()\` first, or the browser submits the form and leaves the page. The method throws a \`TypeError\` when the event target isn't a form element.

  ```ts
  (event: SubmitEvent) => void
  ```

* matchesParams

  Returns \`true\` when the URL search params hold the same filters and sort as the store.

  ```ts
  (searchParams: URLSearchParams) => boolean
  ```

* reset

  Clears all filters, restores the collection's default sort, and sets the status to \`loading\`.

  ```ts
  () => void
  ```

* serializeToParams

  Returns the filters and sort as URL search params. The result holds only the \`filter.\*\` and \`sort\_by\` keys.

  ```ts
  () => URLSearchParams
  ```

* setFilters

  Replaces the active filters and sets the status to \`loading\`.

  ```ts
  (filters: ProductFilter[]) => void
  ```

* setOnBrowseChange

  Sets the callback that runs after each filter or sort change. Navigate to the new URL in the callback. Pass \`null\` to remove the callback.

  ```ts
  (callback: () => void) => void
  ```

* setSortByValue

  Applies the sort key and direction from a Liquid-compatible \`sort\_by\` value, such as \`price-ascending\`. An unrecognized value sets the sort key to \`COLLECTION\_DEFAULT\`.

  ```ts
  (sortByValue: string) => void
  ```

* setSortKey

  Changes the sort key and direction, then sets the status to \`loading\`. Omit \`reverse\` to sort in ascending order.

  ```ts
  (sortKey: ProductCollectionSortKeys, reverse?: boolean) => void
  ```

* settle

  Sets the status to \`idle\`. Call the method when your loader returns the new products.

  ```ts
  () => void
  ```

* subscribe

  Calls the listener on every state change. Returns a function that unsubscribes the listener.

  ```ts
  (listener: (state: CollectionState) => void) => () => void
  ```

* syncFromParams

  Updates the store from URL search params that differ from the current state. Call the method when the URL changes outside the store, such as on back or forward navigation. The method sets the status to \`loading\` and skips the browse change callback.

  ```ts
  (searchParams: URLSearchParams) => void
  ```

* toggleFilter

  Adds the filter when it's inactive and removes the filter when it's active, then sets the status to \`loading\`.

  ```ts
  (filter: ProductFilter) => void
  ```

* toggleFilterInput

  Toggles the filter in a filter value's \`input\` JSON string from the Storefront API. The method does nothing when the string isn't valid JSON.

  ```ts
  (input: string) => void
  ```

### CollectionState

The customer's filter and sort choices and the loading status. Products, product counts, available filters, and the collection ID come from your loader data.

* filters

  Active product filters, matching the \`filter.\*\` URL params.

  ```ts
  ProductFilter[]
  ```

* handle

  Collection handle, such as \`shoes\`.

  ```ts
  string
  ```

* reverse

  \`true\` for a descending sort. The URL's sort value then ends in \`-descending\`.

  ```ts
  boolean
  ```

* sortKey

  Storefront API sort key, or \`undefined\` for the collection's default sort.

  ```ts
  ProductCollectionSortKeys | undefined
  ```

* status

  Reads \`loading\` from a filter or sort change until the store settles, and \`idle\` when the results match the filters and sort. Show a loading state while the value is \`loading\`.

  ```ts
  'idle' | 'loading'
  ```

### Examples

* #### Create a collection store

  ##### Description

  Create the store from loader data and the current URL. This example navigates whenever filters or sort change.

  ##### TypeScript

  ```ts
  import { createCollectionStore } from "@shopify/hydrogen";

  declare const loaderData: { collection: { handle: string; dataSearch: string } };
  declare function navigate(to: { search: string }): Promise<void>;
  declare function renderFilters(filters: unknown[]): void;

  function buildBrowseSearch(): string {
    const params = new URLSearchParams(window.location.search);
    for (const key of Array.from(params.keys())) {
      if (key === "sort_by" || key.startsWith("filter.")) params.delete(key);
    }
    params.delete("before");
    params.delete("after");
    for (const [key, value] of store.serializeToParams()) params.append(key, value);
    return params.toString();
  }

  const store = createCollectionStore({
    data: loaderData.collection,
    urlSearch: window.location.search,
    onBrowseChange: async () => {
      await navigate({ search: buildBrowseSearch() });
      store.settle();
    },
  });

  store.subscribe((state) => renderFilters(state.filters));
  ```

* #### Settle after a filter change

  ##### Description

  Change filters and sort, then settle the store to return its status from \`loading\` to \`idle\`.

  ##### TypeScript

  ```ts
  import { createCollectionStore } from "@shopify/hydrogen";

  const store = createCollectionStore({
    data: { handle: "shoes", dataSearch: "" },
  });

  store.setFilters([{ tag: "sale" }]);
  store.setSortByValue("price-descending");
  console.log(store.getState().status);

  store.settle();
  console.log(store.getState().status);
  ```

***

## URL and loader sync

## create​Collection​Reconciler(**[callbacks](#createcollectionreconciler-propertydetail-callbacks)**​,**[initialPrevUrlSearch](#createcollectionreconciler-propertydetail-initialprevurlsearch)**​)

Creates a reconciler that keeps the URL, your loader data, and a collection store in sync while the customer changes filters and sort.

Use a reconciler to connect a collection store to a router that has no Hydrogen binding. In React, use `CollectionProvider`.

### Parameters

* **callbacks**

  **ReconcilerCallbacks**

  **required**

  The functions that return the store and the URL search string and navigate your router.

* **initial​Prev​Url​Search**

  **string**

  **Default: ""**

  The current URL search string, which the first `reconcile()` call compares against. Defaults to an empty string.

### Returns

* **CollectionReconciler**

  A reconciler. Call `reconcile()` on URL changes, and register `handleBrowseChange()` as the store's browse change callback.

### ReconcilerCallbacks

Functions that connect a collection reconciler to your router and your collection store.

* emitChange

  Navigates your router to the search string. The string starts with \`?\`, or is empty when no params remain.

  ```ts
  (searchString: string) => void
  ```

* getStore

  Returns the collection store.

  ```ts
  () => CollectionStore
  ```

* readUrlSearch

  Returns the current URL search string from your router.

  ```ts
  () => string
  ```

### CollectionReconciler

Keeps the URL, your loader data, and a collection store in sync while the customer changes filters and sort.

* handleBrowseChange

  Builds the next search string from the store's filters and sort, and passes the string to \`emitChange\`. Register the method as the store's browse change callback. The new search string keeps every URL param that the store doesn't manage and drops the \`before\` and \`after\` pagination cursors.

  ```ts
  () => void
  ```

* reconcile

  Brings the store in line with the URL. Call the method each time the URL search or the \`dataSearch\` string changes. The method settles the store when your loader data matches the URL. During rapid filter changes, the method skips intermediate URLs. A URL that the reconciler didn't request counts as external navigation, such as back or forward.

  ```ts
  (urlSearch: string, dataSearch: string) => void
  ```

* reset

  Clears pending navigation. Call the method when you replace the store.

  ```ts
  (newPrevUrlSearch: string) => void
  ```

### Examples

* #### Connect a store to the router

  ##### Description

  Connect a collection store to your router. The reconciler navigates when the customer changes a filter or the sort, and the example calls \`reconcile()\` after each navigation loads new data.

  ##### TypeScript

  ```ts
  import { createCollectionReconciler, createCollectionStore } from "@shopify/hydrogen";

  declare const data: { handle: string; dataSearch: string };
  declare const router: {
    getSearch: () => string;
    navigate: (to: string) => void;
  };

  const store = createCollectionStore({ data, urlSearch: router.getSearch() });
  const reconciler = createCollectionReconciler(
    {
      getStore: () => store,
      readUrlSearch: router.getSearch,
      emitChange: (search) => router.navigate(`${location.pathname}${search}`),
    },
    router.getSearch(),
  );
  store.setOnBrowseChange(() => reconciler.handleBrowseChange());

  export function onRouteLoaded(dataSearch: string) {
    reconciler.reconcile(router.getSearch(), dataSearch);
  }
  ```

***

## Initial state

## create​Initial​Collection​State(**[handle](#createinitialcollectionstate-propertydetail-handle)**​)

Creates collection state with no filters and the default sort for a collection handle.

### Parameters

* **handle**

  **string**

  **required**

  Collection handle, such as `shoes`.

### Returns

* **CollectionState**

  A state with no filters, the collection's default sort, an ascending direction, and an idle status.

### Examples

* #### Create a blank collection state

  ##### Description

  Create a blank state for the \`shoes\` collection. This example serializes the blank state to an empty search string.

  ##### TypeScript

  ```ts
  import { createInitialCollectionState, serializeCollectionParams } from "@shopify/hydrogen";

  const state = createInitialCollectionState("shoes");

  const search = serializeCollectionParams(state).toString();
  ```

***
