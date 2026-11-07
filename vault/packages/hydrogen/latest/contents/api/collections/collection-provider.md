---
title: Collection provider
description: >-
  The CollectionProvider component holds the customer's filter and sort choices
  for a collection page in React and Vue apps, and keeps the choices in sync
  with the URL. Read the choices with useCollection, change filters and sort
  with useCollectionActions, and handle filter form submissions with
  useCollectionForm.
api_version: 2026-10
source_url:
  html: 'https://shopify.dev/docs/api/hydrogen/latest/collections/collection-provider'
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/collections/collection-provider.md
api_name: hydrogen
---

# Collection provider

The `CollectionProvider` component holds the customer's filter and sort choices for a collection page in React and Vue apps, and keeps the choices in sync with the URL. Read the choices with `useCollection`, change filters and sort with `useCollectionActions`, and handle filter form submissions with `useCollectionForm`.

In frameworks without a Hydrogen binding, use [`createCollectionStore`](https://shopify.dev/docs/api/hydrogen/latest/collections/create-collection-store).

To build filter, sort, and pagination for collection and search pages, refer to [Build collection and search pages](https://shopify.dev/docs/storefronts/hydrogen/collections-search).

Import `CollectionProvider`, `useCollection`, `useCollectionActions`, and `useCollectionForm` from `@shopify/hydrogen/react` or `@shopify/hydrogen/vue`.

***

## Properties

Props for `CollectionProvider`.

* **data**

  **CollectionData**

  **required**

  The collection handle and the search string that your loader fetched products for.

* **children**

  **ReactNode**

  Content that reads and changes collection state through the collection hooks.

* **on​Change**

  **(searchString: string) => void**

  Receives the new search string after the customer changes filters or sort. Navigate to the search string with your router.

  The search string starts with `?`, or is empty when no params remain.

* **url​Search**

  **string**

  Current URL search string from your router, with or without a leading `?`. Defaults to an empty string. The provider reads the starting filters and sort from the string. When the string changes, including on back and forward navigation, the provider updates the filters and sort.

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

### Examples

* #### Wrap a collection route in React

  ##### Description

  Pass loader data and the current search string to the provider. This example keeps the scroll position when the customer changes filters.

  ##### React

  ```tsx
  import { CollectionProvider } from "@shopify/hydrogen/react";
  import type { ReactNode } from "react";
  import { useNavigate, useSearchParams } from "react-router";

  export function CollectionRoute({
    handle,
    dataSearch,
    children,
  }: {
    handle: string;
    dataSearch: string;
    children: ReactNode;
  }) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    return (
      <CollectionProvider
        data={{ handle, dataSearch }}
        urlSearch={searchParams.toString()}
        onChange={(search) =>
          navigate({ search }, { replace: searchParams.size > 0, preventScrollReset: true })
        }
      >
        {children}
      </CollectionProvider>
    );
  }
  ```

* #### Wrap a collection page in Vue

  ##### Description

  Pass collection data and the current search string to the provider. This example replaces the route on each \`change\` event.

  ##### Vue

  ```vue
  <script setup lang="ts">
  import { CollectionProvider, type CollectionData } from "@shopify/hydrogen/vue";
  import { useRoute, useRouter } from "vue-router";

  const props = defineProps<{ data: CollectionData; urlSearch: string }>();
  const route = useRoute();
  const router = useRouter();

  const onChange = (search: string) => router.replace(`${route.path}${search}`);
  </script>

  <template>
    <CollectionProvider :data="props.data" :url-search="props.urlSearch" @change="onChange">
      <slot />
    </CollectionProvider>
  </template>
  ```

***

## Filter and sort state

## use​Collection(**[selector](#usecollection-propertydetail-selector)**​,**[isEqual](#usecollection-propertydetail-isequal)**​)

Returns the customer's filter and sort choices and the loading status, and re-renders the component when the state changes. The hook throws outside `CollectionProvider`.

With a selector, the hook returns the selected value and re-renders the component when the selected value changes. Pass an `isEqual` comparator to skip re-renders for equal values. The hook throws outside `CollectionProvider`.

### Parameters

* **selector**

  **(state: CollectionState) => S**

  The function that derives the returned value from the collection state.

* **is​Equal**

  **(a: S, b: S) => boolean**

  The comparator that skips a re-render when it returns `true` for two derived values.

### Returns

* **CollectionState | S**

  The collection state, or the selector's value when you pass a selector.

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

***

## Filter and sort actions

## use​Collection​Actions()

Returns methods that change the filters and sort. After each change, `CollectionProvider` passes the new search string to its `onChange` callback.

The hook throws outside `CollectionProvider`.

### Returns

* **CollectionActions**

  Methods that set, toggle, and reset filters, change the sort, and apply submitted filter forms.

### CollectionActions

Collection store methods that change the filters and sort. The \`useCollectionActions\` hook returns these methods.

* handleFormSubmit

  Applies a submitted filter form to the store. The form's filter fields replace the active filters. The sort changes only when the form includes a \`sort\_by\` field. Call \`event.preventDefault()\` first, or the browser submits the form and leaves the page. The method throws a \`TypeError\` when the event target isn't a form element.

  ```ts
  (event: SubmitEvent) => void
  ```

* reset

  Clears all filters, restores the collection's default sort, and sets the status to \`loading\`.

  ```ts
  () => void
  ```

* setFilters

  Replaces the active filters and sets the status to \`loading\`.

  ```ts
  (filters: ProductFilter[]) => void
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

### Examples

* #### Change sort and filters

  ##### Description

  Render buttons that sort by price, toggle a tag filter, and reset filters and sort.

  ##### React

  ```tsx
  import { useCollectionActions } from "@shopify/hydrogen/react";

  export function BrowseControls() {
    const { setSortByValue, toggleFilter, reset } = useCollectionActions();

    return (
      <div>
        <button type="button" onClick={() => setSortByValue("price-descending")}>
          Price, high to low
        </button>
        <button type="button" onClick={() => toggleFilter({ tag: "sale" })}>
          On sale
        </button>
        <button type="button" onClick={() => reset()}>
          Clear all
        </button>
      </div>
    );
  }
  ```

***

## Filter form

## use​Collection​Form()

Returns props that make a collection filter form update the results without a full page load.

Spread the result of `formProps()` on the form. On submit, the props cancel the browser submission and apply the form's filter and sort fields. The `beforeSubmit` callback runs first, and calling `preventDefault()` in `beforeSubmit` skips the update. The `afterSubmit` callback runs after the update.

Render the form with `method="get"` and an explicit `action`, which keeps the form working before JavaScript loads. On search pages, keep `q` as a hidden input inside the form. The hook throws outside `CollectionProvider`.

### Examples

* #### Enhance a filter form

  ##### Description

  Spread \`formProps()\` on a GET form and submit a tag checkbox on change.

  ##### React

  ```tsx
  import { useCollection, useCollectionForm } from "@shopify/hydrogen/react";

  export function FilterForm({ collectionPath }: { collectionPath: string }) {
    const state = useCollection();
    const { formProps } = useCollectionForm();

    return (
      <form {...formProps()} method="get" action={collectionPath}>
        <label>
          <input
            type="checkbox"
            name="filter.p.tag"
            value="sale"
            checked={state.filters.some((filter) => filter.tag === "sale")}
            onChange={(event) => event.currentTarget.form?.requestSubmit()}
          />
          On sale
        </label>
        <noscript>
          <button type="submit">Apply</button>
        </noscript>
      </form>
    );
  }
  ```

***

## Vue bindings

* The provider takes a `url-search` prop, emits a `change` event with the search string, and renders its default slot.
* `useCollection` returns a read-only shallow ref. The ref keeps updating when the customer moves to another collection.
* The `beforeSubmit` and `afterSubmit` callbacks of `useCollectionForm` receive the native submit event.

***
