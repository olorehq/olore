> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Use with AI tools

> Give Claude, ChatGPT, Cursor, or any LLM one link with the whole Recraft API, or install the Claude Code skill, so it writes a working integration for you.

The Recraft docs are built so a coding assistant can write your integration from the source instead of guessing.

## One link for any agent

[Recraft API for AI agents](https://www.recraft.ai/docs/api-reference/agents.md) has the whole API on one page: rules for writing code, every model with its price and supported parameters, every endpoint, limits, and working examples. Give your agent its Markdown version:

```text theme={null}
https://www.recraft.ai/docs/api-reference/agents.md
```

Then ask for what you need:

```text theme={null}
Read https://www.recraft.ai/docs/api-reference/agents.md.
Write a Python script that generates four SVG icons for a weather app
with the Recraft API and saves them to ./icons.
```

## Claude Code skill

Install the skill once, and Claude Code knows how to use the Recraft API in every project:

```bash theme={null}
mkdir -p ~/.claude/skills/recraft-api && cat > ~/.claude/skills/recraft-api/SKILL.md <<'EOF'
---
name: recraft-api
description: Generate, edit, vectorize, and upscale images with the Recraft API. Use when the user asks to create images, logos, icons, or SVGs with Recraft, or to write code that calls the Recraft API.
---

Before writing code or calling the API, run `curl -s https://www.recraft.ai/docs/api-reference/agents.md` and follow its "Rules for writing code".

- Token: the RECRAFT_API_TOKEN environment variable. If it is not set, ask the user to create a token at https://www.recraft.ai/app/api/api-keys.
- Base URL: https://external.api.recraft.ai/v1, plain HTTP with Bearer auth.
- Always pass `model` explicitly: `recraftv4_1` by default, `recraftv4_1_vector` for SVG, `recraftv4_1_flash` for fast drafts.
- Image URLs expire after about 24 hours. Download results that must be kept.
EOF
```

Then ask Claude Code, for example, "generate a vector logo for my app with Recraft and save it to `public/logo.svg`".

## Copy any page into your assistant

Every page has a menu at the top with:

* **Copy page**: the page as Markdown, ready to paste into a chat.
* **View as Markdown**: the raw Markdown in a new tab.
* **Open in Claude**, **ChatGPT**, or **Perplexity**: a new chat with the page already attached.
* **Cursor** and **VS Code**: connect the docs to your editor.
* **MCP**: connect the docs as an MCP server, so your assistant can search them.

You can also append `.md` to any page URL, for example `https://www.recraft.ai/docs/api-reference/models/recraft-v4-1.md`.

## One model or tool at a time

Every page is also available as Markdown: add `.md` to its URL. A model or tool page holds its parameters, defaults, price, and a working request, so an agent gets everything for one model in a single fetch:

| Page | Markdown |
| - | - |
| Recraft V4.1 | `https://www.recraft.ai/docs/api-reference/models/recraft-v4-1.md` |
| Recraft V4.1 Flash | `https://www.recraft.ai/docs/api-reference/models/recraft-v4-1-flash.md` |
| Recraft V4 Styles | `https://www.recraft.ai/docs/api-reference/models/recraft-v4-styles.md` |
| Vectorize | `https://www.recraft.ai/docs/api-reference/tools/vectorize.md` |
| Any other page | Its URL plus `.md` |

## The whole documentation

* [`agents.md`](https://www.recraft.ai/docs/api-reference/agents) is the whole API on one page (under 20 KB). Use it for anything API-related.
* [`openapi.json`](https://www.recraft.ai/docs/api-reference/openapi.json) is the machine-readable API description, for code generators and tools that read OpenAPI. See [OpenAPI](https://www.recraft.ai/docs/api-reference/swagger.md).
* [`llms.txt`](https://www.recraft.ai/docs/llms.txt) lists every page with a one-line description. Point an agent at it to let it find the right page on its own.
* [`llms-full.txt`](https://www.recraft.ai/docs/llms-full.txt) is every page in one file, including the Recraft Studio guides. It's large, so prefer `agents.md` for API work.

## Use Recraft as a tool

To let an assistant generate and edit images itself, not just write code, connect the [Recraft MCP server](https://www.recraft.ai/docs/mcp-reference/getting-started.md).

> [!WARNING]
>
> The MCP server is billed differently from the API: it uses the **subscription credits** of your Recraft plan, the same balance as Recraft Studio, not API units. See [MCP billing](https://www.recraft.ai/docs/mcp-reference/remote-server.md#billing).


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.