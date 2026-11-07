---
title: Shopify routes
description: >-
  The handleShopifyRoutes function serves Shopify's storefront endpoints, such
  as checkout permalinks and the Storefront API proxy, and your custom route
  handlers. Use createShopifyRouteHandler to add your own endpoints that receive
  the request context, the session, and the Storefront API client.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/request-handling/handle-shopify-routes
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/request-handling/handle-shopify-routes.md
api_name: hydrogen
---

# Shopify routes

The `handleShopifyRoutes` function serves Shopify's storefront endpoints, such as checkout permalinks and the Storefront API proxy, and your custom route handlers. Use `createShopifyRouteHandler` to add your own endpoints that receive the request context, the session, and the Storefront API client.

To wire Shopify routes, redirects, and handler groups into your server, refer to [Wire Hydrogen request handlers](https://shopify.dev/docs/storefronts/hydrogen/request-handlers).

Import `handleShopifyRoutes` and `createShopifyRouteHandler` from `@shopify/hydrogen`.

***

## Shopify endpoints

## handle​Shopify​Routes(**[options](#handleshopifyroutes-propertydetail-options)**​)

Serves Shopify's storefront endpoints and your custom route handlers from your app. Call the function at the start of request handling, before your framework's router.

When a route matches, the function returns a promise for the response. Return that response as is, because the response already carries the request context's headers. When no route matches, the function returns `null` synchronously, and your framework's router handles the request. The function throws when `requestContext` differs from the Storefront API client's request context. When a route handler throws, the returned promise rejects. Inside a `try` block, use `return await` on the result.

The function checks these routes in order and returns the first match: the Shopify API proxy at `/__shopify`, the Storefront API proxy at `/api/{version}/graphql.json`, Liquid-style `?variant=` product URLs, registered handler groups, UCP buy permalinks at `/buy/...`, checkout and cart permalinks, the UCP business profile at `/.well-known/ucp`, allowlisted `.well-known` resources, the UCP MCP proxy at `/api/ucp/mcp`, the MCP proxy at `/api/mcp`, and AJAX cart URLs.

Some routes answer unsupported methods with a `405` response. A registered handler path returns `405` for any method that no handler on that path registers. Checkout and cart permalinks accept only `GET` and `HEAD`. Buy permalinks accept only `GET`, and the UCP MCP proxy accepts only `POST`.

When your bundler resolves the package's `development` export condition, the function also serves the GraphiQL explorer at `/graphiql` for GET requests that match no other route, and accepts a `graphiql` option. Set `graphiql.customerAccount` to an object with `apiUrl`, `accessToken`, and `schemaUrl` to add a Customer Account API tab. The explorer skips the tab when it can't fetch the schema.

### Parameters

* **options**

  **HydrogenRoutesOptions**

  **required**

  The request, its context, the Storefront API client, your route templates, your handler groups, and the session manager when a registered handler needs one.

### Returns

* **null | Promise\<Response>**

  A promise for the matched route's response, or `null` when no route matches.

### HydrogenRoutesOptions



### Examples

* #### Handle routes before the router

  ##### Description

  Build the request context and client, then serve Shopify's endpoints before the app router. This example falls through to the app router when no route matches.

  ##### TypeScript

  ```ts
  import {
    createShopifyRequestContext,
    createStorefrontClient,
    handleShopifyRoutes,
    type ShopifyRouteHandlerContext,
    type ShopifyRouteHandlerGroup,
    type ShopifyRouteTemplates,
    type StorefrontClient,
  } from "@shopify/hydrogen";

  export async function fetch(
    request: Request,
    appRouter: (request: Request, storefrontClient: StorefrontClient) => Promise<Response>,
    sessionManager: ShopifyRouteHandlerContext["sessionManager"],
    routeTemplates: ShopifyRouteTemplates,
    cartHandlers: ShopifyRouteHandlerGroup,
  ) {
    const requestContext = createShopifyRequestContext({
      request,
      i18n: { country: "US", language: "EN" },
    });
    const storefrontClient = createStorefrontClient({
      type: "public",
      requestContext,
      config: { storeDomain: process.env.PUBLIC_STORE_DOMAIN! },
    });

    const shopifyRoute = handleShopifyRoutes({
      request,
      requestContext,
      sessionManager,
      storefrontClient,
      routeTemplates,
      handlers: [cartHandlers],
    });
    if (shopifyRoute) return await shopifyRoute;

    const routedResponse = await appRouter(request, storefrontClient);
    const response = new Response(routedResponse.body, routedResponse);
    requestContext.applyResponseHeaders(response.headers);
    return response;
  }
  ```

***

## Custom endpoints

## create​Shopify​Route​Handler(**[pathname](#createshopifyroutehandler-propertydetail-pathname)**​,**[method](#createshopifyroutehandler-propertydetail-method)**​,**[handler](#createshopifyroutehandler-propertydetail-handler)**​)

Creates a custom endpoint in your app for one pathname and HTTP method. Collect handlers in an object, and pass an array of handler objects to `handleShopifyRoutes` in its `handlers` option.

Use paths other than `/api/cart`, which the cart server handlers use. Return a JSON, redirect, or error result from the handler. Hydrogen sends a JSON result with status `200`, an error result with status `400` by default, and a redirect result with status `303` by default. When a redirect result uses a status other than `301`, `302`, `303`, 307, or 308, the promise from `handleShopifyRoutes` rejects.

Annotate the handler's context parameter with only the fields the handler reads, for example `Omit<ShopifyRouteHandlerContext, "sessionManager">`, so apps without a session manager can register it. Hydrogen infers the context only from an annotated parameter. A handler with no parameter, or with an unannotated destructured parameter, gets the full context, so `handleShopifyRoutes` still requires `sessionManager` for it.

Marking `sessionManager` optional in the annotation doesn't make it optional at runtime. It still makes `sessionManager` required, and when an untyped caller omits it, Hydrogen passes a stand-in that throws when the handler uses it. A check such as `if (sessionManager)` is always true, so don't use it as a fallback.

### Parameters

* **pathname**

  **TPathname extends string**

  **required**

  The exact URL pathname that the handler matches. Hydrogen doesn't match path parameters or prefixes.

* **method**

  **TMethod extends string**

  **required**

  The HTTP method that the handler matches, in uppercase, such as `POST`.

* **handler**

  **(context: TContext) => Promise\<ShopifyRouteHandlerResult>**

  **required**

  The function that receives the request, its context, the session manager, and the Storefront API client, and returns a JSON, redirect, or error result.

### Returns

* **ShopifyRouteHandler\<const TPathname extends string, const TMethod extends string, TContext extends Partial\<ShopifyRouteHandlerContext> = ShopifyRouteHandlerContext>**

  The handler to add to a handler object.

### ShopifyRouteHandlerResult

The JSON, redirect, or error result that a route handler returns.

```ts
ShopifyRouteJsonResult<TData> | ShopifyRouteRedirectResult | ShopifyRouteErrorResult<TError>
```

### ShopifyRouteJsonResult

A route handler result that Hydrogen sends as a \`200\` JSON response.

* data

  The value that Hydrogen serializes as the response body.

  ```ts
  TData
  ```

* headers

  Extra headers for the response. Hydrogen sets \`content-type\` to \`application/json\` and overrides any value you pass.

  ```ts
  HeadersInit
  ```

* type

  Set to \`json\` for a JSON response.

  ```ts
  'json'
  ```

### ShopifyRouteRedirectResult

A route handler result that Hydrogen sends as a redirect response.

* headers

  Extra headers for the redirect response.

  ```ts
  HeadersInit
  ```

* location

  The redirect target. Hydrogen resolves a relative path against the request's origin.

  ```ts
  string
  ```

* status

  The HTTP redirect status. Defaults to \`303\`.

  ```ts
  ShopifyRedirectStatus
  ```

* type

  Set to \`redirect\` for a redirect response.

  ```ts
  'redirect'
  ```

### ShopifyRedirectStatus

The HTTP status codes a route handler can use for a redirect.

```ts
301 | 302 | 303 | 307 | 308
```

### ShopifyRouteErrorResult

A route handler result that Hydrogen sends as a JSON error response.

* error

  The error that Hydrogen serializes as the response body's \`error\` field.

  ```ts
  TError
  ```

* headers

  Extra headers for the error response. Hydrogen sets \`content-type\` to \`application/json\` and overrides any value you pass.

  ```ts
  HeadersInit
  ```

* status

  The HTTP status for the error response. Defaults to \`400\`.

  ```ts
  number
  ```

* type

  Set to \`error\` for an error response.

  ```ts
  'error'
  ```

### ShopifyRouteHandler



### ShopifyRouteHandlerContext

The values that Hydrogen passes to each registered route handler.

* request

  The incoming request that matched the handler's pathname and method.

  ```ts
  Request
  ```

* requestContext

  The current request's context, the same one the Storefront API client uses.

  ```ts
  ShopifyRequestContext
  ```

* sessionManager

  Your app's session storage for the current request. \`handleShopifyRoutes\` requires it only when a registered handler's context includes this field.

  ```ts
  ShopifyRouteSessionManager
  ```

* storefrontClient

  The Storefront API client for the current request.

  ```ts
  StorefrontClient
  ```

### ShopifyRequestContext

The context for one request. Pass the context to Hydrogen's API clients and route handlers for that request.

```ts
ShopifyRequestContextBase & {
    i18n: NormalizedI18nConfig<I18n>;
  }
```

### ShopifyRequestContextBase

The fields and methods on every request context.

* \_\_hydrogenShopifyRequestContextBrand

  A type-only marker. Create request contexts only with \`createShopifyRequestContext\`.

  ```ts
  never
  ```

* applyResponseHeaders

  Adds the headers that a Hydrogen storefront needs to the final response. Call the method on each response that your app builds. Responses from \`handleShopifyRoutes\` and \`handleShopifyRedirects\` already carry these headers. Append your committed session headers before you call the method. The method makes any response that sets a cookie private and uncacheable. The method also sets the \`powered-by\` header, makes responses that hold customer data private and uncacheable, and adds eligible Shopify cookies only to non-document responses for methods other than \`GET\` and \`HEAD\`.

  ```ts
  (headers: Headers) => void
  ```

* applyStorefrontRequestHeaders

  Adds the Hydrogen SDK headers and the customer's cookie, privacy, and origin headers to a Storefront API request. The Storefront API client and the API proxies call the method for you.

  ```ts
  (headers: Headers) => void
  ```

* buyerIp

  The customer's trusted IP address. Private Storefront API clients require it.

  ```ts
  string
  ```

* captureSubrequestHeaders

  Saves the cookies from the first Storefront API response that sets cookies. The Storefront API client calls the method for you, and \`applyResponseHeaders()\` can add the cookies to your response.

  ```ts
  (headers: Headers) => void
  ```

* consumeStorefrontResponseHeaders

  Saves the cookies from a proxied Storefront API response and removes the \`set-cookie\` header from that response. The API proxies in \`handleShopifyRoutes\` call the method for you.

  ```ts
  (headers: Headers) => void
  ```

* cookie

  The incoming request's \`Cookie\` header. Hydrogen forwards the header to the Storefront API.

  ```ts
  string
  ```

* getForwardedRequestHeaders

  Returns the incoming request's headers with Shopify's request headers added. Pass the headers when you forward the request to a proxy or another origin.

  ```ts
  () => Headers
  ```

* i18n

  The request's language, country, and path prefix. The path prefix starts with \`/\` and has no trailing slash, or is an empty string when you don't set one.

  ```ts
  NormalizedI18nConfig
  ```

* markResponseAsPersonalized

  Marks the final response as private and uncacheable because the response holds customer data. The Customer Account API client and the customer session call the method for you.

  ```ts
  (reason: string) => void
  ```

* markResponseAsSessionEstablishing

  Lets the final response set Shopify cookies before the customer has a Shopify session, and marks the response as private and uncacheable. The UCP MCP proxy calls the method for you.

  ```ts
  (reason: string) => void
  ```

* requestGroupId

  The ID that groups this request's Shopify API calls. Hydrogen reads the ID from the request headers or generates one.

  ```ts
  string
  ```

* signal

  The incoming request's abort signal. Hydrogen's API clients stop their requests when the signal aborts.

  ```ts
  AbortSignal
  ```

* storefrontOrigin

  The origin of the incoming request's URL. Hydrogen forwards the origin to the Storefront API.

  ```ts
  string
  ```

* url

  The incoming request's URL.

  ```ts
  string
  ```

### Headers



### NormalizedI18nConfig

The request's locale, with a path prefix that starts with \`/\` or is an empty string.

```ts
Omit<I18n, "pathPrefix"> & {
  pathPrefix: string;
}
```

### ShopifyRouteSessionManager

The session storage that route handlers and the customer session read and write. Implement the methods with your app's session.

* commit

  Saves session changes and returns the headers, such as a cookie, to add to the response.

  ```ts
  () => Awaitable<void | HeadersInit>
  ```

* getSessionItem

  Returns the session value stored under a key.

  ```ts
  (key: string) => unknown
  ```

* getSessionOrigin

  Returns your storefront's HTTPS origin. Customer account sign-in builds its OAuth redirect URL from the origin.

  ```ts
  () => Awaitable<string>
  ```

* removeSessionItem

  Deletes the session value stored under a key.

  ```ts
  (key: string) => Awaitable<void>
  ```

* setSessionItem

  Stores a value in the session under a key.

  ```ts
  (key: string, value: unknown) => Awaitable<void>
  ```

### Awaitable

A value or a promise for that value.

```ts
T | Promise<T>
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

#### ShopifyRouteError

The code and message that an error result sends in the response body's `error` field.

* **code**

  **string**

  **required**

  A machine-readable error code.

* **message**

  **string**

  **required**

  A human-readable error message.

### Examples

* #### Register a custom route

  ##### Description

  Create a GET route that queries the Storefront API. This example returns a \`json\` result on success and an \`error\` result with status \`502\` when the query fails.

  ##### TypeScript

  ```ts
  import {
    createShopifyRouteHandler,
    gql,
    type ShopifyRouteHandlerContext,
    type ShopifyRouteHandlerResult,
  } from "@shopify/hydrogen";

  const SHOP_QUERY = gql(`query { shop { name } }`);

  async function handleShopGet({
    storefrontClient,
  }: ShopifyRouteHandlerContext): Promise<ShopifyRouteHandlerResult> {
    const result = await storefrontClient.graphql(SHOP_QUERY);
    if (result.errors) {
      return {
        type: "error",
        status: 502,
        error: { code: "storefront_error", message: result.errors[0]?.message ?? "Request failed" },
      };
    }

    return { type: "json", data: { name: result.data.shop.name } };
  }

  export const shopHandlers = {
    get: createShopifyRouteHandler("/api/shop", "GET", handleShopGet),
  };
  ```

* #### Redirect from a route

  ##### Description

  Return a redirect result from a handler. This example sends \`/wishlist\` to \`/account/wishlist\` with a permanent redirect.

  ##### TypeScript

  ```ts
  import { createShopifyRouteHandler } from "@shopify/hydrogen";

  export const legacyHandlers = {
    wishlist: createShopifyRouteHandler("/wishlist", "GET", async () => ({
      type: "redirect" as const,
      location: "/account/wishlist",
      status: 301 as const,
    })),
  };
  ```

***
