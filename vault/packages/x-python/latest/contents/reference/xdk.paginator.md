> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# paginator

Cursor-based pagination utilities for the X API SDK.

This module provides a Cursor class for elegant pagination support across
all API clients. The Cursor enables easy iteration over paginated results
using both .pages() and .items() methods with proper type safety.

### `class xdk.paginator.Cursor`

\[`ResponseType`]

#### Parameters

<ParamField path="path.method" type="PaginatableMethod" />

### `__init__`

Initialize the cursor.

#### Parameters

<ParamField path="path.method" type="PaginatableMethod">
  The API method to call for each page (must support pagination)
</ParamField>

### `items`

Iterate over individual items from paginated responses.

#### Parameters

<ParamField path="path.limit" type="int or None" default="None">
  Maximum number of items to return (None for unlimited)
</ParamField>

#### Returns

`IteratorAny`

### `pages`

Iterate over pages of responses.

#### Parameters

<ParamField path="path.limit" type="int or None" default="None">
  Maximum number of pages to return (None for unlimited)
</ParamField>

#### Returns

`IteratorResponseType`

### `class xdk.paginator.PaginatableMethod`

\[`ResponseType`]

### `__init__`

### `xdk.paginator.cursor`

Create a cursor with proper type inference and validation.
This factory function helps with type inference so you get proper
type hints for the response type, and validates that the method
supports pagination at both static analysis and runtime.

#### Parameters

<ParamField path="path.method" type="PaginatableMethod">
  The API method to wrap (must support pagination)
</ParamField>
