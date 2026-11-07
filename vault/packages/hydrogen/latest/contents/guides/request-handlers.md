---
title: Wire Hydrogen request handlers
description: >-
  Run Hydrogen's request handlers around your framework's router so that the
  Storefront API proxy, cart API, checkout, permalinks, and Shopify redirects
  work in your storefront.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/request-handlers'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/request-handlers.md'
api_name: hydrogen
---

# Wire Hydrogen request handlers

A Shopify storefront answers more than page requests. Browser scripts call the [Storefront API](https://shopify.dev/docs/api/storefront) through the storefront's own origin, apps link to [cart permalinks](https://shopify.dev/docs/apps/build/checkout/create-cart-permalinks), customers follow checkout links, and old Liquid URLs need to redirect. Hydrogen's request handlers restore these routes in a headless storefront, so apps, analytics, and agents can integrate with your storefront the same way they integrate with a theme.

In this guide, you'll wire two functions around your framework's router: [`handleShopifyRoutes()`](https://shopify.dev/docs/api/hydrogen/latest/request-handling/handle-shopify-routes), which answers Shopify-owned routes before your router runs, and [`handleShopifyRedirects()`](https://shopify.dev/docs/api/hydrogen/latest/request-handling/handle-shopify-redirects), which checks for Shopify redirects after your router returns a 404.

***

## How it works

Hydrogen's request handlers are framework-neutral, but where they run depends on your framework. React Router follows this request flow:

```text
Request
  -> createShopifyRequestContext()          once per request
  -> handleShopifyRoutes()                  before framework routing
  -> framework router
  -> handleShopifyRedirects()               only after a 404
  -> framework 404 page
  -> requestContext.applyResponseHeaders()  on your final response
```

1. Your server creates a Shopify request context with [`createShopifyRequestContext()`](https://shopify.dev/docs/api/hydrogen/latest/request-handling/create-shopify-request-context). The Storefront API client and the request handlers share it for the rest of the request.
2. `handleShopifyRoutes()` checks the request against the routes that Hydrogen owns. If the request matches, then it returns a response and your router never sees the request.
3. If nothing matches, then your framework routes and renders the request as usual.
4. If your router returns a 404, then `handleShopifyRedirects()` checks for a Shopify redirect for that URL. If one exists, then it returns the redirect.
5. If there's no redirect, then your framework renders its 404 page.

Before your response leaves the server, call `requestContext.applyResponseHeaders(response.headers)`. Responses from `handleShopifyRoutes()` and `handleShopifyRedirects()` already include them.

`handleShopifyRedirects()` can make a Storefront API request, so it runs only after a 404.

### Routes Hydrogen handles

`handleShopifyRoutes()` answers the following routes:

| Route | Purpose |
| - | - |
| `/api/{version}/graphql.json` | Proxies Storefront API requests from browser scripts through your origin. |
| `/__shopify/*` | Proxies other Shopify APIs that browser modules call. |
| `/checkout` | Redirects customers to checkout for the current cart, or to `/` without one. |
| `/cart/{variantId}:{quantity}` | Cart permalinks that redirect to your store's domain (`demostore.mock.shop` for [mock.shop](https://shopify.dev/docs/storefronts/headless/mock-shop) stores). |
| `/buy/{itemId}:{quantity}` | Buy permalinks for agentic commerce. |
| `/cart.js`, `/cart/add.js`, `/cart/update.js`, `/cart/change.js`, `/cart/clear.js` | The [AJAX cart](https://shopify.dev/docs/api/ajax/reference/cart) URLs that theme apps call, part of [what installed apps get on Hydrogen](https://shopify.dev/docs/storefronts/hydrogen/installed-apps). |
| `/api/mcp`, `/api/ucp/mcp` | The storefront's MCP endpoints for agents. |
| `/account/login`, `/account/authorize`, `/account/logout`, `/account/refresh` | Without a matching registered handler, `GET` and `HEAD` redirect to your store's domain, and other methods return `405`. |
| `GET` or `HEAD /.well-known/ucp` | Proxies your store's UCP discovery profile. |
| `/.well-known/*` | Allowlisted resources, like the Apple Pay domain association file, proxied from your Online Store. |
| `/graphiql` | A GraphiQL explorer. Development only. |
| `/products/{handle}?variant={id}` | Redirects Liquid-style variant URLs to option parameters. |
| Registered handler groups | For example, `/api/cart`, `/api/predictive-search`, and `/account/login`. |

Checkout and cart permalink redirects outside `/` default to `payment=shop_pay`; an incoming `payment` parameter overrides it.

`handleShopifyRedirects()` handles the following requests after a 404:

* `/admin`, which redirects to your store's Shopify admin.
* Shopify's standard storefront paths, when [route templates](https://shopify.dev/docs/storefronts/hydrogen/routing) map them to your app's paths.
* [URL redirects](https://help.shopify.com/manual/online-store/menus-and-links/url-redirect) that the merchant configures in the Shopify admin.
* Same-origin redirects from query parameters.

***

## Requirements

* [Deploy a template](https://shopify.dev/docs/storefronts/hydrogen/getting-started/deploy-a-template), or [add Hydrogen to an existing project](https://shopify.dev/docs/storefronts/hydrogen/getting-started/add-to-existing-project).
* Create a [Storefront API client](https://shopify.dev/docs/storefronts/hydrogen/data-fetching) in your server request lifecycle.
* Create a [route templates](https://shopify.dev/docs/storefronts/hydrogen/routing) manifest. It can be empty.
* For React Router 7, set `future.v8_middleware: true` in `react-router.config.ts`. React Router 8 turns on middleware by default.

***

## Step 1: Create a session manager

A session manager is required only when a registered handler group stores session values, such as the customer account handlers. A cart-only storefront can omit it.

If you're adding [customer accounts](https://shopify.dev/docs/storefronts/hydrogen/customer-accounts) next, then start with a session manager that keeps values in memory for the length of one request:

## In-memory session manager

lib/session.ts

```ts
import type {WritableCustomerSessionManager} from '@shopify/hydrogen/customer-account';


export function createEphemeralSessionManager(request: Request): WritableCustomerSessionManager {
  const data = new Map<string, unknown>();
  const origin = new URL(request.url).origin;


  return {
    getSessionOrigin: () => origin,
    getSessionItem: (key: string) => data.get(key),
    setSessionItem: (key: string, value: unknown) => {
      data.set(key, value);
    },
    removeSessionItem: (key: string) => {
      data.delete(key);
    },
  };
}
```

When you add customer accounts, replace it with a cookie-backed session manager.

***

## Step 2: Run Shopify routes before your router

Create a request handler that runs before your framework's router. It creates the Storefront API client and session manager, and passes the same objects to `handleShopifyRoutes()` that the rest of the request uses. It also checks for Shopify redirects after a 404 and applies response headers, which the next steps describe. The `createRequestStorefrontClient()` helper comes from [Storefront API client](https://shopify.dev/docs/storefronts/hydrogen/data-fetching).

Don't await `handleShopifyRoutes()` right away. It returns `null` synchronously when no route matches, and a promise of a `Response` when one does. Check the result first, and then return it.

## Shopify request handler

lib/shopify.ts

```ts
import {
  handleShopifyRedirects,
  handleShopifyRoutes,
  type StorefrontClient,
} from '@shopify/hydrogen';


import {routeTemplates} from './route-templates';
import {createEphemeralSessionManager} from './session';
import {createRequestStorefrontClient} from './storefront';


export async function handleRequest(
  request: Request,
  next: (request: Request, storefrontClient: StorefrontClient) => Promise<Response>,
): Promise<Response> {
  const storefrontClient = createRequestStorefrontClient(request);
  const {requestContext} = storefrontClient;
  const sessionManager = createEphemeralSessionManager(request);


  // Answer Shopify-owned routes before your router runs.
  const shopifyResponse = handleShopifyRoutes({
    request,
    requestContext,
    sessionManager,
    storefrontClient,
    routeTemplates,
    handlers: [],
  });
  if (shopifyResponse) return shopifyResponse;


  // Run your router. Pass the client so your loaders can reuse it.
  let response = await next(request, storefrontClient);


  // Check for a Shopify redirect only after your router returns a 404.
  if (response.status === 404) {
    const redirect = await handleShopifyRedirects({
      request,
      storefrontClient,
      routeTemplates,
    });
    if (redirect) return redirect;
  }


  // Headers may be immutable, so copy the response before you change them.
  response = new Response(response.body, response);
  requestContext.applyResponseHeaders(response.headers);
  return response;
}
```

If your storefront doesn't need a session manager, then leave out the `./session` import and the `sessionManager` lines.

Call `handleRequest()` from your app's request entry point, the first server code that runs for each request. Pass a `next` function that runs your framework's router and returns its response. In `next`, store the Storefront API client in request-scoped context, so your loaders reuse it instead of creating a second client. In Nuxt, run `handleShopifyRoutes()` in server middleware, `handleShopifyRedirects()` in `error.vue` after a 404, and `applyResponseHeaders()` in Nitro's `beforeResponse` hook. For the React Router and Next.js code, refer to [Framework wiring](#framework-wiring).

If your server wraps requests in a `try/catch` that converts errors into a `Response`, then use `return await shopifyResponse` inside that block, so that a rejected route reaches your error handling.

In Next.js, the entry point is `proxy.ts`, which replaces `middleware.ts` in Next.js 16. The proxy can't pass the client to Server Components, so its `next` function forwards the request headers instead, including the original URL in the `x-storefront-url` header. Keep the proxy's `config.matcher` broad, so that it reaches `/admin`, `/api/cart`, and `/api/{version}/graphql.json`. Don't narrow it to a list of Hydrogen paths, because that list goes stale when Hydrogen adds routes.

***

## Step 3: Check for redirects after a 404

`handleRequest()` calls `handleShopifyRedirects()` only after `next()` returns a 404. It takes the request, the Storefront API client, and your route templates. It doesn't take a session manager.

Add one more file, so that unknown paths reach this check:

#### React Router

Add a final splat route that returns a 404, so that unknown paths reach the root middleware as a 404 response:

## Splat route

app/routes/catchall.tsx

```tsx
export function loader() {
  throw new Response('Not Found', {status: 404});
}


export default function CatchAllRoute() {
  return null;
}
```

Register the splat route last in `app/routes.ts`:

## Register the splat route

app/routes.ts

```ts
import {type RouteConfig, index, route} from '@react-router/dev/routes';


export default [
  index('routes/home.tsx'),
  route('*', 'routes/catchall.tsx'),
] satisfies RouteConfig;
```

#### Next.js

`proxy.ts` can't inspect the routed response, because `NextResponse.next()` returns before the router runs. Run the check in `app/not-found.tsx` instead, using the URL that the proxy forwarded:

## Check for Shopify redirects after a 404

app/not-found.tsx

```tsx
import {handleShopifyRedirects} from '@shopify/hydrogen';
import {headers} from 'next/headers';
import {redirect} from 'next/navigation';
import {connection} from 'next/server';
import {Suspense} from 'react';


import {routeTemplates} from '@/lib/route-templates';
import {createRequestStorefrontClient} from '@/lib/storefront';


export default function NotFound() {
  return (
    <div>
      <Suspense fallback={null}>
        <RedirectChecker />
      </Suspense>
      <h1>Page not found</h1>
    </div>
  );
}


async function RedirectChecker() {
  await connection();
  const requestHeaders = await headers();
  const url = requestHeaders.get('x-storefront-url');


  if (url) {
    // Keep the request headers. The private client reads the buyer IP from them.
    const request = new Request(url, {headers: requestHeaders});
    const result = await handleShopifyRedirects({
      request,
      storefrontClient: createRequestStorefrontClient(request),
      routeTemplates,
    });
    const location = result?.headers.get('location');
    if (location) redirect(location);
  }


  return null;
}
```

With Cache Components, keep request-time work in an async child component under `<Suspense>`, and call `connection()` before `headers()`, as the code does.

The `redirect()` function doesn't keep Hydrogen's `301` status. If a permanent redirect status matters for your storefront, then return the `Response` from `handleShopifyRedirects()` directly from a route that can return one.

***

## Step 4: Register handler groups

Hydrogen features that need their own server routes come as handler groups. Create each group once at module scope, and then pass it to `handleShopifyRoutes()` in the `handlers` array of `handleRequest()`.

To serve `/api/predictive-search`, create a group with `createPredictiveSearchServerHandlers()` from `@shopify/hydrogen`, and add it to the `handlers` array next to `cartHandlers`:

```ts
import {createPredictiveSearchServerHandlers} from '@shopify/hydrogen';


const predictiveSearchHandlers = createPredictiveSearchServerHandlers();


// In handleRequest():
const shopifyResponse = handleShopifyRoutes({
  request,
  requestContext,
  storefrontClient,
  routeTemplates,
  handlers: [cartHandlers, predictiveSearchHandlers],
});
```

The cart and predictive search groups don't store session values, so this call has no `sessionManager`. When you register the customer account handlers, pass `sessionManager` and add `customerAccountHandlers` to the array.

To build the search UI, refer to [Add predictive search](https://shopify.dev/docs/storefronts/hydrogen/collections-search#step-7-add-predictive-search).

The following handler groups are available:

| Handler group | Created by | Routes | Guide |
| - | - | - | - |
| Cart | [`createCartServerHandlers()`](https://shopify.dev/docs/api/hydrogen/latest/cart/cart-server-handlers) | `/api/cart` | [Build cart UI](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart) |
| Predictive search | [`createPredictiveSearchServerHandlers()`](https://shopify.dev/docs/api/hydrogen/latest/predictive-search/predictive-search-server-handlers) | `/api/predictive-search` | [Add predictive search](https://shopify.dev/docs/storefronts/hydrogen/collections-search#step-7-add-predictive-search) |
| Customer accounts | [`createCustomerAccountServerHandlers()`](https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/customer-account-server-handlers) from `@shopify/hydrogen/customer-account` | `/account/login`, `/account/authorize`, `/account/refresh`, `POST /account/logout` | [Customer accounts](https://shopify.dev/docs/storefronts/hydrogen/customer-accounts) |

Because `handleShopifyRoutes()` answers these routes, your app doesn't need route files for them.

Link to the customer account routes with plain `<a>` and `<form>` elements, not your framework's client-side navigation components such as `next/link` or React Router's `<Link>` and `<Form>`.

***

## Step 5: Apply response headers

Captured Shopify cookies reach non-HTML responses to non-document requests other than `GET` or `HEAD` when the request has an essential cookie, is a consent request, or explicitly establishes a session. Hydrogen computes cache-safety headers locally.

* Responses that `handleShopifyRoutes()` and `handleShopifyRedirects()` return already include these headers. Return them as they are.
* For every other response, call `requestContext.applyResponseHeaders(response.headers)` at the final response boundary, as the code in step 2 does.

If your app commits session cookies, then append the session headers to the response in `handleRequest()` first, and then call `applyResponseHeaders()`:

```ts
response = new Response(response.body, response);
const sessionHeaders = new Headers((await sessionManager.commit?.()) ?? undefined);
for (const [name, value] of sessionHeaders) {
  response.headers.append(name, value);
}


requestContext.applyResponseHeaders(response.headers);
return response;
```

Wire request handlers into your production server code, not a development-only hook. Hydrogen limits only `/graphiql` to development.

***

## Step 6: Verify your wiring

Start your development server, and then send the following requests. Replace `<port>` with your server's port and `{version}` with the Storefront API version that your client uses.

1. Query the Storefront API proxy:

   ## Terminal

   ```bash
   curl -i -X POST http://localhost:<port>/api/{version}/graphql.json \
     -H "content-type: application/json" \
     -d '{"query":"{ shop { name } }"}'
   ```

   The response is Storefront API JSON. Your framework's 404 page means that `handleShopifyRoutes()` didn't run before your router.

   The proxy forwards the `X-Shopify-Storefront-Access-Token` header from the request when one is present. It doesn't add a token from your server config.

2. Request `/admin`:

   ## Terminal

   ```bash
   curl -i http://localhost:<port>/admin
   ```

   The response redirects to your store's Shopify admin.

3. Request a path that doesn't exist:

   ## Terminal

   ```bash
   curl -i http://localhost:<port>/this-does-not-exist
   ```

   The response is your framework's 404 page, unless the store has a URL redirect for that path.

4. If you registered the cart handlers, then request `/api/cart`:

   ## Terminal

   ```bash
   curl -i http://localhost:<port>/api/cart
   ```

   Without a cart cookie, the response body is `{"cart":null}`.

5. Request a product URL with a Liquid-style variant ID, such as `/products/{handle}?variant={numeric_id}`. Use your app's product path if your [route templates](https://shopify.dev/docs/storefronts/hydrogen/routing) change it. The response is a `302` redirect to the same product with option parameters. An invalid ID, such as `?variant=garbage`, renders the product page as usual.

6. If your route templates include `productInCollection`, then request a collection-scoped product URL:

   ## Terminal

   ```bash
   curl -i http://localhost:<port>/collections/{collection_handle}/products/{product_handle}
   ```

   The response redirects after a router 404 to the path in your template.

7. If your route templates include a custom `product` path, then request `/products/{handle}`. The response redirects after a router 404 to your product path.

For the full list of checks, refer to the [production checklist](https://shopify.dev/docs/storefronts/hydrogen/production-checklist).

***

## Framework wiring

Hydrogen is framework-agnostic. This section shows where its pieces go in a React Router app and a Next.js App Router app, using code trimmed from the [React Router](https://github.com/Shopify/hydrogen/tree/dist-preview/templates/react-router) and [Next.js](https://github.com/Shopify/hydrogen/tree/dist-preview/templates/nextjs) templates. For other frameworks, refer to [Other frameworks](#other-frameworks).

#### React Router

The request entry point is a `middleware` export on the root route, which runs for every request. In React Router 7, turn on middleware with the `future.v8_middleware` flag. React Router 8 turns it on by default.

## Turn on middleware

react-router.config.ts

```ts
import type {Config} from '@react-router/dev/config';


export default {
  ssr: true,
  future: {
    v8_middleware: true,
  },
} satisfies Config;
```

Call `handleRequest()` from the root middleware. In `next`, store the Storefront API client in router context, and then call the router's `next()`:

## Request entry point

## app/lib/context.ts

##### Router context

```ts
import type {StorefrontClient} from '@shopify/hydrogen';
import {createContext} from 'react-router';

export const storefrontContext = createContext<StorefrontClient>();
```

##### Root route middleware

```tsx
import type {Route} from './+types/root';
import {storefrontContext} from './lib/context';
import {handleRequest} from './lib/shopify';

export const middleware: Route.MiddlewareFunction[] = [
  ({request, context}, next) =>
    handleRequest(request, async (_request, storefrontClient) => {
      context.set(storefrontContext, storefrontClient);
      return next();
    }),
];
```

Each route's `loader` reads the client from router context and runs on the server. Throw a 404 `Response` when the resource doesn't exist. Loaders from other guides, like `loadProduct()`, go in the same place.

## Page data loader

app/routes/product.tsx

```tsx
import {getSelectedProductOptions, gql} from '@shopify/hydrogen';


import {storefrontContext} from '~/lib/context';


import type {Route} from './+types/product';


const PRODUCT_QUERY = gql(`
  query ProductPage($handle: String!, $selectedOptions: [SelectedOptionInput!]!) {
    product(handle: $handle) {
      id
      title
      selectedOrFirstAvailableVariant(selectedOptions: $selectedOptions) {
        id
      }
    }
  }
`);


export async function loader({context, params, request}: Route.LoaderArgs) {
  const storefrontClient = context.get(storefrontContext);
  const selectedOptions = getSelectedProductOptions({
    searchParams: new URL(request.url).searchParams,
  });
  const {data} = await storefrontClient.graphql(PRODUCT_QUERY, {
    variables: {handle: params.handle, selectedOptions},
  });
  if (!data?.product) throw new Response('Not Found', {status: 404});


  return {product: data.product};
}


export default function ProductRoute({loaderData}: Route.ComponentProps) {
  return <h1>{loaderData.product.title}</h1>;
}
```

In the same `app/root.tsx`, the root route's `loader` loads the cart and layout data with the request's client. It reads your environment variables from `envContext`, which the template's Oxygen Worker sets in `server.ts`. For that file, refer to [Create the Worker entry point](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen#step-2-create-the-worker-entry-point). On another runtime, set `envContext` in your server entry before the router runs. `Layout` renders `ShopifyScripts` in `<head>` with `useNavigate()` as `navigate`, and `App` hands the cart to the cart provider:

## Root layout

app/root.tsx

```tsx
import {ShopifyScripts} from '@shopify/hydrogen/react';
import type {ReactNode} from 'react';
import {Links, Meta, Outlet, Scripts, useNavigate, useRouteLoaderData} from 'react-router';


import {CartProvider} from '~/lib/cart';
import {cartHandlers} from '~/lib/cart-handlers';
import {storefrontContext} from '~/lib/context';
import {envContext} from '~/lib/env';
import {loadRootLayout} from '~/lib/root-layout';
import {routeTemplates} from '~/lib/route-templates';
import {resolveShopIdentity, storefrontConfig} from '~/lib/shop';


import type {Route} from './+types/root';


export async function loader({context, request}: Route.LoaderArgs) {
  const env = context.get(envContext);
  const storefrontClient = context.get(storefrontContext);
  const [cartResult, layout] = await Promise.all([
    cartHandlers.get({storefrontClient, request}),
    loadRootLayout(storefrontClient),
  ]);


  return {
    cartData: cartResult.data,
    shopIdentity: resolveShopIdentity(env, layout.shopId),
    currency: layout.currency,
  };
}


export function Layout({children}: {children: ReactNode}) {
  const navigate = useNavigate();
  // Absent when the root loader failed.
  const rootData = useRouteLoaderData<typeof loader>('root');


  return (
    <html lang="en">
      <head>
        {rootData ? (
          <ShopifyScripts
            i18n={{...storefrontConfig.i18n, currency: rootData.currency}}
            shop={rootData.shopIdentity.scriptShop}
            navigate={navigate}
            routes={routeTemplates}
          />
        ) : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}


export default function App({loaderData}: Route.ComponentProps) {
  return (
    <CartProvider initialData={loaderData.cartData}>
      <Outlet />
    </CartProvider>
  );
}
```

React examples in these docs are client components. React Router route modules render on the server and hydrate in the browser, so the examples work in them as they are. Leave out `'use client'`.

#### Next.js

If you started from [Vercel Shop](https://vercel.shop), then your project has the same pieces in different files. To find each one, refer to [Explore your storefront](https://shopify.dev/docs/storefronts/hydrogen/getting-started/deploy-a-template#step-4-explore-your-storefront).

The request entry point is `proxy.ts` at the root of your project. Next.js 16 renamed `middleware.ts` to `proxy.ts`, and the exported `middleware` function to `proxy`. Call `handleRequest()` from it. In `next`, forward the request headers that Hydrogen adds, because the proxy can't pass objects to Server Components. Export a `config.matcher` that excludes static Next.js assets but keeps every app path.

## Request entry point

proxy.ts

```ts
import {NextResponse, type NextRequest} from 'next/server';


import {handleRequest} from '@/lib/shopify';


export async function proxy(request: NextRequest) {
  return handleRequest(request, async (_request, storefrontClient) =>
    NextResponse.next({
      request: {headers: storefrontClient.requestContext.getForwardedRequestHeaders()},
    }),
  );
}


export const config = {
  // Exclude static Next.js assets. Keep Hydrogen paths like /admin and /api/cart.
  matcher: ['/((?!_next/static|_next/image|_next/data|favicon.ico).*)'],
};
```

Server Components read the forwarded headers with `headers()`. Create the request-scoped client from them inside React's `cache()`, so every component in one render shares the same client:

## Request-scoped client

lib/storefront.ts

```ts
import {headers} from 'next/headers';
import {cache} from 'react';


// createRequestStorefrontClient() is defined earlier in this file.


export const getStorefrontClient = cache(async () => {
  const requestHeaders = await headers();
  return createRequestStorefrontClient({headers: requestHeaders});
});
```

Use `getStorefrontClient()` for the cart and anything personalized. Catalog pages use the module-scoped [catalog client](https://shopify.dev/docs/storefronts/hydrogen/data-fetching#create-a-client-for-catalog-reads) instead, so they don't read request headers and can be cached.

A page loads its own data as an async Server Component. `params` and `searchParams` are promises. Call `notFound()` when the resource doesn't exist. Loaders from other guides, like `loadProduct()`, go in the same place.

## Page data loader

app/products/\[handle]/page.tsx

```tsx
import {getSelectedProductOptions} from '@shopify/hydrogen';
import {cacheLife} from 'next/cache';
import {notFound} from 'next/navigation';


import {PRODUCT_QUERY} from '@/lib/product-query';
import {staticStorefrontClient} from '@/lib/storefront-static';
import {toURLSearchParams} from '@/lib/url-params';


type Props = {
  params: Promise<{handle: string}>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};


async function fetchProduct(handle: string, searchString: string) {
  'use cache';
  cacheLife('minutes');


  const {data} = await staticStorefrontClient.graphql(PRODUCT_QUERY, {
    variables: {
      handle,
      selectedOptions: getSelectedProductOptions({
        searchParams: new URLSearchParams(searchString),
      }),
    },
  });
  return data?.product ?? null;
}


export default async function ProductPage({params, searchParams}: Props) {
  const {handle} = await params;
  const search = toURLSearchParams(await searchParams).toString();
  const product = await fetchProduct(handle, search);
  if (!product) notFound();


  return <h1>{product.title}</h1>;
}
```

The root layout renders `ShopifyScripts` in `<head>`, and loads the cart in an async child component under `<Suspense>`. The child calls `connection()` and passes the cart promise to a client provider without awaiting it, so the static shell doesn't wait for the cart:

## Root layout

## app/layout.tsx

##### Root layout

```tsx
import {Suspense} from 'react';

import {ShopifyScriptsWithNavigation} from '@/components/ShopifyScriptsWithNavigation';
import {getAnalyticsShop} from '@/lib/analytics-shop';
import {shop} from '@/lib/config';

import {AppShell} from './app-shell';

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const {currency} = await getAnalyticsShop();

  return (
    <html lang="en">
      <head>
        <ShopifyScriptsWithNavigation shop={shop} currency={currency} />
      </head>
      <body>
        <Suspense fallback={null}>
          <AppShell>{children}</AppShell>
        </Suspense>
      </body>
    </html>
  );
}
```

##### Cart loader

```tsx
import {connection} from 'next/server';

import {cartHandlers} from '@/lib/cart-handlers';
import {getStorefrontClient} from '@/lib/storefront';

import {Providers} from './providers';

export async function AppShell({children}: {children: React.ReactNode}) {
  await connection();

  // Don't await the cart, so the shell can stream.
  const cartData = getStorefrontClient().then((storefrontClient) =>
    cartHandlers.get({storefrontClient}).then((result) => result.data),
  );

  return <Providers cartData={cartData}>{children}</Providers>;
}
```

React examples in these docs are client components. Add `'use client'` at the top of each component file that uses hooks, state, or browser APIs. Server Components render them and pass serializable props, including promises. `ShopifyScripts` needs the router's `navigate` function, so it lives in a client component too:

## Client components

## app/providers.tsx

##### Cart provider

```tsx
'use client';

import type {ReactNode} from 'react';

import {CartProvider} from '@/lib/cart';
import type {cartHandlers} from '@/lib/cart-handlers';

export type CartData = Awaited<ReturnType<typeof cartHandlers.get>>['data'];

export function Providers({
  cartData,
  children,
}: {
  cartData?: Promise<CartData>;
  children: ReactNode;
}) {
  return <CartProvider initialData={cartData}>{children}</CartProvider>;
}
```

##### Shopify scripts

```tsx
'use client';

import {ShopifyScripts, type ShopifyScriptsProps} from '@shopify/hydrogen/react';
import {useRouter} from 'next/navigation';

import {analyticsConsent, defaultI18n} from '@/lib/config';
import {routeTemplates} from '@/lib/route-templates';

type ShopConfig = NonNullable<ShopifyScriptsProps['shop']>;

export function ShopifyScriptsWithNavigation({
  shop,
  currency,
}: {
  shop: ShopConfig;
  currency: string;
}) {
  const router = useRouter();

  return (
    <ShopifyScripts
      i18n={{...defaultI18n, currency}}
      shop={shop}
      consent={analyticsConsent}
      navigate={(url: string) => router.push(url)}
      routes={routeTemplates}
    />
  );
}
```

### Other frameworks

The steps on this page work in any framework that gives your server code the incoming `Request`. The following table shows where each piece goes in frameworks that don't have a template. Each framework links to a development example in the Hydrogen repository that shows the full wiring. The examples show how the pieces fit together, but they aren't starter templates.

| Framework | Run Shopify routes | Store the client for loaders | Check for redirects after a 404 | Apply response headers |
| - | - | - | - | - |
| [Nuxt](https://github.com/Shopify/hydrogen/tree/dist-preview/examples/nuxt) | Server middleware in `server/middleware/` | `event.context` | `error.vue`, when the status is 404 | A Nitro plugin that hooks `beforeResponse` |
| [SvelteKit](https://github.com/Shopify/hydrogen/tree/dist-preview/examples/sveltekit) | The `handle` hook in `src/hooks.server.ts` | `event.locals` | The `handle` hook, after `resolve()` returns | The `handle` hook |
| [Astro](https://github.com/Shopify/hydrogen/tree/dist-preview/examples/astro) | `onRequest` in `src/middleware.ts` | `locals` | `onRequest`, after `next()` returns | `onRequest` |
| [SolidStart](https://github.com/Shopify/hydrogen/tree/dist-preview/examples/solid-start) | `onRequest` middleware in `src/middleware.ts` | `event.locals` | A catch-all route, `src/routes/[...404].tsx` | `onBeforeResponse` middleware |

In Nuxt, server middleware receives an H3 event instead of a `Request`. Convert it with `toWebRequest(event)` before you pass it to Hydrogen, and return a matched Shopify route with `sendWebResponse(event, response)`.

To load Shopify's scripts, call `initializeShopifyScripts()` from `@shopify/hydrogen` once in your root layout after it mounts. Pass your route templates, and your router's navigate function if it has one.

***

## Next steps

[Build cart UI\
\
](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart)

[Register the cart handlers and build a cart that works with and without JavaScript.](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart)

[Request handling reference\
\
](https://shopify.dev/docs/api/hydrogen/latest/request-handling/handle-shopify-routes)

[Review the options for Shopify routes, custom route handlers, and redirects.](https://shopify.dev/docs/api/hydrogen/latest/request-handling/handle-shopify-routes)

***
