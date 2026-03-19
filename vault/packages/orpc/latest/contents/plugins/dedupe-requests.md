---
title: Dedupe Requests Plugin
description: Prevents duplicate requests by deduplicating similar ones to reduce server load.
---

# Dedupe Requests Plugin

The **Dedupe Requests Plugin** prevents redundant requests by deduplicating similar ones, helping to reduce the number of requests sent to the server.

## Usage

```ts
import { DedupeRequestsPlugin } from '@orpc/client/plugins'

const link = new RPCLink({
  plugins: [
    new DedupeRequestsPlugin({
      filter: ({ request }) => request.method === 'GET', // Filters requests to dedupe
      groups: [
        {
          condition: () => true,
          context: {}, // Context used for the rest of the request lifecycle
        },
      ],
    }),
  ],
})
```

::: info
The `link` can be any supported oRPC link, such as [RPCLink](/docs/client/rpc-link), [OpenAPILink](/docs/openapi/client/openapi-link), or custom implementations.
:::

::: tip
By default, only `GET` requests are deduplicated.

If your application does not rely on running multiple mutation requests in parallel (in the same [call stack](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)), you can expand the filter to deduplicate **all** request types.
This also helps prevent issues caused by users clicking actions too quickly and unintentionally sending duplicate mutation requests.
:::

## Groups

To enable deduplication, a request must match at least one defined group. Requests that fall into the same group are considered for deduplication together. Each group also requires a `context`, which will be used during the remainder of the request lifecycle. Learn more about [client context](/docs/client/rpc-link#using-client-context).

Here's an example that deduplicates requests based on the `cache` control:

```ts
interface ClientContext {
  cache?: RequestCache
}

const link = new RPCLink<ClientContext>({
  url: 'http://localhost:3000/rpc',
  method: ({ context }) => {
    if (context?.cache) {
      return 'GET'
    }

    return 'POST'
  },
  plugins: [
    new DedupeRequestsPlugin({
      filter: ({ request }) => request.method === 'GET', // Filters requests to dedupe
      groups: [
        {
          condition: ({ context }) => context?.cache === 'force-cache',
          context: {
            cache: 'force-cache',
          },
        },
        {
          // Fallback group – placed last to catch remaining requests
          condition: () => true,
          context: {},
        },
      ],
    }),
  ],
  fetch: (request, init, { context }) => globalThis.fetch(request, {
    ...init,
    cache: context?.cache,
  }),
})
```

Now, calls with `cache=force-cache` will be sent with `cache=force-cache`, whether they're deduplicated or executed individually.
