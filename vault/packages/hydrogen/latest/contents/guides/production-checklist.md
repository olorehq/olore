---
title: Check your storefront before launch
description: >-
  Check a Hydrogen storefront's request handlers, navigation, customer accounts,
  product pages, cart, browsing, analytics, and markets before you deploy it to
  production.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/production-checklist'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/production-checklist.md'
api_name: hydrogen
---

# Check your storefront before launch

Type checks and a successful build don't prove that Hydrogen is wired correctly. Before you launch, and before you point your domain at the storefront, test whether the cart and account routes are wired to Shopify.

`handleShopifyRoutes()` runs before your framework's router, so a storefront can build cleanly and still return a 404 for the cart API.

Use this checklist after you create or change a storefront, and before each production deployment. Run the checks against your framework's development server first, and then repeat the request handler checks against a production build. If a check fails, then fix the storefront and run that check again.

The `curl` commands on this page use `<port>` for your app's port. Vercel Shop and other Next.js apps run on port `3000`, and the React Router template runs on port `5173` in development and `4173` in preview.

***

## Static checks

Run your project's scripts in this order:

1. Your formatter, if your project has one.
2. Your lint, type check, or `check` script.
3. `hydrogen gql check`, if you changed any `gql()` documents. The React Router template runs it as part of `typecheck`.
4. `build`.
5. `test`, and then your format check if it's separate from the formatter.

***

## Request handlers

Confirm that `handleShopifyRoutes()` and `handleShopifyRedirects()` run where your framework expects them. To learn how to wire them, refer to [Request handlers](https://shopify.dev/docs/storefronts/hydrogen/request-handlers).

When you register the cart and predictive search handler groups, `handleShopifyRoutes()` answers `/api/cart` and predictive search requests before your router runs. A missing route file for these paths doesn't mean the handler is missing.

### `POST /api/{api-version}/graphql.json` returns Storefront API JSON

Send a query to the Storefront API proxy. Replace `{api-version}` with the Storefront API version that your app uses:

## Terminal

```bash
curl -i -X POST http://localhost:<port>/api/{api-version}/graphql.json \
  -H "content-type: application/json" \
  -H "X-Shopify-Storefront-Access-Token: <public-token>" \
  -d '{"query":"{ shop { name } }"}'
```

The response is Storefront API JSON. Your framework's 404 page means that `handleShopifyRoutes()` didn't run before your router.

The proxy forwards the token header from the incoming request. It doesn't add a token from your server config.

### `GET /api/cart` without a cart cookie returns `{"cart":null}`

Request the cart API without a cart cookie:

## Terminal

```bash
curl -i http://localhost:<port>/api/cart
```

The response body is `{"cart":null}`. A 404 means that `handleShopifyRoutes()` didn't run before your router, or that you didn't register the cart handlers.

### `GET /admin` redirects to your store

Request `/admin`:

## Terminal

```bash
curl -i http://localhost:<port>/admin
```

The response redirects to `/admin` on your store's domain.

### `GET /this-does-not-exist` returns your framework's 404 page

Request a path that doesn't exist:

## Terminal

```bash
curl -i http://localhost:<port>/this-does-not-exist
```

The response is your framework's 404 page, unless your store has a [URL redirect](https://help.shopify.com/manual/online-store/menus-and-links/url-redirect) for that path.

***

## Navigation

Request every link in your header and footer directly:

## Terminal

```bash
curl -s -o /dev/null -w "%{http_code} <href>\n" http://localhost:<port><href>
```

Every link returns `200`. A `404` means that the link points to a route that your app doesn't render, or to a handle that your store doesn't have.

A common failure is `/collections/all`. The online store's "all" collection doesn't exist in the Storefront API. Link to it only if your store has a collection with the handle `all`.

***

## Customer accounts

Completing a real sign-in requires an HTTPS origin that's registered as a callback URL for your [Customer Account API](https://shopify.dev/docs/api/customer) client. If your local origin isn't registered, then check only the signed-out behavior. For more information, refer to [Test sign-in locally with HTTPS](https://shopify.dev/docs/storefronts/hydrogen/customer-accounts#step-6-test-sign-in-locally-with-https).

### `GET /account/login` redirects to Shopify's login page

Request the login route:

## Terminal

```bash
curl -i http://localhost:<port>/account/login
```

The response redirects, and its `location` header points to Shopify's hosted login page. It isn't a 404 or a 500.

### `/account` shows a signed-out state and the sign-out control is a native form

Open `/account` without signing in. The page shows a signed-out state.

After you sign in, the sign-out control on `/account` is the native form `<form method="post" action="/account/logout">`. The logout handler accepts only same-origin POST requests, and returns a redirect that only a native form submission follows.

***

## Product pages

### Rendering and variant URLs

* The server renders the title, images, price, variant options, add to cart form, and related products when they're available.
* Reloading a URL with option parameters selects the expected variant.
* Selecting an option of the same product updates the URL without scrolling to the top of the page.
* Selecting a [combined listing](https://help.shopify.com/en/manual/products/combined-listings-app) option navigates to that product's page.

### Option states and buttons

* Sold-out option values stay selectable and show that they're sold out.
* Option combinations that don't exist are disabled.
* The add to cart button is enabled only when `canAddToCart(product, options)` returns `true`.
* The Shop Pay button renders only when a variant is selected, and it's disabled when the add to cart button is disabled or pending.

***

## Cart

### Cart page and drawer

* `/cart` works with JavaScript turned off, and your footer includes a `/cart` link.
* The header cart button is a link to `/cart`. After hydration, it opens the cart drawer with `showModal()`.
* `window.Shopify.actions.openCart()` opens the cart drawer.
* If your product page opens the cart drawer after a product is added, then the drawer opens after a successful submission.

### Adding and updating lines

* Adding a product through your storefront's add to cart UI sets the cart cookie in a `Set-Cookie` header, and keeps any other response headers that your cart action sets. Test through your real UI or cart action, not a handcrafted request.
* Each line item form includes a hidden `set` action, a `lineId` for that line, and an editable `quantity`.
* Pressing Enter in a quantity field submits a `set` action.
* Clicking a quantity button several times quickly settles on the final quantity.

### Errors, attributes, and totals

* Line, discount code, note, attribute, network, and cart errors appear next to the part of the cart they apply to.
* Saving a cart attribute submits the full list of attributes, keeps attributes that you didn't change, and shows a saving state. Submitting no attribute fields clears the list.
* Totals come from the Storefront API, and they show a pending state while a cart change is in progress.

For more information about the cart, refer to [Cart](https://shopify.dev/docs/storefronts/hydrogen/cart).

***

## Collections and search

### Filters and sorting

* Collection filters and sort options update the URL and the product grid.
* Checkbox filters and minimum and maximum price fields render, apply, and persist after a reload.
* Reloading a filtered URL server-renders the same filters and sort order.
* Removing an active filter removes only that filter, and keeps other URL parameters.

### Search and navigation

* Search filters keep the `q` parameter.
* Filter forms submit with `GET` when JavaScript is turned off.
* Using the browser's back and forward buttons doesn't leave the product grid in a loading state.

***

## Analytics

* Your app publishes `PAGE_VIEWED` on the first load and on every client-side navigation. `ShopifyScripts` doesn't publish it for you.
* Product, collection, search, and cart view events fire once each time the route's data changes.
* Cart tracking is set up once, with `trackCartAnalytics(cartStore)`, or with `useCartAnalytics()` in React and Vue. Cart events fire when the cart's data changes.
* No browser code reads private environment variables.
* Analytics destinations receive events only after the customer's [Customer Privacy settings](https://help.shopify.com/en/manual/privacy-and-security/privacy/customer-privacy-settings/privacy-settings) allow analytics.

For more information, refer to [Analytics and consent](https://shopify.dev/docs/storefronts/hydrogen/analytics).

***

## Markets and money

* Storefront API queries that return market-specific data declare `$country` and `$language` variables and use the `@inContext` directive.
* Prices render from Storefront API money fields with `formatMoney()`.
* No code in the browser calculates subtotals or totals.

For more information, refer to [Markets](https://shopify.dev/docs/storefronts/hydrogen/markets).

***

## Production build

Development-only middleware and development export conditions can hide wiring that's broken in production. Build and run the production bundle:

##### Next.js

```bash
npm run build
npm run start
```

##### React Router

```bash
npm run preview
```

Then repeat the [request handler](#request-handlers) checks against the production server. The React Router template's `preview` script runs the built Worker in MiniOxygen, whose [runtime can differ from Oxygen's](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/runtime#local-parity). For more information about deploying, refer to [About deploying Hydrogen storefronts](https://shopify.dev/docs/storefronts/hydrogen/deploy).

***
