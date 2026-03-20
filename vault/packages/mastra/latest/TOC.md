# mastra Table of Contents

## Directory Map

```
contents/
├── getting-started/        # Installation, setup, project structure (4 files)
├── agents/                 # Agent creation, tools, memory, networks (9 files)
├── workflows/              # Workflow orchestration, control flow (9 files)
├── memory/                 # Conversation memory, storage (7 files)
├── rag/                    # RAG, chunking, embedding, vector DBs (5 files)
├── tools/                  # (see agents/using-tools)
├── streaming/              # Streaming events, workflow streaming (4 files)
├── voice/                  # TTS, STT, speech-to-speech (4 files)
├── mcp/                    # MCP server integration (2 files)
├── evals/                  # Evaluation scorers, CI testing (4 files)
├── observability/          # Tracing, logging, exporters, datasets (13 files)
├── server/                 # Server setup, auth, middleware, routes (12 files)
├── deployment/             # Cloud, web frameworks, workflow runners (7 files)
├── workspace/              # Agent filesystem, sandbox, search (5 files)
├── mastra-cloud/           # Cloud deployment and monitoring (5 files)
└── index.mdx               # Overview and getting started
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/getting-started/manual-install.mdx` |
| Create an agent | `contents/agents/overview.mdx` |
| Build a workflow | `contents/workflows/overview.mdx` |
| Add memory | `contents/memory/overview.mdx` |
| RAG setup | `contents/rag/overview.mdx` |
| MCP integration | `contents/mcp/overview.mdx` |
| Deploy | `contents/deployment/overview.mdx` |
| Auth | `contents/server/auth/index.mdx` |
| Observability | `contents/observability/overview.mdx` |

## Detailed Structure

### getting-started/ (4 files)

| File | Description |
|------|-------------|
| `manual-install.mdx` | Manual project setup without CLI |
| `studio.mdx` | Using Mastra Studio |
| `project-structure.mdx` | Project file layout |
| `build-with-ai.mdx` | Resources for AI-assisted development |

### agents/ (9 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Agent class, generate/stream, tools |
| `using-tools.mdx` | Tool definition and usage |
| `structured-output.mdx` | Typed/structured responses |
| `guardrails.mdx` | Input/output safety filters |
| `processors.mdx` | Message processors |
| `agent-approval.mdx` | Human approval gate |
| `supervisor-agents.mdx` | Multi-agent supervisor pattern |
| `networks.mdx` | Agent networks |
| `adding-voice.mdx` | Voice capabilities in agents |

### workflows/ (9 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Workflow class, steps, execution |
| `control-flow.mdx` | Branching, parallel, conditions |
| `agents-and-tools.mdx` | Using agents/tools inside workflows |
| `suspend-and-resume.mdx` | Pause and resume execution |
| `human-in-the-loop.mdx` | Human approval steps |
| `error-handling.mdx` | Retry, error branches |
| `workflow-state.mdx` | State management |
| `snapshots.mdx` | Workflow snapshots |
| `time-travel.mdx` | Workflow time travel debugging |

### memory/ (7 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Memory system overview |
| `message-history.mdx` | Conversation message history |
| `working-memory.mdx` | Short-term working memory |
| `semantic-recall.mdx` | Semantic similarity recall |
| `observational-memory.mdx` | Observational memory |
| `memory-processors.mdx` | Memory processors/filters |
| `storage.mdx` | Memory storage backends |

### rag/ (5 files)

| File | Description |
|------|-------------|
| `overview.mdx` | RAG system, embeddings, vector stores |
| `chunking-and-embedding.mdx` | Document chunking strategies |
| `retrieval.mdx` | Query and retrieval patterns |
| `vector-databases.mdx` | Supported vector DBs |
| `graph-rag.mdx` | Graph-based RAG |

### streaming/ (4 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Streaming fundamentals |
| `events.mdx` | Streaming events API |
| `workflow-streaming.mdx` | Streaming workflow output |
| `tool-streaming.mdx` | Streaming tool results |

### voice/ (4 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Voice integration overview |
| `text-to-speech.mdx` | TTS configuration |
| `speech-to-text.mdx` | STT configuration |
| `speech-to-speech.mdx` | Realtime speech-to-speech |

### mcp/ (2 files)

| File | Description |
|------|-------------|
| `overview.mdx` | MCP server usage and tools |
| `publishing-mcp-server.mdx` | Publishing an MCP server |

### evals/ (4 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Evaluation system overview |
| `built-in-scorers.mdx` | Built-in evaluation scorers |
| `custom-scorers.mdx` | Custom scorer implementation |
| `running-in-ci.mdx` | CI pipeline integration |

### observability/ (13 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Observability overview |
| `logging.mdx` | Logging configuration |
| `tracing/overview.mdx` | OpenTelemetry tracing |
| `tracing/exporters/` | Exporter configs (Langfuse, Datadog, Sentry, etc.) |
| `tracing/bridges/otel.mdx` | OpenTelemetry bridge |
| `tracing/processors/sensitive-data-filter.mdx` | PII filtering |
| `datasets/overview.mdx` | Dataset management |
| `datasets/running-experiments.mdx` | Running eval experiments |

### server/ (12 files)

| File | Description |
|------|-------------|
| `mastra-server.mdx` | Server configuration |
| `mastra-client.mdx` | Client SDK |
| `middleware.mdx` | Middleware setup |
| `custom-api-routes.mdx` | Custom route handlers |
| `server-adapters.mdx` | Framework adapters |
| `custom-adapters.mdx` | Custom adapter creation |
| `request-context.mdx` | Request context access |
| `auth/index.mdx` | Auth overview |
| `auth/jwt.mdx` | JWT authentication |
| `auth/clerk.mdx` | Clerk integration |
| `auth/firebase.mdx` | Firebase Auth |
| `auth/supabase.mdx` | Supabase Auth |
| `auth/workos.mdx` | WorkOS Auth |
| `auth/auth0.mdx` | Auth0 integration |
| `auth/better-auth.mdx` | Better Auth |
| `auth/simple-auth.mdx` | Simple API key auth |
| `auth/composite-auth.mdx` | Composite auth strategies |
| `auth/custom-auth-provider.mdx` | Custom auth provider |

### deployment/ (7 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Deployment overview |
| `mastra-server.mdx` | Standalone server |
| `web-framework.mdx` | Next.js / framework integration |
| `cloud-providers.mdx` | Cloud provider guides |
| `workflow-runners.mdx` | Inngest and other runners |
| `studio.mdx` | Studio deployment |
| `monorepo.mdx` | Monorepo setup |

### workspace/ (5 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Workspace overview |
| `filesystem.mdx` | File read/write tools |
| `sandbox.mdx` | Shell command execution |
| `search.mdx` | Content search (BM25, vector) |
| `skills.mdx` | Reusable agent skills |

### mastra-cloud/ (5 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Mastra Cloud overview |
| `setup.mdx` | Cloud project setup |
| `deployment.mdx` | Cloud deployment |
| `studio.mdx` | Cloud Studio |
| `observability.mdx` | Cloud observability |
