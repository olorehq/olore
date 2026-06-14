# langchain Table of Contents

## Directory Map

```
contents/
├── common-errors.mdx             # Common error messages and fixes
├── security-policy.mdx           # Security best practices
├── concepts/                     # Cross-cutting concepts (4 files)
├── langchain/                    # LangChain framework docs (68 files)
│   ├── (root)                    # Quickstart, models, agents, RAG, streaming, etc.
│   ├── frontend/                 # Frontend/UI integration (17 files)
│   ├── multi-agent/              # Multi-agent patterns (10 files)
│   ├── errors/                   # Error reference (7 files)
│   └── middleware/               # Middleware (3 files)
├── langgraph/                    # LangGraph runtime docs (34 files)
│   └── (root)                    # Graph/functional APIs, persistence, streaming, etc.
├── deepagents/                   # Deep Agents SDK docs (36 files)
│   ├── (root)                    # Overview, quickstart, tools, memory, subagents, etc.
│   ├── code/                     # Code agent guide (8 files)
│   └── frontend/                 # Frontend integration (4 files)
├── integrations/                 # Shared integration docs (6 files)
│   ├── providers/                # Provider index (1 file)
│   └── splitters/                # Text splitters (5 files)
├── python/                       # Python-specific docs (575 files)
│   ├── build-overview.mdx        # Python stack overview
│   ├── migrate/                  # Migration guides (2 files)
│   └── integrations/             # Python integrations (573 files)
│       ├── providers/            # Provider pages (178 files)
│       ├── tools/                # Tool integrations (91 files)
│       ├── chat/                 # Chat model integrations (58 files)
│       ├── vectorstores/         # Vector store integrations (57 files)
│       ├── document_loaders/     # Document loaders (47 files)
│       ├── embeddings/           # Embedding integrations (41 files)
│       ├── retrievers/           # Retriever integrations (37 files)
│       ├── llms/                 # LLM integrations (21 files)
│       ├── document_transformers/ # Document transformers (9 files)
│       ├── sandboxes/            # Sandbox integrations (7 files)
│       ├── stores/               # Store integrations (6 files)
│       ├── middleware/           # Middleware integrations (6 files)
│       ├── graphs/               # Graph integrations (6 files)
│       ├── splitters/            # Splitter integrations (3 files)
│       ├── callbacks/            # Callback integrations (2 files)
│       └── (misc)                # caches, chains, checkpointers, etc.
└── javascript/                   # JavaScript/TypeScript-specific docs (173 files)
    ├── migrate/                  # Migration guides (2 files)
    └── integrations/             # JS integrations (170 files)
        ├── tools/                # Tool integrations (31 files)
        ├── chat/                 # Chat model integrations (28 files)
        ├── vectorstores/         # Vector store integrations (21 files)
        ├── embeddings/           # Embedding integrations (20 files)
        ├── providers/            # Provider pages (16 files)
        ├── llms/                 # LLM integrations (15 files)
        ├── document_loaders/     # Document loaders (12 files)
        ├── retrievers/           # Retriever integrations (11 files)
        ├── stores/               # Store integrations (3 files)
        ├── middleware/           # Middleware integrations (3 files)
        ├── document_compressors/ # Document compressors (3 files)
        └── (misc)                # chains, graphs, llm_caching, etc.
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| LangChain quickstart | `contents/langchain/quickstart.mdx` |
| LangGraph quickstart | `contents/langgraph/quickstart.mdx` |
| Deep Agents quickstart | `contents/deepagents/quickstart.mdx` |
| Building agents (LangChain) | `contents/langchain/agents.mdx` |
| RAG / retrieval | `contents/langchain/rag.mdx` |
| Memory (short/long-term) | `contents/langchain/short-term-memory.mdx`, `contents/langchain/long-term-memory.mdx` |
| Streaming | `contents/langchain/streaming.mdx` |
| LangGraph graph API | `contents/langgraph/graph-api.mdx` |
| LangGraph functional API | `contents/langgraph/functional-api.mdx` |
| LangGraph persistence | `contents/langgraph/persistence.mdx` |
| Deep Agents tools | `contents/deepagents/tools.mdx` |
| Deep Agents memory | `contents/deepagents/memory.mdx` |
| Deep Agents subagents | `contents/deepagents/subagents.mdx` |
| Python integration index | `contents/python/integrations/providers/` |
| JS integration index | `contents/javascript/integrations/providers/` |
| Common errors | `contents/common-errors.mdx` |
| Framework comparison | `contents/concepts/products.mdx` |

## Detailed Structure

### concepts/ (4 files)

| File | Description |
|------|-------------|
| `concepts/context.mdx` | Context management concepts |
| `concepts/memory.mdx` | Memory concepts |
| `concepts/products.mdx` | LangChain vs. LangGraph vs. Deep Agents |
| `concepts/providers-and-models.mdx` | Providers and models overview |

### langchain/ (68 files)

| File | Description |
|------|-------------|
| `langchain/quickstart.mdx` | Getting started with LangChain |
| `langchain/install.mdx` | Installation |
| `langchain/overview.mdx` | LangChain overview |
| `langchain/agents.mdx` | Building agents |
| `langchain/models.mdx` | Working with models |
| `langchain/messages.mdx` | Message types |
| `langchain/rag.mdx` | Retrieval-Augmented Generation |
| `langchain/retrieval.mdx` | Retrieval patterns |
| `langchain/streaming.mdx` | Streaming responses |
| `langchain/event-streaming.mdx` | Event streaming |
| `langchain/short-term-memory.mdx` | Short-term memory |
| `langchain/long-term-memory.mdx` | Long-term memory |
| `langchain/structured-output.mdx` | Structured output |
| `langchain/tools.mdx` | Tool calling |
| `langchain/mcp.mdx` | MCP integration |
| `langchain/human-in-the-loop.mdx` | Human-in-the-loop patterns |
| `langchain/guardrails.mdx` | Guardrails |
| `langchain/observability.mdx` | Observability |
| `langchain/context-engineering.mdx` | Context engineering |
| `langchain/deploy.mdx` | Deployment |
| `langchain/runtime.mdx` | Runtime |
| `langchain/component-architecture.mdx` | Component architecture |
| `langchain/philosophy.mdx` | Design philosophy |
| `langchain/sql-agent.mdx` | SQL agent tutorial |
| `langchain/knowledge-base.mdx` | Knowledge base |
| `langchain/voice-agent.mdx` | Voice agent tutorial |
| `langchain/ui.mdx` | UI integration |
| `langchain/studio.mdx` | LangSmith Studio |
| `langchain/deep-agent-from-scratch.mdx` | Build a deep agent from scratch |
| `langchain/get-help.mdx` | Community and support |

#### langchain/frontend/ (17 files)

UI and frontend integration files including auth, streaming, interrupts, threads, and provider integrations.

#### langchain/multi-agent/ (10 files)

Multi-agent coordination patterns.

#### langchain/errors/ (7 files)

Error reference pages for common LangChain errors.

#### langchain/middleware/ (3 files)

Middleware integration patterns.

### langgraph/ (34 files)

| File | Description |
|------|-------------|
| `langgraph/overview.mdx` | LangGraph overview |
| `langgraph/quickstart.mdx` | Getting started |
| `langgraph/install.mdx` | Installation |
| `langgraph/graph-api.mdx` | Graph API reference |
| `langgraph/functional-api.mdx` | Functional API reference |
| `langgraph/use-graph-api.mdx` | How to use the graph API |
| `langgraph/use-functional-api.mdx` | How to use the functional API |
| `langgraph/thinking-in-langgraph.mdx` | Mental model for LangGraph |
| `langgraph/choosing-apis.mdx` | When to use graph vs. functional API |
| `langgraph/persistence.mdx` | State persistence and checkpointing |
| `langgraph/checkpointers.mdx` | Checkpointer implementations |
| `langgraph/stores.mdx` | LangGraph stores |
| `langgraph/streaming.mdx` | Streaming output |
| `langgraph/event-streaming.mdx` | Event-based streaming |
| `langgraph/interrupts.mdx` | Human-in-the-loop interrupts |
| `langgraph/fault-tolerance.mdx` | Error handling and retry |
| `langgraph/workflows-agents.mdx` | Workflows vs. agents |
| `langgraph/add-memory.mdx` | Adding memory to agents |
| `langgraph/agentic-rag.mdx` | Agentic RAG tutorial |
| `langgraph/application-structure.mdx` | Application structure |
| `langgraph/use-subgraphs.mdx` | Subgraphs |
| `langgraph/use-time-travel.mdx` | Time travel / replay |
| `langgraph/pregel.mdx` | Pregel execution model |
| `langgraph/sql-agent.mdx` | SQL agent example |
| `langgraph/local-server.mdx` | Running a local server |
| `langgraph/deploy.mdx` | Deployment |
| `langgraph/observability.mdx` | Observability |
| `langgraph/test.mdx` | Testing |
| `langgraph/studio.mdx` | LangSmith Studio |
| `langgraph/ui.mdx` | UI integration |
| `langgraph/backward-compatibility.mdx` | Backward compatibility |
| `langgraph/case-studies.mdx` | Case studies |

#### langgraph/errors/ (6 files)

LangGraph error reference pages.

#### langgraph/frontend/ (3 files)

Frontend integration for LangGraph.

### deepagents/ (36 files)

| File | Description |
|------|-------------|
| `deepagents/overview.mdx` | Deep Agents overview |
| `deepagents/quickstart.mdx` | Getting started |
| `deepagents/harness.mdx` | Harness capabilities |
| `deepagents/tools.mdx` | Tool use |
| `deepagents/memory.mdx` | Memory management |
| `deepagents/skills.mdx` | Skills system |
| `deepagents/subagents.mdx` | Spawning subagents |
| `deepagents/async-subagents.mdx` | Async subagent patterns |
| `deepagents/sandboxes.mdx` | Sandbox environments |
| `deepagents/backends.mdx` | Execution backends |
| `deepagents/interpreters.mdx` | Code interpreters |
| `deepagents/streaming.mdx` | Streaming |
| `deepagents/event-streaming.mdx` | Event streaming |
| `deepagents/human-in-the-loop.mdx` | Human approval |
| `deepagents/permissions.mdx` | Permission system |
| `deepagents/models.mdx` | Model configuration |
| `deepagents/profiles.mdx` | Harness profiles (beta) |
| `deepagents/middleware.mdx` | Middleware |
| `deepagents/customization.mdx` | Customization |
| `deepagents/context-engineering.mdx` | Context engineering |
| `deepagents/rubric.mdx` | LLM-as-judge grading rubrics |
| `deepagents/going-to-production.mdx` | Production readiness |
| `deepagents/comparison.mdx` | Comparison with Claude Agent SDK |
| `deepagents/content-builder.mdx` | Tutorial: content builder agent |
| `deepagents/data-analysis.mdx` | Tutorial: data analysis agent |
| `deepagents/deep-research.mdx` | Tutorial: deep research agent |
| `deepagents/acp.mdx` | ACP protocol |

#### deepagents/code/ (8 files)

Code agent configuration, providers, MCP tools, subagents, remote sandboxes, memory.

#### deepagents/frontend/ (4 files)

Frontend integration for Deep Agents: overview, sandbox, subagent streaming, todo list example.

### integrations/ (6 files)

| File | Description |
|------|-------------|
| `integrations/providers/cala.mdx` | Cala knowledge graph integration |
| `integrations/splitters/index.mdx` | Text splitter index |
| `integrations/splitters/character_text_splitter.mdx` | Character text splitter |
| `integrations/splitters/recursive_text_splitter.mdx` | Recursive text splitter |
| `integrations/splitters/code_splitter.mdx` | Code splitter |
| `integrations/splitters/split_by_token.mdx` | Token-based splitter |

### python/integrations/ (573 files)

Integration docs for the Python SDK. Organized by integration type.

#### python/integrations/providers/ (178 files)

One page per external provider (Anthropic, OpenAI, Azure, Google, AWS, Pinecone, Weaviate, etc.).

#### python/integrations/tools/ (91 files)

Tool integrations (web search, code execution, APIs, databases, etc.).

#### python/integrations/chat/ (58 files)

Chat model integrations (one per provider/model family).

#### python/integrations/vectorstores/ (57 files)

Vector store integrations (Chroma, Pinecone, Weaviate, pgvector, etc.).

#### python/integrations/document_loaders/ (47 files)

Document loader integrations (PDF, web, databases, cloud storage, etc.).

#### python/integrations/embeddings/ (41 files)

Embedding model integrations.

#### python/integrations/retrievers/ (37 files)

Retriever integrations (BM25, hybrid, contextual compression, etc.).

#### python/integrations/llms/ (21 files)

Legacy LLM (completion) integrations.

#### python/integrations/document_transformers/ (9 files)

Document transformation integrations.

#### python/integrations/sandboxes/ (7 files)

Sandbox integrations (E2B, Modal, etc.).

#### python/integrations/stores/ (6 files), middleware/ (6 files), graphs/ (6 files)

Store, middleware, and graph integrations.

### python/migrate/ (2 files)

| File | Description |
|------|-------------|
| `python/migrate/langchain-v1.mdx` | LangChain v1 migration guide |
| `python/migrate/langgraph-v1.mdx` | LangGraph v1 migration guide |

### javascript/integrations/ (170 files)

Integration docs for the JavaScript/TypeScript SDK. Same structure as Python integrations.

#### javascript/integrations/tools/ (31 files)

#### javascript/integrations/chat/ (28 files)

#### javascript/integrations/vectorstores/ (21 files)

#### javascript/integrations/embeddings/ (20 files)

#### javascript/integrations/providers/ (16 files)

#### javascript/integrations/llms/ (15 files)

#### javascript/integrations/document_loaders/ (12 files)

#### javascript/integrations/retrievers/ (11 files)

### javascript/migrate/ (2 files)

| File | Description |
|------|-------------|
| `javascript/migrate/langchain-v1.mdx` | LangChain v1 JS migration guide |
| `javascript/migrate/langgraph-v1.mdx` | LangGraph v1 JS migration guide |
