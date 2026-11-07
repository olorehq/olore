> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Agent SDK API Reference

> Type signatures and exports for the Agent SDK, covering callModel, ModelResult, tool types, conversation state helpers, stop conditions, and format utilities.

## callModel

```typescript lines theme={null}
function callModel(request: CallModelInput, options?: RequestOptions): ModelResult
```

Creates a response using the OpenResponses API with multiple consumption patterns.

### CallModelInput

| Parameter | Type | Required | Description |
| - | - | - | - |
| `model` | `string \| ((ctx: TurnContext) => string)` | Yes\* | Model ID (e.g., "openai/gpt-5-nano") |
| `models` | `string[]` | Yes\* | Model fallback array |
| `input` | `OpenResponsesInput` | Yes | Input messages or string |
| `instructions` | `string \| ((ctx: TurnContext) => string)` | No | System instructions |
| `tools` | `Tool[]` | No | Tools available to the model |
| `maxToolRounds` | `MaxToolRounds` | No | Tool execution limit (deprecated) |
| `stopWhen` | `StopWhen` | No | Stop conditions |
| `allowFinalResponse` | `boolean \| string` | No | Final text turn when `stopWhen` halts mid-tool-call. Default on: makes one more turn with `toolChoice: 'none'` and a built-in final-answer directive (`DEFAULT_FINAL_RESPONSE_DIRECTIVE`). A string overrides the directive wording; `''` appends no message; `false` disables the final turn |
| `strictFinalResponse` | `boolean` | No | Throw if the final response has empty `output` even after completed tool rounds (pre-0.8.0 behavior). Default `false`: retry the follow-up once, then resolve successfully with empty text so tool-terminal runs aren't reported as failures. Runs with no completed tool work still throw on empty output |
| `temperature` | `number \| ((ctx: TurnContext) => number)` | No | Sampling temperature (0-2) |
| `maxOutputTokens` | `number \| ((ctx: TurnContext) => number)` | No | Maximum tokens to generate |
| `topP` | `number` | No | Top-p sampling |
| `text` | `ResponseTextConfig` | No | Text format configuration |
| `provider` | `ProviderPreferences` | No | Provider routing and configuration |
| `topK` | `number` | No | Top-k sampling |
| `metadata` | `Record<string, string>` | No | Request metadata |
| `toolChoice` | `ToolChoice` | No | Tool choice configuration |
| `parallelToolCalls` | `boolean` | No | Enable parallel tool calling |
| `reasoning` | `ReasoningConfig` | No | Reasoning configuration |
| `promptCacheKey` | `string` | No | Cache key for prompt caching |
| `previousResponseId` | `string` | No | Context from previous response |
| `include` | `string[]` | No | Include extra fields in response |
| `background` | `boolean` | No | Run request in background |
| `safetyIdentifier` | `string` | No | User safety identifier |
| `serviceTier` | `string` | No | Service tier preference |
| `truncation` | `string` | No | Truncation mode |
| `plugins` | `Plugin[]` | No | Enabled plugins |
| `user` | `string` | No | End-user identifier |
| `sessionId` | `string` | No | Session identifier |
| `store` | `boolean` | No | Store request data |
| `context` | `ContextInput<ToolContextMap>` | No | Tool context keyed by tool name |
| `hooks` | `InlineHookConfig \| HooksManager` | No | Agent lifecycle hooks |

See [Lifecycle Hooks](https://openrouter.ai/docs/agent-sdk/call-model/lifecycle-hooks.md) for hook payloads, results, and manager APIs.

\*Either `model` or `models` is required.

### ProviderPreferences

Configuration for routing and provider selection.

| Parameter | Type | Description |
| - | - | - |
| `allowFallbacks` | `boolean` | Allow backup providers when primary is unavailable (default: true) |
| `requireParameters` | `boolean` | Only use providers that support all requested parameters |
| `dataCollection` | `"allow" \| "deny"` | Data collection policy (allow/deny) |
| `order` | `string[]` | Custom provider routing order |
| `only` | `string[]` | Restrict to specific providers |
| `ignore` | `string[]` | Exclude specific providers |
| `quantizations` | `string[]` | Filter by quantization levels |
| `sort` | `string` | Load balancing strategy (e.g., "throughput") |
| `maxPrice` | `object` | Maximum price limits |
| `preferredMinThroughput` | `number` | Minimum tokens per second preference |
| `preferredMaxLatency` | `number` | Maximum latency preference |

### RequestOptions

| Parameter | Type | Description |
| - | - | - |
| `timeout` | `number` | Request timeout in milliseconds |
| `signal` | `AbortSignal` | Abort signal for cancellation |

***

## ModelResult

Wrapper providing multiple consumption patterns for a response.

### Methods

#### getText()

```typescript lines theme={null}
getText(): Promise<string>
```

Get text content after tool execution completes.

#### getResponse()

```typescript lines theme={null}
getResponse(): Promise<OpenResponsesNonStreamingResponse>
```

Get full response with usage data (inputTokens, outputTokens, cachedTokens).

#### getTextStream()

```typescript lines theme={null}
getTextStream(): AsyncIterableIterator<string>
```

Stream text deltas.

#### getReasoningStream()

```typescript lines theme={null}
getReasoningStream(): AsyncIterableIterator<string>
```

Stream reasoning deltas (for reasoning models).

#### getNewMessagesStream()

```typescript lines theme={null}
getNewMessagesStream(): AsyncIterableIterator<ResponsesOutputMessage | OpenResponsesFunctionCallOutput>
```

Stream cumulative message snapshots in OpenResponses format.

#### getFullResponsesStream()

```typescript lines theme={null}
getFullResponsesStream(): AsyncIterableIterator<EnhancedResponseStreamEvent>
```

Stream all events including tool preliminary results.

#### getToolCalls()

```typescript lines theme={null}
getToolCalls(): Promise<ParsedToolCall[]>
```

Get all tool calls from initial response.

#### getToolCallsStream()

```typescript lines theme={null}
getToolCallsStream(): AsyncIterableIterator<ParsedToolCall>
```

Stream tool calls as they complete.

#### getToolStream()

```typescript lines theme={null}
getToolStream(): AsyncIterableIterator<ToolStreamEvent>
```

Stream tool deltas and preliminary results.

#### getContextUpdates()

```typescript lines theme={null}
getContextUpdates(): AsyncGenerator<ToolContextMap<TTools>>
```

Stream context snapshots whenever a tool calls `setContext()`. Completes when tool execution finishes.

#### cancel()

```typescript lines theme={null}
cancel(): Promise<void>
```

Cancel the stream and all consumers.

***

## Tool Types

### tool()

```typescript lines theme={null}
function tool<TInput, TOutput>(config: ToolConfig): Tool
```

Create a typed tool with Zod schema validation.

### ToolConfig

| Parameter | Type | Required | Description |
| - | - | - | - |
| `name` | `string` | Yes | Tool name |
| `description` | `string` | No | Tool description |
| `inputSchema` | `ZodObject` | Yes | Input parameter schema |
| `outputSchema` | `ZodType` | No | Output schema |
| `eventSchema` | `ZodType` | No | Event schema (triggers generator mode) |
| `contextSchema` | `ZodObject` | No | Context data this tool needs |
| `execute` | `function \| false` | Yes\* | Execute function, or `false` for manual |
| `onToolCalled` | `function` | Yes\* | HITL hook — return value to auto-respond, `null` to pause |
| `onResponseReceived` | `function` | No | HITL hook — post-process caller-supplied result (HITL only) |
| `nextTurnParams` | `NextTurnParamsFunctions` | No | Parameters to modify next turn |

\* Provide exactly one of `execute` or `onToolCalled`. Omitting both (with `execute: false`) makes the tool a manual tool.

### Tool

Union type of all tool types:

```typescript lines theme={null}
type Tool =
  | ToolWithExecute<ZodObject, ZodType>
  | ToolWithGenerator<ZodObject, ZodType, ZodType>
  | ManualTool<ZodObject, ZodType>
  | HITLTool<ZodObject, ZodType>;
```

### ToolWithExecute

Regular tool with execute function:

```typescript lines theme={null}
interface ToolWithExecute<
  TInput, TOutput, TContext, TName
> {
  type: ToolType.Function;
  function: {
    name: TName;
    description?: string;
    inputSchema: TInput;
    outputSchema?: TOutput;
    contextSchema?: ZodObject;
    execute: (
      params: z.infer<TInput>,
      context: ToolExecuteContext<TName, TContext>,
    ) => Promise<z.infer<TOutput>>;
  };
}
```

### ToolWithGenerator

Generator tool with eventSchema:

```typescript lines theme={null}
interface ToolWithGenerator<
  TInput, TEvent, TOutput, TContext, TName
> {
  type: ToolType.Function;
  function: {
    name: TName;
    description?: string;
    inputSchema: TInput;
    eventSchema: TEvent;
    outputSchema: TOutput;
    contextSchema?: ZodObject;
    execute: (
      params: z.infer<TInput>,
      context: ToolExecuteContext<TName, TContext>,
    ) => AsyncGenerator<z.infer<TEvent>>;
  };
}
```

### ManualTool

Tool without execute function:

```typescript lines theme={null}
interface ManualTool<TInput, TOutput> {
  type: ToolType.Function;
  function: {
    name: string;
    description?: string;
    inputSchema: TInput;
    outputSchema?: TOutput;
  };
}
```

### HITLTool

Human-in-the-loop tool with `onToolCalled` and optional `onResponseReceived` hooks. `outputSchema` is required — it validates both the hook's non-null return value and the caller-supplied response delivered via `function_call_output`.

```typescript expandable lines theme={null}
interface HITLToolFunction<
  TInput, TOutput, TContext, TName
> {
  name: TName;
  description?: string;
  inputSchema: TInput;
  outputSchema: TOutput;
  contextSchema?: ZodObject;
  onToolCalled: (
    params: z.infer<TInput>,
    context?: ToolExecuteContext<TName, TContext>,
  ) => Promise<z.infer<TOutput> | null> | z.infer<TOutput> | null;
  onResponseReceived?: (
    rawResult: unknown,
    context?: ToolExecuteContext<TName, TContext>,
  ) => Promise<z.infer<TOutput>> | z.infer<TOutput>;
  toModelOutput?: ToModelOutputFunction<
    z.infer<TInput>,
    z.infer<TOutput>
  >;
}

type HITLTool<TInput, TOutput, TContext> = {
  type: ToolType.Function;
  function: HITLToolFunction<TInput, TOutput, TContext>;
};
```

Returning `null` from `onToolCalled` pauses the loop and sets the conversation status to `'awaiting_hitl'`. Throwing from `onToolCalled` is surfaced as a tool error of the form `{ error: ... }`. Throwing from `onResponseReceived` is surfaced as an error payload that includes the caller's original output of the form `{ error: ..., originalOutput: ... }`.

***

## Tool Type Guards

```typescript lines theme={null}
function isManualTool(tool: Tool): tool is ManualTool;
function isHITLTool(tool: Tool): tool is HITLTool;
function isAutoResolvableTool(
  tool: Tool,
): tool is ToolWithExecute | ToolWithGenerator | HITLTool;
```

* `isManualTool` — no `execute` and no `onToolCalled`. Always pauses the loop.
* `isHITLTool` — has an `onToolCalled` function.
* `isAutoResolvableTool` — either has an `execute` function (regular/generator) or is a HITL tool. Returns `false` for manual and server tools.

***

## Context Types

### TurnContext

```typescript lines theme={null}
interface TurnContext {
  toolCall?: OpenResponsesFunctionToolCall;
  numberOfTurns: number;
  turnRequest?: OpenResponsesRequest;
}
```

### ToolExecuteContext

Flat context passed to tool execute functions. Merges `TurnContext` fields with tool-specific context:

```typescript lines theme={null}
type ToolExecuteContext<TName, TContext> =
  TurnContext & {
    tools: {
      readonly [K in TName]: Readonly<TContext>;
    };
    setContext(partial: Partial<TContext>): void;
  };
```

### ToolContextMap

Context map for `callModel`'s `context` option, keyed by tool name:

```typescript lines theme={null}
type ToolContextMap<T extends readonly Tool[]> = {
  [K in T[number] as K['function']['name']]:
    InferToolContext<K>;
};
```

### ContextInput

Context can be static, a sync function, or an async function:

```typescript lines theme={null}
type ContextInput<T> =
  | T
  | ((turn: TurnContext) => T)
  | ((turn: TurnContext) => Promise<T>);
```

### NextTurnParamsContext

```typescript lines theme={null}
interface NextTurnParamsContext {
  input: OpenResponsesInput;
  model: string;
  models: string[];
  temperature: number | null;
  maxOutputTokens: number | null;
  topP: number | null;
  topK?: number | undefined;
  instructions: string | null;
}
```

***

## Stream Event Types

### EnhancedResponseStreamEvent

```typescript lines theme={null}
type EnhancedResponseStreamEvent =
  | OpenResponsesStreamEvent
  | ToolPreliminaryResultEvent;
```

### ToolStreamEvent

```typescript lines theme={null}
type ToolStreamEvent =
  | { type: 'delta'; content: string }
  | { type: 'preliminary_result'; toolCallId: string; result: unknown };
```

### ParsedToolCall

```typescript lines theme={null}
interface ParsedToolCall {
  id: string;
  name: string;
  arguments: unknown;
}
```

### ToolExecutionResult

```typescript lines theme={null}
interface ToolExecutionResult {
  toolCallId: string;
  toolName: string;
  /**
   * `'client'` for locally-defined tools: `result` is precisely typed from
   * the tool's `outputSchema`. `'mcp'` for tools wrapped from a remote MCP
   * server: `result` is `unknown`.
   *
   * Consumers narrow on `source` to keep MCP's `unknown` from collapsing the
   * result union of typed client tools. Also present on `ToolResultEvent`
   * (streaming). See [Tools › ToolResultEvent](/agent-sdk/call-model/tools#toolresultevent-type).
   */
  source: 'client' | 'mcp';
  result: unknown;
  preliminaryResults?: unknown[];
  error?: Error;
}
```

> [!WARNING]
>
> The `source` field was added in `@openrouter/agent` 0.8.0. This is an additive breaking change for consumers that exhaustively matched or constructed `ToolExecutionResult` (or `ToolResultEvent`) payloads.

### MCP branding

```typescript lines theme={null}
// Guard: returns true for tools branded as originating from an MCP server.
function isMcpTool(tool: Tool): tool is McpBranded;

// Helper: brand a tool as MCP. `@openrouter/mcp` brands its wrapped tools
// automatically; most callers never call this directly.
function markMcp<T extends Tool>(tool: T): McpBranded<T>;

// Type-level brand that isolates MCP results in ToolExecutionResult /
// ToolResultEvent unions.
type McpBranded<T extends Tool = Tool> = T & { readonly _mcp: true };
```

***

## Conversation State

See [Tool Approval & State](https://openrouter.ai/docs/agent-sdk/call-model/tool-approval-state.md) for a walkthrough of the state accessor pattern, resumption, and status values.

### ConversationState

```typescript lines theme={null}
interface ConversationState<TTools extends readonly Tool[] = readonly Tool[]> {
  /**
   * Serialization-contract version. Optional so legacy blobs remain
   * assignable; absence means `1`. `createInitialState` stamps `1`.
   */
  version?: number;
  id: string;
  messages: OpenResponsesInputUnion;
  previousResponseId?: string;
  pendingToolCalls?: ParsedToolCall[];
  unsentToolResults?: UnsentToolResult[];
  partialResponse?: PartialResponse;
  interruptedBy?: string;
  status: ConversationStatus;
  createdAt: number;
  updatedAt: number;
}
```

### ConversationStatus

```typescript lines theme={null}
type ConversationStatus =
  | 'in_progress'
  | 'awaiting_approval'
  | 'awaiting_hitl'
  | 'awaiting_client_tools'
  | 'awaiting_async_tools'
  | 'complete'
  | 'interrupted';
```

`'awaiting_client_tools'` was added in `@openrouter/agent` 0.8.0 for unresolved manual (`execute: false`) tool calls. See [Status Values](https://openrouter.ai/docs/agent-sdk/call-model/tool-approval-state.md#status-values).

### StateAccessor

```typescript lines theme={null}
interface StateAccessor<TTools extends readonly Tool[] = readonly Tool[]> {
  load: () => Promise<ConversationState<TTools> | null>;
  save: (state: ConversationState<TTools>) => Promise<void>;
}
```

### Serialization helpers

Opt-in wrappers over `JSON.stringify` / `JSON.parse` that manage the state version and surface typed errors on load. Available at the package root and via the `@openrouter/agent/conversation-state` subpath.

```typescript lines theme={null}
const CONVERSATION_STATE_VERSION = 1;

function serializeConversationState<TTools>(
  state: ConversationState<TTools>,
): string;

function deserializeConversationState<TTools>(
  json: string,
): ConversationState<TTools>;

// Thrown when the blob's `version` is not supported by this SDK build.
class UnsupportedStateVersionError extends Error {
  readonly found: number;
  readonly supported: readonly number[];
}

// Thrown for malformed JSON or missing required fields.
class InvalidStateError extends Error {}
```

Treat the serialized JSON as opaque. Additive changes stay within a major version; migrations run inside `deserializeConversationState` on version bumps. `StateAccessor.load` / `save` are unchanged, so these helpers are opt-in.

***

## Stop Conditions

### StopWhen

```typescript lines theme={null}
type StopWhen =
  | StopCondition
  | StopCondition[];
```

### StopCondition

```typescript lines theme={null}
type StopCondition = (context: StopConditionContext) => boolean | Promise<boolean>;
```

### StopConditionContext

```typescript lines theme={null}
interface StopConditionContext {
  steps: StepResult[];
}
```

### StepResult

```typescript lines theme={null}
interface StepResult {
  stepType: 'initial' | 'continue';
  text: string;
  toolCalls: TypedToolCallUnion[];
  toolResults: ToolExecutionResultUnion[];
  response: OpenResponsesNonStreamingResponse;
  usage?: OpenResponsesUsage;
  finishReason?: string;
  warnings?: Warning[];
  experimental_providerMetadata?: Record<string, unknown>;
}
```

### Warning

```typescript lines theme={null}
interface Warning {
  type: string;
  message: string;
}
```

### Built-in Helpers

| Function | Signature | Description |
| - | - | - |
| `stepCountIs` | `(n: number) => StopCondition` | Stop after n steps |
| `hasToolCall` | `(name: string) => StopCondition` | Stop when tool is called |
| `maxTokensUsed` | `(n: number) => StopCondition` | Stop after n tokens |
| `maxCost` | `(amount: number) => StopCondition` | Stop after cost limit |
| `finishReasonIs` | `(reason: string) => StopCondition` | Stop on finish reason |

***

## Format Helpers

### fromChatMessages

```typescript lines theme={null}
function fromChatMessages(messages: Message[]): OpenResponsesInput
```

Convert OpenAI chat format to OpenResponses input.

### toChatMessage

```typescript lines theme={null}
function toChatMessage(response: OpenResponsesNonStreamingResponse): AssistantMessage
```

Convert response to chat message format.

### fromClaudeMessages

```typescript lines theme={null}
function fromClaudeMessages(messages: ClaudeMessageParam[]): OpenResponsesInput
```

Convert Anthropic Claude format to OpenResponses input.

### toClaudeMessage

```typescript lines theme={null}
function toClaudeMessage(response: OpenResponsesNonStreamingResponse): ClaudeMessage
```

Convert response to Claude message format.

***

## Type Utilities

### InferToolInput

```typescript lines theme={null}
type InferToolInput<T> = T extends { function: { inputSchema: infer S } }
  ? S extends ZodType ? z.infer<S> : unknown
  : unknown;
```

### InferToolOutput

```typescript lines theme={null}
type InferToolOutput<T> = T extends { function: { outputSchema: infer S } }
  ? S extends ZodType ? z.infer<S> : unknown
  : unknown;
```

### InferToolEvent

```typescript lines theme={null}
type InferToolEvent<T> = T extends { function: { eventSchema: infer S } }
  ? S extends ZodType ? z.infer<S> : never
  : never;
```

### TypedToolCall

```typescript lines theme={null}
type TypedToolCall<T extends Tool> = {
  id: string;
  name: T extends { function: { name: infer N } } ? N : string;
  arguments: InferToolInput<T>;
};
```

***

## Exports

```typescript expandable lines theme={null}
// Agent client
export { OpenRouter } from '@openrouter/agent';

// Tool helpers
export {
  tool,
  ToolType,
  isManualTool,
  isHITLTool,
  isAutoResolvableTool,
  isMcpTool,
  markMcp,
} from '@openrouter/agent';

// Conversation state helpers
export {
  createInitialState,
  serializeConversationState,
  deserializeConversationState,
  CONVERSATION_STATE_VERSION,
  UnsupportedStateVersionError,
  InvalidStateError,
} from '@openrouter/agent';
// Also available at the subpath: '@openrouter/agent/conversation-state'

// Format helpers
export { fromChatMessages, toChatMessage, fromClaudeMessages, toClaudeMessage } from '@openrouter/agent';

// Stop condition helpers
export { stepCountIs, hasToolCall, maxTokensUsed, maxCost, finishReasonIs } from '@openrouter/agent';

// Final-turn directive appended when allowFinalResponse is on (the default)
export { DEFAULT_FINAL_RESPONSE_DIRECTIVE } from '@openrouter/agent';

// Context helpers
export {
  buildToolExecuteContext,
  ToolContextStore,
} from '@openrouter/agent';

// Lifecycle hooks
export {
  HooksManager,
  HookName,
  isAsyncOutput,
} from '@openrouter/agent';

// Types
export type {
  CallModelInput,
  ContextInput,
  Tool,
  ToolWithExecute,
  ToolWithGenerator,
  ManualTool,
  HITLTool,
  HITLToolFunction,
  McpBranded,
  ToolExecuteContext,
  ToolContextMap,
  TurnContext,
  ParsedToolCall,
  ToolExecutionResult,
  ToolResultEvent,
  ConversationState,
  ConversationStatus,
  StateAccessor,
  StopCondition,
  StopWhen,
  InferToolInput,
  InferToolOutput,
  InferToolEvent,
  InlineHookConfig,
  HookEntry,
  HookHandler,
  HookReturn,
  HooksManagerOptions,
  HookDefinition,
  HookRegistry,
  ToolMatcher,
  EmitResult,
  BuiltInHookDefinitions,
  LifecycleHookContext,
  AsyncOutput,
  PreToolUsePayload,
  PreToolUseResult,
  PostToolUsePayload,
  PostToolUseFailurePayload,
  UserPromptSubmitPayload,
  UserPromptSubmitResult,
  PermissionRequestPayload,
  PermissionRequestResult,
  StopPayload,
  StopResult,
  SessionStartPayload,
  SessionEndPayload,
  PostModelCallPayload,
  ModelCallUsage,
  SessionUsageTotals,
} from '@openrouter/agent';
```
