---
title: React Native Adapter
description: Use oRPC inside a React Native project
---

# React Native Adapter

[React Native](https://reactnative.dev/) is a framework for building native apps using React. For additional context, refer to the [HTTP Adapter](/docs/adapters/http) guide.

## Fetch Link

React Native includes a [Fetch API](https://reactnative.dev/docs/network), so you can use oRPC out of the box.

::: warning
However, the Fetch API in React Native has limitations. oRPC features like [File/Blob](/docs/file-upload-download), and [Event Iterator](/docs/event-iterator) aren't supported. Follow [Support Stream #27741](https://github.com/facebook/react-native/issues/27741) for updates.
:::

::: tip
If you're using `RPCHandler/Link`, you can temporarily add support for binary data by extending the [RPC JSON Serializer](/docs/advanced/rpc-json-serializer#extending-native-data-types) to encode these types as Base64.
:::

```ts
import { RPCLink } from '@orpc/client/fetch'

const link = new RPCLink({
  url: 'http://localhost:3000/rpc',
  headers: async ({ context }) => ({
    'x-api-key': context?.something ?? ''
  })
  // fetch: <-- polyfill fetch if needed
})
```

::: info
The `link` can be any supported oRPC link, such as [RPCLink](/docs/client/rpc-link), [OpenAPILink](/docs/openapi/client/openapi-link), or another custom link.
:::

### `expo/fetch`

If you're using [Expo](https://expo.dev/), you can use the [`expo/fetch`](https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api) to expand support for [Event Iterator](/docs/event-iterator).

```ts
export const link = new RPCLink({
  url: `http://localhost:3000/rpc`,
  async fetch(request, init) {
    const { fetch } = await import('expo/fetch')

    const resp = await fetch(request.url, {
      body: await request.blob(),
      headers: request.headers,
      method: request.method,
      signal: request.signal,
      ...init,
    })

    return resp
  },
})
```
