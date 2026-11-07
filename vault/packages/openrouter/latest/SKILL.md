---
name: olore-openrouter-latest
description: Local OpenRouter documentation reference (latest). OpenRouter API documentation. Use for unified LLM API access, model routing, provider selection, tool calling, structured outputs, SDKs, OAuth, guardrails, and observability integrations.
---

# OpenRouter Documentation

OpenRouter provides a unified, OpenAI-compatible API (`https://openrouter.ai/api/v1`) to hundreds of models, with model routing, fallbacks, provider selection, tool calling, structured outputs, streaming, guardrails, and observability.

## Quick Reference

| Task | Entry Point |
|------|-------------|
| Getting started | `contents/getting-started/quickstart.md` |
| API overview and schema | `contents/api-guides/overview.md` |
| Chat completions endpoint | `contents/api-reference/chat-create-a-chat-completion.md` |
| Request parameters | `contents/api-guides/parameters.md` |
| Provider routing and fallbacks | `contents/routing/provider-selection.md` |
| Tool calling | `contents/tool-calling/tool-calling.md` |
| Structured outputs | `contents/features/structured-outputs.md` |
| OAuth PKCE | `contents/authentication/oauth.md` |
| Agent SDK (callModel) | `contents/agent-sdk/overview.md` |
| TypeScript SDK | `contents/client-sdks/typescript-overview.md` |

## When to use

Use this skill when the user asks about:
- Calling OpenRouter (chat completions, Responses API, Anthropic Messages, embeddings, models endpoints)
- Model selection, routing, variants (:free, :nitro, :exacto), fallbacks, and provider preferences
- Tool calling, server tools (web search, web fetch), plugins, structured JSON outputs, streaming
- Authentication (API keys, OAuth PKCE, management keys, BYOK, SSO), guardrails, privacy and ZDR
- Observability and Broadcast integrations (Langfuse, LangSmith, Datadog, etc.)
- Agent SDK, TypeScript/Python/Go client SDKs
- Multimodal inputs and generation (images, audio, video, PDFs)
- Coding agent integrations (Claude Code, Codex CLI, OpenCode, MCP servers)

## How to find information

1. **First**, read `TOC.md` for complete file listing organized by directory
2. Identify relevant section based on user's question
3. Read specific files for details

**TOC.md contains all files organized by directory - always check it first.**
