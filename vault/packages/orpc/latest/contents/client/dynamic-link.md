---
title: DynamicLink
description: Dynamically switch between multiple oRPC's links.
---

# DynamicLink

`DynamicLink` lets you dynamically choose between different oRPC's links based on your client context. This capability enables flexible routing of RPC requests.

## Example

This example shows how the client dynamically selects between two [RPCLink](/docs/client/rpc-link) instances based on the client context: one dedicated to cached requests and another for non-cached requests.

```ts twoslash
import { router } from './shared/planet'
import { RouterClient } from '@orpc/server'
import { RPCLink } from '@orpc/client/fetch'
// ---cut---
import { createORPCClient, DynamicLink } from '@orpc/client'

interface ClientContext {
  cache?: boolean
}

const cacheLink = new RPCLink({
  url: 'https://cache.example.com/rpc',
})

const noCacheLink = new RPCLink({
  url: 'https://example.com/rpc',
})

const link = new DynamicLink<ClientContext>((options, path, input) => {
  if (options.context?.cache) {
    return cacheLink
  }

  return noCacheLink
})

const client: RouterClient<typeof router, ClientContext> = createORPCClient(link)
```

:::info
Any oRPC's link is supported, not strictly limited to `RPCLink`.
:::
