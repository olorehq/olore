---
title: hydrogen env push
description: >-
  Push environment variables from the local .env file to your linked Hydrogen
  storefront.
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-push'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-push.md'
api_name: shopify-cli
---

# hydrogen env push

Push environment variables from the local .env file to your linked Hydrogen storefront.

#### Flags

The following flags are available for the `hydrogen env push` command:

* **--dry-run**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_DRY\_RUN**

  Preview environment variable changes without pushing them.

* **--env \<value>**

  **string**

  Specifies the environment to perform the operation using its handle. Fetch the handle using the `env list` command.

* **--env-file \<value>**

  **string**

  Path to an environment file to override existing environment variables. Defaults to the '.env' located in your project path `--path`.

* **--json-schema**

  **env: SHOPIFY\_FLAG\_JSON\_SCHEMA**

  Print the command's JSON schemas.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **-f, --force**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE**

  Push environment variable changes without confirmation.

### Examples

* #### Hydrogen env push

  ##### hydrogen env push

  ```sh
  shopify hydrogen env push [flags]
  ```

***
