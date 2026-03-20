---
title: Exceeds the Maximum Length Problem
description: How to address the Exceeds the Maximum Length Problem in oRPC.
---

# Exceeds the Maximum Length Problem

```ts twoslash
// @error: The inferred type of this node exceeds the maximum length the compiler will serialize. An explicit type annotation is needed.
export const router = {
  // many procedures here
}
```

Are you seeing this error? If so, congratulations! your project is now complex enough to encounter it!

## Why It Happens

This error is expected, not a bug. Typescript enforces this to keep your IDE suggestions fast. It appears when all three of these conditions are met:

1. Your project uses `"declaration": true` in `tsconfig.json`.
2. Your project is large or your types are very complex.
3. You export your router as a single, large object.

## How to Fix It

### 1. Disable `"declaration": true` in `tsconfig.json`

This is the simplest option, though it may not be ideal for your project.

### 2. Define the `.output` Type for Your Procedures

By explicitly specifying the `.output` or your `handler's return type`, you enable TypeScript to infer the output without parsing the handler's code. This approach can dramatically enhance both type-checking and IDE-suggestion speed.

:::tip
Use the [type](/docs/procedure#type-utility) utility if you just want to specify the output type without validating the output.
:::

### 3. Export the Router in Parts

Instead of exporting one large object on the server (with `"declaration": true`), export each router segment individually and merge them on the client (where `"declaration": false`):

```ts
export const userRouter = { /** ... */ }
export const planetRouter = { /** ... */ }
export const publicRouter = { /** ... */ }
```

Then, on the client side:

```ts
interface Router {
  user: typeof userRouter
  planet: typeof planetRouter
  public: typeof publicRouter
}

export const client: RouterClient<Router> = createORPCClient(link)
```
