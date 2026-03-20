---
title: Request Validation Plugin
description: A plugin that blocks invalid requests before they reach your server. Especially useful for applications that rely heavily on server-side validation.
---

# Request Validation Plugin

The **Request Validation Plugin** ensures that only valid requests are sent to your server. This is especially valuable for applications that depend on server-side validation.

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
import { RequestValidationPlugin } from '@orpc/contract/plugins'

const link = new RPCLink({
  url: 'http://localhost:3000/rpc',
  plugins: [
    new RequestValidationPlugin(contract),
  ],
})

const client: ContractRouterClient<typeof contract> = createORPCClient(link)
```

::: info
The `link` can be any supported oRPC link, such as [RPCLink](/docs/client/rpc-link), [OpenAPILink](/docs/openapi/client/openapi-link), or custom implementations.
:::

## Form Validation

You can simplify your frontend by removing heavy form validation libraries and relying on oRPC's validation errors instead, since input validation runs directly in the browser and is highly performant.

```tsx
import { getIssueMessage, parseFormData } from '@orpc/openapi-client/helpers'

export function ContactForm() {
  const [error, setError] = useState()

  const handleSubmit = async (form: FormData) => {
    try {
      const output = await client.someProcedure(parseFormData(form))
      console.log(output)
    }
    catch (error) {
      setError(error)
    }
  }

  return (
    <form action={handleSubmit}>
      <input name="user[name]" type="text" />
      <span>{getIssueMessage(error, 'user[name]')}</span>

      <input name="user[emails][]" type="email" />
      <span>{getIssueMessage(error, 'user[emails][]')}</span>

      <button type="submit">Submit</button>
    </form>
  )
}
```

::: info
This example uses [Form Data Helpers](/docs/helpers/form-data).
:::
