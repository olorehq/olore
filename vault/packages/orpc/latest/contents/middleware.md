---
title: Middleware
description: Understanding middleware in oRPC
---

# Middleware in oRPC

Middleware is a powerful feature in oRPC that enables reusable and extensible procedures. It allows you to:

- Intercept, hook into, or listen to a handler's execution.
- Inject or guard the execution context.

## Overview

Middleware is a function that takes a `next` function as a parameter and either returns the result
of `next` or modifies the result before returning it.

```ts twoslash
import { os } from '@orpc/server'
// ---cut---
const authMiddleware = os
  .$context<{ something?: string }>() // <-- define dependent-context
  .middleware(async ({ context, next }) => {
    // Execute logic before the handler

    const result = await next({
      context: { // Pass additional context
        user: { id: 1, name: 'John' }
      }
    })

    // Execute logic after the handler

    return result
  })

const example = os
  .use(authMiddleware)
  .handler(async ({ context }) => {
    const user = context.user
  })
```

## Dependent context

Before `.middleware`, you can `.$context` to specify the dependent context, which must be satisfied when the middleware is used.

## Inline Middleware

Middleware can be defined inline within `.use`, which is useful for simple middleware functions.

```ts
const example = os
  .use(async ({ context, next }) => {
    // Execute logic before the handler
    return next()
  })
  .handler(async ({ context }) => {
    // Handler logic
  })
```

## Middleware Context

Middleware can be used to inject or guard the [context](/docs/context).

```ts twoslash
import { ORPCError, os } from '@orpc/server'
// ---cut---
const setting = os
  .use(async ({ context, next }) => {
    return next({
      context: {
        auth: await auth() // <-- inject auth payload
      }
    })
  })
  .use(async ({ context, next }) => {
    if (!context.auth) { // <-- guard auth
      throw new ORPCError('UNAUTHORIZED')
    }

    return next({
      context: {
        auth: context.auth // <-- override auth
      }
    })
  })
  .handler(async ({ context }) => {
    console.log(context.auth) // <-- access auth
  })
// ---cut-after---
declare function auth(): { userId: number } | null
```

::: info
When you pass additional context to `next`, it will be merged with the existing context.
:::

## Middleware Input

Middleware can access input, enabling use cases like permission checks.

```ts
const canUpdate = os.middleware(async ({ context, next }, input: number) => {
  // Perform permission check
  return next()
})

const ping = os
  .input(z.number())
  .use(canUpdate)
  .handler(async ({ input }) => {
    // Handler logic
  })

// Mapping input if necessary
const pong = os
  .input(z.object({ id: z.number() }))
  .use(canUpdate, input => input.id)
  .handler(async ({ input }) => {
    // Handler logic
  })
```

::: info
You can adapt a middleware to accept a different input shape by using `.mapInput`.

```ts
const canUpdate = os.middleware(async ({ context, next }, input: number) => {
  return next()
})

// Transform middleware to accept a new input shape
const mappedCanUpdate = canUpdate.mapInput((input: { id: number }) => input.id)
```

:::

## Middleware Output

Middleware can also modify the output of a handler, such as implementing caching mechanisms.

```ts
const cacheMid = os.middleware(async ({ context, next, path }, input, output) => {
  const cacheKey = path.join('/') + JSON.stringify(input)

  if (db.has(cacheKey)) {
    return output(db.get(cacheKey))
  }

  const result = await next({})

  db.set(cacheKey, result.output)

  return result
})
```

## Concatenation

Multiple middleware functions can be combined using `.concat`.

```ts
const concatMiddleware = aMiddleware
  .concat(os.middleware(async ({ next }) => next()))
  .concat(anotherMiddleware)
```

::: info
If you want to concatenate two middlewares with different input types, you can use `.mapInput` to align their input types before concatenation.
:::

## Built-in Middlewares

oRPC provides some built-in middlewares that can be used to simplify common use cases.

```ts
import { onError, onFinish, onStart, onSuccess } from '@orpc/server'

const ping = os
  .use(onStart(() => {
    // Execute logic before the handler
  }))
  .use(onSuccess(() => {
    // Execute when the handler succeeds
  }))
  .use(onError(() => {
    // Execute when the handler fails
  }))
  .use(onFinish(() => {
    // Execute logic after the handler
  }))
  .handler(async ({ context }) => {
    // Handler logic
  })
```
