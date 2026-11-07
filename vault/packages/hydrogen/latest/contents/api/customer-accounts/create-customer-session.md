---
title: Customer sessions
description: >-
  The createCustomerSession function creates a server-only session that signs
  customers in and out with Shopify customer accounts. Use the session to check
  whether a customer is logged in, get an access token for Customer Account API
  requests, and run login, token refresh, and logout.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/create-customer-session
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/create-customer-session.md
api_name: hydrogen
---

# Customer sessions

The `createCustomerSession` function creates a server-only session that signs customers in and out with Shopify customer accounts. Use the session to check whether a customer is logged in, get an access token for Customer Account API requests, and run login, token refresh, and logout.

To serve the login, authorize, refresh, and logout routes, pass the session to [`createCustomerAccountServerHandlers`](https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/customer-account-server-handlers).

To set up customer login from end to end, refer to [Set up customer accounts](https://shopify.dev/docs/storefronts/hydrogen/customer-accounts).

Import `createCustomerSession` from `@shopify/hydrogen/customer-account`.

Create the session once at module scope.

***

## Session setup

## create​Customer​Session(**[input1](#createcustomersession-propertydetail-input1)**​)

Creates a customer session that signs customers in and out with Shopify customer accounts and manages their access tokens. Use the session on the server only.

The function throws when the shop ID, client ID, API URL, or timeout is invalid, when no fetch implementation is available, and when the function runs in a browser.

### Parameters

* **input1**

  **CreateCustomerSessionOptions**

  **required**

  The shop ID, the OAuth client ID, the authentication base URL, a custom fetch, and the token request timeout.

### Returns

* **CustomerSessionWithInternals**

  A customer session with methods for sign-in, the OAuth callback, access tokens, and logout.

### CreateCustomerSessionOptions

Options for creating a customer session.

* customerAccountApiClientId

  The Customer Account API OAuth client ID. Must contain at least one non-whitespace character.

  ```ts
  string
  ```

* customerAccountApiUrl

  The base URL for Shopify's OAuth authorize, token, and logout endpoints. Defaults to \`https://shopify.com/authentication/{shopId}\`. The URL must use HTTPS, or creating the session throws. Sign-in fails with the \`issuer\_mismatch\` code when the ID token's issuer differs from this URL.

  ```ts
  string
  ```

* defaultTimeoutInMs

  The timeout for OAuth token requests in milliseconds. Must be a positive integer no greater than 2,147,483,647. Defaults to \`30000\`.

  ```ts
  number
  ```

* fetch

  A custom fetch implementation. Defaults to the global fetch.

  ```ts
  { (input: RequestInfo | URL, init?: RequestInit): Promise<Response>; (input: string | Request | URL, init?: RequestInit): Promise<Response>; }
  ```

* shopId

  Numeric Shopify shop ID as a string of digits, such as \`12345\`.

  ```ts
  string
  ```

### CustomerSessionWithInternals

A customer session that \`createCustomerSession\` returns. Cart buyer identity sync requires this session.

```ts
CustomerSession & {
  readonly [CUSTOMER_SESSION_INTERNAL_BRAND]: true;
}
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

#### CustomerSession

Signs customers in and out with Shopify customer accounts, and gives your server their Customer Account API access tokens. Use the session on the server only.

Pass your session storage and the request context to each method. Each method makes the final response private and uncacheable.

* **get​Access​Token**

  **(sessionManager: ReadonlyCustomerSessionManager, requestContext: ShopifyRequestContext) => Promise\<string>**

  **required**

  Returns the customer's stored access token, or `undefined` when the token is missing or expired. The method never refreshes the token or writes to the session. Call `getOrRefreshAccessToken()` to refresh an expired token.

* **get​Or​Refresh​Access​Token**

  **(sessionManager: ShopifyRouteSessionManager, requestContext: ShopifyRequestContext, options?: RequestOriginOptions) => Promise\<string>**

  **required**

  Returns a usable access token for the customer. When the stored token is missing or expired, the session gets new tokens from Shopify and writes them to your session storage. Call the method only where you commit the session to the response.

  Returns `undefined` when the customer has no refresh token, or when a temporary refresh failure keeps the session for a retry. When Shopify rejects the refresh token with a `400` or `401` status, the session clears the stored tokens and returns `undefined`. Refresh failures never throw.

* **handle​OAuth​Callback**

  **(sessionManager: ShopifyRouteSessionManager, requestContext: ShopifyRequestContext, request: Request) => Promise\<string>**

  **required**

  Completes sign-in from Shopify's OAuth callback request, saves the customer's tokens to your session storage, and returns the path to send the customer to. Commit the session to the response after the call.

  The method throws `CustomerAccountOAuthError` when sign-in fails a check, and `CustomerAccountApiError` when the token request times out. After a failure, the customer needs to start sign-in again.

* **is​Logged​In**

  **(sessionManager: ReadonlyCustomerSessionManager, requestContext: ShopifyRequestContext) => Promise\<boolean>**

  **required**

  Returns `true` when the customer has a usable access token or a refresh token. The method never refreshes tokens.

  Use the result for UI state, such as an account link. Gate Customer Account API data on an access token from `getOrRefreshAccessToken()`.

* **logout**

  **(sessionManager: ShopifyRouteSessionManager, requestContext: ShopifyRequestContext, options?: LogoutOptions) => Promise\<string>**

  **required**

  Clears the customer's session data and returns the URL to send the customer to. Commit the session to the response after the call.

  When the session has an ID token, the URL points to Shopify's logout endpoint with the post-logout URL attached. Without an ID token, the method returns the post-logout URL.

* **prepare​Login​Url**

  **(sessionManager: ShopifyRouteSessionManager, requestContext: ShopifyRequestContext, options: PrepareLoginUrlOptions) => Promise\<string>**

  **required**

  Starts customer sign-in and returns the URL of Shopify's login page. Commit the session to the response, then redirect the customer to the URL.

  The customer has 10 minutes to finish signing in. After that, the OAuth callback fails with the `missing_pending_login` code.

### Examples

* #### Create a customer session

  ##### Description

  Create the session at module scope and decide where to send a customer before an account page loads. This example sends a logged-out customer to login, a customer without a usable access token to the refresh route, and a customer whose refresh already ran during the visit back to login.

  ##### TypeScript

  ```ts
  import type { ShopifyRequestContext } from "@shopify/hydrogen";
  import {
    createCustomerSession,
    type ReadonlyCustomerSessionManager,
  } from "@shopify/hydrogen/customer-account";

  export const customerSession = createCustomerSession({
    shopId: process.env.SHOP_ID!,
    customerAccountApiClientId: process.env.PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID!,
  });

  const LOGIN_PATH = "/account/login?return_to=/account";

  export async function getAccountRedirect(
    request: Request,
    sessionManager: ReadonlyCustomerSessionManager,
    requestContext: ShopifyRequestContext,
  ) {
    if (!(await customerSession.isLoggedIn(sessionManager, requestContext))) {
      return LOGIN_PATH;
    }

    const accessToken = await customerSession.getAccessToken(sessionManager, requestContext);
    if (!accessToken) {
      // A refresh already ran for this visit. Send the customer to login to avoid a redirect loop.
      if (new URL(request.url).searchParams.has("refreshed")) {
        return LOGIN_PATH;
      }
      return `/account/refresh?return_to=${encodeURIComponent("/account?refreshed=1")}`;
    }

    return null;
  }
  ```

***

## Session managers

Each session method takes a session manager that reads or writes your session storage. Pick the manager type by method:

* `isLoggedIn()` and `getAccessToken()` only read the session and accept a read-only session manager.
* `getOrRefreshAccessToken()`, `prepareLoginUrl()`, `handleOAuthCallback()`, and `logout()` write to the session and need a writable session manager.

***
