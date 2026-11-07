> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Async Tools

> Run long-running tools in the background or defer them to external systems, while the model keeps working, checks progress, steers, and receives results automatically.

## Overview

A synchronous tool stops the conversation until it returns. That's fine for a weather lookup. It's a problem when the tool renders a video, runs a data pipeline, or waits days for a legal review.

Async tools let the model keep working while the tool finishes:

* The model gets a pending placeholder for the call right away and moves on.
* When the work finishes, the SDK injects the result as a `tool_task_result` message at the next turn boundary. External work resolves whenever another process reports it.
* While a task runs, the model can check progress, read logs, steer, or cancel it through one built-in `task` tool.

## Lifecycles

Every tool is written the same way: a `run` handler (an async function or async generator) plus a `lifecycle` that controls how it executes.

| Lifecycle | Behavior |
| - | - |
| `'sync'` (default) | The round waits for it, exactly like `execute` |
| `'background'` | Runs in the same process without blocking; the result arrives when it finishes |
| `'deferred'` | Hands the call to an external system; the run pauses until some process completes it |

```typescript expandable lines theme={null}
import { OpenRouter, tool } from '@openrouter/agent';
import { z } from 'zod';

const renderVideo = tool({
  name: 'render_video',
  description: 'Render a video from a script. Long-running.',
  lifecycle: 'background',
  inputSchema: z.object({ script: z.string() }),
  outputSchema: z.object({ url: z.string(), durationMs: z.number() }),
  ack: 'Rendering started.',        // model-facing note in the placeholder
  timeoutMs: 300_000,               // whole-task deadline; ctx.signal aborts on breach
  run: async function* ({ script }, ctx) {
    const job = await renderer.start(script, { signal: ctx?.signal });
    ctx?.onMessage((msg) => job.reprioritize(msg));   // steering opt-in
    for await (const pct of job.progress()) {
      yield { pct };                // yields become the task's log
    }
    return job.result();            // return value = result, validated against outputSchema
  },
});
```

If `run` is a generator, each `yield` becomes a log entry. Logs feed check-ins, `tool.preliminary_result` events, and transcripts (optionally validated by `eventSchema`). The `return` value is the tool's result.

If `run` is a plain async function, log with `ctx.log()` instead.

> [!NOTE]
>
> `lifecycle: 'background'` and `'deferred'` require an `outputSchema`. The result arrives later, so the SDK must be able to validate it without the original call.

## Background Tools

A background tool's `run` executes in the same process, but the round doesn't wait for it:

1. If the work finishes within the grace window (`graceMs`, default 250ms), it behaves like a plain sync call and no placeholder is created.
2. Otherwise the model receives a pending placeholder (including a `taskId`) and the loop continues.
3. When the task finishes, the SDK injects the result as a `tool_task_result` message before the next model turn.

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Render the intro video, and draft the announcement post meanwhile.',
  tools: [renderVideo, draftPost],
});

// The model drafts the post WHILE the render runs, then incorporates
// the finished video URL when the task settles.
console.log(await result.getText());
```

### When the Run Would End First

If the model finishes its answer while background work is still in flight, `asyncTools.onRunEnd` decides what happens:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Kick off the render.',
  tools: [renderVideo],
  asyncTools: {
    onRunEnd: 'drain',       // default: wait for tasks, run extra no-tool turns
    drainTimeoutMs: 30_000,  // cap the wait
    maxDrainTurns: 2,        // cap the extra turns
  },
});
```

* `'drain'` (default): wait for running tasks and give the model extra no-tool turns so the final answer includes the results.
* `'detach'`: return immediately. Tasks keep running, and results are dropped (persisted as `orphaned` when a `StateAccessor` is configured).
* `'cancel'`: abort in-flight tasks and finish.

## Deferred Tools

Deferred tools hand work to an external system, such as a human review queue, a batch pipeline, or a webhook-driven service. The `run` handler registers the work and returns `ctx.defer(taskId)`. The conversation pauses (`status: 'awaiting_async_tools'`) until any process completes the task.

```typescript lines theme={null}
const legalReview = tool({
  name: 'request_legal_review',
  description: 'Send a contract for legal review. Takes days.',
  lifecycle: 'deferred',
  inputSchema: z.object({ contractId: z.string() }),
  outputSchema: z.object({ approved: z.boolean(), notes: z.string().optional() }),
  run: async ({ contractId }, ctx) => {
    // Typed fast path: returning a plain value resolves immediately.
    const cached = await legal.cachedVerdict(contractId);
    if (cached) return cached;

    const ticket = await legal.open(contractId, {
      conversationId: ctx?.conversationId,   // hand to the webhook for resume
    });
    return ctx!.defer(ticket.id, {
      pollAfterMs: 60_000,
      ack: `Ticket ${ticket.id} opened.`,
    });
  },
});
```

Deferred tools require a `StateAccessor` (see [Tool Approval & State](https://openrouter.ai/docs/agent-sdk/call-model/tool-approval-state.md)) so the paused conversation can be found and resumed from another process.

### Typed Completion from Any Process

Completion methods live on the tool, so the output is typechecked against its `outputSchema`:

```typescript lines theme={null}
// webhook handler, hours later, in a different process
await legalReview.resolve(client, {
  state: makeAccessor(conversationId),
  taskId: ticketId,
  output: { approved: true },          // ← typechecked against outputSchema
  run: { model: 'openai/gpt-5-nano' }, // continue the conversation immediately
});
```

* `legalReview.resolve(...)`: deliver a successful result.
* `legalReview.fail(...)`: deliver an error.
* `legalReview.cancel(...)`: cancel the task.
* Omit `run` to record the result only; it's delivered on the next `callModel({ state })`.
* A task settles once. A replayed webhook throws `ToolTaskAlreadySettledError` instead of delivering the result twice.

The lower-level `resumeToolResults(client, { state, results, ... })` covers batches and tools you don't have a reference to.

> [!WARNING]
>
> `.resolve()` injects a value the model treats as a tool result. Authenticate the webhook before calling it; the SDK can't do that for you. Outputs are validated against `outputSchema` at runtime as well as compile time.

## Checking On Running Tasks

When any long-running tool is registered, the SDK adds one built-in `task` tool to the request. It's a single fixed definition no matter how many async tools you register, so your tools' schemas stay untouched and the prompt cost stays flat.

The pending placeholder tells the model how to use it:

```typescript lines theme={null}
task({ taskId: "task_7f3" })                          // status: state, elapsed, last log
task({ taskId, view: "logs", tail: 5 })               // recent progress entries
task({ taskId, view: "transcript" })                  // full detail (agents: child conversation)
task({ taskId, action: "steer", message: "..." })     // send guidance to the running task
task({ taskId, action: "result" })                    // final result if settled, else status
task({ taskId, action: "cancel", reason: "..." })     // stop the task
```

The SDK intercepts these calls and routes each one to the tool that owns the task. The model sees one tool; each of your tools decides how to answer.

### Custom Check Handlers

Add a `check` config to control what the model sees when it checks on your tool:

```typescript expandable lines theme={null}
const renderVideo = tool({
  name: 'render_video',
  lifecycle: 'background',
  // ...schemas and run as above...
  check: {
    // Validates the model's task({ params }) payload
    schema: z.object({ includeFrames: z.boolean().optional() }),
    execute: async (params, turnContext) => {
      // turnContext.toolCallStatus           → 'working' | 'completed' | ...
      // turnContext.accumulatedYieldedEvents → every run yield so far
      // turnContext.task                     → statusView / tailLogs / transcript / send / cancel
      return {
        state: turnContext.toolCallStatus,
        progressEvents: turnContext.accumulatedYieldedEvents?.length ?? 0,
        ...(params.includeFrames && { lastFrames: turnContext.task?.tailLogs(3) }),
      };
    },
  },
});
```

Without a custom `check`, the SDK answers the three views itself (`status` / `logs` / `transcript`, truncated to `asyncTools.maxTranscriptChars`, default 20,000 characters).

> [!NOTE]
>
> The SDK treats task-tool calls as internal: they're exempt from doom-loop detection, skip per-tool concurrency and timeout limits, and never fire `PreToolUse`/`PostToolUse` hooks.

Disable check-ins entirely with `asyncTools: { checkins: false }`. Placeholders then tell the model not to call the tool again, and results still arrive automatically.

The name `task` is reserved: `tool({ name: 'task' })` throws. If a tool list built without `tool()` includes a tool named `task`, the SDK disables the built-in and logs a warning.

After a process restart, deferred tasks answer `status` from persisted state (including a bounded `lastLog`). Full logs and transcripts live in memory only, so those views report a short note explaining that instead.

## Steering Running Tasks

Three ways to send guidance into a running task:

```typescript lines theme={null}
// 1. From code: ModelResult.sendToTask
result.sendToTask(taskId, 'Prioritize the intro segment.');

// 2. From the model: the task tool
//    task({ taskId, action: "steer", message: "Prioritize the intro." })

// 3. From a custom check handler
//    turnContext.task.send(message)
```

Messages are delivered to the run body's `ctx.onMessage(handler)` and queued until a handler registers, so no messages are lost. Deferred tasks throw on `sendToTask` because their work runs in an external system the SDK can't reach.

## Agent Tools (Subagents)

`tool.agent()` creates a tool whose work is a child `callModel` conversation, running as a background task:

```typescript expandable lines theme={null}
import { tool, stepCountIs } from '@openrouter/agent';

const researcher = tool.agent({
  name: 'research_topic',
  description: 'Deep-research a topic in the background.',
  inputSchema: z.object({ topic: z.string() }),
  outputSchema: z.object({ text: z.string() }),
  agent: ({ topic }) => ({
    model: 'openai/gpt-5-nano',
    instructions: 'You are a thorough researcher. Cite sources.',
    input: `Research: ${topic}`,
    tools: [searchTool, fetchTool] as const,
    stopWhen: stepCountIs(15),
  }),
  // Map the finished child run to this tool's output.
  // Default: the child's last-message text as { text }.
  result: async (child) => ({ text: await child.getText() }),
});
```

Everything above works the same way for agent tools:

* The parent keeps working while children run; several children can run concurrently under the background pool.
* The child's conversation is the check-in transcript, each child turn is a log entry, and `status` reports `turnsCompleted` and `currentActivity`.
* Steering (`sendToTask` or `task({ action: 'steer' })`) lands in the child as a user message at its next turn boundary.
* `cancelTask(taskId)`, parent abort, or `timeoutMs` cancels the child.

By default, the full child transcript stays out of the parent's context. The parent receives the mapped result, and the model pulls transcript detail on demand via the `task` tool.

> [!NOTE]
>
> Children run in-memory (no `StateAccessor`) and don't inherit the parent's hooks; pass child hooks explicitly in the `agent` spec if needed. A child that pauses (HITL, approval, or deferred tools inside it) fails the task with a clear error.

## Observing Async Tasks

### From Code

```typescript lines theme={null}
const result = openrouter.callModel({ /* ... */ });

result.getAsyncTasks();               // snapshot of pending tasks (taskId, status, lastLog, ...)
result.sendToTask(taskId, message);   // steer an in-process task
result.cancelTask(taskId, reason);    // cancel; returns true when a working task was cancelled
```

### From the Event Stream

Async tasks emit dedicated events on `getFullResponsesStream()`:

```typescript lines theme={null}
for await (const event of result.getFullResponsesStream()) {
  switch (event.type) {
    case 'tool.async_started':        // task detached past the grace window
      console.log(`started ${event.taskId} (${event.toolName})`);
      break;
    case 'tool.preliminary_result':   // generator yield / ctx.log entry
      console.log(`progress:`, event.result);
      break;
    case 'tool.async_settled':        // result (or error) delivered
      console.log(`settled ${event.taskId}`);
      break;
  }
}
```

## Options Reference

Run-level configuration, all optional:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: '...',
  tools: [renderVideo, legalReview, researcher],
  toolTimeoutMs: 60_000,             // default per-tool deadline
  toolConcurrency: {
    round: 4,                        // max simultaneous calls per round
    background: 8,                   // max detached background tasks
  },
  asyncTools: {
    onRunEnd: 'drain',               // 'drain' | 'detach' | 'cancel'
    drainTimeoutMs: 30_000,
    maxDrainTurns: 2,
    checkins: true,                  // register the universal task tool
    maxTranscriptChars: 20_000,      // transcript view cap
  },
});
```

Per-tool configuration on `tool()` / `tool.agent()`:

| Field | Applies to | Description |
| - | - | - |
| `lifecycle` | all | `'sync'` (default) \| `'background'` \| `'deferred'` |
| `ack` | background, deferred | Model-facing note in the placeholder: string, object, or `(input) => ...` |
| `graceMs` | background, agent | Settles this fast → plain sync output, no placeholder (default 250) |
| `pollAfterMs` | deferred | Poll-interval hint surfaced in the placeholder and status views |
| `timeoutMs` | all | Whole-task deadline; `ctx.signal` aborts on breach |
| `maxConcurrency` | all | Max simultaneous executions of this tool |
| `logLimits` | background, agent | Ring-buffer caps: `maxEntries` (200), `maxBytes` (256k), `maxEntryBytes` (4k) |
| `check` | background, deferred, agent | `{ schema?, execute? }` for custom task-tool handling |

## Next Steps

* **[Tools](https://openrouter.ai/docs/agent-sdk/call-model/tools.md)** - The `tool()` helper, schemas, and tool types
* **[Tool Approval & State](https://openrouter.ai/docs/agent-sdk/call-model/tool-approval-state.md)** - `StateAccessor` setup for deferred tools and cross-process resume
* **[Streaming](https://openrouter.ai/docs/agent-sdk/call-model/streaming.md)** - Consuming the full event stream
* **[Lifecycle Hooks](https://openrouter.ai/docs/agent-sdk/call-model/lifecycle-hooks.md)** - Observing tool execution
