---
title: Cart store
description: >-
  The createCartStore function holds the customer's cart in the browser and
  shows cart changes before the server confirms them. Use the function in
  frameworks without a Hydrogen binding to start from the server's cart, submit
  cart forms, and rerender your cart UI when the cart changes.
api_version: 2026-10
source_url:
  html: 'https://shopify.dev/docs/api/hydrogen/latest/cart/create-cart-store'
  md: 'https://shopify.dev/docs/api/hydrogen/latest/cart/create-cart-store.md'
api_name: hydrogen
---

# Cart store

The `createCartStore` function holds the customer's cart in the browser and shows cart changes before the server confirms them. Use the function in frameworks without a Hydrogen binding to start from the server's cart, submit cart forms, and rerender your cart UI when the cart changes.

In React and Vue apps, use [`createCartComponents`](https://shopify.dev/docs/api/hydrogen/latest/cart/create-cart-components).

Import `createCartStore` and `configureCartEndpoint` from `@shopify/hydrogen`.

Render [`ShopifyScripts`](https://shopify.dev/docs/api/hydrogen/latest/analytics/shopify-scripts) before you connect a store. The store sends cart changes through [Standard Actions](https://shopify.dev/docs/storefronts/themes/best-practices/standard-events-and-actions), a Shopify storefront script that `ShopifyScripts` loads.

***

## Cart state

## create​Cart​Store(**[options](#createcartstore-propertydetail-options)**​)

Creates a cart store that holds the cart and applies cart changes before the server responds.

Call `connect()` to start the store and `destroy()` to stop it. The React and Vue cart providers call both for you.

### Parameters

* **options**

  **CreateCartStoreOptions\<CartData>**

  The cart that the server loaded for the first render.

### Returns

* **CartStore**

  The cart store. Read the cart with `getState()` and listen for changes with `subscribe()`.

### CreateCartStoreOptions

Options for creating a cart store.

* initialData

  The cart that the server loaded, or a promise of the cart for streamed data. Pass the \`data\` property of the cart GET handler's result. A \`null\` cart tells the store that no cart exists yet. Without initial data, the store starts empty and loads the cart when you call \`connect()\`.

  ```ts
  CartInitialData<TData> | PromiseLike<CartInitialData<TData>>
  ```

### CartInitialData

The cart that the server loaded for the first render.

* cart

  The loaded cart, or \`null\` when the server found no cart.

  ```ts
  TData | null
  ```

* errors

  Load errors from the server. The store ignores the errors.

  ```ts
  Array<{ message: string }>
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

### CartStore

Holds the customer's cart and runs cart changes in any framework. In React, \`CartProvider\` creates the store for you. The store shows line and discount code changes before the server responds, then updates the cart from each server response. Cart costs change only when the server responds. Cart changes start from cart form submissions or from Standard Actions \`shopify:cart:\*\` events. Cart changes need the Standard Actions script, which \`ShopifyScripts\` adds to the page. Cart loads and changes time out after 30 seconds.

* connect

  Starts handling cart events, and loads the cart when you created the store without initial data. Repeated calls have no effect. During server rendering, the method does nothing.

  ```ts
  () => void
  ```

* destroy

  Stops the store. Cancels in-flight cart requests and stops handling cart events.

  ```ts
  () => void
  ```

* fetch

  Loads the full cart from the server. The promise rejects when the load fails, with a \`CartNetworkError\` when your cart endpoint returns a non-2xx status.

  ```ts
  () => Promise<void>
  ```

* getState

  Returns the current cart state, including changes that the server hasn't confirmed yet.

  ```ts
  () => CartState<CartData>
  ```

* handleFormSubmit

  Runs the cart change that a cart form submission describes. Pass the form's submit event, and call \`event.preventDefault()\` to stop the browser's own form submission. The method connects the store when you haven't connected it. The submit button's value sets the change: \`add\`, \`increase\`, \`decrease\`, \`remove\`, \`set\`, \`discount-apply\`, \`discount-remove\`, \`note-update\`, or \`attributes-update\`. A button without a value adds the line when the form has a \`merchandiseId\` field. A \`set\` with an empty or zero quantity removes the line. When your cart fragment selects the variant's available quantity, the store caps a \`set\` quantity at that number. The promise rejects with a type error when the event target isn't a form or the event has no submitter. The promise rejects with an error when the button's value isn't a recognized change, or when the form lacks a required field such as the line ID.

  ```ts
  (event: SubmitEvent, eventDetail?: Record<string, unknown>) => Promise<void>
  ```

* hydrate

  Replaces the store's cart with a different cart that the server loaded. The method ignores data for the cart that the store already holds, and ignores data while cart changes are in flight.

  ```ts
  (data: CartData) => void
  ```

* refresh

  Reloads the cart after a cart change that skipped the store, such as a server action. When the store has no cart yet, the method picks up the cart that the server created. A failed reload adds an entry to the network errors in the cart state.

  ```ts
  () => void
  ```

* reset

  Clears the cart data and errors and cancels in-flight cart requests. After you connect the store, the method also loads the cart again when the store held a cart.

  ```ts
  () => void
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

### Examples

* #### Create and connect a cart store

  ##### Description

  Send cart requests to your cart route, start the store with the server's cart, and rerender when the cart changes. The returned function stops the updates and destroys the store.

  ##### TypeScript

  ```ts
  import { configureCartEndpoint, createCartStore, type CartData } from "@shopify/hydrogen";

  export function mountCart(initialCart: CartData | null, render: (cart: CartData) => void) {
    configureCartEndpoint("/api/cart");

    const store = createCartStore({ initialData: { cart: initialCart } });
    store.connect();

    const unsubscribe = store.subscribe((state) => {
      render(state.data);
    });

    return () => {
      unsubscribe();
      store.destroy();
    };
  }
  ```

* #### Submit a cart form

  ##### Description

  Pass a cart form's submit event to \`handleFormSubmit()\`. The form's \`method\` and \`action\` attributes submit the form when JavaScript doesn't run.

  ##### TypeScript

  ```ts
  import { createCartStore } from "@shopify/hydrogen";

  const store = createCartStore();

  export function cartFormProps() {
    return {
      method: "post" as const,
      action: "/api/cart",
      onsubmit: (event: SubmitEvent) => {
        event.preventDefault();
        store.handleFormSubmit(event).catch(() => {});
      },
    };
  }
  ```

***

## Cart endpoint

## configure​Cart​Endpoint(**[endpoint](#configurecartendpoint-propertydetail-endpoint)**​)

Sends every cart load and cart change on the page to your cart endpoint. Without an endpoint, Standard Actions handles cart requests with its default handler.

Call the function before you connect a cart store. The first cart load then goes to your endpoint. A later call with a different endpoint replaces the first endpoint and logs a warning. In React, `CartProvider` sets the endpoint to `/api/cart` when the provider mounts.

### Parameters

* **endpoint**

  **string**

  **required**

  The URL path of your cart route.

### Returns**void**

* Nothing. Later cart loads and changes on the page go to the endpoint.

### Examples

* #### Route cart requests to your endpoint

  ##### Description

  Set the cart endpoint and connect the store in the browser. The \`typeof window\` check skips the endpoint setup and the store connection during server rendering.

  ##### TypeScript

  ```ts
  import { configureCartEndpoint, createCartStore } from "@shopify/hydrogen";

  const cartStore = createCartStore();

  export function connectCartStore() {
    if (typeof window === "undefined") return;

    configureCartEndpoint("/api/cart");
    cartStore.connect();
  }
  ```

***
