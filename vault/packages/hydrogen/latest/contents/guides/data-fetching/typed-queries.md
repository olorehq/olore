---
title: Type and validate Storefront API queries
description: >-
  Get typed results and inline validation for Hydrogen gql queries in your
  editor, and catch invalid Storefront API fields in CI.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/data-fetching/typed-queries'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/data-fetching/typed-queries.md'
api_name: hydrogen
---

# Type and validate Storefront API queries

Hydrogen checks the queries that you write with [`gql()`](https://shopify.dev/docs/api/hydrogen/latest/storefront-client/gql) against the [Storefront API](https://shopify.dev/docs/api/storefront) schema that ships with `@shopify/hydrogen`. Your editor flags an invalid field inline and infers the type of `data` from the query, with no code generation step. This guide shows how to turn on editor validation, compose fragments, derive types, and run the same validation in CI.

***

## How it works

Hydrogen's validation has two parts:

* **An editor plugin:** `@shopify/hydrogen/ts-plugin` is a TypeScript language service plugin. It adds autocompletion, validation, and hover docs inside `gql()` calls.
* **A command-line check:** `hydrogen gql check` runs the same validation headlessly. TypeScript plugins run only in the editor's language server, not during `tsc`, so the command is what catches schema errors in CI.

`gql()` returns a branded query string. You derive result and variable types from the `StorefrontApi` namespace that `@shopify/hydrogen` exports.

***

## Requirements

* Create a [Storefront API client](https://shopify.dev/docs/storefronts/hydrogen/data-fetching).
* Use TypeScript in your project.

***

## Step 1: Add the Type​Script plugin

Add Hydrogen's plugin to `compilerOptions.plugins` in your `tsconfig.json`. If your project already has plugins, then append Hydrogen's plugin and keep the existing ones.

## Add the Hydrogen TypeScript plugin

## tsconfig.json

##### Next.js

```json
{
  "compilerOptions": {
    "plugins": [
      {"name": "next"},
      {"name": "@shopify/hydrogen/ts-plugin"}
    ]
  }
}
```

##### React Router

```json
{
  "compilerOptions": {
    "plugins": [
      {"name": "@shopify/hydrogen/ts-plugin"}
    ]
  }
}
```

If your `tsconfig.json` extends a generated framework config, then add `compilerOptions.plugins` in the file that extends it.

Your editor must use the workspace version of TypeScript, not its bundled version, because the bundled TypeScript server doesn't load plugins. In VS Code, run the **TypeScript: Select TypeScript Version** command and choose **Use Workspace Version**.

The plugin writes `storefront-graphql-env.d.ts` and `customer-account-graphql-env.d.ts` to your project root. The plugin generates these files, so add them to `.gitignore`:

## .gitignore

```text
storefront-graphql-env.d.ts
customer-account-graphql-env.d.ts
```

***

## Step 2: Compose queries from fragments

To reuse a selection across queries, define it as a fragment with `gql()`, then pass the fragment as the second argument to the query that uses it:

## Compose a fragment

lib/queries.ts

```ts
import {gql} from '@shopify/hydrogen';


export const PRODUCT_CARD_FRAGMENT = gql(`
  fragment ProductCard on Product {
    handle
    title
    featuredImage {
      url
      altText
    }
  }
`);


export const PRODUCTS_QUERY = gql(
  `
    query Products($first: Int!) {
      products(first: $first) {
        nodes {
          ...ProductCard
        }
      }
    }
  `,
  [PRODUCT_CARD_FRAGMENT],
);
```

Keep `gql()` calls in server modules and route modules. Don't put them in client components or barrel files that re-export everything, like an `index.ts`. Bundlers can't tell whether a `gql()` call has side effects, so any call that's reachable from browser code ends up in the browser bundle.

When you narrow a union by `__typename`, select `__typename` explicitly. Inline fragments don't add it for you, so a check like `node.__typename === 'MediaImage'` never matches and the result is silently empty:

```graphql
query ProductMedia($handle: String!) {
  product(handle: $handle) {
    media(first: 10) {
      nodes {
        __typename
        ... on MediaImage {
          image {
            url
          }
        }
      }
    }
  }
}
```

***

## Step 3: Derive result and variable types

Use `StorefrontApi.ResultOf` and `StorefrontApi.VariablesOf` to get the types of a query's result and variables:

```ts
import {gql, type StorefrontApi} from '@shopify/hydrogen';


const SHOP_QUERY = gql(`query Shop { shop { name } }`);


type ShopResult = StorefrontApi.ResultOf<typeof SHOP_QUERY>;
type ShopVariables = StorefrontApi.VariablesOf<typeof SHOP_QUERY>;
```

A fragment on its own doesn't have a result type. To type the data that a fragment selects, for example as props for a product card component, compose the fragment into a small query and read the type from that query's result:

## Type a fragment

lib/queries.ts

```ts
const PRODUCT_CARD_SHAPE = gql(
  `query ProductCardShape { products(first: 1) { nodes { ...ProductCard } } }`,
  [PRODUCT_CARD_FRAGMENT],
);


export type ProductCardData = StorefrontApi.ResultOf<
  typeof PRODUCT_CARD_SHAPE
>['products']['nodes'][number];
```

Hydrogen's `gql()` returns a branded string, not a `gql.tada` document, so `gql.tada`'s `FragmentOf` type doesn't work with it.

***

## Step 4: Validate queries in CI

Add `hydrogen gql check` to your `typecheck` script, after TypeScript and any route type generation. The `--fail-on-warn` flag fails the check on warnings too:

## Add GraphQL validation to typecheck

## package.json

##### Next.js

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit && hydrogen gql check --fail-on-warn"
  }
}
```

##### React Router

```json
{
  "scripts": {
    "typecheck": "react-router typegen && tsc && hydrogen gql check --fail-on-warn"
  }
}
```

Run the script in CI and after you add or change queries:

## Terminal

```bash
npm run typecheck
```

Without a package script, you can run the check directly with `npx @shopify/hydrogen gql check`.

The check catches the following errors:

* Fields that don't exist on the selected type.
* Invalid arguments or argument types.
* Invalid selections, like selecting subfields of a scalar.
* Other errors that the bundled Storefront API and Customer Account API schemas can detect.

The check can't catch errors that the live API alone enforces, like store-specific constraints, market or authentication errors, invalid argument values, or a field that the bundled schema accepts but your store's API version rejects. For those, add an integration test or smoke check that runs each critical query and asserts that the response has no `errors`.

***

## Step 5: Type Customer Account API queries

Queries for the [Customer Account API](https://shopify.dev/docs/api/customer) use a separate `gql()` from `@shopify/hydrogen/customer-account`. Keeping the two helpers separate means you can't pass a Customer Account API query to the Storefront API client, or the reverse.

```ts
import {gql} from '@shopify/hydrogen/customer-account';


const CUSTOMER_QUERY = gql(`
  query Customer {
    customer {
      firstName
      emailAddress {
        emailAddress
      }
    }
  }
`);
```

The same TypeScript plugin and `hydrogen gql check` validate both APIs, so you don't need extra configuration. To query customer data, refer to [Customer accounts](https://shopify.dev/docs/storefronts/hydrogen/customer-accounts).

***

## Next steps

[Production checklist\
\
](https://shopify.dev/docs/storefronts/hydrogen/production-checklist)

[Verify your storefront before you launch.](https://shopify.dev/docs/storefronts/hydrogen/production-checklist)

***
