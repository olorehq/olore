---
title: Shop Pay button URL
description: >-
  The getShopPayButtonUrl function returns the checkout URL that the Shop Pay
  button links to. Use the URL in your own Shop Pay markup to send customers to
  the same checkout as the button.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/shop-pay/get-shop-pay-button-url
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/shop-pay/get-shop-pay-button-url.md
api_name: hydrogen
---

# Shop Pay button URL

The `getShopPayButtonUrl` function returns the checkout URL that the Shop Pay button links to. Use the URL in your own Shop Pay markup to send customers to the same checkout as the button.

The [`ShopPayButton`](https://shopify.dev/docs/api/hydrogen/latest/shop-pay/shop-pay-button) component renders the same checkout link with Shop Pay branding.

Import `getShopPayButtonUrl` from `@shopify/hydrogen`.

***

## Checkout URL

## get​Shop​Pay​Button​Url(**[options](#getshoppaybuttonurl-propertydetail-options)**​)

Returns the checkout URL for a Shop Pay button. Use the URL to build your own Shop Pay link.

With variants, the URL is a cart permalink that checks out those variants. Without variants, the URL checks out the current cart.

### Parameters

* **options**

  **ShopPayButtonOptions**

  **required**

  The variants, checkout URL, payment mode, attribution, and disabled state for the checkout URL.

### Returns

* **string | null**

  The checkout URL, or `null` when `disabled` is `true`.

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

* #### Build a checkout URL

  ##### Description

  Build Shop Pay URLs for cart checkout, variant checkout, and a disabled button. This example shows the URL that each call returns.

  ##### TypeScript

  ```ts
  import { getShopPayButtonUrl } from "@shopify/hydrogen";

  getShopPayButtonUrl({});
  // "/checkout?payment=shop_pay&source=hydrogen"

  getShopPayButtonUrl({
    variants: [{ id: "gid://shopify/ProductVariant/123", quantity: 2 }, { id: "456" }],
  });
  // "/cart/123:2,456:1?payment=shop_pay&source=hydrogen"

  getShopPayButtonUrl({ disabled: true, variants: ["123"] });
  // null
  ```

* #### Use an absolute checkout URL

  ##### Description

  Build the Shop Pay URL from the cart's \`checkoutUrl\`. This example returns an absolute checkout link.

  ##### TypeScript

  ```ts
  import { getShopPayButtonUrl } from "@shopify/hydrogen";

  export function getShopPayCheckoutHref(cart: { checkoutUrl: string }) {
    return getShopPayButtonUrl({ checkoutUrl: cart.checkoutUrl });
  }
  ```

***
