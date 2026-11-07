---
title: Request context
description: >-
  The createShopifyRequestContext function creates the context for one incoming
  request. Use the context to forward the customer's cookies, locale, and IP
  address to Shopify, and to apply Hydrogen's response headers.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/request-handling/create-shopify-request-context
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/request-handling/create-shopify-request-context.md
api_name: hydrogen
---

# Request context

The `createShopifyRequestContext` function creates the context for one incoming request. Use the context to forward the customer's cookies, locale, and IP address to Shopify, and to apply Hydrogen's response headers.

Import `createShopifyRequestContext` from `@shopify/hydrogen`.

Create one context per request, and pass the same context to [`createStorefrontClient`](https://shopify.dev/docs/api/hydrogen/latest/storefront-client/create-storefront-client), [`createCustomerAccountClient`](https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/create-customer-account-client), and [`handleShopifyRoutes`](https://shopify.dev/docs/api/hydrogen/latest/request-handling/handle-shopify-routes).

To resolve the customer's market for each request, refer to [Pass the market to the request context](https://shopify.dev/docs/storefronts/hydrogen/markets#step-2-pass-the-market-to-the-request-context).

***

## Context setup

## create​Shopify​Request​Context(**[input](#createshopifyrequestcontext-propertydetail-input)**​)

Creates the context for one incoming request. Pass the same context to the Storefront API client, the Customer Account API client, and `handleShopifyRoutes`. The context forwards the customer's cookies, locale, and privacy signal to Shopify, and adds Shopify's cookies and cache headers to your response.

Call `applyResponseHeaders()` on each response that your app builds. Pass `buyerIp` with the customer's trusted IP address when you use a private Storefront API client. The function throws when `i18n` lacks a country or language, and when `buyerIp` is an empty string.

### Parameters

* **input**

  **ShopifyRequestContextInputBase\<I18n> & { buyerIp?: string; }**

  **required**

  The incoming request, its locale, and the customer's IP address for private Storefront API clients.

### Returns

* **ShopifyRequestContext\<const I18n extends I18nConfig>**

  The context to pass to Hydrogen's API clients and route handlers for this request.

### ShopifyRequestContextInputBase

The incoming request and its locale.

* i18n

  The request's language, country, and optional localized path prefix.

  ```ts
  I18n
  ```

* request

  The incoming request from your framework. When the framework exposes no request, such as during prerendering, pass \`{ headers: new Headers() }\`.

  ```ts
  StorefrontRequest
  ```

### StorefrontRequest

The incoming request's headers, plus its method, abort signal, and URL when the framework provides them.

```ts
Pick<Request, "headers"> & Partial<Pick<Request, "method" | "signal" | "url">>
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

### Examples

* #### Create a request context

  ##### Description

  Create a context for the incoming request and build a client from it. This example applies the context's response headers to the final response.

  ##### TypeScript

  ```ts
  import {
    createShopifyRequestContext,
    createStorefrontClient,
    type StorefrontClient,
  } from "@shopify/hydrogen";

  export async function handleRequest(
    request: Request,
    next: (storefront: StorefrontClient) => Promise<Response>,
  ) {
    const requestContext = createShopifyRequestContext({
      request,
      i18n: { country: "US", language: "EN" },
    });

    const storefront = createStorefrontClient({
      type: "public",
      requestContext,
      config: { storeDomain: process.env.PUBLIC_STORE_DOMAIN! },
    });

    const routedResponse = await next(storefront);
    const response = new Response(routedResponse.body, routedResponse);
    requestContext.applyResponseHeaders(response.headers);
    return response;
  }
  ```

* #### Create a static context

  ##### Description

  Create a context without a request for prerendering. This example builds a \`private\_no\_buyer\_context\` client with a localized \`pathPrefix\`.

  ##### TypeScript

  ```ts
  import { createShopifyRequestContext, createStorefrontClient } from "@shopify/hydrogen";

  const requestContext = createShopifyRequestContext({
    request: { headers: new Headers() },
    i18n: { country: "CA", language: "FR", pathPrefix: "/fr-ca" },
  });

  export const prerenderStorefront = createStorefrontClient({
    type: "private_no_buyer_context",
    requestContext,
    config: {
      storeDomain: process.env.PUBLIC_STORE_DOMAIN!,
      privateStorefrontToken: process.env.PRIVATE_STOREFRONT_API_TOKEN!,
    },
  });
  ```

***
