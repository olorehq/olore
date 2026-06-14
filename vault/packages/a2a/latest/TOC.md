# a2a Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` | Root-level docs: overview, spec, definitions, changelog | 7 |
| `contents/topics/` | Concept deep-dives: key concepts, streaming, enterprise, extensions | 10 |
| `contents/tutorials/python/` | Step-by-step Python quickstart (8 parts) | 8 |
| `contents/tutorials/` | Tutorial index | 1 |
| `contents/sdk/` | SDK reference and Python SDK guide | 2 |

## contents/

| File | Description |
|------|-------------|
| `index.md` | Protocol overview, features, and getting started links |
| `specification.md` | Full technical protocol specification |
| `definitions.md` | Glossary of A2A protocol terms and concepts |
| `whats-new-v1.md` | Changelog: what changed from v0.3.0 to v1.0 |
| `announcing-1.0.md` | v1.0 release announcement |
| `roadmap.md` | Protocol roadmap and near-term initiatives |
| `community.md` | Community hub and contribution resources |
| `partners.md` | List of A2A partner organizations |
| `README.md` | Repository readme |

## contents/topics/

| File | Description |
|------|-------------|
| `what-is-a2a.md` | What A2A is, why it exists, problems it solves |
| `key-concepts.md` | Core protocol concepts: tasks, agents, cards, artifacts |
| `life-of-a-task.md` | Task lifecycle: creation, execution, completion |
| `streaming-and-async.md` | Streaming responses and asynchronous task execution |
| `agent-discovery.md` | Agent Card discovery and resolution |
| `a2a-and-mcp.md` | How A2A and MCP are complementary |
| `enterprise-ready.md` | Enterprise features: auth, observability, security |
| `multi-tenancy.md` | Multi-tenant agent deployments |
| `extensions.md` | Protocol extensions system |
| `extension-and-binding-governance.md` | Governance for extensions and protocol bindings |
| `custom-protocol-bindings.md` | Creating custom protocol transport bindings |

## contents/tutorials/python/

| File | Description |
|------|-------------|
| `1-introduction.md` | Tutorial intro: what you will build |
| `2-setup.md` | Environment setup and dependencies |
| `3-agent-skills-and-card.md` | Defining agent skills and Agent Card |
| `4-agent-executor.md` | Implementing the AgentExecutor |
| `5-start-server.md` | Starting the A2A server |
| `6-interact-with-server.md` | Sending tasks to the server |
| `7-streaming-and-multiturn.md` | Streaming responses and multi-turn conversations |
| `8-next-steps.md` | Next steps after completing the tutorial |

## contents/sdk/

| File | Description |
|------|-------------|
| `index.md` | SDK overview and available language SDKs |
| `python.md` | Python SDK reference and usage guide |
