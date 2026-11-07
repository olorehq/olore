---
title: hydrogen build
description: Builds a Hydrogen storefront for production.
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-build'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-build.md'
api_name: shopify-cli
---

# hydrogen build

**Hydrogen 2026-04 and earlier:**

This command works with Hydrogen 2026-04 and earlier. Hydrogen 2026-10 doesn't support the command. In a Hydrogen 2026-10 project, use your framework's commands or the `@shopify/hydrogen` commands instead. To check which commands Hydrogen 2026-10 supports, refer to [Shopify CLI Hydrogen commands](https://shopify.dev/docs/api/shopify-cli/hydrogen).

Builds a Hydrogen storefront for production. The client and app worker files are compiled to a `/dist` folder in your Hydrogen project directory.

#### Flags

The following flags are available for the `hydrogen build` command:

* **--bundle-stats**

  Show a bundle size summary after building. Defaults to true, use `--no-bundle-stats` to disable.

* **--codegen**

  Automatically generates GraphQL types for your project’s Storefront API queries.

* **--codegen-config-path \<value>**

  **string**

  Specifies a path to a codegen configuration file. Defaults to `<root>/codegen.ts` if this file exists.

* **--disable-route-warning**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_DISABLE\_ROUTE\_WARNING**

  Disables any warnings about missing standard routes.

* **--entry \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_ENTRY**

  Entry file for the worker. Defaults to `./server`.

* **--force-client-sourcemap**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE\_CLIENT\_SOURCEMAP**

  Client sourcemapping is avoided by default because it makes backend code visible in the browser. Use this flag to force enabling it.

* **--json-schema**

  **env: SHOPIFY\_FLAG\_JSON\_SCHEMA**

  Print the command's JSON schemas.

* **--lockfile-check**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_LOCKFILE\_CHECK**

  Checks that there is exactly one valid lockfile in the project. Defaults to `true`. Deactivate with `--no-lockfile-check`.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **--sourcemap**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_SOURCEMAP**

  Controls whether server sourcemaps are generated. Default to `true`. Deactivate `--no-sourcemaps`.

* **--watch**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_WATCH**

  Watches for changes and rebuilds the project writing output to disk.

### Examples

* #### Hydrogen build

  ##### hydrogen build

  ```sh
  shopify hydrogen build [flags]
  ```

***
