---
title: Simple CSRF Protection Plugin
description: Add basic Cross-Site Request Forgery (CSRF) protection to your oRPC application. It helps ensure that requests to your procedures originate from JavaScript code, not from other sources like standard HTML forms or direct browser navigation.
---

# Simple CSRF Protection Plugin

This plugin adds basic [Cross-Site Request Forgery (CSRF)](https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides/CSRF_prevention) protection to your oRPC application. It helps ensure that requests to your procedures originate from JavaScript code, not from other sources like standard HTML forms or direct browser navigation.

## When to Use

This plugin is beneficial if your application stores sensitive data (like session or auth tokens) in Cookie storage using `SameSite=Lax` (the default) or `SameSite=None`.

## Setup

This plugin requires configuration on both the server and client sides.

### Server

```ts twoslash
import { RPCHandler } from '@orpc/server/fetch'
import { router } from './shared/planet'
// ---cut---
import { SimpleCsrfProtectionHandlerPlugin } from '@orpc/server/plugins'

const handler = new RPCHandler(router, {
  strictGetMethodPluginEnabled: false, // Replace Strict Get Method Plugin
  plugins: [
    new SimpleCsrfProtectionHandlerPlugin()
  ],
})
```

::: info
The `handler` can be any supported oRPC handler, such as [RPCHandler](/docs/rpc-handler), [OpenAPIHandler](/docs/openapi/openapi-handler), or custom implementations.
:::

### Client

```ts twoslash
import { RPCLink } from '@orpc/client/fetch'
// ---cut---
import { SimpleCsrfProtectionLinkPlugin } from '@orpc/client/plugins'

const link = new RPCLink({
  url: 'https://api.example.com/rpc',
  plugins: [
    new SimpleCsrfProtectionLinkPlugin(),
  ],
})
```

::: info
The `link` can be any supported oRPC link, such as [RPCLink](/docs/client/rpc-link), [OpenAPILink](/docs/openapi/client/openapi-link), or custom implementations.
:::
