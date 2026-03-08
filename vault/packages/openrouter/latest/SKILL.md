---
name: olore-openrouter-latest
description: Local OpenRouter documentation reference (latest). OpenRouter API documentation. Use for unified LLM API access, model routing, provider selection, tool calling, structured outputs, SDKs, OAuth, guardrails, and observability integrations.
---

# OpenRouter Documentation

OpenRouter provides a unified API giving access to hundreds of AI models through a single endpoint at `https://openrouter.ai/api/v1`. It normalizes request/response schemas across all providers (OpenAI-compatible), handles model fallbacks, provider routing, and supports advanced features like tool calling, structured outputs, streaming, and observability integrations.

## Quick Reference

| Task | Entry Point |
|------|-------------|
| Getting started | `contents/quickstart.mdx` |
| API request/response schema | `contents/api-reference/overview.mdx` |
| Request parameters | `contents/api-reference/parameters.mdx` |
| Authentication | `contents/api-reference/authentication.mdx` |
| Model routing & fallbacks | `contents/routing/` |
| Tool calling | `contents/features/tool-calling.mdx` |
| Structured outputs | `contents/features/structured-outputs.mdx` |
| TypeScript SDK | `contents/sdks/typescript/` |
| Python SDK | `contents/sdks/python/overview.mdx` |
| Error handling | `contents/api-reference/errors-and-debugging.mdx` |

## When to use

Use this skill when the user asks about:
- Making API calls to OpenRouter (`/api/v1/chat/completions`, `/api/v1/models`)
- Model selection, routing, fallbacks, and provider preferences
- Tool calling, function calling, structured JSON outputs
- Streaming responses (SSE), embeddings
- Authentication (API keys, OAuth, BYOK)
- SDK usage (`@openrouter/sdk` TypeScript, `openrouter` Python)
- Observability and broadcast integrations (Langfuse, LangSmith, Datadog, etc.)
- Rate limits, pricing, usage accounting
- Multimodal inputs (images, audio, video, PDFs)
- Content guardrails, zero data retention (ZDR)
- Coding agent integrations (Claude Code, MCP servers, Codex)

## How to find information

1. **First**, read `TOC.md` for complete file listing organized by directory
2. Identify relevant section based on user's question
3. Read specific files for details

**TOC.md contains all files organized by directory - always check it first.**
