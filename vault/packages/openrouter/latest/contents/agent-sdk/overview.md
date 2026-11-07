> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Agent SDK

> Build AI agents with multi-turn loops, tools, and conversation state

The Agent SDK (`@openrouter/agent`) provides the primitives you need to build agentic applications on OpenRouter. Instead of manually wiring up conversation loops, tool dispatch, and state tracking, the Agent SDK handles all of that so you can focus on defining *what* your agent does.

The Agent SDK is built on top of the TypeScript [Client SDK](https://openrouter.ai/docs/client-sdks/overview.md): `@openrouter/agent` depends on `@openrouter/sdk` and installs it for you, so its `OpenRouter` class accepts the same client options. Add `@openrouter/sdk` to your own dependencies if you also want to call REST endpoints directly, so that you control which version you get.

## When to use the Agent SDK

Choose the Agent SDK when you need **agentic behavior**: multi-step reasoning where the model calls tools, processes results, and decides what to do next.

* **Multi-turn agent loops**: `callModel` automatically loops until a stop condition is met
* **Tool definitions**: define tools with the `tool()` helper and the SDK executes them for you
* **Stop conditions**: control when the loop ends with `stepCountIs`, `hasToolCall`, `maxCost`, and more
* **Conversation state**: the SDK tracks messages, tool results, and context across turns
* **Streaming**: real-time token output within each agent step
* **Dynamic parameters**: change model, temperature, or tools between turns based on context
* **MCP tools**: plug in a remote [Model Context Protocol](https://openrouter.ai/docs/agent-sdk/call-model/mcp-tools.md) server and its tools drop straight into `callModel`

> [!TIP]
>
> If you only need simple request/response calls to a model without agent loops, the [Client SDKs](https://openrouter.ai/docs/client-sdks/overview.md) are a lighter-weight option.

## Installation

| Language | Package |
| - | - |
| TypeScript | [`@openrouter/agent`](https://www.npmjs.com/package/@openrouter/agent) |
| Python | [`openrouter-agent-sdk`](https://pypi.org/project/openrouter-agent-sdk/) |
| Go | [`go-agent`](https://pkg.go.dev/github.com/OpenRouterTeam/go-agent) |

```bash title="npm" lines theme={null}
npm install @openrouter/agent
```

```bash title="pnpm" lines theme={null}
pnpm add @openrouter/agent
```

```bash title="yarn" lines theme={null}
yarn add @openrouter/agent
```

```bash title="bun" lines theme={null}
bun add @openrouter/agent
```

```bash title="deno" lines theme={null}
deno add npm:@openrouter/agent
```

```bash title="pip (Python)" lines theme={null}
pip install openrouter-agent-sdk
```

```bash title="go (Go)" lines theme={null}
go get github.com/OpenRouterTeam/go-agent
```

The Python and Go packages are ports of `@openrouter/agent` kept in sync automatically. See the [Python agent SDK repository](https://github.com/OpenRouterTeam/python-agent) and [Go agent SDK repository](https://github.com/OpenRouterTeam/go-agent) for language-specific details. The rest of this Agent SDK documentation uses TypeScript examples.

## Quick example

```typescript expandable lines theme={null}
import { OpenRouter, tool } from '@openrouter/agent';
import { z } from 'zod';

const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const weatherTool = tool({
  name: 'get_weather',
  description: 'Get the current weather for a location',
  inputSchema: z.object({
    location: z.string().describe('City name'),
  }),
  execute: async ({ location }) => {
    return { temperature: 72, condition: 'sunny', location };
  },
});

const result = openrouter.callModel({
  model: '~anthropic/claude-sonnet-latest',
  input: 'What is the weather in San Francisco?',
  tools: [weatherTool],
});

const text = await result.getText();
console.log(text);
```

The SDK sends the input to the model, receives a tool call, executes `get_weather`, feeds the result back, and returns the final response, all in one `callModel` invocation.

## Core concepts

### `callModel`

The main entry point. It runs an inference loop that:

1. Sends the `input` to the model
2. If the model returns tool calls, executes them automatically
3. Appends tool results to the conversation
4. Repeats until a stop condition is met or no more tool calls are made

See the [Call Model documentation](https://openrouter.ai/docs/agent-sdk/call-model) for the full API.

### Tools

Define tools with the `tool()` helper. Each tool has a name, description, Zod parameter schema, and an `execute` function. The SDK handles serialization, validation, and dispatch.

```typescript lines theme={null}
import { tool } from '@openrouter/agent';
import { z } from 'zod';

const searchTool = tool({
  name: 'search',
  description: 'Search the web',
  inputSchema: z.object({ query: z.string() }),
  execute: async ({ query }) => {
    // Your search implementation
    return { results: ['...'] };
  },
});
```

### Stop conditions

Control when the agent loop terminates:

```typescript lines theme={null}
import { OpenRouter, stepCountIs, maxCost } from '@openrouter/agent';

const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const result = openrouter.callModel({
  model: '~anthropic/claude-sonnet-latest',
  input: 'Research this topic thoroughly',
  tools: [searchTool],
  stopWhen: [stepCountIs(10), maxCost(0.50)],
});
```

## Agent SDK vs Client SDKs

| | Agent SDK | Client SDKs |
| - | - | - |
| **Focus** | Agentic primitives: multi-turn loops, tools, stop conditions | Lean API client that mirrors the REST API with full type safety |
| **Use when** | You want built-in agent loops, tool execution, and state management | You want direct model calls and manage orchestration yourself |
| **Conversation state** | Managed for you via `callModel` | You manage it |
| **Tool execution** | Automatic with the `tool()` helper | You dispatch tool calls |
| **Languages** | TypeScript, Python, Go | TypeScript, Python, Go |

## Next steps

* [Call Model](https://openrouter.ai/docs/agent-sdk/call-model): the complete `callModel` API reference
* [Tools](https://openrouter.ai/docs/agent-sdk/call-model/tools.md): defining and using tools
* [Stop Conditions](https://openrouter.ai/docs/agent-sdk/call-model/stop-conditions.md): controlling agent loop termination
* [Streaming](https://openrouter.ai/docs/agent-sdk/call-model/streaming.md): real-time token output
* [DevTools](https://openrouter.ai/docs/agent-sdk/dev-tools/devtools.md): telemetry capture and visualization for development
* [Migrating from @openrouter/sdk](https://openrouter.ai/docs/agent-sdk/agent-migration.md): move agent imports to the standalone package
