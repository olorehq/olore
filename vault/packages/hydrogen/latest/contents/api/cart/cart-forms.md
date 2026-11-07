---
title: Cart forms
description: >-
  The cart form functions build cart forms that submit through the cart store
  and still work without JavaScript. Use these functions to get the attributes
  for cart form fields and buttons, submit the form when a customer changes a
  quantity, and keep a typed quantity within limits.
api_version: 2026-10
source_url:
  html: 'https://shopify.dev/docs/api/hydrogen/latest/cart/cart-forms'
  md: 'https://shopify.dev/docs/api/hydrogen/latest/cart/cart-forms.md'
api_name: hydrogen
---

# Cart forms

The cart form functions build cart forms that submit through the cart store and still work without JavaScript. Use these functions to get the attributes for cart form fields and buttons, submit the form when a customer changes a quantity, and keep a typed quantity within limits.

In React and Vue apps, use the cart form hook from [`createCartComponents`](https://shopify.dev/docs/api/hydrogen/latest/cart/create-cart-components).

Import `createCartFormRegister`, `attachQuantityInput`, and `sanitizeQuantity` from `@shopify/hydrogen`.

***

## Form fields

## create​Cart​Form​Register()

Creates a register function that returns the HTML attributes for cart form fields and action buttons.

Use the function to build cart forms without a framework binding. In React, `useCartForm` returns a register function and form props for you. To submit an interactive quantity input on change, call `attachQuantityInput`.

The register function holds no state. Share one register function across components.

### Returns

* **CartFormRegister**

  A register function for cart form fields and action buttons.

### CartFormRegister



### Examples

* #### Generate cart form attributes

  ##### Description

  Build the attribute objects for a line item form and a gift message field.

  ##### TypeScript

  ```ts
  import { createCartFormRegister } from "@shopify/hydrogen";

  const register = createCartFormRegister();

  export function lineItemFormAttributes(line: { id: string; quantity: number }) {
    return {
      setButton: register("set"),
      lineId: register("lineId", { value: line.id }),
      quantity: register("quantity", { value: line.quantity, interactive: true }),
      increaseButton: register("increase"),
      decreaseButton: register("decrease"),
      removeButton: register("remove"),
    };
  }

  export const giftMessageField = register("attributeValue", {
    key: "gift-message",
    defaultValue: "",
  });
  ```

* #### Build a line item form in React

  ##### Description

  Wire quantity controls with the cart form hook and dim the quantity while the line updates.

  ##### React

  ```tsx
  import { useCart, useCartForm } from "./cart";

  export function LineItemQuantity({ line }: { line: { id: string; quantity: number } }) {
    const { formProps, register } = useCartForm();
    const pendingLines = useCart((state) => state.pending.lines);

    return (
      <form {...formProps()}>
        <button {...register("set")} />
        <input type="hidden" {...register("lineId", { value: line.id })} />
        <button type="submit" {...register("decrease")}>-</button>
        <input
          {...register("quantity", { value: line.quantity, interactive: true })}
          className={pendingLines.has(line.id) ? "opacity-30" : ""}
        />
        <button type="submit" {...register("increase")}>+</button>
        <button type="submit" {...register("remove")}>Remove</button>
      </form>
    );
  }
  ```

* #### Build a line item form in Vue

  ##### Description

  Bind quantity controls with the cart form composable and dim the quantity while the line updates. On mount, the component calls \`attachQuantityInput\`, which submits the form when a customer changes the quantity.

  ##### Vue

  ```vue
  <script setup lang="ts">
  import { attachQuantityInput } from "@shopify/hydrogen";
  import { onBeforeUnmount, onMounted, ref } from "vue";
  import { useCart, useCartForm } from "./cart";

  defineProps<{ line: { id: string; quantity: number } }>();

  const pendingLines = useCart((state) => state.pending.lines);
  const { formProps, register } = useCartForm();

  const form = ref<HTMLFormElement>();
  const quantityInput = ref<HTMLInputElement>();
  let detach: (() => void) | undefined;

  onMounted(() => {
    if (form.value && quantityInput.value) {
      detach = attachQuantityInput(quantityInput.value, form.value);
    }
  });

  onBeforeUnmount(() => detach?.());
  </script>

  <template>
    <form ref="form" v-bind="formProps()">
      <button v-bind="register('set')" />
      <input type="hidden" v-bind="register('lineId', { value: line.id })" />
      <button type="submit" v-bind="register('decrease')">-</button>
      <input
        ref="quantityInput"
        v-bind="register('quantity', { value: line.quantity, interactive: true })"
        :class="pendingLines.has(line.id) ? 'opacity-30' : ''"
      />
      <button type="submit" v-bind="register('increase')">+</button>
      <button type="submit" v-bind="register('remove')">Remove</button>
    </form>
  </template>
  ```

***

## Quantity input

## attach​Quantity​Input(**[inputEl](#attachquantityinput-propertydetail-inputel)**​,**[formEl](#attachquantityinput-propertydetail-formel)**​)

Submits a cart form when the customer changes the form's quantity input.

Make the form's first submit button the set button from `register("set")`. The function throws when the first submit button is any other button.

In React, register the quantity field with `interactive: true` in `useCartForm`, which calls the function for you. Call the function yourself in Vue and in frameworks without a binding.

### Parameters

* **input​El**

  **HTMLInputElement**

  **required**

  The quantity input that submits the form on change.

* **form​El**

  **HTMLFormElement**

  **required**

  The cart form that holds the input and the set button.

### Returns

* **() => void**

  A function that stops the automatic submits. Call the function when you remove the input.

### Examples

* #### Auto-submit on quantity change

  ##### Description

  Submit each line item form on the page when a customer changes the form's quantity. The returned function removes the behavior from every form.

  ##### TypeScript

  ```ts
  import { attachQuantityInput } from "@shopify/hydrogen";

  export function enhanceQuantityInputs(root: ParentNode = document) {
    const cleanups: Array<() => void> = [];

    for (const input of root.querySelectorAll<HTMLInputElement>('input[name="quantity"]')) {
      const form = input.closest("form");
      if (form) cleanups.push(attachQuantityInput(input, form));
    }

    return () => {
      for (const cleanup of cleanups) cleanup();
    };
  }
  ```

***

## Quantity parsing

## sanitize​Quantity(**[raw](#sanitizequantity-propertydetail-raw)**​,**[options](#sanitizequantity-propertydetail-options)**​)

Turns a raw value, such as text from a quantity input, into a whole-number quantity between a minimum and a maximum.

The function parses strings and rounds decimals. Input that the function can't parse returns the minimum.

### Parameters

* **raw**

  **unknown**

  **required**

  The value to turn into a quantity.

* **options**

  **{ min?: number; max?: number; }**

  The lower and upper bounds. The `min` option defaults to `1`, and `max` defaults to no limit. To stop at available stock, pass the variant's available quantity as `max`.

### Returns**number**

* The rounded quantity, between the minimum and the maximum.

### Examples

* #### Clamp a typed quantity

  ##### Description

  Read a quantity input and cap it at the available inventory.

  ##### TypeScript

  ```ts
  import { DEFAULT_MINIMUM_QUANTITY, sanitizeQuantity } from "@shopify/hydrogen";

  export function readQuantity(input: HTMLInputElement, quantityAvailable?: number | null) {
    return sanitizeQuantity(input.value, {
      min: DEFAULT_MINIMUM_QUANTITY,
      max: quantityAvailable ?? undefined,
    });
  }
  ```

***
