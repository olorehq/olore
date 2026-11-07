---
title: Cart analytics
description: >-
  The cart analytics functions publish analytics events when the customer's cart
  changes. Use these functions to send cart updated, product added to cart, and
  product removed from cart events to your analytics destinations through the
  analytics bus.
api_version: 2026-10
source_url:
  html: 'https://shopify.dev/docs/api/hydrogen/latest/analytics/cart-analytics'
  md: 'https://shopify.dev/docs/api/hydrogen/latest/analytics/cart-analytics.md'
api_name: hydrogen
---

# Cart analytics

The cart analytics functions publish analytics events when the customer's cart changes. Use these functions to send cart updated, product added to cart, and product removed from cart events to your analytics destinations through the [analytics bus](https://shopify.dev/docs/api/hydrogen/latest/analytics/shopify-scripts).

In React and Vue apps, call `useCartAnalytics` inside the `CartProvider` from [`createCartComponents`](https://shopify.dev/docs/api/hydrogen/latest/cart/create-cart-components). In other frameworks, pass a [cart store](https://shopify.dev/docs/api/hydrogen/latest/cart/create-cart-store) to `trackCartAnalytics`. In Vue, `useCartAnalytics` starts tracking when the component mounts and stops when the component unmounts.

Import `trackCartAnalytics` from `@shopify/hydrogen`, or import `useCartAnalytics` from `@shopify/hydrogen/react` or `@shopify/hydrogen/vue`.

Render [`ShopifyScripts`](https://shopify.dev/docs/api/hydrogen/latest/analytics/shopify-scripts) before tracking starts. Tracking needs the analytics bus that `ShopifyScripts` creates.

***

## Cart store tracking

## track​Cart​Analytics(**[store](#trackcartanalytics-propertydetail-store)**​)

Publishes cart analytics events when the server confirms a change to the customer's cart. In React, call `useCartAnalytics`.

The function publishes `cart_updated` when the cart's update time changes, plus `product_added_to_cart` or `product_removed_from_cart` for each added line, removed line, and quantity change. The function waits until no cart change or reload is in flight. Analytics payloads leave out cart lines without merchandise.

The function stores the last published cart update in local storage under `cartLastUpdatedAt` to avoid repeat events across page loads and tabs. A store that you fill from your own cart query must select `updatedAt`. Without the update time, the function publishes on every confirmed cart state. The function also sets `window.Shopify.currency.active` to the cart's currency.

The function throws when the Shopify analytics bus isn't available, including during server rendering. Render `ShopifyScripts`, then start tracking in a client-only effect, such as `useEffect` or `onMounted`.

### Parameters

* **store**

  **CartAnalyticsStore**

  **required**

  The cart store to track.

### Returns

* **() => void**

  A function that stops tracking.

### CartAnalyticsStore

A cart store, or any object with the cart store's \`getState()\` and \`subscribe()\` methods.

* getState

  Returns the current cart state, including changes that the server hasn't confirmed yet.

  ```ts
  () => CartState<CartData>
  ```

* subscribe

  Calls the listener on every state change and returns a function that removes the listener. The method works with React's \`useSyncExternalStore\`.

  ```ts
  (listener: (state: CartState<CartData>) => void) => () => void
  ```

### CartState

The cart, plus what's loading, pending, and failed. The cart hooks return values from this state. The data type matches the cart fragment in your cart server handlers.

* data

  The cart, including changes that the server hasn't confirmed yet.

  ```ts
  TData
  ```

* errors

  Errors and warnings, grouped by the part of the cart that they affect.

  ```ts
  CartErrorState
  ```

* loading

  \`true\` while the store loads the full cart: the first load, a load after \`reset()\`, or before \`connect()\` when the store has no initial data.

  ```ts
  boolean
  ```

* pending

  The parts of the cart with changes in flight.

  ```ts
  CartPending
  ```

* readyPromise

  Present while a full cart load runs. The promise resolves, and never rejects, when the load finishes or the store drops the load.

  ```ts
  PromiseLike<void>
  ```

* revalidating

  \`true\` while the store reloads the cart in the background after overlapping cart changes or a \`refresh()\` call.

  ```ts
  boolean
  ```

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

### CartPending

Shows which parts of the cart have changes in flight. Check a line ID or a discount code to show a pending indicator on that item. Check \`cost\` to show pending UI on prices, which update only when the server responds.

* attributes

  \`true\` while an attribute update is in flight.

  ```ts
  boolean
  ```

* cost

  \`true\` while a change that can affect cart prices is in flight.

  ```ts
  boolean
  ```

* discountCodes

  Discount codes with an apply or remove in flight.

  ```ts
  Set<string>
  ```

* lines

  Line IDs with an add, quantity change, or removal in flight. A new line has an ID that starts with \`optimistic:\` until the server confirms the line.

  ```ts
  Set<string>
  ```

* note

  \`true\` while a note update is in flight.

  ```ts
  boolean
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

### Examples

* #### Track a cart store

  ##### Description

  Start tracking after the store connects in the browser, and stop tracking before you destroy the store.

  ##### TypeScript

  ```ts
  import { configureCartEndpoint, createCartStore, trackCartAnalytics } from "@shopify/hydrogen";

  const store = createCartStore();

  export function startCart() {
    configureCartEndpoint("/api/cart");
    store.connect();

    const stopTracking = trackCartAnalytics(store);

    return () => {
      stopTracking();
      store.destroy();
    };
  }
  ```

***

## React and Vue hook

## use​Cart​Analytics()

Publishes cart analytics events when the customer's cart changes.

Call the hook once near the root of your app, inside `CartProvider`. The hook starts tracking on mount and stops on unmount. The hook publishes `cart_updated`, `product_added_to_cart`, and `product_removed_from_cart` events.

The hook throws outside `CartProvider`, and when the Shopify analytics bus isn't available. Render `ShopifyScripts` before the hook runs.

### Returns**void**

* Nothing. The hook tracks cart analytics for the lifetime of the calling component.

### Examples

* #### Track cart events in React

  ##### Description

  Render a tracker component inside the cart provider.

  ##### React

  ```tsx
  import { createCartComponents, useCartAnalytics } from "@shopify/hydrogen/react";
  import type { ReactNode } from "react";

  const { CartProvider } = createCartComponents();

  function CartAnalyticsTracker() {
    useCartAnalytics();
    return null;
  }

  export function Providers({ children }: { children: ReactNode }) {
    return (
      <CartProvider>
        <CartAnalyticsTracker />
        {children}
      </CartProvider>
    );
  }
  ```

* #### Track cart events in Vue

  ##### Description

  Call the composable in a component that renders inside the cart provider.

  ##### Vue

  ```vue
  <script setup lang="ts">
  import { useCartAnalytics } from "@shopify/hydrogen/vue";

  // Render this component inside CartProvider. useCartAnalytics throws outside it.
  useCartAnalytics();
  </script>

  <template>
    <slot />
  </template>
  ```

***
