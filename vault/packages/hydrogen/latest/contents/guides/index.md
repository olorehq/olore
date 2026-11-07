---
title: Hydrogen
description: Hydrogen is Shopify's headless toolkit. Learn how its commerce primitives fit into your framework, hold state, and plug into your server's requests.
source_url:
  html: https://shopify.dev/docs/storefronts/hydrogen
  md: https://shopify.dev/docs/storefronts/hydrogen.md
---

# Hydrogen

Hydrogen is Shopify's headless toolkit. Add its commerce primitives to the framework you already use, and get all the power of Shopify under the hood.

[Deploy a template\
\
](https://shopify.dev/docs/storefronts/hydrogen/getting-started/deploy-a-template)

[Start from a working storefront built with React Router or Next.js.](https://shopify.dev/docs/storefronts/hydrogen/getting-started/deploy-a-template)

[Add Hydrogen to your project\
\
](https://shopify.dev/docs/storefronts/hydrogen/getting-started/add-to-existing-project)

[Install Hydrogen in the framework you already use.](https://shopify.dev/docs/storefronts/hydrogen/getting-started/add-to-existing-project)

## About Hydrogen

**Info:**

These docs cover Hydrogen version 2026-10. Building with Hydrogen 2026-04 or earlier? Refer to [Legacy Hydrogen](https://shopify.dev/docs/storefronts/headless/legacy), or [migrate to the latest version](https://shopify.dev/docs/storefronts/hydrogen/migrate).

Hydrogen handles the parts of a storefront that are specific to Shopify and easy to get wrong, like the cart, variant selection, collection filtering, analytics, and the routes that apps and checkout depend on. For full storefronts, it works with frameworks that run server code, like Next.js, React Router, Nuxt, Astro, and SvelteKit, leaving routing, rendering, and UI to them.

Hydrogen is one way to build a headless storefront on Shopify. If you're still deciding whether to build headless, or which option fits your project, then refer to [About headless commerce](https://shopify.dev/docs/storefronts/headless/overview).

## How it works

A Hydrogen storefront has three layers. Your framework owns routing, rendering, data loading, and UI. Hydrogen owns the Shopify-specific logic, like the Storefront API client, the cart, and the routes your storefront needs. Shopify provides the Storefront API, the Customer Account API, and checkout.

On the server, Hydrogen's request handlers run around your framework's router. They answer the handful of routes that a Shopify storefront needs, like `/api/cart` and `/checkout`, and pass every other request to your router. If your router can't find a page, then Hydrogen checks the store's URL redirects before the customer gets a 404. To wire this into your server, refer to [Request handlers](https://shopify.dev/docs/storefronts/hydrogen/request-handlers).

In the browser, Hydrogen keeps the cart, product form, collection, and search state in stores that your UI reads. Changes go back to Hydrogen through native HTML forms, so customers can still shop before JavaScript loads, or if it fails.

## Package entry points

Hydrogen's logic lives in a framework-agnostic core that depends only on `fetch` and other web platform APIs. Framework bindings expose the same core through each framework's idioms. The package has the following JavaScript entry points:

| Entry point | What it contains |
| - | - |
| `@shopify/hydrogen` | The core: Storefront API client, `gql`, request handlers, route templates, cart, product, collection, and predictive search stores, money formatting, analytics, Shop Pay, and caching. |
| `@shopify/hydrogen/react` | React bindings, like `createCartComponents()`, `createProductComponents()`, `ShopifyScripts`, and `ShopPayButton`. |
| `@shopify/hydrogen/vue` | Vue bindings, with the same components as the React entry point and composables in place of hooks, like `createCartComponents()`, `ShopifyScripts`, and `ShopPayButton`. |
| `@shopify/hydrogen/customer-account` | The Customer Account API client, its own `gql`, and customer session helpers. |
| `@shopify/hydrogen/vite` | Vite plugins for local development, like trusted local HTTPS. |
| `@shopify/hydrogen/ts-plugin` | A TypeScript plugin that validates and types `gql()` queries in your editor. |

Frameworks without a packaged binding, like Astro, SvelteKit, and SolidStart, use the core directly.

## Observable stores

Observable stores hold the parts of a storefront that change while a customer is on the page, like cart contents, the selected variant, applied filters, and search results. A store isn't tied to any framework. It exposes a `getState()` method and a `subscribe()` method, and your listener receives the full state on every change.

In plain JavaScript, you subscribe to the store directly. The React and Vue bindings wrap the same subscription in a hook or composable that takes a selector, so a component updates only when the selected value changes. This example keeps a cart count in sync:

## Subscribe to the cart store

## cart-count.js

##### Vanilla JavaScript

```js
import {createCartStore} from '@shopify/hydrogen';

const cart = createCartStore({initialData});
cart.connect();

cart.subscribe((state) => {
  const cartCount = document.querySelector('#cart-count');
  if (cartCount) {
    cartCount.textContent = String(state.data.totalQuantity);
  }
});
```

##### React

```tsx
import {useCart} from '~/lib/cart';

export function CartCount() {
  const totalQuantity = useCart((cart) => cart.data.totalQuantity);
  return <span>{totalQuantity}</span>;
}
```

##### Vue

```html
<script setup lang="ts">
import {useCart} from '~/lib/cart';

const totalQuantity = useCart((cart) => cart.data.totalQuantity);
</script>

<template>
  <span>{{ totalQuantity }}</span>
</template>
```

In React and Vue, `useCart` comes from `createCartComponents()`, which you call once in your app. In Vue, `useCart()` returns a read-only ref. Refer to [Cart](https://shopify.dev/docs/storefronts/hydrogen/cart) to set up the cart store and its provider.

Keep selectors stable. Hooks and composables compare selector results by reference, so a selector that builds a new array or object on every call looks like a change every time and re-renders on every update. Select primitives or references that already exist in the store, like `state.errors` or `state.data.lines.nodes`, then derive view models outside the selector. `useCart()` also accepts an optional equality function as a second argument.

## The request context

[`createShopifyRequestContext()`](https://shopify.dev/docs/api/hydrogen/latest/request-handling/create-shopify-request-context) creates one object per incoming request that every Hydrogen server API shares. It carries request-derived data, the `i18n` and optional `buyerIp` you supply, captured Shopify cookies, and response privacy markers.

Follow these rules when you use it:

* Create the request context once per request, and pass the same instance to your Storefront API client, Customer Account API client, and request handlers.
* Call `requestContext.applyResponseHeaders(response.headers)` on your final response.
* Create a client that depends on a customer's request once per request. You can create a client for catalog reads that don't carry buyer context once, at module scope, with a static request context.

Refer to [Storefront API client](https://shopify.dev/docs/storefronts/hydrogen/data-fetching) for both client patterns.

## Standard events and actions

Hydrogen implements Shopify's [standard storefront events and actions](https://shopify.dev/docs/api/storefront-events-and-actions), the same contract that Liquid themes use. When you render Shopify's runtime scripts, the browser gets a `window.Shopify.actions` object, and cart changes dispatch standard DOM events like `shopify:cart:lines-update`.

Installed apps and shopping agents use this contract to read and update the cart on your storefront the same way they do on a theme. The cart store listens for the same events, so your UI stays in sync when an app or agent changes the cart. For example, other code on the page can open your cart drawer with `window.Shopify.actions.openCart()`. To connect the drawer to that action, refer to [Cart drawer](https://shopify.dev/docs/storefronts/hydrogen/cart/cart-drawer).

## What's included

Hydrogen includes the following primitives:

* **Storefront API client:** A typed client with `gql()` queries that your editor checks against the Storefront API schema. Refer to [Storefront API client](https://shopify.dev/docs/storefronts/hydrogen/data-fetching).
* **Request handlers:** Handlers that restore the routes a Shopify storefront needs, including the Storefront API proxy, checkout, cart permalinks, redirects, and agent endpoints. Refer to [Request handlers](https://shopify.dev/docs/storefronts/hydrogen/request-handlers).
* **Cart:** Server handlers, a reactive cart store with optimistic updates, and progressive line item forms. Refer to [Cart](https://shopify.dev/docs/storefronts/hydrogen/cart).
* **Products and collections:** Variant selection, product options, collection filtering, sorting, and pagination. Refer to [Product pages and variants](https://shopify.dev/docs/storefronts/hydrogen/products) and [Collections and search](https://shopify.dev/docs/storefronts/hydrogen/collections-search).
* **Predictive search:** A search store with server handlers and form helpers. Refer to [Add predictive search](https://shopify.dev/docs/storefronts/hydrogen/collections-search#step-7-add-predictive-search).
* **Money formatting:** [`formatMoney()`](https://shopify.dev/docs/api/hydrogen/latest/money) formats the amounts that Shopify returns for the customer's locale and currency.
* **Shop Pay:** Accelerated checkout buttons. Refer to [Shop Pay](https://shopify.dev/docs/storefronts/hydrogen/shop-pay).
* **Customer accounts:** A Customer Account API client and session handling. Refer to [Customer accounts](https://shopify.dev/docs/storefronts/hydrogen/customer-accounts).
* **Markets:** Localized queries and routing for Shopify Markets. Refer to [Markets](https://shopify.dev/docs/storefronts/hydrogen/markets).
* **Analytics:** First-party Shopify analytics with consent handling. Refer to [Analytics and consent](https://shopify.dev/docs/storefronts/hydrogen/analytics).
* **Agent skills:** Instructions for coding agents, installed with `npx @shopify/hydrogen@latest setup`.

## What your app owns

Hydrogen leaves some parts of the storefront to your app and your framework:

* **UI:** Components, layout, styling, and design system. Hydrogen doesn't ship a component library.
* **Routing and data loading:** Page routes, loaders, and rendering strategy. Hydrogen claims only a small set of Shopify routes before your router runs.
* **Session storage:** Where a signed-in customer's tokens are kept between requests, like a signed, HttpOnly cookie. You write a small session manager that reads and writes them, and Hydrogen handles sign-in and token refresh. Refer to [Create a session manager](https://shopify.dev/docs/storefronts/hydrogen/customer-accounts#create-a-session-manager).
* **Account pages:** Profile, order history, and address UI built from Customer Account API data.
* **Images:** Your framework's image component or an `<img>` element with `srcset`, using Shopify CDN URLs.
* **SEO:** Meta tags, Open Graph tags, and structured data, rendered with your framework's head or metadata API.

Hydrogen also doesn't include checkout UI, because checkout stays on Shopify, or an Admin API client. It covers the Storefront API and Customer Account API only.

## Frameworks and runtimes

Your framework determines where you can deploy a Hydrogen storefront. You can start from one of two templates:

* **React Router:** React Router 7 in framework mode, deployed to Oxygen.
* **Next.js:** [Vercel Shop](https://vercel.shop), Vercel's Next.js 16 template with the App Router, deployed to Vercel.

UI examples in these docs show vanilla JavaScript, React, and Vue versions. Server code that doesn't depend on the framework is shown once. Where that code plugs into your app depends on your framework. [Framework wiring](https://shopify.dev/docs/storefronts/hydrogen/request-handlers#framework-wiring) shows the code for React Router and Next.js, and lists where each piece goes in Nuxt, SvelteKit, Astro, and SolidStart.

React examples in these docs are client components. In Next.js, add `'use client'` to the top of each component file. React Router ignores the directive.

The Hydrogen repository also includes [development examples](https://github.com/Shopify/hydrogen/tree/main/examples) for Astro, Nuxt, SolidStart, and SvelteKit. These examples show how the primitives fit into each framework, but they aren't starter templates.

## Next steps

[Get started with Hydrogen\
\
](https://shopify.dev/docs/storefronts/hydrogen/getting-started)

[Choose whether to deploy a starter template or add Hydrogen to your own project.](https://shopify.dev/docs/storefronts/hydrogen/getting-started)

[About the Hydrogen cart\
\
](https://shopify.dev/docs/storefronts/hydrogen/cart)

[Learn how the cart store syncs with Shopify, updates optimistically, and works without JavaScript.](https://shopify.dev/docs/storefronts/hydrogen/cart)

[Deploy your storefront\
\
](https://shopify.dev/docs/storefronts/hydrogen/deploy)

[Learn what a Hydrogen storefront needs from its runtime, and choose where to host it.](https://shopify.dev/docs/storefronts/hydrogen/deploy)

[Migrate from legacy Hydrogen\
\
](https://shopify.dev/docs/storefronts/hydrogen/migrate)

[Move a storefront from legacy Hydrogen, versions 2026-04 and earlier, to the latest version of Hydrogen.](https://shopify.dev/docs/storefronts/hydrogen/migrate)

[Hydrogen API reference\
\
](https://shopify.dev/docs/api/hydrogen/latest)

[Explore the functions, stores, and components that Hydrogen exports.](https://shopify.dev/docs/api/hydrogen/latest)