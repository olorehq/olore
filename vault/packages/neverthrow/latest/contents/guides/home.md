This wiki contains posts and other information on how to get the most out of `neverthrow`, which, if you're not already familiar with a functional error handling approach (such as in Scala, Elm, Rust, Haskell, and many others) then you might hit a snag or two and uninstall `neverthrow` in frustration.

Check out the navigation bar on the side that contains all the articles for the `neverthrow` wiki.

Do you have feedback or suggestions? Open an issue!

### Directory:

- Why should I deal with `Result`s and all of this overhead? [This is why](https://youtu.be/ZSRHeXYDLko?t=1343)
- Never worked with a `Result` or `Either` type before? Start here: 
  - [Introduction: Type Safe Errors in JS & TypeScript](https://github.com/supermacro/neverthrow/wiki/Introduction:-Type-Safe-Errors-in-JS-&-TypeScript-(10-minute-read)) if you want to read
  - Or, a video introduction, "[Railway oriented programming: Error handling in functional languages by Scott Wlaschin](https://github.com/supermacro/neverthrow/wiki/Railway-Oriented-Programming-(1hour-video))"

- Trying to figure out how to get the value out of a darn `Result` without fuss? Read "[Accessing The Value Inside A Result](https://github.com/supermacro/neverthrow/wiki/Accessing-The-Value-Inside-A-Result)"

- Want to learn about some advanced functional programming ideas? Read [I thought .map was for arrays??](https://github.com/supermacro/neverthrow/wiki/I-thought-.map-was-for-arrays%3F%3F)



---

From the [HackerNews thread](https://news.ycombinator.com/item?id=26191006) relating to "Where Everything Went Wrong: Error Handling and Error Messages in Rust (2020)":

```
Error handling has been wrong since the beginning, and has continued to be wrong ever since.

First, we had error codes. Except these were wrong because people forget all the time to check them.

Then we had exceptions, which solved the problem of people forgetting to check by crashing the app.

Then the Java team got the bright idea to have checked exceptions, which at first helped to mitigate crashes
from uncaught exception, but caused an explosion in thrown exception signatures, culminating in "catch Throwable".

Back to square one.

Then we got multi-return error objects, maybes, panics, and all sorts of bright ideas that fail to understand the basic premises of errors:

  Any error system that relies upon developer discipline will fail because errors will be missed.

  Any error system that handles all errors the same way will fail because there are some errors we can ignore,
  and some errors we must not ignore. And what's ignorable/retriable to one project is not ignorable/retriable to another.

Attempting to get the complete set of error types that any given call may raise is a fool's errand because of the halting 
problem it eventually invokes. Forcing people to provide such a list results in the Java problem for the same reason.

It's a hard problem, which is why no one has solved it yet. 
```

by user [`kstenerud`](https://news.ycombinator.com/user?id=kstenerud)