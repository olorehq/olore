---
title: Customer account server handlers
description: >-
  The createCustomerAccountServerHandlers function creates route handlers for
  customer account login, authorization, token refresh, and logout. Use the
  handlers to sign customers in and out from four account routes, and to link
  the signed-in customer to their cart.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/customer-account-server-handlers
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/customer-account-server-handlers.md
api_name: hydrogen
---

# Customer account server handlers

The `createCustomerAccountServerHandlers` function creates route handlers for customer account login, authorization, token refresh, and logout. Use the handlers to sign customers in and out from four account routes, and to link the signed-in customer to their cart.

Import `createCustomerAccountServerHandlers` from `@shopify/hydrogen/customer-account`.

Pass a session from [`createCustomerSession`](https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/create-customer-session) and register the handlers with [`handleShopifyRoutes`](https://shopify.dev/docs/api/hydrogen/latest/request-handling/handle-shopify-routes).

***

## Route handlers

## create​Customer​Account​Server​Handlers(**[options](#createcustomeraccountserverhandlers-propertydetail-options)**​)

Creates the customer account routes under `/account` for sign-in, the OAuth callback, token refresh, and logout. Add the returned object to the `handlers` option of `handleShopifyRoutes`.

The login route redirects to Shopify's login page. The authorize and refresh routes redirect back to a same-origin path in your app. The logout route redirects to Shopify's logout endpoint when the session has an ID token, and to the post-logout URL otherwise. Each redirect commits the session and sends `cache-control: no-store`.

Link to these paths with full-page navigation, such as a plain `<a>` link or a `<form>`. Client-side navigation components can't follow these redirects.

### Parameters

* **options**

  **CreateCustomerAccountServerHandlersOptions**

  **required**

  The customer session, the redirect paths, and optional cart handlers for the account routes.

### Returns

* **CustomerAccountServerHandlers | CustomerAccountServerHandlersWithCartSync**

  The login, authorize, refresh, and logout routes.

### CreateCustomerAccountServerHandlersOptions

Options for the customer account routes, with optional cart buyer identity sync.

```ts
CustomerAccountServerHandlersOptionsWithoutCart | CustomerAccountServerHandlersOptionsWithCart
```

### CustomerAccountServerHandlersOptionsWithoutCart

Options for the customer account routes without cart buyer identity sync.

* cartServerHandlers

  The cart server handlers that \`createCartServerHandlers\` returns with its \`customerSession\` option. Pass the cart handlers to keep the cart's buyer identity in step with the signed-in customer. The authorize and refresh routes attach the customer to the cart. The logout route, and a refresh that ends the session, detach the customer from the cart. When a sync fails, the route logs the error and still redirects. When a detach fails, the route also expires the \`cart\` cookie. The sync needs \`storefrontClient\` in the handler context. Creating the handlers throws when the cart handlers lack the \`customerSession\` option, or when the customer session doesn't come from \`createCustomerSession\`.

  ```ts
  undefined
  ```

* customerSession

  The customer session from \`createCustomerSession\`.

  ```ts
  CustomerSession
  ```

* defaultPostLoginRedirectPathname

  The path to send the customer to after sign-in when the login request has no same-origin \`return\_to\` search param. Defaults to \`/\`.

  ```ts
  string
  ```

* loginFailedRedirectPath

  The same-origin path to send the customer to when sign-in fails with \`CustomerAccountOAuthError\`. Defaults to \`/account?login=failed\`. A cross-origin value falls back to \`/account\`. The authorize route rethrows other errors.

  ```ts
  string
  ```

* origin

  Your storefront's HTTPS origin, or a function that returns the origin for a request. Defaults to the origin that the session manager returns.

  ```ts
  string | ((request: Request) => string)
  ```

* postLogoutRedirectUri

  The URL to send the customer to after logout. Defaults to \`/\`. A same-origin \`return\_to\` search param on the logout request overrides this value.

  ```ts
  string
  ```

### CustomerSession

Signs customers in and out with Shopify customer accounts, and gives your server their Customer Account API access tokens. Use the session on the server only. Pass your session storage and the request context to each method. Each method makes the final response private and uncacheable.

* getAccessToken

  Returns the customer's stored access token, or \`undefined\` when the token is missing or expired. The method never refreshes the token or writes to the session. Call \`getOrRefreshAccessToken()\` to refresh an expired token.

  ```ts
  (sessionManager: ReadonlyCustomerSessionManager, requestContext: ShopifyRequestContext) => Promise<string>
  ```

* getOrRefreshAccessToken

  Returns a usable access token for the customer. When the stored token is missing or expired, the session gets new tokens from Shopify and writes them to your session storage. Call the method only where you commit the session to the response. Returns \`undefined\` when the customer has no refresh token, or when a temporary refresh failure keeps the session for a retry. When Shopify rejects the refresh token with a \`400\` or \`401\` status, the session clears the stored tokens and returns \`undefined\`. Refresh failures never throw.

  ```ts
  (sessionManager: ShopifyRouteSessionManager, requestContext: ShopifyRequestContext, options?: RequestOriginOptions) => Promise<string>
  ```

* handleOAuthCallback

  Completes sign-in from Shopify's OAuth callback request, saves the customer's tokens to your session storage, and returns the path to send the customer to. Commit the session to the response after the call. The method throws \`CustomerAccountOAuthError\` when sign-in fails a check, and \`CustomerAccountApiError\` when the token request times out. After a failure, the customer needs to start sign-in again.

  ```ts
  (sessionManager: ShopifyRouteSessionManager, requestContext: ShopifyRequestContext, request: Request) => Promise<string>
  ```

* isLoggedIn

  Returns \`true\` when the customer has a usable access token or a refresh token. The method never refreshes tokens. Use the result for UI state, such as an account link. Gate Customer Account API data on an access token from \`getOrRefreshAccessToken()\`.

  ```ts
  (sessionManager: ReadonlyCustomerSessionManager, requestContext: ShopifyRequestContext) => Promise<boolean>
  ```

* logout

  Clears the customer's session data and returns the URL to send the customer to. Commit the session to the response after the call. When the session has an ID token, the URL points to Shopify's logout endpoint with the post-logout URL attached. Without an ID token, the method returns the post-logout URL.

  ```ts
  (sessionManager: ShopifyRouteSessionManager, requestContext: ShopifyRequestContext, options?: LogoutOptions) => Promise<string>
  ```

* prepareLoginUrl

  Starts customer sign-in and returns the URL of Shopify's login page. Commit the session to the response, then redirect the customer to the URL. The customer has 10 minutes to finish signing in. After that, the OAuth callback fails with the \`missing\_pending\_login\` code.

  ```ts
  (sessionManager: ShopifyRouteSessionManager, requestContext: ShopifyRequestContext, options: PrepareLoginUrlOptions) => Promise<string>
  ```

### ReadonlyCustomerSessionManager

The session storage that \`isLoggedIn()\` and \`getAccessToken()\` read.

* getSessionItem

  Returns the session value for a key. The customer session keeps its data under the \`customerAccount\` key.

  ```ts
  (key: string) => unknown
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

### RequestOriginOptions

The storefront origin for a token refresh or logout.

* origin

  Your storefront's HTTPS origin. Defaults to the origin that the session manager returns. A non-HTTPS origin throws.

  ```ts
  string
  ```

### LogoutOptions

Options for logging the customer out.

* origin

  Your storefront's HTTPS origin. Defaults to the origin that the session manager returns. A non-HTTPS origin throws.

  ```ts
  string
  ```

* postLogoutRedirectUri

  The URL to send the customer to after logout. A relative URL resolves against the origin. Defaults to the origin, and a cross-origin URL falls back to the origin.

  ```ts
  string
  ```

### PrepareLoginUrlOptions

Options for building a Shopify OAuth login URL.

* acrValues

  The authentication context class to request, sent as the \`acr\_values\` search param.

  ```ts
  string
  ```

* countryCode

  The customer's country, sent as the \`region\_country\` search param.

  ```ts
  string
  ```

* locale

  The language for Shopify's login page, sent as the \`locale\` search param.

  ```ts
  string
  ```

* loginHint

  A value that prefills Shopify's login page, such as the customer's email address, sent as the \`login\_hint\` search param.

  ```ts
  string
  ```

* loginHintMode

  How Shopify's login page uses the login hint, such as \`submit\`, sent as the \`login\_hint\_mode\` search param. Hydrogen sends the value only with \`loginHint\`.

  ```ts
  string
  ```

* origin

  Your storefront's origin for the OAuth redirect URL. Defaults to the origin that the session manager returns. The origin must use HTTPS, including on localhost. Use a public HTTPS tunnel for local sign-in.

  ```ts
  string
  ```

* returnTo

  The same-origin path or URL to send the customer to after sign-in, such as \`/account/orders\`. Defaults to \`/account\`. Cross-origin values and paths over 2,048 bytes fall back to the default.

  ```ts
  string
  ```

### CustomerAccountServerHandlersOptionsWithCart

Options for the customer account routes that keep the cart's buyer identity in step with the signed-in customer.

* cartServerHandlers

  The cart server handlers that \`createCartServerHandlers\` returns with its \`customerSession\` option. Pass the cart handlers to keep the cart's buyer identity in step with the signed-in customer. The authorize and refresh routes attach the customer to the cart. The logout route, and a refresh that ends the session, detach the customer from the cart. When a sync fails, the route logs the error and still redirects. When a detach fails, the route also expires the \`cart\` cookie. The sync needs \`storefrontClient\` in the handler context. Creating the handlers throws when the cart handlers lack the \`customerSession\` option, or when the customer session doesn't come from \`createCustomerSession\`.

  ```ts
  CartBuyerIdentitySyncSource
  ```

* customerSession

  The customer session from \`createCustomerSession\`.

  ```ts
  CustomerSessionWithInternals
  ```

* defaultPostLoginRedirectPathname

  The path to send the customer to after sign-in when the login request has no same-origin \`return\_to\` search param. Defaults to \`/\`.

  ```ts
  string
  ```

* loginFailedRedirectPath

  The same-origin path to send the customer to when sign-in fails with \`CustomerAccountOAuthError\`. Defaults to \`/account?login=failed\`. A cross-origin value falls back to \`/account\`. The authorize route rethrows other errors.

  ```ts
  string
  ```

* origin

  Your storefront's HTTPS origin, or a function that returns the origin for a request. Defaults to the origin that the session manager returns.

  ```ts
  string | ((request: Request) => string)
  ```

* postLogoutRedirectUri

  The URL to send the customer to after logout. Defaults to \`/\`. A same-origin \`return\_to\` search param on the logout request overrides this value.

  ```ts
  string
  ```

### CartBuyerIdentitySyncSource

Cart server handlers that you created with \`customerSession\`.

* \_\_@cartBuyerIdentitySync\@21922

  Connects the cart to the customer when the customer logs in, and disconnects the cart when the customer logs out. Create the cart server handlers with \`customerSession\`, then pass the handlers to \`createCustomerAccountServerHandlers\` through the \`cartServerHandlers\` option. The customer account handlers then update the cart for you.

  ```ts
  CartBuyerIdentitySync
  ```

### CartBuyerIdentitySync

Connects the cart to the customer when the customer logs in, and disconnects the cart when the customer logs out. Create the cart server handlers with \`customerSession\`, then pass the handlers to \`createCustomerAccountServerHandlers\` through the \`cartServerHandlers\` option. The customer account handlers then update the cart for you.

* expiredCartCookie

  A \`Set-Cookie\` value that clears the \`cart\` cookie. The customer account handlers send the value when they can't detach the customer from the cart.

  ```ts
  string
  ```

* updateBuyerIdentity

  Attaches the customer to the cart in the request's \`cart\` cookie, or detaches the customer when the token is \`null\`.

  ```ts
  (context: CartBuyerIdentitySyncContext, customerAccessToken: string) => Promise<void>
  ```

### CartBuyerIdentitySyncContext

The request with the \`cart\` cookie and the Storefront API client that updates the cart.

* request

  The incoming request. The \`cart\` cookie on the request identifies the cart.

  ```ts
  Request
  ```

* storefrontClient

  The Storefront API client that updates the cart's buyer identity.

  ```ts
  StorefrontClient
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

### CustomerSessionWithInternals

A customer session that \`createCustomerSession\` returns. Cart buyer identity sync requires this session.

```ts
CustomerSession & {
  readonly [CUSTOMER_SESSION_INTERNAL_BRAND]: true;
}
```

### CustomerAccountServerHandlers

The login, authorize, refresh, and logout routes for customer accounts. Add the object to the \`handlers\` option of \`handleShopifyRoutes\`.

* authorize

  Completes sign-in at \`/account/authorize\`, the OAuth callback, and redirects the customer to the return path. Accepts \`GET\`.

  ```ts
  CallableRouteHandler<
      TContext,
      CustomerAccountRouteResult,
      typeof CUSTOMER_ACCOUNT_AUTHORIZE_PATH,
      "GET"
    >
  ```

* login

  Starts sign-in at \`/account/login\` and redirects the customer to Shopify's login page. Accepts \`GET\`. Pass \`return\_to\`, \`locale\`, \`acr\_values\`, \`login\_hint\`, and \`login\_hint\_mode\` as search params. The route sends the request context's country to Shopify.

  ```ts
  CallableRouteHandler<
      TContext,
      CustomerAccountRouteResult,
      typeof CUSTOMER_ACCOUNT_LOGIN_PATH,
      "GET"
    >
  ```

* logout

  Logs the customer out at \`/account/logout\`. Accepts \`POST\`. For CSRF protection, the route returns a \`403\` response unless the \`Origin\` or \`Referer\` header matches your storefront's origin. Through \`handleShopifyRoutes\`, a GET request to the logout path returns a \`405\` response. Log out with a \`\<form method="post" action="/account/logout">\` and a submit button, which works without JavaScript.

  ```ts
  CallableRouteHandler<
      TContext,
      CustomerAccountRouteResult,
      typeof CUSTOMER_ACCOUNT_LOGOUT_PATH,
      "POST"
    >
  ```

* refresh

  Refreshes the access token at \`/account/refresh\` and redirects the customer to the same-origin \`return\_to\` path, which defaults to \`/account\`. Accepts \`GET\`.

  ```ts
  CallableRouteHandler<
      TContext,
      CustomerAccountRouteResult,
      typeof CUSTOMER_ACCOUNT_REFRESH_PATH,
      "GET"
    >
  ```

### CallableRouteHandler

A route handler function that also carries the pathname and HTTP method it matches.

```ts
((context: TContext) => Promise<TResult>) & {
  readonly pathname: TPathname;
  readonly method: TMethod;
}
```

### CustomerAccountRouteResult

A redirect, or a \`403\` error when a logout request comes from another origin.

```ts
ShopifyRouteRedirectResult | ShopifyRouteErrorResult
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

### CustomerAccountServerHandlersWithCartSync

Customer account routes that also keep the cart's buyer identity in step with the signed-in customer. These routes need \`storefrontClient\` in the handler context.

* authorize

  Completes sign-in at \`/account/authorize\`, the OAuth callback, and redirects the customer to the return path. Accepts \`GET\`.

  ```ts
  CallableRouteHandler<
      TContext,
      CustomerAccountRouteResult,
      typeof CUSTOMER_ACCOUNT_AUTHORIZE_PATH,
      "GET"
    >
  ```

* login

  Starts sign-in at \`/account/login\` and redirects the customer to Shopify's login page. Accepts \`GET\`. Pass \`return\_to\`, \`locale\`, \`acr\_values\`, \`login\_hint\`, and \`login\_hint\_mode\` as search params. The route sends the request context's country to Shopify.

  ```ts
  CallableRouteHandler<
      TContext,
      CustomerAccountRouteResult,
      typeof CUSTOMER_ACCOUNT_LOGIN_PATH,
      "GET"
    >
  ```

* logout

  Logs the customer out at \`/account/logout\`. Accepts \`POST\`. For CSRF protection, the route returns a \`403\` response unless the \`Origin\` or \`Referer\` header matches your storefront's origin. Through \`handleShopifyRoutes\`, a GET request to the logout path returns a \`405\` response. Log out with a \`\<form method="post" action="/account/logout">\` and a submit button, which works without JavaScript.

  ```ts
  CallableRouteHandler<
      TContext,
      CustomerAccountRouteResult,
      typeof CUSTOMER_ACCOUNT_LOGOUT_PATH,
      "POST"
    >
  ```

* refresh

  Refreshes the access token at \`/account/refresh\` and redirects the customer to the same-origin \`return\_to\` path, which defaults to \`/account\`. Accepts \`GET\`.

  ```ts
  CallableRouteHandler<
      TContext,
      CustomerAccountRouteResult,
      typeof CUSTOMER_ACCOUNT_REFRESH_PATH,
      "GET"
    >
  ```

### Examples

* #### Create the account route handlers

  ##### Description

  Create handlers for the four account routes. This example sends customers to \`/account\` after a login without a return path, and to the home page after logout.

  ##### TypeScript

  ```ts
  import {
    createCustomerAccountServerHandlers,
    createCustomerSession,
  } from "@shopify/hydrogen/customer-account";

  const customerSession = createCustomerSession({
    shopId: process.env.SHOP_ID!,
    customerAccountApiClientId: process.env.PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID!,
  });

  export const customerAccountHandlers = createCustomerAccountServerHandlers({
    customerSession,
    defaultPostLoginRedirectPathname: "/account",
    loginFailedRedirectPath: "/account?login=failed",
    postLogoutRedirectUri: "/",
  });
  ```

* #### Link the signed-in customer to the cart

  ##### Description

  Share one customer session between the cart handlers and the customer account handlers. This example passes \`cartServerHandlers\` to add the customer to the cart at login and remove the customer at logout.

  ##### TypeScript

  ```ts
  import { createCartServerHandlers } from "@shopify/hydrogen";
  import {
    createCustomerAccountServerHandlers,
    createCustomerSession,
  } from "@shopify/hydrogen/customer-account";

  const customerSession = createCustomerSession({
    shopId: process.env.SHOP_ID!,
    customerAccountApiClientId: process.env.PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID!,
  });

  export const cartHandlers = createCartServerHandlers({ customerSession });

  export const customerAccountHandlers = createCustomerAccountServerHandlers({
    customerSession,
    cartServerHandlers: cartHandlers,
  });
  ```

***

## Account routes

Import each route path as a constant from `@shopify/hydrogen/customer-account`:

* `/account/login`: `CUSTOMER_ACCOUNT_LOGIN_PATH`
* `/account/authorize`: `CUSTOMER_ACCOUNT_AUTHORIZE_PATH`
* `/account/refresh`: `CUSTOMER_ACCOUNT_REFRESH_PATH`
* `/account/logout`: `CUSTOMER_ACCOUNT_LOGOUT_PATH`

***
