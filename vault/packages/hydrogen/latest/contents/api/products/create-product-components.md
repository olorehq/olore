---
title: Product components
description: >-
  The createProductComponents function creates a product provider and product
  hooks for React or Vue, typed to your product query. Use the provider and
  hooks to share one product form across variant pickers and an add-to-cart
  form, and to update the URL when the customer selects an option.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/products/create-product-components
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/products/create-product-components.md
api_name: hydrogen
---

# Product components

The `createProductComponents` function creates a product provider and product hooks for React or Vue, typed to your product query. Use the provider and hooks to share one product form across variant pickers and an add-to-cart form, and to update the URL when the customer selects an option.

To manage the store yourself, create the store with [`createProductFormStore`](https://shopify.dev/docs/api/hydrogen/latest/products/create-product-form-store) and read the store with the standalone `useProductForm` hook. Other frameworks use `createProductFormStore` directly.

To build a product page with variant pickers and an add-to-cart form, refer to [Build product pages with variant selection](https://shopify.dev/docs/storefronts/hydrogen/products).

Import `createProductComponents` and `useProductForm` from `@shopify/hydrogen/react` or `@shopify/hydrogen/vue`.

Render `ProductProvider` inside the `CartProvider` from [`createCartComponents`](https://shopify.dev/docs/api/hydrogen/latest/cart/create-cart-components).

***

## Provider and hooks

## create​Product​Components()

Creates a product provider and product hooks typed to your product query.

The provider creates the product form store, reloads the product into the store when the product changes, and destroys the store on unmount. The `useProduct` hook returns the option state and variant selection. The `useProductForm` hook adds field props, form props, and the pending state.

Pass your Storefront API product query type as the type argument to type the selected variant and option values. Render the provider inside a cart provider. The provider throws an error without a cart provider ancestor, and each hook throws an error outside the product provider.

### Returns

* **{ ProductProvider: (props: ProductProviderProps\<TProduct>) => ReactNode; useProduct: () => UseProductResult\<TProduct>; useProductForm: () => UseProductFormResult\<TProduct>; }**

  The typed `ProductProvider` component and the `useProduct` and `useProductForm` hooks.

### ProductProviderProps

Props for the product provider from \`createProductComponents\`.

* children

  Content that reads product state through the product hooks.

  ```ts
  ReactNode
  ```

* onSelect

  Runs after each resolved or unresolved selection. Invalid selections skip the callback. Navigate to the new product URL in this callback, and keep navigation out of option controls. Make the callback safe to run twice. A click on a hydrated option link runs the callback and also follows the link.

  ```ts
  (result: ValidProductSelectionResult<TProduct>) => void
  ```

* product

  The product from your Storefront API query. The provider reloads the product into the store when the product ID or the selected or first available variant ID changes. The customer's selection persists through re-renders that keep both IDs.

  ```ts
  TProduct
  ```

### ValidProductSelectionResult

A selection result with a \`resolved\` or \`unresolved\` status. Selection callbacks receive this result.

```ts
{ status: 'unresolved'; selectedOptions: SelectedOption[]; selectedVariant: null; } | { status: 'invalid'; selectedOptions: SelectedOption[]; selectedVariant: null; reason: string; } | { status: 'resolved'; selectedOptions: SelectedOption[]; selectedVariant: ProductVariantFrom<TProduct>; }
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

### ProductVariantFrom

Variant type from your product query type.

```ts
TProduct extends ProductInput<infer TVariant> ? TVariant : ProductVariantInput
```

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

### UseProductResult

Product state that the \`useProduct\` hook from \`createProductComponents\` returns.

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
  ProductFormOptions<TProduct>
  ```

* selectedVariant

  Variant that matches the current selection, or \`null\` when the selection is partial or your query didn't load that variant.

  ```ts
  ProductVariantFrom<TProduct> | null
  ```

* selectOption

  Selects an option value and returns the result. Resolved and unresolved selections run the \`onSelect\` callback.

  ```ts
  (name: string, value: string) => VariantSelectionResult<ProductVariantFrom<TProduct>>
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

### ProductFormOptions

Option state from the product form, typed to your product query.

```ts
VariantOptionState<ProductVariantFrom<TProduct>, ProductOptionValueFrom<TProduct>>[]
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

### UseProductFormResult

Product form state and bindings that the product form hooks return.

* errors

  Cart errors and warnings to show near the add-to-cart button.

  ```ts
  ProductFormErrors
  ```

* formProps

  Returns props for the product form element. Submitting the form adds the selected variant to the cart, and the form posts to the cart endpoint before JavaScript loads. Call \`preventDefault()\` in \`beforeSubmit\` to cancel the submission. The \`afterSubmit\` callback runs after the cart store handles the submission. Cart errors appear in the errors field. When the cart store throws an error, the hook logs the error and skips \`afterSubmit\`.

  ```ts
  (opts?: { beforeSubmit?: (e: SubmitEvent<HTMLFormElement>) => void; afterSubmit?: (e: SubmitEvent<HTMLFormElement>) => void; }) => FormHTMLAttributes<HTMLFormElement>
  ```

* matchedLineItem

  First cart line that holds the selected variant, or \`null\` when no cart line holds the variant.

  ```ts
  CartLine | null
  ```

* options

  Each product option and its values, with the selection, existence, and availability of each value.

  ```ts
  ProductFormOptions<TProduct>
  ```

* pending

  Whether the cart is handling a form submission. Disable the add-to-cart button while the value is \`true\`.

  ```ts
  boolean
  ```

* register

  Returns the props for a product form field. Spread the props on the matching input or button.

  ```ts
  ProductFormRegister
  ```

* selectedVariant

  Variant that matches the current selection, or \`null\` when the selection is partial or your query didn't load that variant.

  ```ts
  ProductVariantFrom<TProduct> | null
  ```

* selectOption

  Selects an option value and returns the result. Resolved and unresolved selections run the \`onSelect\` callback.

  ```ts
  (name: string, value: string) => VariantSelectionResult<ProductVariantFrom<TProduct>>
  ```

### ProductFormRegister



### Examples

* #### Create typed product components

  ##### Description

  Create the provider and hooks once from a product query type. This example exports \`ProductProvider\`, \`useProduct\`, and \`useProductForm\` from a shared module.

  ##### React

  ```tsx
  import { createProductComponents } from "@shopify/hydrogen/react";

  import type { ProductData } from "./types";

  export const { ProductProvider, useProduct, useProductForm } =
    createProductComponents<ProductData>();
  ```

* #### Build an add-to-cart form in React

  ##### Description

  Update the URL in \`onSelect\` when the customer selects an option, and bind an add-to-cart form with \`register()\` and \`formProps()\`.

  ##### React

  ```tsx
  import { buildProductSelectionSearchParams, canAddToCart } from "@shopify/hydrogen";
  import { useLocation, useNavigate } from "react-router";

  import { ProductProvider, useProductForm } from "./product";
  import type { ProductData } from "./types";

  export function ProductPage({ product }: { product: ProductData }) {
    const location = useLocation();
    const navigate = useNavigate();

    return (
      <ProductProvider
        product={product}
        onSelect={(result) => {
          const params = buildProductSelectionSearchParams({
            selectedOptions: result.selectedOptions,
            optionNames: product.options.map((option) => option.name),
            base: new URLSearchParams(location.search),
          });
          void navigate(`?${params}`, { replace: true, preventScrollReset: true });
        }}
      >
        <AddToCart product={product} />
      </ProductProvider>
    );
  }

  function AddToCart({ product }: { product: ProductData }) {
    const { options, selectedVariant, register, formProps, pending } = useProductForm();
    const addable = canAddToCart(product, options);

    return (
      <form {...formProps()}>
        <input type="hidden" {...register("merchandiseId", {})} />
        <input type="hidden" {...register("quantity", { value: 1 })} />
        <button {...register("addToCart", {})} disabled={!addable || pending}>
          {addable ? "Add to cart" : selectedVariant ? "Sold out" : "Select options"}
        </button>
      </form>
    );
  }
  ```

* #### Build an add-to-cart form in Vue

  ##### Description

  Bind an add-to-cart form with \`register()\` and \`formProps()\`. In this example, the \`./product\` module exports the composables that \`createProductComponents()\` from \`@shopify/hydrogen/vue\` returns. The example also shows the first cart user error.

  ##### Vue

  ```vue
  <script setup lang="ts">
  import { canAddToCart } from "@shopify/hydrogen";
  import { computed, ref } from "vue";

  import { useProductForm } from "./product";
  import type { ProductData } from "./product-types";

  const props = defineProps<{ product: ProductData }>();

  const form = useProductForm();
  const quantity = ref(1);
  const addable = computed(() => canAddToCart(props.product, form.options));
  </script>

  <template>
    <form v-bind="form.formProps()">
      <input type="hidden" v-bind="form.register('merchandiseId', {})" />
      <input type="hidden" v-bind="form.register('quantity', { value: quantity })" />
      <button v-bind="form.register('addToCart', {})" :disabled="!addable || form.pending.value">
        {{ addable ? "Add to cart" : "Unavailable" }}
      </button>
      <p v-if="form.errors.userErrors.length > 0">{{ form.errors.userErrors[0].message }}</p>
    </form>
  </template>
  ```

***

## Standalone form hook

## use​Product​Form(**[store](#useproductform-propertydetail-store)**​,**[options](#useproductform-propertydetail-options)**​)

Returns product form state and bindings from a product form store that you manage, and re-renders when the state changes.

Create the store with `createProductFormStore`. Call `connect()` on mount, `hydrate()` when the product data changes, and `destroy()` on unmount. To skip the store setup, use the product provider from `createProductComponents`.

### Parameters

* **store**

  **ProductFormStore\<ProductInput\<ProductVariantInput>, ProductVariantInput>**

  **required**

  The store that `createProductFormStore` returns.

* **options**

  **UseProductFormOptions\<ProductInput\<ProductVariantInput>>**

  An `onSelect` callback that runs after each resolved or unresolved selection.

### Returns

* **UseProductFormResult\<ProductInput>**

  The option state, the selected variant, cart errors, the matching cart line, the pending state, the register function, and the form props.

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

### UseProductFormOptions

Options for the \`useProductForm\` hook.

* onSelect

  Runs after each resolved or unresolved selection. Invalid selections skip the callback.

  ```ts
  (result: ValidProductSelectionResult<TProduct>) => void
  ```

### Examples

* #### Use a store that you create

  ##### Description

  Create a store once, connect and destroy the store in an effect, and call \`hydrate()\` when the product ID or the selected variant ID changes. This example binds an add-to-cart form with the standalone React \`useProductForm\` hook.

  ##### React

  ```tsx
  import {
    canAddToCart,
    createProductFormStore,
    type CartStore,
    type ProductInput,
  } from "@shopify/hydrogen";
  import { useProductForm } from "@shopify/hydrogen/react";
  import { useEffect, useRef, useState } from "react";

  export function AddToCart({ product, cartStore }: { product: ProductInput; cartStore: CartStore }) {
    const [store] = useState(() => createProductFormStore(product, cartStore));

    useEffect(() => {
      store.connect();
      return () => store.destroy();
    }, [store]);

    // Rehydrate when client-side navigation passes a different product.
    const productKey = `${product.id}:${product.selectedOrFirstAvailableVariant?.id ?? ""}`;
    const mountedRef = useRef(false);
    useEffect(() => {
      if (!mountedRef.current) {
        mountedRef.current = true;
        return;
      }
      store.hydrate(product);
    }, [productKey]);

    const { options, register, formProps, pending } = useProductForm(store);

    return (
      <form {...formProps()}>
        <input type="hidden" {...register("merchandiseId", {})} />
        <input type="hidden" {...register("quantity", { value: 1 })} />
        <button {...register("addToCart", {})} disabled={!canAddToCart(product, options) || pending}>
          Add to cart
        </button>
      </form>
    );
  }
  ```

***

## Vue bindings

* The Vue `ProductProvider` takes `product` and `onSelect` props and renders its default slot.
* The Vue `useProduct` and `useProductForm` composables return objects with getters. Read properties from the returned object. Destructured values don't update when the state changes.
* The Vue `pending` value is a boolean shallow ref. Read `pending.value` in templates and scripts.
* The composables from `createProductComponents` call the latest `onSelect` prop. The standalone `useProductForm` composable keeps the `onSelect` option from setup and ignores later changes.

***
