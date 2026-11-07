---
title: hydrogen shortcut
description: Creates a global h2 shortcut for Shopify CLI using shell aliases.
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-shortcut'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-shortcut.md'
api_name: shopify-cli
---

# hydrogen shortcut

**Hydrogen 2026-04 and earlier:**

This command works with Hydrogen 2026-04 and earlier. Hydrogen 2026-10 doesn't support the command. In a Hydrogen 2026-10 project, use your framework's commands or the `@shopify/hydrogen` commands instead. To check which commands Hydrogen 2026-10 supports, refer to [Shopify CLI Hydrogen commands](https://shopify.dev/docs/api/shopify-cli/hydrogen).

Creates a global h2 shortcut for Shopify CLI using shell aliases.

The following shells are supported:

* Bash (using `~/.bashrc`)
* ZSH (using `~/.zshrc`)
* Fish (using `~/.config/fish/functions`)
* PowerShell (added to `$PROFILE`)

Restart your terminal, then use `h2 <command>` to run the project's local `shopify hydrogen <command>`.

### Examples

* #### Hydrogen shortcut

  ##### hydrogen shortcut

  ```sh
  shopify hydrogen shortcut
  ```

***
