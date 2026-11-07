> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Quickstart

> Get started with OpenRouter

OpenRouter gives you access to hundreds of AI models through a single API endpoint. It handles fallbacks automatically and picks the most cost-effective option for each request.

There are three ways to integrate with OpenRouter, depending on how much control you want:

| Approach | Best for |
| - | - |
| **[API](#using-the-openrouter-api)** | Full control, any language, no dependencies |
| **[Client SDKs](#using-the-client-sdks)** | Type-safe model calls with minimal overhead |
| **[Agent SDK](#using-the-agent-sdk)** | Building agents with tool use, loops, and state |

> [!NOTE]
>
> Read [github.com/OpenRouterTeam/skills/tree/main/skills/create-agent-tui](https://github.com/OpenRouterTeam/skills/tree/main/skills/create-agent-tui) and follow the instructions to build an agent using OpenRouter.

> [!TIP]
>
> Looking for information about free models and rate limits? Please see the [FAQ](https://openrouter.ai/docs/faq.md#how-are-rate-limits-calculated)

In the examples below, the OpenRouter-specific headers are optional. Setting them allows your app to appear on the OpenRouter leaderboards. For detailed information about app attribution, see our [App Attribution guide](https://openrouter.ai/docs/app-attribution.md).

***

## Using the OpenRouter API

The most direct way to use OpenRouter. Send standard HTTP requests to the [`/api/v1/responses`](https://openrouter.ai/docs/api_reference/responses/overview) endpoint. It works with any language or framework.

> [!TIP]
>
> You can use the interactive [Request Builder](https://openrouter.ai/request-builder) to generate OpenRouter API requests in the language of your choice.

> [!NOTE]
>
> The examples below use `~openai/gpt-sol-latest`, a [latest alias](https://openrouter.ai/docs/guides/features/latest-resolution.md) that always resolves to the newest model in the OpenAI GPT Sol family, so your code keeps using the freshest version without redeploying. You can substitute any model slug here. Browse the full catalog at [openrouter.ai/models](https://openrouter.ai/models), or list every available slug programmatically via the [`GET /api/v1/models`](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties) endpoint.

```python title="Python" lines theme={null}
import requests
import json

response = requests.post(
  url="https://openrouter.ai/api/v1/responses",
  headers={
    "Authorization": "Bearer <OPENROUTER_API_KEY>",
    "HTTP-Referer": "<YOUR_SITE_URL>", # Optional. Site URL for rankings on openrouter.ai.
    "X-OpenRouter-Title": "<YOUR_SITE_NAME>", # Optional. Site title for rankings on openrouter.ai.
  },
  data=json.dumps({
    "model": "~openai/gpt-sol-latest",
    "input": "What is the meaning of life?"
  })
)
```

```typescript title="TypeScript (fetch)" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: '~openai/gpt-sol-latest',
    input: 'What is the meaning of life?',
  }),
});
```

```shell title="Shell" lines theme={null}
curl https://openrouter.ai/api/v1/responses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -d '{
  "model": "~openai/gpt-sol-latest",
  "input": "What is the meaning of life?"
}'
```

The API also supports [streaming](https://openrouter.ai/docs/api_reference/streaming.md). You can also use the [OpenAI SDK](#using-the-openai-sdk) pointed at OpenRouter as a drop-in replacement.

> [!NOTE]
>
> For EU in-region routing on Business or Enterprise, send requests to `https://eu.openrouter.ai/api/v1/responses`, or set your SDK's base URL to `https://eu.openrouter.ai/api/v1`, with an EU-eligible model. [EU in-region routing on Business](https://openrouter.ai/business/eu) explains what is processed in Europe, what may be stored or processed in the US, and how BYOK requests are handled.

***

## Using the Client SDKs

The [Client SDKs](https://openrouter.ai/docs/client-sdks/overview.md) wrap the OpenRouter API with full type safety, auto-generated types from the OpenAPI spec, and zero boilerplate. It's intentionally lean, a thin layer over the REST API.

First, install the SDK:

```bash title="npm" lines theme={null}
npm install @openrouter/sdk
```

```bash title="pnpm" lines theme={null}
pnpm add @openrouter/sdk
```

```bash title="yarn" lines theme={null}
yarn add @openrouter/sdk
```

```bash title="bun" lines theme={null}
bun add @openrouter/sdk
```

```bash title="deno" lines theme={null}
deno add npm:@openrouter/sdk
```

```bash title="pip" lines theme={null}
pip install openrouter
```

Then use it in your code:

```typescript title="TypeScript" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const client = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
  httpReferer: '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
  appTitle: '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
});

const response = await client.responses.send({
  responsesRequest: {
    model: '~openai/gpt-sol-latest',
    input: 'What is the meaning of life?',
  },
});

if (!('output' in response)) {
  throw new Error('Expected a non-streaming response');
}
if (response.status !== 'completed') {
  throw new Error(response.error?.message ?? `Response ended as ${response.status}`);
}

const message = response.output.find((item) => item.type === 'message');
console.log(message?.content.find((part) => part.type === 'output_text')?.text);
```

```python title="Python" lines theme={null}
from openrouter import OpenRouter
import os

with OpenRouter(api_key=os.getenv("OPENROUTER_API_KEY")) as client:
    response = client.responses.send(
        model="~openai/gpt-sol-latest",
        input="What is the meaning of life?",
    )

    if response.status != "completed":
        message = response.error.message if response.error else f"Response ended as {response.status}"
        raise RuntimeError(message)

    message = next(item for item in response.output if item.type == "message")
    print(next(part.text for part in message.content if part.type == "output_text"))
```

See the full [Client SDKs documentation](https://openrouter.ai/docs/client-sdks/overview.md) for streaming, embeddings, and the complete API reference.

***

## Using the Agent SDK

The [Agent SDK](https://openrouter.ai/docs/agent-sdk/overview.md) (`@openrouter/agent`) provides higher-level primitives for building AI agents. It handles multi-turn conversation loops, tool execution, and state management automatically via the `callModel` function.

Install the package:

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

Build an agent with tools:

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

The SDK sends the prompt, receives a tool call from the model, executes `get_weather`, feeds the result back, and returns the final response, all in one `callModel` invocation.

See the full [Agent SDK documentation](https://openrouter.ai/docs/agent-sdk/overview.md) for stop conditions, streaming, dynamic parameters, and more.

***

## Using the OpenAI SDK

You can also use the OpenAI SDK pointed at OpenRouter as a drop-in replacement. This is useful if you have existing code built on the OpenAI SDK and want to access OpenRouter's model catalog without changing your code structure.

```typescript title="Typescript" expandable lines theme={null}
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: '<OPENROUTER_API_KEY>',
  defaultHeaders: {
    'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
  },
});

async function main() {
  const response = await openai.responses.create({
    model: '~openai/gpt-sol-latest',
    input: 'What is the meaning of life?',
  });

  console.log(response.output_text);
}

main();
```

```python title="Python" expandable lines theme={null}
from openai import OpenAI

client = OpenAI(
  base_url="https://openrouter.ai/api/v1",
  api_key="<OPENROUTER_API_KEY>",
)

response = client.responses.create(
  extra_headers={
    "HTTP-Referer": "<YOUR_SITE_URL>", # Optional. Site URL for rankings on openrouter.ai.
    "X-OpenRouter-Title": "<YOUR_SITE_NAME>", # Optional. Site title for rankings on openrouter.ai.
  },
  model="~openai/gpt-sol-latest",
  input="What is the meaning of life?"
)

print(response.output_text)
```

## Using third-party SDKs

For information about using third-party SDKs and frameworks with OpenRouter, please [see our frameworks documentation.](https://openrouter.ai/docs/guides/community/frameworks-and-integrations-overview.md)

***

## Building with an AI assistant

If you write code with an AI coding tool (Claude Code, Cursor, Codex, and others), connect the [OpenRouter MCP server](https://openrouter.ai/docs/guides/overview/mcp-server.md). It's a remote server hosted by OpenRouter, so there's nothing to install. Your assistant can pull live OpenRouter data (which models exist, what they cost, your credit balance, usage rankings) and search these docs while you build. That way its suggestions reflect current data instead of stale training knowledge. Add one URL to your MCP client and approve an OAuth login:

```bash theme={null}
https://mcp.openrouter.ai/mcp
```

See the [MCP server guide](https://openrouter.ai/docs/guides/overview/mcp-server.md) for per-client setup and the full tool list. To run models in your app, keep calling the OpenRouter API directly.
