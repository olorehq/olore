---
title: Predictive search server handlers
description: >-
  The predictive search server functions get predictive search results from the
  Storefront API. Use these functions to serve the route that your search UI
  calls, run predictive search in a loader, and add fields to each result type.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/predictive-search/predictive-search-server-handlers
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/predictive-search/predictive-search-server-handlers.md
api_name: hydrogen
---

# Predictive search server handlers

The predictive search server functions get predictive search results from the Storefront API. Use these functions to serve the route that your search UI calls, run predictive search in a loader, and add fields to each result type.

Import `createPredictiveSearchServerHandlers`, `queryPredictiveSearch`, and `makePredictiveSearchQueries` from `@shopify/hydrogen`.

***

## Search route

## create​Predictive​Search​Server​Handlers(**[options](#createpredictivesearchserverhandlers-propertydetail-options)**​)

Creates the route that answers predictive search requests from the browser. Register the handlers with `handleShopifyRoutes`. The default route path matches the default endpoint of `createPredictiveSearchStore` and `PredictiveSearchProvider`.

The route reads the search term from the `q` URL parameter. A URL parameter with the same name as a search setting overrides the setting's default.

An invalid setting value or a failed Storefront API query returns HTTP status `400` with a JSON body of `{error: {code, message}}`. The `code` value is `invalid_predictive_search_request`. A successful response forwards the Storefront API response headers except the content encoding, content length, and server timing headers.

### Parameters

* **options**

  **CreatePredictiveSearchServerHandlersOptions**

  **Default: {}**

  Route path, custom fragments, and default search settings for the route.

### Returns

* **PredictiveSearchServerHandlers\<CreatePredictiveSearchServerHandlersOptions>**

  Route handlers to pass to `handleShopifyRoutes`.

### CreatePredictiveSearchServerHandlersOptions

Route path, custom fragments, and default search settings for the predictive search route. A request overrides a default search setting with a URL parameter of the same name.

* fragments

  Fragments that add fields to each result type. Results keep Hydrogen's built-in fields.

  ```ts
  TFragments
  ```

* limit

  Default maximum number of results, from 1 to 10. Applies when a request has no numeric \`limit\` parameter. Predictive search clamps other values to that range. Defaults to \`5\`.

  ```ts
  number
  ```

* limitScope

  Default limit scope. Defaults to \`EACH\`.

  ```ts
  PredictiveSearchLimitScope
  ```

* path

  Route path that the GET handler serves. Defaults to \`/api/predictive-search\`.

  ```ts
  string
  ```

* searchableFields

  Default fields to search. A request can set \`searchableFields\` to a comma-separated list.

  ```ts
  SearchableField[]
  ```

* types

  Default result types. A request can set \`types\` to a comma-separated list.

  ```ts
  PredictiveSearchType[]
  ```

* unavailableProducts

  Default handling of unavailable products. Defaults to \`HIDE\`.

  ```ts
  SearchUnavailableProductsType
  ```

### PredictiveSearchServerHandlers

Predictive search route handlers to pass to \`handleShopifyRoutes\`.

* \_\_@predictiveSearchServerHandlersQuery\@26435

  Query that the handlers run, with any custom fragments.

  ```ts
  PredictiveSearchQueryForOptions<TOptions>
  ```

* get

  Answers GET requests with predictive search results as JSON.

  ```ts
  PredictiveSearchGetHandler<TData>
  ```

### PredictiveSearchQueryForOptions



### PredictiveSearchGetHandler



### Examples

* #### Register the predictive search route

  ##### Description

  Create product-only predictive search handlers and register them with \`handleShopifyRoutes\`. This example serves \`/api/predictive-search\`, the route that the predictive search store and provider call by default.

  ##### TypeScript

  ```ts
  import { createPredictiveSearchServerHandlers, handleShopifyRoutes } from "@shopify/hydrogen";

  type ShopifyRoutesOptions = Parameters<typeof handleShopifyRoutes>[0];

  const predictiveSearchHandlers = createPredictiveSearchServerHandlers({
    types: ["PRODUCT"],
  });

  export function handleRoutes(options: Omit<ShopifyRoutesOptions, "handlers">) {
    return handleShopifyRoutes({
      ...options,
      handlers: [predictiveSearchHandlers],
    });
  }
  ```

* #### Add fields with a custom fragment

  ##### Description

  Add each product's \`vendor\` to the default predictive search fields. This example passes a product fragment to the route handlers.

  ##### TypeScript

  ```ts
  import { createPredictiveSearchServerHandlers, gql } from "@shopify/hydrogen";

  export const predictiveSearchHandlers = createPredictiveSearchServerHandlers({
    fragments: {
      product: gql(`
        fragment PredictiveSearchProductFragment on Product {
          vendor
        }
      `),
    },
  });
  ```

***

## Server-side queries

## query​Predictive​Search(**[options](#querypredictivesearch-propertydetail-options)**​)

Queries the Storefront API for predictive search results. Use the function in server code, such as a route loader. Pass the Storefront client and the search term.

The function throws an error when the Storefront API returns GraphQL errors or no predictive search data. Network failures and aborts from the Storefront client also throw.

To serve results to the browser with the Storefront API response headers, use `createPredictiveSearchServerHandlers`.

### Parameters

* **options**

  **QueryPredictiveSearchOptions\<PredictiveSearchQueryForOptions\<undefined>>**

  **required**

  The Storefront client, the search term, a custom query, and search settings.

### Returns

* **Promise\<PredictiveSearchData>**

  The search term, the result count, and the results grouped by type.

### QueryPredictiveSearchOptions

Storefront client, search term, custom query, and search settings for \`queryPredictiveSearch\`.

* limit

  Maximum number of results, from 1 to 10. Predictive search clamps other values to that range. Defaults to \`5\`, which differs from the Storefront API default of 10.

  ```ts
  number
  ```

* limitScope

  Whether the limit applies to each result type or to all result types combined. Defaults to \`EACH\`.

  ```ts
  PredictiveSearchLimitScope
  ```

* query

  Custom query, usually from \`makePredictiveSearchQueries\`. Defaults to Hydrogen's built-in query. A hand-written query receives the term, limit, limit scope, types, searchable fields, and unavailable products as variables.

  ```ts
  TQuery
  ```

* searchableFields

  Fields to search for page, article, and collection results. Defaults to the title. Product results always search every product field.

  ```ts
  SearchableField[]
  ```

* signal

  Cancels the request when the signal aborts.

  ```ts
  AbortSignal
  ```

* storefrontClient

  Storefront client that sends the query. Any object with a \`graphql()\` method works.

  ```ts
  Pick<StorefrontClient, "graphql">
  ```

* term

  Search term. A blank term returns empty results without a Storefront API request.

  ```ts
  string
  ```

* types

  Result types to include.

  ```ts
  PredictiveSearchType[]
  ```

* unavailableProducts

  Whether results hide unavailable products, show them, or list them last. Defaults to \`HIDE\`, which differs from the Storefront API default of \`LAST\`.

  ```ts
  SearchUnavailableProductsType
  ```

### StorefrontClient

A Storefront API client. Call \`graphql()\` with a document to run a query or mutation and get a typed result.

* apiUrl

  The Storefront API GraphQL endpoint that the client calls.

  ```ts
  string
  ```

* graphql

  Runs a Storefront API query or mutation and returns a typed result. Pass a \`gql\` document or a plain query string. When the operation declares \`$country\` or \`$language\`, the client sets the variable from the request context and overrides any value you pass. The method throws an error when a query passes a \`cache\` strategy and the client has no cache, or when the strategy uses \`private\` mode. A catch block for \`StorefrontApiError\` doesn't catch this configuration error. To cache customer-specific data, use \`createRunWithCache\` with a key unique to the customer.

  ```ts
  <const Doc extends DocLike | string>(doc: Doc, ...options: GqlRestParam<ResolveDoc<Doc>, Extra>) => Promise<StorefrontGraphqlResult<ResolveDoc<Doc>>>
  ```

* i18n

  The country and language that the client sends for \`$country\` and \`$language\` variables.

  ```ts
  RequestContext["i18n"]
  ```

* requestContext

  The request context that you passed to \`createStorefrontClient\`.

  ```ts
  RequestContext
  ```

* storefrontId

  The storefront ID from the client options.

  ```ts
  string
  ```

* storeUrl

  Your store's URL with its protocol, such as \`https://my-store.myshopify.com\`.

  ```ts
  string
  ```

* type

  The client type that you passed to \`createStorefrontClient\`.

  ```ts
  Type
  ```

### DocLike

A document that the client's GraphQL method accepts, from \`gql\` or from \`gql\`.tada.

```ts
TadaDocumentNode<any, any> | AnyStorefrontQueryString
```

### AnyStorefrontQueryString

Any \`gql\` document, whatever its result and variables types. Use the type to accept any Storefront API document.

```ts
string & StorefrontQueryMetadata
```

### StorefrontQueryMetadata

Type-only properties that mark a string as a \`gql\` document.

* \_\_hydrogenQueryBrand

  Marks a string that \`gql\` returns. The property exists only in types.

  ```ts
  true
  ```

* \_\_hydrogenQuerySource

  The document's query text, which TypeScript reads to infer types. The property exists only in types.

  ```ts
  Source
  ```

### GqlRestParam

The options argument of a GraphQL call. Pass the options argument when the document declares a required variable. You can leave the options argument out when every variable is optional, or when the only required variables are \`$country\` and \`$language\`, which the client fills.

```ts
HasNoRequiredKeys<MergedOptions<Doc, GraphqlExtraOptionsForDoc<Doc, Extra>>> extends true
    ? [options?: MergedOptions<Doc, GraphqlExtraOptionsForDoc<Doc, Extra>>]
    : [options: MergedOptions<Doc, GraphqlExtraOptionsForDoc<Doc, Extra>>]
```

### HasNoRequiredKeys

Resolves to \`true\` when an object type has no required keys.

```ts
Record<string, never> extends T ? true : false
```

### MergedOptions

The options for a GraphQL call. The call needs \`variables\` only when the document declares a required variable.

```ts
Extra & StorefrontGraphqlOptions & (HasNoRequiredKeys<UserVariables<Doc>> extends true
    ? { variables?: UserVariables<Doc> }
    : { variables: UserVariables<Doc> })
```

### StorefrontGraphqlOptions

Options that every Storefront API GraphQL call accepts.

* signal

  Cancels the request when the signal aborts. The request context's signal and the client timeout also cancel the request. The signal doesn't cancel a stale-while-revalidate refresh.

  ```ts
  AbortSignal
  ```

### UserVariables

The variables that you pass for a document, without \`country\` and \`language\`. The client fills both from the request context.



### VariablesOfDoc

The variables that a Customer Account document declares.

```ts
Doc extends CustomerAccountDocument<unknown, infer Variables, string> ? Variables : never
```

### CustomerAccountDocument

A Customer Account API query or mutation that \`gql\` from \`@shopify/hydrogen/customer-account\` returns. TypeScript infers the result and variables types from the document's GraphQL source. Create documents only with the Customer Account \`gql\` function. The client throws a \`TypeError\` for any other object.

```ts
DocumentDecoration<Result, Variables> & {
  readonly [CUSTOMER_ACCOUNT_DOCUMENT]: true;
  readonly source: Source;
}
```

### GraphqlExtraOptionsForDoc

Offers the \`cache\` option only for documents that TypeScript recognizes as queries.

```ts
OperationKindOfDoc<Doc> extends "query" ? Extra : Omit<Extra, "cache">
```

### OperationKindOfDoc

The operation kind of a document, such as \`query\`. Resolves to \`unknown\` when the query text isn't a string literal type.

```ts
[SourceText<Doc>] extends [never]
  ? "unknown"
  : string extends SourceText<Doc>
    ? "unknown"
    : InferOperationKind<SourceText<Doc>>
```

### SourceText

The query text of a document as a string literal type. A plain string resolves to itself.

```ts
[SourceOf<Doc>] extends [never]
  ? Doc extends string
    ? Doc
    : never
  : SourceOf<Doc>
```

### InferOperationKind

The operation kind of a query string, such as \`query\`. Resolves to \`unknown\` unless the query text has exactly one operation.

```ts
parseDocument<T> extends infer Doc
    ? [Doc] extends [never]
      ? "unknown"
      : OperationKindType<Doc>
    : "unknown"
```

### OperationKindType



### ResolveDoc

The typed document for a GraphQL call. Hydrogen infers the types when you pass a plain query string.

```ts
D extends DocLike ? D : D extends string ? InferredDoc<D> : never
```

### InferredDoc



### StorefrontGraphqlResult

The result of a GraphQL call, with the data, any GraphQL errors, and the response headers. Check \`errors\` before you read \`data\`. Without errors, \`data\` holds the full result, typed from your document. With errors, \`data\` is \`null\` after a request error or after a failed non-null field at the root. Otherwise, \`data\` holds a partial result, and \`null\` replaces each failed field or its nearest nullable parent.

```ts
{ data: ResultOfDoc<Doc>; errors?: undefined; headers: Headers } | { data: ResultOfDoc<Doc> | null; errors: GraphQLFormattedError[]; headers: Headers }
```

### ResultOfDoc

The result type of a \`gql\` document or a \`gql\`.tada document node.

```ts
Doc extends StorefrontQueryString<infer Result, infer _Variables, string>
    ? Result
    : Doc extends TadaDocumentNode<any, any>
      ? TadaResultOf<Doc>
      : never
```

### StorefrontQueryString



### Headers



### GraphQLFormattedError

A GraphQL error from the Storefront API. The result of a GraphQL call lists GraphQL errors in its \`errors\` field.

* extensions

  Extra details that the Storefront API adds to the error.

  ```ts
  Record<string, unknown>
  ```

* locations

  The lines and columns in the query where the error occurs.

  ```ts
  ReadonlyArray<{ line: number; column: number }>
  ```

* message

  The error message.

  ```ts
  string
  ```

* path

  The path to the response field that failed.

  ```ts
  ReadonlyArray<string | number>
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

* #### Query predictive search on the server

  ##### Description

  Search for up to five products from server code. This example returns the item count and the matching products.

  ##### TypeScript

  ```ts
  import { queryPredictiveSearch, type QueryPredictiveSearchOptions } from "@shopify/hydrogen";

  export async function searchProducts(
    storefrontClient: QueryPredictiveSearchOptions["storefrontClient"],
    term: string,
  ) {
    const { total, items } = await queryPredictiveSearch({
      storefrontClient,
      term,
      limit: 5,
      types: ["PRODUCT"],
    });

    return { total, products: items.products };
  }
  ```

***

## Custom result fields

## make​Predictive​Search​Queries(**[options](#makepredictivesearchqueries-propertydetail-options)**​)

Builds a predictive search query that adds the fields from your fragments to the results.

Pass the query to `queryPredictiveSearch`, or pass the same fragments to `createPredictiveSearchServerHandlers`. TypeScript types the results from your fragments. The function throws an error when a fragment doesn't use its required name and type.

### Parameters

* **options**

  **CreatePredictiveSearchQueriesOptions\<PredictiveSearchFragments>**

  Fragments that add fields to each result type.

### CreatePredictiveSearchQueriesOptions

Options for a custom predictive search query.

* fragments

  Fragments that add fields to each result type. Results keep Hydrogen's built-in fields.

  ```ts
  TFragments
  ```

### PredictiveSearchFragments

GraphQL fragments that add fields to each type of predictive search result. Each fragment needs the name and type that its option lists, or \`makePredictiveSearchQueries\` throws an error. Results keep Hydrogen's built-in fields for links, tracking, and display.

* article

  Adds fields to article results. Start the fragment with \`fragment PredictiveSearchArticleFragment on Article\`.

  ```ts
  AnyStorefrontQueryString
  ```

* collection

  Adds fields to collection results. Start the fragment with \`fragment PredictiveSearchCollectionFragment on Collection\`.

  ```ts
  AnyStorefrontQueryString
  ```

* page

  Adds fields to page results. Start the fragment with \`fragment PredictiveSearchPageFragment on Page\`.

  ```ts
  AnyStorefrontQueryString
  ```

* product

  Adds fields to product results. Start the fragment with \`fragment PredictiveSearchProductFragment on Product\`.

  ```ts
  AnyStorefrontQueryString
  ```

* query

  Adds fields to query suggestions. Start the fragment with \`fragment PredictiveSearchQueryFragment on SearchQuerySuggestion\`.

  ```ts
  AnyStorefrontQueryString
  ```

### Examples

* #### Compose a query with custom fragments

  ##### Description

  Add \`vendor\` to product results with \`makePredictiveSearchQueries\`. This example runs the composed query with \`queryPredictiveSearch\`.

  ##### TypeScript

  ```ts
  import {
    gql,
    makePredictiveSearchQueries,
    queryPredictiveSearch,
    type QueryPredictiveSearchOptions,
  } from "@shopify/hydrogen";

  const queries = makePredictiveSearchQueries({
    fragments: {
      product: gql(`
        fragment PredictiveSearchProductFragment on Product {
          vendor
        }
      `),
    },
  });

  export async function searchWithVendor(
    storefrontClient: QueryPredictiveSearchOptions["storefrontClient"],
    term: string,
  ) {
    const data = await queryPredictiveSearch({
      storefrontClient,
      term,
      query: queries.predictiveSearch,
    });

    return data.items.products.map((product) => product.vendor);
  }
  ```

***
