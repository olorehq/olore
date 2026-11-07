---
title: Build a cart drawer
description: >-
  Add an accessible cart drawer to your Hydrogen storefront with the native
  dialog element, and connect it to the openCart standard action.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/cart/cart-drawer'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/cart/cart-drawer.md'
api_name: hydrogen
---

# Build a cart drawer

Use a cart drawer so customers can review and change their cart without leaving the page. This guide shows you how to build one with the native `<dialog>` element, open it from your header and from add-to-cart forms, and connect it to the `window.Shopify.actions.openCart()` [standard action](https://shopify.dev/docs/api/storefront-events-and-actions), so apps and agents can open it too.

***

## How it works

A cart drawer has the following parts:

* A `<dialog>` element renders once in your root layout and opens with `showModal()`.
* A cart trigger link opens the dialog and falls back to your `/cart` page before hydration or with JavaScript turned off.
* A handler that you register for the `openCart` standard action opens the dialog when `window.Shopify.actions.openCart()` runs.

Installed apps and AI agents open the cart with `window.Shopify.actions.openCart()`. The handler routes that call to your drawer.

The browser handles most of the accessibility work for a modal dialog:

* The dialog renders in the top layer, above all other content.
* Everything outside the dialog becomes inert. Tab and Shift+Tab stay inside the dialog.
* Escape closes the dialog.
* Focus returns to the element that opened the dialog when it closes.
* Screen readers treat the dialog as modal.

You add the rest: an accessible name, a close button, backdrop dismissal, scroll lock, and animations.

The drawer is progressive enhancement over your `/cart` page.

***

## Requirements

Build your cart line item and totals components and a server-rendered `/cart` page, as shown in [Build cart UI](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart). Render `ShopifyScripts` once in your root document to make `window.Shopify.actions` available, as shown in [Analytics and consent](https://shopify.dev/docs/storefronts/hydrogen/analytics).

***

## Step 1: Create the drawer helpers

Create a small module that finds the drawer by ID and opens or closes it:

## Drawer helpers

lib/cart-drawer.ts

```ts
export const CART_DRAWER_ID = 'cart-drawer';


function getCartDrawer() {
  if (typeof document === 'undefined') return null;


  const drawer = document.getElementById(CART_DRAWER_ID);
  return drawer instanceof HTMLDialogElement ? drawer : null;
}


export function openCartDrawer() {
  const drawer = getCartDrawer();
  if (!drawer || drawer.open) return;
  drawer.showModal();
}


export function closeCartDrawer() {
  getCartDrawer()?.close();
}
```

Keep the drawer's open state in the `<dialog>` element. Don't mirror it in framework state. To react to opening and closing, listen for the dialog's native `toggle` event.

***

## Step 2: Register the `openCart` handler

This registration is required. Without the handler, `window.Shopify.actions.openCart()` navigates to `/cart` instead of opening the drawer. In `lib/cart-drawer.ts`, register the open helper as the handler for the `openCart` standard action:

## Handler registration

lib/cart-drawer.ts

```ts
let openCartActionConfigured = false;
let openCartActionRetryQueued = false;


function configureOpenCartActionNow() {
  const openCart =
    typeof window !== 'undefined' ? window.Shopify?.actions?.openCart : undefined;
  if (!openCart) return false;


  openCart.configure({
    handler: async () => openCartDrawer(),
  });
  openCartActionConfigured = true;
  return true;
}


export function configureOpenCartAction() {
  if (typeof document === 'undefined' || openCartActionConfigured) return;
  if (configureOpenCartActionNow()) return;
  if (openCartActionRetryQueued || document.readyState !== 'loading') return;


  openCartActionRetryQueued = true;
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      openCartActionRetryQueued = false;
      configureOpenCartAction();
    },
    {once: true},
  );
}


configureOpenCartAction();
```

The call to `configureOpenCartAction()` at module scope does nothing during server rendering. In the browser, it registers the handler right away if the Shopify runtime has loaded, or retries once on `DOMContentLoaded` if the runtime loads after this module.

The `openCart` handler is permanent. `configure()` has no counterpart that removes it, and the handler stays registered for the life of the page. Register a stable helper that looks up the dialog each time it runs. A function that closes over a component ref can go stale during hot module reloading.

***

## Step 3: Build the drawer

The drawer has three zones:

* **Header:** The title, the close button, and the [error banner](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart). It doesn't scroll.
* **Body:** The line items. It's the only zone that scrolls.
* **Footer:** Discount codes, the order note, and totals with the [checkout link](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.checkoutUrl). It stays pinned to the bottom, and it doesn't render when the cart is empty.

Give the dialog an accessible name with `aria-labelledby`, and add `closedby="any"` so a click on the backdrop closes it:

## Cart drawer

## components/cart-drawer.ts

##### Vanilla JavaScript

```ts
import {cartStore} from '../lib/cart';
import {CART_DRAWER_ID, closeCartDrawer} from '../lib/cart-drawer';

import {mountCartContent} from './cart-content';
import {mountCartDiscounts} from './cart-discounts';
import {mountCartErrorBanner} from './cart-error-banner';
import {mountCartNote} from './cart-note';
import {mountCartTotals} from './cart-totals';

export function mountCartDrawer() {
  const drawer = Object.assign(document.createElement('dialog'), {id: CART_DRAWER_ID});
  drawer.setAttribute('aria-labelledby', 'cart-drawer-title');
  drawer.setAttribute('closedby', 'any');

  const close = Object.assign(document.createElement('button'), {type: 'button', textContent: '×'});
  close.setAttribute('aria-label', 'Close cart');
  close.addEventListener('click', closeCartDrawer);

  const errorBanner = document.createElement('div');
  const header = Object.assign(document.createElement('div'), {className: 'cart-drawer-header'});
  header.append(
    Object.assign(document.createElement('h2'), {id: 'cart-drawer-title', textContent: 'Cart'}),
    close,
    errorBanner,
  );

  const body = Object.assign(document.createElement('div'), {className: 'cart-drawer-body'});
  const [discounts, note, totals] = [0, 1, 2].map(() => document.createElement('div'));
  const footer = Object.assign(document.createElement('div'), {className: 'cart-drawer-footer'});
  footer.append(discounts, note, totals);

  drawer.append(header, body, footer);
  document.body.append(drawer);

  mountCartErrorBanner(errorBanner);
  mountCartContent(body);
  mountCartDiscounts(discounts);
  mountCartNote(note);
  mountCartTotals(totals);

  const toggleFooter = () => {
    const {loading, data} = cartStore.getState();
    footer.hidden = loading || data.lines.nodes.length === 0;
  };
  toggleFooter();
  cartStore.subscribe(toggleFooter);
}
```

##### React

```tsx
import {Suspense} from 'react';

import {useSuspenseCart} from '../lib/cart';
import {CART_DRAWER_ID, closeCartDrawer} from '../lib/cart-drawer';

import {CartDiscounts} from './CartDiscounts';
import {CartErrorBanner} from './CartErrorBanner';
import {CartLineItem} from './CartLineItem';
import {CartNote} from './CartNote';
import {CartTotals} from './CartTotals';

export function CartDrawer() {
  return (
    <dialog id={CART_DRAWER_ID} aria-labelledby="cart-drawer-title" closedby="any">
      <div className="cart-drawer-header">
        <h2 id="cart-drawer-title">Cart</h2>
        <button type="button" aria-label="Close cart" onClick={closeCartDrawer}>
          ×
        </button>
        <CartErrorBanner />
      </div>
      <Suspense fallback={<p role="status">Loading cart…</p>}>
        <CartDrawerContent />
      </Suspense>
    </dialog>
  );
}

function CartDrawerContent() {
  const lines = useSuspenseCart((state) => state.data.lines.nodes);

  if (lines.length === 0) {
    return (
      <div className="cart-drawer-body">
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <>
      <ul className="cart-drawer-body">
        {lines.map((line) => (
          <li key={line.id}>
            <CartLineItem line={line} />
          </li>
        ))}
      </ul>
      <div className="cart-drawer-footer">
        <CartDiscounts />
        <CartNote />
        <CartTotals />
      </div>
    </>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {useCart} from '../lib/cart';
import {CART_DRAWER_ID, closeCartDrawer} from '../lib/cart-drawer';

import CartDiscounts from './CartDiscounts.vue';
import CartErrorBanner from './CartErrorBanner.vue';
import CartLineItem from './CartLineItem.vue';
import CartNote from './CartNote.vue';
import CartTotals from './CartTotals.vue';

const loading = useCart((state) => state.loading);
const lines = useCart((state) => state.data.lines.nodes);
</script>

<template>
  <dialog :id="CART_DRAWER_ID" aria-labelledby="cart-drawer-title" closedby="any">
    <div class="cart-drawer-header">
      <h2 id="cart-drawer-title">Cart</h2>
      <button type="button" aria-label="Close cart" @click="closeCartDrawer">×</button>
      <CartErrorBanner />
    </div>
    <p v-if="loading" role="status">Loading cart…</p>
    <div v-else-if="lines.length === 0" class="cart-drawer-body">
      <p>Your cart is empty.</p>
    </div>
    <template v-else>
      <ul class="cart-drawer-body">
        <li v-for="line in lines" :key="line.id">
          <CartLineItem :line="line" />
        </li>
      </ul>
      <div class="cart-drawer-footer">
        <CartDiscounts />
        <CartNote />
        <CartTotals />
      </div>
    </template>
  </dialog>
</template>
```

The header renders outside the loading state, so the title, close button, and error banner are available while the cart loads. In React, it sits outside the `<Suspense>` boundary, and the error banner reads the cart with `useCart()`, which doesn't suspend.

Reuse the same line item component as your `/cart` page. If the drawer needs different markup, then keep the same line item form contract: a hidden `set` button, a `lineId` input, and an editable quantity input.

Render the drawer once in your root layout, inside the cart provider. In vanilla JavaScript, call `mountCartDrawer()` once per page.

***

## Step 4: Add the cart trigger

Render the trigger as a link to `/cart`. After hydration, its click handler prevents navigation and opens the drawer. Let modified clicks, like Command-click or Ctrl-click, open `/cart` in a new tab as usual:

## Cart trigger

## components/cart-trigger.ts

##### Vanilla JavaScript

```ts
import {cartStore} from '../lib/cart';
import {CART_DRAWER_ID, openCartDrawer} from '../lib/cart-drawer';

// Enhances a server-rendered <a href="/cart"> link.
export function enhanceCartTrigger(trigger: HTMLAnchorElement) {
  trigger.setAttribute('aria-controls', CART_DRAWER_ID);
  trigger.setAttribute('aria-haspopup', 'dialog');
  trigger.addEventListener('click', (event) => {
    const isModifiedClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (event.button !== 0 || isModifiedClick) return;
    event.preventDefault();
    openCartDrawer();
  });

  const render = () => {
    trigger.textContent = `Cart (${cartStore.getState().data.totalQuantity})`;
  };
  render();
  return cartStore.subscribe(render);
}
```

##### React

```tsx
import {useCart} from '../lib/cart';
import {CART_DRAWER_ID, openCartDrawer} from '../lib/cart-drawer';

export function CartTrigger() {
  const totalQuantity = useCart((state) => state.data.totalQuantity);

  return (
    <a
      href="/cart"
      aria-controls={CART_DRAWER_ID}
      aria-haspopup="dialog"
      onClick={(event) => {
        const isModifiedClick =
          event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
        if (event.button !== 0 || isModifiedClick) return;
        event.preventDefault();
        openCartDrawer();
      }}
    >
      Cart ({totalQuantity})
    </a>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {useCart} from '../lib/cart';
import {CART_DRAWER_ID, openCartDrawer} from '../lib/cart-drawer';

const totalQuantity = useCart((state) => state.data.totalQuantity);

function handleClick(event: MouseEvent) {
  const isModifiedClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
  if (event.button !== 0 || isModifiedClick) return;
  event.preventDefault();
  openCartDrawer();
}
</script>

<template>
  <a href="/cart" :aria-controls="CART_DRAWER_ID" aria-haspopup="dialog" @click="handleClick">
    Cart ({{ totalQuantity }})
  </a>
</template>
```

Use a plain `<a>` element, or your framework's link component, for the trigger. Every interactive element in the drawer must be a `<button>`, `<a>`, or `<input>`, not a `<div>` or `<span>` with a click handler.

***

## Step 5: Open the drawer from add-to-cart

Open the drawer as soon as a customer submits an add-to-cart form, so they can see the optimistic cart while the request is pending. In React and Vue, pass `openCartDrawer` as the `beforeSubmit` option of the product form's `formProps()`. In vanilla JavaScript, listen for the form's `submit` event:

## Open the drawer on add to cart

## components/add-to-cart-form.ts

##### Vanilla JavaScript

```ts
import {openCartDrawer} from '../lib/cart-drawer';

// Add this listener before the one that submits the form to the cart store.
addToCartForm.addEventListener('submit', () => openCartDrawer());
```

##### React

```tsx
<form {...formProps({beforeSubmit: openCartDrawer})}>
  {/* Variant and quantity fields, and the add-to-cart button */}
</form>
```

##### Vue

```html
<form v-bind="formProps({beforeSubmit: openCartDrawer})">
  <!-- Variant and quantity fields, and the add-to-cart button -->
</form>
```

`formProps()` here comes from the product form. To build it, refer to [Product pages and variants](https://shopify.dev/docs/storefronts/hydrogen/products). Validate input before you open the drawer. For example, call `event.preventDefault()` and return early if the quantity is invalid.

Opening the drawer is a storefront decision, not cart behavior. Some storefronts show a toast or navigate to `/cart` instead.

***

## Step 6: Style and animate the drawer

Add the drawer styles to your global CSS. If you use Tailwind, then keep the dialog shell, `::backdrop`, `@starting-style`, and scroll lock rules in global CSS, and use utilities for the content inside the drawer.

## Drawer styles

app.css

```css
dialog#cart-drawer {
  position: fixed;
  inset-block: 0;
  right: 0;
  left: auto;
  margin: 0;
  width: 100%;
  max-width: 28rem;
  height: 100dvh;
  max-height: none;
  border: 0;
  padding: 0;
  transform: translateX(100%);
  transition:
    transform 250ms cubic-bezier(0.22, 1, 0.36, 1),
    overlay 250ms allow-discrete,
    display 250ms allow-discrete;
}


dialog#cart-drawer[open] {
  display: flex;
  flex-direction: column;
  transform: translateX(0);
}


@starting-style {
  dialog#cart-drawer[open] {
    transform: translateX(100%);
  }
}


dialog#cart-drawer::backdrop {
  background: rgb(0 0 0 / 0);
  transition:
    background-color 250ms ease-out,
    overlay 250ms allow-discrete,
    display 250ms allow-discrete;
}


dialog#cart-drawer[open]::backdrop {
  background: rgb(0 0 0 / 0.3);
}


@starting-style {
  dialog#cart-drawer[open]::backdrop {
    background: rgb(0 0 0 / 0);
  }
}


.cart-drawer-body {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}


body:has(dialog#cart-drawer[open]) {
  overflow: hidden;
}
```

These rules do the following:

* **Entry and exit animation:** `@starting-style` sets the starting position when the dialog opens, and `allow-discrete` transitions on `overlay` and `display` keep the dialog visible while it slides out.
* **Backdrop:** The backdrop fades in and out with the drawer.
* **Scroll lock:** The `:has()` selector stops the page from scrolling while the drawer is open, with no JavaScript. If removing the scrollbar shifts your layout, then add `scrollbar-gutter: stable` to the root element.

Adapt the sizes, colors, and timing to your design system.

***

## Step 7: Test the drawer

Check the following behavior in your browser:

* Before hydration, or with JavaScript turned off, the cart trigger navigates to `/cart`.
* After hydration, the cart trigger opens the drawer.
* Running `window.Shopify.actions.openCart()` in the browser console opens the drawer. If the call navigates to `/cart` instead, then the handler isn't registered.
* Escape, the close button, and a click on the backdrop each close the drawer.

Check the following accessibility behavior:

* Focus returns to the cart trigger after the drawer closes.
* Tab moves only through elements inside the drawer while it's open.
* A screen reader announces the drawer's title when it opens.

Backdrop dismissal depends on browser support for the `closedby` attribute. Browsers without support ignore it, and the drawer still closes with Escape and the close button. If you need backdrop dismissal in those browsers, then close the dialog only when both the `pointerdown` and the following `click` land on the dialog element itself. A plain click check closes the drawer by accident when a customer drags from inside the drawer and releases over the backdrop.

***

## Next steps

[Analytics and consent\
\
](https://shopify.dev/docs/storefronts/hydrogen/analytics)

[Publish cart events and load the Shopify runtime that powers standard actions.](https://shopify.dev/docs/storefronts/hydrogen/analytics)

[Standard events and actions\
\
](https://shopify.dev/docs/api/storefront-events-and-actions)

[Learn about the actions that apps and agents use to open and change the cart.](https://shopify.dev/docs/api/storefront-events-and-actions)

***
