---
title: OpenAPI Routing
description: Configure procedure routing with oRPC.
---

# Routing

Define how procedures map to HTTP methods, paths, and response statuses.

:::warning
This feature applies only when using [OpenAPIHandler](/docs/openapi/openapi-handler).
:::

## Basic Routing

By default, oRPC uses the `POST` method, constructs paths from router keys with `/`, and returns a 200 status on success. Override these defaults with `.route`:

```ts
os.route({ method: 'GET', path: '/example', successStatus: 200 })
os.route({ method: 'POST', path: '/example', successStatus: 201 })
```

:::info
The `.route` can be called multiple times; each call [spread merges](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) the new route with the existing route.
:::

## Path Parameters

By default, path parameters merge with query/body into a single input object. You can modify this behavior as described in the [Input/Output structure docs](/docs/openapi/input-output-structure).

```ts
os.route({ path: '/example/{id}' })
  .input(z.object({ id: z.string() }))

os.route({ path: '/example/{+path}' }) // Matches slashes (/)
  .input(z.object({ path: z.string() }))
```

## Route Prefixes

Use `.prefix` to prepend a common path to all procedures in a router that have an explicitly defined `path`:

```ts
const router = os.prefix('/planets').router({
  list: listPlanet,
  find: findPlanet,
  create: createPlanet,
})
```

::: warning
The prefix only applies to procedures that specify a `path`.
:::

## Lazy Router

When combining a [Lazy Router](/docs/router#lazy-router) with [OpenAPIHandler](/docs/openapi/openapi-handler), a prefix is required for lazy loading. Without it, the router behaves like a regular router.

:::info
If you follow the [contract-first approach](/docs/contract-first/define-contract), you can ignore this requirement - oRPC knows the full contract and loads the router lazily properly.
:::

```ts
const router = {
  planet: os.prefix('/planets').lazy(() => import('./planet'))
}
```

:::warning
Do not use the `lazy` helper from `@orpc/server` here, as it cannot apply route prefixes.
:::

## Initial Configuration

Customize the initial oRPC routing settings using `.$route`:

```ts
const base = os.$route({ method: 'GET' })
```
