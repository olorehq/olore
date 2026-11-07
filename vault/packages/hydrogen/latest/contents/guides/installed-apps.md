---
title: Installed apps on a Hydrogen storefront
description: >-
  Learn which parts of an installed app work on a Hydrogen storefront, why app
  blocks and app proxies don't, and what to use instead.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/installed-apps'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/installed-apps.md'
api_name: hydrogen
---

# Installed apps on a Hydrogen storefront

Installed apps often add app blocks, app embed blocks, or sections to the store's theme. A Hydrogen storefront doesn't render them, because they're Liquid, which only an online store theme renders.

Hydrogen serves the browser contract that app scripts use on a theme. `ShopifyScripts` loads the standard events and actions on `window.Shopify`. `handleShopifyRoutes()` answers the AJAX cart URLs, such as `/cart.js`, and proxies the Storefront API at your storefront's own origin. An app script that uses only this contract works on Hydrogen after you add it to your pages.

To replace an app block or an app proxy, render the app's data from metafields, metaobjects, or its API in your own components.

***

## What works on Hydrogen

App scripts depend on the `window.Shopify` runtime and on the cart and Storefront API URLs at your storefront's origin. Hydrogen serves the runtime and the URLs.

### Standard events and actions

[`ShopifyScripts`](https://shopify.dev/docs/api/hydrogen/latest/analytics/shopify-scripts) loads the runtime for Shopify's [standard storefront events and actions](https://shopify.dev/docs/api/storefront-events-and-actions). `ShopifyScripts` sets the shop, locale, country, and routes values that theme scripts read, such as `Shopify.routes.root`, and sets `Shopify.currency.active` when you pass it a currency. `ShopifyScripts` also loads the [Customer Privacy API](https://shopify.dev/docs/api/customer-privacy) at `window.Shopify.customerPrivacy`, where app scripts check consent.

App scripts can call [`window.Shopify.actions.getCart()`](https://shopify.dev/docs/api/storefront-events-and-actions/actions/get-cart), [`updateCart()`](https://shopify.dev/docs/api/storefront-events-and-actions/actions/update-cart), and [`openCart()`](https://shopify.dev/docs/api/storefront-events-and-actions/actions/open-cart). Because Hydrogen's [cart store](https://shopify.dev/docs/storefronts/hydrogen/cart) handles `updateCart`, your cart UI shows an app's change without a reload. `openCart()` navigates to `/cart` until you register a [cart drawer](https://shopify.dev/docs/storefronts/hydrogen/cart/cart-drawer) as the action's handler.

Hydrogen dispatches only some of the standard events. `ShopifyScripts` dispatches [`shopify:page:view`](https://shopify.dev/docs/api/storefront-events-and-actions/events/page-view) on load and after each navigation, and `updateCart` dispatches the cart update events, such as [`shopify:cart:lines-update`](https://shopify.dev/docs/api/storefront-events-and-actions/events/cart-lines-update). To send another event, such as [`shopify:product:view`](https://shopify.dev/docs/api/storefront-events-and-actions/events/product-view), to apps, [dispatch it](https://shopify.dev/docs/api/storefront-events-and-actions/events/dispatch) from your storefront code.

### Cart and Storefront API requests

Hydrogen answers the following requests that app scripts send to a theme's origin:

* [`handleShopifyRoutes()`](https://shopify.dev/docs/storefronts/hydrogen/request-handlers#routes-hydrogen-handles) answers `/cart.js`, `/cart/add.js`, `/cart/update.js`, `/cart/change.js`, and `/cart/clear.js`, and forwards each [AJAX cart](https://shopify.dev/docs/api/ajax/reference/cart) request to your store.
* Hydrogen also answers the locale-prefixed URLs that scripts build from `Shopify.routes.root`, such as `/fr/cart/add.js`.
* Hydrogen redirects `/cart/{variantId}:{quantity}` to your store's domain.
* `handleShopifyRoutes()` proxies `/api/{version}/graphql.json`. Scripts query the Storefront API at your own origin.

For the proxy's behavior, see [Request handlers](https://shopify.dev/docs/storefronts/hydrogen/request-handlers#routes-hydrogen-handles).

***

## What doesn't work on Hydrogen

The parts of an app that need a Liquid theme don't work on a Hydrogen storefront:

* Hydrogen doesn't render [app blocks and app embed blocks](https://shopify.dev/docs/apps/build/online-store/theme-app-extensions), because they're Liquid.
* Hydrogen doesn't render the sections and snippets that an app adds to a theme.
* Hydrogen doesn't load the scripts and styles that an app embed block or a script tag adds to a theme.
* Merchants can't add, move, or configure app blocks on a Hydrogen storefront, because the [theme editor](https://shopify.dev/docs/storefronts/themes/tools/online-editor) edits only themes.

Hydrogen's request handlers don't answer [app proxy](https://shopify.dev/docs/apps/build/online-store/app-proxies) URLs, such as `/apps/{subpath}`, or the AJAX API endpoints outside the cart, such as [`/products/{handle}.js`](https://shopify.dev/docs/api/ajax/reference/product) and [`/recommendations/products.json`](https://shopify.dev/docs/api/ajax/reference/product-recommendations). Requests to app proxy URLs and the other AJAX API endpoints reach your router, which returns a 404 unless you add a route for the path.

***

## What to do instead

On Hydrogen, you decide where app content appears. For each app whose blocks or app proxy your storefront needs, use one of the following options:

* Read the app's [metafields](https://shopify.dev/docs/apps/build/metafields) and [metaobjects](https://shopify.dev/docs/apps/build/metaobjects). Query them from your [loader](https://shopify.dev/docs/storefronts/hydrogen/data-fetching) and render them yourself.
* Call the app's own API, if the app has one, and render the response yourself.
* Load the app's script. If the app offers a script that runs outside a theme, then add it to your root layout. The script works only if it uses the APIs that Hydrogen provides.
* Choose a headless-ready app. Replace an app that needs a theme with an app that documents headless support.

Product rating apps, for example, write the [standard metafields](https://shopify.dev/docs/apps/build/metafields/list-of-standard-definitions) `reviews.rating` and `reviews.rating_count`, which your product page can query and render.

The Storefront API returns a metafield or a metaobject only when its definition grants [storefront access](https://shopify.dev/docs/apps/build/metafields#storefront-permissions). Liquid ignores this setting. An app block might show data on a theme that the Storefront API doesn't return to your storefront.

Send requests that need the app's secret key from your server code to keep the key out of the browser.

***
