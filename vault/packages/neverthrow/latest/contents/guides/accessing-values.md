This library takes advantage of TypeScript's [type-guard feature](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types).

By simply doing an `if` (using `.isOk` or `.isErr`) check on your result, you can inform the TypeScript compiler of whether you have `Ok` instance, or an `Err` instance, and subsequently you can get access to the `value` or `error` value in the respective instances.

Example:

```typescript
import { ok, err } from 'neverthrow'

const example1 = ok(123)
const example2 = err('abc')

if (example1.isOk()) {
  // you now have access to example1.value
  doSomethingUseful(example1.value)
} else {
  // you now have access to example1.error
  handleError(example1.error)
}

if (example2.isErr()) {
  // you now have access to example2.error
  handleError(example2.error)
} else {
  // you now have access to example2.value
  doSomethingUseful(example2.value)
}
```
