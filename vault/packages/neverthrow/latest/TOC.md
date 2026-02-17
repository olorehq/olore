# neverthrow Documentation Structure

## Files

| File | Description |
|------|-------------|
| `contents/api/readme.md` | Main API reference for neverthrow, covering the Result type for success (Ok) or failure (Err), and ResultAsync for asynchronous tasks with the same expressivity as Result |
| `contents/guides/accessing-values.md` | Guide on using TypeScript type-guards (.isOk and .isErr) to access value or error properties within Result instances |
| `contents/guides/aggregating-results.md` | Documentation on combining results from multiple map/andThen chains (in progress) |
| `contents/guides/basic-usage.md` | Quick examples demonstrating synchronous API usage with ok/err functions and asynchronous patterns with ResultAsync |
| `contents/guides/error-handling-best-practices.md` | Best practices for distinguishing expected vs unexpected errors, wrapping third-party code in try/catch, and thinking in types and pipelines |
| `contents/guides/home.md` | Wiki home page providing navigation to all neverthrow articles, including introductions, advanced topics, and external resources |
| `contents/guides/introduction.md` | Introduction to Result types showing how to eliminate exception throwing and reduce runtime errors with type-safe error handling |
| `contents/guides/map-explanation.md` | Explanation of the map method as a functor operation, providing context on functional programming concepts beyond arrays |
| `contents/guides/result-async.md` | Guide for working with asynchronous Results using ResultAsync and the fromPromise utility for wrapping Promises |
| `contents/guides/side-effects.md` | Documentation on intertwining side effects into neverthrow workflows (in progress) |
