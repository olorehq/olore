---
title: No Throw Literal
description: Always throw `Error` instances instead of literal values.
---

# No Throw Literal

In JavaScript, you can throw any value, but it's best to throw only `Error` instances.

```ts
// eslint-disable-next-line no-throw-literal
throw 'error' // ✗ avoid
throw new Error('error') // ✓ recommended
```

:::info
oRPC treats thrown `Error` instances as best practice by default, as recommended by the [JavaScript Standard Style](https://standardjs.com/rules.html#throw-new-error-old-style).
:::

## Configuration

Customize oRPC's behavior by setting `throwableError` in the `Registry`:

```ts
declare module '@orpc/server' { // or '@orpc/contract', or '@orpc/client'
  interface Registry {
    throwableError: Error // [!code highlight]
  }
}
```

:::info
Avoid using `any` or `unknown` for `throwableError` because doing so prevents the client from inferring [type-safe errors](/docs/client/error-handling#using-safe-and-isdefinederror). Instead, use `null | undefined | {}` (equivalent to `unknown`) for stricter error type inference.
:::

:::tip
If you configure `throwableError` as `null | undefined | {}`, adjust your code to check the `isSuccess` property instead of `error`:

```ts
const { error, data, isSuccess } = await safe(client('input'))

if (!isSuccess) {
  if (isDefinedError(error)) {
    // handle type-safe error
  }
  // handle other errors
}
else {
  // handle success
}
```

:::

## Bonus

If you use ESLint, enable the [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal) rule to enforce throwing only `Error` instances.
