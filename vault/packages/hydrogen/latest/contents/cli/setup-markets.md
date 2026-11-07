---
title: hydrogen setup markets
description: Adds support for multiple markets to your project by using the URL structure.
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-markets'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-markets.md'
api_name: shopify-cli
---

# hydrogen setup markets

**Hydrogen 2026-04 and earlier:**

This command works with Hydrogen 2026-04 and earlier. Hydrogen 2026-10 doesn't support the command. In a Hydrogen 2026-10 project, use your framework's commands or the `@shopify/hydrogen` commands instead. To check which commands Hydrogen 2026-10 supports, refer to [Shopify CLI Hydrogen commands](https://shopify.dev/docs/api/shopify-cli/hydrogen).

Adds support for multiple [markets](https://shopify.dev/docs/custom-storefronts/hydrogen/markets) to your project by using the URL structure.

#### Flags

The following flags are available for the `hydrogen setup markets` command:

* **--json-schema**

  **env: SHOPIFY\_FLAG\_JSON\_SCHEMA**

  Print the command's JSON schemas.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

### Examples

* #### Hydrogen setup markets

  ##### hydrogen setup markets

  ```sh
  shopify hydrogen setup markets [flags]
  ```

***
