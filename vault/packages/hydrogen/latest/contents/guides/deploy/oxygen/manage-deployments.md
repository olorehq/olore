---
title: Manage Oxygen deployments
description: >-
  Deploy your Hydrogen storefront to Oxygen continuously from GitHub or another
  CI/CD system, share preview links, redeploy, and roll back.
source_url:
  html: >-
    https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/manage-deployments
  md: >-
    https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/manage-deployments.md
api_name: hydrogen
---

# Manage Oxygen deployments

A deployment is an immutable snapshot of your Hydrogen storefront running on Oxygen. Each deployment has its own preview URL, so you can view, test, and approve changes before they reach production. Every deployment belongs to an [environment](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/environments).

***

## How it works

* **Immutable:** Each deployment is a snapshot of your code at one point in time, usually one Git commit. It keeps the [environment variables](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/environments#environment-variables) that it had when it was deployed. To use new variable values, [redeploy](#redeploy-an-environment).
* **Private by default:** Only logged-in staff can view a deployment until you create a [shareable link](#share-a-deployment).
* **Environment URLs:** Each environment URL points to the environment's most recent deployment, unless you [roll back](#roll-back-a-deployment).
* **Retention:** Deployments stay available for at least six months. After that, Oxygen deletes them, including their Worker files, logs, and preview URLs. Your ten most recent deployments in each environment are always kept. Runtime logs are available for up to one month.

***

## Continuous deployment

### Deploy from Git​Hub

If you set up GitHub continuous deployment when you [created your storefront](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen#step-1-create-a-storefront-in-the-shopify-admin), then Shopify adds a GitHub Actions workflow file to your repository:

* **New repository:** Shopify commits the workflow file with the template, and the first deployment starts right away.
* **Existing repository:** Shopify opens a pull request that adds the workflow file. Merge the pull request to start deploying.

After that, Oxygen creates a deployment every time you push to the repository.

The workflow file is at `.github/workflows/oxygen-deployment-{storefront_id}.yml`. You can edit it like any other GitHub Actions workflow, with these exceptions:

* Don't change the `#! oxygen_storefront_id` line. It links the workflow to your storefront.
* The workflow installs dependencies with npm and expects a `package-lock.json` file. If you use another package manager, then update the install, cache, and build steps to match it.
* The workflow reads the deployment token from a repository secret named `OXYGEN_DEPLOYMENT_TOKEN_{storefront_id}`, and passes it as `SHOPIFY_HYDROGEN_DEPLOYMENT_TOKEN`.

To get deployment preview links as comments on your pull requests, go to **Storefront settings** > **Oxygen deployments** in your Hydrogen storefront, and then check **Comment on pull requests with deployment preview links**.

### Deploy from another CI/CD system

To deploy from GitLab, Bitbucket, CircleCI, or your own system, run the `deploy` command with an Oxygen deployment token:

1. In your Hydrogen storefront, click **Storefront settings**.

2. Click **Oxygen deployments**.

3. Under **Oxygen deployment tokens**, click **Create new token**, and then click **Generate new token**.

4. Copy the token, and store it in your CI/CD system's secrets as `SHOPIFY_HYDROGEN_DEPLOYMENT_TOKEN`.

5. Add a job that installs dependencies and deploys:

   ## Terminal

   ```bash
   npm ci
   npx shopify hydrogen deploy --assets-dir dist/client --worker-dir dist/server --token $SHOPIFY_HYDROGEN_DEPLOYMENT_TOKEN
   ```

Each token is valid for one year. Create a separate token for each service, and if a token leaks, then delete it in **Oxygen deployment tokens** and create a new one. For the command's options, refer to [`hydrogen deploy`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-deploy).

***

## Deploy manually

To deploy from your computer, run your `deploy` script. Shopify CLI builds, uploads, and deploys your storefront, and then returns the deployment's URL:

## Terminal

```bash
npm run deploy
```

***

## Share a deployment

If your store is on the Basic plan or higher, then you can create a shareable link that lets anyone view a deployment without logging in. The link includes a token that bypasses the login requirement, so share it only with people you trust. Oxygen adds a `disallow` rule to the `robots.txt` file of shared deployments, so search engines don't index them.

1. In your Hydrogen storefront, open the deployment's details page.
2. Click **Share**.
3. Select **Anyone with the link**.
4. Click **Copy link**.

To revoke the link and create a new one, click **Share** > **Reset link**. To make the deployment private again, click **Share** > **Staff accounts only**. Changes to a shareable link take up to 30 seconds.

***

## Roll back a deployment

If a deployment breaks your storefront, then you can point a production or custom environment back to an earlier deployment while you fix it. Rolling back doesn't redeploy or delete anything.

**Caution:**

An earlier deployment keeps the environment variables that it was deployed with, which might be outdated. Check that it works before you roll back to it.

1. On your Hydrogen storefront's overview page, click `…` on the environment.
2. Click **View deployments**.
3. Click `…` beside the deployment to roll back to.
4. Click **Make this the current deployment**, and then confirm.

The next time that you push to the environment's branch, the environment URL points to the newest deployment again.

***

## Redeploy an environment

Redeploying creates a new deployment with the same code as the environment's current deployment, and the environment's current variables. Use it after you change environment variables. You can redeploy production and custom environments, but not the preview environment.

1. On your Hydrogen storefront's overview page, click `…` on the environment.
2. Click **Redeploy environment**.
3. Click **Redeploy** to confirm.

Only the environment's current deployment is redeployed. Older deployments keep their original variables.

***

## Next steps

[Environments and variables\
\
](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/environments)

[Create environments for your branches, and manage their variables.](https://shopify.dev/docs/storefronts/hydrogen/deploy/oxygen/environments)

[Production checklist\
\
](https://shopify.dev/docs/storefronts/hydrogen/production-checklist)

[Check your storefront's request handlers, cart, and analytics before you launch.](https://shopify.dev/docs/storefronts/hydrogen/production-checklist)

***
