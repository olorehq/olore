---
title: Route templates
description: >-
  The createShopifyRouteTemplates function tells Hydrogen where your app serves
  products, collections, and other Shopify resources. Use the function when your
  app serves a resource at a path other than Shopify's default.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/request-handling/route-templates
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/request-handling/route-templates.md
api_name: hydrogen
---

# Route templates

The `createShopifyRouteTemplates` function tells Hydrogen where your app serves products, collections, and other Shopify resources. Use the function when your app serves a resource at a path other than Shopify's default.

To create the manifest and pass it to every consumer, refer to [Configure route templates](https://shopify.dev/docs/storefronts/hydrogen/routing).

Import `createShopifyRouteTemplates` from `@shopify/hydrogen`.

Pass the same route templates to [`handleShopifyRoutes`](https://shopify.dev/docs/api/hydrogen/latest/request-handling/handle-shopify-routes), [`handleShopifyRedirects`](https://shopify.dev/docs/api/hydrogen/latest/request-handling/handle-shopify-redirects), [`ShopifyScripts`](https://shopify.dev/docs/api/hydrogen/latest/analytics/shopify-scripts), and the [search result URL functions](https://shopify.dev/docs/api/hydrogen/latest/predictive-search/search-result-urls).

***

## Route definitions

## create​Shopify​Route​Templates(**[routes](#createshopifyroutetemplates-propertydetail-routes)**​)

Tells Hydrogen where your app serves products, collections, and other Shopify resources. Pass the returned object to `handleShopifyRoutes`, `handleShopifyRedirects`, the `ShopifyScripts` `routes` option, and the predictive search URL helpers.

Add a key only for a route that your app serves at a non-standard path. Hydrogen uses Shopify's default path for each key that you leave out. Pass an empty object when your app serves every route at its default path. Each template starts with `/` and includes the handle placeholders for its route. Leave the locale path prefix out of templates. Hydrogen adds the prefix for you.

TypeScript checks the shape of each template. The function returns the object that you pass.

### Parameters

* **routes**

  **TRoutes extends ShopifyRouteTemplates**

  **required**

  The non-standard paths that your app serves, keyed by standard route name.

### Returns

* **const TRoutes extends ShopifyRouteTemplates**

  The route templates, typed for Hydrogen's route, redirect, and URL helpers.

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

### Examples

* #### Define route templates

  ##### Description

  Map Shopify standard routes to custom paths. This example sets templates for product, collection, article, cart, policy, and search routes.

  ##### TypeScript

  ```ts
  import { createShopifyRouteTemplates } from "@shopify/hydrogen";

  export const routeTemplates = createShopifyRouteTemplates({
    product: "/p/:productHandle",
    collection: "/c/:collectionHandle",
    article: "/journal/:blogHandle/:articleHandle",
    cart: "/basket",
    policy: "/legal/:policyHandle",
    search: "/find",
  });
  ```

* #### Use default routes

  ##### Description

  Create empty route templates for an app that serves Shopify's default paths. This example gives the app one place to update if its routes change.

  ##### TypeScript

  ```ts
  import { createShopifyRouteTemplates } from "@shopify/hydrogen";

  export const routeTemplates = createShopifyRouteTemplates({});
  ```

***
