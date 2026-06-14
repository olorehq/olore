# mastra Table of Contents

## Directory Map

```
contents/
├── index.mdx                    # Get Started overview
├── getting-started/             # Installation and setup (3 files)
├── agents/                      # Agents (18 files)
├── agent-builder/               # Agent Builder UI (11 files)
├── workflows/                   # Workflows (10 files)
├── memory/                      # Memory (8 files)
├── rag/                         # Retrieval-Augmented Generation (5 files)
├── mcp/                         # Model Context Protocol (2 files)
├── streaming/                   # Streaming (5 files)
├── voice/                       # Voice (4 files)
├── evals/                       # Evaluations (7 files)
│   └── datasets/                # Datasets (2 files)
├── server/                      # Server (8 files)
│   └── auth/                    # Authentication providers (13 files)
├── deployment/                  # Deployment (6 files)
├── observability/               # Observability (9 files)
│   ├── integrations/            # Integration exporters (16 files)
│   │   ├── bridges/             # Bridges (2 files)
│   │   ├── exporters/           # Exporters (12 files)
│   │   └── processors/          # Processors (1 file)
│   ├── metrics/                 # Metrics (2 files)
│   └── tracing/                 # Tracing (1 file)
├── browser/                     # Browser automation (5 files)
├── workspace/                   # Workspace (6 files)
├── studio/                      # Studio UI (4 files)
├── editor/                      # Editor (3 files)
└── mastra-platform/             # Mastra Platform (5 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user / quickstart | `contents/index.mdx` |
| Build an agent | `contents/agents/overview.mdx` |
| Create a workflow | `contents/workflows/overview.mdx` |
| Add memory | `contents/memory/overview.mdx` |
| Set up RAG | `contents/rag/overview.mdx` |
| MCP integration | `contents/mcp/overview.mdx` |
| Server setup | `contents/server/mastra-server.mdx` |
| Deploy | `contents/deployment/overview.mdx` |
| Observability | `contents/observability/overview.mdx` |
| Evaluations | `contents/evals/overview.mdx` |
| Voice | `contents/voice/overview.mdx` |
| Browser automation | `contents/browser/overview.mdx` |

## Detailed Structure

### Root (1 file)

| File | Description |
|------|-------------|
| `index.mdx` | Get Started overview, quickstart command, framework integration |

### getting-started/ (3 files)

| File | Description |
|------|-------------|
| `getting-started/build-with-ai.mdx` | Build Mastra projects using AI-assisted setup |
| `getting-started/manual-install.mdx` | Manual installation into existing projects |
| `getting-started/project-structure.mdx` | Project structure and conventions |

### agents/ (18 files)

| File | Description |
|------|-------------|
| `agents/overview.mdx` | Agents overview and core concepts |
| `agents/using-tools.mdx` | Giving agents tools to use |
| `agents/structured-output.mdx` | Getting structured output from agents |
| `agents/adding-voice.mdx` | Adding voice capabilities to agents |
| `agents/agent-approval.mdx` | Human-in-the-loop agent approval |
| `agents/background-tasks.mdx` | Running agents as background tasks |
| `agents/channels.mdx` | Connecting agents to channels (Slack, etc.) |
| `agents/code-mode.mdx` | Code mode for agents |
| `agents/goals.mdx` | Setting goals for agents |
| `agents/guardrails.mdx` | Adding guardrails to agents |
| `agents/networks.mdx` | Agent networks |
| `agents/processors.mdx` | Agent processors |
| `agents/sdk-agents.mdx` | SDK-based agents |
| `agents/signal-providers.mdx` | Signal providers for agents |
| `agents/signals.mdx` | Agent signals |
| `agents/supervisor-agents.mdx` | Supervisor agent pattern |
| `agents/a2a.mdx` | Agent-to-agent (A2A) protocol |
| `agents/acp.mdx` | Agent Communication Protocol (ACP) |

### agent-builder/ (11 files)

| File | Description |
|------|-------------|
| `agent-builder/overview.mdx` | Agent Builder overview (Enterprise) |
| `agent-builder/configuration.mdx` | Configure Agent Builder features and defaults |
| `agent-builder/access-control.mdx` | RBAC roles for Agent Builder |
| `agent-builder/model-policy.mdx` | Restrict models in Agent Builder |
| `agent-builder/memory.mdx` | Default memory for Agent Builder agents |
| `agent-builder/browser.mdx` | Browser providers for Agent Builder |
| `agent-builder/channels.mdx` | Channel integrations for Agent Builder |
| `agent-builder/deploying.mdx` | Deploying Agent Builder to production |
| `agent-builder/integrations.mdx` | Third-party tool providers |
| `agent-builder/skill-registries.mdx` | Skill registries for Agent Builder |
| `agent-builder/workspace.mdx` | Default workspace for Agent Builder agents |

### workflows/ (10 files)

| File | Description |
|------|-------------|
| `workflows/overview.mdx` | Workflow overview and concepts |
| `workflows/control-flow.mdx` | Branching and control flow |
| `workflows/error-handling.mdx` | Workflow error handling |
| `workflows/human-in-the-loop.mdx` | Human-in-the-loop steps |
| `workflows/suspend-and-resume.mdx` | Suspending and resuming workflows |
| `workflows/agents-and-tools.mdx` | Using agents and tools in workflows |
| `workflows/scheduled-workflows.mdx` | Scheduled/cron workflows |
| `workflows/snapshots.mdx` | Workflow snapshots |
| `workflows/time-travel.mdx` | Workflow time travel / replay |
| `workflows/workflow-state.mdx` | Workflow state management |

### memory/ (8 files)

| File | Description |
|------|-------------|
| `memory/overview.mdx` | Memory overview and configuration |
| `memory/message-history.mdx` | Message history storage |
| `memory/working-memory.mdx` | Working memory |
| `memory/semantic-recall.mdx` | Semantic recall (vector search) |
| `memory/observational-memory.mdx` | Observational memory |
| `memory/memory-processors.mdx` | Memory processors and filters |
| `memory/multi-user-threads.mdx` | Multi-user thread management |
| `memory/storage.mdx` | Memory storage backends |

### rag/ (5 files)

| File | Description |
|------|-------------|
| `rag/overview.mdx` | RAG overview |
| `rag/chunking-and-embedding.mdx` | Chunking and embedding strategies |
| `rag/retrieval.mdx` | Retrieval techniques |
| `rag/vector-databases.mdx` | Vector database integrations |
| `rag/graph-rag.mdx` | Graph RAG |

### mcp/ (2 files)

| File | Description |
|------|-------------|
| `mcp/overview.mdx` | MCP overview and setup |
| `mcp/mcp-apps.mdx` | Connecting to MCP applications |

### streaming/ (5 files)

| File | Description |
|------|-------------|
| `streaming/overview.mdx` | Streaming overview |
| `streaming/events.mdx` | Streaming events |
| `streaming/tool-streaming.mdx` | Tool result streaming |
| `streaming/workflow-streaming.mdx` | Workflow output streaming |
| `streaming/background-task-streaming.mdx` | Background task streaming |

### voice/ (4 files)

| File | Description |
|------|-------------|
| `voice/overview.mdx` | Voice overview |
| `voice/text-to-speech.mdx` | Text-to-speech (TTS) |
| `voice/speech-to-text.mdx` | Speech-to-text (STT) |
| `voice/speech-to-speech.mdx` | Speech-to-speech |

### evals/ (7 files)

| File | Description |
|------|-------------|
| `evals/overview.mdx` | Evals overview |
| `evals/built-in-scorers.mdx` | Built-in evaluation scorers |
| `evals/custom-scorers.mdx` | Custom evaluation scorers |
| `evals/evals-with-memory.mdx` | Evaluating agents with memory |
| `evals/running-in-ci.mdx` | Running evals in CI |
| `evals/datasets/overview.mdx` | Evaluation datasets |
| `evals/datasets/running-experiments.mdx` | Running dataset experiments |

### server/ (8 files)

| File | Description |
|------|-------------|
| `server/mastra-server.mdx` | Mastra server setup and configuration |
| `server/mastra-client.mdx` | Mastra client (TypeScript SDK) |
| `server/custom-api-routes.mdx` | Adding custom API routes |
| `server/custom-adapters.mdx` | Custom server adapters |
| `server/server-adapters.mdx` | Available server adapters |
| `server/middleware.mdx` | Server middleware |
| `server/pubsub.mdx` | Pub/sub messaging |
| `server/request-context.mdx` | Request context |

### server/auth/ (13 files)

| File | Description |
|------|-------------|
| `server/auth/index.mdx` | Auth overview |
| `server/auth/simple-auth.mdx` | Simple auth setup |
| `server/auth/jwt.mdx` | JWT authentication |
| `server/auth/composite-auth.mdx` | Composite auth strategies |
| `server/auth/custom-auth-provider.mdx` | Custom auth providers |
| `server/auth/auth0.mdx` | Auth0 integration |
| `server/auth/better-auth.mdx` | Better Auth integration |
| `server/auth/clerk.mdx` | Clerk integration |
| `server/auth/fga.mdx` | Fine-grained authorization (FGA) |
| `server/auth/firebase.mdx` | Firebase auth integration |
| `server/auth/okta.mdx` | Okta integration |
| `server/auth/supabase.mdx` | Supabase auth integration |
| `server/auth/workos.mdx` | WorkOS integration |

### deployment/ (6 files)

| File | Description |
|------|-------------|
| `deployment/overview.mdx` | Deployment overview |
| `deployment/mastra-server.mdx` | Deploying Mastra server |
| `deployment/cloud-providers.mdx` | Cloud provider deployment guides |
| `deployment/web-framework.mdx` | Deploying with web frameworks |
| `deployment/monorepo.mdx` | Monorepo deployment |
| `deployment/workflow-runners.mdx` | Workflow runner deployment |

### observability/ (9 files)

| File | Description |
|------|-------------|
| `observability/overview.mdx` | Observability overview |
| `observability/config.mdx` | Observability configuration |
| `observability/logging.mdx` | Logging setup |
| `observability/storage.mdx` | Observability storage backends |
| `observability/integrations/overview.mdx` | Integrations overview |
| `observability/integrations/processors/sensitive-data-filter.mdx` | Sensitive data filter processor |
| `observability/integrations/bridges/datadog.mdx` | Datadog bridge |
| `observability/integrations/bridges/otel.mdx` | OpenTelemetry bridge |
| `observability/integrations/exporters/arize.mdx` | Arize exporter |
| `observability/integrations/exporters/arthur.mdx` | Arthur exporter |
| `observability/integrations/exporters/braintrust.mdx` | Braintrust exporter |
| `observability/integrations/exporters/datadog.mdx` | Datadog exporter |
| `observability/integrations/exporters/laminar.mdx` | Laminar exporter |
| `observability/integrations/exporters/langfuse.mdx` | Langfuse exporter |
| `observability/integrations/exporters/langsmith.mdx` | LangSmith exporter |
| `observability/integrations/exporters/mastra-platform.mdx` | Mastra platform exporter |
| `observability/integrations/exporters/mastra-storage.mdx` | Mastra storage exporter |
| `observability/integrations/exporters/otel.mdx` | OpenTelemetry exporter |
| `observability/integrations/exporters/posthog.mdx` | PostHog exporter |
| `observability/integrations/exporters/sentry.mdx` | Sentry exporter |
| `observability/metrics/overview.mdx` | Metrics overview |
| `observability/metrics/querying.mdx` | Querying metrics |
| `observability/tracing/overview.mdx` | Tracing overview |

### browser/ (5 files)

| File | Description |
|------|-------------|
| `browser/overview.mdx` | Browser automation overview |
| `browser/agent-browser.mdx` | AgentBrowser (Playwright-based) |
| `browser/stagehand.mdx` | Stagehand (AI-powered, Browserbase) |
| `browser/browser-viewer.mdx` | BrowserViewer (CLI tool integration) |
| `browser/recording.mdx` | Browser session recording (alpha) |

### workspace/ (6 files)

| File | Description |
|------|-------------|
| `workspace/overview.mdx` | Workspace overview |
| `workspace/filesystem.mdx` | Filesystem providers |
| `workspace/sandbox.mdx` | Sandbox (command execution) |
| `workspace/lsp.mdx` | LSP inspection (code intelligence) |
| `workspace/search.mdx` | Search and indexing |
| `workspace/skills.mdx` | Workspace skills |

### studio/ (4 files)

| File | Description |
|------|-------------|
| `studio/overview.mdx` | Studio overview |
| `studio/auth.mdx` | Studio authentication |
| `studio/deployment.mdx` | Deploying Studio |
| `studio/observability.mdx` | Studio observability views |

### editor/ (3 files)

| File | Description |
|------|-------------|
| `editor/overview.mdx` | Editor overview (CMS-style agent config) |
| `editor/prompts.mdx` | Prompt blocks and versioning |
| `editor/tools.mdx` | Tool management through the editor |

### mastra-platform/ (5 files)

| File | Description |
|------|-------------|
| `mastra-platform/overview.mdx` | Mastra Platform overview |
| `mastra-platform/observability.mdx` | Hosted observability on Mastra Platform |
| `mastra-platform/studio.mdx` | Studio on Mastra Platform |
| `mastra-platform/server.mdx` | Server on Mastra Platform |
| `mastra-platform/configuration.mdx` | Platform configuration |
