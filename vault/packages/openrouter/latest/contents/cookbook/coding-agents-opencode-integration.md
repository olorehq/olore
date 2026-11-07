> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# OpenCode

> Use OpenCode with OpenRouter

## What is OpenCode?

[OpenCode](https://opencode.ai) is an open-source AI coding agent available as a terminal interface (TUI), a desktop app for macOS, Windows, and Linux, and an IDE extension. It features LSP integration, multi-session support, sharable session links, and compatibility with 75+ LLM providers — including OpenRouter for unified multi-model access through a single API key.

Both the terminal and desktop apps read the same `opencode.json` config and the same stored credentials, so connecting OpenRouter once makes it available in either interface.

## Get Your OpenRouter API Key

1. Sign up or log in at [OpenRouter](https://openrouter.ai)
2. Navigate to your [API Keys page](https://openrouter.ai/settings/keys)
3. Click **Create API Key** and copy it (starts with `sk-or-v1-...`)

## Quick Start: Terminal

### Step 1: Install OpenCode

> [tab] Install Script
>
> ```bash lines theme={null}
> curl -fsSL https://opencode.ai/install | bash
> ```

> [tab] npm
>
> ```bash lines theme={null}
> npm install -g opencode-ai
> ```

> [tab] Homebrew
>
> ```bash lines theme={null}
> brew install anomalyco/tap/opencode
> ```

For additional installation methods (Bun, pnpm, Yarn, Arch Linux, Windows), see the [OpenCode installation docs](https://opencode.ai/docs).

### Step 2: Connect OpenCode to OpenRouter

OpenCode supports OpenRouter as a built-in provider. Use the interactive `/connect` command:

1. Start OpenCode in your project directory:

   ```bash lines theme={null}
   cd /path/to/your/project
   opencode
   ```

2. Run the `/connect` command and search for **OpenRouter**:

   ```text lines theme={null}
   /connect
   ```

3. Paste your OpenRouter API key when prompted.

4. Run `/models` to select a model — many OpenRouter models are preloaded by default:

   ```text lines theme={null}
   /models
   ```

Your requests will now be routed through OpenRouter.

## Quick Start: Desktop

The desktop app organizes projects and active sessions into tabs, and configures providers through a settings UI rather than slash commands.

### Step 1: Install OpenCode Desktop

> [tab] macOS
>
> ```bash lines theme={null}
> brew install --cask opencode-desktop
> ```
>
> Or download the DMG for Apple Silicon or Intel from the [OpenCode download page](https://opencode.ai/download).

> [tab] Windows
>
> Download the x64 installer from the [OpenCode download page](https://opencode.ai/download).

> [tab] Linux
>
> Download the `.deb` or `.rpm` package from the [OpenCode download page](https://opencode.ai/download).

### Step 2: Connect OpenRouter

1. Launch OpenCode Desktop and open a project folder.

2. Open **Settings** (or run **Connect provider** from the command palette).

3. Under **Providers**, find **OpenRouter** in the **Popular providers** list and click **Connect**.

4. Choose the **API key** method, paste your OpenRouter key, and confirm. OpenRouter appears under **Connected providers**.

### Step 3: Pick a Model

Use the model picker in the session view, or run **Choose model** from the command palette, and select an OpenRouter model.

> [!NOTE]
>
> If no OpenRouter models appear in the picker right after you add your API key, fully quit OpenCode Desktop and reopen it. The provider catalog is loaded at startup, so a newly connected provider may not surface until the app restarts.

> [!TIP]
>
> If you already connected OpenRouter in the terminal, the desktop app picks up the same credentials automatically — skip straight to choosing a model.

## Config File

Many OpenRouter models are preloaded, but you can add any others in your `opencode.json` config file. Use the model's OpenRouter slug as the key:

```json lines theme={null}
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "openrouter": {
      "models": {
        "~anthropic/claude-sonnet-latest": {},
        "~google/gemini-flash-latest": {}
      }
    }
  }
}
```

> [!NOTE]
>
> The leading `~` is not a typo. Slugs like `~anthropic/claude-sonnet-latest` are OpenRouter [latest aliases](https://openrouter.ai/docs/guides/features/latest-resolution.md) that always resolve to that lab's newest flagship model, so you keep getting the freshest version without editing your config. Pinned slugs such as `anthropic/claude-sonnet-4.5` work exactly the same way — browse them all at [openrouter.ai/models](https://openrouter.ai/models).

Project config belongs in `opencode.json` at your project root; user-wide settings go in `~/.config/opencode/opencode.json`. Both formats also accept JSONC.

### Setting a Default Model

To skip the model picker on startup, set a top-level `model` key. OpenCode composes model IDs as `provider_id/model_id`, so an OpenRouter model is prefixed with `openrouter/`:

```json lines theme={null}
{
  "$schema": "https://opencode.ai/config.json",
  "model": "openrouter/~anthropic/claude-sonnet-latest"
}
```

This applies across the TUI, the desktop app, and `opencode run`. You can also override it per invocation with the `--model` / `-m` flag.

### Setting the API Key Manually

Keys added via `/connect` or the desktop settings UI are stored in `~/.local/share/opencode/auth.json`, the same path on macOS, Linux, and Windows, and shared by the terminal and desktop apps. If you set `XDG_DATA_HOME`, substitute that directory. You can also write the file directly:

```json lines theme={null}
{
  "openrouter": {
    "type": "api",
    "key": "sk-or-v1-your-key-here"
  }
}
```

## Provider Routing

When using OpenRouter, you can control which upstream providers handle your requests by adding `options.provider` to individual models in your config:

```json lines theme={null}
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "openrouter": {
      "models": {
        "~anthropic/claude-sonnet-latest": {
          "options": {
            "provider": {
              "order": ["anthropic"],
              "allow_fallbacks": true
            }
          }
        }
      }
    }
  }
}
```

For a full breakdown of routing options, see the [Provider Routing docs](https://openrouter.ai/docs/guides/routing/provider-selection.md).

## Why Use OpenRouter with OpenCode?

### Access to Hundreds of Models

Switch between any model available on OpenRouter — Anthropic, OpenAI, Google, SpaceXAI, Meta, DeepSeek, and many more — without managing separate API keys for each provider.

### Provider Failover

If one provider is unavailable or rate-limited, OpenRouter automatically routes to another, keeping your coding sessions uninterrupted.

### Organizational Controls

For teams, OpenRouter provides centralized budget management. Set spending limits, allocate credits, and monitor usage across developers using OpenCode from your [OpenRouter Activity Dashboard](https://openrouter.ai/activity).

### Model Flexibility

Switch models with the `/models` command, the desktop model picker, or your config — no need to reconfigure API keys or endpoints.

## Troubleshooting

* **Auth Errors:** Ensure your API key is set correctly via `/connect` (or the desktop **Providers** settings). Run `opencode auth list` to confirm the credential was stored. Verify the key itself at [openrouter.ai/settings/keys](https://openrouter.ai/settings/keys).
* **Model Not Found:** Verify the slug on [openrouter.ai/models](https://openrouter.ai/models) and keep it exact, including any leading `~` (e.g. `~anthropic/claude-sonnet-latest`). In a top-level `model` key, remember the `openrouter/` provider prefix.
* **No Models After Connecting:** Fully quit and restart OpenCode. The provider catalog is read at startup, so models from a newly connected provider may not appear until then.
* **Model Missing From the Picker:** Add it under `provider.openrouter.models` in your config, then restart OpenCode.
* **Privacy:** OpenRouter does not log your source code prompts unless you opt in to prompt logging. See our [Privacy Policy](https://openrouter.ai/privacy) for details.

## Resources

* [OpenCode Website](https://opencode.ai)
* [OpenCode Download](https://opencode.ai/download)
* [OpenCode on GitHub](https://github.com/anomalyco/opencode)
* [OpenCode Provider Docs](https://opencode.ai/docs/providers)
* [OpenCode IDE Extensions](https://opencode.ai/docs/ide)
* [OpenRouter Models](https://openrouter.ai/models)
