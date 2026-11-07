---
title: hydrogen login
description: Logs in to the specified shop and saves the shop domain to the project.
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-login'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-login.md'
api_name: shopify-cli
---

# hydrogen login

Logs in to the specified shop and saves the shop domain to the project.

#### Flags

The following flags are available for the `hydrogen login` command:

* **--json-schema**

  **env: SHOPIFY\_FLAG\_JSON\_SCHEMA**

  Print the command's JSON schemas.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **-s, --shop \<value>**

  **string**

  **env: SHOPIFY\_SHOP**

  Shop URL. It can be the shop prefix (janes-apparel) or the full myshopify.com URL (janes-apparel.myshopify.com, <https://janes-apparel.myshopify.com>).

### Examples

* #### Hydrogen login

  ##### hydrogen login

  ```sh
  shopify hydrogen login [flags]
  ```

***
