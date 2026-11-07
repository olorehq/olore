> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Usage for Agents

> Add OpenRouter Agent SDK skills to your AI coding assistant

Give your AI coding assistant the knowledge to work with the OpenRouter Agent SDK by installing our official `openrouter-typescript-sdk` skill from the [OpenRouterTeam/skills](https://github.com/OpenRouterTeam/skills) repository.

The skill covers both the Agent SDK (`@openrouter/agent`) and the Client SDKs (`@openrouter/sdk`). When working with the Agent SDK, your AI assistant will focus on the **agent features**: `callModel`, `tool()` definitions, stop conditions, streaming, and multi-turn conversations.

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

* **callModel API** - The recommended approach for making AI model calls with full type safety and streaming support
* **Tool Definitions** - Creating tools with the `tool()` helper and Zod schemas
* **Stop Conditions** - Controlling agent loop termination with `stepCountIs`, `maxCost`, and more
* **Streaming** - Real-time token output within agent steps
* **Multi-turn Conversations** - Managing conversation state across turns
* **Dynamic Parameters** - Changing model, temperature, or tools between turns

## Example Usage

After installing the skill, your AI assistant can help you with tasks like:

**"Help me set up an OpenRouter agent"**

The assistant will know to use:

```typescript lines theme={null}
import { OpenRouter } from '@openrouter/agent';

const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const result = openrouter.callModel({
  model: '~anthropic/claude-sonnet-latest',
  input: 'Hello!'
});

const text = await result.getText();
```

**"Add a tool to my agent"**

The assistant understands the tool pattern:

```typescript lines theme={null}
import { OpenRouter, tool } from '@openrouter/agent';
import { z } from 'zod';

const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const searchTool = tool({
  name: 'search',
  description: 'Search the web',
  inputSchema: z.object({ query: z.string() }),
  execute: async ({ query }) => {
    return { results: ['...'] };
  },
});

const result = openrouter.callModel({
  model: '~anthropic/claude-sonnet-latest',
  input: 'Search for TypeScript best practices',
  tools: [searchTool],
});

const text = await result.getText();
```

## Repository

The skill source is available at: [github.com/OpenRouterTeam/skills](https://github.com/OpenRouterTeam/skills)

Contributions and feedback are welcome.
