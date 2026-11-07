> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Delegate Routine Work to Cheaper Models

> Use an orchestrator for planning and a cheap subagent worker for each subtask

**Goal:** Add a task-delegation pattern where a large orchestrator model fans out routine subtasks to a smaller, cheaper worker model via the `openrouter:subagent` server tool.

**Outcome:** Your app sends complex tasks to an orchestrator that automatically delegates focused work (summarization, extraction, reformatting, drafting) to a cheap worker, cutting token cost on bulk generation while keeping planning quality high.

> [!TIP]
>
> Want your coding agent to add this workflow to your app? Copy this prompt.

> [!WARNING]
>
> Subagent is a beta server tool. Each delegated task runs a separate model call, so it adds cost and latency per delegation. This recipe keeps the worker model cheap and caps output tokens. Use returned `usage.cost` when present, or estimate spend from the worker model's current pricing before widening the delegation scope.

## Before you start

You need:

* Node.js 20 or newer
* An OpenRouter API key in `OPENROUTER_API_KEY`
* A workflow that already calls OpenRouter (Chat Completions, Responses, or Agent SDK)
* An orchestrator model that supports tool calling (e.g. `~anthropic/claude-opus-latest`). Check the model's capabilities on the [model page](https://openrouter.ai/models) before choosing.
* A cheaper worker model for subtasks (e.g. `~anthropic/claude-haiku-latest`). Browse [model pricing](https://openrouter.ai/models) to find the cheapest model that meets your quality bar.

Tilde-latest aliases like `~anthropic/claude-haiku-latest` auto-resolve to the newest version in that model family. Find available aliases on each model's page at [/models](https://openrouter.ai/models). You can also use exact slugs (e.g. `anthropic/claude-haiku-5.5`) when you need to pin a specific version.

If you're starting a new TypeScript agent, use the [Agent SDK `callModel` API](https://openrouter.ai/docs/sdks/typescript/call-model/overview) for the orchestrator loop. The samples below use the [Responses API](https://openrouter.ai/docs/api_reference/responses/overview.md) so the server-tool request shape is visible, but the delegation pattern works the same way inside an Agent SDK workflow.

Use these references for exact schemas:

* [Subagent server tool](https://openrouter.ai/docs/guides/features/server-tools/subagent.md)
* [Agent SDK `callModel` overview](https://openrouter.ai/docs/sdks/typescript/call-model/overview)
* [Create a response](https://openrouter.ai/docs/api/api-reference/responses/create-a-response.md)
* [TypeScript SDK Responses reference](https://openrouter.ai/docs/client-sdks/typescript/sdks/responses/README.md)

## What you're building

This recipe adds a task-delegation layer to a multi-step workflow.

The orchestrator model receives a complex request and decides how to break it apart. For each piece that doesn't need its full capability, it calls `openrouter:subagent` with a `task_name` and a `task_description`. The worker executes the task and returns its outcome. The orchestrator integrates all outcomes into the final response.

```text lines theme={null}
Complex request
  → orchestrator plans subtasks
  → routine subtask: orchestrator delegates via subagent
  → worker completes task, returns outcome
  → orchestrator integrates outcomes into final answer
```

The cost split: the orchestrator handles planning and integration (small token budget), while the worker handles bulk generation (cheap per token). A request with 3 delegated subtasks on a 50x cheaper worker model can cut total cost by 80%+ on the generation-heavy portions.

**Why server-side delegation instead of two separate API calls?** You could orchestrate client-side: call the big model, parse its plan, call the small model yourself, feed results back. Server-side subagent collapses that into a single request. The orchestrator invokes workers mid-generation without a round-trip to your server, keeps intermediate prompts private within OpenRouter's agentic loop, and can run multiple delegations in one generation pass. Your app makes one call and gets the integrated answer back.

## 1. Add the subagent tool to your request

The minimal setup: one `openrouter:subagent` entry in the `tools` array with the worker model pinned in `parameters`.

```js title="JavaScript" expandable lines theme={null}
const buildDelegationRequest = ({ task, orchestratorModel, workerModel }) => ({
  model: orchestratorModel,
  instructions:
    "You are a senior orchestrator. Break complex tasks into focused subtasks. " +
    "Delegate routine work (summarization, extraction, reformatting, drafting) " +
    "to the subagent. Include all context the worker needs in task_description — " +
    "it cannot see this conversation. Keep planning and integration for yourself.",
  input: task,
  tools: [
    {
      type: "openrouter:subagent",
      parameters: {
        model: workerModel,
      },
    },
  ],
  tool_choice: "auto",
});

const requestBody = buildDelegationRequest({
  task: "Analyze this API changelog. Summarize each section, list all breaking changes, and draft a migration guide.",
  orchestratorModel: "~anthropic/claude-opus-latest",
  workerModel: "~anthropic/claude-haiku-latest",
});
```

```python title="Python" expandable lines theme={null}
import os
import requests

def build_delegation_request(task, orchestrator_model, worker_model):
    return {
        "model": orchestrator_model,
        "instructions": (
            "You are a senior orchestrator. Break complex tasks into focused subtasks. "
            "Delegate routine work (summarization, extraction, reformatting, drafting) "
            "to the subagent. Include all context the worker needs in task_description "
            "- it cannot see this conversation. Keep planning and integration for yourself."
        ),
        "input": task,
        "tools": [
            {
                "type": "openrouter:subagent",
                "parameters": {"model": worker_model},
            }
        ],
        "tool_choice": "auto",
    }

request_body = build_delegation_request(
    task="Analyze this API changelog. Summarize each section, list all breaking changes, and draft a migration guide.",
    orchestrator_model="~anthropic/claude-opus-latest",
    worker_model="~anthropic/claude-haiku-latest",
)
```

Wire the request body into your app's existing request path. Here's the shape of the call and response parsing:

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from "@openrouter/sdk";

const client = new OpenRouter({ apiKey: process.env.OPENROUTER_API_KEY });

// The SDK uses camelCase field names and drops unknown keys, so map the
// fetch-shaped body explicitly instead of spreading it.
const result = await client.responses.send({
  responsesRequest: {
    model: requestBody.model,
    instructions: requestBody.instructions,
    input: requestBody.input,
    tools: requestBody.tools,
    toolChoice: 'auto',
  },
});

if (!("output" in result)) {
  throw new Error("Expected a non-streaming response");
}

const message = [...result.output].reverse().find((item) => item.type === "message");
const answer = message?.content.find((part) => part.type === "output_text")?.text;
```

```js title="JavaScript (fetch)" lines theme={null}
const sendDelegationRequest = async (body) => {
  const response = await fetch("https://openrouter.ai/api/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`OpenRouter ${response.status}: ${text}`);
  }

  return response.json();
};

const result = await sendDelegationRequest(requestBody);
const message = [...result.output].reverse().find((item) => item.type === "message");
const answer = message?.content.find((part) => part.type === "output_text")?.text;
```

```python title="Python" lines theme={null}
def send_delegation_request(body):
    response = requests.post(
        "https://openrouter.ai/api/v1/responses",
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {os.environ['OPENROUTER_API_KEY']}",
        },
        json=body,
    )
    response.raise_for_status()
    return response.json()

result = send_delegation_request(request_body)
message = next(item for item in reversed(result["output"]) if item["type"] == "message")
answer = next(part["text"] for part in message["content"] if part["type"] == "output_text")
```

```bash title="cURL" lines theme={null}
curl -s https://openrouter.ai/api/v1/responses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -d '{
    "model": "~anthropic/claude-opus-latest",
    "instructions": "You are a senior orchestrator. Delegate routine subtasks to the subagent.",
    "input": "Summarize each section of this changelog and list breaking changes.",
    "tools": [
      {
        "type": "openrouter:subagent",
        "parameters": {"model": "~anthropic/claude-haiku-latest"}
      }
    ],
    "tool_choice": "auto"
  }'
```

The response follows the standard [Responses API format](https://openrouter.ai/docs/api_reference/responses/overview.md). Server tools resolve server-side: the orchestrator's subagent calls happen inside OpenRouter's agentic loop, and you don't execute them. The response `output` records each delegation as an `openrouter:subagent` item, followed by a `message` item whose `output_text` part holds the final integrated answer. The `usage` object reflects the combined token spend per [Server tools: Usage Tracking](https://openrouter.ai/docs/guides/features/server-tools.md#usage-tracking).

The orchestrator decides whether and when to delegate. Each delegation passes two arguments:

* `task_name`: a short label (e.g. `summarize-breaking-changes`)
* `task_description`: everything the worker needs, including all context, inputs, and the expected output format

The worker sees only `task_description`. It has no access to the parent conversation, so the orchestrator must be explicit about what it wants back.

## 2. Read the tool result

On success, the subagent returns a JSON result with the worker's output:

```json lines theme={null}
{
  "status": "ok",
  "model": "anthropic/claude-haiku-5.5",
  "task_name": "summarize-breaking-changes",
  "outcome": "Breaking changes in v3.0:\n1. Removed deprecated /v1/legacy endpoint..."
}
```

On failure:

```json lines theme={null}
{
  "status": "error",
  "task_name": "summarize-breaking-changes",
  "error": "Subagent call failed: ..."
}
```

In the response `output`, each delegation appears as an `openrouter:subagent` item with the worker's model, the task, and its outcome:

```json lines theme={null}
{
  "type": "openrouter:subagent",
  "id": "st_tmp_dgy29rn5qvk",
  "status": "completed",
  "model": "anthropic/claude-haiku-5.5",
  "task_name": "summarize-breaking-changes",
  "task_description": "Summarize the breaking changes in this changelog...",
  "outcome": "Breaking changes in v3.0:\n1. Removed deprecated /v1/legacy endpoint...",
  "call_id": "call_xvWTB916fUfn6eNGQfvbvhod"
}
```

The orchestrator receives the result as a tool response and continues generating. It can delegate more tasks, integrate outcomes it already has, or finish the response. Subagent calls are capped per request (see the [reference page](https://openrouter.ai/docs/guides/features/server-tools/subagent.md) for current limits).

## 3. Give the worker its own tools

When a subtask needs external data, pass server tools to the worker. The worker runs as a mini agent over those tools before producing its outcome.

```js expandable lines theme={null}
const requestBody = {
  model: "~anthropic/claude-opus-latest",
  input: "Research competitors mentioned in our Q2 report and draft a competitive analysis.",
  tools: [
    {
      type: "openrouter:subagent",
      parameters: {
        model: "~anthropic/claude-haiku-latest",
        instructions:
          "You are a research assistant. Use web search to find current data. " +
          "Return structured findings with sources.",
        tools: [
          { type: "openrouter:web_search" },
          { type: "openrouter:web_fetch" },
        ],
      },
    },
  ],
};
```

The worker's tool use happens inside the subagent call. Only its final text is returned to the orchestrator. The orchestrator never sees the worker's intermediate tool calls or search results, just the finished outcome.

Two constraints on nested tools:

* Only OpenRouter server tools work (e.g. `openrouter:web_search`, `openrouter:web_fetch`, `openrouter:datetime`). Function tools placed in the nested `tools` array are rejected with a `400`. On the Responses API, the subagent can additionally inherit top-level function tools (experimental). See [Inheriting Client Function Tools](https://openrouter.ai/docs/guides/features/server-tools/subagent.md#inheriting-client-function-tools).
* The subagent tool can't list itself. Recursion guards prevent the worker from re-entering the subagent.

## 4. Tune the worker for cost and quality

The subagent's `parameters` let you control how the worker generates. Use them to keep cost predictable.

```js lines theme={null}
const tools = [
  {
    type: "openrouter:subagent",
    parameters: {
      model: "~anthropic/claude-haiku-latest",
      instructions:
        "Complete the task exactly as described. Be concise and structured.",
      max_completion_tokens: 1024,
      temperature: 0.2,
      reasoning: { effort: "low" },
    },
  },
];
```

| Parameter | What it controls |
| - | - |
| `model` | The worker model. Pick the cheapest model that can handle the subtask quality you need. |
| `max_completion_tokens` | Output token ceiling (including reasoning). Prevents runaway generation on open-ended tasks. |
| `temperature` | Lower values for deterministic extraction, higher for creative drafting. Range 0 to 2. |
| `reasoning` | `effort` controls reasoning depth. Set to `"low"` for fast, cheap tasks. `max_tokens` sets the upper bound for the worker's reasoning tokens. |
| `instructions` | System prompt for the worker. Shape its output format and behavior. |
| `max_tool_calls` | Range 1 to 25. Ceiling on the worker's own tool-calling loop. |

The full parameter reference is at [Subagent server tool](https://openrouter.ai/docs/guides/features/server-tools/subagent.md).

> [!NOTE]
>
> Subagent works with both non-streaming and streaming requests. With streaming (`stream: true`), the server sends SSE comment lines as heartbeats while workers execute. Text deltas resume once the orchestrator continues generating. The `response.completed` event includes the aggregated `usage` object. See [Server tools overview](https://openrouter.ai/docs/guides/features/server-tools.md) for how server tool usage appears in the response.

With `stream: true`, expect this pattern in the SSE stream:

```text lines theme={null}
data: {"type":"response.output_item.added","item":{"type":"openrouter:subagent",...}}
:                            ← heartbeat comments during worker execution
data: {"type":"response.output_item.done","item":{"type":"openrouter:subagent","outcome":"...",...}}
data: {"type":"response.output_text.delta","delta":"Here"}
data: {"type":"response.output_text.delta","delta":"'s the summary:"}
...text deltas...
data: {"type":"response.completed","response":{...,"usage":{...}}}  ← aggregated usage
data: [DONE]
```

Most SSE client libraries ignore comment lines (lines starting with `:`) automatically. Here's a minimal consumer:

```js expandable lines theme={null}
const response = await fetch("https://openrouter.ai/api/v1/responses", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    ...buildDelegationRequest({
      task: "Summarize this document...",
      orchestratorModel: "~anthropic/claude-sonnet-latest",
      workerModel: "~anthropic/claude-haiku-latest",
    }),
    stream: true,
  }),
});

const reader = response.body.getReader();
const decoder = new TextDecoder();
let buffer = "";

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  buffer += decoder.decode(value, { stream: true });

  const lines = buffer.split("\n");
  buffer = lines.pop(); // keep incomplete line in buffer

  let streamDone = false;
  for (const line of lines) {
    if (line.startsWith(":")) continue; // heartbeat comment
    if (!line.startsWith("data: ")) continue;
    const payload = line.slice(6);
    if (payload === "[DONE]") { streamDone = true; break; }
    let event;
    try { event = JSON.parse(payload); } catch { continue; }
    if (event.type === "response.failed") {
      throw new Error(event.response.error?.message ?? "Delegation failed");
    }
    if (event.type === "response.incomplete") {
      throw new Error(
        `Delegation incomplete: ${event.response.incomplete_details?.reason ?? "unknown reason"}`,
      );
    }
    if (event.type === "error") throw new Error(event.message);
    if (event.type === "response.output_text.delta") process.stdout.write(event.delta);
  }
  if (streamDone) break;
}
```

## 5. Log delegation routing, not task content

Add telemetry where your app already records model calls. Log the routing decision and cost, not the content.

Log:

* `orchestrator_model`
* `worker_model`
* `did_enable_delegation` (whether you configured the subagent tool on this request)
* `status` (and `incomplete_details.reason` when the response is incomplete)
* `usage.input_tokens`, `usage.output_tokens`, `usage.total_tokens`, and `usage.cost` when returned
* route or feature name, such as `delegated_analysis`

Do not log:

* API keys
* cookies
* full task descriptions
* full worker outcomes
* user content (unless your product already has an explicit retention policy)

The `usage` object in the response reflects the combined token spend of the orchestrator plus all worker calls, per [Server tools: Usage Tracking](https://openrouter.ai/docs/guides/features/server-tools.md#usage-tracking). You don't need to track inner costs separately.

```js lines theme={null}
const logDelegation = (response, context) => {
  const usage = response.usage ?? {};
  return {
    orchestrator_model: context.orchestratorModel,
    worker_model: context.workerModel,
    did_enable_delegation: true,
    status: response.status,
    incomplete_reason: response.incomplete_details?.reason,
    usage_input_tokens: usage.input_tokens,
    usage_output_tokens: usage.output_tokens,
    usage_total_tokens: usage.total_tokens,
    usage_cost: usage.cost,
    route: "delegated_analysis",
  };
};
```

## Next steps

* Read the [Subagent reference](https://openrouter.ai/docs/guides/features/server-tools/subagent.md) for exact parameters, recursion guards, worker tool constraints, and invocation caps.
* Pair subagent with [Advisor](https://openrouter.ai/docs/cookbook/building-agents/advisor-server-tool.md) for a two-tier pattern: cheap worker for routine tasks, strong advisor for uncertain decisions.
* Give the worker [Web Search](https://openrouter.ai/docs/guides/features/server-tools/web-search.md) when subtasks need current data.
* Add [Response Caching](https://openrouter.ai/docs/guides/features/response-caching.md) for repeated orchestrator prefixes across similar tasks.
* Use [Fusion](https://openrouter.ai/docs/guides/features/server-tools/fusion.md) when subtasks need multi-model deliberation instead of single-worker execution.
* Browse the [Model list](https://openrouter.ai/models) to compare worker model pricing and find the cheapest model that meets your subtask quality bar.
* Add [Structured Outputs](https://openrouter.ai/docs/structured-outputs.md) to the orchestrator request when you need the final answer in a specific JSON schema.
