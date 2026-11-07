---
title: Add Hydrogen to an existing project
description: >-
  Add Hydrogen to a project that uses the framework of your choice. Install the
  package, connect your store, wire Hydrogen into your app, and show your
  store's products on a page.
source_url:
  html: >-
    https://shopify.dev/docs/storefronts/hydrogen/getting-started/add-to-existing-project
  md: >-
    https://shopify.dev/docs/storefronts/hydrogen/getting-started/add-to-existing-project.md
api_name: hydrogen
---

# Add Hydrogen to an existing project

You don't need a starter template to use Hydrogen. You can add it to a new or existing project that uses any framework that runs server code. This guide shows you how to install Hydrogen, connect it to a store, wire it into your app's request lifecycle, and show your store's products on a page.

If you want a storefront that's already built, then start from a starter template instead. Refer to [Deploy a template](https://shopify.dev/docs/storefronts/hydrogen/getting-started/deploy-a-template).

***

## What you'll learn

In this guide, you'll learn how to do the following tasks:

* Install Hydrogen in a project that uses the framework of your choice.
* Configure environment variables for [mock.shop](https://shopify.dev/docs/storefronts/headless/mock-shop) or for your own store.
* Wire the Storefront API client, request handlers, and customer accounts into your app.
* Show your store's products on a page, with a link to buy each one.
* Check that your storefront works.

***

## Requirements

* Install [Node.js](https://nodejs.org/en/download) version 22 or 24.
* Use a JavaScript project with a `package.json` file at its root, built with a framework that runs server code, like route handlers, middleware, loaders, or server functions. Hydrogen runs before your router on each request, so apps that are browser-only or configured only for static output don't work.
* To connect your own store, get [Storefront API](https://shopify.dev/docs/api/storefront) access through the [Headless channel](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/manage-headless-channels) or the [Hydrogen channel](https://apps.shopify.com/hydrogen). You don't need a store to start building with mock.shop.

***

## Step 1: Install Hydrogen

Create a project with your framework's CLI, like `npx create-next-app@latest` or `npx create-react-router@latest`, or use a project you already have. Then run the Hydrogen setup command from the project's root directory:

## Terminal

```bash
npx @shopify/hydrogen@latest setup
```

The `setup` command does the following tasks:

* Installs `@shopify/hydrogen` with your project's package manager, which it detects from your lockfile. If `@shopify/hydrogen` is already in your `package.json` file but isn't installed, then it runs your package manager's install command instead.
* Adds agent instructions that match the installed Hydrogen version to your project's `.claude` and `.agents` directories.

The `setup` command doesn't change your app's code. You wire Hydrogen into your app in [Step 3](#step-3-wire-hydrogen-into-your-app) and [Step 4](#step-4-show-products-on-a-page). You can follow those steps yourself, or open the project in your coding agent and ask it to follow them for you:

## Prompt

```text
Set up my store with Shopify.
```

The agent works through the same steps in the same order, and checks each one before it starts the next.

***

## Step 2: Configure environment variables

Hydrogen reads its store connection from environment variables. Until you add a private Storefront API token, you can build against mock.shop, a public Storefront API with demo data that doesn't need a token.

Use the variable names in this step throughout your app. In Next.js, replace `PUBLIC_` with `NEXT_PUBLIC_`, and use `NEXT_PUBLIC_SHOP_ID`.

### Use mock.​shop

To choose a demo store that's close to yours, refer to [Building with mock.shop](https://shopify.dev/docs/storefronts/headless/mock-shop). Then set your store domain to its host and leave the tokens out:

## mock.shop connection

.env

```bash
PUBLIC_STORE_DOMAIN=pets.mock.shop
# PUBLIC_STOREFRONT_API_TOKEN=
```

Keep the public Storefront API token commented out until you have one. An empty assignment, like `PUBLIC_STOREFRONT_API_TOKEN=`, loads as an empty string, and the Storefront API client rejects empty tokens. A missing token means tokenless access.

On mock.shop, carts work, but checkout is a mock that takes no payment and places no order. Shop Pay and the Customer Account API aren't available. To test real checkout and customer accounts, connect a real store.

### Use your own store

Get your store domain and tokens from the Headless or Hydrogen channel in the Shopify admin, then add them to your project's `.env` file.

The private Storefront API token is server-only. Never expose it to the browser, and never give it a browser prefix like `NEXT_PUBLIC_`.

## Store connection

.env

```bash
# Server-only
PRIVATE_STOREFRONT_API_TOKEN=<your private Storefront API token>
SESSION_SECRET=<a random string of 32 or more characters>


# Browser-safe
PUBLIC_STORE_DOMAIN=your-shop.myshopify.com
# PUBLIC_STOREFRONT_API_TOKEN=
SHOP_ID=<your numeric shop ID>
PUBLIC_STOREFRONT_ID=<your storefront ID>
PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID=<your Customer Account API client ID>
```

If you deploy to [Oxygen](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen) and your storefront is linked to the Hydrogen channel, then you can pull these values with Shopify CLI instead of copying them by hand:

## Terminal

```bash
npx shopify hydrogen link
npx shopify hydrogen env pull
```

The following table describes each variable:

| Variable | Required | Description |
| - | - | - |
| `PUBLIC_STORE_DOMAIN` | Yes | Your store's `myshopify.com` domain, or a mock.shop host. |
| `PRIVATE_STOREFRONT_API_TOKEN` | For a private client | The private Storefront API token. Server-only. |
| `PUBLIC_STOREFRONT_API_TOKEN` | No | The public Storefront API token, for browser-safe clients. Leave it commented out until you have a token. |
| `SHOP_ID` | For customer accounts | The numeric shop ID for customer accounts and Shopify's runtime scripts. |
| `PUBLIC_STOREFRONT_ID` | For analytics | The Hydrogen storefront ID. Use `0` if your storefront doesn't have one. |
| `PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID` | For customer accounts | The Customer Account API client ID. |
| `SESSION_SECRET` | For customer accounts | A random secret, 32 characters or longer, that signs the session cookie. |
| `PUBLIC_CHECKOUT_DOMAIN` | No | Your checkout domain, for app-level configuration like a Content Security Policy. Checkout links come from cart data, like `cart.checkoutUrl`, not from this variable. |

To generate a session secret, run the following command:

## Terminal

```bash
node -e "console.log(crypto.randomBytes(32).toString('base64url'))"
```

***

## Step 3: Wire Hydrogen into your app

This step connects Hydrogen to your app's request lifecycle. Complete each part in order, and check it before you start the next. After each part that changes code, run your app's `typecheck` script and fix any errors. Type errors compound, so they're easier to fix one part at a time.

### Keep environment access on the server

Read environment variables only in server code. Never read `process.env`, `import.meta.env`, or your framework's environment modules from client components or from modules that client components import.

Resolve values that come from environment variables on the server, and pass them to client components as props or loader data. For example, build the `shop` object that `ShopifyScripts` needs on the server. Browser code calls Shopify through Hydrogen's same-origin routes, so private tokens never leave the server.

For which files run on the server in React Router and Next.js, refer to [Framework wiring](https://shopify.dev/docs/storefronts/hydrogen/request-handlers#framework-wiring).

Before you continue, confirm that no client component, and no module that a client component imports, reads environment variables.

### Set up route templates

Hydrogen builds links to products, collections, and other Shopify resources from a shared route manifest. If your app already has routes for these resources, then keep them. Otherwise, use the standard paths:

| Page | Path |
| - | - |
| Collection listing | `/collections` |
| Collection | `/collections/{handle}` |
| Search results | `/search` |
| Product | `/products/{handle}` |
| Cart | `/cart` |

Use the plural `/products`, not `/product`. Some paths, like `/api/cart`, `/checkout`, and `/cart/{variantId}:{quantity}`, belong to Hydrogen's request handlers, so don't create pages for them.

To create the manifest, follow [Configure route templates](https://shopify.dev/docs/storefronts/hydrogen/routing).

Before you continue, confirm that your route templates module exports your manifest. You check that Shopify's standard URLs reach your pages after you wire request handlers.

### Create the Storefront API client

Create the Storefront API client for your framework by following [Query the Storefront API](https://shopify.dev/docs/storefronts/hydrogen/data-fetching). Then add `hydrogen gql check` to your existing `typecheck` script, so that the script validates your queries against the Storefront API schema. Run it after TypeScript and any route type generation:

## Add GraphQL validation to typecheck

## package.json

##### React Router

```json
{
  "scripts": {
    "typecheck": "react-router typegen && tsc && hydrogen gql check --fail-on-warn"
  }
}
```

##### Next.js

```json
{
  "scripts": {
    "typecheck": "next typegen && tsc --noEmit && hydrogen gql check --fail-on-warn"
  }
}
```

If you use mock.shop, then create a public client without a token, because mock.shop rejects private tokens. Refer to [Use mock.shop during development](https://shopify.dev/docs/storefronts/hydrogen/data-fetching#use-mockshop-during-development).

For more information about query validation, refer to [Type and validate Storefront API queries](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/typed-queries).

Before you continue, confirm that `typecheck` passes. You run your first query in [Step 4](#step-4-show-products-on-a-page).

### Wire request handlers

Run Hydrogen's request handlers before your router, and check for Shopify redirects after your router returns a 404. Follow [Wire Hydrogen request handlers](https://shopify.dev/docs/storefronts/hydrogen/request-handlers).

Then make the Storefront API client available to your pages:

#### React Router

Store the Storefront API client in router context from your root route's middleware, so that your loaders can read it:

## Share the client with your loaders

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

#### Next.js

Run the request handlers from `proxy.ts`. Server Components don't receive the client that `proxy.ts` creates. Catalog pages import the module-scoped client from [Create a client for catalog reads](https://shopify.dev/docs/storefronts/hydrogen/data-fetching#create-a-client-for-catalog-reads). Personalized reads, like the cart, create a request-scoped client from `headers()` and wrap it in React's `cache()`.

For the full wiring in each framework, refer to [Framework wiring](https://shopify.dev/docs/storefronts/hydrogen/request-handlers#framework-wiring).

Before you continue, confirm that `typecheck` passes. You check the request handlers in [Step 4](#step-4-show-products-on-a-page).

### Set up customer accounts

Customer accounts need a real store. If you're using mock.shop, then skip this part until you connect your store.

Create the customer session, and register the account handlers with your request handlers. Follow Steps 1 to 3 of [Set up customer accounts](https://shopify.dev/docs/storefronts/hydrogen/customer-accounts).

Before you continue, confirm that `typecheck` passes.

***

## Step 4: Show products on a page

Add a page that queries the first few products in your store and lists them. Each product shows its title, its price, and a **Buy now** link. The page is the first place your app runs a Storefront API query, so it shows that your client, your request handlers, and your store connection work together.

#### React Router

## List products

app/routes/home.tsx

```tsx
import {formatMoney, gql} from '@shopify/hydrogen';


import {storefrontContext} from '~/lib/context';
import type {Route} from './+types/home';


const PRODUCTS_QUERY = gql(`
  query Products {
    products(first: 8) {
      nodes {
        id
        title
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        variants(first: 1) {
          nodes {
            id
          }
        }
      }
    }
  }
`);


export async function loader({context}: Route.LoaderArgs) {
  const storefront = context.get(storefrontContext);
  const {data} = await storefront.graphql(PRODUCTS_QUERY);


  return {products: data?.products.nodes ?? []};
}


export default function Home({loaderData}: Route.ComponentProps) {
  return (
    <main>
      <h1>Products</h1>
      <ul>
        {loaderData.products.map((product) => {
          const variantId = product.variants.nodes[0]?.id.split('/').pop();


          return (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>
                {formatMoney(product.priceRange.minVariantPrice, {
                  locale: 'en-US',
                }).toString()}
              </p>
              {variantId ? <a href={`/cart/${variantId}:1`}>Buy now</a> : null}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
```

The loader reads the client from the router context that your middleware sets in [Wire request handlers](#wire-request-handlers).

#### Next.js

## List products

app/page.tsx

```tsx
import {formatMoney, gql} from '@shopify/hydrogen';
import {cacheLife} from 'next/cache';


import {staticStorefrontClient} from '@/lib/storefront-static';


const PRODUCTS_QUERY = gql(`
  query Products {
    products(first: 8) {
      nodes {
        id
        title
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        variants(first: 1) {
          nodes {
            id
          }
        }
      }
    }
  }
`);


async function getProducts() {
  'use cache';
  cacheLife('hours');


  const {data} = await staticStorefrontClient.graphql(PRODUCTS_QUERY);
  return data?.products.nodes ?? [];
}


export default async function Home() {
  const products = await getProducts();


  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map((product) => {
          const variantId = product.variants.nodes[0]?.id.split('/').pop();


          return (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>
                {formatMoney(product.priceRange.minVariantPrice, {
                  locale: 'en-US',
                }).toString()}
              </p>
              {variantId ? <a href={`/cart/${variantId}:1`}>Buy now</a> : null}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
```

The page reads the module-scoped catalog client from [Create a client for catalog reads](https://shopify.dev/docs/storefronts/hydrogen/data-fetching#create-a-client-for-catalog-reads), because the product list is the same for every customer. If you use mock.shop, then create that client as a public client without a token.

Enable `cacheComponents: true` in `next.config.ts`. Cache Components require uncached data inside `<Suspense>`. The `'use cache'` directive caches this query for an hour, so that Next.js can prerender the page. For more information, refer to [Caching](https://shopify.dev/docs/storefronts/hydrogen/data-fetching/caching).

Keep the following in mind:

* [`formatMoney()`](https://shopify.dev/docs/api/hydrogen/latest/money) formats the amount and currency that Shopify returns. Pass your customer's locale instead of `en-US` when your storefront supports more than one.
* The **Buy now** link uses Shopify's [cart permalink](https://shopify.dev/docs/apps/build/checkout/create-cart-permalinks) format, `/cart/{variantId}:{quantity}`, with the number at the end of the variant ID. Hydrogen's request handlers answer it and redirect the customer to your store's checkout with that product in the cart, so you don't need a page for it.

### Check the page

Start your framework's development server, like `npm run dev`, and open the local URL that it prints. Then confirm the following:

* Your home page lists products from your store or from mock.shop, each with a price.
* `typecheck` passes, and your editor shows the query result's fields as typed.
* `/graphiql` returns a `200` response.
* If you connected your own store, then **Buy now** opens your store's checkout, and `/admin` redirects to the Shopify admin. **Buy now** and `/admin` don't work with mock.shop.
* If you set up HTTPS and customer accounts, then `/account/login` redirects to Shopify's OAuth `/oauth/authorize` endpoint.

Customer accounts need HTTPS. To test sign-in locally, refer to [Test sign-in locally with HTTPS](https://shopify.dev/docs/storefronts/hydrogen/customer-accounts#step-6-test-sign-in-locally-with-https).

***

## Step 5: Check your storefront

Run your app's own checks. Look in your `package.json` file for the following scripts, and run the ones that exist, in this order:

1. `format`, to fix formatting.
2. `lint`, `typecheck`, or `check`. Confirm that `typecheck` still runs `hydrogen gql check` before you trust a passing result.
3. `build`.
4. `test`. If your project uses Playwright, then run it headless.
5. `format:check`, if it's separate from `format`.

Run the checks again after every code change. A check that passed before your last change doesn't count.

Then test your storefront while it runs. Work through the [production checklist](https://shopify.dev/docs/storefronts/hydrogen/production-checklist) against your development server, and against a production build if your framework can run one locally.

***

## Next steps

Build the rest of your storefront's features in the following order. Later features build on earlier ones. For example, the cart drawer reuses your cart page's line items, and analytics events depend on Shopify's runtime scripts.

| Order | Feature | Guide |
| - | - | - |
| 1 | A home page that lists collections and products, built from the page in Step 4 | [Query the Storefront API](https://shopify.dev/docs/storefronts/hydrogen/data-fetching#step-4-query-data) |
| 2 | Collection and search pages, with filters that sync with the URL | [Build collection and search pages](https://shopify.dev/docs/storefronts/hydrogen/collections-search) |
| 3 | Product pages, with a variant form and add to cart | [Build product pages with variant selection](https://shopify.dev/docs/storefronts/hydrogen/products) |
| 4 | A `/cart` page that works without JavaScript, so you can check that items you add from a product page appear in the cart | [Build cart UI](https://shopify.dev/docs/storefronts/hydrogen/cart/build-cart) |
| 5 | Shopify's runtime scripts, and your framework's navigation hook | [Add analytics and consent](https://shopify.dev/docs/storefronts/hydrogen/analytics#step-1-render-shopifyscripts) |
| 6 | A cart drawer in your root layout, and a navbar with a cart trigger | [Build a cart drawer](https://shopify.dev/docs/storefronts/hydrogen/cart/cart-drawer) |
| 7 | An account page with the customer's profile and a sign-out button, and an account link in the navbar | [Set up customer accounts](https://shopify.dev/docs/storefronts/hydrogen/customer-accounts#step-5-build-the-account-page) |
| 8 | Analytics events, sent only when the customer's consent allows them | [Add analytics and consent](https://shopify.dev/docs/storefronts/hydrogen/analytics) |

Build your storefront's UI with the styling approach that your app already uses, like Tailwind CSS or CSS Modules.

Your app also owns image optimization and SEO. Use your framework's image component, or `<img srcset>` with Shopify CDN URLs that set sizing parameters from [`ImageTransformInput`](https://shopify.dev/docs/api/storefront/latest/input-objects/ImageTransformInput). Render meta tags, Open Graph tags, and structured data with your framework's metadata API and Storefront API data.

After you add each feature, run the checks in [Step 5](#step-5-check-your-storefront) again. When your storefront is ready, deploy it:

[Deploy your storefront\
\
](https://shopify.dev/docs/storefronts/hydrogen/deploy)

[Deploy your storefront to Oxygen, Vercel, or another runtime.](https://shopify.dev/docs/storefronts/hydrogen/deploy)

[Production checklist\
\
](https://shopify.dev/docs/storefronts/hydrogen/production-checklist)

[Check your storefront's routes, cart, and analytics before you launch.](https://shopify.dev/docs/storefronts/hydrogen/production-checklist)

[Hydrogen API reference\
\
](https://shopify.dev/docs/api/hydrogen/latest)

[Explore the functions, stores, and components that Hydrogen exports.](https://shopify.dev/docs/api/hydrogen/latest)

***
