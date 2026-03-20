---
title: Response Validation Plugin
description: A plugin that validates server responses against the contract schema to ensure that the data returned from your server matches the expected types defined in your contract.
---

# Response Validation Plugin

The **Response Validation Plugin** validates server responses against your contract schema, ensuring that data returned from your server matches the expected types defined in your contract.

::: info
This plugin is best suited for [Contract-First Development](/docs/contract-first/define-contract). [Minified Contract](/docs/contract-first/router-to-contract#minify-export-the-contract-router-for-the-client) is **not supported** because it removes the schema from the contract.
:::

## Setup

```ts twoslash
import { contract } from './shared/planet'
import { createORPCClient } from '@orpc/client'
import type { ContractRouterClient } from '@orpc/contract'
// ---cut---
import { RPCLink } from '@orpc/client/fetch'
import { ResponseValidationPlugin } from '@orpc/contract/plugins'

const link = new RPCLink({
  url: 'http://localhost:3000/rpc',
  plugins: [
    new ResponseValidationPlugin(contract),
  ],
})

const client: ContractRouterClient<typeof contract> = createORPCClient(link)
```

::: info
The `link` can be any supported oRPC link, such as [RPCLink](/docs/client/rpc-link), [OpenAPILink](/docs/openapi/client/openapi-link), or custom implementations.
:::

## Limitations

Schemas that transform data into different types than the expected schema types are not supported.

**Why?** Consider this example schema that accepts a `number` and transforms it into a `string` after validation:

```ts
const unsupported = z.number().transform(value => value.toString())
```

When the server validates output, it transforms the `number` into a `string`. The client receives a `string`, but the `string` no longer matches the original schema, causing validation to fail.

## Advanced Usage

Beyond response validation, this plugin also serves special purposes such as [Expanding Type Support for OpenAPI Link](/docs/openapi/advanced/expanding-type-support-for-openapi-link).
