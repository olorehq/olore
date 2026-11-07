> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Subagent

> Delegate tasks to a smaller, faster model as a server tool

> [!NOTE]
>
> **Beta**
>
> Server tools are currently in beta. The API and behavior may change.

The `openrouter:subagent` server tool lets a model delegate self-contained tasks to a smaller, cheaper, faster **worker model** mid-generation. When your model has a piece of work that doesn't need its full capability (summarizing a document, extracting structured data, drafting boilerplate, reformatting text), it invokes the tool with a `task_name` and a `task_description`. The worker model executes the task and returns its result as the tool's `outcome`, and your model continues, integrating the result.

The worker can be **any OpenRouter model**, and it can optionally run as a **sub-agent with its own tools** (for example `openrouter:web_search`). Each task is independent: the worker sees only the task description (not the parent conversation) and keeps no memory between tasks.

You can give the model a choice of **several named workers** by including multiple `openrouter:subagent` entries in the `tools` array, one per worker (see [Multiple subagents](#multiple-subagents)). At most one entry may omit `name` to act as the default.

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
    input: 'Audit this release: summarize the changelog, list breaking changes, and draft the announcement.',
    tools: [
      {
        type: 'openrouter:subagent',
        parameters: { model: '~anthropic/claude-haiku-latest' },
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
    "input": "Audit this release: summarize the changelog, list breaking changes, and draft the announcement.",
    "tools": [
      {
        "type": "openrouter:subagent",
        "parameters": {"model": "~anthropic/claude-haiku-latest"},
      },
    ],
  },
)

data = response.json()
message = next(item for item in reversed(data["output"]) if item["type"] == "message")
print(next(part["text"] for part in message["content"] if part["type"] == "output_text"))
```

## Choosing the worker model

The worker model is resolved with the following precedence:

1. `parameters.model` on the tool definition, if set.
2. The model from the outer API request, as a fallback.

Unlike the [advisor tool](https://openrouter.ai/docs/guides/features/server-tools/advisor.md), the delegating model does not choose its worker per call; the worker is fixed by the tool definition. The subagent tool itself can never be the worker model.

## When does the model invoke it?

The tool's description steers the model to delegate focused sub-tasks that don't need its full capability, and to skip delegation for work that is faster to do directly than to describe. Because the worker has no access to the parent conversation, the model is instructed to include all relevant context and the expected output format in the `task_description`.

## Parameters

Pass an optional `parameters` object on the tool entry:

```json lines theme={null}
{
  "tools": [
    {
      "type": "openrouter:subagent",
      "parameters": {
        "model": "~anthropic/claude-haiku-latest",
        "instructions": "You are a fast, focused worker. Complete the task exactly as described.",
        "tools": [{ "type": "openrouter:web_search" }]
      }
    }
  ]
}
```

| Field | Default | Description |
| - | - | - |
| `name` | None (default subagent) | Optional name for this subagent. The model sees one tool per named subagent (plus one default for an entry with no `name`). Names must be unique across entries. Letters, digits, spaces, underscores, and dashes; trimmed; 1–64 chars. See [Multiple subagents](#multiple-subagents). |
| `model` | Outer request model | The worker model that executes delegated tasks (any OpenRouter model). Typically smaller, cheaper, and faster than the delegating model. |
| `tools` | None | Tools made available to the worker. Only OpenRouter server tools (such as `openrouter:web_search`) are supported; function tools are rejected with a `400` because the worker has no way to execute them. The subagent may not list itself. |
| `inherit_functions` | `false` | **Experimental — subject to change without notice.** When `true`, the worker inherits every client function defined in the request's top-level `tools` list. Supported on the Responses API (`/api/v1/responses`) only; other APIs reject it with a `400`. |
| `inherited_function_names` | None | **Experimental — subject to change without notice.** Names of top-level function tools the worker inherits; each matching tool is copied fully into the worker's tools. Ignored when `inherit_functions` is `true` (everything is already inherited). Names are trimmed before validation; whitespace-only names are rejected with a `400`. Supported on the Responses API (`/api/v1/responses`) only; other APIs reject it with a `400`. |
| `instructions` | None | System instructions for the worker. |
| `max_tool_calls` | Provider default | Max tool-calling steps the worker may take. Only relevant when the worker has tools. Range 1–25. Forwarded to the worker call as `max_tool_calls`. |
| `max_completion_tokens` | Provider default | Max output tokens (including reasoning) for the worker call. |
| `reasoning` | Provider default | Reasoning config for the worker call: an object with optional `effort` and `max_tokens`. Both are forwarded to the worker call as `reasoning.effort` and `reasoning.max_tokens`. |
| `temperature` | Provider default | Sampling temperature (`0`–`2`) forwarded to the worker call. |

### Tool-call arguments

When invoking the tool, the model passes:

| Argument | Description |
| - | - |
| `task_name` | A short identifier for the delegated task (e.g. `summarize-changelog`). |
| `task_description` | Everything the worker needs to complete the task: full context, inputs, constraints, and the expected output format. The worker sees only this description. |

## What the tool returns

On success the tool result contains the outcome text, the task name, and the model that produced it:

```json lines theme={null}
{
  "status": "ok",
  "model": "anthropic/claude-haiku-5.5",
  "task_name": "summarize-changelog",
  "outcome": "Release 2.4 highlights: 1) New streaming API..."
}
```

On failure the result has `status: "error"` with a message; the calling model continues without the outcome:

```json lines theme={null}
{
  "status": "error",
  "task_name": "summarize-changelog",
  "error": "Subagent call failed: ..."
}
```

## Worker tools

When you pass `tools`, the worker runs as an agentic sub-agent over them before producing its outcome. For example, giving the worker `openrouter:web_search` lets it ground its result in fresh sources. The worker's tool use happens inside the tool call; only its final text is returned to your model.

Nested tools must be OpenRouter server tools (for example `openrouter:web_search` or `openrouter:web_fetch`). Client function tools (`{ "type": "function" }`) placed directly in the nested `tools` array are rejected with a `400`. See [Inheriting Client Function Tools](#inheriting-client-function-tools).

## Inheriting Client Function Tools

> [!NOTE]
>
> **Experimental**
>
> Client function inheritance and the suspension/replay contract below are experimental and subject to change without notice. They are supported on the [Responses API](https://openrouter.ai/docs/api/api-reference/responses/create-a-response.md) (`/api/v1/responses`) only; requests on other APIs that set `inherit_functions` or `inherited_function_names` are rejected with a `400`.

The subagent can inherit the function tools you define at the top level of the request by setting either of the following parameters:

* `inherit_functions: true` gives the worker every function tool in the request's top-level `tools` list.
* `inherited_function_names` allows you to define an array of names. Each tool with a matching name is copied fully into the worker's tools. The list is ignored when `inherit_functions` is `true` (everything is already inherited), and a listed name that matches no top-level function tool is rejected with a `400`.

```json lines theme={null}
{
  "model": "openai/gpt-5.2",
  "input": [
    { "type": "message", "role": "user", "content": "Where is order o_1?" }
  ],
  "tools": [
    {
      "type": "function",
      "name": "lookup_order",
      "description": "Look up an order by its id.",
      "parameters": {
        "type": "object",
        "properties": { "order_id": { "type": "string" } },
        "required": ["order_id"]
      }
    },
    {
      "type": "function",
      "name": "update_order",
      "description": "Update an order's status by its id.",
      "parameters": {
        "type": "object",
        "properties": { "order_id": { "type": "string" }, "status": { "type": "string" } },
        "required": ["order_id", "status"]
      }
    },
    {
      "type": "openrouter:subagent",
      "parameters": {
        "model": "~anthropic/claude-haiku-latest",
        "inherited_function_names": ["lookup_order"]
      }
    }
  ]
}
```

### What happens when a subagent calls a local tool

When the subagent calls an inherited client tool, its run pauses and the response's turn ends (it is possible for the subagent to also call multiple tools in parallel). The response output contains:

* The spawning `openrouter:subagent` item with `status: "in_progress"`. It carries `call_id` (the id of the tool call that spawned the worker) plus the `task_name` and `task_description`, which are both generated and visible to the model.
* The subagent's pending calls, projected as standard `function_call` output items that additionally carry two attribution fields:

| Field | Description |
| - | - |
| `subagent_id` | Matches the `call_id` of the `openrouter:subagent` item that spawned the worker. Present on every subagent-originated function call. |
| `subagent_items` | The subagent's internal transcript produced this round. Treat it as opaque and replay it unchanged so the worker resumes with its context intact. When the worker makes several parallel function calls in one round, only the first call carries it; the siblings carry `subagent_id` alone. |

A suspended response looks like this in the Responses API:

```json lines theme={null}
{
  "output": [
    {
      "type": "openrouter:subagent",
      "id": "st_1",
      "status": "in_progress",
      "call_id": "call_root_1",
      "task_name": "lookup-order",
      "task_description": "Look up order o_1 and report its status."
    },
    {
      "id": "fc_1",
      "type": "function_call",
      "status": "completed",
      "call_id": "call_child_1",
      "name": "lookup_order",
      "arguments": "{\"order_id\":\"o_1\"}",
      "subagent_id": "call_root_1",
      "subagent_items": [
        {
          "type": "message",
          "role": "assistant",
          "content": [{ "type": "output_text", "text": "Looking up the order." }]
        },
        {
          "type": "function_call",
          "call_id": "call_child_1",
          "name": "lookup_order",
          "arguments": "{\"order_id\":\"o_1\"}"
        }
      ]
    }
  ]
}
```

Execute subagent function calls exactly like ordinary function calls, but ensure that your client does not drop the extra fields added for replay bookkeeping. The delegating model may also call your functions directly in the same turn; those items carry no `subagent_id`.

### Replaying to resume the worker

To preserve subagent state when returning the output of `function_call` items, you must send the conversation back:

1. The `openrouter:subagent` item, verbatim.
2. Every projected `function_call` item exactly as returned, with `subagent_id` and `subagent_items` intact, in the order you received them.
3. One `function_call_output` item per projected call, matched by `call_id`. (No change from non-subagent `function_call_output`.)
4. The same `tools` array. The `openrouter:subagent` entry that spawned the worker must still be present, and the order of `openrouter:subagent` entries must stay stable across requests — instance identity is positional.

```json lines theme={null}
{
  "model": "openai/gpt-5.2",
  "input": [
    { "type": "message", "role": "user", "content": "Where is order o_1?" },
    {
      "type": "openrouter:subagent",
      "id": "st_1",
      "status": "in_progress",
      "call_id": "call_root_1",
      "task_name": "lookup-order",
      "task_description": "Look up order o_1 and report its status."
    },
    {
      "id": "fc_1",
      "type": "function_call",
      "status": "completed",
      "call_id": "call_child_1",
      "name": "lookup_order",
      "arguments": "{\"order_id\":\"o_1\"}",
      "subagent_id": "call_root_1",
      "subagent_items": [
        {
          "type": "message",
          "role": "assistant",
          "content": [{ "type": "output_text", "text": "Looking up the order." }]
        },
        {
          "type": "function_call",
          "call_id": "call_child_1",
          "name": "lookup_order",
          "arguments": "{\"order_id\":\"o_1\"}"
        }
      ]
    },
    {
      "type": "function_call_output",
      "call_id": "call_child_1",
      "output": "{\"status\":\"shipped\"}"
    }
  ],
  "tools": [
    {
      "type": "function",
      "name": "lookup_order",
      "description": "Look up an order by its id.",
      "parameters": {
        "type": "object",
        "properties": { "order_id": { "type": "string" } },
        "required": ["order_id"]
      }
    },
    {
      "type": "function",
      "name": "update_order",
      "description": "Update an order's status by its id.",
      "parameters": {
        "type": "object",
        "properties": { "order_id": { "type": "string" }, "status": { "type": "string" } },
        "required": ["order_id", "status"]
      }
    },
    {
      "type": "openrouter:subagent",
      "parameters": {
        "model": "~anthropic/claude-haiku-latest",
        "inherited_function_names": ["lookup_order"]
      }
    }
  ]
}
```

OpenRouter detects the answered calls and resumes each suspended worker with your results injected. A worker that finishes produces a completed `openrouter:subagent` item — a **new** item with a fresh `id` but the same `call_id` — carrying its `outcome`, and the delegating model continues with the `outcome` text in its context:

```json lines theme={null}
{
  "output": [
    {
      "type": "openrouter:subagent",
      "id": "st_2",
      "status": "completed",
      "call_id": "call_root_1",
      "task_name": "lookup-order",
      "task_description": "Look up order o_1 and report its status.",
      "model": "anthropic/claude-haiku-5.5",
      "outcome": "Order o_1 has shipped."
    },
    {
      "type": "message",
      "role": "assistant",
      "status": "completed",
      "content": [{ "type": "output_text", "text": "Your order o_1 has shipped." }]
    }
  ]
}
```

A resumed worker may also call a function tool again, in which case it suspends again — the loop supports multiple rounds. A suspend-again response carries the round's **new** projected calls only; the suspended `openrouter:subagent` item is announced once and is not restated, so keep the copy you already have. On each subsequent replay, include the full history — the suspended item, every projected call from every round with its `function_call_output` — plus the new round's calls and outputs. While any worker is still working, the delegating model does not resume: it continues only once all of its workers have settled.

The cost of resumed worker runs folds into the usage reported on the request that resumed them, the same way live worker runs fold into their own request's usage.

### Streaming

With `stream: true`, the suspension surfaces through the standard Responses SSE events with one contract worth knowing:

* The suspended `openrouter:subagent` item's `response.output_item.added` event is deferred until the spawning tool call's arguments finish streaming, and arrives fully enriched — it already carries `call_id`, `task_name`, `task_description`, and `name`/`instance_name` when set — so you can rebuild your replay history from per-item events alone. A suspended item never receives a `response.output_item.done` event in that response.
* Each projected `function_call` item streams normally. Its `response.output_item.added` event carries `subagent_id` for early attribution; the potentially large `subagent_items` transcript rides only the `response.output_item.done` event and the final `response.completed` snapshot.
* On a later round, a worker that completes is announced as a new item (fresh `id`, same `call_id`) with a normal `response.output_item.added` and `response.output_item.done` pair.

### Failure handling

A failed worker never fails the response. In every failure case below, the affected worker degrades to a `status: "error"` tool result; the delegating model sees the error and continues:

* The suspension cannot be delivered (for example, the worker's transcript cannot be serialized for replay).
* A replayed worker cannot be resumed — its item is missing `call_id` or the task echo, its projected calls or their `subagent_items` were not replayed, a projected call has no `function_call_output`, or the spawning `openrouter:subagent` entry was dropped from `tools`.

One exception: a replayed `function_call` with an invalid or mismatched `subagent_id` (i.e. there is no corresponding `openrouter:subagent` item) is rejected with a `400`.

## Multiple subagents

To offer the model a roster of workers, include **multiple `openrouter:subagent` entries** in the `tools` array, one per worker. Give each its own `name` (plus its own `model`, `instructions`, and the other subagent fields); the model sees one distinct tool per named subagent and delegates to whichever fits the task:

```json lines theme={null}
{
  "tools": [
    {
      "type": "openrouter:subagent",
      "parameters": {
        "name": "summarizer",
        "model": "~anthropic/claude-haiku-latest",
        "instructions": "You condense long text into tight summaries."
      }
    },
    {
      "type": "openrouter:subagent",
      "parameters": {
        "name": "researcher",
        "model": "~openai/gpt-latest",
        "instructions": "You gather facts. Ground every claim in a source.",
        "tools": [{ "type": "openrouter:web_search" }]
      }
    }
  ]
}
```

Rules for subagent entries:

* **At most one entry may omit `name`** — it becomes the default subagent. Two or more unnamed entries fail the request with a `400`.
* **Names must be unique** across entries (compared after trimming whitespace). A duplicate name fails the request with a `400`.
* Names allow **letters, digits, spaces, underscores, and dashes** (e.g. `"Data Extractor"`), are trimmed, and must be 1–64 characters.

Each completed task echoes the `name` of the subagent that produced it, so you can tell workers apart in the response.

## Recursion protection

The subagent tool cannot invoke itself. Two guards enforce this:

* A self-reference check rejects a subagent entry inside the subagent's own `tools` array (and rejects the subagent tool name as the worker `model`).
* Each inner subagent call carries an `x-openrouter-subagent-depth` header; the subagent tool is stripped from any sub-call, so a worker can never re-enter the subagent.

Task executions are also capped per request to bound cost and latency.

## Related

* [Advisor server tool](https://openrouter.ai/docs/guides/features/server-tools/advisor.md). Consult a stronger model for guidance
* [Fusion server tool](https://openrouter.ai/docs/guides/features/server-tools/fusion.md). Multi-model deliberation
* [Web Search server tool](https://openrouter.ai/docs/guides/features/server-tools/web-search.md)
