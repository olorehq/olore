---
title: About the Hydrogen cart
description: >-
  Learn how Hydrogen's cart store syncs with Shopify, applies optimistic
  updates, tracks pending and error state, and falls back to a server-rendered
  cart page.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/cart'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/cart.md'
api_name: hydrogen
---

# About the Hydrogen cart

Hydrogen's cart is a client-side store that stays in sync with the Shopify cart. It gives you optimistic updates, pending state, and errors scoped to the line, discount code, note, or attribute that caused them. You build the cart UI with plain HTML forms, and Hydrogen supplies the form attributes that connect them to the store.

The store itself is plain JavaScript and works in any framework. React and Vue bindings wrap the same store, and in other frameworks you can use [`createCartStore`](https://shopify.dev/docs/api/hydrogen/latest/cart/create-cart-store) and [`createCartFormRegister`](https://shopify.dev/docs/api/hydrogen/latest/cart/cart-forms) from `@shopify/hydrogen` directly.

***

## How it works

A cart in Hydrogen has three parts:

* **Cart server handlers:** [`createCartServerHandlers()`](https://shopify.dev/docs/api/hydrogen/latest/cart/cart-server-handlers) returns the handlers for the `/api/cart` endpoint. You register them with [`handleShopifyRoutes`](https://shopify.dev/docs/storefronts/hydrogen/request-handlers), and they read and write the cart through the Storefront API using your server-side client.
* **Cart store:** The store holds the cart state in the browser and notifies subscribers when it changes. In React, [`createCartComponents()`](https://shopify.dev/docs/api/hydrogen/latest/cart/create-cart-components) derives a `CartProvider` and hooks from your cart handlers, so the cart state is typed to the fields your handlers return.
* **Cart forms:** Each cart control is a `<form>`. Its fields and submit buttons come from the store's `register()` helper, which encodes Hydrogen's cart action contract.

When a customer submits a cart form, the following happens:

1. The store calls a Shopify [standard action](https://shopify.dev/docs/api/storefront-events-and-actions), which dispatches an event such as `shopify:cart:lines-update`, `shopify:cart:discount-update`, `shopify:cart:note-update`, or `shopify:cart:attributes-update`.
2. The store applies an optimistic projection, so the UI changes immediately.
3. The store adds the affected line, discount code, note, or attribute list to its pending state.
4. The request reaches `/api/cart`, which calls the Storefront API.
5. When the response arrives, the store folds it into the confirmed cart state and clears the pending entry. If the request fails, then the store removes only the failed projection and records a scoped error.

Because cart changes flow through standard actions, installed apps, analytics, and agents that use the same events stay in sync with your cart UI without extra wiring.

```js
import {configureCartEndpoint, createCartStore} from '@shopify/hydrogen';


configureCartEndpoint('/api/cart');
const cart = createCartStore({initialData});
cart.connect();


cart.subscribe((state) => {
  document.querySelector('#cart-count').textContent = String(
    state.data.totalQuantity,
  );
});
```

***

## Optimistic updates

Every cart mutation updates the UI before the server responds. When a customer increases a quantity, removes a line, or applies a discount code, the store shows the expected result right away and confirms it when the Storefront API responds.

The store handles overlapping mutations for you:

* A new mutation for the same line, discount batch, note, or attribute list supersedes the one in flight, so rapid clicks are safe.
* Relative additions stay independent, so every submitted quantity reaches the server.
* When overlapping responses make the result ambiguous, the store sets `state.revalidating` to `true`, runs one authoritative cart refresh after the burst settles, and then clears the flag.
* When a request fails, the store rolls back only that mutation and keeps unrelated work.

Controls stay interactive while a mutation is pending. Don't disable increase, decrease, remove, or discount buttons to wait for the server.

***

## Pending state

`state.pending` tells you which values are optimistic and not yet confirmed:

| Field | Type | Description |
| - | - | - |
| `pending.lines` | `Set<string>` | Line IDs with mutations in flight. |
| `pending.discountCodes` | `Set<string>` | Discount codes that are being applied or removed. |
| `pending.cost` | `boolean \| undefined` | `true` when pending line or discount mutations can leave totals stale. |
| `pending.note` | `boolean` | `true` while a note save is in flight. |
| `pending.attributes` | `boolean` | `true` while a cart attribute update is in flight. |

Show pending values differently from confirmed ones. The reference pattern is reduced opacity: keep the previous quantity or price in place as a placeholder, and fade it until the server confirms. Don't replace a value with a spinner or skeleton, and don't compute a new total in the browser. Cart amounts always come from Shopify, because discounts, taxes, duties, and rounding make client-side math drift from the real total. Treat totals as unconfirmed while `pending.cost` or `state.revalidating` is `true`.

***

## Scoped errors

`state.errors` groups errors by the entity that caused them, so you can show each error next to the control it describes:

| Field | Type | Description |
| - | - | - |
| `errors.lines` | `Map<string, CartErrorGroup>` | Errors keyed by line ID. |
| `errors.discountCodes` | `Map<string, CartErrorGroup>` | Errors keyed by discount code. |
| `errors.note` | `CartErrorGroup` | Errors from the order note. |
| `errors.attributes` | `Map<string, CartErrorGroup>` | Errors keyed by attribute key. |
| `errors.cart` | `CartErrorGroup` | Cart-level errors that don't belong to a specific entity. |
| `errors.network` | `CartNetworkEntry[]` | Transport failures, such as timeouts and HTTP errors. |
| `errors.lastUpdatedAt` | `number` | The timestamp of the most recent error update in any scope. |

Each `CartErrorGroup` contains `userErrors` and `warnings` from the Storefront API. An error stays in place while the customer works on other parts of the cart, and it clears when a new mutation starts for the same key.

Show line, discount, note, and attribute errors inline. Use a banner only for errors that have no inline home: network errors, cart-level errors, and line errors whose line is no longer in the cart.

***

## Server-rendered cart page

The cart store is progressive enhancement over plain HTML forms. Every cart form has a real `method` and `action`, so it still submits to `/api/cart` if JavaScript hasn't loaded, and an add without a cart sets the cart cookie on that response.

Your storefront needs a full `/cart` page that renders from server data. It's the fallback for the cart drawer and the page that a `/cart` link opens without JavaScript. To make it work, read the cart on the server and pass it to the cart store as `initialData`:

* **A promise:** The shell streams without waiting for the cart, and cart content suspends until the cart resolves. Use this when your framework can stream promises, like the Next.js App Router.
* **A resolved value:** The first HTML response includes the full cart. Use this when the page must show the live cart with JavaScript turned off.
* **`{cart: null}`:** The server already checked and found no cart. The store renders the empty state without fetching again.
* **Omitted:** The store fetches `/api/cart` after hydration. Use this only when there's no server data path, such as in a single-page app.

`initialData` is the envelope that the cart handlers return, `{cart, errors?}`, not the cart object alone.

***

## Developer tools and resources

[Storefront API cart\
\
](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/cart)

[Learn how carts work in the Storefront API.](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/cart)

[Standard events and actions\
\
](https://shopify.dev/docs/api/storefront-events-and-actions)

[Explore the events and actions that Hydrogen uses to sync the cart.](https://shopify.dev/docs/api/storefront-events-and-actions)

[Hydrogen cart reference\
\
](https://shopify.dev/docs/api/hydrogen/latest/cart/create-cart-store)

[Explore the cart store, cart components, server handlers, and forms.](https://shopify.dev/docs/api/hydrogen/latest/cart/create-cart-store)

***

## Get started

[Build cart UI\
\
](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart)

[Add the cart provider, line item forms, discounts, notes, and totals.](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart)

[Build a cart drawer\
\
](https://shopify.dev/docs/storefronts/hydrogen/cart/cart-drawer)

[Add an accessible drawer that opens from any page.](https://shopify.dev/docs/storefronts/hydrogen/cart/cart-drawer)

[Use cart metafields\
\
](https://shopify.dev/docs/storefronts/hydrogen/cart/metafields)

[Read and write custom data on the cart.](https://shopify.dev/docs/storefronts/hydrogen/cart/metafields)

***
