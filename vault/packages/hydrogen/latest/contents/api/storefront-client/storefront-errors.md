---
title: Storefront API errors
description: >-
  The Storefront API client throws StorefrontApiError when a request fails and
  StorefrontTimeoutError when a request times out. Catch the errors to log the
  request ID for support and to show a fallback page.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/storefront-client/storefront-errors
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/storefront-client/storefront-errors.md
api_name: hydrogen
---

# Storefront API errors

The Storefront API client throws `StorefrontApiError` when a request fails and `StorefrontTimeoutError` when a request times out. Catch the errors to log the request ID for support and to show a fallback page.

Import `StorefrontApiError` and `StorefrontTimeoutError` from `@shopify/hydrogen`.

***

## Base error

#### StorefrontApiError

Signals that a Storefront API request failed. The client throws the error for an HTTP error status, a network failure, or a response body that isn't a JSON object.

GraphQL errors, including `THROTTLED`, don't throw. Read GraphQL errors from the result's `errors` field.

When the request context's signal or the call's `signal` aborts before the call, the client throws the abort reason and sends no request. An `AbortError` during the request reaches your code unchanged. Other abort reasons during the request throw a `StorefrontApiError`.

* **request​Id**

  **string**

  **required**

  The `x-request-id` header of the Storefront API response, when the response has one. Include the ID in support requests.

* **status**

  **number**

  **required**

  The HTTP status code of the response, when the request reached the server.

* **query​Text**

  **string**

  **required**

  The GraphQL query that failed. Hydrogen sets the value only in development builds.

* **variables**

  **Record\<string, unknown>**

  **required**

  The variables that the client sent with the request. Hydrogen sets the value only in development builds.

* **name**

  **string**

  **required**

  `StorefrontApiError`. `StorefrontTimeoutError` sets its own class name.

* **message**

  **string**

  **required**

  Describes the failure, such as the HTTP status that the API returned.

* **stack**

  **string**

  **required**

  The stack trace, when the JavaScript runtime records one.

* **to​JSON**

  **() => { name: string; message: string; requestId?: string; status?: number; }**

  **required**

  Returns the error name, message, request ID, and status for logging. The output leaves out the query text, variables, cause, and stack.

* **\_​\_​@to​String​Tag\@19344**

  **string**

  **required**

  Makes `Object.prototype.toString` report the error name, such as `[object StorefrontApiError]`.

### Examples

* #### Handle request failures

  ##### Description

  Catch Storefront API request failures and return a fallback. This example returns \`null\` for GraphQL errors and for \`StorefrontApiError\`, and rethrows anything else.

  ##### TypeScript

  ```ts
  import { gql, StorefrontApiError, type StorefrontClient } from "@shopify/hydrogen";

  const SHOP_QUERY = gql(`query { shop { name } }`);

  export async function getShopName(storefront: StorefrontClient) {
    try {
      const { data, errors } = await storefront.graphql(SHOP_QUERY);
      if (errors) return null;
      return data.shop.name;
    } catch (error) {
      if (error instanceof StorefrontApiError) {
        console.error("Storefront API request failed", error.status, error.requestId);
        return null;
      }
      throw error;
    }
  }
  ```

***

## Timeout error

#### StorefrontTimeoutError

Signals that a Storefront API request ran longer than the client's `defaultTimeoutInMs` setting. Aborts from the request context or the call's `signal` throw other errors.

`StorefrontTimeoutError` extends `StorefrontApiError`. Check for `StorefrontTimeoutError` first when you handle both errors.

* **timeout​In​Ms**

  **number**

  **required**

  The timeout that the request exceeded, in milliseconds.

* **name**

  **string**

  **required**

  Always `StorefrontTimeoutError`.

* **message**

  **string**

  **required**

  States the timeout, such as `"Storefront API request timed out after 30000ms"`.

* **stack**

  **string**

  **required**

  The stack trace, when the JavaScript runtime records one.

* **request​Id**

  **string**

  **required**

  The `x-request-id` header of the Storefront API response, when the response has one. Include the ID in support requests.

* **status**

  **number**

  **required**

  The HTTP status code of the response, when the request reached the server.

* **query​Text**

  **string**

  **required**

  The GraphQL query that failed. Hydrogen sets the value only in development builds.

* **variables**

  **Record\<string, unknown>**

  **required**

  The variables that the client sent with the request. Hydrogen sets the value only in development builds.

* **to​JSON**

  **() => { name: string; message: string; requestId?: string; status?: number; }**

  **required**

  Returns the error name, message, request ID, and status for logging. The output leaves out the query text, variables, cause, and stack.

* **\_​\_​@to​String​Tag\@19344**

  **string**

  **required**

  Makes `Object.prototype.toString` report the error name, such as `[object StorefrontApiError]`.

### Examples

* #### Catch a timeout

  ##### Description

  Set a 5-second timeout on the client and catch timeouts. This example checks \`StorefrontTimeoutError\` before \`StorefrontApiError\`.

  ##### TypeScript

  ```ts
  import {
    createShopifyRequestContext,
    createStorefrontClient,
    gql,
    StorefrontApiError,
    StorefrontTimeoutError,
  } from "@shopify/hydrogen";

  const storefront = createStorefrontClient({
    type: "public",
    requestContext: createShopifyRequestContext({
      request: { headers: new Headers() },
      i18n: { country: "US", language: "EN" },
    }),
    config: { storeDomain: "my-store.myshopify.com", defaultTimeoutInMs: 5_000 },
  });

  try {
    await storefront.graphql(gql(`query { shop { name } }`));
  } catch (error) {
    if (error instanceof StorefrontTimeoutError) {
      console.warn(`Timed out after ${error.timeoutInMs}ms`);
    } else if (error instanceof StorefrontApiError) {
      console.error(error.message);
    }
  }
  ```

***
