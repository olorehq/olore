---
title: Hibernation Plugin
description: A plugin to fully leverage Hibernation APIs for your ORPC server.
---

# Hibernation Plugin

The Hibernation Plugin helps you fully leverage Hibernation APIs, making it especially useful for adapters like [Cloudflare Websocket Hibernation](https://developers.cloudflare.com/durable-objects/examples/websocket-hibernation-server/).

## Setup

```ts
import { HibernationPlugin } from '@orpc/server/hibernation'

const handler = new RPCHandler(router, {
  plugins: [
    new HibernationPlugin(),
  ],
})
```

## Event Iterator

The plugin provide `HibernationEventIterator` and `encodeHibernationRPCEvent` to help you return an [Event Iterator](/docs/event-iterator) that utilizes the Hibernation APIs.

1. Return an `HibernationEventIterator` from your handler

   ```ts
   import { HibernationEventIterator } from '@orpc/server/hibernation'

   export const onMessage = os.handler(async ({ context }) => {
     return new HibernationEventIterator<{ message: string }>((id) => {
       // Save the ID. You'll need it to send events later.
       context.ws.serializeAttachment({ id })
     })
   })
   ```

2. Send events to clients with `encodeHibernationRPCEvent`

   ```ts
   import { encodeHibernationRPCEvent } from '@orpc/server/hibernation'

   export const sendMessage = os.handler(async ({ input, context }) => {
     const websockets = context.getWebSockets()

     for (const ws of websockets) {
       const { id } = ws.deserializeAttachment()

       // yield an event to all clients
       ws.send(encodeHibernationRPCEvent(id, { message: input.message }, {
         customJsonSerializers: [
           // put custom serializers here
         ]
       }))
       // return an event and stop event iterator
       ws.send(encodeHibernationRPCEvent(id, { message: input.message }, { event: 'done' }))
       // throw an error and stop event iterator
       ws.send(encodeHibernationRPCEvent(id, new ORPCError('INTERNAL_SERVER_ERROR'), { event: 'error' }))
     }
   })
   ```

::: details Cloudflare Durable Object Chat Room Example?

This example demonstrates how to set up a chat room using [Cloudflare Durable Objects](https://developers.cloudflare.com/durable-objects/) and [Websocket Hibernation](https://developers.cloudflare.com/durable-objects/examples/websocket-hibernation-server/). Everyone connected to the same Durable Object can send messages to each other.

::: code-group

```ts [Durable Object]
import { RPCHandler } from '@orpc/server/websocket'
import {
  encodeHibernationRPCEvent,
  HibernationEventIterator,
  HibernationPlugin,
} from '@orpc/server/hibernation'
import { onError, os } from '@orpc/server'
import { DurableObject } from 'cloudflare:workers'
import * as z from 'zod'

const base = os.$context<{
  handler: RPCHandler<any>
  ws: WebSocket
  getWebsockets: () => WebSocket[]
}>()

export const router = {
  send: base.input(z.object({ message: z.string() })).handler(async ({ input, context }) => {
    const websockets = context.getWebsockets()

    for (const ws of websockets) {
      const data = ws.deserializeAttachment()
      if (typeof data !== 'object' || data === null) {
        continue
      }

      const { id } = data

      ws.send(encodeHibernationRPCEvent(id, input.message))
    }
  }),
  onMessage: base.handler(async ({ context }) => {
    return new HibernationEventIterator<string>((id) => {
      context.ws.serializeAttachment({ id })
    })
  }),
}

const handler = new RPCHandler(router, {
  interceptors: [
    onError((error) => {
      console.error(error)
    }),
  ],
  plugins: [
    new HibernationPlugin(),
  ],
})

export class ChatRoom extends DurableObject {
  async fetch(): Promise<Response> {
    const { '0': client, '1': server } = new WebSocketPair()

    this.ctx.acceptWebSocket(server)

    return new Response(null, {
      status: 101,
      webSocket: client,
    })
  }

  async webSocketMessage(ws: WebSocket, message: string | ArrayBuffer): Promise<void> {
    await handler.message(ws, message, {
      context: {
        handler,
        ws,
        getWebsockets: () => this.ctx.getWebSockets(),
      },
    })
  }

  async webSocketClose(ws: WebSocket): Promise<void> {
    handler.close(ws)
  }
}
```

```ts [Client]
import { RPCLink } from '@orpc/client/websocket'
import { createORPCClient } from '@orpc/client'
import type { router } from '../../worker/dos/chat-room'
import type { RouterClient } from '@orpc/server'

const websocket = new WebSocket(`${window.location.protocol === 'https:' ? 'wss:' : 'ws:'}//${window.location.host}/chat-room`)

websocket.addEventListener('error', (event) => {
  console.error(event)
})

const link = new RPCLink({
  websocket,
})

export const chatRoomClient: RouterClient<typeof router> = createORPCClient(link)
```

```tsx [Component]
import { useEffect, useState } from 'react'
import { chatRoomClient } from '../lib/chat-room'

export function ChatRoom() {
  const [messages, setMessages] = useState<string[]>([])

  useEffect(() => {
    const controller = new AbortController()

    void (async () => {
      for await (const message of await chatRoomClient.onMessage(undefined, { signal: controller.signal })) {
        setMessages(messages => [...messages, message])
      }
    })()

    return () => {
      controller.abort()
    }
  }, [])

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = new FormData(e.target as HTMLFormElement)
    const message = form.get('message') as string

    await chatRoomClient.send({ message })
  }

  return (
    <div>
      <h1>Chat Room</h1>
      <p>Open multiple tabs to chat together</p>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input name="message" type="text" required defaultValue="hello" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
```

:::
