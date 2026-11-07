> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Mastra

> Using OpenRouter with Mastra

## Mastra

Integrate OpenRouter with Mastra to access a variety of AI models through a unified interface. This guide provides complete examples from basic setup to advanced configurations.

### Step 1: Initialize a new Mastra project

The simplest way to start is using the automatic project creation:

```bash lines theme={null}
# Create a new project using create-mastra
npx create-mastra@latest
```

You'll be guided through prompts to set up your project. For this example, select:

* Name your project: my-mastra-openrouter-app
* Components: Agents (recommended)
* For default provider, select OpenAI (recommended) - we'll configure OpenRouter manually later
* Optionally include example code

For detailed instructions on setting up a Mastra project manually or adding Mastra to an existing project, refer to the [official Mastra documentation](https://mastra.ai/en/docs/getting-started/installation).

### Step 2: Configure your environment variables

After creating your project with `create-mastra`, you'll find a `.env.development` file in your project root. Since we selected OpenAI during setup but will be using OpenRouter instead:

1. Open the `.env.development` file
2. Remove or comment out the `OPENAI_API_KEY` line
3. Add your OpenRouter API key:

```lines theme={null}
# .env.development
# OPENAI_API_KEY=your-openai-key  # Comment out or remove this line
OPENROUTER_API_KEY=sk-or-your-api-key-here
```

You can also remove the `@ai-sdk/openai` package since we'll be using OpenRouter instead:

```bash lines theme={null}
npm uninstall @ai-sdk/openai
```

```bash title="npm" lines theme={null}
npm install @openrouter/ai-sdk-provider
```

```bash title="pnpm" lines theme={null}
pnpm add @openrouter/ai-sdk-provider
```

```bash title="yarn" lines theme={null}
yarn add @openrouter/ai-sdk-provider
```

```bash title="bun" lines theme={null}
bun add @openrouter/ai-sdk-provider
```

```bash title="deno" lines theme={null}
deno add npm:@openrouter/ai-sdk-provider
```

### Step 3: Configure your agent to use OpenRouter

After setting up your Mastra project, you'll need to modify the agent files to use OpenRouter instead of the default OpenAI provider.

If you used `create-mastra`, you'll likely have a file at `src/mastra/agents/agent.ts` or similar. Replace its contents with:

```typescript lines theme={null}
import { Agent } from '@mastra/core/agent';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';

// Initialize OpenRouter provider
const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

// Create an agent
export const assistant = new Agent({
  model: openrouter('~anthropic/claude-opus-latest'),
  name: 'Assistant',
  instructions:
    'You are a helpful assistant with expertise in technology and science.',
});
```

Also make sure to update your Mastra entry point at `src/mastra/index.ts` to use your renamed agent:

```typescript lines theme={null}
import { Mastra } from '@mastra/core';

import { assistant } from './agents/agent'; // Update the import path if you used a different filename

export const mastra = new Mastra({
  agents: { assistant }, // Use the same name here as you exported from your agent file
});
```

### Step 4: Running the Application

Once you've configured your agent to use OpenRouter, you can run the Mastra development server:

```bash lines theme={null}
npm run dev
```

This will start the Mastra development server and make your agent available at:

* REST API endpoint: `http://localhost:4111/api/agents/assistant/generate`
* Interactive playground: `http://localhost:4111`

The Mastra playground provides a user-friendly interface where you can interact with your agent and test its capabilities without writing any additional code.

You can also test the API endpoint using curl if needed:

```bash lines theme={null}
curl -X POST http://localhost:4111/api/agents/assistant/generate \
-H "Content-Type: application/json" \
-d '{"messages": ["What are the latest advancements in quantum computing?"]}'
```

### Basic Integration with Mastra

The simplest way to integrate OpenRouter with Mastra is by using the OpenRouter AI provider with Mastra's Agent system:

```typescript expandable lines theme={null}
import { Agent } from '@mastra/core/agent';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';

// Initialize the OpenRouter provider
const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

// Create an agent using OpenRouter
const assistant = new Agent({
  model: openrouter('~anthropic/claude-opus-latest'),
  name: 'Assistant',
  instructions: 'You are a helpful assistant.',
});

// Generate a response
const response = await assistant.generate([
  {
    role: 'user',
    content: 'Tell me about renewable energy sources.',
  },
]);

console.log(response.text);
```

### Advanced Configuration

For more control over your OpenRouter requests, you can pass additional configuration options:

```typescript expandable lines theme={null}
import { Agent } from '@mastra/core/agent';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';

// Initialize with advanced options
const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
  extraBody: {
    reasoning: {
      max_tokens: 10,
    },
  },
});

// Create an agent with model-specific options
const chefAgent = new Agent({
  model: openrouter('~anthropic/claude-sonnet-latest', {
    extraBody: {
      reasoning: {
        max_tokens: 10,
      },
    },
  }),
  name: 'Chef',
  instructions: 'You are a chef assistant specializing in French cuisine.',
});
```

### Provider-Specific Options

You can also pass provider-specific options in your requests:

```typescript lines theme={null}
// Get a response with provider-specific options
const response = await chefAgent.generate([
  {
    role: 'system',
    content:
      'You are Chef Michel, a culinary expert specializing in ketogenic (keto) diet...',
    providerOptions: {
      // Provider-specific options - key can be 'anthropic' or 'openrouter'
      anthropic: {
        cacheControl: { type: 'ephemeral' },
      },
    },
  },
  {
    role: 'user',
    content: 'Can you suggest a keto breakfast?',
  },
]);
```

### Using Multiple Models with OpenRouter

OpenRouter gives you access to various models from different providers. Here's how to use multiple models:

```typescript expandable lines theme={null}
import { Agent } from '@mastra/core/agent';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

// Create agents using different models
const claudeAgent = new Agent({
  model: openrouter('~anthropic/claude-opus-latest'),
  name: 'ClaudeAssistant',
  instructions: 'You are a helpful assistant powered by Claude.',
});

const gptAgent = new Agent({
  model: openrouter('openai/gpt-4'),
  name: 'GPTAssistant',
  instructions: 'You are a helpful assistant powered by GPT-4.',
});

// Use different agents based on your needs
const claudeResponse = await claudeAgent.generate([
  {
    role: 'user',
    content: 'Explain quantum mechanics simply.',
  },
]);
console.log(claudeResponse.text);

const gptResponse = await gptAgent.generate([
  {
    role: 'user',
    content: 'Explain quantum mechanics simply.',
  },
]);
console.log(gptResponse.text);
```

### Resources

For more information and detailed documentation, check out these resources:

* [OpenRouter Documentation](https://openrouter.ai/docs) - Learn about OpenRouter's capabilities and available models
* [Mastra Documentation](https://mastra.ai/docs) - Comprehensive documentation for the Mastra framework
* [AI SDK Documentation](https://sdk.vercel.ai/docs) - Detailed information about the AI SDK that powers Mastra's model interactions
