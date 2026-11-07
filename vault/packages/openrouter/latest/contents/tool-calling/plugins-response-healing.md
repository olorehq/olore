> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Response Healing

> Automatically fix malformed JSON responses

The Response Healing plugin automatically validates and repairs malformed JSON responses from AI models. When models return imperfect formatting – missing brackets, trailing commas, markdown wrappers, or mixed text – this plugin attempts to repair the response so you receive valid, parseable JSON.

## Overview

Response Healing provides:

* **Automatic JSON repair**: Fixes missing brackets, commas, quotes, and other syntax errors
* **Markdown extraction**: Extracts JSON from markdown code blocks

## How It Works

The plugin activates for non-streaming requests when you set `text.format` in a [Responses API](https://openrouter.ai/docs/api_reference/responses/overview.md) request (or `response_format` on Chat Completions) to either `type: "json_schema"` or `type: "json_object"`, and include the response-healing plugin in your `plugins` array. See the [Complete Example](#complete-example) below for a full implementation.

## What Gets Fixed

The Response Healing plugin handles common issues in LLM responses:

### JSON Syntax Errors

**Input:** Missing closing bracket

```text lines theme={null}
{"name": "Alice", "age": 30
```

**Output:** Fixed

```json lines theme={null}
{"name": "Alice", "age": 30}
```

### Markdown Code Blocks

**Input:** Wrapped in markdown

````text lines theme={null}
```json
{"name": "Bob"}
```
````

**Output:** Extracted

```json lines theme={null}
{"name": "Bob"}
```

### Mixed Text and JSON

**Input:** Text before JSON

```text lines theme={null}
Here's the data you requested:
{"name": "Charlie", "age": 25}
```

**Output:** Extracted

```json lines theme={null}
{"name": "Charlie", "age": 25}
```

### Trailing Commas

**Input:** Invalid trailing comma

```text lines theme={null}
{"name": "David", "age": 35,}
```

**Output:** Fixed

```json lines theme={null}
{"name": "David", "age": 35}
```

### Unquoted Keys

**Input:** JavaScript-style

```text lines theme={null}
{name: "Eve", age: 40}
```

**Output:** Fixed

```json lines theme={null}
{"name": "Eve", "age": 40}
```

## Complete Example

## Limitations

> [!WARNING]
>
> **Non-Streaming Requests Only**
>
> Response Healing only applies to non-streaming requests.

> [!WARNING]
>
> **Will not repair all JSON**
>
> Some malformed JSON responses may still be unrepairable. In particular, if the response is truncated by `max_output_tokens`, the plugin will not be able to repair it.
