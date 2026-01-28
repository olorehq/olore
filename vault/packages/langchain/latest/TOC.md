# LangChain Documentation Structure

## Directory Map

```
contents/
├── (root)              # Common resources (4 files)
├── concepts/           # Core concepts (2 files)
├── contributing/       # Contribution guides (17 files)
├── deepagents/         # DeepAgents documentation (10 files)
├── integrations/       # Integration guides (5 files)
├── javascript/         # JavaScript/TypeScript docs (306 files)
│   ├── integrations/   # JS integrations
│   ├── migrate/        # JS migration guides
│   └── releases/       # JS release info
├── langchain/          # LangChain core (54 files)
│   ├── middleware/     # Middleware components
│   ├── multi-agent/    # Multi-agent patterns
│   └── errors/         # Error documentation
├── langgraph/          # LangGraph framework (35 files)
│   └── errors/         # LangGraph errors
├── python/             # Python docs (1290 files)
│   ├── integrations/   # Python integrations (largest section)
│   ├── migrate/        # Python migration guides
│   └── releases/       # Python release info
└── reference/          # API reference (8 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New to LangChain | `contents/learn.mdx` |
| Quick start | `contents/langchain/quickstart.mdx` or `contents/langgraph/quickstart.mdx` |
| Python integrations | `contents/python/integrations/` |
| JavaScript/TypeScript | `contents/javascript/integrations/` |
| Building agents | `contents/langchain/agents.mdx` |
| LangGraph workflows | `contents/langgraph/overview.mdx` |
| Common errors | `contents/common-errors.mdx` |
| Migration guides | `contents/python/migrate/` or `contents/javascript/migrate/` |

## Detailed Structure

### Root Level (4 files)

| File | Description |
|------|-------------|
| `common-errors.mdx` | Common errors and troubleshooting |
| `learn.mdx` | Learning resources and getting started |
| `security-policy.mdx` | Security policies and guidelines |
| `versioning.mdx` | Version management information |

### concepts/ (2 files)

Core conceptual documentation for understanding LangChain architecture and patterns.

### contributing/ (17 files)

Guidelines for contributing to LangChain projects, including code style, testing, and development setup.

### deepagents/ (10 files)

Documentation for the DeepAgents framework and patterns.

### integrations/ (5 files)

High-level integration guides connecting various components and services.

### javascript/ (306 files)

Complete JavaScript/TypeScript documentation including integrations with various providers, tools, and services. Organized into:
- **integrations/**: Chat models, embeddings, vector stores, document loaders, tools, retrievers, callbacks, and more
- **migrate/**: Migration guides for version updates
- **releases/**: Release information

### langchain/ (54 files)

Core LangChain framework documentation:

| File | Description |
|------|-------------|
| `agents.mdx` | Agent creation and management |
| `component-architecture.mdx` | Architecture overview |
| `context-engineering.mdx` | Context management |
| `deploy.mdx` | Deployment guides |
| `evals.mdx` | Evaluation strategies |
| `guardrails.mdx` | Safety and guardrails |
| `human-in-the-loop.mdx` | Human feedback patterns |
| `install.mdx` | Installation instructions |
| `knowledge-base.mdx` | Knowledge base integration |
| `long-term-memory.mdx` | Memory management |
| `mcp.mdx` | Model Context Protocol |
| `messages.mdx` | Message handling |
| `models.mdx` | Model configuration |
| `prompt-engineering.mdx` | Prompt design |
| `structured-output.mdx` | Structured response handling |
| `tools.mdx` | Tool integration |

Subdirectories:
- **middleware/**: Middleware components for request/response processing
- **multi-agent/**: Multi-agent coordination patterns
- **errors/**: Error documentation and troubleshooting

### langgraph/ (35 files)

LangGraph framework for building stateful, multi-actor applications:

| File | Description |
|------|-------------|
| `overview.mdx` | LangGraph introduction |
| `quickstart.mdx` | Quick start guide |
| `install.mdx` | Installation |
| `graph-api.mdx` | Graph API documentation |
| `functional-api.mdx` | Functional API documentation |
| `thinking-in-langgraph.mdx` | Design patterns |
| `application-structure.mdx` | Application architecture |
| `persistence.mdx` | State persistence |
| `memory.mdx` | Memory management |
| `add-memory.mdx` | Adding memory to graphs |
| `interrupts.mdx` | Human-in-the-loop interrupts |
| `streaming.mdx` | Streaming responses |
| `observability.mdx` | Monitoring and observability |
| `deploy.mdx` | Deployment options |
| `test.mdx` | Testing strategies |
| `agentic-rag.mdx` | Agentic RAG patterns |
| `sql-agent.mdx` | SQL agent examples |

Subdirectories:
- **errors/**: LangGraph-specific error documentation

### python/ (1290 files)

Comprehensive Python documentation, the largest section:

**integrations/**: Extensive integration documentation including:
- **chat/**: Chat model providers (Anthropic, OpenAI, Google, etc.)
- **chat_loaders/**: Chat history loaders
- **text_embedding/**: Embedding providers
- **vectorstores/**: Vector database integrations
- **document_loaders/**: Document loading utilities
- **document_transformers/**: Document processing
- **tools/**: Tool integrations
- **retrievers/**: Retrieval strategies
- **callbacks/**: Callback handlers
- **llms/**: Legacy LLM providers
- **stores/**: Storage backends
- **graphs/**: Graph databases
- **caches/**: Caching implementations
- **adapters/**: Framework adapters
- **splitters/**: Text splitting utilities
- **middleware/**: Python middleware
- **providers/**: Provider-specific docs

**migrate/**: Migration guides for version updates

**releases/**: Release and version information

### reference/ (8 files)

API reference documentation and technical specifications.

## Navigation Tips

1. **Language-specific**: Choose `python/` or `javascript/` based on your language
2. **Framework choice**: Use `langchain/` for core functionality, `langgraph/` for stateful workflows
3. **Integrations**: Most provider integrations are under `python/integrations/` or `javascript/integrations/`
4. **Troubleshooting**: Start with `common-errors.mdx`, then check language-specific error docs
5. **Version updates**: Check `migrate/` directories for migration guides
