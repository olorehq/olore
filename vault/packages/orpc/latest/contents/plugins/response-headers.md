---
title: Response Headers Plugin
description: Response Headers Plugin for oRPC
---

# Response Headers Plugin

The Response Headers Plugin allows you to set response headers in oRPC. It injects a `resHeaders` instance into the `context`, enabling you to modify response headers easily.

## Context Setup

```ts twoslash
import { os } from '@orpc/server'
// ---cut---
import { setCookie } from '@orpc/server/helpers'
import { ResponseHeadersPluginContext } from '@orpc/server/plugins'

interface ORPCContext extends ResponseHeadersPluginContext {}

const base = os.$context<ORPCContext>()

const example = base
  .use(({ context, next }) => {
    context.resHeaders?.set('x-custom-header', 'value')
    return next()
  })
  .handler(({ context }) => {
    setCookie(context.resHeaders, 'session_id', 'abc123', {
      secure: true,
      maxAge: 3600
    })
  })
```

::: info
**Why can `resHeaders` be `undefined`?**
This allows procedures to run safely even when `ResponseHeadersPlugin` is not used, such as in direct calls.
:::

::: tip
Combine with [Cookie Helpers](/docs/helpers/cookie) for streamlined cookie management.
:::

## Handler Setup

```ts
import { ResponseHeadersPlugin } from '@orpc/server/plugins'

const handler = new RPCHandler(router, {
  plugins: [
    new ResponseHeadersPlugin()
  ],
})
```

::: info
The `handler` can be any supported oRPC handler, such as [RPCHandler](/docs/rpc-handler), [OpenAPIHandler](/docs/openapi/openapi-handler), or another custom handler.
:::
