---
title: hydrogen init
description: Creates a new Hydrogen storefront.
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-init'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-init.md'
api_name: shopify-cli
---

# hydrogen init

Creates a new Hydrogen storefront.

**Hydrogen 2026-10:**

`hydrogen init` creates a Hydrogen 2026-04 project.

To build with Hydrogen 2026-10, [add Hydrogen to a new or existing project](https://shopify.dev/docs/storefronts/hydrogen/getting-started/add-to-existing-project).

#### Flags

The following flags are available for the `hydrogen init` command:

* **--git**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_GIT**

  Init Git and create initial commits.

* **--install-deps**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_INSTALL\_DEPS**

  Auto installs dependencies using the active package manager.

* **--json-schema**

  **env: SHOPIFY\_FLAG\_JSON\_SCHEMA**

  Print the command's JSON schemas.

* **--language \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_LANGUAGE**

  Sets the template language to use. One of `js` or `ts`.

* **--markets \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_I18N**

  Sets the URL structure to support multiple markets. Must be one of: `subfolders`, `domains`, `subdomains`, `none`. Example: `--markets subfolders`.

* **--mock-shop**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_MOCK\_DATA**

  Use mock.shop as the data source for the storefront.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the new Hydrogen storefront.

* **--quickstart**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_QUICKSTART**

  Scaffolds a new Hydrogen project with a set of sensible defaults. Equivalent to `shopify hydrogen init --path hydrogen-quickstart --mock-shop --language js --shortcut --markets none`

* **--shortcut**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_SHORTCUT**

  Creates a global h2 shortcut for Shopify CLI using shell aliases. Deactivate with `--no-shortcut`.

* **--styling \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_STYLING**

  Sets the styling strategy to use. One of `tailwind`, `vanilla-extract`, `css-modules`, `postcss`, `none`.

* **--template \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_TEMPLATE**

  Scaffolds project based on a template: `skeleton` (the default), `demo-store` or a URL to a git repository.

* **-f, --force**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE**

  Overwrites the destination directory and files if they already exist.

### Examples

* #### Hydrogen init

  ##### hydrogen init

  ```sh
  shopify hydrogen init [flags]
  ```

***
