> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Responses API

> OpenAI-compatible Responses API

> [!NOTE]
>
> **Stateless Only**
>
> This API is **stateless** - each request is independent and no conversation state is persisted between requests. You must include the full conversation history in each request. Requests that set `store: true` or a non-null `previous_response_id` are rejected with a `400` error.

OpenRouter's Responses API provides OpenAI-compatible access to multiple AI models through a unified interface, designed to be a drop-in replacement for OpenAI's Responses API. This stateless API offers enhanced capabilities including reasoning, tool calling, and web search integration, with each request being independent and no server-side state persisted.

## Base URL

```lines theme={null}
https://openrouter.ai/api/v1/responses
```

## Authentication

All requests require authentication using your OpenRouter API key:

```typescript title="TypeScript" lines theme={null}
const response = await fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/o4-mini',
    input: 'Hello, world!',
  }),
});
```

```python title="Python" lines theme={null}
import requests

response = requests.post(
    'https://openrouter.ai/api/v1/responses',
    headers={
        'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
        'Content-Type': 'application/json',
    },
    json={
        'model': 'openai/o4-mini',
        'input': 'Hello, world!',
    }
)
```

```bash title="cURL" lines theme={null}
curl -X POST https://openrouter.ai/api/v1/responses \
  -H "Authorization: Bearer YOUR_OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "openai/o4-mini",
    "input": "Hello, world!"
  }'
```

## Core Features

### [Basic Usage](https://openrouter.ai/docs/api_reference/responses/basic-usage.md)

Learn the fundamentals of making requests with simple text input and handling responses.

### [Reasoning](https://openrouter.ai/docs/api_reference/responses/reasoning.md)

Access advanced reasoning capabilities with configurable effort levels and encrypted reasoning chains.

### [Tool Calling](https://openrouter.ai/docs/api_reference/responses/tool-calling.md)

Integrate function calling with support for parallel execution and complex tool interactions.

### [Web Search](https://openrouter.ai/docs/api_reference/responses/web-search.md)

Enable web search capabilities with real-time information retrieval and citation annotations.

## Error Handling

The API returns structured error responses:

```json lines theme={null}
{
  "error": {
    "code": "invalid_prompt",
    "message": "Missing required parameter: 'model'."
  },
  "metadata": null
}
```

For comprehensive error handling guidance, see [Error Handling](https://openrouter.ai/docs/api_reference/responses/error-handling.md).

## Rate Limits

Standard OpenRouter rate limits apply. See [API Limits](https://openrouter.ai/docs/api_reference/limits.md) for details.
