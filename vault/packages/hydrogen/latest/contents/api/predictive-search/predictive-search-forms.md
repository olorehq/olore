---
title: Predictive search forms
description: >-
  The predictive search form functions return attributes for a search form and
  its search input, and read the search term from a submitted form. Use these
  functions to build a search form that works without JavaScript and searches as
  the customer types, in DOM code or in UI frameworks without Hydrogen bindings.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/predictive-search/predictive-search-forms
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/predictive-search/predictive-search-forms.md
api_name: hydrogen
---

# Predictive search forms

The predictive search form functions return attributes for a search form and its search input, and read the search term from a submitted form. Use these functions to build a search form that works without JavaScript and searches as the customer types, in DOM code or in UI frameworks without Hydrogen bindings.

React and Vue apps use `usePredictiveSearchForm` inside [`PredictiveSearchProvider`](https://shopify.dev/docs/api/hydrogen/latest/predictive-search/predictive-search-provider).

Import `getPredictiveSearchFormAttributes`, `createPredictiveSearchFormRegister`, and `readPredictiveSearchFormTerm` from `@shopify/hydrogen`.

***

## Form attributes

## get​Predictive​Search​Form​Attributes(**[action](#getpredictivesearchformattributes-propertydetail-action)**​)

Returns the attributes for a predictive search form that works without JavaScript.

### Parameters

* **action**

  **string**

  **Default: "/search"**

  Search page path that the form submits to. Defaults to `/search`.

### Returns

* **PredictiveSearchFormAttributes**

  Attributes that submit the search term to the search page as a GET request.

### PredictiveSearchFormAttributes

Attributes to spread on a predictive search form.

* action

  Search page path that receives the submitted search term. Defaults to \`/search\`.

  ```ts
  string
  ```

* method

  Submits the form as a GET request, which puts the search term in the URL.

  ```ts
  'get'
  ```

* role

  Marks the form as a search landmark for assistive technology.

  ```ts
  'search'
  ```

### Examples

* #### Set search form attributes

  ##### Description

  Set the attributes from \`getPredictiveSearchFormAttributes()\` on a form element. The form submits its \`q\` input to the search page as a GET request. A server-rendered form with the attributes and a \`q\` input works without JavaScript.

  ##### TypeScript

  ```ts
  import { getPredictiveSearchFormAttributes } from "@shopify/hydrogen";

  const { action, method, role } = getPredictiveSearchFormAttributes("/search");

  const form = document.createElement("form");
  form.action = action;
  form.method = method;
  form.setAttribute("role", role);
  ```

***

## Search input

## create​Predictive​Search​Form​Register()

Creates a function that returns the attributes for the search input of a predictive search form. Use the function in DOM code or in UI frameworks without Hydrogen bindings. In React and Vue, use `usePredictiveSearchForm`.

### Returns

* **PredictiveSearchFormRegister**

  A function that takes `query` and returns the search input attributes.

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

* #### Set up the search input

  ##### Description

  Set the search input attributes on an input element. The attributes name the input \`q\` and turn off autocomplete, automatic capitalization, and spell checking.

  ##### TypeScript

  ```ts
  import { createPredictiveSearchFormRegister } from "@shopify/hydrogen";

  const register = createPredictiveSearchFormRegister();
  const { name, type, autoComplete, autoCapitalize, spellCheck } = register("query");

  const input = document.createElement("input");
  input.name = name;
  input.type = type;
  input.autocomplete = autoComplete;
  input.autocapitalize = autoCapitalize;
  input.spellcheck = spellCheck;
  ```

***

## Submitted search term

## read​Predictive​Search​Form​Term(**[formData](#readpredictivesearchformterm-propertydetail-formdata)**​)

Reads the search term from a submitted predictive search form.

### Parameters

* **form​Data**

  **FormData**

  **required**

  Form data from the submitted search form.

### Returns**string**

* The search term, or an empty string when the form data has no `q` text value.

### Examples

* #### Search on form submit

  ##### Description

  Stop the default form submission and search for the submitted term. This example reads the term from the form data and passes the term to the store's \`search()\` method.

  ##### TypeScript

  ```ts
  import { createPredictiveSearchStore, readPredictiveSearchFormTerm } from "@shopify/hydrogen";

  const store = createPredictiveSearchStore();
  const form = document.querySelector<HTMLFormElement>("form[role=search]");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const term = readPredictiveSearchFormTerm(new FormData(form));
    void store.search(term);
  });
  ```

***
