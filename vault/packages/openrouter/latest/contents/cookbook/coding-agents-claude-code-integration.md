> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Claude Code

> Use Claude Code with OpenRouter

> [!WARNING]
>
> Claude Code with OpenRouter is only guaranteed to work with the Anthropic first-party provider. For maximum compatibility, we recommend setting [Anthropic 1P as top priority provider](https://openrouter.ai/docs/guides/routing/provider-selection.md) when using Claude Code.

## Why Use OpenRouter with Claude Code?

OpenRouter adds a reliability and management layer between Claude Code and Anthropic's API, giving you and your organization several key benefits.

### Provider Failover for High Availability

Anthropic's API occasionally experiences outages or rate limiting. When you route Claude Code through OpenRouter, your requests automatically fail over between multiple Anthropic providers. If one provider is unavailable or rate-limited, OpenRouter seamlessly routes to another, keeping your coding sessions uninterrupted.

### Organizational Budget Controls

For teams and organizations, OpenRouter provides centralized budget management. You can set spending limits, allocate credits across team members, and prevent unexpected cost overruns. This is especially valuable when multiple developers are using Claude Code across your organization.

### Usage Visibility and Analytics

OpenRouter gives you complete visibility into how Claude Code is being used across your team. Track usage patterns, monitor costs in real-time, and understand which projects or team members are consuming the most resources. All of this data is available in your [OpenRouter Activity Dashboard](https://openrouter.ai/activity).

## Quick Start

This guide will get you running [Claude Code](https://code.claude.com/docs/en/overview) powered by OpenRouter in just a few minutes.

### Step 1: Install Claude Code

> [tab] Native Install (Recommended)
>
> **macOS, Linux, WSL:**
>
> ```bash lines theme={null}
> curl -fsSL https://claude.ai/install.sh | bash
> ```
>
> **Windows PowerShell:**
>
> ```powershell lines theme={null}
> irm https://claude.ai/install.ps1 | iex
> ```

> [tab] npm
>
> Requires [Node.js 18 or newer](https://nodejs.org/en/download/).
>
> ```bash lines theme={null}
> npm install -g @anthropic-ai/claude-code
> ```

### Step 2: Connect Claude to OpenRouter

Instead of logging in with Anthropic directly, connect Claude Code to OpenRouter. This requires setting a few environment variables.

Requirements:

1. Use the full OpenRouter API URL, including the scheme: `https://openrouter.ai/api`
2. Provide your [OpenRouter API key](https://openrouter.ai/settings/keys) as `ANTHROPIC_AUTH_TOKEN`
3. **Important:** Explicitly blank out `ANTHROPIC_API_KEY` to prevent conflicts

> [!NOTE]
>
> **Why `ANTHROPIC_AUTH_TOKEN`:** OpenRouter is an LLM gateway that authenticates requests with a bearer token, and Claude Code sends `ANTHROPIC_AUTH_TOKEN` as `Authorization: Bearer <token>` — the credential variable [Anthropic documents for bearer-authenticated gateways](https://code.claude.com/docs/en/llm-gateway-connect#set-the-credential-variable). `ANTHROPIC_API_KEY` is instead sent as `x-api-key`, is treated as a direct-Anthropic credential, and prompts you once in interactive mode to approve it over a saved login. Setting it to an empty string keeps Claude Code from falling back to authenticating against Anthropic directly.

> [tab] Shell Profile
>
> Add these environment variables to your shell profile:
>
> ```bash lines theme={null}
> # Open your shell profile in nano
> nano ~/.zshrc  # or ~/.bashrc for Bash users
>
> # Add these lines to the file:
> export OPENROUTER_API_KEY="<your-openrouter-api-key>"
> export ANTHROPIC_BASE_URL="https://openrouter.ai/api"
> export ANTHROPIC_AUTH_TOKEN="$OPENROUTER_API_KEY"
> export ANTHROPIC_API_KEY="" # Important: Must be explicitly empty
> export CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY=1 # Optional: enables the gateway model picker
> ```
>
> Then reload your shell so the new values are live — otherwise you will keep testing the old environment and conclude the configuration does not work:
>
> ```bash lines theme={null}
> source ~/.zshrc  # or ~/.bashrc, or open a new terminal
> ```
>
> > [!NOTE]
> >
> > **Persistence:** We recommend adding these lines to your shell profile (`~/.bashrc`, `~/.zshrc`, or `~/.config/fish/config.fish`).
>
> > [!WARNING]
> >
> > **Ordering matters:** `ANTHROPIC_AUTH_TOKEN="$OPENROUTER_API_KEY"` is expanded when the profile is sourced. If `OPENROUTER_API_KEY` is defined *later* in the file, in a different file, or injected by a secrets manager after your profile runs, the auth token expands to an empty string and every request fails with an auth error. Ensure the key is defined **before** it is consumed by `ANTHROPIC_AUTH_TOKEN`, or put it in a file that loads earlier (e.g. `~/.zshenv` for zsh).
>
> > [!NOTE]
> >
> > **Secret hygiene:** This puts a plaintext API key in your shell profile — a file that is easy to accidentally commit to a dotfiles repo or paste into a gist. Consider loading the key from your OS keychain instead, e.g. on macOS: `export OPENROUTER_API_KEY="$(security find-generic-password -s openrouter -w)"`. If a key does leak, revoke and rotate it at [openrouter.ai/settings/keys](https://openrouter.ai/settings/keys).

> [tab] Project Settings File
>
> Alternatively, you can configure Claude Code using a project-level settings file at `.claude/settings.local.json` in your project root:
>
> ```json lines theme={null}
> {
>   "env": {
>     "ANTHROPIC_BASE_URL": "https://openrouter.ai/api",
>     "ANTHROPIC_AUTH_TOKEN": "<your-openrouter-api-key>",
>     "ANTHROPIC_API_KEY": "",
>     "CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY": "1"
>   }
> }
> ```
>
> Replace `<your-openrouter-api-key>` with your actual OpenRouter API key.
>
> > [!NOTE]
> >
> > **Note:** This method keeps your configuration scoped to the project, making it easy to share OpenRouter settings with your team via version control (just be careful not to commit your API key).

> [!WARNING]
>
> **Variable Location:** Do not put these in a project-level `.env` file. The native Claude Code installer does not read standard `.env` files.

### Step 3: Clear any cached Anthropic login

If you were previously logged in to Claude Code with an Anthropic account, you must run `/logout` once to remove the cached session. Claude Code warns about auth conflicts when both a cached login and a gateway credential are present, and the conflict can cause unexpected behaviour on startup — typically surfacing as confusing model-not-found errors (e.g. for `openrouter/auto`, `openrouter/pareto-code`, or any other OpenRouter-only model).

```text lines theme={null}
> /logout
```

Then quit and re-launch `claude` so it picks up the new environment variables.

> [!NOTE]
>
> If you have never logged in to Claude Code with Anthropic, you can skip this step.

> [!NOTE]
>
> **Where the cached login lives:** On macOS the cached session is stored in the Keychain as a generic password named `Claude Code-credentials` (native installs do not write `~/.claude/.credentials.json`). If you are debugging a stubborn auth conflict, you can confirm a stale session exists with:
>
> ```bash lines theme={null}
> security find-generic-password -s "Claude Code-credentials"
> ```
>
> If it prints an entry after `/logout`, delete it with `security delete-generic-password -s "Claude Code-credentials"` and relaunch `claude`.

### Step 4: Start your session

Navigate to your project directory and start Claude Code:

```bash lines theme={null}
cd /path/to/your/project
claude
```

You are now connected! Any prompt you send will be routed through OpenRouter.

### Step 5: Verify

You can confirm your connection by running the `/status` command inside Claude Code.

```text lines theme={null}
> /status
Auth token: ANTHROPIC_AUTH_TOKEN
Anthropic base URL: https://openrouter.ai/api
```

If the `Auth token` line names `ANTHROPIC_API_KEY`, or a `Login method` line names a Claude account instead, the environment did not reach the session — reload your shell and relaunch `claude`.

You can also check the [OpenRouter Activity Dashboard](https://openrouter.ai/activity) to see your requests appearing in real-time.

## How It Works

OpenRouter exposes an input that is compatible with the Anthropic Messages API.

1. **Direct Connection:** When you set `ANTHROPIC_BASE_URL` to `https://openrouter.ai/api`, Claude Code speaks its native protocol directly to OpenRouter. No local proxy server is required.
2. **Anthropic Skin:** OpenRouter's "Anthropic Skin" behaves exactly like the Anthropic API. It handles model mapping and passes through advanced features like "Thinking" blocks and native tool use.
3. **Billing:** You are billed using your OpenRouter credits. Usage (including reasoning tokens) appears in your OpenRouter dashboard.

## Configuring Models

Claude Code uses several environment variables to determine which models to use for different tasks. You can override these to route each role through a specific model:

```bash lines theme={null}
export ANTHROPIC_DEFAULT_FABLE_MODEL="~anthropic/claude-fable-latest[1m]"
export ANTHROPIC_DEFAULT_OPUS_MODEL="~anthropic/claude-opus-latest[1m]"
export ANTHROPIC_DEFAULT_SONNET_MODEL="~anthropic/claude-sonnet-latest[1m]"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="~anthropic/claude-haiku-latest"
export CLAUDE_CODE_SUBAGENT_MODEL="~anthropic/claude-opus-latest[1m]"
```

| Variable | Description |
| - | - |
| `ANTHROPIC_DEFAULT_FABLE_MODEL` | The model used for Fable-class tasks (the most demanding reasoning and long-horizon work) |
| `ANTHROPIC_DEFAULT_OPUS_MODEL` | The model used for Opus-class tasks (e.g. complex reasoning) |
| `ANTHROPIC_DEFAULT_SONNET_MODEL` | The model used for Sonnet-class tasks (e.g. general coding) |
| `ANTHROPIC_DEFAULT_HAIKU_MODEL` | The model used for Haiku-class tasks (e.g. quick completions) |
| `CLAUDE_CODE_SUBAGENT_MODEL` | The model used for sub-agent tasks spawned by Claude Code |

> [!WARNING]
>
> Claude Code 2.1.x added Fable as a fourth model class. When Claude Code points at OpenRouter, Fable is **not** offered in `/model` by default — setting `ANTHROPIC_DEFAULT_FABLE_MODEL` is the only way to make it selectable.

After setting the overrides, open `/model` inside Claude Code to confirm every model class you expect is listed, and check the model column in your [Activity Dashboard](https://openrouter.ai/activity) to confirm requests route to the models you configured.

Add these to the same shell profile or project settings file where you set `ANTHROPIC_BASE_URL` and `ANTHROPIC_AUTH_TOKEN`.

Claude Code is optimized for Anthropic models and may not work correctly with other providers.

### Gateway model picker

Gateway model discovery is opt-in. Set `CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY=1` to show the model picker. The picker shows a curated set of the highest-ranked models, not the full OpenRouter catalog. Some picker entries route to non-Anthropic providers and may be subject to the compatibility limitations noted above. Pinning a model with one of the settings above selects it directly and bypasses the picker. Claude Code stores the discovered list locally and refreshes it during startup, so restart Claude Code after enabling discovery or when you want it to fetch the list again.

## Fast Mode

Anthropic's fast mode provides up to 2.5x faster output at premium pricing. **Fast mode is only available on Claude Opus 4.6, Claude Opus 4.7, Claude Opus 4.8, and Claude Opus 5** — no other Anthropic models support it.

On OpenRouter, fast mode is a [`fast` service tier endpoint](https://openrouter.ai/docs/guides/features/service-tiers#fast-mode) on the regular model, like any other provider's priority tier. With [`anthropic/claude-opus-5`](https://openrouter.ai/anthropic/claude-opus-5), [`anthropic/claude-opus-4.8`](https://openrouter.ai/anthropic/claude-opus-4.8), [`anthropic/claude-opus-4.7`](https://openrouter.ai/anthropic/claude-opus-4.7), or [`anthropic/claude-opus-4.6`](https://openrouter.ai/anthropic/claude-opus-4.6), there are three ways to request it (see [How Routing Works](https://openrouter.ai/docs/guides/features/service-tiers.md#how-routing-works) for the full semantics):

1. Send `speed: "fast"`, `service_tier: "fast"`, or `service_tier: "priority"` — the three spellings are fully interchangeable on all APIs. The fast tier endpoint is tried first, with fallback to standard endpoints (billed at their standard rates).
2. Use the [`:nitro`](https://openrouter.ai/docs/guides/routing/model-variants/nitro) variant (e.g. `anthropic/claude-opus-5:nitro`) — the fast tier endpoint becomes eligible and serves when it wins the throughput sort.
3. Pin the tier endpoint slug in [`provider.order` or `provider.only`](https://openrouter.ai/docs/guides/routing/provider-selection), e.g. `"provider": { "only": ["anthropic/fast"] }`.

The required beta header is injected automatically whenever the fast tier endpoint serves the request.

> [!NOTE]
>
> Each supported Opus version also has a dedicated `*-fast` model (for example, [`anthropic/claude-opus-5-fast`](https://openrouter.ai/anthropic/claude-opus-5-fast)). These are deprecated: they keep working for existing integrations and are served by the same fast tier capacity, but new integrations should use one of the options above on the regular model. New Anthropic models will not receive `*-fast` siblings.

### Using `/fast` in Claude Code

Claude Code has a built-in `/fast` command that toggles fast mode. When enabled, Claude Code sends `speed: "fast"` in its requests alongside the configured Opus model. OpenRouter fully supports this parameter — you just need to set the following environment variable:

```bash lines theme={null}
export CLAUDE_CODE_SKIP_FAST_MODE_ORG_CHECK=1
```

> [!NOTE]
>
> Requires Claude Code v2.1.96 or newer.

> [!WARNING]
>
> Claude Code only attaches `speed: "fast"` when the resolved model ID matches a supported Opus version (e.g. `anthropic/claude-opus-5`). With `ANTHROPIC_DEFAULT_OPUS_MODEL` set to the `~anthropic/claude-opus-latest` alias — including the example in [Configuring Models](#configuring-models) above — `/fast` reports "Fast mode ON" but requests are sent without the `speed` parameter: standard speed, standard pricing. To actually use fast mode, pin the variable to a specific Opus ID such as `anthropic/claude-opus-5`.

### Pricing

Fast mode is priced at a premium over the underlying Claude Opus model's standard token rates. See [Anthropic's fast mode pricing](https://platform.claude.com/docs/en/build-with-claude/fast-mode#pricing) for current rates. When fast mode is active, the response's `usage` object includes `"speed": "fast"` to confirm the request was processed at the higher speed tier, and the reported service tier is `priority` (the Messages API returns it in `usage.service_tier`; the Chat Completions and Responses APIs return a top-level `service_tier` field).

> [!NOTE]
>
> If `speed: "fast"` is sent for a model that does not support fast mode, it still requests the [priority service tier](https://openrouter.ai/docs/guides/features/service-tiers.md#fast-mode) where a provider offers one (at priority pricing); otherwise the request proceeds at standard speed with standard pricing. **Claude Fable has no fast tier** — toggling `/fast` while on a Fable model does not speed Fable up. Instead, Claude Code switches your session to your configured Opus model, so subsequent requests run (and bill) on Opus rather than Fable.

### Routing behavior

Fast mode is only served by the Anthropic first-party provider, since other providers (e.g. Amazon Bedrock, Google Vertex) do not support it.

## Agent SDK

The [Anthropic Agent SDK](https://platform.claude.com/docs/en/agent-sdk/overview) lets you build AI agents programmatically using Python or TypeScript. Since the Agent SDK uses Claude Code as its runtime, you can connect it to OpenRouter using the same environment variables described above.

For complete setup instructions and code examples, see our [Anthropic Agent SDK integration guide](https://openrouter.ai/docs/guides/community/anthropic-agent-sdk.md).

## GitHub Action

You can use OpenRouter with the official [Claude Code GitHub Action](https://github.com/anthropics/claude-code-action).To adapt the [example workflow](https://github.com/anthropics/claude-code-action/blob/main/examples/claude.yml) for OpenRouter, make two changes to the action step:

1. Pass your OpenRouter API key via `anthropic_api_key` (store it as a GitHub secret named `OPENROUTER_API_KEY`)
2. Set `ANTHROPIC_BASE_URL` to `https://openrouter.ai/api` and `ANTHROPIC_AUTH_TOKEN` to the same secret in the step's `env` block

```yaml lines theme={null}
- name: Run Claude Code
  uses: anthropics/claude-code-action@v1
  with:
    anthropic_api_key: ${{ secrets.OPENROUTER_API_KEY }}
  env:
    ANTHROPIC_BASE_URL: https://openrouter.ai/api
    ANTHROPIC_AUTH_TOKEN: ${{ secrets.OPENROUTER_API_KEY }}
```

The action requires the `anthropic_api_key` input before it will launch Claude Code and does not read `ANTHROPIC_AUTH_TOKEN` itself, so the input satisfies that launch check while the environment variable is what puts the key in the `Authorization` header. Unlike the local setup, `ANTHROPIC_API_KEY` is not empty here — the action populates it from the input — which is fine because the run is non-interactive and `ANTHROPIC_BASE_URL` still routes every request to OpenRouter.

## Cost Tracking Statusline

You can add a custom statusline to Claude Code that tracks your OpenRouter API costs in real-time. The statusline displays the provider, model, cumulative cost, and cache discounts for your session.

![Claude Code statusline showing OpenRouter cost tracking](https://mintcdn.com/openrouter-d02e98a0/PSwwwiCqAD_BNeni/assets/cookbook/coding-agents/claude-code-integration/claude-code-statusline.png?fit=max\&auto=format\&n=PSwwwiCqAD_BNeni\&q=85\&s=06adfa14552de4c90bf429d9bdbe46c6)

Download the statusline scripts from the [openrouter-examples repository](https://github.com/OpenRouterTeam/openrouter-examples/tree/main/claude-code), make them executable, and add the following to your `~/.claude/settings.json`:

```json lines theme={null}
{
  "statusLine": {
    "type": "command",
    "command": "/path/to/statusline.sh"
  }
}
```

The script reads `ANTHROPIC_AUTH_TOKEN`, falling back to `ANTHROPIC_API_KEY`, so it picks up the OpenRouter key you set in the setup above.

A few practical notes:

* **Prerequisites:** `statusline.sh` is a thin wrapper that runs `npx tsx statusline.ts`, so it requires Node.js and network access on first render (npx downloads `tsx` on first use, which can make the first refresh slow). Download **both** files and keep them in the same directory.
* **Only one statusline:** `settings.json` supports a single `statusLine` entry. If you already use another statusline (e.g. ccusage or a tool-provided one), adding this one **replaces** it — they cannot be combined without writing a wrapper script that merges their output.
* **API usage:** Each refresh makes one request to the [generation endpoint](https://openrouter.ai/docs/api/api-reference/generations/get-generation.md) per new generation in the session. Long sessions catch up incrementally; costs shown are cumulative for the current session.
* **State files:** Per-session state accumulates at `/tmp/claude-openrouter-cost-<session-id>.json`. These are small and cleared on OS reboot on most systems, but you can delete them at any time.

## Troubleshooting

* **Model-not-found errors for OpenRouter models** (e.g. `openrouter/auto`, `openrouter/pareto-code`): Usually caused by a credential conflict that surfaces as auth-conflict warnings on startup. There are two distinct scenarios. (1) If you have a cached Anthropic OAuth login from before switching to OpenRouter, run `/logout` inside Claude Code, then quit and re-launch `claude` to clear the cached session. (2) If your shell profile still has a real `ANTHROPIC_API_KEY` set (e.g. an old Anthropic console key), `/logout` will not help — it only clears the cached OAuth session, not shell environment variables. Instead, ensure `ANTHROPIC_API_KEY=""` is set in your shell profile per Step 2, then reload your shell. Verify with `/status` that the auth token is `ANTHROPIC_AUTH_TOKEN` and the base URL is `https://openrouter.ai/api`.
* **Auth Errors:** Ensure your OpenRouter key is in `ANTHROPIC_AUTH_TOKEN` and that `ANTHROPIC_API_KEY` is an empty string (`""`). If `ANTHROPIC_API_KEY` holds a real Anthropic key, Claude Code sends it as `x-api-key` and may authenticate against Anthropic instead. Reload your shell after editing your profile, and if you still see auth errors, run `/logout` (see above).
* **Context length always shows 200k:** Claude Code assumes a 200k context window unless the model name ends in `[1m]`. If your configured model supports a 1M context window, append `[1m]` to its slug so sessions do not compact earlier than required. The current Fable, Opus, and Sonnet `latest` aliases support this marker (e.g. `~anthropic/claude-sonnet-latest[1m]`), as shown in [Configuring Models](#configuring-models). OpenRouter strips the marker before routing, so it only changes what Claude Code assumes about the window.
* **Privacy:** OpenRouter does not log your source code prompts unless you explicitly opt-in to prompt logging in your account settings. See our [Privacy Policy](https://openrouter.ai/privacy) for details.
