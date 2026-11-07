---
title: Shopify CLI Hydrogen commands
source_url:
  html: 'https://shopify.dev/docs/api/shopify-cli/hydrogen'
  md: 'https://shopify.dev/docs/api/shopify-cli/hydrogen.md'
api_name: shopify-cli
---

# Shopify CLI Hydrogen commands

Hydrogen 2026-10 supports a subset of the Shopify CLI Hydrogen commands. In a Hydrogen 2026-10 project, use your framework's commands to build, run, and generate code. The `@shopify/hydrogen` package includes a `hydrogen` command for `setup`, `gql check`, `skills check`, `skills sync`, `certs install`, and `certs uninstall`. Run a `@shopify/hydrogen` command with `npx @shopify/hydrogen <command>`. With `@shopify/hydrogen` installed, Shopify CLI with `@shopify/cli-hydrogen` 13.0.1 or later stops an unsupported command and shows an error.

To start a Hydrogen 2026-10 project, [add Hydrogen to a new or existing project](https://shopify.dev/docs/storefronts/hydrogen/getting-started/add-to-existing-project). To upgrade a legacy Hydrogen project, refer to [Migrate from legacy Hydrogen](https://shopify.dev/docs/storefronts/hydrogen/migrate).

| Command | Hydrogen 2026-10 | Hydrogen 2026-04 and earlier |
| - | - | - |
| [`hydrogen customer-account-push`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-customer-account-push) | Yes | Yes |
| [`hydrogen deploy`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-deploy) | Yes | Yes |
| [`hydrogen env list`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-list) | Yes | Yes |
| [`hydrogen env pull`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-pull) | Yes | Yes |
| [`hydrogen env push`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-push) | Yes | Yes |
| [`hydrogen link`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-link) | Yes | Yes |
| [`hydrogen list`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-list) | Yes | Yes |
| [`hydrogen login`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-login) | Yes | Yes |
| [`hydrogen logout`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-logout) | Yes | Yes |
| [`hydrogen unlink`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-unlink) | Yes | Yes |
| [`hydrogen init`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-init) | No. Creates a Hydrogen 2026-04 project. | Yes |
| [`hydrogen build`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-build) | No | Yes |
| [`hydrogen check`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-check) | No | Yes |
| [`hydrogen codegen`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-codegen) | No | Yes |
| [`hydrogen debug cpu`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-debug-cpu) | No | Yes |
| [`hydrogen dev`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-dev) | No | Yes |
| [`hydrogen generate route`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-generate-route) | No | Yes |
| [`hydrogen generate routes`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-generate-routes) | No | Yes |
| [`hydrogen preview`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-preview) | No | Yes |
| [`hydrogen setup`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup) | No | Yes |
| [`hydrogen setup css`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-css) | No | Yes |
| [`hydrogen setup markets`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-markets) | No | Yes |
| [`hydrogen setup vite`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-vite) | No | Yes |
| [`hydrogen shortcut`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-shortcut) | No | Yes |
| [`hydrogen upgrade`](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-upgrade) | No | Yes |

[hydrogen build](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-build)

[Builds a Hydrogen storefront for production.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-build)

[hydrogen check](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-check)

[Checks whether your Hydrogen app includes a set of standard Shopify routes.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-check)

[hydrogen codegen](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-codegen)

[Automatically generates GraphQL types for your project’s Storefront API queries.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-codegen)

[hydrogen customer-account-push](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-customer-account-push)

[Push project configuration to admin](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-customer-account-push)

[hydrogen debug cpu](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-debug-cpu)

[Builds the app and runs the resulting code to profile the server startup time, watching for changes.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-debug-cpu)

[hydrogen deploy](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-deploy)

[Builds and deploys your Hydrogen storefront to Oxygen.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-deploy)

[hydrogen dev](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-dev)

[Runs a Hydrogen storefront in a local runtime that emulates an Oxygen worker for development.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-dev)

[hydrogen env list](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-list)

[Lists all environments available on the linked Hydrogen storefront.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-list)

[hydrogen env pull](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-pull)

[Pulls environment variables from the linked Hydrogen storefront into an .env file, leaving secret values empty.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-pull)

[hydrogen env push](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-push)

[Push environment variables from the local .env file to your linked Hydrogen storefront.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-env-push)

[hydrogen generate route](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-generate-route)

[Generates the selected route group from the starter template.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-generate-route)

[hydrogen generate routes](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-generate-routes)

[Generates all supported standard shopify routes.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-generate-routes)

[hydrogen init](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-init)

[Creates a new Hydrogen storefront.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-init)

[hydrogen link](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-link)

[Links your local development environment to a remote Hydrogen storefront.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-link)

[hydrogen list](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-list)

[Lists all remote Hydrogen storefronts available to link to your local development environment.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-list)

[hydrogen login](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-login)

[Logs in to the specified shop and saves the shop domain to the project.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-login)

[hydrogen logout](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-logout)

[Logs out of Shopify and clears .shopify/project.json, including the storefront link.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-logout)

[hydrogen preview](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-preview)

[Runs a server in your local development environment that serves your Hydrogen app's production build.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-preview)

[hydrogen setup css](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-css)

[Adds support for certain CSS strategies to your project.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-css)

[hydrogen setup markets](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-markets)

[Adds support for multiple markets to your project by using the URL structure.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-markets)

[hydrogen setup vite](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-vite)

[EXPERIMENTAL: Upgrades the project to use Vite.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup-vite)

[hydrogen setup](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup)

[Scaffold routes and core functionality.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-setup)

[hydrogen shortcut](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-shortcut)

[Creates a global h2 shortcut for Shopify CLI using shell aliases.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-shortcut)

[hydrogen unlink](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-unlink)

[Unlinks your local development environment from a remote Hydrogen storefront.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-unlink)

[hydrogen upgrade](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-upgrade)

[Upgrades Hydrogen project dependencies, preview features, fixes, and breaking changes within legacy Hydrogen, versions 2026-04 and earlier.](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-upgrade)

***
