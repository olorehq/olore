This document outlines patterns and best practices for working in a system that doesn't rely on throwing exceptions as the primary mechanism for signalling something went wrong.

#### Table of Contents:

- Distinguish between "Expected Errors" and "Unexpected, or Irrecoverable Errors"
- Wrap 3rd party code to localize exceptions
- Thinking in Types and Pipelines

---

## Distinguish between "Expected Errors" and "Unexpected, or Irrecoverable Errors"

talk about panics in Rust.

When is it ok to `throw` an exception?


## Wrap 3rd party code to localize exceptions

The JavaScript community has agreed on the convention of throwing exceptions. As such, when interfacing with third party libraries it's imperative that you wrap third-party code in `try / catch` blocks.

### Synchronous Example:

```typescript
import { ok, err } from 'neverthrow'

const safeJsonParse = (jsonString: string): Result<JSONType, ParseError> => {
  try {
    return ok(JSON.parse(jsonString))
  } catch (e: unknown) {
    return err(intoParseError(e))
  }
}
```

#### Async Example:

```typescript
import { ResultAsync } from 'neverthrow'

const getBookById = (id: string): ResultAsync<BookList, HTTPError> => ResultAsync.fromPromise(
  axios.get(`${BOOK_SERVICE_BASE_URL}/books/${id}`),
  (error: unknown) => {
    return intoHttpError(error)
  }
)
```


## Thinking in Types and Pipelines


`todo`