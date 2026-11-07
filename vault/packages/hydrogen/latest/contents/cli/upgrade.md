---
title: hydrogen upgrade
description: >-
  Upgrades Hydrogen project dependencies, preview features, fixes, and breaking
  changes within legacy Hydrogen, versions 2026-04 and earlier.
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-upgrade'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-upgrade.md'
api_name: shopify-cli
---

# hydrogen upgrade

**Hydrogen 2026-04 and earlier:**

This command works with Hydrogen 2026-04 and earlier. Hydrogen 2026-10 doesn't support the command. In a Hydrogen 2026-10 project, use your framework's commands or the `@shopify/hydrogen` commands instead. To check which commands Hydrogen 2026-10 supports, refer to [Shopify CLI Hydrogen commands](https://shopify.dev/docs/api/shopify-cli/hydrogen).

Upgrades Hydrogen project dependencies, preview features, fixes, and breaking changes within legacy Hydrogen, versions 2026-04 and earlier. The command doesn't upgrade a project to Hydrogen 2026-10. To move to Hydrogen 2026-10, see [Migrate from legacy Hydrogen](https://shopify.dev/docs/storefronts/hydrogen/migrate).

Use a clean Git working tree, or pass `--force`. The command writes an instruction file for releases with migration steps or package removals.

#### Flags

The following flags are available for the `hydrogen upgrade` command:

* **--json-schema**

  **env: SHOPIFY\_FLAG\_JSON\_SCHEMA**

  Print the command's JSON schemas.

* **--path \<value>**

  **string**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_PATH**

  The path to the directory of the Hydrogen storefront. Defaults to the current directory where the command is run.

* **-f, --force**

  **env: SHOPIFY\_HYDROGEN\_FLAG\_FORCE**

  Ignore warnings and force the upgrade to the target version

* **-v, --version \<value>**

  **string**

  A target hydrogen version to update to

### Examples

* #### Hydrogen upgrade

  ##### hydrogen upgrade

  ```sh
  shopify hydrogen upgrade [flags]
  ```

***
