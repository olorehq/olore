---
title: Cart queries
description: >-
  The cartQueries object holds the Storefront API cart query and mutations that
  the cart server handlers run. Use these documents in a custom cart route to
  return the same cart fields as the handlers.
api_version: 2026-10
source_url:
  html: 'https://shopify.dev/docs/api/hydrogen/latest/cart/cart-queries'
  md: 'https://shopify.dev/docs/api/hydrogen/latest/cart/cart-queries.md'
api_name: hydrogen
---

# Cart queries

The `cartQueries` object holds the Storefront API cart query and mutations that the [cart server handlers](https://shopify.dev/docs/api/hydrogen/latest/cart/cart-server-handlers) run. Use these documents in a custom cart route to return the same cart fields as the handlers.

The [`getCart`](https://shopify.dev/docs/api/hydrogen/latest/cart/cart-server-handlers) function also runs the cart query by default. Pass a `fragment` to the cart server handlers to add cart fields to every document.

Import `cartQueries` from `@shopify/hydrogen`.

***

## Properties

The default cart query and mutation documents. Each mutation returns the cart, user errors, and warnings.

* **cart**

  **StorefrontQueryString**

  **required**

  Query that fetches a cart by ID.

* **cart​Attributes​Update**

  **StorefrontQueryString**

  **required**

  Mutation that sets a cart's custom attributes.

* **cart​Create**

  **StorefrontQueryString**

  **required**

  Mutation that creates a cart from a cart input.

* **cart​Discount​Codes​Update**

  **StorefrontQueryString**

  **required**

  Mutation that replaces a cart's discount codes.

* **cart​Lines​Add**

  **StorefrontQueryString**

  **required**

  Mutation that adds merchandise lines to a cart.

* **cart​Lines​Remove**

  **StorefrontQueryString**

  **required**

  Mutation that removes lines from a cart by line ID.

* **cart​Lines​Update**

  **StorefrontQueryString**

  **required**

  Mutation that updates existing lines in a cart.

* **cart​Note​Update**

  **StorefrontQueryString**

  **required**

  Mutation that sets a cart's note.

### StorefrontQueryString



### Examples

* #### Apply a discount code

  ##### Description

  Replace the discount codes on the customer's cart with one code.

  ##### TypeScript

  ```ts
  import { cartQueries, getCartId, type StorefrontClient } from "@shopify/hydrogen";

  export async function applyDiscount(
    request: Request,
    code: string,
    storefrontClient: StorefrontClient,
  ) {
    const cartId = getCartId(request);
    if (!cartId) return null;

    const { data, errors } = await storefrontClient.graphql(cartQueries.cartDiscountCodesUpdate, {
      variables: { cartId, discountCodes: [code] },
    });
    if (errors) return null;

    return data.cartDiscountCodesUpdate?.cart ?? null;
  }
  ```

* #### Run a mutation document in a custom route

  ##### Description

  Run the mutation that matches a parsed cart action. This example handles the \`remove\` and \`note-update\` intents.

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
