# Microsoft Agent Framework Documentation Structure

## Overview

Microsoft Agent Framework provides libraries for building AI agents in Python and .NET. It supports multiple LLM providers, durable execution, MCP servers, and various deployment targets including Azure Functions.

## Directory Map

```
docs/
├── agent-samples/      # Sample agent implementations
├── docs/               # Design docs, specs, ADRs
├── dotnet/             # .NET SDK documentation
├── python/             # Python SDK documentation
│   ├── packages/       # Package documentation
│   └── samples/        # Code samples
└── workflow-samples/   # Workflow examples
```

## Detailed Structure

### python/
| Directory | Description |
|-----------|-------------|
| `packages/core/` | Core agent framework |
| `packages/azurefunctions/` | Azure Functions integration |
| `packages/a2a/` | Agent-to-agent communication |
| `packages/declarative/` | Declarative agent definition |
| `packages/devui/` | Development UI |
| `packages/anthropic/` | Anthropic provider |
| `packages/ollama/` | Ollama provider |
| `packages/bedrock/` | AWS Bedrock provider |
| `samples/getting_started/` | Getting started samples |
| `samples/demos/` | Demo applications |

### python/samples/getting_started/
| Directory | Description |
|-----------|-------------|
| `agents/` | Agent samples by provider |
| `tools/` | Tool usage examples |
| `workflows/` | Workflow patterns |
| `mcp/` | MCP server integration |
| `azure_functions/` | Azure Functions deployment |
| `observability/` | Logging and monitoring |

### docs/
| Directory | Description |
|-----------|-------------|
| `design/` | Design documents |
| `specs/` | Technical specifications |
| `decisions/` | Architecture Decision Records |
| `features/` | Feature documentation |

## Key Entry Points

| Task | Start Here |
|------|------------|
| Getting started (Python) | `python/README.md` |
| Getting started (.NET) | `dotnet/README.md` |
| Agent samples | `python/samples/getting_started/agents/` |
| Azure Functions | `python/samples/getting_started/azure_functions/` |
| MCP integration | `python/samples/getting_started/mcp/` |
| Workflows | `python/samples/getting_started/workflows/` |
| Architecture decisions | `docs/decisions/` |
