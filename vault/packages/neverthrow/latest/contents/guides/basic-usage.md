In this doc, I describe a quick example of how to use `neverthrow`'s sync and async apis.

### Synchronous API

Create `Ok` or `Err` instances with the `ok` and `err` functions.

```typescript
import { ok, err } from 'neverthrow'

// something awesome happend

const yesss = ok(someAesomeValue)

// moments later ...

const mappedYes = yesss.map(doingSuperUsefulStuff)

// neverthrow uses type-guards to differentiate between Ok and Err instances
// Mode info: https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types
if (mappedYes.isOk()) {
  // using type guards, we can access an Ok instance's `value` field
  doStuffWith(mappedYes.value)
} else {
  // because of type guards
  // typescript knows that mappedYes is an Err instance and thus has a `error` field
  doStuffWith(mappedYes.error)
}
```

`Result` is defined as follows:

```typescript
type Result<T, E> = Ok<T, E> | Err<T, E>
```

`Ok<T, E>`: contains the success value of type `T`

`Err<T, E>`: contains the failure value of type `E`

---

### Asynchronous API

Asynchronous methods can return a `ResultAsync` type instead of a `Promise<Result>` in order to enable further chaining.

`ResultAsync` is `thenable` meaning it behaves exactly like a native `Promise<Result>`: the underlying `Result` can be accessed using the `await` or `.then()` operators.

This is useful for handling multiple asynchronous apis like database queries, timers, http requests, ...

Example:

```typescript
import { errAsync, ResultAsync } from 'neverthrow'
import { insertIntoDb } from 'imaginary-database'
// Let's assume insertIntoDb has the following signature:
// insertIntoDb(user: User): Promise<User>

// We can create a synchronous method that returns a ResultAsync
function addUserToDatabase(user: User): ResultAsync<User, Error> {
  if (user.name.length < 3) {
    // Throw a async result from a synchronous block thanks to the errAsync helper
    return errAsync(new Error('Username is too short'))
  }

  // Wrap the async method into a ResultAsync thanks to fromPromise
  // The seconds argument catches the error from the promise
  return ResultAsync.fromPromise(insertIntoDb(user), () => new Error('Database error'))
}

// We can now call the method above
const asyncRes = addUserToDatabase({ name: 'Tom' }) // asyncRes is a `ResultAsync<User, Error>`

// We can chain the ResultAsync to build another ResultAsync (see full api below)
const asyncRes2 = asyncRes.map((user: User) => user.name) // asyncRes2 is a `ResultAsync<string, Error>`

// A ResultAsync acts exactly like a Promise<Result>
// It can be transformed back into a Result just like a Promise would:

// using await
const res = await asyncRes
// res is a Result<string, Error>
if (res.isErr()) {
  console.log('Oops fail: ' + res.error.message)
} else {
  console.log('Successfully inserted user ' + res.value)
}

// using then
asyncRes.then(res => {
  // res is Result<string, Error>
  if (res.isErr()) {
    console.log('Oops fail: ' + res.error.message)
  } else {
    console.log('Successfully inserted user ' + res.value)
  }
})
```
