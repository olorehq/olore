---
title: Use cart metafields
description: >-
  Read and write custom data on the cart in a Hydrogen storefront, and copy cart
  metafields to the order at checkout.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/cart/metafields'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/cart/metafields.md'
api_name: hydrogen
---

# Use cart metafields

Cart [metafields](https://shopify.dev/docs/apps/build/metafields) store custom data on the cart, like delivery instructions or a gift preference. This guide shows you how to read cart metafields into cart state, write them with a route that your app owns, and copy them to the order at checkout.

***

## How it works

Cart metafields are server-only. The [standard actions](https://shopify.dev/docs/api/storefront-events-and-actions) that Hydrogen's cart forms use don't support them, so metafield changes don't go through the optimistic cart store the way line, discount, note, and attribute changes do. Instead, you combine three pieces:

1. **Read:** A custom `CartFragment` on the cart server handlers adds metafields to cart state.
2. **Write:** A route that your app owns calls the `cartMetafieldsSet` or `cartMetafieldDelete` mutation, and returns only the mutation's `userErrors`.
3. **Refresh:** After a successful write, your component calls `refresh()` to read the cart again.

The write and the refresh are separate requests on purpose. If the route saved the metafield and then read the cart in the same request, a failed read would make a successful save look like a failure. With separate requests, a failed refresh shows up as a network error in `state.errors.network`, and the saved value stays saved.

To learn how cart state and scoped errors work, refer to [About the Hydrogen cart](https://shopify.dev/docs/storefronts/hydrogen/cart).

***

## Requirements

* Build your cart UI with Hydrogen's cart store. Refer to [Build cart UI](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart).
* Know the namespace and key of each cart metafield that you want to use. This guide uses `custom.delivery_instructions`.
* To copy metafields to orders, create an order [metafield definition](https://shopify.dev/docs/apps/build/metafields/definitions). Refer to [Step 4](#step-4-copy-metafields-to-orders).

***

## Step 1: Read metafields

Select the metafields you need in a fragment named `CartFragment`, and pass it to [`createCartServerHandlers()`](https://shopify.dev/docs/api/hydrogen/latest/cart/cart-server-handlers):

## Cart server handlers

lib/cart-handlers.ts

```ts
import {createCartServerHandlers, gql} from '@shopify/hydrogen';


const CART_FRAGMENT = gql(`
  fragment CartFragment on Cart {
    metafields(identifiers: [{namespace: "custom", key: "delivery_instructions"}]) {
      namespace
      key
      type
      value
    }
  }
`);


export const cartHandlers = createCartServerHandlers({fragment: CART_FRAGMENT});
```

Hydrogen adds the fields in your fragment to the default cart fields, and the React and Vue bindings pick up their types. Read a metafield with `useCart()`, or with `cartStore.getState()` in vanilla JavaScript. Return a primitive value from the selector, like a string, so the component re-renders only when the value changes:

## Read a metafield

## components/delivery-instructions.ts

##### Vanilla JavaScript

```ts
import {cartStore} from '../lib/cart';

type Metafield = {namespace: string; key: string; value: string} | null;

function readInstructions() {
  const metafields = cartStore.getState().data.metafields as Metafield[] | undefined;
  return (
    metafields?.find(
      (metafield) =>
        metafield?.namespace === 'custom' && metafield.key === 'delivery_instructions',
    )?.value ?? ''
  );
}
```

##### React

```tsx
const instructions = useCart(
  (state) =>
    state.data.metafields?.find(
      (metafield) =>
        metafield?.namespace === 'custom' && metafield.key === 'delivery_instructions',
    )?.value ?? '',
);
```

##### Vue

```ts
const instructions = useCart(
  (state) =>
    state.data.metafields?.find(
      (metafield) =>
        metafield?.namespace === 'custom' && metafield.key === 'delivery_instructions',
    )?.value ?? '',
);
```

In Vue, `useCart()` returns a ref, so read `instructions.value` in your script. The vanilla JavaScript store isn't typed to your fragment, so the example declares the metafield shape.

***

## Step 2: Create a metafields route

Create a `POST` route at `/api/cart/metafields` with [`createShopifyRouteHandler()`](https://shopify.dev/docs/api/hydrogen/latest/request-handling/handle-shopify-routes). Don't extend the `/api/cart` endpoint. Keep metafield writes in their own route.

The route follows these rules:

* **It reads the cart ID on the server.** `getCartId()` checks the request's `cartId` search parameter before its cart cookie. The route never accepts an `ownerId` from the request body.
* **It requires an existing cart.** If there's no cart ID, then the route returns a `missing_cart` error. Don't call `cartCreate` in this route. Two writes to an empty cart at the same time would each create a cart, and the one whose cookie is set last would orphan the other cart and drop its write. Ask customers to add a product first.
* **It deletes one key per request.** `cartMetafieldDelete` deletes a single metafield, so the route's delete contract takes a single key.
* **It returns only `userErrors`.** The route doesn't read and return the cart.
* **It reports Storefront API errors.** A `200` response can carry GraphQL `errors` instead of the mutation result. The route returns an error response then, so the component shows an error and keeps the customer's draft.
* **It validates the request body** before it calls the Storefront API.

## Cart metafields route

lib/cart-metafields.ts

```ts
import {createShopifyRouteHandler, getCartId, gql} from '@shopify/hydrogen';


const CART_METAFIELDS_SET_MUTATION = gql(`
  mutation CartMetafieldsSet($metafields: [CartMetafieldsSetInput!]!) {
    cartMetafieldsSet(metafields: $metafields) {
      userErrors {
        code
        field
        message
      }
    }
  }
`);


const CART_METAFIELD_DELETE_MUTATION = gql(`
  mutation CartMetafieldDelete($input: CartMetafieldDeleteInput!) {
    cartMetafieldDelete(input: $input) {
      userErrors {
        code
        field
        message
      }
    }
  }
`);


const ALLOWED_KEYS = new Set(['custom.delivery_instructions']);


const STOREFRONT_ERROR = {
  type: 'error',
  error: {code: 'storefront_error', message: "Couldn't update the cart."},
  status: 502,
} as const;


type MetafieldsRequest =
  | {intent: 'set'; metafields: {key: string; type: string; value: string}[]}
  | {intent: 'delete'; key: string};


function parseRequest(body: unknown): MetafieldsRequest | null {
  if (!body || typeof body !== 'object') return null;
  const input = body as Record<string, unknown>;


  if (input.intent === 'delete') {
    return typeof input.key === 'string' && ALLOWED_KEYS.has(input.key)
      ? {intent: 'delete', key: input.key}
      : null;
  }


  if (input.intent === 'set' && Array.isArray(input.metafields)) {
    const metafields = input.metafields.filter(
      (metafield) =>
        typeof metafield?.key === 'string' &&
        ALLOWED_KEYS.has(metafield.key) &&
        typeof metafield.type === 'string' &&
        typeof metafield.value === 'string',
    );
    return metafields.length === input.metafields.length && metafields.length > 0
      ? {intent: 'set', metafields}
      : null;
  }


  return null;
}


export const cartMetafieldsHandler = createShopifyRouteHandler(
  '/api/cart/metafields',
  'POST',
  async ({request, storefrontClient}) => {
    const body = parseRequest(await request.json().catch(() => null));
    if (!body) {
      return {
        type: 'error',
        error: {code: 'invalid_request', message: 'The request body is invalid.'},
      };
    }


    const cartId = getCartId(request);
    if (!cartId) {
      return {
        type: 'error',
        error: {code: 'missing_cart', message: 'No cart exists.'},
      };
    }


    if (body.intent === 'delete') {
      const result = await storefrontClient.graphql(CART_METAFIELD_DELETE_MUTATION, {
        variables: {input: {ownerId: cartId, key: body.key}},
      });
      const payload = result.data?.cartMetafieldDelete;
      if (result.errors || !payload) return STOREFRONT_ERROR;
      return {type: 'json', data: {userErrors: payload.userErrors}};
    }


    const result = await storefrontClient.graphql(CART_METAFIELDS_SET_MUTATION, {
      variables: {
        metafields: body.metafields.map((metafield) => ({...metafield, ownerId: cartId})),
      },
    });
    const payload = result.data?.cartMetafieldsSet;
    if (result.errors || !payload) return STOREFRONT_ERROR;
    return {type: 'json', data: {userErrors: payload.userErrors}};
  },
);
```

The handler returns one of these result types: `{type: 'json', data}` for a JSON response, `{type: 'error', error: {code, message}, status?}` for an error response, which defaults to status 400, or `{type: 'redirect', location}` for a redirect.

Both mutations take the metafield's namespace and key together as `key`, like `custom.delivery_instructions`.

Register the route with `handleShopifyRoutes()` in your request handler. The `handlers` array takes groups of handlers, so wrap the route in an object:

## Register the metafields route

lib/shopify.ts

```ts
import {cartHandlers} from './cart-handlers';
import {cartMetafieldsHandler} from './cart-metafields';


// Inside handleRequest():
const shopifyResponse = handleShopifyRoutes({
  request,
  requestContext,
  sessionManager,
  storefrontClient,
  routeTemplates,
  handlers: [cartHandlers, {cartMetafields: cartMetafieldsHandler}],
});
if (shopifyResponse) return shopifyResponse;
```

For the rest of the request handler, refer to [Request handlers](https://shopify.dev/docs/storefronts/hydrogen/request-handlers#step-2-run-shopify-routes-before-your-router).

***

## Step 3: Write from a component and refresh the cart

Create a function that sends the new value to the metafields route and returns the route's `userErrors`. A blank value deletes the metafield:

## Save delivery instructions

lib/delivery-instructions.ts

```ts
const KEY = 'custom.delivery_instructions';


export type UserError = {message: string};


export async function saveDeliveryInstructions(value: string): Promise<UserError[]> {
  try {
    const response = await fetch('/api/cart/metafields', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
        value
          ? {
              intent: 'set',
              metafields: [{key: KEY, type: 'multi_line_text_field', value}],
            }
          : {intent: 'delete', key: KEY},
      ),
    });
    const result: {userErrors: UserError[]; error?: {message: string}} = await response.json();
    return response.ok
      ? result.userErrors
      : [{message: result.error?.message ?? "Couldn't save your instructions."}];
  } catch {
    return [{message: "Couldn't save your instructions. Try again."}];
  }
}
```

In your component, call it when the customer submits the form. When it returns no `userErrors`, call `refresh()` to load the saved value into cart state. In React and Vue, `refresh()` comes from `useCartActions()`. In vanilla JavaScript, call `cartStore.refresh()`:

## Delivery instructions

## components/delivery-instructions.ts

##### Vanilla JavaScript

```ts
import {cartStore} from '../lib/cart';
import {saveDeliveryInstructions} from '../lib/delivery-instructions';

// readInstructions() is defined in step 1.

export function mountDeliveryInstructions(container: HTMLElement) {
  const id = `delivery-instructions-${crypto.randomUUID()}`;
  const form = document.createElement('form');
  const label = Object.assign(document.createElement('label'), {
    htmlFor: id,
    textContent: 'Delivery instructions',
  });
  const textarea = Object.assign(document.createElement('textarea'), {
    id,
    value: readInstructions(),
  });
  const button = Object.assign(document.createElement('button'), {
    type: 'submit',
    textContent: 'Save instructions',
  });
  const alert = Object.assign(document.createElement('ul'), {role: 'alert', hidden: true});
  form.append(label, textarea, button, alert);
  container.replaceChildren(form);

  let editing = false;
  textarea.addEventListener('input', () => {
    editing = true;
  });
  cartStore.subscribe(() => {
    if (!editing) textarea.value = readInstructions();
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    button.disabled = true;
    button.textContent = 'Saving…';

    const userErrors = await saveDeliveryInstructions(textarea.value.trim());

    button.disabled = false;
    button.textContent = 'Save instructions';
    alert.hidden = userErrors.length === 0;
    alert.replaceChildren(
      ...userErrors.map((error) =>
        Object.assign(document.createElement('li'), {textContent: error.message}),
      ),
    );
    if (userErrors.length > 0) return;

    editing = false;
    cartStore.refresh();
  });
}
```

##### React

```tsx
import {useId, useState} from 'react';

import {useCart, useCartActions} from '../lib/cart';
import {saveDeliveryInstructions, type UserError} from '../lib/delivery-instructions';

export function DeliveryInstructions() {
  const inputId = useId();
  const errorId = useId();
  const saved = useCart(
    (state) =>
      state.data.metafields?.find(
        (metafield) =>
          metafield?.namespace === 'custom' &&
          metafield.key === 'delivery_instructions',
      )?.value ?? '',
  );
  const {refresh} = useCartActions();
  const [draft, setDraft] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<UserError[]>([]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setErrors([]);

    const userErrors = await saveDeliveryInstructions((draft ?? saved).trim());
    setSaving(false);

    if (userErrors.length > 0) {
      setErrors(userErrors);
      return;
    }

    setDraft(null);
    refresh();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={inputId}>Delivery instructions</label>
      <textarea
        id={inputId}
        value={draft ?? saved}
        onChange={(event) => setDraft(event.target.value)}
        aria-describedby={errors.length > 0 ? errorId : undefined}
        aria-invalid={errors.length > 0 || undefined}
      />
      <button type="submit" disabled={saving}>
        {saving ? 'Saving…' : 'Save instructions'}
      </button>
      {errors.length > 0 ? (
        <ul id={errorId} role="alert">
          {errors.map((error) => (
            <li key={error.message}>{error.message}</li>
          ))}
        </ul>
      ) : null}
    </form>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {ref, useId} from 'vue';

import {useCart, useCartActions} from '../lib/cart';
import {saveDeliveryInstructions, type UserError} from '../lib/delivery-instructions';

const inputId = useId();
const errorId = useId();
const saved = useCart(
  (state) =>
    state.data.metafields?.find(
      (metafield) =>
        metafield?.namespace === 'custom' && metafield.key === 'delivery_instructions',
    )?.value ?? '',
);
const {refresh} = useCartActions();
const draft = ref<string | null>(null);
const saving = ref(false);
const errors = ref<UserError[]>([]);

async function handleSubmit() {
  saving.value = true;
  errors.value = [];

  const userErrors = await saveDeliveryInstructions((draft.value ?? saved.value).trim());
  saving.value = false;

  if (userErrors.length > 0) {
    errors.value = userErrors;
    return;
  }

  draft.value = null;
  refresh();
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label :for="inputId">Delivery instructions</label>
    <textarea
      :id="inputId"
      :value="draft ?? saved"
      :aria-describedby="errors.length > 0 ? errorId : undefined"
      :aria-invalid="errors.length > 0 || undefined"
      @input="draft = ($event.target as HTMLTextAreaElement).value"
    />
    <button type="submit" :disabled="saving">
      {{ saving ? 'Saving…' : 'Save instructions' }}
    </button>
    <ul v-if="errors.length > 0" :id="errorId" role="alert">
      <li v-for="error in errors" :key="error.message">{{ error.message }}</li>
    </ul>
  </form>
</template>
```

Call `refresh()` only after metafield writes. Hydrogen's cart forms already keep the store in sync through standard actions, so they don't need it.

If the refresh fails, then the save still succeeded. The failure appears in `state.errors.network`, and your cart error banner shows it. Don't report it as a failed save.

***

## Step 4: Copy metafields to orders

To copy a cart metafield to the order at checkout, the store needs an order metafield definition with the same namespace and key and the cart-to-order copyable capability. Refer to [Use metafield capabilities](https://shopify.dev/docs/apps/build/metafields/use-metafield-capabilities#cart-to-order-copyable).

Without the definition, writes to the cart still succeed, but Shopify doesn't copy the value to the order.

***

## Next steps

[Request handlers\
\
](https://shopify.dev/docs/storefronts/hydrogen/request-handlers)

[Learn how Hydrogen matches Shopify routes and your own route handlers.](https://shopify.dev/docs/storefronts/hydrogen/request-handlers)

[Metafields\
\
](https://shopify.dev/docs/apps/build/metafields)

[Learn how to define and manage metafields.](https://shopify.dev/docs/apps/build/metafields)

***
