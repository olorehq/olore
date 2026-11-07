---
title: hydrogen link
description: Links your local development environment to a remote Hydrogen storefront.
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-link'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-link.md'
api_name: shopify-cli
---

# hydrogen link

Links your local development environment to a remote Hydrogen storefront. You can link an unlimited number of development environments to a single Hydrogen storefront.

In Hydrogen 2026-04 and earlier, [`dev`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-dev) loads the linked storefront's environment variables into the server runtime.

After you run the `link` command, you can access the [env list](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-list), [env pull](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-pull), and [unlink](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-unlink) commands.

#### Flags

The following flags are available for the `hydrogen link` command:

* **--create-storefront**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_CREATE\_STOREFRONT**

  Create a new Hydrogen storefront.

* **--json-schema**

  **env: SHOPIFY\_FLAG\_JSON\_SCHEMA**

  Print the command's JSON schemas.

* **--name \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_NAME**

  The name to use when creating a new Hydrogen storefront.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **--storefront \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_STOREFRONT**

  The name of a Hydrogen Storefront (e.g. "Jane's Apparel")

* **-f, --force**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE**

  Overwrites the destination directory and files if they already exist.

* **-s, --shop \<value>**

  **string**

  **env: SHOPIFY\_SHOP**

  Shop URL. It can be the shop prefix (janes-apparel) or the full myshopify.com URL (janes-apparel.myshopify.com, <https://janes-apparel.myshopify.com>).

### Examples

* #### Hydrogen link

  ##### hydrogen link

  ```sh
  shopify hydrogen link [flags]
  ```

***
