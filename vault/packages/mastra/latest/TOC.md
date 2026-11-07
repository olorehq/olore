# mastra Table of Contents

## Directory Map

```
contents/
├── (root files)/ (9 files)
├── agents/ (9 files)
├── auth/ (7 files)
├── connections/ (5 files)
├── deployment/ (8 files)
├── evals/ (11 files)
├── getting-started/ (2 files)
├── guides/ (8 files)
├── harness/ (6 files)
├── knowledge/ (7 files)
├── mastra-platform/ (16 files)
├── memory/ (7 files)
├── observability/ (6 files)
├── sandbox/ (6 files)
├── server/ (8 files)
├── signals/ (7 files)
├── studio/ (6 files)
├── workflows/ (11 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/index.mdx` |
| Local development | `contents/develop.mdx` |
| Build an agent | `contents/agents/overview.mdx` |
| Add tools | `contents/agents/tools.mdx` |
| Workflows | `contents/workflows/overview.mdx` |
| Memory | `contents/memory/overview.mdx` |
| Deploy | `contents/deployment/overview.mdx` |
| Evals | `contents/evals/overview.mdx` |
| Observability | `contents/observability/overview.mdx` |
| Server and auth | `contents/server/overview.mdx` |

## Detailed Structure

### (root) (9 files)

| File | Description |
|------|-------------|
| `browser.mdx` | Give Mastra agents browser automation through native SDK providers, CLI tools, CDP connections, or cloud services such |
| `channels.mdx` | Connect Mastra agents to Slack, Discord, Telegram, and other messaging channels with webhooks, thread context, tool |
| `classifier.mdx` | Ask a decision model typed questions about your application state and act on structured answers instead of parsing |
| `develop.mdx` | Develop and test Mastra agents locally with mastra dev, Studio, file-based agents, the Mastra CLI, and AI coding tools |
| `index.mdx` | Create your first Mastra TypeScript application, build an AI agent with tools, run it in Studio, and explore framework |
| `license.mdx` | Understand Mastra’s dual-license model, including which core packages use Apache License 2.0 and which enterprise |
| `skills.mdx` | Attach reusable Agent Skills directly to Mastra agents using inline definitions, filesystem paths, dynamic loaders, and |
| `storage.mdx` | Configure Mastra storage to persist memory, workflow state, observability data, evals, schedules, and long-running |
| `subagents.mdx` | Build Mastra supervisor agents that delegate work to specialized subagents with hooks, request context, message |

### agents/ (9 files)

| File | Description |
|------|-------------|
| `code-mode.mdx` | Configure Mastra code mode so agents can run multi-tool computations in isolated local or remote sandboxes and return |
| `guardrails.mdx` | Protect Mastra agents with built-in guardrail processors for prompt injection, content moderation, PII redaction |
| `human-in-the-loop.mdx` | Add human-in-the-loop controls to Mastra agents with tool approval and suspended execution, so people can provide input |
| `networks.mdx` | Understand deprecated Mastra agent networks, including multi-agent routing, structured output, tool approvals, and |
| `overview.mdx` | Build Mastra agents that use LLMs, tools, memory, workflows, and subagents to reason through open-ended tasks and |
| `processors.mdx` | Use Mastra input and output processors to transform, validate, filter, and control agent messages at defined points in |
| `resumable-streams.mdx` | Publish agent runs on a stream topic so clients can reconnect, other readers can follow a run with observe(), and any |
| `structured-output.mdx` | Generate validated, typed structured output from Mastra agents with JSON Schema, Zod, or Valibot, including streaming |
| `tools.mdx` | Create schema-validated Mastra tools that let agents call APIs, query databases, run functions, and invoke agents |

### auth/ (7 files)

| File | Description |
|------|-------------|
| `composite-auth.mdx` | Combine multiple Mastra authentication providers with CompositeAuth, control provider order, and support fallback |
| `custom-auth-provider.mdx` | Create a custom Mastra authentication provider by extending MastraAuthProvider, with token validation and user |
| `fga.mdx` | Configure Mastra Fine-Grained Authorization for resource-level permissions that map routes to actions and scope stored |
| `jwt.mdx` | Secure Mastra APIs with MastraJwtAuth and a shared secret, then create JSON Web Tokens and send authenticated requests |
| `overview.mdx` | Choose and configure authentication for Mastra APIs and Studio using JWT, built-in identity providers, third-party |
| `simple-auth.mdx` | Use Mastra SimpleAuth for token-to-user authentication, API key scenarios, custom headers, and lightweight |
| `workers.mdx` | Secure communication between standalone Mastra workers and the API server with bearer tokens, API key headers, or |

### connections/ (5 files)

| File | Description |
|------|-------------|
| `a2a.mdx` | Expose Mastra agents through the Agent-to-Agent protocol and consume remote A2A agents as subagents or call them |
| `acp.mdx` | Connect ACP-compatible coding agents to Mastra as tools or subagents, with configured models and sessions that stream |
| `mcp.mdx` | Connect Mastra agents to remote MCP servers, expose Mastra tools through MCPServer, manage approvals, subscribe to MCP |
| `overview.mdx` | Connect Mastra to remote agents, coding agents, SDK runtimes, MCP servers, and external tools by choosing the protocol |
| `sdk-agents.mdx` | Use Claude Agent SDK, Cursor Agent SDK, and OpenAI Agents SDK agents inside Mastra as delegated agents with their |

### deployment/ (8 files)

| File | Description |
|------|-------------|
| `cloud-providers.mdx` | Compare deployment options for Mastra applications across Mastra platform and supported cloud providers, then follow |
| `mastra-server.mdx` | Build and deploy a production Mastra server, configure build output and public assets, run the generated application |
| `monorepo.mdx` | Deploy Mastra applications from pnpm, npm, Yarn, or Bun monorepos by configuring workspace packages, build commands |
| `overview.mdx` | Choose how to deploy a Mastra application as a server, framework integration, monorepo service, cloud deployment |
| `sandbox.mdx` | Deploy a complete Mastra server and Studio to an ephemeral E2B, Daytona, or Vercel sandbox and receive a public URL for |
| `web-framework.mdx` | Deploy Mastra alongside a Next.js or Astro application using the framework’s standard Vercel or Netlify build and |
| `workers.mdx` | Run Mastra workflow orchestration, schedules, and long-running background tasks in dedicated workers to keep API |
| `workflow-runners.mdx` | Deploy Mastra workflows to specialized orchestration platforms such as Inngest or Temporal for durable execution |

### evals/ (11 files)

| File | Description |
|------|-------------|
| `built-in-scorers.mdx` | Choose built-in Mastra scorers for accuracy, reliability, context quality, output quality, safety, and fast |
| `custom-scorers.mdx` | Build custom Mastra scorers with createScorer using JavaScript functions or LLM prompts across preprocess, analyze |
| `datasets.mdx` | Create versioned Mastra datasets, define item schemas, manage test data through code or Studio, and track experiments |
| `evals-with-memory.mdx` | Run Mastra evals against memory-enabled agents using shared or per-item threads, observational memory, runEvals, and |
| `experiments.mdx` | Run Mastra dataset experiments against registered agents or workflows, apply scorers, compare results, and inspect |
| `gates-and-verdicts.mdx` | Define mandatory gates and score thresholds for Mastra evals, compute passed, scored, or failed verdicts, and enforce |
| `multi-turn.mdx` | Evaluate Mastra agents across multi-turn conversations by sending sequential inputs on one memory thread and scoring |
| `overview.mdx` | Evaluate Mastra agents and workflows with model-graded, rule-based, and programmatic scorers through live evaluations |
| `quick-checks.mdx` | Add fast, deterministic Quick Checks to Mastra evals for assertions on output text and tool calls without using an LLM |
| `running-in-ci.mdx` | Run Mastra scorer experiments in CI with runEvals, define test cases for agents or workflows, inspect aggregate results |
| `vitest-integration.mdx` | Run runEvals evaluations as Vitest tests with expectEvals, expectEval, custom matchers, and a score reporter using |

### getting-started/ (2 files)

| File | Description |
|------|-------------|
| `_partial-agent-quickstart.mdx` | Partial: agent quickstart snippet included by the getting-started pages |
| `_partial-quickstart-prompt.mdx` | Partial: quickstart prompt snippet included by the getting-started pages |

### guides/ (8 files)

| File | Description |
|------|-------------|
| `agent-lifecycle.mdx` | Follow an agent run from input preparation through repeated model and tool calls to the final result, for both regular |
| `authentication-identity.mdx` | Design secure identity flows for Mastra that protect endpoints and carry trusted user context through agents and tools |
| `build-an-eval-loop.mdx` | Use datasets, LLM judges, and Mastra Studio experiments to compare agent changes, investigate failures, and build |
| `context-engineering.mdx` | Engineer the context Mastra agents receive by combining instructions, inline data, tools, RAG, filesystems, memory, and |
| `mcp-authentication-authorization.mdx` | Choose credentials for MCP connections, protect a Mastra MCP server, and separate delegated access from tool and data |
| `multi-agent-systems.mdx` | Choose a Mastra multi-agent architecture by comparing handoffs, workflows, supervisors, and council patterns for |
| `overview.mdx` | Explore guides to designing, building, and evaluating Mastra applications, from agent architecture and context to |
| `streaming.mdx` | Stream incremental responses from Mastra agents and workflows, consume text and structured output, handle events, and |

### harness/ (6 files)

| File | Description |
|------|-------------|
| `agent-controller.mdx` | Build interactive Mastra agent applications with Agent Controller sessions, persistent threads, modes, approvals |
| `background-tasks.mdx` | Run long-lived Mastra tool calls and subagents as background tasks while streams remain open, with per-call |
| `durable-agents.mdx` | Wrap Mastra agents in durable execution so streams and long-running turns survive client disconnects and process |
| `goals.mdx` | Set a durable goal for a Mastra agent so an execution loop evaluates progress and continues working until the objective |
| `overview.mdx` | Use the Mastra harness to start, continue, update, and preserve agent work beyond one request with durable execution |
| `schedules.mdx` | Schedule Mastra agents with cron expressions, recurring prompts, optional thread delivery, lifecycle hooks, and APIs |

### knowledge/ (7 files)

| File | Description |
|------|-------------|
| `agents-and-tools.mdx` | Turn on the Knowledge tools for an agent, and what agents can do with them |
| `load-your-content.mdx` | Load your own content, such as product docs or policies, into Knowledge so agents can search and read it |
| `overview.mdx` | Give agents shared pages and notes they search, read and write, with access decided by your configuration rather than |
| `patterns.mdx` | What you can build with Knowledge: a docs agent, one agent for many customers, pinned policies, coding conventions |
| `pinned-context.mdx` | Keep Knowledge pages in an agent's context every turn, pinned in config for every run of a scope or by agents at |
| `scopes-and-access.mdx` | Declare the scopes Knowledge content lives in, set which scopes each run holds, and check what a run can reach |
| `search.mdx` | How Knowledge search ranks results, and how to add search by meaning |

### mastra-platform/ (16 files)

| File | Description |
|------|-------------|
| `alerts.mdx` | Configure Mastra platform alerts for failed deploys, service outages, and usage thresholds, then send notifications to |
| `api.mdx` | Use the Mastra platform REST API to manage members, tokens, Studio and Server deployments, gateways, observability |
| `configuration.mdx` | Configure Mastra platform project resolution with .mastra-project.json and manage environment variables from platform |
| `connect.mdx` | Use Mastra Connect to manage provider connections on Mastra platform and make them available to your app as agent tools |
| `database.mdx` | Provision and attach managed Turso, Neon, or Postgres databases to Mastra platform environments, then use injected |
| `deploy.mdx` | Deploy a Mastra application to Mastra platform with mastra deploy, including project creation, environment selection |
| `environments.mdx` | Create isolated Mastra platform environments for production, staging, and previews with separate URLs, variables |
| `github.mdx` | Connect a GitHub repository to Mastra platform for push-to-deploy workflows, template projects, repository linking, and |
| `observability.mdx` | Collect, import, and query hosted traces, logs, metrics, scores, and feedback from Mastra applications with Mastra |
| `overview.mdx` | Deploy, monitor, and manage AI applications with Mastra platform projects, environments, hosted databases, workspaces |
| `regions.mdx` | Choose the US or EU region for a Mastra platform environment and understand how compute, hosted databases, and |
| `server.mdx` | Deploy and host a Mastra application as a production API server with managed builds, environment variables, custom |
| `studio.mdx` | Deploy Mastra Studio as a hosted team workspace for testing agents and workflows, with trace inspection and no UI |
| `system-environment-variables.mdx` | Reference for the environment variables Mastra platform injects into every deploy, including project and environment |
| `trace-intelligence.mdx` | Use Mastra Trace Intelligence to identify recurring goals, outcomes, behaviors, sentiment, and themes across agent |
| `workspaces.mdx` | Use Mastra platform workspaces to give each environment isolated bucket storage and on-demand sandboxes for filesystem |

### memory/ (7 files)

| File | Description |
|------|-------------|
| `memory-processors.mdx` | Configure Mastra memory processors to filter, trim, transform, and deduplicate messages before they reach the model |
| `message-history.mdx` | Store and retrieve recent Mastra conversation messages, configure history limits and thread titles, and query threads |
| `multi-user-threads.mdx` | Share one Mastra memory thread across multiple users by preserving speaker identity in messages and combining history |
| `observational-memory.mdx` | Configure Mastra Observational Memory to compress long conversations into durable observations while preserving context |
| `overview.mdx` | Add memory to Mastra agents with message history, observational memory, and working memory across threads and |
| `semantic-recall.mdx` | Retrieve relevant messages from past Mastra conversations with semantic recall, vector search, embeddings, metadata |
| `working-memory.mdx` | Persist user profiles, preferences, and application data with Mastra working memory using resource- or thread-scoped |

### observability/ (3 files)

| File | Description |
|------|-------------|
| `feedback.mdx` | Create, list, delete, aggregate, and export human feedback records in Mastra observability, with ratings and comments |
| `logging.mdx` | Configure structured Mastra logging with PinoLogger, trace correlation, observability storage, custom logger adapters |
| `overview.mdx` | Configure Mastra observability to collect traces, logs, metrics, scores, and feedback for monitoring, debugging, and |

### observability/integrations/exporters/ (1 files)

| File | Description |
|------|-------------|
| `mastra-storage.mdx` | Persist Mastra traces and metrics with MastraStorageExporter, choose a storage provider and tracing strategy, and |

### observability/metrics/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Collect automatic duration, token usage, and cost metrics from Mastra traces, store them in supported databases, and |

### observability/tracing/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Trace Mastra agents, workflows, tools, and model calls with hierarchical spans, sampling, metadata, tags, filtering |

### sandbox/ (6 files)

| File | Description |
|------|-------------|
| `computer.mdx` | Give Mastra agents screenshot, mouse, and keyboard control in supported desktop sandboxes |
| `filesystem.mdx` | Give Mastra agents local or remote filesystem access, configure persistent storage and mounts, and work with files |
| `lsp.mdx` | Configure Language Server Protocol support in Mastra workspaces so agents can inspect symbols, definitions, references |
| `overview.mdx` | Run Mastra agents in isolated local or remote sandboxes with filesystem access, shell commands, code execution, and |
| `search.mdx` | Index filesystem or application content in Mastra workspaces and search it with BM25 keyword, vector semantic, or |
| `skills.mdx` | Create filesystem-backed Mastra skills with SKILL.md instructions, supporting files, configurable discovery paths, and |

### server/ (8 files)

| File | Description |
|------|-------------|
| `custom-adapters.mdx` | Implement a custom Mastra server adapter for unsupported web frameworks by mapping routes, middleware, request |
| `custom-api-routes.mdx` | Add custom HTTP endpoints to a Mastra server with schema validation, middleware, authentication, OpenAPI documentation |
| `mastra-client.mdx` | Use the type-safe Mastra Client SDK from browser applications to call agents, workflows, tools, memory, and server APIs |
| `middleware.mdx` | Add Mastra server middleware for authentication, authorization, CORS, request logging, route blocking, and |
| `overview.mdx` | Configure the Mastra HTTP server to expose agents and workflows through REST APIs with middleware, authentication |
| `pubsub.mdx` | Configure Mastra PubSub event delivery for components, resumable streams, workers, and schedules across one process |
| `request-context.mdx` | Pass request-specific runtime values through Mastra RequestContext to configure agents, workflows, tools, models |
| `server-adapters.mdx` | Run Mastra with Elysia, Express, Fastify, Hono, Koa, NestJS, Next.js, or TanStack Start server adapters and control |

### signals/ (7 files)

| File | Description |
|------|-------------|
| `notifications.mdx` | Create durable Mastra notification records, resolve delivery policy, and deliver notifications or summaries to an agent |
| `overview.mdx` | Send asynchronous input into a Mastra agent thread while Mastra manages whether the agent is active or idle |
| `running-across-processes.mdx` | Run Mastra agent threads across multiple processes with a shared PubSub backend and thread leases |
| `sending-signals.mdx` | Send input to an agent thread and let Mastra decide whether to deliver it or wake the thread |
| `signal-providers.mdx` | Build Mastra signal providers that monitor external systems through polling or webhooks and deliver notifications into |
| `state-signals.mdx` | Keep durable, named state on a Mastra thread and send snapshots or deltas that the model sees as context |
| `thread-streams.mdx` | Subscribe to a Mastra agent thread to read stored history, live output, and lifecycle events as a single ordered stream |

### studio/ (6 files)

| File | Description |
|------|-------------|
| `auth.mdx` | Secure Mastra Studio and API routes with login flows, token forwarding, role-based access control, default roles, and |
| `deployment.mdx` | Deploy Mastra Studio on Mastra platform, alongside your API, or as a static SPA on your own infrastructure or content |
| `editor.mdx` | Use Mastra Studio Editor so collaborators can change agent instructions and tools without modifying source code, from |
| `knowledge.mdx` | Browse the Knowledge instances registered on your Mastra server from Studio, as a page tree and a graph |
| `observability.mdx` | Monitor Mastra agents, workflows, tools, and model calls in Studio with metrics dashboards, hierarchical traces, and |
| `overview.mdx` | Use Mastra Studio to build, test, and manage agents, workflows, processors, tools, and MCP servers while inspecting |

### workflows/ (11 files)

| File | Description |
|------|-------------|
| `agents-and-tools.mdx` | Call Mastra agents and tools from workflow steps, compose them directly with createStep, and choose between execute |
| `control-flow.mdx` | Control Mastra workflow execution with sequential steps, parallel branches, conditional logic, loops, nested workflows |
| `dynamic-workflows.mdx` | Create, persist, update, and execute Mastra workflows from JSON definitions while registering dependencies and managing |
| `error-handling.mdx` | Handle Mastra workflow failures with retries, result status checks, lifecycle callbacks, conditional branches, step |
| `human-in-the-loop.mdx` | Pause Mastra workflows for approvals, reviews, or user input, then resume with supplied data, reject with bail, or |
| `overview.mdx` | Build deterministic Mastra workflows with typed steps, agents, tools, branching, parallel execution, loops, suspension |
| `scheduled-workflows.mdx` | Run Mastra workflows on one or more cron schedules, inspect trigger history in Studio, and pause or resume scheduled |
| `snapshots.mdx` | Store and retrieve Mastra workflow snapshots so suspended executions preserve step results and state and can resume |
| `suspend-and-resume.mdx` | Suspend Mastra workflows while waiting for external input, resources, or time, then resume saved runs with data and |
| `time-travel.mdx` | Debug Mastra workflows by re-executing from a selected step with new execution context, including nested steps |
| `workflow-state.mdx` | Share typed global state across Mastra workflow steps, initialize and update values, preserve state through suspension |
