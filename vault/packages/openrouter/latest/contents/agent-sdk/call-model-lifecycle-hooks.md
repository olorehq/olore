> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Lifecycle Hooks

> Observe and control the agent loop with typed lifecycle hooks.

Lifecycle hooks let you observe and control specific points in the `callModel` agent loop. Use them to:

* Inspect, modify, or block tool calls before execution
* Record successful and failed tool executions
* Rewrite or reject user prompts
* Decide whether approval-gated tools run
* Override stop conditions
* Track sessions, model calls, token usage, latency, and cost
* Run custom, type-safe application events

Lifecycle hooks are different from transport hooks such as `SDKHooks` and `BeforeRequestHook`. Transport hooks intercept HTTP requests. Lifecycle hooks fire on events within the agent loop.

## Quick start

Pass built-in hooks directly to `callModel` with the `hooks` option:

```typescript expandable lines theme={null}
import { OpenRouter, tool } from '@openrouter/agent';
import { z } from 'zod/v4';

const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const shellTool = tool({
  name: 'run_shell',
  description: 'Run a shell command',
  inputSchema: z.object({ command: z.string() }),
  outputSchema: z.object({ output: z.string() }),
  execute: async ({ command }) => ({
    output: await runInSandbox(command),
  }),
});

const result = openrouter.callModel({
  model: 'openai/gpt-5.4',
  input: 'Delete temporary build files',
  tools: [shellTool] as const,
  hooks: {
    PreToolUse: [
      {
        matcher: 'run_shell',
        handler: ({ toolInput }) => {
          if (String(toolInput.command).includes('rm -rf /')) {
            return {
              block: 'Refusing to run a destructive command',
            };
          }
        },
      },
    ],
    PostToolUse: [
      {
        handler: ({ toolName, durationMs }) => {
          recordToolLatency(toolName, durationMs);
        },
      },
    ],
  },
});

console.log(await result.getText());
```

Inline configuration supports all built-in hooks. Use a `HooksManager` when you need custom hooks, dynamic registration, programmatic emission, or explicit lifecycle control.

## HooksManager

Create a manager and pass it to one or more `callModel` calls:

```typescript expandable lines theme={null}
import { HooksManager, OpenRouter } from '@openrouter/agent';

const hooks = new HooksManager();

const unsubscribe = hooks.on('PreToolUse', {
  matcher: /^db_/,
  filter: ({ toolInput }) => Object.keys(toolInput).length > 0,
  handler: ({ toolInput }, context) => {
    audit(context.sessionId, toolInput);

    return {
      mutatedInput: {
        ...toolInput,
        dryRun: true,
      },
    };
  },
});

const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const result = openrouter.callModel({
  model: 'openai/gpt-5.4',
  input: 'Check which old records can be removed',
  tools: [databaseTool] as const,
  hooks,
});

await result.getText();
unsubscribe();
```

`HooksManager` is available from `@openrouter/agent` and from the focused `@openrouter/agent/hooks-manager` subpath.

Every handler receives a validated `payload` and a context object:

```typescript lines theme={null}
interface LifecycleHookContext {
  readonly signal: AbortSignal;
  readonly hookName: string;
  readonly sessionId: string;
}
```

The SDK supplies the current run's session ID for each lifecycle event. A single manager can therefore be shared by concurrent `callModel` runs without mixing their session IDs.

## Built-in hooks

| Hook | When it fires | Effect |
| - | - | - |
| `SessionStart` | Before the initial request | Observe |
| `UserPromptSubmit` | Before the initial prompt | Rewrite or reject |
| `PostModelCall` | After each model response | Observe |
| `PermissionRequest` | Before tool approval | Allow, deny, or ask |
| `PreToolUse` | Before client tool execution | Rewrite or block |
| `PostToolUse` | After tool success | Observe |
| `PostToolUseFailure` | After tool failure | Observe |
| `Stop` | When `stopWhen` stops the loop | Append or resume |
| `SessionEnd` | When the run exits | Observe |

### SessionStart

`SessionStart` fires once before the initial model request. Its optional `config` summarizes the run without exposing the full request:

The exported payload type allows an extensible config record:

```typescript lines theme={null}
type SessionStartPayload = {
  readonly config?: Record<string, unknown>;
};
```

The agent loop currently emits this config:

```typescript lines theme={null}
{
  hasTools: boolean;
  hasApproval: boolean;
  hasState: boolean;
}
```

Use it to initialize tracing, audit records, or session-scoped resources. Handlers are observational and do not return a result.

### UserPromptSubmit

`UserPromptSubmit` fires before the initial user prompt is sent:

```typescript lines theme={null}
type UserPromptSubmitPayload = {
  prompt: string;
};

type UserPromptSubmitResult = {
  mutatedPrompt?: string;
  reject?: boolean | string;
};
```

`mutatedPrompt` replaces the prompt. `reject: true` aborts with a default error, while a non-empty string becomes the rejection reason.

For structured input, the SDK uses the latest user-role text. If it cannot extract user text, it skips this hook.

```typescript lines theme={null}
hooks.on('UserPromptSubmit', {
  handler: ({ prompt }) => {
    if (containsSecret(prompt)) {
      return { reject: 'Remove secrets before submitting this prompt' };
    }

    return { mutatedPrompt: redactPersonalData(prompt) };
  },
});
```

### PostModelCall

`PostModelCall` fires once for every completed model response, including:

* The initial request
* Approval or HITL resume requests
* Follow-up requests after tool rounds
* The final request created by `allowFinalResponse`
* Empty-final retries

```typescript lines theme={null}
type PostModelCallPayload = {
  sessionId: string;
  responseId: string;
  model: string;
  durationMs: number;
  turnType: 'initial' | 'resume' | 'tool_round' | 'final' | 'retry';
  turnNumber: number;
  usage?: ModelCallUsage;
};

type ModelCallUsage = {
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
  cachedTokens: number;
  reasoningTokens: number;
  cost?: number;
};
```

`responseId` is the OpenRouter generation ID. `durationMs` measures from request dispatch until the full response is materialized, including stream consumption. The hook is observational and is suitable for one tracing span per model call.

```typescript lines theme={null}
hooks.on('PostModelCall', {
  handler: (payload, context) => {
    recordModelSpan({
      sessionId: context.sessionId,
      generationId: payload.responseId,
      model: payload.model,
      durationMs: payload.durationMs,
      cost: payload.usage?.cost,
    });
  },
});
```

A failed stream that never produces a complete response does not emit `PostModelCall`. A materialized `response.incomplete` response does emit it. `usage` is omitted when the server does not report usage, and `usage.cost` is only present when server-side usage accounting reports cost.

On a no-tools streaming path, the response becomes complete only after stream consumption. The hook therefore fires during session teardown, immediately before `SessionEnd`.

### PermissionRequest

`PermissionRequest` fires when a tool requires approval, before the SDK pauses for a user decision:

```typescript lines theme={null}
type PermissionRequestPayload = {
  toolName: string;
  toolInput: Record<string, unknown>;
  riskLevel: 'low' | 'medium' | 'high';
};

type PermissionRequestResult = {
  decision: 'allow' | 'deny' | 'ask_user';
  reason?: string;
};
```

* `allow` skips the approval gate and runs the tool through the normal loop.
* `deny` does not run the tool and sends a rejected result to the model.
* `ask_user` continues into the normal approval flow.

When multiple handlers return decisions, the last returned decision wins. The SDK derives `riskLevel` from the approval rule: callback-based rules are `high`, blanket `true` rules are `medium`, and other cases are `low`.

```typescript lines theme={null}
hooks.on('PermissionRequest', {
  matcher: 'read_file',
  handler: ({ toolInput }) => {
    if (isAllowedPath(toolInput.path)) {
      return { decision: 'allow' };
    }

    return {
      decision: 'deny',
      reason: 'The requested path is outside the workspace',
    };
  },
});
```

### PreToolUse

`PreToolUse` fires before client tool execution, including normal tool rounds and resumed approval flows:

```typescript lines theme={null}
type PreToolUsePayload = {
  toolName: string;
  toolInput: Record<string, unknown>;
};

type PreToolUseResult = {
  mutatedInput?: Record<string, unknown>;
  block?: boolean | string;
};
```

`mutatedInput` replaces the arguments before schema validation and execution. `block: true` skips execution with a default reason. A non-empty string skips execution and is sent to the model as the reason.

If the model supplied invalid JSON arguments, the SDK produces a parse error without emitting the tool hooks because no valid tool input exists.

```typescript lines theme={null}
hooks.on('PreToolUse', {
  matcher: 'search',
  handler: ({ toolInput }) => ({
    mutatedInput: {
      ...toolInput,
      limit: Math.min(Number(toolInput.limit ?? 10), 50),
    },
  }),
});
```

### PostToolUse

`PostToolUse` fires after successful tool execution:

```typescript lines theme={null}
type PostToolUsePayload = {
  toolName: string;
  toolInput: Record<string, unknown>;
  toolOutput: unknown;
  durationMs: number;
};
```

It is observational and has no result. `toolInput` contains the effective arguments after any `PreToolUse` mutation.

### PostToolUseFailure

`PostToolUseFailure` fires when a tool executes and throws or returns an error:

```typescript lines theme={null}
type PostToolUseFailurePayload = {
  toolName: string;
  toolInput: Record<string, unknown>;
  error: unknown;
};
```

It does not fire when the tool never ran, including a `PermissionRequest` denial, user rejection, `PreToolUse` block, invalid JSON arguments, or an HITL tool pausing for later input. Observe those outcomes in the corresponding gating hook. The post-use hook fires after a paused HITL tool is resumed and successfully completes.

### Stop

`Stop` fires when a `stopWhen` condition halts the loop:

```typescript lines theme={null}
type StopPayload = {
  reason: 'max_turns';
};

type StopResult = {
  forceResume?: boolean;
  appendPrompt?: string;
};
```

`appendPrompt` injects a user message, but does not by itself continue the tool loop. Prompts from multiple handlers are joined with newlines. If any handler returns `forceResume: true`, the loop continues, subject to a limit of three consecutive overrides without progress.

A tool output or a fresh model response resets that counter. Blocked and denied tool outputs also count as progress because the model receives the feedback. A bare `forceResume` normally triggers the same stop condition again and uses the override limit. Pair it with `appendPrompt` or a stop condition whose external state can change.

```typescript lines theme={null}
hooks.on('Stop', {
  handler: ({ reason }) => {
    if (reason === 'max_turns' && shouldAskForSummary()) {
      return {
        forceResume: true,
        appendPrompt: 'Summarize the work completed so far.',
      };
    }
  },
});
```

### SessionEnd

`SessionEnd` fires once when a started session exits:

```typescript lines theme={null}
type SessionEndPayload = {
  reason: 'user' | 'error' | 'max_turns' | 'complete';
  totalUsage?: SessionUsageTotals;
};

type SessionUsageTotals = ModelCallUsage & {
  modelCalls: number;
};
```

`totalUsage` is present when at least one model response completed. Token fields are summed across calls. `cost` is included when at least one response reported it.

When `SessionStart` succeeds, `SessionEnd` fires exactly once for that run on completion, approval pause, interruption, error, and no-tools streaming teardown. An approval pause currently ends with `reason: 'complete'`.

Approval and HITL resume calls skip `SessionStart` and `SessionEnd`, but tool hooks still fire and detached work is still drained. A teardown error is logged and never replaces the run's original error.

## Matchers and filters

Use `matcher` to register handlers for selected tool names:

```typescript lines theme={null}
type ToolMatcher =
  | string
  | RegExp
  | ((toolName: string) => boolean);
```

```typescript lines theme={null}
hooks.on('PreToolUse', {
  matcher: /^filesystem_/,
  filter: ({ toolInput }) => toolInput.path !== undefined,
  handler: ({ toolInput }) => {
    validateWorkspacePath(toolInput.path);
  },
});
```

A string matches exactly. A regular expression or predicate can match a set of tools. A matcher-scoped handler is skipped when an event has no tool name. `filter` receives the hook payload and can add any further condition.

Matchers are intended for tool-scoped hooks. Use `filter` by itself for session, prompt, model-call, and stop hooks.

## Handler chain behavior

Handlers run sequentially in registration order.

1. The SDK checks the handler's matcher and filter.
2. It calls the handler with the latest payload.
3. A mutation replaces the corresponding payload field for later handlers.
4. A block or rejection stops the remaining handler chain.

Mutations therefore pipe through the chain:

```typescript lines theme={null}
hooks.on('PreToolUse', {
  matcher: 'query_database',
  handler: ({ toolInput }) => ({
    mutatedInput: { ...toolInput, limit: 100 },
  }),
});

hooks.on('PreToolUse', {
  matcher: 'query_database',
  handler: ({ toolInput }) => {
    // Sees limit: 100 from the previous handler.
    return isSafeQuery(toolInput)
      ? undefined
      : { block: 'Unsafe query' };
  },
});
```

A blocking handler's mutation is still applied before the chain stops. Empty strings do not block or reject. Return `mutatedInput` or `mutatedPrompt` instead of mutating nested payload values in place.

By default, a throwing handler, matcher, or filter is logged and skipped. Use strict mode to propagate these failures, which is useful in tests:

```typescript lines theme={null}
const hooks = new HooksManager(undefined, {
  throwOnHandlerError: true,
});
```

Payload and result schema failures follow the same error policy.

## Asynchronous handlers

Handlers may return a promise. The chain waits for a normal asynchronous handler before running the next handler:

```typescript lines theme={null}
hooks.on('PreToolUse', {
  handler: async ({ toolInput }) => {
    await validatePolicy(toolInput);
  },
});
```

To detach telemetry or audit work without delaying the loop, return an `AsyncOutput` signal:

```typescript lines theme={null}
hooks.on('PostToolUse', {
  handler: (payload, context) => ({
    async: true,
    work: sendTelemetry(payload, {
      signal: context.signal,
    }),
    asyncTimeout: 5_000,
  }),
});
```

The asynchronous signal has this exact shape:

```typescript lines theme={null}
interface AsyncOutput {
  readonly async: true;
  readonly work?: Promise<unknown>;
  readonly asyncTimeout?: number;
}
```

The default timeout is 30 seconds. On timeout, the handler context's signal is aborted and the timeout is logged. JavaScript promises cannot be forcibly cancelled, so background work should observe `context.signal`.

The manager tracks detached work. Use its lifecycle methods during shutdown:

```typescript lines theme={null}
hooks.abortInflight('Application shutting down');
await hooks.drain();
```

`abortInflight()` aborts the signals for active handler work. `drain()` waits for all detached work to settle. The agent loop also drains pending hook work when a run ends.

Use the exported `isAsyncOutput(value)` type guard when handling hook return values yourself. Objects with extra fields are not asynchronous signals, so a mutation cannot be accidentally discarded.

## Custom hooks

Define custom hooks with Zod payload and result schemas:

```typescript expandable lines theme={null}
import { HooksManager } from '@openrouter/agent';
import { z } from 'zod/v4';

const hooks = new HooksManager({
  DeploymentGate: {
    payload: z.object({
      environment: z.string(),
      version: z.string(),
    }),
    result: z.object({
      approved: z.boolean(),
    }),
  },
  AuditLog: {
    payload: z.object({
      event: z.string(),
    }),
    result: z.void(),
  },
});

hooks.on('DeploymentGate', {
  handler: ({ environment }) => ({
    approved: environment !== 'production',
  }),
});

const { results } = await hooks.emit('DeploymentGate', {
  environment: 'staging',
  version: '1.2.3',
});

console.log(results[0]?.approved);
```

Payloads and non-void results are validated on every `emit()`. Zod transforms, defaults, and coercion are applied before handlers run, so handlers receive the schema output type.

Custom hook names must be non-empty and cannot collide with built-in names. Custom hooks do not inherit built-in mutation or blocking behavior. Inline configuration only supports built-in hooks.

When directly emitting from a manager shared by concurrent operations, pass a per-emit session ID:

```typescript lines theme={null}
await hooks.emit(
  'AuditLog',
  { event: 'deployment_started' },
  { sessionId: deployment.id },
);
```

`setSessionId()` sets a manager-wide default for direct emissions. It is last-writer-wins, so prefer the per-emit value when operations may overlap.

## HooksManager API

### constructor

```typescript lines theme={null}
new HooksManager(customHooks?, options?)
```

* `customHooks` maps custom names to Zod `payload` and `result` schemas.
* `options.throwOnHandlerError` propagates hook errors when `true`.

### on

```typescript lines theme={null}
hooks.on(hookName, entry): () => void
```

Registers a typed handler and returns an unsubscribe function. An entry has a `handler` and optional `matcher` and `filter`.

### off

```typescript lines theme={null}
hooks.off(hookName, handler): boolean
```

Removes a specific handler. Returns whether it was found.

### removeAll

```typescript lines theme={null}
hooks.removeAll(hookName?): void
```

Removes handlers for one hook, or every handler when no name is supplied.

### setSessionId

```typescript lines theme={null}
hooks.setSessionId(sessionId): void
```

Sets the default `context.sessionId` for direct `emit()` calls. This mutable default is last-writer-wins. Use the per-emit override for concurrent work.

### emit

```typescript lines theme={null}
await hooks.emit(hookName, payload, {
  toolName,
  sessionId,
});
```

Validates the payload, runs the chain, and returns:

```typescript lines theme={null}
type EmitResult<Result, Payload> = {
  results: Result[];
  pending: Promise<void>[];
  finalPayload: Payload;
  blocked: boolean;
  mutated: boolean;
};
```

`toolName` supplies the value used by matchers. `sessionId` overrides the manager default for this emission.

### hasHandlers

```typescript lines theme={null}
hooks.hasHandlers(hookName): boolean
```

Returns whether the hook has any registered handlers.

### abortInflight and drain

```typescript lines theme={null}
hooks.abortInflight(reason?): void
await hooks.drain(): Promise<void>
```

Abort active handler signals, then await detached work during graceful shutdown.

## Next steps

* **[Tools](https://openrouter.ai/docs/agent-sdk/call-model/tools.md)** - Define and execute typed tools
* **[Tool Approval & State](https://openrouter.ai/docs/agent-sdk/call-model/tool-approval-state.md)** - Pause and resume approval-gated tools
* **[Stop Conditions](https://openrouter.ai/docs/agent-sdk/call-model/stop-conditions.md)** - Control when the agent loop ends
* **[API Reference](https://openrouter.ai/docs/agent-sdk/call-model/api-reference.md)** - Review complete `callModel` types and exports
