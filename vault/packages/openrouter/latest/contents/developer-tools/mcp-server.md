> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# MCP

> Connect your AI coding tools to OpenRouter over MCP

The **OpenRouter MCP server** plugs OpenRouter into the AI tools you already use. Once connected, your assistant can pull live OpenRouter data (models, prices, your credits, rankings, and docs) and send quick test messages, all without leaving your editor.

It's a remote server hosted by OpenRouter (nothing is installed locally). You connect by adding one URL to your MCP client and approving an OAuth login in your browser.

> [!NOTE]
>
> Use this MCP while you build. It lets your coding assistant pull live OpenRouter info (which models exist, what they cost, your credit balance) and send quick test messages, without leaving your editor. To actually run models in your app, keep calling the OpenRouter API directly.

## Connect your agent

> [tab] Claude Code
>
> ```bash lines theme={null}
> claude mcp add --transport http openrouter https://mcp.openrouter.ai/mcp
> claude mcp login openrouter
> ```
>
> You can also authenticate from inside a session: run `/mcp`, select **openrouter**, and click **Authenticate**.

> [tab] Codex CLI
>
> ```bash lines theme={null}
> codex mcp add openrouter --url https://mcp.openrouter.ai/mcp
> codex mcp login openrouter   # opens the browser OAuth flow
> ```

> [tab] OpenCode
>
> Add this to `~/.config/opencode/opencode.json`. OpenCode runs the OAuth flow automatically on first use, with no separate login step:
>
> ```json lines theme={null}
> {
>   "mcp": {
>     "openrouter": {
>       "type": "remote",
>       "url": "https://mcp.openrouter.ai/mcp",
>       "enabled": true
>     }
>   }
> }
> ```

> [tab] Cursor CLI
>
> The Cursor CLI (`cursor-agent`) reads the same config as the IDE. Add this to `~/.cursor/mcp.json`, then verify with `cursor-agent mcp list`. Authenticate from the Cursor MCP settings, or it prompts on first tool use:
>
> ```json lines theme={null}
> {
>   "mcpServers": {
>     "openrouter": { "url": "https://mcp.openrouter.ai/mcp" }
>   }
> }
> ```

> [tab] Claude Desktop / Web
>
> OpenRouter isn't in Claude's connector directory, so add it as a custom connector:
>
> 1. Go to **Settings > Connectors > Customize > Connectors**, click the **+**, then choose **Add custom connector**.
>
>    ![Claude's Connectors page with the + menu open and Add custom connector highlighted](https://mintcdn.com/openrouter-d02e98a0/vKv_Fe97IEm3a1mW/assets/guides/overview/claude-connectors-menu.png?fit=max\&auto=format\&n=vKv_Fe97IEm3a1mW\&q=85\&s=5a7126fa72b2793d5f82b3b4dbd11733)
>
> 2. Enter the **Name** `OpenRouter MCP` and set the **Remote MCP server URL** to `https://mcp.openrouter.ai/mcp`. Leave the OAuth fields blank.
>
> 3. Click **Add**, then open the connector and **Connect** to run the OAuth flow.
>
>    ![Claude's Add custom connector dialog with the Name set to OpenRouter MCP and the Remote MCP server URL set to https://mcp.openrouter.ai/mcp](https://mintcdn.com/openrouter-d02e98a0/vKv_Fe97IEm3a1mW/assets/guides/overview/claude-add-custom-connector.png?fit=max\&auto=format\&n=vKv_Fe97IEm3a1mW\&q=85\&s=a170c979682b65fe8a909e589d04177f)
>
> > [!NOTE]
> >
> > Some organizations don't allow adding custom connectors, so this option may not appear for everyone. If you don't see it, talk to your admin.

Not all clients pop up the auth automatically; some need a one-time login step after you add the server. When you trigger it, an OpenRouter consent page opens in your browser where you approve a **dedicated key just for this connection**, separate from your other keys. The key expires within 7 days and starts with a `$10` spend cap (editable on the approval screen). You can disconnect anytime. If your personal account or organization sets a maximum API key lifetime in [privacy settings](https://openrouter.ai/settings/privacy), the MCP key gets the shorter of that value and 7 days, so the same policy that caps your other keys can shorten this one.

## What you can do

The MCP exposes these tools. Most are read-only lookups against live OpenRouter data. Two exceptions exist. `send-message` and `generate-image` make billable inference calls, and `send-feedback` writes feedback on one of your own generations.

| Tool | What it does |
| - | - |
| `send-message` | Send a message to any model and get its reply, to test a prompt or compare models |
| `generate-image` | Generate an image from a text prompt and get it back inline as an image content block |
| `list-models` | Search OpenRouter's live model catalog: free-text search, sort (including by Artificial Analysis intelligence, coding, and agentic indexes and Design Arena ELO), and filter by use case, prompt/completion price, minimum context, model age, benchmark index ranges, tool-calling success rate, model family, author, provider, input/output modality, supported parameters, and ZDR or region |
| `get-model` | Full details for one model by `author/slug` (supports `:variant` suffixes and aliases) |
| `list-model-endpoints` | Which providers serve a model, and their price, latency, throughput, and data policy |
| `list-providers` | List available providers for routing preferences |
| `list-daily-model-rankings` | Which models are most used and trending by token volume |
| `list-app-rankings` | Which apps drive the most OpenRouter traffic, filterable by category |
| `get-credits` | Your remaining account credit |
| `get-generation` | Cost, token counts, and serving provider for a specific generation id |
| `list-benchmarks` | Third-party quality scores from Artificial Analysis (intelligence, coding, agentic indexes) and Design Arena (head-to-head elo, win rate) |
| `list-task-classifications` | What OpenRouter traffic is used for: market share by task type (code generation, web search, summarization, …) with the top models for each and macro-category (Code, Data, Agent, General) aggregates |
| `search-docs` | Search the full OpenRouter docs to answer "how do I…" questions |
| `send-feedback` | Report a problem with one of your own generations (category + optional comment), sent to the OpenRouter team |
| `spawn-ori-eval` | Get the instructions for running a model eval with Ori (your own agent on your own prompts, on a pinned harness and model), then follow them |
| `install-ori-harness` | Get the argument-free recipe for installing the Ori harness and follow it |
| `ping` | Health check to verify the connection |

## Pick the right model for a task

You describe a task and the assistant recommends a model for it, with the recommendation backed by live data rather than the model's stale training knowledge. `send-message` is grounded so the assistant won't name a model from memory. For any "which model should I use" question, it defers to the live `list-benchmarks`, `list-daily-model-rankings`, and `list-models` tools. The right pick might be the cheapest, the smartest, the fastest, a specific modality, or a particular provider.

By task and trade-off:

* "What's the best model for coding right now?"
* "Smartest model for hard reasoning, money no object?"
* "Best value model for summarizing long documents?"

By modality (OpenRouter supports far more than text):

* "What embedding models are available, and which is best?"
* "Do you support reranking models? Recommend one."
* "Best text-to-speech model? What about speech-to-text?"

By benchmark and provider:

* "Which model tops the Artificial Analysis intelligence index?"
* "What's the best model for landing page design?"
* "Recommend a model and tell me which provider to route to."

## More things you can do

* "How much credit do I have left on OpenRouter?"
* "Which apps send the most traffic to OpenRouter?"
* "How do I pin a model to a specific provider, e.g. Bedrock?"
* "Send a test message to GPT-5.5 and tell me what it cost."
* "Compare the answers for the same prompt across Opus 4.8, DeepSeek v4 Pro, Gemini 3.5 Flash, and GLM-5.2."

> [!TIP]
>
> `send-message` understands model slug suffixes: add `:online` for web search, `:nitro` for speed, `:floor` for the lowest price, or `:free` for a free endpoint where one exists. Every reply includes the call's generation id, which you can pass to `get-generation` to see exactly what it cost and which provider served it. Pin a provider only when you need zero variance, for example when running evals or reproducing a result.

## How it works

1. **Discovery & auth.** An unauthenticated request returns a `401` that points your client to OpenRouter's OAuth authorization server. The client registers, you approve the consent page, and a token is issued via PKCE.
2. **Dedicated key.** The issued token is a standard OpenRouter API key labeled `OpenRouter MCP: <app name>`, minted with a 7-day expiry and a `$10` default spend limit so you can find and revoke it from your [dashboard](https://openrouter.ai/settings/keys). The 7-day ceiling is fixed and enforced by OpenRouter, and an expiry requested by the client is ignored, so a key that leaks stops working on its own.
3. **Live data, no local state.** Tools proxy the public OpenRouter API with your key. Nothing is installed locally, and no source code is sent anywhere unless you call `send-message`, `generate-image`, or `send-feedback`.

## Troubleshooting

* **Tool calls fail with an auth error.** Re-run the authenticate step for your client. The key may have expired (7-day lifetime) or been disconnected.
* **The login didn't pop automatically.** Some clients require a manual trigger. Use the per-client step above.
