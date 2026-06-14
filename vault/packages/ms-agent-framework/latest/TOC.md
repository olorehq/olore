# ms-agent-framework Table of Contents

## Directory Map

```
contents/
├── README.md                        # Project overview
├── dotnet/                          # .NET/C# SDK (189 files)
│   ├── AGENTS.md                    # .NET agent guide
│   ├── README.md                    # .NET overview
│   ├── nuget/NUGET.md               # NuGet package info
│   └── samples/                     # .NET samples (186 files)
│       ├── AGENTS.md
│       ├── README.md
│       ├── 02-agents/               # Agent samples (116 files)
│       │   ├── A2A/                 # Agent-to-agent samples
│       │   ├── AgentOpenTelemetry/  # Observability
│       │   ├── AgentProviders/      # Provider integrations (Anthropic, Azure, Gemini, etc.)
│       │   ├── Agents/              # Core agent step samples
│       │   ├── AgentSkills/         # Skills samples
│       │   ├── AgentsWithFoundry/   # Azure AI Foundry samples
│       │   ├── AgentWithAnthropic/  # Anthropic provider
│       │   ├── AgentWithCodeAct/    # CodeAct samples
│       │   ├── AgentWithMemory/     # Memory/persistence
│       │   ├── AgentWithOpenAI/     # OpenAI provider
│       │   ├── AgentWithRAG/        # RAG samples
│       │   ├── AGUI/                # AG-UI protocol
│       │   ├── DevUI/               # Dev UI
│       │   ├── Evaluation/          # Agent evaluation
│       │   ├── Harness/             # Agent harness
│       │   └── ModelContextProtocol/ # MCP server/client
│       ├── 03-workflows/            # Workflow samples (8 files)
│       │   ├── Agents/              # Group chat, tool approval
│       │   ├── Declarative/         # YAML-based workflows
│       │   ├── Evaluation/          # Workflow evaluation
│       │   ├── Orchestration/       # Magentic orchestration
│       │   └── Visualization/       # Workflow visualization
│       ├── 04-hosting/              # Hosting samples (49 files)
│       │   ├── DurableAgents/       # Durable agents (Azure Functions + Console)
│       │   ├── DurableWorkflows/    # Durable workflows (Azure Functions + Console)
│       │   └── FoundryHostedAgents/ # Foundry-hosted agent samples
│       └── 05-end-to-end/           # End-to-end samples (11 files)
│           ├── A2AClientServer/
│           ├── AGUIClientServer/
│           ├── AGUIWebChat/
│           ├── AspNetAgentAuthorization/
│           ├── DevUIAspireIntegration/
│           ├── Evaluation/
│           └── M365Agent/
├── python/                          # Python SDK (187 files)
│   ├── AGENTS.md                    # Python agent guide
│   ├── README.md                    # Python overview
│   ├── PACKAGE_STATUS.md            # Package lifecycle status
│   ├── packages/                    # Python packages (69 files)
│   │   ├── a2a/                     # A2A protocol package
│   │   ├── ag-ui/                   # AG-UI protocol package
│   │   ├── anthropic/               # Anthropic provider
│   │   ├── azure-ai-search/         # Azure AI Search
│   │   ├── azure-contentunderstanding/ # Azure Content Understanding
│   │   ├── azure-cosmos/            # Azure Cosmos DB
│   │   ├── azurefunctions/          # Azure Functions hosting
│   │   ├── bedrock/                 # AWS Bedrock provider
│   │   ├── chatkit/                 # ChatKit UI
│   │   ├── claude/                  # Claude/Anthropic provider
│   │   ├── copilotstudio/           # Copilot Studio
│   │   ├── core/                    # Core framework package
│   │   ├── declarative/             # Declarative workflow package
│   │   ├── devui/                   # Dev UI package
│   │   ├── durabletask/             # Durable Task hosting
│   │   ├── foundry/                 # Azure AI Foundry
│   │   ├── foundry_hosting/         # Foundry hosting
│   │   ├── foundry_local/           # Foundry local
│   │   ├── gemini/                  # Google Gemini provider
│   │   ├── github_copilot/          # GitHub Copilot provider
│   │   ├── hyperlight/              # Hyperlight container
│   │   ├── lab/                     # Experimental lab modules
│   │   ├── mem0/                    # Mem0 memory provider
│   │   ├── mistral/                 # Mistral provider
│   │   ├── monty/                   # Monty code interpreter
│   │   ├── ollama/                  # Ollama provider
│   │   ├── openai/                  # OpenAI provider
│   │   ├── orchestrations/          # Orchestration patterns
│   │   ├── purview/                 # Microsoft Purview
│   │   ├── redis/                   # Redis memory
│   │   └── tools/                   # Tools package
│   └── samples/                     # Python samples (115 files)
│       ├── AGENTS.md
│       ├── README.md
│       ├── 01-get-started/          # Getting started
│       ├── 02-agents/               # Agent samples (49 files)
│       │   ├── a2a/                 # Agent-to-agent
│       │   ├── chat_client/         # Chat client
│       │   ├── compaction/          # Context compaction
│       │   ├── context_providers/   # Context providers (search, code_act, mem0, neo4j, redis)
│       │   ├── conversations/       # Multi-turn conversations
│       │   ├── declarative/         # Declarative agents
│       │   ├── devui/               # Dev UI
│       │   ├── harness/             # Agent harness
│       │   ├── mcp/                 # MCP integration
│       │   ├── middleware/          # Middleware
│       │   ├── multimodal_input/    # Multimodal input
│       │   ├── observability/       # OpenTelemetry
│       │   ├── providers/           # Provider samples (amazon, anthropic, azure, etc.)
│       │   ├── security/            # FIDES security
│       │   ├── skills/              # Agent skills
│       │   └── tools/               # Tool samples
│       ├── 03-workflows/            # Workflow samples (11 files)
│       │   ├── declarative/         # Declarative workflows (conditional, deep_research, etc.)
│       │   └── orchestrations/      # Orchestration patterns
│       ├── 04-hosting/              # Hosting samples (41 files)
│       │   ├── a2a/                 # A2A hosting
│       │   ├── azure_functions/     # Azure Functions hosting
│       │   ├── container/           # Container (Hyperlight + CodeAct)
│       │   ├── durabletask/         # Durable Task hosting
│       │   └── foundry-hosted-agents/ # Foundry hosted agents
│       ├── 05-end-to-end/           # End-to-end samples (9 files)
│       │   ├── ag_ui_workflow_handoff/
│       │   ├── chatkit-integration/
│       │   ├── evaluation/
│       │   ├── m365-agent/
│       │   ├── neo4j_graphrag/
│       │   ├── purview_agent/
│       │   └── workflow_evaluation/
│       ├── autogen-migration/       # AutoGen → Agent Framework migration guide
│       └── semantic-kernel-migration/ # Semantic Kernel migration guide
├── docs/                            # Framework docs (7 files)
│   ├── FAQS.md                      # Frequently asked questions
│   └── features/                   # Feature documentation
│       ├── code_act/                # CodeAct feature (dotnet + python)
│       ├── durable-agents/          # Durable agents feature
│       └── vector-stores-and-embeddings/
└── declarative-agents/             # Declarative agent YAML samples (1 file)
    └── workflow-samples/README.md
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Project overview | `contents/README.md` |
| .NET getting started | `contents/dotnet/README.md` |
| Python getting started | `contents/python/README.md` |
| Python first agent | `contents/python/samples/01-get-started/README.md` |
| .NET agent basics | `contents/dotnet/samples/02-agents/Agents/README.md` |
| Python agent basics | `contents/python/samples/02-agents/README.md` |
| MCP server/client (.NET) | `contents/dotnet/samples/02-agents/ModelContextProtocol/README.md` |
| MCP integration (Python) | `contents/python/samples/02-agents/mcp/README.md` |
| Durable agents (.NET) | `contents/docs/features/durable-agents/README.md` |
| Agent-to-agent (A2A) | `contents/dotnet/samples/02-agents/A2A/README.md` |
| Azure AI Foundry (.NET) | `contents/dotnet/samples/02-agents/AgentsWithFoundry/README.md` |
| Azure Functions hosting | `contents/python/samples/04-hosting/azure_functions/README.md` |
| Agent skills | `contents/dotnet/samples/02-agents/AgentSkills/README.md` |
| Skills (Python) | `contents/python/samples/02-agents/skills/README.md` |
| Workflows (Python) | `contents/python/samples/03-workflows/README.md` |
| Workflows (.NET) | `contents/dotnet/samples/03-workflows/README.md` |
| Migrate from AutoGen | `contents/python/samples/autogen-migration/README.md` |
| Migrate from Semantic Kernel | `contents/python/samples/semantic-kernel-migration/README.md` |
| Package status | `contents/python/PACKAGE_STATUS.md` |

## Detailed Structure

### dotnet/samples/02-agents/ (116 files)

| Directory | Description |
|-----------|-------------|
| `A2A/` | Agent-to-agent protocol samples: function tools, polling, protocol selection, stream reconnection |
| `AgentOpenTelemetry/` | OpenTelemetry observability integration |
| `AgentProviders/` | Provider integrations: A2A, Anthropic, Azure AI Project, Azure Foundry, Azure OpenAI, GitHub Copilot, Google Gemini, Ollama, ONNX, OpenAI |
| `Agents/` | Core step samples: structured output, MCP tool, images, background responses, middleware, compaction, checkpointing, dynamic tools |
| `AgentSkills/` | Skills: file-based, code-defined, class-based, mixed, DI, MCP-based |
| `AgentsWithFoundry/` | Azure AI Foundry: basics, multi-turn, function tools, structured output, persisted conversations, observability, DI, MCP client, images, middleware, plugins, code interpreter, file search, web search, memory, and more |
| `AgentWithAnthropic/` | Anthropic provider: basics, reasoning, function tools, skills |
| `AgentWithCodeAct/` | CodeAct: interpreter, tool-enabled, manual wiring |
| `AgentWithMemory/` | Memory: Valkey, Foundry, bounded chat history |
| `AgentWithOpenAI/` | OpenAI provider: chat client, responses client, conversation, code interpreter |
| `AgentWithRAG/` | RAG: custom vector store, Foundry service, Neo4j graph RAG |
| `AGUI/` | AG-UI protocol integration |
| `DevUI/` | Developer UI samples |
| `Evaluation/` | Custom evals, expected outputs, multimodal, simple eval |
| `Harness/` | Research harness: data processing, code execution, loops |
| `ModelContextProtocol/` | MCP: server, server auth, long-running tasks, hosted MCP |

### dotnet/samples/04-hosting/ (49 files)

| Directory | Description |
|-----------|-------------|
| `DurableAgents/AzureFunctions/` | Single agent, chaining, concurrency, conditionals, HITL, long-running tools, MCP tool, reliable streaming |
| `DurableAgents/ConsoleApps/` | Console app versions of durable agent patterns |
| `DurableWorkflows/AzureFunctions/` | Sequential, concurrent, HITL, MCP tool, mixed workflows |
| `DurableWorkflows/ConsoleApps/` | Sequential, concurrent, conditional edges, events, shared state, sub-workflows, HITL |
| `FoundryHostedAgents/` | Invocations, hosted responses (RAG, tools, MCP, memory, observability, skills, toolbox) |

### python/packages/ (69 files)

| Package | Description |
|---------|-------------|
| `core/` | Core framework: agent, thread, middleware, context providers |
| `foundry/` | Azure AI Foundry integration |
| `foundry_local/` | Local Foundry model support |
| `foundry_hosting/` | Foundry-hosted agent deployment |
| `openai/` | OpenAI provider |
| `anthropic/` | Anthropic/Claude provider |
| `claude/` | Claude provider (alternative package) |
| `gemini/` | Google Gemini provider |
| `mistral/` | Mistral provider |
| `ollama/` | Ollama local model provider |
| `bedrock/` | AWS Bedrock provider |
| `github_copilot/` | GitHub Copilot provider |
| `copilotstudio/` | Microsoft Copilot Studio |
| `a2a/` | Agent-to-agent protocol |
| `ag-ui/` | AG-UI protocol |
| `declarative/` | Declarative workflow YAML support |
| `durabletask/` | Durable Task hosting |
| `azurefunctions/` | Azure Functions hosting |
| `devui/` | Developer UI |
| `chatkit/` | ChatKit UI integration |
| `azure-ai-search/` | Azure AI Search context provider |
| `azure-cosmos/` | Azure Cosmos DB |
| `azure-contentunderstanding/` | Azure Content Understanding |
| `redis/` | Redis memory provider |
| `mem0/` | Mem0 memory provider |
| `purview/` | Microsoft Purview |
| `orchestrations/` | Orchestration patterns |
| `tools/` | Tool utilities |
| `monty/` | Monty code interpreter |
| `hyperlight/` | Hyperlight sandbox container |
| `lab/` | Experimental modules: GAIA, Lightning, TAU-2 benchmarks |

### python/samples/02-agents/ (49 files)

| Directory | Description |
|-----------|-------------|
| `a2a/` | Agent-to-agent protocol |
| `chat_client/` | Chat client usage |
| `compaction/` | Context compaction strategies |
| `context_providers/` | Azure AI Search, CodeAct, file access, Mem0, Neo4j memory, Redis |
| `conversations/` | Multi-turn conversation management |
| `declarative/` | Declarative agent definitions |
| `devui/` | Dev UI integration |
| `harness/` | Agent harness |
| `mcp/` | MCP server/client integration |
| `middleware/` | Request/response middleware |
| `multimodal_input/` | Image and multimodal inputs |
| `observability/` | OpenTelemetry tracing |
| `providers/` | Provider samples: Amazon, Anthropic, Azure, Copilot Studio, custom, Foundry, GitHub Copilot, Ollama, OpenAI |
| `security/` | FIDES prompt injection defense |
| `skills/` | File-based, code-defined, class-based, mixed, MCP-based, script approval, filtering |
| `tools/` | Local code interpreter, Monty code interpreter |

### python/samples/04-hosting/ (41 files)

| Directory | Description |
|-----------|-------------|
| `azure_functions/` | Azure Functions: single agent, multi-agent, reliable streaming, orchestration chaining/concurrency/conditionals, HITL, MCP server, workflow patterns |
| `durabletask/` | Durable Task: single agent, multi-agent, streaming, orchestration patterns, HITL |
| `foundry-hosted-agents/` | Foundry hosted: invocations, responses (tools, MCP, toolbox, workflows, files, observability, RAG, skills, memory, CodeAct) |
| `a2a/` | A2A hosting |
| `container/` | Container hosting with Hyperlight + CodeAct |

### docs/features/ (6 files)

| File | Description |
|------|-------------|
| `code_act/dotnet-implementation.md` | CodeAct feature (.NET implementation) |
| `code_act/python-implementation.md` | CodeAct feature (Python implementation) |
| `durable-agents/AGENTS.md` | Durable agents agent guide |
| `durable-agents/durable-agents-ttl.md` | Durable agent TTL configuration |
| `durable-agents/README.md` | Durable agents overview |
| `vector-stores-and-embeddings/README.md` | Vector stores and embeddings |
