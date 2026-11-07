---
title: hydrogen codegen
description: >-
  Automatically generates GraphQL types for your project’s Storefront API
  queries.
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-codegen'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-codegen.md'
api_name: shopify-cli
---

# hydrogen codegen

**Hydrogen 2026-04 and earlier:**

This command works with Hydrogen 2026-04 and earlier. Hydrogen 2026-10 doesn't support the command. In a Hydrogen 2026-10 project, use your framework's commands or the `@shopify/hydrogen` commands instead. To check which commands Hydrogen 2026-10 supports, refer to [Shopify CLI Hydrogen commands](https://shopify.dev/docs/api/shopify-cli/hydrogen).

Automatically generates GraphQL types for your project’s Storefront API queries.

#### Flags

The following flags are available for the `hydrogen codegen` command:

* **--codegen-config-path \<value>**

  **string**

  Specify a path to a codegen configuration file. Defaults to `<root>/codegen.ts` if it exists.

* **--json-schema**

  **env: SHOPIFY\_FLAG\_JSON\_SCHEMA**

  Print the command's JSON schemas.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **--watch**

  Watch the project for changes to update types on file save.

### Examples

* #### Hydrogen codegen

  ##### hydrogen codegen

  ```sh
  shopify hydrogen codegen [flags]
  ```

***
