---
title: hydrogen deploy
description: Builds and deploys your Hydrogen storefront to Oxygen.
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-deploy'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-deploy.md'
api_name: shopify-cli
---

# hydrogen deploy

Builds and deploys your Hydrogen storefront to Oxygen. In CI, requires an Oxygen deployment token set with `--token` or `SHOPIFY_HYDROGEN_DEPLOYMENT_TOKEN`, and rejects `--env`. Use `--env-branch` instead. Otherwise, the Oxygen deployment token for the [linked](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-link) storefront is the default.

**Hydrogen 2026-10:**

Hydrogen 2026-10 projects pass `--assets-dir` and `--worker-dir` for the build output. Deployment runs the `build` script by default.

#### Flags

The following flags are available for the `hydrogen deploy` command:

* **--assets-dir \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_ASSETS\_DIR**

  Directory containing the client assets to deploy, relative to the project root. Defaults to the detected Vite client output directory, then falls back to `dist/client`.

* **--auth-bypass-token**

  **env: AUTH\_BYPASS\_TOKEN**

  Generate an authentication bypass token, which can be used to perform end-to-end tests against the deployment.

* **--auth-bypass-token-duration \<value>**

  **string**

  **env: AUTH\_BYPASS\_TOKEN\_DURATION**

  Specify the duration (in hours) up to 12 hours for the authentication bypass token. Defaults to `2`

* **--build-command \<value>**

  **string**

  Specify a build command to run before deploying. If not specified, the Hydrogen build pipeline will be used. When custom output directories are configured, defaults to `node --run build`.

* **--entry \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_ENTRY**

  Entry file for the worker. Defaults to `./server`.

* **--env \<value>**

  **string**

  Specifies the environment to perform the operation using its handle. Fetch the handle using the `env list` command.

* **--env-branch \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_ENVIRONMENT\_BRANCH**

  Specifies the environment to perform the operation using its Git branch name.

* **--env-file \<value>**

  **string**

  Path to an environment file to override existing environment variables for the deployment.

* **--force-client-sourcemap**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE\_CLIENT\_SOURCEMAP**

  Client sourcemapping is avoided by default because it makes backend code visible in the browser. Use this flag to force enabling it.

* **--json-output**

  Create a JSON file containing the deployment details in CI environments. Defaults to true, use `--no-json-output` to disable.

* **--json-schema**

  **env: SHOPIFY\_FLAG\_JSON\_SCHEMA**

  Print the command's JSON schemas.

* **--lockfile-check**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_LOCKFILE\_CHECK**

  Checks that there is exactly one valid lockfile in the project. Defaults to `true`. Deactivate with `--no-lockfile-check`.

* **--metadata-description \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_METADATA\_DESCRIPTION**

  Description of the changes in the deployment. Defaults to the commit message of the latest commit if there are no uncommitted changes.

* **--metadata-user \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_METADATA\_USER**

  User that initiated the deployment. Will be saved and displayed in the Shopify admin

* **--no-verify**

  Skip the routability verification step after deployment.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **--preview**

  Deploys to the Preview environment.

* **--worker-dir \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_WORKER\_DIR**

  Directory containing the Oxygen worker entry point (`index.js` or `index.mjs`), relative to the project root. Defaults to the detected Vite server output directory, then falls back to `dist/server`.

* **-f, --force**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE**

  Forces a deployment to proceed if there are uncommitted changes in its Git repository, and skips confirmation prompts for non-preview environments.

* **-s, --shop \<value>**

  **string**

  **env: SHOPIFY\_SHOP**

  Shop URL. It can be the shop prefix (janes-apparel) or the full myshopify.com URL (janes-apparel.myshopify.com, <https://janes-apparel.myshopify.com>).

* **-t, --token \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_DEPLOYMENT\_TOKEN**

  Oxygen deployment token. Defaults to the linked storefront's token if available.

### Examples

* #### Hydrogen deploy

  ##### hydrogen deploy

  ```sh
  shopify hydrogen deploy [flags]
  ```

***
