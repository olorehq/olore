---
title: Deploy to Oxygen
description: >-
  Create a Hydrogen storefront in the Shopify admin, configure your app's Worker
  and MiniOxygen, and deploy it to Oxygen.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen.md'
api_name: hydrogen
---

# Deploy to Oxygen

Oxygen is Shopify's hosting platform for Hydrogen storefronts. It runs your storefront as a Web Worker, not a Node server, and expects a module Worker, a single server bundle, and a directory of client assets.

The React Router starter template already meets these requirements. Follow this guide to deploy it, or to adapt another Vite-based storefront.

***

## What you'll learn

In this tutorial, you'll learn how to do the following tasks:

* Create a Hydrogen storefront in the Shopify admin.
* Create a Worker entry point and run it locally in MiniOxygen.
* Build your storefront and deploy it to Oxygen.

***

## Requirements

* Build a Hydrogen storefront that runs locally. Refer to [Deploy a template](https://shopify.dev/docs/storefronts/hydrogen/getting-started/deploy-a-template).
* Install the [Hydrogen sales channel](https://apps.shopify.com/hydrogen) on your store.
* Run the [production checklist](https://shopify.dev/docs/storefronts/hydrogen/production-checklist) against a production build.

***

## Step 1: Create a storefront in the Shopify admin

Each Hydrogen storefront in the Shopify admin links to one app and holds its [environments, environment variables](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/environments), and [deployments](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/manage-deployments).

1. In the Shopify admin, under **Sales channels**, click **Hydrogen**.

2. Click **Create storefront**.

3. Type a name for your storefront. You can change the name later.

4. Choose how to deploy:

   * To deploy when you push to GitHub, select **Set up GitHub continuous deployment now**. If you haven't connected GitHub to your store, then click **Connect GitHub**, and install the Shopify GitHub app. Select your GitHub account or organization, and a repository. Shopify adds an Oxygen workflow file to the repository. For more information, refer to [Continuous deployment](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/manage-deployments#continuous-deployment).
   * To deploy from your computer or your own CI/CD system, select **Set up CI/CD or manual deployments later**.

5. Click **Create**.

When you create a storefront, Shopify adds the environment variables that your app needs to query your store. Refer to [Environments and variables](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/environments#environment-variables).

***

## Step 2: Create the Worker entry point

Create a module Worker at `server.ts` in your project root. Oxygen and MiniOxygen, Oxygen's local runtime, find this path without extra configuration. The Worker's `fetch` function receives the request, the environment bindings, and an execution context. Open the cache and bind `waitUntil` for each request, and then pass them to your framework's request handler:

## Oxygen Worker for React Router

server.ts

```ts
import {createRequestHandler, RouterContextProvider} from 'react-router';
import * as serverBuild from 'virtual:react-router/server-build';


import {envContext} from '~/lib/env';


export default {
  async fetch(
    request: Request,
    env: Env,
    executionContext: ExecutionContext,
  ): Promise<Response> {
    try {
      const routerContext = new RouterContextProvider();
      routerContext.cache = await caches.open('hydrogen');
      routerContext.waitUntil = executionContext.waitUntil.bind(executionContext);
      routerContext.set(envContext, env);


      const handleRequest = createRequestHandler(serverBuild, process.env.NODE_ENV);
      return handleRequest(request, routerContext as never);
    } catch (error) {
      console.error(error);
      return new Response('An unexpected error occurred', {status: 500});
    }
  },
};
```

The React Router template defines `envContext` in `app/lib/env.ts`, with a type for your environment variables. If you're adapting another storefront, then create the file:

## Environment context

app/lib/env.ts

```ts
import {createContext} from 'react-router';


export type Env = {
  MOCK_SHOP?: string;
  PRIVATE_STOREFRONT_API_TOKEN?: string;
  PUBLIC_CHECKOUT_DOMAIN?: string;
  PUBLIC_STORE_DOMAIN?: string;
  PUBLIC_STOREFRONT_ID?: string;
  PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID?: string;
  SESSION_SECRET?: string;
  SHOP_ID?: string;
};


export const envContext = createContext<Env>();
```

The global `Env` type in `server.ts` comes from your `env.d.ts` file. Make it extend this type, as the template's [`env.d.ts` file](https://github.com/Shopify/hydrogen/blob/dist-preview/templates/react-router/env.d.ts) does.

Hydrogen clients accept the `Cache` from `caches.open()` directly. Don't wrap it in an adapter, and don't use a process-local cache such as `lru-cache`.

Pass the cache and `waitUntil` to your Storefront API client together:

```ts
createStorefrontClient({
  type: 'private',
  requestContext,
  config: {
    storeDomain: env.PUBLIC_STORE_DOMAIN,
    privateStorefrontToken: env.PRIVATE_STOREFRONT_API_TOKEN,
    cache,
    waitUntil,
  },
});
```

If your Worker entry point isn't at `server.ts`, then pass the path as `entry` to the MiniOxygen plugin, and as `--entry` to the Shopify CLI commands that run or deploy the Worker.

***

## Step 3: Configure Mini​Oxygen

MiniOxygen runs your Worker locally in the same runtime as Oxygen. Install MiniOxygen 4.2.0 or higher and the Oxygen Worker types:

## Terminal

```bash
npm install -D @shopify/mini-oxygen @shopify/oxygen-workers-types @shopify/cli
```

Add the `oxygen()` plugin to your Vite config, before your framework's plugin:

## MiniOxygen Vite plugin

vite.config.ts

```ts
import {reactRouter} from '@react-router/dev/vite';
import {oxygen} from '@shopify/mini-oxygen/vite';
import {defineConfig} from 'vite';


export default defineConfig({
  plugins: [oxygen(), reactRouter()],
  build: {
    assetsInlineLimit: 0,
  },
  ssr: {
    optimizeDeps: {
      include: [
        'react',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'react-dom',
        'react-dom/server',
        'react-router > set-cookie-parser',
        'react-router > cookie',
        'react-router',
      ],
    },
  },
});
```

The `ssr.optimizeDeps` list prevents CommonJS errors such as `module is not defined` when React Router runs in MiniOxygen. `assetsInlineLimit: 0` supports a strict Content Security Policy.

MiniOxygen loads environment variables from your `.env` files and passes them to the Worker's `env` argument. Declare the bindings in your `Env` type, and include `@shopify/oxygen-workers-types` in your TypeScript types.

Replace any Node-only code in your server runtime with Web APIs, including `Buffer`, `node:*` modules, the filesystem, Node streams, and Node-specific renderers. For React Router, render with `renderToReadableStream` instead of `renderToPipeableStream`, and remove `@react-router/node` and `@react-router/serve`. For the full list of differences, refer to [Oxygen runtime](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/runtime#differences-from-node).

***

## Step 4: Build and preview

Add scripts that build the app and run the built Worker in MiniOxygen:

## Build scripts

package.json

```json
{
  "scripts": {
    "build": "react-router build",
    "preview": "react-router build && vite preview",
    "deploy": "shopify hydrogen deploy --assets-dir dist/client --worker-dir dist/server"
  }
}
```

The build produces two outputs: one bundled Worker module and one directory of client assets. Configure your server build without code splitting, because Oxygen runs a single Worker bundle. With the default Vite layout, the output looks like this:

```text
dist/
├── client/
└── server/
    └── index.js
```

Run `npm run preview`, and then request pages that use Hydrogen data, such as a product page, a collection page, `/search`, `/cart`, and `/account`. A server that starts isn't enough evidence that the Worker handles requests.

***

## Step 5: Deploy

Link your project to the storefront that you created in [step 1](#step-1-create-a-storefront-in-the-shopify-admin), and then pull its environment variables into your local `.env` file:

## Terminal

```bash
npx shopify hydrogen link
npx shopify hydrogen env pull
```

If `env pull` reports secret values that it couldn't pull, then set those values in `.env` yourself.

Deploy with Shopify CLI. Pass the client assets directory and the Worker directory. `--worker-dir` must contain `index.js` or `index.mjs`:

## Terminal

```bash
npx shopify hydrogen deploy --assets-dir dist/client --worker-dir dist/server
```

If your build writes to a different layout, then change both paths to match it. Shopify CLI uploads your build and returns the deployment's URL.

On Oxygen, your Worker gets its environment variables from the storefront's environment, not from your `.env` file. To change them, refer to [Environments and variables](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/environments).

***

## Next steps

[Environments and variables\
\
](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/environments)

[Create environments for your branches, and manage the variables that each one gets.](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/environments)

[Manage deployments\
\
](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/manage-deployments)

[Deploy continuously from GitHub or your own CI/CD system, share previews, and roll back.](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/manage-deployments)

***
