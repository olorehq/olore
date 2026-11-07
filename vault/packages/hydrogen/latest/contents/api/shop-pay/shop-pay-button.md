---
title: Shop Pay button
description: >-
  The ShopPayButton component renders a Shop Pay button that checks out a
  selected variant right away or checks out the current cart. Use the component
  in React and Vue apps.
api_version: 2026-10
source_url:
  html: 'https://shopify.dev/docs/api/hydrogen/latest/shop-pay/shop-pay-button'
  md: 'https://shopify.dev/docs/api/hydrogen/latest/shop-pay/shop-pay-button.md'
api_name: hydrogen
---

# Shop Pay button

The `ShopPayButton` component renders a Shop Pay button that checks out a selected variant right away or checks out the current cart. Use the component in React and Vue apps.

For DOM code, server-rendered HTML, and frameworks without a Hydrogen binding, use `createShopPayButton`, `renderShopPayButton`, and `defineShopPayButton` from `@shopify/hydrogen`.

To add Shop Pay to product pages and the cart, refer to [Add Shop Pay buttons](https://shopify.dev/docs/storefronts/hydrogen/shop-pay).

Import `ShopPayButton` from `@shopify/hydrogen/react` or `@shopify/hydrogen/vue`.

***

## Properties

Props for the `ShopPayButton` component. The props match the options of `createShopPayButton`. The component doesn't accept `className` or `style` props.

* **accessibility​Label**

  **string**

  Localized accessible label for the button. Defaults to `"Buy with Shop Pay"`. Keep the brand name Shop Pay untranslated and in Latin script in every locale.

* **border​Radius**

  **string**

  CSS border radius of the button, such as `8px`. Defaults to `12px`.

  Pass a single CSS value. The Shop Pay functions throw an error when the radius contains a semicolon or a curly brace.

* **channel**

  **'headless' | 'hydrogen'**

  Sales channel that the checkout URL carries as `channel`. Omit the channel unless checkout needs explicit `headless` or `hydrogen` attribution.

* **checkout​Url**

  **string**

  Absolute checkout base URL. Omit the URL to link to the same-origin `/checkout` and `/cart` permalink paths, which Hydrogen's Shopify route handler redirects to the store's checkout.

  Pass the cart's checkout URL when your app doesn't send same-origin checkout paths through the Shopify route handler. The button URL keeps the query params of the checkout URL, replaces any params that Shop Pay sets, and drops the hash. A bare domain such as `my-store.myshopify.com` gets an HTTPS scheme. The Shop Pay functions throw an error when the value isn't a valid URL.

* **disabled**

  **boolean**

  Disables the button. A disabled button renders without an `href` and with `aria-disabled="true"`.

* **nonce**

  **string**

  Content Security Policy nonce for the button's style element.

  The nonce covers only the style element. Custom width and border radius values render as an inline style attribute, which a strict Content Security Policy must allow.

* **payment​Option**

  **'shop\_pay' | 'shop\_pay\_installments'**

  Checkout payment mode. Defaults to `shop_pay`. Use `shop_pay_installments` to open Shop Pay Installments at checkout.

* **source**

  **string**

  Attribution source that the checkout URL carries as `source`. Defaults to `hydrogen`. Most storefronts shouldn't change the source.

* **source​Token**

  **string**

  Attribution token that the checkout URL carries as `source_token`.

* **variants**

  **ShopPayVariants**

  Variants that the customer buys right away through a Shopify cart permalink. Omit the variants to check out the current cart.

  Pass either all variant ID strings or all objects with an `id` and an optional `quantity`. Each quantity must be a positive integer. The Shop Pay functions throw an error for product IDs, non-numeric variant IDs, invalid quantities, and mixed formats.

* **width**

  **string**

  CSS width of the button, such as `100%`. Defaults to `260px`.

  Pass a single CSS value. The Shop Pay functions throw an error when the width contains a semicolon or a curly brace.

### ShopPayVariants

Variants for a Shop Pay checkout, as all ID strings or all objects with an ID and a quantity.

```ts
readonly string[] | readonly ShopPayVariantWithQuantity[]
```

### ShopPayVariantWithQuantity

A variant ID and an optional quantity for a Shop Pay checkout.

* id

  Product variant GID or numeric variant ID. Product IDs throw an error.

  ```ts
  string
  ```

* quantity

  Quantity of the variant. Defaults to \`1\`.

  ```ts
  number
  ```

### Examples

* #### Add Shop Pay to a product form in React

  ##### Description

  Render the button next to a React product form. This example renders nothing until a variant resolves and passes the quantity and disabled state.

  ##### React

  ```tsx
  import { ShopPayButton } from "@shopify/hydrogen/react";

  type BuyNowProps = {
    variantId: string | null;
    quantity: number;
    disabled: boolean;
  };

  export function BuyNow({ variantId, quantity, disabled }: BuyNowProps) {
    if (!variantId) return null;

    return (
      <ShopPayButton
        variants={[{ id: variantId, quantity }]}
        disabled={disabled}
        width="100%"
        borderRadius="9999px"
      />
    );
  }
  ```

* #### Add Shop Pay to a product form in Vue

  ##### Description

  Render the button next to a Vue product form. This example uses \`v-if\` to wait for a resolved variant and binds the quantity and disabled state.

  ##### Vue

  ```vue
  <script setup lang="ts">
  import { ShopPayButton } from "@shopify/hydrogen/vue";

  defineProps<{
    variantId: string | null;
    quantity: number;
    disabled: boolean;
  }>();
  </script>

  <template>
    <ShopPayButton
      v-if="variantId"
      :variants="[{ id: variantId, quantity }]"
      :disabled="disabled"
      width="100%"
      border-radius="9999px"
    />
  </template>
  ```

***

## Browser element

## create​Shop​Pay​Button(**[options](#createshoppaybutton-propertydetail-options)**​)

Creates a Shop Pay button element in the browser. Append the element to the page.

The function requires a DOM. Use `renderShopPayButton` during server rendering.

### Parameters

* **options**

  **ShopPayButtonOptions**

  **required**

  The variants, checkout URL, and display settings for the button.

### Returns

* **HTMLElement**

  The Shop Pay button element, ready to append to the page.

### ShopPayButtonOptions

Checkout target, variants, attribution, and display settings for a Shop Pay button.

* accessibilityLabel

  Localized accessible label for the button. Defaults to \`"Buy with Shop Pay"\`. Keep the brand name Shop Pay untranslated and in Latin script in every locale.

  ```ts
  string
  ```

* borderRadius

  CSS border radius of the button, such as \`8px\`. Defaults to \`12px\`. Pass a single CSS value. The Shop Pay functions throw an error when the radius contains a semicolon or a curly brace.

  ```ts
  string
  ```

* channel

  Sales channel that the checkout URL carries as \`channel\`. Omit the channel unless checkout needs explicit \`headless\` or \`hydrogen\` attribution.

  ```ts
  'headless' | 'hydrogen'
  ```

* checkoutUrl

  Absolute checkout base URL. Omit the URL to link to the same-origin \`/checkout\` and \`/cart\` permalink paths, which Hydrogen's Shopify route handler redirects to the store's checkout. Pass the cart's checkout URL when your app doesn't send same-origin checkout paths through the Shopify route handler. The button URL keeps the query params of the checkout URL, replaces any params that Shop Pay sets, and drops the hash. A bare domain such as \`my-store.myshopify.com\` gets an HTTPS scheme. The Shop Pay functions throw an error when the value isn't a valid URL.

  ```ts
  string
  ```

* disabled

  Disables the button. A disabled button renders without an \`href\` and with \`aria-disabled="true"\`.

  ```ts
  boolean
  ```

* nonce

  Content Security Policy nonce for the button's style element. The nonce covers only the style element. Custom width and border radius values render as an inline style attribute, which a strict Content Security Policy must allow.

  ```ts
  string
  ```

* paymentOption

  Checkout payment mode. Defaults to \`shop\_pay\`. Use \`shop\_pay\_installments\` to open Shop Pay Installments at checkout.

  ```ts
  'shop_pay' | 'shop_pay_installments'
  ```

* source

  Attribution source that the checkout URL carries as \`source\`. Defaults to \`hydrogen\`. Most storefronts shouldn't change the source.

  ```ts
  string
  ```

* sourceToken

  Attribution token that the checkout URL carries as \`source\_token\`.

  ```ts
  string
  ```

* variants

  Variants that the customer buys right away through a Shopify cart permalink. Omit the variants to check out the current cart. Pass either all variant ID strings or all objects with an \`id\` and an optional \`quantity\`. Each quantity must be a positive integer. The Shop Pay functions throw an error for product IDs, non-numeric variant IDs, invalid quantities, and mixed formats.

  ```ts
  ShopPayVariants
  ```

* width

  CSS width of the button, such as \`100%\`. Defaults to \`260px\`. Pass a single CSS value. The Shop Pay functions throw an error when the width contains a semicolon or a curly brace.

  ```ts
  string
  ```

### Examples

* #### Create a product button

  ##### Description

  Create a full-width Shop Pay button for a variant and quantity. This example appends the button to a container and returns it.

  ##### TypeScript

  ```ts
  import { createShopPayButton } from "@shopify/hydrogen";

  export function mountShopPayButton(container: HTMLElement, variantId: string, quantity: number) {
    const button = createShopPayButton({
      variants: [{ id: variantId, quantity }],
      width: "100%",
    });

    container.append(button);
    return button;
  }
  ```

***

## Server HTML and custom element

## render​Shop​Pay​Button(**[options](#rendershoppaybutton-propertydetail-options)**​)

Returns the Shop Pay button as an HTML string for server templates and frameworks without a Hydrogen binding.

On the server, the markup includes the button's styles and link, and the button works without client JavaScript. In the browser, the function returns an empty element that renders the button when you add the element to the page.

### Parameters

* **options**

  **ShopPayButtonOptions**

  **required**

  The variants, checkout URL, and display settings for the button.

### Returns**string**

* The Shop Pay button markup.

## define​Shop​Pay​Button()

Registers the Shop Pay button custom element in the browser. Call the function when you use the `hydrogen-shop-pay-button` tag directly on a framework without a Hydrogen binding.

The Hydrogen Shop Pay components, `createShopPayButton`, and `renderShopPayButton` register the element for you. The function does nothing during server rendering or when the browser already has the element.

### Returns**void**

* Nothing.

### Examples

* #### Render button HTML

  ##### Description

  Render a product buy button as an HTML string. This example disables the button while a mutation is pending and wraps it in surrounding markup.

  ##### TypeScript

  ```ts
  import { renderShopPayButton } from "@shopify/hydrogen";

  export function renderBuyNow(variantId: string, quantity: number, pending: boolean) {
    const shopPay = renderShopPayButton({
      variants: [{ id: variantId, quantity }],
      disabled: pending,
      width: "100%",
      borderRadius: "9999px",
    });

    return `<div class="buy-buttons">${shopPay}</div>`;
  }
  ```

***

## Styling

The Shop Pay button is a `hydrogen-shop-pay-button` custom element that holds the link and logo in a shadow root. Page CSS can't reach the shadow root. Size the button with the `width` and `borderRadius` options.

***
