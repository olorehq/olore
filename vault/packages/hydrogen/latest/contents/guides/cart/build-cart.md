---
title: Build cart UI
description: >-
  Add a cart to your Hydrogen storefront with line item forms, discount codes,
  an order note, cart attributes, totals, and scoped errors.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart.md'
api_name: hydrogen
---

# Build cart UI

This guide shows you how to build cart UI with Hydrogen's cart store. You'll register the cart server handlers, provide the cart to your app, and build the forms that change the cart. The same components render on the full `/cart` page and in a [cart drawer](https://shopify.dev/docs/storefronts/hydrogen/cart/cart-drawer). Each example shows the core store in vanilla JavaScript, the React bindings, and the Vue bindings.

To learn how the cart store, optimistic updates, pending state, and scoped errors work, refer to [About the Hydrogen cart](https://shopify.dev/docs/storefronts/hydrogen/cart).

***

## Requirements

* Create a [Storefront API client](https://shopify.dev/docs/storefronts/hydrogen/data-fetching) for each request.
* Wire [`handleShopifyRoutes`](https://shopify.dev/docs/storefronts/hydrogen/request-handlers) into your server before your framework's router runs.
* Create a `/cart` page route in your app.
* Render [`ShopifyScripts`](https://shopify.dev/docs/storefronts/hydrogen/analytics) once in your root document to enable cart standard actions.

***

## Step 1: Register the cart handlers

The cart server handlers serve the `/api/cart` endpoint that cart forms submit to. Create them in a server-only module:

## Cart server handlers

lib/cart-handlers.ts

```ts
import {createCartServerHandlers} from '@shopify/hydrogen';


export const cartHandlers = createCartServerHandlers();
```

Add `cartHandlers` to the `handlers` array that you pass to `handleShopifyRoutes()` in your [request handler](https://shopify.dev/docs/storefronts/hydrogen/request-handlers#step-2-run-shopify-routes-before-your-router):

## Register the cart handlers

lib/shopify.ts

```ts
import {cartHandlers} from './cart-handlers';


// Inside handleRequest(), after you create the storefront client:
const shopifyResponse = handleShopifyRoutes({
  request,
  requestContext,
  sessionManager,
  storefrontClient,
  routeTemplates,
  handlers: [cartHandlers],
});
if (shopifyResponse) return shopifyResponse;
```

Then create the client-side cart bindings. In React and Vue, derive typed bindings from the handlers, and import the handlers as a type only, so server code stays out of your client bundle. In vanilla JavaScript, create the cart store and a form register directly:

## Cart bindings

## lib/cart.ts

##### Vanilla JavaScript

```ts
import {
  configureCartEndpoint,
  createCartFormRegister,
  createCartStore,
} from '@shopify/hydrogen';

configureCartEndpoint('/api/cart');

// The server renders this element in step 2.
const cartData = document.getElementById('cart-data')?.textContent;

export const cartStore = createCartStore({
  initialData: cartData ? JSON.parse(cartData) : undefined,
});
export const register = createCartFormRegister();

cartStore.connect();

// Creates a cart form that submits through the store.
export function createCartForm() {
  const form = document.createElement('form');
  form.method = 'post';
  form.action = '/api/cart';
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    cartStore.handleFormSubmit(event).catch(() => {});
  });
  return form;
}

// Creates an element with the attributes that register() returns.
export function createField<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attributes: Record<string, unknown>,
) {
  const element = document.createElement(tag);
  for (const [name, value] of Object.entries(attributes)) {
    if (name in element) Reflect.set(element, name, value);
    else element.setAttribute(name, String(value));
  }
  return element;
}
```

##### React

```ts
import {createCartComponents} from '@shopify/hydrogen/react';

import type {cartHandlers} from './cart-handlers';

export const {CartProvider, useCart, useSuspenseCart, useCartActions, useCartForm} =
  createCartComponents<typeof cartHandlers>();
```

##### Vue

```ts
import {createCartComponents} from '@shopify/hydrogen/vue';

import type {cartHandlers} from './cart-handlers';

export const {CartProvider, useCart, useCartActions, useCartForm} =
  createCartComponents<typeof cartHandlers>();
```

To add fields to the cart, pass a `fragment` named `CartFragment` to [`createCartServerHandlers()`](https://shopify.dev/docs/api/hydrogen/latest/cart/cart-server-handlers). The React and Vue bindings pick up the extra fields automatically. For an example, refer to [Use cart metafields](https://shopify.dev/docs/storefronts/hydrogen/cart/metafields).

***

## Step 2: Provide the cart

Read the cart on the server and pass it to the cart store as initial data, so the `/cart` page renders from server data. Pass the complete envelope that the handlers return, `{cart, errors?}`. Don't unwrap it to `data.cart`.

## Load the cart

lib/cart-data.ts

```ts
import type {StorefrontClient} from '@shopify/hydrogen';


import {cartHandlers} from './cart-handlers';


export async function loadCartData(storefrontClient: StorefrontClient, request?: Request) {
  const {data} = await cartHandlers.get({storefrontClient, request});
  return data;
}


export type CartData = Awaited<ReturnType<typeof loadCartData>>;
```

Call `loadCartData()` from the server code that renders your root layout, and pass it the Storefront API client that your [request handler](https://shopify.dev/docs/storefronts/hydrogen/request-handlers) created. If your framework can stream promises, then pass the promise without awaiting it, so the page shell doesn't wait for the cart. To find where this code goes in your framework, refer to [Framework wiring](https://shopify.dev/docs/storefronts/hydrogen/request-handlers#framework-wiring).

In Next.js with `cacheComponents: true`, call `loadCartData()` from an async Server Component inside `<Suspense>`, after `connection()`. The static shell prerenders, and the cart streams in.

Then hand the data to the cart store in your root layout:

## Provide the cart

## server/layout.ts

##### Vanilla JavaScript

```ts
import type {CartData} from '../lib/cart-data';

// Render this element into the page so lib/cart.ts can read it.
export function renderCartData(cartData: CartData) {
  const json = JSON.stringify(cartData).replace(/</g, '\\u003c');
  return `<script type="application/json" id="cart-data">${json}</script>`;
}
```

##### React

```tsx
import type {ReactNode} from 'react';

import {CartProvider} from '../lib/cart';
import type {CartData} from '../lib/cart-data';

export function Providers({
  cartData,
  children,
}: {
  cartData: CartData | Promise<CartData>;
  children: ReactNode;
}) {
  return <CartProvider initialData={cartData}>{children}</CartProvider>;
}
```

##### Vue

```html
<script setup lang="ts">
import {CartProvider} from '../lib/cart';
import type {CartData} from '../lib/cart-data';

defineProps<{cartData?: CartData}>();
</script>

<template>
  <CartProvider :initial-data="cartData">
    <slot />
  </CartProvider>
</template>
```

Render `Providers` from your server shell. If you don't pass initial data, then the store loads the cart from `/api/cart` when it connects in the browser.

Create the store once, at the root. Don't mount a second [`CartProvider`](https://shopify.dev/docs/api/hydrogen/latest/cart/create-cart-components), or create a second store, on the `/cart` page. A second store keeps its own state, and the page and the drawer stop reflecting each other's changes.

Read full-cart data in a component that shows a loading state until the cart is ready. In React, when `initialData` is a promise, use `useSuspenseCart()` inside a local `<Suspense>` boundary, and keep using `useCart()` for non-blocking UI, like the cart count in your header. Vue doesn't have a suspense composable, so check `state.loading` instead. In vanilla JavaScript, render from `cartStore.getState()`, and render again from `cartStore.subscribe()`:

## Cart page content

## components/cart-content.ts

##### Vanilla JavaScript

```ts
import type {CartState} from '@shopify/hydrogen';

import {cartStore} from '../lib/cart';

import {createCartLineItem} from './cart-line-item';

export function mountCartContent(container: HTMLElement) {
  const render = (state: CartState) => {
    if (state.loading) {
      container.replaceChildren(
        Object.assign(document.createElement('p'), {role: 'status', textContent: 'Loading cart…'}),
      );
      return;
    }

    const lines = state.data.lines.nodes;
    if (lines.length === 0) {
      container.replaceChildren(
        Object.assign(document.createElement('p'), {textContent: 'Your cart is empty.'}),
      );
      return;
    }

    const list = document.createElement('ul');
    for (const line of lines) {
      const item = document.createElement('li');
      item.append(createCartLineItem(line, state));
      list.append(item);
    }
    container.replaceChildren(list);
  };

  render(cartStore.getState());
  return cartStore.subscribe(render);
}
```

##### React

```tsx
import {Suspense} from 'react';

import {useSuspenseCart} from '../lib/cart';

import {CartLineItem} from './CartLineItem';

export function CartContent() {
  return (
    <Suspense fallback={<p role="status">Loading cart…</p>}>
      <CartContentBody />
    </Suspense>
  );
}

function CartContentBody() {
  const lines = useSuspenseCart((state) => state.data.lines.nodes);

  if (lines.length === 0) return <p>Your cart is empty.</p>;

  return (
    <ul>
      {lines.map((line) => (
        <li key={line.id}>
          <CartLineItem line={line} />
        </li>
      ))}
    </ul>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {useCart} from '../lib/cart';

import CartLineItem from './CartLineItem.vue';

const loading = useCart((state) => state.loading);
const lines = useCart((state) => state.data.lines.nodes);
</script>

<template>
  <p v-if="loading" role="status">Loading cart…</p>
  <p v-else-if="lines.length === 0">Your cart is empty.</p>
  <ul v-else>
    <li v-for="line in lines" :key="line.id">
      <CartLineItem :line="line" />
    </li>
  </ul>
</template>
```

You'll build the line item in the next step. To stay short, the vanilla JavaScript examples rebuild their elements when the cart changes. In production, update only the elements whose state changed, so focus and in-progress input survive each update.

***

## Step 3: Render line items

Give each line item its own form. Every line item form needs three things, whatever your markup looks like:

* A hidden submit button from `register('set')`, so pressing Enter in the quantity input submits the new quantity.
* A hidden `lineId` input from `register('lineId', {value: line.id})`, so the form targets one line.
* A real, editable quantity input from `register('quantity', {value: line.quantity, interactive: true})`.

Increase, decrease, and remove buttons are extra submit controls. They don't replace the `set` button or the quantity input.

The React bindings submit the form when the quantity input changes. In vanilla JavaScript and Vue, call [`attachQuantityInput()`](https://shopify.dev/docs/api/hydrogen/latest/cart/cart-forms) to add the same behavior:

## Line item form

## components/cart-line-item.ts

##### Vanilla JavaScript

```ts
import {attachQuantityInput, formatMoney, type CartLine, type CartState} from '@shopify/hydrogen';

import {createCartForm, createField, register} from '../lib/cart';

export function createCartLineItem(line: CartLine, state: CartState) {
  const isPending = state.pending.lines.has(line.id);
  const errorMessages =
    state.errors.lines.get(line.id)?.userErrors.map((error) => error.message) ?? [];
  const title = line.merchandise?.product?.title ?? 'Product';
  const errorId = `line-error-${line.id}`;

  const item = document.createElement('div');
  if (isPending) item.setAttribute('aria-busy', 'true');

  const link = Object.assign(document.createElement('a'), {
    href: `/products/${line.merchandise?.product?.handle}`,
    textContent: title,
  });
  const price = Object.assign(document.createElement('p'), {
    className: isPending ? 'pending' : '',
    textContent: formatMoney(line.cost.totalAmount, {locale: 'en-US'}).toString(),
  });

  const form = createCartForm();
  const quantity = createField('input', {
    ...register('quantity', {value: line.quantity, interactive: true}),
    className: isPending ? 'pending' : '',
    'aria-label': `Quantity: ${title}`,
    ...(errorMessages.length > 0 && {'aria-invalid': 'true', 'aria-describedby': errorId}),
  });
  form.append(
    createField('button', {...register('set')}),
    createField('input', {type: 'hidden', ...register('lineId', {value: line.id})}),
    createField('button', {
      ...register('decrease'),
      type: 'submit',
      disabled: line.quantity <= 1,
      textContent: '−',
      'aria-label': `Decrease quantity: ${title}`,
    }),
    quantity,
    createField('button', {
      ...register('increase'),
      type: 'submit',
      textContent: '+',
      'aria-label': `Increase quantity: ${title}`,
    }),
    createField('button', {...register('remove'), type: 'submit', textContent: 'Remove'}),
  );
  attachQuantityInput(quantity, form);

  item.append(link, price, form);
  if (errorMessages.length > 0) {
    item.append(
      createField('p', {id: errorId, role: 'alert', textContent: errorMessages.join(' ')}),
    );
  }
  return item;
}
```

##### React

```tsx
import {formatMoney} from '@shopify/hydrogen';

import {useCart, useCartForm} from '../lib/cart';

type CartState = Parameters<Parameters<typeof useCart>[0]>[0];
type CartLine = CartState['data']['lines']['nodes'][number];

export function CartLineItem({line}: {line: CartLine}) {
  const {formProps, register} = useCartForm();
  const isPending = useCart((state) => state.pending.lines.has(line.id));
  const lineErrors = useCart((state) => state.errors.lines.get(line.id));

  const title = line.merchandise?.product?.title ?? 'Product';
  const errorId = `line-error-${line.id}`;
  const errorMessages = lineErrors?.userErrors.map((error) => error.message) ?? [];

  return (
    <div aria-busy={isPending || undefined}>
      <a href={`/products/${line.merchandise?.product?.handle}`}>{title}</a>
      <p className={isPending ? 'pending' : undefined}>
        {formatMoney(line.cost.totalAmount, {locale: 'en-US'}).toString()}
      </p>

      <form {...formProps()}>
        <button {...register('set')} />
        <input type="hidden" {...register('lineId', {value: line.id})} />
        <button
          type="submit"
          {...register('decrease')}
          disabled={line.quantity <= 1}
          aria-label={`Decrease quantity: ${title}`}
        >
          −
        </button>
        <input
          {...register('quantity', {value: line.quantity, interactive: true})}
          className={isPending ? 'pending' : undefined}
          aria-label={`Quantity: ${title}`}
          aria-invalid={errorMessages.length > 0 || undefined}
          aria-describedby={errorMessages.length > 0 ? errorId : undefined}
        />
        <button
          type="submit"
          {...register('increase')}
          aria-label={`Increase quantity: ${title}`}
        >
          +
        </button>
        <button type="submit" {...register('remove')}>
          Remove
        </button>
      </form>

      {errorMessages.length > 0 ? (
        <p id={errorId} role="alert">
          {errorMessages.join(' ')}
        </p>
      ) : null}
    </div>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {attachQuantityInput, formatMoney, type CartLine} from '@shopify/hydrogen';
import {computed, onMounted, onUnmounted, ref} from 'vue';

import {useCart, useCartForm} from '../lib/cart';

const props = defineProps<{line: CartLine}>();
const {formProps, register} = useCartForm();
const isPending = useCart((state) => state.pending.lines.has(props.line.id));
const lineErrors = useCart((state) => state.errors.lines.get(props.line.id));

const title = computed(() => props.line.merchandise?.product?.title ?? 'Product');
const errorId = `line-error-${props.line.id}`;
const errorMessages = computed(
  () => lineErrors.value?.userErrors.map((error) => error.message) ?? [],
);

const form = ref<HTMLFormElement | null>(null);
const quantity = ref<HTMLInputElement | null>(null);
let detach: (() => void) | undefined;

onMounted(() => {
  if (form.value && quantity.value) detach = attachQuantityInput(quantity.value, form.value);
});
onUnmounted(() => detach?.());
</script>

<template>
  <div :aria-busy="isPending || undefined">
    <a :href="`/products/${line.merchandise?.product?.handle}`">{{ title }}</a>
    <p :class="{pending: isPending}">
      {{ formatMoney(line.cost.totalAmount, {locale: 'en-US'}).toString() }}
    </p>

    <form ref="form" v-bind="formProps()">
      <button v-bind="register('set')" />
      <input type="hidden" v-bind="register('lineId', {value: line.id})" />
      <button
        type="submit"
        v-bind="register('decrease')"
        :disabled="line.quantity <= 1"
        :aria-label="`Decrease quantity: ${title}`"
      >
        −
      </button>
      <input
        ref="quantity"
        v-bind="register('quantity', {value: line.quantity, interactive: true})"
        :class="{pending: isPending}"
        :aria-label="`Quantity: ${title}`"
        :aria-invalid="errorMessages.length > 0 || undefined"
        :aria-describedby="errorMessages.length > 0 ? errorId : undefined"
      />
      <button
        type="submit"
        v-bind="register('increase')"
        :aria-label="`Increase quantity: ${title}`"
      >
        +
      </button>
      <button type="submit" v-bind="register('remove')">Remove</button>
    </form>

    <p v-if="errorMessages.length > 0" :id="errorId" role="alert">
      {{ errorMessages.join(' ') }}
    </p>
  </div>
</template>
```

Render the line cost that Shopify returns, and format it with Hydrogen's `formatMoney()`. Pass the locale of the customer's [market](https://shopify.dev/docs/storefronts/hydrogen/markets) instead of `en-US`. Don't calculate money in the browser. Discounts, taxes, rounding, and [selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans) all affect the result, so multiplying a quantity by a unit price gives the wrong total.

Add a `pending` class that reduces opacity, so customers can tell which values aren't confirmed yet:

## Pending style

app.css

```css
.pending {
  opacity: 0.3;
}
```

Cart line merchandise fields are optional in the types, because optimistic lines and custom fragments can differ from a complete Storefront API response. Use optional chaining when you read `line.merchandise`.

If lines carry [line item attributes](https://shopify.dev/docs/api/storefront/latest/interfaces/BaseCartLine#fields-attributes), such as an engraving, then render them below the product title. Skip attributes whose key starts with an underscore (`_`), because apps and Shopify use those for internal data.

***

## Step 4: Add discount codes

Use one form to apply a code, and a separate form for each applied code's remove button. The apply form uses `register('discountCode', {defaultValue: ''})` for its input. Each remove form uses `register('discountCode', {value: code})` as a hidden input:

## Discount codes

## components/cart-discounts.ts

##### Vanilla JavaScript

```ts
import type {CartState} from '@shopify/hydrogen';

import {cartStore, createCartForm, createField, register} from '../lib/cart';

export function mountCartDiscounts(container: HTMLElement) {
  const applyForm = createCartForm();
  const label = Object.assign(document.createElement('label'), {textContent: 'Discount code'});
  label.append(
    createField('input', {
      type: 'text',
      ...register('discountCode', {defaultValue: ''}),
      autocomplete: 'off',
      required: true,
    }),
  );
  applyForm.append(
    label,
    createField('button', {...register('discount-apply'), type: 'submit', textContent: 'Apply'}),
  );

  const applied = document.createElement('div');
  container.replaceChildren(applyForm, applied);

  const render = ({data, pending, errors}: CartState) => {
    applied.replaceChildren(
      ...data.discountCodes
        .filter((discount) => discount.code)
        .map((discount) => {
          const form = createCartForm();
          const messages =
            errors.discountCodes.get(discount.code)?.userErrors.map((error) => error.message) ?? [];

          form.append(
            createField('input', {type: 'hidden', ...register('discountCode', {value: discount.code})}),
            createField('span', {
              className: pending.discountCodes.has(discount.code) ? 'pending' : '',
              textContent: discount.applicable ? discount.code : `${discount.code} (not applicable)`,
            }),
            createField('button', {
              ...register('discount-remove'),
              type: 'submit',
              textContent: 'Remove',
              'aria-label': `Remove discount ${discount.code}`,
            }),
          );
          if (messages.length > 0) {
            form.append(createField('p', {role: 'alert', textContent: messages.join(' ')}));
          }
          return form;
        }),
    );
  };

  render(cartStore.getState());
  return cartStore.subscribe(render);
}
```

##### React

```tsx
import {useCart, useCartForm} from '../lib/cart';

export function CartDiscounts() {
  const {formProps, register} = useCartForm();
  const discountCodes = useCart((state) => state.data.discountCodes);
  const pendingCodes = useCart((state) => state.pending.discountCodes);
  const discountErrors = useCart((state) => state.errors.discountCodes);

  return (
    <div>
      <form {...formProps()}>
        <label>
          Discount code
          <input
            type="text"
            {...register('discountCode', {defaultValue: ''})}
            autoComplete="off"
            required
          />
        </label>
        <button type="submit" {...register('discount-apply')}>
          Apply
        </button>
      </form>

      {discountCodes
        .filter((discount) => discount.code)
        .map((discount) => {
          const errors = discountErrors.get(discount.code)?.userErrors ?? [];

          return (
            <form {...formProps()} key={discount.code}>
              <input
                type="hidden"
                {...register('discountCode', {value: discount.code})}
              />
              <span className={pendingCodes.has(discount.code) ? 'pending' : undefined}>
                {discount.code}
                {discount.applicable ? null : ' (not applicable)'}
              </span>
              <button
                type="submit"
                {...register('discount-remove')}
                aria-label={`Remove discount ${discount.code}`}
              >
                Remove
              </button>
              {errors.length > 0 ? (
                <p role="alert">{errors.map((error) => error.message).join(' ')}</p>
              ) : null}
            </form>
          );
        })}
    </div>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {computed} from 'vue';

import {useCart, useCartForm} from '../lib/cart';

const {formProps, register} = useCartForm();
const discountCodes = useCart((state) => state.data.discountCodes);
const pendingCodes = useCart((state) => state.pending.discountCodes);
const discountErrors = useCart((state) => state.errors.discountCodes);

const appliedCodes = computed(() => discountCodes.value.filter((discount) => discount.code));

function errorMessages(code: string) {
  return discountErrors.value.get(code)?.userErrors.map((error) => error.message) ?? [];
}
</script>

<template>
  <div>
    <form v-bind="formProps()">
      <label>
        Discount code
        <input
          type="text"
          v-bind="register('discountCode', {defaultValue: ''})"
          autocomplete="off"
          required
        />
      </label>
      <button type="submit" v-bind="register('discount-apply')">Apply</button>
    </form>

    <form v-for="discount in appliedCodes" :key="discount.code" v-bind="formProps()">
      <input type="hidden" v-bind="register('discountCode', {value: discount.code})" />
      <span :class="{pending: pendingCodes.has(discount.code)}">
        {{ discount.code }}{{ discount.applicable ? '' : ' (not applicable)' }}
      </span>
      <button
        type="submit"
        v-bind="register('discount-remove')"
        :aria-label="`Remove discount ${discount.code}`"
      >
        Remove
      </button>
      <p v-if="errorMessages(discount.code).length > 0" role="alert">
        {{ errorMessages(discount.code).join(' ') }}
      </p>
    </form>
  </div>
</template>
```

***

## Step 5: Add an order note

Keep a local draft of the note, so a response doesn't overwrite what the customer is typing. Sync the draft from the store only while `pending.note` is `false`:

## Order note

## components/cart-note.ts

##### Vanilla JavaScript

```ts
import type {CartState} from '@shopify/hydrogen';

import {cartStore, createCartForm, createField, register} from '../lib/cart';

export function mountCartNote(container: HTMLElement) {
  const form = createCartForm();
  const id = `cart-note-${crypto.randomUUID()}`;
  const textarea = createField('textarea', {id, ...register('note', {value: ''})});
  const button = createField('button', {...register('note-update'), type: 'submit'});
  form.append(createField('label', {htmlFor: id, textContent: 'Order note'}), textarea, button);
  container.replaceChildren(form);

  let syncedNote: string | undefined;
  const render = ({data, pending}: CartState) => {
    const note = data.note ?? '';
    if (!pending.note && note !== syncedNote) {
      textarea.value = note;
      syncedNote = note;
    }
    button.setAttribute('aria-busy', String(pending.note));
    button.textContent = pending.note ? 'Saving…' : 'Save note';
  };

  render(cartStore.getState());
  return cartStore.subscribe(render);
}
```

##### React

```tsx
import {useEffect, useId, useState} from 'react';

import {useCart, useCartForm} from '../lib/cart';

export function CartNote() {
  const {formProps, register} = useCartForm();
  const note = useCart((state) => state.data.note ?? '');
  const pending = useCart((state) => state.pending.note);
  const [draft, setDraft] = useState(note);
  const id = useId();

  useEffect(() => {
    if (!pending) setDraft(note);
  }, [note, pending]);

  return (
    <form {...formProps()}>
      <label htmlFor={id}>Order note</label>
      <textarea
        id={id}
        {...register('note', {value: draft})}
        onChange={(event) => setDraft(event.target.value)}
      />
      <button type="submit" {...register('note-update')} aria-busy={pending}>
        {pending ? 'Saving…' : 'Save note'}
      </button>
    </form>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {ref, useId, watch} from 'vue';

import {useCart, useCartForm} from '../lib/cart';

const {formProps, register} = useCartForm();
const note = useCart((state) => state.data.note ?? '');
const pending = useCart((state) => state.pending.note);
const draft = ref(note.value);
const id = useId();

watch([note, pending], ([nextNote, isPending]) => {
  if (!isPending) draft.value = nextNote;
});

function updateDraft(event: Event) {
  draft.value = (event.target as HTMLTextAreaElement).value;
}
</script>

<template>
  <form v-bind="formProps()">
    <label :for="id">Order note</label>
    <textarea :id="id" v-bind="register('note', {value: draft})" @input="updateDraft" />
    <button type="submit" v-bind="register('note-update')" :aria-busy="pending">
      {{ pending ? 'Saving…' : 'Save note' }}
    </button>
  </form>
</template>
```

Give each rendering of the note its own element ID, with `useId()` in React and Vue, because the `/cart` page and the cart drawer can render the same component at the same time. Leave the save button enabled when the draft matches the saved note.

***

## Step 6: Edit cart attributes

An attribute update replaces the cart's complete [attribute list](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.attributes). The update removes any attribute that you leave out of the form. When you edit one attribute, include every other attribute as a hidden input.

Call `register('attributeValue', {key, value})` for each attribute in the next list, then submit with `register('attributes-update')`. The Storefront API requires string values, so convert a `null` value to an empty string:

## Gift message attribute

## components/gift-message.ts

##### Vanilla JavaScript

```ts
import type {CartState} from '@shopify/hydrogen';

import {cartStore, createCartForm, createField, register} from '../lib/cart';

const KEY = 'gift-message';

export function mountGiftMessage(container: HTMLElement) {
  const current =
    cartStore.getState().data.attributes.find((attribute) => attribute.key === KEY)?.value ?? '';

  const form = createCartForm();
  const otherAttributes = document.createElement('div');
  const label = createField('label', {textContent: 'Gift message'});
  label.append(createField('textarea', register('attributeValue', {key: KEY, defaultValue: current})));
  const button = createField('button', {...register('attributes-update'), type: 'submit'});
  const alert = createField('p', {role: 'alert', hidden: true});
  form.append(otherAttributes, label, button, alert);
  container.replaceChildren(form);

  const render = ({data, pending, errors}: CartState) => {
    otherAttributes.replaceChildren(
      ...data.attributes
        .filter((attribute) => attribute.key !== KEY)
        .map((attribute) =>
          createField('input', {
            type: 'hidden',
            ...register('attributeValue', {key: attribute.key, value: attribute.value ?? ''}),
          }),
        ),
    );
    button.disabled = pending.attributes;
    button.setAttribute('aria-busy', String(pending.attributes));
    button.textContent = pending.attributes ? 'Saving…' : 'Save message';

    const messages = errors.attributes.get(KEY)?.userErrors.map((error) => error.message) ?? [];
    alert.hidden = messages.length === 0;
    alert.textContent = messages.join(' ');
  };

  render(cartStore.getState());
  return cartStore.subscribe(render);
}
```

##### React

```tsx
import {useCart, useCartForm} from '../lib/cart';

const KEY = 'gift-message';

export function GiftMessage() {
  const {formProps, register} = useCartForm();
  const attributes = useCart((state) => state.data.attributes);
  const pending = useCart((state) => state.pending.attributes);
  const errors = useCart((state) => state.errors.attributes.get(KEY));

  const current = attributes.find((attribute) => attribute.key === KEY)?.value ?? '';
  const messages = errors?.userErrors.map((error) => error.message) ?? [];

  return (
    <form {...formProps()}>
      {attributes
        .filter((attribute) => attribute.key !== KEY)
        .map((attribute) => (
          <input
            key={attribute.key}
            type="hidden"
            {...register('attributeValue', {
              key: attribute.key,
              value: attribute.value ?? '',
            })}
          />
        ))}
      <label>
        Gift message
        <textarea
          {...register('attributeValue', {key: KEY, defaultValue: current})}
          aria-invalid={messages.length > 0 || undefined}
        />
      </label>
      <button
        type="submit"
        {...register('attributes-update')}
        disabled={pending}
        aria-busy={pending}
      >
        {pending ? 'Saving…' : 'Save message'}
      </button>
      {messages.length > 0 ? <p role="alert">{messages.join(' ')}</p> : null}
    </form>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {computed} from 'vue';

import {useCart, useCartForm} from '../lib/cart';

const KEY = 'gift-message';

const {formProps, register} = useCartForm();
const attributes = useCart((state) => state.data.attributes);
const pending = useCart((state) => state.pending.attributes);
const errors = useCart((state) => state.errors.attributes.get(KEY));

const current = computed(
  () => attributes.value.find((attribute) => attribute.key === KEY)?.value ?? '',
);
const otherAttributes = computed(() =>
  attributes.value.filter((attribute) => attribute.key !== KEY),
);
const messages = computed(() => errors.value?.userErrors.map((error) => error.message) ?? []);
</script>

<template>
  <form v-bind="formProps()">
    <input
      v-for="attribute in otherAttributes"
      :key="attribute.key"
      type="hidden"
      v-bind="register('attributeValue', {key: attribute.key, value: attribute.value ?? ''})"
    />
    <label>
      Gift message
      <textarea
        v-bind="register('attributeValue', {key: KEY, defaultValue: current})"
        :aria-invalid="messages.length > 0 || undefined"
      />
    </label>
    <button
      type="submit"
      v-bind="register('attributes-update')"
      :disabled="pending"
      :aria-busy="pending"
    >
      {{ pending ? 'Saving…' : 'Save message' }}
    </button>
    <p v-if="messages.length > 0" role="alert">{{ messages.join(' ') }}</p>
  </form>
</template>
```

A save-style editor like this one can disable its submit button while `pending.attributes` is `true`, because a second save adds nothing. To remove every attribute, submit the form with no `attributeValue` fields.

***

## Step 7: Show totals and errors

Show the totals that Shopify returns, and mark them as unconfirmed while a line or discount mutation is pending or the store is revalidating:

## Cart totals

## components/cart-totals.ts

##### Vanilla JavaScript

```ts
import {formatMoney, type CartState} from '@shopify/hydrogen';

import {cartStore} from '../lib/cart';

export function mountCartTotals(container: HTMLElement) {
  const render = ({data, pending, revalidating}: CartState) => {
    const totalsPending = pending.cost === true || revalidating === true;
    const subtotal = Object.assign(document.createElement('span'), {
      className: totalsPending ? 'pending' : '',
      textContent: formatMoney(data.cost.subtotalAmount, {locale: 'en-US'}).toString(),
    });
    const subtotalRow = Object.assign(document.createElement('p'), {textContent: 'Subtotal '});
    subtotalRow.append(subtotal);

    container.setAttribute('aria-busy', String(totalsPending));
    container.replaceChildren(
      subtotalRow,
      Object.assign(document.createElement('p'), {
        textContent: 'Taxes and shipping are calculated at checkout.',
      }),
    );
    if (data.checkoutUrl) {
      container.append(
        Object.assign(document.createElement('a'), {
          href: data.checkoutUrl,
          textContent: 'Check out',
        }),
      );
    }
  };

  render(cartStore.getState());
  return cartStore.subscribe(render);
}
```

##### React

```tsx
import {formatMoney} from '@shopify/hydrogen';

import {useCart} from '../lib/cart';

export function CartTotals() {
  const subtotal = useCart((state) => state.data.cost.subtotalAmount);
  const checkoutUrl = useCart((state) => state.data.checkoutUrl);
  const totalsPending = useCart(
    (state) => state.pending.cost === true || state.revalidating === true,
  );

  return (
    <div aria-busy={totalsPending}>
      <p>
        Subtotal{' '}
        <span className={totalsPending ? 'pending' : undefined}>
          {formatMoney(subtotal, {locale: 'en-US'}).toString()}
        </span>
      </p>
      <p>Taxes and shipping are calculated at checkout.</p>
      {checkoutUrl ? <a href={checkoutUrl}>Check out</a> : null}
    </div>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {formatMoney} from '@shopify/hydrogen';

import {useCart} from '../lib/cart';

const subtotal = useCart((state) => state.data.cost.subtotalAmount);
const checkoutUrl = useCart((state) => state.data.checkoutUrl);
const totalsPending = useCart(
  (state) => state.pending.cost === true || state.revalidating === true,
);
</script>

<template>
  <div :aria-busy="totalsPending">
    <p>
      Subtotal
      <span :class="{pending: totalsPending}">
        {{ formatMoney(subtotal, {locale: 'en-US'}).toString() }}
      </span>
    </p>
    <p>Taxes and shipping are calculated at checkout.</p>
    <a v-if="checkoutUrl" :href="checkoutUrl">Check out</a>
  </div>
</template>
```

Then add a banner for errors that don't have an inline home: network errors, cart-level errors, and line errors for lines that are no longer in the cart. Select stable slices of state, and derive the message list outside the selector, because a selector that builds a new array on every update re-renders on every update:

## Cart error banner

## components/cart-error-banner.ts

##### Vanilla JavaScript

```ts
import type {CartState} from '@shopify/hydrogen';

import {cartStore} from '../lib/cart';

export function mountCartErrorBanner(container: HTMLElement) {
  let dismissedAt = 0;

  const render = ({data, errors}: CartState) => {
    const lineIds = new Set(data.lines.nodes.map((line) => line.id));
    const orphanedLineErrors = [...errors.lines]
      .filter(([lineId]) => !lineIds.has(lineId))
      .flatMap(([, group]) => group.userErrors);
    const messages = [...errors.network, ...errors.cart.userErrors, ...orphanedLineErrors].map(
      (error) => error.message,
    );

    if (messages.length === 0 || errors.lastUpdatedAt <= dismissedAt) {
      container.replaceChildren();
      return;
    }

    const banner = Object.assign(document.createElement('div'), {role: 'alert'});
    const dismiss = Object.assign(document.createElement('button'), {
      type: 'button',
      textContent: 'Dismiss',
    });
    dismiss.addEventListener('click', () => {
      dismissedAt = errors.lastUpdatedAt;
      render(cartStore.getState());
    });
    banner.append(
      ...messages.map((message) => Object.assign(document.createElement('p'), {textContent: message})),
      dismiss,
    );
    container.replaceChildren(banner);
  };

  render(cartStore.getState());
  return cartStore.subscribe(render);
}
```

##### React

```tsx
import {useMemo, useState} from 'react';

import {useCart} from '../lib/cart';

export function CartErrorBanner() {
  const errors = useCart((state) => state.errors);
  const lines = useCart((state) => state.data.lines.nodes);
  const [dismissedAt, setDismissedAt] = useState(0);

  const messages = useMemo(() => {
    const lineIds = new Set(lines.map((line) => line.id));
    const orphanedLineErrors = [...errors.lines]
      .filter(([lineId]) => !lineIds.has(lineId))
      .flatMap(([, group]) => group.userErrors);

    return [...errors.network, ...errors.cart.userErrors, ...orphanedLineErrors].map(
      (error) => error.message,
    );
  }, [errors, lines]);

  if (messages.length === 0 || errors.lastUpdatedAt <= dismissedAt) return null;

  return (
    <div role="alert">
      {messages.map((message) => (
        <p key={message}>{message}</p>
      ))}
      <button type="button" onClick={() => setDismissedAt(errors.lastUpdatedAt)}>
        Dismiss
      </button>
    </div>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {computed, ref} from 'vue';

import {useCart} from '../lib/cart';

const errors = useCart((state) => state.errors);
const lines = useCart((state) => state.data.lines.nodes);
const dismissedAt = ref(0);

const messages = computed(() => {
  const lineIds = new Set(lines.value.map((line) => line.id));
  const orphanedLineErrors = [...errors.value.lines]
    .filter(([lineId]) => !lineIds.has(lineId))
    .flatMap(([, group]) => group.userErrors);

  return [...errors.value.network, ...errors.value.cart.userErrors, ...orphanedLineErrors].map(
    (error) => error.message,
  );
});
</script>

<template>
  <div v-if="messages.length > 0 && errors.lastUpdatedAt > dismissedAt" role="alert">
    <p v-for="message in messages" :key="message">{{ message }}</p>
    <button type="button" @click="dismissedAt = errors.lastUpdatedAt">Dismiss</button>
  </div>
</template>
```

Tracking `dismissedAt` against `errors.lastUpdatedAt` hides the banner after the customer dismisses it, and shows it again when a newer error arrives.

Compose the components on your `/cart` page, inside the cart provider from Step 2. To confirm the cart works, [add a product](https://shopify.dev/docs/storefronts/hydrogen/products#step-5-add-to-cart), change its quantity, apply and remove a discount code, and save a note. Then turn off JavaScript in your browser, reload `/cart`, and confirm that the page shows your cart and that the quantity form still submits.

***

## Next steps

[Build a cart drawer\
\
](https://shopify.dev/docs/storefronts/hydrogen/cart/cart-drawer)

[Reuse these components in an accessible drawer that opens from any page.](https://shopify.dev/docs/storefronts/hydrogen/cart/cart-drawer)

[Product pages and variants\
\
](https://shopify.dev/docs/storefronts/hydrogen/products)

[Add products to the cart from a variant form.](https://shopify.dev/docs/storefronts/hydrogen/products)

[Shop Pay\
\
](https://shopify.dev/docs/storefronts/hydrogen/shop-pay)

[Add an accelerated checkout button to the cart.](https://shopify.dev/docs/storefronts/hydrogen/shop-pay)

***
