---
title: Add Shop Pay buttons
description: >-
  Add Shop Pay accelerated checkout buttons to product pages and the cart in a
  Hydrogen storefront.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/shop-pay'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/shop-pay.md'
api_name: hydrogen
---

# Add Shop Pay buttons

A [Shop Pay](https://help.shopify.com/en/manual/payments/shop-pay/activating-shop-pay) button sends customers straight to Shop Pay checkout, either with a single product or with their whole cart. This guide shows you how to add Shop Pay buttons to product pages and to the cart.

***

## How it works

Hydrogen renders the Shop Pay button on your own server as a `<hydrogen-shop-pay-button>` element. The element uses a declarative shadow root, so page CSS can't override the button's branded styles, and the button works before any JavaScript runs. No external script loads.

The button links to a path on your own storefront:

1. On a product page, the button links to a [cart permalink](https://shopify.dev/docs/apps/build/checkout/create-cart-permalinks), like `/cart/{variant_id}:{quantity}`.
2. In the cart, the button links to `/checkout`.
3. [`handleShopifyRoutes()`](https://shopify.dev/docs/storefronts/hydrogen/request-handlers) receives the request and redirects the customer to your store's checkout with Shop Pay.

Hydrogen provides the button in the following forms:

| Export | Package | Use |
| - | - | - |
| [`ShopPayButton`](https://shopify.dev/docs/api/hydrogen/latest/shop-pay/shop-pay-button) | `@shopify/hydrogen/react` or `@shopify/hydrogen/vue` | A component for React or Vue. |
| `renderShopPayButton()` | `@shopify/hydrogen` | Returns an HTML string for server templates or raw HTML rendering. |
| `createShopPayButton()` | `@shopify/hydrogen` | Returns a DOM element for imperative UI code. |

The examples in this guide show the core helpers in vanilla JavaScript, and the components in React and Vue.

***

## Requirements

* Wire [request handlers](https://shopify.dev/docs/storefronts/hydrogen/request-handlers) so that `handleShopifyRoutes()` handles `/checkout` and cart permalinks. Otherwise, pass `checkoutUrl` to the button.
* Build a [product form](https://shopify.dev/docs/storefronts/hydrogen/products) and a [cart](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart).
* Connect a real store. Shop Pay doesn't work with [mock.shop](https://shopify.dev/docs/storefronts/headless/mock-shop), because its checkout is a mock.

***

## Step 1: Add Shop Pay to product pages

On a product page, render the button next to your add-to-cart button. Render it only when the customer has selected a variant, and pass the variant ID with a quantity:

## Product page Shop Pay button

## lib/product-shop-pay.ts

##### Vanilla JavaScript

```ts
import {canAddToCart, createShopPayButton, type ProductFormStore} from '@shopify/hydrogen';

import {cartStore} from './cart';
import type {ProductData} from './product-query';

export function mountProductShopPay(
  container: HTMLElement,
  quantityInput: HTMLInputElement,
  product: ProductData,
  store: ProductFormStore<ProductData>,
) {
  function render() {
    const {options, selectedVariant} = store.getState();
    if (!selectedVariant) {
      container.replaceChildren();
      return;
    }

    const quantity = Math.max(1, Math.floor(Number(quantityInput.value)) || 1);
    const pending = cartStore.getState().pending.lines.size > 0;

    container.replaceChildren(
      createShopPayButton({
        variants: [{id: selectedVariant.id, quantity}],
        disabled: !canAddToCart(product, options) || pending,
        width: '100%',
        borderRadius: '8px',
      }),
    );
  }

  render();
  quantityInput.addEventListener('input', render);
  const unsubscribeProduct = store.subscribe(render);
  const unsubscribeCart = cartStore.subscribe(render);

  return () => {
    quantityInput.removeEventListener('input', render);
    unsubscribeProduct();
    unsubscribeCart();
  };
}
```

##### React

```tsx
import {canAddToCart} from '@shopify/hydrogen';
import {ShopPayButton} from '@shopify/hydrogen/react';
import {useState} from 'react';

import {useProductForm} from '../lib/product';
import type {ProductData} from '../lib/product-query';

export function AddToCart({product}: {product: ProductData}) {
  const {options, selectedVariant, formProps, register, pending} =
    useProductForm();
  const [quantity, setQuantity] = useState(1);
  const addable = canAddToCart(product, options);

  return (
    <>
      <form {...formProps()}>
        <input type="hidden" {...register('merchandiseId', {})} />
        <input
          aria-label="Quantity"
          {...register('quantity', {value: quantity})}
          onChange={(event) => setQuantity(Number(event.target.value))}
        />
        <button
          {...register('addToCart', {})}
          aria-disabled={!addable}
          aria-busy={pending}
          onClick={(event) => {
            if (!addable) event.preventDefault();
          }}
        >
          Add to cart
        </button>
      </form>

      {selectedVariant ? (
        <ShopPayButton
          variants={[{id: selectedVariant.id, quantity}]}
          disabled={!addable || pending}
          width="100%"
          borderRadius="8px"
        />
      ) : null}
    </>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {canAddToCart} from '@shopify/hydrogen';
import {ShopPayButton} from '@shopify/hydrogen/vue';
import {computed, ref} from 'vue';

import {useProductForm} from '../lib/product';
import type {ProductData} from '../lib/product-query';

const props = defineProps<{product: ProductData}>();

const form = useProductForm();
const quantity = ref(1);
const addable = computed(() => canAddToCart(props.product, form.options));

function updateQuantity(event: Event) {
  const value = Number((event.target as HTMLInputElement).value);
  quantity.value = Number.isFinite(value) && value > 0 ? Math.floor(value) : 1;
}
</script>

<template>
  <form v-bind="form.formProps()">
    <input type="hidden" v-bind="form.register('merchandiseId', {})" />
    <input
      aria-label="Quantity"
      v-bind="form.register('quantity', {value: quantity})"
      @input="updateQuantity"
    />
    <button
      v-bind="form.register('addToCart', {})"
      :aria-disabled="!addable"
      :aria-busy="form.pending.value"
      @click="!addable && $event.preventDefault()"
    >
      Add to cart
    </button>
  </form>

  <ShopPayButton
    v-if="form.selectedVariant"
    :variants="[{id: form.selectedVariant.id, quantity}]"
    :disabled="!addable || form.pending.value"
    width="100%"
    border-radius="8px"
  />
</template>
```

In vanilla JavaScript, the button is a new element each time the selection, quantity, or pending state changes. Pass the product form store from [Product pages and variants](https://shopify.dev/docs/storefronts/hydrogen/products), and the quantity input of your add-to-cart form.

Follow these rules for product buttons:

* Pass `ProductVariant` IDs, either as GIDs or as bare numeric IDs. Product IDs don't work.
* Use `{id, quantity}` objects when you know the quantity. Don't mix plain ID strings and objects in one `variants` array.
* Keep the Shop Pay button's state in sync with your add-to-cart button. Base both on `canAddToCart()`, not only on whether a variant is selected. Disable the Shop Pay button while a product or cart update is pending. The add-to-cart button uses `aria-disabled` and `aria-busy` instead, so it stays focusable, as described in [Product pages and variants](https://shopify.dev/docs/storefronts/hydrogen/products).

***

## Step 2: Add Shop Pay to the cart

On the cart page or in the cart drawer, render the button without `variants`. Without variants, the button checks out the current cart. Hide or disable it when the cart is empty or a cart update is pending:

## Cart Shop Pay button

## components/cart-checkout-button.ts

##### Vanilla JavaScript

```ts
import {createShopPayButton} from '@shopify/hydrogen';

import {cartStore} from '../lib/cart';

export function mountCartCheckoutButton(container: HTMLElement) {
  function render() {
    const {data, pending} = cartStore.getState();
    if (data.totalQuantity === 0 || !data.checkoutUrl) {
      container.replaceChildren();
      return;
    }

    container.replaceChildren(
      createShopPayButton({
        disabled: pending.lines.size > 0 || Boolean(pending.cost),
        width: '100%',
        borderRadius: '8px',
      }),
      Object.assign(document.createElement('a'), {
        href: data.checkoutUrl,
        textContent: 'Checkout',
      }),
    );
  }

  render();
  return cartStore.subscribe(render);
}
```

##### React

```tsx
import {ShopPayButton} from '@shopify/hydrogen/react';

import {useCart} from '../lib/cart';

export function CartCheckoutButton() {
  const totalQuantity = useCart((state) => state.data.totalQuantity);
  const checkoutUrl = useCart((state) => state.data.checkoutUrl);
  const pending = useCart(
    (state) => state.pending.lines.size > 0 || state.pending.cost,
  );

  if (totalQuantity === 0 || !checkoutUrl) return null;

  return (
    <div>
      <ShopPayButton disabled={pending} width="100%" borderRadius="8px" />
      <a href={checkoutUrl}>Checkout</a>
    </div>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {ShopPayButton} from '@shopify/hydrogen/vue';

import {useCart} from '../lib/cart';

const totalQuantity = useCart((state) => state.data.totalQuantity);
const checkoutUrl = useCart((state) => state.data.checkoutUrl);
const pending = useCart((state) => state.pending.lines.size > 0 || Boolean(state.pending.cost));
</script>

<template>
  <div v-if="totalQuantity > 0 && checkoutUrl">
    <ShopPayButton :disabled="pending" width="100%" border-radius="8px" />
    <a :href="checkoutUrl">Checkout</a>
  </div>
</template>
```

A disabled button renders without an `href` and with `aria-disabled="true"`, so nothing happens if a customer selects it while an update is pending.

***

## Step 3: Configure the button

Set the button's options as props, or pass them as an options object to `renderShopPayButton()` and `createShopPayButton()`:

| Option | Type | Description |
| - | - | - |
| `variants` | `string[]` or `{id: string, quantity: number}[]` | The variants to buy. Omit to check out the current cart. |
| `disabled` | `boolean` | Renders the button without a link. |
| `width` | `string` | The button's CSS width, like `100%`. |
| `borderRadius` | `string` | The button's CSS border radius, like `8px`. |
| `accessibilityLabel` | `string` | The button's accessible name. Defaults to English. |
| `nonce` | `string` | A Content Security Policy nonce for the button's inline `<style>` element. |
| `channel` | `'headless'` or `'hydrogen'` | Attributes checkout to a specific sales channel. |
| `checkoutUrl` | `string` | The checkout URL to use when `handleShopifyRoutes()` doesn't handle `/checkout` and cart permalinks. |

The button's shadow root isolates its styles, so the button doesn't support `className` or `style`. Use `width` and `borderRadius` to size it.

If your storefront isn't in English, then pass a translated `accessibilityLabel`. Translate the words around the brand name, but don't translate "Shop Pay".

Pass `channel` only when checkout needs explicit attribution to the sales channel that issued your Storefront API token.

If your Content Security Policy requires nonces for inline `<style>` elements, then pass `nonce`. The nonce doesn't cover the `style` attribute that `width` and `borderRadius` set, so a strict policy must also allow inline style attributes.

### Use the core helpers

If you render pages with a server template instead of React or Vue, then call `renderShopPayButton()` on the server. It returns HTML with a declarative shadow root, so the button works before any JavaScript runs:

## Server-rendered button

server/product.ts

```ts
import {renderShopPayButton} from '@shopify/hydrogen';


const shopPayHtml = renderShopPayButton({
  variants: [{id: selectedVariant.id, quantity: 1}],
  width: '100%',
});
```

In browser code, `createShopPayButton()` returns an element that you can append to the page, as the vanilla JavaScript examples in steps 1 and 2 do. For buttons you create in the browser under a strict Content Security Policy, pass a `nonce` to `createShopPayButton()`.

***

## Step 4: Test checkout

Open a product page and select the Shop Pay button, then add an item to the cart and select the cart's Shop Pay button. Both should open Shop Pay checkout. If checkout fails, then check the following:

* The request reaches `handleShopifyRoutes()` before your framework router. Test by opening `/checkout` or a cart permalink directly.
* The variant IDs are `ProductVariant` IDs, not `Product` IDs.
* Quantities are positive integers.
* You pass `checkoutUrl` if your storefront doesn't route checkout paths through `handleShopifyRoutes()`.

***

## Next steps

[Cart drawer\
\
](https://shopify.dev/docs/storefronts/hydrogen/cart/cart-drawer)

[Add Shop Pay to an accessible cart drawer.](https://shopify.dev/docs/storefronts/hydrogen/cart/cart-drawer)

[Request handlers\
\
](https://shopify.dev/docs/storefronts/hydrogen/request-handlers)

[Learn which routes Hydrogen handles, including checkout and cart permalinks.](https://shopify.dev/docs/storefronts/hydrogen/request-handlers)

[Shop Pay reference\
\
](https://shopify.dev/docs/api/hydrogen/latest/shop-pay/shop-pay-button)

[Review the Shop Pay button's options, rendering helpers, and styling.](https://shopify.dev/docs/api/hydrogen/latest/shop-pay/shop-pay-button)

***
