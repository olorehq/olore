# Langfuse Table of Contents

## Directory Map

```
contents/
├── administration/                # Auth/SSO, RBAC, retention, audit logs, LLM connections (10 files)
├── api-and-data-platform/         # Public API, CLI, MCP server, exports, SDK queries (9 files)
├── evaluation/                    # Scores, LLM-as-a-judge, datasets, experiments (32 files)
├── gateway/                       # Langfuse AI Gateway setup, API keys, tracing (11 files)
├── metrics/                       # Dashboards and Metrics API (3 files)
├── observability/                 # Tracing concepts, features, SDKs, upgrade guides (43 files)
├── prompt-and-skill-management/   # Shared concepts for prompts and skills (2 files)
├── prompt-management/             # Prompt versioning, caching, playground (19 files)
└── skill-management/              # Versioned agent skills (4 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Platform overview | `contents/index.mdx` |
| Start tracing | `contents/observability/get-started.mdx` |
| SDK setup (Python/JS) | `contents/observability/sdk/overview.mdx` |
| Prompt management | `contents/prompt-management/get-started.mdx` |
| Evaluation | `contents/evaluation/overview.mdx` |
| Public API | `contents/api-and-data-platform/features/public-api.mdx` |
| Version compatibility | `contents/compatibility.mdx` |

## Detailed Structure

### (root) (4 files)

| File | Description |
|------|-------------|
| `compatibility.mdx` | Versions & Compatibility: How Langfuse server, SDK, and API versions relate across Langfuse Cloud and self-hosted deployments, including the SDK ↔ server compatibility matrix. |
| `docs-mcp.mdx` | Docs MCP Server: The Langfuse Docs MCP server exposes the Langfuse documentation to AI agents and coding assistants. |
| `index.mdx` | Overview: Langfuse is an open-source AI engineering platform (GitHub) that helps teams collaboratively debug, analyze, and iterate on their AI agent applications. |
| `security-and-guardrails.mdx` | Security & Guardrails: Comprehensive guide to LLM security guardrails — protect against prompt injection, PII leakage, and harmful content. |

### administration/ (10 files)

| File | Description |
|------|-------------|
| `audit-logs.mdx` | Audit Logs: Comprehensive audit logging in Langfuse tracks all system activities with detailed state capture and user attribution for enterprise security and compliance... |
| `authentication-and-sso.mdx` | Authentication & SSO: Overview of Single Sign-On (SSO) methods in Langfuse |
| `billable-units.mdx` | Billable Units: Learn how billable units are calculated in Langfuse. |
| `data-deletion.mdx` | Data Deletion: Delete data from Langfuse |
| `data-retention.mdx` | Data Retention: Configure project data retention and understand what happens to traces, Halo conversations, audit logs, dataset items, experiment results, and media. |
| `llm-connection.mdx` | LLM Connections: How to set up an LLM connection in Langfuse to use in the Playground or for LLM-as-a-Judge evaluations. |
| `rbac.mdx` | Access Control (RBAC): Langfuse offers extensive RBAC capabilities to manage project sharing and permissions across different organizations and projects. |
| `scim-and-org-api.mdx` | SCIM and Org API: Langfuse is open and meant to be extended via custom workflows and integrations. |
| `spend-alerts.mdx` | Spend Alerts: Get notified when your organization's spend exceeds predefined monetary thresholds to better manage your Langfuse Cloud costs. |
| `troubleshooting-and-faq.mdx` | Troubleshooting and FAQ: Troubleshooting and FAQ for administering Langfuse. |

### api-and-data-platform/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Overview: Langfuse is designed to be extensible and flexible. |

### api-and-data-platform/features/ (8 files)

| File | Description |
|------|-------------|
| `agent-skill.mdx` | Agent Skill: Install the Langfuse agent skill to give your coding agent access to Langfuse tracing, prompt management, datasets, and documentation — right from the editor. |
| `cli.mdx` | CLI: Interact with the full Langfuse API from the command line. |
| `export-from-ui.mdx` | Export from UI: Export your Langfuse observability data from the UI for analysis, fine-tuning, and integration with external tools. |
| `export-to-blob-storage.mdx` | Export to blob storage: Export enriched observations, scores, and legacy traces and observations to Blob Storage, e.g. |
| `halo.mdx` | Halo: Use the same Langfuse project tools as external coding agents, directly from the Langfuse UI. |
| `mcp-server.mdx` | MCP Server: Native Model Context Protocol (MCP) server for Langfuse, enabling AI assistants to interact with your Langfuse data programmatically. |
| `public-api.mdx` | Public API: All Langfuse data and features are available via the API. |
| `query-via-sdk.mdx` | Query via SDKs: Query Langfuse data via Python and JS/TS SDKs using the high-performance data APIs. |

### evaluation/ (2 files)

| File | Description |
|------|-------------|
| `core-concepts.mdx` | Concepts: Learn the fundamental concepts behind LLM evaluation in Langfuse - Scores, Evaluation Methods, Datasets, and Experiments. |
| `overview.mdx` | Overview: With Langfuse you can capture all your LLM evaluations in one place. |

### evaluation/evaluation-methods/ (6 files)

| File | Description |
|------|-------------|
| `annotation-queues.mdx` | Annotation Queues: Manage your annotation tasks with ease using our new workflow tooling. |
| `code-evaluators.mdx` | Code evaluators: Use Python or TypeScript code in Langfuse to run deterministic evaluations on observations and experiments. |
| `decision-models.mdx` | Decision model evaluators: Use OpenAI or TypeSafe decision models to ask typed questions about observations and write structured evaluation scores. |
| `llm-as-a-judge.mdx` | LLM-as-a-Judge: Learn how LLM-as-a-Judge evaluation works — use large language models to automatically score, evaluate, and monitor your LLM application outputs at scale... |
| `scores-via-sdk.mdx` | Scores via API/SDK: Ingest custom scores via the Langfuse SDKs or API. |
| `scores-via-ui.mdx` | Scores via UI: Annotate traces and observations with scores in the Langfuse UI to record human-in-the-loop evaluations. |

### evaluation/experiments/ (7 files)

| File | Description |
|------|-------------|
| `compare-experiments.mdx` | Compare experiments: Compare application versions against a baseline, inspect individual regressions, and review failures in Langfuse. |
| `data-model.mdx` | Experiments Data Model: Data model for Datasets, DatasetItems, DatasetRuns, DatasetRunItems, and function definitions for Tasks and Evaluators. |
| `datasets.mdx` | Datasets: Use Langfuse Datasets to create structured experiments to test and benchmark LLM applications. |
| `experiments-ci-cd.mdx` | Experiments in CI/CD: Run Langfuse experiments in CI and gate changes before production. |
| `experiments-via-opentelemetry.mdx` | Experiments via OpenTelemetry: Group OpenTelemetry traces as Langfuse experiments by attaching experiment and item attributes. |
| `experiments-via-sdk.mdx` | Experiments via SDK: Start experiments via the Langfuse SDK to programmatically test your application |
| `experiments-via-ui.mdx` | Experiments via UI: Experiment with different prompt versions and models on a dataset and compare the results side-by-side directly from the Langfuse UI. |

### evaluation/get-started/ (2 files)

| File | Description |
|------|-------------|
| `offline.mdx` | Evaluate with Datasets: Run your first offline evaluation on a Langfuse dataset and compare prompt changes. |
| `online.mdx` | Evaluate Production Traffic: Score live production traces in Langfuse. |

### evaluation/more/ (2 files)

| File | Description |
|------|-------------|
| `agentic-access.mdx` | Agentic access: Let AI agents work with scores, datasets, experiments, evaluators, and annotation queues through the Agent Skill, CLI, or MCP server. |
| `troubleshooting-and-faq.mdx` | Troubleshooting and FAQ: Troubleshooting and FAQ for Langfuse Evaluation. |

### evaluation/scores/ (3 files)

| File | Description |
|------|-------------|
| `data-model.mdx` | Data Model: Data model for Score and ScoreConfig objects in Langfuse. |
| `overview.mdx` | Overview: Scores are Langfuse's universal data object for storing evaluation results. |
| `score-analytics.mdx` | Analytics: Analyze and compare evaluation scores to validate reliability, uncover insights, and track quality trends in your LLM application. |

### gateway/ (3 files)

| File | Description |
|------|-------------|
| `concepts.mdx` | Concepts: How the Langfuse AI Gateway routes model calls, which keys and credentials are involved, how a request reaches a model, and how each call becomes a Langfuse... |
| `overview.mdx` | Overview: Send OpenAI and Anthropic API calls through Langfuse to trace every model call, keep provider keys in one place, and track cost, with no SDK or code changes. |
| `troubleshooting-and-faq.mdx` | Troubleshooting and FAQ: Fix common Langfuse AI Gateway errors and review the known limitations of the beta. |

### gateway/features/ (5 files)

| File | Description |
|------|-------------|
| `analytics.mdx` | Analytics: Track cost, requests, and tokens of the Langfuse AI Gateway per user, API key, and model, and build your own dashboards in the gateway's ingestion project. |
| `api-keys.mdx` | Authentication: Gateway API keys authenticate clients to the Langfuse AI Gateway. |
| `models.mdx` | Model management: See which models the Langfuse AI Gateway can call, enable or disable models per provider credential, and choose the right model ID for your client. |
| `rest-api.mdx` | REST API: Base URLs, authentication, and endpoints of the Langfuse AI Gateway, including the models endpoints and the OpenAI Responses, OpenAI Chat Completions, and... |
| `tracing.mdx` | Tracing: What the Langfuse AI Gateway records for every model call, the FULL and USAGE ingestion modes, where gateway traces are stored, and the request headers that... |

### gateway/get-started/ (2 files)

| File | Description |
|------|-------------|
| `admin-setup.mdx` | Set up Gateway as an admin: Set up the Langfuse AI Gateway for an organization. |
| `first-request.mdx` | Send your first request: Create a personal gateway API key, connect your coding agent, SDK, or app to the Langfuse AI Gateway, and see your first trace. |

### metrics/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Overview: Improve your LLM application with open source metrics tracking latency, cost, and quality across various dimensions. |

### metrics/features/ (2 files)

| File | Description |
|------|-------------|
| `custom-dashboards.mdx` | Custom Dashboards: Create powerful, customizable dashboards to visualize, monitor, and share insights from your LLM application data with flexible metrics, rich filtering, and... |
| `metrics-api.mdx` | Metrics API: Retrieve custom metrics from Langfuse for flexible analytics and reporting. |

### observability/ (5 files)

| File | Description |
|------|-------------|
| `best-practices.mdx` | What does a good trace look like?: Best practices for structuring Langfuse traces — scope, nesting, naming, input/output, and attributes — so that debugging, evaluation, and cost tracking... |
| `data-model.mdx` | Concepts: Langfuse (open source) helps you trace and analyze LLM applications. |
| `get-started.mdx` | Get Started: Get started with LLM observability with Langfuse in minutes before diving into all platform features. |
| `overview.mdx` | Overview: Open source application tracing and observability for LLM apps. |
| `troubleshooting-and-faq.mdx` | Troubleshooting & FAQ: Troubleshooting and FAQ for Langfuse Tracing. |

### observability/features/ (27 files)

| File | Description |
|------|-------------|
| `agent-graphs.mdx` | Agent Graphs: Visualize and analyze complex agent workflows with Langfuse's agent graph view — as an aggregated overview or an expanded, as-it-ran DAG. |
| `agentic-access.mdx` | Agentic access: Let AI agents investigate observations, query metrics, and work with your Langfuse observability data through the Agent Skill, CLI, or MCP server. |
| `alerts.mdx` | Alerts: Set threshold-based alerts on your LLM application metrics and route notifications through automations when thresholds are breached. |
| `comments.mdx` | Comments: Add contextual comments to traces, observations, sessions, and prompts in Langfuse for team collaboration. |
| `corrections.mdx` | Corrections: Capture improved versions of LLM outputs directly in traces and observations to build better datasets and drive continuous improvement. |
| `environments.mdx` | Environments: Configure environments to organize your traces, observations, and scores. |
| `events-table-charts.mdx` | Chart any table: Toggle the Observations table into a chart over the same query. |
| `filter-search-bar.mdx` | Filter search bar: Filter and search traces and observations by typing — fields, operators, wildcards, aliases, and full-text search in one query bar with autocomplete. |
| `full-text-search.mdx` | Full-Text Search: Find content across the inputs, outputs, and metadata of your traces and observations with full-text search in Langfuse. |
| `log-levels.mdx` | Log Levels: Use Log Levels to control the verbosity of your logs and highlight errors and warnings. |
| `masking.mdx` | Masking: Configure masking to redact sensitive information from Langfuse SDK data and OpenTelemetry span attributes before they are sent to Langfuse. |
| `mcp-tracing.mdx` | MCP Tracing: End-to-end tracing of MCP clients and servers with Langfuse. |
| `metadata.mdx` | Metadata: Add custom metadata to your observations to better understand and correlate your observations |
| `multi-modality.mdx` | Multi-Modality: Langfuse fully supports multi-modal LLM traces, including text, images, audio, and attachments. |
| `observation-types.mdx` | Observation Types: Structured tracing with observation types in Langfuse |
| `pulse.mdx` | Pulse: A compact outlier chart strip above the Observations table. |
| `queuing-batching.mdx` | Event queuing/batching: Queuing/batching configuration for Langfuse Tracing. |
| `releases-and-versioning.mdx` | Releases & Versioning: Langfuse allows for rapid iteration on LLM applications by providing insights into the effect of experiments such as A/B tests on LLM costs, latencies and... |
| `sampling.mdx` | Sampling: Configure sampling to control the volume of traces collected by the Langfuse server. |
| `sessions.mdx` | Sessions: Track LLM chat conversations or threads across multiple observations and traces into a single session. |
| `tags.mdx` | Tags: Tags help to filter and organize traces and observations in Langfuse based on use case, functions/apis used, environment and other criteria. |
| `token-and-cost-tracking.mdx` | Token & Cost Tracking: Langfuse tracks usage and cost of LLM generations for various models (incl OpenAI, Anthropic, Google, and more). |
| `trace-ids-and-distributed-tracing.mdx` | Trace IDs & Distributed Tracing: Use custom trace IDs and tracer IDs for distributed tracing in Langfuse. |
| `url.mdx` | Trace URLs: Each trace has a unique URL that you can use to share it with others or to access it directly. |
| `user-feedback.mdx` | User Feedback: Collect user feedback on LLM or agent outputs to improve model performance and user satisfaction. |
| `users.mdx` | User Tracking: User-level LLM observability to track token usage, usage volume and individual user feedback. |
| `web-callouts.mdx` | Web Callouts: Trigger an HTTP callout from a trace, observation, or session in Langfuse. |

### observability/sdk/ (4 files)

| File | Description |
|------|-------------|
| `advanced-features.mdx` | Advanced Features: Configure masking, logging, sampling, multi-project routing, evaluations, and environment-specific behaviors for Python and JS/TS. |
| `instrumentation.mdx` | Instrumentation: Use native integrations or custom instrumentation patterns in Python and JavaScript/TypeScript to capture rich traces. |
| `overview.mdx` | Overview: Fully typed SDKs for Python and JavaScript/TypeScript with unified setup, instrumentation, and advanced guidance. |
| `troubleshooting-and-faq.mdx` | Troubleshooting & FAQ: Resolve common Python and JS/TS SDK issues with side-by-side guidance. |

### observability/sdk/upgrade-path/ (7 files)

| File | Description |
|------|-------------|
| `index.mdx` | Upgrade path: Migration guides for Python SDK v4 → v5, v3 → v4, v2 → v3 and JS/TS SDK v5 → v6, v4 → v5, v3 → v4. |
| `js-v3-to-v4.mdx` | JS/TS v3 → v4: Migration guide for upgrading the Langfuse JS/TS SDK from v3 to v4. |
| `js-v4-to-v5.mdx` | JS/TS v4 → v5: Migration guide for upgrading the Langfuse JS/TS SDK from v4 to v5. |
| `js-v5-to-v6.mdx` | JS/TS v5 → v6: Migration guide for upgrading the Langfuse JS/TS SDK from v5 to v6. |
| `python-v2-to-v3.mdx` | Python v2 → v3: Migration guide for upgrading the Langfuse Python SDK from v2 to v3. |
| `python-v3-to-v4.mdx` | Python v3 → v4: Migration guide for upgrading the Langfuse Python SDK from v3 to v4. |
| `python-v4-to-v5.mdx` | Python v4 → v5: Migration guide for upgrading the Langfuse Python SDK from v4 to v5. |

### prompt-and-skill-management/ (2 files)

| File | Description |
|------|-------------|
| `concepts.mdx` | Concepts: Core concepts of Langfuse Prompt and Skill Management, including runtime behavior, versioning, labels, structure, and configuration. |
| `overview.mdx` | Overview: Manage and version your prompts and agent skills in Langfuse (open source). |

### prompt-management/ (3 files)

| File | Description |
|------|-------------|
| `get-started.mdx` | Get Started: Get started with Langfuse Prompt Management. |
| `overview.mdx` | Overview: Manage and version your prompts in Langfuse (open source). |
| `troubleshooting-and-faq.mdx` | Troubleshooting and FAQ: Troubleshooting and FAQ for Langfuse Prompt and Skill Management. |

### prompt-management/features/ (15 files)

| File | Description |
|------|-------------|
| `a-b-testing.mdx` | A/B Testing: Use Open Source Prompt Management in Langfuse to systematically test and improve your LLM prompts with A/B testing. |
| `agentic-access.mdx` | Agentic Prompt Management: Let AI agents retrieve, create, migrate, and update Langfuse prompts through the Agent Skill, CLI, or MCP server. |
| `caching.mdx` | Caching: Langfuse prompts are cached client-side in the SDKs, so there's no latency impact after the first use. |
| `composability.mdx` | Prompt Composability: Reference other prompts in your prompts using a simple tag format. |
| `config.mdx` | Config: The prompt config in Langfuse is an optional JSON object attached to each prompt that stores structured data such as model parameters (like model name,... |
| `folders.mdx` | Folders: Organize prompts into virtual folders to group prompts with similar purposes. |
| `github-integration.mdx` | GitHub Integration: Integrate Langfuse prompts with GitHub using webhooks for version control, CI/CD workflows, and automated synchronization |
| `guaranteed-availability.mdx` | Guaranteed Availability: Ensure 100% availability of prompts by pre-fetching them on application startup and providing a fallback prompt. |
| `link-to-traces.mdx` | Link to Traces: Link Langfuse Prompts to Traces. |
| `message-placeholders.mdx` | Message Placeholders: Use message placeholders in chat prompts to insert a list of chat messages at specific positions within a chat prompt. |
| `n8n-node.mdx` | n8n Node: Community-maintained n8n node that enables seamless integration of Langfuse prompt management capabilities into n8n workflows. |
| `playground.mdx` | Playground: Test, iterate, and compare different prompts and models within the LLM Playground. |
| `prompt-version-control.mdx` | Version Control: Use prompt labels to fetch specific prompt versions in the SDKs. |
| `variables.mdx` | Variables: Insert dynamic text into prompts using variables that are resolved at runtime. |
| `webhooks-slack-integrations.mdx` | Webhooks: Use webhooks to receive real‑time notifications whenever a prompt version is created, updated, or deleted in Langfuse. |

### skill-management/ (4 files)

| File | Description |
|------|-------------|
| `get-started.mdx` | Get Started: Create a versioned agent skill and load it with the CLI, Python SDK, JavaScript/TypeScript SDK, or REST API. |
| `overview.mdx` | Overview: Manage agent instructions and supporting files as versioned skills in Langfuse. |
| `tracing.mdx` | Link to Traces: Report available skills on generations and inspect skill-loading tools in Langfuse traces. |
| `version-control.mdx` | Version Control: Use skill labels to fetch specific skill versions with the CLI, SDKs, or API. |
