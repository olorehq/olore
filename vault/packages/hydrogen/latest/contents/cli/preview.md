---
title: hydrogen preview
description: >-
  Runs a server in your local development environment that serves your Hydrogen
  app's production build.
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-preview'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-preview.md'
api_name: shopify-cli
---

# hydrogen preview

**Hydrogen 2026-04 and earlier:**

This command works with Hydrogen 2026-04 and earlier. Hydrogen 2026-10 doesn't support the command. In a Hydrogen 2026-10 project, use your framework's commands or the `@shopify/hydrogen` commands instead. To check which commands Hydrogen 2026-10 supports, refer to [Shopify CLI Hydrogen commands](https://shopify.dev/docs/api/shopify-cli/hydrogen).

Runs a server in your local development environment that serves your Hydrogen app's production build. Build first with [`shopify hydrogen build`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-build), or pass `--build`.

#### Flags

The following flags are available for the `hydrogen preview` command:

* **--build**

  Builds the app before starting the preview server.

* **--codegen**

  Automatically generates GraphQL types for your project’s Storefront API queries.

* **--codegen-config-path \<value>**

  **string**

  Specifies a path to a codegen configuration file. Defaults to `<root>/codegen.ts` if this file exists.

* **--debug**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_DEBUG**

  Enables inspector connections to the server with a debugger such as Visual Studio Code or Chrome DevTools.

* **--entry \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_ENTRY**

  Entry file for the worker. Defaults to `./server`.

* **--env \<value>**

  **string**

  Specifies the environment to perform the operation using its handle. Fetch the handle using the `env list` command.

* **--env-branch \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_ENVIRONMENT\_BRANCH**

  Specifies the environment to perform the operation using its Git branch name.

* **--env-file \<value>**

  **string**

  Path to an environment file to override existing environment variables. Defaults to the '.env' located in your project path `--path`.

* **--inspector-port \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_INSPECTOR\_PORT**

  The port where the inspector is available. Defaults to 9229.

* **--json-schema**

  **env: SHOPIFY\_FLAG\_JSON\_SCHEMA**

  Print the command's JSON schemas.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **--port \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PORT**

  The port to run the server on. Defaults to 3000.

* **--verbose**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_VERBOSE**

  Outputs more information about the command's execution.

* **--watch**

  Watches for changes and rebuilds the project.

### Examples

* #### Hydrogen preview

  ##### hydrogen preview

  ```sh
  shopify hydrogen preview [flags]
  ```

***
