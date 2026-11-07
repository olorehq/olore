> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Tool Approval & State Persistence

> Add human-in-the-loop approval gates for sensitive tools and persist conversation state across callModel invocations.

## Why Approval Gates?

Some tools — sending emails, making payments, deleting records — should not auto-execute without human review. The SDK provides two mechanisms to control this:

* **`requireApproval`** — pause execution when the model calls sensitive tools, giving users a chance to approve or reject each call
* **`StateAccessor`** — persist conversation state between `callModel` invocations so approval decisions, message history, and tool results survive across runs

Together, these enable human-in-the-loop workflows where a user reviews tool calls before they execute, even across separate request/response cycles (e.g., in a web application).

## Tool-Level Approval

Add `requireApproval` directly on a tool definition. It accepts a boolean or a function:

### Always Require Approval

```typescript lines theme={null}
import { tool } from '@openrouter/agent';
import { z } from 'zod';

const sendEmailTool = tool({
  name: 'send_email',
  description: 'Send an email to a recipient',
  inputSchema: z.object({
    to: z.string().email(),
    subject: z.string(),
    body: z.string(),
  }),
  outputSchema: z.object({ sent: z.boolean() }),
  requireApproval: true,
  execute: async (params) => {
    await sendEmail(params);
    return { sent: true };
  },
});
```

### Conditional Approval

Pass a function to require approval only in certain cases:

```typescript lines theme={null}
const deleteRecordTool = tool({
  name: 'delete_record',
  description: 'Delete a record from the database',
  inputSchema: z.object({
    id: z.string(),
    environment: z.enum(['staging', 'production']),
  }),
  outputSchema: z.object({ deleted: z.boolean() }),
  requireApproval: (params, context) => {
    // Only require approval for production deletions
    return params.environment === 'production';
  },
  execute: async (params) => {
    await deleteRecord(params.id);
    return { deleted: true };
  },
});
```

The function receives the parsed tool arguments and a `TurnContext`, and can return a boolean or `Promise<boolean>`.

## Call-Level Approval

Override tool-level settings with a `requireApproval` callback on `callModel` itself:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-4o',
  input: 'Send an email and search for documents',
  tools: [sendEmailTool, searchTool],
  state: myStateAccessor,
  requireApproval: (toolCall, context) => {
    // Require approval for any tool that modifies data
    return toolCall.name === 'send_email' || toolCall.name === 'delete_record';
  },
});
```

The call-level callback takes priority over tool-level `requireApproval` settings when both are present.

## How the Approval Flow Works

When tools with approval gates are called by the model, the SDK follows this flow:

1. **Model generates tool calls** — the model decides which tools to invoke
2. **SDK partitions tool calls** — each call is checked against `requireApproval` and split into two groups: those requiring approval and those that can auto-execute
3. **Auto-execute tools run immediately** — tools that don't need approval execute in parallel as normal
4. **State saves with pending approvals** — the conversation state updates to `status: 'awaiting_approval'` with the pending tool calls stored
5. **Control returns to the caller** — check `result.requiresApproval()` and inspect pending calls with `result.getPendingToolCalls()`
6. **Resume with decisions** — call `callModel` again with the same `state`, passing `approveToolCalls` and/or `rejectToolCalls` arrays of tool call IDs
7. **Approved tools execute** — the SDK runs approved tools and sends results to the model. Rejected tools send an error message to the model explaining the rejection
8. **Conversation continues** — the model processes tool results and generates the next response

## StateAccessor Interface

The `StateAccessor` interface enables any storage backend:

```typescript lines theme={null}
import type { StateAccessor, ConversationState } from '@openrouter/agent';

interface StateAccessor<TTools> {
  /** Load the current conversation state, or null if none exists */
  load: () => Promise<ConversationState<TTools> | null>;
  /** Save the conversation state */
  save: (state: ConversationState<TTools>) => Promise<void>;
}
```

### In-Memory Implementation

```typescript lines theme={null}
const conversations = new Map<string, ConversationState>();

function createStateAccessor(conversationId: string): StateAccessor {
  return {
    load: async () => conversations.get(conversationId) ?? null,
    save: async (state) => {
      conversations.set(conversationId, state);
    },
  };
}
```

For production use, implement `StateAccessor` with a persistent backend like Redis, a database, or file storage to survive process restarts.

## ConversationState

The state object tracks everything needed to resume a conversation:

| Field | Type | Description |
| - | - | - |
| `version` | `number?` | Serialization-contract version for this state blob. Absence means version `1`; `createInitialState` stamps `1` on new states. See [Serialization & Versioning](#serialization--versioning) |
| `id` | `string` | Unique conversation identifier |
| `messages` | `OpenResponsesInputUnion` | Full message history |
| `previousResponseId` | `string?` | Previous response ID for server-side chaining |
| `pendingToolCalls` | `ParsedToolCall[]?` | Tool calls awaiting human input (approval/rejection, HITL output, or unresolved manual `execute: false` calls) |
| `unsentToolResults` | `UnsentToolResult[]?` | Executed results not yet sent to model |
| `partialResponse` | `PartialResponse?` | Data captured during interruption |
| `interruptedBy` | `string?` | Signal from a new request that interrupted this conversation |
| `status` | `ConversationStatus` | Current state of the conversation |
| `createdAt` | `number` | Creation timestamp (Unix ms) |
| `updatedAt` | `number` | Last update timestamp (Unix ms) |

### Status Values

| Status | Meaning |
| - | - |
| `'in_progress'` | Conversation is actively processing |
| `'awaiting_approval'` | Paused, waiting for tool call approval/rejection |
| `'awaiting_hitl'` | Paused by a [HITL tool](https://openrouter.ai/docs/agent-sdk/call-model/tools.md#human-in-the-loop-hitl-tools) whose `onToolCalled` hook returned `null`; resume by supplying a `function_call_output` for each paused call |
| `'awaiting_client_tools'` | Paused because one or more [manual tools](https://openrouter.ai/docs/agent-sdk/call-model/tools.md#manual-tools) (`execute: false` / no execute fn) were called but not resolved. The unresolved calls are stored in `pendingToolCalls`. Resume by calling `callModel` again with new `input`; this clears the stale pendings and continues as a normal turn. Unlike `awaiting_approval` and `awaiting_hitl`, manual tools are not resumed via call IDs |
| `'awaiting_async_tools'` | Paused by a [deferred tool](https://openrouter.ai/docs/agent-sdk/call-model/async-tools.md) whose `run` called `ctx.defer(taskId)`. Any process can settle the task via `.resolve()` / `.fail()` / `.cancel()` (or `resumeToolResults`). To continue the conversation immediately, pass `run` when settling; omitting `run` only records the result and delivers it on the next `callModel({ state })` call. See [Async Tools](https://openrouter.ai/docs/agent-sdk/call-model/async-tools.md) |
| `'complete'` | Conversation finished normally |
| `'interrupted'` | Conversation was interrupted and can be resumed |

## Serialization & Versioning

`ConversationState` carries an optional `version` field that identifies the serialization contract of the blob. `createInitialState` stamps `version: 1`; older states without the field are treated as version `1`.

`StateAccessor.load` / `save` themselves are unchanged. Most callers still round-trip through `JSON.stringify` / `JSON.parse`. Use the opt-in helpers when you want typed errors and a migration hook for future serialization changes:

```typescript lines theme={null}
import {
  serializeConversationState,
  deserializeConversationState,
  UnsupportedStateVersionError,
  InvalidStateError,
} from '@openrouter/agent';
// Also available at the subpath:
// import { ... } from '@openrouter/agent/conversation-state';

const state: StateAccessor = {
  load: async () => {
    const blob = await redis.get(`conv:${id}`);
    if (!blob) return null;
    try {
      return deserializeConversationState(blob);
    } catch (err) {
      if (err instanceof UnsupportedStateVersionError) {
        // err.found and err.supported let you decide: reset, migrate, or fail
        console.error(`State version ${err.found} not in ${err.supported.join(', ')}`);
      }
      if (err instanceof InvalidStateError) {
        // Malformed JSON or missing required fields
      }
      throw err;
    }
  },
  save: async (s) => {
    await redis.set(`conv:${id}`, serializeConversationState(s));
  },
};
```

Compatibility policy:

* Treat the serialized JSON as **opaque**. Do not introspect item shapes across releases.
* Additive field changes are allowed within a major version.
* On version bumps, any migration work runs inside `deserializeConversationState`. Consumers using the helpers get forward-compat automatically.

Errors:

* `UnsupportedStateVersionError`: the blob's `version` isn't in this SDK build's supported set. Exposes `{ found, supported }` for logging or migration routing.
* `InvalidStateError`: the payload is malformed JSON or missing required fields (`id`, `messages`, `status`, `createdAt`, `updatedAt`).

## Complete Example

Here is an end-to-end example showing approval gates with state persistence:

```typescript expandable lines theme={null}
import { OpenRouter, tool } from '@openrouter/agent';
import type { ConversationState, StateAccessor } from '@openrouter/agent';
import { z } from 'zod';

// 1. Define a tool with approval required
const sendEmailTool = tool({
  name: 'send_email',
  description: 'Send an email',
  inputSchema: z.object({
    to: z.string().email(),
    subject: z.string(),
    body: z.string(),
  }),
  outputSchema: z.object({ sent: z.boolean(), messageId: z.string() }),
  requireApproval: true,
  execute: async (params) => {
    const result = await sendEmail(params);
    return { sent: true, messageId: result.id };
  },
});

// 2. Create a state accessor (in-memory for this example)
const store = new Map<string, ConversationState>();
const conversationId = 'conv-123';

const state: StateAccessor = {
  load: async () => store.get(conversationId) ?? null,
  save: async (s) => { store.set(conversationId, s); },
};

const openrouter = new OpenRouter({ apiKey: process.env.OPENROUTER_API_KEY });

// 3. First callModel — model will try to call the tool
const result = openrouter.callModel({
  model: 'openai/gpt-4o',
  input: 'Send a welcome email to alice@example.com',
  tools: [sendEmailTool] as const,
  state,
});

// 4. Check if approval is needed
if (await result.requiresApproval()) {
  const pending = await result.getPendingToolCalls();

  for (const call of pending) {
    console.log(`Tool: ${call.name}`);
    console.log(`To: ${call.arguments.to}`);
    console.log(`Subject: ${call.arguments.subject}`);
    console.log(`ID: ${call.id}`);
  }

  // 5. Present to user for decision, then resume
  const approved = await askUserForApproval(pending);

  const approvedIds = approved.filter(a => a.decision === 'approve').map(a => a.id);
  const rejectedIds = approved.filter(a => a.decision === 'reject').map(a => a.id);

  // 6. Second callModel — resume with approval decisions
  const resumed = openrouter.callModel({
    model: 'openai/gpt-4o',
    input: [], // No new user input needed for resumption
    tools: [sendEmailTool] as const,
    state,
    approveToolCalls: approvedIds,
    rejectToolCalls: rejectedIds,
  });

  // 7. Get the final response
  const text = await resumed.getText();
  console.log(text);
  // "I've sent the welcome email to alice@example.com."
} else {
  // No approval needed — tool ran automatically
  const text = await result.getText();
  console.log(text);
}
```

## Resumption Patterns

### Resuming from Approval

When the state has `status: 'awaiting_approval'`, pass `approveToolCalls` and/or `rejectToolCalls` to resume:

```typescript lines theme={null}
// Load existing state
const loaded = await state.load();

if (loaded?.status === 'awaiting_approval') {
  const pending = loaded.pendingToolCalls ?? [];

  // Approve all pending calls
  const result = openrouter.callModel({
    model: 'openai/gpt-4o',
    input: [],
    tools: [sendEmailTool] as const,
    state,
    approveToolCalls: pending.map(c => c.id),
  });

  const text = await result.getText();
}
```

### Resuming from Interruption

If a conversation was interrupted (`status: 'interrupted'`), calling `callModel` with the same state resumes automatically. The SDK clears the interruption flag and continues where it left off:

```typescript lines theme={null}
const loaded = await state.load();

if (loaded?.status === 'interrupted') {
  // Resume — the SDK picks up from the interruption point
  const result = openrouter.callModel({
    model: 'openai/gpt-4o',
    input: 'Continue where you left off',
    tools: myTools,
    state,
  });

  const text = await result.getText();
}
```

### Multi-Run Conversations

Messages accumulate automatically across `callModel` runs that share the same `StateAccessor`. Each run appends its input and response to the state's message history:

```typescript expandable lines theme={null}
const state: StateAccessor = createStateAccessor('conv-456');

// Turn 1
const r1 = openrouter.callModel({
  model: 'openai/gpt-4o',
  input: 'What is the weather in Tokyo?',
  tools: [weatherTool] as const,
  state,
});
console.log(await r1.getText());
// "The weather in Tokyo is 22°C and sunny."

// Turn 2 — state has full history from turn 1
const r2 = openrouter.callModel({
  model: 'openai/gpt-4o',
  input: 'And in Paris?',
  tools: [weatherTool] as const,
  state,
});
console.log(await r2.getText());
// "The weather in Paris is 15°C and cloudy."

// Turn 3 — state has history from both prior turns
const r3 = openrouter.callModel({
  model: 'openai/gpt-4o',
  input: 'Which city is warmer?',
  tools: [weatherTool] as const,
  state,
});
console.log(await r3.getText());
// "Tokyo is warmer at 22°C compared to Paris at 15°C."
```

## Next Steps

* **[Tools](https://openrouter.ai/docs/agent-sdk/call-model/tools.md)** - Tool definitions and the `tool()` helper
* **[Stop Conditions](https://openrouter.ai/docs/agent-sdk/call-model/stop-conditions.md)** - Control when tool execution loops terminate
* **[Dynamic Parameters](https://openrouter.ai/docs/agent-sdk/call-model/dynamic-parameters.md)** - Adjust parameters between turns
* **[Examples](https://openrouter.ai/docs/agent-sdk/call-model/examples/weather-tool.md)** - Complete tool implementations
* **[Gate Agent Tool Calls with Jev](https://openrouter.ai/docs/cookbook/building-agents/gate-tool-calls-with-jev.md)** - Decide `approve`, `block`, or `review` per call with a decision model instead of a static `requireApproval` flag
