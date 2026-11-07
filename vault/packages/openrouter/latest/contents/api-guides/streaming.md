> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Streaming

The OpenRouter API allows streaming responses from *any model*. This is useful for building chat interfaces or other applications where the UI should update as the model generates the response.

To enable streaming, you can set the `stream` parameter to `true` in your request. The model will then stream the response to the client in chunks, rather than returning the entire response at once.

Here is an example of how to stream a response, and process it:

### Additional information

For SSE (Server-Sent Events) streams, OpenRouter occasionally sends comments to prevent connection timeouts. These comments look like:

```text lines theme={null}
: OPENROUTER PROCESSING
```

Comment payload can be safely ignored per the [SSE specs](https://html.spec.whatwg.org/multipage/server-sent-events.html#event-stream-interpretation). However, you can use it to improve UX as needed, e.g. by showing a dynamic loading indicator.

> [!WARNING]
>
> If you parse the stream by hand, skip lines that start with `:` before calling `JSON.parse`. Passing a comment line like `: OPENROUTER PROCESSING` to `JSON.parse` throws, and unhandled it will crash your stream loop. The snippets above handle this.

A spec-compliant parser such as [eventsource-parser](https://github.com/rexxars/eventsource-parser) handles comments, multi-line `data:` fields, and buffering for you:

```typescript title="eventsource-parser" expandable lines theme={null}
import { createParser } from 'eventsource-parser';

const response = await fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/gpt-4o',
    input: 'Hello',
    stream: true,
  }),
});

// Errors that occur before streaming starts are plain JSON, not SSE
if (!response.ok) {
  const error = await response.json();
  throw new Error(error.error.message);
}

const parser = createParser({
  onEvent(event) {
    if (event.data === '[DONE]') return;
    try {
      const data = JSON.parse(event.data);
      if (data.type === 'response.output_text.delta') {
        console.log(data.delta);
      }
    } catch {
      // Ignore invalid JSON
    }
  },
});

const reader = response.body!.getReader();
const decoder = new TextDecoder();
while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  parser.feed(decoder.decode(value, { stream: true }));
}
```

A parser only handles the SSE framing. Errors that occur mid-generation still arrive as regular `data:` events (a `response.failed` or `error` event). See [Handling Errors During Streaming](#handling-errors-during-streaming) below.

The generation ID is returned in the `X-Generation-Id` response header for all endpoints (chat completions, completions, responses, and messages), which can be useful for debugging and correlating requests.

Some SSE client implementations might not parse the payload according to spec, which leads to an uncaught error when you `JSON.stringify` the non-JSON payloads. We recommend the following clients:

* [eventsource-parser](https://github.com/rexxars/eventsource-parser)
* [OpenAI SDK](https://www.npmjs.com/package/openai)
* [Vercel AI SDK](https://www.npmjs.com/package/ai)

### The final usage chunk (Chat Completions)

On the Chat Completions endpoint (`/api/v1/chat/completions`), every stream ends with an extra chunk that carries the `usage` object for the request, sent just before the `[DONE]` message. OpenAI's spec emits this chunk with an empty `choices` array, but many clients crash when accessing `choices[0].delta` on it, so OpenRouter intentionally deviates: the usage chunk contains one choice with a content-free `delta` that repeats the `finish_reason` (and `native_finish_reason`) of the stream.

```text lines theme={null}
data: {"id":"gen-abc123",...,"choices":[{"index":0,"delta":{"content":"","role":"assistant"},"finish_reason":"stop","native_finish_reason":"stop"}]}
data: {"id":"gen-abc123",...,"choices":[{"index":0,"delta":{"content":"","role":"assistant"},"finish_reason":"stop","native_finish_reason":"stop"}],"usage":{...}}
data: [DONE]
```

This means the terminal `finish_reason` appears twice: once on the last content-bearing chunk and again on the usage chunk. Clients that validate streams should treat the usage chunk as an accounting frame rather than a second terminal event.

This shape is specific to Chat Completions. Other endpoints follow their own specs: the Responses API (`/api/v1/responses`) reports usage in the `response.completed` event, and the Messages API (`/api/v1/messages`) reports it in the `message_delta` event before `message_stop`.

### Stream cancellation

Streaming requests can be cancelled by aborting the connection. For supported providers, this immediately stops model processing and billing.

> [accordion] Provider Support
>
> **Supported**
>
> * OpenAI, Azure, Anthropic
> * Fireworks, Mancer, Recursal
> * AnyScale, Lepton, OctoAI
> * Novita, DeepInfra, Together
> * Cohere, Hyperbolic, Infermatic
> * Avian, XAI, Cloudflare
> * SFCompute, Nineteen, Liquid
> * Friendli, Chutes, DeepSeek
>
> **Not Currently Supported**
>
> * AWS Bedrock, Groq, Modal
> * Google, Google AI Studio, Minimax
> * HuggingFace, Replicate, Perplexity
> * Mistral, AI21, Featherless
> * Lynn, Lambda, Reflection
> * SambaNova, Inflection, ZeroOneAI
> * AionLabs, Alibaba, Nebius
> * Kluster, Targon, InferenceNet

To implement stream cancellation:

> [!WARNING]
>
> Cancellation only works for streaming requests with supported providers. For non-streaming requests or unsupported providers, the model will continue processing and you will be billed for the complete response.

### Handling errors during streaming

OpenRouter handles errors differently depending on when they occur during the streaming process:

#### Errors before the response is committed

If an error occurs before OpenRouter has committed the response, you get a standard JSON error response with the appropriate HTTP status code. That covers failures raised before the request reaches a provider, and provider failures visible at connection time such as a connection error or a non-2xx upstream status.

```json lines theme={null}
{
  "error": {
    "code": 400,
    "message": "Invalid model specified"
  }
}
```

Common HTTP status codes include:

* **400**: Bad Request (invalid parameters)
* **401**: Unauthorized (invalid API key)
* **402**: Payment Required (insufficient credits)
* **429**: Too Many Requests (rate limited)
* **502**: Bad Gateway (provider error)
* **503**: Service Unavailable (no available providers)

#### Errors after the response is committed (mid-stream)

Once the provider has returned response headers, the `200 OK` status is committed even if no token has been produced yet. Any error after that point arrives as an SSE event rather than as an HTTP status. The event shape depends on the API.

##### Responses API

The stream ends with a `response.failed` event. An abridged event looks like:

```text lines theme={null}
data: {"type":"response.failed","response":{"id":"gen-abc123", ... ,"status":"failed","output":[],"error":{"code":"server_error","message":"Provider disconnected unexpectedly"},"error_type":"provider_unavailable"},"sequence_number":12}
```

Key characteristics of mid-stream errors:

* The error is in `response.error`, and `response.status` is `"failed"`
* The canonical OpenRouter `error_type` is at the top level of `response` (see [Responses API error formats](https://openrouter.ai/docs/api_reference/errors-and-debugging.md#responses-api-apiv1responses))
* The stream schema also defines a plain `error` event (`{"type":"error","code":"...","message":"..."}`). OpenRouter reports failures with `response.failed`, but handling both is safe
* The HTTP status remains 200 OK since headers were already sent
* The stream is terminated after this event
* The error can be the first and only event in the stream, so treat a `200` carrying a `response.failed` event with no output as a failure, not a success

##### Chat Completions

The stream ends with a chunk that carries a top-level `error`:

```text lines theme={null}
data: {"id":"cmpl-abc123","object":"chat.completion.chunk","created":1234567890,"model":"openai/gpt-4o","provider":"openai","error":{"code":"server_error","message":"Provider disconnected unexpectedly"},"choices":[{"index":0,"delta":{"content":""},"finish_reason":"error"}]}
```

Key characteristics of mid-stream errors:

* The error appears at the **top level** alongside standard response fields (id, object, created, etc.)
* A `choices` array is included with `finish_reason: "error"` to properly terminate the stream
* The HTTP status remains 200 OK since headers were already sent
* The stream is terminated after this unified error event
* The error can be the first and only event in the stream, so treat a `200` carrying an `error` chunk with no content as a failure, not a success

See [Errors and debugging](https://openrouter.ai/docs/api_reference/errors-and-debugging.md#chat-completions-apiv1chatcompletions) for the full error formats of both APIs.

#### Code examples

Here's how to properly handle both types of errors in your streaming implementation:

#### API-specific behavior

Different API endpoints may handle streaming errors slightly differently:

* **Responses API**: Upstream token-limit errors (such as `max_tokens_exceeded`) end the stream with a `response.incomplete` event (`incomplete_details.reason: "max_output_tokens"`) rather than an error; other failures end with `response.failed`
* **Chat Completions API**: Returns `ErrorResponse` directly if no chunks were processed, or includes error information in the response if some chunks were processed; the same token-limit errors become `finish_reason: "length"`
