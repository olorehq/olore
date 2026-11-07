---
title: hydrogen setup vite
description: 'EXPERIMENTAL: Upgrades the project to use Vite.'
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-vite'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-vite.md'
api_name: shopify-cli
---

# hydrogen setup vite

**Hydrogen 2026-04 and earlier:**

This command works with Hydrogen 2026-04 and earlier. Hydrogen 2026-10 doesn't support the command. In a Hydrogen 2026-10 project, use your framework's commands or the `@shopify/hydrogen` commands instead. To check which commands Hydrogen 2026-10 supports, refer to [Shopify CLI Hydrogen commands](https://shopify.dev/docs/api/shopify-cli/hydrogen).

EXPERIMENTAL: Upgrades the project to use Vite.

#### Flags

The following flags are available for the `hydrogen setup vite` command:

* **--json-schema**

  **env: SHOPIFY\_FLAG\_JSON\_SCHEMA**

  Print the command's JSON schemas.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

### Examples

* #### Hydrogen setup vite

  ##### hydrogen setup vite

  ```sh
  shopify hydrogen setup vite [flags]
  ```

***
