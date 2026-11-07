---
title: hydrogen setup
description: Scaffold routes and core functionality.
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup.md'
api_name: shopify-cli
---

# hydrogen setup

**Hydrogen 2026-04 and earlier:**

This command works with Hydrogen 2026-04 and earlier. Hydrogen 2026-10 doesn't support the command. In a Hydrogen 2026-10 project, use your framework's commands or the `@shopify/hydrogen` commands instead. To check which commands Hydrogen 2026-10 supports, refer to [Shopify CLI Hydrogen commands](https://shopify.dev/docs/api/shopify-cli/hydrogen).

Scaffold routes and core functionality.

#### Flags

The following flags are available for the `hydrogen setup` command:

* **--install-deps**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_INSTALL\_DEPS**

  Auto installs dependencies using the active package manager.

* **--json-schema**

  **env: SHOPIFY\_FLAG\_JSON\_SCHEMA**

  Print the command's JSON schemas.

* **--markets \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_I18N**

  Sets the URL structure to support multiple markets. Must be one of: `subfolders`, `domains`, `subdomains`, `none`. Example: `--markets subfolders`.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **--shortcut**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_SHORTCUT**

  Creates a global h2 shortcut for Shopify CLI using shell aliases. Deactivate with `--no-shortcut`.

* **-f, --force**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE**

  Overwrites the destination directory and files if they already exist.

### Examples

* #### Hydrogen setup

  ##### hydrogen setup

  ```sh
  shopify hydrogen setup [flags]
  ```

***
