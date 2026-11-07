# ms-agent-framework Table of Contents

Microsoft Agent Framework (microsoft/agent-framework, `main`): build AI agents and multi-agent workflows in .NET and Python. File counts include `.md` and `.cs` files (432 markdown, 405 C# samples).

## Directory Map

```
contents/
├── README.md                 # Framework overview and quickstart links
├── docs/                     # FAQ and feature docs (CodeAct, durable agents, vector stores) (5 files)
├── declarative-agents/       # YAML declarative agent and workflow sample definitions (2 files)
├── skills/                   # Agent Framework builder skills for .NET and Python (21 files)
├── dotnet/                   # .NET README and C# samples (627 files)
│   └── samples/
│       ├── 01-get-started/   # Hello agent, tools, multi-turn, memory, first workflow, hosting
│       ├── 02-agents/        # Providers, memory, RAG, skills, MCP, A2A, AG-UI, DevUI, evaluation, harness
│       ├── 03-workflows/     # Executors, edges, checkpoints, human-in-the-loop, concurrency, declarative
│       ├── 04-hosting/       # Foundry hosted, durable agents/workflows, af-hosting
│       └── 05-end-to-end/    # AG-UI, A2A, M365, Purview, web chat, Aspire apps
└── python/                   # Python README, package docs, and samples (181 files)
    ├── packages/             # Per-package READMEs (core, openai, foundry, anthropic, redis, mem0, ...) (54 files)
    └── samples/              # Numbered samples mirroring the .NET layout (126 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Overview | `contents/README.md` |
| Python getting started | `contents/python/samples/01-get-started/README.md` |
| .NET getting started | `contents/dotnet/README.md`, `contents/dotnet/samples/01-get-started/` |
| Python core package | `contents/python/packages/core/README.md` |
| Model providers (Python) | `contents/python/samples/02-agents/providers/README.md` |
| Model providers (.NET) | `contents/dotnet/samples/02-agents/AgentProviders/` |
| Workflows | `contents/python/samples/03-workflows/README.md`, `contents/dotnet/samples/03-workflows/` |
| MCP tools | `contents/python/samples/02-agents/mcp/README.md` |
| Hosting and deployment | `contents/python/samples/04-hosting/README.md` |
| Migration from AutoGen / Semantic Kernel | `contents/python/samples/autogen-migration/README.md`, `contents/python/samples/semantic-kernel-migration/README.md` |
| FAQ | `contents/docs/FAQS.md` |

## Detailed Structure

### contents/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Welcome to Microsoft Agent Framework!: Microsoft Agent Framework (MAF) is an open, multi-language framework for building... |

### declarative-agents/agent-samples/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Declarative Agents: This folder contains sample agent definitions that can be run using the declarative agent support, for... |

### declarative-agents/workflow-samples/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Declarative Workflows: A _Declarative Workflow_ is defined as a single YAML file and |

### docs/ (1 files)

| File | Description |
|------|-------------|
| `FAQS.md` | Frequently Asked Questions: Nightly builds of the Agent Framework are available here. |

### docs/features/code_act/ (2 files)

| File | Description |
|------|-------------|
| `dotnet-implementation.md` | CodeAct .NET implementation: This document describes the .NET realization of the CodeAct design in |
| `python-implementation.md` | CodeAct Python implementation: This document describes the Python realization of the CodeAct design in |

### docs/features/durable-agents/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Durable Agents Have Moved: Durable Task and Azure Functions integrations for Microsoft Agent Framework are now maintained... |

### docs/features/vector-stores-and-embeddings/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Vector Stores and Embeddings: This feature ports the vector store abstractions, embedding generator abstractions, and their... |

### dotnet/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Get Started with Microsoft Agent Framework for C# Developers |

### dotnet/samples/ (3 files)

| File | Description |
|------|-------------|
| `AGENTS.md` | Directory layout: 1. |
| `README.md` | Agent Framework Samples: The agent framework samples are designed to help you get started with building AI-powered agents |
| `community-projects.md` | Vector stores: All listed providers support chat history memory with ChatHistoryMemoryProvider |

### dotnet/samples/01-get-started/01_hello_agent/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: 01 hello agent |

### dotnet/samples/01-get-started/02_add_tools/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: 02 add tools |

### dotnet/samples/01-get-started/03_multi_turn/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: 03 multi turn |

### dotnet/samples/01-get-started/04_memory/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: 04 memory |

### dotnet/samples/01-get-started/05_first_workflow/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: 05 first workflow |

### dotnet/samples/01-get-started/06_host_your_agent/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Azure Functions Hosting Sample Has Moved: The Azure Functions hosting tutorial is now maintained as the single-agent... |

### dotnet/samples/02-agents/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Samples |

### dotnet/samples/02-agents/A2A/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent-to-Agent (A2A) Samples: These samples demonstrate how to work with Agent-to-Agent (A2A) specific features in the... |

### dotnet/samples/02-agents/A2A/A2AAgent_AsFunctionTool/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: Before you begin, ensure you have the following prerequisites: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/A2A/A2AAgent_PollingForTaskCompletion/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Polling for A2A Agent Task Completion: This sample demonstrates how to poll for long-running task completion using... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/A2A/A2AAgent_ProtocolSelection/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | A2A Agent Protocol Selection: This sample demonstrates how to select the A2A protocol binding when creating an AIAgent from... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/A2A/A2AAgent_Skills/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: Before you begin, ensure you have the following prerequisites: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/A2A/A2AAgent_StreamReconnection/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | A2A Agent Stream Reconnection: This sample demonstrates how to reconnect to an A2A agent's streaming response using... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AGUI/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | AG-UI Getting Started Samples: This directory contains samples that demonstrate how to build AG-UI (Agent UI Protocol)... |

### dotnet/samples/02-agents/AGUI/Step01_GettingStarted/Client/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Client |

### dotnet/samples/02-agents/AGUI/Step01_GettingStarted/Server/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Server |

### dotnet/samples/02-agents/AGUI/Step02_BackendTools/Client/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Client |

### dotnet/samples/02-agents/AGUI/Step02_BackendTools/Server/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Server |

### dotnet/samples/02-agents/AGUI/Step03_FrontendTools/Client/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Client |

### dotnet/samples/02-agents/AGUI/Step03_FrontendTools/Server/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Server |

### dotnet/samples/02-agents/AGUI/Step04_HumanInLoop/Client/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Client |

### dotnet/samples/02-agents/AGUI/Step04_HumanInLoop/Server/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Server |

### dotnet/samples/02-agents/AGUI/Step05_StateManagement/Client/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Client |

### dotnet/samples/02-agents/AGUI/Step05_StateManagement/Server/ (3 files)

| File | Description |
|------|-------------|
| `Program.cs, RecipeModels.cs, RecipeStateAgent.cs` | C# sample: Server |

### dotnet/samples/02-agents/AgentOpenTelemetry/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | OpenTelemetry Aspire Demo with Microsoft Foundry: This demo showcases the integration of OpenTelemetry with the Microsoft... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Creating an AIAgent with various providers: These samples show how to create an AIAgent instance using various providers, |

### dotnet/samples/02-agents/AgentProviders/a2a/Agent_With_A2A/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: Before you begin, ensure you have the following prerequisites: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/anthropic/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Getting started with agents using Anthropic prerequisites: Before you begin, ensure you have the following prerequisites: |

### dotnet/samples/02-agents/AgentProviders/anthropic/Agent_Anthropic_Step01_Running/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Creating an AI agent with Anthropic Claude |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/anthropic/Agent_Anthropic_Step02_Reasoning/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Creating an AI agent with Anthropic Claude extended thinking |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/anthropic/Agent_Anthropic_Step03_UsingFunctionTools/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Creating function tools using AIFunctionFactory |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/anthropic/Agent_Anthropic_Step04_UsingSkills/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Listing available Anthropic-managed skills |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/anthropic/Agent_With_Anthropic/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: Before you begin, ensure you have the following prerequisites: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/azure/Agent_With_AzureAIProject/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Classic vs New Foundry Agents: Below is a comparison between the classic and new Foundry Agents approaches: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/azure/Agent_With_AzureFoundryModel/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: Before you begin, ensure you have the following prerequisites: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/azure/Agent_With_AzureOpenAIChatCompletion/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: Before you begin, ensure you have the following prerequisites: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/azure/Agent_With_AzureOpenAIResponses/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: Before you begin, ensure you have the following prerequisites: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/azure/Agent_With_AzureOpenAIResponses_ComputerUse/ (3 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Using the parameterless FoundryAITool.CreateComputerTool() to add the GA computer tool... |
| `ComputerUseUtil.cs, Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/custom/Agent_With_CustomImplementation/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Agent with Custom Implementation: This sample demonstrates how to create a fully custom agent implementation without... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/dapr/Agent_With_Dapr/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: Before you begin, ensure you have the following prerequisites: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Quick start: You can create a Foundry agent directly with the FoundryAgent type: |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step00_FoundryAgentLifecycle/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: - A Microsoft Foundry project endpoint |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step01_Basics/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Creating a ChatClientAgent with instructions and a model |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step02.1_MultiturnConversation/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Creating an agent with instructions |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step02.2_MultiturnWithServerConversations/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Creating a FoundryAgent with instructions |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step03_UsingFunctionTools/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Creating function tools using AIFunctionFactory |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step04_UsingFunctionToolsWithApprovals/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Creating function tools that require approval using ApprovalRequiredAIFunction |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step05_StructuredOutput/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Using RunAsync<T>() to get typed structured output from the agent |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step06_PersistedConversations/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Serializing agent sessions to JSON for persistence |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step07_Observability/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Configuring OpenTelemetry tracing with console exporter |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step08_DependencyInjection/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Registering ChatClientAgent as an AIAgent in the service collection |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step09_UsingMcpClientAsTools/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Connecting to an MCP server via HTTP client transport |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step10_UsingImages/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Loading images using DataContent.LoadFromAsync |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step11_AsFunctionTool/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Creating a specialized agent (weather) with function tools |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step12_Middleware/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Agent-level run middleware (PII filtering, guardrail enforcement) |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step13_Plugins/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Creating plugin classes with injected dependencies |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step14_CodeInterpreter/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Using HostedCodeInterpreterTool with ChatClientAgent |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step15_ComputerUsePreview/ (3 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Using FoundryAITool.CreateComputerTool(environment, width, height) to add the preview... |
| `ComputerUseUtil.cs, Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step16_FileSearch/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Uploading files and creating vector stores via AIProjectClient |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step17_OpenAPITools/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Defining an OpenAPI specification inline |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step18_BingCustomSearch/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Configuring BingCustomSearchToolParameters with connection ID and instance name |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step19_SharePoint/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Configuring SharePointGroundingToolOptions with project connections |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step20_MicrosoftFabric/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Configuring FabricDataAgentToolOptions with project connections |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step21_WebSearch/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Using HostedWebSearchTool with ChatClientAgent |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step22_MemorySearch/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Configuring MemorySearchPreviewTool with a memory store and user scope |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step23_LocalMCP/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Connecting to an MCP server via HTTP (Streamable HTTP transport) |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step24_CodeInterpreterFileDownload/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Creating an agent with Code Interpreter tool using AIProjectClient.AsAIAgent() |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step25_FoundryToolboxMcp/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Connecting to a Foundry toolbox's MCP endpoint via Streamable HTTP transport |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/foundry/Agent_Step26_FoundryToolboxMcpSkills/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Connecting to a Foundry toolbox's MCP endpoint via Streamable HTTP transport |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/github-copilot/Agent_With_GitHubCopilot/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: Before you begin, ensure you have the following prerequisites: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/github-copilot/Agent_With_GitHubCopilot_BYOK/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | About BYOK (Bring Your Own Key): BYOK lets you route model requests through your own API keys and infrastructure instead of... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/google-gemini/Agent_With_GoogleGemini/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Creating an AIAgent with Google Gemini: This sample demonstrates how to create an AIAgent using Google Gemini models as the... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/ollama/Agent_With_Ollama/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: Before you begin, ensure you have the following prerequisites: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/onnx/Agent_With_ONNX/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: WARNING: ONNX doesn't support function calling, so any function tools passed to the agent will be ignored. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/openai/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework with OpenAI: These samples show how to use the Agent Framework with the OpenAI exchange types. |

### dotnet/samples/02-agents/AgentProviders/openai/Agent_OpenAI_Step01_Running/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Agent Open AI Step01 Running |

### dotnet/samples/02-agents/AgentProviders/openai/Agent_OpenAI_Step02_Reasoning/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Agent Open AI Step02 Reasoning |

### dotnet/samples/02-agents/AgentProviders/openai/Agent_OpenAI_Step03_CreateFromChatClient/ (3 files)

| File | Description |
|------|-------------|
| `README.md` | Creating an Agent from a ChatClient: This sample demonstrates how to create an AI agent directly from an... |
| `OpenAIChatClientAgent.cs, Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/openai/Agent_OpenAI_Step04_CreateFromOpenAIResponseClient/ (3 files)

| File | Description |
|------|-------------|
| `README.md` | Creating an Agent from an OpenAIResponseClient: This sample demonstrates how to create an AI agent directly from an... |
| `OpenAIResponseClientAgent.cs, Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/openai/Agent_OpenAI_Step05_Conversation/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Managing Conversation State with OpenAI: This sample demonstrates how to maintain conversation state across multiple turns... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/openai/Agent_OpenAI_Step06_CodeInterpreterFileDownload/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Code Interpreter File Download (OpenAI): This sample demonstrates how to download files generated by Code Interpreter when... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/openai/Agent_With_OpenAIChatCompletion/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: Before you begin, ensure you have the following prerequisites: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentProviders/openai/Agent_With_OpenAIResponses/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: Before you begin, ensure you have the following prerequisites: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentSkills/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | AgentSkills Samples: Samples demonstrating Agent Skills capabilities. |
| `SubprocessScriptRunner.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentSkills/Agent_Step01_FileBasedSkills/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | File-Based Agent Skills Sample: This sample demonstrates how to use file-based Agent Skills with a ChatClientAgent. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentSkills/Agent_Step01_FileBasedSkills/skills/unit-converter/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Convert between common units using a multiplication factor. Use when asked to convert miles, kilometers, pounds, or... |

### dotnet/samples/02-agents/AgentSkills/Agent_Step01_FileBasedSkills/skills/unit-converter/references/ (1 files)

| File | Description |
|------|-------------|
| `conversion-table.md` | Conversion Tables: Formula: result = value × factor |

### dotnet/samples/02-agents/AgentSkills/Agent_Step02_CodeDefinedSkills/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Code-Defined Agent Skills Sample: This sample demonstrates how to define Agent Skills entirely in code using... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentSkills/Agent_Step03_ClassBasedSkills/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Class-Based Agent Skills Sample: This sample demonstrates how to define Agent Skills as C# classes using AgentClassSkill |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentSkills/Agent_Step04_MixedSkills/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Mixed Agent Skills Sample (Advanced): This sample demonstrates an advanced scenario: combining multiple skill types in a... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentSkills/Agent_Step04_MixedSkills/skills/unit-converter/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Convert between common units using a multiplication factor. Use when asked to convert miles, kilometers, pounds, or... |

### dotnet/samples/02-agents/AgentSkills/Agent_Step04_MixedSkills/skills/unit-converter/references/ (1 files)

| File | Description |
|------|-------------|
| `unit-conversion-table.md` | Conversion Tables: Formula: result = value × factor |

### dotnet/samples/02-agents/AgentSkills/Agent_Step05_SkillsWithDI/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Skills with Dependency Injection: This sample demonstrates how to use Dependency Injection (DI) with Agent Skills. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentSkills/Agent_Step06_McpBasedSkills/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What it demonstrates: - Hosting a small MCP server (in this same executable, launched with --server) that |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentSkills/Agent_Step07_SkillsAutoApproval/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Skills Auto-Approval Sample: This sample demonstrates how to configure auto-approval rules for skill tools using the... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentSkills/Agent_Step07_SkillsAutoApproval/skills/unit-converter/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Convert between common units using a multiplication factor. Use when asked to convert miles, kilometers, pounds, or... |

### dotnet/samples/02-agents/AgentSkills/Agent_Step07_SkillsAutoApproval/skills/unit-converter/references/ (1 files)

| File | Description |
|------|-------------|
| `conversion-table.md` | Conversion Tables: Formula: result = value × factor |

### dotnet/samples/02-agents/AgentWithCodeAct/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework CodeAct (Hyperlight) Samples: These samples show how to enable an agent to write and execute code in a |

### dotnet/samples/02-agents/AgentWithCodeAct/AgentWithCodeAct_Step01_Interpreter/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | AgentWithCodeAct_Step01_Interpreter: A minimal CodeAct sample. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentWithCodeAct/AgentWithCodeAct_Step02_ToolEnabled/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | AgentWithCodeAct_Step02_ToolEnabled: Demonstrates adding provider-owned tools to HyperlightCodeActProvider. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentWithCodeAct/AgentWithCodeAct_Step03_ManualWiring/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | AgentWithCodeAct_Step03_ManualWiring: Shows how to wire CodeAct manually using HyperlightExecuteCodeFunction as a |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentWithMemory/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Overview of AgentWithMemory |

### dotnet/samples/02-agents/AgentWithMemory/AgentWithMemory_Step01_ChatHistoryMemory/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Agent With Memory Step01 Chat History Memory |

### dotnet/samples/02-agents/AgentWithMemory/AgentWithMemory_Step02_MemoryUsingMem0/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Agent With Memory Step02 Memory Using Mem0 |

### dotnet/samples/02-agents/AgentWithMemory/AgentWithMemory_Step03_MemoryUsingValkey/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Agent with Memory Using Valkey: This sample demonstrates using Valkey for persistent chat history with the Agent Framework. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentWithMemory/AgentWithMemory_Step03_MemoryUsingValkey_Bedrock/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Agent with Memory Using Valkey + Amazon Bedrock: This sample demonstrates using Valkey for persistent chat history with the... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentWithMemory/AgentWithMemory_Step04_MemoryUsingFoundry/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Features Demonstrated: - Creating a FoundryMemoryProvider with Azure Identity authentication |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentWithMemory/AgentWithMemory_Step05_BoundedChatHistory/ (4 files)

| File | Description |
|------|-------------|
| `README.md` | Bounded Chat History with Vector Store Overflow: This sample demonstrates how to create a custom ChatHistoryProvider that... |
| `BoundedChatHistoryProvider.cs, Program.cs, TruncatingChatReducer.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentWithMemory/AgentWithMemory_Step06_MemoryUsingAgentMemory/ (3 files)

| File | Description |
|------|-------------|
| `README.md` | Agent with Memory Using AgentMemory — Shopping Assistant: A .NET port of the Neo4j Labs "agent-memory" retail assistant... |
| `ProductCatalog.cs, Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentWithMemory/AgentWithMemory_Step07_FileMemoryProvider/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Concepts: - FileMemoryProvider: An AIContextProvider that adds the following tools to the agent: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentWithMemory/AgentWithMemory_Step08_MemoryUsingCosmosNoSql/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Features Demonstrated: - Authenticating to Microsoft Foundry and Azure Cosmos DB with DefaultAzureCredential |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentWithMemory/AgentWithMemory_Step09_MemoryUsingMem0Sharp/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Overview of AgentWithMemory Step09 MemoryUsingMem0Sharp |

### dotnet/samples/02-agents/AgentWithRAG/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework Retrieval Augmented Generation (RAG): These samples show how to create an agent with the Agent Framework... |

### dotnet/samples/02-agents/AgentWithRAG/AgentWithRAG_Step01_BasicTextRAG/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Agent With RAG Step01 Basic Text RAG |

### dotnet/samples/02-agents/AgentWithRAG/AgentWithRAG_Step01_BasicTextRAG/TextSearchStore/ (4 files)

| File | Description |
|------|-------------|
| `TextSearchDocument.cs, TextSearchStore.cs, TextSearchStoreOptions.cs, TextSearchStoreUpsertOptions.cs` | C# sample: Text Search Store |

### dotnet/samples/02-agents/AgentWithRAG/AgentWithRAG_Step02_CustomVectorStoreRAG/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework Retrieval Augmented Generation (RAG) with an external Vector Store with a custom schema: This sample... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/AgentWithRAG/AgentWithRAG_Step03_CustomRAGDataSource/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Agent With RAG Step03 Custom RAGData Source |

### dotnet/samples/02-agents/AgentWithRAG/AgentWithRAG_Step04_FoundryServiceRAG/ (2 files)

| File | Description |
|------|-------------|
| `contoso-outdoors-knowledge-base.md` | Contoso Outdoors Return Policy: Customers may return any item within 30 days of delivery. |
| `Program.cs` | C# sample: Agent With RAG Step04 Foundry Service RAG |

### dotnet/samples/02-agents/AgentWithRAG/AgentWithRAG_Step05_Neo4jGraphRAG/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework Retrieval Augmented Generation (RAG) with Neo4j GraphRAG: This sample demonstrates how to create and run an... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Agents/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Getting started with agents: The getting started with agents samples demonstrate the fundamental concepts and functionalities |

### dotnet/samples/02-agents/Agents/Agent_Step01_UsingFunctionToolsWithApprovals/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Agent Step01 Using Function Tools With Approvals |

### dotnet/samples/02-agents/Agents/Agent_Step02_StructuredOutput/ (6 files)

| File | Description |
|------|-------------|
| `README.md` | Structured Output with ChatClientAgent: This sample demonstrates how to configure ChatClientAgent to produce structured... |
| `AIAgentBuilderExtensions.cs, Program.cs, StructuredOutputAgent.cs, StructuredOutputAgentOptions.cs, +1 more` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Agents/Agent_Step03_PersistedConversations/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Agent Step03 Persisted Conversations |

### dotnet/samples/02-agents/Agents/Agent_Step04_3rdPartyChatHistoryStorage/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Agent Step04 3rd Party Chat History Storage |

### dotnet/samples/02-agents/Agents/Agent_Step05_Observability/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Agent Step05 Observability |

### dotnet/samples/02-agents/Agents/Agent_Step06_DependencyInjection/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Agent Step06 Dependency Injection |

### dotnet/samples/02-agents/Agents/Agent_Step07_AsMcpTool/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Run the sample: To run the sample, please use one of the following MCP clients: https://modelcontextprotocol.io/clients |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Agents/Agent_Step08_UsingImages/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Using Images with AI Agents: This sample demonstrates how to use image multi-modality with an AI agent. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Agents/Agent_Step09_AsFunctionTool/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Agent Step09 As Function Tool |

### dotnet/samples/02-agents/Agents/Agent_Step10_BackgroundResponsesWithToolsAndPersistence/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What This Sample Shows: This sample demonstrates how to use background responses with ChatCompletionAgent and Azure OpenAI... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Agents/Agent_Step11_Middleware/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Middleware: This sample demonstrates how to add middleware to intercept: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Agents/Agent_Step12_Plugins/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Agent Step12 Plugins |

### dotnet/samples/02-agents/Agents/Agent_Step13_ChatReduction/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Agent Step13 Chat Reduction |

### dotnet/samples/02-agents/Agents/Agent_Step14_BackgroundResponses/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: Before you begin, ensure you have the following prerequisites: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Agents/Agent_Step15_DeepResearch/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: Before running this sample, ensure you have: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Agents/Agent_Step16_Declarative/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Agent Step16 Declarative |

### dotnet/samples/02-agents/Agents/Agent_Step17_AdditionalAIContext/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Agent Step17 Additional AIContext |

### dotnet/samples/02-agents/Agents/Agent_Step18_CompactionPipeline/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Compaction Pipeline: This sample demonstrates how to use a CompactionProvider with a PipelineCompactionStrategy to manage... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Agents/Agent_Step19_InFunctionLoopCheckpointing/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | In-Function-Loop Checkpointing: This sample demonstrates how ChatClientAgent can persist chat history after each individual... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Agents/Agent_Step20_DynamicFunctionTools/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Dynamic Function Tools: This sample demonstrates how to dynamically expand the set of function tools available to an agent... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Agents/Agent_Step21_ShellWithEnvironment/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Agent Step21 Shell With Environment |

### dotnet/samples/02-agents/Agents/Agent_Step22_AgentMode/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Mode: This sample demonstrates how to use the AgentModeProvider to track and switch an agent's |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Agents/Agent_Step23_TodoList/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Todo List: This sample demonstrates how to use the TodoProvider to let an agent plan and track multi-step |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Agents/Agent_Step24_MultiModelRouting/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What it demonstrates: - Registering multiple named routes, each backed by an ordinary IChatClient. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/DeclarativeAgents/ChatClient/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Chat Client |

### dotnet/samples/02-agents/DevUI/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | DevUI Samples: This folder contains samples demonstrating how to use the DevUI in ASP.NET Core applications. |

### dotnet/samples/02-agents/DevUI/DevUI_Step01_BasicUsage/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | DevUI Step 01 - Basic Usage: This sample demonstrates how to add the DevUI to an ASP.NET Core application with AI agents. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Evaluation/Evaluation_CustomEvals/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Writing custom checks with FunctionEvaluator.Create for domain-specific logic |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Evaluation/Evaluation_ExpectedOutputs/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Using EvalChecks.ContainsExpected for ground-truth comparison |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Evaluation/Evaluation_Multimodal/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Evaluation - Multimodal: This sample demonstrates that the evaluation pipeline preserves multimodal content. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Evaluation/Evaluation_SimpleEval/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Creating an agent with AIProjectClient.AsAIAgent() |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Harness/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Harness Agent Samples: Samples demonstrating the Harness AIContextProviders — reusable providers that add planning, task... |

### dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step01_MeetYourClaw/ (3 files)

| File | Description |
|------|-------------|
| `README.md` | Meet your claw (Post 1) — .NET: The first runnable sample from the "Build your own agent harness and claw with Microsoft... |
| `Program.cs, StockTools.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step02_WorkingWithData/ (4 files)

| File | Description |
|------|-------------|
| `README.md` | Working with your data, safely (Post 2) — .NET: The second runnable sample from the "Build your own claw and agent harness... |
| `Program.cs, StockTools.cs, TradingTools.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step03_ScalingCapabilities/ (7 files)

| File | Description |
|------|-------------|
| `README.md` | Scaling its capabilities (Post 3) — .NET: The third runnable sample from the "Build your own claw and agent harness with... |
| `FoundrySkills.cs, Program.cs, ResearchAgent.cs, StockTools.cs, +2 more` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step03_ScalingCapabilities/skills/risk-scoring/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Score how concentrated and risky a portfolio is on a 0-100 scale from its position weights. Use when the user asks how... |

### dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step03_ScalingCapabilities/skills/risk-scoring/references/ (1 files)

| File | Description |
|------|-------------|
| `risk-bands.md` | Risk-scoring guide (illustrative): This skill scores concentration risk — how much a portfolio depends on its largest... |

### dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step03_ScalingCapabilities/skills/valuation/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Estimate whether a stock looks cheap or expensive using a price-to-earnings (P/E) based fair-value method. Use when the... |

### dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step03_ScalingCapabilities/skills/valuation/references/ (1 files)

| File | Description |
|------|-------------|
| `valuation-guide.md` | Valuation guide (illustrative): A quick price-to-earnings (P/E) sanity check: |

### dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step04_ProductionReady/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Projects: OpenTelemetry uses source and meter name BuildYourOwnClaw.ProductionReady.Claw. |

### dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step04_ProductionReady/ClawAgent/ (9 files)

| File | Description |
|------|-------------|
| `README.md` | Overview of ClawAgent |
| `ClawAgentBuild.cs, ClawAgentFactory.cs, ClawAgentFactoryOptions.cs, FoundrySkills.cs, +4 more` | C# sample: Claw Agent |

### dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step04_ProductionReady/ClawAgent.Console/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Run: Set OTEL_EXPORTER_OTLP_ENDPOINT to send traces/metrics to an OTLP collector (for example a local Aspire dashboard). |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step04_ProductionReady/ClawAgent.Evals/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Run |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step04_ProductionReady/ClawAgent.Hosted/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Observability comes for free: No exporter wiring is required. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step04_ProductionReady/ClawAgent/skills/risk-scoring/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Usage: When the user asks about portfolio risk or concentration: |

### dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step04_ProductionReady/ClawAgent/skills/risk-scoring/references/ (1 files)

| File | Description |
|------|-------------|
| `risk-bands.md` | How the score is built: 1. |

### dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step04_ProductionReady/ClawAgent/skills/valuation/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Usage: When the user asks whether a stock is fairly valued, over-valued, or under-valued: |

### dotnet/samples/02-agents/Harness/BuildYourOwnClaw/Claw_Step04_ProductionReady/ClawAgent/skills/valuation/references/ (1 files)

| File | Description |
|------|-------------|
| `valuation-guide.md` | Typical target P/E by sector: These are rough, illustrative anchors only — not live market multiples. |

### dotnet/samples/02-agents/Harness/ConsoleReactiveComponents/ (6 files)

| File | Description |
|------|-------------|
| `AnsiEscapes.cs, ListSelection.cs, TextInput.cs, TextPanel.cs, +2 more` | C# sample: Console Reactive Components |

### dotnet/samples/02-agents/Harness/ConsoleReactiveFramework/ (4 files)

| File | Description |
|------|-------------|
| `ConsoleReactiveComponent.cs, ConsoleReactiveMemo.cs, ConsoleResizeListener.cs, KeyEventListener.cs` | C# sample: Console Reactive Framework |

### dotnet/samples/02-agents/Harness/Harness_Shared_Console/ (12 files)

| File | Description |
|------|-------------|
| `FileSpanExporter.cs, FollowUpAction.cs, HarnessAgentRunner.cs, HarnessAppComponent.cs, +8 more` | C# sample: Harness Shared Console |

### dotnet/samples/02-agents/Harness/Harness_Shared_Console/Commands/ (5 files)

| File | Description |
|------|-------------|
| `CommandHandler.cs, ExitCommandHandler.cs, ModeCommandHandler.cs, SessionCommandHandler.cs, +1 more` | C# sample: Commands |

### dotnet/samples/02-agents/Harness/Harness_Shared_Console/Components/ (2 files)

| File | Description |
|------|-------------|
| `AgentModeAndHelp.cs, AgentStatus.cs` | C# sample: Components |

### dotnet/samples/02-agents/Harness/Harness_Shared_Console/Observers/ (10 files)

| File | Description |
|------|-------------|
| `ConsoleObserver.cs, ErrorDisplayObserver.cs, PlanningOutputObserver.cs, PlanningResponse.cs, +6 more` | C# sample: Observers |

### dotnet/samples/02-agents/Harness/Harness_Shared_Console/ToolFormatters/ (7 files)

| File | Description |
|------|-------------|
| `BackgroundAgentToolFormatter.cs, FallbackToolFormatter.cs, FileMemoryToolFormatter.cs, ModeToolFormatter.cs, +3 more` | C# sample: Tool Formatters |

### dotnet/samples/02-agents/Harness/Harness_Shared_Console_OpenAI/ (2 files)

| File | Description |
|------|-------------|
| `OpenAIResponsesErrorObserver.cs, OpenAIResponsesWebSearchDisplayObserver.cs` | C# sample: Harness Shared Console Open AI |

### dotnet/samples/02-agents/Harness/Harness_Step01_Research/ (5 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: Before running this sample, ensure you have: |
| `DownloadUriToolFormatter.cs, Program.cs, WebBrowsingTool.cs, WebBrowsingToolOptions.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Harness/Harness_Step02_Research_WithBackgroundAgents/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What It Does: A parent agent receives a list of stock tickers and uses a web-search background agent to find the closing... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Harness/Harness_Step03_DataProcessing/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: Before running this sample, ensure you have: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Harness/Harness_Step04_CodeExecution/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: - .NET 10 SDK |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/Harness/Harness_Step04_CodeExecution/skills/regex-tester/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Validate, test, and debug regular expressions by executing them against sample inputs. Use when asked to build, verify, or... |

### dotnet/samples/02-agents/Harness/Harness_Step04_CodeExecution/skills/regex-tester/references/ (1 files)

| File | Description |
|------|-------------|
| `regex-cheatsheet.md` | Regex Quick Reference (Python re module) |

### dotnet/samples/02-agents/Harness/Harness_Step05_Loop/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: This sample demonstrates how to wrap a HarnessAgent with the LoopAgent decorator to... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/ModelContextProtocol/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Getting started with Model Content Protocol: The getting started with Model Content Protocol samples demonstrate how to use... |

### dotnet/samples/02-agents/ModelContextProtocol/Agent_MCP_LongRunningTask_Client/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Agent with MCP Tasks extension (transparent polling): This sample demonstrates Microsoft Agent Framework's support for the... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/ModelContextProtocol/Agent_MCP_PerRun_AuthHeaders/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Per-Run MCP Authentication Headers: This sample shows how to attach per-run (refreshable) authentication headers to Model... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/ModelContextProtocol/Agent_MCP_Server/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Configuring Environment Variables: Set the following environment variables: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/ModelContextProtocol/Agent_MCP_Server_Auth/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Model Context Protocol Sample: This example demonstrates how to use tools from a protected Model Context Protocol server... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/ModelContextProtocol/FoundryAgent_Hosted_MCP/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Authenticating a hosted MCP server with a Foundry project connection: A hosted MCP server can authenticate through a... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/02-agents/ModelContextProtocol/ResponseAgent_Hosted_MCP/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: Before you begin, ensure you have the following prerequisites: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/03-workflows/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Samples Overview: Please begin with the Start Here samples in order. |

### dotnet/samples/03-workflows/Agents/CustomAgentExecutors/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Custom Agent Executors |

### dotnet/samples/03-workflows/Agents/FoundryAgent/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Foundry Agent |

### dotnet/samples/03-workflows/Agents/GroupChatToolApproval/ (3 files)

| File | Description |
|------|-------------|
| `README.md` | Group Chat with Tool Approval Sample: This sample demonstrates how to use GroupChatBuilder with tools that require human... |
| `DeploymentGroupChatManager.cs, Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/03-workflows/Agents/WorkflowAsAnAgent/ (2 files)

| File | Description |
|------|-------------|
| `Program.cs, WorkflowFactory.cs` | C# sample: Workflow As An Agent |

### dotnet/samples/03-workflows/Checkpoint/CheckpointAndRehydrate/ (2 files)

| File | Description |
|------|-------------|
| `Program.cs, WorkflowFactory.cs` | C# sample: Checkpoint And Rehydrate |

### dotnet/samples/03-workflows/Checkpoint/CheckpointAndResume/ (2 files)

| File | Description |
|------|-------------|
| `Program.cs, WorkflowFactory.cs` | C# sample: Checkpoint And Resume |

### dotnet/samples/03-workflows/Checkpoint/CheckpointWithHumanInTheLoop/ (2 files)

| File | Description |
|------|-------------|
| `Program.cs, WorkflowFactory.cs` | C# sample: Checkpoint With Human In The Loop |

### dotnet/samples/03-workflows/Concurrent/Concurrent/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Concurrent |

### dotnet/samples/03-workflows/Concurrent/MapReduce/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Map Reduce |

### dotnet/samples/03-workflows/ConditionalEdges/01_EdgeCondition/ (2 files)

| File | Description |
|------|-------------|
| `Program.cs, Resources.cs` | C# sample: 01 Edge Condition |

### dotnet/samples/03-workflows/ConditionalEdges/02_SwitchCase/ (2 files)

| File | Description |
|------|-------------|
| `Program.cs, Resources.cs` | C# sample: 02 Switch Case |

### dotnet/samples/03-workflows/ConditionalEdges/03_MultiSelection/ (2 files)

| File | Description |
|------|-------------|
| `Program.cs, Resources.cs` | C# sample: 03 Multi Selection |

### dotnet/samples/03-workflows/Declarative/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Configuration: These samples must be configured to create and use agents your |

### dotnet/samples/03-workflows/Declarative/AotCheckpointing/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What it shows: - A 3-action declarative workflow |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/03-workflows/Declarative/ConfirmInput/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Confirm Input |

### dotnet/samples/03-workflows/Declarative/CustomerSupport/ (2 files)

| File | Description |
|------|-------------|
| `Program.cs, TicketingPlugin.cs` | C# sample: Customer Support |

### dotnet/samples/03-workflows/Declarative/DeepResearch/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Deep Research |

### dotnet/samples/03-workflows/Declarative/ExecuteWorkflow/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Execute Workflow |

### dotnet/samples/03-workflows/Declarative/FileInput/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Run the sample: Configure the common declarative workflow settings described in the parent README, then run: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/03-workflows/Declarative/FunctionTools/ (2 files)

| File | Description |
|------|-------------|
| `MenuPlugin.cs, Program.cs` | C# sample: Function Tools |

### dotnet/samples/03-workflows/Declarative/HostedWorkflow/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Hosted Workflow |

### dotnet/samples/03-workflows/Declarative/InputArguments/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Input Arguments |

### dotnet/samples/03-workflows/Declarative/InvokeFoundryToolboxMcp/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Invoke Foundry Toolbox Mcp |

### dotnet/samples/03-workflows/Declarative/InvokeFunctionTool/ (2 files)

| File | Description |
|------|-------------|
| `MenuPlugin.cs, Program.cs` | C# sample: Invoke Function Tool |

### dotnet/samples/03-workflows/Declarative/InvokeHttpRequest/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Invoke Http Request |

### dotnet/samples/03-workflows/Declarative/InvokeMcpTool/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Invoke Mcp Tool |

### dotnet/samples/03-workflows/Declarative/Marketing/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Marketing |

### dotnet/samples/03-workflows/Declarative/StudentTeacher/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Student Teacher |

### dotnet/samples/03-workflows/Declarative/ToolApproval/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Tool Approval |

### dotnet/samples/03-workflows/Evaluation/Evaluation_WorkflowEval/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Building a two-agent workflow (planner → executor) |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/03-workflows/Evaluation/Evaluation_WorkflowExpectedOutputs/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Building a small researcher → editor workflow |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/03-workflows/HumanInTheLoop/HumanInTheLoopBasic/ (2 files)

| File | Description |
|------|-------------|
| `Program.cs, WorkflowFactory.cs` | C# sample: Human In The Loop Basic |

### dotnet/samples/03-workflows/Loop/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Loop |

### dotnet/samples/03-workflows/Observability/ApplicationInsights/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Application Insights |

### dotnet/samples/03-workflows/Observability/AspireDashboard/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Aspire Dashboard |

### dotnet/samples/03-workflows/Observability/WorkflowAsAnAgent/ (2 files)

| File | Description |
|------|-------------|
| `Program.cs, WorkflowHelper.cs` | C# sample: Workflow As An Agent |

### dotnet/samples/03-workflows/Orchestration/Handoff/ (2 files)

| File | Description |
|------|-------------|
| `AgentRegistry.cs, Program.cs` | C# sample: Handoff |

### dotnet/samples/03-workflows/Orchestration/Magentic/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What This Sample Demonstrates: - Building a Magentic workflow with MagenticWorkflowBuilder |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/03-workflows/SharedStates/ (2 files)

| File | Description |
|------|-------------|
| `Program.cs, Resources.cs` | C# sample: Shared States |

### dotnet/samples/03-workflows/Visualization/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Running the Sample: The sample generates two visualization formats: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/03-workflows/_StartHere/01_Streaming/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: 01 Streaming |

### dotnet/samples/03-workflows/_StartHere/02_AgentsInWorkflows/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: 02 Agents In Workflows |

### dotnet/samples/03-workflows/_StartHere/03_AgentWorkflowPatterns/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: 03 Agent Workflow Patterns |

### dotnet/samples/03-workflows/_StartHere/04_MultiModelService/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: 04 Multi Model Service |

### dotnet/samples/03-workflows/_StartHere/05_SubWorkflows/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: 05 Sub Workflows |

### dotnet/samples/03-workflows/_StartHere/06_MixedWorkflowAgentsAndExecutors/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Mixed Workflow: Agents and Executors: This sample demonstrates how to seamlessly combine AI agents and custom executors... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/03-workflows/_StartHere/07_WriterCriticWorkflow/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: 07 Writer Critic Workflow |

### dotnet/samples/04-hosting/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Choose the appropriate hosting model: - Authentication establishes who is calling. |

### dotnet/samples/04-hosting/DurableAgents/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Durable Agent Samples Have Moved: The .NET Durable Agent samples are now maintained in the Durable Agent Framework... |

### dotnet/samples/04-hosting/DurableAgents/AzureFunctions/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Durable Agent Azure Functions Samples Have Moved: These samples are now maintained in the Durable Agent Framework extension... |

### dotnet/samples/04-hosting/DurableAgents/ConsoleApps/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Durable Agent Console Samples Have Moved: These samples are now maintained in the Durable Agent Framework extension... |

### dotnet/samples/04-hosting/DurableWorkflows/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Durable Workflow Samples Have Moved: The .NET Durable Workflow samples are now maintained in the Durable Agent Framework... |

### dotnet/samples/04-hosting/DurableWorkflows/AzureFunctions/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Durable Workflow Azure Functions Samples Have Moved: These samples are now maintained in the Durable Agent Framework... |

### dotnet/samples/04-hosting/DurableWorkflows/ConsoleApps/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Durable Workflow Console Samples Have Moved: These samples are now maintained in the Durable Agent Framework extension... |

### dotnet/samples/04-hosting/FoundryHostedAgents/invocations/Hosted-Invocations-EchoAgent/ (4 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted-Invocations-EchoAgent: A minimal agent that echoes the user's input back, hosted as a Foundry Hosted Agent over the... |
| `EchoAIAgent.cs, EchoInvocationHandler.cs, Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/invocations/Using-Samples/SimpleInvocationsAgent/ (2 files)

| File | Description |
|------|-------------|
| `InvocationsAIAgent.cs, Program.cs` | C# sample: Simple Invocations Agent |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-AgentSkills/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted-AgentSkills: A hosted agent that uploads and consumes Foundry Skills (SKILL.md) via the Skills REST API. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-AgentSkills/skills/escalation-policy/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | When and how to escalate Contoso Outdoors customer-support tickets. |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-AgentSkills/skills/support-style/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Contoso Outdoors customer-support tone and formatting guidelines. |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-AzureSearchRag/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted-AzureSearchRag: A hosted RAG agent grounded in an Azure AI Search index. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-ChatClientAgent/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted-ChatClientAgent: A minimal general-purpose AI assistant hosted as a Foundry Hosted Agent using the Responses protocol. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-ChatClientAgent-Dockerfile/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted-ChatClientAgent-Dockerfile: A minimal general-purpose AI assistant hosted as a Foundry Hosted Agent using the... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-Files/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted-Files: A hosted agent that answers questions over two file sources through scoped, path-safe tools: bundled files... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-FoundryAgent/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted-FoundryAgent: A hosted agent that wraps an existing Foundry-managed (prompt) agent definition, retrieves it by name,... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-Harness-Research/ (3 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted Harness Research: This sample hosts a research HarnessAgent with web search, a public-network browsing tool,... |
| `Program.cs, StatelessWebSearchChatClient.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-LocalCodeAct/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted-LocalCodeAct: A hosted CodeAct agent using the Responses protocol. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-LocalTools/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted-LocalTools: A Seattle hotel search agent hosted as a Foundry Hosted Agent using the Responses protocol. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-McpTools/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted-McpTools: A hosted agent with dual-layer MCP tools against the public Microsoft Learn MCP server: client-side... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-MemoryAgent/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted-MemoryAgent: A hosted agent with long-term memory backed by a Foundry Memory store and an embedding deployment. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-Observability/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted-Observability: A hosted agent that demonstrates the Foundry hosting pipeline emits OpenTelemetry traces, metrics and... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-Steering/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted-Steering: A Foundry Hosted Agent with steerable conversations enabled. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-TextRag/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted-TextRag: A retrieval-augmented (RAG) support agent hosted as a Foundry Hosted Agent using the Responses protocol. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-Toolbox/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted-Toolbox: A hosted agent that consumes tools from a Foundry Toolbox (Foundry Toolset) at runtime. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-Toolbox-AuthPaths/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted-Toolbox-AuthPaths: A hosted agent demonstrating Foundry Toolbox auth paths (per-user OAuth consent) at runtime. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-ToolboxMcpSkills/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted-ToolboxMcpSkills: A hosted agent that discovers MCP-based skills attached to a Foundry Toolbox and serves them at |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-Workflow-Handoff/ (4 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted-Workflow-Handoff: A hosted triage handoff workflow: a triage agent routes each request to a specialist agent (a code... |
| `Pages.cs, Program.cs, ResponseStreamValidator.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-Workflow-Resilient/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Key setting: Each workflow agent has a fixed Id and Name. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-Workflow-Resilient-Long-Running/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Workflow: All executor IDs and the workflow agent ID are stable so a replacement process reconstructs the same |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-Workflow-Simple/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Hosted-Workflow-Simple: A translation-chain workflow hosted as a Foundry Hosted Agent using the Responses protocol. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted_Shared_Contributor_Setup/ (4 files)

| File | Description |
|------|-------------|
| `DevTemporaryTokenCredential.cs, HostedContributorRouteExtensions.cs, IdempotentServiceClient.cs, LocalAIProjectClientDevelopmentSupport.cs` | C# sample: Hosted Shared Contributor Setup |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Using-E2E-Resilience/ (5 files)

| File | Description |
|------|-------------|
| `README.md` | Three processes: The E2E uses three processes while each scenario is running: |
| `IdempotentService.cs, Program.cs, ServerManager.cs, ServerProcess.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Using-Samples/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Why these exist: A hosted Foundry agent is an HTTP server, not a chat UI. |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Using-Samples/FoundryHostedSession/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Sessions and conversations: A hosted session and a conversation solve different problems. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Using-Samples/Hosted-Toolbox-AuthPaths-Client/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What it does: When a toolbox tool source needs the user's delegated token, the hosted agent surfaces an... |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Using-Samples/SessionFilesClient/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: - A running Hosted-Files agent (locally via dotnet run or deployed to Foundry) |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Using-Samples/SimpleAgent/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: - A running hosted agent (any Hosted- sample, locally via dotnet run or deployed to Foundry) |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/FoundryHostedAgents/responses/Using-Samples/UserIsolationAgent/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What Foundry isolates: The middle tier authenticates Alice and Bob before calling Foundry. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/af-hosting/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Two ways to expose an agent over the Responses protocol: Agent Framework gives you two options: |

### dotnet/samples/04-hosting/af-hosting/local_responses/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Hosting Responses Agent (client / server): A client/server pair showing how to expose an AIAgent over the OpenAI Responses... |

### dotnet/samples/04-hosting/af-hosting/local_responses/Client/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Client (Hosting Responses Agent): Client half of the Hosting Responses Agent sample. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/af-hosting/local_responses/Server/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Server (Hosting Responses Agent): Server half of the Hosting Responses Agent sample. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/04-hosting/af-hosting/local_responses_workflow/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Server: The server owns routing, authentication, and checkpoint storage. |

### dotnet/samples/04-hosting/af-hosting/local_responses_workflow/Client/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Overview of Client |
| `Program.cs` | C# sample: Client |

### dotnet/samples/04-hosting/af-hosting/local_responses_workflow/Server/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Overview of Server |
| `Program.cs` | C# sample: Server |

### dotnet/samples/05-end-to-end/A2AClientServer/ (2 files)

| File | Description |
|------|-------------|
| `AUTHENTICATION.md` | Protect the A2A host: Use ASP.NET Core authentication and authorization. |
| `README.md` | Prerequisites: - .NET 10 SDK |

### dotnet/samples/05-end-to-end/A2AClientServer/A2AClient/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Run the sample: Start the server in a separate terminal: |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/05-end-to-end/A2AClientServer/A2AServer/ (3 files)

| File | Description |
|------|-------------|
| `README.md` | Run the server: Authenticate with Azure CLI and configure your Microsoft Foundry project: |
| `PolicyAgentCard.cs, Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/05-end-to-end/AGUIClientServer/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | AG-UI Client and Server Sample: This sample demonstrates how to use the AG-UI (Agent UI) protocol to enable communication... |

### dotnet/samples/05-end-to-end/AGUIClientServer/AGUIClient/ (5 files)

| File | Description |
|------|-------------|
| `README.md` | AG-UI Client: This is a console application that demonstrates how to connect to an AG-UI server and interact with remote... |
| `AGUIClientSerializerContext.cs, Program.cs, SensorRequest.cs, SensorResponse.cs` | C# source code for the sample described in README.md |

### dotnet/samples/05-end-to-end/AGUIClientServer/AGUIDojoServer/ (3 files)

| File | Description |
|------|-------------|
| `AGUIDojoServerSerializerContext.cs, ChatClientAgentFactory.cs, Program.cs` | C# sample: AGUIDojo Server |

### dotnet/samples/05-end-to-end/AGUIClientServer/AGUIDojoServer/AgenticUI/ (6 files)

| File | Description |
|------|-------------|
| `AgenticPlanningTools.cs, AgenticUIAgent.cs, JsonPatchOperation.cs, Plan.cs, +2 more` | C# sample: Agentic UI |

### dotnet/samples/05-end-to-end/AGUIClientServer/AGUIDojoServer/BackendToolRendering/ (1 files)

| File | Description |
|------|-------------|
| `WeatherInfo.cs` | C# sample: Backend Tool Rendering |

### dotnet/samples/05-end-to-end/AGUIClientServer/AGUIDojoServer/PredictiveStateUpdates/ (2 files)

| File | Description |
|------|-------------|
| `DocumentState.cs, PredictiveStateUpdatesAgent.cs` | C# sample: Predictive State Updates |

### dotnet/samples/05-end-to-end/AGUIClientServer/AGUIDojoServer/SharedState/ (4 files)

| File | Description |
|------|-------------|
| `Ingredient.cs, Recipe.cs, RecipeResponse.cs, SharedStateAgent.cs` | C# sample: Shared State |

### dotnet/samples/05-end-to-end/AGUIClientServer/AGUIServer/ (4 files)

| File | Description |
|------|-------------|
| `AGUIServerSerializerContext.cs, Program.cs, ServerWeatherForecastRequest.cs, ServerWeatherForecastResponse.cs` | C# sample: AGUIServer |

### dotnet/samples/05-end-to-end/AGUIWebChat/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | AGUI WebChat Sample: This sample demonstrates a Blazor-based web chat application using the AG-UI protocol to communicate... |

### dotnet/samples/05-end-to-end/AGUIWebChat/Client/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Client |

### dotnet/samples/05-end-to-end/AGUIWebChat/Server/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Server |

### dotnet/samples/05-end-to-end/AgentWebChat/AgentWebChat.AgentHost/ (2 files)

| File | Description |
|------|-------------|
| `ActorFrameworkWebApplicationExtensions.cs, Program.cs` | C# sample: Agent Web Chat.Agent Host |

### dotnet/samples/05-end-to-end/AgentWebChat/AgentWebChat.AgentHost/Custom/ (1 files)

| File | Description |
|------|-------------|
| `CustomAITools.cs` | C# sample: Custom |

### dotnet/samples/05-end-to-end/AgentWebChat/AgentWebChat.AgentHost/Utilities/ (2 files)

| File | Description |
|------|-------------|
| `ChatClientConnectionInfo.cs, ChatClientExtensions.cs` | C# sample: Utilities |

### dotnet/samples/05-end-to-end/AgentWebChat/AgentWebChat.AppHost/ (2 files)

| File | Description |
|------|-------------|
| `ModelExtensions.cs, Program.cs` | C# sample: Agent Web Chat.App Host |

### dotnet/samples/05-end-to-end/AgentWebChat/AgentWebChat.ServiceDefaults/ (1 files)

| File | Description |
|------|-------------|
| `ServiceDefaultsExtensions.cs` | C# sample: Agent Web Chat.Service Defaults |

### dotnet/samples/05-end-to-end/AgentWebChat/AgentWebChat.Web/ (6 files)

| File | Description |
|------|-------------|
| `A2AAgentClient.cs, AgentDiscoveryClient.cs, IAgentClient.cs, OpenAIChatCompletionsAgentClient.cs, +2 more` | C# sample: Agent Web Chat.Web |

### dotnet/samples/05-end-to-end/AgentWithPurview/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Agent with Purview: This sample adds Microsoft Purview policy evaluation to an OpenAI-compatible chat client. |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/05-end-to-end/AspNetAgentAuthorization/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Auth Client-Server Sample: This sample demonstrates how to authorize AI agents and their tools using OAuth 2.0 scopes. |

### dotnet/samples/05-end-to-end/AspNetAgentAuthorization/RazorWebClient/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Razor Web Client |

### dotnet/samples/05-end-to-end/AspNetAgentAuthorization/RazorWebClient/Pages/ (2 files)

| File | Description |
|------|-------------|
| `Chat.cshtml.cs, Index.cshtml.cs` | C# sample: Pages |

### dotnet/samples/05-end-to-end/AspNetAgentAuthorization/Service/ (3 files)

| File | Description |
|------|-------------|
| `ExpenseService.cs, Program.cs, UserContext.cs` | C# sample: Service |

### dotnet/samples/05-end-to-end/DevUIAspireIntegration/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | DevUI Integration Sample: This sample demonstrates how to use the Aspire.Hosting.AgentFramework.DevUI library to test and... |

### dotnet/samples/05-end-to-end/DevUIAspireIntegration/DevUIIntegration.AppHost/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Dev UIIntegration.App Host |

### dotnet/samples/05-end-to-end/DevUIAspireIntegration/DevUIIntegration.ServiceDefaults/ (1 files)

| File | Description |
|------|-------------|
| `Extensions.cs` | C# sample: Dev UIIntegration.Service Defaults |

### dotnet/samples/05-end-to-end/DevUIAspireIntegration/EditorAgent/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Editor Agent |

### dotnet/samples/05-end-to-end/DevUIAspireIntegration/WriterAgent/ (1 files)

| File | Description |
|------|-------------|
| `Program.cs` | C# sample: Writer Agent |

### dotnet/samples/05-end-to-end/Evaluation/Evaluation_ConversationSplits/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - LastTurn (default): Evaluates whether the last response was good given all prior context |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/05-end-to-end/Evaluation/Evaluation_FoundryQuality/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Setting up ChatConfiguration for MEAI quality evaluators |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/05-end-to-end/Evaluation/Evaluation_FoundryRubric/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Evaluation — Foundry Rubric: This sample evaluates a pre-existing Microsoft Foundry agent against a rubric evaluator |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/05-end-to-end/Evaluation/Evaluation_MixedProviders/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: - Local-only evaluation: Fast, API-free checks for inner-loop development |
| `Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/05-end-to-end/M365Agent/ (4 files)

| File | Description |
|------|-------------|
| `README.md` | Prerequisites: - You will need an Azure OpenAI or OpenAI resource using gpt-5.4-mini |
| `AFAgentApplication.cs, JsonUtilities.cs, Program.cs` | C# source code for the sample described in README.md |

### dotnet/samples/05-end-to-end/M365Agent/Agents/ (4 files)

| File | Description |
|------|-------------|
| `AdaptiveCardAIContent.cs, WeatherForecastAgent.cs, WeatherForecastAgentResponse.cs, WeatherForecastAgentResponseContentType.cs` | C# sample: Agents |

### dotnet/samples/05-end-to-end/M365Agent/Auth/ (2 files)

| File | Description |
|------|-------------|
| `AspNetExtensions.cs, TokenValidationOptions.cs` | C# sample: Auth |

### python/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Get Started with Microsoft Agent Framework for Python Developers: We recommend two common installation paths depending on... |

### python/packages/a2a/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Get Started with Microsoft Agent Framework A2A: Please install this package via pip: |

### python/packages/ag-ui/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework AG-UI Integration: AG-UI protocol integration for Agent Framework, enabling seamless integration with... |

### python/packages/ag-ui/agent_framework_ag_ui_examples/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework AG-UI Integration: AG-UI protocol integration for Agent Framework, enabling seamless integration with... |

### python/packages/ag-ui/getting_started/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Getting Started with AG-UI (Python): The AG-UI (Agent UI) protocol provides a standardized way for client applications to... |

### python/packages/anthropic/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Get Started with Microsoft Agent Framework Anthropic: Please install this package via pip: |

### python/packages/azure-ai-search/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Microsoft Agent Framework Azure AI Search: Connect Microsoft Agent Framework agents |

### python/packages/azure-contentunderstanding/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Get Started with Azure Content Understanding in Microsoft Agent Framework: Please install this package via pip: |

### python/packages/azure-cosmos/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Microsoft Agent Framework integrations for Azure Cosmos DB: Use Azure Cosmos DB for NoSQL as an Agent Framework vector... |

### python/packages/azure-cosmos-memory/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Get Started with Microsoft Agent Framework Azure Cosmos DB Memory: Please install this package via pip: |

### python/packages/azure-documentdb/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework Azure DocumentDB: Store and search vector records in |

### python/packages/azure-documentdb/samples/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Azure DocumentDB vector store sample: azure_documentdb_vectors.py creates one uniquely named collection, writes |

### python/packages/bedrock/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Get Started with Microsoft Agent Framework Bedrock: Install the provider package: |

### python/packages/chatkit/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework and ChatKit Integration: This package provides an integration layer between Microsoft Agent Framework |

### python/packages/claude/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Get Started with Microsoft Agent Framework Claude: Please install this package via pip: |

### python/packages/copilotstudio/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Get Started with Microsoft Agent Framework Copilot Studio: Please install this package via pip: |

### python/packages/core/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Get Started with Microsoft Agent Framework: Highlights |

### python/packages/declarative/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Get Started with Microsoft Agent Framework Declarative: Please install this package via pip: |

### python/packages/devui/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | DevUI - A Sample App for Running Agents and Workflows: A lightweight, standalone sample app interface for running entities... |

### python/packages/duckdb/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework DuckDB vector store: Store and search typed records in DuckDB using the |

### python/packages/foundry/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework Foundry: This package contains the Microsoft Foundry integrations for Microsoft Agent Framework, including... |

### python/packages/foundry_hosting/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Foundry Hosting: This package provides the integration of Agent Framework agents and workflows with the Foundry Agent... |

### python/packages/foundry_local/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Get Started with Microsoft Agent Framework Foundry Local: Requires Python 3.11-3.14 and Foundry Local SDK 2.3.1 or newer,... |

### python/packages/gemini/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Get Started with Microsoft Agent Framework Gemini: Install the provider package: |

### python/packages/github_copilot/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Get Started with Microsoft Agent Framework GitHub Copilot: Please install this package via pip: |

### python/packages/hosting/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | agent-framework-hosting: Shared execution-state helpers for app-owned Agent Framework hosting. |

### python/packages/hosting-a2a/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | agent-framework-hosting-a2a: Helpers for composing Agent Framework agents and workflows with an |

### python/packages/hosting-mcp/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | agent-framework-hosting-mcp: MCP conversion helpers for app-owned Agent Framework hosting. |

### python/packages/hosting-responses/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | agent-framework-hosting-responses: OpenAI Responses-shaped helpers for app-owned Agent Framework hosting. |

### python/packages/hosting-telegram/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | agent-framework-hosting-telegram: Telegram Bot API-shaped helpers for app-owned Agent Framework hosting. |

### python/packages/hyperlight/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | agent-framework-hyperlight: Hyperlight-backed CodeAct integrations for Microsoft Agent Framework. |

### python/packages/lab/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework Lab: This is the experimental package for Microsoft Agent Framework, agent-framework-lab, which contains |

### python/packages/lab/gaia/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework Lab - GAIA: The GAIA benchmark can be used for evaluating agents and workflows built using the Agent... |

### python/packages/lab/lightning/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework Lab - Lightning: Agent Framework Lab Lightning is a specialized package that integrates Microsoft Agent... |

### python/packages/lab/tau2/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework Lab - τ²-bench: τ²-bench implements a simulation framework for evaluating customer service agents across... |

### python/packages/mem0/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Get Started with Microsoft Agent Framework Mem0: Please install this package via pip: |

### python/packages/mistral/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Get Started with Microsoft Agent Framework Mistral AI: Please install this package: |

### python/packages/mongodb/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | MongoDB vector stores: An alpha MongoDB integration for Microsoft Agent Framework. |

### python/packages/mongodb/samples/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | MongoDB samples: mongodb_vectors.py demonstrates deterministic dense vectors, indexed metadata |

### python/packages/monty/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | agent-framework-monty: Monty-backed CodeAct integrations for Microsoft Agent Framework. |

### python/packages/nvidia/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Get Started with Microsoft Agent Framework NVIDIA NIM: An alpha NVIDIA NIM embedding integration for Microsoft Agent... |

### python/packages/nvidia/samples/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | NVIDIA samples: nvidia_embeddings.py generates single and batched embeddings, then indexes two |

### python/packages/ollama/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Get Started with Microsoft Agent Framework Ollama: Please install this package as the extra for agent-framework: |

### python/packages/openai/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | agent-framework-openai: OpenAI integration for Microsoft Agent Framework. |

### python/packages/oracle/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework Oracle vector store: An alpha connector for storing and searching native VECTOR columns in Oracle |

### python/packages/orchestrations/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework Orchestrations: Orchestration patterns for Microsoft Agent Framework. |

### python/packages/postgres/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework PostgreSQL / pgvector: Store and search vector records in PostgreSQL with this alpha integration for |

### python/packages/purview/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Microsoft Agent Framework – Purview Integration (Python): agent-framework-purview adds Microsoft Purview (Microsoft Graph... |

### python/packages/qdrant/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Qdrant vector stores: An alpha Qdrant integration for Microsoft Agent Framework. |

### python/packages/qdrant/samples/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Qdrant samples: qdrant_vectors.py demonstrates batch CRUD, named dense-vector selection, |

### python/packages/redis/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Microsoft Agent Framework Redis: Redis-backed conversation history, memory retrieval, and vector storage for |

### python/packages/sql-server/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework SQL Server vector store: Store typed Agent Framework records in SQL Server and Azure SQL native VECTOR |

### python/packages/tools/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | agent-framework-tools: Beta built-in tools for the Microsoft Agent Framework. |

### python/packages/typesafe/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework TypeSafe AI: Use TypeSafe AI System One models, including Jev, |

### python/packages/typesafe/samples/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | TypeSafe AI samples: These samples need extra explanation because TypeSafe System One models return |

### python/samples/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Python Samples: This directory contains samples demonstrating the capabilities of Microsoft Agent Framework for Python. |
| `community-projects.md` | Community projects for Agent Framework Python: This page lists published, community-maintained projects that integrate with |

### python/samples/01-get-started/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Get Started with Agent Framework for Python: This folder contains a progressive set of samples that introduce the core |

### python/samples/02-agents/a2a/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | A2A Client Samples: These samples demonstrate how to consume remote A2A-compliant agents using the Agent Framework's... |

### python/samples/02-agents/chat_client/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Chat Client Examples: This folder contains examples for direct chat client usage patterns. |

### python/samples/02-agents/compaction/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Context Compaction Samples: This folder demonstrates context compaction patterns introduced by ADR-0019. |

### python/samples/02-agents/context_providers/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Context Provider Samples: These samples demonstrate how to use context providers to enrich agent conversations with... |

### python/samples/02-agents/context_providers/azure_ai_search/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Azure AI Search Context Provider Examples: Azure AI Search context provider enables Retrieval Augmented Generation (RAG)... |

### python/samples/02-agents/context_providers/azure_content_understanding/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Azure Content Understanding Samples: These samples demonstrate how to use the agent-framework-azure-contentunderstanding... |

### python/samples/02-agents/context_providers/code_act/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | CodeAct context providers: Demonstrates the provider-owned CodeAct flow with two backends: |

### python/samples/02-agents/context_providers/file_access_data_processing/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | File Access Data Processing: This sample demonstrates how to give an Agent access to a folder of data files |

### python/samples/02-agents/context_providers/mem0/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Mem0 Context Provider Examples: Mem0 is a self-improving memory layer for Large Language Models that enables applications... |

### python/samples/02-agents/context_providers/neo4j/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Neo4j Context Providers: Neo4j offers two context providers for the Agent Framework, each serving a different purpose: |

### python/samples/02-agents/context_providers/neo4j_memory/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Neo4j Memory Context Provider: Neo4j Agent Memory is a graph-native memory system for AI agents that stores conversations,... |

### python/samples/02-agents/context_providers/redis/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Redis Context Provider Examples: The Redis context provider enables persistent, searchable memory for your agents using... |

### python/samples/02-agents/conversations/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Conversation & Session Management Samples: These samples demonstrate different approaches to managing conversation history... |

### python/samples/02-agents/declarative/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Declarative Agent Samples: This folder contains sample code demonstrating how to use the Microsoft Agent Framework... |

### python/samples/02-agents/devui/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | DevUI Samples: This folder contains sample agents and workflows designed to work with the Agent Framework DevUI - a... |

### python/samples/02-agents/devui/agent_content_understanding/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | DevUI Multi-Modal Agent: Interactive web UI for uploading and chatting with documents, images, audio, and video using Azure... |

### python/samples/02-agents/devui/agent_content_understanding_file_search_azure_openai/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | DevUI File Search Agent: Interactive web UI for uploading and chatting with documents, images, audio, and video using Azure... |

### python/samples/02-agents/devui/agent_content_understanding_file_search_foundry/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | DevUI Foundry File Search Agent: Interactive web UI for uploading and chatting with documents, images, audio, and video... |

### python/samples/02-agents/harness/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Harness Agent Samples: This folder demonstrates create_harness_agent — a factory function that builds a |

### python/samples/02-agents/harness/build_your_own_claw/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Build your own claw and agent harness — Python samples: Runnable Python samples for the "Build your own claw and agent... |

### python/samples/02-agents/harness/build_your_own_claw/claw_step04_production_ready/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Claw Step 04 — Production-ready: This folder restructures the Step 03 claw into a shared agent module plus thin hosts. |

### python/samples/02-agents/harness/build_your_own_claw/claw_step04_production_ready/skills/risk-scoring/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Score how concentrated and risky a portfolio is on a 0-100 scale from its position weights. Use when the user asks how... |

### python/samples/02-agents/harness/build_your_own_claw/claw_step04_production_ready/skills/risk-scoring/references/ (1 files)

| File | Description |
|------|-------------|
| `risk-bands.md` | Risk-scoring guide (illustrative): This skill scores concentration risk — how much a portfolio depends on its largest... |

### python/samples/02-agents/harness/build_your_own_claw/claw_step04_production_ready/skills/valuation/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Estimate whether a stock looks cheap or expensive using a price-to-earnings (P/E) based fair-value method. Use when the... |

### python/samples/02-agents/harness/build_your_own_claw/claw_step04_production_ready/skills/valuation/references/ (1 files)

| File | Description |
|------|-------------|
| `valuation-guide.md` | Valuation guide (illustrative): A quick price-to-earnings (P/E) sanity check: |

### python/samples/02-agents/harness/build_your_own_claw/skills/risk-scoring/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Score how concentrated and risky a portfolio is on a 0-100 scale from its position weights. Use when the user asks how... |

### python/samples/02-agents/harness/build_your_own_claw/skills/risk-scoring/references/ (1 files)

| File | Description |
|------|-------------|
| `risk-bands.md` | Risk-scoring guide (illustrative): This skill scores concentration risk — how much a portfolio depends on its largest... |

### python/samples/02-agents/harness/build_your_own_claw/skills/valuation/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Estimate whether a stock looks cheap or expensive using a price-to-earnings (P/E) based fair-value method. Use when the... |

### python/samples/02-agents/harness/build_your_own_claw/skills/valuation/references/ (1 files)

| File | Description |
|------|-------------|
| `valuation-guide.md` | Valuation guide (illustrative): A quick price-to-earnings (P/E) sanity check: |

### python/samples/02-agents/harness/console/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Harness Console: A Textual-based terminal UI for running and observing AI agents built with the Agent Framework. |

### python/samples/02-agents/mcp/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | MCP (Model Context Protocol) Examples: This folder contains examples demonstrating how to work with MCP using Agent... |

### python/samples/02-agents/middleware/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Middleware samples: This folder contains focused middleware samples for Agent, chat clients, tools, sessions, and runtime... |

### python/samples/02-agents/multimodal_input/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Multimodal Input Examples: This folder contains examples demonstrating how to send multimodal content (images, audio, PDF... |

### python/samples/02-agents/observability/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework Observability: These samples show how to send Agent Framework observability data to the Application... |

### python/samples/02-agents/providers/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Provider Samples Overview: This directory groups provider-specific samples for Agent Framework. |

### python/samples/02-agents/providers/amazon/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Bedrock Examples: This folder contains examples demonstrating how to use AWS Bedrock models with the Agent Framework. |

### python/samples/02-agents/providers/anthropic/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Anthropic Examples: This folder contains examples demonstrating how to use Anthropic's Claude models with the Agent... |

### python/samples/02-agents/providers/azure/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Azure Provider Samples: This folder contains Azure-backed samples for the generic OpenAI clients in |

### python/samples/02-agents/providers/copilotstudio/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Copilot Studio Agent Examples: This folder contains examples demonstrating how to create and use agents with Microsoft... |

### python/samples/02-agents/providers/custom/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Custom Agent and Chat Client Examples: This folder contains examples demonstrating how to implement custom agents and chat... |

### python/samples/02-agents/providers/foundry/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Foundry Provider Samples: This folder contains Microsoft Foundry and Foundry Local samples for Agent Framework. |

### python/samples/02-agents/providers/gemini/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Google Gemini Examples: This folder contains examples demonstrating how to use Google Gemini models with the Agent Framework. |

### python/samples/02-agents/providers/github_copilot/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | GitHub Copilot Agent Examples: This directory contains examples demonstrating how to use the GitHubCopilotAgent from the... |

### python/samples/02-agents/providers/mistral/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Mistral AI Examples: This folder contains examples demonstrating how to use Mistral AI models with the Agent Framework. |

### python/samples/02-agents/providers/ollama/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Ollama Examples: This folder contains examples demonstrating how to use Ollama models with the Agent Framework. |

### python/samples/02-agents/providers/openai/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | OpenAI Provider Samples: This folder contains OpenAI provider samples for the generic clients in |

### python/samples/02-agents/security/ (2 files)

| File | Description |
|------|-------------|
| `FIDES_DEVELOPER_GUIDE.md` | FIDES: Deterministic Prompt Injection Defense System ([Costa et al., 2025](https://arxiv.org/abs/2505.23643)): FIDES  is a... |
| `README.md` | FIDES security samples: This folder contains runnable FIDES samples. |

### python/samples/02-agents/skills/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Skills Samples: These samples demonstrate how to use Agent Skills — modular packages of instructions, resources, and... |

### python/samples/02-agents/skills/class_based_skill/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Class-Based Agent Skills: This sample demonstrates how to define Agent Skills as Python classes using ClassSkill. |

### python/samples/02-agents/skills/code_defined_skill/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Code-Defined Agent Skills: This sample demonstrates how to create Agent Skills in Python code, without needing SKILL.md... |

### python/samples/02-agents/skills/file_based_skill/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | File-Based Agent Skills: This sample demonstrates how to use file-based Agent Skills with a SkillsProvider in the Microsoft... |

### python/samples/02-agents/skills/file_based_skill/skills/unit-converter/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Convert between common units using a multiplication factor. Use when asked to convert miles, kilometers, pounds, or... |

### python/samples/02-agents/skills/file_based_skill/skills/unit-converter/references/ (1 files)

| File | Description |
|------|-------------|
| `CONVERSION_TABLES.md` | Conversion Tables: Formula: result = value × factor |

### python/samples/02-agents/skills/mcp_based_skill/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | MCP-Based Agent Skills Sample: This sample demonstrates how to discover Agent Skills served over MCP with an Agent. |

### python/samples/02-agents/skills/mixed_skills/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Mixed Skills — Code, Class, and File Skills: This sample demonstrates how to combine code-defined skills, |

### python/samples/02-agents/skills/mixed_skills/skills/unit-converter/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Convert between common units using a multiplication factor. Use when asked to convert miles, kilometers, pounds, or... |

### python/samples/02-agents/skills/mixed_skills/skills/unit-converter/references/ (1 files)

| File | Description |
|------|-------------|
| `CONVERSION_TABLES.md` | Conversion Tables: Formula: result = value × factor |

### python/samples/02-agents/skills/script_approval/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Skill Tool Approval — Human-in-the-Loop for Skill Tools: This sample demonstrates the manual human-in-the-loop approval... |

### python/samples/02-agents/skills/skill_filtering/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Skill Filtering — FilteringSkillsSource: This sample demonstrates how to use FilteringSkillsSource to control |

### python/samples/02-agents/skills/skill_filtering/skills/length-converter/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Convert between common length units (miles, km, feet, meters) using a multiplication factor. |

### python/samples/02-agents/skills/skill_filtering/skills/volume-converter/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Convert between gallons and liters using a conversion factor. |

### python/samples/02-agents/skills/skills_auto_approval/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Skills Auto-Approval — Configure Auto-Approval Rules for Skill Tools: This sample demonstrates how to configure... |

### python/samples/02-agents/tools/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Tools: Samples that show how to define, configure, and control function tools for an |

### python/samples/02-agents/tools/local_code_interpreter/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Hyperlight local code interpreter: Demonstrates the standalone Hyperlight |

### python/samples/02-agents/tools/monty_code_interpreter/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Monty local code interpreter: Demonstrates the standalone Monty |

### python/samples/02-agents/vector_stores/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Vector stores: Vector stores accept multiple model styles so applications can keep the data |

### python/samples/03-workflows/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Workflows Getting Started Samples: Microsoft Agent Framework Workflows support ships with agent-framework-core. |

### python/samples/03-workflows/declarative/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Declarative Workflows: Declarative workflows allow you to define multi-agent orchestration patterns in YAML, including: |

### python/samples/03-workflows/declarative/conditional_workflow/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Conditional Workflow Sample: This sample demonstrates control flow with conditions: |

### python/samples/03-workflows/declarative/customer_support/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Customer Support Workflow Sample: Multi-agent workflow demonstrating automated troubleshooting with escalation paths. |

### python/samples/03-workflows/declarative/deep_research/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Deep Research Workflow Sample: Multi-agent workflow implementing the "Magentic" orchestration pattern from AutoGen. |

### python/samples/03-workflows/declarative/function_tools/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Function Tools Workflow: This sample demonstrates an agent with function tools responding to user queries about a... |

### python/samples/03-workflows/declarative/human_in_loop/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Human-in-Loop Workflow Sample: This sample demonstrates how to build interactive workflows that request user input during... |

### python/samples/03-workflows/declarative/marketing/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Marketing Copy Workflow: This sample demonstrates a sequential multi-agent pipeline for generating marketing copy from a... |

### python/samples/03-workflows/declarative/simple_workflow/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Simple Workflow Sample: This sample demonstrates the basics of declarative workflows: |

### python/samples/03-workflows/declarative/student_teacher/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Student-Teacher Math Chat Workflow: This sample demonstrates an iterative conversation between two AI agents - a Student... |

### python/samples/03-workflows/orchestrations/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Orchestration Getting Started Samples: Install the orchestrations package directly: |

### python/samples/04-hosting/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Hosting Samples: This directory contains Python samples that demonstrate different ways to host Agent Framework agents. |

### python/samples/04-hosting/a2a/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | A2A Server Hosting Examples: This sample demonstrates how to host Agent Framework agents as A2A-compliant servers using the... |

### python/samples/04-hosting/af-hosting/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent Framework hosting helper samples: End-to-end samples for exposing Agent Framework targets through app-owned |

### python/samples/04-hosting/af-hosting/local_responses/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | local_responses — Responses helpers with native FastAPI routes: The smallest end-to-end Responses hosting shape: one... |

### python/samples/04-hosting/af-hosting/local_responses_harness/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | local_responses_harness — hosting a harness agent behind Responses routes: The sibling of local_responses/, with one... |

### python/samples/04-hosting/af-hosting/local_responses_workflow/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | local_responses_workflow — Responses helpers with a workflow target: This sample shows the helper-first hosting shape for a... |

### python/samples/04-hosting/af-hosting/local_telegram/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | local_telegram - Telegram helpers with aiogram polling or webhooks: A local Telegram bot built from the helper-first... |

### python/samples/04-hosting/azure_functions/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Azure Functions Samples Have Moved: The Python Azure Functions samples are now maintained in the Durable Agent Framework... |

### python/samples/04-hosting/container/hyperlight_codeact/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: An Agent Framework agent that |

### python/samples/04-hosting/durabletask/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Durable Task Samples Have Moved: The Python Durable Task samples are now maintained in the Durable Agent Framework... |

### python/samples/04-hosting/foundry-hosted-agents/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Foundry Hosted Agent Samples: This directory contains samples that demonstrate how to use hosted Agent Framework agents... |

### python/samples/04-hosting/foundry-hosted-agents/invocations/basic/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Invocations agent with a custom request parser: main.py hosts an Agent Framework agent using the Foundry |

### python/samples/04-hosting/foundry-hosted-agents/invocations/break_glass/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: An Agent Framework agent hosted using the Invocations protocol with session management. |

### python/samples/04-hosting/foundry-hosted-agents/invocations/telegram/ (2 files)

| File | Description |
|------|-------------|
| `README.md` | Telegram bot with a Foundry Hosted Agent: This sample deploys a Telegram bot whose webhook is handled by an Agent Framework... |
| `instructions.md` | Overview of telegram |

### python/samples/04-hosting/foundry-hosted-agents/responses/azure_search_rag/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: An Agent Framework agent with Retrieval Augmented Generation (RAG) capabilities backed by... |

### python/samples/04-hosting/foundry-hosted-agents/responses/basic/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Responses agents: history, storage, and options: The outer Responses request decides whether the hosted response is stored. |

### python/samples/04-hosting/foundry-hosted-agents/responses/custom_storage/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Custom session storage (Responses protocol): This sample implements custom MAF agent-session persistence, including user |

### python/samples/04-hosting/foundry-hosted-agents/responses/declarative_customer_support/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Native declarative customer-support workflow: workflow.yaml defines a multi-turn customer-support flow |

### python/samples/04-hosting/foundry-hosted-agents/responses/files/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Session files (Responses protocol): This agent reads only explicitly uploaded UTF-8 files in $HOME/sample_files |

### python/samples/04-hosting/foundry-hosted-agents/responses/foundry_memory/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: An Agent Framework agent with persistent semantic memory backed by a Microsoft Foundry... |

### python/samples/04-hosting/foundry-hosted-agents/responses/foundry_toolbox/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent with Foundry Toolbox (Responses Protocol): An Agent Framework agent that uses Foundry Toolbox for tool discovery,... |

### python/samples/04-hosting/foundry-hosted-agents/responses/foundry_toolbox_mcp_skills/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Agent with Foundry Toolbox MCP Skills (Responses Protocol): An Agent Framework agent that discovers Agent Skills attached... |

### python/samples/04-hosting/foundry-hosted-agents/responses/foundry_toolbox_mcp_skills/skills/escalation-policy/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | When and how to escalate Contoso Outdoors customer-support tickets. |

### python/samples/04-hosting/foundry-hosted-agents/responses/foundry_toolbox_mcp_skills/skills/support-style/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Contoso Outdoors customer-support tone and formatting guidelines. |

### python/samples/04-hosting/foundry-hosted-agents/responses/mcp/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: An Agent Framework agent that connects to a remote MCP server (GitHub) for tool discovery... |

### python/samples/04-hosting/foundry-hosted-agents/responses/monty_codeact/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: An Agent Framework agent with a |

### python/samples/04-hosting/foundry-hosted-agents/responses/observability/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: An instrumented Agent Framework agent hosted using the Responses protocol. |

### python/samples/04-hosting/foundry-hosted-agents/responses/resilient_long_running_workflow/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Resilient native Responses workflow: This sample runs a typed countdown as a native workflow and opts into the |

### python/samples/04-hosting/foundry-hosted-agents/responses/steerable_long_running_agent/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Long-running Responses agent (steering temporarily unavailable): Steering is currently gated. |

### python/samples/04-hosting/foundry-hosted-agents/responses/tools/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | What this sample demonstrates: An Agent Framework agent with locally-defined Python tools hosted using the Responses... |

### python/samples/04-hosting/foundry-hosted-agents/responses/workflows/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Native Responses workflows: This sample hosts built Agent Framework workflows directly with |

### python/samples/04-hosting/mcp/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | MCP hosting with native SDK constructs: An MCP server that exposes tools must handle tools/list and tools/call. |

### python/samples/05-end-to-end/ag_ui_single_agent/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | AG-UI Single Agent Demo: The simplest possible AG-UI integration: a single chat agent with no tools and no context providers, |

### python/samples/05-end-to-end/ag_ui_workflow_handoff/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | AG-UI Handoff Workflow Demo: This demo is a full custom AG-UI application built on top of the new workflow abstractions in... |

### python/samples/05-end-to-end/chatkit-integration/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | ChatKit Integration Sample with Weather Agent and Image Analysis: This sample demonstrates how to integrate Microsoft Agent... |

### python/samples/05-end-to-end/evaluation/foundry_evals/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Foundry Evals Integration Samples: These samples demonstrate evaluating agent-framework agents using Microsoft Foundry's... |

### python/samples/05-end-to-end/evaluation/red_teaming/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Red Team Evaluation Samples: This directory contains samples demonstrating how to use Azure AI's evaluation and red teaming... |

### python/samples/05-end-to-end/evaluation/self_reflection/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Self-Reflection Evaluation Sample: This sample demonstrates the self-reflection pattern using Agent Framework and Microsoft... |

### python/samples/05-end-to-end/m365-agent/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Microsoft Agent Framework Python Weather Agent sample (M365 Agents SDK): This sample demonstrates a simple Weather Forecast... |

### python/samples/05-end-to-end/neo4j_graphrag/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Neo4j GraphRAG Context Provider: The Neo4j GraphRAG context provider adds read-only retrieval from a Neo4j knowledge graph... |

### python/samples/05-end-to-end/purview_agent/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Purview Policy Enforcement Sample (Python): This getting-started sample shows how to attach Microsoft Purview policy... |

### python/samples/05-end-to-end/workflow_evaluation/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Multi-Agent Travel Planning Workflow Evaluation: This sample demonstrates evaluating a multi-agent workflow using Azure... |

### python/samples/autogen-migration/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | AutoGen → Microsoft Agent Framework Migration Samples: This gallery helps AutoGen developers move to the Microsoft Agent... |

### python/samples/semantic-kernel-migration/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Semantic Kernel → Microsoft Agent Framework Migration Samples: This gallery helps Semantic Kernel (SK) developers move to... |

### skills/ (1 files)

| File | Description |
|------|-------------|
| `README.md` | Microsoft Agent Framework consumer skills: This directory contains installable Agent Skills for developers building... |

### skills/agent-framework-builder-dotnet/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Use this skill when building, modifying, reviewing, evaluating, integrating, or hosting .NET (C#) applications with... |

### skills/agent-framework-builder-dotnet/references/ (9 files)

| File | Description |
|------|-------------|
| `agent-builder.md` | Plain agent builder: Use this path for .NET agents whose behavior can be expressed with one AIAgent (usually a... |
| `declarative.md` | Declarative agents and workflows: Use declarative construction when YAML should be the source of truth for supported agent... |
| `evaluation.md` | Evaluation: Use evaluation to turn expected behavior, failures, and feedback into repeatable evidence. |
| `extensibility.md` | Extensibility: Use this reference when an application needs framework behavior that is not provided by an existing model or... |
| `harness-agent-builder.md` | Harness agent builder: Use a harness when the product needs an opinionated operating loop around a normal agent: planning,... |
| `hosting-and-deployment.md` | Hosting and deployment: Use hosting after the agent or workflow works locally. |
| `integrations.md` | Providers and integrations: Choose integrations only after the application contract is clear. |
| `observability.md` | Observability: Use observability to diagnose agent runs, model calls, tools, workflows, latency, errors, and token use. |
| `workflow-builder.md` | Workflow and orchestration builder: Use a workflow when execution order, routing, parallelism, multiple participants,... |

### skills/agent-framework-builder-python/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Use this skill when building, modifying, reviewing, evaluating, integrating, or hosting Python applications with Microsoft... |

### skills/agent-framework-builder-python/references/ (9 files)

| File | Description |
|------|-------------|
| `agent-builder.md` | Plain agent builder: Use this path for Python agents whose behavior can be expressed with one Agent, a model or... |
| `declarative.md` | Declarative agents and workflows: Use declarative construction when YAML or JSON should be the source of truth for... |
| `evaluation.md` | Evaluation: Use evaluation to turn expected behavior, failures, and feedback into repeatable evidence. |
| `extensibility.md` | Extensibility: Use this reference when an application needs framework behavior that is not provided by an existing model or... |
| `harness-agent-builder.md` | Harness agent builder: Use a harness when the product needs an opinionated operating loop around a normal Agent: planning,... |
| `hosting-and-deployment.md` | Hosting and deployment: Use hosting after the agent or workflow works locally. |
| `integrations.md` | Providers and integrations: Choose integrations only after the application contract is clear. |
| `observability.md` | Observability: Use observability to diagnose agent runs, model calls, tools, workflows, latency, errors, and token use. |
| `workflow-builder.md` | Workflow and orchestration builder: Use a workflow when execution order, routing, parallelism, multiple participants,... |
