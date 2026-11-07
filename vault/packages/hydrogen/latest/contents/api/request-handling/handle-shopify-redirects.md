---
title: Redirects
description: >-
  The handleShopifyRedirects function sends customers to the right page when
  your framework's router returns a 404 response. Use the function to apply the
  store's URL redirects and to redirect Shopify's default resource paths to your
  app's paths.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/request-handling/handle-shopify-redirects
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/request-handling/handle-shopify-redirects.md
api_name: hydrogen
---

# Redirects

The `handleShopifyRedirects` function sends customers to the right page when your framework's router returns a `404` response. Use the function to apply the store's URL redirects and to redirect Shopify's default resource paths to your app's paths.

Import `handleShopifyRedirects` from `@shopify/hydrogen`.

Pass the same [route templates](https://shopify.dev/docs/api/hydrogen/latest/request-handling/route-templates) to this function and to [`handleShopifyRoutes`](https://shopify.dev/docs/api/hydrogen/latest/request-handling/handle-shopify-routes) in the `routeTemplates` option.

***

## 404 redirects

## handle​Shopify​Redirects(**[options](#handleshopifyredirects-propertydetail-options)**​)

Finds the Shopify redirect for a request that your framework's router can't match. Call the function when the router returns a `404` response, and return that `404` response when the function resolves to `null`.

The function checks these redirects in order and returns the first match as a `301` response: `/admin` to the store's admin, Shopify's default resource paths to your route templates, same-origin `return_to` and `redirect` query parameters, and the store's URL redirects. The response already carries the request context's headers. When a redirect lookup fails, the function logs the error and resolves to `null`.

### Parameters

* **options**

  **RedirectOptions**

  **required**

  The unmatched request, the Storefront API client, and your app's route templates.

### Returns

* **Promise\<Response | null>**

  A promise for the matched redirect response, or `null` when no redirect matches.

### RedirectOptions

The unmatched request, the Storefront API client, and your app's route templates.

* request

  The request that your framework's router answered with a \`404\` response.

  ```ts
  Request
  ```

* routeTemplates

  Your app's route templates. Hydrogen redirects Shopify's default resource paths to these templates.

  ```ts
  ShopifyRouteTemplates
  ```

* storefrontClient

  The Storefront API client for the current request. Hydrogen looks up the store's URL redirects with the client, and reads the locale path prefix from the client's request context.

  ```ts
  StorefrontClient
  ```

### ShopifyRouteTemplates

Your app's custom path templates for Shopify standard storefront routes, keyed by route name.

* article

  The app's article path. Hydrogen redirects Shopify article paths, such as \`/blogs/news/snowboard-guide\`, to this template.

  ```ts
  StandardRouteTemplateWithParam<"blogHandle"> & StandardRouteTemplateWithParam<"articleHandle">
  ```

* blog

  The app's blog path. Hydrogen redirects Shopify blog paths, such as \`/blogs/news\`, to this template.

  ```ts
  StandardRouteTemplateWithParam<"blogHandle">
  ```

* cart

  The app's cart path. Hydrogen redirects Shopify's \`/cart\` path to this template.

  ```ts
  StandardRouteTemplate
  ```

* collection

  The app's collection path. Hydrogen redirects Shopify collection paths, such as \`/collections/winter\`, to this template.

  ```ts
  StandardRouteTemplateWithParam<"collectionHandle">
  ```

* collectionList

  The app's collection list path. Hydrogen redirects Shopify's \`/collections\` path and the legacy \`/products\` path to this template.

  ```ts
  StandardRouteTemplate
  ```

* page

  The app's page path. Hydrogen redirects Shopify page paths, such as \`/pages/about-us\`, to this template.

  ```ts
  StandardRouteTemplateWithParam<"pageHandle">
  ```

* policy

  The app's policy path. Hydrogen redirects Shopify policy paths, such as \`/policies/privacy-policy\`, to this template.

  ```ts
  StandardRouteTemplateWithParam<"policyHandle">
  ```

* product

  The app's product path. Hydrogen redirects Shopify product paths, such as \`/products/snowboard\`, to this template.

  ```ts
  StandardRouteTemplateWithParam<"productHandle">
  ```

* productInCollection

  The app's path for products inside a collection. Hydrogen redirects Shopify paths such as \`/collections/winter/products/snowboard\` to this template. The template must include \`:productHandle\`. Add \`:collectionHandle\` when the app's product path also names the collection.

  ```ts
  StandardRouteTemplateWithParam<"productHandle">
  ```

* search

  The app's search path. Hydrogen redirects Shopify's \`/search\` path to this template.

  ```ts
  StandardRouteTemplate
  ```

### StandardRouteTemplateWithParam

A path template that starts with \`/\` and includes the named handle placeholder.

```ts
`/${string}:${Param}` | `/${string}:${Param}/${string}`
```

### StandardRouteTemplate

A path template that starts with \`/\`.

```ts
`/${string}`
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

### Examples

* #### Redirect after a 404

  ##### Description

  Check for a Shopify redirect when the app router returns a \`404\`. This example passes the original \`404\` through when no redirect matches.

  ##### TypeScript

  ```ts
  import { handleShopifyRedirects, type ShopifyRouteTemplates, type StorefrontClient } from "@shopify/hydrogen";

  export async function withShopifyRedirects(
    request: Request,
    storefrontClient: StorefrontClient,
    response: Response,
    routeTemplates: ShopifyRouteTemplates,
  ) {
    if (response.status !== 404) return response;

    const redirect = await handleShopifyRedirects({
      request,
      storefrontClient,
      routeTemplates,
    });

    return redirect ?? response;
  }
  ```

***
