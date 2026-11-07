> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Error Handling

> Understanding and handling errors in the Responses API

> [!NOTE]
>
> **Stateless Only**
>
> This API is **stateless** - each request is independent and no conversation state is persisted between requests. You must include the full conversation history in each request. Requests that set `store: true` or a non-null `previous_response_id` are rejected with a `400` error.

The Responses API returns structured error responses that follow a consistent format.

## Error Response Format

All errors follow this structure:

```json lines theme={null}
{
  "error": {
    "code": "invalid_prompt",
    "message": "Detailed error description"
  },
  "metadata": null
}
```

### Error Codes

The API uses the following error codes:

| Code | Description | Equivalent HTTP Status |
| - | - | - |
| `invalid_prompt` | Request or prompt validation failed (context length exceeded, invalid request fields) | 400 |
| `rate_limit_exceeded` | Too many requests | 429 |
| `image_content_policy_violation` | Input or output flagged by a content filter | 403 |
| `permission_denied` | A well-formed request declined by a policy gate, such as an Alignment plugin block or a HIPAA refusal | 403 |
| `server_error` | Internal server error, authentication failure, provider overloaded/unavailable, or timeout | 500+ |

These codes are a reduced mapping of the [internal typed error codes](https://openrouter.ai/docs/api_reference/errors-and-debugging.md#typed-error-codes). Multiple internal error types collapse into each Responses API code — for example, `context_length_exceeded` and `invalid_request` both surface as `invalid_prompt` here.

### Canonical `error_type` Field

Because the native `error.code` vocabulary is lossy (many distinct errors collapse to `server_error`), failed responses also include a top-level `error_type` field that carries the precise canonical error type:

```json lines theme={null}
{
  "id": "resp_abc123",
  "status": "failed",
  "error": { "code": "server_error", "message": "Invalid credentials" },
  "error_type": "authentication"
}
```

The `error_type` value matches one of the [typed error codes](https://openrouter.ai/docs/api_reference/errors-and-debugging.md#typed-error-codes) and is stable across all OpenRouter API formats. Use it to programmatically distinguish error categories when the native `code` is ambiguous.
