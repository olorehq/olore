> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# API Reference

> An overview of OpenRouter's API

OpenRouter's request and response schemas are very similar to OpenAI's APIs, with a few small differences. At a high level, **OpenRouter normalizes the schema across models and providers** so you only need to learn one.

OpenRouter supports two request shapes: the [Responses API](https://openrouter.ai/docs/api_reference/responses/overview.md) (`POST /api/v1/responses`) and the Chat Completions API (`POST /api/v1/chat/completions`). Where this page shows both, the Responses API comes first. The TypeScript schemas below describe Chat Completions; the Responses API schema is in the [Responses API reference](https://openrouter.ai/docs/api_reference/responses/overview.md).

## OpenAPI specification

The complete OpenRouter API is documented using the OpenAPI specification. You can access the specification in either YAML or JSON format:

* **YAML**: [https://openrouter.ai/openapi.yaml](https://openrouter.ai/openapi.yaml)
* **JSON**: [https://openrouter.ai/openapi.json](https://openrouter.ai/openapi.json)

These specifications can be used with tools like [Swagger UI](https://swagger.io/tools/swagger-ui/), [Postman](https://www.postman.com/), or any OpenAPI-compatible code generator to explore the API or generate client libraries.

## Requests

### Responses API request format

A Responses API request takes `input` (a string or an array of input items), optional `instructions`, and the same routing fields as Chat Completions (`models`, `provider`, `plugins`, `user`). The full request schema is in the [Responses API reference](https://openrouter.ai/docs/api_reference/responses/overview.md) and the [OpenAPI specification](#openapi-specification).

```json lines theme={null}
{
  "model": "openai/gpt-5.2",
  "instructions": "Answer in one sentence.",
  "input": "What is the meaning of life?",
  "max_output_tokens": 256
}
```

### Completions request format

Here is the Chat Completions request schema as a TypeScript type. This will be the body of your `POST` request to the `/api/v1/chat/completions` endpoint. The Responses API request format is above.

For a complete list of parameters, see the [Parameters](https://openrouter.ai/docs/api_reference/parameters.md).

```typescript title="Request Schema" expandable lines theme={null}
// Definitions of subtypes are below
type Request = {
  // Either "messages" or "prompt" is required
  messages?: Message[];
  prompt?: string;

  // If "model" is unspecified, uses the user's default
  model?: string; // See "Supported Models" section

  // Allows to force the model to produce specific output format.
  // See "Structured Outputs" section below and models page for which models support it.
  response_format?: ResponseFormat;

  stop?: string | string[];
  stream?: boolean; // Enable streaming

  // Plugins to extend model capabilities (PDF parsing, response healing)
  // See "Plugins" section: openrouter.ai/docs/guides/features/plugins
  plugins?: Plugin[];

  // See LLM Parameters (openrouter.ai/docs/api_reference/parameters)
  max_tokens?: number; // Range: [1, context_length)
  temperature?: number; // Range: [0, 2]

  // Tool calling
  // Will be passed down as-is for providers implementing OpenAI's interface.
  // For providers with custom interfaces, we transform and map the properties.
  // Otherwise, we transform the tools into a YAML template. The model responds with an assistant message.
  // See models supporting tool calling: openrouter.ai/models?supported_parameters=tools
  tools?: Tool[];
  tool_choice?: ToolChoice;

  // Advanced optional parameters
  seed?: number; // Integer only
  top_p?: number; // Range: (0, 1]
  top_k?: number; // Range: [1, Infinity) Not available for OpenAI models
  frequency_penalty?: number; // Range: [-2, 2]
  presence_penalty?: number; // Range: [-2, 2]
  repetition_penalty?: number; // Range: (0, 2]
  logit_bias?: { [key: number]: number };
  top_logprobs: number; // Integer only
  min_p?: number; // Range: [0, 1]
  top_a?: number; // Range: [0, 1]

  // Reduce latency by providing the model with a predicted output
  // https://platform.openai.com/docs/guides/latency-optimization#use-predicted-outputs
  prediction?: { type: 'content'; content: string };

  // OpenRouter-only parameters
  // See "Model Routing" section: openrouter.ai/docs/guides/features/model-routing
  models?: string[];
  route?: 'fallback';
  // See "Provider Routing" section: openrouter.ai/docs/guides/routing/provider-selection
  provider?: ProviderPreferences;
  user?: string; // A stable identifier for your end-users. Used to help detect and prevent abuse.

  // Debug options (streaming only)
  debug?: {
    echo_upstream_body?: boolean; // If true, returns the transformed request body sent to the provider
  };
};

// Subtypes:

type TextContent = {
  type: 'text';
  text: string;
};

type ImageContentPart = {
  type: 'image_url';
  image_url: {
    url: string; // URL or base64 encoded image data
    detail?: string; // Optional, defaults to "auto"
  };
};

type ContentPart = TextContent | ImageContentPart;

type Message =
  | {
      role: 'user' | 'assistant' | 'system';
      // ContentParts are only for the "user" role:
      content: string | ContentPart[];
      // If "name" is included, it will be prepended like this
      // for non-OpenAI models: `{name}: {content}`
      name?: string;
    }
  | {
      role: 'tool';
      content: string;
      tool_call_id: string;
      name?: string;
    };

type FunctionDescription = {
  description?: string;
  name: string;
  parameters: object; // JSON Schema object
};

type Tool = {
  type: 'function';
  function: FunctionDescription;
};

type ToolChoice =
  | 'none'
  | 'auto'
  | {
      type: 'function';
      function: {
        name: string;
      };
    };

// Response format for structured outputs
type ResponseFormat =
  | { type: 'json_object' }
  | {
      type: 'json_schema';
      json_schema: {
        name: string;
        strict?: boolean;
        schema: object; // JSON Schema object
      };
    };

// Plugin configuration
type Plugin = {
  id: string; // 'web', 'file-parser', 'response-healing', 'context-compression'
  enabled?: boolean;
  // Additional plugin-specific options
  [key: string]: unknown;
};
```

### Structured outputs

The `response_format` parameter allows you to enforce structured JSON responses from the model. OpenRouter supports two modes:

* `{ type: 'json_object' }`: Basic JSON mode - the model will return valid JSON
* `{ type: 'json_schema', json_schema: { ... } }`: Strict schema mode - the model will return JSON matching your exact schema

For detailed usage and examples, see [Structured Outputs](https://openrouter.ai/docs/guides/features/structured-outputs.md). To find models that support structured outputs, check the [models page](https://openrouter.ai/models?supported_parameters=structured_outputs).

### Plugins

OpenRouter plugins extend model capabilities with features like web search, PDF processing, response healing, and context compression. Enable plugins by adding a `plugins` array to your request:

```json lines theme={null}
{
  "plugins": [
    { "id": "web" },
    { "id": "response-healing" }
  ]
}
```

Available plugins include `web` (real-time web search), `file-parser` (PDF processing), `response-healing` (automatic JSON repair), and `context-compression` (middle-out prompt compression). For detailed configuration options, see [Plugins](https://openrouter.ai/docs/guides/features/plugins.md)

### Headers

OpenRouter allows you to specify some optional headers to identify your app and make it discoverable to users on our site.

* `HTTP-Referer`: Identifies your app on openrouter.ai
* `X-OpenRouter-Title`: Sets/modifies your app's title (`X-Title` also accepted)
* `X-OpenRouter-Categories`: Assigns marketplace categories (see [App Attribution](https://openrouter.ai/docs/app-attribution.md))

```typescript title="Responses API" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/gpt-5.2',
    input: 'What is the meaning of life?',
  }),
});
```

```typescript title="Chat Completions" lines theme={null}
fetch('https://openrouter.ai/api/v1/chat/completions', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/gpt-5.2',
    messages: [
      {
        role: 'user',
        content: 'What is the meaning of life?',
      },
    ],
  }),
});
```

> [!NOTE]
>
> **Model routing**
>
> If the `model` parameter is omitted, the user or payer's default is used. Otherwise, remember to select a value for `model` from the [supported models](https://openrouter.ai/docs/guides/overview/models.md) or [API](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties.md), and include the organization prefix. OpenRouter will select the least expensive and best GPUs available to serve the request, and fall back to other providers or GPUs if it receives a 5xx response code or if you are rate-limited.

> [!NOTE]
>
> **Streaming**
>
> [Server-Sent Events (SSE)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format) are supported as well, to enable streaming *for all models*. Simply send `stream: true` in your request body. The SSE stream will occasionally contain a "comment" payload, which you should ignore (noted below).

> [!NOTE]
>
> **Non-standard parameters**
>
> If the chosen model doesn't support a request parameter (such as `logit_bias` in non-OpenAI models, or `top_k` for OpenAI), then the parameter is ignored. The rest are forwarded to the underlying model API.

### Assistant prefill

OpenRouter supports asking models to complete a partial response. This can be useful for guiding models to respond in a certain way.

To use this feature, simply include a message with `role: "assistant"` at the end of your `input` array (Responses API) or `messages` array (Chat Completions).

```typescript title="Responses API" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/gpt-5.2',
    input: [
      { role: 'user', content: 'What is the meaning of life?' },
      { role: 'assistant', content: "I'm not sure, but my best guess is" },
    ],
  }),
});
```

```typescript title="Chat Completions" lines theme={null}
fetch('https://openrouter.ai/api/v1/chat/completions', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/gpt-5.2',
    messages: [
      { role: 'user', content: 'What is the meaning of life?' },
      { role: 'assistant', content: "I'm not sure, but my best guess is" },
    ],
  }),
});
```

## Responses

### Responses API response format

A Responses API response carries the generated content as items in the `output` array: `message` items hold `output_text` content parts, and `reasoning`, `function_call`, and server-tool items (such as `openrouter:web_search`) appear as their own entries. Token counts are in `usage.input_tokens`, `usage.output_tokens`, and `usage.total_tokens`. The full schema is in the [Responses API reference](https://openrouter.ai/docs/api_reference/responses/basic-usage.md#response-format).

```json lines theme={null}
{
  "id": "resp_1234567890",
  "object": "response",
  "created_at": 1234567890,
  "model": "openai/gpt-5.2",
  "status": "completed",
  "output": [
    {
      "type": "message",
      "id": "msg_abc123",
      "status": "completed",
      "role": "assistant",
      "content": [{ "type": "output_text", "text": "The meaning of life is...", "annotations": [] }]
    }
  ],
  "usage": { "input_tokens": 12, "output_tokens": 45, "total_tokens": 57 }
}
```

### CompletionsResponse format

OpenRouter normalizes the schema across models and providers to comply with the [OpenAI Chat API](https://platform.openai.com/docs/api-reference/chat).

This means that `choices` is always an array, even if the model only returns one completion. Each choice will contain a `delta` property if a stream was requested and a `message` property otherwise. This makes it easier to use the same code for all models.

Here's the response schema as a TypeScript type:

```typescript TypeScript lines theme={null}
// Definitions of subtypes are below
type Response = {
  id: string;
  // Depending on whether you set "stream" to "true" and
  // whether you passed in "messages" or a "prompt", you
  // will get a different output shape
  choices: (NonStreamingChoice | StreamingChoice | NonChatChoice)[];
  created: number; // Unix timestamp
  model: string;
  object: 'chat.completion' | 'chat.completion.chunk';

  system_fingerprint?: string; // Only present if the provider supports it

  // Usage data is always returned for non-streaming.
  // When streaming, usage is returned exactly once in the final chunk
  // before the [DONE] message. Unlike OpenAI's spec, this chunk contains
  // a non-empty choices array: a choice with a content-free delta that
  // repeats the finish_reason of the stream.
  usage?: ResponseUsage;
};
```

```typescript expandable lines theme={null}
// OpenRouter always returns detailed usage information.
// Token counts are calculated using the model's native tokenizer.

type ResponseUsage = {
  /** Including images, input audio, and tools if any */
  prompt_tokens: number;
  /** The tokens generated */
  completion_tokens: number;
  /** Sum of the above two fields */
  total_tokens: number;

  /** Breakdown of prompt tokens (optional) */
  prompt_tokens_details?: {
    cached_tokens: number;        // Tokens cached by the endpoint
    cache_write_tokens?: number;  // Tokens written to cache (models with explicit caching)
    audio_tokens?: number;        // Tokens used for input audio
    video_tokens?: number;        // Tokens used for input video
  };

  /** Breakdown of completion tokens (optional) */
  completion_tokens_details?: {
    reasoning_tokens?: number;    // Tokens generated for reasoning
    audio_tokens?: number;        // Tokens generated for audio output
    image_tokens?: number;        // Tokens generated for image output
  };

  /** Cost in credits (optional) */
  cost?: number;
  /** Whether request used Bring Your Own Key */
  is_byok?: boolean;
  /** Detailed cost breakdown (optional) */
  cost_details?: {
    upstream_inference_cost?: number;
    upstream_inference_prompt_cost: number;
    upstream_inference_completions_cost: number;
    /** Metered server-tool execution cost (e.g. shell sandbox time), billed in USD */
    server_tool_cost?: number | null;
  };

  /** Server-side tool usage (optional) */
  server_tool_use?: {
    web_search_requests?: number;
  };
};
```

```typescript expandable lines theme={null}
// Subtypes:
type NonChatChoice = {
  finish_reason: string | null;
  text: string;
  error?: ErrorResponse;
};

type NonStreamingChoice = {
  finish_reason: string | null;
  native_finish_reason: string | null;
  message: {
    content: string | null;
    role: string;
    tool_calls?: ToolCall[];
  };
  error?: ErrorResponse;
};

type StreamingChoice = {
  finish_reason: string | null;
  native_finish_reason: string | null;
  delta: {
    content: string | null;
    role?: string;
    tool_calls?: ToolCall[];
  };
  error?: ErrorResponse;
};

type ErrorResponse = {
  code: number; // See "Error Handling" section
  message: string;
  metadata?: Record<string, unknown>; // Contains additional error information such as provider details, the raw error message, etc.
};

type ToolCall = {
  id: string;
  type: 'function';
  function: FunctionCall;
};
```

Here's an example:

```json expandable lines theme={null}
{
  "id": "gen-xxxxxxxxxxxxxx",
  "choices": [
    {
      "finish_reason": "stop", // Normalized finish_reason
      "native_finish_reason": "stop", // The raw finish_reason from the provider
      "message": {
        // will be "delta" if streaming
        "role": "assistant",
        "content": "Hello there!"
      }
    }
  ],
  "usage": {
    "prompt_tokens": 10,
    "completion_tokens": 4,
    "total_tokens": 14,
    "prompt_tokens_details": {
      "cached_tokens": 0
    },
    "completion_tokens_details": {
      "reasoning_tokens": 0
    },
    "cost": 0.00014
  },
  "model": "openai/gpt-4o" // Could also be "anthropic/claude-sonnet-4.6", etc, depending on the "model" that ends up being used
}
```

### Finish reason

OpenRouter normalizes each model's `finish_reason` to one of the following values: `tool_calls`, `stop`, `length`, `content_filter`, `error`.

Some models and providers may have additional finish reasons. The raw finish\_reason string returned by the model is available via the `native_finish_reason` property.

### Querying cost and stats

The token counts returned in the API response are calculated using the model's native tokenizer. Credit usage and model pricing are based on these native token counts.

You can also use the returned `id` to query for the generation stats (including token counts and cost) after the request is complete via the `/api/v1/generation` endpoint. This is useful for auditing historical usage or when you need to fetch stats asynchronously.

```typescript title="Query Generation Stats" lines theme={null}
const generation = await fetch(
  'https://openrouter.ai/api/v1/generation?id=$GENERATION_ID',
  { headers },
);

const stats = await generation.json();
```

Please see the [Generation](https://openrouter.ai/docs/api/api-reference/generations/get-request-&-usage-metadata-for-a-generation.md) API reference for the full response shape.

Note that token counts are also available in the `usage` field of the response body for non-streaming requests.
