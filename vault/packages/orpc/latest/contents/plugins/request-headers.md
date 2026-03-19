---
title: Request Headers Plugin
description: Request Headers Plugin for oRPC
---

# Request Headers Plugin

The Request Headers Plugin allows you to access request headers in oRPC. It injects a `reqHeaders` instance into the `context`, enabling you to read incoming request headers easily.

::: info
**What's the difference vs passing request headers directly into the context?**
There's no functional difference, but this plugin provides a consistent interface for accessing headers across different handlers.
:::

## Context Setup

```ts twoslash
import { os } from '@orpc/server'
// ---cut---
import { getCookie } from '@orpc/server/helpers'
import { RequestHeadersPluginContext } from '@orpc/server/plugins'

interface ORPCContext extends RequestHeadersPluginContext {}

const base = os.$context<ORPCContext>()

const example = base
  .use(({ context, next }) => {
    const sessionId = getCookie(context.reqHeaders, 'session_id')
    return next()
  })
  .handler(({ context }) => {
    const userAgent = context.reqHeaders?.get('user-agent')
    return { userAgent }
  })
```

::: info
**Why can `reqHeaders` be `undefined`?**
This allows procedures to run safely even when `RequestHeadersPlugin` is not used, such as in direct calls.
:::

::: tip
Combine with [Cookie Helpers](/docs/helpers/cookie) for streamlined cookie management.
:::

## Handler Setup

```ts
import { RequestHeadersPlugin } from '@orpc/server/plugins'

const handler = new RPCHandler(router, {
  plugins: [
    new RequestHeadersPlugin()
  ],
})
```

::: info
The `handler` can be any supported oRPC handler, such as [RPCHandler](/docs/rpc-handler), [OpenAPIHandler](/docs/openapi/openapi-handler), or another custom handler.
:::
