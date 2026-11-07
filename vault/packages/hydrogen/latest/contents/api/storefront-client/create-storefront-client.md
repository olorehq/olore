---
title: Storefront API client
description: >-
  The createStorefrontClient function creates a typed Storefront API client for
  browser code, server-side rendering, or background jobs such as webhooks. Use
  the client to run queries and mutations with the customer's cookies and
  locale, and to cache query results.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/storefront-client/create-storefront-client
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/storefront-client/create-storefront-client.md
api_name: hydrogen
---

# Storefront API client

The `createStorefrontClient` function creates a typed Storefront API client for browser code, server-side rendering, or background jobs such as webhooks. Use the client to run queries and mutations with the customer's cookies and locale, and to cache query results.

Import `createStorefrontClient` and its option and client types from `@shopify/hydrogen`.

Pass the client a request context from [`createShopifyRequestContext`](https://shopify.dev/docs/api/hydrogen/latest/request-handling/create-shopify-request-context).

To choose a client type, localize queries, and handle errors, refer to [Query the Storefront API](https://shopify.dev/docs/storefronts/hydrogen/data-fetching).

***

## Client setup

## create​Storefront​Client(**[args](#createstorefrontclient-propertydetail-args)**​)

Creates a Storefront API client that runs typed queries and mutations against your store.

Set `type` based on where your code runs and whether customer context is available:

| | `public` | `private` | `private_no_buyer_context` |
| - | - | - | - |
| Runs in | Browser or mobile | Server-side rendering | Background server code |
| Token | Public access token, or none | Private access token | Private access token |
| Customer context | Browser request context | You forward trusted `buyerIp` | None |
| Best for | Client-side fetches | SSR with customer context | Webhooks, background jobs |

Pass a request context from `createShopifyRequestContext`. The client forwards the incoming request's cookies and `Sec-GPC` header to the Storefront API, and fills `$country` and `$language` variables from the context's locale. The client reads the request headers once, when you create the client. Create a client for each incoming request, and create a client at module scope only with a static request context.

Keep private clients in server code, where the token can't reach browsers. The function throws an error when you create either private client type in a browser. The function throws a `TypeError` when the request context of a `private` client has no `buyerIp`.

### Parameters

* **args**

  **CreateStorefrontClientArgs**

  **required**

  The client type, request context, and store configuration for the new client.

### Returns

* **StorefrontClient**

  The client, with a `graphql()` method that runs queries and mutations.

### CreateStorefrontClientArgs



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

The `config` options depend on the client `type`. A `public` client takes [`PublicClientOptions`](#publicclientoptions), a `private` client takes [`PrivateClientOptions`](#privateclientoptions), and a `private_no_buyer_context` client takes [`PrivateNoBuyerContextClientOptions`](#privatenobuyercontextclientoptions).

#### PublicClientOptions

Options for a public client, which runs in the browser or a mobile app. Pass a public access token, or omit the token for tokenless access.

Tokenless access can't read some Storefront API fields, including product tags, metaobjects, metafields, menus, and customers.

* **store​Domain**

  **string**

  **required**

  Your store's domain, such as `my-store.myshopify.com`. Hydrogen adds `https://` when the domain has no protocol, and removes trailing slashes. `createStorefrontClient` throws an error for an empty domain.

* **api​Version**

  **string**

  The Storefront API version that the client queries. Defaults to the version that Hydrogen bundles. To send some queries to another version, such as `unstable`, create a second client with that version. Type inference always uses Hydrogen's bundled schema. Write your own types for fields outside the bundled schema.

* **cache**

  **CacheInstance**

  The cache that stores query results. The client caches only queries that pass a `cache` strategy. The client never caches mutations or results with GraphQL errors.

* **default​Timeout​In​Ms**

  **number**

  How long a request can run before the client throws a `StorefrontTimeoutError`, in milliseconds. Defaults to `30000`. Set `0` to turn off the timeout. Stale-while-revalidate refreshes use the same timeout, or 30,000 when the timeout is `0`. `createStorefrontClient` throws an error for a negative value.

* **fetch**

  **Fetch**

  The fetch function that the client calls. Defaults to `globalThis.fetch`. `createStorefrontClient` throws an error when neither exists.

* **public​Storefront​Token**

  **string | undefined**

  Your public Storefront API access token. Omit the token for tokenless access. `createStorefrontClient` throws an error for an empty string.

* **storefront​Id**

  **string**

  Your Hydrogen storefront's ID. The client sends the ID in the `Shopify-Storefront-Id` header of every request.

* **wait​Until**

  **WaitUntil**

  Keeps the runtime alive while the client writes to the cache in the background, such as a worker's `waitUntil` function. Without the function, each cached query waits for its cache write before it resolves.

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

#### PrivateClientOptions

Options for a private client, which runs during server-side rendering and forwards the customer's IP address to the Storefront API. Set `buyerIp` on the request context before you create the client.

* **private​Storefront​Token**

  **string**

  **required**

  Your private Storefront API access token. Keep the token out of browser code. `createStorefrontClient` throws an error when the token is missing.

* **store​Domain**

  **string**

  **required**

  Your store's domain, such as `my-store.myshopify.com`. Hydrogen adds `https://` when the domain has no protocol, and removes trailing slashes. `createStorefrontClient` throws an error for an empty domain.

* **api​Version**

  **string**

  The Storefront API version that the client queries. Defaults to the version that Hydrogen bundles. To send some queries to another version, such as `unstable`, create a second client with that version. Type inference always uses Hydrogen's bundled schema. Write your own types for fields outside the bundled schema.

* **cache**

  **CacheInstance**

  The cache that stores query results. The client caches only queries that pass a `cache` strategy. The client never caches mutations or results with GraphQL errors.

* **default​Timeout​In​Ms**

  **number**

  How long a request can run before the client throws a `StorefrontTimeoutError`, in milliseconds. Defaults to `30000`. Set `0` to turn off the timeout. Stale-while-revalidate refreshes use the same timeout, or 30,000 when the timeout is `0`. `createStorefrontClient` throws an error for a negative value.

* **fetch**

  **Fetch**

  The fetch function that the client calls. Defaults to `globalThis.fetch`. `createStorefrontClient` throws an error when neither exists.

* **storefront​Id**

  **string**

  Your Hydrogen storefront's ID. The client sends the ID in the `Shopify-Storefront-Id` header of every request.

* **wait​Until**

  **WaitUntil**

  Keeps the runtime alive while the client writes to the cache in the background, such as a worker's `waitUntil` function. Without the function, each cached query waits for its cache write before it resolves.

#### PrivateNoBuyerContextClientOptions

Options for a private client without buyer context, for background jobs, webhooks, and other server code with no customer. The client sends a private access token and no customer IP address.

* **private​Storefront​Token**

  **string**

  **required**

  Your private Storefront API access token. Keep the token out of browser code. `createStorefrontClient` throws an error when the token is missing.

* **store​Domain**

  **string**

  **required**

  Your store's domain, such as `my-store.myshopify.com`. Hydrogen adds `https://` when the domain has no protocol, and removes trailing slashes. `createStorefrontClient` throws an error for an empty domain.

* **api​Version**

  **string**

  The Storefront API version that the client queries. Defaults to the version that Hydrogen bundles. To send some queries to another version, such as `unstable`, create a second client with that version. Type inference always uses Hydrogen's bundled schema. Write your own types for fields outside the bundled schema.

* **cache**

  **CacheInstance**

  The cache that stores query results. The client caches only queries that pass a `cache` strategy. The client never caches mutations or results with GraphQL errors.

* **default​Timeout​In​Ms**

  **number**

  How long a request can run before the client throws a `StorefrontTimeoutError`, in milliseconds. Defaults to `30000`. Set `0` to turn off the timeout. Stale-while-revalidate refreshes use the same timeout, or 30,000 when the timeout is `0`. `createStorefrontClient` throws an error for a negative value.

* **fetch**

  **Fetch**

  The fetch function that the client calls. Defaults to `globalThis.fetch`. `createStorefrontClient` throws an error when neither exists.

* **storefront​Id**

  **string**

  Your Hydrogen storefront's ID. The client sends the ID in the `Shopify-Storefront-Id` header of every request.

* **wait​Until**

  **WaitUntil**

  Keeps the runtime alive while the client writes to the cache in the background, such as a worker's `waitUntil` function. Without the function, each cached query waits for its cache write before it resolves.

### Examples

* #### Create a public client

  ##### Description

  Create a module-scoped public client with a static request context. This example sends requests without an access token when \`PUBLIC\_STOREFRONT\_API\_TOKEN\` is unset.

  ##### TypeScript

  ```ts
  import { createShopifyRequestContext, createStorefrontClient } from "@shopify/hydrogen";

  const requestContext = createShopifyRequestContext({
    request: { headers: new Headers() },
    i18n: { country: "US", language: "EN" },
  });

  export const storefront = createStorefrontClient({
    type: "public",
    requestContext,
    config: {
      storeDomain: process.env.PUBLIC_STORE_DOMAIN!,
      publicStorefrontToken: process.env.PUBLIC_STOREFRONT_API_TOKEN,
    },
  });
  ```

* #### Create a private client per request

  ##### Description

  Create a private client for the current request. This example reads the trusted \`buyerIp\` from the \`oxygen-buyer-ip\` header and throws when the header is missing.

  ##### TypeScript

  ```ts
  import { createShopifyRequestContext, createStorefrontClient } from "@shopify/hydrogen";

  export function createRequestStorefront(request: Request) {
    const buyerIp = request.headers.get("oxygen-buyer-ip");
    if (!buyerIp) throw new Error("oxygen-buyer-ip is required for private clients");

    const requestContext = createShopifyRequestContext({
      request,
      i18n: { country: "US", language: "EN" },
      buyerIp,
    });

    return createStorefrontClient({
      type: "private",
      requestContext,
      config: {
        storeDomain: process.env.PUBLIC_STORE_DOMAIN!,
        privateStorefrontToken: process.env.PRIVATE_STOREFRONT_API_TOKEN!,
      },
    });
  }
  ```

* #### Configure the client cache

  ##### Description

  Pass a Web Cache and \`waitUntil\` in the client config, then opt one query into caching. This example caches a product list query with \`Cache.long()\`.

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

***

## Client types

#### ClientType

Chooses the kind of Storefront API client to create. Use `public` in the browser, with a public access token or none. Use `private` during server-side rendering, with a private token and the customer's IP address. Use `private_no_buyer_context` in background jobs and webhooks, with a private token and no customer.

**`"public" | "private" | "private_no_buyer_context"`**

#### PublicStorefrontClient

The type of a client that you create with `type: "public"`.

* **api​Url**

  **string**

  **required**

  The Storefront API GraphQL endpoint that the client calls.

* **graphql**

  **\<const Doc extends DocLike | string>(doc: Doc, ...options: GqlRestParam\<ResolveDoc\<Doc>, Extra>) => Promise\<StorefrontGraphqlResult\<ResolveDoc\<Doc>>>**

  **required**

  Runs a Storefront API query or mutation and returns a typed result. Pass a `gql` document or a plain query string. When the operation declares `$country` or `$language`, the client sets the variable from the request context and overrides any value you pass.

  The method throws an error when a query passes a `cache` strategy and the client has no cache, or when the strategy uses `private` mode. A catch block for `StorefrontApiError` doesn't catch this configuration error. To cache customer-specific data, use `createRunWithCache` with a key unique to the customer.

* **i18n**

  **RequestContext\["i18n"]**

  **required**

  The country and language that the client sends for `$country` and `$language` variables.

* **request​Context**

  **RequestContext**

  **required**

  The request context that you passed to `createStorefrontClient`.

* **store​Url**

  **string**

  **required**

  Your store's URL with its protocol, such as `https://my-store.myshopify.com`.

* **type**

  **Type**

  **required**

  The client type that you passed to `createStorefrontClient`.

* **storefront​Id**

  **string**

  The storefront ID from the client options.

#### PrivateStorefrontClient

The type of a client that you create with `type: "private"`. The client's request context includes `buyerIp`.

* **api​Url**

  **string**

  **required**

  The Storefront API GraphQL endpoint that the client calls.

* **graphql**

  **\<const Doc extends DocLike | string>(doc: Doc, ...options: GqlRestParam\<ResolveDoc\<Doc>, Extra>) => Promise\<StorefrontGraphqlResult\<ResolveDoc\<Doc>>>**

  **required**

  Runs a Storefront API query or mutation and returns a typed result. Pass a `gql` document or a plain query string. When the operation declares `$country` or `$language`, the client sets the variable from the request context and overrides any value you pass.

  The method throws an error when a query passes a `cache` strategy and the client has no cache, or when the strategy uses `private` mode. A catch block for `StorefrontApiError` doesn't catch this configuration error. To cache customer-specific data, use `createRunWithCache` with a key unique to the customer.

* **i18n**

  **RequestContext\["i18n"]**

  **required**

  The country and language that the client sends for `$country` and `$language` variables.

* **request​Context**

  **RequestContext**

  **required**

  The request context that you passed to `createStorefrontClient`.

* **store​Url**

  **string**

  **required**

  Your store's URL with its protocol, such as `https://my-store.myshopify.com`.

* **type**

  **Type**

  **required**

  The client type that you passed to `createStorefrontClient`.

* **storefront​Id**

  **string**

  The storefront ID from the client options.

#### RequestScopedPrivateStorefrontClient

The type of a private client with the default request context. Use the type to annotate a private client without naming your request context type.

* **api​Url**

  **string**

  **required**

  The Storefront API GraphQL endpoint that the client calls.

* **graphql**

  **\<const Doc extends DocLike | string>(doc: Doc, ...options: GqlRestParam\<ResolveDoc\<Doc>, Extra>) => Promise\<StorefrontGraphqlResult\<ResolveDoc\<Doc>>>**

  **required**

  Runs a Storefront API query or mutation and returns a typed result. Pass a `gql` document or a plain query string. When the operation declares `$country` or `$language`, the client sets the variable from the request context and overrides any value you pass.

  The method throws an error when a query passes a `cache` strategy and the client has no cache, or when the strategy uses `private` mode. A catch block for `StorefrontApiError` doesn't catch this configuration error. To cache customer-specific data, use `createRunWithCache` with a key unique to the customer.

* **i18n**

  **Omit\<I18nConfig, "pathPrefix"> & { pathPrefix: string; }**

  **required**

  The country and language that the client sends for `$country` and `$language` variables.

* **request​Context**

  **RequestContext**

  **required**

  The request context that you passed to `createStorefrontClient`.

* **store​Url**

  **string**

  **required**

  Your store's URL with its protocol, such as `https://my-store.myshopify.com`.

* **type**

  **Type**

  **required**

  The client type that you passed to `createStorefrontClient`.

* **storefront​Id**

  **string**

  The storefront ID from the client options.

### I18nConfig

The language, country, and optional localized path prefix for a request.

* country

  The request's country.

  ```ts
  ShopifyCountryCode
  ```

* language

  The request's language.

  ```ts
  ShopifyLanguageCode
  ```

* pathPrefix

  The URL prefix for localized routes, such as \`/es-es\`. Hydrogen adds the prefix to standard route redirects and product variant URLs.

  ```ts
  string
  ```

### ShopifyCountryCode

A country code that both the Storefront API and the Customer Account API accept.

```ts
```

### ShopifyLanguageCode

A language code that both the Storefront API and the Customer Account API accept.

```ts
```

#### PrivateNoBuyerContextStorefrontClient

The type of a client that you create with `type: "private_no_buyer_context"`, for background jobs and webhooks.

* **api​Url**

  **string**

  **required**

  The Storefront API GraphQL endpoint that the client calls.

* **graphql**

  **\<const Doc extends DocLike | string>(doc: Doc, ...options: GqlRestParam\<ResolveDoc\<Doc>, Extra>) => Promise\<StorefrontGraphqlResult\<ResolveDoc\<Doc>>>**

  **required**

  Runs a Storefront API query or mutation and returns a typed result. Pass a `gql` document or a plain query string. When the operation declares `$country` or `$language`, the client sets the variable from the request context and overrides any value you pass.

  The method throws an error when a query passes a `cache` strategy and the client has no cache, or when the strategy uses `private` mode. A catch block for `StorefrontApiError` doesn't catch this configuration error. To cache customer-specific data, use `createRunWithCache` with a key unique to the customer.

* **i18n**

  **RequestContext\["i18n"]**

  **required**

  The country and language that the client sends for `$country` and `$language` variables.

* **request​Context**

  **RequestContext**

  **required**

  The request context that you passed to `createStorefrontClient`.

* **store​Url**

  **string**

  **required**

  Your store's URL with its protocol, such as `https://my-store.myshopify.com`.

* **type**

  **Type**

  **required**

  The client type that you passed to `createStorefrontClient`.

* **storefront​Id**

  **string**

  The storefront ID from the client options.

***

## Caching

To cache queries, pass a cache in the client config and a [`Cache`](https://shopify.dev/docs/api/hydrogen/latest/storefront-client/caching) strategy in each query's options.

***
