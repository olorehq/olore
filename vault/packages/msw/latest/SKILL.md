---
name: olore-msw-latest
description: Local MSW (Mock Service Worker) documentation reference (latest). Use for API mocking, request interception, REST/GraphQL handlers, browser/Node.js testing, and network-level mocking.
---

# MSW (Mock Service Worker) Documentation

MSW is an API mocking library for browser and Node.js that intercepts outgoing requests at the network level using Service Workers (browser) or class extension (Node.js). It supports HTTP, GraphQL, WebSocket, and Server-Sent Events mocking.

## Quick Reference

| Task | Entry Point |
|------|-------------|
| Getting started | `contents/quick-start.mdx` |
| HTTP mocking | `contents/http/index.mdx` |
| GraphQL mocking | `contents/graphql/index.mdx` |
| WebSocket mocking | `contents/websocket/index.mdx` |
| Server-Sent Events | `contents/sse/index.mdx` |
| API reference | `contents/api/http.mdx`, `contents/api/graphql.mdx` |
| Browser setup | `contents/integrations/browser.mdx` |
| Node.js setup | `contents/integrations/node.mdx` |
| Debugging | `contents/runbook.mdx` |

## When to use

Use this skill when the user asks about:
- Setting up MSW for browser or Node.js environments
- Intercepting and mocking HTTP REST requests
- Intercepting and mocking GraphQL queries and mutations
- Mocking WebSocket connections and Server-Sent Events
- Request handlers, response mocking, and network behavior
- Testing with MSW (Jest, Vitest, React Testing Library)
- MSW API reference (`http`, `graphql`, `ws`, `sse`, `setupServer`, `setupWorker`)
- Best practices and recipes for API mocking

## How to find information

1. **First**, read `TOC.md` for complete file listing organized by directory
2. Identify relevant section based on user's question
3. Read specific files for details

**TOC.md contains all files organized by directory - always check it first.**
