---
title: Cart components
description: >-
  The createCartComponents function creates a cart provider, React hooks, and
  Vue composables typed to the cart fields that your cart server handlers
  return. Use the function to provide the cart to your app, read the cart, build
  cart forms, and refresh the cart after your own cart mutations.
api_version: 2026-10
source_url:
  html: 'https://shopify.dev/docs/api/hydrogen/latest/cart/create-cart-components'
  md: 'https://shopify.dev/docs/api/hydrogen/latest/cart/create-cart-components.md'
api_name: hydrogen
---

# Cart components

The `createCartComponents` function creates a cart provider, React hooks, and Vue composables typed to the cart fields that your cart server handlers return. Use the function to provide the cart to your app, read the cart, build cart forms, and refresh the cart after your own cart mutations.

In frameworks without a Hydrogen binding, use [`createCartStore`](https://shopify.dev/docs/api/hydrogen/latest/cart/create-cart-store).

Import `createCartComponents` from `@shopify/hydrogen/react` or `@shopify/hydrogen/vue`.

***

## Typed cart components

## create​Cart​Components()

Returns a cart provider and cart hooks typed to the cart fragment in your cart server handlers. Pass `typeof cartServerHandlers` as the `THandlers` type argument. Every hook's cart state then includes your custom cart fields.

On mount, the provider sends cart requests to `/api/cart` and connects the store. Every hook except `useOptionalCart` throws when you call it outside the provider.

### Returns

* **TypedCartComponents< CartDataFromHandlers\<THandlers> >**

  The cart provider, the cart state hooks, and the cart actions and form hooks.

### TypedCartComponents

The cart provider and hooks that \`createCartComponents\` returns, typed with the custom cart fields from your cart server handlers.

* CartProvider

  Creates the cart store and shares the store with the cart hooks inside the provider. The provider connects the store on mount and destroys the store on unmount.

  ```ts
  (props: TypedCartProviderProps<TData>) => ReactNode
  ```

* useCart

  Returns the slice of cart state that the selector picks. The component re-renders when the selected value changes by reference, or when your \`isEqual\` function reports a change. A selector that returns the full state re-renders on every cart update.

  ```ts
  CartStateHook<TData>
  ```

* useCartActions

  Returns the \`refresh()\` action. Call \`refresh()\` after a server-side cart change that skips cart forms.

  ```ts
  () => CartActions
  ```

* useCartForm

  Returns form props and a register function for cart forms.

  ```ts
  () => CartFormBindings
  ```

* useOptionalCart

  Returns the slice of cart state that the selector picks, or \`undefined\` outside the provider. Use the hook in a component that also renders above the provider, such as a cart badge on an error page.

  ```ts
  OptionalCartStateHook<TData>
  ```

* useSuspenseCart

  Suspends while the full cart loads, then returns the slice of cart state that the selector picks. Wrap the component in a \`Suspense\` boundary.

  ```ts
  CartStateHook<TData>
  ```

### TypedCartProviderProps

Props for the cart provider that \`createCartComponents\` returns.

* children

  Content that can read the cart through the cart hooks.

  ```ts
  ReactNode
  ```

* initialData

  The \`data\` property of the cart GET handler's result, or a promise of that data. Without initial data, the store loads the cart from \`/api/cart\` after the provider mounts, and the server-rendered page shows an empty cart. The provider creates its store from the first value and ignores later changes.

  ```ts
  CartInitialData<TData>
  ```

### CartInitialData

The cart that the server loaded for the first render.

* cart

  The loaded cart, or \`null\` when the server found no cart.

  ```ts
  TData | null
  ```

* errors

  Load errors from the server. The store ignores the errors.

  ```ts
  Array<{ message: string }>
  ```

### CartStateHook

A hook that returns the slice of cart state that your selector picks.

* selector

  Picks the value to return from the cart state.

  ```ts
  (state: CartState<TData>) => S
  ```

* isEqual

  Compares the previous and next selected values. Return \`true\` to skip the re-render. Without the function, the hook compares the values by reference.

  ```ts
  (a: S, b: S) => boolean
  ```

returns

The selected value.

```ts
S
```

### CartState

The cart, plus what's loading, pending, and failed. The cart hooks return values from this state. The data type matches the cart fragment in your cart server handlers.

* data

  The cart, including changes that the server hasn't confirmed yet.

  ```ts
  TData
  ```

* errors

  Errors and warnings, grouped by the part of the cart that they affect.

  ```ts
  CartErrorState
  ```

* loading

  \`true\` while the store loads the full cart: the first load, a load after \`reset()\`, or before \`connect()\` when the store has no initial data.

  ```ts
  boolean
  ```

* pending

  The parts of the cart with changes in flight.

  ```ts
  CartPending
  ```

* readyPromise

  Present while a full cart load runs. The promise resolves, and never rejects, when the load finishes or the store drops the load.

  ```ts
  PromiseLike<void>
  ```

* revalidating

  \`true\` while the store reloads the cart in the background after overlapping cart changes or a \`refresh()\` call.

  ```ts
  boolean
  ```

### CartErrorState

The cart's errors, grouped by the part of the cart that they affect: lines, the note, attributes, discount codes, or the cart as a whole. Each group has a timestamp in milliseconds since the epoch. Use the timestamps to flag stale errors or dismiss errors after a timeout. Failed requests go in a network list, apart from Storefront API user errors.

* attributes

  Errors keyed by attribute name.

  ```ts
  Map<string, CartErrorGroup>
  ```

* attributesUpdatedAt

  Time in milliseconds since the epoch when the store last recorded attribute errors, or \`0\` before any.

  ```ts
  number
  ```

* cart

  Errors that don't belong to a line, the note, an attribute, or a discount code.

  ```ts
  CartErrorGroup
  ```

* cartUpdatedAt

  Time in milliseconds since the epoch of the last line, discount code, or attribute error, or \`0\` before any.

  ```ts
  number
  ```

* discountCodes

  Errors keyed by discount code.

  ```ts
  Map<string, CartErrorGroup>
  ```

* discountCodesUpdatedAt

  Time in milliseconds since the epoch when the store last recorded discount code errors, or \`0\` before any.

  ```ts
  number
  ```

* lastUpdatedAt

  Time in milliseconds since the epoch when the store last recorded any error, or \`0\` before the first.

  ```ts
  number
  ```

* lines

  Errors keyed by cart line ID.

  ```ts
  Map<string, CartErrorGroup>
  ```

* linesUpdatedAt

  Time in milliseconds since the epoch when the store last recorded line errors, or \`0\` before any.

  ```ts
  number
  ```

* network

  Failed cart requests. A failed cart change adds an entry, with an HTTP status when the endpoint returned a non-2xx response. A failed refresh adds an entry with a generic message and no status. A failed first load or a failed load after a reset adds no entry.

  ```ts
  CartNetworkEntry[]
  ```

* networkUpdatedAt

  Time in milliseconds since the epoch when the store last recorded a network error, or \`0\` before any.

  ```ts
  number
  ```

* note

  Errors for the cart note.

  ```ts
  CartErrorGroup
  ```

* noteUpdatedAt

  Time in milliseconds since the epoch when the store last recorded note errors, or \`0\` before any.

  ```ts
  number
  ```

### CartErrorGroup

Errors and warnings from one cart change.

* userErrors

  Validation errors that the mutation returned.

  ```ts
  CartUserError[]
  ```

* warnings

  Non-blocking warnings that the mutation returned.

  ```ts
  CartWarning[]
  ```

### CartUserError

A validation error returned by a Storefront API cart mutation.

* code

  Machine-readable error code, or \`null\` for unclassified errors.

  ```ts
  CartErrorCode | null
  ```

* field

  The path to the input field that caused the error, such as \`\["lines", "0", "quantity"]\`.

  ```ts
  string[]
  ```

* message

  Human-readable error text from the Storefront API.

  ```ts
  string
  ```

### CartErrorCode

Error codes that the cart POST handler returns. The handler returns \`invalid\_cart\_request\` when it can't parse a JSON request, and \`missing\_cart\` when a JSON request changes the cart but has no cart ID. With \`customerSession\`, the handler returns \`cart\_mutation\_failed\` when a mutation fails after the handler refreshes the customer's access token.

```ts
"invalid_cart_request" | "missing_cart" | "cart_mutation_failed"
```

### CartWarning

A non-blocking warning returned by a Storefront API cart mutation.

* code

  The warning code from the Storefront API.

  ```ts
  CartWarningCode
  ```

* message

  Human-readable warning text from the Storefront API.

  ```ts
  string
  ```

### CartNetworkEntry

A failed cart request, such as a non-2xx response or a timeout. Canceled requests add no entry.

* message

  The error message, or a generic message when the failure has no message of its own.

  ```ts
  string
  ```

* status

  The HTTP status code, when the endpoint returned a non-2xx response.

  ```ts
  number
  ```

### CartPending

Shows which parts of the cart have changes in flight. Check a line ID or a discount code to show a pending indicator on that item. Check \`cost\` to show pending UI on prices, which update only when the server responds.

* attributes

  \`true\` while an attribute update is in flight.

  ```ts
  boolean
  ```

* cost

  \`true\` while a change that can affect cart prices is in flight.

  ```ts
  boolean
  ```

* discountCodes

  Discount codes with an apply or remove in flight.

  ```ts
  Set<string>
  ```

* lines

  Line IDs with an add, quantity change, or removal in flight. A new line has an ID that starts with \`optimistic:\` until the server confirms the line.

  ```ts
  Set<string>
  ```

* note

  \`true\` while a note update is in flight.

  ```ts
  boolean
  ```

### CartActions

The store action that reloads the cart after a cart change outside the store.

* refresh

  Reloads the cart after a cart change that skipped the store, such as a server action. When the store has no cart yet, the method picks up the cart that the server created. A failed reload adds an entry to the network errors in the cart state.

  ```ts
  () => void
  ```

### CartFormBindings

The form props function and the register function for a cart form.

* formProps

  Returns the \`method\`, \`action\`, and \`onSubmit\` props to spread on the form. The form posts to the cart endpoint, and the cart store handles each submission.

  ```ts
  (opts?: CartFormPropsOptions) => FormHTMLAttributes<HTMLFormElement>
  ```

* register

  Returns the attributes for a cart field or action button. Register the quantity field with \`interactive: true\` to submit the form when the quantity changes. The interactive input takes the quantity as a default value and stays uncontrolled.

  ```ts
  CartFormRegister
  ```

### CartFormPropsOptions

Callbacks that run around a cart form submission.

* afterSubmit

  Runs as soon as the cart change starts, before the server responds.

  ```ts
  (e: SubmitEvent<HTMLFormElement>) => void
  ```

* beforeSubmit

  Runs before the cart store handles the submission. Call \`event.preventDefault()\` to skip the cart submission.

  ```ts
  (e: SubmitEvent<HTMLFormElement>) => void
  ```

### CartFormRegister



### OptionalCartStateHook

A hook that returns the slice of cart state that your selector picks, or \`undefined\` outside the cart provider.

* selector

  Picks the value to return from the cart state.

  ```ts
  (state: CartState<TData>) => S
  ```

* isEqual

  Compares the previous and next selected values. Return \`true\` to skip the re-render. Without the function, the hook compares the values by reference.

  ```ts
  (a: S, b: S) => boolean
  ```

returns

The selected value, or \`undefined\` outside the cart provider.

```ts
S | undefined
```

### CartDataFromHandlers



### Examples

* #### Create typed cart components in React

  ##### Description

  Create the bindings once from the type of your cart server handlers.

  ##### React

  ```tsx
  import { createCartComponents } from "@shopify/hydrogen/react";

  import type { cartHandlers } from "./cart-handlers";

  export const { CartProvider, useCart, useSuspenseCart, useCartActions, useCartForm } =
    createCartComponents<typeof cartHandlers>();
  ```

* #### Seed the provider from a loader

  ##### Description

  Pass a promise of the cart data from a React Router loader to the cart provider.

  ##### React

  ```tsx
  import { Outlet } from "react-router";

  import type { Route } from "./+types/root";
  import { CartProvider } from "./lib/cart";
  import { cartHandlers } from "./lib/cart-handlers";
  import { storefrontClientContext } from "./lib/storefront";

  export async function loader({ context }: Route.LoaderArgs) {
    const storefrontClient = context.get(storefrontClientContext);
    const cartData = cartHandlers.get({ storefrontClient }).then(({ data }) => data);

    return { cartData };
  }

  export default function App({ loaderData }: Route.ComponentProps) {
    return (
      <CartProvider initialData={loaderData.cartData}>
        <Outlet />
      </CartProvider>
    );
  }
  ```

* #### Create typed cart components in Vue

  ##### Description

  Create the bindings once in a shared module from the type of your cart server handlers.

  ##### Vue

  ```ts
  import { createCartComponents } from "@shopify/hydrogen/vue";

  import type { cartHandlers } from "./cart-handlers";

  export const { CartProvider, useCart, useCartActions, useCartForm } =
    createCartComponents<typeof cartHandlers>();
  ```

* #### Refresh after a custom mutation

  ##### Description

  Save delivery instructions through a custom route in your app and refresh the cart on success.

  ##### Vue

  ```vue
  <script setup lang="ts">
  import { ref } from "vue";

  import { useCartActions } from "../lib/cart";

  const { refresh } = useCartActions();
  const instructions = ref("");

  async function save() {
    const response = await fetch("/api/delivery-instructions", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ value: instructions.value }),
    });

    if (response.ok) refresh();
  }
  </script>

  <template>
    <form @submit.prevent="save">
      <textarea v-model="instructions" />
      <button type="submit">Save delivery instructions</button>
    </form>
  </template>
  ```

***

## Vue bindings

* In Vue, `createCartComponents` returns the same bindings except `useSuspenseCart`.
* The `useCart` and `useOptionalCart` composables return read-only shallow refs. Call `useCart` without a selector to get the whole cart state.
* The `useCartForm` composable also returns `isPending`, which tells you when the cart loads or a line updates. Call [`attachQuantityInput`](https://shopify.dev/docs/api/hydrogen/latest/cart/cart-forms) on a quantity input to submit the form when a customer changes the quantity.

***
