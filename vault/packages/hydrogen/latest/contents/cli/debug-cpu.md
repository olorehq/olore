---
title: hydrogen debug cpu
description: >-
  Builds the app and runs the resulting code to profile the server startup time,
  watching for changes.
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-debug-cpu'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-debug-cpu.md'
api_name: shopify-cli
---

# hydrogen debug cpu

**Hydrogen 2026-04 and earlier:**

This command works with Hydrogen 2026-04 and earlier. Hydrogen 2026-10 doesn't support the command. In a Hydrogen 2026-10 project, use your framework's commands or the `@shopify/hydrogen` commands instead. To check which commands Hydrogen 2026-10 supports, refer to [Shopify CLI Hydrogen commands](https://shopify.dev/docs/api/shopify-cli/hydrogen).

Builds the app and runs the resulting code to profile the server startup time, watching for changes. This command can be used to [debug slow app startup times](https://shopify.dev/docs/custom-storefronts/hydrogen/debugging/cpu-startup) that cause failed deployments in Oxygen.

The profiling results are written to a `.cpuprofile` file that can be viewed with certain tools such as [Flame Chart Visualizer for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-js-profile-flame).

#### Flags

The following flags are available for the `hydrogen debug cpu` command:

* **--entry \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_ENTRY**

  Entry file for the worker. Defaults to `./server`.

* **--json-schema**

  **env: SHOPIFY\_FLAG\_JSON\_SCHEMA**

  Print the command's JSON schemas.

* **--output \<value>**

  **string**

  Specify a path to generate the profile file. Defaults to "startup.cpuprofile".

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

### Examples

* #### Hydrogen debug cpu

  ##### hydrogen debug cpu

  ```sh
  shopify hydrogen debug cpu [flags]
  ```

***
