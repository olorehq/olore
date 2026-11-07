---
title: hydrogen env list
description: Lists all environments available on the linked Hydrogen storefront.
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-list'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-list.md'
api_name: shopify-cli
---

# hydrogen env list

Lists all environments available on the linked Hydrogen storefront.

#### Flags

The following flags are available for the `hydrogen env list` command:

* **--json-schema**

  **env: SHOPIFY\_FLAG\_JSON\_SCHEMA**

  Print the command's JSON schemas.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

### Examples

* #### Hydrogen env list

  ##### hydrogen env list

  ```sh
  shopify hydrogen env list [flags]
  ```

***
