---
title: hydrogen generate routes
description: Generates all supported standard shopify routes.
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-generate-routes'
  md: >-
    https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-generate-routes.md
api_name: shopify-cli
---

# hydrogen generate routes

**Hydrogen 2026-04 and earlier:**

This command works with Hydrogen 2026-04 and earlier. Hydrogen 2026-10 doesn't support the command. In a Hydrogen 2026-10 project, use your framework's commands or the `@shopify/hydrogen` commands instead. To check which commands Hydrogen 2026-10 supports, refer to [Shopify CLI Hydrogen commands](https://shopify.dev/docs/api/shopify-cli/hydrogen).

Generates all supported standard shopify routes.

#### Flags

The following flags are available for the `hydrogen generate routes` command:

* **--adapter \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_ADAPTER**

  React Router adapter used in the route. The default is `react-router`.

* **--json-schema**

  **env: SHOPIFY\_FLAG\_JSON\_SCHEMA**

  Print the command's JSON schemas.

* **--locale-param \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_ADAPTER**

  The param name in Remix routes for the i18n locale, if any. Example: `locale` becomes ($locale).

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **--typescript**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_TYPESCRIPT**

  Generate TypeScript files

* **-f, --force**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE**

  Overwrites the destination directory and files if they already exist.

### Examples

* #### Hydrogen generate routes

  ##### hydrogen generate routes

  ```sh
  shopify hydrogen generate routes [flags]
  ```

***
