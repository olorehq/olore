---
title: Build product pages with variant selection
description: >-
  Build a Hydrogen product page that resolves variants from the URL, renders
  option values as links, and adds the selected variant to the cart.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/products'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/products.md'
api_name: hydrogen
---

# Build product pages with variant selection

This guide shows you how to build a product page with Hydrogen's product form. You'll [query a product](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/getting-started) with the fields that variant selection needs, keep the selected options in the URL, render option values that work without JavaScript, and add the selected variant to the cart.

***

## What the product page has to do

The page has to:

* Read the selected options from the URL with [`getSelectedProductOptions()`](https://shopify.dev/docs/api/hydrogen/latest/products/variant-selection) and pass them to the product query.
* Default to `selectedOrFirstAvailableVariant`.
* Query `optionValues`, not the deprecated `values`.
* Mark the selected value with `aria-current`.
* Keep a sold-out value as a link.
* Render a combination that doesn't exist as a disabled `<button>`.
* Hide the picker when every option has one value.

***

## How it works

The product form is a store that tracks which options a customer has selected on one product page. You create it with [`createProductFormStore()`](https://shopify.dev/docs/api/hydrogen/latest/products/create-product-form-store) from `@shopify/hydrogen`, or, in React and Vue, with the `ProductProvider` that [`createProductComponents()`](https://shopify.dev/docs/api/hydrogen/latest/products/create-product-components) returns.

The store derives the following state from the product data that you pass in:

* `options`: Every [product option](https://shopify.dev/docs/api/storefront/latest/objects/ProductOption) and its values. Each value reports whether it's `selected`, whether its combination with the other selected options `exists`, whether that variant is `available` for sale, and the `selectedOptions` and `handle` that selecting it leads to.
* `selectedOptions`: The option values the customer has selected.
* `selectedVariant`: The variant that matches the selected options, or `null`.
* `errors`: The cart's `userErrors`, `warnings`, and `networkErrors`, including the selected variant's line errors.

The store computes `exists` and `available` from the product's encoded variant fields, so it doesn't need every variant in your query. When a customer selects a value, the store resolves the new variant from the variants you queried. If it doesn't have that variant, then it keeps the selection and your page loads the variant from the server.

The URL is the source of truth for the selection. The server reads the selected options from the URL and queries the matching variant, so a product URL always renders the right variant, even without JavaScript. On the client, the store updates the selection immediately, and your page syncs the URL to match.

***

## Requirements

* Create a [Storefront API client](https://shopify.dev/docs/storefronts/hydrogen/data-fetching) for each request.
* Wire [`handleShopifyRoutes`](https://shopify.dev/docs/storefronts/hydrogen/request-handlers) into your server before your framework's router runs.
* Provide the cart to your app with `CartProvider`, or create a cart store in vanilla JavaScript. Refer to [Build cart UI](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart).
* Create a product route at `/products/{handle}`. If your storefront uses a different product path, then refer to [Route templates](https://shopify.dev/docs/storefronts/hydrogen/routing).

***

## Step 1: Query product data

Query the product with the five fields that variant selection needs. The comments in the query say what each field does:

## Product query

lib/product-query.ts

```ts
import {gql, type StorefrontApi} from '@shopify/hydrogen';


const VARIANT_FIELDS_FRAGMENT = gql(`
  fragment VariantFields on ProductVariant {
    id
    title
    availableForSale
    sku
    selectedOptions {
      name
      value
    }
    price {
      amount
      currencyCode
    }
    compareAtPrice {
      amount
      currencyCode
    }
    image {
      url
      altText
      width
      height
    }
    product {
      handle
      title
    }
  }
`);


export const PRODUCT_QUERY = gql(
  `
    query Product($handle: String!, $selectedOptions: [SelectedOptionInput!]!) {
      product(handle: $handle) {
        id
        handle
        title
        vendor
        descriptionHtml
        requiresSellingPlan
        # Which option combinations exist, to mark values with no variant.
        encodedVariantExistence
        # Which option combinations are available, to mark sold-out values.
        encodedVariantAvailability
        options {
          name
          # Option values. Use optionValues, not the deprecated values field.
          optionValues {
            name
            firstSelectableVariant {
              ...VariantFields
            }
            swatch {
              color
              image {
                previewImage {
                  url
                }
              }
            }
          }
        }
        # Selected variant, else first available variant, else first variant.
        selectedOrFirstAvailableVariant(
          selectedOptions: $selectedOptions
          ignoreUnknownOptions: true
          caseInsensitiveMatch: true
        ) {
          ...VariantFields
        }
        # Variants that differ from the selected variant by one option value.
        # The store gets the variant of each option value from this list.
        adjacentVariants(
          selectedOptions: $selectedOptions
          ignoreUnknownOptions: true
          caseInsensitiveMatch: true
        ) {
          ...VariantFields
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  `,
  [VARIANT_FIELDS_FRAGMENT],
);


export type ProductData = NonNullable<
  StorefrontApi.ResultOf<typeof PRODUCT_QUERY>['product']
>;
```

The query also uses the following arguments and fields:

* `ignoreUnknownOptions` and `caseInsensitiveMatch`: Stop unrelated or differently cased search parameters from breaking the variant match in `selectedOrFirstAvailableVariant` and `adjacentVariants`.
* `requiresSellingPlan`: Tells [`canAddToCart()`](https://shopify.dev/docs/api/hydrogen/latest/products/add-to-cart) to block products that can only be sold on a [subscription](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/subscriptions).

To query prices and content for the customer's market, add `@inContext` to the query. Refer to [Markets](https://shopify.dev/docs/storefronts/hydrogen/markets).

Read the selected options from the URL with [`getSelectedProductOptions()`](https://shopify.dev/docs/api/hydrogen/latest/products/variant-selection) and pass them to the query. The following loader runs on the server and returns `null` when the product doesn't exist:

## Load the product

lib/product-loader.ts

```ts
import {getSelectedProductOptions, type StorefrontClient} from '@shopify/hydrogen';


import {PRODUCT_QUERY} from './product-query';


export async function loadProduct(
  storefront: StorefrontClient,
  handle: string,
  searchParams: URLSearchParams,
) {
  const selectedOptions = getSelectedProductOptions({searchParams});
  const {data, errors} = await storefront.graphql(PRODUCT_QUERY, {
    variables: {handle, selectedOptions},
  });
  if (errors) console.error('Product query failed', errors);


  return data?.product ?? null;
}
```

Call `loadProduct()` from your product route's server code, and pass it the request's search parameters, so a product URL always renders the variant that it encodes. When it returns `null`, respond with your framework's 404 page. To find where this code goes in your framework, refer to [Framework wiring](https://shopify.dev/docs/storefronts/hydrogen/request-handlers#framework-wiring).

In Next.js, `await` the page's `searchParams`. Convert it to `URLSearchParams` with a small helper. If you cache the call with `'use cache'`, then pass the search string to the cached function instead, using a module-scoped [catalog client](https://shopify.dev/docs/storefronts/hydrogen/data-fetching#create-a-client-for-catalog-reads):

## Next.js search params helper

lib/url-params.ts

```ts
export function toURLSearchParams(
  input: Record<string, string | string[] | undefined>,
): URLSearchParams {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(input)) {
    if (Array.isArray(value)) {
      for (const item of value) params.append(key, item);
    } else if (value != null) {
      params.set(key, value);
    }
  }
  return params;
}
```

`getSelectedProductOptions()` reads every search parameter as an option, except reserved ones like `variant`. To limit it to known option names, pass `allowedOptionNames`.

***

## Step 2: Build option URLs

Every option value links to a URL that encodes its selected options, like `/products/shirt?Color=Blue&Size=M`. Build these URLs with `buildProductSelectionSearchParams()`, and pass the current search parameters as `base`, so parameters that aren't options, like UTM tags, survive a selection:

## Option URL helper

lib/variant-url.ts

```ts
import {
  buildProductSelectionSearchParams,
  type SelectedOption,
} from '@shopify/hydrogen';


export function variantUrl(
  product: {handle: string; options: Array<{name: string}>},
  selectedOptions: SelectedOption[],
  handle = product.handle,
  base: URLSearchParams = new URLSearchParams(),
): string {
  const params = buildProductSelectionSearchParams({
    selectedOptions,
    optionNames: product.options.map((option) => option.name),
    base: new URLSearchParams(base),
  });
  const query = params.toString();
  return `/products/${handle}${query ? `?${query}` : ''}`;
}
```

Links from other storefronts and apps often use Liquid-style `?variant=<id>` URLs. You don't need to handle them. `handleShopifyRoutes` redirects them to option parameters before your route runs. To build a `?variant=` link yourself, for example in a feed, pass `style: 'variant'` and a `variant` to `buildProductSelectionSearchParams()`.

***

## Step 3: Provide the product form

Create the product form for your product query type. In React and Vue, `createProductComponents()` returns a provider and hooks that share one product form store. In vanilla JavaScript, create the store yourself with `createProductFormStore()`, and pass it the cart store from [Build cart UI](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart):

## Product bindings

## lib/product.ts

##### Vanilla JavaScript

```ts
import {createProductFormStore} from '@shopify/hydrogen';

import {cartStore} from './cart';
import type {ProductData} from './product-query';

export function createProductForm(product: ProductData) {
  return createProductFormStore(product, cartStore);
}
```

##### React

```ts
import {createProductComponents} from '@shopify/hydrogen/react';

import type {ProductData} from './product-query';

export const {ProductProvider, useProduct, useProductForm} =
  createProductComponents<ProductData>();
```

##### Vue

```ts
import {createProductComponents} from '@shopify/hydrogen/vue';

import type {ProductData} from './product-query';

export const {ProductProvider, useProduct, useProductForm} =
  createProductComponents<ProductData>();
```

In React and Vue, wrap the product page in `ProductProvider`. The provider hydrates the store when the product ID or selected variant ID changes, and destroys the store when it unmounts. In vanilla JavaScript, call `store.hydrate(product)` after you load new product data, and call `store.destroy()` when the customer leaves the page.

After a customer selects a value, sync the URL. Replace the history entry instead of pushing a new one, and keep the scroll position. In React and Vue, sync it in the provider's `onSelect` callback. In vanilla JavaScript, sync it after `store.selectOption()` returns.

Each React router reads and replaces the URL differently, so the React examples in this guide use two small hooks that wrap your router:

## Router hooks

## lib/router.ts

##### Next.js

```ts
import {useRouter, useSearchParams} from 'next/navigation';

export function useSearch(): string {
  return useSearchParams().toString();
}

export function useReplaceUrl(): (url: string) => void {
  const router = useRouter();
  return (url) => router.replace(url, {scroll: false});
}
```

##### React Router

```ts
import {useLocation, useNavigate} from 'react-router';

export function useSearch(): string {
  return useLocation().search;
}

export function useReplaceUrl(): (url: string) => void {
  const navigate = useNavigate();
  return (url) => {
    void navigate(url, {replace: true, preventScrollReset: true});
  };
}
```

Provide the product form, and sync the URL after each selection:

## Provide the product form

## lib/product-page.ts

##### Vanilla JavaScript

```ts
import {createProductForm} from './product';
import type {ProductData} from './product-query';
import {variantUrl} from './variant-url';

export function startProductPage(product: ProductData) {
  const store = createProductForm(product);

  function selectOption(name: string, value: string) {
    const result = store.selectOption(name, value);
    if (result.status === 'invalid') return;

    const url = variantUrl(
      product,
      result.selectedOptions,
      result.selectedVariant?.product?.handle,
      new URLSearchParams(window.location.search),
    );
    if (result.status === 'resolved') {
      window.history.replaceState(window.history.state, '', url);
    } else {
      // The store doesn't have this variant, so load it from the server.
      window.location.replace(url);
    }
  }

  return {store, selectOption};
}
```

##### React

```tsx
import {AddToCartForm} from './AddToCartForm';
import {ProductOptions} from './ProductOptions';
import {ProductProvider} from '../lib/product';
import type {ProductData} from '../lib/product-query';
import {useReplaceUrl, useSearch} from '../lib/router';
import {variantUrl} from '../lib/variant-url';

export function ProductDetails({product}: {product: ProductData}) {
  const replaceUrl = useReplaceUrl();
  const search = useSearch();

  return (
    <ProductProvider
      product={product}
      onSelect={(result) => {
        replaceUrl(
          variantUrl(
            product,
            result.selectedOptions,
            result.selectedVariant?.product?.handle,
            new URLSearchParams(search),
          ),
        );
      }}
    >
      <h1>{product.title}</h1>
      <ProductOptions product={product} />
      <AddToCartForm product={product} />
    </ProductProvider>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import type {ValidProductSelectionResult} from '@shopify/hydrogen/vue';
import {useRouter} from 'vue-router';

import AddToCartForm from './AddToCartForm.vue';
import ProductOptions from './ProductOptions.vue';
import {ProductProvider} from '../lib/product';
import type {ProductData} from '../lib/product-query';
import {variantUrl} from '../lib/variant-url';

const props = defineProps<{product: ProductData}>();
const router = useRouter();

function handleSelect(result: ValidProductSelectionResult<ProductData>) {
  const url = variantUrl(
    props.product,
    result.selectedOptions,
    result.selectedVariant?.product?.handle,
    new URLSearchParams(window.location.search),
  );
  void router.replace(url);
}
</script>

<template>
  <ProductProvider :product="product" :on-select="handleSelect">
    <h1>{{ product.title }}</h1>
    <ProductOptions :product="product" />
    <AddToCartForm :product="product" />
  </ProductProvider>
</template>
```

Render `ProductDetails` from your product route, and pass it the product that `loadProduct()` returns. In vanilla JavaScript, server-render the option links, serialize the product into the page, and pass it to `startProductPage()` from your client bundle. Pass `store` and `selectOption` to `renderProductOptions()`, and `store` to `attachAddToCart()`. In Vue, reload the product when the route query changes.

Keep URL syncing idempotent. It can run for a URL that's already current, for example when a router link navigates to the same URL on the same click.

In React Router, to skip the loader for selections that resolve on the client, use the route's `shouldRevalidate` export. Don't pass revalidation flags to `navigate()`.

***

## Step 4: Render option values

Render each option as a `<fieldset>` with a `<legend>`. Each option value is in one of four states, and each state renders differently:

| Value state | Render as | Helper or attribute |
| - | - | - |
| Exists on the current product | A link to the value's option URL. | `aria-current` on the selected value, from `value.selected`. In React and Vue, spread `register('optionValue', ...)` on the link. In vanilla JavaScript, call `selectOption()` from its click handler. |
| Exists but is sold out | The same link, so customers can still select it, with a visually hidden "Sold out" label and a sold-out style. | `value.available` is `false`. Style the link from its `data-available` attribute. |
| Combination doesn't exist | A `<button>` with the native `disabled` attribute and `aria-pressed`. It has no URL, so it can't be a link. | `value.exists` is `false`. |
| Belongs to a different product | A plain link to that product. | `value.handle` differs from the current product's handle. |

A hydrated click on a value of the current product selects the value in the store without a full navigation. For values on a different product, refer to [Combined listings](#combined-listings).

Hide the whole picker when every option has one value or fewer, like a product with only the default `Title` option. Don't hide values based on the current selection. Customers need to see every value to change their mind.

The following code renders each option as a `<fieldset>`, renders each value for its state, and hides the picker when there's nothing to choose:

## Render option values

## lib/product-options.ts

##### Vanilla JavaScript

```ts
import type {ProductFormStore} from '@shopify/hydrogen';

import type {ProductData} from './product-query';
import {variantUrl} from './variant-url';

export function renderProductOptions(
  root: HTMLElement,
  product: ProductData,
  store: ProductFormStore<ProductData>,
  selectOption: (name: string, value: string) => void,
) {
  function render() {
    const {options} = store.getState();
    const base = new URLSearchParams(window.location.search);
    root.hidden = !options.some((option) => option.values.length > 1);

    root.replaceChildren(
      ...options.map((option) => {
        const fieldset = document.createElement('fieldset');
        const legend = document.createElement('legend');
        legend.textContent = option.name;
        fieldset.append(legend);

        for (const value of option.values) {
          const otherProduct = value.handle && value.handle !== product.handle;

          if (!otherProduct && !value.exists) {
            const button = document.createElement('button');
            button.type = 'button';
            button.disabled = true;
            button.setAttribute('aria-pressed', String(value.selected));
            button.textContent = value.name;
            fieldset.append(button);
            continue;
          }

          const link = document.createElement('a');
          link.href = variantUrl(product, value.selectedOptions, value.handle, base);
          link.textContent = value.name;
          link.dataset.available = String(value.available);
          if (!value.available) {
            const label = document.createElement('span');
            label.className = 'sr-only';
            label.textContent = ' (Sold out)';
            link.append(label);
          }
          if (!otherProduct) {
            if (value.selected) link.setAttribute('aria-current', 'true');
            link.addEventListener('click', (event) => {
              event.preventDefault();
              selectOption(option.name, value.name);
            });
          }
          fieldset.append(link);
        }
        return fieldset;
      }),
    );
  }

  render();
  return store.subscribe(render);
}
```

##### React

```tsx
import {useProductForm} from '../lib/product';
import type {ProductData} from '../lib/product-query';
import {useSearch} from '../lib/router';
import {variantUrl} from '../lib/variant-url';

export function ProductOptions({product}: {product: ProductData}) {
  const {options, register} = useProductForm();
  const base = new URLSearchParams(useSearch());

  if (!options.some((option) => option.values.length > 1)) return null;

  return (
    <div>
      {options.map((option) => (
        <fieldset key={option.name}>
          <legend>{option.name}</legend>
          {option.values.map((value) => {
            const href = variantUrl(product, value.selectedOptions, value.handle, base);
            const soldOut = value.available ? null : (
              <span className="sr-only"> (Sold out)</span>
            );

            if (value.handle && value.handle !== product.handle) {
              return (
                <a
                  key={value.name}
                  href={href}
                  data-available={value.available ? 'true' : 'false'}
                >
                  {value.name}
                  {soldOut}
                </a>
              );
            }

            if (!value.exists) {
              return (
                <button
                  key={value.name}
                  type="button"
                  disabled
                  aria-pressed={value.selected}
                >
                  {value.name}
                </button>
              );
            }

            const optionProps = register('optionValue', {
              optionName: option.name,
              value: value.name,
            });

            return (
              <a
                key={value.name}
                href={href}
                aria-current={value.selected ? 'true' : undefined}
                data-available={value.available ? 'true' : 'false'}
                {...optionProps}
                onClick={(event) => {
                  event.preventDefault();
                  optionProps.onClick();
                }}
              >
                {value.name}
                {soldOut}
              </a>
            );
          })}
        </fieldset>
      ))}
    </div>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import type {SelectedOption} from '@shopify/hydrogen';
import {computed} from 'vue';
import {RouterLink, useRoute} from 'vue-router';

import {useProductForm} from '../lib/product';
import type {ProductData} from '../lib/product-query';
import {variantUrl} from '../lib/variant-url';

const props = defineProps<{product: ProductData}>();
const form = useProductForm();
const route = useRoute();

const base = computed(() => {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(route.query)) {
    for (const item of [value].flat()) {
      if (item != null) params.append(key, item);
    }
  }
  return params;
});

const hasChoices = computed(() =>
  form.options.some((option) => option.values.length > 1),
);

function href(value: {selectedOptions: SelectedOption[]; handle: string}) {
  return variantUrl(props.product, value.selectedOptions, value.handle, base.value);
}
</script>

<template>
  <div v-if="hasChoices">
    <fieldset v-for="option in form.options" :key="option.name">
      <legend>{{ option.name }}</legend>
      <template v-for="value in option.values" :key="value.name">
        <RouterLink
          v-if="value.handle && value.handle !== product.handle"
          :to="href(value)"
          :data-available="String(value.available)"
        >
          {{ value.name }}
          <span v-if="!value.available" class="sr-only"> (Sold out)</span>
        </RouterLink>
        <button
          v-else-if="!value.exists"
          type="button"
          disabled
          :aria-pressed="value.selected"
        >
          {{ value.name }}
        </button>
        <RouterLink
          v-else
          :to="href(value)"
          replace
          :aria-current="value.selected ? 'true' : undefined"
          :data-available="String(value.available)"
          v-bind="form.register('optionValue', {optionName: option.name, value: value.name})"
        >
          {{ value.name }}
          <span v-if="!value.available" class="sr-only"> (Sold out)</span>
        </RouterLink>
      </template>
    </fieldset>
  </div>
</template>
```

In React and vanilla JavaScript, the option links are plain `<a>` elements. A hydrated click on a value of the current product calls `preventDefault()` and selects the value in the store, and the URL sync replaces the URL. Without JavaScript, the same link loads the selected variant from the server. In Vue, `RouterLink` and the registered click handler both run, so the router navigates to the same URL that `onSelect` replaces. To navigate to another product without a full page load, render your router's link component for that value instead of `<a>`.

Style sold-out values from the `data-available` attribute, for example with a strikethrough. To render color or image swatches, read `value.swatch.color` and `value.swatch.image` from the option value.

### Combined listings

With [combined listings](https://help.shopify.com/en/manual/products/combined-listings-app), each value of an option, like each color, can be a separate product. The store sets `value.handle` to the handle of the product that the value links to.

When `value.handle` differs from the current product's handle, render the value as a plain link to that product, as the preceding example does. Don't spread `register('optionValue', ...)` on it, and don't call `selectOption()` for it. The other product has its own page, data, and product form.

***

## Step 5: Add to cart

Keep the add-to-cart form separate from the option picker. The form submits the selected variant, and the option links change the selection.

In React and Vue, `formProps()` returns a form that posts to the cart endpoint, so it works without JavaScript. After hydration, the product form store submits it through the cart store with an optimistic update. In vanilla JavaScript, call `store.handleFormSubmit()` from the form's submit handler:

## Add to cart form

## lib/add-to-cart.ts

##### Vanilla JavaScript

```ts
import {canAddToCart, formatMoney, type ProductFormStore} from '@shopify/hydrogen';

import {openCartDrawer} from './cart-drawer';
import type {ProductData} from './product-query';

export function attachAddToCart(
  form: HTMLFormElement,
  product: ProductData,
  store: ProductFormStore<ProductData>,
) {
  const merchandiseId = form.elements.namedItem('merchandiseId') as HTMLInputElement;
  const button = form.querySelector<HTMLButtonElement>('button[name="add-to-cart"]')!;
  const price = form.querySelector<HTMLElement>('[data-price]')!;
  const errors = form.querySelector<HTMLElement>('[role="alert"]')!;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!canAddToCart(product, store.getState().options)) return;
    openCartDrawer();
    void store.handleFormSubmit(event);
  });

  function render() {
    const {options, selectedVariant, errors: formErrors} = store.getState();
    const addable = canAddToCart(product, options);
    const amount = selectedVariant?.price ?? product.priceRange.minVariantPrice;

    merchandiseId.value = selectedVariant?.id ?? '';
    price.textContent = formatMoney(amount, {locale: 'en-US'}).toString();
    button.setAttribute('aria-disabled', String(!addable));
    button.textContent = addable
      ? 'Add to cart'
      : product.requiresSellingPlan
        ? 'Choose a subscription'
        : selectedVariant
        ? 'Sold out'
        : 'Select options';
    errors.replaceChildren(
      ...formErrors.userErrors.map((error) => {
        const item = document.createElement('li');
        item.textContent = error.message;
        return item;
      }),
    );
  }

  render();
  return store.subscribe(render);
}
```

##### React

```tsx
import {canAddToCart, formatMoney} from '@shopify/hydrogen';

import {openCartDrawer} from '../lib/cart-drawer';
import {useProductForm} from '../lib/product';
import type {ProductData} from '../lib/product-query';

export function AddToCartForm({product}: {product: ProductData}) {
  const {options, selectedVariant, register, formProps, errors, pending} =
    useProductForm();
  const addable = canAddToCart(product, options);
  const price = selectedVariant?.price ?? product.priceRange.minVariantPrice;

  return (
    <form {...formProps({beforeSubmit: openCartDrawer})}>
      <p>{formatMoney(price, {locale: 'en-US'}).toString()}</p>
      <input type="hidden" {...register('merchandiseId', {})} />
      <label>
        Quantity
        <input type="number" min={1} {...register('quantity', {defaultValue: 1})} />
      </label>
      <button
        {...register('addToCart', {})}
        aria-disabled={!addable}
        aria-busy={pending}
        onClick={(event) => {
          if (!addable) event.preventDefault();
        }}
      >
        {addable
          ? 'Add to cart'
          : product.requiresSellingPlan
            ? 'Choose a subscription'
            : selectedVariant
              ? 'Sold out'
              : 'Select options'}
      </button>
      {errors.userErrors.length > 0 ? (
        <ul role="alert">
          {errors.userErrors.map((error, index) => (
            <li key={index}>{error.message}</li>
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
import {canAddToCart, formatMoney} from '@shopify/hydrogen';
import {computed, ref} from 'vue';

import {openCartDrawer} from '../lib/cart-drawer';
import {useProductForm} from '../lib/product';
import type {ProductData} from '../lib/product-query';

const props = defineProps<{product: ProductData}>();
const form = useProductForm();
const quantity = ref(1);

const addable = computed(() => canAddToCart(props.product, form.options));
const price = computed(
  () => form.selectedVariant?.price ?? props.product.priceRange.minVariantPrice,
);

function updateQuantity(event: Event) {
  const next = Number((event.target as HTMLInputElement).value);
  quantity.value = Number.isInteger(next) && next > 0 ? next : 1;
}
</script>

<template>
  <form v-bind="form.formProps({beforeSubmit: openCartDrawer})">
    <p>{{ formatMoney(price, {locale: 'en-US'}).toString() }}</p>
    <input type="hidden" v-bind="form.register('merchandiseId', {})" />
    <label>
      Quantity
      <input
        type="number"
        min="1"
        v-bind="form.register('quantity', {value: quantity})"
        @input="updateQuantity"
      />
    </label>
    <button
      v-bind="form.register('addToCart', {})"
      :aria-disabled="!addable"
      :aria-busy="form.pending.value"
      @click="!addable && $event.preventDefault()"
    >
      {{
        addable
          ? 'Add to cart'
          : product.requiresSellingPlan
            ? 'Choose a subscription'
            : form.selectedVariant
              ? 'Sold out'
              : 'Select options'
      }}
    </button>
    <ul v-if="form.errors.userErrors.length > 0" role="alert">
      <li v-for="(error, index) in form.errors.userErrors" :key="index">
        {{ error.message }}
      </li>
    </ul>
  </form>
</template>
```

In vanilla JavaScript, render the form on the server with `method="post"`, the cart endpoint `/api/cart` as its `action`, a hidden `merchandiseId` input with the selected variant's ID, a submit button named `add-to-cart`, an element with a `data-price` attribute, and an empty `<ul role="alert">`. The form works before your script loads. After hydration, `attachAddToCart()` keeps the variant ID, price, and button text in sync with the store, and submits through the store. In Vue, `pending` is a ref, so read `form.pending.value`.

The form uses the following pieces:

* `register('merchandiseId', {})`: A hidden input with the selected variant's ID.
* `register('quantity', {defaultValue: 1})`: The quantity input. Pass `value` instead of `defaultValue` to control the input yourself.
* `register('addToCart', {})`: The submit button's `name` and `type`.
* `canAddToCart()`: Returns `true` only when a variant is selected, it's available for sale, and the product doesn't require a selling plan. Use it to choose the button text: "Add to cart", "Choose a subscription", "Sold out", or "Select options". The button uses `aria-disabled` instead of `disabled`, so it stays focusable and screen readers still announce its text.
* `errors`: The cart's errors, including the selected variant's line errors. Render them next to the form.

Render prices from the Storefront API fields, not from values that you compute. Show `selectedVariant.price`, and fall back to `product.priceRange.minVariantPrice` when no variant is selected. Format every price with Hydrogen's `formatMoney()`, and pass the locale of the customer's [market](https://shopify.dev/docs/storefronts/hydrogen/markets) instead of `en-US`. Don't build price strings yourself, like `'$' + amount` or `Number(amount).toFixed(2)`.

To add [line item attributes](https://shopify.dev/docs/api/storefront/latest/interfaces/BaseCartLine#fields-attributes), like a gift message, spread `register('attributeValue', {key, value})` on an input. Keys can't be empty, and Shopify reserves keys that start with `_` for internal use.

`openCartDrawer` opens the cart drawer as soon as the customer submits, so they see the optimistic cart. To build the drawer, refer to [Build a cart drawer](https://shopify.dev/docs/storefronts/hydrogen/cart/cart-drawer). To add accelerated checkout next to the button, refer to [Shop Pay](https://shopify.dev/docs/storefronts/hydrogen/shop-pay).

***

## Step 6: Test the product page

Check the following behavior on a product with several options:

* Opening `/products/{handle}?Color=Blue&Size=M` renders the blue, medium variant, with the correct price.
* Resolved selections update the price and the URL without a full page load or a scroll jump.
* The browser's back button leaves the product page, instead of stepping through each selection.
* Sold-out values stay selectable and show as sold out. Combinations that don't exist are disabled.
* With JavaScript disabled, option links load the selected variant, and the add-to-cart form adds it to the cart.
* A product with a single variant shows no option picker.
* Search parameters that aren't options, like `utm_source`, stay in the URL after a selection.

***

## Next steps

[Collections and search\
\
](https://shopify.dev/docs/storefronts/hydrogen/collections-search)

[Build collection and search pages with filters, sorting, and pagination.](https://shopify.dev/docs/storefronts/hydrogen/collections-search)

[Build a cart drawer\
\
](https://shopify.dev/docs/storefronts/hydrogen/cart/cart-drawer)

[Open a drawer that shows the optimistic cart after a customer adds a product.](https://shopify.dev/docs/storefronts/hydrogen/cart/cart-drawer)

[Products reference\
\
](https://shopify.dev/docs/api/hydrogen/latest/products/create-product-form-store)

[Review the product form store, product components, and variant selection helpers.](https://shopify.dev/docs/api/hydrogen/latest/products/create-product-form-store)

***
