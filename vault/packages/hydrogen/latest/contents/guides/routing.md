---
title: Configure route templates
description: >-
  Create a route templates manifest that tells Hydrogen where your storefront
  renders products, collections, and other Shopify resources, so redirects,
  scripts, and search links use your URLs.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/routing'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/routing.md'
api_name: hydrogen
---

# Configure route templates

Shopify storefronts have standard URLs, such as `/products/{handle}` and `/collections/{handle}`. Apps, Shopify browser modules, predictive search results, and old links all assume these URLs. If your storefront renders a resource at a different path, such as `/p/{handle}`, then Hydrogen needs to know so that it can build and redirect to your URLs instead.

Route templates are that shared configuration. You describe your app's URL shape once, in one manifest, and pass the same manifest to every Hydrogen primitive that builds or redirects storefront URLs. Route templates aren't page handlers. Your framework's router still renders every page.

***

## Requirements

* [Deploy a template](https://shopify.dev/docs/storefronts/hydrogen/getting-started/deploy-a-template), or [add Hydrogen to an existing project](https://shopify.dev/docs/storefronts/hydrogen/getting-started/add-to-existing-project).
* Know which paths your framework's router renders for each Shopify resource. Check your route config or route files, and any rewrites, catch-all routes, or localized route groups.

***

## Step 1: Create the manifest

Create one manifest with [`createShopifyRouteTemplates()`](https://shopify.dev/docs/api/hydrogen/latest/request-handling/route-templates). Add a key only when your app renders a Shopify route at a path that's different from Shopify's standard path, or when you want Hydrogen to redirect a standard URL to one of your pages.

If your app uses Shopify's standard paths, then create an empty manifest. It still needs to exist, so there's one place to update if your routes change later:

## Standard paths

lib/route-templates.ts

```ts
import {createShopifyRouteTemplates} from '@shopify/hydrogen';


// Add entries here if the app changes to custom Shopify resource paths.
export const routeTemplates = createShopifyRouteTemplates({});
```

If your app uses custom paths, then add a template for each one:

## Custom paths

lib/route-templates.ts

```ts
import {createShopifyRouteTemplates} from '@shopify/hydrogen';


export const routeTemplates = createShopifyRouteTemplates({
  product: '/p/:productHandle',
  collection: '/c/:collectionHandle',
  article: '/journal/:blogHandle/:articleHandle',
  cart: '/basket',
  policy: '/legal/:policyHandle',
  search: '/find',
});
```

The React Router template renders products at `/products/{handle}` and doesn't render collection-scoped product URLs. It adds only `productInCollection`, so collection-scoped product URLs redirect to the product page:

## React Router template manifest

app/lib/route-templates.ts

```ts
import {createShopifyRouteTemplates} from '@shopify/hydrogen';


export const routeTemplates = createShopifyRouteTemplates({
  productInCollection: '/products/:productHandle',
});
```

[Vercel Shop](https://vercel.shop), Vercel's Next.js template, uses Shopify's standard paths, so it calls `createShopifyRouteTemplates()` without any keys.

### Route template keys

Each key is a Shopify standard route, and each value is your app's path template for that route. Templates start with `/` and include the placeholders that the key requires.

| Key | Shopify standard path | Add this key when |
| - | - | - |
| `product` | `/products/:productHandle` | Your app renders product pages at a different path. |
| `productInCollection` | `/collections/:collectionHandle/products/:productHandle` | You want collection-scoped product URLs to redirect to a product page that your app renders. |
| `collection` | `/collections/:collectionHandle` | Your app renders collection pages at a different path. |
| `collectionList` | `/collections` and the legacy `/products` | Your app renders the collection list at a different path. |
| `page` | `/pages/:pageHandle` | Your app renders Online Store pages at a different path. |
| `policy` | `/policies/:policyHandle` | Your app renders store policies at a different path. |
| `blog` | `/blogs/:blogHandle` | Your app renders blog pages at a different path. |
| `article` | `/blogs/:blogHandle/:articleHandle` | Your app renders blog articles at a different path. |
| `cart` | `/cart` | Your app renders the cart page at a different path. |
| `search` | `/search` | Your app renders search results at a different path. |

The supported placeholders are `:productHandle`, `:collectionHandle`, `:pageHandle`, `:policyHandle`, `:blogHandle`, and `:articleHandle`. Hydrogen can't fill in any other placeholder.

Follow these rules when you write the manifest:

* Leave a key out when your app doesn't render that route. For example, if your storefront has no blog, then leave out `blog` and `article`.
* Don't add keys for standard paths, even to be explicit.
* Use strings, not functions. The manifest must be serializable.
* Don't include query strings or hashes. Hydrogen adds and keeps query parameters separately.
* Don't include market prefixes such as `/en-ca`. Hydrogen adds the prefix from the request's `i18n.pathPrefix`. Refer to [Markets](https://shopify.dev/docs/storefronts/hydrogen/markets).

***

## Step 2: Pass the manifest to every consumer

Import the same `routeTemplates` object everywhere Hydrogen builds, redirects, or exposes storefront URLs. Don't create a separate manifest for each consumer. You pass it to the following APIs when you wire them:

| API | What it uses the manifest for | Guide |
| - | - | - |
| `handleShopifyRoutes()` | Redirects Liquid-style `?variant={id}` product URLs to your app's product path. | [Request handlers](https://shopify.dev/docs/storefronts/hydrogen/request-handlers) |
| `handleShopifyRedirects()` | Redirects Shopify's standard paths to your app's paths after your router returns a 404. Hydrogen doesn't check that the resource exists, so your page route handles missing resources. | [Request handlers](https://shopify.dev/docs/storefronts/hydrogen/request-handlers) |
| The `routes` prop of `ShopifyScripts`, or the `routes` option of `initializeShopifyScripts()` | Lets Shopify browser modules and agent tools build URLs that match your app. | [Analytics and consent](https://shopify.dev/docs/storefronts/hydrogen/analytics) |
| `getPredictiveSearchItemUrl()` | Links predictive search results to your app's paths. Query suggestions use the `search` template. | [Add predictive search](https://shopify.dev/docs/storefronts/hydrogen/collections-search#step-7-add-predictive-search) |

To check that Shopify's standard URLs reach your pages, wire the request handlers and then follow [Verify your wiring](https://shopify.dev/docs/storefronts/hydrogen/request-handlers#step-6-verify-your-wiring).

***

## Next steps

[Request handlers\
\
](https://shopify.dev/docs/storefronts/hydrogen/request-handlers)

[Run Hydrogen's request handlers around your framework's router, and verify your routes.](https://shopify.dev/docs/storefronts/hydrogen/request-handlers)

[Markets\
\
](https://shopify.dev/docs/storefronts/hydrogen/markets)

[Add market path prefixes without changing your route templates.](https://shopify.dev/docs/storefronts/hydrogen/markets)

***
