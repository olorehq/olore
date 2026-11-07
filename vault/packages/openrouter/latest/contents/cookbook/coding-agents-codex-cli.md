> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Codex CLI

> Use Codex CLI with OpenRouter

## What is Codex CLI?

[Codex CLI](https://github.com/openai/codex) is OpenAI's open-source local coding agent that runs in your terminal. It supports multiple model providers, including OpenRouter, so you can use OpenRouter's unified API, provider failover, and organizational controls with Codex's agentic coding workflows.

Using Codex inside the ChatGPT desktop app instead? See the [Codex Desktop App guide](https://openrouter.ai/docs/cookbook/coding-agents/codex-desktop.md), which covers making your API key visible to a GUI app.

## Quick Start

### Step 1: Install Codex CLI

Follow the [Codex CLI installation instructions](https://github.com/openai/codex) to install the CLI on your system.

### Step 2: Get Your OpenRouter API Key

1. Sign up or log in at [OpenRouter](https://openrouter.ai)
2. Navigate to your [API Keys page](https://openrouter.ai/keys)
3. Create a new API key
4. Copy your key (starts with `sk-or-...`)

### Step 3: Configure Codex for OpenRouter

Codex uses a `config.toml` file, typically located at `~/.codex/config.toml`. Create or edit this file with the following configuration:

```toml lines theme={null}
model_provider = "openrouter"
model_reasoning_effort = "high"
model="~openai/gpt-sol-latest"

[model_providers.openrouter]
name = "openrouter"
base_url="https://openrouter.ai/api/v1"

[model_providers.openrouter.auth]
command = "sh"
args = ["-c", "echo $OPENROUTER_API_KEY"]
```

On Windows, use PowerShell instead:

```toml lines theme={null}
[model_providers.openrouter.auth]
command = "powershell"
args = ["-NoProfile", "-Command", "Write-Output $env:OPENROUTER_API_KEY"]
```

> [!NOTE]
>
> A plain `env_key = "OPENROUTER_API_KEY"` also works for authentication, but Codex won't fetch the OpenRouter model catalog in that mode. Non-OpenAI models will show the "Unknown model" fallback-metadata warning. Prefer the command-based `auth` block above.

### Step 4: Set Your API Key

Export your OpenRouter API key in your shell profile:

```bash lines theme={null}
# Add to ~/.zshrc, ~/.bashrc, or ~/.config/fish/config.fish
export OPENROUTER_API_KEY="sk-or-..."
```

On Windows, set it as a user-level environment variable and restart Codex (including the desktop app, which won't see variables set only in a terminal session):

```powershell lines theme={null}
setx OPENROUTER_API_KEY "sk-or-..."
```

> [!NOTE]
>
> The `auth` command above reads your key from `$OPENROUTER_API_KEY`, so ensure this environment variable is set before starting Codex.

### Step 5: Start Codex

Navigate to your project directory and run:

```bash lines theme={null}
cd /path/to/your/project
codex
```

Your requests will now be routed through OpenRouter.

## Configuration Reference

### Core Settings

| Setting | Description | Example |
| - | - | - |
| `model_provider` | Provider to use for model requests | `"openrouter"` |
| `model` | OpenRouter model ID | `"~openai/gpt-sol-latest"` |
| `model_reasoning_effort` | Reasoning effort level for Codex models | `"low"`, `"medium"`, `"high"`, `"xhigh"`, `"max"` |
| `show_raw_agent_reasoning` | Whether to display reasoning tokens in the UI | `true` or `false` |
| `personality` | Agent personality preset | `"pragmatic"`, `"helpful"`, etc. |

### OpenRouter Provider Block

```toml lines theme={null}
[model_providers.openrouter]
name = "openrouter"
base_url = "https://openrouter.ai/api/v1"

[model_providers.openrouter.auth]
command = "sh"
args = ["-c", "echo $OPENROUTER_API_KEY"]
```

* **`base_url`**: OpenRouter API endpoint. Use `https://openrouter.ai/api/v1` for production.
* **`auth.command` / `auth.args`**: Command Codex runs to obtain your API key. Here it echoes `$OPENROUTER_API_KEY`. Command-based auth is what triggers Codex's model-catalog refresh, so non-OpenAI models get correct metadata instead of the fallback-metadata warning. On Windows use `command = "powershell"` with `args = ["-NoProfile", "-Command", "Write-Output $env:OPENROUTER_API_KEY"]`, since `sh` does not exist there.

> [!NOTE]
>
> A plain `env_key = "OPENROUTER_API_KEY"` also works for authentication, but Codex won't fetch the OpenRouter model catalog in that mode. Non-OpenAI models will show the "Unknown model" fallback-metadata warning. Prefer the command-based `auth` block above.

### Project Trust Levels

Codex supports per-project trust levels. Add project paths to control what the agent can access:

```toml lines theme={null}
[projects."/path/to/trusted/project"]
trust_level = "trusted"

[projects."/path/to/untrusted/project"]
trust_level = "untrusted"
```

* **`trusted`**: Agent has full access (e.g., run commands, edit files).
* **`untrusted`**: Agent has restricted access for safety.

## Why Use OpenRouter with Codex CLI?

### Provider Failover

OpenRouter routes requests across multiple providers. If one provider is unavailable or rate-limited, OpenRouter can fail over to another, keeping your coding sessions uninterrupted.

### Organizational Controls

For teams, OpenRouter provides centralized budget management. Set spending limits, allocate credits, and prevent unexpected cost overruns across developers using Codex.

### Usage Visibility

Track Codex usage in real-time via the [OpenRouter Activity Dashboard](https://openrouter.ai/activity). Monitor costs, token usage, and request patterns.

### Model Flexibility

Point `model` at any OpenRouter slug (e.g. `~openai/gpt-sol-latest`, `~anthropic/claude-sonnet-latest`) or a pinned version to switch models without changing your Codex installation—just update `config.toml`.

## Troubleshooting

* **Auth Errors:** Ensure `OPENROUTER_API_KEY` is set and valid. Check at [openrouter.ai/keys](https://openrouter.ai/keys). A 401 with "Missing Authentication header" usually means the `auth` command failed to run. On Windows, make sure you use the PowerShell variant above and that the environment variable is set user-wide (`setx`), then fully restart Codex.
* **Model Not Found:** Verify the model ID on [openrouter.ai/models](https://openrouter.ai/models). Use the exact format (e.g., `~openai/gpt-sol-latest`).
* **Privacy:** OpenRouter does not log your source code prompts unless you opt-in to prompt logging. See our [Privacy Policy](https://openrouter.ai/privacy) for details.

## Resources

* [Codex CLI on GitHub](https://github.com/openai/codex)
* [OpenRouter Codex Models](https://openrouter.ai/models?q=codex)
* [OpenRouter Activity Dashboard](https://openrouter.ai/activity)
* [OpenRouter API Documentation](https://openrouter.ai/docs/api)
