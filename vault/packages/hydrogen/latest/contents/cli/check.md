---
title: hydrogen check
description: Checks whether your Hydrogen app includes a set of standard Shopify routes.
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-check'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-check.md'
api_name: shopify-cli
---

# hydrogen check

**Hydrogen 2026-04 and earlier:**

This command works with Hydrogen 2026-04 and earlier. Hydrogen 2026-10 doesn't support the command. In a Hydrogen 2026-10 project, use your framework's commands or the `@shopify/hydrogen` commands instead. To check which commands Hydrogen 2026-10 supports, refer to [Shopify CLI Hydrogen commands](https://shopify.dev/docs/api/shopify-cli/hydrogen).

Checks whether your Hydrogen app includes a set of standard Shopify routes.

#### Flags

The following flags are available for the `hydrogen check` command:

* **--json-schema**

  **env: SHOPIFY\_FLAG\_JSON\_SCHEMA**

  Print the command's JSON schemas.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

### Examples

* #### Hydrogen check

  ##### hydrogen check

  ```sh
  shopify hydrogen check routes [flags]
  ```

***
