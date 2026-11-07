---
title: Hydrogen
description: >
  Hydrogen is Shopify's toolkit for building headless storefronts in the
  JavaScript framework of your choice. It includes a typed Storefront API
  client, request handlers, and tools for cart, products, collections, search,
  customer accounts, analytics, and Shop Pay, with React and Vue bindings.
api_version: 2026-10
source_url:
  html: 'https://shopify.dev/docs/api/hydrogen/latest'
  md: 'https://shopify.dev/docs/api/hydrogen/latest.md'
api_name: hydrogen
---

# Hydrogen

Hydrogen is Shopify's toolkit for building headless storefronts in the JavaScript framework of your choice. It includes a typed Storefront API client, request handlers, and tools for cart, products, collections, search, customer accounts, analytics, and Shop Pay, with React and Vue bindings.

## Getting started

Hydrogen works in a server-rendered headless storefront built with the JavaScript framework of your choice. You need Storefront API access for the store you want to connect.

Create a project with your framework, then run the `setup` command in the project folder. If you run the command interactively in an empty folder instead, it offers to create a storefront from the Hydrogen template.

You can also use a template to deploy a full storefront using either React Router or Next.js. To learn more, refer to [Get started with Hydrogen](https://shopify.dev/docs/storefronts/hydrogen/getting-started).

## Add Hydrogen to a project

```terminal
npx create-react-router@latest my-store
cd my-store
npx @shopify/hydrogen@latest setup
```

[Tutorial - Deploy a template](https://shopify.dev/docs/storefronts/hydrogen/getting-started/deploy-a-template)

[Tutorial - Add Hydrogen to an existing project](https://shopify.dev/docs/storefronts/hydrogen/getting-started/add-to-existing-project)

***

## How Hydrogen works

Hydrogen runs on both sides of your storefront. On the server, the Storefront API client queries Shopify, and request handling serves Shopify's routes, like the cart endpoint, before your framework's router.

In the browser, stores hold the state that changes while a customer is on the page, like the cart. If you're building with React or Vue, bindings connect the stores to your components.

The two sides connect through the routes that [`handleShopifyRoutes`](https://shopify.dev/docs/api/hydrogen/latest/request-handling/handle-shopify-routes) serves.

Your code imports Hydrogen from the following entry points:

| Entry point | Runs in | Contains |
| - | - | - |
| `@shopify/hydrogen` | Server and browser | The Storefront API client, request handling, server handlers, core stores, and utilities. |
| `@shopify/hydrogen/react` | Browser and server rendering | The React bindings. |
| `@shopify/hydrogen/vue` | Browser and server rendering | The Vue bindings. |
| `@shopify/hydrogen/customer-account` | Server | Customer account login, sessions, errors, and the Customer Account API client. |
| `@shopify/hydrogen/vite` | Vite | The local HTTPS plugin. |

***

## Query the Storefront API

Create a Storefront API client for each request on the server, then query the client with `gql` documents. The client sends the customer's cookies from the request context. A client with `type: 'private'` also sends the customer's IP address. The client fills any declared `$country` and `$language` variables from the locale in the request context. Each query returns data typed against the Storefront API schema.

Every request runs through Hydrogen's [request handling](#handle-requests) before it reaches your router.

[Reference - Explore the Storefront API client](https://shopify.dev/docs/api/hydrogen/2026-10/storefront-client/create-storefront-client)

## Query the Storefront API

```ts
import {
  createShopifyRequestContext,
  createStorefrontClient,
  gql,
} from '@shopify/hydrogen';


const {PUBLIC_STORE_DOMAIN, PRIVATE_STOREFRONT_API_TOKEN} = process.env;
// Oxygen sets this header. Other hosts use their own trusted header.
const buyerIp = request.headers.get('oxygen-buyer-ip');


if (!PUBLIC_STORE_DOMAIN || !PRIVATE_STOREFRONT_API_TOKEN || !buyerIp) {
  throw new Error('Missing the store domain, private token, or buyer IP');
}


const requestContext = createShopifyRequestContext({
  request,
  i18n: {language: 'EN', country: 'US'},
  buyerIp,
});


const storefront = createStorefrontClient({
  type: 'private',
  requestContext,
  config: {
    storeDomain: PUBLIC_STORE_DOMAIN,
    privateStorefrontToken: PRIVATE_STOREFRONT_API_TOKEN,
  },
});


const {data} = await storefront.graphql(
  gql(`
    query Home {
      products(first: 3) {
        nodes { handle title }
      }
    }
  `),
);
```

***

## Query the Customer Account API

The [Customer Account API](https://shopify.dev/docs/api/customer) serves the signed-in customer's orders, profile, and addresses. Customers sign in with Shopify customer accounts, and each Customer Account API request sends the customer's access token.

Create one session with [`createCustomerSession`](https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/create-customer-session) at module scope, and pass the session to [`createCustomerAccountServerHandlers`](https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/customer-account-server-handlers). The handlers serve the login, authorize, refresh, and logout routes under `/account`, and keep the cart's buyer identity matched to the signed-in customer.

In an account page, read the access token with `getAccessToken`, and query with a [Customer Account API client](https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/create-customer-account-client). When the session has no access token, send the customer to the login route.

[Reference - Explore customer accounts](https://shopify.dev/docs/api/hydrogen/2026-10/customer-accounts/create-customer-session)

## Query the Customer Account API

```ts
import {
  createCartServerHandlers,
  type ShopifyRequestContext,
} from '@shopify/hydrogen';
import {
  createCustomerAccountClient,
  createCustomerAccountServerHandlers,
  createCustomerSession,
  gql,
  type ReadonlyCustomerSessionManager,
} from '@shopify/hydrogen/customer-account';


const {SHOP_ID, PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID} = process.env;


if (!SHOP_ID || !PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID) {
  throw new Error('Missing the shop ID or Customer Account API client ID');
}


export const customerSession = createCustomerSession({
  shopId: SHOP_ID,
  customerAccountApiClientId: PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID,
});


// Add customerAccountHandlers next to cartHandlers in handleShopifyRoutes
export const cartHandlers = createCartServerHandlers({customerSession});
export const customerAccountHandlers = createCustomerAccountServerHandlers({
  customerSession,
  cartServerHandlers: cartHandlers,
});


export async function loadAccount(
  sessionManager: ReadonlyCustomerSessionManager,
  requestContext: ShopifyRequestContext,
) {
  const accessToken = await customerSession.getAccessToken(
    sessionManager,
    requestContext,
  );


  if (!accessToken) {
    return {redirect: '/account/login?return_to=/account'};
  }


  const customerAccount = createCustomerAccountClient({
    shopId: SHOP_ID,
    requestContext,
  });


  return customerAccount.graphql(
    gql(`
      query Account {
        customer {
          firstName
          orders(first: 3) {
            nodes { id }
          }
        }
      }
    `),
    {accessToken},
  );
}
```

***

## Handle requests

Hydrogen's request handling runs around your framework's router. Before your router, [`handleShopifyRoutes`](https://shopify.dev/docs/api/hydrogen/latest/request-handling/handle-shopify-routes) serves the routes that every Shopify storefront needs, like checkout and your cart handlers. After your router, [`handleShopifyRedirects`](https://shopify.dev/docs/api/hydrogen/latest/request-handling/handle-shopify-redirects) checks the store's URL redirects for any page that returns a 404.

[Reference - Explore request handling](https://shopify.dev/docs/api/hydrogen/2026-10/request-handling/create-shopify-request-context)

## Handle a request

```ts
import {
  createShopifyRequestContext,
  createStorefrontClient,
  handleShopifyRedirects,
  handleShopifyRoutes,
} from '@shopify/hydrogen';
import {appRouter} from './app-router';
import {cartHandlers} from './cart-handlers';
import {routeTemplates} from './route-templates';
import {createSessionManager} from './session';


export async function handleRequest(
  request: Request,
  env: {PUBLIC_STORE_DOMAIN: string},
) {
  const requestContext = createShopifyRequestContext({
    request,
    i18n: {language: 'EN', country: 'US'},
  });
  const storefront = createStorefrontClient({
    type: 'public',
    requestContext,
    config: {storeDomain: env.PUBLIC_STORE_DOMAIN},
  });
  const sessionManager = await createSessionManager(request);


  // Shopify routes, like /api/cart and checkout, run before your router
  const shopifyRoute = handleShopifyRoutes({
    request,
    requestContext,
    storefrontClient: storefront,
    sessionManager,
    routeTemplates,
    handlers: [cartHandlers],
  });
  if (shopifyRoute) return shopifyRoute;


  // Your router renders pages, and its loaders query the Storefront API
  const routedResponse = await appRouter(request, {storefront});


  // Store URL redirects run only when your router doesn't match
  if (routedResponse.status === 404) {
    const redirect = await handleShopifyRedirects({
      request,
      storefrontClient: storefront,
      routeTemplates,
    });
    if (redirect) return redirect;
  }


  const response = new Response(routedResponse.body, routedResponse);
  requestContext.applyResponseHeaders(response.headers);
  return response;
}
```

***

## Serve the cart endpoint

`createCartServerHandlers()` returns the handlers for the `/api/cart` route. They read the cart ID from a cookie, run the matching cart query or mutation, and return JSON to the cart store. When a form is submitted without JavaScript, they redirect back to the page that sent it.

To register the handlers, pass them to `handleShopifyRoutes` in the `handlers` array as shown in the `server.ts` example.

The handlers carry your cart query's types to the browser.

[Reference - Explore the cart server handlers](https://shopify.dev/docs/api/hydrogen/2026-10/cart/cart-server-handlers)

## Serve the cart endpoint

##### cart-handlers.ts

```ts
import {createCartServerHandlers} from '@shopify/hydrogen';

export const cartHandlers = createCartServerHandlers();
```

##### server.ts

```ts
import {handleShopifyRoutes} from '@shopify/hydrogen';
import {cartHandlers} from './cart-handlers';

// In your request handler, before your router
const shopifyRoute = handleShopifyRoutes({
  request,
  requestContext,
  storefrontClient: storefront,
  sessionManager,
  handlers: [cartHandlers],
});
if (shopifyRoute) return shopifyRoute;
```

***

## Change the cart with cart forms

You change the cart by submitting a form. Each form has an intent, like `add`, `remove`, or `set`, and the fields that the intent needs, like a variant ID or a cart line ID.

The cart store handles the submission, updates the cart state right away, and sends the change to your cart endpoint through Standard Actions. The [`ShopifyScripts`](https://shopify.dev/docs/api/hydrogen/latest/analytics/shopify-scripts) component loads Standard Actions.

[Reference - Explore cart forms](https://shopify.dev/docs/api/hydrogen/2026-10/cart/cart-forms)

## Add a variant to the cart

##### JavaScript

```js
// <form id="add-to-cart" method="post" action="/api/cart">
//   <input type="hidden" name="merchandiseId" value="gid://shopify/ProductVariant/1">
//   <button type="submit" name="intent" value="add">Add to cart</button>
// </form>
const form = document.querySelector('#add-to-cart');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  cart.handleFormSubmit(event);
});
```

##### React

```tsx
import {useCartForm} from './cart';

export function AddToCart({variantId}: {variantId: string}) {
  const {formProps, register} = useCartForm();

  return (
    <form {...formProps()}>
      <input type="hidden" {...register('merchandiseId', {value: variantId})} />
      <button type="submit" {...register('add')}>
        Add to cart
      </button>
    </form>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {useCartForm} from './cart';

defineProps<{variantId: string}>();

const {formProps, register} = useCartForm();
</script>

<template>
  <form v-bind="formProps()">
    <input type="hidden" v-bind="register('merchandiseId', {value: variantId})" />
    <button type="submit" v-bind="register('add')">Add to cart</button>
  </form>
</template>
```

***

## Use UI bindings

If you're building with React or Vue, you can use bindings to wrap the core stores in providers, components, and framework-native state.

For React, you pass a hook a selector function like `(state) => state.data.totalQuantity`, and the component re-renders only when that value changes.

For Vue, you pass a composable a selector function, and it returns a ref (Vue's reactive value) that updates only when the selected value changes.

Frameworks without bindings use the core stores directly. In the browser, load Shopify's storefront scripts, then call `connect()` so the store listens for Standard Actions cart events. Any script on the page can change the cart through these events.

## Show the cart count

##### JavaScript

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

##### React

```tsx
// cart.ts
import {createCartComponents} from '@shopify/hydrogen/react';
import type {cartHandlers} from './cart-handlers';

export const {CartProvider, useCart, useCartForm} =
  createCartComponents<typeof cartHandlers>();

// App.tsx
import type {CartDataFromHandlers} from '@shopify/hydrogen';
import {CartProvider, useCart} from './cart';
import type {cartHandlers} from './cart-handlers';

function CartCount() {
  const totalQuantity = useCart((state) => state.data.totalQuantity);
  return <span>{totalQuantity}</span>;
}

export function App({
  initialCart,
}: {
  initialCart: CartDataFromHandlers<typeof cartHandlers> | null;
}) {
  return (
    <CartProvider initialData={{cart: initialCart}}>
      <CartCount />
    </CartProvider>
  );
}
```

##### Vue

```html
<!-- CartCount.vue -->
<script setup lang="ts">
// cart.ts calls createCartComponents from @shopify/hydrogen/vue
import {useCart} from './cart';

const totalQuantity = useCart((state) => state.data.totalQuantity);
</script>

<template>
  <span>{{ totalQuantity }}</span>
</template>

<!-- App.vue -->
<script setup lang="ts">
import type {CartDataFromHandlers} from '@shopify/hydrogen';
import {CartProvider} from './cart';
import type {cartHandlers} from './cart-handlers';
import CartCount from './CartCount.vue';

defineProps<{initialCart: CartDataFromHandlers<typeof cartHandlers> | null}>();
</script>

<template>
  <CartProvider :initial-data="{cart: initialCart}">
    <CartCount />
  </CartProvider>
</template>
```

***

## Versioning

Hydrogen `2026-10` uses version `2026-10` of the [Storefront API](https://shopify.dev/docs/api/storefront) and the [Customer Account API](https://shopify.dev/docs/api/customer).

[Reference - Shopify API versioning](https://shopify.dev/docs/api/usage/versioning)

***

## Resources

[Hydrogen on GitHub\
\
](https://github.com/Shopify/hydrogen/tree/main)

[Follow the Hydrogen project, file bugs and feature requests, and browse the framework examples.](https://github.com/Shopify/hydrogen/tree/main)

[Hydrogen skills\
\
](https://github.com/Shopify/hydrogen/tree/main/packages/hydrogen/skills)

[Browse the agent skills that guide coding agents through each part of a storefront.](https://github.com/Shopify/hydrogen/tree/main/packages/hydrogen/skills)

***
