---
title: Migrating from tRPC
description: A comprehensive guide to migrate your tRPC application to oRPC
---

# Migrating from tRPC

This guide will help you migrate your existing tRPC application to oRPC. Since oRPC draws significant inspiration from tRPC, the migration process should feel familiar and straightforward.

::: info
For a quick way to enhance your existing tRPC app with oRPC features without fully migrating, refer to the [tRPC Integration](/docs/openapi/integrations/trpc).
:::

## Core Concepts Comparison

| Concept               | tRPC                         | oRPC                |
| --------------------- | ---------------------------- | ------------------- |
| **Router**            | `t.router()`                 | an object           |
| **Procedure**         | `t.procedure`                | `os`                |
| **Context**           | `t.context()`                | `os.$context()`     |
| **Create Middleware** | `t.middleware()`             | `os.middleware()`   |
| **Use Middleware**    | `t.procedure.use()`          | `os.use()`          |
| **Input Validation**  | `t.procedure.input(schema)`  | `os.input(schema)`  |
| **Output Validation** | `t.procedure.output(schema)` | `os.output(schema)` |
| **Error Handling**    | `TRPCError`                  | `ORPCError`         |
| **Serializer**        | `superjson`                  | built-in            |

::: info
Learn more about [oRPC vs tRPC Comparison](/docs/comparison)
:::

## Step-by-Step Migration

### 1. Installation

First, install oRPC and remove tRPC dependencies:

::: code-group

```sh [npm]
npm uninstall @trpc/server @trpc/client @trpc/tanstack-react-query
npm install @orpc/server@latest @orpc/client@latest @orpc/tanstack-query@latest
```

```sh [yarn]
yarn remove @trpc/server @trpc/client @trpc/tanstack-react-query
yarn add @orpc/server@latest @orpc/client@latest @orpc/tanstack-query@latest
```

```sh [pnpm]
pnpm remove @trpc/server @trpc/client @trpc/tanstack-react-query
pnpm add @orpc/server@latest @orpc/client@latest @orpc/tanstack-query@latest
```

```sh [bun]
bun remove @trpc/server @trpc/client @trpc/tanstack-react-query
bun add @orpc/server@latest @orpc/client@latest @orpc/tanstack-query@latest
```

```sh [deno]
deno remove npm:@trpc/server npm:@trpc/client npm:@trpc/tanstack-react-query
deno add npm:@orpc/server@latest npm:@orpc/client@latest npm:@orpc/tanstack-query@latest
```

:::

### 2. Initialize

Initialization is an optional step in oRPC. You can use `os` directly without initialization, but for reusability and better code organization, it's recommended to initialize your base procedures.

::: code-group

```ts [orpc/base.ts]
import { ORPCError, os } from '@orpc/server'

export async function createRPCContext(opts: { headers: Headers }) {
  const session = await auth()

  return {
    headers: opts.headers,
    session,
  }
}

const o = os.$context<Awaited<ReturnType<typeof createRPCContext>>>()

const timingMiddleware = o.middleware(async ({ next, path }) => {
  const start = Date.now()

  try {
    return await next()
  }
  finally {
    console.log(`[oRPC] ${path} took ${Date.now() - start}ms to execute`)
  }
})

export const publicProcedure = o.use(timingMiddleware)

export const protectedProcedure = publicProcedure.use(({ context, next }) => {
  if (!context.session?.user) {
    throw new ORPCError('UNAUTHORIZED')
  }

  return next({
    context: {
      session: { ...context.session, user: context.session.user }
    }
  })
})
```

```ts [trpc/base.ts]
import { initTRPC, TRPCError } from '@trpc/server'
import superjson from 'superjson'

export async function createRPCContext(opts: { headers: Headers }) {
  const session = await auth()

  return {
    headers: opts.headers,
    session,
  }
}

const t = initTRPC.context<typeof createRPCContext>().create({
  transformer: superjson,
})

export const createTRPCRouter = t.router

const timingMiddleware = t.middleware(async ({ next, path }) => {
  const start = Date.now()

  const result = await next()

  const end = Date.now()
  console.log(`[tRPC] ${path} took ${end - start}ms to execute`)

  return result
})

export const publicProcedure = t.procedure.use(timingMiddleware)

export const protectedProcedure = t.procedure
  .use(timingMiddleware)
  .use(({ ctx, next }) => {
    if (!ctx.session?.user) {
      throw new TRPCError({ code: 'UNAUTHORIZED' })
    }

    return next({
      ctx: {
        session: { ...ctx.session, user: ctx.session.user },
      },
    })
  })
```

:::

::: info
Learn more about oRPC [Context](/docs/context), and [Middleware](/docs/middleware).
:::

### 3. Procedures

In oRPC, there are no separate `.query`, `.mutation`, or `.subscription` methods. Instead, use `.handler` for all procedure types.

::: code-group

```ts [orpc/routers/planet.ts]
export const planetRouter = {
  list: publicProcedure
    .input(z.object({ cursor: z.number().int().default(0) }))
    .handler(({ input }) => {
      // Logic here

      return {
        planets: [
          {
            name: 'Earth',
            distanceFromSun: 149.6,
          }
        ],
        nextCursor: input.cursor + 1,
      }
    }),

  create: protectedProcedure
    .input(z.object({
      name: z.string().min(1),
      distanceFromSun: z.number().positive()
    }))
    .handler(async ({ context, input }) => {
      // Logic here
    }),
}
```

```ts [trpc/routers/planet.ts]
export const planetRouter = createTRPCRouter({
  list: publicProcedure
    .input(z.object({ cursor: z.number().int().default(0) }))
    .query(({ input }) => {
      // Logic here

      return {
        planets: [
          {
            name: 'Earth',
            distanceFromSun: 149.6,
          }
        ],
        nextCursor: input.cursor + 1,
      }
    }),

  create: protectedProcedure
    .input(z.object({
      name: z.string().min(1),
      distanceFromSun: z.number().positive()
    }))
    .mutation(async ({ ctx, input }) => {
      // Logic here
    }),
})
```

:::

::: info
Learn more about oRPC [Procedures](/docs/procedure).
:::

### 4. App Router

The main router structure is similar between tRPC and oRPC, except in oRPC you don't need to wrap routers in a `.router` call - plain objects is enough.

::: code-group

```ts [orpc/routers/index.ts]
import { planetRouter } from './planet'

export const appRouter = {
  planet: planetRouter,
}
```

```ts [trpc/routers/index.ts]
import { planetRouter } from './planet'

export const appRouter = createTRPCRouter({
  planet: planetRouter,
})
```

:::

::: info
Learn more about oRPC [Router](/docs/router).
:::

### 5. Error Handling

::: code-group

```ts [orpc]
throw new ORPCError('BAD_REQUEST', {
  message: 'Invalid input',
  data: 'some data',
  cause: validationError
})
```

```ts [trpc]
throw new TRPCError({
  code: 'BAD_REQUEST',
  message: 'Invalid input',
  data: 'some data',
  cause: validationError
})
```

:::

::: info
Learn more about oRPC [Error Handling](/docs/error-handling).
:::

### 6. Server Setup

This example assumes you're using [Next.js](https://nextjs.org/). If you're using a different framework, check the [oRPC HTTP Adapters](/docs/adapters/http) documentation.

::: code-group

```ts [app/api/orpc/[[...rest]]/route.ts]
import { RPCHandler } from '@orpc/server/fetch'

const handler = new RPCHandler(appRouter, {
  interceptors: [
    async ({ next }) => {
      try {
        return await next()
      }
      catch (error) {
        console.error(error)
        throw error
      }
    }
  ]
})

async function handleRequest(request: Request) {
  const { response } = await handler.handle(request, {
    prefix: '/api/orpc',
    context: await createORPCContext(request)
  })

  return response ?? new Response('Not found', { status: 404 })
}

export const GET = handleRequest
export const POST = handleRequest
```

```ts [app/api/trpc/[trpc]/route.ts]
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

function handler(req: Request) {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => createTRPCContext(req),
    onError: ({ path, error }) => {
      console.error(
        `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`
      )
    }
  })
}

export { handler as GET, handler as POST }
```

:::

### 7. Client Setup

::: code-group

```ts [orpc/client.ts]
import { createORPCClient, onError } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'
import { RouterClient } from '@orpc/server'

const link = new RPCLink({
  url: 'http://localhost:3000/api/orpc',
  interceptors: [
    onError((error) => {
      console.error(error)
    })
  ],
})

export const client: RouterClient<typeof appRouter> = createORPCClient(link)

// ---------------- Usage ----------------

const { planets } = await client.planet.list({ cursor: 0 })
```

```ts [trpc/client.ts]
import { createTRPCProxyClient, httpLink } from '@trpc/client'

export const client = createTRPCProxyClient<typeof appRouter>({
  links: [
    httpLink({
      url: 'http://localhost:3000/api/trpc'
    })
  ]
})

// ---------------- Usage ----------------

const { planets } = await client.planet.list.query({ cursor: 0 })
```

:::

::: info
Learn more about oRPC [Client-Side Clients](/docs/client/client-side), [Batch Requests Plugin](/docs/plugins/batch-requests), and [Dedupe Requests Plugin](/docs/plugins/dedupe-requests).
:::

### 8. TanStack Query (React) Integration

The oRPC TanStack Query integration is similar to tRPC, but simpler - you can use the `orpc` utilities directly without React providers or special hooks.

::: code-group

```ts [orpc/tanstack-query.ts]
import { createTanstackQueryUtils } from '@orpc/tanstack-query'

export const orpc = createTanstackQueryUtils(client)

// ---------------- Usage in React Components ----------------

const query = useQuery(orpc.planet.list.queryOptions({
  input: { cursor: 0 },
}))

const infinite = useInfiniteQuery(orpc.planet.list.infiniteOptions({
  input: (page: number) => ({ cursor: page }),
  initialPageParam: 0,
  getNextPageParam: lastPage => lastPage.nextCursor,
}))

const mutation = useMutation(orpc.planet.create.mutationOptions())
```

```ts [trpc/tanstack-query.ts]
import { createTRPCContext } from '@trpc/tanstack-react-query'

export const { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<typeof appRouter>()

// ---------------- Usage in React Components ----------------

const trpc = useTRPC()

const query = useQuery(trpc.planet.list.queryOptions({ cursor: 0 }))

const infinite = useInfiniteQuery(trpc.planet.list.infiniteQueryOptions(
  {},
  {
    initialCursor: 0,
    getNextPageParam: lastPage => lastPage.nextCursor,
  }
))

const mutation = useMutation(trpc.planet.create.mutationOptions())
```

:::

::: info
Learn more about oRPC [TanStack Query Integration](/docs/integrations/tanstack-query).
:::
