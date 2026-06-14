---
name: olore-a2a-latest
description: Local A2A (Agent-to-Agent) protocol documentation (latest). Use for agent communication, task management, streaming, push notifications, and enterprise-ready agent interoperability.
---

# A2A Protocol Documentation

The Agent2Agent (A2A) Protocol is an open standard for seamless communication and collaboration between AI agents. It provides a common language for agents built with diverse frameworks (LangGraph, CrewAI, Semantic Kernel, ADK, etc.) enabling interoperability across organizational and platform boundaries. Originally developed by Google and donated to the Linux Foundation.

## Documentation Structure

```
contents/
├── (root)/         # Protocol overview, full spec, definitions, changelog (9 files)
├── topics/         # Concept deep-dives and architectural guides (11 files)
├── tutorials/      # Tutorial index (1 file)
├── tutorials/python/  # Step-by-step Python quickstart, 8 parts (8 files)
└── sdk/            # SDK overview and Python SDK reference (2 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| What is A2A / Why use it | `contents/topics/what-is-a2a.md`, `contents/index.md` |
| Protocol specification | `contents/specification.md` |
| Key concepts (tasks, agents, cards) | `contents/topics/key-concepts.md`, `contents/definitions.md` |
| Task lifecycle | `contents/topics/life-of-a-task.md` |
| Streaming and async | `contents/topics/streaming-and-async.md` |
| Agent discovery / Agent Card | `contents/topics/agent-discovery.md` |
| A2A vs MCP / how they work together | `contents/topics/a2a-and-mcp.md` |
| Enterprise features (auth, security) | `contents/topics/enterprise-ready.md` |
| Multi-tenancy | `contents/topics/multi-tenancy.md` |
| Extensions and custom bindings | `contents/topics/extensions.md`, `contents/topics/custom-protocol-bindings.md`, `contents/topics/extension-and-binding-governance.md` |
| Python quickstart tutorial | `contents/tutorials/python/1-introduction.md` through `8-next-steps.md` |
| SDK reference | `contents/sdk/index.md`, `contents/sdk/python.md` |
| What's new in v1.0 | `contents/whats-new-v1.md` |

## When to use

Use this skill when the user asks about:
- Implementing A2A protocol in an agent (client or server side)
- Agent-to-agent communication and interoperability
- Task management: creating, streaming, and completing tasks
- Agent Card format and agent discovery
- Streaming responses and asynchronous/push-notification patterns
- Enterprise deployment: authentication, security, multi-tenancy
- Protocol extensions and custom transport bindings
- How A2A relates to or works alongside MCP
- Python SDK usage or the step-by-step Python tutorial

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
