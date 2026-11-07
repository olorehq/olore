> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# MCP Tools

> Connect remote Model Context Protocol servers to the Agent SDK with @openrouter/mcp (auth, caching, streaming, resources, and elicitation).

`@openrouter/mcp` connects to a remote [Model Context Protocol](https://modelcontextprotocol.io) server (Streamable HTTP or SSE) and exposes its tools as first-class `callModel` tools. You authenticate once, spread the returned tools into `callModel({ tools })`, and the SDK handles discovery, invocation, progress events, cancellation, resources, and elicitation.

> [!NOTE]
>
> `stdio` MCP servers are intentionally out of scope. This package targets remote servers you can reach over HTTP.

## When to use it

Reach for `@openrouter/mcp` when you want to plug an existing MCP server (Linear, GitHub, an internal tool server) into an Agent SDK loop without hand-rolling the protocol. It complements your own [`tool()`](https://openrouter.ai/docs/agent-sdk/call-model/tools) definitions. MCP tools and locally-defined tools can live in the same `tools` array, and the SDK keeps the two apart with a `source` discriminant so your typed tool results stay typed.

If you only need a hosted MCP server for your editor or coding assistant, see the [OpenRouter MCP server guide](https://openrouter.ai/docs/guides/overview/mcp-server.md) instead.

## Installation

```bash title="npm" lines theme={null}
npm install @openrouter/mcp @openrouter/agent
```

```bash title="pnpm" lines theme={null}
pnpm add @openrouter/mcp @openrouter/agent
```

```bash title="bun" lines theme={null}
bun add @openrouter/mcp @openrouter/agent
```

## Quick start

Call `createMCPTools()` once, spread `mcp.tools` into `callModel`, and close the handle when you're done:

```typescript expandable lines theme={null}
import { OpenRouter } from '@openrouter/agent';
import { callModel } from '@openrouter/agent/call-model';
import { createMCPTools } from '@openrouter/mcp';

const client = new OpenRouter({ apiKey: process.env.OPENROUTER_API_KEY });

const mcp = await createMCPTools({
  url: 'https://mcp.example.com/mcp',
  auth: { kind: 'bearer', token: process.env.MCP_TOKEN },
});

const result = callModel(client, {
  model: 'anthropic/claude-opus-4-8',
  input: 'What are my three most recently updated issues?',
  tools: mcp.tools,
});

console.log(await result.getText());
await mcp.close();
```

`createMCPTools()` returns a handle:

* `mcp.tools`, an array of Agent SDK tools, one per MCP tool the server advertises. Spread them directly into `callModel({ tools })`.
* `mcp.serialize()`, capture the current tool list (and, optionally, credentials) as JSON for cache reuse.
* `mcp.close()`, disconnect from the server. Call it when you're done with the handle.

## Authentication

Auth is supplied once and reused for tool discovery and every tool call. Choose the shape that matches how your MCP server expects to be called:

```typescript lines theme={null}
// Static bearer token
auth: { kind: 'bearer', token: process.env.MCP_TOKEN }

// Arbitrary headers (API keys, tenant identifiers, etc.)
auth: { kind: 'headers', headers: { 'X-API-Key': process.env.MCP_KEY } }

// Pluggable OAuth — you own token refresh and storage
auth: { kind: 'oauth', provider }
```

Prefer an `OAuthClientProvider` over caching a static bearer token when the server supports OAuth. The transport refreshes through the provider automatically, so tokens stay valid without you re-issuing them.

## Combining with your own tools

MCP tools coexist with your own `tool()` definitions. Every tool the wrapper produces is marked with the `_mcp` brand, so the Agent SDK can tell the two apart and preserve type safety on your typed results:

```typescript expandable lines theme={null}
import { OpenRouter, tool, isMcpTool } from '@openrouter/agent';
import { callModel } from '@openrouter/agent/call-model';
import { createMCPTools } from '@openrouter/mcp';
import { z } from 'zod';

const client = new OpenRouter({ apiKey: process.env.OPENROUTER_API_KEY });

const weatherTool = tool({
  name: 'get_weather',
  description: 'Get the current weather for a location',
  inputSchema: z.object({ location: z.string() }),
  outputSchema: z.object({ temperature: z.number(), conditions: z.string() }),
  execute: async ({ location }) => fetchWeather(location),
});

const mcp = await createMCPTools({
  url: 'https://mcp.example.com/mcp',
  auth: { kind: 'bearer', token: process.env.MCP_TOKEN },
});

const result = callModel(client, {
  model: 'anthropic/claude-opus-4-8',
  input: 'Summarize my open Linear issues and the weather in SF.',
  tools: [weatherTool, ...mcp.tools],
});

for await (const event of result.getToolStream()) {
  if (event.type !== 'tool.result') continue;

  if (event.source === 'client' && event.toolName === 'get_weather') {
    // `event.result` is typed from weatherTool's outputSchema
    console.log(`Weather: ${event.result.temperature}°`);
  }

  if (event.source === 'mcp') {
    // MCP results are `unknown` — narrow them yourself
    console.log(`MCP tool ${event.toolName} returned`, event.result);
  }
}
```

### The `source` discriminant

`ToolExecutionResult` (and the streaming `tool.result` event) carry `source: 'client' | 'mcp'`:

* `source: 'client'`, your own tools. `result` is typed from the tool's `outputSchema`.
* `source: 'mcp'`, a wrapped MCP tool. `result` is `unknown` because the MCP server describes its output at runtime.

Narrowing on `source === 'client'` recovers precise, schema-derived results for every locally-defined tool. Without it, a single untyped MCP tool would collapse the entire result union to `unknown`.

### `isMcpTool()` and `markMcp()`

Two helpers let you interact with the brand directly:

* `isMcpTool(tool)`, runtime type guard for the `_mcp` brand. Useful in lifecycle hooks or custom stop conditions that need to treat MCP tools differently.
* `markMcp(tool)`, add the brand to an already-built client tool. `@openrouter/mcp` uses this internally on every wrapped tool (including the synthetic resource tools); you rarely need to call it yourself.

```typescript lines theme={null}
import { isMcpTool } from '@openrouter/agent';

for (const t of [weatherTool, ...mcp.tools]) {
  console.log(t.function.name, isMcpTool(t) ? '(mcp)' : '(client)');
}
```

## Caching and rehydration

Every call to `createMCPTools()` performs an `initialize` + `tools/list` round-trip. For cold-start-heavy workloads (serverless, edge, per-request handlers) you can persist a snapshot and rebuild the handle without touching the network.

### Manual serialization

```typescript expandable lines theme={null}
import { createMCPTools, rehydrateMCPTools } from '@openrouter/mcp';

const mcp = await createMCPTools({
  url: 'https://mcp.example.com/mcp',
  auth: { kind: 'bearer', token: process.env.MCP_TOKEN },
  cacheCredentials: true,
});

const snapshot = await mcp.serialize(); // plain JSON — store anywhere
await mcp.close();

// Later, in another process:
const mcp2 = await rehydrateMCPTools({
  snapshot,
  auth: { kind: 'bearer', token: process.env.MCP_TOKEN },
});
```

### Using an `MCPCacheStore`

Pass a store and key to `createMCPTools()` and it will rehydrate on hit and connect + write on miss automatically:

```typescript lines theme={null}
import { createMCPTools, InMemoryMCPCacheStore } from '@openrouter/mcp';

const store = new InMemoryMCPCacheStore(); // or your own Redis/DB-backed MCPCacheStore

const mcp = await createMCPTools({
  url: 'https://mcp.example.com/mcp',
  auth: { kind: 'bearer', token: process.env.MCP_TOKEN },
  cache: { store, key: `mcp:${userId}` },
  staleness: { maxAgeMs: 60 * 60 * 1000 },
});
```

Implement `MCPCacheStore` (a small `get` / `set` / `delete` interface) to back the cache with Redis, a database, or any KV store you already run.

> [!WARNING]
>
> `cacheCredentials` is `false` by default. When enabled, snapshots contain bearer tokens or headers, so treat the store as a secret store and namespace cache keys by principal in multi-tenant setups.

## Streaming, progress, and cancellation

Wrapped MCP tools behave like [generator tools](https://openrouter.ai/docs/agent-sdk/call-model/tools.md#generator-tools). Progress notifications the server emits during a tool call surface as `tool.progress` events on the same streams your own tools use:

```typescript lines theme={null}
for await (const event of result.getToolStream()) {
  if (event.type === 'tool.progress' && event.source === 'mcp') {
    console.log(`[${event.toolName}] ${event.progress}`);
  }
}
```

Pass an `AbortSignal` to `createMCPTools({ signal })` and every in-flight tool call is cancelled when the signal aborts. Individual `callModel` invocations can also be aborted through their own signal.

`autoRefreshOnListChanged` (on by default) keeps `mcp.tools` in sync when the server emits `tools/list_changed`. The next `callModel` step sees the updated list without you reconnecting.

## Resources and elicitation

> [accordion] Resources as synthetic tools
>
> When the MCP server advertises resources, `@openrouter/mcp` exposes them as two synthetic tools the model can call directly:
>
> * `list_resources`, enumerate available resources.
> * `read_resource`, fetch a resource by URI.
>
> These are on by default. Set `resources: false` to hide them, or `resources: { mode: 'synthetic-tools' }` to configure future modes.

> [accordion] Handling elicitation requests
>
> Some MCP servers pause a tool call to ask the caller for structured input (`elicitation/create`). Pass an `onElicitation` handler to answer them:
>
> ```typescript lines theme={null}
> const mcp = await createMCPTools({
>   url,
>   auth,
>   onElicitation: async ({ message, requestedSchema }) => {
>     const answer = await promptUser(message, requestedSchema);
>     return { action: 'accept', content: answer };
>   },
> });
> ```
>
> If you omit the handler, requests are auto-declined so the tool call fails cleanly rather than hanging.

## Multiple servers

Spread the tools from more than one handle to compose several MCP servers into a single agent. Use `toolNamePrefix` to keep names unambiguous:

```typescript lines theme={null}
const [github, linear] = await Promise.all([
  createMCPTools({ url: githubUrl, auth: gh, toolNamePrefix: 'github_' }),
  createMCPTools({ url: linearUrl, auth: ln, toolNamePrefix: 'linear_' }),
]);

const result = callModel(client, {
  model: 'anthropic/claude-opus-4-8',
  input: 'Find the Linear issue linked to GitHub PR #42.',
  tools: [...github.tools, ...linear.tools],
});
```

## Options

| Option | Description |
| - | - |
| `url` | Remote MCP server endpoint. |
| `transport` | `'streamableHttp'` (default, falls back to SSE) or `'sse'`. |
| `auth` | Bearer token, custom headers, or an `OAuthClientProvider`. |
| `fetch` | Custom `fetch` implementation for all network requests. |
| `clientInfo` | Client identity sent during `initialize`. |
| `toolNamePrefix` | Prefix applied to every wrapped tool name. |
| `includeTools` / `excludeTools` | Allow/deny lists by MCP tool name. |
| `onUnconvertibleSchema` | `'looseLeaf'` (default) or `'throw'` for exotic JSON Schema. |
| `cache` / `cacheCredentials` / `staleness` | Caching controls (see [Caching and rehydration](#caching-and-rehydration)). |
| `resources` | Expose synthetic `list_resources` / `read_resource` tools (default on). |
| `emitProgress` | Stream MCP progress as generator-tool events (default on). |
| `autoRefreshOnListChanged` | Re-list on `tools/list_changed` (default on). |
| `onElicitation` | Handle server elicitation requests. |
| `signal` | `AbortSignal` threaded into every tool call. |

## Related

* [Tools](https://openrouter.ai/docs/agent-sdk/call-model/tools.md), define your own tools with `tool()` and the Zod schema helpers.
* [Streaming](https://openrouter.ai/docs/agent-sdk/call-model/streaming.md), consume `tool.result` and `tool.progress` events, including the `source` discriminant.
* [OpenRouter MCP server](https://openrouter.ai/docs/guides/overview/mcp-server.md), the hosted MCP endpoint for your editor or coding assistant.
