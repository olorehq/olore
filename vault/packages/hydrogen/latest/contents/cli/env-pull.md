---
title: hydrogen env pull
description: >-
  Pulls environment variables from the linked Hydrogen storefront into an .env
  file, leaving secret values empty.
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-pull'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-pull.md'
api_name: shopify-cli
---

# hydrogen env pull

Pulls environment variables from the linked Hydrogen storefront into an `.env` file, leaving secret values empty.

#### Flags

The following flags are available for the `hydrogen env pull` command:

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

* #### Hydrogen env pull

  ##### hydrogen env pull

  ```sh
  shopify hydrogen env pull [flags]
  ```

***
