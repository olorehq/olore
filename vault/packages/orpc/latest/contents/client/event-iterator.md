---
title: Event Iterator in oRPC Clients
description: Learn how to use event iterators in oRPC clients.
---

# Event Iterator in oRPC Clients

An [Event Iterator](/docs/event-iterator) in oRPC behaves like an [AsyncGenerator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator).
Simply iterate over it and await each event.

## Basic Usage

```ts twoslash
import { ContractRouterClient, eventIterator, oc } from '@orpc/contract'
import * as z from 'zod'

const contract = {
  streaming: oc.output(eventIterator(z.object({ message: z.string() })))
}

declare const client: ContractRouterClient<typeof contract>
// ---cut---
const iterator = await client.streaming()

for await (const event of iterator) {
  console.log(event.message)
}
```

## Stopping the Stream Manually

You can rely on `signal` or `.return` to stop the iterator.

```ts
const controller = new AbortController()
const iterator = await client.streaming(undefined, { signal: controller.signal })

// Stop the stream after 1 second
setTimeout(async () => {
  controller.abort()
  // or
  await iterator.return()
}, 1000)

for await (const event of iterator) {
  console.log(event.message)
}
```

## Error Handling

::: info
Unlike traditional SSE, the Event Iterator does not automatically retry on error. To enable automatic retries, refer to the [Client Retry Plugin](/docs/plugins/client-retry).
:::

```ts
const iterator = await client.streaming()

try {
  for await (const event of iterator) {
    console.log(event.message)
  }
}
catch (error) {
  if (error instanceof ORPCError) {
    // Handle the error here
  }
}
```

::: info
Errors thrown by the server can be instances of `ORPCError`.
:::

## Using `consumeEventIterator`

oRPC provides a utility function `consumeEventIterator` to consume an event iterator with lifecycle callbacks.

```ts
import { consumeEventIterator } from '@orpc/client'

const cancel = consumeEventIterator(client.streaming(), {
  onEvent: (event) => {
    console.log(event.message)
  },
  onError: (error) => {
    console.error(error)
  },
  onSuccess: (value) => {
    console.log(value)
  },
  onFinish: (state) => {
    console.log(state)
  },
})

setTimeout(async () => {
  // Stop the stream after 1 second
  await cancel()
}, 1000)
```

:::info
This utility accepts both promises and event iterators. Passing a promise directly lets it infer correct error type.
:::
