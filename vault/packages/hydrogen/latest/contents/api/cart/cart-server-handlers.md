---
title: Cart server handlers
description: >-
  The cart server handlers serve the /api/cart route, which loads and updates
  the customer's cart through the Storefront API. Use these functions to
  register the cart route, load the cart in server loaders, parse cart requests
  in custom routes, and set the cart cookie.
api_version: 2026-10
source_url:
  html: 'https://shopify.dev/docs/api/hydrogen/latest/cart/cart-server-handlers'
  md: 'https://shopify.dev/docs/api/hydrogen/latest/cart/cart-server-handlers.md'
api_name: hydrogen
---

# Cart server handlers

The cart server handlers serve the `/api/cart` route, which loads and updates the customer's cart through the Storefront API. Use these functions to register the cart route, load the cart in server loaders, parse cart requests in custom routes, and set the `cart` cookie.

Import `createCartServerHandlers`, `parseCartRequest`, `getCart`, `getCartId`, `createCartCookie`, and `CartDataFromQuery` from `@shopify/hydrogen`.

Pass the handlers to [`handleShopifyRoutes`](https://shopify.dev/docs/api/hydrogen/latest/request-handling/handle-shopify-routes) to serve the cart route before your framework's router runs.

To build a cart from the handlers to the cart UI, refer to [Build cart UI](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart).

***

## Cart route

## create​Cart​Server​Handlers(**[options](#createcartserverhandlers-propertydetail-options)**​)

Creates the handlers for the `/api/cart` route, which loads and changes the customer's cart.

The handlers read the cart ID from the `cart` cookie and set the cookie when they create a cart. A JSON request gets a JSON response, and a form submission gets a `303` redirect to the referring page.

Pass `customerSession` to connect carts to the logged-in customer. The handlers then need `sessionManager` and `requestContext` in their context.

### Parameters

* **options**

  **CreateCartServerHandlersOptions\<AnyStorefrontQueryString>**

  A custom cart fragment and the customer session.

### Returns

* **CartServerHandlers | CartServerHandlersWithCustomerSession**

  The GET and POST handlers to register with `handleShopifyRoutes`.

### CreateCartServerHandlersOptions

Options for creating cart server handlers.

```ts
CartServerHandlersOptionsWithCustomerSession<TCartFragment> | CartServerHandlersOptionsWithoutCustomerSession<TCartFragment>
```

### CartServerHandlersOptionsWithCustomerSession

Options for cart server handlers that attach the logged-in customer to new carts.

* customerSession

  The customer session from \`createCustomerSession\`. Pass the session to attach the logged-in customer to new carts.

  ```ts
  CartCustomerSession
  ```

* fragment

  A cart fragment that adds fields to the cart in every cart query and mutation response. Name the fragment \`CartFragment\` on the \`Cart\` type. \`createCartServerHandlers\` throws for any other fragment name or type.

  ```ts
  TCartFragment
  ```

### CartCustomerSession

The customer session from \`createCustomerSession\`. The cart handlers read the customer's login state and access token from the session.

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

### CartServerHandlersOptionsWithoutCustomerSession

Options for cart server handlers without a customer session.

* customerSession

  Leave the option out to create carts without a customer.

  ```ts
  undefined
  ```

* fragment

  A cart fragment that adds fields to the cart in every cart query and mutation response. Name the fragment \`CartFragment\` on the \`Cart\` type. \`createCartServerHandlers\` throws for any other fragment name or type.

  ```ts
  TCartFragment
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

### CartServerHandlers

The cart route handlers that \`createCartServerHandlers\` returns. Register the handlers with \`handleShopifyRoutes\` to serve the \`/api/cart\` route that the cart store calls.

* \_\_@cartServerHandlersCartQuery\@23509

  The cart query document that the handlers run.

  ```ts
  TCartQuery | undefined
  ```

* get

  Returns the current cart. The handler reads the cart ID from the request's \`cartId\` search parameter or \`cart\` cookie. Without a request, the handler reads the cart ID from the Storefront API client's request context. GraphQL errors return a \`null\` cart with the errors in the response body. The handler throws when the Storefront API request fails.

  ```ts
  CartGetHandler<TCart>
  ```

* post

  Runs the cart change that the request describes and returns the updated cart. An add without a cart creates a cart and sets the \`cart\` cookie. Other changes without a cart return a \`missing\_cart\` error for a JSON request and a redirect for a form submission. When a JSON body names a cart other than the cookie's cart, the handler leaves the cookie unchanged. The handler throws GraphQL and network errors from the mutation.

  ```ts
  CartPostHandler
  ```

### CartGetHandler



### CartPostHandler



### CartServerHandlersWithCustomerSession

The cart route handlers that \`createCartServerHandlers\` returns when you pass \`customerSession\`. The handlers connect carts to the logged-in customer. Pass \`sessionManager\` and \`requestContext\` in each handler's context. A handler throws when it reads the customer session and either value is missing.

* \_\_@cartBuyerIdentitySync\@21922

  Connects the cart to the customer when the customer logs in, and disconnects the cart when the customer logs out. Create the cart server handlers with \`customerSession\`, then pass the handlers to \`createCustomerAccountServerHandlers\` through the \`cartServerHandlers\` option. The customer account handlers then update the cart for you.

  ```ts
  CartBuyerIdentitySync
  ```

* \_\_@cartServerHandlersCartQuery\@23509

  The cart query document that the handlers run.

  ```ts
  TCartQuery | undefined
  ```

* get

  Returns the cart like the GET handler in \`CartServerHandlers\`. For a logged-in customer, the handler adds \`logged\_in=true\` to the checkout URL.

  ```ts
  CartGetHandler<TCart, CartGetHandlerContext & CartCustomerSessionReadContext>
  ```

* post

  Runs cart changes like the POST handler in \`CartServerHandlers\`. When an add creates a cart for a logged-in customer, the handler attaches the customer to the new cart. When the handler refreshes the customer's access token and the mutation then fails, the handler returns a \`cart\_mutation\_failed\` error with status \`500\`.

  ```ts
  CartPostHandler<CartPostHandlerContext & CartCustomerSessionWriteContext>
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

### CartGetHandlerContext

The context that you pass to the cart GET handler.

* request

  The incoming request. Omit the request to read the cart ID from the Storefront API client's request context.

  ```ts
  Request
  ```

* storefrontClient

  The Storefront API client that runs the cart query.

  ```ts
  StorefrontClient
  ```

### CartCustomerSessionReadContext

The extra context that the GET handler needs when you create the handlers with \`customerSession\`.

* requestContext

  The current request's context, for checking the customer's login state.

  ```ts
  ShopifyRequestContext
  ```

* sessionManager

  The session storage that holds the customer's tokens.

  ```ts
  ReadonlyCustomerSessionManager
  ```

### CartPostHandlerContext

The context that you pass to the cart POST handler.

* request

  The cart request, with a JSON, URL-encoded form, or multipart form body.

  ```ts
  Request
  ```

* storefrontClient

  The Storefront API client that runs the cart mutation.

  ```ts
  StorefrontClient
  ```

### CartCustomerSessionWriteContext

The extra context that the POST handler needs when you create the handlers with \`customerSession\`.

* requestContext

  The current request's context, for reading or refreshing the customer's access token.

  ```ts
  ShopifyRequestContext
  ```

* sessionManager

  The session storage that holds the customer's tokens. After a token refresh, the handler commits the session and adds its \`Set-Cookie\` headers to the response.

  ```ts
  WritableCustomerSessionManager
  ```

### WritableCustomerSessionManager

The session storage that sign-in, the OAuth callback, token refresh, and logout write to. Commit the session to the response after you call \`prepareLoginUrl()\`, \`handleOAuthCallback()\`, \`getOrRefreshAccessToken()\`, or \`logout()\`.

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

#### CartGetResult

The JSON result that the cart GET handler returns. The handler sets private cache headers that keep CDNs and shared caches from storing the cart.

* **data**

  **TData**

  **required**

  The value that Hydrogen serializes as the response body.

* **type**

  **'json'**

  **required**

  Set to `json` for a JSON response.

* **headers**

  **HeadersInit**

  Extra headers for the response. Hydrogen sets `content-type` to `application/json` and overrides any value you pass.

#### CartGetData

The response body that the cart GET handler returns.

* **cart**

  **TCart | null**

  **required**

  The cart, or `null` when the request has no cart ID, the cart doesn't exist, or the cart query returns GraphQL errors.

* **errors**

  **Array<{ message: string }>**

  GraphQL errors from the cart query. The handler also logs the errors on the server.

`CartPostResult` is the route result that the cart POST handler returns. Check `type` to tell the results apart:

* `json` answers a JSON request with the same fields as [`CartGetResult`](#cartgetresult). The result's `data` holds the mutation's `cart`, `userErrors`, and `warnings`.
* [`redirect`](#shopifyrouteredirectresult) answers a form submission with a `303` redirect to the referring page.
* [`error`](#shopifyrouteerrorresult) holds a [`CartError`](#carterror) with a code that identifies the failure.

#### ShopifyRouteRedirectResult

A route handler result that Hydrogen sends as a redirect response.

* **location**

  **string**

  **required**

  The redirect target. Hydrogen resolves a relative path against the request's origin.

* **type**

  **'redirect'**

  **required**

  Set to `redirect` for a redirect response.

* **headers**

  **HeadersInit**

  Extra headers for the redirect response.

* **status**

  **ShopifyRedirectStatus**

  The HTTP redirect status. Defaults to `303`.

### ShopifyRedirectStatus

The HTTP status codes a route handler can use for a redirect.

```ts
301 | 302 | 303 | 307 | 308
```

#### ShopifyRouteErrorResult

A route handler result that Hydrogen sends as a JSON error response.

* **error**

  **TError**

  **required**

  The error that Hydrogen serializes as the response body's `error` field.

* **type**

  **'error'**

  **required**

  Set to `error` for an error response.

* **headers**

  **HeadersInit**

  Extra headers for the error response. Hydrogen sets `content-type` to `application/json` and overrides any value you pass.

* **status**

  **number**

  The HTTP status for the error response. Defaults to `400`.

#### CartError

An error that the cart POST handler returns, with a code that identifies the failure.

* **code**

  **CartErrorCode**

  **required**

  The code that identifies the failure.

* **message**

  **string**

  **required**

  A human-readable error message.

### CartErrorCode

Error codes that the cart POST handler returns. The handler returns \`invalid\_cart\_request\` when it can't parse a JSON request, and \`missing\_cart\` when a JSON request changes the cart but has no cart ID. With \`customerSession\`, the handler returns \`cart\_mutation\_failed\` when a mutation fails after the handler refreshes the customer's access token.

```ts
"invalid_cart_request" | "missing_cart" | "cart_mutation_failed"
```

### Examples

* #### Register the cart route

  ##### Description

  Create the handlers once at module scope and pass the handlers to \`handleShopifyRoutes\` before your framework's router runs.

  ##### TypeScript

  ```ts
  import {
    createCartServerHandlers,
    handleShopifyRoutes,
    type ShopifyRouteHandlerContext,
  } from "@shopify/hydrogen";

  export const cartHandlers = createCartServerHandlers();

  export function handleRequest(
    context: ShopifyRouteHandlerContext,
    next: () => Promise<Response>,
  ) {
    const shopifyRoute = handleShopifyRoutes({
      ...context,
      handlers: [cartHandlers],
    });
    if (shopifyRoute) return shopifyRoute;

    return next();
  }
  ```

* #### Add custom cart fields

  ##### Description

  Add your own cart fields to every cart query and mutation with a \`CartFragment\`.

  ##### TypeScript

  ```ts
  import { createCartServerHandlers, gql } from "@shopify/hydrogen";

  const cartFragment = gql(`
    fragment CartFragment on Cart {
      lines(first: 250) {
        nodes {
          merchandise {
            ... on ProductVariant {
              availableForSale
            }
          }
        }
      }
    }
  `);

  export const cartHandlers = createCartServerHandlers({
    fragment: cartFragment,
  });
  ```

* #### Load the cart on the server

  ##### Description

  Call \`cartHandlers.get()\` directly and return a promise of its data for streaming.

  ##### TypeScript

  ```ts
  import { createCartServerHandlers, type StorefrontClient } from "@shopify/hydrogen";

  const cartHandlers = createCartServerHandlers();

  export async function loader(storefrontClient: StorefrontClient) {
    const cartData = cartHandlers.get({ storefrontClient }).then(({ data }) => data);

    return { cartData };
  }
  ```

***

## Cart request helpers

## parse​Cart​Request(**[request](#parsecartrequest-propertydetail-request)**​)

Reads the cart change from a cart request body. Use the function in a custom cart route.

The function accepts `application/json`, `application/x-www-form-urlencoded`, and `multipart/form-data` requests. A JSON request can replace every discount code, and a form submission applies or removes one code.

A form submission always returns a `null` cart ID. Read the cart ID for a form submission with `getCartId`.

The function reads the request body, and you can't read the body again afterward. The function throws when the request has an unsupported content type, an unknown intent, or a missing required field, and when a JSON body combines more than one of `lines`, `discountCodes`, `attributes`, and `note`.

### Parameters

* **request**

  **Request**

  **required**

  The incoming cart request.

### Returns

* **Promise\<ParsedCartRequest>**

  The cart change and, for a JSON body, the cart ID.

### ParsedCartRequest

The cart change and the cart ID that \`parseCartRequest\` reads from the request body.

* action

  A cart change that \`parseCartRequest\` reads from a JSON or form request. The \`intent\` field names the change and the Storefront API mutation that applies the change: - \`add\` adds new lines with \`cartLinesAdd\`, or creates a cart with \`cartCreate\` when none exists. - \`update\` changes quantity, merchandise, or attributes on existing lines with \`cartLinesUpdate\`. - \`remove\` removes lines by ID with \`cartLinesRemove\`. - \`discount-update\` replaces all discount codes with \`cartDiscountCodesUpdate\`. - \`discount-apply\` adds one discount code. The handler reads the current codes, then writes the new list with \`cartDiscountCodesUpdate\`. - \`discount-remove\` removes one discount code with the same read-then-write approach. - \`attributes-update\` sets cart-level attributes with \`cartAttributesUpdate\`. - \`note-update\` sets the cart note with \`cartNoteUpdate\`.

  ```ts
  CartAction
  ```

* cartId

  The cart GID from a JSON body, or \`null\` for a form submission or a JSON body without a cart ID. The function adds the \`gid://shopify/Cart/\` prefix to a bare cart token.

  ```ts
  string | null
  ```

### CartAction



## get​Cart(**[cartId](#getcart-propertydetail-cartid)**​,**[storefront](#getcart-propertydetail-storefront)**​,**[cartQuery](#getcart-propertydetail-cartquery)**​)

Fetches a cart by ID from the Storefront API.

Pass a custom cart query to get a cart with that query's fields. Declare an `$id` variable in the query. The function passes the cart ID as the query's only variable.

When the cart ID is `null`, the function returns a `null` cart without a network request. The function throws when the Storefront API request fails.

### Parameters

* **cart​Id**

  **string**

  **required**

  The ID of the cart to fetch, or `null` to skip the request.

* **storefront**

  **StorefrontCartClient**

  **required**

  The Storefront API client that runs the cart query.

* **cart​Query**

  **AnyStorefrontQueryString**

  A cart query document that replaces the default cart query.

### Returns

* **Promise\<CartResult\<CartData>>**

  The cart or `null`, any GraphQL errors, and the Storefront API response headers.

### StorefrontCartClient

The Storefront API client that runs the cart query.

* graphql

  Runs a Storefront API query or mutation and returns a typed result. Pass a \`gql\` document or a plain query string. When the operation declares \`$country\` or \`$language\`, the client sets the variable from the request context and overrides any value you pass. The method throws an error when a query passes a \`cache\` strategy and the client has no cache, or when the strategy uses \`private\` mode. A catch block for \`StorefrontApiError\` doesn't catch this configuration error. To cache customer-specific data, use \`createRunWithCache\` with a key unique to the customer.

  ```ts
  <const Doc extends DocLike | string>(doc: Doc, ...options: GqlRestParam<ResolveDoc<Doc>, {}>) => Promise<StorefrontGraphqlResult<ResolveDoc<Doc>>>
  ```

### CartResult

The cart that \`getCart\` returns, with any GraphQL errors and the Storefront API response headers.

* cart

  The cart, or \`null\` when the cart ID is missing, the cart doesn't exist, or the query fails.

  ```ts
  TCart | null
  ```

* errors

  GraphQL errors from the cart query.

  ```ts
  Array<{ message: string }>
  ```

* headers

  The Storefront API response headers, such as cache directives. The headers are empty when \`getCart\` skips the request.

  ```ts
  Headers
  ```

### CartData

The customer's cart, in the shape that the Storefront API returns. Cart costs come only from the server. Extra fields from your custom cart fragment appear unchanged.

* \[key: string]

  ```ts
  unknown
  ```

* attributes

  Cart-level custom attributes.

  ```ts
  Attribute[]
  ```

* checkoutUrl

  The Shopify checkout URL. The URL can change when the customer logs in or out, or changes tracking consent.

  ```ts
  string | null
  ```

* cost

  The cart's subtotal, total, and checkout charge.

  ```ts
  CartCost
  ```

* discountCodes

  Discount codes applied to the cart, with their applicability.

  ```ts
  DiscountCode[]
  ```

* id

  The cart's Storefront API GID, or \`null\` when no cart exists yet.

  ```ts
  string | null
  ```

* lines

  The cart's line items.

  ```ts
  CartLineConnection
  ```

* note

  Customer-supplied cart note, or \`null\` or empty when unset.

  ```ts
  string | null
  ```

* totalQuantity

  Sum of all line quantities.

  ```ts
  number
  ```

* updatedAt

  The cart's last update time in ISO 8601 format. Absent until the first server response.

  ```ts
  string
  ```

### Attribute

A key-value pair attached to the cart or to an individual cart line.

* key

  The attribute name. Look up the attribute's errors with this name.

  ```ts
  string
  ```

* value

  The attribute value.

  ```ts
  string | null
  ```

### CartCost

The cart's costs from the Storefront API.

* checkoutChargeAmount

  Estimated amount due at checkout, excluding deferred payments. Equals the subtotal when no deferred payments exist.

  ```ts
  Money
  ```

* subtotalAmount

  The amount, before taxes and cart-level discounts, for the customer to pay.

  ```ts
  Money
  ```

* totalAmount

  Final amount the customer pays at checkout.

  ```ts
  Money
  ```

### Money

A monetary value from the Storefront API.

* amount

  The decimal amount as a string, such as \`29.99\`.

  ```ts
  string
  ```

* currencyCode

  The ISO 4217 currency code, such as \`USD\`.

  ```ts
  string
  ```

### DiscountCode

A discount code applied to the cart.

* applicable

  Whether the code applies to the cart's current contents. A new code reads \`false\` until the server responds.

  ```ts
  boolean
  ```

* code

  The discount code text. Look up the code's pending state and errors with this value.

  ```ts
  string
  ```

### CartLineConnection

The cart's line items in the Storefront API connection shape.

* \[key: string]

  ```ts
  unknown
  ```

* nodes

  The cart lines that the cart query returns.

  ```ts
  CartLine[]
  ```

### CartLine

A single line item in the cart. Each line holds a product variant at a quantity. A line can carry custom attributes, a selling plan allocation for a subscription, or line components for a bundle.

* attributes

  Custom key-value attributes attached to the line.

  ```ts
  Attribute[]
  ```

* cost

  Per-line cost breakdown from the Storefront API.

  ```ts
  CartLineCost
  ```

* id

  The cart line's Storefront API GID. Look up the line's pending state and errors with this ID.

  ```ts
  string
  ```

* lineComponents

  Nested child lines when this line is a bundle parent.

  ```ts
  CartLine[]
  ```

* merchandise

  The product variant on the line.

  ```ts
  CartLineMerchandise
  ```

* parentRelationship

  The parent line's ID when this line is a bundle component.

  ```ts
  { parent: { id: string } } | null
  ```

* quantity

  Number of units of this merchandise in the cart.

  ```ts
  number
  ```

* sellingPlanAllocation

  Subscription selling plan allocation, or \`null\` for one-time purchases.

  ```ts
  { sellingPlan: { id: string } } | null
  ```

### CartLineCost

A cart line's costs from the Storefront API.

* amountPerQuantity

  Unit price for a single quantity of this line.

  ```ts
  Money
  ```

* compareAtAmountPerQuantity

  Original compare-at unit price, or \`null\` when no comparison exists.

  ```ts
  Money | null
  ```

* subtotalAmount

  Line subtotal before line-level discounts.

  ```ts
  Money
  ```

* totalAmount

  Line total after all applicable discounts.

  ```ts
  Money
  ```

### CartLineMerchandise

The product variant on a cart line.

* \[key: string]

  ```ts
  unknown
  ```

* id

  Storefront API GID of the product variant.

  ```ts
  string
  ```

* image

  The variant image that the cart query selects.

  ```ts
  {
      id?: string | null;
      url: string;
      altText?: string | null;
      width?: number | null;
      height?: number | null;
      [key: string]: unknown;
    } | null
  ```

* product

  The product that the variant belongs to.

  ```ts
  { [key: string]: unknown; title: string; handle?: string; }
  ```

* quantityAvailable

  Units available for sale. When your cart fragment selects the field, the store caps the quantity of a \`set\` submission at this number.

  ```ts
  number | null
  ```

* selectedOptions

  The variant's selected options as name and value pairs.

  ```ts
  Array<{ name: string; value: string }>
  ```

* title

  The variant title, such as \`"Small / Black"\`.

  ```ts
  string
  ```

## get​Cart​Id(**[input](#getcartid-propertydetail-input)**​)

Reads the cart ID from a request.

The function checks the `cartId` search parameter first, then the `cart` cookie. The function returns a search parameter value unchanged and adds the `gid://shopify/Cart/` prefix to a cookie value.

### Parameters

* **input**

  **CartIdSource**

  **required**

  The request or request context that carries the cart ID.

### Returns

* **string | null**

  The cart ID, or `null` when neither the search parameter nor the cookie has one.

### CartIdSource

A request, or a request context with a \`Cookie\` header and a URL.

```ts
Request | Pick<ShopifyRequestContext, "cookie" | "url">
```

### Examples

* #### Parse a cart request in a custom route

  ##### Description

  Parse a cart request and fall back to \`getCartId\` for the cart ID. This example returns a \`400\` response when parsing fails and a \`404\` response when no cart exists.

  ##### TypeScript

  ```ts
  import { cartQueries, getCartId, parseCartRequest, type StorefrontClient } from "@shopify/hydrogen";

  export async function handleCartPost(request: Request, storefrontClient: StorefrontClient) {
    const parsed = await parseCartRequest(request).catch(() => null);
    if (!parsed) return Response.json({ error: "Invalid cart request" }, { status: 400 });

    const cartId = parsed.cartId ?? getCartId(request);
    if (!cartId) return Response.json({ error: "No cart exists" }, { status: 404 });

    const { action } = parsed;
    switch (action.intent) {
      case "remove": {
        const { data } = await storefrontClient.graphql(cartQueries.cartLinesRemove, {
          variables: { cartId, lineIds: action.lineIds },
        });
        return Response.json(data);
      }
      case "note-update": {
        const { data } = await storefrontClient.graphql(cartQueries.cartNoteUpdate, {
          variables: { cartId, note: action.note },
        });
        return Response.json(data);
      }
      default:
        return Response.json({ error: `Unsupported intent ${action.intent}` }, { status: 400 });
    }
  }
  ```

***

## Cart cookie

## create​Cart​Cookie(**[cartId](#createcartcookie-propertydetail-cartid)**​)

Creates the `Set-Cookie` header value that stores the cart ID in the `cart` cookie.

The cookie holds the cart token without the `gid://shopify/Cart/` prefix and expires after 14 days. The cookie sets `Path=/` and `SameSite=Lax`, and leaves out `HttpOnly` and `Secure`. Append the value to the response headers to keep the response's other cookies.

### Parameters

* **cart​Id**

  **string**

  **required**

  The cart GID or cart token to store.

### Returns**string**

* The header value that sets the `cart` cookie.

### Examples

* #### Set the cart cookie

  ##### Description

  Create a cart with a discount code and attach the cookie to a \`303\` redirect.

  ##### TypeScript

  ```ts
  import { cartQueries, createCartCookie, type StorefrontClient } from "@shopify/hydrogen";

  export async function createCartWithDiscount(code: string, storefrontClient: StorefrontClient) {
    const { data } = await storefrontClient.graphql(cartQueries.cartCreate, {
      variables: { input: { discountCodes: [code] } },
    });
    const cart = data?.cartCreate?.cart;

    const headers = new Headers({ location: "/" });
    if (cart) headers.append("set-cookie", createCartCookie(cart.id));

    return new Response(null, { status: 303, headers });
  }
  ```

***

## Server-rendered cart

Call `cartHandlers.get()` in a loader and pass the result's data, or a promise of it, to the `initialData` prop of the [cart provider](https://shopify.dev/docs/api/hydrogen/latest/cart/create-cart-components).

***

## Type helpers

`CartDataFromQuery` types the cart that a custom cart query returns, such as a loader's return value or a component prop. Pass the query's type, such as `CartDataFromQuery<typeof CUSTOM_CART_QUERY>`. Your query's cart fields replace the matching fields of the default cart data type. A query without a `cart` field gets the default cart data type.

***
