---
title: Build collection and search pages
description: >-
  Build Hydrogen collection and search results pages with filters, sorting,
  active filter chips, and pagination that work without JavaScript, and add
  predictive search.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/collections-search'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/collections-search.md'
api_name: hydrogen
---

# Build collection and search pages

This guide shows you how to build a [collection](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections) page with Hydrogen's collection browser. You'll query filtered and sorted products, build a filter and sort form, show active filters, and [paginate results](https://shopify.dev/docs/api/usage/pagination-graphql). Then you'll reuse the same components for a [search](https://shopify.dev/docs/api/storefront/latest/queries/search) results page.

***

## How it works

A collection page's browse state is its filters and sort order. Hydrogen keeps that state in the URL, with Liquid's filter and sort parameters:

* Filters use `filter.*` parameters, like `filter.v.option.color=Blue` or `filter.v.price.gte=20`.
* Sorting uses `sort_by`, like `sort_by=price-ascending`.
* Pagination uses `after` and `before` cursors.

On the server, [`parseCollectionParams()`](https://shopify.dev/docs/api/hydrogen/latest/collections/collection-url-parameters) turns the URL's search parameters into the `filters`, `sortKey`, and `reverse` values that the [Storefront API](https://shopify.dev/docs/api/storefront) expects. `serializeCollectionParams()` converts browse state to URL parameters.

On the client, a collection store holds the browse state. [`createCollectionStore()`](https://shopify.dev/docs/api/hydrogen/latest/collections/create-collection-store) from `@shopify/hydrogen` creates one, and [`CollectionProvider`](https://shopify.dev/docs/api/hydrogen/latest/collections/collection-provider) from `@shopify/hydrogen/react` or `@shopify/hydrogen/vue` creates and provides one for your components. When a customer changes a filter or the sort order, the store updates its state and hands you the new search string. Your app navigates to it, and your server loads the new products. While the new data loads, the state's `status` is `loading`.

The filter form is a real `GET` form, so filtering and sorting work without JavaScript. When JavaScript runs, the store handles the form's submission instead of the browser.

***

## Requirements

* Create a [Storefront API client](https://shopify.dev/docs/storefronts/hydrogen/data-fetching) for each request.
* Create a collection route at `/collections/{handle}`, and a search route at `/search`.
* Build a product card component for your product grid. The React and Vue examples on this page import it as `ProductCard`.
* Set up search and discovery filters in your store. Refer to [Filter products](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/filter-products).

***

## Step 1: Query filtered products

Query a collection's products with the `filters`, `sortKey`, and `reverse` arguments. Request `filters` on the product connection to get the filter groups and values that the collection offers, and `pageInfo` for pagination:

## Collection query

lib/collection-query.ts

```ts
import {gql, parseCollectionParams, type StorefrontApi} from '@shopify/hydrogen';
import type {ProductFilter} from '@shopify/hydrogen/storefront-api-types';


export const PRODUCT_CARD_FRAGMENT = gql(`
  fragment ProductCard on Product {
    id
    handle
    title
    featuredImage {
      url
      altText
      width
      height
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
  }
`);


export const COLLECTION_QUERY = gql(
  `
    query Collection(
      $handle: String!
      $first: Int!
      $after: String
      $sortKey: ProductCollectionSortKeys
      $reverse: Boolean
      $filters: [ProductFilter!]
    ) {
      collection(handle: $handle) {
        id
        handle
        title
        products(
          first: $first
          after: $after
          sortKey: $sortKey
          reverse: $reverse
          filters: $filters
        ) {
          filters {
            id
            label
            type
            presentation
            values {
              id
              label
              count
              input
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
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            ...ProductCard
          }
        }
      }
    }
  `,
  [PRODUCT_CARD_FRAGMENT],
);


export type CollectionData = NonNullable<
  StorefrontApi.ResultOf<typeof COLLECTION_QUERY>['collection']
>;


export function getCollectionVariables(
  handle: string,
  searchParams: URLSearchParams,
): StorefrontApi.VariablesOf<typeof COLLECTION_QUERY> {
  const {filters, sortKey, reverse} = parseCollectionParams(searchParams);


  return {
    handle,
    first: 24,
    after: searchParams.get('after') || undefined,
    filters: filters.length > 0 ? (filters as ProductFilter[]) : undefined,
    sortKey,
    reverse: reverse || undefined,
  };
}
```

`parseCollectionParams()` returns Hydrogen's `ProductFilter` type. Cast it to the generated Storefront API `ProductFilter` type when you pass it as a query variable, as `getCollectionVariables()` does.

Load the collection on the server. Pass the raw search string along as `dataSearch`. The provider uses it to tell which browse state the loaded data belongs to:

## Load the collection

lib/collection.ts

```ts
import type {StorefrontClient} from '@shopify/hydrogen';


import {COLLECTION_QUERY, getCollectionVariables} from './collection-query';


export async function loadCollection(
  storefront: StorefrontClient,
  handle: string,
  searchParams: URLSearchParams,
) {
  const {data, errors} = await storefront.graphql(COLLECTION_QUERY, {
    variables: getCollectionVariables(handle, searchParams),
  });
  if (errors) console.error('Collection query failed', errors);
  if (!data?.collection) return null;


  return {collection: data.collection, dataSearch: searchParams.toString()};
}
```

Call `loadCollection()` from your collection route's [server data loader](https://shopify.dev/docs/storefronts/hydrogen/request-handlers#framework-wiring) with the request's [Storefront API client](https://shopify.dev/docs/storefronts/hydrogen/data-fetching). Respond with a 404 when it returns `null`. Otherwise, render the collection's title and pass the results to the `CollectionBrowser` component that you build in the next step.

In Next.js, `await` the page's `searchParams`, then convert the record with the `toURLSearchParams` helper from [Product pages and variants](https://shopify.dev/docs/storefronts/hydrogen/products) before you call `loadCollection()`.

***

## Step 2: Sync browse state with the URL

Each React router reads the URL and navigates differently, so the React examples in this guide use a small module that wraps your router. It exports a `useCollectionRouter()` hook and a `BrowseLink` component:

## Collection router

## app/lib/collection-router.tsx

##### React Router

```tsx
import type {ReactNode} from 'react';
import {Link, useLocation, useNavigate} from 'react-router';

export function useCollectionRouter() {
  const {pathname, search} = useLocation();
  const navigate = useNavigate();

  return {
    pathname,
    search,
    navigate(href: string, {replace}: {replace: boolean}) {
      void navigate(href, {replace, preventScrollReset: true});
    },
  };
}

type BrowseLinkProps = {href: string; children: ReactNode; 'aria-label'?: string};

export function BrowseLink({href, children, ...props}: BrowseLinkProps) {
  return (
    <Link to={href} preventScrollReset {...props}>
      {children}
    </Link>
  );
}
```

##### Next.js

```tsx
import NextLink from 'next/link';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import type {ReactNode} from 'react';

export function useCollectionRouter() {
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams().toString();

  return {
    pathname,
    search,
    navigate(href: string, {replace}: {replace: boolean}) {
      if (replace) router.replace(href, {scroll: false});
      else router.push(href, {scroll: false});
      router.refresh();
    },
  };
}

type BrowseLinkProps = {href: string; children: ReactNode; 'aria-label'?: string};

export function BrowseLink({href, children, ...props}: BrowseLinkProps) {
  const router = useRouter();
  return (
    <NextLink href={href} scroll={false} onClick={() => router.refresh()} {...props}>
      {children}
    </NextLink>
  );
}
```

In Next.js, the URL can change before the server component payload catches up. `navigate()` and `BrowseLink` call `router.refresh()` after each navigation, so the server renders the products for the new URL.

Wrap the collection content in `CollectionProvider`, or create a store with the core API. Pass the loaded data's handle and search string as `data`, the current URL's search string as `urlSearch`, and navigate when the browse state changes:

## Provide the collection state

## lib/collection-browser.ts

##### Vanilla JavaScript

```ts
import {createCollectionReconciler, createCollectionStore} from '@shopify/hydrogen';

type Options = {handle: string; dataSearch: string};

export function createCollectionBrowser({handle, dataSearch}: Options) {
  const readUrlSearch = () => window.location.search;
  const store = createCollectionStore({
    data: {handle, dataSearch},
    urlSearch: readUrlSearch(),
  });

  // The reconciler builds the new search string from the current URL and the store's state.
  const reconciler = createCollectionReconciler(
    {
      getStore: () => store,
      readUrlSearch,
      emitChange: (search) => {
        const href = `${window.location.pathname}${search}`;
        if (readUrlSearch()) window.location.replace(href);
        else window.location.assign(href);
      },
    },
    readUrlSearch(),
  );
  store.setOnBrowseChange(() => reconciler.handleBrowseChange());

  return store;
}
```

##### React

```tsx
import {CollectionProvider} from '@shopify/hydrogen/react';

import {useCollectionRouter} from '../lib/collection-router';
import {CollectionContent, type CollectionContentProps} from './CollectionContent';

type Props = CollectionContentProps & {handle: string; dataSearch: string};

export function CollectionBrowser({handle, dataSearch, ...props}: Props) {
  const router = useCollectionRouter();

  return (
    <CollectionProvider
      data={{handle, dataSearch}}
      urlSearch={router.search}
      onChange={(search) => {
        router.navigate(`${router.pathname}${search}`, {replace: router.search !== ''});
      }}
    >
      <CollectionContent {...props} />
    </CollectionProvider>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {CollectionProvider} from '@shopify/hydrogen/vue';
import {computed} from 'vue';
import {useRoute, useRouter} from 'vue-router';

import CollectionContent, {type CollectionContentProps} from './CollectionContent.vue';

defineOptions({inheritAttrs: false});

const props = defineProps<CollectionContentProps & {handle: string; dataSearch: string}>();

const route = useRoute();
const router = useRouter();

const urlSearch = computed(() => new URL(route.fullPath, 'http://localhost').search);
const data = computed(() => ({handle: props.handle, dataSearch: props.dataSearch}));

function onChange(search: string) {
  const href = `${route.path}${search}`;
  if (urlSearch.value) void router.replace(href);
  else void router.push(href);
}
</script>

<template>
  <CollectionProvider :data="data" :url-search="urlSearch" @change="onChange">
    <CollectionContent v-bind="props" />
  </CollectionProvider>
</template>
```

The examples push a history entry when the current URL has no search parameters and replace it otherwise. The new search string keeps parameters that the store doesn't own, like UTM tags, and clears the `before` and `after` cursors, so a new browse state starts from its first page.

The Vanilla JavaScript example loads each new browse state with a full page load, so your server renders the products for the new URL.

In Vue, the provider emits a `change` event instead of calling `onChange`. Reload your data when the route changes.

***

## Step 3: Build the filter and sort form

Connect the form to the collection state with `formProps()` from `useCollectionForm()`, or with `store.handleFormSubmit()` in the core API. Then add `method="get"` and an `action`. Without JavaScript, the form submits to your collection route like any `GET` form:

## Collection form

## lib/collection-content.ts

##### Vanilla JavaScript

```ts
import type {AvailableFilter, CollectionStore} from '@shopify/hydrogen';

import {renderActiveFilters} from './active-filters';
import {renderFilterGroup} from './filter-group';
import {renderLoadMore} from './load-more';
import {renderSortSelect} from './sort-select';
import type {SortOption} from './sort-options';

export type CollectionContentOptions = {
  path: string;
  productList: HTMLElement;
  availableFilters: AvailableFilter[];
  pageInfo: {hasNextPage: boolean; endCursor?: string | null};
  sortOptions: SortOption[];
  term?: string;
};

export function mountCollectionContent(
  form: HTMLFormElement,
  store: CollectionStore,
  {path, productList, availableFilters, pageInfo, sortOptions, term}: CollectionContentOptions,
) {
  const state = store.getState();
  const activeFilters = document.createElement('ul');

  form.method = 'get';
  form.action = path;
  if (term) {
    const termInput = Object.assign(document.createElement('input'), {type: 'hidden', name: 'q'});
    termInput.value = term;
    form.append(termInput);
  }
  form.append(
    ...availableFilters.map((filter) => renderFilterGroup(filter, state.filters)),
    renderSortSelect(sortOptions, state),
    activeFilters,
    productList,
  );
  const loadMore = renderLoadMore(pageInfo);
  if (loadMore) form.append(loadMore);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    store.handleFormSubmit(event);
  });

  renderActiveFilters(activeFilters, store, {path, availableFilters});
  store.subscribe(({status}) => {
    const loading = status === 'loading';
    productList.setAttribute('aria-busy', String(loading));
    productList.style.opacity = loading ? '0.6' : '1';
  });
}
```

##### React

```tsx
import {serializeCollectionParams, type AvailableFilter} from '@shopify/hydrogen';
import {useCollection, useCollectionForm} from '@shopify/hydrogen/react';

import type {CollectionData} from '../lib/collection-query';
import type {SortOption} from '../lib/sort-options';
import {ActiveFilters} from './ActiveFilters';
import {FilterGroup} from './FilterGroup';
import {LoadMore} from './LoadMore';
import {ProductCard} from './ProductCard';
import {SortSelect} from './SortSelect';

export type CollectionContentProps = {
  path: string;
  products: CollectionData['products']['nodes'];
  availableFilters: AvailableFilter[];
  pageInfo: {hasNextPage: boolean; endCursor?: string | null};
  sortOptions: SortOption[];
  term?: string;
};

export function CollectionContent({
  path,
  products,
  availableFilters,
  pageInfo,
  sortOptions,
  term,
}: CollectionContentProps) {
  const state = useCollection();
  const {formProps} = useCollectionForm();
  const loading = state.status === 'loading';
  const filterKey = serializeCollectionParams({
    filters: state.filters,
    sortKey: undefined,
    reverse: false,
  }).toString();

  return (
    <form {...formProps()} method="get" action={path}>
      {term ? <input type="hidden" name="q" value={term} /> : null}

      <div key={`${term ?? ''}:${filterKey}`}>
        {availableFilters.map((filter) => (
          <FilterGroup key={filter.id} filter={filter} activeFilters={state.filters} />
        ))}
      </div>

      <SortSelect options={sortOptions} />
      <noscript>
        <button type="submit">Apply</button>
      </noscript>

      <ActiveFilters path={path} availableFilters={availableFilters} />

      <ul aria-busy={loading} style={{opacity: loading ? 0.6 : 1}}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>

      <LoadMore pageInfo={pageInfo} />
    </form>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import type {AvailableFilter} from '@shopify/hydrogen';
import {useCollection, useCollectionForm} from '@shopify/hydrogen/vue';
import {computed} from 'vue';

import type {CollectionData} from '../lib/collection-query';
import type {SortOption} from '../lib/sort-options';
import ActiveFilters from './ActiveFilters.vue';
import FilterGroup from './FilterGroup.vue';
import LoadMore from './LoadMore.vue';
import ProductCard from './ProductCard.vue';
import SortSelect from './SortSelect.vue';

export type CollectionContentProps = {
  path: string;
  products: CollectionData['products']['nodes'];
  availableFilters: AvailableFilter[];
  pageInfo: {hasNextPage: boolean; endCursor?: string | null};
  sortOptions: SortOption[];
  term?: string;
};

defineProps<CollectionContentProps>();

const state = useCollection();
const {formProps} = useCollectionForm();
const loading = computed(() => state.value.status === 'loading');
</script>

<template>
  <form v-bind="formProps()" method="get" :action="path">
    <input v-if="term" type="hidden" name="q" :value="term" />

    <div>
      <FilterGroup
        v-for="filter in availableFilters"
        :key="filter.id"
        :filter="filter"
        :active-filters="state.filters"
      />
    </div>

    <SortSelect :options="sortOptions" />
    <noscript>
      <button type="submit">Apply</button>
    </noscript>

    <ActiveFilters :path="path" :available-filters="availableFilters" />

    <ul :aria-busy="loading" :style="{opacity: loading ? 0.6 : 1}">
      <li v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </li>
    </ul>

    <LoadMore :page-info="pageInfo" />
  </form>
</template>
```

The Vanilla JavaScript examples on this page render with DOM APIs. To keep filtering working without JavaScript, render the same markup on your server, and attach the listeners when the page loads.

In React, filter inputs are uncontrolled. When a customer removes a filter with a link, the inputs need to reset, so the filter subtree has a `key` built from the serialized filter state. Key it on the filter state, not the URL. The URL changes before the provider settles its state, so a URL key remounts the inputs with stale values. The Vue example binds each input's `checked` and `value` to the collection state, so it doesn't need a key.

While new products load, keep showing the current products with reduced opacity. Don't swap them for a loading skeleton.

Render each filter group by its `type`. `PRICE_RANGE` filters use minimum and maximum number inputs, and `LIST` and `BOOLEAN` filters use checkboxes. For non-category filter values, parse `input` and call `serializeCollectionParams()` to build each checkbox's `name` and `value`:

## Filter groups

## lib/filter-group.ts

##### Vanilla JavaScript

```ts
import {
  isFilterInputActive,
  serializeCollectionParams,
  type AvailableFilter,
  type ProductFilter,
} from '@shopify/hydrogen';

export function renderFilterGroup(filter: AvailableFilter, activeFilters: ProductFilter[]) {
  const fieldset = document.createElement('fieldset');
  const legend = document.createElement('legend');
  legend.textContent = filter.label;
  fieldset.append(legend);

  if (filter.type === 'PRICE_RANGE') {
    const price = activeFilters.find((active) => active.price)?.price;
    fieldset.append(
      renderPriceInput('filter.v.price.gte', 'Minimum price', price?.min),
      renderPriceInput('filter.v.price.lte', 'Maximum price', price?.max),
    );
    return fieldset;
  }

  for (const value of filter.values) {
    const entries = filterValueInputParamEntries(value.input);
    if (entries.length !== 1) continue;

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = entries[0].name;
    input.value = entries[0].value;
    input.checked = isFilterInputActive(activeFilters, value.input);
    input.addEventListener('change', () => input.form?.requestSubmit());

    const label = document.createElement('label');
    label.append(input, ` ${value.label} (${value.count})`);
    fieldset.append(label);
  }

  return fieldset;
}

function renderPriceInput(name: string, labelText: string, defaultValue?: number) {
  const initialValue = defaultValue == null ? '' : String(defaultValue);
  const input = document.createElement('input');
  Object.assign(input, {type: 'number', name, min: '0', step: 'any', value: initialValue});

  input.addEventListener('blur', () => {
    if (input.value !== initialValue) input.form?.requestSubmit();
  });
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      input.blur();
    }
  });

  const label = document.createElement('label');
  label.append(labelText, input);
  return label;
}

function filterValueInputParamEntries(input: string) {
  let filter: ProductFilter;
  try {
    filter = JSON.parse(input) as ProductFilter;
  } catch {
    return [];
  }

  if (filter.category) return [];

  return Array.from(
    serializeCollectionParams({filters: [filter], sortKey: undefined, reverse: false}),
    ([name, value]) => ({name, value}),
  );
}
```

##### React

```tsx
import {
  isFilterInputActive,
  serializeCollectionParams,
  type AvailableFilter,
  type ProductFilter,
} from '@shopify/hydrogen';

type Props = {filter: AvailableFilter; activeFilters: ProductFilter[]};

export function FilterGroup({filter, activeFilters}: Props) {
  if (filter.type === 'PRICE_RANGE') {
    const price = activeFilters.find((active) => active.price)?.price;
    return (
      <fieldset>
        <legend>{filter.label}</legend>
        <PriceInput name="filter.v.price.gte" label="Minimum price" defaultValue={price?.min} />
        <PriceInput name="filter.v.price.lte" label="Maximum price" defaultValue={price?.max} />
      </fieldset>
    );
  }

  return (
    <fieldset>
      <legend>{filter.label}</legend>
      {filter.values.map((value) => {
        const entries = filterValueInputParamEntries(value.input);
        if (entries.length !== 1) return null;
        const [{name, value: paramValue}] = entries;

        return (
          <label key={value.id}>
            <input
              type="checkbox"
              name={name}
              value={paramValue}
              defaultChecked={isFilterInputActive(activeFilters, value.input)}
              onChange={(event) => event.currentTarget.form?.requestSubmit()}
            />
            {value.label} ({value.count})
          </label>
        );
      })}
    </fieldset>
  );
}

function PriceInput({
  name,
  label,
  defaultValue,
}: {
  name: string;
  label: string;
  defaultValue?: number;
}) {
  const initialValue = defaultValue == null ? '' : String(defaultValue);

  return (
    <label>
      {label}
      <input
        type="number"
        name={name}
        min="0"
        step="any"
        defaultValue={initialValue}
        onBlur={(event) => {
          if (event.currentTarget.value !== initialValue) {
            event.currentTarget.form?.requestSubmit();
          }
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            event.currentTarget.blur();
          }
        }}
      />
    </label>
  );
}

function filterValueInputParamEntries(input: string) {
  let filter: ProductFilter;
  try {
    filter = JSON.parse(input) as ProductFilter;
  } catch {
    return [];
  }

  if (filter.category) return [];

  return Array.from(
    serializeCollectionParams({filters: [filter], sortKey: undefined, reverse: false}),
    ([name, value]) => ({name, value}),
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {
  isFilterInputActive,
  serializeCollectionParams,
  type AvailableFilter,
  type ProductFilter,
} from '@shopify/hydrogen';
import {computed} from 'vue';

const props = defineProps<{filter: AvailableFilter; activeFilters: ProductFilter[]}>();

const price = computed(() => props.activeFilters.find((active) => active.price)?.price);

const checkboxes = computed(() =>
  props.filter.values.flatMap((value) => {
    const entries = filterValueInputParamEntries(value.input);
    if (entries.length !== 1) return [];
    return [
      {
        ...value,
        name: entries[0].name,
        paramValue: entries[0].value,
        checked: isFilterInputActive(props.activeFilters, value.input),
      },
    ];
  }),
);

function priceValue(bound: 'min' | 'max') {
  const value = price.value?.[bound];
  return value == null ? '' : String(value);
}

function submit(event: Event) {
  (event.target as HTMLInputElement).form?.requestSubmit();
}

function onPriceBlur(event: FocusEvent, bound: 'min' | 'max') {
  if ((event.target as HTMLInputElement).value !== priceValue(bound)) submit(event);
}

function blurInput(event: KeyboardEvent) {
  (event.target as HTMLInputElement).blur();
}

function filterValueInputParamEntries(input: string) {
  let filter: ProductFilter;
  try {
    filter = JSON.parse(input) as ProductFilter;
  } catch {
    return [];
  }

  if (filter.category) return [];

  return Array.from(
    serializeCollectionParams({filters: [filter], sortKey: undefined, reverse: false}),
    ([name, value]) => ({name, value}),
  );
}
</script>

<template>
  <fieldset v-if="filter.type === 'PRICE_RANGE'">
    <legend>{{ filter.label }}</legend>
    <label>
      Minimum price
      <input
        type="number"
        name="filter.v.price.gte"
        min="0"
        step="any"
        :value="priceValue('min')"
        @blur="onPriceBlur($event, 'min')"
        @keydown.enter.prevent="blurInput"
      />
    </label>
    <label>
      Maximum price
      <input
        type="number"
        name="filter.v.price.lte"
        min="0"
        step="any"
        :value="priceValue('max')"
        @blur="onPriceBlur($event, 'max')"
        @keydown.enter.prevent="blurInput"
      />
    </label>
  </fieldset>

  <fieldset v-else>
    <legend>{{ filter.label }}</legend>
    <label v-for="value in checkboxes" :key="value.id">
      <input
        type="checkbox"
        :name="value.name"
        :value="value.paramValue"
        :checked="value.checked"
        @change="submit"
      />
      {{ value.label }} ({{ value.count }})
    </label>
  </fieldset>
</template>
```

Checkboxes submit the form when they change. Price inputs submit when they lose focus, and only if their value changed. Pressing Enter in a price input blurs it, which submits. Don't submit on every keystroke.

The collection query also selects swatch colors and images.

Add a sort `<select>` named `sort_by` that also submits on change. Build each option's value with `getSortByValue()`. Define the options in a shared module that your server code and your components both import:

## Sort options

lib/sort-options.ts

```ts
import {getSortByValue} from '@shopify/hydrogen';


export type SortOption = {label: string; value: string};


export const COLLECTION_SORT_OPTIONS: SortOption[] = [
  {label: 'Featured', value: getSortByValue('COLLECTION_DEFAULT', false)},
  {label: 'Best selling', value: getSortByValue('BEST_SELLING', false)},
  {label: 'Alphabetically, A-Z', value: getSortByValue('TITLE', false)},
  {label: 'Alphabetically, Z-A', value: getSortByValue('TITLE', true)},
  {label: 'Price, low to high', value: getSortByValue('PRICE', false)},
  {label: 'Price, high to low', value: getSortByValue('PRICE', true)},
  {label: 'Date, new to old', value: getSortByValue('CREATED', true)},
];


export const SEARCH_SORT_OPTIONS: SortOption[] = [
  {label: 'Relevance', value: getSortByValue('RELEVANCE', false)},
  {label: 'Price, low to high', value: getSortByValue('PRICE', false)},
  {label: 'Price, high to low', value: getSortByValue('PRICE', true)},
];
```

## Sort select

## lib/sort-select.ts

##### Vanilla JavaScript

```ts
import {getSortByValue, type CollectionState} from '@shopify/hydrogen';

import type {SortOption} from './sort-options';

export function renderSortSelect(options: SortOption[], {sortKey, reverse}: CollectionState) {
  const select = document.createElement('select');
  select.name = 'sort_by';
  select.append(...options.map((option) => new Option(option.label, option.value)));
  select.value = sortKey ? getSortByValue(sortKey, reverse) : options[0].value;
  select.addEventListener('change', () => select.form?.requestSubmit());

  const label = document.createElement('label');
  label.append('Sort by', select);
  return label;
}
```

##### React

```tsx
import {getSortByValue} from '@shopify/hydrogen';
import {useCollection} from '@shopify/hydrogen/react';

import type {SortOption} from '../lib/sort-options';

export function SortSelect({options}: {options: SortOption[]}) {
  const {sortKey, reverse} = useCollection();
  const value = sortKey ? getSortByValue(sortKey, reverse) : options[0].value;

  return (
    <label>
      Sort by
      <select
        key={value}
        name="sort_by"
        defaultValue={value}
        onChange={(event) => event.currentTarget.form?.requestSubmit()}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {getSortByValue} from '@shopify/hydrogen';
import {useCollection} from '@shopify/hydrogen/vue';
import {computed} from 'vue';

import type {SortOption} from '../lib/sort-options';

const props = defineProps<{options: SortOption[]}>();

const state = useCollection();
const selected = computed(() => {
  const {sortKey, reverse} = state.value;
  return sortKey ? getSortByValue(sortKey, reverse) : props.options[0].value;
});

function submit(event: Event) {
  (event.target as HTMLSelectElement).form?.requestSubmit();
}
</script>

<template>
  <label>
    Sort by
    <select name="sort_by" :value="selected" @change="submit">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </label>
</template>
```

The React select is uncontrolled, like the filter inputs, so it has a `key` built from the sort in the collection state. When the customer goes back or forward to a different sort, the select remounts with that value.

The `<noscript>` submit button in the collection form applies filter and sort changes for customers without JavaScript.

***

## Step 4: Show active filters

List the active filters as links that remove them. [`getFilterRemovalUrl()`](https://shopify.dev/docs/api/hydrogen/latest/collections/collection-filters) takes the current search parameters and a filter, and returns a search string without that filter or the pagination cursors. It returns `?` when nothing is left, so link to the bare path in that case.

Label each filter with the matching filter value from the query. `isFilterInputActive()` checks whether a value's `input` matches a filter:

## Filter labels

lib/filter-label.ts

```ts
import {
  isFilterInputActive,
  type AvailableFilter,
  type ProductFilter,
} from '@shopify/hydrogen';


export function getFilterLabel(
  filter: ProductFilter,
  availableFilters: AvailableFilter[],
): string {
  if (filter.price) return 'Price';


  const value = availableFilters
    .flatMap((group) => group.values)
    .find((value) => isFilterInputActive([filter], value.input));
  return value?.label ?? 'Filter';
}


export function getClearFiltersSearch(currentParams: URLSearchParams): string {
  const params = new URLSearchParams(currentParams);
  for (const key of Array.from(params.keys())) {
    if (key.startsWith('filter.')) params.delete(key);
  }
  params.delete('after');
  params.delete('before');
  const search = params.toString();
  return search ? `?${search}` : '';
}
```

Render the chips as links, so they work without JavaScript. The React example renders them with `BrowseLink` from Step 2:

## Active filter chips

## lib/active-filters.ts

##### Vanilla JavaScript

```ts
import {getFilterRemovalUrl, type AvailableFilter, type CollectionStore} from '@shopify/hydrogen';

import {getClearFiltersSearch, getFilterLabel} from './filter-label';

type Options = {path: string; availableFilters: AvailableFilter[]};

export function renderActiveFilters(
  list: HTMLUListElement,
  store: CollectionStore,
  {path, availableFilters}: Options,
) {
  const render = () => {
    const {filters} = store.getState();
    const currentParams = new URLSearchParams(window.location.search);

    list.hidden = filters.length === 0;
    list.replaceChildren(
      ...filters.map((filter) => {
        const removal = getFilterRemovalUrl(currentParams, filter);
        const label = getFilterLabel(filter, availableFilters);
        return renderLink(
          removal === '?' ? path : `${path}${removal}`,
          `${label} ×`,
          `Remove filter: ${label}`,
        );
      }),
      renderLink(`${path}${getClearFiltersSearch(currentParams)}`, 'Clear all'),
    );
  };

  render();
  return store.subscribe(render);
}

function renderLink(href: string, text: string, ariaLabel?: string) {
  const link = document.createElement('a');
  link.href = href;
  link.textContent = text;
  if (ariaLabel) link.setAttribute('aria-label', ariaLabel);

  const item = document.createElement('li');
  item.append(link);
  return item;
}
```

##### React

```tsx
import {getFilterRemovalUrl, type AvailableFilter} from '@shopify/hydrogen';
import {useCollection} from '@shopify/hydrogen/react';

import {BrowseLink, useCollectionRouter} from '../lib/collection-router';
import {getClearFiltersSearch, getFilterLabel} from '../lib/filter-label';

type Props = {path: string; availableFilters: AvailableFilter[]};

export function ActiveFilters({path, availableFilters}: Props) {
  const {filters} = useCollection();
  const currentParams = new URLSearchParams(useCollectionRouter().search);

  if (filters.length === 0) return null;

  return (
    <ul>
      {filters.map((filter) => {
        const removal = getFilterRemovalUrl(currentParams, filter);
        const label = getFilterLabel(filter, availableFilters);
        return (
          <li key={JSON.stringify(filter)}>
            <BrowseLink
              href={removal === '?' ? path : `${path}${removal}`}
              aria-label={`Remove filter: ${label}`}
            >
              {label} ×
            </BrowseLink>
          </li>
        );
      })}
      <li>
        <BrowseLink href={`${path}${getClearFiltersSearch(currentParams)}`}>Clear all</BrowseLink>
      </li>
    </ul>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {getFilterRemovalUrl, type AvailableFilter, type ProductFilter} from '@shopify/hydrogen';
import {useCollection} from '@shopify/hydrogen/vue';
import {computed} from 'vue';
import {RouterLink, useRoute} from 'vue-router';

import {getClearFiltersSearch, getFilterLabel} from '../lib/filter-label';

const props = defineProps<{path: string; availableFilters: AvailableFilter[]}>();

const filters = useCollection((state) => state.filters);
const route = useRoute();
const currentParams = computed(() => new URL(route.fullPath, 'http://localhost').searchParams);

function removalHref(filter: ProductFilter) {
  const removal = getFilterRemovalUrl(currentParams.value, filter);
  return removal === '?' ? props.path : `${props.path}${removal}`;
}
</script>

<template>
  <ul v-if="filters.length > 0">
    <li v-for="filter in filters" :key="JSON.stringify(filter)">
      <RouterLink
        :to="removalHref(filter)"
        :aria-label="`Remove filter: ${getFilterLabel(filter, availableFilters)}`"
      >
        {{ getFilterLabel(filter, availableFilters) }} ×
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="`${path}${getClearFiltersSearch(currentParams)}`">Clear all</RouterLink>
    </li>
  </ul>
</template>
```

The chips read `filters` from the provider's state, not from the form, so they update as soon as a customer changes a filter.

***

## Step 5: Paginate results

Render "load more" as a link that carries the next page's cursor in `after`. Start from the current search parameters, so the filters and sort order stay applied:

## Load more link

## lib/load-more.ts

##### Vanilla JavaScript

```ts
type PageInfo = {hasNextPage: boolean; endCursor?: string | null};

export function renderLoadMore(pageInfo: PageInfo) {
  if (!pageInfo.hasNextPage || !pageInfo.endCursor) return null;

  const params = new URLSearchParams(window.location.search);
  params.set('after', pageInfo.endCursor);

  const link = document.createElement('a');
  link.href = `${window.location.pathname}?${params}`;
  link.textContent = 'Load more';
  return link;
}
```

##### React

```tsx
import {BrowseLink, useCollectionRouter} from '../lib/collection-router';

type Props = {pageInfo: {hasNextPage: boolean; endCursor?: string | null}};

export function LoadMore({pageInfo}: Props) {
  const {pathname, search} = useCollectionRouter();

  if (!pageInfo.hasNextPage || !pageInfo.endCursor) return null;

  const params = new URLSearchParams(search);
  params.set('after', pageInfo.endCursor);

  return <BrowseLink href={`${pathname}?${params}`}>Load more</BrowseLink>;
}
```

##### Vue

```html
<script setup lang="ts">
import {computed} from 'vue';
import {RouterLink, useRoute} from 'vue-router';

const props = defineProps<{pageInfo: {hasNextPage: boolean; endCursor?: string | null}}>();

const route = useRoute();
const href = computed(() => {
  const {hasNextPage, endCursor} = props.pageInfo;
  if (!hasNextPage || !endCursor) return null;

  const params = new URL(route.fullPath, 'http://localhost').searchParams;
  params.set('after', endCursor);
  return `${route.path}?${params}`;
});
</script>

<template>
  <RouterLink v-if="href" :to="href">Load more</RouterLink>
</template>
```

The link loads the next page on the server, which replaces the current products. To append products in place instead, fetch the next page's data when a customer clicks the link, for example with a React Router fetcher, and keep the link as the fallback for customers without JavaScript.

***

## Step 6: Add a search results page

A search results page uses the same components with a few differences:

* The search term is in the `q` parameter.
* The provider's `handle` is `search:` followed by the term, so each term has its own browse state.
* The query uses the Storefront API `search` field. It returns `productFilters` instead of `filters`, and a `totalCount`.
* Search supports only the `RELEVANCE` and `PRICE` sort keys. Map other sort keys to `RELEVANCE`.
* A blank term returns empty results without querying the Storefront API.

Query search results with a helper that returns `null` for a blank term:

## Search query

lib/search-query.ts

```ts
import {gql, parseCollectionParams, type StorefrontApi} from '@shopify/hydrogen';
import type {ProductFilter} from '@shopify/hydrogen/storefront-api-types';


import {PRODUCT_CARD_FRAGMENT} from './collection-query';


export const SEARCH_QUERY = gql(
  `
    query Search(
      $term: String!
      $first: Int!
      $after: String
      $sortKey: SearchSortKeys
      $reverse: Boolean
      $productFilters: [ProductFilter!]
    ) {
      search(
        query: $term
        types: [PRODUCT]
        first: $first
        after: $after
        sortKey: $sortKey
        reverse: $reverse
        productFilters: $productFilters
      ) {
        totalCount
        productFilters {
          id
          label
          type
          presentation
          values {
            id
            label
            count
            input
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          __typename
          ... on Product {
            ...ProductCard
          }
        }
      }
    }
  `,
  [PRODUCT_CARD_FRAGMENT],
);


export function getSearchVariables(
  searchParams: URLSearchParams,
): StorefrontApi.VariablesOf<typeof SEARCH_QUERY> | null {
  const term = (searchParams.get('q') ?? '').trim();
  if (!term) return null;


  const {filters, sortKey, reverse} = parseCollectionParams(searchParams);
  const searchSortKey = sortKey === 'PRICE' ? 'PRICE' : 'RELEVANCE';


  return {
    term,
    first: 24,
    after: searchParams.get('after') || undefined,
    productFilters: filters.length > 0 ? (filters as ProductFilter[]) : undefined,
    sortKey: searchSortKey,
    reverse: searchSortKey === 'PRICE' ? reverse || undefined : undefined,
  };
}
```

Load the results on the server with a helper that returns the term, the raw search string, and the results:

## Load search results

lib/search.ts

```ts
import type {StorefrontClient} from '@shopify/hydrogen';


import {SEARCH_QUERY, getSearchVariables} from './search-query';


export async function loadSearch(storefront: StorefrontClient, searchParams: URLSearchParams) {
  const term = (searchParams.get('q') ?? '').trim();
  const dataSearch = searchParams.toString();
  const variables = getSearchVariables(searchParams);
  if (!variables) return {term, dataSearch, search: null};


  const {data, errors} = await storefront.graphql(SEARCH_QUERY, {variables});
  if (errors) console.error('Search query failed', errors);


  return {term, dataSearch, search: data?.search ?? null};
}


export type SearchResultsData = Awaited<ReturnType<typeof loadSearch>>;
```

Call `loadSearch()` from your search route's server code, like `loadCollection()`. `search.nodes` can hold several resource types, so the query requests `__typename`, and the UI filters the nodes to products. Render a search form for the term, and pass the results to the same collection browser:

## Search results page

## lib/search-results.ts

##### Vanilla JavaScript

```ts
import {createCollectionBrowser} from './collection-browser';
import {mountCollectionContent} from './collection-content';
import type {SearchResultsData} from './search';
import {SEARCH_SORT_OPTIONS} from './sort-options';

// The search form is plain HTML: <form action="/search" method="get" role="search"> with an input named q.
export function mountSearchResults(
  form: HTMLFormElement,
  productList: HTMLElement,
  {term, dataSearch, search}: SearchResultsData,
) {
  if (!search) return;

  const store = createCollectionBrowser({handle: `search:${term}`, dataSearch});
  mountCollectionContent(form, store, {
    path: '/search',
    term,
    productList,
    availableFilters: search.productFilters,
    pageInfo: search.pageInfo,
    sortOptions: SEARCH_SORT_OPTIONS,
  });
}
```

##### React

```tsx
import type {SearchResultsData} from '../lib/search';
import {SEARCH_SORT_OPTIONS} from '../lib/sort-options';
import {CollectionBrowser} from './CollectionBrowser';

export function SearchResults({term, dataSearch, search}: SearchResultsData) {
  return (
    <>
      <h1>Search</h1>
      <form action="/search" method="get" role="search">
        <label htmlFor="search-term">Search products</label>
        <input id="search-term" type="search" name="q" defaultValue={term} key={term} />
        <button type="submit">Search</button>
      </form>

      {search ? (
        <CollectionBrowser
          handle={`search:${term}`}
          path="/search"
          term={term}
          dataSearch={dataSearch}
          products={search.nodes.filter((node) => node.__typename === 'Product')}
          availableFilters={search.productFilters}
          pageInfo={search.pageInfo}
          sortOptions={SEARCH_SORT_OPTIONS}
        />
      ) : null}
    </>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {computed} from 'vue';

import type {SearchResultsData} from '../lib/search';
import {SEARCH_SORT_OPTIONS} from '../lib/sort-options';
import CollectionBrowser from './CollectionBrowser.vue';

const props = defineProps<{
  term: string;
  dataSearch: string;
  search: SearchResultsData['search'];
}>();

const products = computed(
  () => props.search?.nodes.filter((node) => node.__typename === 'Product') ?? [],
);
</script>

<template>
  <h1>Search</h1>
  <form action="/search" method="get" role="search">
    <label for="search-term">Search products</label>
    <input id="search-term" :key="term" type="search" name="q" :value="term" />
    <button type="submit">Search</button>
  </form>

  <CollectionBrowser
    v-if="search"
    :handle="`search:${term}`"
    path="/search"
    :term="term"
    :data-search="dataSearch"
    :products="products"
    :available-filters="search.productFilters"
    :page-info="search.pageInfo"
    :sort-options="SEARCH_SORT_OPTIONS"
  />
</template>
```

Keep the search form separate from the filter form. The search form starts a new search, and the filter form refines the current one. Because the collection content receives the `term`, it adds a hidden `q` input to the filter form, so filtering keeps the search term. In React and Vue, the search input's `key` resets it when the term changes through navigation. To submit the search form without a full page load, use your router's form component, like `Form` from `react-router` or `next/form`.

***

## Step 7: Add predictive search

[Predictive search](https://shopify.dev/docs/api/storefront/latest/queries/predictiveSearch) shows suggestions as customers type. It's optional, and it enhances the search page from Step 6 instead of replacing it. Hydrogen provides a server handler, a client store that debounces input and drops stale responses, and React and Vue bindings in `@shopify/hydrogen/react` and `@shopify/hydrogen/vue`. You build the search UI.

Create the handler in a server-only module, and add it to the `handlers` array that you pass to [`handleShopifyRoutes()`](https://shopify.dev/docs/storefronts/hydrogen/request-handlers). It serves `GET /api/predictive-search` with the same request-scoped Storefront API client as your other handlers:

## Predictive search handlers

lib/predictive-search-handlers.ts

```ts
import {createPredictiveSearchServerHandlers} from '@shopify/hydrogen';


export const predictiveSearchHandlers = createPredictiveSearchServerHandlers({
  types: ['PRODUCT'],
});
```

Create `lib/route-templates.ts` as shown in [Routing](https://shopify.dev/docs/storefronts/hydrogen/routing#step-1-create-the-manifest). In your search UI, create a predictive search store, call `search()` as the customer types, and render the results. In React and Vue, wrap the input and results in [`PredictiveSearchProvider`](https://shopify.dev/docs/api/hydrogen/latest/predictive-search/predictive-search-provider), and read the results with `usePredictiveSearch()`. With the core API, create the store with [`createPredictiveSearchStore()`](https://shopify.dev/docs/api/hydrogen/latest/predictive-search/create-predictive-search-store):

## Predictive search

## lib/predictive-search.ts

##### Vanilla JavaScript

```ts
import {createPredictiveSearchStore, getPredictiveSearchItemUrl} from '@shopify/hydrogen';

import {routeTemplates} from './route-templates';

// The form is plain HTML: <form action="/search" method="get" role="search"> with an input named q.
export function mountPredictiveSearch(form: HTMLFormElement, results: HTMLUListElement) {
  const store = createPredictiveSearchStore({limit: 5, types: ['PRODUCT']});
  const input = form.elements.namedItem('q') as HTMLInputElement;

  input.addEventListener('input', () => void store.search(input.value));

  store.subscribe(({result}) => {
    results.replaceChildren(
      ...result.items.products.map((product) => {
        const link = document.createElement('a');
        link.href = getPredictiveSearchItemUrl(product, {routes: routeTemplates, term: result.term});
        link.textContent = product.title;

        const item = document.createElement('li');
        item.append(link);
        return item;
      }),
    );
  });

  return () => store.destroy();
}
```

##### React

```tsx
import {getPredictiveSearchItemUrl} from '@shopify/hydrogen';
import {
  PredictiveSearchProvider,
  usePredictiveSearch,
  usePredictiveSearchForm,
} from '@shopify/hydrogen/react';

import {routeTemplates} from '../lib/route-templates';

export function PredictiveSearch() {
  return (
    <PredictiveSearchProvider limit={5} types={['PRODUCT']}>
      <SearchForm />
      <Results />
    </PredictiveSearchProvider>
  );
}

function SearchForm() {
  const {formProps, register} = usePredictiveSearchForm();
  return (
    <form {...formProps()} role="search">
      <label htmlFor="predictive-search-term">Search products</label>
      <input id="predictive-search-term" type="search" {...register('query')} />
      <button type="submit">Search</button>
    </form>
  );
}

function Results() {
  const {result} = usePredictiveSearch();
  const {term, items} = result;
  return (
    <ul aria-live="polite">
      {items.products.map((product) => (
        <li key={product.id}>
          <a href={getPredictiveSearchItemUrl(product, {routes: routeTemplates, term})}>
            {product.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import {getPredictiveSearchItemUrl} from '@shopify/hydrogen';
import {usePredictiveSearch, usePredictiveSearchForm} from '@shopify/hydrogen/vue';

import {routeTemplates} from '../lib/route-templates';

// Render this component inside <PredictiveSearchProvider :limit="5" :types="['PRODUCT']">.
const {formProps, register} = usePredictiveSearchForm();
const result = usePredictiveSearch((state) => state.result);
</script>

<template>
  <form v-bind="formProps()">
    <label for="predictive-search-term">Search products</label>
    <input id="predictive-search-term" v-bind="register('query')" />
    <button type="submit">Search</button>
  </form>

  <ul aria-live="polite">
    <li v-for="product in result.items.products" :key="product.id">
      <a :href="getPredictiveSearchItemUrl(product, {routes: routeTemplates, term: result.term})">
        {{ product.title }}
      </a>
    </li>
  </ul>
</template>
```

In Vue, composables read the provider through injection, so render `PredictiveSearchProvider` in a parent component, and use the composables in a child component like `PredictiveSearchForm.vue`. `formProps()` sets the form's `action`, `method`, and `role`, and `register('query')` sets the input's `name` and `type`.

Follow these rules so that search keeps working and Shopify attributes it correctly:

* Keep the form's native submission. `formProps()` submits `GET /search`, so customers without JavaScript still reach full results.
* Build every result link with [`getPredictiveSearchItemUrl()`](https://shopify.dev/docs/api/hydrogen/latest/predictive-search/search-result-urls), and pass `term`. The helper uses your route templates and keeps the tracking parameters that Shopify uses to attribute sales to searches. If your storefront uses market path prefixes, then also pass `pathPrefix`.
* Don't publish an analytics event for suggestions. The tracking parameters carry the attribution, and your search results page publishes its own search view event.
* Don't add your own debounce. The store already waits for typing to pause.

To check the handler, open `/api/predictive-search?q=shirt` on your running storefront. The response is JSON with the matching products. To learn how Shopify attributes searches, refer to [Search tracking](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/search-discovery/search-tracking).

***

## Next steps

[Product pages and variants\
\
](https://shopify.dev/docs/storefronts/hydrogen/products)

[Build product pages that resolve variants from the URL.](https://shopify.dev/docs/storefronts/hydrogen/products)

[Analytics and consent\
\
](https://shopify.dev/docs/storefronts/hydrogen/analytics)

[Publish collection and search view events to Shopify analytics.](https://shopify.dev/docs/storefronts/hydrogen/analytics)

***
