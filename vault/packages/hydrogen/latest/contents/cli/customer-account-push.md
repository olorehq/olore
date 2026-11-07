---
title: hydrogen customer-account-push
description: Push project configuration to admin
source_url:
  html: >-
    https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-customer-account-push
  md: >-
    https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-customer-account-push.md
api_name: shopify-cli
---

# hydrogen customer-account-push

Push project configuration to admin

**Hydrogen 2026-10:**

In Hydrogen 2026-10, the [`localHttps`](https://shopify.dev/docs/api/hydrogen/2026-10/local-https) Vite plugin runs `shopify hydrogen customer-account-push` when the dev server starts. The plugin requires `@shopify/cli-hydrogen` 13.0.4 or later, which Shopify CLI 4.8.0 and later bundles.

#### Flags

The following flags are available for the `hydrogen customer-account-push` command:

* **--dev-origin \<value>**

  **string**

  **required**

  The development domain of your application.

* **--javascript-origin \<value>**

  **string**

  The origin to register as the allowed JavaScript origin for the Customer Account API OAuth flow. Defaults to --dev-origin. Must not include a port (Shopify rejects origins with ports); use this to register a portless origin while keeping a portful --dev-origin.

* **--json-schema**

  **env: SHOPIFY\_FLAG\_JSON\_SCHEMA**

  Print the command's JSON schemas.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **--relative-logout-uri \<value>**

  **string**

  The relative url of allowed url that will be redirected to post-logout for Customer Account API OAuth flow. Default to nothing.

* **--relative-redirect-uri \<value>**

  **string**

  The relative url of allowed callback url for Customer Account API OAuth flow. Default is '/account/authorize'

* **--storefront-id \<value>**

  **string**

  The id of the storefront the configuration should be pushed to. Must start with 'gid://shopify/HydrogenStorefront/'

### Examples

* #### Hydrogen customer-account-push

  ##### hydrogen customer-account-push

  ```sh
  shopify hydrogen customer-account-push --dev-origin <value> [flags]
  ```

***
