---
title: Cart errors
description: >-
  The cart error APIs detect failed cart requests and build the error state that
  your cart UI shows. Use these APIs to check the HTTP status of a failed cart
  request and to start a cart error state with no errors.
api_version: 2026-10
source_url:
  html: 'https://shopify.dev/docs/api/hydrogen/latest/cart/cart-errors'
  md: 'https://shopify.dev/docs/api/hydrogen/latest/cart/cart-errors.md'
api_name: hydrogen
---

# Cart errors

The cart error APIs detect failed cart requests and build the error state that your cart UI shows. Use these APIs to check the HTTP status of a failed cart request and to start a cart error state with no errors.

Import `CartNetworkError`, `createEmptyCartErrors`, and `createEmptyErrorGroup` from `@shopify/hydrogen`.

Read the current cart errors from `state.errors` on the [cart store](https://shopify.dev/docs/api/hydrogen/latest/cart/create-cart-store).

***

## Network error

#### CartNetworkError

The error that a cart load or cart change throws when your cart endpoint responds with a non-2xx status. Read `status` to handle specific failures.

Without a cart endpoint from `configureCartEndpoint`, cart requests fail with other error types.

* **status**

  **number**

  **required**

  The HTTP status code that the cart endpoint returned.

* **name**

  **string**

  **required**

  Always `CartNetworkError`.

* **message**

  **string**

  **required**

  Always `"Something went wrong updating your cart. Please try again."`, including for a failed cart load.

* **stack**

  **string**

  **required**

  The stack trace, when the JavaScript runtime records one.

### Examples

* #### Check the HTTP status

  ##### Description

  Catch a failed cart load and flag server errors for retry.

  ##### TypeScript

  ```ts
  import { CartNetworkError, type CartStore } from "@shopify/hydrogen";

  export async function reloadCart(store: CartStore) {
    try {
      await store.fetch();
    } catch (error) {
      if (error instanceof CartNetworkError && error.status >= 500) {
        return { retry: true, message: error.message };
      }
      throw error;
    }

    return { retry: false };
  }
  ```

***

## Empty cart errors

## create​Empty​Cart​Errors()

Creates a cart error state with no errors and every timestamp at `0`.

Each call returns new groups, maps, and arrays.

### Returns

* **CartErrorState**

  A new, empty error state.

### CartErrorState

The cart's errors, grouped by the part of the cart that they affect: lines, the note, attributes, discount codes, or the cart as a whole. Each group has a timestamp in milliseconds since the epoch. Use the timestamps to flag stale errors or dismiss errors after a timeout. Failed requests go in a network list, apart from Storefront API user errors.

* attributes

  Errors keyed by attribute name.

  ```ts
  Map<string, CartErrorGroup>
  ```

* attributesUpdatedAt

  Time in milliseconds since the epoch when the store last recorded attribute errors, or \`0\` before any.

  ```ts
  number
  ```

* cart

  Errors that don't belong to a line, the note, an attribute, or a discount code.

  ```ts
  CartErrorGroup
  ```

* cartUpdatedAt

  Time in milliseconds since the epoch of the last line, discount code, or attribute error, or \`0\` before any.

  ```ts
  number
  ```

* discountCodes

  Errors keyed by discount code.

  ```ts
  Map<string, CartErrorGroup>
  ```

* discountCodesUpdatedAt

  Time in milliseconds since the epoch when the store last recorded discount code errors, or \`0\` before any.

  ```ts
  number
  ```

* lastUpdatedAt

  Time in milliseconds since the epoch when the store last recorded any error, or \`0\` before the first.

  ```ts
  number
  ```

* lines

  Errors keyed by cart line ID.

  ```ts
  Map<string, CartErrorGroup>
  ```

* linesUpdatedAt

  Time in milliseconds since the epoch when the store last recorded line errors, or \`0\` before any.

  ```ts
  number
  ```

* network

  Failed cart requests. A failed cart change adds an entry, with an HTTP status when the endpoint returned a non-2xx response. A failed refresh adds an entry with a generic message and no status. A failed first load or a failed load after a reset adds no entry.

  ```ts
  CartNetworkEntry[]
  ```

* networkUpdatedAt

  Time in milliseconds since the epoch when the store last recorded a network error, or \`0\` before any.

  ```ts
  number
  ```

* note

  Errors for the cart note.

  ```ts
  CartErrorGroup
  ```

* noteUpdatedAt

  Time in milliseconds since the epoch when the store last recorded note errors, or \`0\` before any.

  ```ts
  number
  ```

### CartErrorGroup

Errors and warnings from one cart change.

* userErrors

  Validation errors that the mutation returned.

  ```ts
  CartUserError[]
  ```

* warnings

  Non-blocking warnings that the mutation returned.

  ```ts
  CartWarning[]
  ```

### CartUserError

A validation error returned by a Storefront API cart mutation.

* code

  Machine-readable error code, or \`null\` for unclassified errors.

  ```ts
  CartErrorCode | null
  ```

* field

  The path to the input field that caused the error, such as \`\["lines", "0", "quantity"]\`.

  ```ts
  string[]
  ```

* message

  Human-readable error text from the Storefront API.

  ```ts
  string
  ```

### CartErrorCode

Error codes that the cart POST handler returns. The handler returns \`invalid\_cart\_request\` when it can't parse a JSON request, and \`missing\_cart\` when a JSON request changes the cart but has no cart ID. With \`customerSession\`, the handler returns \`cart\_mutation\_failed\` when a mutation fails after the handler refreshes the customer's access token.

```ts
"invalid_cart_request" | "missing_cart" | "cart_mutation_failed"
```

### CartWarning

A non-blocking warning returned by a Storefront API cart mutation.

* code

  The warning code from the Storefront API.

  ```ts
  CartWarningCode
  ```

* message

  Human-readable warning text from the Storefront API.

  ```ts
  string
  ```

### CartNetworkEntry

A failed cart request, such as a non-2xx response or a timeout. Canceled requests add no entry.

* message

  The error message, or a generic message when the failure has no message of its own.

  ```ts
  string
  ```

* status

  The HTTP status code, when the endpoint returned a non-2xx response.

  ```ts
  number
  ```

### Examples

* #### Build a cart error state

  ##### Description

  Start from an empty error state and add an error to one cart line.

  ##### TypeScript

  ```ts
  import { createEmptyCartErrors, type CartErrorState } from "@shopify/hydrogen";

  export function lineOutOfStockErrors(lineId: string): CartErrorState {
    const errors = createEmptyCartErrors();
    errors.lines.set(lineId, {
      userErrors: [{ code: null, message: "Out of stock" }],
      warnings: [],
    });

    return errors;
  }
  ```

***

## Empty error group

## create​Empty​Error​Group()

Creates an empty error group with no user errors and no warnings.

### Returns

* **CartErrorGroup**

  A new error group with empty user error and warning arrays.

### Examples

* #### Build an error group

  ##### Description

  Create an error group for the whole cart and add the group to an empty error state.

  ##### TypeScript

  ```ts
  import { createEmptyCartErrors, createEmptyErrorGroup, type CartErrorGroup } from "@shopify/hydrogen";

  export function cartLevelError(message: string) {
    const cart: CartErrorGroup = createEmptyErrorGroup();
    cart.userErrors.push({ code: null, message });

    return { ...createEmptyCartErrors(), cart };
  }
  ```

***
