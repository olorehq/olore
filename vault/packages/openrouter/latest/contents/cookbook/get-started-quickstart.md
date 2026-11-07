> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Quickstart: Build a Chat App

> Send your first message and stream a response with the OpenRouter SDK

**Goal:** Learn the fundamentals of OpenRouter by building a TypeScript chat app that sends messages and streams responses through OpenRouter.

**Outcome:** A working multi-turn conversation loop that can talk to any of the 600+ models available on the platform by changing a single string.

> [!TIP]
>
> Want to get started faster? Copy this prompt into your coding agent.

## Prerequisites

* **Node.js 18+** installed
* An **OpenRouter API key**. Create one at [openrouter.ai/settings/keys](https://openrouter.ai/settings/keys) or set up a new [Stripe project](https://openrouter.ai/docs/guides/overview/stripe-projects.md)

## 1. Create a project and install the SDK

Set up a new Node.js project and add the OpenRouter client SDK. The SDK is ESM-only, so set the package type to `module`. Install `tsx` so you can run the TypeScript examples directly.

```bash lines theme={null}
mkdir openrouter-chat && cd openrouter-chat
npm init -y
npm pkg set type=module
npm install @openrouter/sdk
npm install --save-dev tsx
```

## 2. Send your first message

Create `chat.ts` with a client instance and a single [Responses API](https://openrouter.ai/docs/api_reference/responses/overview.md) request. The `apiKey` reads from the environment so you never hard-code credentials.

```typescript lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const client = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const response = await client.responses.send({
  responsesRequest: {
    model: 'google/gemini-3.1-flash-lite',
    input: 'Say hello in one sentence.',
  },
});

if (!('output' in response)) {
  throw new Error('Expected a non-streaming response');
}

const message = [...response.output].reverse().find((item) => item.type === 'message');
const text = message?.content.find((part) => part.type === 'output_text');
console.log(text?.text);
console.log({
  inputTokens: response.usage?.inputTokens,
  outputTokens: response.usage?.outputTokens,
});
```

Run it with your API key:

```bash lines theme={null}
OPENROUTER_API_KEY=sk-or-v1-... npx tsx chat.ts
```

You should see a single text response printed to the console. The text is in the `output_text` part of the `message` item in `response.output`, and the SDK returns token usage in camelCase fields such as `inputTokens` and `outputTokens`. The `response.output` array follows the same shape as the [Responses API response](https://openrouter.ai/docs/api/api-reference/responses/create-a-response.md). Without `stream: true`, `client.responses.send` is typed to return the full response, so the `'output' in response` check is only a runtime safety guard.

## 3. Stream the response

Streaming returns text as it is generated instead of waiting for the full response. Pass `stream: true` and iterate over the returned event stream. Each `response.output_text.delta` event contains a `delta` with the new text fragment.

```typescript expandable lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const client = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const stream = await client.responses.send({
  responsesRequest: {
    model: 'google/gemini-3.1-flash-lite',
    input: 'Explain how routers work in three sentences.',
    stream: true,
  },
});

if ('output' in stream) {
  throw new Error('Expected a streaming response');
}

for await (const event of stream) {
  if (event.type === 'response.output_text.delta') {
    process.stdout.write(event.delta);
  }
}
console.log();
```

Text now prints incrementally. See the [Streaming reference](https://openrouter.ai/docs/api_reference/streaming.md) for the full SSE event format.

## 4. Add multi-turn conversation

Multi-turn works by sending the full conversation history with each request. The model uses all previous turns as context. Append each user input and assistant response to an `input` array of `{ role, content }` items before the next call.

```typescript expandable lines theme={null}
import { OpenRouter } from '@openrouter/sdk';
import * as readline from 'node:readline';

const client = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const input: { role: 'user' | 'assistant'; content: string }[] = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(): void {
  rl.question('You: ', async (line) => {
    if (line.toLowerCase() === 'exit') {
      rl.close();
      return;
    }

    input.push({ role: 'user', content: line });

    const stream = await client.responses.send({
      responsesRequest: {
        model: 'google/gemini-3.1-flash-lite',
        input,
        stream: true,
      },
    });
    if ('output' in stream) {
      throw new Error('Expected a streaming response');
    }

    let response = '';
    let completed = false;
    process.stdout.write('Assistant: ');
    for await (const event of stream) {
      if (event.type === 'response.output_text.delta') {
        process.stdout.write(event.delta);
        response += event.delta;
      }
      if (event.type === 'response.completed') {
        completed = true;
      }
    }
    console.log();

    // A stream that ends with response.failed or response.incomplete leaves a
    // partial answer; keep only completed turns in the history.
    if (completed) {
      input.push({ role: 'assistant', content: response });
    } else {
      input.pop();
      console.log('(The response did not complete, so that turn was not saved.)');
    }
    ask();
  });
}

ask();
```

Run the file and type messages. The model remembers prior turns because the full `input` array is sent with each request. Type `exit` to quit.

## 5. Swap models

OpenRouter gives you access to hundreds of models through one API. Change the `model` string to switch providers, no other code changes needed.

```typescript lines theme={null}
// Use OpenAI's latest chat model
model: 'openai/gpt-chat-latest',

// Use Anthropic Claude Sonnet latest
model: '~anthropic/claude-sonnet-latest',

// Use a free model
model: 'openrouter/free',
```

Browse all available models at [openrouter.ai/models](https://openrouter.ai/models) or query the [Models API](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties.md) programmatically.

## Check your work

* `npx tsx chat.ts` prints a streamed response to the console
* A multi-turn conversation maintains context across turns (ask a follow-up that references a previous answer)
* Changing the `model` string switches to a different provider with no other code changes
* The non-streaming response includes a `usage` object with `inputTokens` and `outputTokens`

## Next steps

* Connect a [coding agent](https://openrouter.ai/docs/cookbook/coding-agents/claude-code-integration.md) to OpenRouter
* Explore the [Agent SDK](https://openrouter.ai/docs/agent-sdk/overview.md) for built-in multi-turn loops and tool execution
