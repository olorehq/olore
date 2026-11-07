# langchain Table of Contents

## Directory Map

```
contents/
├── *.mdx                # Top-level: common errors, versioning, release/security policy (5 files)
├── concepts/            # Cross-cutting concepts: context, memory, HITL, models (5 files)
├── langchain/           # LangChain agents framework (71 files)
│   ├── middleware/      # Built-in and custom middleware
│   ├── multi-agent/     # Subagents, handoffs, router, skills patterns
│   ├── mcp/             # Model Context Protocol
│   ├── frontend/        # Streaming UI patterns
│   └── errors/          # Error code reference
├── langgraph/           # LangGraph orchestration runtime (43 files)
│   ├── frontend/        # UI integration
│   └── errors/          # Error code reference
├── deepagents/          # Deep Agents harness, CLI (code/), frontend/ (52 files)
├── python/              # Python-specific content (363 files)
│   ├── integrations/    # Providers, chat, embeddings, vectorstores, tools, loaders...
│   ├── migrate/         # v1 migration guides
│   └── releases/        # v1 release notes
├── javascript/          # JavaScript/TypeScript-specific content (173 files)
│   ├── integrations/    # Same categories as python/integrations
│   ├── migrate/
│   └── releases/
├── integrations/        # Shared integration pages: backends, providers, splitters (7 files)
├── openwiki/            # OpenWiki CLI for agent wikis (11 files)
└── reference/           # Links to API reference sites (1 file)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New to LangChain | `contents/langchain/overview.mdx`, `contents/langchain/quickstart.mdx` |
| Install | `contents/langchain/install.mdx` |
| Build an agent | `contents/langchain/agents.mdx` |
| Models and tools | `contents/langchain/models.mdx`, `contents/langchain/tools.mdx` |
| Middleware / guardrails | `contents/langchain/middleware/`, `contents/langchain/guardrails.mdx` |
| Structured output | `contents/langchain/structured-output.mdx` |
| Streaming | `contents/langchain/streaming.mdx` |
| Memory | `contents/langchain/short-term-memory.mdx`, `contents/langchain/long-term-memory.mdx` |
| LangGraph graphs | `contents/langgraph/graph-api.mdx`, `contents/langgraph/overview.mdx` |
| Persistence / checkpoints | `contents/langgraph/persistence.mdx` |
| Human-in-the-loop | `contents/langgraph/interrupts.mdx` |
| Deep Agents | `contents/deepagents/overview.mdx`, `contents/deepagents/quickstart.mdx` |
| Find an integration | `contents/python/integrations/providers/` or `contents/javascript/integrations/providers/` |
| Troubleshooting | `contents/common-errors.mdx`, `contents/langchain/errors/`, `contents/langgraph/errors/` |
| v1 migration | `contents/python/migrate/`, `contents/javascript/migrate/` |

## Detailed Structure

Directories are listed alphabetically; `.` is the contents root. Descriptions come from each file's frontmatter or opening text.

### ./ (5 files)

| File | Description |
|------|-------------|
| `common-errors.mdx` | This page contains guides around resolving common errors you may find while building with LangChain and LangGraph. |
| `learn.mdx` | Learn: Tutorials, conceptual guides, and resources to help you get started. |
| `release-policy.mdx` | This page explains the LangChain and LangGraph release policies. Click on the tabs below to view the release policies for each: |
| `security-policy.mdx` | LangChain has a large ecosystem of integrations with various external resources like local and remote file systems, APIs and databases. These... |
| `versioning.mdx` | Versioning: Our OSS version numbers follow the format: MAJOR.MINOR.PATCH, as defined by Semantic Versioning. |

### concepts/ (5 files)

| File | Description |
|------|-------------|
| `context.mdx` | Runtime context refers to local context: data and dependencies your code needs to run. It does **not** refer to: |
| `human-in-the-loop.mdx` | Human-in-the-loop overview: How agents pause tool calls for human review, and how per-call and batched interrupts differ. |
| `memory.mdx` | Memory is a system that remembers information about previous interactions. For AI agents, memory is crucial because it lets them remember previous... |
| `products.mdx` | Runtimes, frameworks, and harnesses: Understand the differences between LangChain, LangGraph, and Deep Agents and when to use each one |
| `providers-and-models.mdx` | Providers and models: Understand how LangChain uses providers to give you a single API for any model from any provider |

### deepagents/ (32 files)

| File | Description |
|------|-------------|
| `acp.mdx` | Agent Client Protocol (ACP): Expose Deep Agents over the Agent Client Protocol (ACP) to integrate with code editors and IDEs. |
| `ag-ui.mdx` | Expose deep agents over the Agent User Interaction Protocol (AG-UI) to stream events to any AG-UI client or frontend. |
| `async-subagents.mdx` | Async subagents: Launch background subagents that run concurrently while the supervisor continues interacting with the user |
| `backends.mdx` | Choose and configure filesystem backends for Deep Agents. You can specify routes to different backends, implement virtual filesystems, and enforce... |
| `browser-use.mdx` | Browser use: Give a deep agent a browser so it can take actions on websites and test web apps end to end. |
| `comparison.mdx` | Compare LangChain Deep Agents and Managed Deep Agents with the Claude Agent SDK to choose the right tool for your use case. |
| `content-builder.mdx` | Build a content writing agent with brand voice, skills, subagents, and image generation using Managed Deep Agents or the Deep Agents SDK |
| `context-engineering.mdx` | Context engineering in Deep Agents: Control what context your deep agent has access to and how it is managed across long-running tasks |
| `customization.mdx` | Customize Deep Agents: Learn how to customize Deep Agents with system prompts, tools, subagents, and more |
| `data-analysis.mdx` | Build a data analysis agent: Build an agent that analyzes data files, generates visualizations, and shares results |
| `deep-research.mdx` | Build a multi-step web research agent with subagent delegation using Managed Deep Agents or the Deep Agents SDK |
| `dynamic-subagents.mdx` | Dynamic subagents: Use interpreters to dispatch and orchestrate Deep Agents subagents from code |
| `event-streaming.mdx` | Event streaming: Stream subagents, messages, tool calls, and final output from Deep Agents. |
| `fault-tolerance.mdx` | Fault tolerance: Make your deep agent resilient with rate limiting, retries, fallbacks, and error handling |
| `going-to-production.mdx` | Take your deep agent to production with persistent memory, sandboxes, resilience middleware, and deployment options |
| `human-in-the-loop.mdx` | Human-in-the-loop: Learn how to configure human approval for sensitive tool operations |
| `interpreters.mdx` | Run lightweight code inside Deep Agents to compose tools, orchestrate subagents, and transform structured data |
| `memory.mdx` | Memory: Add persistent memory to agents built with Deep Agents so they learn and improve across conversations |
| `models.mdx` | Models: Configure model providers and parameters for Deep Agents |
| `multimodal.mdx` | Use images, audio, video, and documents with Deep Agents when your model supports multimodal inputs and tool results |
| `overview.mdx` | Agent harness for planning, subagents, and file-system context, available as Managed Deep Agents or the Deep Agents SDK |
| `permissions.mdx` | Permissions: Control filesystem access with declarative permission rules for Deep Agents |
| `profiles.mdx` | Profiles: Package per-provider and per-model defaults that Deep Agents applies when a model is selected |
| `quickstart.mdx` | Quickstart: Build your first deep agent in minutes |
| `rag.mdx` | RAG patterns for Deep Agents, including skills-guided retrieval, rubric grading, and a tutorial that indexes LangChain docs, offloads chunks to... |
| `retrieval.mdx` | Retrieval: Large Language Models (LLMs) are powerful, but they have two key limitations: |
| `rubric.mdx` | Grading rubrics: LLM-as-a-judge grading for agents that iterate against a rubric until done |
| `sandboxes.mdx` | Sandboxes: Execute code in isolated environments with sandbox backends |
| `skills.mdx` | Skills: Learn how to extend your deep agent's capabilities with skills |
| `streaming.mdx` | Streaming: Stream real-time updates from deep agent runs and subagent execution |
| `subagents.mdx` | Subagents: Learn how to use subagents to delegate work and keep context clean |
| `tools.mdx` | Tools: Connect Deep Agents to custom functions, APIs, databases, and any MCP server |

### deepagents/code/ (16 files)

| File | Description |
|------|-------------|
| `approval-modes.mdx` | Approval modes: Choose how Deep Agents Code reviews gated tool calls with Manual, Auto, and YOLO modes |
| `cli-reference.mdx` | Command reference: Deep Agents Code command-line flags and management subcommands |
| `config-file.mdx` | Config file: Configure model providers, defaults, retries, and gateways in config.toml |
| `configuration.mdx` | Configure Deep Agents Code with config files, administrator settings, environment variables, hooks, and CLI flags |
| `credentials.mdx` | Provider credentials: Add and manage API keys for model providers, Tavily web search, and LangSmith tracing |
| `extensions.mdx` | Python extensions: Customize dcode with Python tools, middleware, and storage routes |
| `goals-and-rubrics.mdx` | Goals and rubrics: Define objectives and acceptance criteria for Deep Agents Code sessions |
| `hooks.mdx` | Hooks: Observe and control Deep Agents Code lifecycle events with command hooks configured in hooks.json |
| `mcp-tools.mdx` | MCP tools: Load additional tools from MCP (Model Context Protocol) servers |
| `memory-and-skills.mdx` | Persistent memory, AGENTS.md files, and reusable skills for Deep Agents Code, including creation, discovery, and invocation. |
| `overview.mdx` | Deep Agents Code: Terminal coding agent built on the Deep Agents SDK |
| `plugins.mdx` | Plugins and marketplaces: Install plugins from marketplaces or package skills, MCP servers, hooks, and Python extensions for dcode |
| `providers.mdx` | Model providers: Configure any LangChain-compatible model provider for Deep Agents Code |
| `quickstart.mdx` | Quickstart: Install Deep Agents Code, run your first task, and use interactive or non-interactive modes |
| `remote-sandboxes.mdx` | Run Deep Agents Code tool execution in LangSmith, AgentCore, Daytona, Modal, Runloop, Vercel, or E2B sandboxes. Install provider dependencies, set... |
| `subagents.mdx` | Define custom Deep Agents Code subagents as AGENTS.md files with YAML frontmatter. Covers project and user paths, optional model overrides, and... |

### deepagents/frontend/ (4 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Overview: Build UIs that display real-time subagent streams, task progress, and sandbox for Deep Agents |
| `sandbox.mdx` | Sandbox: Build an IDE-like UI for a coding agent backed by a sandbox environment |
| `subagent-streaming.mdx` | Subagent streaming: Display specialist subagents with streaming content, progress tracking, and collapsible cards |
| `todo-list.mdx` | Todo list: Track agent progress with a real-time todo list synced from agent state |

### integrations/backends/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Backend integrations: Filesystem backends for Deep Agents. |

### integrations/providers/ (1 files)

| File | Description |
|------|-------------|
| `cala.mdx` | Cala is a verified knowledge graph for AI agents. |

### integrations/splitters/ (5 files)

| File | Description |
|------|-------------|
| `character_text_splitter.mdx` | Character-based splitting is the simplest approach to text splitting. It divides text using a specified character sequence (default: "\n\n"), with... |
| `code_splitter.mdx` | @[RecursiveCharacterTextSplitter] includes prebuilt lists of separators that are useful for splitting text in a specific programming language. |
| `index.mdx` | Text splitter integrations: Integrate with text splitters using LangChain. |
| `recursive_text_splitter.mdx` | This text splitter is the recommended one for generic text. It is parameterized by a list of characters. It tries to split on them in order until... |
| `split_by_token.mdx` | Language models have a token limit. You should not exceed the token limit. When you split your text into chunks it is therefore a good idea to... |

### javascript/ (1 files)

| File | Description |
|------|-------------|
| `studio.mdx` | Studio: Develop, run, and debug LangGraph agents in an interactive environment with LangSmith Studio. |

### javascript/integrations/agents/ (1 files)

| File | Description |
|------|-------------|
| `sap_hana_sparql_qa_agent.mdx` | Question Answering with HanaSparqlQAAgent: Integrate with the HanaSparqlQAAgent type using LangChain JavaScript. |

### javascript/integrations/chains/ (1 files)

| File | Description |
|------|-------------|
| `sap_hana_sparql_qa_chain.mdx` | Question Answering with `HanaSparqlQAChain`: To use this feature, install the @sap/hana-langchain package and its peer dependencies: |

### javascript/integrations/chat/ (25 files)

| File | Description |
|------|-------------|
| `TEMPLATE.mdx` | (MODULE_NAME) integration: Integrate with the (MODULE_NAME) chat model using LangChain JavaScript. |
| `anthropic.mdx` | ChatAnthropic integration: Integrate with the ChatAnthropic chat model using LangChain JavaScript. |
| `azure.mdx` | AzureChatOpenAI integration: Integrate with the AzureChatOpenAI chat model using LangChain JavaScript. |
| `baidu_qianfan.mdx` | ChatBaiduQianfan integration: Integrate with the ChatBaiduQianfan chat model using LangChain JavaScript. |
| `bedrock_converse.mdx` | ChatBedrockConverse integration: Integrate with the ChatBedrockConverse chat model using LangChain JavaScript. |
| `cerebras.mdx` | ChatCerebras integration: Integrate with the ChatCerebras chat model using LangChain JavaScript. |
| `cloudflare_workersai.mdx` | ChatCloudflareWorkersAI integration: Integrate with the ChatCloudflareWorkersAI chat model using LangChain |
| `cohere.mdx` | ChatCohere integration: Integrate with the ChatCohere chat model using LangChain JavaScript. |
| `deepseek.mdx` | ChatDeepSeek integration: Integrate with the ChatDeepSeek chat model using LangChain JavaScript. |
| `fake.mdx` | Fake integration: Integrate with the Fake chat model using LangChain JavaScript. |
| `fireworks.mdx` | ChatFireworks integration: Integrate with the ChatFireworks chat model using LangChain JavaScript. |
| `google.mdx` | ChatGoogle integration: Integrate with the ChatGoogle chat model using LangChain JavaScript. |
| `google_generative_ai.mdx` | ChatGoogleGenerativeAI integration: Integrate with the ChatGoogleGenerativeAI chat model using LangChain |
| `google_vertex_ai.mdx` | ChatVertexAI integration: Integrate with the ChatVertexAI chat model using LangChain JavaScript. |
| `groq.mdx` | ChatGroq integration: Integrate with the ChatGroq chat model using LangChain JavaScript. |
| `ibm.mdx` | IBM watsonx.ai integration: Integrate with the IBM watsonx.ai chat model using LangChain JavaScript. |
| `index.mdx` | Chat model integrations: Integrate with chat models using LangChain JavaScript. |
| `mistral.mdx` | ChatMistralAI integration: Integrate with the ChatMistralAI chat model using LangChain JavaScript. |
| `ollama.mdx` | ChatOllama integration: Integrate with the ChatOllama chat model using LangChain JavaScript. |
| `openai.mdx` | ChatOpenAI integration: Integrate with the ChatOpenAI chat model using LangChain JavaScript. |
| `openrouter.mdx` | ChatOpenRouter integration: Integrate with the ChatOpenRouter chat model using LangChain JavaScript. |
| `perplexity.mdx` | ChatPerplexity integration: Integrate with the ChatPerplexity chat model using LangChain JavaScript. |
| `togetherai.mdx` | ChatTogetherAI integration: Integrate with the ChatTogetherAI chat model using LangChain JavaScript. |
| `xai.mdx` | ChatXAI integration: Integrate with the ChatXAI chat model using LangChain JavaScript. |
| `yandex.mdx` | ChatYandexGPT integration: Integrate with the ChatYandexGPT chat model using LangChain JavaScript. |

### javascript/integrations/decision_models/ (1 files)

| File | Description |
|------|-------------|
| `openai.mdx` | OpenAI Decisions integration: Integrate with the OpenAIDecisions decision model using LangChain JavaScript. |

### javascript/integrations/document_compressors/ (3 files)

| File | Description |
|------|-------------|
| `cohere_rerank.mdx` | Cohere rerank integration: Integrate with the Cohere rerank document compressor using LangChain |
| `ibm.mdx` | IBM watsonx.ai integration: Integrate with the IBM watsonx.ai document compressor using LangChain |
| `mixedbread_ai.mdx` | Mixedbread AI reranking integration: Integrate with the Mixedbread AI reranking document compressor using |

### javascript/integrations/document_loaders/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Document loader integrations: Integrate with document loaders using LangChain JavaScript. |

### javascript/integrations/document_loaders/file_loaders/ (7 files)

| File | Description |
|------|-------------|
| `directory.mdx` | DirectoryLoader integration: Integrate with the DirectoryLoader document loader using LangChain JavaScript. |
| `index.mdx` | File loader integrations: Integrate with file loaders using LangChain JavaScript. |
| `json.mdx` | JSON files integration: Integrate with the JSON files document loader using LangChain JavaScript. |
| `jsonlines.mdx` | Jsonlines files - integration: Integrate with the Jsonlines files - document loader using LangChain JavaScript. |
| `multi_file.mdx` | Multiple individual files - integration: Integrate with the Multiple individual files - document loader using LangChain JavaScript. |
| `oracleai.mdx` | OracleDocLoader integration: Integrate with the OracleDocLoader document loader using LangChain JavaScript. |
| `text.mdx` | TextLoader integration: Integrate with the TextLoader document loader using LangChain JavaScript. |

### javascript/integrations/document_loaders/web_loaders/ (4 files)

| File | Description |
|------|-------------|
| `google_cloudsql_pg.mdx` | Google cloud SQL for postgresql integration: Integrate with the Google cloud SQL for postgresql document loader using |
| `index.mdx` | Web loader integrations: Integrate with web loaders using LangChain JavaScript. |
| `langsmith.mdx` | LangSmithLoader integration: Integrate with the LangSmithLoader document loader using LangChain JavaScript. |
| `soniox.mdx` | Soniox: Get started using the Soniox audio transcription loader in LangChain. |

### javascript/integrations/document_transformers/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | Document transformer integrations: Integrate with document transformers using LangChain JavaScript. |
| `openai_metadata_tagger.mdx` | OpenAI functions metadata tagger - integration: Integrate with the OpenAI functions metadata tagger - document transformer using LangChain JavaScript. |

### javascript/integrations/embeddings/ (20 files)

| File | Description |
|------|-------------|
| `azure_openai.mdx` | AzureOpenAIEmbeddings integration: Integrate with the AzureOpenAIEmbeddings embedding model using LangChain |
| `baidu_qianfan.mdx` | Baidu qianfan integration: Integrate with the Baidu qianfan embedding model using LangChain JavaScript. |
| `bedrock.mdx` | BedrockEmbeddings integration: Integrate with the BedrockEmbeddings embedding model using LangChain |
| `cloudflare_ai.mdx` | CloudflareWorkersAIEmbeddings integration: Integrate with the CloudflareWorkersAIEmbeddings embedding model using |
| `cohere.mdx` | CohereEmbeddings integration: Integrate with the CohereEmbeddings embedding model using LangChain JavaScript. |
| `fireworks.mdx` | FireworksEmbeddings integration: Integrate with the FireworksEmbeddings embedding model using LangChain |
| `google_generative_ai.mdx` | GoogleGenerativeAIEmbeddings integration: Integrate with the GoogleGenerativeAIEmbeddings embedding model using |
| `google_vertex_ai.mdx` | VertexAIEmbeddings integration: Integrate with the VertexAIEmbeddings embedding model using LangChain |
| `ibm.mdx` | IBM watsonx.ai integration: Integrate with the IBM watsonx.ai embedding model using LangChain JavaScript. |
| `index.mdx` | Embedding model integrations: Integrate with embedding models using LangChain JavaScript. |
| `minimax.mdx` | Minimax integration: Integrate with the Minimax embedding model using LangChain JavaScript. |
| `mistralai.mdx` | MistralAIEmbeddings integration: Integrate with the MistralAIEmbeddings embedding model using LangChain |
| `mixedbread_ai.mdx` | Mixedbread AI integration: Integrate with the Mixedbread AI embedding model using LangChain JavaScript. |
| `nomic.mdx` | Nomic integration: Integrate with the Nomic embedding model using LangChain JavaScript. |
| `ollama.mdx` | OllamaEmbeddings integration: Integrate with the OllamaEmbeddings embedding model using LangChain JavaScript. |
| `openai.mdx` | OpenAIEmbeddings integration: Integrate with the OpenAIEmbeddings embedding model using LangChain JavaScript. |
| `oracleai.mdx` | OracleEmbeddings integration: Integrate with the OracleEmbeddings embedding model using LangChain JavaScript. |
| `pinecone.mdx` | PineconeEmbeddings integration: Integrate with the PineconeEmbeddings embedding model using LangChain |
| `togetherai.mdx` | TogetherAIEmbeddings integration: Integrate with the TogetherAIEmbeddings embedding model using LangChain |
| `voyageai.mdx` | VoyageEmbeddings integration: Integrate with the VoyageEmbeddings embedding model using LangChain JavaScript. |

### javascript/integrations/graphs/ (1 files)

| File | Description |
|------|-------------|
| `sap_hana_rdf_graph.mdx` | SAP HANA Cloud Knowledge Graph is a fully integrated knowledge graph solution within the SAP HANA Cloud database. |

### javascript/integrations/llm_caching/ (2 files)

| File | Description |
|------|-------------|
| `azure_cosmosdb_nosql.mdx` | Azure Cosmos DB NoSQL semantic integration: Integrate with the Azure Cosmos DB NoSQL semantic cache using LangChain |
| `index.mdx` | Cache integrations: Integrate with caches using LangChain JavaScript. |

### javascript/integrations/llms/ (13 files)

| File | Description |
|------|-------------|
| `azure.mdx` | Azure OpenAI integration: Integrate with the Azure OpenAI LLM using LangChain JavaScript. |
| `cloudflare_workersai.mdx` | CloudflareWorkersAI integration: Integrate with the CloudflareWorkersAI LLM using LangChain JavaScript. |
| `cohere.mdx` | Cohere integration: Integrate with the Cohere LLM using LangChain JavaScript. |
| `fireworks.mdx` | Fireworks integration: Integrate with the Fireworks LLM using LangChain JavaScript. |
| `google_vertex_ai.mdx` | Gemini Enterprise Agent Platform integration: Integrate with the Gemini Enterprise Agent Platform LLM using LangChain JavaScript. |
| `ibm.mdx` | IBM watsonx.ai integration: Integrate with the IBM watsonx.ai LLM using LangChain JavaScript. |
| `index.mdx` | LLM integrations: Integrate with LLMs using LangChain JavaScript. |
| `jigsawstack.mdx` | Jigsawstack prompt engine integration: Integrate with the Jigsawstack prompt engine LLM using LangChain JavaScript. |
| `mistral.mdx` | MistralAI integration: Integrate with the MistralAI LLM using LangChain JavaScript. |
| `ollama.mdx` | Ollama integration: Integrate with the Ollama LLM using LangChain JavaScript. |
| `openai.mdx` | OpenAI integration: Integrate with the OpenAI LLM using LangChain JavaScript. |
| `together.mdx` | TogetherAI integration: Integrate with the TogetherAI LLM using LangChain JavaScript. |
| `yandex.mdx` | Yandexgpt integration: Integrate with the Yandexgpt LLM using LangChain JavaScript. |

### javascript/integrations/long-term-memory/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Store integrations: Integrate with store backends for LangGraph long-term memory. |

### javascript/integrations/memory/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | Memory integrations: Persist short-term and long-term agent memory with LangGraph checkpointers and stores. |
| `mongodb-long-term-memory.mdx` | Long-term memory with MongoDB Atlas: Persist agent long-term memory with MongoDBStore and MongoDB Atlas. |
| `mongodb-short-term-memory.mdx` | Short-term memory with MongoDB Atlas: Persist agent short-term memory with MongoDBSaver and MongoDB Atlas. |

### javascript/integrations/middleware/ (3 files)

| File | Description |
|------|-------------|
| `anthropic.mdx` | Anthropic integration: Integrate with the Anthropic middleware using LangChain JavaScript. |
| `aws.mdx` | AWS middleware integration: Integrate with AWS middleware using LangChain JavaScript. |
| `index.mdx` | Middleware integrations: Integrate with middleware using LangChain JavaScript. |

### javascript/integrations/providers/ (18 files)

| File | Description |
|------|-------------|
| `all_providers.mdx` | Browse the complete collection of integrations available for JavaScript/TypeScript. LangChain.js offers hundreds of integrations across providers,... |
| `anthropic.mdx` | Anthropic integrations: Integrate with Anthropic using LangChain JavaScript. |
| `aws.mdx` | AWS integrations: Integrate with AWS using LangChain JavaScript. |
| `daytona.mdx` | Daytona: Use Daytona sandbox backends with deepagents for isolated code execution with fast cold starts |
| `deno.mdx` | Deno: Use Deno sandbox backends with deepagents for isolated code execution in Linux microVMs |
| `google.mdx` | Google integrations: Integrate with Google using LangChain JavaScript. |
| `microsoft.mdx` | Microsoft integrations: Integrate with Microsoft using LangChain JavaScript. |
| `modal.mdx` | Modal: Use Modal sandbox backends with deepagents for isolated code execution with GPU support |
| `node-vfs.mdx` | Node VFS: Use the Node.js VFS sandbox backend with deepagents for local development and testing |
| `openai.mdx` | OpenAI integrations: Integrate with OpenAI using LangChain JavaScript. |
| `openrouter.mdx` | OpenRouter integrations: Access models from multiple providers through OpenRouter's unified API using LangChain JavaScript. |
| `overview.mdx` | LangChain JavaScript integrations: Integrate with providers using LangChain JavaScript/TypeScript. |
| `perplexity.mdx` | Perplexity integrations: Integrate with Perplexity using LangChain JavaScript. |
| `sap.mdx` | Sap integrations: Integrate with Sap using LangChain Python. |
| `sourcey.mdx` | Sourcey integrations: Retrieve from published Sourcey docs sites using LangChain JavaScript. |
| `supadata.mdx` | This page covers how to use the Supadata ecosystem within LangChain. It allows you to load data from YouTube, TikTok, and other platforms. |
| `tavily.mdx` | Tavily integrations: Integrate with Tavily using LangChain JavaScript. |
| `typesafe.mdx` | TypeSafe integrations: Integrate with TypeSafe using LangChain |

### javascript/integrations/retrievers/ (8 files)

| File | Description |
|------|-------------|
| `bedrock-knowledge-bases.mdx` | Knowledge bases for Amazon Bedrock integration: Integrate with the Knowledge bases for Amazon Bedrock retriever using |
| `exa.mdx` | ExaRetriever integration: Integrate with the ExaRetriever retriever using LangChain JavaScript. |
| `hyde.mdx` | Hyde integration: Integrate with the Hyde retriever using LangChain JavaScript. |
| `index.mdx` | Retriever integrations: Integrate with retrievers using LangChain JavaScript. |
| `kendra-retriever.mdx` | AWSKendraRetriever integration: Integrate with the AWSKendraRetriever retriever using LangChain JavaScript. |
| `perplexity_search.mdx` | PerplexitySearchRetriever integration: Integrate with the PerplexitySearchRetriever retriever using LangChain |
| `sourcey.mdx` | SourceyRetriever integration: Integrate with the SourceyRetriever retriever using LangChain JavaScript. |
| `time-weighted-retriever.mdx` | Time-weighted integration: Integrate with the Time-weighted retriever using LangChain JavaScript. |

### javascript/integrations/retrievers/self_query/ (1 files)

| File | Description |
|------|-------------|
| `hanavector_self_query.mdx` | Self Querying with SAP HANA Cloud Vector Engine: For setup details of the SAP HANA vector store, see the guide at Vector Store: SAP HANA. |

### javascript/integrations/sandboxes/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Sandbox integrations: Integrate with sandbox providers using LangChain JavaScript. |

### javascript/integrations/stores/ (3 files)

| File | Description |
|------|-------------|
| `file_system.mdx` | LocalFileStore integration: Integrate with the LocalFileStore store using LangChain JavaScript. |
| `in_memory.mdx` | InMemoryStore integration: Integrate with the InMemoryStore store using LangChain JavaScript. |
| `index.mdx` | Store integrations: Integrate with stores using LangChain JavaScript. |

### javascript/integrations/tools/ (29 files)

| File | Description |
|------|-------------|
| `anthropic.mdx` | Anthropic integration: Integrate with the Anthropic tool using LangChain JavaScript. |
| `azure_dynamic_sessions.mdx` | Azure container apps dynamic sessions integration: Integrate with the Azure container apps dynamic sessions tool using LangChain |
| `clicksend.mdx` | ClickSend integration: Send SMS, Email, and Voice messages from LangChain agents using ClickSend's communications platform. |
| `composio.mdx` | Access 500+ tools and integrations through Composio's unified API platform for AI agents, with OAuth handling, event-driven workflows, and... |
| `dalle.mdx` | Dall-e integration: Integrate with the Dall-e tool using LangChain JavaScript. |
| `decodo.mdx` | Decodo integration: Integrate with the Decodo tool using LangChain JavaScript. |
| `exa_search.mdx` | ExaSearchResults integration: Integrate with the ExaSearchResults tool using LangChain JavaScript. |
| `falkordb.mdx` | Use FalkorDB's ultra-fast graph database with LangChain for natural language queries over knowledge graphs using Cypher |
| `google.mdx` | Google integration: Integrate with Google Gemini tools using LangChain JavaScript. |
| `ibm.mdx` | WatsonxToolkit integration: Integrate with the WatsonxToolkit tool using LangChain JavaScript. |
| `index.mdx` | Tool integrations: Integrate with tools using LangChain JavaScript. |
| `jigsawstack.mdx` | Jigsawstack integration: Integrate with the Jigsawstack tool using LangChain JavaScript. |
| `json.mdx` | JSON agent toolkit integration: Integrate with the JSON agent toolkit using LangChain JavaScript. |
| `lambda_agent.mdx` | Agent with AWS lambda integration: Integrate with the Agent with AWS lambda tool using LangChain JavaScript. |
| `mcp_toolbox.mdx` | Mcp toolbox for databases integration: Integrate with the Mcp toolbox for databases tool using LangChain JavaScript. |
| `nia.mdx` | Nia Toolkit integration: Integrate with the Nia search and index API using LangChain JavaScript. |
| `openai.mdx` | OpenAI integration: Integrate with the OpenAI tool using LangChain JavaScript. |
| `openapi.mdx` | OpenAPI toolkit integration: Integrate with the OpenAPI toolkit using LangChain JavaScript. |
| `oracleai.mdx` | OracleSummary integration: Integrate with the OracleSummary tool using LangChain JavaScript. |
| `perplexity_search.mdx` | PerplexitySearchResults integration: Integrate with the PerplexitySearchResults tool using LangChain JavaScript. |
| `sql.mdx` | SQLToolkit integration: Integrate with the SQLToolkit tool using LangChain JavaScript. |
| `tavily_crawl.mdx` | Tavily crawl integration: Integrate with the Tavily crawl tool using LangChain JavaScript. |
| `tavily_extract.mdx` | Tavily extract integration: Integrate with the Tavily extract tool using LangChain JavaScript. |
| `tavily_get_research.mdx` | Tavily get research integration: Integrate with the Tavily get research tool using LangChain JavaScript. |
| `tavily_map.mdx` | Tavily map integration: Integrate with the Tavily map tool using LangChain JavaScript. |
| `tavily_research.mdx` | Tavily research integration: Integrate with the Tavily research tool using LangChain JavaScript. |
| `tavily_search.mdx` | Tavily search integration: Integrate with the Tavily search tool using LangChain JavaScript. |
| `vectorstore.mdx` | VectorStoreToolkit integration: Integrate with the VectorStoreToolkit tool using LangChain JavaScript. |
| `webbrowser.mdx` | Web browser integration: Integrate with the Web browser tool using LangChain JavaScript. |

### javascript/integrations/vectorstores/ (18 files)

| File | Description |
|------|-------------|
| `azure_cosmosdb_mongodb.mdx` | Azure Cosmos DB for MongoDB vCore (deprecated): Integrate with the Azure Cosmos DB for MongoDB vcore vector store using |
| `azure_cosmosdb_nosql.mdx` | Azure Cosmos DB for NoSQL integration: Integrate with the Azure Cosmos DB for NoSQL vector store using LangChain |
| `azure_documentdb.mdx` | Azure DocumentDB: Vector store integration for Azure DocumentDB |
| `cloudflare_vectorize.mdx` | Cloudflare vectorize integration: Integrate with the Cloudflare vectorize vector store using LangChain |
| `google_cloudsql_pg.mdx` | Google cloud SQL for postgresql integration: Integrate with the Google cloud SQL for postgresql vector store using |
| `index.mdx` | Vector store integrations: Integrate with vector stores using LangChain JavaScript. |
| `memory.mdx` | MemoryVectorStore integration: Integrate with the MemoryVectorStore using LangChain JavaScript. |
| `mongodb_atlas.mdx` | MongoDB Atlas integration: Integrate with the MongoDB Atlas vector store using LangChain JavaScript. |
| `neo4jvector.mdx` | Neo4j vector index integration: Integrate with the Neo4j vector index vector store using LangChain JavaScript. |
| `oracleai.mdx` | OracleVS integration: Integrate with the OracleVS vector store using LangChain JavaScript. |
| `pgvector.mdx` | PGVectorStore integration: Integrate with the PGVectorStore using LangChain JavaScript. |
| `pinecone.mdx` | PineconeStore integration: Integrate with the PineconeStore using LangChain JavaScript. |
| `qdrant.mdx` | QdrantVectorStore integration: Integrate with the QdrantVectorStore using LangChain JavaScript. |
| `redis.mdx` | RedisVectorStore integration: Integrate with FluentRedisVectorStore and RedisVectorStore using LangChain JavaScript. |
| `sap_hanavector.mdx` | SAP HANA Cloud Vector Engine is a vector store fully integrated into the SAP HANA Cloud database. |
| `turbopuffer.mdx` | TurbopufferVectorStore integration: Integrate with the TurbopufferVectorStore using LangChain JavaScript. |
| `weaviate.mdx` | WeaviateStore integration: Integrate with the WeaviateStore using LangChain JavaScript. |
| `ydb.mdx` | YDB integration: Integrate with the YDBVectorStore vector store using LangChain JavaScript. |

### javascript/langchain/ (1 files)

| File | Description |
|------|-------------|
| `mcp-v1.mdx` | Model Context Protocol (MCP) with @langchain/mcp-adapters 1.x: Documentation for @langchain/mcp-adapters 1.x. |

### javascript/migrate/ (3 files)

| File | Description |
|------|-------------|
| `langchain-mcp-adapters.mdx` | Upgrade from @langchain/mcp-adapters 1.x to 2.0, covering renamed APIs, stricter configuration, authentication, elicitation, and tool result changes. |
| `langchain-v1.mdx` | LangChain v1 migration guide: description="Migrate a codebase to LangChain v1." |
| `langgraph-v1.mdx` | LangGraph v1 migration guide: description="Migrate a codebase to LangGraph v1." |

### javascript/releases/ (2 files)

| File | Description |
|------|-------------|
| `langchain-v1.mdx` | A new standard way to build agents in LangChain, replacing createReactAgent from LangGraph with a cleaner, more powerful API. |
| `langgraph-v1.mdx` | It's designed to work hand-in-hand with LangChain v1 (whose createAgent is built on LangGraph) so you can start high-level and drop down to... |

### langchain/ (27 files)

| File | Description |
|------|-------------|
| `agents.mdx` | Build a LangChain agent: a model calling tools in a loop until a task is complete, shaped by a harness of prompt, tools, and middleware. |
| `component-architecture.mdx` | LangChain's power comes from how its components work together to create sophisticated AI applications. This page provides diagrams showcasing the... |
| `context-engineering.mdx` | The hard part of building agents (or any LLM application) is making them reliable enough. While they may work for a prototype, they often fail in... |
| `deep-agent-from-scratch.mdx` | Build a data analysis agent from scratch: Build a data analysis agent step by step using create_agent and Deep Agents middleware. |
| `deploy.mdx` | Deployment: Deploy LangChain agents to production with LangSmith Cloud or JavaScript frameworks and hosting platforms. |
| `event-streaming.mdx` | Event streaming: Stream real-time updates from LangChain agent runs |
| `get-help.mdx` | Connect with the LangChain community, access learning resources, and get the support you need to build with confidence. |
| `guardrails.mdx` | Guardrails: Implement safety checks and content filtering for your agents |
| `human-in-the-loop.mdx` | Human-in-the-loop: The Human-in-the-Loop (HITL) middleware lets you add human oversight to agent tool calls. |
| `install.mdx` | Install LangChain: Install the LangChain package and the independent provider packages for the models and integrations you use. |
| `knowledge-base.mdx` | Build a semantic search engine over a PDF with LangChain embeddings and vector stores. Use it to retrieve passages similar to a query, then plug... |
| `long-term-memory.mdx` | Long-term memory: Add long-term memory to LangChain agents to store and recall data across conversations and sessions |
| `messages.mdx` | Messages: /* TODO: section on metadata types (response and usage) */ |
| `models.mdx` | Initialize and configure chat models, the reasoning engine of LangChain agents, with support for tool calling, structured output, and multimodal... |
| `observability.mdx` | As you build and run agents with LangChain, you need visibility into how they behave: which tools they call, what prompts they generate, and how... |
| `overview.mdx` | LangChain provides create_agent: a minimal, highly configurable agent harness. Compose exactly the agent your use case needs from model, tools,... |
| `philosophy.mdx` | LangChain exists to be the easiest place to start building with LLMs, while also being flexible and production-ready. |
| `quickstart.mdx` | Quickstart: Build your first agent in minutes |
| `runtime.mdx` | Runtime: LangChain's @[create_agent] runs on LangGraph's runtime under the hood. |
| `short-term-memory.mdx` | Memory is a system that remembers information about previous interactions. For AI agents, memory is crucial because it lets them remember previous... |
| `sql-agent.mdx` | In this tutorial, you will learn how to build an agent that can answer questions about a SQL database using LangChain agents. |
| `streaming.mdx` | Streaming: Stream real-time updates from agent runs |
| `structured-output.mdx` | Structured output allows agents to return data in a specific, predictable format. Instead of parsing natural language responses, you get... |
| `studio.mdx` | LangSmith Studio: For more information about deployed agents, see Deployment. |
| `tools.mdx` | Define tools that let LangChain agents fetch real-time data, execute code, query external databases, and take actions. |
| `ui.mdx` | Agent Chat UI can connect to both local and deployed agents. |
| `voice-agent.mdx` | Chat interfaces have dominated how we interact with AI, but recent breakthroughs in multimodal AI are opening up exciting new possibilities.... |

### langchain/errors/ (7 files)

| File | Description |
|------|-------------|
| `INVALID_PROMPT_INPUT.mdx` | INVALID_PROMPT_INPUT: /* TODO: fix link when porting page */ |
| `INVALID_TOOL_RESULTS.mdx` | INVALID_TOOL_RESULTS: Currently only used in langchainjs (JavaScript/TypeScript). |
| `MESSAGE_COERCION_FAILURE.mdx` | MESSAGE_COERCION_FAILURE: This error occurs when message objects don't conform to the expected format. |
| `MODEL_AUTHENTICATION.mdx` | MODEL_AUTHENTICATION: Currently only used in langchainjs (JavaScript/TypeScript). |
| `MODEL_NOT_FOUND.mdx` | MODEL_NOT_FOUND: Currently only used in langchainjs (JavaScript/TypeScript). |
| `MODEL_RATE_LIMIT.mdx` | MODEL_RATE_LIMIT: Currently only used in langchainjs (JavaScript/TypeScript). |
| `OUTPUT_PARSING_FAILURE.mdx` | OUTPUT_PARSING_FAILURE: An output parser was unable to handle model output as expected. |

### langchain/frontend/ (15 files)

| File | Description |
|------|-------------|
| `branching-chat.mdx` | Branching chat: Edit messages and regenerate responses by forking from checkpoints |
| `controlled-generative-ui.mdx` | Render agent output with components you author using components as tools, tool-call rendering, state rendering, and reasoning |
| `declarative-generative-ui.mdx` | Declarative generative UI: Compose agent-generated interfaces from a registered component catalog using json-render and A2UI |
| `generative-ui-overview.mdx` | Generative UI overview: Understand the generative UI spectrum from controlled to declarative to open-ended interfaces |
| `headless-tools.mdx` | Headless tools: Run browser and device APIs on the client with headless tool implementations |
| `human-in-the-loop.mdx` | Human-in-the-Loop: Add approval workflows with interrupt-based human review |
| `join-rejoin.mdx` | Join & rejoin streams: Disconnect from and reconnect to running agent streams |
| `markdown-messages.mdx` | Markdown messages: Render LLM responses as rich, formatted markdown with proper streaming support |
| `message-queues.mdx` | Message queues: Queue multiple messages and manage them while the agent processes sequentially |
| `open-ended-generative-ui.mdx` | Render UI created outside your application, such as sandboxed MCP Apps, at the open end of the generative UI spectrum |
| `overview.mdx` | Overview: Build generative UIs with real-time streaming from LangChain agents |
| `reasoning-tokens.mdx` | Reasoning tokens: Display model thinking and reasoning processes in collapsible blocks |
| `structured-output.mdx` | Structured output: Render structured agent responses with custom UI components instead of plain text |
| `time-travel.mdx` | Time travel: Inspect, navigate, and resume from any checkpoint in the conversation history |
| `tool-calling.mdx` | Tool calling: Display agent tool calls with rich, type-safe UI cards |

### langchain/frontend/integrations/ (5 files)

| File | Description |
|------|-------------|
| `ai-elements.mdx` | AI Elements: Composable shadcn/ui-based components for AI chat interfaces with useStream |
| `assistant-ui.mdx` | assistant-ui: Headless React AI chat framework with a full runtime layer, bridged to useStream |
| `copilotkit.mdx` | Use CopilotKit with LangGraph, Deep Agents, and React with custom endpoints, the Python AG-UI bridge, structured generative UI, and... |
| `openui.mdx` | OpenUI: Generate complete, interactive dashboards and reports using the OpenUI component library and openui-lang |
| `overview.mdx` | Overview: Connect useStream to any React UI component library or generative UI framework |

### langchain/mcp/ (4 files)

| File | Description |
|------|-------------|
| `auth.mdx` | Authentication: Authenticate MCP connections with bearer tokens, OAuth 2.1, or per-user credentials in LangChain. |
| `connections.mdx` | Connections: Connection lifecycle, multiple servers, deployment scaling, protocol eras, and caching for MCP in LangChain. |
| `index.mdx` | Model Context Protocol (MCP): Connect LangChain agents to MCP servers with MCPAdapter. |
| `tools.mdx` | Tools: Load MCP tools into LangChain agents, control their execution, and handle server results and requests. |

### langchain/middleware/ (3 files)

| File | Description |
|------|-------------|
| `built-in.mdx` | Prebuilt middleware for common agent use cases |
| `custom.mdx` | Custom middleware: Build custom middleware by implementing hooks that run at specific points in the agent execution flow. |
| `overview.mdx` | Middleware overview: Control and customize agent execution at every step |

### langchain/multi-agent/ (10 files)

| File | Description |
|------|-------------|
| `custom-workflow.mdx` | In the **custom workflow** architecture, you define your own bespoke execution flow using LangGraph. You have complete control over the graph... |
| `handoffs-customer-support.mdx` | The state machine pattern describes workflows where an agent's behavior changes as it moves through different states of a task. This tutorial... |
| `handoffs.mdx` | In the **handoffs** architecture, behavior changes dynamically based on state. The core mechanism: tools update a state variable (e.g.,... |
| `index.mdx` | Multi-agent systems coordinate specialized components to tackle complex workflows. However, not every complex task requires this approach—a single... |
| `router-knowledge-base.mdx` | The **router pattern** is a multi-agent architecture where a routing step classifies input and directs it to specialized agents, with results... |
| `router.mdx` | In the **router** architecture, a routing step classifies input and directs it to specialized agents. This is useful when you have distinct... |
| `skills-sql-assistant.mdx` | This tutorial shows how to use **progressive disclosure** - a context management technique where the agent loads information on-demand rather than... |
| `skills.mdx` | In the **skills** architecture, specialized capabilities are packaged as invocable "skills" that augment an agent's behavior. Skills are primarily... |
| `subagents-personal-assistant.mdx` | The **supervisor pattern** is a multi-agent architecture where a central supervisor agent coordinates specialized worker agents. This approach... |
| `subagents.mdx` | In the **subagents** architecture, a central main agent (often referred to as a **supervisor**) coordinates subagents by calling them as tools.... |

### langgraph/ (34 files)

| File | Description |
|------|-------------|
| `add-memory.mdx` | AI applications need memory to share context across multiple interactions. In LangGraph, you can add two types of memory: |
| `agentic-rag.mdx` | Build a custom RAG agent with LangGraph: Build a custom retrieval agent with LangGraph that decides when to search a vector store or respond directly. |
| `application-structure.mdx` | A LangGraph application consists of one or more graphs, a configuration file (langgraph.json), a file that specifies dependencies, and an optional... |
| `backward-compatibility.mdx` | Backward compatibility: Update LangGraph graph code in production without breaking in-flight runs. |
| `case-studies.mdx` | This list of companies using LangGraph and their success stories is compiled from public sources. If your company uses LangGraph, we'd love for... |
| `checkpointers.mdx` | LangGraph checkpointers save graph state as checkpoints at each step, enabling persistence, human-in-the-loop, and fault-tolerant execution. |
| `deploy.mdx` | Deployment: Deploy LangGraph agents to production with LangSmith Cloud or JavaScript frameworks and hosting platforms. |
| `event-streaming.mdx` | Event streaming: Stream LangGraph runs with typed projections for messages, state, subgraphs, output, and extensions. |
| `fault-tolerance.mdx` | Fault tolerance: Configure per-node timeouts, retries, error handlers, and recovery strategies in LangGraph. |
| `functional-api.mdx` | Wrap other frameworks with entrypoints and tasks for LangSmith Deployment. Covers checkpointing, resume rules, and common pitfalls. |
| `graph-api-control-flow.mdx` | Build sequences, branches, and loops: Compose sequences, parallel branches, conditional edges, and loops with the LangGraph Graph API. |
| `graph-api-nodes.mdx` | Add runtime configuration, retry policies, timeouts, error handling, defaults, and caching to LangGraph nodes. |
| `graph-api-send-command.mdx` | Use Send and Command: Build map-reduce workflows with Send and combine state updates with routing using Command in LangGraph. |
| `graph-api-state.mdx` | Define and update state: Define graph state schemas, reducers, messages, and private state in the LangGraph Graph API. |
| `graph-api-visualize.mdx` | Visualize your graph: Render LangGraph graphs as Mermaid diagrams or PNG images for debugging and documentation. |
| `graph-api.mdx` | Graph API overview: Learn how LangGraph models agent workflows as graphs of shared state, nodes, and edges. |
| `interrupts.mdx` | Interrupts allow you to pause graph execution at specific points and wait for external input before continuing. This enables human-in-the-loop... |
| `local-server.mdx` | Run a local server: This guide shows you how to run a LangGraph agent locally. |
| `observability.mdx` | Traces are a series of steps that your agent takes to go from input to output. Each of these individual steps is represented by a run. You can use... |
| `overview.mdx` | LangGraph overview: Low-level orchestration framework and runtime for long-running, stateful agents |
| `persistence.mdx` | LangGraph's persistence layer gives agents short-term memory through checkpointers and long-term memory through stores. |
| `pregel.mdx` | LangGraph runtime: @[Pregel] implements LangGraph's runtime, managing the execution of LangGraph applications. |
| `quickstart.mdx` | Quickstart: This quickstart demonstrates how to build a calculator agent with the LangGraph Graph API. |
| `sql-agent.mdx` | Build a custom SQL agent: In this tutorial we will build a custom agent that can answer questions about a SQL database using LangGraph. |
| `stores.mdx` | Stores: LangGraph stores provide cross-thread long-term memory, complementing per-thread checkpointer persistence. |
| `streaming.mdx` | For new applications, we recommend event streaming—the typed-projection API introduced in LangGraph v1.2. Event streaming gives you separate... |
| `studio.mdx` | When building agents with LangChain locally, it's helpful to visualize what's happening inside your agent, interact with it in real-time, and... |
| `test.mdx` | After you've prototyped your LangGraph agent, a natural next step is to add tests. This guide covers some useful patterns you can use when writing... |
| `thinking-in-graph-api.mdx` | Thinking in the Graph API: Learn how to design agents with the LangGraph Graph API using nodes, edges, and shared state. |
| `ui.mdx` | Agent Chat UI can connect to both local and deployed agents. |
| `use-graph-api.mdx` | Build checklist for the Graph API: Decide state, control flow, Send, Command, and node options as you build with the Graph API. |
| `use-subgraphs.mdx` | This guide explains the mechanics of using subgraphs. A subgraph is a graph that is used as a node in another graph. |
| `use-time-travel.mdx` | Use time-travel: Replay past executions and fork to explore alternative paths in LangGraph |
| `workflows-agents.mdx` | Workflows and agents: This guide reviews common workflow and agent patterns. |

### langgraph/errors/ (6 files)

| File | Description |
|------|-------------|
| `GRAPH_RECURSION_LIMIT.mdx` | GRAPH_RECURSION_LIMIT: Your LangGraph @[StateGraph] reached the maximum number of steps before hitting a stop condition. |
| `INVALID_CHAT_HISTORY.mdx` | This error is raised in the prebuilt @[create_agent] when the call_model graph node receives a malformed list of messages. Specifically, it is... |
| `INVALID_CONCURRENT_GRAPH_UPDATE.mdx` | A LangGraph @[StateGraph] received concurrent updates to its state from multiple nodes to a state property that doesn't |
| `INVALID_GRAPH_NODE_RETURN_VALUE.mdx` | INVALID_GRAPH_NODE_RETURN_VALUE: A LangGraph @[StateGraph] |
| `MISSING_CHECKPOINTER.mdx` | MISSING_CHECKPOINTER: You are attempting to use built-in LangGraph persistence without providing a checkpointer. |
| `MULTIPLE_SUBGRAPHS.mdx` | This error occurs when you call a subgraph inside a node multiple times, and the subgraph is compiled with checkpointer=True (continuations mode). |

### langgraph/frontend/ (3 files)

| File | Description |
|------|-------------|
| `custom-stream-channels.mdx` | Custom stream channels: Stream custom server-side data to the frontend and read it with useExtension and useChannel |
| `graph-execution.mdx` | Graph execution: Visualize multi-step graph pipelines with per-node status and streaming content |
| `overview.md` | Overview: Render LangGraph agents to the frontend |

### openwiki/ (11 files)

| File | Description |
|------|-------------|
| `automate-updates.mdx` | Automate updates: Schedule OpenWiki documentation updates with GitHub Actions, GitLab CI, or Bitbucket Pipelines |
| `cli-reference.mdx` | Command reference: OpenWiki command-line usage, flags, and connector subcommands |
| `code-mode.mdx` | Code mode: Generate and maintain repository documentation for coding agents with OpenWiki |
| `customize.mdx` | Customize OpenWiki: Ignore paths, wiki instructions, agent pointers, and telemetry for OpenWiki |
| `integrations.mdx` | Run OpenWiki inside Codex, Claude Code, GitHub Copilot, OpenCode, Cursor, IBM Bob, Kiro, Oh My Pi, or Antigravity using the host model and tools |
| `overview.mdx` | OpenWiki: CLI that writes and maintains agent wikis so coding agents work faster |
| `personal-mode.mdx` | Personal mode: Build a local personal brain wiki from configured sources with OpenWiki. |
| `providers.mdx` | Model providers: Configure inference providers and credentials for OpenWiki |
| `quickstart.mdx` | Quickstart: Install OpenWiki, configure a model provider, and generate your first wiki. |
| `search-and-link.mdx` | Search and link wikis: Search OpenWiki pages over MCP and group related repository wikis into workspaces |
| `visualize.mdx` | Visualize your wiki: Explore an OpenWiki Markdown wiki with a local interactive node graph and reader |

### python/ (1 files)

| File | Description |
|------|-------------|
| `studio.mdx` | Studio: Develop, run, and debug LangGraph agents in an interactive environment with LangSmith Studio. |

### python/integrations/agents/ (1 files)

| File | Description |
|------|-------------|
| `sap_hana_sparql_qa_agent.mdx` | Question Answering with HanaSparqlQAAgent: Integrate with the HanaSparqlQAAgent type using LangChain Python. |

### python/integrations/caches/ (1 files)

| File | Description |
|------|-------------|
| `redis_llm_caching.mdx` | Redis cache for LangChain integration: Integrate with the Redis cache for LangChain cache using LangChain Python. |

### python/integrations/callbacks/ (3 files)

| File | Description |
|------|-------------|
| `agentsystems_notary.mdx` | AgentSystems Notary: Cryptographically verifiable audit trails for LangChain applications. |
| `google_bigquery.mdx` | Bigquery callback handler integration: Log events from LangChain and LangGraph to Google BigQuery for monitoring, |
| `openinference.mdx` | OpenInference: Trace LangChain and LangGraph applications with OpenInference instrumentation. |

### python/integrations/chains/ (1 files)

| File | Description |
|------|-------------|
| `sap_hana_sparql_qa_chain.mdx` | Question Answering with `HanaSparqlQAChain`: To use this feature, install the langchain-hana package: |

### python/integrations/chat/ (38 files)

| File | Description |
|------|-------------|
| `TEMPLATE.mdx` | (MODULE_NAME) integration: Integrate with the (MODULE_NAME) chat model using LangChain Python. |
| `amazon_nova.mdx` | ChatAmazonNova integration: Integrate with the ChatAmazonNova chat model using LangChain Python. |
| `anthropic.mdx` | ChatAnthropic integration: Integrate with the ChatAnthropic chat model using LangChain Python. |
| `anthropic_functions.mdx` | (Deprecated) experimental Anthropic tools wrapper integration: Integrate with (Deprecated) experimental Anthropic tools wrapper chat |
| `azure_ai.mdx` | Microsoft Foundry Chat Models integration: Integrate with the AzureAIOpenAIApiChatModel chat model using LangChain |
| `azure_chat_openai.mdx` | AzureChatOpenAI integration: Integrate with the AzureChatOpenAI chat model using LangChain Python. |
| `baseten.mdx` | ChatBaseten integration: Integrate with the ChatBaseten chat model using LangChain Python. |
| `bedrock.mdx` | ChatBedrock integration: Integrate with the ChatBedrock chat model using LangChain Python. |
| `cerebras.mdx` | ChatCerebras integration: Integrate with the ChatCerebras chat model using LangChain Python. |
| `cohere.mdx` | ChatCohere integration: Integrate with the Cohere chat model using LangChain Python. |
| `crusoe.mdx` | ChatCrusoe integration: Integrate with the ChatCrusoe chat model using LangChain Python. |
| `databricks.mdx` | ChatDatabricks integration: Integrate with the ChatDatabricks chat model using LangChain Python. |
| `deepseek.mdx` | ChatDeepSeek integration: Integrate with the ChatDeepSeek chat model using LangChain Python. |
| `fireworks.mdx` | ChatFireworks integration: Integrate with the ChatFireworks chat model using LangChain Python. |
| `google_anthropic_vertex.mdx` | ChatAnthropicVertex integration: Integrate with the ChatAnthropicVertex chat model using LangChain Python. |
| `google_generative_ai.mdx` | ChatGoogleGenerativeAI integration: Integrate with the ChatGoogleGenerativeAI chat model using LangChain |
| `google_vertex_ai.mdx` | ChatVertexAI integration: Integrate with the ChatVertexAI chat model using LangChain Python. |
| `groq.mdx` | ChatGroq integration: Integrate with the ChatGroq chat model using LangChain Python. |
| `huggingface.mdx` | ChatHuggingFace integration: Integrate with the ChatHuggingFace chat model using LangChain Python. |
| `ibm_watsonx.mdx` | ChatWatsonx integration: Integrate with the ChatWatsonx chat model using LangChain Python. |
| `index.mdx` | Chat model integrations: Integrate with chat models using LangChain Python. |
| `litellm.mdx` | ChatLiteLLM and ChatLiteLLMRouter integration: Integrate with the ChatLiteLLM and ChatLiteLLMRouter chat model using |
| `mistralai.mdx` | ChatMistralAI integration: Integrate with the ChatMistralAI chat model using LangChain Python. |
| `nvidia_ai_endpoints.mdx` | ChatNVIDIA integration: Integrate with ChatNVIDIA and ChatNVIDIADynamo chat models using LangChain |
| `oci_data_science.mdx` | ChatOCIModelDeployment integration: Integrate with the ChatOCIModelDeployment chat model using LangChain |
| `oci_generative_ai.mdx` | OCI Generative AI Integration for LangChain: Integrate with OCI Generative AI chat models using LangChain Python. |
| `ollama.mdx` | ChatOllama integration: Integrate with the ChatOllama chat model using LangChain Python. |
| `openai.mdx` | ChatOpenAI integration: Integrate with the ChatOpenAI chat model using LangChain Python. |
| `openrouter.mdx` | ChatOpenRouter integration: Integrate with the ChatOpenRouter chat model using LangChain Python. |
| `parallel.mdx` | ChatParallel integration: Integrate with the ChatParallel chat model using LangChain Python. |
| `perplexity.mdx` | ChatPerplexity integration: Integrate with the ChatPerplexity chat model using LangChain Python. |
| `qwen.mdx` | ChatQwen integration: Integrate with the ChatQwen chat model using LangChain Python. |
| `qwq.mdx` | ChatQwQ integration: Integrate with the ChatQwQ chat model using LangChain Python. |
| `sambanova.mdx` | ChatSambanova integration: Integrate with the ChatSambanova chat model using LangChain Python. |
| `together.mdx` | ChatTogether integration: Integrate with the ChatTogether chat model using LangChain Python. |
| `upstage.mdx` | ChatUpstage integration: Integrate with the ChatUpstage chat model using LangChain Python. |
| `vllm.mdx` | vLLM integration: Integrate with the vLLM chat model using LangChain Python. |
| `xai.mdx` | ChatXAI integration: Integrate with the ChatXAI chat model using LangChain Python. |

### python/integrations/chat_message_histories/ (1 files)

| File | Description |
|------|-------------|
| `cockroachdb.mdx` | CockroachDB chat message history: Store chat conversation history in CockroachDB using LangChain Python. |

### python/integrations/checkpointers/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Checkpointer integrations: Integrate with checkpointer backends for LangGraph persistence. |

### python/integrations/decision_models/ (1 files)

| File | Description |
|------|-------------|
| `openai.mdx` | OpenAI Decisions integration: Integrate with the OpenAIDecisions decision model using LangChain Python. |

### python/integrations/document_loaders/ (25 files)

| File | Description |
|------|-------------|
| `astradb.mdx` | AstraDB integration: Integrate with the AstraDB document loader using LangChain Python. |
| `azure_blob_storage.mdx` | Azure blob storage loader integration: Integrate with the Azure blob storage loader document loader using LangChain |
| `docling.mdx` | Docling integration: Integrate with the Docling document loader using LangChain Python. |
| `docugami.mdx` | Docugami integration: Integrate with the Docugami document loader using LangChain Python. |
| `google_alloydb.mdx` | Google alloydb for postgresql integration: Integrate with the Google alloydb for postgresql document loader using |
| `google_bigquery.mdx` | Google bigquery integration: Integrate with the Google bigquery document loader using LangChain Python. |
| `google_bigtable.mdx` | Google bigtable integration: Integrate with the Google bigtable document loader using LangChain Python. |
| `google_classroom.mdx` | Google Classroom integration: Integrate with the Google Classroom document loader using LangChain Python. |
| `google_cloud_sql_mssql.mdx` | Google cloud SQL for SQL server integration: Integrate with the Google cloud SQL for SQL server document loader using |
| `google_cloud_sql_mysql.mdx` | Google cloud SQL for mysql integration: Integrate with the Google cloud SQL for mysql document loader using LangChain |
| `google_cloud_storage_directory.mdx` | Google cloud storage directory integration: Integrate with the Google cloud storage directory document loader using LangChain Python. |
| `google_cloud_storage_file.mdx` | Google cloud storage file integration: Integrate with the Google cloud storage file document loader using LangChain Python. |
| `google_datastore.mdx` | Google firestore in datastore mode integration: Integrate with the Google firestore in datastore mode document loader |
| `google_drive.mdx` | Google drive integration: Integrate with the Google drive document loader using LangChain Python. |
| `google_firestore.mdx` | Google firestore (native mode) integration: Integrate with the Google firestore (native mode) document loader using |
| `google_memorystore_redis.mdx` | Google memorystore for Redis integration: Integrate with the Google memorystore for Redis document loader using |
| `google_spanner.mdx` | Google spanner integration: Integrate with the Google spanner document loader using LangChain Python. |
| `google_speech_to_text.mdx` | Google speech-to-text audio transcripts integration: Integrate with the Google speech-to-text audio transcripts document loader |
| `index.mdx` | Document loader integrations: Integrate with document loaders using LangChain Python. |
| `langsmith.mdx` | LangSmithLoader integration: Integrate with the LangSmithLoader document loader using LangChain Python. |
| `oracleadb_loader.mdx` | Oracle autonomous database integration: Integrate with the Oracle autonomous database document loader using LangChain |
| `oracleai.mdx` | Oracle AI vector search document processing integration: Integrate with the Oracle AI vector search document processing document |
| `powerscale.mdx` | Dell powerscale integration: Integrate with the Dell powerscale document loader using LangChain Python. |
| `unstructured_file.mdx` | Unstructured integration: Integrate with the Unstructured document loader using LangChain Python. |
| `upstage.mdx` | Upstage integration: Integrate with the Upstage document loader using LangChain Python. |

### python/integrations/document_transformers/ (7 files)

| File | Description |
|------|-------------|
| `ai21_semantic_text_splitter.mdx` | AI21SemanticTextSplitter integration: Integrate with the AI21SemanticTextSplitter document transformer using |
| `cross_encoder_reranker.mdx` | Cross encoder reranker integration: Rerank retrieved documents with open-source cross-encoder models using |
| `google_cloud_vertexai_rerank.mdx` | Gemini Enterprise Agent Platform reranker integration: Integrate with the Gemini Enterprise Agent Platform reranker document transformer using LangChain Python. |
| `google_docai.mdx` | Google cloud document AI integration: Integrate with the Google cloud document AI document transformer using LangChain Python. |
| `google_translate.mdx` | Google translate integration: Integrate with the Google translate document transformer using LangChain Python. |
| `localai_rerank.mdx` | Localai reranker integration: Integrate with the Localai reranker document transformer using LangChain |
| `voyageai-reranker.mdx` | VoyageAI by MongoDB reranker integration: Integrate with the VoyageAI by MongoDB reranker document transformer using LangChain Python. |

### python/integrations/embeddings/ (28 files)

| File | Description |
|------|-------------|
| `azure_openai.mdx` | AzureOpenAIEmbeddings integration: Integrate with the AzureOpenAIEmbeddings embedding model using LangChain |
| `baseten.mdx` | BasetenEmbeddings integration: Integrate with the BasetenEmbeddings embedding model using LangChain |
| `bedrock.mdx` | BedrockEmbeddings integration: Integrate with the BedrockEmbeddings embedding model using LangChain Python. |
| `bge_huggingface.mdx` | BGE on Hugging Face integration: Integrate with BGE embedding models on Hugging Face using LangChain Python. |
| `cohere.mdx` | CohereEmbeddings integration: Integrate with the CohereEmbeddings embedding model using LangChain Python. |
| `databricks.mdx` | DatabricksEmbeddings integration: Integrate with the DatabricksEmbeddings embedding model using LangChain |
| `elasticsearch.mdx` | Elasticsearch integration: Integrate with the Elasticsearch embedding model using LangChain Python. |
| `fireworks.mdx` | FireworksEmbeddings integration: Integrate with the FireworksEmbeddings embedding model using LangChain |
| `google_generative_ai.mdx` | GoogleGenerativeAIEmbeddings integration: Integrate with Google Gemini API embedding models using LangChain Python. |
| `google_vertex_ai.mdx` | Gemini Enterprise Agent Platform integration: Integrate with the Gemini Enterprise Agent Platform embedding model using LangChain Python. |
| `huggingfacehub.mdx` | Hugging Face integration: Integrate with Hugging Face embedding models using LangChain Python. |
| `ibm_watsonx.mdx` | WatsonxEmbeddings integration: Integrate with the WatsonxEmbeddings embedding model using LangChain |
| `index.mdx` | Embedding model integrations: Integrate with embedding models using LangChain Python. |
| `instruct_embeddings.mdx` | Instructor embeddings on Hugging Face integration: Integrate with Instructor-style embedding models on Hugging Face using |
| `mistralai.mdx` | MistralAIEmbeddings integration: Integrate with the MistralAIEmbeddings embedding model using LangChain |
| `nvidia_ai_endpoints.mdx` | NVIDIAEmbeddings integration: Integrate with the NVIDIAEmbeddings embedding model using LangChain Python. |
| `oci_generative_ai.mdx` | OCI Generative AI Integration for LangChain: Integrate with OCI Generative AI embeddings using LangChain Python. |
| `ollama.mdx` | OllamaEmbeddings integration: Integrate with the OllamaEmbeddings embedding model using LangChain Python. |
| `openai.mdx` | OpenAIEmbeddings integration: Integrate with the OpenAIEmbeddings embedding model using LangChain Python. |
| `oracleai.mdx` | Oracle AI vector search generate integration: Integrate with the Oracle AI vector search generate embedding model using |
| `perplexity.mdx` | PerplexityEmbeddings integration: Integrate with Perplexity's embedding models using LangChain Python. |
| `pinecone.mdx` | Pinecone integration: Integrate with the Pinecone embedding model using LangChain Python. |
| `sambanova.mdx` | SambanovaEmbeddings integration: Integrate with the SambanovaEmbeddings embedding model using LangChain |
| `sentence_transformers.mdx` | HuggingFaceEmbeddings (Sentence Transformers) integration: Integrate with Sentence Transformers embedding models using LangChain |
| `text_embeddings_inference.mdx` | Text embeddings inference integration: Integrate with the Text embeddings inference embedding model using LangChain Python. |
| `together.mdx` | TogetherEmbeddings integration: Integrate with the TogetherEmbeddings embedding model using LangChain |
| `upstage.mdx` | UpstageEmbeddings integration: Integrate with the UpstageEmbeddings embedding model using LangChain |
| `voyageai.mdx` | VoyageAI by MongoDB integration: Integrate with the VoyageAI by MongoDB embedding model using LangChain Python. |

### python/integrations/graphs/ (6 files)

| File | Description |
|------|-------------|
| `amazon_neptune_open_cypher.mdx` | Amazon neptune with cypher integration: Integrate with the Amazon neptune with cypher graph using LangChain Python. |
| `kuzu_db.mdx` | Kuzu integration: Integrate with the Kuzu graph using LangChain Python. |
| `memgraph.mdx` | Memgraph integration: Integrate with the Memgraph using LangChain Python. |
| `neo4j_cypher.mdx` | Neo4j integration: Integrate with the Neo4j graph using LangChain Python. |
| `sap_hana_rdf_graph.mdx` | SAP HANA Cloud Knowledge Graph is a fully integrated knowledge graph solution within the SAP HANA Cloud database. |
| `timbr.mdx` | Timbr integration: Integrate with the Timbr graph using LangChain Python. |

### python/integrations/llms/ (20 files)

| File | Description |
|------|-------------|
| `ai21.mdx` | AI21LLM integration: Integrate with the AI21LLM using LangChain Python. |
| `aimlapi.mdx` | AIMLAPI integration: Integrate with the AIMLAPI LLM using LangChain Python. |
| `anthropic.mdx` | AnthropicLLM integration: Integrate with the AnthropicLLM using LangChain Python. |
| `azure_openai.mdx` | Azure OpenAI integration: Integrate with the Azure OpenAI LLM using LangChain Python. |
| `bedrock.mdx` | Bedrock integration: Integrate with the Bedrock LLM using LangChain Python. |
| `cohere.mdx` | Cohere integration: Integrate with the Cohere LLM using LangChain Python. |
| `google_generative_ai.mdx` | GoogleGenerativeAI integration: Get started using legacy Gemini LLMs in LangChain. |
| `google_vertex_ai.mdx` | Gemini Enterprise Agent Platform integration: Integrate with the Gemini Enterprise Agent Platform LLM using LangChain Python. |
| `huggingface_endpoint.mdx` | Huggingface endpoints integration: Integrate with the Huggingface endpoints LLM using LangChain Python. |
| `huggingface_pipelines.mdx` | Hugging Face local pipelines integration: Integrate with the Hugging Face local pipelines LLM using LangChain Python. |
| `ibm_watsonx.mdx` | IBM watsonx.ai integration: Integrate with the IBM watsonx.ai LLM using LangChain Python. |
| `modelscope_endpoint.mdx` | ModelScopeEndpoint integration: Integrate with the ModelScopeEndpoint LLM using LangChain Python. |
| `nvidia_ai_endpoints.mdx` | NVIDIA integration: Integrate with the NVIDIA LLM using LangChain Python. |
| `ollama.mdx` | Ollama integration: Integrate with the Ollama LLM using LangChain Python. |
| `openai.mdx` | OpenAI integration: Integrate with the OpenAI LLM using LangChain Python. |
| `openvino.mdx` | Openvino integration: Integrate with the Openvino LLM using LangChain Python. |
| `pipeshift.mdx` | Pipeshift integration: Integrate with the Pipeshift LLM using LangChain Python. |
| `predictionguard.mdx` | Predictionguard integration: Integrate with the Predictionguard LLM using LangChain Python. |
| `sagemaker.mdx` | SageMakerEndpoint integration: Integrate with the SageMakerEndpoint LLM using LangChain Python. |
| `together.mdx` | Together AI integration: Integrate with the Together AI LLM using LangChain Python. |

### python/integrations/long-term-memory/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Store integrations: Integrate with store backends for LangGraph long-term memory. |

### python/integrations/memory/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | Memory integrations: Persist short-term and long-term agent memory with LangGraph checkpointers and stores. |
| `mongodb-long-term-memory.mdx` | Long-term memory with MongoDB Atlas: Persist agent long-term memory with MongoDBStore and MongoDB Atlas. |
| `mongodb-short-term-memory.mdx` | Short-term memory with MongoDB Atlas: Persist agent short-term memory with MongoDBSaver and MongoDB Atlas. |

### python/integrations/middleware/ (8 files)

| File | Description |
|------|-------------|
| `TEMPLATE.mdx` | (MODULE_NAME) integration: Integrate with the (MODULE_NAME) middleware using LangChain Python. |
| `anthropic.mdx` | Anthropic middleware integration: Integrate with the Anthropic middleware using LangChain Python. |
| `aws.mdx` | AWS middleware integration: Integrate with AWS middleware using LangChain Python. |
| `azure_ai.mdx` | Microsoft Foundry middleware integration: Integrate with the Azure AI middleware using LangChain Python. |
| `index.mdx` | Middleware integrations: Integrate with middleware using LangChain Python. |
| `nvidia.mdx` | NVIDIA middleware integration: Integrate with the NVIDIA middleware using LangChain Python. |
| `openai.mdx` | OpenAI middleware integration: Integrate with the OpenAI middleware using LangChain Python. |
| `scaledown.mdx` | ScaleDown middleware integration: Integrate with ScaleDown middleware using LangChain Python. |

### python/integrations/providers/ (101 files)

| File | Description |
|------|-------------|
| `aerospike.mdx` | Aerospike integrations: Integrate with Aerospike for LangGraph checkpointing and store persistence using LangChain Python. |
| `agentsystems.mdx` | AgentSystems: Governance infrastructure for AI systems. |
| `ai21.mdx` | AI21 labs integrations: Integrate with AI21 labs using LangChain Python. |
| `aimlapi.mdx` | AI/ML API integrations: Integrate with AI/ML API using LangChain Python. |
| `alibaba_cloud.mdx` | Alibaba cloud integrations: Integrate with Alibaba cloud using LangChain Python. |
| `all_providers.mdx` | Browse the complete collection of integrations available for Python. LangChain Python offers the most extensive ecosystem with 1000+ integrations... |
| `anthropic.mdx` | Anthropic (Claude) integrations: Integrate with Anthropic (Claude) using LangChain Python. |
| `anyllm.mdx` | any-llm integrations: Integrate with any-llm using LangChain Python. |
| `astradb.mdx` | Astra DB integrations: Integrate with Astra DB using LangChain Python. |
| `aws.mdx` | AWS (Amazon) integrations: Integrate with AWS (Amazon) using LangChain Python. |
| `azure_ai.mdx` | Azure AI integrations: Integrate with Azure AI using LangChain Python. |
| `baseten.mdx` | Baseten integrations: Integrate with Baseten using LangChain Python. |
| `box.mdx` | Box integrations: Integrate with Box using LangChain Python. |
| `browser_use.mdx` | Browser Use integrations: Integrate with Browser Use using LangChain Python. |
| `browserbase.mdx` | Browserbase integrations: Integrate with Browserbase using LangChain Python. |
| `cerebras.mdx` | Cerebras integrations: Integrate with Cerebras using LangChain Python. |
| `chroma.mdx` | Chroma integrations: Integrate with Chroma using LangChain Python. |
| `cockroachdb.mdx` | CockroachDB integrations: Integrate with CockroachDB using LangChain Python. |
| `cohere.mdx` | Cohere integrations: Integrate with Cohere using LangChain Python. |
| `context.mdx` | Context integrations: Integrate with Context using LangChain Python. |
| `cratedb.mdx` | CrateDB integrations: Integrate with CrateDB using LangChain Python. |
| `databricks.mdx` | Databricks integrations: Integrate with Databricks using LangChain Python. |
| `datadog.mdx` | Datadog tracing integrations: Integrate with Datadog tracing using LangChain Python. |
| `daytona.mdx` | Daytona integrations: Integrate with Daytona using LangChain Python. |
| `deepseek.mdx` | DeepSeek integrations: Integrate with DeepSeek using LangChain Python. |
| `dell.mdx` | Dell integrations: Integrate with Dell using LangChain Python. |
| `discord-shikenso.mdx` | Discord integrations: Integrate with Discord using LangChain Python. |
| `docling.mdx` | Docling integrations: Integrate with Docling using LangChain Python. |
| `docugami.mdx` | Docugami integrations: Integrate with Docugami using LangChain Python. |
| `egnyte.mdx` | Egnyte is a cloud-based content collaboration and file sharing platform that enables organizations to securely store, share, and govern their... |
| `elasticsearch.mdx` | Elasticsearch integrations: Integrate with Elasticsearch using LangChain Python. |
| `exa_search.mdx` | Exa integrations: Integrate with Exa using LangChain Python. |
| `fireworks.mdx` | Fireworks integrations: Integrate with Fireworks AI using LangChain Python. |
| `google.mdx` | Google integrations: Integrate with Google using LangChain Python. |
| `graph_rag.mdx` | Graph RAG integrations: Integrate with Graph RAG using LangChain Python. |
| `graphsignal.mdx` | Graphsignal integrations: Integrate with Graphsignal using LangChain Python. |
| `groq.mdx` | Groq integrations: Integrate with Groq using LangChain Python. |
| `helicone.mdx` | Helicone integrations: Integrate with Helicone using LangChain Python. |
| `huggingface.mdx` | Hugging Face integrations: Integrate with Hugging Face using LangChain Python. |
| `ibm.mdx` | IBM integrations: Integrate with IBM using LangChain Python. |
| `johnsnowlabs.mdx` | Johnsnowlabs integrations: Integrate with Johnsnowlabs using LangChain Python. |
| `konlpy.mdx` | Konlpy integrations: Integrate with Konlpy using LangChain Python. |
| `kuzu.mdx` | Kùzu integrations: Integrate with Kùzu using LangChain Python. |
| `langchain_decorators.mdx` | LangChain decorators integrations: Integrate with LangChain decorators using LangChain Python. |
| `langfair.mdx` | Langfair integrations: Integrate with Langfair using LangChain Python. |
| `langfuse.mdx` | Langfuse integrations: Integrate with Langfuse using LangChain Python. |
| `litellm.mdx` | LiteLLM integrations: Integrate with LiteLLM using LangChain Python. |
| `localai.mdx` | Localai integrations: Integrate with Localai using LangChain Python. |
| `log10.mdx` | Log10 integrations: Integrate with Log10 using LangChain Python. |
| `memgraph.mdx` | Memgraph integrations: Integrate with Memgraph using LangChain Python. |
| `metal.mdx` | Metal integrations: Integrate with Metal using LangChain Python. |
| `microsoft.mdx` | Microsoft integrations: Integrate with Microsoft using LangChain Python. |
| `milvus.mdx` | Milvus integrations: Integrate with Milvus using LangChain Python. |
| `mindsdb.mdx` | Mindsdb integrations: Integrate with Mindsdb using LangChain Python. |
| `mistralai.mdx` | MistralAI integrations: Integrate with MistralAI using LangChain Python. |
| `mlflow_tracking.mdx` | MLflow integrations: Integrate with MLflow using LangChain Python. |
| `modal.mdx` | Modal integrations: Integrate with Modal using LangChain Python. |
| `modelscope.mdx` | Modelscope integrations: Integrate with Modelscope using LangChain Python. |
| `mongodb.mdx` | MongoDB integrations: Integrate with MongoDB using LangChain Python. |
| `mongodb_atlas.mdx` | MongoDB atlas integrations: Integrate with MongoDB atlas using LangChain Python. |
| `motorhead.mdx` | Motörhead integrations: Integrate with Motörhead using LangChain Python. |
| `neo4j.mdx` | Neo4j integrations: Integrate with Neo4j using LangChain Python. |
| `nvidia.mdx` | NVIDIA: Integrate with NVIDIA using LangChain Python. |
| `oci.mdx` | OCI Generative AI Integration for LangChain: Integrate with OCI Generative AI using LangChain Python. |
| `ollama.mdx` | Ollama integrations: Integrate with Ollama using LangChain Python. |
| `open_agent_spec.mdx` | Open agent spec integrations: Integrate with Open agent spec using LangChain Python. |
| `openai.mdx` | OpenAI integrations: Integrate with OpenAI using LangChain Python. |
| `openrouter.mdx` | OpenRouter integrations: Access models from multiple providers through OpenRouter's unified API using LangChain Python. |
| `oracleai.mdx` | OracleAI vector search integrations: Integrate with OracleAI vector search using LangChain Python. |
| `overview.mdx` | LangChain Python integrations: Integrate with providers using LangChain Python. |
| `parallel.mdx` | Parallel integrations: Integrate with Parallel using LangChain Python. |
| `perplexity.mdx` | Perplexity integrations: Integrate with Perplexity using LangChain Python. |
| `pinecone.mdx` | Pinecone integrations: Integrate with Pinecone using LangChain Python. |
| `pipeshift.mdx` | Pipeshift integrations: Integrate with Pipeshift using LangChain Python. |
| `plainid.mdx` | PlainID integrations: Integrate with PlainID using LangChain Python. |
| `predictionguard.mdx` | Prediction guard integrations: Integrate with Prediction guard using LangChain Python. |
| `privy.mdx` | Privy integrations: Integrate with Privy using LangChain Python. |
| `qdrant.mdx` | Qdrant integrations: Integrate with Qdrant using LangChain Python. |
| `ray_serve.mdx` | Ray serve integrations: Integrate with Ray serve using LangChain Python. |
| `redis.mdx` | Redis integrations: Integrate with Redis using LangChain Python. |
| `remembrall.mdx` | Remembrall integrations: Integrate with Remembrall using LangChain Python. |
| `replicate.mdx` | Replicate integrations: Integrate with Replicate using LangChain Python. |
| `sambanova.mdx` | Sambanova integrations: Integrate with Sambanova using LangChain Python. |
| `sap.mdx` | Sap integrations: Integrate with Sap using LangChain Python. |
| `shaleprotocol.mdx` | Shale protocol integrations: Integrate with Shale protocol using LangChain Python. |
| `supadata.mdx` | This page covers how to use the Supadata ecosystem within LangChain. It allows you to load data from YouTube, TikTok, and other platforms. |
| `tableau.mdx` | Tableau integrations: Integrate with Tableau using LangChain Python. |
| `tavily.mdx` | Tavily integrations: Integrate with Tavily using LangChain Python. |
| `tensorlake.mdx` | Tensorlake integrations: Integrate with Tensorlake using LangChain Python. |
| `timbr.mdx` | Timbr integrations: Integrate with Timbr using LangChain Python. |
| `together.mdx` | Together AI integrations: Integrate with Together AI using LangChain Python. |
| `toolbox.mdx` | Mcp toolbox integrations: Integrate with Mcp toolbox using LangChain Python. |
| `truefoundry.mdx` | Truefoundry integrations: Integrate with Truefoundry using LangChain Python. |
| `trulens.mdx` | Trulens integrations: Integrate with Trulens using LangChain Python. |
| `typesafe.mdx` | TypeSafe integrations: Integrate with TypeSafe using LangChain |
| `unstructured.mdx` | Unstructured integrations: Integrate with Unstructured using LangChain Python. |
| `upstage.mdx` | Upstage integrations: Integrate with Upstage using LangChain Python. |
| `voyageai.mdx` | VoyageAI by MongoDB integrations: Integrate with VoyageAI by MongoDB using LangChain Python. |
| `weaviate.mdx` | Weaviate integrations: Integrate with Weaviate using LangChain Python. |
| `xai.mdx` | xAI integrations: Integrate with xAI using LangChain Python. |
| `yeagerai.mdx` | Yeager.ai integrations: Integrate with Yeager.ai using LangChain Python. |

### python/integrations/providers/portkey/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | Portkey integrations: Integrate with Portkey using LangChain Python. |
| `logging_tracing_portkey.mdx` | Log, trace, and monitor Portkey integrations: Integrate with Log, trace, and monitor Portkey using LangChain Python. |

### python/integrations/retrievers/ (17 files)

| File | Description |
|------|-------------|
| `bedrock.mdx` | Bedrock (knowledge bases) integration: Integrate with the Bedrock (knowledge bases) retriever using LangChain Python. |
| `box.mdx` | BoxRetriever integration: Integrate with the BoxRetriever retriever using LangChain Python. |
| `cohere-reranker.mdx` | Cohere reranker integration: Integrate with the Cohere reranker retriever using LangChain Python. |
| `cohere.mdx` | Cohere RAG integration: Integrate with the Cohere RAG retriever using LangChain Python. |
| `egnyte.mdx` | This will help you get started with the Egnyte retriever. For detailed documentation of all EgnyteRetriever features and configurations head to... |
| `elasticsearch_retriever.mdx` | Elasticsearch integration: Integrate with the Elasticsearch retriever using LangChain Python. |
| `google_drive.mdx` | Google drive integration: Integrate with the Google drive retriever using LangChain Python. |
| `google_vertex_ai_search.mdx` | Gemini Enterprise Agent Platform search integration: Integrate with the Gemini Enterprise Agent Platform search retriever using LangChain Python. |
| `graph_rag.mdx` | Graph RAG integration: Integrate with the Graph RAG retriever using LangChain Python. |
| `ibm_watsonx_ranker.mdx` | IBM watsonx.ai integration: Integrate with the IBM watsonx.ai retriever using LangChain Python. |
| `index.mdx` | Retriever integrations: Integrate with retrievers using LangChain Python. |
| `mongodb_atlas.mdx` | MongoDB Atlas: Integrate with the MongoDBAtlasHybridSearchRetriever using LangChain Python. |
| `nvidia.mdx` | NVIDIARAGRetriever integration: Integrate with the NVIDIARAGRetriever using LangChain Python. |
| `parallel.mdx` | ParallelSearchRetriever integration: Integrate with the ParallelSearchRetriever retriever using LangChain Python. |
| `perplexity_search.mdx` | PerplexitySearch integration: Integrate with the PerplexitySearchRetriever using LangChain Python. |
| `pinecone_rerank.mdx` | Pinecone rerank integration: Integrate with the Pinecone rerank retriever using LangChain Python. |
| `ragatouille.mdx` | Ragatouille integration: Integrate with the Ragatouille retriever using LangChain Python. |

### python/integrations/sandboxes/ (6 files)

| File | Description |
|------|-------------|
| `aws.mdx` | AgentCoreSandbox integration: Integrate with the AgentCoreSandbox sandbox backend using LangChain Python. |
| `databricks.mdx` | DatabricksSandbox integration: Integrate with the DatabricksSandbox sandbox backend using LangChain Python. |
| `daytona.mdx` | DaytonaSandbox integration: Integrate with the DaytonaSandbox sandbox backend using LangChain Python. |
| `index.mdx` | Sandbox integrations: Integrate with sandbox providers using LangChain Python. |
| `langsmith.mdx` | LangSmith sandbox integration: Integrate with the LangSmithSandbox type using LangChain Python. |
| `modal.mdx` | ModalSandbox integration: Integrate with the ModalSandbox sandbox backend using LangChain Python. |

### python/integrations/splitters/ (3 files)

| File | Description |
|------|-------------|
| `markdown_header_metadata_splitter.mdx` | Split markdown - text splitter integration: Integrate with the Split markdown text splitter using LangChain Python. |
| `recursive_json_splitter.mdx` | Split JSON data - text splitter integration: Integrate with the Split JSON data text splitter using LangChain Python. |
| `split_html.mdx` | Split HTML - text splitter integration: Integrate with the Split HTML text splitter using LangChain Python. |

### python/integrations/stores/ (7 files)

| File | Description |
|------|-------------|
| `astradb.mdx` | AstraDBByteStore integration: Integrate with the AstraDBByteStore store using LangChain Python. |
| `bigtable.mdx` | BigTableByteStore integration: Integrate with the BigTableByteStore store using LangChain Python. |
| `elasticsearch.mdx` | ElasticsearchEmbeddingsCache integration: Integrate with the ElasticsearchEmbeddingsCache store using LangChain |
| `file_system.mdx` | LocalFileStore integration: Integrate with the LocalFileStore store using LangChain Python. |
| `in_memory.mdx` | InMemoryByteStore integration: Integrate with the InMemoryByteStore store using LangChain Python. |
| `index.mdx` | Store integrations: Integrate with stores using LangChain Python. |
| `openviking.mdx` | OpenVikingStore integration: Integrate with the OpenVikingStore store using LangChain Python. |

### python/integrations/tools/ (40 files)

| File | Description |
|------|-------------|
| `TEMPLATE.mdx` | (MODULE_NAME) integration: Integrate with the (MODULE_NAME) tool using LangChain Python. |
| `azure_ai.mdx` | Microsoft Foundry tools integration: Integrate with Microsoft Foundry model tools using LangChain Python. |
| `azure_ai_services.mdx` | Microsoft Foundry Tools (formerly Azure AI Services) tools integration: Integrate with Microsoft Foundry Tools (formerly Azure AI Services) using |
| `azure_dynamic_sessions.mdx` | Azure container apps dynamic sessions integration: Integrate with the Azure container apps dynamic sessions tool using LangChain |
| `azure_logic_apps.mdx` | Azure Logic Apps integration: Integrate with Azure Logic Apps using LangChain Python. |
| `bedrock_agentcore_browser.mdx` | Amazon Bedrock agentcore browser integration: Integrate with the Amazon Bedrock agentcore browser tool using LangChain |
| `bedrock_agentcore_code_interpreter.mdx` | Amazon Bedrock agentcore code interpreter integration: Integrate with the Amazon Bedrock agentcore code interpreter tool using |
| `bedrock_agentcore_web_search.mdx` | Amazon Bedrock AgentCore Web Search integration: Integrate with the Amazon Bedrock AgentCore Web Search tool using |
| `cdp_agentkit.mdx` | Cdp agentkit toolkit integration: Integrate with the Cdp agentkit toolkit using LangChain Python. |
| `composio.mdx` | Give agents secure access to 1,000+ toolkits and 20,000+ tools through Composio's unified API platform, with OAuth handling, event-driven... |
| `databricks.mdx` | Databricks unity catalog (Uc) integration: Integrate with the Databricks unity catalog (Uc) tool using LangChain Python. |
| `discord.mdx` | Discord integration: Integrate with the Discord tool using LangChain Python. |
| `exa_search.mdx` | Exa search integration: Integrate with the Exa search tool using LangChain Python. |
| `google_calendar.mdx` | Google calendar toolkit integration: Integrate with the Google calendar toolkit using LangChain Python. |
| `google_cloud_texttospeech.mdx` | Google cloud text-to-speech integration: Integrate with the Google cloud text-to-speech tool using LangChain Python. |
| `google_drive.mdx` | Google drive integration: Integrate with the Google drive tool using LangChain Python. |
| `google_gmail.mdx` | Gmail toolkit integration: Integrate with the Gmail toolkit using LangChain Python. |
| `google_imagen.mdx` | Google imagen integration: Integrate with the Google imagen tool using LangChain Python. |
| `google_search.mdx` | Google search integration: Integrate with the Google search tool using LangChain Python. |
| `ibm_watsonx.mdx` | IBM watsonx.ai integration: Integrate with the IBM watsonx.ai tool using LangChain Python. |
| `ibm_watsonx_sql.mdx` | IBM watsonx.ai SQL integration: Integrate with the IBM watsonx.ai SQL tool using LangChain Python. |
| `index.mdx` | Tool integrations: Integrate with tools using LangChain Python. |
| `mcp_toolbox.mdx` | Mcp toolbox for databases integration: Integrate with the Mcp toolbox for databases tool using LangChain Python. |
| `oracleai.mdx` | Oracle AI vector search generate summary integration: Integrate with the Oracle AI vector search generate summary tool using |
| `parallel_extract.mdx` | Parallel extract integration: Integrate with the ParallelExtractTool tool using LangChain Python. |
| `parallel_findall.mdx` | Parallel FindAll integration: Integrate with the ParallelFindAllTool tool using LangChain Python. |
| `parallel_monitor.mdx` | Parallel Monitor integration: Integrate with the ParallelMonitor type using LangChain Python. |
| `parallel_search.mdx` | Parallel search integration: Integrate with the ParallelSearchTool tool using LangChain Python. |
| `parallel_task.mdx` | Parallel Task API integration: Integrate with the ParallelTaskRunTool tool using LangChain Python. |
| `perplexity_search.mdx` | Perplexity search integration: Integrate with the Perplexity search tool using LangChain Python. |
| `privy.mdx` | Privy integration: Integrate with the Privy tool using LangChain Python. |
| `stagehand.mdx` | Stagehand + Browserbase integration: Integrate with StagehandMiddleware browser tools using LangChain Python. |
| `stripe.mdx` | StripeAgentToolkit integration: Integrate with the StripeAgentToolkit tool using LangChain Python. |
| `tableau.mdx` | Tableau integration: Integrate with the Tableau tool using LangChain Python. |
| `tavily_crawl.mdx` | Tavily crawl integration: Integrate with the Tavily crawl tool using LangChain Python. |
| `tavily_extract.mdx` | Tavily extract integration: Integrate with the Tavily extract tool using LangChain Python. |
| `tavily_map.mdx` | Tavily map integration: Integrate with the Tavily map tool using LangChain Python. |
| `tavily_search.mdx` | Tavily search integration: Integrate with the Tavily search tool using LangChain Python. |
| `unstructured_transform.mdx` | Unstructured Transform integration: Integrate with the Unstructured Transform tools using LangChain Python. |
| `upstage_groundedness_check.mdx` | Upstage groundedness check integration: Integrate with the Upstage groundedness check tool using LangChain Python. |

### python/integrations/vectorstores/ (35 files)

| File | Description |
|------|-------------|
| `TEMPLATE.mdx` | (MODULE_NAME) integration: Integrate with the (MODULE_NAME) vector store using LangChain Python. |
| `astradb.mdx` | Astra DB integration: Integrate with the Astra DB vector store using LangChain Python. |
| `azure_cosmos_db_mongo_vcore.mdx` | Azure Cosmos DB mongo vcore integration: Integrate with the Azure Cosmos DB mongo vcore vector store using LangChain Python. |
| `azure_cosmos_db_no_sql.mdx` | Azure Cosmos DB NoSQL integration: Integrate with the Azure Cosmos DB NoSQL vector store using LangChain Python. |
| `azure_db_for_postgresql.mdx` | Azure database for postgresql - flexible server integration: Integrate with the Azure database for postgresql - flexible server vector |
| `chroma.mdx` | Chroma integration: Integrate with the Chroma vector store using LangChain Python. |
| `databricks_vector_search.mdx` | Databricks vector search integration: Integrate with the Databricks vector search vector store using LangChain Python. |
| `elasticsearch.mdx` | Elasticsearch integration: Integrate with the Elasticsearch vector store using LangChain Python. |
| `google_alloydb.mdx` | Google alloydb for postgresql integration: Integrate with the Google alloydb for postgresql vector store using LangChain |
| `google_bigquery_vector_search.mdx` | Google bigquery vector search integration: Integrate with the Google bigquery vector search vector store using LangChain Python. |
| `google_cloud_sql_mysql.mdx` | Google cloud SQL for mysql integration: Integrate with the Google cloud SQL for mysql vector store using LangChain |
| `google_cloud_sql_pg.mdx` | Google cloud SQL for postgresql integration: Integrate with the Google cloud SQL for postgresql vector store using |
| `google_firestore.mdx` | Google firestore integration: Integrate with the Google firestore vector store using LangChain Python. |
| `google_memorystore_redis.mdx` | Google memorystore for Redis integration: Integrate with the Google memorystore for Redis vector store using LangChain |
| `google_spanner.mdx` | Google spanner integration: Integrate with the Google spanner vector store using LangChain Python. |
| `google_vertex_ai_feature_store.mdx` | Feature Store on Gemini Enterprise Agent Platform integration: Integrate with the Feature Store on Gemini Enterprise Agent Platform vector store using LangChain Python. |
| `google_vertex_ai_vector_search.mdx` | Vector Search on Gemini Enterprise Agent Platform integration: Integrate with the Vector Search on Gemini Enterprise Agent Platform vector store using |
| `in_memory.mdx` | InMemoryVectorStore integration: Integrate with the InMemoryVectorStore vector store using LangChain Python. |
| `index.mdx` | Vector store integrations: Integrate with vector stores using LangChain Python. |
| `memorydb.mdx` | Amazon MemoryDB integration: Integrate with the Amazon MemoryDB vector store using LangChain Python. |
| `milvus.mdx` | Milvus integration: Integrate with the Milvus vector store using LangChain Python. |
| `mongodb_atlas.mdx` | MongoDB Atlas Integration: Integrate with the MongoDB Atlas Vector Store using LangChain Python. |
| `neo4jvector.mdx` | Neo4j vector index integration: Integrate with the Neo4j vector index vector store using LangChain Python. |
| `oracle.mdx` | Oracle AI vector search - integration: Integrate with the Oracle AI vector search - vector store using LangChain Python. |
| `pgvector.mdx` | PGVector integration: Integrate with the PGVector vector store using LangChain Python. |
| `pgvectorstore.mdx` | PGVectorStore integration: Integrate with the PGVectorStore using LangChain Python. |
| `pinecone.mdx` | Pinecone integration: Integrate with the Pinecone vector store using LangChain Python. |
| `pinecone_sparse.mdx` | Pinecone (Sparse) integration: Integrate with the Pinecone (Sparse) vector store using LangChain Python. |
| `qdrant.mdx` | Qdrant integration: Integrate with the Qdrant vector store using LangChain Python. |
| `redis.mdx` | Redis integration: Integrate with the Redis vector store using LangChain Python. |
| `s3_vectors.mdx` | Amazon S3 Vectors integration: Integrate with the Amazon S3 Vectors vector store using LangChain Python. |
| `sap_hanavector.mdx` | Sap hana cloud vector engine integration: Integrate with the Sap hana cloud vector engine vector store using LangChain |
| `turbopuffer.mdx` | turbopuffer integration: Integrate with the turbopuffer vector store using LangChain Python. |
| `valkey.mdx` | Valkey is an open source, high-performance key/value datastore that supports workloads such as caching, message queues, and can act as a primary... |
| `weaviate.mdx` | Weaviate integration: Integrate with the Weaviate vector store using LangChain Python. |

### python/migrate/ (4 files)

| File | Description |
|------|-------------|
| `langchain-mcp-adapters.mdx` | Migrate from langchain-mcp-adapters: Migrate from the standalone langchain-mcp-adapters package to the built-in langchain.mcp namespace. |
| `langchain-v1.mdx` | LangChain v1 migration guide: description="Migrate a codebase to LangChain v1." |
| `langgraph-supervisor.mdx` | Migrate from the langgraph-supervisor package to the subagents pattern with create_agent and tool-wrapped subagents. |
| `langgraph-v1.mdx` | LangGraph v1 migration guide: description="Migrate a codebase to LangGraph v1." |

### python/releases/ (2 files)

| File | Description |
|------|-------------|
| `langchain-v1.mdx` | What's new in LangChain v1: The new standard for building agents in LangChain, replacing langgraph.prebuilt.create_react_agent. |
| `langgraph-v1.mdx` | It's designed to work hand-in-hand with LangChain v1 (whose create_agent is built on LangGraph) so you can start high-level and drop down to... |

### reference/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Reference: Comprehensive API reference documentation for the LangChain and LangGraph Python and TypeScript libraries. |

