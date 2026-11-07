> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Tools

> Define type-safe tools for callModel with Zod schemas, including regular, generator, manual, HITL, and MCP-branded tools, with automatic multi-turn execution.

## The tool() Helper

The `tool()` function creates type-safe tools with Zod schema validation:

```typescript expandable lines theme={null}
import { OpenRouter, tool } from '@openrouter/agent';
import { z } from 'zod';

const weatherTool = tool({
  name: 'get_weather',
  description: 'Get the current weather for a location',
  inputSchema: z.object({
    location: z.string().describe('City name, e.g., "San Francisco, CA"'),
  }),
  outputSchema: z.object({
    temperature: z.number(),
    conditions: z.string(),
  }),
  execute: async (params) => {
    // params is typed as { location: string }
    const weather = await fetchWeather(params.location);
    return {
      temperature: weather.temp,
      conditions: weather.description,
    };
  },
});
```

## Tool Types

The SDK supports four types of tools, automatically detected from your configuration:

### Regular Tools

Standard tools with an execute function:

```typescript lines theme={null}
const calculatorTool = tool({
  name: 'calculate',
  description: 'Perform a mathematical calculation',
  inputSchema: z.object({
    expression: z.string().describe('Math expression like "2 + 2"'),
  }),
  outputSchema: z.object({
    result: z.number(),
  }),
  execute: async (params) => {
    const result = eval(params.expression); // Use a safer eval in production
    return { result };
  },
});
```

### Generator Tools

Tools that yield progress updates during execution. Add `eventSchema` to enable generator mode:

```typescript expandable lines theme={null}
const searchTool = tool({
  name: 'search_database',
  description: 'Search documents with progress updates',
  inputSchema: z.object({
    query: z.string(),
    limit: z.number().default(10),
  }),
  // eventSchema triggers generator mode
  eventSchema: z.object({
    progress: z.number().min(0).max(100),
    message: z.string(),
  }),
  outputSchema: z.object({
    results: z.array(z.string()),
    totalFound: z.number(),
  }),
  // execute is now an async generator
  execute: async function* (params) {
    yield { progress: 0, message: 'Starting search...' };

    const results = [];
    for (let i = 0; i < 5; i++) {
      yield { progress: (i + 1) * 20, message: `Searching batch ${i + 1}...` };
      results.push(...await searchBatch(params.query, i));
    }

    // Final yield is the output
    yield { progress: 100, message: 'Complete!' };

    // Return the final result (or yield it as last value)
    return {
      results: results.slice(0, params.limit),
      totalFound: results.length,
    };
  },
});
```

Progress events are streamed to consumers via `getToolStream()` and `getFullResponsesStream()`.

### Manual Tools

Tools without automatic execution - you handle the tool calls yourself:

```typescript lines theme={null}
const manualTool = tool({
  name: 'send_email',
  description: 'Send an email (requires user confirmation)',
  inputSchema: z.object({
    to: z.string().email(),
    subject: z.string(),
    body: z.string(),
  }),
  execute: false, // Manual handling required
});
```

Use `getToolCalls()` to retrieve manual tool calls for processing.

When manual tool calls are left unresolved at the end of a round, the loop pauses and the calls are persisted to `ConversationState.pendingToolCalls` with `status: 'awaiting_client_tools'`, so cold-start consumers can recover them from serialized state. To continue, call `callModel` again with new `input`; the stale pendings are cleared and the run proceeds as a normal turn. Manual tools are not approved or rejected by call ID the way [approval](https://openrouter.ai/docs/agent-sdk/call-model/tool-approval-state.md) and [HITL](#human-in-the-loop-hitl-tools) flows are. See [Status Values](https://openrouter.ai/docs/agent-sdk/call-model/tool-approval-state.md#status-values).

### Human-in-the-Loop (HITL) Tools

HITL tools extend manual-tool semantics with two sync-or-async hooks that let you decide per call whether to respond programmatically or pause for a human:

* `onToolCalled` fires when the model invokes the tool. Return a value to feed the model directly (like a regular `execute`), or return `null` to pause the loop like a manual tool. The caller resumes later by supplying a `function_call_output` item.
* `onResponseReceived` is optional. It fires on a later turn when an incoming `function_call_output` matches a prior call of this tool (by `callId → function_call.name`). It receives the caller-supplied raw result and returns the value sent to the model. Throwing surfaces as a tool error to the model.

An `outputSchema` is required for HITL tools. It validates both the `onToolCalled` return value (when non-null) and the value delivered via `function_call_output` (whether transformed by `onResponseReceived` or passed through directly).

```typescript expandable lines theme={null}
const approvePaymentTool = tool({
  name: 'approve_payment',
  description: 'Approve a payment, escalating large amounts to a human',
  inputSchema: z.object({
    amount: z.number(),
    recipient: z.string(),
  }),
  outputSchema: z.object({
    ok: z.boolean(),
    reviewedAt: z.number().optional(),
  }),
  onToolCalled: async (input) => {
    // Auto-approve small amounts
    if (input.amount < 100) {
      return { ok: true };
    }
    // Escalate to a human — pauses the loop
    return null;
  },
  onResponseReceived: async (raw) => {
    // Post-process the caller-supplied result before the model sees it
    return { ...(raw as object), reviewedAt: Date.now() };
  },
});
```

When `onToolCalled` returns `null`, the conversation state moves to `status: 'awaiting_hitl'` and the paused call surfaces via `getToolCalls()` / `getPendingToolCalls()`. Resume by calling `callModel` again with a `function_call_output` item for each paused call in the input.

> [!NOTE]
>
> HITL tools differ from `requireApproval`: approval gates pause *before* execution for a yes/no decision, while HITL tools let `onToolCalled` run arbitrary logic first and only pause when it returns `null`. Use HITL when the decision is data-driven (e.g., amount thresholds, risk scoring); use `requireApproval` when you always want explicit human consent. See [Tool Approval & State](https://openrouter.ai/docs/agent-sdk/call-model/tool-approval-state.md).

## Schema Definition

### Input Schema

Define what parameters the tool accepts:

```typescript expandable lines theme={null}
const inputSchema = z.object({
  // Required parameters
  query: z.string().describe('Search query'),

  // Optional with default
  limit: z.number().default(10).describe('Max results'),

  // Optional without default
  filter: z.string().optional().describe('Filter expression'),

  // Enum values
  sortBy: z.enum(['relevance', 'date', 'popularity']).default('relevance'),

  // Nested objects
  options: z.object({
    caseSensitive: z.boolean().default(false),
    wholeWord: z.boolean().default(false),
  }).optional(),

  // Arrays
  tags: z.array(z.string()).optional(),
});
```

### Output Schema

Define the structure of results returned to the model:

```typescript lines theme={null}
const outputSchema = z.object({
  results: z.array(z.object({
    id: z.string(),
    title: z.string(),
    score: z.number(),
  })),
  metadata: z.object({
    totalCount: z.number(),
    searchTimeMs: z.number(),
  }),
});
```

### Event Schema (Generator Tools)

Define progress/status events for generator tools:

```typescript lines theme={null}
const eventSchema = z.object({
  stage: z.enum(['initializing', 'processing', 'finalizing']),
  progress: z.number(),
  currentItem: z.string().optional(),
});
```

## Type Inference

The SDK provides utilities to extract types from tools:

```typescript lines theme={null}
import type { InferToolInput, InferToolOutput, InferToolEvent } from '@openrouter/agent';

// Get the input type
type WeatherInput = InferToolInput<typeof weatherTool>;
// { location: string }

// Get the output type
type WeatherOutput = InferToolOutput<typeof weatherTool>;
// { temperature: number; conditions: string }

// Get event type (generator tools only)
type SearchEvent = InferToolEvent<typeof searchTool>;
// { progress: number; message: string }
```

## Using Tools with callModel

### Single Tool

```typescript lines theme={null}
const openrouter = new OpenRouter({ apiKey: process.env.OPENROUTER_API_KEY });

const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'What is the weather in Tokyo?',
  tools: [weatherTool],
});

// Tools are automatically executed
const text = await result.getText();
// "The weather in Tokyo is 22°C and sunny."
```

### Multiple Tools

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Search for TypeScript tutorials and calculate 2+2',
  tools: [searchTool, calculatorTool],
});
```

### Type-Safe Tool Calls with `as const`

Use `as const` for full type inference on tool calls:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'What is the weather?',
  tools: [weatherTool, searchTool] as const,
  maxToolRounds: 0, // Get tool calls without executing
});

// Tool calls are typed as union of tool inputs
for await (const toolCall of result.getToolCallsStream()) {
  if (toolCall.name === 'get_weather') {
    // toolCall.arguments is typed as { location: string }
    console.log('Weather for:', toolCall.arguments.location);
  }
}
```

## Execute Context

Tool execute functions receive a flat context object as their second argument. It merges `TurnContext` fields with a `tools` map and a `setContext()` method:

```typescript lines theme={null}
const contextAwareTool = tool({
  name: 'context_tool',
  inputSchema: z.object({ data: z.string() }),
  outputSchema: z.object({ result: z.string() }),
  execute: async (params, context) => {
    // TurnContext fields are available directly
    console.log('Turn:', context.numberOfTurns);
    console.log('History:', context.turnRequest?.input);
    console.log('Model:', context.turnRequest?.model);

    return {
      result: `Processed on turn ${context.numberOfTurns}`,
    };
  },
});
```

### Context Properties

| Property | Type | Description |
| - | - | - |
| `numberOfTurns` | `number` | Current turn number (1-indexed) |
| `turnRequest` | `OpenResponsesRequest \| undefined` | Current request object |
| `toolCall` | `OpenResponsesFunctionToolCall \| undefined` | The tool call being executed |
| `local` | `Readonly<TContext>` | This tool's own context (read-only) |
| `setContext` | `(partial: Partial<TContext>) => void` | Mutate this tool's context |
| `shared` | `Readonly<TShared>` | Shared context visible to all tools |
| `setSharedContext` | `(partial: Partial<TShared>) => void` | Mutate shared context |

## Tool Context

Tools can declare a `contextSchema` to receive typed, persistent context data from the caller. Context is keyed by tool name and persists across turns.

### Declaring contextSchema

```typescript expandable lines theme={null}
const weatherTool = tool({
  name: 'get_weather',
  description: 'Get weather for a location',
  inputSchema: z.object({
    location: z.string(),
  }),
  outputSchema: z.object({
    temperature: z.number(),
  }),
  // Declare what context this tool needs
  contextSchema: z.object({
    apiKey: z.string(),
    units: z.enum(['celsius', 'fahrenheit']),
  }),
  execute: async (params, context) => {
    // Access this tool's own context via local
    const { apiKey, units } = context.local;

    const weather = await fetchWeather(
      params.location,
      apiKey,
      units,
    );
    return { temperature: weather.temp };
  },
});
```

### Providing Context in callModel

Pass context keyed by tool name:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'What is the weather in Tokyo?',
  tools: [weatherTool, dbTool] as const,

  // Static context — keyed by tool name
  context: {
    get_weather: { apiKey: 'sk-...', units: 'celsius' },
    db_query: { connectionString: 'postgres://...' },
  },
});
```

### Dynamic Context

Use an async function for one-time initialization that needs to fetch data:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'What is the weather?',
  tools: [weatherTool] as const,

  // Resolved once at turn 0 to seed the store
  context: async () => ({
    get_weather: {
      apiKey: await fetchApiKey(),
      units: 'celsius',
    },
  }),
});
```

> [!NOTE]
>
> `resolveContext` runs once at turn 0 to seed the context store. For per-turn mutations, use `setContext()` inside your tool's `execute` function.

### Mutating Context with setContext

Tools can update their own context using `setContext()`. Changes persist across turns via the shared store and are visible immediately. `context.local` is a live getter that always reads the latest values:

```typescript expandable lines theme={null}
const authTool = tool({
  name: 'auth',
  inputSchema: z.object({ action: z.string() }),
  contextSchema: z.object({
    token: z.string(),
    refreshCount: z.number(),
  }),
  execute: async (params, context) => {
    const { token } = context.local;

    if (isExpired(token)) {
      const newToken = await refreshToken(token);
      // Mutate own context — persists to next turn
      context.setContext({
        token: newToken,
        refreshCount:
          context.local.refreshCount + 1,
      });
    }

    return { success: true };
  },
});
```

### Observing Context Changes

Use `getContextUpdates()` on `ModelResult` to observe context mutations in real time:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Authenticate and fetch data',
  tools: [authTool] as const,
  context: {
    auth: { token: 'initial', refreshCount: 0 },
  },
});

for await (const snapshot of result.getContextUpdates()) {
  console.log('Context changed:', snapshot);
  // { auth: { token: 'new-token', refreshCount: 1 } }
}
```

### Shared Context

Use `sharedSchema` on `tool()` and `sharedContextSchema` on `callModel` to share typed state across tools:

```typescript expandable lines theme={null}
const SharedContextSchema = z.object({
  _sessionId: z.string().optional(),
});

const execTool = tool({
  name: 'sandbox_exec',
  inputSchema: z.object({ command: z.string() }),
  sharedSchema: SharedContextSchema,
  execute: async (input, ctx) => {
    // Read shared state set by any tool
    const sid = ctx.shared._sessionId;
    const session = await connect(sid);
    // Write shared state for other tools
    ctx.setSharedContext({ _sessionId: session.id });
    return await session.exec(input.command);
  },
});

const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Run a command',
  tools: [execTool] as const,
  sharedContextSchema: SharedContextSchema,
  context: {
    shared: { _sessionId: 'existing-session' },
    sandbox_exec: {},
  },
});
```

> [!NOTE]
>
> `context.local` is scoped to one tool. `context.shared` is visible to all tools and persists across turns. Pass the same `sharedSchema` to each tool for typed access, and `sharedContextSchema` to `callModel` for runtime validation.

## Tool Execution

callModel automatically executes tools and handles multi-turn conversations. When the model calls a tool, the SDK executes it, sends the result back, and continues until the model provides a final response.

### Automatic Execution Flow

When you provide tools with execute functions:

```typescript expandable lines theme={null}
import { OpenRouter, tool } from '@openrouter/agent';
import { z } from 'zod';

const weatherTool = tool({
  name: 'get_weather',
  inputSchema: z.object({ location: z.string() }),
  outputSchema: z.object({ temperature: z.number() }),
  execute: async ({ location }) => {
    return { temperature: await fetchTemperature(location) };
  },
});

const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'What is the weather in Paris?',
  tools: [weatherTool],
});

// getText() waits for all tool execution to complete
const text = await result.getText();
// "The weather in Paris is 18°C."
```

### Execution Sequence

1. Model receives prompt and generates tool call
2. SDK extracts tool call and validates arguments
3. Tool's execute function runs
4. Result is formatted and sent back to model
5. Model generates final response (or more tool calls)
6. Process repeats until model is done

### Controlling Execution Rounds

#### maxToolRounds (Number)

Limit the maximum number of tool execution rounds:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Research this topic thoroughly',
  tools: [searchTool, analyzeTool],
  maxToolRounds: 3, // Stop after 3 rounds of tool execution
});
```

Setting `maxToolRounds: 0` disables automatic execution - you get raw tool calls.

#### maxToolRounds (Function)

Use a function for dynamic control:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Research and analyze',
  tools: [searchTool],
  maxToolRounds: (context) => {
    // Continue if under 5 turns
    return context.numberOfTurns < 5;
  },
});
```

The function receives `TurnContext` and returns `true` to continue or `false` to stop.

### Accessing Tool Calls

#### getToolCalls()

Get all tool calls from the initial response (before auto-execution):

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'What is the weather in Tokyo and Paris?',
  tools: [weatherTool],
  maxToolRounds: 0, // Don't auto-execute
});

const toolCalls = await result.getToolCalls();

for (const call of toolCalls) {
  console.log(`Tool: ${call.name}`);
  console.log(`ID: ${call.id}`);
  console.log(`Arguments:`, call.arguments);
}
```

#### getToolCallsStream()

Stream tool calls as they complete:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Check weather in multiple cities',
  tools: [weatherTool],
  maxToolRounds: 0,
});

for await (const toolCall of result.getToolCallsStream()) {
  console.log(`Received tool call: ${toolCall.name}`);

  // Process each tool call as it arrives
  const weatherResult = await processWeatherRequest(toolCall.arguments);
  console.log('Result:', weatherResult);
}
```

### Tool Stream Events

#### getToolStream()

Stream both argument deltas and preliminary results:

```typescript expandable lines theme={null}
const searchTool = tool({
  name: 'search',
  inputSchema: z.object({ query: z.string() }),
  eventSchema: z.object({ progress: z.number(), status: z.string() }),
  outputSchema: z.object({ results: z.array(z.string()) }),
  execute: async function* ({ query }) {
    yield { progress: 25, status: 'Searching...' };
    yield { progress: 50, status: 'Processing...' };
    yield { progress: 75, status: 'Ranking...' };
    yield { progress: 100, status: 'Complete' };
    return { results: ['result1', 'result2'] };
  },
});

const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Search for TypeScript tutorials',
  tools: [searchTool],
});

for await (const event of result.getToolStream()) {
  switch (event.type) {
    case 'delta':
      // Raw argument delta from the model
      process.stdout.write(event.content);
      break;
    case 'preliminary_result':
      // Progress from generator tool
      console.log(`Progress: ${event.result.progress}% - ${event.result.status}`);
      break;
  }
}
```

#### Event Types

| Type | Description |
| - | - |
| `delta` | Raw tool call argument chunks from model |
| `preliminary_result` | Progress events from generator tools (intermediate yields) |

### Tool Result Events

When using `getFullResponsesStream()`, you can also receive `tool.result` events that fire when a tool execution completes:

```typescript lines theme={null}
for await (const event of result.getFullResponsesStream()) {
  switch (event.type) {
    case 'tool.preliminary_result':
      // Intermediate progress from generator tools
      console.log(`Progress (${event.toolCallId}):`, event.result);
      break;
    case 'tool.result':
      // Final result when tool execution completes
      console.log(`Tool ${event.toolCallId} completed`);
      console.log('Result:', event.result);
      // Access any preliminary results that were emitted during execution
      if (event.preliminaryResults) {
        console.log('All progress events:', event.preliminaryResults);
      }
      break;
  }
}
```

#### ToolResultEvent Type

```typescript lines theme={null}
type ToolResultEvent<TResult = unknown, TPreliminaryResults = unknown> = {
  type: 'tool.result';
  toolCallId: string;
  /**
   * Origin of the tool: `'client'` for locally-defined tools (result is
   * precisely typed from your `outputSchema`), `'mcp'` for tools wrapped from a
   * remote MCP server (result is `unknown`).
   */
  source: 'client' | 'mcp';
  result: TResult;
  timestamp: number;
  preliminaryResults?: TPreliminaryResults[];
};
```

The `tool.result` event provides the final output from tool execution along with all intermediate `preliminaryResults` that were yielded during execution (for generator tools). This is useful when you need both real-time progress updates and a summary of all progress at completion.

> [!WARNING]
>
> The `source` field was added in `@openrouter/agent` 0.8.0. This is an additive breaking change for consumers that exhaustively matched (or constructed) `tool.result` events; add a `source` case, or spread it through, to keep type-checking clean.

#### Narrowing MCP vs. client results

Mixing an MCP tool (whose output schema is `unknown`) with fully-typed local tools used to collapse the entire result union to `unknown`. The `source` discriminant fixes that: narrow on `source === 'client'` to recover your schema-derived result types, and treat `source === 'mcp'` results as `unknown`.

```typescript lines theme={null}
for await (const event of result.getFullResponsesStream()) {
  if (event.type !== 'tool.result') continue;

  if (event.source === 'client') {
    // event.result is typed from the tool's outputSchema union
    console.log('Local tool result:', event.result);
  } else {
    // event.source === 'mcp': result stays unknown; validate before use
    console.log('MCP tool result (unknown):', event.result);
  }
}
```

Helpers exported from `@openrouter/agent`:

* `markMcp(tool)`: brand a tool as originating from an MCP server. `@openrouter/mcp` brands its wrapped tools automatically, so most callers just spread `mcp.tools` and never call this directly.
* `isMcpTool(tool)`: runtime guard for the MCP brand.
* `McpBranded<T>`: type-level brand that keeps MCP results isolated in the `ToolResultEvent` / `ToolExecutionResult` unions.

The brand is purely informational: MCP tools still execute locally and serialize on the wire as `type: 'function'`.

### Parallel Tool Execution

When the model calls multiple tools, they execute in parallel:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Get weather in Paris, Tokyo, and New York simultaneously',
  tools: [weatherTool],
});

// All three weather calls execute in parallel
const text = await result.getText();
```

### Manual Tool Handling

For tools without execute functions:

```typescript expandable lines theme={null}
const confirmTool = tool({
  name: 'send_email',
  description: 'Send an email (requires confirmation)',
  inputSchema: z.object({
    to: z.string().email(),
    subject: z.string(),
    body: z.string(),
  }),
  execute: false, // Manual handling
});

const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Send an email to alice@example.com',
  tools: [confirmTool],
  maxToolRounds: 0,
});

const toolCalls = await result.getToolCalls();

for (const call of toolCalls) {
  if (call.name === 'send_email') {
    // Show confirmation UI
    const confirmed = await showConfirmDialog(call.arguments);

    if (confirmed) {
      await sendEmail(call.arguments);
    }
  }
}
```

### Execution Results

Access execution metadata through getResponse():

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'What is 2+2 and the weather in Paris?',
  tools: [calculatorTool, weatherTool],
});

const response = await result.getResponse();

// Response includes all execution rounds
console.log('Final output:', response.output);
console.log('Usage:', response.usage);
```

## Error Handling

### Tool Execution Errors

Errors in execute functions are caught and sent back to the model:

```typescript expandable lines theme={null}
const riskyTool = tool({
  name: 'risky_operation',
  inputSchema: z.object({ input: z.string() }),
  outputSchema: z.object({ result: z.string() }),
  execute: async (params) => {
    if (params.input === 'fail') {
      throw new Error('Operation failed: invalid input');
    }
    return { result: 'success' };
  },
});

const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Try the risky operation with "fail"',
  tools: [riskyTool],
});

// Model receives error message and can respond appropriately
const text = await result.getText();
// "I tried the operation but it failed with: Operation failed: invalid input"
```

### Validation Errors

Invalid tool arguments are caught before execution:

```typescript lines theme={null}
const strictTool = tool({
  name: 'strict',
  inputSchema: z.object({
    email: z.string().email(),
    age: z.number().min(0).max(150),
  }),
  execute: async (params) => {
    // Only runs with valid input
    return { valid: true };
  },
});
```

### Graceful Error Handling

Handle errors gracefully in execute functions:

```typescript lines theme={null}
const robustTool = tool({
  name: 'fetch_data',
  inputSchema: z.object({ url: z.string().url() }),
  outputSchema: z.object({
    data: z.unknown().optional(),
    error: z.string().optional(),
  }),
  execute: async (params) => {
    try {
      const response = await fetch(params.url);
      if (!response.ok) {
        return { error: `HTTP ${response.status}: ${response.statusText}` };
      }
      return { data: await response.json() };
    } catch (error) {
      return { error: `Failed to fetch: ${error.message}` };
    }
  },
});
```

## Best Practices

### Descriptive Names and Descriptions

```typescript lines theme={null}
// Good: Clear name and description
const tool1 = tool({
  name: 'search_knowledge_base',
  description: 'Search the company knowledge base for documents, FAQs, and policies. Returns relevant articles with snippets.',
  // ...
});

// Avoid: Vague or generic
const tool2 = tool({
  name: 'search',
  description: 'Searches stuff',
  // ...
});
```

### Schema Descriptions

Add `.describe()` to help the model understand parameters:

```typescript lines theme={null}
const inputSchema = z.object({
  query: z.string().describe('Natural language search query'),
  maxResults: z.number()
    .min(1)
    .max(100)
    .default(10)
    .describe('Maximum number of results to return (1-100)'),
  dateRange: z.enum(['day', 'week', 'month', 'year', 'all'])
    .default('all')
    .describe('Filter results by time period'),
});
```

### Idempotent Tools

Design tools to be safely re-executable:

```typescript lines theme={null}
const createUserTool = tool({
  name: 'create_user',
  inputSchema: z.object({
    email: z.string().email(),
    name: z.string(),
  }),
  execute: async (params) => {
    // Check if user exists first
    const existing = await findUserByEmail(params.email);
    if (existing) {
      return { userId: existing.id, created: false };
    }

    const user = await createUser(params);
    return { userId: user.id, created: true };
  },
});
```

### Timeout Handling

Wrap long-running operations:

```typescript lines theme={null}
const longRunningTool = tool({
  name: 'process_data',
  inputSchema: z.object({ dataId: z.string() }),
  execute: async (params) => {
    const timeoutMs = 30000;

    const result = await Promise.race([
      processData(params.dataId),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Operation timed out')), timeoutMs)
      ),
    ]);

    return result;
  },
});
```

## Next Steps

* **[Async Tools](https://openrouter.ai/docs/agent-sdk/call-model/async-tools.md)** - Background and deferred execution, task check-ins, steering, and subagent tools
* **[Lifecycle Hooks](https://openrouter.ai/docs/agent-sdk/call-model/lifecycle-hooks.md)** - Observe or control tool execution, approvals, prompts, and sessions
* **[Tool Approval & State](https://openrouter.ai/docs/agent-sdk/call-model/tool-approval-state.md)** - Human-in-the-loop approval and conversation persistence
* **[nextTurnParams](https://openrouter.ai/docs/agent-sdk/call-model/next-turn-params.md)** - Tool-driven context injection
* **[Stop Conditions](https://openrouter.ai/docs/agent-sdk/call-model/stop-conditions.md)** - Advanced execution control
* **[Examples](https://openrouter.ai/docs/agent-sdk/call-model/examples/weather-tool.md)** - Complete tool implementations
