***

title: Anthropic Agent SDK
subtitle: Using OpenRouter with the Anthropic Agent SDK
headline: Anthropic Agent SDK Integration | OpenRouter SDK Support
canonical-url: '[https://openrouter.ai/docs/guides/community/anthropic-agent-sdk](https://openrouter.ai/docs/guides/community/anthropic-agent-sdk)'
'og:site\_name': OpenRouter Documentation
'og:title': Anthropic Agent SDK Integration - OpenRouter SDK Support
'og:description': >-
Integrate OpenRouter using the Anthropic Agent SDK. Complete guide for
building AI agents with OpenRouter in Python and TypeScript.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Anthropic%20Agent%20SDK\&description=Anthropic%20Agent%20SDK%20Integration](https://openrouter.ai/dynamic-og?title=Anthropic%20Agent%20SDK\&description=Anthropic%20Agent%20SDK%20Integration)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

The [Anthropic Agent SDK](https://platform.claude.com/docs/en/agent-sdk/overview) lets you build AI agents programmatically using Python or TypeScript. Since the Agent SDK uses Claude Code as its runtime, you can connect it to OpenRouter using the same environment variables.

## Configuration

Set the following environment variables before running your agent:

```bash
export ANTHROPIC_BASE_URL="https://openrouter.ai/api"
export ANTHROPIC_AUTH_TOKEN="$OPENROUTER_API_KEY"
export ANTHROPIC_API_KEY="" # Important: Must be explicitly empty
```

## TypeScript Example

Install the SDK:

```bash
npm install @anthropic-ai/claude-agent-sdk
```

Create an agent that uses OpenRouter:

```typescript
import { query } from "@anthropic-ai/claude-agent-sdk";

// Environment variables should be set before running:
// ANTHROPIC_BASE_URL=https://openrouter.ai/api
// ANTHROPIC_AUTH_TOKEN=your_openrouter_api_key
// ANTHROPIC_API_KEY=""

async function main() {
  for await (const message of query({
    prompt: "Find and fix the bug in auth.py",
    options: {
      allowedTools: ["Read", "Edit", "Bash"],
    },
  })) {
    if (message.type === "assistant") {
      console.log(message.message.content);
    }
  }
}

main();
```

## Python Example

Install the SDK:

```bash
pip install claude-agent-sdk
```

Create an agent that uses OpenRouter:

```python
import asyncio
from claude_agent_sdk import query, ClaudeAgentOptions

# Environment variables should be set before running:
# ANTHROPIC_BASE_URL=https://openrouter.ai/api
# ANTHROPIC_AUTH_TOKEN=your_openrouter_api_key
# ANTHROPIC_API_KEY=""

async def main():
    async for message in query(
        prompt="Find and fix the bug in auth.py",
        options=ClaudeAgentOptions(
            allowed_tools=["Read", "Edit", "Bash"]
        )
    ):
        print(message)

asyncio.run(main())
```

<Info>
  **Tip:** The Agent SDK inherits all the same model override capabilities as Claude Code. You can use `ANTHROPIC_DEFAULT_SONNET_MODEL`, `ANTHROPIC_DEFAULT_OPUS_MODEL`, and other environment variables to route your agent to different models on OpenRouter. See the [Claude Code integration guide](/docs/guides/guides/claude-code-integration) for more details.
</Info>
