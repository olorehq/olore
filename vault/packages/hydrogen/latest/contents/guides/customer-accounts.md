---
title: Set up customer accounts
description: >-
  Add login, logout, and account pages to a Hydrogen storefront with the
  Customer Account API, and develop locally over HTTPS.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/customer-accounts'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/customer-accounts.md'
api_name: hydrogen
---

# Set up customer accounts

With [customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts), customers can log in to your storefront, view their profile and order history, and check out as known customers. Hydrogen provides the [Customer Account API](https://shopify.dev/docs/api/customer) client, OAuth route handlers, and session helpers. Your app owns the session storage and the account UI. This guide shows you how to wire customer accounts into your storefront and test them locally.

***

## How it works

1. A customer selects a login link that points to `/account/login`.
2. Hydrogen's handler redirects the customer to Shopify's hosted login page.
3. After the customer logs in, Shopify redirects back to `/account/authorize`. The handler exchanges the authorization code for tokens and stores them in your session.
4. Your server reads the access token from the session and queries the Customer Account API.
5. When the access token expires, `/account/refresh` gets a new one. A `POST` request to `/account/logout` ends the session.

Hydrogen owns these four routes through [`handleShopifyRoutes()`](https://shopify.dev/docs/storefronts/hydrogen/request-handlers), so you don't need to write login, authorize, refresh, or logout logic.

***

## Requirements

* Connect a real store. [mock.shop](https://shopify.dev/docs/storefronts/headless/mock-shop) doesn't support the Customer Account API.
* Wire [request handlers](https://shopify.dev/docs/storefronts/hydrogen/request-handlers) and a [Storefront API client](https://shopify.dev/docs/storefronts/hydrogen/data-fetching).
* Serve your storefront over HTTPS, on a hostname other than `localhost`. For local development, refer to [Step 6](#step-6-test-sign-in-locally-with-https).

***

## Step 1: Configure the Customer Account API

In the Shopify admin, open the [Headless](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/manage-headless-channels) or [Hydrogen](https://apps.shopify.com/hydrogen) sales channel, select your storefront, and open the Customer Account API settings. Copy the client ID, then add the following values to your server environment:

## Customer account environment variables

## .env

##### Next.js

```bash
NEXT_PUBLIC_SHOP_ID=<your numeric shop ID>
NEXT_PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID=<your Customer Account API client ID>
SESSION_SECRET=<a random string of 32 or more characters>
SITE_ORIGIN=https://local.tryhydrogen.dev:5173
```

##### React Router

```bash
SHOP_ID=<your numeric shop ID>
PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID=<your Customer Account API client ID>
SESSION_SECRET=<a random string of 32 or more characters>
```

| Variable | Description |
| - | - |
| `SHOP_ID` | Your numeric shop ID, like `12345678`. Don't use a shop GID or your shop domain. |
| `PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID` | The Customer Account API client ID. |
| `SESSION_SECRET` | A random secret, 32 characters or longer, that protects the session cookie. Keep it server-only. |

In Next.js, the shop ID and client ID use the `NEXT_PUBLIC_` prefix, and you also set `SITE_ORIGIN` to the origin that customers visit. Server Components can't read the request URL, so they build the request that reads the session from `SITE_ORIGIN`.

In the same settings, select **Public (web app)**, then register your storefront's callback URI, JavaScript origin, and logout URI. The callback URI is your storefront origin plus `/account/authorize`.

***

## Step 2: Create the customer session

Create the customer session once, at module scope, with [`createCustomerSession()`](https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/create-customer-session). When you reuse it across requests, concurrent token refreshes for the same customer share one request to Shopify.

The customer session reads and writes tokens through a session manager that you create for each request. A session manager is an object with `getSessionOrigin()`, `getSessionItem()`, `setSessionItem()`, `removeSessionItem()`, and an optional `commit()` that returns the `Set-Cookie` headers to add to the response. Back it with protected server storage or an HttpOnly cookie. Never store tokens in browser storage or send them to client components.

## Customer session

lib/customer-account.ts

```ts
import type {ShopifyRequestContext} from '@shopify/hydrogen';
import {
  createCustomerAccountClient,
  createCustomerSession,
} from '@shopify/hydrogen/customer-account';


import {env} from './env';
import {createRequestSessionManager} from './session';


export const customerSession = createCustomerSession({
  shopId: env.SHOP_ID,
  customerAccountApiClientId: env.PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID,
});


export function createCustomerSessionManager(request: Request) {
  return createRequestSessionManager(request, env.SESSION_SECRET);
}


export function createRequestCustomerAccountClient(
  requestContext: ShopifyRequestContext,
) {
  return createCustomerAccountClient({shopId: env.SHOP_ID, requestContext});
}
```

`env` stands for your server environment. Read the variables from Step 1 with your framework's environment API. The module also exports a helper that creates a Customer Account API client for each request, so the client shares the request context with your Storefront API client.

### Create a session manager

The session manager is app code, so you choose where tokens live. The following session manager keeps them in a signed, HttpOnly cookie. Install `@remix-run/cookie` and `@remix-run/session`, which work with any framework that uses standard `Request` objects:

## Cookie session manager

lib/session.ts

```ts
import {createCookie} from '@remix-run/cookie';
import {createCookieSessionStorage} from '@remix-run/session/cookie-storage';
import type {WritableCustomerSessionManager} from '@shopify/hydrogen/customer-account';


const sessionStorage = createCookieSessionStorage();


export async function createRequestSessionManager(
  request: Request,
  secret: string,
): Promise<WritableCustomerSessionManager> {
  const cookie = createCookie('__Host-session', {
    httpOnly: true,
    secure: true,
    sameSite: 'Lax',
    path: '/',
    secrets: [secret],
  });
  const session = await sessionStorage.read(
    await cookie.parse(request.headers.get('cookie')),
  );
  const origin = new URL(request.url).origin;


  return {
    getSessionOrigin: () => origin,
    getSessionItem: (key) => session.get(key),
    setSessionItem: (key, value) => session.set(key, value),
    removeSessionItem: (key) => session.unset(key),
    async commit() {
      if (session.dirty && session.size === 0) session.destroy();
      const value = await sessionStorage.save(session);
      if (value === null) return;
      return {
        'set-cookie': await cookie.serialize(
          value,
          value === '' ? {maxAge: 0} : {},
        ),
      };
    },
  };
}
```

A signed cookie is tamper-proof, but whoever holds it can read its contents. [Vercel Shop](https://vercel.shop), Vercel's Next.js template, uses an encrypted cookie instead. You can copy its session code from [`lib/auth/server.ts`](https://github.com/vercel/shop/blob/main/lib/auth/server.ts). For production, prefer opaque server-side session storage.

### Separate read-only and writable sessions

Hydrogen types session managers by what the caller can do:

* A `ReadonlyCustomerSessionManager` can read the session. Use it in render paths that can't set cookies, like Next.js Server Components, layouts, and header UI.
* A `WritableCustomerSessionManager` can also commit changes. Use it only where the response can carry a `Set-Cookie` header, like route handlers, Next.js `proxy.ts`, and React Router middleware.

Token refresh changes the session, so `getOrRefreshAccessToken()` requires a writable session manager. TypeScript rejects the call when you have only a read-only one.

***

## Step 3: Register the account handlers

Create the account handlers once with [`createCustomerAccountServerHandlers()`](https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/customer-account-server-handlers), then pass them to `handleShopifyRoutes()` along with the request's session manager. This example shows only the customer account parts of your server request handler. For the full wiring, refer to [Request handlers](https://shopify.dev/docs/storefronts/hydrogen/request-handlers).

## Register account handlers

lib/shopify.ts

```ts
import {handleShopifyRoutes} from '@shopify/hydrogen';
import {createCustomerAccountServerHandlers} from '@shopify/hydrogen/customer-account';


import {cartHandlers} from './cart-handlers';
import {createCustomerSessionManager, customerSession} from './customer-account';
import {routeTemplates} from './route-templates';
import {createRequestStorefrontClient} from './storefront';


const customerAccountHandlers = createCustomerAccountServerHandlers({
  customerSession,
  defaultPostLoginRedirectPathname: '/account',
  postLogoutRedirectUri: '/',
});


export async function handleRequest(
  request: Request,
  next: (request: Request) => Promise<Response>,
) {
  const storefrontClient = createRequestStorefrontClient(request);
  const {requestContext} = storefrontClient;
  const sessionManager = await createCustomerSessionManager(request);


  const shopifyResponse = handleShopifyRoutes({
    request,
    requestContext,
    sessionManager,
    storefrontClient,
    routeTemplates,
    handlers: [cartHandlers, customerAccountHandlers],
  });
  if (shopifyResponse) return shopifyResponse;


  // Make the request context and session manager available to your
  // page data functions, then run your router.
  let response = await next(request);


  // Headers may be immutable, so copy the response before you change them.
  response = new Response(response.body, response);
  const sessionHeaders = new Headers(
    (await sessionManager.commit?.()) ?? undefined,
  );
  for (const [name, value] of sessionHeaders) {
    response.headers.append(name, value);
  }


  requestContext.applyResponseHeaders(response.headers);
  return response;
}
```

Call this from the request handler that runs before your router, and pass the request context and session manager to your page data through request-scoped context. For React Router and Next.js code, refer to [Framework wiring](https://shopify.dev/docs/storefronts/hydrogen/request-handlers#framework-wiring).

Committing the session after your router runs saves any tokens that a page refreshed.

In Next.js, `proxy.ts` returns before the page renders, so it can't commit tokens that a page refreshes. Pass `requestContext.getForwardedRequestHeaders()` to the rendered request instead of calling `next()`. Pages can only read the session, as described in [Step 5](#step-5-build-the-account-page).

The handlers own `GET /account/login`, `GET /account/authorize`, `GET /account/refresh`, and `POST /account/logout`. They sanitize `return_to` parameters, check that logout requests are same-origin `POST` requests, set `cache-control: no-store`, and commit session cookies on their own responses. If you replace a handler with custom logic, then keep all of these safeguards.

Use the same request context for Storefront API and Customer Account API work in a request. Customer Account API reads mark the response as personalized, so apply the request context's response headers at your final response boundary.

### Keep sign-in on your storefront

If your login link sends customers to your online store's login page, check the link and the account handlers. Without a registered customer account handler group, `handleShopifyRoutes()` redirects `/account/login` to your store's domain. For more information, see [Routes Hydrogen handles](https://shopify.dev/docs/storefronts/hydrogen/request-handlers#routes-hydrogen-handles).

* Point your login link at `/account/login` on this storefront, not at your online store.
* Create the session with `createCustomerSession()` from `@shopify/hydrogen/customer-account`, passing your `shopId` and `customerAccountApiClientId`.
* Pass the session to `createCustomerAccountServerHandlers()` and register the handlers it returns in `handleShopifyRoutes()`.
* In the Customer Account API settings from [Step 1](#step-1-configure-the-customer-account-api), set the callback URI to your storefront origin plus `/account/authorize`.
* Point the JavaScript origin and the logout URI at this storefront.

***

## Step 4: Sync cart buyer identity

By default, the cart and the customer session are independent. To attach the logged-in customer to their cart, create the cart handlers with the same customer session, then pass the cart handlers to the account handlers:

## Cart buyer identity sync

lib/handlers.ts

```ts
import {createCartServerHandlers} from '@shopify/hydrogen';
import {createCustomerAccountServerHandlers} from '@shopify/hydrogen/customer-account';


import {customerSession} from './customer-account';


export const cartHandlers = createCartServerHandlers({customerSession});


export const customerAccountHandlers = createCustomerAccountServerHandlers({
  customerSession,
  cartServerHandlers: cartHandlers,
  defaultPostLoginRedirectPathname: '/account',
});
```

In Step 3, import both handler groups from `./handlers` and remove its local `customerAccountHandlers` declaration. Both groups must share one customer session. TypeScript rejects cart handlers that you created without `customerSession`.

With this wiring, Hydrogen keeps the cart in sync with the session:

* New carts include the logged-in customer's [buyer identity](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.buyerIdentity), and checkout URLs for authenticated carts include `logged_in=true`.
* A usable access token from `/account/authorize` or `/account/refresh` attaches the customer to the cart in the request's cart cookie.
* `/account/logout`, or `/account/refresh` after a `400` or `401` token response, detaches the customer from the cart.

Sync never blocks a login or logout redirect. If detaching fails, the handler expires the cart cookie, so a shared device doesn't keep a cart that belongs to the previous customer.

***

## Step 5: Build the account page

Use `/account` for login and refresh returns.

Query the Customer Account API with `gql()` and [`createCustomerAccountClient()`](https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/create-customer-account-client) from `@shopify/hydrogen/customer-account`. Use them only in server code, and pass the access token with each query. The [typed queries setup](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/typed-queries) validates Customer Account API documents too.

Start with a data function that loads the account and returns a plain result that any UI can render. How it gets a usable access token depends on whether the page can set cookies:

#### React Router

React Router middleware commits the session after loaders run, so the loader can refresh the token with `getOrRefreshAccessToken()`. It reads the access token, refreshes it if needed, and saves the new token to the writable session manager.

## Load the account

lib/account.ts

```ts
import type {ShopifyRequestContext} from '@shopify/hydrogen';
import {
  gql,
  type WritableCustomerSessionManager,
} from '@shopify/hydrogen/customer-account';


import {
  createRequestCustomerAccountClient,
  customerSession,
} from './customer-account';


const CUSTOMER_QUERY = gql(`
  query CurrentCustomer {
    customer {
      firstName
      lastName
      emailAddress {
        emailAddress
      }
    }
  }
`);


export async function loadAccount(
  requestContext: ShopifyRequestContext,
  sessionManager: WritableCustomerSessionManager,
) {
  const accessToken = await customerSession.getOrRefreshAccessToken(
    sessionManager,
    requestContext,
  );
  if (!accessToken) {
    if (await customerSession.isLoggedIn(sessionManager, requestContext)) {
      return {status: 'error'} as const;
    }
    return {status: 'signed-out'} as const;
  }


  const client = createRequestCustomerAccountClient(requestContext);
  const {data, errors} = await client.graphql(CUSTOMER_QUERY, {accessToken});
  if (errors || !data.customer) return {status: 'error'} as const;


  return {status: 'signed-in', customer: data.customer} as const;
}


export type Account = Awaited<ReturnType<typeof loadAccount>>;
```

Call `loadAccount()` from your `/account` route's `loader`, with the request context and session manager from your router context. The root middleware commits any refreshed token after the loader runs, as in Step 3.

#### Next.js

Server Components can't set cookies, so the page can't refresh the token itself. Read the token with `getAccessToken()`, which never refreshes or writes to the session. When there's no usable token, redirect once to `/account/refresh` with `return_to` set to `/account?refreshed=1`. The refresh handler commits the new cookie and redirects back.

## Load the account

lib/account.ts

```ts
import {createShopifyRequestContext} from '@shopify/hydrogen';
import {gql} from '@shopify/hydrogen/customer-account';
import {headers} from 'next/headers';
import {redirect} from 'next/navigation';


import {
  createCustomerSessionManager,
  createRequestCustomerAccountClient,
  customerSession,
} from './customer-account';
import {env} from './env';


const CUSTOMER_QUERY = gql(`
  query CurrentCustomer {
    customer {
      firstName
      lastName
      emailAddress {
        emailAddress
      }
    }
  }
`);


export async function loadAccount(refreshAttempted: boolean) {
  // Server Components can't read the request URL, so build it from SITE_ORIGIN.
  const request = new Request(new URL('/account', env.SITE_ORIGIN), {
    headers: await headers(),
  });
  const requestContext = createShopifyRequestContext({
    request,
    i18n: {country: 'US', language: 'EN'},
  });
  const sessionManager = await createCustomerSessionManager(request);


  const accessToken = await customerSession.getAccessToken(
    sessionManager,
    requestContext,
  );
  if (!accessToken && !refreshAttempted) {
    redirect(
      `/account/refresh?return_to=${encodeURIComponent('/account?refreshed=1')}`,
    );
  }
  if (!accessToken) return {status: 'signed-out'} as const;


  const client = createRequestCustomerAccountClient(requestContext);
  const {data, errors} = await client.graphql(CUSTOMER_QUERY, {accessToken});
  if (errors || !data.customer) return {status: 'error'} as const;


  return {status: 'signed-in', customer: data.customer} as const;
}


export type Account = Awaited<ReturnType<typeof loadAccount>>;
```

Call `loadAccount()` from your `/account` page. Pass `true` when the `refreshed` search parameter is `1`, so a failed refresh shows the login link instead of starting a redirect loop.

Then render the result:

## Account page

## lib/render-account.ts

##### Vanilla JavaScript

```ts
import type {Account} from './account';

export function renderAccount(root: HTMLElement, account: Account) {
  const main = document.createElement('main');

  if (account.status === 'signed-out') {
    main.innerHTML = `
      <h1>Account</h1>
      <a href="/account/login?return_to=/account">Log in</a>
    `;
  } else if (account.status === 'error') {
    main.innerHTML = `<p role="alert">We couldn't load your account.</p>`;
  } else {
    const {customer} = account;
    const heading = document.createElement('h1');
    heading.textContent = `${customer.firstName ?? ''} ${customer.lastName ?? ''}`;
    const email = document.createElement('p');
    email.textContent = customer.emailAddress?.emailAddress ?? '';
    const logout = document.createElement('form');
    logout.method = 'post';
    logout.action = '/account/logout';
    logout.innerHTML = '<button type="submit">Log out</button>';
    main.append(heading, email, logout);
  }

  root.replaceChildren(main);
}
```

##### React

```tsx
import type {Account as AccountData} from '../lib/account';

export function Account({account}: {account: AccountData}) {
  if (account.status === 'signed-out') {
    return (
      <main>
        <h1>Account</h1>
        <a href="/account/login?return_to=/account">Log in</a>
      </main>
    );
  }

  if (account.status === 'error') {
    return <p role="alert">We couldn't load your account.</p>;
  }

  const {customer} = account;
  return (
    <main>
      <h1>
        {customer.firstName} {customer.lastName}
      </h1>
      <p>{customer.emailAddress?.emailAddress}</p>
      <form method="post" action="/account/logout">
        <button type="submit">Log out</button>
      </form>
    </main>
  );
}
```

##### Vue

```html
<script setup lang="ts">
import type {Account} from '~/lib/account';

defineProps<{account: Account}>();
</script>

<template>
  <main v-if="account.status === 'signed-out'">
    <h1>Account</h1>
    <a href="/account/login?return_to=/account">Log in</a>
  </main>
  <p v-else-if="account.status === 'error'" role="alert">
    We couldn't load your account.
  </p>
  <main v-else>
    <h1>{{ account.customer.firstName }} {{ account.customer.lastName }}</h1>
    <p>{{ account.customer.emailAddress?.emailAddress }}</p>
    <form method="post" action="/account/logout">
      <button type="submit">Log out</button>
    </form>
  </main>
</template>
```

Follow these rules for account UI:

* Use a plain `<a>` element for login links and a plain `<form method="post">` for logout. The handlers return redirects to Shopify's hosted pages, which client-side navigation, like `next/link` or a React Router `<Form>`, can't follow.
* For signed-in state in shared UI, like a header account link, call `isLoggedIn()`. It treats a refreshable session as logged in without refreshing tokens. Wrap the UI in `<Suspense>` so the page shell renders first.
* Gate Customer Account API calls on an access token, as `loadAccount()` does, not on `isLoggedIn()`. `getAccessToken()` returns a token only when the token is usable right now.
* If `isLoggedIn()` returns `false`, then show a login link instead of redirecting to `/account/refresh`.
* Render only the profile fields you need. Never serialize tokens or session objects into loader data or HTML.

To add order history and other account data, refer to the [Customer Account API reference](https://shopify.dev/docs/api/customer).

***

## Step 6: Test sign-in locally with HTTPS

Customer Account API login, logout, and callbacks require an HTTPS origin that isn't `localhost`, and that exactly matches the URLs registered in the Shopify admin. `local.tryhydrogen.dev` is a Shopify-owned domain that resolves to `127.0.0.1`, so you can use it as a stable local hostname.

#### React Router

Add the [`localHttps()`](https://shopify.dev/docs/api/hydrogen/latest/local-https) plugin from `@shopify/hydrogen/vite` to your Vite config, and enable it only for a `dev:https` script:

## Local HTTPS server

vite.config.ts

```ts
import {reactRouter} from '@react-router/dev/vite';
import {localHttps} from '@shopify/hydrogen/vite';
import {defineConfig} from 'vite';


const httpsOptions = {
  enabled: process.env.npm_lifecycle_event === 'dev:https',
};


export default defineConfig({
  plugins: [localHttps(httpsOptions), reactRouter()],
  server: {
    allowedHosts: ['.tryhydrogen.dev'],
  },
});
```

Add a `dev:https` script to `package.json` that runs the same command as `dev`, like `vite dev`. A plain `npm run dev` stays on HTTP.

Start the server, then open `https://local.tryhydrogen.dev:5173`:

## Terminal

```bash
npm run dev:https
```

When the server starts, confirm the plugin's prompt to install certificates. It downloads a checksum-verified release of [mkcert](https://github.com/FiloSottile/mkcert), installs a local certificate authority, and writes certificates to `~/.shopify/hydrogen/certs/`. Installing the certificate authority might ask for your password.

To install certificates ahead of time, run the following command:

## Terminal

```bash
npx hydrogen certs install
```

To remove Hydrogen's certificates, run `npx hydrogen certs uninstall`. The mkcert certificate authority stays trusted, because other projects might use it. To remove it from your system trust stores too, add `--remove-ca`.

For Vite HTTPS with `CI=true`, run `npx hydrogen certs install` before starting the server.

When the server starts, the plugin also uses Shopify CLI to register your local URLs in the Customer Account API settings. This requires Shopify CLI with `@shopify/cli-hydrogen` 13.0.4 or higher. If your project isn't linked to a storefront, then Shopify CLI starts the linking flow first. If the plugin can't register the URLs, then add them by hand, as described in [Register local URLs](#register-local-urls).

#### Next.js

Add a `dev:https` script that starts Next.js with HTTPS on the local hostname:

## Local HTTPS server

package.json

```json
{
  "scripts": {
    "dev": "next dev",
    "dev:https": "next dev --experimental-https --hostname local.tryhydrogen.dev --port 5173"
  }
}
```

Start the server, then open `https://local.tryhydrogen.dev:5173`:

## Terminal

```bash
npm run dev:https
```

Next.js creates and trusts its own development certificate. On first run, it might ask you to install its local certificate authority.

Next.js doesn't register your local URLs with Shopify, so add them by hand, as described in [Register local URLs](#register-local-urls).

### Register local URLs

To register your local URLs by hand, open your storefront's Customer Account API settings in the Headless or Hydrogen sales channel and enter the following values:

| Setting | Value |
| - | - |
| Callback URI | `https://local.tryhydrogen.dev:5173/account/authorize` |
| JavaScript origin | `https://local.tryhydrogen.dev` |
| Logout URI | `https://local.tryhydrogen.dev:5173` |

The JavaScript origin has no port, because Shopify rejects JavaScript origins that include one.

***

## Next steps

[Customer Account API\
\
](https://shopify.dev/docs/api/customer)

[Explore the queries and mutations for customer data, orders, and addresses.](https://shopify.dev/docs/api/customer)

[Customer accounts reference\
\
](https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/create-customer-session)

[Review the customer session, account client, and account route handlers.](https://shopify.dev/docs/api/hydrogen/latest/customer-accounts/create-customer-session)

[Build cart UI\
\
](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart)

[Build a cart that carries the logged-in customer to checkout.](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart)

***
