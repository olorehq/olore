---
title: Collection URL parameters
description: >-
  The collection URL parameter functions read collection filters and sort from
  the URL and write them back, with the same parameter names that Liquid themes
  use. Use the functions to read filters and sort in a loader, name filter form
  fields, and build sort options.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/collections/collection-url-parameters
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/collections/collection-url-parameters.md
api_name: hydrogen
---

# Collection URL parameters

The collection URL parameter functions read collection filters and sort from the URL and write them back, with the same parameter names that Liquid themes use. Use the functions to read filters and sort in a loader, name filter form fields, and build sort options.

Import `parseCollectionParams`, `serializeCollectionParams`, `normalizeCollectionSearch`, `getSortByValue`, and `parseSortByValue` from `@shopify/hydrogen`.

***

## Parameter parsing

## parse​Collection​Params(**[searchParams](#parsecollectionparams-propertydetail-searchparams)**​)

Reads collection filters and sort from URL search params. Pass the result to your Storefront API collection query.

The function reads Liquid-compatible `filter.p.*` and `filter.v.*` keys and the `sort_by` param.

A URL that sets availability to both in stock and out of stock produces no availability filter. The function recognizes the best-selling and manual sort values, plus created, price, and title with an ascending or descending suffix. For other sort values, the sort key is `undefined`. The `parseSortByValue` function also recognizes relevance, collection default, and ID.

### Parameters

* **search​Params**

  **URLSearchParams**

  **required**

  URL search params to read.

### Returns

* **CollectionParams**

  The filters, sort key, and sort direction from the URL.

### CollectionParams

The filters, sort key, and sort direction in a collection URL.

* filters

  Active product filters from the \`filter.\*\` URL params. The filters use the Storefront Standard Events filter type. When your query variables use generated Storefront API types, cast the filters to the generated filter type where you pass them as variables.

  ```ts
  ProductFilter[]
  ```

* reverse

  \`true\` when the \`sort\_by\` value ends with \`-descending\`.

  ```ts
  boolean
  ```

* sortKey

  Storefront API sort key from the \`sort\_by\` param, or \`undefined\` when the param is missing or unrecognized.

  ```ts
  ProductCollectionSortKeys | undefined
  ```

### Examples

* #### Parse filters and sort in a loader

  ##### Description

  Parse filters and sort from the request URL and pass them to a Storefront API collection query.

  ##### TypeScript

  ```ts
  import { parseCollectionParams } from "@shopify/hydrogen";

  declare const storefrontClient: {
    graphql(query: string, options: { variables: Record<string, unknown> }): Promise<unknown>;
  };
  declare const COLLECTION_QUERY: string;

  export async function loader({ request, params }: { request: Request; params: { handle: string } }) {
    const url = new URL(request.url);
    const browse = parseCollectionParams(url.searchParams);

    const data = await storefrontClient.graphql(COLLECTION_QUERY, {
      variables: {
        handle: params.handle,
        first: 24,
        filters: browse.filters.length > 0 ? browse.filters : undefined,
        sortKey: browse.sortKey,
        reverse: browse.reverse || undefined,
      },
    });

    return { data, dataSearch: url.searchParams.toString() };
  }
  ```

***

## Parameter serialization

## serialize​Collection​Params(**[state](#serializecollectionparams-propertydetail-state)**​)

Converts collection filters and sort to URL search params with Liquid-compatible keys. Use the result to build collection URLs.

The result holds only the `filter.*` and `sort_by` keys. The function leaves out `sort_by` for the collection's default sort.

Category filters convert to `filter.p.category`, which `parseCollectionParams` doesn't read. A price filter with a minimum and a maximum produces two params. To build a filter checkbox, parse a filter value's `input` string and convert the parsed filter. The resulting entries give the checkbox name and value.

### Parameters

* **state**

  **Pick\<CollectionState, "reverse" | "filters" | "sortKey">**

  **required**

  The filters, sort key, and sort direction to convert.

### Returns

* **URLSearchParams**

  URL search params that hold the filters and sort.

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

* #### Derive a checkbox name and value

  ##### Description

  Turn a Storefront API filter input JSON string into form field entries.

  ##### TypeScript

  ```ts
  import { serializeCollectionParams, type ProductFilter } from "@shopify/hydrogen";

  export function filterValueInputParamEntries(input: string) {
    let filter: ProductFilter;
    try {
      filter = JSON.parse(input) as ProductFilter;
    } catch {
      return [];
    }

    return Array.from(
      serializeCollectionParams({ filters: [filter], sortKey: undefined, reverse: false }),
      ([name, value]) => ({ name, value }),
    );
  }
  ```

***

## Search string normalization

## normalize​Collection​Search(**[search](#normalizecollectionsearch-propertydetail-search)**​)

Removes a leading `?` from a search string. Normalize search strings before you compare them.

### Parameters

* **search**

  **string**

  **required**

  The search string from your router, with or without a leading `?`.

### Returns**string**

* The search string without a leading `?`.

### Examples

* #### Compare router and data searches

  ##### Description

  Update a collection store from the URL. This example normalizes the router and loader search strings and settles the store when the two strings match.

  ##### TypeScript

  ```ts
  import { normalizeCollectionSearch, type CollectionStore } from "@shopify/hydrogen";

  export function syncStore(store: CollectionStore, urlSearch: string, dataSearch: string) {
    const normalizedUrlSearch = normalizeCollectionSearch(urlSearch);
    const params = new URLSearchParams(normalizedUrlSearch);

    if (!store.matchesParams(params)) {
      store.syncFromParams(params);
    }

    if (normalizeCollectionSearch(dataSearch) === normalizedUrlSearch) {
      store.settle();
    }
  }
  ```

***

## Sort values

## get​Sort​By​Value(**[sortKey](#getsortbyvalue-propertydetail-sortkey)**​,**[reverse](#getsortbyvalue-propertydetail-reverse)**​)

Converts a Storefront API sort key and direction to a Liquid-compatible `sort_by` value, such as `price-ascending` or `best-selling`.

Only the price, title, created, and ID sort keys get a direction suffix. Other sort keys, such as best selling, ignore the direction.

### Parameters

* **sort​Key**

  **ProductCollectionSortKeys**

  **required**

  Storefront API product collection sort key.

* **reverse**

  **boolean**

  **required**

  `true` for descending, `false` for ascending.

### Returns**string**

* The value for the `sort_by` URL param.

## parse​Sort​By​Value(**[value](#parsesortbyvalue-propertydetail-value)**​)

Converts a Liquid-compatible `sort_by` value to a Storefront API sort key and direction. The `getSortByValue` function does the opposite conversion.

For unrecognized values, the sort key is `undefined`.

### Parameters

* **value**

  **string**

  **required**

  A `sort_by` value, such as `price-ascending` or `best-selling`.

### Returns

* **{ sortKey: ProductCollectionSortKeys | undefined; reverse: boolean; }**

  The sort key and `reverse`, which reads `true` for descending values.

### Examples

* #### Build sort options

  ##### Description

  Create labeled sort options for a collection sort select.

  ##### TypeScript

  ```ts
  import { getSortByValue } from "@shopify/hydrogen";

  export const COLLECTION_SORT_OPTIONS = [
    { label: "Featured", value: "" },
    { label: "Best selling", value: getSortByValue("BEST_SELLING", false) },
    { label: "Alphabetically, A-Z", value: getSortByValue("TITLE", false) },
    { label: "Alphabetically, Z-A", value: getSortByValue("TITLE", true) },
    { label: "Price, low to high", value: getSortByValue("PRICE", false) },
    { label: "Price, high to low", value: getSortByValue("PRICE", true) },
    { label: "Date, old to new", value: getSortByValue("CREATED", false) },
    { label: "Date, new to old", value: getSortByValue("CREATED", true) },
  ];
  ```

***
