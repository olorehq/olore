---
title: Collection filters
description: >-
  The collection filter functions help you build filter controls for a
  collection page. Use the functions to check the boxes for active filters,
  match a filter from the URL against a filter from the Storefront API, and
  build links that remove one filter.
api_version: 2026-10
source_url:
  html: 'https://shopify.dev/docs/api/hydrogen/latest/collections/collection-filters'
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/collections/collection-filters.md
api_name: hydrogen
---

# Collection filters

The collection filter functions help you build filter controls for a collection page. Use the functions to check the boxes for active filters, match a filter from the URL against a filter from the Storefront API, and build links that remove one filter.

Import `filterEquals`, `isFilterInputActive`, and `getFilterRemovalUrl` from `@shopify/hydrogen`.

***

## Filter matching

## filter​Equals(**[a](#filterequals-propertydetail-a)**​,**[b](#filterequals-propertydetail-b)**​)

Checks whether two product filters match.

Price filters match when the minimum and maximum are equal, including ranges that set only one bound.

### Parameters

* **a**

  **ProductFilter**

  **required**

  The first filter to compare.

* **b**

  **ProductFilter**

  **required**

  The second filter to compare.

### Returns**boolean**

* `true` when both filters are the same kind with the same values. `false` for different kinds or unrecognized filters.

### Examples

* #### Compare filters

  ##### Description

  Match a price filter from the URL against a price filter in the Storefront API input format. This example also compares a tag filter with a vendor filter.

  ##### TypeScript

  ```ts
  import { filterEquals, parseCollectionParams } from "@shopify/hydrogen";

  const fromUrl = parseCollectionParams(
    new URLSearchParams("filter.v.price.gte=10&filter.v.price.lte=100"),
  ).filters[0];
  const fromApi = { price: { min: 10, max: 100 } };

  const samePrice = filterEquals(fromUrl, fromApi);
  const differentKind = filterEquals({ tag: "men" }, { productVendor: "Nike" });
  ```

***

## Active filters

## is​Filter​Input​Active(**[activeFilters](#isfilterinputactive-propertydetail-activefilters)**​,**[input](#isfilterinputactive-propertydetail-input)**​)

Checks whether a filter value's `input` JSON string from the Storefront API matches an active filter. Use the result to set the checked state of a filter control.

The function compares filters the same way as `filterEquals`.

### Parameters

* **active​Filters**

  **ProductFilter\[]**

  **required**

  The active filters, such as `filters` from the collection state.

* **input**

  **string**

  **required**

  The filter value's `input` JSON string.

### Returns**boolean**

* `true` when the parsed input matches an active filter. `false` when the input matches no active filter or isn't valid JSON.

#### AvailableFilter

A filter that the Storefront API returns for the current collection or search results. Render filter controls, such as checkboxes, swatches, and sliders, from the filter's values.

* **id**

  **string**

  **required**

  ID of the filter.

* **label**

  **string**

  **required**

  Name to display, such as "Color", "Size", or "Price".

* **type**

  **FilterType**

  **required**

  Kind of input, such as a boolean toggle, a multi-select list, or a price range.

* **values**

  **AvailableFilterValue\<TValue>\[]**

  **required**

  Values that a customer can select, each with a label, a product count, and a filter input.

* **presentation**

  **FilterPresentation | null**

  How the storefront displays the filter's values. The Storefront API returns a value only for `LIST` filters and `null` for other filters.

### FilterPresentation

How the storefront displays a filter's values.

```ts
"IMAGE" | "SWATCH" | "TEXT"
```

### FilterType

The kind of input a filter takes, such as a boolean toggle, a multi-select list, or a price range.

```ts
"BOOLEAN" | "LIST" | "PRICE_RANGE" | (string & {})
```

### AvailableFilterValue

A value that a customer can select within an available filter. Pass your Storefront API query's value type as \`TValue\` to include the \`swatch\` field when your query selects it.

```ts
BaseAvailableFilterValue & PickIfPresent<TValue, "swatch">
```

### BaseAvailableFilterValue

The ID, label, product count, and filter input that every filter value has.

* count

  Number of products in the current results that match the value.

  ```ts
  number
  ```

* id

  ID of the filter value.

  ```ts
  string
  ```

* input

  Filter input as a JSON string. Pass the string to \`toggleFilterInput()\` or \`isFilterInputActive\`.

  ```ts
  string
  ```

* label

  Label to display, such as "Red" or "Nike".

  ```ts
  string
  ```

### PickIfPresent

Copies a field from your query's value type when your query selects the field. Otherwise, the type adds no fields.

```ts
TKey extends keyof TValue
  ? Pick<TValue, TKey>
  : {}
```

### Examples

* #### Check a filter checkbox

  ##### Description

  Compute the label, product count, and checked state for every available filter value.

  ##### TypeScript

  ```ts
  import { isFilterInputActive, type AvailableFilter, type CollectionState } from "@shopify/hydrogen";

  declare const state: CollectionState;
  declare const availableFilters: AvailableFilter[];

  const checkboxes = availableFilters.flatMap((filter) =>
    filter.values.map((value) => ({
      label: value.label,
      count: value.count,
      checked: isFilterInputActive(state.filters, value.input),
    })),
  );
  ```

***

## Filter removal links

## get​Filter​Removal​Url(**[currentParams](#getfilterremovalurl-propertydetail-currentparams)**​,**[filter](#getfilterremovalurl-propertydetail-filter)**​)

Builds a query string from the current URL params, minus the given filter. Use the string in plain remove-filter links.

The function keeps every other param and drops the `before` and `after` pagination cursors, which sends the customer to the first page of results.

### Parameters

* **current​Params**

  **URLSearchParams**

  **required**

  The current URL search params.

* **filter**

  **ProductFilter**

  **required**

  The filter to remove from the URL.

### Returns**string**

* A query string that starts with `?`. The string is `?` alone when no params remain.

### Examples

* #### Build a remove-filter link

  ##### Description

  Build the link for an active filter chip. This example links to the collection path when no parameters remain.

  ##### TypeScript

  ```ts
  import {
    getFilterRemovalUrl,
    serializeCollectionParams,
    type CollectionState,
    type ProductFilter,
  } from "@shopify/hydrogen";

  export function filterRemovalHref(
    collectionPath: string,
    state: CollectionState,
    filter: ProductFilter,
  ) {
    const currentParams = serializeCollectionParams(state);
    const removal = getFilterRemovalUrl(currentParams, filter);
    return removal === "?" ? collectionPath : `${collectionPath}${removal}`;
  }
  ```

***
