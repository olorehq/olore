> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Add Human-in-the-Loop Controls to an Agent SDK Agent

> Add HITL to an existing Agent SDK agent so it can pause high-stakes tool calls for human input

> [!TIP]
>
> This recipe assumes you already have an agent built with the OpenRouter Agent SDK and `callModel`. If you are starting from scratch, first read the [callModel overview](https://openrouter.ai/docs/agent-sdk/call-model/overview.md) to learn about the Agent SDK.

**Goal:** Add human-in-the-loop (HITL) controls to an existing Agent SDK agent so one of its tools can auto-resolve routine decisions and pause for human input on high-stakes ones.

**Outcome:** Your existing `callModel` loop keeps running normally for routine tool calls, pauses with `status: 'awaiting_hitl'` for high-stakes calls, surfaces the pending call to your UI or API, and resumes after a human supplies the tool result.

You can give this page to your coding agent as the implementation brief. It should adapt the example names, storage, threshold, and user-review surface to your existing agent rather than scaffold a separate app.

## HITL vs requireApproval

Both pause for human input, but they solve different problems:

| | HITL (`onToolCalled`) | `requireApproval` |
| - | - | - |
| **When it pauses** | After your tool logic runs and returns `null` | Before tool execution when approval is required |
| **Decision type** | Caller supplies the tool's result | Caller approves or rejects execution |
| **Auto-resolve path** | Return a value from `onToolCalled` to skip human review | Use an approval predicate to skip approval |
| **Post-processing** | `onResponseReceived` transforms human input | Not available |
| **Best for** | Conditional escalation, tiered approval, enrichment | Consent gates before risky actions |

Use HITL when the decision depends on the input data. Use `requireApproval` when you need a human to approve whether a tool should execute. See the [Tool Approval & State](https://openrouter.ai/docs/agent-sdk/call-model/tool-approval-state.md) reference for details on approval flows and conditional approval predicates.

## Prerequisites

* An existing TypeScript agent that uses `@openrouter/agent` and `callModel`
* An **OpenRouter API key** configured in that agent's environment
* A `StateAccessor` or a place to persist conversation state
* A UI, CLI, queue, or API surface where a human can review pending calls

## 1. Choose the tool that needs HITL

Pick the tool in your existing agent where the result sometimes needs human judgment. In this example, the agent can approve small payments automatically but must pause before approving larger ones.

A HITL tool uses `onToolCalled` instead of `execute`. The hook receives the parsed input and decides per-call whether to return a tool result immediately or pause for a human.

Return a value to auto-resolve (like a regular tool). Return `null` to pause the loop — the conversation status moves to `'awaiting_hitl'` and the call surfaces to the caller.

```typescript expandable lines theme={null}
import { OpenRouter, tool } from '@openrouter/agent';
import type { ConversationState, StateAccessor } from '@openrouter/agent';
import { z } from 'zod';

const paymentInputSchema = z.object({
  amount: z.number(),
  recipient: z.string(),
});

const paymentDecisionSchema = z.object({
  approved: z.boolean(),
  reviewedAt: z.number().optional(),
});

const approvePayment = tool({
  name: 'approve_payment',
  description: 'Approve a payment, escalating large amounts to a human',
  inputSchema: paymentInputSchema,
  outputSchema: paymentDecisionSchema,
  onToolCalled: async (input) => {
    if (input.amount < 100) {
      return { approved: true };
    }
    // Pause for human review
    return null;
  },
});
```

`outputSchema` is required for HITL tools — it validates both the auto-resolved return value and any human-supplied response. See the [HITLTool type reference](https://openrouter.ai/docs/agent-sdk/call-model/api-reference.md#hitltool) for the full type signature.

## 2. Add post-processing with onResponseReceived

When a human supplies a response for a paused call, `onResponseReceived` fires before the result reaches the model. Use it to enrich, validate, or transform the raw human input.

Use `onResponseReceived` when the human review surface does not return the exact model-facing tool result you want. Common cases include:

* Adding audit metadata such as `reviewedAt`, `reviewerId`, or an internal approval ticket ID
* Normalizing UI form fields into the tool's `outputSchema`
* Validating the human response against your own policy before the model sees it
* Converting an approval, rejection, or edited value into the final tool result

Replace the tool definition from step 1 with this version:

```typescript lines theme={null}
const approvePayment = tool({
  name: 'approve_payment',
  description: 'Approve a payment, escalating large amounts to a human',
  inputSchema: paymentInputSchema,
  outputSchema: paymentDecisionSchema,
  onToolCalled: async (input) => {
    if (input.amount < 100) {
      return { approved: true };
    }
    return null;
  },
  onResponseReceived: async (raw) => {
    // Normalize and validate the human review result before it is sent back to
    // the model as the tool output. This is where you would add reviewer
    // metadata, enforce policy, or adapt UI fields to the tool's output schema.
    const decision = paymentDecisionSchema.parse(raw);

    return { ...decision, reviewedAt: Date.now() };
  },
});
```

If parsing or `onResponseReceived` throws, the error is surfaced to the model as `{ error: ..., originalOutput: ... }`. If omitted, the human-supplied value passes through directly after schema validation.

## 3. Add it to your callModel loop and detect a pause

Add the HITL tool to the `tools` array you already pass to `callModel`. HITL resume requires conversation state, so reuse your existing `StateAccessor` or add one if your agent is currently stateless.

The snippet below shows the minimum shape with in-memory state for clarity. In production, back the `StateAccessor` with your database, Redis, or whatever storage your agent already uses.

```typescript lines theme={null}
// Keep using your existing OpenRouter client if your agent already has one.
const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

// Use your existing tools array and StateAccessor if you already have them.
const tools = [approvePayment] satisfies readonly [typeof approvePayment];
const store = new Map<string, ConversationState<typeof tools>>();
const conversationId = 'conv-1';
const state: StateAccessor<typeof tools> = {
  load: async () => store.get(conversationId) ?? null,
  save: async (s) => { store.set(conversationId, s); },
};

const result = openrouter.callModel({
  model: '~openai/gpt-sol-latest',
  input: 'Pay $500 to Acme Corp for the May invoice',
  tools,
  state,
});
```

If you need a deterministic smoke test, temporarily force this tool call:

```typescript lines theme={null}
toolChoice: { type: 'function', name: 'approve_payment' },
```

In production, your agent instructions or user request can let the model decide when to call the tool.

When the model invokes the tool and `onToolCalled` returns `null`, the result pauses with `status: 'awaiting_hitl'`. Check the state after the call completes, then surface the pending call to the human review surface in your app.

```typescript lines theme={null}
const stateSnapshot = await result.getState();
const pendingCalls =
  stateSnapshot.status === 'awaiting_hitl'
    ? await result.getPendingToolCalls()
    : [];

for (const call of pendingCalls) {
  console.log(`Pending: ${call.name}(${JSON.stringify(call.arguments)})`);
  console.log(`Call ID: ${call.id}`);
}
```

**Illustrative output shape:**

```lines theme={null}
Pending: approve_payment({"amount":500,"recipient":"Acme Corp"})
Call ID: call_abc123
```

## 4. Resume with human input

Collect the human's decision and resume by calling `callModel` again with a `function_call_output` item for each paused call.

In the payment example, the human review surface could be as simple as:

* An admin page with **Approve** and **Reject** buttons for the pending payment
* A Slack or Discord message where an operator clicks an approval action
* A CLI prompt that asks an internal user to confirm the payment
* A queue worker that waits for a back-office system to write the approval result

In other HITL workflows, the human input might be more than a boolean. A support escalation tool might collect an edited reply, a deployment tool might collect a rollback plan, or a data-change tool might collect corrected field values. Whatever collects the input should return a value that matches the tool's `outputSchema`.

```typescript expandable lines theme={null}
// Simulate collecting a human decision
const humanDecision = { approved: true };
const firstPendingCall = pendingCalls[0];

if (!firstPendingCall) {
  throw new Error('No pending HITL call to resume');
}

const resumed = openrouter.callModel({
  model: '~openai/gpt-sol-latest',
  input: [
    {
      type: 'function_call_output',
      callId: firstPendingCall.id,
      output: JSON.stringify(humanDecision),
    },
  ],
  tools,
  state,
});

const text = await resumed.getText();
console.log(text);
```

The `onResponseReceived` hook fires on the human-supplied output before the model sees it. In this example, it adds a `reviewedAt` timestamp.

## Check your work

* Calls below the threshold auto-resolve without pausing the loop.
* Calls above the threshold pause with `status: 'awaiting_hitl'`.
* `pendingToolCalls` contains the paused call with its `id` and `arguments`.
* Resuming with a `function_call_output` item continues the conversation.
* `onResponseReceived` transforms the human response before the model sees it.
* Changing the threshold or adding new conditions in `onToolCalled` does not require changes to the resume flow.

## Next steps

* [Gate Agent Tool Calls with Jev](https://openrouter.ai/docs/cookbook/building-agents/gate-tool-calls-with-jev.md) replaces the hand-written threshold in `onToolCalled` with a decision model that returns `approve`, `block`, or `review` for each call, so only ambiguous calls reach the pause path built here.
