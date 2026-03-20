---
title: Hey API Integration
description: Easily convert a Hey API generated client into an oRPC client to take full advantage of the oRPC ecosystem.
---

# Hey API Integration

Easily convert a [Hey API](https://heyapi.dev/) generated client into an oRPC client to take full advantage of the oRPC ecosystem.

::: warning
[Hey API](https://heyapi.dev/) is still in an unstable stage. As a result, this integration may introduce breaking changes in the future to keep up with its ongoing development.
:::

## Installation

::: code-group

```sh [npm]
npm install @orpc/hey-api@latest
```

```sh [yarn]
yarn add @orpc/hey-api@latest
```

```sh [pnpm]
pnpm add @orpc/hey-api@latest
```

```sh [bun]
bun add @orpc/hey-api@latest
```

```sh [deno]
deno add npm:@orpc/hey-api@latest
```

:::

## Generating an Hey API Client

To generate a Hey API client, run the following command:

```sh
npx @hey-api/openapi-ts \
  -i https://get.heyapi.dev/hey-api/backend \
  -o src/client
```

This command uses the OpenAPI spec at `https://get.heyapi.dev/hey-api/backend` and outputs the generated client into the `src/client` directory.

::: info
For more information on Hey API, please refer to the [official documentation](https://heyapi.dev/).
:::

## Converting to an oRPC Client

Once the client is generated, convert it to an oRPC client using the `toORPCClient` function:

```ts
import { experimental_toORPCClient } from '@orpc/hey-api'
import * as sdk from 'src/client/sdk.gen'

export const client = experimental_toORPCClient(sdk)

const { body } = await client.listPlanets()
```

This `client` now behaves like any standard oRPC [server-side client](/docs/client/server-side) or [client-side client](/docs/client/client-side), allowing you to use it with any oRPC-compatible library.

## Error Handling

Internally, oRPC passes the `throwOnError` option to the Hey API client. If the original Hey API client throws an error, oRPC will forward it as is without modification ensuring consistent error handling.
