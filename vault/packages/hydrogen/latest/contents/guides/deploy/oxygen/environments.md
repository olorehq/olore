---
title: Manage Oxygen environments and variables
description: >-
  Learn how Oxygen environments map to your Git branches, and how to manage the
  environment variables that your Hydrogen storefront reads.
source_url:
  html: 'https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/environments'
  md: 'https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/environments.md'
api_name: hydrogen
---

# Manage Oxygen environments and variables

A Hydrogen storefront on Oxygen has one or more environments. Each environment has its own environment variables and, except preview, links to a branch in your app's Git repository and has its own URL. Every [deployment](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/manage-deployments) belongs to one environment.

![The Hydrogen channel can contain multiple storefronts. Each storefront can have multiple environments, which in turn contain deployments.](https://shopify.dev/assets/assets/images/custom-storefronts/hydrogen/storefronts-environments-deployments-dvQsDAf5.png)

***

## How it works

Oxygen assigns each deployment to an environment based on the branch that it was deployed from:

| Environment | Associated Git branch |
| - | - |
| Production | Your repository's default branch. You can [edit](#update-an-environment) the production environment to select a different branch. |
| Custom environments | Optional. Each custom environment links to its own branch. |
| Preview | All other branches. |

Each environment except preview has a generated URL that points to its most recent deployment. You can [roll back](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/manage-deployments#roll-back-a-deployment) an environment to point to an earlier deployment.

Oxygen passes the environment's variables to your Worker's `env` argument on every request. Deployments are immutable, so a deployment keeps the variable values that it had when it was deployed. If you change a variable, then [redeploy](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/manage-deployments#redeploy-an-environment) the environments that use it.

***

## Manage environments

The production and preview environments are required, and you can't delete them. Create custom environments to test features or share work in progress without changing production.

### Create an environment

1. In your Hydrogen storefront, click **Storefront settings**.
2. Click **Environments and variables**.
3. Click **Add environment**.
4. Select an existing repository branch to link to the environment, or create a new branch.
5. Type a name for the environment. The branch name determines the environment URL.
6. Select whether to make the environment [public or private](#environment-visibility).
7. Optional: Under **Copy environment variables**, select an existing environment to copy variables from.
8. Click **Save**.

### Update an environment

1. In your Hydrogen storefront, click **Storefront settings**.
2. Click **Environments and variables**.
3. Click the environment to edit.
4. Change the production environment's branch or visibility, or a custom environment's name or visibility.
5. Click **Save**.

### Delete a custom environment

1. In your Hydrogen storefront, click **Storefront settings**.
2. Click **Environments and variables**.
3. Click the environment to delete.
4. Click **Delete environment**.
5. Click **Delete** to confirm.

***

## Environment visibility

Environments are private by default, which means that you need to be logged in to your store to view them. A public environment is visible to anyone who has its URL.

Private environment URLs load more slowly, because Oxygen verifies authentication on each request.

### Make an environment public or private

1. In your Hydrogen storefront, click **Storefront settings**.
2. Click **Environments and variables**.
3. Click the environment to edit.
4. Under **URL privacy**, select **Public** or **Private**.
5. Click **Save**.

### Public environment limits

The number of public environments that a store can have depends on its plan:

| Plan | Public environment limit |
| - | - |
| Starter | 1 |
| Basic | 1 |
| Grow | 1 |
| Advanced | 1 |
| Shopify Plus | 25 |
| Pause and build | 1 |
| Plus Partner Sandbox stores | 1 |
| [Development stores](https://shopify.dev/docs/apps/build/stores/development-stores) | 0 |
| Trial plans | 0 |

Retail, nonprofit, and custom plans also include one public environment.

***

## Environment variables

Environment variables are key-value pairs. Each environment can have up to 110 variables, and a variable can have a different value in each environment.

### Variables that Shopify sets

When you create a storefront, Shopify adds the variables that your app needs to query your store. Some are read-only, so you can't edit them directly.

| Variable | Description | Read-only |
| - | - | - |
| `PUBLIC_STORE_DOMAIN` | Your store's domain, such as `example.myshopify.com`. | Yes |
| `PRIVATE_STOREFRONT_API_TOKEN` | Your private [Storefront API access token](https://shopify.dev/docs/api/storefront#authentication), for server-side queries. You can [rotate](#rotate-your-private-storefront-api-token) it. | Yes |
| `PUBLIC_STOREFRONT_ID` | Your Hydrogen storefront's numeric ID. Hydrogen sends it with analytics events. | Yes |
| `PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID` | Your [Customer Account API](https://shopify.dev/docs/api/customer) client ID. | Yes |
| `SHOP_ID` | Your store's numeric ID. The Customer Account API client uses it to build its endpoints. | Yes |
| `SESSION_SECRET` | The secret that signs your session cookies. Use at least 32 random characters. | No |

Without `PRIVATE_STOREFRONT_API_TOKEN`, the React Router template reads from [mock.shop](https://shopify.dev/docs/storefronts/headless/mock-shop). Set `MOCK_SHOP=1` to force mock.shop in an environment that has a token.

### Read variables in your app

Oxygen passes variables to your Worker as the `env` argument, not as `process.env`. The React Router template stores `env` in the router context in [`server.ts`](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen#step-2-create-the-worker-entry-point), so loaders, actions, and middleware read it from there:

## Read environment variables

app/routes/example.tsx

```ts
import {envContext} from '~/lib/env';
import type {Route} from './+types/example';


export async function loader({context}: Route.LoaderArgs) {
  const env = context.get(envContext);
  const storeDomain = env.PUBLIC_STORE_DOMAIN;
  // ...
}
```

When you add a variable, also add it to the `Env` type in `app/lib/env.ts`. Read secrets in server code only, and don't return them from a loader.

To use your storefront's variables locally, run `npx shopify hydrogen env pull`. It writes them to your `.env` file, and MiniOxygen passes them to your Worker's `env` argument.

### Create a variable

1. In your Hydrogen storefront, click **Storefront settings**.
2. Click **Environments and variables**.
3. Under **Custom variables**, click **Add variable**.
4. Under **Key**, type a key, such as `EXAMPLE_API_TOKEN`.
5. Under **Value**, type the value.
6. Optional: To hide the value after you save it, check **Make this value secret**.
7. Under **Environments**, select the environments that get the value.
8. Click **Save**.

To set a different value for other environments, click **Add another value**.

### Edit a variable

1. In your Hydrogen storefront, click **Storefront settings**.
2. Click **Environments and variables**.
3. Click the variable to edit.
4. Change its key, values, or environments.
5. Click **Save**.

After you save, the Shopify admin offers to redeploy the environments that use the variable. Existing deployments keep the old value until you redeploy.

### Delete a variable

Deleting a variable deletes its key and all its values.

1. In your Hydrogen storefront, click **Storefront settings**.
2. Click **Environments and variables**.
3. Click the variable to delete.
4. Click **Delete variable**.
5. Click **Delete** to confirm.

### Rotate your private Storefront API token

If your private Storefront API token is exposed, then rotate it:

1. In your Hydrogen storefront, click **Storefront settings**.
2. Click **Storefront API**.
3. Under **Rotate private access token**, click **Generate new token**.
4. Click **Generate new token** to confirm.
5. Optional: Update any other apps that use the token.
6. Deploy your storefront again. Oxygen doesn't redeploy environments when you rotate a token.
7. Beside the **Old** token, click **Revoke**, and then click **Delete token**.

***

## Next steps

[Manage deployments\
\
](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/manage-deployments)

[Deploy continuously, share previews, redeploy, and roll back.](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/manage-deployments)

[Customer accounts\
\
](https://shopify.dev/docs/storefronts/hydrogen/customer-accounts)

[Use the customer account variables to log customers in.](https://shopify.dev/docs/storefronts/hydrogen/customer-accounts)

***
