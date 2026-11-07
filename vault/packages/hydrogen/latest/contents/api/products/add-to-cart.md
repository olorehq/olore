---
title: Add to cart
description: >-
  The add to cart functions check whether the customer can add the selected
  variant to the cart and find the cart line that already holds a variant. Use
  these functions to enable the add-to-cart button and show the quantity that's
  already in the cart.
api_version: 2026-10
source_url:
  html: 'https://shopify.dev/docs/api/hydrogen/latest/products/add-to-cart'
  md: 'https://shopify.dev/docs/api/hydrogen/latest/products/add-to-cart.md'
api_name: hydrogen
---

# Add to cart

The add to cart functions check whether the customer can add the selected variant to the cart and find the cart line that already holds a variant. Use these functions to enable the add-to-cart button and show the quantity that's already in the cart.

Import `canAddToCart` and `findCartLineByMerchandiseId` from `@shopify/hydrogen`.

***

## Availability check

## can​Add​To​Cart(**[product](#canaddtocart-propertydetail-product)**​,**[options](#canaddtocart-propertydetail-options)**​)

Checks whether the customer can add the current selection to the cart. Use the result to enable or disable the add-to-cart button.

### Parameters

* **product**

  **TProduct extends ProductInput\<ProductVariantInput>**

  **required**

  The product from your query. A product that requires a selling plan always returns `false`.

* **options**

  **VariantOptionState\<ProductVariantFrom\<TProduct>, ProductOptionValueFrom\<TProduct>>\[]**

  **required**

  The `options` array from the product form state.

### Returns

* **false | true**

  `true` when the selection resolves to a variant that's available for sale and the product doesn't require a selling plan.

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

### ProductVariantFrom

Variant type from your product query type.

```ts
TProduct extends ProductInput<infer TVariant> ? TVariant : ProductVariantInput
```

### ProductOptionValueFrom



### Examples

* #### Enable the add-to-cart button

  ##### Description

  Set the button's disabled state and label from the current state of the product form store, then update the button on every store change. The label changes for products that need a subscription, incomplete selections, and sold-out variants.

  ##### TypeScript

  ```ts
  import { canAddToCart, type ProductFormStore, type ProductInput } from "@shopify/hydrogen";

  declare const product: ProductInput;
  declare const store: ProductFormStore;
  declare const button: HTMLButtonElement;

  function render(state: ReturnType<typeof store.getState>) {
    const addable = canAddToCart(product, state.options);

    button.disabled = !addable;
    if (addable) {
      button.textContent = "Add to cart";
    } else if (product.requiresSellingPlan) {
      button.textContent = "Choose a subscription";
    } else if (state.selectedVariant) {
      button.textContent = "Sold out";
    } else {
      button.textContent = "Select options";
    }
  }

  render(store.getState());
  store.subscribe(render);
  ```

***

## Existing cart line

## find​Cart​Line​By​Merchandise​Id(**[lines](#findcartlinebymerchandiseid-propertydetail-lines)**​,**[merchandiseId](#findcartlinebymerchandiseid-propertydetail-merchandiseid)**​)

Finds the cart line that holds a variant. Use the line to show the quantity that's already in the cart.

When several cart lines hold the variant with different selling plans or attributes, the function returns the first line.

### Parameters

* **lines**

  **CartLine\[]**

  **required**

  The cart lines, such as `data.lines.nodes` from the cart state.

* **merchandise​Id**

  **string**

  **required**

  The variant ID to look for.

### Returns

* **CartLine | null**

  The first cart line that holds the variant, or `null` when no cart line holds the variant.

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

### Examples

* #### Find the cart line for a variant

  ##### Description

  Look up the cart line for a variant ID from the cart store state.

  ##### TypeScript

  ```ts
  import { findCartLineByMerchandiseId, type CartStore } from "@shopify/hydrogen";

  declare const cartStore: CartStore;
  declare const variantId: string;

  const line = findCartLineByMerchandiseId(cartStore.getState().data.lines.nodes, variantId);

  if (line) {
    console.log(`Already in cart, quantity ${line.quantity}`);
  }
  ```

***
