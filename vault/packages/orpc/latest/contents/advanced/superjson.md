---
title: SuperJson
description: Replace the default oRPC RPC serializer with SuperJson.
---

# SuperJson

This guide explains how to replace the default oRPC RPC serializer with [SuperJson](https://github.com/blitz-js/superjson).

:::info
While the default oRPC serializer is faster and more efficient, SuperJson is widely adopted and may be preferred for compatibility.
:::

## SuperJson Serializer

:::warning
The `SuperJsonSerializer` supports only the data types that SuperJson handles, plus `AsyncIteratorObject` at the root level for [Event Iterator](/docs/event-iterator). It does not support all [RPC supported types](/docs/rpc-handler#supported-data-types).
:::

```ts twoslash
import { createORPCErrorFromJson, ErrorEvent, isORPCErrorJson, mapEventIterator, toORPCError } from '@orpc/client'
import type { StandardRPCSerializer } from '@orpc/client/standard'
import { isAsyncIteratorObject } from '@orpc/shared'
import SuperJSON from 'superjson'

export class SuperJSONSerializer implements Pick<StandardRPCSerializer, keyof StandardRPCSerializer> {
  serialize(data: unknown): object {
    if (isAsyncIteratorObject(data)) {
      return mapEventIterator(data, {
        value: async (value: unknown) => SuperJSON.serialize(value),
        error: async (e) => {
          return new ErrorEvent({
            data: SuperJSON.serialize(toORPCError(e).toJSON()),
            cause: e,
          })
        },
      })
    }

    return SuperJSON.serialize(data)
  }

  deserialize(data: any): unknown {
    if (isAsyncIteratorObject(data)) {
      return mapEventIterator(data, {
        value: async value => SuperJSON.deserialize(value),
        error: async (e) => {
          if (!(e instanceof ErrorEvent))
            return e

          const deserialized = SuperJSON.deserialize(e.data as any)

          if (isORPCErrorJson(deserialized)) {
            return createORPCErrorFromJson(deserialized, { cause: e })
          }

          return new ErrorEvent({
            data: deserialized,
            cause: e,
          })
        },
      })
    }

    return SuperJSON.deserialize(data)
  }
}
```

## SuperJson Handler

```ts twoslash
declare class SuperJSONSerializer implements Pick<StandardRPCSerializer, keyof StandardRPCSerializer> {
  serialize(data: unknown): object
  deserialize(data: unknown): unknown
}
// ---cut---
import type { StandardRPCSerializer } from '@orpc/client/standard'
import type { Context, Router } from '@orpc/server'
import type { FetchHandlerOptions } from '@orpc/server/fetch'
import { FetchHandler } from '@orpc/server/fetch'
import { StrictGetMethodPlugin } from '@orpc/server/plugins'
import type { StandardHandlerOptions } from '@orpc/server/standard'
import { StandardHandler, StandardRPCCodec, StandardRPCMatcher } from '@orpc/server/standard'

export interface SuperJSONHandlerOptions<T extends Context>
  extends FetchHandlerOptions<T>, Omit<StandardHandlerOptions<T>, 'plugins'> {
  /**
   * Enable or disable the StrictGetMethodPlugin.
   *
   * @default true
   */
  strictGetMethodPluginEnabled?: boolean
}

export class SuperJSONHandler<T extends Context> extends FetchHandler<T> {
  constructor(router: Router<any, T>, options: NoInfer<SuperJSONHandlerOptions<T>> = {}) {
    options.plugins ??= []

    const strictGetMethodPluginEnabled = options.strictGetMethodPluginEnabled ?? true

    if (strictGetMethodPluginEnabled) {
      options.plugins.push(new StrictGetMethodPlugin())
    }

    const serializer = new SuperJSONSerializer()
    const matcher = new StandardRPCMatcher()
    const codec = new StandardRPCCodec(serializer as any)

    super(new StandardHandler(router, matcher, codec, options), options)
  }
}
```

## SuperJson Link

```ts twoslash
declare class SuperJSONSerializer implements Pick<StandardRPCSerializer, keyof StandardRPCSerializer> {
  serialize(data: unknown): object
  deserialize(data: unknown): unknown
}
// ---cut---
import type { ClientContext } from '@orpc/client'
import { StandardLink, StandardRPCLinkCodec } from '@orpc/client/standard'
import type { StandardLinkOptions, StandardRPCLinkCodecOptions, StandardRPCSerializer } from '@orpc/client/standard'
import type { LinkFetchClientOptions } from '@orpc/client/fetch'
import { LinkFetchClient } from '@orpc/client/fetch'

export interface SuperJSONLinkOptions<T extends ClientContext>
  extends LinkFetchClientOptions<T>,
  Omit<StandardLinkOptions<T>, 'plugins'>,
  StandardRPCLinkCodecOptions<T> { }

export class SuperJSONLink<T extends ClientContext> extends StandardLink<T> {
  constructor(options: SuperJSONLinkOptions<T>) {
    const linkClient = new LinkFetchClient(options)
    const serializer = new SuperJSONSerializer()
    const linkCodec = new StandardRPCLinkCodec(serializer as any, options)

    super(linkCodec, linkClient, options)
  }
}
```
