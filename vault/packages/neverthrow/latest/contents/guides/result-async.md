Result Async can be used to work with Asynchronous Results in a typesafe way.
Similarly to `Result<T,E>`, which contains the Result of a synchronous operation that may have failed, you can represent the result of async operations with `ResultAsync<T,E>`.

## Wrapping Promises with fromPromise

Neverthrow exposes a util that wraps a `Promise` into an `ResultAsync` for you.
One, very typical, use-case for this is to handle results that `Prisma`(or any other ORM) returns from your Database.

```typescript

const userPromise = prisma.user.findUnique(...)


const result = fromPromise(userPromise, err => ({err, message: "Some error happened while reading DB"}))
```

Notice that as a second Parameter to `fromPromise` we are passing a function that accepts `(error: unknown)` and returns a new error object we created.
That way we can control the type of the `Error` in `ResultAsync<T, Error>`

### Promise.catch()

We will never use Promises native `.catch` function to catch errors. This is exactly the responsibility we are fulfilling by using `ResultAsync`

### async - await & try - catch

Similarly to `Promise.catch()` we are not going to `await` promises and `try` to `catch` errors.
If you find yourself wanting to mark a function, that deals with `ResultAsync`, as async you probably have a misunderstanding about what your function should do
and how it should handle the asynchronous action.

### Example

Below are three functions. Each of them handling the same error in a different way

```typescript

const callbackUser = () => {
    const userPromise = prisma.user.findUnique(...)

    userPromise
    .then(user => console.log("Found my user", user))
    .catch(err => console.error("Error while reading user", err))
}

const asyncAwaiter = async () => {
    try {
        const user = await prisma.user.findUnique(...)
        console.log("Found my user", user)
    } catch (err) {
        console.error("Error while reading user", err)
    }
}

const neverthrower = () => {
    const userPromise = prisma.user.findUnique(...)

    const result = fromPromise(userPromise, originalError => ({originalError, message: "Error while reading user"}))

    result.match(
        user => console.log("Found my user", user),
        err => console.log(err.message, err.originalError)
    )
}
```

Notice that typically you would not read the result of ResultAsync immediately after wrapping it, as it does not much other than bloating up your function a bit more.

The benefit of using this paradigm really comes to the surface when you start to chaining different `Result` and `ResultAsnyc` together with the `.map` and `.andThen` functions. This enables you to unwrap (with `match`, or `map` & `mapErr`) the Results at a centralized point to outsource the responsibility to react to Errors and Successes.


References:

- https://github.com/supermacro/neverthrow/issues/179
- https://github.com/supermacro/neverthrow/issues/191#issuecomment-749059246
- https://github.com/supermacro/neverthrow/issues/222