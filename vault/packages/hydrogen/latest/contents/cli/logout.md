---
title: hydrogen logout
description: >-
  Logs out of Shopify and clears .shopify/project.json, including the storefront
  link.
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-logout'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-logout.md'
api_name: shopify-cli
---

# hydrogen logout

Logs out of Shopify and clears `.shopify/project.json`, including the storefront link.

#### Flags

The following flags are available for the `hydrogen logout` command:

* **--json-schema**

  **env: SHOPIFY\_FLAG\_JSON\_SCHEMA**

  Print the command's JSON schemas.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

### Examples

* #### Hydrogen logout

  ##### hydrogen logout

  ```sh
  shopify hydrogen logout [flags]
  ```

***
