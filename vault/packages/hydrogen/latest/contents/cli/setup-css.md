---
title: hydrogen setup css
description: Adds support for certain CSS strategies to your project.
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-css'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-css.md'
api_name: shopify-cli
---

# hydrogen setup css

**Hydrogen 2026-04 and earlier:**

This command works with Hydrogen 2026-04 and earlier. Hydrogen 2026-10 doesn't support the command. In a Hydrogen 2026-10 project, use your framework's commands or the `@shopify/hydrogen` commands instead. To check which commands Hydrogen 2026-10 supports, refer to [Shopify CLI Hydrogen commands](https://shopify.dev/docs/api/shopify-cli/hydrogen).

Adds support for certain CSS strategies to your project.

#### Flags

The following flags are available for the `hydrogen setup css` command:

* **--install-deps**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_INSTALL\_DEPS**

  Auto installs dependencies using the active package manager.

* **--json-schema**

  **env: SHOPIFY\_FLAG\_JSON\_SCHEMA**

  Print the command's JSON schemas.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **-f, --force**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE**

  Overwrites the destination directory and files if they already exist.

### Examples

* #### Hydrogen setup css

  ##### hydrogen setup css

  ```sh
  shopify hydrogen setup css [flags]
  ```

***
