---
title: Testing & Mocking
description: How to test and mock oRPC routers and procedures?
---

# Testing & Mocking

Testing and mocking are essential parts of the development process, ensuring your oRPC routers and procedures work as expected. This guide covers strategies for testing and mocking in oRPC applications.

## Testing

Using [Server-Side Clients](/docs/client/server-side), you can directly invoke your procedures in tests without additional setup. This approach allows you to test procedures in isolation, ensuring they behave correctly.

```ts
import { call } from '@orpc/server'

it('works', async () => {
  await expect(
    call(router.planet.list, { page: 1, size: 10 })
  ).resolves.toEqual([
    { id: '1', name: 'Earth' },
    { id: '2', name: 'Mars' },
  ])
})
```

::: info
You can also use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to create production-like clients for testing purposes. [Learn more](/docs/best-practices/optimize-ssr#alternative-approach)
:::

## Mocking

The [Implementer](/docs/contract-first/implement-contract#the-implementer) is designed for contract-first development, but it can also create alternative versions of your [router](/docs/router) or [procedure](/docs/procedure) for testing.

```ts twoslash
import { router } from './shared/planet'
// ---cut---
import { implement, unlazyRouter } from '@orpc/server'

const fakeListPlanet = implement(router.planet.list).handler(() => [])
```

You can use `fakeListPlanet` to replace the actual `listPlanet` implementation during tests.

::: info
The `implement` function is also useful for creating mock servers for frontend testing scenarios.
:::

::: warning
The `implement` function doesn't support [lazy routers](/docs/router#lazy-router) yet. Use the `unlazyRouter` utility to convert your lazy router before implementing. [Learn more](/docs/contract-first/router-to-contract#unlazy-the-router)
:::
