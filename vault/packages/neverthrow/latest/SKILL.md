---
name: olore-neverthrow-latest
description: Local neverthrow documentation reference (latest). Neverthrow documentation. Use for type-safe error handling with Result and ResultAsync, railway-oriented programming, andThen/map chaining, and error aggregation in TypeScript.
---

# neverthrow Documentation

Neverthrow documentation. Use for type-safe error handling with Result and ResultAsync, railway-oriented programming, andThen/map chaining, and error aggregation in TypeScript.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/api/readme.md` | NeverThrow | Main API reference covering Result and ResultAsync types for encoding failure into programs |
| `contents/guides/home.md` | Wiki Home | Wiki directory and navigation for neverthrow articles and resources |
| `contents/guides/introduction.md` | Type-Safe Errors Introduction | Introduction to Result types and eliminating exceptions with type-safe error handling |
| `contents/guides/basic-usage.md` | Basic Usage Examples | Quick examples of synchronous and asynchronous API usage with ok/err functions |
| `contents/guides/accessing-values.md` | Accessing Values in Results | Using TypeScript type-guards with isOk/isErr to access value or error properties |
| `contents/guides/result-async.md` | Working with ResultAsync | Handling asynchronous operations with ResultAsync and fromPromise utility |
| `contents/guides/error-handling-best-practices.md` | Error Handling Best Practices | Patterns for distinguishing expected vs unexpected errors and wrapping third-party code |
| `contents/guides/map-explanation.md` | Map Method Explained | Understanding map as a functor operation beyond arrays |
| `contents/guides/side-effects.md` | Side Effects | Intertwining side effects with neverthrow (in progress) |
| `contents/guides/aggregating-results.md` | Aggregating Results | Combining results from multiple map/andThen chains (in progress) |

## When to use

Use this skill when the user asks about:
- Type-safe error handling in TypeScript without throwing exceptions
- Result and ResultAsync types, ok() and err() functions
- Railway-oriented programming patterns
- Using map, andThen, orElse, match methods for Result chaining
- Working with asynchronous operations using fromPromise
- Distinguishing between expected and unexpected errors
- Wrapping third-party code to localize exceptions
- Aggregating multiple Results or handling error accumulation

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{filename}`
