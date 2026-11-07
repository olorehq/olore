---
title: Product form store
description: >-
  The createProductFormStore function creates a store that tracks the customer's
  option selection for one product and adds the selected variant to the cart.
  Use the store to show which option values are available, find the selected
  variant, and submit the add-to-cart form.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/products/create-product-form-store
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/products/create-product-form-store.md
api_name: hydrogen
---

# Product form store

The `createProductFormStore` function creates a store that tracks the customer's option selection for one product and adds the selected variant to the cart. Use the store to show which option values are available, find the selected variant, and submit the add-to-cart form.

React and Vue apps use [`createProductComponents`](https://shopify.dev/docs/api/hydrogen/latest/products/create-product-components).

Import `createProductFormStore` and `createProductFormRegister` from `@shopify/hydrogen`.

***

## Selection store

## create​Product​Form​Store(**[product](#createproductformstore-propertydetail-product)**​,**[cartStore](#createproductformstore-propertydetail-cartstore)**​,**[options](#createproductformstore-propertydetail-options)**​)

Creates a store that tracks the customer's option selection for one product and adds the selected variant to the cart.

The store resolves variants from the product data that you pass and leaves the URL to you. Build the product URL from the result of `selectOption()`. Call `destroy()` when the product form unmounts. The product provider from `createProductComponents` creates and destroys the store for you.

### Parameters

* **product**

  **ProductInput\<ProductVariantInput>**

  **required**

  The product from your Storefront API query.

* **cart​Store**

  **CartStore**

  **required**

  The cart store that the form adds variants to and reads cart errors from.

* **options**

  **CreateProductFormStoreOptions**

  The selection to start from when the product has no selected or first available variant.

### Returns

* **ProductFormStore**

  A product form store. The starting selection comes from the product's selected or first available variant, or else from the selection in the options.

### ProductInput

Product fields that the product form store needs from your Storefront API query. The fields match the Storefront API product object. Pass your full query type, which can include more fields.

* adjacentVariants

  Variants that differ from the selected variant by one option value. The store resolves option values from these variants, and you don't need to query every variant.

  ```ts
  TVariant[]
  ```

* encodedVariantAvailability

  Encoded list of the variants that are available for sale. Pass the field unchanged from your query.

  ```ts
  string | null
  ```

* encodedVariantExistence

  Encoded list of the option value combinations that exist as variants. Pass the field unchanged from your query.

  ```ts
  string | null
  ```

* handle

  Product handle for option value links. Variants with a different handle belong to other products in a combined listing.

  ```ts
  string
  ```

* id

  Product ID. The product provider reloads the product into the store when this ID or the selected variant's ID changes.

  ```ts
  string
  ```

* options

  Product options and their values. The option state keeps this order.

  ```ts
  ProductOptionInput<TVariant>[]
  ```

* priceRange

  Lowest and highest variant prices. Show the range until the selection resolves to a variant.

  ```ts
  ProductPriceRange
  ```

* requiresSellingPlan

  When \`true\`, the customer can't add the product to the cart without a selling plan.

  ```ts
  boolean | null
  ```

* selectedOrFirstAvailableVariant

  The variant that matches the query's \`selectedOptions\` argument, or else the first available variant, or else the first variant, which can be unavailable. The store starts with this variant selected.

  ```ts
  TVariant | null
  ```

* title

  Product title.

  ```ts
  string
  ```

* vendor

  Product vendor.

  ```ts
  string | null
  ```

### ProductOptionInput

A product option, such as "Size" or "Color", and its values.

* name

  Option name, such as "Size" or "Color".

  ```ts
  string
  ```

* optionValues

  Option values in the order that the Storefront API returns them. Keep that order, because the encoded variant fields refer to values by position.

  ```ts
  Array<ProductOptionValueInput<TVariant>>
  ```

### ProductOptionValueInput

A single option value, such as "Small" or "Red", within a product option.

* firstSelectableVariant

  Variant that combines this value with the lowest-position values of every other option. Include this field in your query. The store uses the variant to resolve option values and to find values that belong to other products in a combined listing.

  ```ts
  TVariant | null
  ```

* name

  Option value name, such as "Small" or "Red".

  ```ts
  string
  ```

* swatch

  Swatch data from your query. The option value state returns the swatch unchanged.

  ```ts
  unknown
  ```

### ProductPriceRange

Lowest and highest variant prices for a product, matching the Storefront API product price range.

* maxVariantPrice

  Highest variant price. Leave the field out of queries that need only the lowest price.

  ```ts
  Money
  ```

* minVariantPrice

  Lowest variant price.

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

### ProductVariantInput

Variant fields that the product form needs from your Storefront API query. Pass your full query type, which can include more fields.

* availableForSale

  Whether the customer can buy the variant. Option value availability falls back to this field when your query doesn't select the encoded variant availability.

  ```ts
  boolean
  ```

* compareAtPrice

  Compare-at price, or \`null\` when the variant has none.

  ```ts
  Money | null
  ```

* id

  Variant ID that the product form adds to the cart.

  ```ts
  string
  ```

* image

  Variant image. The cart shows the image on an added line before the server responds.

  ```ts
  unknown
  ```

* price

  Variant price. The cart shows the price on an added line before the server responds.

  ```ts
  Money
  ```

* product

  Handle and title of the variant's product. A handle that differs from the current product marks a variant of another product in a combined listing.

  ```ts
  { handle: string; title?: string | null } | null
  ```

* selectedOptions

  Option names and values that make up the variant.

  ```ts
  SelectedOption[]
  ```

* sku

  Variant SKU.

  ```ts
  string | null
  ```

* title

  Variant title. The cart shows the title on an added line before the server responds.

  ```ts
  string
  ```

### SelectedOption

A single selected product option, such as \`{ name: "Color", value: "Red" }\`.

* name

  Option name, such as "Color".

  ```ts
  string
  ```

* value

  Value chosen for the option, such as "Red".

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

### CreateProductFormStoreOptions

Options for creating a product form store.

* selectedOptions

  Selection to start from when the product has no selected or first available variant.

  ```ts
  SelectedOption[]
  ```

### ProductFormStore

Tracks the customer's option selection for one product and adds the selected variant to the cart.

* connect

  Reconnects the store to the cart after you call \`destroy()\`, such as in React Strict Mode effects. The store connects to the cart when you create it.

  ```ts
  () => void
  ```

* destroy

  Disconnects the store from the cart. Call \`destroy()\` when the product form unmounts.

  ```ts
  () => void
  ```

* getState

  Returns the current product form state.

  ```ts
  () => ProductFormStoreState<TVariant, ProductOptionValueFrom<TProduct>>
  ```

* handleFormSubmit

  Adds the selected variant to the cart from the product form's native submit event. The cart adds the variant when the clicked button has no value and the form includes a merchandise ID field. The cart uses the variant's title, image, and price to show the change before the server responds. The returned promise rejects when the event target isn't a form or the event has no submitter.

  ```ts
  (event: SubmitEvent) => Promise<void>
  ```

* hydrate

  Loads new product data into the store. Create the store once and call \`hydrate()\` each time the server reloads the product. The store keeps its subscribers. The new selection comes from the product's selected or first available variant, then from the selected options that you pass, then from the current selection.

  ```ts
  (product: TProduct, opts?: { selectedOptions?: SelectedOption[]; }) => void
  ```

* reset

  Restores the product data and the selection that the store started with.

  ```ts
  () => void
  ```

* selectOption

  Selects an option value and returns the result. Resolved and unresolved selections update the state. An invalid selection leaves the state unchanged and returns a reason. Build the next product URL from the selected options in the result.

  ```ts
  (name: string, value: string) => VariantSelectionResult<TVariant>
  ```

* subscribe

  Calls the listener on every state change. Returns a function that unsubscribes the listener.

  ```ts
  (listener: (state: ProductFormStoreState<TVariant, ProductOptionValueFrom<TProduct>>) => void) => () => void
  ```

### ProductFormStoreState

The product form's option state, selection, cart errors, and matching cart line.

* errors

  Cart errors and warnings to show near the add-to-cart button.

  ```ts
  ProductFormErrors
  ```

* matchedLineItem

  First cart line that holds the selected variant, or \`null\` when no cart line holds the variant.

  ```ts
  CartLine | null
  ```

* options

  Each product option and its values, with the selection, existence, and availability of each value.

  ```ts
  VariantOptionState<TVariant, TOptionValue>[]
  ```

* selectedOptions

  Option names and values in the current selection, which can be partial.

  ```ts
  SelectedOption[]
  ```

* selectedVariant

  Variant that matches the current selection, or \`null\` when the selection is partial or your query didn't load that variant.

  ```ts
  TVariant | null
  ```

### ProductFormErrors

Cart errors and warnings to show near the add-to-cart button. Each list starts with cart-level messages, followed by the messages for the cart line that holds the selected variant.

* networkErrors

  Failed cart requests. Each entry has a message and, when available, an HTTP status.

  ```ts
  CartNetworkEntry[]
  ```

* userErrors

  User errors for the cart, then for the cart line that holds the selected variant.

  ```ts
  CartUserError[]
  ```

* warnings

  Warnings for the cart, then for the cart line that holds the selected variant.

  ```ts
  CartWarning[]
  ```

### VariantOptionState

State of one product option, such as "Color", and its values.

* name

  Option name, such as "Color".

  ```ts
  string
  ```

* values

  State of each value, in the product's value order.

  ```ts
  VariantOptionValueState<TVariant, TOptionValue>[]
  ```

### VariantOptionValueState

State of one option value, such as "Red" under "Color", for the current selection. Render the value's control and link from this state.

* available

  Whether the variant for the targeted selection is available for sale. Without the encoded variant availability in your query, the value comes from the loaded variant, or reads \`false\` when your query didn't load that variant.

  ```ts
  boolean
  ```

* exists

  Whether a variant exists for the selection that the value targets. Defaults to \`true\` when your query doesn't select the encoded variant existence field.

  ```ts
  boolean
  ```

* handle

  Product handle for the option link. A value from another product in a combined listing uses that product's handle. Selected values use the current product's handle.

  ```ts
  string
  ```

* name

  Option value name, such as "Red".

  ```ts
  string
  ```

* selected

  Whether the customer has selected the value.

  ```ts
  boolean
  ```

* selectedOptions

  Selection that the value targets. Build the option link from this selection. Selecting the value can produce a different selection.

  ```ts
  SelectedOption[]
  ```

* swatch

  Swatch data from the option value in your query.

  ```ts
  TOptionValue["swatch"]
  ```

* variant

  Variant for the targeted selection, or \`null\` when the selection is partial or your query didn't load that variant.

  ```ts
  TVariant | null
  ```

### ProductOptionValueFrom



### VariantSelectionResult

Result of selecting an option value. Build the next product URL from the selected options in the result. - \`resolved\`: the selection matches a variant that your query loaded. - \`unresolved\`: the selection is valid, but your query didn't load a matching variant. - \`invalid\`: the product has no such option name or value, or no variant combines the value with the rest of the selection. When a complete selection returns \`unresolved\`, query the exact variant from the Storefront API with the returned selected options.

```ts
{
      status: "resolved";
      selectedOptions: SelectedOption[];
      selectedVariant: TVariant;
    } | {
      status: "unresolved";
      selectedOptions: SelectedOption[];
      selectedVariant: null;
    } | {
      status: "invalid";
      selectedOptions: SelectedOption[];
      selectedVariant: null;
      reason: string;
    }
```

### Examples

* #### Create a product form store

  ##### Description

  Create a store, listen for state changes, and select an option value. \`selectOption()\` returns a reason for an invalid selection. The example then stops listening and destroys the store.

  ##### TypeScript

  ```ts
  import { createCartStore, createProductFormStore, type ProductInput } from "@shopify/hydrogen";

  declare const product: ProductInput;

  const cartStore = createCartStore();
  const store = createProductFormStore(product, cartStore);

  const unsubscribe = store.subscribe((state) => {
    console.log("selected variant:", state.selectedVariant);
  });

  const result = store.selectOption("Color", "Red");

  if (result.status === "invalid") {
    console.warn(result.reason);
  }

  unsubscribe();
  store.destroy();
  ```

* #### Reload the product after navigation

  ##### Description

  Pass reloaded product data to \`hydrate()\` after navigation. The reset handler calls \`reset()\` to restore the initial product and selection.

  ##### TypeScript

  ```ts
  import { createCartStore, createProductFormStore, type ProductInput } from "@shopify/hydrogen";

  declare const initialProduct: ProductInput;
  declare function loadProduct(search: string): Promise<ProductInput>;

  const cartStore = createCartStore();
  const store = createProductFormStore(initialProduct, cartStore);

  export async function onNavigate(search: string) {
    const nextProduct = await loadProduct(search);
    store.hydrate(nextProduct);
  }

  export function onResetClick() {
    store.reset();
  }
  ```

***

## Form fields

## create​Product​Form​Register(**[selectedVariant](#createproductformregister-propertydetail-selectedvariant)**​,**[selectOption](#createproductformregister-propertydetail-selectoption)**​)

Creates the register function that returns props for each product form field.

The merchandise ID field submits the variant that you pass at creation. Create a new register function each time the product form state changes. The product form hooks create a new register function for you.

### Parameters

* **selected​Variant**

  **ProductVariantInput**

  **required**

  The variant that the merchandise ID field submits, or `null` when the selection doesn't resolve to a variant.

* **select​Option**

  **(name: string, value: string) => void**

  **required**

  The function that option value fields call with the option name and value.

### Returns

* **ProductFormRegister**

  A register function for the merchandise ID, quantity, option value, attribute, and add-to-cart fields.

### ProductFormRegister



### Examples

* #### Bind product form fields

  ##### Description

  Create a register function from the store state and get the attributes for each field type.

  ##### TypeScript

  ```ts
  import { createProductFormRegister, type ProductFormStore } from "@shopify/hydrogen";

  declare const store: ProductFormStore;

  const { selectedVariant } = store.getState();
  const register = createProductFormRegister(selectedVariant, (name, value) => {
    store.selectOption(name, value);
  });

  const merchandiseId = register("merchandiseId", {});
  const quantity = register("quantity", { value: 1 });
  const engraving = register("attributeValue", { key: "Engraving", value: "Hello" });
  const addToCart = register("addToCart", {});
  const red = register("optionValue", { optionName: "Color", value: "Red" });

  console.log(merchandiseId, quantity, engraving, addToCart);
  red.onClick();
  ```

***
