---
title: Define Contract
description: Learn how to define a contract for contract-first development in oRPC
---

# Define Contract

**Contract-first development** is a design pattern where you define the API contract before writing any implementation code. This methodology promotes a well-structured codebase that adheres to best practices and facilitates easier maintenance and evolution over time.

In oRPC, a **contract** specifies the rules and expectations for a procedure. It details the input, output, errors,... types and can include constraints or validations to ensure that both client and server share a clear, consistent interface.

## Installation

::: code-group

```sh [npm]
npm install @orpc/contract@latest
```

```sh [yarn]
yarn add @orpc/contract@latest
```

```sh [pnpm]
pnpm add @orpc/contract@latest
```

```sh [bun]
bun add @orpc/contract@latest
```

```sh [deno]
deno add npm:@orpc/contract@latest
```

:::

## Procedure Contract

A procedure contract in oRPC is similar to a standard [procedure](/docs/procedure) definition, but with extraneous APIs removed to better support contract-first development.

```ts twoslash
import * as z from 'zod'
// ---cut---
import { oc } from '@orpc/contract'

export const exampleContract = oc
  .input(
    z.object({
      name: z.string(),
      age: z.number().int().min(0),
    }),
  )
  .output(
    z.object({
      id: z.number().int().min(0),
      name: z.string(),
      age: z.number().int().min(0),
    }),
  )
```

## Contract Router

Similar to the standard [router](/docs/router) in oRPC, the contract router organizes your defined contracts into a structured hierarchy. The contract router is streamlined by removing APIs that are not essential for contract-first development.

```ts
export const routerContract = {
  example: exampleContract,
  nested: {
    example: exampleContract,
  },
}
```

## Full Example

Below is a complete example demonstrating how to define a contract for a simple "Planet" service. This example extracted from our [Getting Started](/docs/getting-started) guide.

```ts twoslash
import * as z from 'zod'
import { oc } from '@orpc/contract'
// ---cut---
export const PlanetSchema = z.object({
  id: z.number().int().min(1),
  name: z.string(),
  description: z.string().optional(),
})

export const listPlanetContract = oc
  .input(
    z.object({
      limit: z.number().int().min(1).max(100).optional(),
      cursor: z.number().int().min(0).default(0),
    }),
  )
  .output(z.array(PlanetSchema))

export const findPlanetContract = oc
  .input(PlanetSchema.pick({ id: true }))
  .output(PlanetSchema)

export const createPlanetContract = oc
  .input(PlanetSchema.omit({ id: true }))
  .output(PlanetSchema)

export const contract = {
  planet: {
    list: listPlanetContract,
    find: findPlanetContract,
    create: createPlanetContract,
  },
}
```

## Utilities

### Infer Contract Router Input

```ts twoslash
import type { contract } from './shared/planet'
// ---cut---
import type { InferContractRouterInputs } from '@orpc/contract'

export type Inputs = InferContractRouterInputs<typeof contract>

type FindPlanetInput = Inputs['planet']['find']
```

This snippet automatically extracts the expected input types for each procedure in the router.

### Infer Contract Router Output

```ts twoslash
import type { contract } from './shared/planet'
// ---cut---
import type { InferContractRouterOutputs } from '@orpc/contract'

export type Outputs = InferContractRouterOutputs<typeof contract>

type FindPlanetOutput = Outputs['planet']['find']
```

Similarly, this utility infers the output types, ensuring that your application correctly handles the results from each procedure.
