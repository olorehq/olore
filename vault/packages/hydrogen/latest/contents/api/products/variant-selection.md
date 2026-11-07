---
title: Variant selection
description: >-
  The variant selection functions read the customer's option selection and turn
  the selection into product links. Use these functions to read selected options
  from the request URL, get the selected variant from the product form, and
  build product links for a selection.
api_version: 2026-10
source_url:
  html: 'https://shopify.dev/docs/api/hydrogen/latest/products/variant-selection'
  md: 'https://shopify.dev/docs/api/hydrogen/latest/products/variant-selection.md'
api_name: hydrogen
---

# Variant selection

The variant selection functions read the customer's option selection and turn the selection into product links. Use these functions to read selected options from the request URL, get the selected variant from the product form, and build product links for a selection.

Import `getSelectedProductOptions`, `getSelectedVariant`, and `buildProductSelectionSearchParams` from `@shopify/hydrogen`.

***

## Selected variant

## get​Selected​Variant(**[options](#getselectedvariant-propertydetail-options)**​)

Returns the variant that matches the customer's current option selection.

Show the product's price range until the selection resolves to a variant. When every option has a selection and the function returns `null`, query the exact variant from the Storefront API.

### Parameters

* **options**

  **VariantOptionState\<TVariant, ProductOptionValueInput\<ProductVariantInput>>\[]**

  **required**

  The `options` array from the product form state.

### Returns

* **TVariant extends ProductVariantInput | null**

  The matching variant, or `null` when the selection is partial or your query didn't load that variant.

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

### Examples

* #### Read the selected variant

  ##### Description

  Read the selected variant from the current product form store state.

  ##### TypeScript

  ```ts
  import { getSelectedVariant, type ProductFormStore } from "@shopify/hydrogen";

  declare const store: ProductFormStore;

  const variant = getSelectedVariant(store.getState().options);

  if (variant) {
    console.log(variant.id, variant.price.amount, variant.price.currencyCode);
  } else {
    console.log("Select options");
  }
  ```

***

## Selected options

## get​Selected​Product​Options(**[input1](#getselectedproductoptions-propertydetail-input1)**​)

Reads the customer's option selection from a product URL's search params.

Each param becomes an option name and value. For example, `?Color=Red&Size=M` becomes Color set to Red and Size set to M. The function always skips the `variant` param, which holds a numeric variant ID in Liquid storefront URLs.

Pass the result as the `selectedOptions` argument of your Storefront API product query, or as the starting selection of a product form store.

### Parameters

* **input1**

  **{ searchParams: URLSearchParams; allowedOptionNames?: readonly string\[]; }**

  **required**

  The search params to read and an optional list of allowed option names. With `allowedOptionNames`, the function keeps only params whose name exactly matches an allowed name, and an empty list keeps no params. Pass the product's option names to keep unrelated params out of the selection.

### Returns

* **SelectedOption\[]**

  The selected options, in the order that they appear in the URL.

### Examples

* #### Read selected options in a loader

  ##### Description

  Read option parameters, such as \`?Color=Red\&Size=M\`, from the request URL and pass the selection to a Storefront API product query.

  ##### TypeScript

  ```ts
  import { getSelectedProductOptions } from "@shopify/hydrogen";

  declare const storefrontClient: {
    graphql(query: string, options: { variables: Record<string, unknown> }): Promise<unknown>;
  };
  declare const PRODUCT_QUERY: string;

  export async function loader({ request, params }: { request: Request; params: { handle: string } }) {
    const selectedOptions = getSelectedProductOptions({
      searchParams: new URL(request.url).searchParams,
    });

    return storefrontClient.graphql(PRODUCT_QUERY, {
      variables: { handle: params.handle, selectedOptions },
    });
  }
  ```

* #### Filter to known option names

  ##### Description

  Keep only parameters that match the product's option names. This example drops the \`ref\` and \`variant\` parameters.

  ##### TypeScript

  ```ts
  import { getSelectedProductOptions, type ProductInput } from "@shopify/hydrogen";

  declare const product: ProductInput;

  const searchParams = new URLSearchParams("Color=Red&Size=M&ref=campaign&variant=123");

  const selectedOptions = getSelectedProductOptions({
    searchParams,
    allowedOptionNames: product.options.map((option) => option.name),
  });
  ```

***

## Product links

## build​Product​Selection​Search​Params(**[input1](#buildproductselectionsearchparams-propertydetail-input1)**​)

Builds the search params for a product URL that holds the customer's variant selection.

The function keeps unrelated params from the base params, such as `?ref=campaign`, and replaces any earlier selection. Pass the current product's option names to clear the current product's params when you link to another product in a combined listing.

The default options style writes one param per option. The variant style writes a single numeric variant ID param for shareable links. The variant style falls back to option params when you pass no variant or when the variant ID isn't a numeric product variant GID. The `handleShopifyRoutes` handler redirects variant links to option param URLs.

### Parameters

* **input1**

  **{ style?: ProductSelectionLinkStyle; selectedOptions: readonly SelectedOption\[]; variant?: { id: string; }; optionNames: readonly string\[]; base?: URLSearchParams; }**

  **required**

  The selected options, the current product's option names, and an optional variant, link style, and base params.

### Returns

* **URLSearchParams**

  New search params that hold the kept base params and the selection.

### ProductSelectionLinkStyle

How a product URL encodes the customer's variant selection. - \`options\`: one param per option, such as \`?Color=Red\&Size=M\`. - \`variant\`: a single \`?variant=\<numeric id>\` param that matches Liquid storefront URLs.

```ts
"options" | "variant"
```

### Examples

* #### Build an option link

  ##### Description

  If the selection is valid, then build a product URL from the selected options in the result. If the selection matches a variant that your query loaded, then replace the current URL with the product URL. Otherwise, load the product URL. The product URL keeps unrelated parameters from the current URL.

  ##### TypeScript

  ```ts
  import { buildProductSelectionSearchParams, type ProductFormStore } from "@shopify/hydrogen";

  declare const store: ProductFormStore;
  declare const product: { handle: string; options: Array<{ name: string }> };

  const result = store.selectOption("Color", "Red");

  if (result.status !== "invalid") {
    const searchParams = buildProductSelectionSearchParams({
      selectedOptions: result.selectedOptions,
      optionNames: product.options.map((option) => option.name),
      base: new URLSearchParams(location.search),
    });
    const url = `/products/${product.handle}${searchParams.size ? `?${searchParams}` : ""}`;
    if (result.status === "resolved") history.replaceState(history.state, "", url);
    else location.replace(url);
  }
  ```

***

## Option names

Pass the names from `product.options` as `optionNames` in product links, and as `allowedOptionNames` after you've loaded the product.

***
