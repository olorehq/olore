---
title: Local HTTPS
description: >-
  The local HTTPS functions serve your Vite dev server on a trusted HTTPS origin
  that customer account login accepts. Use these functions to provision local
  certificates and to sync your development URLs to the Customer Account API
  settings.
api_version: 2026-10
source_url:
  html: 'https://shopify.dev/docs/api/hydrogen/latest/local-https'
  md: 'https://shopify.dev/docs/api/hydrogen/latest/local-https.md'
api_name: hydrogen
---

# Local HTTPS

The local HTTPS functions serve your Vite dev server on a trusted HTTPS origin that customer account login accepts. Use these functions to provision local certificates and to sync your development URLs to the Customer Account API settings.

To test customer login locally, refer to [Test sign-in locally with HTTPS](https://shopify.dev/docs/storefronts/hydrogen/customer-accounts#step-6-test-sign-in-locally-with-https).

Import `localHttps`, `provisionLocalHttps`, and `LOCAL_HTTPS_DEFAULTS` from `@shopify/hydrogen/vite`.

***

## Vite plugin

## local​Https(**[options](#localhttps-propertydetail-options)**​)

Serves your Vite dev server over trusted HTTPS on a fixed host and port, and adds the dev server URLs to your Customer Account API settings. Vite exits when another process uses the port. The dev server speaks HTTP/1.1 only.

When `vite dev` starts without certificate files, the plugin asks for permission in the terminal, then creates the files. The plugin skips the prompt without an interactive terminal and in CI. Hydrogen treats any `CI` environment variable value other than an empty string, `false`, or `0` as CI. While certificate files are missing, the plugin prints a warning and leaves HTTPS off.

After the dev server starts, the plugin runs Shopify CLI to update your Customer Account API settings with the dev server URLs. The update needs a Shopify CLI that includes `@shopify/cli-hydrogen` 13.0.4 or later. When the project has no linked Hydrogen storefront, Shopify CLI asks you to link one first. When Shopify CLI is missing or outdated, or the update fails, the plugin prints the URLs to enter by hand and the dev server keeps running. In CI, the plugin prints the URLs and skips Shopify CLI.

### Parameters

* **options**

  **LocalHttpsOptions**

  **required**

  Switch, host, port, and certificate paths for local HTTPS.

### Returns

* **LocalHttpsPlugin**

  A Vite plugin. Its `api.getDevServerConfig()` method returns the HTTPS settings for frameworks that serve HTTPS outside Vite.

### LocalHttpsOptions

Switch, host, port, and certificate files for local HTTPS.

* certPath

  Path to the certificate file. Defaults to \`\~/.shopify/hydrogen/certs/\<host>.pem\`. A leading \`\~/\` points to your home directory, and a relative path starts from the current working directory.

  ```ts
  string | URL
  ```

* enabled

  Turns on local HTTPS for the dev server. When \`false\`, the plugin leaves the Vite config unchanged.

  ```ts
  boolean
  ```

* host

  Hostname for the dev server and the Customer Account API URLs. Defaults to \`local.tryhydrogen.dev\`.

  ```ts
  string
  ```

* keyPath

  Path to the private key file. Defaults to \`\~/.shopify/hydrogen/certs/\<host>-key.pem\`. Accepts the same path forms as \`certPath\`.

  ```ts
  string | URL
  ```

* port

  Port for the dev server. Vite exits when another process uses the port. Defaults to \`5173\`.

  ```ts
  number
  ```

### LocalHttpsPlugin

The local HTTPS Vite plugin, with an API for frameworks that start their own HTTPS server.

```ts
Plugin & LocalHttpsPluginExtension
```

### LocalHttpsPluginExtension

The API that the local HTTPS Vite plugin adds to the Vite plugin object.

* api

  Methods for frameworks that start their own HTTPS server.

  ```ts
  LocalHttpsPluginApi
  ```

### LocalHttpsPluginApi

Methods for frameworks that start their own HTTPS server.

* getDevServerConfig

  Returns the host, port, and certificate paths for frameworks that serve HTTPS outside Vite, such as Nuxt. Returns \`undefined\` when \`enabled\` is \`false\` or a certificate file is missing.

  ```ts
  () => LocalHttpsDevServerConfig
  ```

### LocalHttpsDevServerConfig

Host, port, and certificate file paths for serving local HTTPS outside Vite.

* host

  Local hostname that the dev server serves, such as \`local.tryhydrogen.dev\`.

  ```ts
  string
  ```

* https

  Absolute paths to the certificate file and the private key file.

  ```ts
  { cert: string; key: string; }
  ```

* port

  Port for the dev server.

  ```ts
  number
  ```

### Examples

* #### Enable local HTTPS in Vite

  ##### Description

  Add the plugin to a Vite config. This example enables HTTPS only when Vite starts through the \`dev:https\` package script.

  ##### TypeScript

  ```ts
  import { localHttps } from "@shopify/hydrogen/vite";
  import { defineConfig } from "vite";

  export default defineConfig({
    plugins: [
      localHttps({
        enabled: process.env.npm_lifecycle_event === "dev:https",
      }),
    ],
  });
  ```

* #### Pass TLS files to Nuxt

  ##### Description

  Register the plugin with Vite and pass its dev server config to Nuxt. This example lets Nitro terminate HTTPS with the plugin's certificates.

  ##### TypeScript

  ```ts
  import { localHttps } from "@shopify/hydrogen/vite";
  import type { NuxtConfig } from "nuxt/schema";

  type VitePlugin = NonNullable<NonNullable<NuxtConfig["vite"]>["plugins"]>[number];

  const httpsPlugin = localHttps({
    enabled: process.env.npm_lifecycle_event === "dev:https",
  });

  export default defineNuxtConfig({
    devServer: httpsPlugin.api.getDevServerConfig(),
    vite: {
      plugins: [httpsPlugin as VitePlugin],
    },
  });
  ```

***

## Certificate provisioning

## provision​Local​Https(**[options](#provisionlocalhttps-propertydetail-options)**​)

Creates trusted certificate files for local HTTPS. Call the function from a setup script, or before you start a framework that reads certificate paths when its config loads, such as Nuxt.

When both files exist, the function returns their paths and changes nothing. Otherwise, the function downloads a pinned, checksum-verified mkcert release, adds the mkcert certificate authority to your system trust store, and creates the certificate and private key. mkcert can ask for your password.

### Parameters

* **options**

  **ProvisionLocalHttpsOptions**

  **Default: {}**

  Host and certificate paths. Each option has a Hydrogen default.

### ProvisionLocalHttpsOptions

Host and certificate paths for provisionLocalHttps.

* certPath

  Path to the certificate file. Defaults to \`\~/.shopify/hydrogen/certs/\<host>.pem\`. A leading \`\~/\` points to your home directory, and a relative path starts from the current working directory.

  ```ts
  string | URL
  ```

* host

  Hostname for the dev server and the Customer Account API URLs. Defaults to \`local.tryhydrogen.dev\`.

  ```ts
  string
  ```

* keyPath

  Path to the private key file. Defaults to \`\~/.shopify/hydrogen/certs/\<host>-key.pem\`. Accepts the same path forms as \`certPath\`.

  ```ts
  string | URL
  ```

### Examples

* #### Provision certificates

  ##### Description

  Provision the default certificates from a script. This example prints the host and the certificate and key paths.

  ##### TypeScript

  ```ts
  import { provisionLocalHttps } from "@shopify/hydrogen/vite";

  const { host, certPath, keyPath } = await provisionLocalHttps();

  console.log(`Local HTTPS is ready for https://${host}`);
  console.log(`  Certificate: ${certPath}`);
  console.log(`  Private key: ${keyPath}`);
  ```

***

## Development workflow

* Enable the plugin in a dedicated `dev:https` script, and keep `vite dev` on HTTP for work that doesn't need customer account login.
* Next.js apps don't use the plugin. Start Next.js with `next dev --experimental-https --hostname local.tryhydrogen.dev --port 5173`, and configure the Customer Account API URLs in the Shopify admin by hand.
* Astro sets the dev server host and port itself. Pass the host and port from `LOCAL_HTTPS_DEFAULTS` to Astro's `server` option.
* Nuxt and SolidStart read certificate paths when the config loads. Run `npx hydrogen certs install` before the first start, or restart once after the plugin provisions certificates.

***
