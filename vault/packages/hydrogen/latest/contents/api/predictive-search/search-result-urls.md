---
title: Search result URLs
description: >-
  The search result URL functions build links for predictive search results and
  search pages. Use these functions to link each result to its page and keep the
  result's tracking parameters in the link.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/predictive-search/search-result-urls
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/predictive-search/search-result-urls.md
api_name: hydrogen
---

# Search result URLs

The search result URL functions build links for predictive search results and search pages. Use these functions to link each result to its page and keep the result's tracking parameters in the link.

Import `getPredictiveSearchItemUrl` and `getSearchResultUrl` from `@shopify/hydrogen`.

***

## Predictive result links

## get​Predictive​Search​Item​Url(**[item](#getpredictivesearchitemurl-propertydetail-item)**​,**[options](#getpredictivesearchitemurl-propertydetail-options)**​)

Builds the link for a predictive search result. A product, collection, page, or article result links to the resource's page with the search term. A query suggestion links to the search page and searches for the suggestion's text. Every link keeps the result's tracking parameters.

For a product, collection, page, or article, pass the route templates and the search term. The function throws an error without them.

### Parameters

* **item**

  **PredictiveSearchItem**

  **required**

  The predictive search result to link to.

* **options**

  **AnyPredictiveSearchItemUrlOptions**

  Route templates, search term, and path settings for the link.

### Returns**string**

* The link URL. The URL is relative unless you pass an absolute search path.

### PredictiveSearchItem

Any predictive search result, including query suggestions.

```ts
PredictiveSearchResourceItem | PredictiveSearchQueryItem
```

### PredictiveSearchResourceItem

A product, collection, page, or article result. Excludes query suggestions.

```ts
PredictiveSearchProductItem | PredictiveSearchCollectionItem | PredictiveSearchPageItem | PredictiveSearchArticleItem
```

### PredictiveSearchProductItem



### PredictiveSearchCollectionItem

A collection result from predictive search.

```ts
{ __typename: 'Collection'; id: string; title: string; handle: string; image: { url: string; altText: string; width: number; height: number; }; trackingParameters: string; }
```

### PredictiveSearchPageItem

A page result from predictive search.

```ts
{ __typename: 'Page'; id: string; title: string; handle: string; trackingParameters: string; }
```

### PredictiveSearchArticleItem

An article result from predictive search.

```ts
{ __typename: 'Article'; id: string; title: string; handle: string; blog: { handle: string; }; image: { url: string; altText: string; width: number; height: number; }; trackingParameters: string; }
```

### PredictiveSearchQueryItem

A suggested search term from predictive search.

```ts
{ __typename: 'SearchQuerySuggestion'; text: string; styledText: string; trackingParameters: string; }
```

### AnyPredictiveSearchItemUrlOptions

URL options for any predictive search result, either resource options or query suggestion options.

```ts
PredictiveSearchItemUrlOptions | PredictiveSearchQueryItemUrlOptions
```

### PredictiveSearchItemUrlOptions

Options for the link of a product, collection, page, or article result. Pass the route templates and the customer's search term.

* pathPrefix

  Prefix to add before the route path, such as a locale prefix.

  ```ts
  string
  ```

* routes

  Route templates for product, collection, page, and article paths, from \`createShopifyRouteTemplates\`.

  ```ts
  ShopifyRouteTemplates
  ```

* term

  Search term that the customer typed. The link carries the term in the \`q\` URL parameter.

  ```ts
  string
  ```

### ShopifyRouteTemplates

Your app's custom path templates for Shopify standard storefront routes, keyed by route name.

* article

  The app's article path. Hydrogen redirects Shopify article paths, such as \`/blogs/news/snowboard-guide\`, to this template.

  ```ts
  StandardRouteTemplateWithParam<"blogHandle"> & StandardRouteTemplateWithParam<"articleHandle">
  ```

* blog

  The app's blog path. Hydrogen redirects Shopify blog paths, such as \`/blogs/news\`, to this template.

  ```ts
  StandardRouteTemplateWithParam<"blogHandle">
  ```

* cart

  The app's cart path. Hydrogen redirects Shopify's \`/cart\` path to this template.

  ```ts
  StandardRouteTemplate
  ```

* collection

  The app's collection path. Hydrogen redirects Shopify collection paths, such as \`/collections/winter\`, to this template.

  ```ts
  StandardRouteTemplateWithParam<"collectionHandle">
  ```

* collectionList

  The app's collection list path. Hydrogen redirects Shopify's \`/collections\` path and the legacy \`/products\` path to this template.

  ```ts
  StandardRouteTemplate
  ```

* page

  The app's page path. Hydrogen redirects Shopify page paths, such as \`/pages/about-us\`, to this template.

  ```ts
  StandardRouteTemplateWithParam<"pageHandle">
  ```

* policy

  The app's policy path. Hydrogen redirects Shopify policy paths, such as \`/policies/privacy-policy\`, to this template.

  ```ts
  StandardRouteTemplateWithParam<"policyHandle">
  ```

* product

  The app's product path. Hydrogen redirects Shopify product paths, such as \`/products/snowboard\`, to this template.

  ```ts
  StandardRouteTemplateWithParam<"productHandle">
  ```

* productInCollection

  The app's path for products inside a collection. Hydrogen redirects Shopify paths such as \`/collections/winter/products/snowboard\` to this template. The template must include \`:productHandle\`. Add \`:collectionHandle\` when the app's product path also names the collection.

  ```ts
  StandardRouteTemplateWithParam<"productHandle">
  ```

* search

  The app's search path. Hydrogen redirects Shopify's \`/search\` path to this template.

  ```ts
  StandardRouteTemplate
  ```

### StandardRouteTemplateWithParam

A path template that starts with \`/\` and includes the named handle placeholder.

```ts
`/${string}:${Param}` | `/${string}:${Param}/${string}`
```

### StandardRouteTemplate

A path template that starts with \`/\`.

```ts
`/${string}`
```

### PredictiveSearchQueryItemUrlOptions

Options for the link of a query suggestion. By default, a suggestion links to the standard search route and searches for the suggestion's text.

* pathPrefix

  Prefix to add before the search route, such as a locale prefix. Has no effect when you set a search path.

  ```ts
  string
  ```

* routes

  Route templates that set the search page path. Defaults to Hydrogen's standard search route.

  ```ts
  ShopifyRouteTemplates
  ```

* searchPath

  Search page path or URL to use as is, without the route templates or the path prefix.

  ```ts
  string
  ```

### Examples

* #### Build tracked result links

  ##### Description

  Link product results with the customer's search term, and link query suggestions to the search page. This example builds links from shared route templates.

  ##### TypeScript

  ```ts
  import {
    createShopifyRouteTemplates,
    getPredictiveSearchItemUrl,
    type PredictiveSearchData,
  } from "@shopify/hydrogen";

  const routeTemplates = createShopifyRouteTemplates({});

  export function getResultLinks({ term, items }: PredictiveSearchData) {
    return {
      products: items.products.map((product) =>
        getPredictiveSearchItemUrl(product, { routes: routeTemplates, term }),
      ),
      queries: items.queries.map((query) =>
        getPredictiveSearchItemUrl(query, { routes: routeTemplates }),
      ),
    };
  }
  ```

* #### Link product results in React

  ##### Description

  Render each product result as a tracked link. This example reads the result from \`usePredictiveSearch\` in \`@shopify/hydrogen/react\` and passes the result's \`term\` to \`getPredictiveSearchItemUrl\`.

  ##### React

  ```tsx
  import { createShopifyRouteTemplates, getPredictiveSearchItemUrl } from "@shopify/hydrogen";
  import { usePredictiveSearch } from "@shopify/hydrogen/react";

  const routeTemplates = createShopifyRouteTemplates({});

  export function PredictiveProductLinks() {
    const { result } = usePredictiveSearch();

    return (
      <ul>
        {result.items.products.map((product) => (
          <li key={product.id}>
            <a href={getPredictiveSearchItemUrl(product, { routes: routeTemplates, term: result.term })}>
              {product.title}
            </a>
          </li>
        ))}
      </ul>
    );
  }
  ```

* #### Link query suggestions in Vue

  ##### Description

  Render each query suggestion as a link to the search page. This example reads the result from \`usePredictiveSearch\` in \`@shopify/hydrogen/vue\` and passes route templates to \`getPredictiveSearchItemUrl\`.

  ##### Vue

  ```vue
  <script setup lang="ts">
  import { createShopifyRouteTemplates, getPredictiveSearchItemUrl } from "@shopify/hydrogen";
  import { usePredictiveSearch } from "@shopify/hydrogen/vue";

  const routeTemplates = createShopifyRouteTemplates({});

  const state = usePredictiveSearch();
  </script>

  <template>
    <ul>
      <li v-for="query in state.result.items.queries" :key="query.text">
        <a :href="getPredictiveSearchItemUrl(query, { routes: routeTemplates })">{{ query.text }}</a>
      </li>
    </ul>
  </template>
  ```

***

## Search page links

## get​Search​Result​Url(**[input1](#getsearchresulturl-propertydetail-input1)**​)

Builds a search page URL from a path, a search term, and optional extra parameters. Use the function for search page links, such as a link to every result for the current term.

The search term and the extra parameters replace values with the same names in the base URL.

### Parameters

* **input1**

  **SearchResultUrlOptions**

  **required**

  The base URL, the search term, the extra and tracking parameters, and the search parameter name.

### Returns**string**

* A relative URL, or an absolute URL when the base URL is absolute.

### SearchResultUrlOptions

Options for a search result URL.

* baseUrl

  Search page path or absolute URL.

  ```ts
  string
  ```

* params

  Extra URL parameters, such as a result type filter. The search term replaces an extra parameter with the same name.

  ```ts
  Record<string, string>
  ```

* searchParamName

  URL parameter that carries the search term. Defaults to \`q\`.

  ```ts
  string
  ```

* term

  Search term to add to the URL.

  ```ts
  string
  ```

* trackingParameters

  Tracking parameters from a Storefront API search result. Pass the result's \`trackingParameters\` value unchanged.

  ```ts
  string | null
  ```

### Examples

* #### Build a search URL

  ##### Description

  Build \`/search?type=product\&q=snow+board\` from a base path, a term, and an extra \`type\` parameter.

  ##### TypeScript

  ```ts
  import { getSearchResultUrl } from "@shopify/hydrogen";

  const url = getSearchResultUrl({
    baseUrl: "/search",
    term: "snow board",
    params: { type: "product" },
  });

  console.log(url);
  ```

***
