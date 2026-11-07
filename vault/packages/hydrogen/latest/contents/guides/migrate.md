---
title: Migrate from legacy Hydrogen
description: >-
  Migrate a storefront from legacy Hydrogen, versions 2026-04 and earlier, to
  the latest version of Hydrogen.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/migrate'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/migrate.md'
api_name: hydrogen
---

# Migrate from legacy Hydrogen

Starting with version 2026-10, Hydrogen is a library that you add to your framework, instead of a framework of its own. Your app owns the server entry, the router, and the build. Hydrogen gives you the parts that you compose into each request: a Storefront API client, request handlers for the routes that Shopify owns, and handler groups for the cart and customer accounts.

This guide shows you how to migrate a storefront from legacy Hydrogen, versions 2026-04 and earlier, to the latest version of Hydrogen. Your storefront stays on React Router. If it's still on Remix, then you also move it to React Router 7 as you go. The [`shopify hydrogen upgrade`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-upgrade) command upgrades a storefront only within legacy Hydrogen.

***

## What you'll learn

In this guide, you'll learn how to do the following tasks:

* Check how much of the migration your storefront needs.
* Update your dependencies, scripts, and build configuration.
* Wire the Storefront API client and request handlers into a root middleware, and update your routes, imports, and typed queries.
* Move each storefront feature, like the cart, customer accounts, and analytics, to the new APIs.
* Check that your migrated storefront works.

***

## Requirements

* Have a storefront that uses `@shopify/hydrogen` version 2026.4.x or earlier, on Remix or React Router.
* Install [Node.js](https://nodejs.org/en/download) version 22.12 or later, or version 24.
* Commit your work before you start, so that you can compare each step with your original code.

***

## How the migration works

In earlier versions, Hydrogen owned the request. It created the Storefront API client, the cart, and the customer account client in `server.ts`, and passed them to your loaders through the load context. Its CLI ran your development server and built your app.

In version 2026-10, you build each request yourself, in a root middleware:

1. Create a request context from the request, the buyer's IP address, and your market settings.
2. Create a Storefront API client from the request context.
3. Run `handleShopifyRoutes()`, which answers the routes that Hydrogen owns, like `/api/cart` and `/checkout`, before your router runs.
4. Pass the Storefront API client to your loaders through a typed React Router context.
5. If your router returns a 404, then run `handleShopifyRedirects()`, which checks for a Shopify redirect.

Development and builds use plain Vite and React Router commands. The `shopify hydrogen dev` and `shopify hydrogen build` commands, and the `hydrogen()` Vite plugin, aren't part of version 2026-10.

The following table shows where the main parts of a legacy Hydrogen storefront move:

| Legacy Hydrogen | Hydrogen 2026-10 and later |
| - | - |
| `createHydrogenContext()` in `server.ts` | A root middleware that creates the client and runs the request handlers |
| `context.storefront.query()` | `storefrontClient.graphql()` from a typed React Router context |
| `context.cart` and a `/cart` action route | [`createCartServerHandlers()`](https://shopify.dev/docs/api/hydrogen/latest/cart/cart-server-handlers) at `/api/cart`, and a client-side cart store |
| `CartForm` | `useCartForm()` from [`createCartComponents()`](https://shopify.dev/docs/api/hydrogen/latest/cart/create-cart-components) for cart forms, and `useProductForm()` from `createProductComponents()` for add to cart |
| `createCustomerAccountClient()` | `createCustomerAccountClient()` from `@shopify/hydrogen/customer-account`, with [`createCustomerAccountServerHandlers()`](https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/customer-account-server-handlers) and [`createCustomerSession()`](https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/create-customer-session) |
| `Analytics.Provider` and `useAnalytics()` | [`ShopifyScripts`](https://shopify.dev/docs/api/hydrogen/latest/analytics/shopify-scripts) and the `window.Shopify.analytics` event bus |
| `<Image>`, `<Money>`, and `<Pagination>` | Your own components, with helpers like [`formatMoney()`](https://shopify.dev/docs/api/hydrogen/latest/money) and the collection store |
| `getSitemap()` and `getSitemapIndex()` | Your own sitemap queries |

***

## Step 1: Check where your storefront starts

Moving from Remix to React Router and moving from legacy Hydrogen are separate migrations. Legacy Hydrogen runs on either Remix or React Router, so a storefront that already uses React Router can still need the Hydrogen migration.

Check your `package.json` file:

* If it lists `@shopify/hydrogen` at a version earlier than `2026.10`, then your storefront needs the Hydrogen migration. Follow every step in this guide.
* If it lists `@remix-run/*` packages, then your storefront also needs the React Router migration. Follow the Remix tasks in [Step 2](#step-2-update-dependencies) and [Step 7](#step-7-update-routes-and-imports).
* If it lists `react-router` and `@react-router/dev`, has no `@remix-run/*` packages, and has a `react-router.config.ts` file, then your storefront is already on React Router. Skip the Remix tasks.

***

## Step 2: Update dependencies

Install Hydrogen 2026-10:

## Terminal

```bash
npm install @shopify/hydrogen
```

Then update the rest of your dependencies:

* If your storefront uses Remix, then remove the `@remix-run/*` packages, and add `react-router` and `@react-router/dev`.
* Remove `@shopify/cli-hydrogen`, `@shopify/remix-oxygen`, and `react-router-dom`.
* Add `@shopify/mini-oxygen` version 4.2.0 or later, which `vite preview` needs.
* Use `@shopify/cli` version 4.4.0 or later as a development dependency.

Don't update each package to its latest version on its own. Pin every React Router package to the same version, and keep `vite` at version 8 and `react` and `react-dom` at version 19. Newer majors of some of these packages exist, like React Router 8, but Hydrogen 2026-10 is tested with the following versions:

## package.json

```json
{
  "dependencies": {
    "@shopify/hydrogen": "^2026.10.0",
    "isbot": "^5.1.36",
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "react-router": "7.15.1"
  },
  "devDependencies": {
    "@react-router/dev": "7.15.1",
    "@shopify/cli": "4.8.1",
    "@shopify/mini-oxygen": "4.2.2",
    "@shopify/oxygen-workers-types": "^4.1.6",
    "gql.tada": "^1.9.2",
    "graphql": "^16.13.2",
    "typescript": "^5.9.3",
    "vite": "^8.0.3"
  },
  "engines": {
    "node": "^22.12 || ^24"
  }
}
```

Then delete `node_modules` and your lockfile, and reinstall.

To find the versions that the current Hydrogen release uses, check the `package.json` file in the [React Router starter template](https://github.com/Shopify/hydrogen/tree/dist-preview/templates/react-router).

***

## Step 3: Update scripts

Replace the Hydrogen CLI commands in your `package.json` scripts with Vite and React Router commands:

## package.json

```json
{
  "scripts": {
    "dev": "hydrogen skills check --mode=warn && vite dev",
    "dev:https": "hydrogen skills check --mode=warn && vite dev",
    "build": "react-router build",
    "preview": "react-router build && vite preview",
    "deploy": "shopify hydrogen deploy --assets-dir dist/client --worker-dir dist/server",
    "typecheck": "react-router typegen && tsc && hydrogen gql check --fail-on-warn"
  }
}
```

The `hydrogen` command comes with the `@shopify/hydrogen` package. In the `dev` script, it warns you when your project's agent instructions don't match the installed Hydrogen version, without stopping the server. The `dev` and `dev:https` scripts run the same command. Your Vite config turns on local HTTPS when the script name is `dev:https`.

Add the files that these scripts generate to your `.gitignore` file:

## .gitignore

```text
.react-router/
*-graphql-env.d.ts
```

***

## Step 4: Update your Vite config

Remove the `hydrogen()` plugin. Add `localHttps()` from `@shopify/hydrogen/vite` and `oxygen()` from `@shopify/mini-oxygen/vite`, before `reactRouter()`:

## vite.config.ts

```ts
import {reactRouter} from '@react-router/dev/vite';
import {localHttps} from '@shopify/hydrogen/vite';
import {oxygen} from '@shopify/mini-oxygen/vite';
import {defineConfig} from 'vite';


const enabled =
  process.env.VITE_LOCAL_HTTPS === '1' ||
  process.env.npm_lifecycle_event === 'dev:https';


export default defineConfig({
  plugins: [localHttps({enabled}), ...oxygen(), reactRouter()],
  resolve: {tsconfigPaths: true},
  ssr: {
    optimizeDeps: {
      include: [
        'react',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'react-dom',
        'react-dom/server',
        'react-router',
        'react-router > cookie',
        'react-router > set-cookie-parser',
      ],
    },
  },
  server: {
    allowedHosts: ['.tryhydrogen.dev'],
  },
});
```

Keep the following details in mind:

* `oxygen()` returns an array of plugins, so spread it into the list. You don't pass it an entry file, because it uses the React Router server build.
* `localHttps()` doesn't detect the script name. You pass `enabled` yourself.
* The `ssr.optimizeDeps.include` entries prevent module errors in the development server. Keep any entries that your storefront already lists.

The React Router starter template also pins the Oxygen compatibility date, so that MiniOxygen doesn't run a newer runtime locally than Oxygen runs in production. To check whether you need this, refer to the template's [`vite.config.ts` file](https://github.com/Shopify/hydrogen/blob/dist-preview/templates/react-router/vite.config.ts).

***

## Step 5: Add a React Router config

Add a `react-router.config.ts` file to your project's root directory, or update the one you have:

## react-router.config.ts

```ts
import type {Config} from '@react-router/dev/config';


export default {
  appDirectory: 'app',
  buildDirectory: 'dist',
  ssr: true,
  future: {
    v8_middleware: true,
  },
} satisfies Config;
```

Set `buildDirectory` to `dist`. React Router builds to `build` by default, but the `deploy` script uploads from `dist/client` and `dist/server`. Without this setting, the build succeeds but the deploy uploads nothing.

The `v8_middleware` flag turns on the root middleware that you add in the next step.

You can keep your route files where they are. If your storefront uses flat route filenames, like `($locale).products.$handle.tsx`, then use `@react-router/fs-routes` in your `app/routes.ts` file to keep them. Renaming routes during the migration can drop them without an error. Remove any `hydrogenRoutes()` wrapper from `app/routes.ts`.

***

## Step 6: Wire Hydrogen into your app

Most of the migration is one context file and one middleware. The following code follows the shape of the [React Router starter template](https://github.com/Shopify/hydrogen/tree/dist-preview/templates/react-router). Check each signature against the types in your installed version.

### Create the environment context

The server entry passes the Oxygen environment to your app through a typed React Router context. Create the context and the environment's type in a library file. List the variables that your storefront reads, like the ones in [Step 9](#step-9-connect-your-store):

## app/lib/env.ts

```ts
import {createContext} from 'react-router';


export type Env = {
  PUBLIC_STORE_DOMAIN: string;
  PUBLIC_STOREFRONT_ID: string;
  PRIVATE_STOREFRONT_API_TOKEN: string;
  PUBLIC_CHECKOUT_DOMAIN?: string;
  SHOP_ID?: string;
  PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID?: string;
  SESSION_SECRET?: string;
};


export const envContext = createContext<Env>();
```

The global `Env` type that `server.ts` uses comes from your `env.d.ts` file. Make it extend this type, and add `cache` and `waitUntil` to the router context's type, because `server.ts` sets them. For an example, refer to the template's [`env.d.ts` file](https://github.com/Shopify/hydrogen/blob/dist-preview/templates/react-router/env.d.ts).

### Simplify the server entry

Add `app/lib/env.ts` and replace `env.d.ts` before updating `server.ts`:

## app/lib/env.ts

```ts
import {createContext} from 'react-router';


export type Env = {
  PUBLIC_STORE_DOMAIN: string;
  PRIVATE_STOREFRONT_API_TOKEN: string;
  PUBLIC_STOREFRONT_ID?: string;
};


export const envContext = createContext<Env>();
```

## env.d.ts

```ts
/// <reference types="vite/client" />
/// <reference types="react-router" />
/// <reference types="@shopify/oxygen-workers-types" />


import type {CacheInstance} from '@shopify/hydrogen';


import type {Env as AppEnv} from './app/lib/env';


declare module 'react-router' {
  interface RouterContextProvider {
    cache: CacheInstance;
    waitUntil: ExecutionContext['waitUntil'];
  }
}


declare global {
  interface Env extends AppEnv {}
}
```

`server.ts` opens the cache, passes the Oxygen environment and `waitUntil` to the router, and runs the request handler:

## server.ts

```ts
import {createRequestHandler, RouterContextProvider} from 'react-router';
import * as serverBuild from 'virtual:react-router/server-build';


import {envContext} from '~/lib/env';


const handleRequest = createRequestHandler(serverBuild, process.env.NODE_ENV);


export default {
  async fetch(request: Request, env: Env, executionContext: ExecutionContext) {
    const routerContext = new RouterContextProvider();
    routerContext.cache = await caches.open('hydrogen');
    routerContext.set(envContext, env);
    routerContext.waitUntil = executionContext.waitUntil.bind(executionContext);
    return handleRequest(request, routerContext as never);
  },
};
```

### Create the Storefront API client

Create the client for each request in a library file. Pass the buyer's IP address to the request context, and the cache, `waitUntil`, and storefront ID to the client config:

## app/lib/storefront.ts

```ts
import {
  type CacheInstance,
  type CachingStrategy,
  createShopifyRequestContext,
  createStorefrontClient,
  type RequestScopedPrivateStorefrontClient,
  type ShopifyRequestContext,
} from '@shopify/hydrogen';
import {createContext} from 'react-router';


import type {Env} from '~/lib/env';


export const storefrontClientContext =
  createContext<RequestScopedPrivateStorefrontClient<{cache?: CachingStrategy}>>();
export const storefrontRequestContext = createContext<ShopifyRequestContext>();


export function createRequestStorefrontClient(
  request: Request,
  env: Env,
  cache: CacheInstance,
  waitUntil: ExecutionContext['waitUntil'],
) {
  return createStorefrontClient({
    type: 'private',
    requestContext: createShopifyRequestContext({
      request,
      i18n: {country: 'US', language: 'EN'},
      buyerIp: getBuyerIp(request.headers),
    }),
    config: {
      storeDomain: env.PUBLIC_STORE_DOMAIN,
      privateStorefrontToken: env.PRIVATE_STOREFRONT_API_TOKEN,
      storefrontId: env.PUBLIC_STOREFRONT_ID,
      cache,
      waitUntil,
    },
  });
}


function getBuyerIp(headers: Headers) {
  for (const header of ['oxygen-buyer-ip', 'cf-connecting-ip', 'x-forwarded-for']) {
    const ip = headers.get(header)?.split(',')[0]?.trim();
    if (ip) return ip;
  }
  if (process.env.NODE_ENV !== 'production') return '127.0.0.1';
  throw new Error('No buyer IP header on the request');
}
```

`getBuyerIp()` is your app's code, not a Hydrogen export. If your storefront doesn't have a private Storefront API token, then use a public client instead. To compare the two, refer to [Query the Storefront API](https://shopify.dev/docs/storefronts/hydrogen/data-fetching).

### Add route templates

Route templates tell Hydrogen how your app's URLs map to Shopify resources. Create them in their own file:

## app/lib/route-templates.ts

```ts
import {createShopifyRouteTemplates} from '@shopify/hydrogen';


export const routeTemplates = createShopifyRouteTemplates({
  productInCollection: '/products/:productHandle',
});
```

If your storefront uses paths that differ from Shopify's defaults, like a renamed cart page, then add them here. To learn more, refer to [Configure route templates](https://shopify.dev/docs/storefronts/hydrogen/routing).

### Add the cart handlers

Create the cart's server handlers and its React components:

## app/lib/cart-handlers.ts

```ts
import {createCartServerHandlers} from '@shopify/hydrogen';


export const cartHandlers = createCartServerHandlers();
```

## app/lib/cart.ts

```ts
import {createCartComponents} from '@shopify/hydrogen/react';


import type {cartHandlers} from '~/lib/cart-handlers';


export const {CartProvider, useCart, useCartForm} =
  createCartComponents<typeof cartHandlers>();
```

### Add a session manager

The request handlers need a session manager with four methods. A per-request map works until you add customer accounts, which need a cookie-backed session manager:

## app/lib/session.ts

```ts
export function createRequestSessionManager(request: Request) {
  const store = new Map<string, unknown>();
  return {
    getSessionOrigin: () => new URL(request.url).origin,
    getSessionItem: (key: string) => store.get(key) ?? null,
    setSessionItem: (key: string, value: unknown) => void store.set(key, value),
    removeSessionItem: (key: string) => void store.delete(key),
  };
}
```

### Add the root middleware

In `app/root.tsx`, export a middleware that builds the request, runs the request handlers, and passes the client to your loaders:

## app/root.tsx

```tsx
import {handleShopifyRedirects, handleShopifyRoutes} from '@shopify/hydrogen';


import type {Route} from './+types/root';
import {cartHandlers} from '~/lib/cart-handlers';
import {envContext} from '~/lib/env';
import {routeTemplates} from '~/lib/route-templates';
import {createRequestSessionManager} from '~/lib/session';
import {
  createRequestStorefrontClient,
  storefrontClientContext,
  storefrontRequestContext,
} from '~/lib/storefront';


export const middleware: Route.MiddlewareFunction[] = [
  async ({context, request}, next) => {
    const env = context.get(envContext);
    const storefrontClient = createRequestStorefrontClient(
      request,
      env,
      context.cache,
      context.waitUntil,
    );
    const requestContext = storefrontClient.requestContext;
    const sessionManager = createRequestSessionManager(request);


    const shopifyRoute = handleShopifyRoutes({
      request,
      requestContext,
      sessionManager,
      storefrontClient,
      routeTemplates,
      handlers: [cartHandlers],
    });
    if (shopifyRoute) return shopifyRoute;


    context.set(storefrontClientContext, storefrontClient);
    context.set(storefrontRequestContext, requestContext);


    const response = await next();


    if (response.status === 404) {
      const redirect = await handleShopifyRedirects({
        request,
        storefrontClient,
        routeTemplates,
      });
      if (redirect) return redirect;
    }


    requestContext.applyResponseHeaders(response.headers);
    return response;
  },
];
```

`handleShopifyRoutes()` decides synchronously whether it owns a request. It returns a promise of a response, or `null`, so check the result without awaiting it. If you call it inside a `try` block, then use `return await shopifyRoute` so that your `catch` block handles its errors.

Reuse the request context from the Storefront API client. Creating a second one makes `handleShopifyRoutes()` throw an error.

The following lines are easy to leave out, and nothing reports an error when they're missing:

| Line | What goes wrong without it |
| - | - |
| `requestContext.applyResponseHeaders()` | Shopify's response headers are missing from your pages. |
| `routeTemplates` in `handleShopifyRoutes()` | `?variant=` links on your custom product paths don't redirect. |

To learn more about the request flow, refer to [Wire Hydrogen request handlers](https://shopify.dev/docs/storefronts/hydrogen/request-handlers).

### Read the client in loaders

Replace `context.storefront` in your loaders with the client from the React Router context. The client's `graphql()` method replaces `query()`:

## app/routes/products.$handle.tsx

```tsx
import {storefrontClientContext} from '~/lib/storefront';


export async function loader({context, params}: Route.LoaderArgs) {
  const storefront = context.get(storefrontClientContext);
  const {data} = await storefront.graphql(PRODUCT_QUERY, {
    variables: {handle: params.handle},
  });
  // ...
}
```

***

## Step 7: Update routes and imports

Update your route modules for React Router 7 and Hydrogen 2026-10:

* If your storefront uses Remix, then change imports from `@remix-run/react`, `@remix-run/node`, and `@remix-run/server-runtime` to `react-router`.
* Replace `json()` with a plain object, and replace `defer()` with an object that contains promises. A deferred loader that you don't migrate correctly can leave a section of the page loading forever, with no error.
* Cast `useMatches()[i].handle` to your app's handle type before you read its properties. In React Router 7, `handle` is typed as `unknown`.
* Delete route files for paths that the request handlers own, like `/api/cart`, `/checkout`, cart permalinks, and `/account/login`. For the full list, refer to [Routes Hydrogen handles](https://shopify.dev/docs/storefronts/hydrogen/request-handlers#routes-hydrogen-handles). Keep a catch-all route, like `$.tsx`, because middleware runs only for matched routes.

To find the imports that you missed, run `npm run typecheck`.

***

## Step 8: Update types and Graph​QL

Hydrogen 2026-10 includes the Storefront API and Customer Account API schemas, and a TypeScript plugin for query completions in your editor. Add the plugin to your `tsconfig.json` file:

## tsconfig.json

```json
{
  "compilerOptions": {
    "plugins": [{"name": "@shopify/hydrogen/ts-plugin"}]
  }
}
```

Then update your types:

* Wrap each `#graphql` string in `gql()` from `@shopify/hydrogen`, or from `@shopify/hydrogen/customer-account` for Customer Account API queries.
* Remove `@shopify/hydrogen/react-router-types` and `@remix-run/server-runtime` from `compilerOptions.types`.
* Remove any gql.tada `schema` or `schemas` settings, and any generated `storefrontapi.generated.d.ts` files from earlier versions.
* Type query results with `ResultOf` and the `StorefrontApi` namespace. The `gql()` function returns a typed query string, so `FragmentOf` doesn't apply.
* Replace exports that Hydrogen no longer has, and update imports that moved. Refer to [Removed and moved exports](#removed-and-moved-exports).

Query results are typed from the fields that you select, so they're narrower than the full API types. If a component prop uses a full type, like `ProductVariant`, then change the prop to the fields that the component reads. For a query on a union field, like `search`, narrow the results with `Extract` on `__typename`.

`hydrogen gql check` in the `typecheck` script catches invalid fields in `gql()` queries, which `tsc` doesn't. To learn more, refer to [Type and validate Storefront API queries](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/typed-queries).

### Removed and moved exports

Hydrogen 2026-10 moved some legacy Hydrogen exports or changed how you import them, and removed many others. Use these lists to fix import errors, and to check for leftover imports when you finish.

The following exports moved or changed. Update the import, and keep using the export:

| Legacy Hydrogen | Hydrogen 2026-10 |
| - | - |
| `ShopPayButton` from `@shopify/hydrogen` | `ShopPayButton` from `@shopify/hydrogen/react` or `@shopify/hydrogen/vue` |
| `createCustomerAccountClient()` from `@shopify/hydrogen` | `createCustomerAccountClient()` from `@shopify/hydrogen/customer-account` |
| `AnalyticsEventName` as a value | `AnalyticsEventName` is a type only. Use `AnalyticsEvent` for the event keys. |

The following exports are still in `@shopify/hydrogen`, so keep their imports: `AnalyticsEvent`, `createStorefrontClient()` with new options, `flattenConnection()`, `getSelectedProductOptions()`, `formatMoney()`, and the `MoneyV2` type.

The following exports are removed. Replace each one:

| Legacy Hydrogen | Use instead |
| - | - |
| `createHydrogenContext()`, `hydrogenContext`, `createRequestHandler()`, `hydrogenRoutes()`, `hydrogenPreset()`, and `@shopify/hydrogen/oxygen` | A root middleware. Refer to [Add the root middleware](#add-the-root-middleware). |
| `storefrontRedirect()` | `handleShopifyRedirects()` |
| `graphiqlLoader()` | Nothing. `handleShopifyRoutes()` serves `/graphiql` in development. |
| `CacheLong()`, `CacheShort()`, `CacheNone()`, `CacheCustom()`, and `createWithCache()` | `Cache.long()`, `Cache.short()`, `Cache.none()`, `Cache()`, and `createRunWithCache()` or `createFetchWithCache()` |
| `createCartHandler()` and the `cart*Default()` functions, like `cartLinesAddDefault()` | `createCartServerHandlers()` |
| `CartForm`, `OptimisticInput`, `useOptimisticCart()`, and `useOptimisticData()` | Cart forms and the cart store. Refer to [Migrate the cart](#migrate-the-cart). |
| `VariantSelector`, `useOptimisticVariant()`, `getProductOptions()`, and `getAdjacentAndFirstAvailableVariants()` | The product form store. Refer to [Build product pages](https://shopify.dev/docs/storefronts/hydrogen/products). |
| `Image`, `MediaFile`, `Money`, and `useMoney()` | Your own components, with `formatMoney()` for prices. Refer to [Migrate UI components](#migrate-ui-components). |
| `Pagination` and `getPaginationVariables()` | The collection store |
| `Seo`, `getSeoMeta()`, `getSitemap()`, and `getSitemapIndex()` | React Router's `meta` export, and your own sitemap queries. Refer to [Migrate sitemaps](#migrate-sitemaps). |
| `createContentSecurityPolicy()`, `NonceProvider`, and `useNonce()` | Your own CSP code. Pass the nonce to `ShopifyScripts` with the `nonce` prop. |
| `Analytics.Provider` and the other `Analytics` components, `useAnalytics()`, `getShopAnalytics()`, and `useCustomerPrivacy()` | `ShopifyScripts`, and events that your app publishes. Refer to [Migrate analytics](#migrate-analytics). |
| `Video`, `ExternalVideo`, `ModelViewer`, `RichText`, `Script`, `parseMetafield()`, and `parseGid()` | Your own code. Hydrogen 2026-10 has no replacement. |
| `hydrogen()` from `@shopify/hydrogen/vite` | `localHttps()` from `@shopify/hydrogen/vite`, and `oxygen()` from `@shopify/mini-oxygen/vite`. Refer to [Step 4](#step-4-update-your-vite-config). The `hydrogen()` export still exists, but it throws an error when you call it. |

For removed types, `I18nBase` is now `I18nConfig`. Import Storefront API object types from `@shopify/hydrogen/storefront-api-types`, and Customer Account API types from `@shopify/hydrogen/customer-account-api-types`. For other removed types, like `Storefront` or `HydrogenCart`, write a type for the fields that you use.

***

## Step 9: Connect your store

Add your store's environment variables to `.env`. If you linked your project to a Hydrogen storefront, then run `npx shopify hydrogen env pull` to get them. On Oxygen, a linked storefront provides them for you.

## .env

```bash
PUBLIC_STORE_DOMAIN=your-store.myshopify.com
PUBLIC_STOREFRONT_ID=<your storefront ID>
PRIVATE_STOREFRONT_API_TOKEN=<your private Storefront API token>
PUBLIC_CHECKOUT_DOMAIN=<your checkout domain>
# PUBLIC_STOREFRONT_API_TOKEN=


# Customer accounts


SHOP_ID=<your numeric shop ID>
PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID=<your Customer Account API client ID>
SESSION_SECRET=<a random string of 32 or more characters>
```

Leave `PUBLIC_STOREFRONT_API_TOKEN` commented out unless you use a public token. An empty value is an empty string, which the client rejects.

To check the migration before you connect your store, you can point the client at [mock.shop](https://shopify.dev/docs/storefronts/headless/mock-shop) instead. mock.shop accepts only a public client with no token. It rejects private tokens.

***

## Step 10: Migrate your storefront's features

Steps 1 to 9 apply to every storefront. The rest of the migration depends on the features your storefront has. Search your original code for each feature, and migrate the ones you find.

Migrate the first three features in order, because each one uses the one before it:

1. Markets: Look for `@inContext`, a `localization` query, a `pathPrefix`, or a country selector. Markets set the currency and language that analytics use. Follow [Support multiple markets](https://shopify.dev/docs/storefronts/hydrogen/markets).
2. Customer accounts: Look for `createCustomerAccountClient`, `/account` routes, or login links. Follow [Set up customer accounts](https://shopify.dev/docs/storefronts/hydrogen/customer-accounts).
3. Analytics and consent: Look for `Analytics.Provider`, `useAnalytics`, `getShopAnalytics`, a GTM or `dataLayer` snippet, or a cookie banner. Migrate analytics and consent together. Follow [Add analytics and consent](https://shopify.dev/docs/storefronts/hydrogen/analytics).

Then migrate the others in any order:

| If your storefront has | Then follow |
| - | - |
| A cart page, a cart drawer, or add to cart buttons | [Build cart UI](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart) and [Build a cart drawer](https://shopify.dev/docs/storefronts/hydrogen/cart/cart-drawer) |
| Extra cart line fields or cart metafields | [Use cart metafields](https://shopify.dev/docs/storefronts/hydrogen/cart/metafields) |
| Product pages with variant options | [Build product pages with variant selection](https://shopify.dev/docs/storefronts/hydrogen/products) |
| Collection pages, filters, pagination, or search | [Build collection and search pages](https://shopify.dev/docs/storefronts/hydrogen/collections-search) |
| Shop Pay buttons | [Add Shop Pay buttons](https://shopify.dev/docs/storefronts/hydrogen/shop-pay) |
| Sitemap routes or SEO metadata | [Migrate sitemaps](#migrate-sitemaps) |

[Subscriptions](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/subscriptions), [B2B](https://shopify.dev/docs/storefronts/headless/bring-your-own-stack/b2b), content pages, gift cards, product recommendations, and integrations that you built yourself are your app's code. Migrate them like any other route or component.

Keep a list of the features you didn't find in your original code. When you finish, that list shows that you skipped those features on purpose, and didn't miss them.

### Migrate the cart

Hydrogen 2026-10 removes `CartForm`. Replace each `CartForm` with a form that the cart store submits:

* Add to cart on a product page: Render `ProductProvider` from `createProductComponents()` inside `CartProvider`. The product form gets the cart store from `CartProvider`. In the form, spread `formProps()`, `register("merchandiseId", {})`, `register("quantity", {defaultValue: 1})`, and `register("addToCart", {})` from `useProductForm()`. Refer to [Add to cart](https://shopify.dev/docs/storefronts/hydrogen/products#step-5-add-to-cart).
* Line quantities, line removal, discount codes, the order note, and cart attributes: Use `useCartForm()` from `createCartComponents()`. Spread `formProps()` on the form, and use `register()` for each field and action, like `register("lineId", {value: line.id})` and `register("remove")`. Refer to [Build cart UI](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart).
* Without React or Vue: Use `createCartFormRegister()` and `createCartStore()` from `@shopify/hydrogen`, and submit the form with the store's `handleFormSubmit()`.

Each form posts to `/api/cart`, so it works before JavaScript loads. For pending state, read the store instead of a fetcher: `useCart((state) => state.pending.lines)` in a cart form, or `pending` from `useProductForm()`.

Cart forms have actions for lines, discount codes, the note, and attributes only. To update cart metafields, write the mutation in your own route, then call `refresh()` from `useCartActions()`. Refer to [Cart metafields](https://shopify.dev/docs/storefronts/hydrogen/cart/metafields).

The cart moves from loader data to a client-side store. The following changes are easy to miss, because adding to the cart still works when they're wrong:

* Render every cart surface from `useCart((state) => state.data)`. If your layout passes a deferred `cart` from the root loader to `<Await>`, then the drawer and cart page stay empty, even though the header count updates. Delete the deferred cart from the loader.
* Open the cart drawer from the cart store, not from a fetcher. `useCartForm()` submits through the cart store, so `useFetchers()` never sees the request. Open the drawer when `useCart((state) => state.pending.lines.size > 0)` becomes `true`. Don't open it based on `totalQuantity`, which changes when an existing cart loads.
* Load the cart in the root loader with `await cartHandlers.get({storefrontClient, request})`, and pass the result's `data` to `CartProvider` as `initialData`. That's the `{cart, errors?}` envelope, not the cart object alone. Without this, the cart shows its empty state before it loads.
* Disable line item controls only for new lines whose ID starts with `optimistic:`. If you disable them for every pending line, then the buttons lock on every click.
* If you wrapped `createCartHandler()` to add fields, then pass a `fragment` to `createCartServerHandlers()` instead.

### Migrate customer accounts

Register the account handlers next to the cart handlers, in the `handlers` array of `handleShopifyRoutes()`. The handlers own `/account/login`, `/account/logout`, `/account/authorize`, and `/account/refresh`, so delete any route files for those paths. Link to them with `<a>` and `<form>` elements, not React Router's `<Link>` and `<Form>`, so that the request reaches the server.

Pass the same customer session to `createCartServerHandlers()`, pass the cart handlers to `createCustomerAccountServerHandlers()` as `cartServerHandlers`, and pass `sessionManager` and `requestContext` to `cartHandlers.get()`, so that the cart knows who's logged in. Use the library's login and callback functions instead of building OAuth URLs yourself.

Customer login needs HTTPS, even locally. Run `npm run dev:https` and open `https://local.tryhydrogen.dev:5173`. To set up certificates, refer to [Test sign-in locally with HTTPS](https://shopify.dev/docs/storefronts/hydrogen/customer-accounts#step-6-test-sign-in-locally-with-https).

### Migrate analytics

Hydrogen 2026-10 removes `Analytics.Provider`, the `Analytics.ProductView` and other view components, `useAnalytics()`, and `getShopAnalytics()`. The event bus still exists, but nothing publishes events to it for you. Render `ShopifyScripts` from `@shopify/hydrogen/react` in your root layout, and publish every event, including `PAGE_VIEWED`, to `window.Shopify.analytics`. The page view that `ShopifyScripts` dispatches is for Shopify's performance script. Shopify analytics and destinations like GA4 read only the bus.

Port every event that your storefront tracks. It's easy to rewrite your tracking component to publish only page views, which drops product views, cart views, and cart changes with no error. Publish route events from tracker components when the location changes, and track cart changes with `useCartAnalytics()`.

Build the `shop` payload in your root loader. If your storefront sends events to its own destination, like GTM, then register it with `addDestination()`. Consent controls which events reach destinations, so migrate your consent settings at the same time.

### Migrate UI components

Hydrogen 2026-10 doesn't export `<Image>`, `<MediaFile>`, `<Money>`, or `<Pagination>`. Replace them with your own components:

* For images, use an `<img>` element with Shopify CDN URLs, or your framework's image component.
* For prices, use `formatMoney()`. Let your price component accept any object with `amount` and `currencyCode`, so that it works with both Storefront API and Customer Account API prices.
* For pagination, use the collection store. "Load more" is a link that JavaScript upgrades to load in place.

Variant options are links that the product form store upgrades. Render each option value as an `<a href>` element, and spread the store's `register()` props on it, so that selecting an option updates the page without a full navigation.

After you replace your root layout, check that the skip link appears when it gets focus, that focus moves to the main content after navigation, and that icon buttons have accessible names.

Delete hooks and helpers that wrapped the old cart fetchers and routes.

### Migrate sitemaps

Hydrogen 2026-10 doesn't include `getSitemap()`, `getSitemapIndex()`, or `getSeoMeta()`. Write your own sitemap queries and XML responses in a library file, like `app/lib/sitemap.ts`, and run the queries with `storefront.graphql()`. Return SEO tags from React Router's `meta` export. Keep any URL changes that your sitemap made, like locale prefixes or renamed routes.

***

## Step 11: Check your migration

Run your type check and build. Both must finish without errors:

## Terminal

```bash
npm run typecheck
npm run build
```

Most missed imports, return helpers, and query problems show up here. Fix the cause instead of suppressing the error.

Then start your development server and test your storefront:

## Terminal

```bash
npm run dev
```

Pay attention to the following areas, which can stop working while your storefront still builds:

* Analytics: Check that your app publishes page views, product views, cart views, and cart changes to the bus. `ShopifyScripts` doesn't publish any of them.
* Leftover imports: Search your app for the names in [Removed and moved exports](#removed-and-moved-exports). `ShopPayButton` from `@shopify/hydrogen/react` and `createCustomerAccountClient()` from `@shopify/hydrogen/customer-account` are current imports, so don't flag them.
* Cart: Add, remove, and change the quantity of a product, and check that the cart drawer opens when you add a product.
* Customer login: Run `npm run dev:https` and complete the full login flow.
* Variant selection: Check that selecting an option updates the page without a full navigation.

Before you deploy, refer to [Check your storefront before launch](https://shopify.dev/docs/storefronts/hydrogen/production-checklist).

***

## Next steps

[Wire Hydrogen request handlers\
\
](https://shopify.dev/docs/storefronts/hydrogen/request-handlers)

[Learn which routes the request handlers own and how they fit around your router.](https://shopify.dev/docs/storefronts/hydrogen/request-handlers)

[Deploy to Oxygen\
\
](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen)

[Deploy your migrated storefront to Oxygen.](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen)

[Hydrogen API reference\
\
](https://shopify.dev/docs/api/hydrogen/latest)

[Explore the functions, stores, and components that Hydrogen exports.](https://shopify.dev/docs/api/hydrogen/latest)

***
