# hydrogen Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/api/` | API reference index and local HTTPS plugin, money | 3 |
| `contents/api/analytics/` | Analytics events, cart analytics, Shopify scripts | 3 |
| `contents/api/cart/` | Cart store, components, forms, queries, server handlers, errors | 6 |
| `contents/api/collections/` | Collection store, filters, provider, URL parameters | 4 |
| `contents/api/customer-accounts/` | Customer Account API client, sessions, server handlers, errors | 4 |
| `contents/api/predictive-search/` | Predictive search store, forms, provider, handlers | 5 |
| `contents/api/products/` | Product components, form store, add to cart, variant selection | 4 |
| `contents/api/request-handling/` | Shopify routes, redirects, request context, logging, route templates | 5 |
| `contents/api/shop-pay/` | Shop Pay button and URL helper | 2 |
| `contents/api/storefront-client/` | Storefront client, gql, caching, errors, flattenConnection | 5 |
| `contents/cli/` | Shopify CLI hydrogen commands | 26 |
| `contents/guides/` | Core guides: routing, products, markets, analytics, migration, request handlers | 12 |
| `contents/guides/cart/` | Cart building, drawer, metafields | 4 |
| `contents/guides/data-fetching/` | Typed queries and caching | 3 |
| `contents/guides/deploy/` | Deployment overview and other runtimes | 2 |
| `contents/guides/deploy/oxygen/` | Oxygen environments, runtime, deployment management | 4 |
| `contents/guides/getting-started/` | Deploy a template, add Hydrogen to an existing project | 3 |

## api/

| File | Description |
|------|-------------|
| `index.md` | Hydrogen is Shopify's toolkit for building headless storefronts in the JavaScript framework of your choice. It includes a typed Storefront... |
| `local-https.md` | The local HTTPS functions serve your Vite dev server on a trusted HTTPS origin that customer account login accepts. Use these functions to... |
| `money.md` | The formatMoney function formats a MoneyV2 value or a same-currency price range for display. Use the function to show product prices,... |

## api/analytics/

| File | Description |
|------|-------------|
| `analytics-event.md` | The AnalyticsEvent object holds the names of the analytics events that Hydrogen supports. Use these constants to publish page, product,... |
| `cart-analytics.md` | The cart analytics functions publish analytics events when the customer's cart changes. Use these functions to send cart updated, product... |
| `shopify-scripts.md` | The ShopifyScripts component and the matching core functions load Shopify's storefront scripts in your storefront. Use the component or... |

## api/cart/

| File | Description |
|------|-------------|
| `cart-errors.md` | The cart error APIs detect failed cart requests and build the error state that your cart UI shows. Use these APIs to check the HTTP status... |
| `cart-forms.md` | The cart form functions build cart forms that submit through the cart store and still work without JavaScript. Use these functions to get... |
| `cart-queries.md` | The cartQueries object holds the Storefront API cart query and mutations that the cart server handlers run. Use these documents in a custom... |
| `cart-server-handlers.md` | The cart server handlers serve the /api/cart route, which loads and updates the customer's cart through the Storefront API. Use these... |
| `create-cart-components.md` | The createCartComponents function creates a cart provider, React hooks, and Vue composables typed to the cart fields that your cart server... |
| `create-cart-store.md` | The createCartStore function holds the customer's cart in the browser and shows cart changes before the server confirms them. Use the... |

## api/collections/

| File | Description |
|------|-------------|
| `collection-filters.md` | The collection filter functions help you build filter controls for a collection page. Use the functions to check the boxes for active... |
| `collection-provider.md` | The CollectionProvider component holds the customer's filter and sort choices for a collection page in React and Vue apps, and keeps the... |
| `collection-url-parameters.md` | The collection URL parameter functions read collection filters and sort from the URL and write them back, with the same parameter names... |
| `create-collection-store.md` | The createCollectionStore function creates a store that holds the customer's filter and sort choices for a collection or search page. Use... |

## api/customer-accounts/

| File | Description |
|------|-------------|
| `create-customer-account-client.md` | The createCustomerAccountClient function creates a server-only GraphQL client for the Customer Account API. Use the client with gql to... |
| `create-customer-session.md` | The createCustomerSession function creates a server-only session that signs customers in and out with Shopify customer accounts. Use the... |
| `customer-account-errors.md` | The customer account error classes tell you why a Customer Account API request or a customer login failed. Use the classes to retry... |
| `customer-account-server-handlers.md` | The createCustomerAccountServerHandlers function creates route handlers for customer account login, authorization, token refresh, and... |

## api/predictive-search/

| File | Description |
|------|-------------|
| `create-predictive-search-store.md` | The createPredictiveSearchStore function creates a store that searches as the customer types and holds the latest results. Use the store to... |
| `predictive-search-forms.md` | The predictive search form functions return attributes for a search form and its search input, and read the search term from a submitted... |
| `predictive-search-provider.md` | The PredictiveSearchProvider component runs predictive search for the React or Vue components inside the provider. Use the provider with... |
| `predictive-search-server-handlers.md` | The predictive search server functions get predictive search results from the Storefront API. Use these functions to serve the route that... |
| `search-result-urls.md` | The search result URL functions build links for predictive search results and search pages. Use these functions to link each result to its... |

## api/products/

| File | Description |
|------|-------------|
| `add-to-cart.md` | The add to cart functions check whether the customer can add the selected variant to the cart and find the cart line that already holds a... |
| `create-product-components.md` | The createProductComponents function creates a product provider and product hooks for React or Vue, typed to your product query. Use the... |
| `create-product-form-store.md` | The createProductFormStore function creates a store that tracks the customer's option selection for one product and adds the selected... |
| `variant-selection.md` | The variant selection functions read the customer's option selection and turn the selection into product links. Use these functions to read... |

## api/request-handling/

| File | Description |
|------|-------------|
| `configure-logging.md` | The configureLogging function sends Hydrogen's log entries to your logger at the minimum level you choose. Use the function to forward... |
| `create-shopify-request-context.md` | The createShopifyRequestContext function creates the context for one incoming request. Use the context to forward the customer's cookies,... |
| `handle-shopify-redirects.md` | The handleShopifyRedirects function sends customers to the right page when your framework's router returns a 404 response. Use the function... |
| `handle-shopify-routes.md` | The handleShopifyRoutes function serves Shopify's storefront endpoints, such as checkout permalinks and the Storefront API proxy, and your... |
| `route-templates.md` | The createShopifyRouteTemplates function tells Hydrogen where your app serves products, collections, and other Shopify resources. Use the... |

## api/shop-pay/

| File | Description |
|------|-------------|
| `get-shop-pay-button-url.md` | The getShopPayButtonUrl function returns the checkout URL that the Shop Pay button links to. Use the URL in your own Shop Pay markup to... |
| `shop-pay-button.md` | The ShopPayButton component renders a Shop Pay button that checks out a selected variant right away or checks out the current cart. Use the... |

## api/storefront-client/

| File | Description |
|------|-------------|
| `caching.md` | The caching functions cache Storefront API queries, third-party API responses, and other async work. Use the functions to choose how long... |
| `create-storefront-client.md` | The createStorefrontClient function creates a typed Storefront API client for browser code, server-side rendering, or background jobs such... |
| `flatten-connection.md` | The flattenConnection function turns a Storefront API connection into a plain array. Use the function to render list fields without... |
| `gql.md` | The gql function writes typed Storefront API queries, mutations, and fragments. TypeScript infers each operation's result and variables... |
| `storefront-errors.md` | The Storefront API client throws StorefrontApiError when a request fails and StorefrontTimeoutError when a request times out. Catch the... |

## cli/

| File | Description |
|------|-------------|
| `build.md` | Builds a Hydrogen storefront for production. |
| `check.md` | Checks whether your Hydrogen app includes a set of standard Shopify routes. |
| `codegen.md` | Automatically generates GraphQL types for your project’s Storefront API queries. |
| `customer-account-push.md` | Push project configuration to admin |
| `debug-cpu.md` | Builds the app and runs the resulting code to profile the server startup time, watching for changes. |
| `deploy.md` | Builds and deploys your Hydrogen storefront to Oxygen. |
| `dev.md` | Runs a Hydrogen storefront in a local runtime that emulates an Oxygen worker for development. |
| `env-list.md` | Lists all environments available on the linked Hydrogen storefront. |
| `env-pull.md` | Pulls environment variables from the linked Hydrogen storefront into an .env file, leaving secret values empty. |
| `env-push.md` | Push environment variables from the local .env file to your linked Hydrogen storefront. |
| `generate-route.md` | Generates the selected route group from the starter template. |
| `generate-routes.md` | Generates all supported standard shopify routes. |
| `index.md` | Hydrogen 2026-10 supports a subset of the Shopify CLI Hydrogen commands. In a Hydrogen 2026-10 project, use your framework's commands to... |
| `init.md` | Creates a new Hydrogen storefront. |
| `link.md` | Links your local development environment to a remote Hydrogen storefront. |
| `list.md` | Lists all remote Hydrogen storefronts available to link to your local development environment. |
| `login.md` | Logs in to the specified shop and saves the shop domain to the project. |
| `logout.md` | Logs out of Shopify and clears .shopify/project.json, including the storefront link. |
| `preview.md` | Runs a server in your local development environment that serves your Hydrogen app's production build. |
| `setup-css.md` | Adds support for certain CSS strategies to your project. |
| `setup-markets.md` | Adds support for multiple markets to your project by using the URL structure. |
| `setup-vite.md` | EXPERIMENTAL: Upgrades the project to use Vite. |
| `setup.md` | Scaffold routes and core functionality. |
| `shortcut.md` | Creates a global h2 shortcut for Shopify CLI using shell aliases. |
| `unlink.md` | Unlinks your local development environment from a remote Hydrogen storefront. |
| `upgrade.md` | Upgrades Hydrogen project dependencies, preview features, fixes, and breaking changes within legacy Hydrogen, versions 2026-04 and earlier. |

## guides/

| File | Description |
|------|-------------|
| `analytics.md` | Send Shopify analytics events from a Hydrogen storefront, collect visitor consent, and forward events to third-party destinations. |
| `collections-search.md` | Build Hydrogen collection and search results pages with filters, sorting, active filter chips, and pagination that work without JavaScript,... |
| `customer-accounts.md` | Add login, logout, and account pages to a Hydrogen storefront with the Customer Account API, and develop locally over HTTPS. |
| `index.md` | Hydrogen is Shopify's headless toolkit. Learn how its commerce primitives fit into your framework, hold state, and plug into your server's... |
| `installed-apps.md` | Learn which parts of an installed app work on a Hydrogen storefront, why app blocks and app proxies don't, and what to use instead. |
| `markets.md` | Resolve the customer's market on the server and pass it to Hydrogen's request context, so Storefront API queries return localized prices,... |
| `migrate.md` | Migrate a storefront from legacy Hydrogen, versions 2026-04 and earlier, to the latest version of Hydrogen. |
| `production-checklist.md` | Check a Hydrogen storefront's request handlers, navigation, customer accounts, product pages, cart, browsing, analytics, and markets before... |
| `products.md` | Build a Hydrogen product page that resolves variants from the URL, renders option values as links, and adds the selected variant to the... |
| `request-handlers.md` | Run Hydrogen's request handlers around your framework's router so that the Storefront API proxy, cart API, checkout, permalinks, and... |
| `routing.md` | Create a route templates manifest that tells Hydrogen where your storefront renders products, collections, and other Shopify resources, so... |
| `shop-pay.md` | Add Shop Pay accelerated checkout buttons to product pages and the cart in a Hydrogen storefront. |

## guides/cart/

| File | Description |
|------|-------------|
| `build-cart.md` | Add a cart to your Hydrogen storefront with line item forms, discount codes, an order note, cart attributes, totals, and scoped errors. |
| `cart-drawer.md` | Add an accessible cart drawer to your Hydrogen storefront with the native dialog element, and connect it to the openCart standard action. |
| `index.md` | Learn how Hydrogen's cart store syncs with Shopify, applies optimistic updates, tracks pending and error state, and falls back to a... |
| `metafields.md` | Read and write custom data on the cart in a Hydrogen storefront, and copy cart metafields to the order at checkout. |

## guides/data-fetching/

| File | Description |
|------|-------------|
| `caching.md` | Cache catalog reads from the Storefront API with Hydrogen's sub-request cache on Oxygen and other runtimes, or with your framework's data... |
| `index.md` | Create a Hydrogen Storefront API client, write queries with gql, localize them for a market, and handle errors in any JavaScript framework. |
| `typed-queries.md` | Get typed results and inline validation for Hydrogen gql queries in your editor, and catch invalid Storefront API fields in CI. |

## guides/deploy/

| File | Description |
|------|-------------|
| `index.md` | Learn what a Hydrogen storefront needs from its runtime, and choose where to deploy it. |
| `other-runtimes.md` | Deploy a Hydrogen storefront to Vercel, Node, Cloudflare Workers, Deno, or another JavaScript runtime. |

## guides/deploy/oxygen/

| File | Description |
|------|-------------|
| `environments.md` | Learn how Oxygen environments map to your Git branches, and how to manage the environment variables that your Hydrogen storefront reads. |
| `index.md` | Create a Hydrogen storefront in the Shopify admin, configure your app's Worker and MiniOxygen, and deploy it to Oxygen. |
| `manage-deployments.md` | Deploy your Hydrogen storefront to Oxygen continuously from GitHub or another CI/CD system, share preview links, redeploy, and roll back. |
| `runtime.md` | Learn how Oxygen's Worker runtime differs from Node and from browsers, and which request headers, cache behavior, and APIs your Hydrogen... |

## guides/getting-started/

| File | Description |
|------|-------------|
| `add-to-existing-project.md` | Add Hydrogen to a project that uses the framework of your choice. Install the package, connect your store, wire Hydrogen into your app, and... |
| `deploy-a-template.md` | Deploy a Hydrogen starter template, connect it to your Shopify store, run it, and find your way around the code. |
| `index.md` | Choose how to start building with Hydrogen. Deploy a starter template that's already built, or add Hydrogen to a project that uses the... |
