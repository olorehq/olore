> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Usage for Agents

> Add OpenRouter Client SDKs skills to your AI coding assistant

Give your AI coding assistant the knowledge to work with the OpenRouter Client SDKs by installing our official `openrouter-typescript-sdk` skill from the [OpenRouterTeam/skills](https://github.com/OpenRouterTeam/skills) repository.

The skill covers both the Client SDKs (`@openrouter/sdk`) and the Agent SDK (`@openrouter/agent`). When working with the Client SDKs, your AI assistant will focus on the **platform features**: model listing, chat completions, credits, OAuth, and API key management.

## Quick Start

### Claude Code

```bash lines theme={null}
/plugin marketplace add OpenRouterTeam/skills
/plugin install openrouter@openrouter
```

### Cursor

Add via **Settings > Rules > Add Rule > Remote Rule (Github)** with `OpenRouterTeam/skills`.

### GitHub CLI

Requires [GitHub CLI](https://cli.github.com/) v2.90.0+. Works with Claude Code, Cursor, OpenCode, Codex, Gemini CLI, Windsurf, and [many more agents](https://cli.github.com/manual/gh_skill_install):

```bash lines theme={null}
gh skill install OpenRouterTeam/skills openrouter-typescript-sdk
```

## Supported AI Coding Assistants

The skill works with any AI coding assistant that supports the [Agent Skills](https://agentskills.io/home) standard:

| Assistant | Status |
| - | - |
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code) | Supported |
| [Cursor](https://cursor.com) | Supported |
| [OpenCode](https://opencode.ai) | Supported |
| [GitHub Copilot](https://github.com/features/copilot) | Supported |
| [Codex](https://openai.com/index/openai-codex) | Supported |
| [Amp](https://ampcode.com) | Supported |
| [Roo Code](https://roo.dev) | Supported |
| [Antigravity](https://antigravity.google/product/antigravity-sdk) | Supported |

## What the Skill Provides

Once installed, your AI coding assistant will have knowledge of:

* **SDK Installation & Setup** - How to install and configure `@openrouter/sdk` in TypeScript projects
* **Responses API** - Working with the recommended API for model responses
* **Embeddings** - Generating embeddings for semantic search and RAG
* **Error Handling** - Proper error handling patterns
* **Streaming** - Real-time streaming responses
* **Tool Use** - Implementing function calling and tools
* **API Key Management** - Programmatic API key creation and management
* **OAuth** - PKCE authentication flow for user-facing applications

## Example Usage

After installing the skill, your AI assistant can help you with tasks like:

**"Help me set up OpenRouter in my project"**

The assistant will know to use:

```typescript lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const client = new OpenRouter();

const response = await client.responses.send({
  responsesRequest: {
    model: '~anthropic/claude-sonnet-latest',
    input: 'Hello!',
    stream: false,
  },
});

if (!('output' in response)) {
  throw new Error('Expected a non-streaming response');
}
```

**"Add streaming to my OpenRouter call"**

The assistant understands the streaming API:

```typescript lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const client = new OpenRouter();

const stream = await client.responses.send({
  responsesRequest: {
    model: '~anthropic/claude-sonnet-latest',
    input: 'Tell me a story',
    stream: true,
  },
});

if (!(stream instanceof ReadableStream)) {
  throw new Error('Expected a streaming response');
}

for await (const event of stream) {
  if (event.type === 'response.output_text.delta') {
    process.stdout.write(event.delta);
  }
}
```

> [!NOTE]
>
> If you need higher-level primitives for building agents (multi-turn loops, tool definitions, stop conditions), see the [Agent SDK](https://openrouter.ai/docs/agent-sdk/overview.md) instead.

## Repository

The skill source is available at: [github.com/OpenRouterTeam/skills](https://github.com/OpenRouterTeam/skills)

Contributions and feedback are welcome.
