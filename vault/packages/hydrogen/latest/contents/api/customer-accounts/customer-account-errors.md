---
title: Customer account errors
description: >-
  The customer account error classes tell you why a Customer Account API request
  or a customer login failed. Use the classes to retry rate-limited requests,
  send customers to login when a token is missing, recover from failed logins,
  and render fallbacks for slow requests.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/customer-account-errors
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/customer-account-errors.md
api_name: hydrogen
---

# Customer account errors

The customer account error classes tell you why a Customer Account API request or a customer login failed. Use the classes to retry rate-limited requests, send customers to login when a token is missing, recover from failed logins, and render fallbacks for slow requests.

Import `CustomerAccountApiError`, `CustomerAccountAuthenticationError`, `CustomerAccountOAuthError`, and `CustomerAccountTimeoutError` from `@shopify/hydrogen/customer-account`.

***

## Class hierarchy

Check each error with `instanceof`, in an order that follows the class hierarchy:

* The authentication and timeout error classes extend `CustomerAccountApiError`. Check the subclasses before the base class.
* `CustomerAccountOAuthError` extends `Error` directly. Only the OAuth callback throws `CustomerAccountOAuthError`.

***

## Base error

#### CustomerAccountApiError

The error that a Customer Account API request throws when the request fails. The client throws this error for a non-OK HTTP status, a response that isn't valid GraphQL, a response without data, or a network failure. The OAuth callback also throws this error when its token request times out.

Catch this class to handle every Customer Account API failure, including authentication and timeout errors. Read `status`, `requestId`, and `retryAfter` to handle the failure. Network failures have no status or request ID, and only non-OK responses include a retry-after value.

* **status**

  **number**

  **required**

  The HTTP status of the response, including a response that Hydrogen can't parse.

* **request​Id**

  **string**

  **required**

  The response's `x-request-id` header. Include the ID in Shopify support requests.

* **retry​After**

  **string**

  **required**

  The `retry-after` header on a non-OK response. Use the value to schedule a retry of a rate-limited request.

* **name**

  **string**

  **required**

  `CustomerAccountApiError`. Each subclass sets its own class name.

* **message**

  **string**

  **required**

  Describes the failure, such as the HTTP status that the API returned.

* **stack**

  **string**

  **required**

  The stack trace, when the JavaScript runtime records one.

### Examples

* #### Handle rate limits

  ##### Description

  Catch a rate-limited Customer Account API response. This example logs the retry delay and request ID.

  ##### TypeScript

  ```ts
  import {
    CustomerAccountApiError,
    gql,
    type CustomerAccountClient,
  } from "@shopify/hydrogen/customer-account";

  const CUSTOMER_QUERY = gql(`query CurrentCustomer { customer { firstName } }`);

  export async function getFirstName(client: CustomerAccountClient, accessToken: string) {
    try {
      const result = await client.graphql(CUSTOMER_QUERY, { accessToken });
      return result.errors ? null : result.data.customer.firstName;
    } catch (error) {
      if (error instanceof CustomerAccountApiError && error.status === 429) {
        console.warn(`Retry after ${error.retryAfter}. Request ID ${error.requestId}.`);
        return null;
      }
      throw error;
    }
  }
  ```

***

## Authentication error

#### CustomerAccountAuthenticationError

The error that a Customer Account API request throws when the access token is missing or malformed. The client throws this error before it sends the request when the token is empty, has leading or trailing whitespace, or contains control characters. The client also throws this error when you omit the options argument.

When the API rejects a token, the client throws `CustomerAccountApiError` with the response status.

* **name**

  **string**

  **required**

  Always `CustomerAccountAuthenticationError`.

* **message**

  **string**

  **required**

  Always `"Customer Account API access token is required"`.

* **stack**

  **string**

  **required**

  The stack trace, when the JavaScript runtime records one.

* **status**

  **number**

  **required**

  The HTTP status of the response, including a response that Hydrogen can't parse.

* **request​Id**

  **string**

  **required**

  The response's `x-request-id` header. Include the ID in Shopify support requests.

* **retry​After**

  **string**

  **required**

  The `retry-after` header on a non-OK response. Use the value to schedule a retry of a rate-limited request.

### Examples

* #### Redirect when the token is missing

  ##### Description

  Send the customer to login when the access token is missing or malformed. This example catches the authentication error around a \`graphql()\` call.

  ##### TypeScript

  ```ts
  import {
    CustomerAccountAuthenticationError,
    gql,
    type CustomerAccountClient,
  } from "@shopify/hydrogen/customer-account";

  const CUSTOMER_QUERY = gql(`query CurrentCustomer { customer { firstName } }`);

  export async function loadAccount(client: CustomerAccountClient, accessToken: string) {
    try {
      const result = await client.graphql(CUSTOMER_QUERY, { accessToken });
      return { customer: result.data?.customer ?? null };
    } catch (error) {
      if (error instanceof CustomerAccountAuthenticationError) {
        return { redirect: "/account/login?return_to=/account" };
      }
      throw error;
    }
  }
  ```

***

## Sign-in error

#### CustomerAccountOAuthError

The error that the OAuth callback throws when customer sign-in fails. Sign-in fails when the callback doesn't match the sign-in that `prepareLoginUrl()` started, when that sign-in started more than 10 minutes earlier, when the code exchange fails, or when Shopify's tokens fail validation. The authorize route catches this error and redirects the customer to the failed-login path. Token refreshes never throw this error, and a failed refresh returns `undefined`.

Read `code` to handle each failure. The codes are `missing_callback_params`, `state_mismatch`, `missing_pending_login`, `token_exchange_rejected`, `token_exchange_failed`, `invalid_token_response`, `nonce_mismatch`, `issuer_mismatch`, `audience_mismatch`, `expired_id_token`, and `invalid_id_token`.

* **code**

  **string**

  **required**

  The failure code, one of the codes in the class description.

* **name**

  **string**

  **required**

  Always `CustomerAccountOAuthError`.

* **message**

  **string**

  **required**

  Describes the sign-in failure. Read `code` to handle the failure.

* **stack**

  **string**

  **required**

  The stack trace, when the JavaScript runtime records one.

### Examples

* #### Handle a failed login

  ##### Description

  Complete sign-in from the OAuth callback with \`handleOAuthCallback()\`. If \`handleOAuthCallback()\` throws a \`CustomerAccountOAuthError\`, then the example returns a failure path. Commit the session before you redirect to the returned path.

  ##### TypeScript

  ```ts
  import type { ShopifyRequestContext } from "@shopify/hydrogen";
  import {
    CustomerAccountOAuthError,
    type CustomerSession,
    type WritableCustomerSessionManager,
  } from "@shopify/hydrogen/customer-account";

  export async function authorize(
    customerSession: CustomerSession,
    sessionManager: WritableCustomerSessionManager,
    requestContext: ShopifyRequestContext,
    request: Request,
  ) {
    try {
      return await customerSession.handleOAuthCallback(sessionManager, requestContext, request);
    } catch (error) {
      if (error instanceof CustomerAccountOAuthError) {
        console.warn(`Customer login failed with ${error.code}`);
        return "/account?login=failed";
      }
      throw error;
    }
  }
  ```

***

## Timeout error

#### CustomerAccountTimeoutError

The error that a Customer Account API request throws when the request takes longer than the client's timeout. The timeout covers the whole request, including reading the response body.

* **timeout​In​Ms**

  **number**

  **required**

  The timeout that the request exceeded, in milliseconds.

* **name**

  **string**

  **required**

  Always `CustomerAccountTimeoutError`.

* **message**

  **string**

  **required**

  States the timeout, such as `"Customer Account API request timed out after 30000ms"`.

* **stack**

  **string**

  **required**

  The stack trace, when the JavaScript runtime records one.

* **status**

  **number**

  **required**

  The HTTP status of the response, including a response that Hydrogen can't parse.

* **request​Id**

  **string**

  **required**

  The response's `x-request-id` header. Include the ID in Shopify support requests.

* **retry​After**

  **string**

  **required**

  The `retry-after` header on a non-OK response. Use the value to schedule a retry of a rate-limited request.

### Examples

* #### Handle a slow request

  ##### Description

  Create a client with a 5,000-millisecond timeout. This example returns \`null\` when a request times out.

  ##### TypeScript

  ```ts
  import type { ShopifyRequestContext } from "@shopify/hydrogen";
  import {
    CustomerAccountTimeoutError,
    createCustomerAccountClient,
    gql,
  } from "@shopify/hydrogen/customer-account";

  const CUSTOMER_QUERY = gql(`query CurrentCustomer { customer { firstName } }`);

  export async function getFirstName(
    shopId: string,
    requestContext: ShopifyRequestContext,
    accessToken: string,
  ) {
    const client = createCustomerAccountClient({ shopId, requestContext, defaultTimeoutInMs: 5000 });

    try {
      const result = await client.graphql(CUSTOMER_QUERY, { accessToken });
      return result.errors ? null : result.data.customer.firstName;
    } catch (error) {
      if (error instanceof CustomerAccountTimeoutError) {
        console.warn(`Customer Account API timed out after ${error.timeoutInMs}ms`);
        return null;
      }
      throw error;
    }
  }
  ```

***
