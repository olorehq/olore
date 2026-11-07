---
title: Deploy a template
description: >-
  Deploy a Hydrogen starter template, connect it to your Shopify store, run it,
  and find your way around the code.
source_url:
  html: >-
    https://shopify.dev/docs/storefronts/hydrogen/getting-started/deploy-a-template
  md: >-
    https://shopify.dev/docs/storefronts/hydrogen/getting-started/deploy-a-template.md
api_name: hydrogen
---

# Deploy a template

This tutorial gets a Hydrogen storefront running from a starter template. You create the storefront from your Shopify store, deploy it to a host, and then set up a local copy to work on.

***

## What you'll learn

In this tutorial, you'll learn how to do the following tasks:

* Create a storefront from a starter template, and deploy it to [Oxygen](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen) or [Vercel](https://shopify.dev/docs/storefronts/hydrogen/deploy/other-runtimes#vercel).
* View your deployed storefront, and share it with others.
* Set up a local copy of your storefront that reads from your store.
* Find the parts of the template that fetch data, handle requests, and manage the cart.

***

## Requirements

* A Shopify store that you can connect a storefront to, and a staff account with permission to manage apps and sales channels.
* Install [Node.js](https://nodejs.org/en/download). The React Router template needs version 22 or 24, and Vercel Shop needs version 24.
* For the React Router template, a [GitHub](https://github.com) account. Shopify creates the repository for your storefront in it.
* For Vercel Shop, a [Vercel](https://vercel.com) account, a GitHub, GitLab, or Bitbucket account, and [pnpm](https://pnpm.io/installation) version 12.

***

## Step 1: Create and deploy your storefront

You can start from one of two templates that are built on Hydrogen. Shopify maintains the React Router template, and Vercel maintains Vercel Shop. Each one comes with a home page, collection pages, product pages, search, and a cart already built. The React Router template also includes customer accounts, analytics, and a consent banner. Vercel Shop includes customer accounts and Shopify analytics too, but you need to enable them to use them.

| Template | Framework | Hosting |
| - | - | - |
| [React Router](https://github.com/Shopify/hydrogen/tree/dist-preview/templates/react-router) | React Router 7 | [Oxygen](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen) |
| [Vercel Shop](https://github.com/vercel/shop) | Next.js 16 App Router | [Vercel](https://shopify.dev/docs/storefronts/hydrogen/deploy/other-runtimes#vercel) |

Pick the template that matches your framework, and follow its steps:

#### React Router on Oxygen

You create the storefront in the Hydrogen channel in your Shopify admin. Shopify creates a GitHub repository from the template, connects it to your store, and deploys it to Oxygen every time you push.

1. Click **Deploy to Oxygen**:

   [![Deploy the React Router template to Oxygen](https://shopify.dev/assets/assets/images/custom-storefronts/hydrogen/deploy-to-oxygen-DyR63RLg.svg)](https://admin.shopify.com/hydrogen/new?template=react-router)

   Your Shopify admin opens at the Hydrogen channel. If you haven't installed the [Hydrogen channel](https://apps.shopify.com/hydrogen) yet, then install it when the admin asks you to. The admin then opens the page for creating a storefront.

2. In **Storefront name**, enter a name for your storefront. You can change the name later.

3. Under **Deployment setup**, keep **Set up GitHub continuous deployment now** selected.

4. If you haven't connected GitHub to your store before, then click **Connect GitHub**, and install the Shopify GitHub app on the account or organization that you want to use.

5. Select your GitHub account or organization. In **Find or create a repository**, enter a name for your repository, and then select **Create** followed by the name.

   The repository is private unless you select the checkbox to make it public. Shopify adds the template only to a new repository, so don't select an existing one.

6. Click **Create**.

   Shopify generates your store's Storefront API and Customer Account API tokens, creates your storefront's environments, and creates the repository with the template and a GitHub Actions workflow. The workflow deploys your storefront to Oxygen.

7. Wait for the first deployment to finish. Your storefront's overview page shows that the storefront is building. To follow its progress, click **View GitHub Actions**. When the deployment finishes, the overview page shows your storefront's URL.

Open the URL to see your storefront. It shows your store's products, and the checkout button in the cart opens your store's checkout.

Oxygen environments are private by default, so only staff who are logged in to your store can open the URL. To show your storefront to someone else, [share a deployment](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/manage-deployments#share-a-deployment) with a link, or [make the environment public](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/environments#make-an-environment-public-or-private). Development stores and stores on a trial plan can't have public environments.

#### Vercel Shop

Vercel Shop reads from your store through a storefront in the Headless channel. Set up that storefront first, so you have the values that Vercel asks for when you deploy.

1. Install the [Headless channel](https://apps.shopify.com/headless) on your store.
2. In your Shopify admin, under **Sales channels**, click **Headless**, and then click **Create storefront**. If you already have a Headless storefront, then click **Add storefront** instead.
3. On your new storefront's page, copy the public access token.
4. Beside **Storefront API permissions**, click **Edit**, and select the permissions that Vercel Shop needs. For the list, refer to Vercel Shop's [Storefront API permissions](https://vercel.shop/docs/reference/storefront-api-permissions). Click **Save**.
5. Publish the products and collections that you want to show to the Headless channel. Products that are published only to the Online Store channel don't appear in Vercel Shop.
6. Find your store's `myshopify.com` domain in **Settings** > **Domains**. Find your shop ID in your store's customer accounts URL. It's the number in the URL, like `123456789` in `https://shopify.com/123456789/account`.

Then deploy Vercel Shop:

1. Click **Deploy**, and log in to Vercel:

   [![Deploy Vercel Shop to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fshop\&project-name=shop\&repository-name=shop\&demo-title=Vercel+Shop\&demo-url=https%3A%2F%2Ftemplate.vercel.shop\&env=NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN%2CNEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN%2CNEXT_PUBLIC_SHOPIFY_SHOP_ID\&envDescription=Required%20Shopify%20store%20domain%2C%20Storefront%20API%20token%2C%20and%20shop%20ID\&envLink=https%3A%2F%2Fvercel.shop%2Fdocs%2Freference%2Fenv-vars)

2. Choose your Git provider and the account to create the repository in, and enter a name for the repository.

3. Enter your store domain, public access token, and shop ID in the environment variables that Vercel asks for. The build fails if any of them is missing.

4. Click **Deploy**, and wait for the build to finish.

When the build finishes, Vercel shows your project's production URL. Open it to see your storefront. If the storefront doesn't show any products, then check the token's permissions, and check that your products are published to the Headless channel.

Your production URL, like `shop.vercel.app`, is public. The URL of each individual deployment is protected by Vercel's [Deployment Protection](https://vercel.com/docs/deployment-protection) by default, so visitors need to log in to Vercel to open it.

***

## Step 2: Set up your local copy

To work on the code, clone the repository that you created in Step 1, and install dependencies:

## Terminal

##### React Router

```bash
git clone <your-repository-url> my-store
cd my-store
npm install
```

##### Vercel Shop

```bash
git clone <your-repository-url> my-store
cd my-store
pnpm install
```

Your hosted storefront already has your store's credentials, but your local copy doesn't. Add them as described for your template.

The private Storefront API token is server-only. Never expose it to the browser, and never give it a browser prefix like `NEXT_PUBLIC_`.

### React Router on Oxygen

Oxygen keeps your storefront's environment variables in the Shopify admin. To copy them to your local copy, run the following commands from your project's directory. `link` connects the directory to a storefront in the Shopify admin, so select the storefront that you created in Step 1. `env pull` copies the storefront's environment variables into `.env`:

## Terminal

```bash
npx shopify hydrogen link
npx shopify hydrogen env pull
```

To use an existing private Storefront API token without linking, add your store domain and token to `.env` instead:

## Store connection

.env

```bash
PUBLIC_STORE_DOMAIN=your-shop.myshopify.com
PUBLIC_STOREFRONT_ID=<your storefront ID>
PRIVATE_STOREFRONT_API_TOKEN=<your private Storefront API token>
```

`PUBLIC_STOREFRONT_ID` is optional. Shopify analytics turn on when it's set. The template gets your shop ID from the Storefront API, so you don't set it for analytics.

Until it finds a private Storefront API token, the React Router template reads demo data from [mock.shop](https://shopify.dev/docs/storefronts/headless/mock-shop) instead of your store.

### Vercel Shop

Copy `.env.example` to `.env.local`, and set the same store domain, public access token, and shop ID that you entered in Vercel:

## Store connection

.env.local

```bash
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-shop.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=<your public Storefront API token>
NEXT_PUBLIC_SHOPIFY_SHOP_ID=<your numeric shop ID>
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ID=<your storefront ID>
```

The first three variables are required. `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ID` is optional, and attributes storefront traffic and analytics to your Headless storefront. Find it in the storefront's URL in the Headless channel. It's the number after `/headless/`. For other settings, refer to Vercel Shop's [environment variables](https://vercel.shop/docs/reference/env-vars).

When you change a variable later, also change it in your Vercel project's **Settings** > **Environment Variables**, and then redeploy.

### Customer accounts

Both templates include customer accounts, but they need extra environment variables and HTTPS (a public tunnel for local Vercel Shop sign-in). On Oxygen, your storefront provides the variables. To learn about setting them up, refer to [Set up customer accounts](https://shopify.dev/docs/storefronts/hydrogen/customer-accounts). In Vercel Shop, customer accounts are off by default. To turn them on, refer to Vercel Shop's [authentication guide](https://vercel.shop/docs/anatomy/authentication).

***

## Step 3: Run your storefront

Start the development server:

## Terminal

##### React Router

```bash
npm run dev
```

##### Vercel Shop

```bash
pnpm dev
```

Open the local URL that the command prints. The React Router template runs at `http://localhost:5173`, and Vercel Shop runs at `http://localhost:3000`.

Your local storefront shows your store's products, like your deployed one. Browse a collection, open a product, choose a variant, and add it to your cart. The cart drawer opens with your item.

***

## Step 4: Explore your storefront

Each template is an ordinary app for its framework. Hydrogen adds three things to it:

* Request handlers that run before your router, and serve the routes that every Shopify storefront needs, like `/api/cart` and cart permalinks.
* A Storefront API client that your pages use to fetch products, collections, and other store data.
* Cart state that every component that shows the cart shares, and that stays in sync with Shopify.

The following table shows where to find each part in each template:

| Part | React Router | Vercel Shop |
| - | - | - |
| Pages | `app/routes/`, registered in `app/routes.ts` | `app/` |
| Request handlers | The `middleware` export in `app/root.tsx` | `proxy.ts` |
| Shopify redirects, which run after your router returns a 404 | The `middleware` export in `app/root.tsx` | `app/not-found.tsx`, enabled by `redirects.shopifyNotFound.isEnabled` |
| Storefront API client | `app/lib/storefront.ts` | `lib/shopify/storefront/server.ts` |
| Queries | In each route's file | `lib/shopify/operations/` |
| Route templates | `app/lib/route-templates.ts` | `lib/shopify/routing/index.ts` |
| Cart | `app/lib/cart-handlers.ts`, `app/lib/cart.ts`, and `app/components/CartDrawer.tsx` | `lib/cart/server.ts`, `lib/cart/client.ts`, and `components/cart/` |
| Store settings | `app/lib/shop.ts` | `lib/config/index.ts` |
| Styles | `app/tokens.css` and `app/app.css` | `app/globals.css` |

In the React Router template, open the home page's file, `app/routes/home.tsx`, and find the `Home` query that fetches the products and collections that the page shows. To show more data on the page, add fields to that query. In Vercel Shop, find the queries for each page in `lib/shopify/operations/`. To learn how queries work, refer to [Query the Storefront API](https://shopify.dev/docs/storefronts/hydrogen/data-fetching).

***

## Next steps

[Query the Storefront API\
\
](https://shopify.dev/docs/storefronts/hydrogen/data-fetching)

[Learn how the template's Storefront API client fetches and caches data.](https://shopify.dev/docs/storefronts/hydrogen/data-fetching)

[Deploy your storefront\
\
](https://shopify.dev/docs/storefronts/hydrogen/deploy)

[Deploy your storefront to Oxygen, Vercel, or another runtime.](https://shopify.dev/docs/storefronts/hydrogen/deploy)

***
