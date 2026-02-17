> In this post, I introduce the concept of a Result type (and we create one from scratch), which eliminates the need for throwing exceptions, and reduces risk of runtime errors. Originally posted at [my blog](https://gdelgado.ca/type-safe-error-handling-in-typescript.html#title)

---

We've all been there before. We write a function that has to deal with some edge case, and we use the `throw` keyword in order to handle this situation:

```typescript
type ResponseData = {
  statusCode: number
  responseBody?: ResponseBody
}

const makeHttpRequest = async (url: string): Promise<ResponseData> => {
  if (!isUrl(url)) {
    throw new Error(
      'Invalid string passed into `makeHttpRequest`. Expected a valid URL.'
    )
  }

  // ...
  // other business logic here
  // ...
  
  return { ... } // ResponseData
}
```

Now imagine a month later, you are working on your project when you or a colleague forget to wrap `makeHttpRequest` inside of a `try / catch` block. 

Two things happen here:

- The compiler is no longer able to tell you whether your code is safe from runtime errors. In other words, using `throw` is not typesafe. And is just as dangerous as `any`. They both dilute the benefits of using TypeScript in the first place.

- Because neither the compiler nor the types tell you that `makeHttpRequest` can fail (read: throw), you will eventually get a runtime error. This is a waste of time, money and happiness for everyone. People begin to ask why they're using TypeScript if the compiler isn't helping them with something so basic as adding a `try / catch` block.

So the question is:

> How do we encode failability into the typesystem?

First, let's begin by acknowledging that `throw` is not typesafe. We must use a different approach in order to get the TypeScript compiler on our side.

What if we had a `type` or `interface` which represented the outcome of a computation that might fail?

Our type would represent two simple outcomes:

- Success case: Which would return / contain contain a "success value" (i.e. `ResponseData` in the case of `makeHttpRequest`)
- Failure case: Which would return / contain helpful information about **why** the failure occurred

Let's call our type somethething intuitive like, `Result`. Let's call our Success variant `Ok` and our Failure variant `Err`.

Thus, if we were to formalize our type into code, it would look something like this:

```typescript
type Result<T, E>
  = Ok<T, E> // contains a success value of type T
  | Err<T, E> // contains a failure value of type E
```

Going back to our `makeHttpRequest` function, we would want to encode the potential for failure into the typesystem.

Thus `makeHttpRequest` would have the following signature:

```typescript
makeHttpRequest(url: string): Promise<Result<ResponseData, Error>>
```

And the function definition would look something like this:


```typescript
// utility functions to build Ok and Err instances
const ok = <T, E>(value: T): Result<T, E> => new Ok(value)

const err = <T, E>(error: E): Result<T, E> => new Err(error)

const makeHttpRequest = async (url: string): Promise<Result<ResponseData, Error>> => {
  if (!isUrl(url)) {
    return err(new Error(
      'Invalid string passed into `makeHttpRequest`. Expected a valid URL.'
    ))
  }

  // ...
  // other business logic here
  // ...
  
  return ok({ ... }) // Ok(ResponseData)
}
```

Of course `err(new Error('...'))` seems a little tedious. But here are some things you should know:

- The argument of the `err` function must be of type `E`, or you'll get a compile error (type mismatch) between the type inside of `err` and the return type of `makeHttpRequest` (where the `E` type is represented as an `Error` instance).
    - Relatedly, I just chose `Error` as the type for `E` for the sake of simplicity ... meaning `E` could be anything you want! More on this in a bit!

- The user of `makeHttpRequest` can use this function without fear that it might randomly throw. No more runtime errors 🚀

- The author of the `makeHttpRequest` function also doesn't have to worry about writing and updating documentation every time a new edge case appears that would cause the function to throw an error. All of the behaviour of the function is encoded in the return type. Relatedly, the type serves as documentation now: "`makeHttpRequest` is an asynchronous function that can either succeed with `ResponseData` or fail with a `Error`."

... "But wait, how do I get the `T` value or `E` value that is wrapped inside of a `Result<T, E>`?"

Great question. Let me show you how. We're going to use a package I made [aptly] named `neverthrow`.

`> npm install neverthrow`


```typescript
import { ok, err, Result } from 'neverthrow'

// we'll keep this simple
type ResponseBody = {}

interface ResponseData {
  statusCode: number
  responseBody?: ResponseBody
}

const makeHttpRequest = async (
  url: string
): Promise<Result<ResponseData, Error>> => {
  if (!isUrl(url)) {
    return err(new Error(
      'Invalid string passed into `makeHttpRequest`. Expected a valid URL.'
    ))
  }

  // ...
  // other business logic here
  // ...
  
  return ok({ ... }) // Ok(ResponseData)
}
```

So we're currently at the same place we were at with the last code snippet, except this time we're using the `neverthrow` package.

If you were to read through the `neverthrow` [documentation](https://github.com/gdelgado14/neverthrow#top-level-api) you'd see that a `Result` has a `.map` method which takes the `T` value inside of a `Result` and converts it into anything you want.

Here's an example:

```typescript
import { makeHttpRequest } from './http-api.ts'

const run = async () => {
  // unwrap the Promise
  // at this point
  // we have a Result<ResponseData, Error>
  const result = await makeHttpRequest('https://jsonplaceholder.typicode.com/todos/1')
  
  result.map(responseData => {
    console.log(responseData)
  })
}

run()
```


But wait, what if the result variable contains an `E` value? in other words, it's an `Err` instead of an `Ok`.

Well, again, the docs for `neverthrow` show you how to handle this situation too ... Just use `mapErr`!

```typescript
import { makeHttpRequest } from './http-api.ts'

const run = async () => {
  // unwrap the Promise
  // at this point
  // we have a Result<ResponseData, Error>
  const result = await makeHttpRequest('https://jsonplaceholder.typicode.com/todos/1')
  
  result.mapErr(errorInstance => {
    console.log(errorInstance)
  })
}

run()
```

The most beautiful thing about `Result`s is that **they are chainable**! Here's the above code in a more realistic example:

```typescript
import { makeHttpRequest } from './http-api.ts'

const run = async () => {
  // unwrap the Promise
  // at this point
  // we have a Result<ResponseData, Error>
  const result = await makeHttpRequest('https://jsonplaceholder.typicode.com/todos/1')
  
  result
    .map(responseData => {
      // do something with the success value
    })
    .mapErr(errorInstance => {
      // do something with the failure value
    })
}

run()
```

There is a lot more you can do with a `Result` type (check out [the docs](https://github.com/gdelgado14/neverthrow#top-level-api)), but `map`ing is the most important part of the API.


## Making Your Types More Intuitive

If you start using `Result` a lot in your return types, you might notice two things:

- The meaning of the `Result`s is not very clear
    - Example: The `Result` of a databse query might be something like `Promise<Result<T, DbError>>` while the `Result` of a network call might be something like `Promise<Result<T, NetworkError>>`.

- The types are really long and verbose. For example, above we had a `Promise<Result<ResponseData, Error>>` ... this is a somewhat intimidating type!


To solve both issues, you could leverage **type aliases**! 

Here's an example. Instead of having a function return a generic `Result` with a `DbError` as the `E` type, why not alias this type to something much more intuitive?

```typescript
type DbResult<T> = Result<T, DbError>
```

Now your function can just return `Promise<DbResult<T>>`. It's a lot more succinct!

Further, your type now encodes meaning. The above type says that there's something async going on that could fail and I know that it's dealing with the database. Neat!

Here's a real-world example from one of my projects:

```typescript
handler: (req: Request, res: SessionManager) => DecodeResult<Promise<RouteResult<T>>>
```

So `handler` is a function that does a few things:

- It does some decoding / deserializing of incoming data
- It then does something async which generates a `RouteResult` with some data of type `T`

I know exactly what's going to happen by only reading the types. And the beautiful thing is that I won't ever get runtime errors because none of my code throws (and all the 3rd party libs I depend on have been wrapped to return `Result`s as well).

## Summary

- Avoid using `throw` if you can.
    - Users of your API are not required to `catch` (the compiler doesn't enforce it). This means you will eventually hit a runtime error ... it's just a matter of time
    - Using `throw` forces you to maintain documentation which will eventually become stale
    - If you do manage to maintain your documentation, a lot of people won't bother reading completely through the documentation, and won't realize that your functions throw in certain scenarios
  
- Encode the potential for failure into your types using `Result`s 
    - The types are self documenting, and they cannot become "stale"
    - Users are given a friendly API that lets them deal with failable values in a safe way (using `map` and `mapErr`)

