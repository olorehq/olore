---
title: Customer account client
description: >-
  The createCustomerAccountClient function creates a server-only GraphQL client
  for the Customer Account API. Use the client with gql to query a signed-in
  customer's profile, orders, and other account data with typed results.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/create-customer-account-client
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/create-customer-account-client.md
api_name: hydrogen
---

# Customer account client

The `createCustomerAccountClient` function creates a server-only GraphQL client for the Customer Account API. Use the client with `gql` to query a signed-in customer's profile, orders, and other account data with typed results.

Import `createCustomerAccountClient` and `gql` from `@shopify/hydrogen/customer-account`.

Get the customer's access token from [`createCustomerSession`](https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/create-customer-session), and pass the token with each `graphql()` call.

***

## API client

## create​Customer​Account​Client(**[input1](#createcustomeraccountclient-propertydetail-input1)**​)

Creates a client that sends Customer Account API requests from your server. Create the client with the current request's context.

The function throws when the shop ID, API version, or timeout is invalid, when the request context has no HTTPS URL, when no fetch implementation is available, and when the function runs in a browser.

### Parameters

* **input1**

  **CreateCustomerAccountClientOptions**

  **required**

  The shop ID, the API version, the request context, a custom fetch, and the request timeout.

### Returns

* **CustomerAccountClient**

  A client with the GraphQL endpoint URL and a `graphql()` method for Customer Account API requests.

### CreateCustomerAccountClientOptions

Options for creating a Customer Account API client.

* customerApiVersion

  Customer Account API version in \`YYYY-MM\` format. Defaults to \`2026-10\`.

  ```ts
  string
  ```

* defaultTimeoutInMs

  Timeout for each request in milliseconds. Must be a positive integer no greater than 2,147,483,647. Defaults to \`30000\`.

  ```ts
  number
  ```

* fetch

  Custom fetch implementation. Defaults to the global fetch.

  ```ts
  { (input: RequestInfo | URL, init?: RequestInit): Promise<Response>; (input: string | Request | URL, init?: RequestInit): Promise<Response>; }
  ```

* requestContext

  The context for the current request, from \`createShopifyRequestContext\`. The context's URL must use HTTPS, or creating the client throws. Local \`http://\` URLs on localhost, 127.0.0.1, and ::1 also work for development. The client fills \`$language\` from the context's language and stops requests when the context's signal aborts.

  ```ts
  ShopifyRequestContext
  ```

* shopId

  Numeric Shopify shop ID as a string of digits, such as \`12345\`.

  ```ts
  string
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

### CustomerAccountClient

A client that sends Customer Account API requests from your server for the current request.

* apiUrl

  The GraphQL endpoint, \`https://shopify.com/{shopId}/account/customer/api/{version}/graphql\`.

  ```ts
  string
  ```

* graphql

  Sends a Customer Account API query or mutation with the customer's access token, and returns the data, any GraphQL errors, and the response headers. Pass a document from the Customer Account \`gql\` function. The request makes the final response private and uncacheable when you call \`applyResponseHeaders()\`. When the document declares \`$language\` and you omit it, the client fills the variable from the request context's language. The method throws a \`TypeError\` for a document from any other \`gql\` function, including the Storefront API \`gql\` function, and for variables that aren't an object. When a signal aborts, the method throws the signal's reason. A missing or malformed access token throws \`CustomerAccountAuthenticationError\`, a timeout throws \`CustomerAccountTimeoutError\`, and other request failures throw \`CustomerAccountApiError\`.

  ```ts
  <const Doc extends AnyCustomerAccountDocument>(document: Doc, ...options: CustomerAccountGqlRestParam<Doc>) => Promise<CustomerAccountGraphqlResult<ResultOfDoc<Doc>>>
  ```

### AnyCustomerAccountDocument

Any Customer Account API document. Use the type as a constraint when a function accepts any document.

```ts
CustomerAccountDocument<unknown, never, string>
```

### CustomerAccountDocument

A Customer Account API query or mutation that \`gql\` from \`@shopify/hydrogen/customer-account\` returns. TypeScript infers the result and variables types from the document's GraphQL source. Create documents only with the Customer Account \`gql\` function. The client throws a \`TypeError\` for any other object.

```ts
DocumentDecoration<Result, Variables> & {
  readonly [CUSTOMER_ACCOUNT_DOCUMENT]: true;
  readonly source: Source;
}
```

### CustomerAccountGqlRestParam

The options argument for a Customer Account API request. Pass \`variables\` when the document declares a required variable other than \`language\`. TypeScript reports an error when a required variable is missing.

```ts
HasNoRequiredKeys<UserVariables<Doc>> extends true
    ? [options: CustomerAccountGraphqlOptions<UserVariables<Doc>>]
    : [
        options: CustomerAccountGraphqlOptions<UserVariables<Doc>> & {
          variables: UserVariables<Doc>;
        },
      ]
```

### HasNoRequiredKeys

Resolves to \`true\` when an object type has no required keys.

```ts
Record<string, never> extends T ? true : false
```

### UserVariables

The variables that you pass for a document, without \`country\` and \`language\`. The client fills both from the request context.



### VariablesOfDoc

The variables that a Customer Account document declares.

```ts
Doc extends CustomerAccountDocument<unknown, infer Variables, string> ? Variables : never
```

### CustomerAccountGraphqlOptions

Options for a single Customer Account API request.

* accessToken

  The customer's access token, such as one from the customer session's \`getOrRefreshAccessToken()\` method.

  ```ts
  string
  ```

* signal

  Stops this request when the signal aborts. The request also stops when the request context's signal aborts or the timeout passes.

  ```ts
  AbortSignal
  ```

* variables

  The document's variables. When the document declares \`$language\` and you omit it, the client fills the variable from the request context's language.

  ```ts
  Variables
  ```

### CustomerAccountGraphqlResult

Result of a Customer Account API request. Check \`errors\` to tell the outcomes apart. On success, \`data\` holds the result and \`errors\` is \`undefined\`. When the response has GraphQL errors, \`errors\` holds them and \`data\` can be \`null\`. Every result includes the raw response headers.

```ts
{ data: Result; errors?: undefined; headers: Headers } | { data: Result | null; errors: GraphQLFormattedError[]; headers: Headers }
```

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



### Examples

* #### Query the current customer

  ##### Description

  Fetch the customer's name and email with the Customer Account API client. This example returns \`null\` when the response has GraphQL errors.

  ##### TypeScript

  ```ts
  import type { ShopifyRequestContext } from "@shopify/hydrogen";
  import { createCustomerAccountClient, gql } from "@shopify/hydrogen/customer-account";

  const CUSTOMER_QUERY = gql(`
    query CurrentCustomer {
      customer {
        firstName
        lastName
        emailAddress {
          emailAddress
        }
      }
    }
  `);

  export async function getCustomer(
    shopId: string,
    requestContext: ShopifyRequestContext,
    accessToken: string,
  ) {
    const customerAccount = createCustomerAccountClient({ shopId, requestContext });
    const result = await customerAccount.graphql(CUSTOMER_QUERY, { accessToken });

    if (result.errors) return null;
    return result.data.customer;
  }
  ```

***

## Typed queries and mutations

## gql(**[source](#gql-propertydetail-source)**​,**[fragments](#gql-propertydetail-fragments)**​)

Creates a typed Customer Account API query or mutation from a GraphQL source string. Pass the document to the Customer Account API client. Call `gql` as a regular function.

Pass an array of fragment documents as the second argument to append the fragments to the operation. Each fragment must come from this `gql` function, or the call throws a `TypeError`.

To validate documents, run `hydrogen gql check` in your `typecheck` script with the `@shopify/hydrogen/ts-plugin` setup. Framework typecheck commands don't validate the documents.

### Parameters

* **source**

  **string**

  **required**

  The GraphQL source of an operation or a fragment.

* **fragments**

  **readonly AnyCustomerAccountDocument\[]**

  The fragment documents that the operation uses.

### Returns

* **AnyCustomerAccountDocument**

  A typed document to pass to the Customer Account API client.

### Examples

* #### Define a customer query

  ##### Description

  Define a query for the customer's name and email address with \`gql\`. The client returns typed results for the query.

  ##### TypeScript

  ```ts
  import { gql } from "@shopify/hydrogen/customer-account";

  export const CUSTOMER_QUERY = gql(`
    query CustomerDetails {
      customer {
        firstName
        lastName
        emailAddress { emailAddress }
      }
    }
  `);
  ```

* #### Compose a query with fragments

  ##### Description

  Add an order fragment to a query for the customer's first 10 orders. This example passes the fragment as the second argument to \`gql\`.

  ##### TypeScript

  ```ts
  import { gql } from "@shopify/hydrogen/customer-account";

  const ORDER_FIELDS = gql(`
    fragment OrderFields on Order {
      id
      totalPrice { amount currencyCode }
    }
  `);

  export const ORDERS_QUERY = gql(
    `
    query CustomerOrders {
      customer {
        orders(first: 10) {
          nodes { ...OrderFields }
        }
      }
    }
  `,
    [ORDER_FIELDS],
  );
  ```

***
