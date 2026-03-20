---
title: Extend Body Parser
description: Extend the body parser for more efficient handling of large payloads, extend the data types.
---

# Extend Body Parser

In some cases, you may need to extend the body parser to handle larger payloads or additional data types. This can be done by creating a custom body parser that extends the default functionality.

```ts
import { RPCHandler } from '@orpc/server/fetch'
import { getFilenameFromContentDisposition } from '@orpc/standard-server'

const OVERRIDE_BODY_CONTEXT = Symbol('OVERRIDE_BODY_CONTEXT')

interface OverrideBodyContext {
  fetchRequest: Request
}

const handler = new RPCHandler(router, {
  adapterInterceptors: [
    (options) => {
      return options.next({
        ...options,
        context: {
          ...options.context,
          [OVERRIDE_BODY_CONTEXT as any]: {
            fetchRequest: options.request,
          },
        },
      })
    },
  ],
  rootInterceptors: [
    (options) => {
      const { fetchRequest } = (options.context as any)[OVERRIDE_BODY_CONTEXT] as OverrideBodyContext

      return options.next({
        ...options,
        request: {
          ...options.request,
          async body() {
            const contentDisposition = fetchRequest.headers.get('content-disposition')
            const contentType = fetchRequest.headers.get('content-type')

            if (contentDisposition === null && contentType?.startsWith('multipart/form-data')) {
              // Custom handling for multipart/form-data
              // Example: use @mjackson/form-data-parser for streaming parsing
              return fetchRequest.formData()
            }

            // if has content-disposition always treat as file upload
            if (
              contentDisposition !== null || (
                !contentType?.startsWith('application/json')
                && !contentType?.startsWith('application/x-www-form-urlencoded')
              )
            ) {
              // Custom handling for file uploads
              // Example: streaming file into disk to reduce memory usage
              const fileName = getFilenameFromContentDisposition(contentDisposition ?? '') ?? 'blob'
              const blob = await fetchRequest.blob()
              return new File([blob], fileName, {
                type: blob.type,
              })
            }

            // fallback to default body parser
            return options.request.body()
          },
        },
      })
    },
  ],
})
```

::: warning
The `adapterInterceptors` can be different based on the adapter you are using. The example above is for the Fetch adapter.
:::
