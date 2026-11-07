> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Advisor

> Consult a stronger model mid-generation as a server tool

> [!NOTE]
>
> **Beta**
>
> Server tools are currently in beta. The API and behavior may change.

The `openrouter:advisor` server tool lets a model consult a higher-intelligence **advisor model** mid-generation. When your model hits a decision point (before committing to an approach, when it's stuck, or before declaring a task done), it invokes the tool with a `prompt`. The advisor model thinks, returns its guidance as the tool result, and your model continues, informed by the advice.

Unlike a fixed model pairing, the advisor can be **any OpenRouter model**. The tool returns the advisor model's response directly as the tool result. Your model writes the final answer.

You can offer the model a choice of **several named advisors** by including multiple `openrouter:advisor` entries in the `tools` array, one per advisor (see [Multiple advisors](#multiple-advisors)). At most one entry may omit `name` to act as the default advisor.

Each advisor also **remembers its own prior consultations across requests** when you replay the conversation transcript (see [Cross-request memory](#cross-request-memory)), and the tool is available on the Chat Completions, Responses, and Anthropic Messages APIs (see [Anthropic Messages API](#anthropic-messages-api)).

## Quick start

```typescript title="TypeScript" expandable lines theme={null}
const response = await fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer {{API_KEY_REF}}',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: '{{MODEL}}',
    input: 'Build a concurrent worker pool in Go with graceful shutdown.',
    tools: [
      {
        type: 'openrouter:advisor',
        parameters: { model: '~anthropic/claude-opus-latest' },
      },
    ],
  }),
});

const data = await response.json();
const message = [...data.output].reverse().find((item: { type: string }) => item.type === 'message');
console.log(message?.content.find((part: { type: string; text?: string }) => part.type === 'output_text')?.text);
```

```python title="Python" expandable lines theme={null}
import requests

response = requests.post(
  "https://openrouter.ai/api/v1/responses",
  headers={
    "Authorization": f"Bearer {{API_KEY_REF}}",
    "Content-Type": "application/json",
  },
  json={
    "model": "{{MODEL}}",
    "input": "Build a concurrent worker pool in Go with graceful shutdown.",
    "tools": [
      {
        "type": "openrouter:advisor",
        "parameters": {"model": "~anthropic/claude-opus-latest"},
      },
    ],
  },
)
data = response.json()
message = next(item for item in reversed(data["output"]) if item["type"] == "message")
print(next(part["text"] for part in message["content"] if part["type"] == "output_text"))
```

## Choosing the advisor model

The advisor model is resolved with the following precedence:

1. `parameters.model` on the tool definition, if set.
2. The `model` argument the executor passes in the tool **call**, if the definition does not fix one.
3. The model from the outer API request, as a fallback.

This lets you either pin the advisor model up front (`parameters.model`) or let the executing model pick it per call.

## When does the model invoke it?

The tool's description steers the model to consult the advisor before substantive work, when it's stuck, or before declaring a task done, not for trivial steps a single model can resolve directly. To **force** a consultation on every request, set `tool_choice: "required"` (with multiple advisors this forces the first entry; see [Multiple advisors](#multiple-advisors)).

## Parameters

Pass an optional `parameters` object on the tool entry:

```json lines theme={null}
{
  "tools": [
    {
      "type": "openrouter:advisor",
      "parameters": {
        "model": "~anthropic/claude-opus-latest",
        "instructions": "You are a senior staff engineer. Be decisive.",
        "forward_transcript": false
      }
    }
  ]
}
```

| Field | Default | Description |
| - | - | - |
| `name` | None (default advisor) | Optional name for this advisor. The model sees one tool per named advisor (plus one default for an entry with no `name`). Names must be unique across entries. Letters, digits, spaces, underscores, and dashes; trimmed; 1–64 chars. See [Multiple advisors](#multiple-advisors). |
| `model` | Outer request model | The advisor model to consult (any OpenRouter model). See [Choosing the advisor model](#choosing-the-advisor-model). |
| `instructions` | None | System instructions for the advisor sub-agent. |
| `forward_transcript` | `false` | When `true`, the full parent conversation is forwarded to the advisor (and the tool-call `prompt`, if given, is appended as a final user turn). When `false`, the advisor sees only the `prompt`. |
| `stream` | `false` | When `true`, the advice streams incrementally as it is produced (Responses API only). See [Streaming advice](#streaming-advice). |
| `max_completion_tokens` | Provider default | Max output tokens (including reasoning) for the advisor call. |
| `reasoning` | Provider default | Reasoning config forwarded to the advisor call, an object with optional `effort` and `max_tokens`. |
| `temperature` | Provider default | Sampling temperature (`0`–`2`) forwarded to the advisor call. |

### Tool-call arguments

When invoking the tool, the model passes:

| Argument | Description |
| - | - |
| `prompt` | What the model wants advice on. Required unless `forward_transcript` is `true`. |
| `model` | The advisor model to use. Only honored when the tool definition does not fix a `model`. |

## Multiple advisors

To offer the model a choice of advisors, include **multiple `openrouter:advisor` entries** in the `tools` array, one per advisor. Give each its own `name` (plus its own `model`, `instructions`, and the other advisor fields); the model sees one distinct tool per named advisor and calls whichever fits the task:

```json lines theme={null}
{
  "tools": [
    {
      "type": "openrouter:advisor",
      "parameters": {
        "name": "reviewer",
        "model": "~anthropic/claude-opus-latest",
        "instructions": "You are a critical code reviewer. Find the flaws."
      }
    },
    {
      "type": "openrouter:advisor",
      "parameters": {
        "name": "architect",
        "model": "~openai/gpt-sol-latest",
        "instructions": "You are a systems architect. Think about scale."
      }
    }
  ]
}
```

Rules for advisor entries:

* **At most one entry may omit `name`**. It becomes the default advisor. Two or more unnamed advisor entries fail the request with a `400`: *"Only one advisor tool can serve as the default. All other advisor tools must have a name defined."*
* **Names must be unique** across entries (compared after trimming whitespace). A duplicate name fails the request with a `400`.
* Names allow **letters, digits, spaces, underscores, and dashes** (e.g. `"Lead Architect"`), are trimmed, and must be 1–64 characters.

A single advisor is just one entry: name it, or leave `name` off to keep it as the default. Each advisor's result reports the model it consulted, so you can tell the advisors apart in the response.

> [!NOTE]
>
> **tool\_choice and named advisors**
>
> Forcing the advisor with `tool_choice` (e.g. `tool_choice: "required"`, or selecting the `openrouter:advisor` tool) targets the **first** advisor entry. Forcing a specific named advisor via `tool_choice` is not yet supported.

## Cross-request memory

Each advisor remembers its own prior `prompt → advice` exchanges **across API requests** in a conversation. When you send a follow-up request that replays the prior transcript (assistant messages with their advisor tool calls and results included, as returned by the API), the advisor sees its earlier consultations replayed into its context before the new prompt. Tell the advisor a fact in one request, and it can recall it in the next without the executor restating it.

This works on all three APIs; the only requirement is that you **replay the advisor exchanges you received**:

* **Responses API**: include the `openrouter:advisor` output items from prior responses in `input`, unchanged.
* **Chat Completions**: include the assistant message's advisor `tool_calls` and the paired `role: "tool"` result messages from prior turns.
* **Anthropic Messages API**: include the assistant message's advisor `server_tool_use` and `advisor_tool_result` content blocks from prior turns.

Memory is **per advisor**: in a multi-advisor setup, each advisor recalls only its own prior exchanges. A "reviewer" advisor never sees what the "architect" was told. There is no fixed limit on the number of replayed exchanges; if the history exceeds the advisor model's context window, it is compressed with the [middle-out transform](https://openrouter.ai/docs/guides/features/message-transforms.md), which trims the middle of the conversation and keeps the oldest and newest exchanges.

Memory applies to prompt-mode consultations. With `forward_transcript: true` the advisor already sees the full parent conversation, so prior exchanges are not separately replayed.

> [!NOTE]
>
> **Keep advisor entry order stable**
>
> Advisor identity is positional, derived from the entry's index in the request `tools` array. Keep the order of advisor entries stable across the requests of a conversation (and echo the `instance_name` field on replayed Responses items unchanged). Reordering or inserting advisor entries between requests shifts identities, and each advisor reconstructs another's memory.

## Streaming advice

By default the advice arrives only once the advisor has finished, as a single tool result. Set `parameters.stream` to `true` to have the advice stream out incrementally as the advisor model produces it:

```json lines theme={null}
{
  "tools": [
    {
      "type": "openrouter:advisor",
      "parameters": {
        "model": "~anthropic/claude-opus-latest",
        "stream": true
      }
    }
  ]
}
```

In the **Responses API**, the advisor's output item then emits `response.output_text.delta` events as the advice is generated, followed by a `response.output_text.done` and the completed item. The completed item still carries the full `advice` string, so consumers that don't read the deltas are unaffected. `stream` can be set per advisor entry, so you can stream some advisors and not others.

The streamed deltas mirror how a normal assistant message streams text. The `item_id` on each delta is the advisor output item's id.

Streaming has **no effect on the Chat Completions API** (the advice arrives only as the final tool result regardless of `stream`). Streaming the advice in the **Anthropic Messages API** is a planned fast-follow; today a Messages request behaves as if `stream` were `false`.

## What the tool returns

On success the tool result contains the advice text and the model that produced it:

```json lines theme={null}
{
  "status": "ok",
  "model": "anthropic/claude-opus-4.8",
  "advice": "Use a channel-based coordination pattern. Close the input channel first, then wait on a WaitGroup to drain in-flight work before shutdown..."
}
```

On failure the result has `status: "error"` with a message; the calling model continues without the advice:

```json lines theme={null}
{
  "status": "error",
  "error": "Advisor call failed: ..."
}
```

## Anthropic Messages API

On `/api/v1/messages`, request the advisor with the native Anthropic tool shape, and it works with **any executor model**, not just Anthropic ones:

```json lines theme={null}
{
  "model": "anthropic/claude-haiku-5.5",
  "max_tokens": 1024,
  "messages": [
    { "role": "user", "content": "Build a concurrent worker pool in Go with graceful shutdown." }
  ],
  "tools": [
    {
      "type": "advisor_20260301",
      "name": "advisor",
      "model": "~anthropic/claude-opus-latest"
    }
  ]
}
```

The response carries the advisor consultation as the official Anthropic block shapes: a `server_tool_use` block with `name: "advisor"` for the call, followed by an `advisor_tool_result` block with the advice:

```json lines theme={null}
{
  "content": [
    {
      "type": "server_tool_use",
      "id": "srvtoolu_01abc",
      "name": "advisor",
      "input": { "prompt": "..." }
    },
    {
      "type": "advisor_tool_result",
      "tool_use_id": "srvtoolu_01abc",
      "content": { "type": "advisor_result", "text": "Use a channel-based coordination pattern..." }
    },
    { "type": "text", "text": "..." }
  ]
}
```

Replay these blocks unchanged on the assistant message of follow-up requests for [cross-request memory](#cross-request-memory).

Notes on the native shape:

* `model` is the only advisor configuration the native shape carries. For `instructions`, `forward_transcript`, and the other [parameters](#parameters), use the `openrouter:advisor` form on Chat Completions or Responses.
* `max_uses` is not honored: consultations are capped per request by OpenRouter's fixed limit, and a `max_uses` below that limit does not lower it. `caching`, `allowed_callers`, and `defer_loading` are also ignored.
* Forcing the advisor via `tool_choice: { "type": "tool", "name": "advisor" }` is supported.

## Recursion protection

The advisor tool cannot re-enter itself through an inner call. The recursion guard is:

* Each inner advisor call carries an `x-openrouter-advisor-depth` header; the advisor tool is stripped from any sub-call, so an advisor sub-agent can never re-enter the advisor.

Consultations are also capped per request to bound cost and latency.

## Related

* [Fusion server tool](https://openrouter.ai/docs/guides/features/server-tools/fusion.md). Multi-model deliberation
* [Web Search server tool](https://openrouter.ai/docs/guides/features/server-tools/web-search.md)
* [Web Fetch server tool](https://openrouter.ai/docs/guides/features/server-tools/web-fetch.md)
