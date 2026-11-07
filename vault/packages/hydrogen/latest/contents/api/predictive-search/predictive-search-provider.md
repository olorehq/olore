---
title: Predictive search provider
description: >-
  The PredictiveSearchProvider component runs predictive search for the React or
  Vue components inside the provider. Use the provider with the predictive
  search hooks to build a search form, show results, and clear results.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/predictive-search/predictive-search-provider
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/predictive-search/predictive-search-provider.md
api_name: hydrogen
---

# Predictive search provider

The `PredictiveSearchProvider` component runs predictive search for the React or Vue components inside the provider. Use the provider with the predictive search hooks to build a search form, show results, and clear results.

To add search as you type to your search page, refer to [Add predictive search](https://shopify.dev/docs/storefronts/hydrogen/collections-search#step-7-add-predictive-search).

Import `PredictiveSearchProvider`, `usePredictiveSearch`, `usePredictiveSearchActions`, and `usePredictiveSearchForm` from `@shopify/hydrogen/react` or `@shopify/hydrogen/vue`.

Call the hooks and composables inside the provider.

***

## Properties

Store options, the search page path, and the content that uses the predictive search hooks.

Changing a store option clears the current term and results. The provider compares `types` and `searchableFields` by value, which lets you pass new arrays on each render.

* **children**

  **ReactNode**

  Content that uses the predictive search hooks.

* **debounce​In​Ms**

  **number**

  Milliseconds to wait after the latest term change before searching.

  Defaults to `150`. Pass `0` to search right away. Negative and non-finite values use the default.

* **fetch**

  **{ (input: RequestInfo | URL, init?: RequestInit): Promise\<Response>; (input: string | Request | URL, init?: RequestInit): Promise\<Response>; }**

  Function that sends search requests. Defaults to the global `fetch`. Pass a function for tests or for runtimes without a global `fetch`.

* **limit**

  **number**

  Maximum number of results, from 1 to 10. The server handlers clamp other values to that range.

* **limit​Scope**

  **PredictiveSearchLimitScope**

  Whether the limit applies to each result type or to all result types combined.

* **min​Term​Length**

  **number**

  Number of characters a term needs, after trimming, before the store searches.

  Defaults to `1`. Negative and non-finite values use the default.

* **predictive​Search​Endpoint**

  **string**

  Route that returns predictive search results as JSON, in the shape that `createPredictiveSearchServerHandlers` returns.

  Defaults to `/api/predictive-search`.

* **searchable​Fields**

  **SearchableField\[]**

  Fields to search for page, article, and collection results.

* **search​Action**

  **string**

  Search page path that forms from `usePredictiveSearchForm` submit to. Defaults to `/search`.

* **types**

  **PredictiveSearchType\[]**

  Result types to include.

* **unavailable​Products**

  **SearchUnavailableProductsType**

  Whether results hide unavailable products, show them, or list them last.

### Examples

* #### Wrap search UI in the provider in React

  ##### Description

  Search only products, with up to five results, for every search component inside the provider. This example sets \`searchAction\` to \`/search\` for submissions without JavaScript.

  ##### React

  ```tsx
  import { PredictiveSearchProvider } from "@shopify/hydrogen/react";
  import type { ReactNode } from "react";

  export function SearchAside({ children }: { children: ReactNode }) {
    return (
      <PredictiveSearchProvider limit={5} types={["PRODUCT"]} searchAction="/search">
        {children}
      </PredictiveSearchProvider>
    );
  }
  ```

* #### Wrap search UI in the provider in Vue

  ##### Description

  Search only products, with up to five results, for every search component in the default slot. This example sets \`search-action\` to \`/search\` for submissions without JavaScript.

  ##### Vue

  ```vue
  <script setup lang="ts">
  import { PredictiveSearchProvider } from "@shopify/hydrogen/vue";
  </script>

  <template>
    <PredictiveSearchProvider :limit="5" :types="['PRODUCT']" search-action="/search">
      <slot />
    </PredictiveSearchProvider>
  </template>
  ```

***

## Search state

## use​Predictive​Search(**[selector](#usepredictivesearch-propertydetail-selector)**​,**[isEqual](#usepredictivesearch-propertydetail-isequal)**​)

Returns the search term, status, results, and error, and re-renders the component on each change.

Pass a selector to read one value, such as the status, and re-render only when that value changes. The hook compares selected values by reference unless you pass an equality function. The hook throws an error outside a `PredictiveSearchProvider`.

### Parameters

* **selector**

  **(state: PredictiveSearchState) => S**

  Function that picks the value to return from the search state.

* **is​Equal**

  **(a: S, b: S) => boolean**

  Function that compares two selected values. Return `true` to skip the re-render.

### Returns

* **S = PredictiveSearchState**

  The search state, or the value that your selector picks.

### PredictiveSearchState

Current search term, status, results, and error of a predictive search.

* error

  Message from the latest failed search, or \`null\` when the current search hasn't failed. A custom endpoint sets the message with a JSON body of \`{error: {message}}\`.

  ```ts
  string | null
  ```

* result

  Results of the latest successful search. Previous results stay in place while a new search loads and after a search fails. The idle state holds empty results.

  ```ts
  TData
  ```

* status

  Status of the search for the current term.

  ```ts
  PredictiveSearchStatus
  ```

* term

  Latest search term, without surrounding whitespace.

  ```ts
  string
  ```

### PredictiveSearchStatus

Status of the current search.

```ts
"idle" | "loading" | "success" | "error"
```

### Examples

* #### Render predictive results

  ##### Description

  Show a loading message, an alert on error, or a list of matching products. This example reads the search status and results with \`usePredictiveSearch\`.

  ##### React

  ```tsx
  import { usePredictiveSearch } from "@shopify/hydrogen/react";

  export function PredictiveResults() {
    const { status, result, error } = usePredictiveSearch();

    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p role="alert">{error}</p>;
    if (!result.total) return null;

    return (
      <ul>
        {result.items.products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    );
  }
  ```

***

## Search actions

## use​Predictive​Search​Actions()

Returns methods that search for a term and clear the results of the provider's predictive search. Use the hook in components that start searches without reading results.

The methods keep the same identity across re-renders and keep working after a store option changes. The hook throws an error outside a `PredictiveSearchProvider`.

### Returns

* **PredictiveSearchActions**

  Methods that search for a term and clear the results.

### PredictiveSearchActions

Methods that search for a term and clear the results.

* clear

  Cancels any pending search and returns the store to the idle state with no term and empty results. Call \`clear()\` when the customer closes the search UI.

  ```ts
  () => void
  ```

* search

  Searches for a term after the debounce delay. Call the method on every keystroke. Each call cancels the previous pending search. A term shorter than the minimum length, after trimming, returns the store to \`idle\` with empty results. Otherwise, the status changes to \`loading\` until the search ends with \`success\` or \`error\`. Responses for earlier terms never replace newer results. The returned promise resolves when the search ends, or when a later search, \`clear()\`, or \`destroy()\` cancels the search.

  ```ts
  (term: string) => Promise<void>
  ```

### Examples

* #### Clear results on close

  ##### Description

  Clear the store before closing the search UI. This example calls \`clear()\` from \`usePredictiveSearchActions\`.

  ##### React

  ```tsx
  import { usePredictiveSearchActions } from "@shopify/hydrogen/react";

  export function CloseSearchButton({ onClose }: { onClose: () => void }) {
    const { clear } = usePredictiveSearchActions();

    function closeSearch() {
      clear();
      onClose();
    }

    return (
      <button type="button" onClick={closeSearch}>
        Close
      </button>
    );
  }
  ```

***

## Search form

## use​Predictive​Search​Form()

Returns functions that connect a search form and its search input to the provider's predictive search. The form submits to the search page without JavaScript, and the search input searches as the customer types.

Spread `formProps()` on the form and `register("query")` on the input. In the `onSubmit` and `onChange` callbacks, call `event.preventDefault()` to skip the automatic submission or search. The hook throws an error outside a `PredictiveSearchProvider`.

### Returns

* **PredictiveSearchFormResult**

  Functions that return the search form attributes and the search input attributes.

### PredictiveSearchFormResult

Functions that return attributes for a predictive search form and its search input.

* formProps

  Returns the attributes for the search form. By default, submitting the form opens the search page at the provider's search action. Pass \`preventDefault: true\` to run the search in the browser and stay on the current page.

  ```ts
  (options?: PredictiveSearchFormPropsOptions) => FormHTMLAttributes<HTMLFormElement>
  ```

* register

  Returns the attributes for the search input, which searches as the customer types. Pass \`query\`. Any other field name throws an error.

  ```ts
  PredictiveSearchFormRegister
  ```

### PredictiveSearchFormPropsOptions

Form attributes and submit behavior for the search form. Any standard form attribute works. Attributes that you pass override the default action, method, and role.

```ts
Omit<
  FormHTMLAttributes<HTMLFormElement>,
  "onSubmit"
> & PredictiveSearchFormSubmitOptions
```

### PredictiveSearchFormSubmitOptions

Submit behavior for the search form.

* onSubmit

  Runs on submit with the event and the search term. Call \`event.preventDefault()\` to cancel both the page navigation and the browser search.

  ```ts
  (event: SubmitEvent<HTMLFormElement>, term: string) => void
  ```

* preventDefault

  Pass \`true\` to run the search in the browser on submit and stay on the current page. Defaults to \`false\`.

  ```ts
  boolean
  ```

### PredictiveSearchFormRegister

Returns the attributes for the search input of a predictive search form. Pass \`query\`. Any other field name throws an error. The attribute keys use React casing. In DOM code, set each value on the matching lowercase property, such as \`autocomplete\`.



### PredictiveSearchQueryInputAttributes

Attributes to spread on the search input of a predictive search form.

* autoCapitalize

  Turns off automatic capitalization of the search term.

  ```ts
  'off'
  ```

* autoComplete

  Turns off browser autocomplete.

  ```ts
  'off'
  ```

* name

  Sends the search term as the \`q\` URL parameter when the form submits.

  ```ts
  'q'
  ```

* spellCheck

  Turns off spell checking.

  ```ts
  false
  ```

* type

  Renders the input as a search field.

  ```ts
  'search'
  ```

### Examples

* #### Build a search form in React

  ##### Description

  Render a form and query input with \`usePredictiveSearchForm\` from \`@shopify/hydrogen/react\`. The input searches as the customer types.

  ##### React

  ```tsx
  import { usePredictiveSearchForm } from "@shopify/hydrogen/react";

  export function PredictiveSearchForm() {
    const { formProps, register } = usePredictiveSearchForm();

    return (
      <form {...formProps()}>
        <input {...register("query", { placeholder: "Search", "aria-label": "Search products" })} />
        <button type="submit">Search</button>
      </form>
    );
  }
  ```

* #### Build a search form in Vue

  ##### Description

  Bind a form and query input with \`usePredictiveSearchForm\` from \`@shopify/hydrogen/vue\`. This example applies the form and input attribute objects with \`v-bind\`.

  ##### Vue

  ```vue
  <script setup lang="ts">
  import { usePredictiveSearchForm } from "@shopify/hydrogen/vue";

  const { formProps, register } = usePredictiveSearchForm();
  </script>

  <template>
    <form v-bind="formProps()">
      <input v-bind="register('query', { placeholder: 'Search', 'aria-label': 'Search products' })" />
      <button type="submit">Search</button>
    </form>
  </template>
  ```

***

## Vue bindings

* The Vue provider renders its default slot.
* The Vue `usePredictiveSearch` composable returns a read-only ref. Read `.value` in script code.
* The Vue `usePredictiveSearchForm` composable searches on each input event. Pass an `onInput` callback to `register()`. The form callbacks receive native DOM events.

***
