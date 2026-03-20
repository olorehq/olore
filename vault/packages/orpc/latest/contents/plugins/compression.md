---
title: Compression Plugin
description: A plugin for oRPC that compresses response bodies.
---

# Compression Plugin

The **Compression Plugin** compresses response bodies to reduce bandwidth usage and improve performance.

## Import

Depending on your adapter, import the corresponding plugin:

```ts
import { CompressionPlugin } from '@orpc/server/node'
import { CompressionPlugin } from '@orpc/server/fetch'
```

## Setup

Add the plugin to your handler configuration:

```ts
const handler = new RPCHandler(router, {
  plugins: [
    new CompressionPlugin(),
  ],
})
```

::: info
The `handler` can be any supported oRPC handler, such as [RPCHandler](/docs/rpc-handler), [OpenAPIHandler](/docs/openapi/openapi-handler), or another custom handler.
:::
