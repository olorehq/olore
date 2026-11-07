---
title: GraphQL queries
description: >-
  The gql function writes typed Storefront API queries, mutations, and
  fragments. TypeScript infers each operation's result and variables types
  without a codegen step.
api_version: 2026-10
source_url:
  html: 'https://shopify.dev/docs/api/hydrogen/latest/storefront-client/gql'
  md: 'https://shopify.dev/docs/api/hydrogen/latest/storefront-client/gql.md'
api_name: hydrogen
---

# Graph​QL queries

The `gql` function writes typed Storefront API queries, mutations, and fragments. TypeScript infers each operation's result and variables types without a codegen step.

Customer Account API documents use a separate `gql` function from [`@shopify/hydrogen/customer-account`](https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/create-customer-account-client).

To compose typed queries from fragments and validate them in CI, refer to [Type and validate Storefront API queries](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/typed-queries).

Import `gql`, `InferResult`, and `InferVariables` from `@shopify/hydrogen`.

***

## Typed queries and mutations

## gql(**[source](#gql-propertydetail-source)**​,**[fragments](#gql-propertydetail-fragments)**​)

Writes a typed Storefront API query, mutation, or fragment. At runtime, the function returns the query text with each fragment appended once.

TypeScript infers the result and variables types from Hydrogen's bundled Storefront API schema, even when the client targets another `apiVersion`. Read the types with `StorefrontApi.ResultOf` and `StorefrontApi.VariablesOf`. To type a fragment on its own, compose the fragment into a query and read the type from the query. The `FragmentOf` helper from `gql`.tada doesn't accept `gql` documents.

### Parameters

* **source**

  **string**

  **required**

  The Storefront API query, mutation, or fragment source text.

* **fragments**

  **readonly AnyStorefrontQueryString\[]**

  The `gql` fragments that the query text spreads.

### Returns

* **AnyStorefrontQueryString**

  A typed document to pass to the client's `graphql()` method.

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

### Examples

* #### Write a typed query

  ##### Description

  Declare a product query and run it with a Storefront API client. This example checks \`result.errors\` before it reads the typed title.

  ##### TypeScript

  ```ts
  import { gql, type StorefrontClient } from "@shopify/hydrogen";

  const PRODUCT_QUERY = gql(`
    query Product($handle: String!) {
      product(handle: $handle) { title }
    }
  `);

  export async function getProductTitle(storefront: StorefrontClient, handle: string) {
    const result = await storefront.graphql(PRODUCT_QUERY, {
      variables: { handle },
    });

    if (result.errors) return null;
    return result.data.product?.title ?? null;
  }
  ```

* #### Compose fragments

  ##### Description

  Compose a product fragment into a list query. This example derives the result type from the \`StorefrontApi\` namespace.

  ##### TypeScript

  ```ts
  import { gql, type StorefrontApi } from "@shopify/hydrogen";

  const PRODUCT_FIELDS = gql(`fragment ProductFields on Product { title handle }`);

  export const PRODUCTS_QUERY = gql(
    `query Products { products(first: 10) { nodes { ...ProductFields } } }`,
    [PRODUCT_FIELDS],
  );

  export type ProductsResult = StorefrontApi.ResultOf<typeof PRODUCTS_QUERY>;
  ```

* #### Type a query string

  ##### Description

  Derive result and variables types from a query string. This example types a function parameter with \`InferResult\` and a variables object with \`InferVariables\`.

  ##### TypeScript

  ```ts
  import type { InferResult, InferVariables } from "@shopify/hydrogen";

  const PRODUCT_QUERY = `
    query Product($handle: String!) {
      product(handle: $handle) {
        title
      }
    }
  `;

  type ProductQuery = InferResult<typeof PRODUCT_QUERY>;
  type ProductQueryVariables = InferVariables<typeof PRODUCT_QUERY>;

  export function productTitle(data: ProductQuery) {
    return data.product?.title ?? null;
  }

  export const variables: ProductQueryVariables = { handle: "snowboard" };
  ```

***

## Type helpers

`InferResult` and `InferVariables` type a result or variables shape outside a GraphQL call, such as a function parameter or a loader argument. Pass the query text as a string literal type. For a `gql` document, use `StorefrontApi.ResultOf` and `StorefrontApi.VariablesOf`. `InferResult` and `InferVariables` resolve to `never` for a `gql` document.

***
