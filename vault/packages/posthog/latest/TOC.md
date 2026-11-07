# posthog Table of Contents

## Directory Map

```
contents/
├── getting-started/     # Start here, install and first steps (7 files)
├── new-to-posthog/      # Onboarding by role/use case (8 files)
├── libraries/           # SDK references: JS, Python, Node, mobile, etc. (75 files)
├── product-analytics/   # Events, insights, dashboards, cohorts (60 files)
├── feature-flags/       # Flags, rollout, local evaluation (66 files)
├── experiments/         # A/B testing and experiments (59 files)
├── session-replay/      # Session recordings (41 files)
├── error-tracking/      # Exceptions, source maps, alerts (74 files)
├── web-analytics/       # Traffic and web vitals (46 files)
├── surveys/             # In-app surveys (33 files)
├── ai-observability/    # LLM analytics and tracing (88 files)
├── data-pipelines/      # Destinations, sources, transformations, batch exports (86 files)
├── data-warehouse/      # External data and SQL (37 files)
├── workflows/           # Messaging and automation (40 files)
├── logs/ metrics/ distributed-tracing/   # Observability products
├── api/                 # REST API reference (22 files)
├── self-host/ privacy/ advanced/ settings/ billing/  # Operations and configuration
└── (other product areas: endpoints, mcp-analytics, model-context-protocol, posthog-ai, ...)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/getting-started/start-here.mdx` |
| Install an SDK | `contents/libraries.mdx` |
| Use the CLI | `contents/cli.mdx` |
| Term lookup | `contents/glossary.mdx` |
| API lookup | `contents/api/` |
| Feature flag patterns | `contents/feature-flag-use-cases.md` |
| Support | `contents/support-options.md` |

## Detailed Structure

### (root) (6 files)

| File | Description |
|------|-------------|
| `activity.mdx` | Activity tab: The activity tab is a customizable list of events that you've captured. It's great for checking events are being captured,... |
| `cli.mdx` | PostHog CLI: The PostHog CLI lets you use PostHog from your terminal, your coding agents, local scripts, and CI/CD pipelines. |
| `feature-flag-use-cases.md` | Feature flags are a very powerful piece of functionality that can be used in a wide variety of ways. How you use them will... |
| `glossary.mdx` | Glossary: PostHog is an incredibly broad platform, with many distinct features and tools. As a result, it's hugely powerful -- but can... |
| `libraries.mdx` | PostHog provides a number of both official and community maintained libraries to help you easily integrate with your preferred... |
| `support-options.md` | Support options: PostHog provides a free basic level of support to everyone via the community, with additional support options available for... |

### advanced/ (5 files)

| File | Description |
|------|-------------|
| `browser-extension.md` | Do you have a Firefox, Safari, or Chrome browser extension and want to understand how it's being used? PostHog is the perfect... |
| `cdp.md` | Using PostHog with a CDP: CDP stands for Customer Data Platform. It is a service that collects and unifies customer data from many sources and then... |
| `content-security-policy.md` | As described on MDN: Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain... |
| `infra-as-code.mdx` | Definitions lets you manage PostHog dashboards, insights, feature flags, actions, cohorts, endpoints, event definitions,... |
| `proxy.mdx` | Deploy a reverse proxy: A reverse proxy helps you capture more complete usage data. Ad blockers maintain lists of known analytics domains and block... |

### advanced/proxy/ (17 files)

| File | Description |
|------|-------------|
| `caddy.mdx` | Caddy reverse proxy: This guide shows you how to configure Caddy as a reverse proxy for PostHog. |
| `cloudflare.mdx` | Cloudflare Workers has no egress fees and includes a generous free tier (100,000 requests/day), which makes it one of the... |
| `cloudfront.mdx` | Proxying routes all PostHog traffic – events, session recordings, feature flag polls, and SDK assets – through CloudFront,... |
| `kubernetes-ingress-controller.mdx` | Kubernetes reverse proxy: This guide shows you how to use a Kubernetes Ingress Controller to proxy PostHog. |
| `managed-reverse-proxy.mdx` | Managed reverse proxy |
| `netlify.mdx` | Netlify reverse proxy: Proxying routes all PostHog traffic – events, session recordings, feature flag polls, and SDK assets – through Netlify, which... |
| `nextjs-middleware.mdx` | The proxy file runs on every matching request, so all PostHog traffic – events, session recordings, feature flag polls, and... |
| `nextjs.mdx` | Rewrites route all PostHog traffic – events, session recordings, feature flag polls, and SDK assets – through your Next.js... |
| `nginx.mdx` | nginx reverse proxy: This guide shows you how to use nginx as a reverse proxy for PostHog. |
| `node.mdx` | Node reverse proxy: This guide shows you how to use Node.js as a reverse proxy for PostHog using the built-in fetch API and http module. |
| `nuxt.mdx` | Nuxt reverse proxy: Server routes run on the server, so all PostHog traffic – events, session recordings, feature flag polls, and SDK assets –... |
| `pomerium.mdx` | Pomerium reverse proxy: This guide shows you how to use Pomerium as a reverse proxy for PostHog. |
| `proxy-reference.mdx` | Self-hosted proxy reference: This page covers requirements and troubleshooting for self-hosted reverse proxies. For platform-specific setup, see the... |
| `railway.mdx` | Railway reverse proxy: Proxying routes all PostHog traffic – events, session recordings, feature flag polls, and SDK assets – through your Railway... |
| `remix.mdx` | Remix reverse proxy: Resource routes run on the server, so all PostHog traffic – events, session recordings, feature flag polls, and SDK assets –... |
| `sveltekit.mdx` | The handle hook runs on every request, so all PostHog traffic – events, session recordings, feature flag polls, and SDK assets... |
| `vercel.mdx` | Vercel reverse proxy: Proxying routes all PostHog traffic – events, session recordings, feature flag polls, and SDK assets – through Vercel, which... |

### ai-engineering/ (4 files)

| File | Description |
|------|-------------|
| `ai-wizard.mdx` | AI wizard: The PostHog wizard is an agentic CLI tool that uses AI to set up and manage PostHog in your codebase. By default, it installs... |
| `index.mdx` | AI engineering is the practice of integrating, building, and shipping software that utilizes LLMs. |
| `markdown-llms-txt.mdx` | Markdown and llms.txt: LLMs and AI agents love Markdown. Us too. So we've made PostHog's documentation available in Markdown for developers to copy,... |
| `wizard-signup.mdx` | You don't need to fill out a signup form to start using PostHog. The AI wizard can create a brand-new PostHog account, spin up... |

### ai-evals/ (4 files)

| File | Description |
|------|-------------|
| `datasets.mdx` | Datasets are currently in beta. We'd love your feedback as we develop the feature. |
| `index.mdx` | Evaluations automatically assess the quality of your LLM generations. PostHog supports three types of evaluations: |
| `offline-evals.mdx` | Offline evals test your AI agent against a set of known inputs. Run them locally or in your CI to check whether a prompt,... |
| `taggers.mdx` | Taggers automatically classify and label generations so you can filter, group, and analyze your LLM traffic by the categories... |

### ai-observability/ (31 files)

| File | Description |
|------|-------------|
| `analyze-traces-ai.mdx` | PostHog AI investigates LLM traces, analyzes costs, and monitors quality trends across your AI products using natural... |
| `basics.mdx` | AI Observability basics: This page covers how your LLM calls become analytics in PostHog and defines key concepts for AI Observability. |
| `calculating-costs.mdx` | Calculating LLM costs: PostHog calculates cost based on the number of input (prompt) and output (completion) tokens generated by specific AI models,... |
| `clusters.mdx` | Clusters automatically group similar LLM traces or generations together, helping you discover patterns in how users interact... |
| `collect-user-feedback.mdx` | Collecting user feedback: User feedback is currently in beta. We'd love to hear your feedback as we develop this feature: |
| `custom-parser.mdx` | Custom parsers are currently in beta. We'd love to hear your feedback as we develop this feature. |
| `custom-properties.mdx` | Custom properties in AI Observability enable you to add metadata to your AI generations, making it easier to filter, analyze,... |
| `dashboard.md` | The AI Observability dashboard provides an overview of your LLM usage and performance. Out of the box, it includes insights on: |
| `data-retention.mdx` | PostHog retains the largest properties on $ai events for 30 days. LLM conversations can be large, so storing these properties... |
| `demos.mdx` | Demos & examples: Explore real-world examples of AI Observability in action. These projects demonstrate different ways to integrate PostHog's AI... |
| `embeddings.mdx` | Embeddings are calls to embedding models that convert text into vector representations for semantic search, RAG... |
| `errors.mdx` | Errors: The Errors tab groups and aggregates error messages from your LLM application, helping you identify patterns and prioritize... |
| `generations.mdx` | Generations are events that capture LLM calls and their responses. They represent interactions and conversations with an AI... |
| `index.mdx` | AI Observability captures every call your AI product makes to an LLM – the prompt, the response, the tokens, the cost, the... |
| `large-events.mdx` | Large event capture is in public beta, available in posthog-python 7.39+ and posthog-node 5.49+ (with @posthog/ai 8.8+). We'd... |
| `link-error-tracking.mdx` | Link error tracking: Connect your LLM events to error tracking to debug failures and monitor exceptions in your AI workflows. This integration... |
| `link-session-replay.mdx` | Link session replay: Connecting your backend LLM events to frontend session replays provides complete visibility into the user journey, helping you... |
| `playground.mdx` | Playground: The playground lets you test and experiment with LLM prompts directly inside PostHog. Try different models, compare outputs... |
| `privacy-mode.mdx` | Privacy mode: To avoid storing potentially sensitive prompt, reasoning, and completion data, you can enable privacy mode. This excludes the... |
| `self-driving.mdx` | Self-driving is in open beta. It's improving quickly – expect rough edges, and expect them to disappear fast. |
| `sentiment.mdx` | Sentiment classification automatically labels user messages in your LLM traces and generations as positive, neutral, or... |
| `sessions.mdx` | Sessions group multiple traces together using the $aisessionid property. |
| `skills.mdx` | PostHog ships agent skills for AI Observability that teach your coding agent how to investigate LLM traces, costs, clusters,... |
| `spans.mdx` | Spans are units of work within an LLM trace. These are events that represent individual operations and discrete durations... |
| `start-here.mdx` | AI Observability captures every call your product makes to an LLM and turns them into generations you can query, score, and... |
| `summarization.mdx` | Trace summarization uses AI to generate human-readable summaries of your LLM traces and events. This helps you quickly... |
| `tools.mdx` | Tools: The Tools tab shows which tools and functions your LLMs are calling, aggregated across all your $aigeneration events. This... |
| `trace-reviews.mdx` | Trace Reviews are the manual review workflow in AI Evals. They let your team inspect individual traces, apply structured... |
| `traces.mdx` | Traces are a collection of generations and spans that capture a full interaction between a user and an LLM. The traces tab... |
| `troubleshooting.mdx` | AI Observability troubleshooting: This page covers troubleshooting for AI Observability. For setup, see the installation guides. |
| `tutorials.mdx` | More AI Observability tutorials: Got a question which isn't answered below? Head to the community forum to let us know! |

### ai-observability/installation/ (47 files)

| File | Description |
|------|-------------|
| `anthropic.mdx` | Anthropic AI Observability installation |
| `autogen.mdx` | AutoGen AI Observability installation |
| `aws-bedrock.mdx` | AWS Bedrock AI Observability installation |
| `azure-openai.mdx` | PostHog.AI adds AI observability for .NET applications using Azure OpenAI. It is currently pre-release, so expect breaking... |
| `cerebras.mdx` | Cerebras AI Observability installation |
| `claude-agent-sdk.mdx` | Claude Agent SDK AI Observability installation |
| `claude-code.mdx` | Claude Code AI Observability installation |
| `cloudflare-ai-gateway.mdx` | Cloudflare AI Gateway observability installation |
| `cohere.mdx` | Cohere AI Observability installation |
| `convex.mdx` | Convex AI Observability installation |
| `crewai.mdx` | CrewAI observability installation |
| `dedalus.mdx` | Dedalus Labs AI Observability installation |
| `deepseek.mdx` | DeepSeek AI Observability installation |
| `dspy.mdx` | DSPy AI Observability installation |
| `eve.mdx` | Eve AI observability installation |
| `fireworks-ai.mdx` | Fireworks AI Observability installation |
| `google-adk.mdx` | Google ADK observability installation |
| `google.mdx` | Google AI Observability installation |
| `groq.mdx` | Groq AI Observability installation |
| `helicone.mdx` | Helicone AI Observability installation |
| `hugging-face.mdx` | Hugging Face AI Observability installation |
| `index.mdx` | Install PostHog in seconds with our wizard by running this command in your project directory with your terminal (it also works... |
| `instructor.mdx` | Instructor AI Observability installation |
| `langchain.mdx` | LangChain AI Observability installation |
| `langgraph.mdx` | LangGraph AI Observability installation |
| `litellm.mdx` | LiteLLM AI Observability installation |
| `llamaindex.mdx` | LlamaIndex AI Observability installation |
| `manual-capture.mdx` | Manual capture AI Observability installation: For large events, use the dedicated AI ingestion path – see capturing large AI events. |
| `mastra.mdx` | Mastra AI Observability installation |
| `mirascope.mdx` | Mirascope AI Observability installation |
| `mistral.mdx` | Mistral AI Observability installation |
| `ollama.mdx` | Ollama AI Observability installation |
| `openai-agents.mdx` | OpenAI Agents SDK observability installation |
| `openai.mdx` | PostHog.AI adds AI observability for .NET applications using OpenAI. It is currently pre-release, so expect breaking changes... |
| `openclaw.mdx` | OpenClaw AI Observability installation |
| `opencode.mdx` | OpenCode AI Observability installation |
| `openrouter.mdx` | OpenRouter AI Observability installation |
| `opentelemetry.mdx` | The OTLP path caps each export at 4MB and each resulting AI event at 8MB. An export over 4MB is rejected with HTTP 413, while... |
| `perplexity.mdx` | Perplexity AI Observability installation |
| `pi.mdx` | Pi Coding Agent AI Observability installation |
| `portkey.mdx` | Portkey AI Observability installation |
| `pydantic-ai.mdx` | Pydantic AI Observability installation |
| `semantic-kernel.mdx` | Semantic Kernel AI Observability installation |
| `smolagents.mdx` | smolagents AI Observability installation |
| `together-ai.mdx` | Together AI Observability installation |
| `vercel-ai.mdx` | Vercel AI SDK observability installation |
| `xai.mdx` | xAI Observability installation |

### ai-observability/integrations/ (5 files)

| File | Description |
|------|-------------|
| `helicone-posthog.mdx` | You can integrate with Helicone and bring data into PostHog for analysis. Additionally, we offer a dashboard template to help... |
| `index.mdx` | Outside of our native AI Observability app, we've teamed up with various third-party platforms to track metrics for LLM apps. |
| `keywords-ai-posthog.mdx` | You can integrate with Keywords AI and bring data into PostHog for analysis. Additionally, we offer a dashboard template to... |
| `langfuse-posthog.mdx` | You can integrate with Langfuse and bring data into PostHog for analysis. Additionally, we offer a dashboard template to help... |
| `traceloop-posthog.mdx` | Traceloop and OpenLLMetry: There are two ways to bring Traceloop data into PostHog for analysis: |

### ai-observability/surfaces/ (3 files)

| File | Description |
|------|-------------|
| `api.mdx` | AI Observability API: The API is both how trace data gets into PostHog and how you drive AI Observability from your own code. Your app sends LLM... |
| `mcp.mdx` | The PostHog MCP server lets your AI coding agent query LLM traces directly from your code editor. Check costs, monitor errors,... |
| `web-app.mdx` | The PostHog web app is where you actually read your AI product's traces. Open AI Observability in PostHog and you land on a... |

### ai-observability/user-feedback/ (2 files)

| File | Description |
|------|-------------|
| `manual-event-capture.mdx` | If you are not building a React app or otherwise need more control (such as a completely custom followup UI), you can capture... |
| `use-thumb-survey.mdx` | To quickly integrate with your React app, we provide a hook useThumbSurvey that exposes a method to submit survey responses,... |

### ai-research/ (1 files)

| File | Description |
|------|-------------|
| `image-fetcher-bot.mdx` | Image fetcher bot: PostHog runs a bot that downloads images referenced by session recordings. This page explains what it does, how to identify... |

### alerts/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Alerts enable you to monitor your insights and get notified when something important changes. You can set fixed thresholds... |

### api/ (7 files)

| File | Description |
|------|-------------|
| `capture.mdx` | The /i/v0/e and /batch endpoints are the main way to send events to PostHog. Beyond user behavior, they are also used to... |
| `flags.mdx` | The flags endpoint is used to evaluate feature flags for a given distinctid. This means it is the main endpoint not only for... |
| `index.mdx` | API overview: PostHog has a powerful API that enables you to capture, evaluate, create, update, and delete nearly all of your information in... |
| `oauth.mdx` | OAuth integration: PostHog supports OAuth 2.0 for third-party applications to access PostHog on behalf of users. This page explains how to... |
| `personal-api-keys.mdx` | Personal API keys authenticate requests to PostHog's private GET, POST, PATCH, and DELETE endpoints. They're the right choice... |
| `queries.mdx` | API queries enable you to query your data in PostHog. This is useful for: |
| `scopes.mdx` | API scopes: A scope grants access to one part of PostHog, such as feature flags or insights. You choose scopes when you create a personal... |

### api/endpoints/ (1 files)

| File | Description |
|------|-------------|
| `endpoint_run.mdx` | endpoint_run.mdx: This is the main endpoint for running predefined queries from PostHog. |

### api/events/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | overview.mdx: The events API is deprecated. If you're using the events API to export data, you need to migrate to data pipeline batched... |

### api/feature-flags/ (2 files)

| File | Description |
|------|-------------|
| `feature_flags_list.mdx` | feature_flags_list.mdx: This endpoint returns a list of feature flags and their details like name, key, variants, rolloutpercentage, and more. |
| `feature_flags_retrieve.mdx` | feature_flags_retrieve.mdx: This endpoint returns a feature flag and its details like name, key, variants, rolloutpercentage, and more. |

### api/groups/ (1 files)

| File | Description |
|------|-------------|
| `groups_list.mdx` | groups_list.mdx: This endpoint returns a list of groups. |

### api/persons/ (5 files)

| File | Description |
|------|-------------|
| `persons_delete_property_create.mdx` | persons_delete_property_create.mdx: It is better to use the capture API to change person properties. |
| `persons_destroy.mdx` | persons_destroy.mdx: This is the main way to delete data in PostHog. |
| `persons_list.mdx` | persons_list.mdx: You can also use the query endpoint to retrieve persons. It enables you to use SQL to query the persons table. |
| `persons_partial_update.mdx` | persons_partial_update.mdx: It is better to use the capture API to update person properties. |
| `persons_update_property_create.mdx` | persons_update_property_create.mdx: It is better to use the capture API to update person properties. |

### api/project-secret-api-keys/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | overview.mdx: Project secret API keys are server-to-server credentials scoped to a single project. They're the right choice when a backend... |

### api/projects/ (2 files)

| File | Description |
|------|-------------|
| `create_2.mdx` | create_2.mdx: In most cases, we recommend using a single project across your product, but if you want to programmatically create multiple... |
| `list_2.mdx` | list_2.mdx: Returns a list of projects in your organization. |

### api/query/ (1 files)

| File | Description |
|------|-------------|
| `query_create.mdx` | query_create.mdx: This is the main endpoint for querying data from PostHog. You can find all the details on what it does and how you can use it... |

### api/session-recordings/ (1 files)

| File | Description |
|------|-------------|
| `session_recordings_list.mdx` | This endpoint does not provide the raw JSON of the replays. To get the raw JSON, you need to click Export as JSON in the... |

### billing/ (5 files)

| File | Description |
|------|-------------|
| `common-questions.md` | PostHog is usage-based and you can use it for free for as long as you want, no trial needed. See our pricing page for free... |
| `estimating-usage-costs.mdx` | It can be daunting to figure out how much a usage-based platform like PostHog will cost, but there are simple ways to estimate... |
| `limits-alerts.md` | Billing limits and alerts: To help you avoid surprise bills, PostHog enables you to set billing limits for most of our products (see the exception).... |
| `pre-paid-plans.md` | Pre-paid plans: We offer pre-paid plans to companies who are looking to commit to using PostHog longer term, as well as save some money whilst... |
| `spike-detection.md` | Spike detection is a system that monitors customer usage patterns and sends email alerts when unusual usage spikes (both... |

### business-knowledge/ (8 files)

| File | Description |
|------|-------------|
| `ai-data-processing.mdx` | Turn on AI data processing: PostHog AI, Support, and the Playground can't use a source until two checks pass. Until then, answers stay empty. |
| `github.mdx` | Your code is not indexed, and PostHog doesn't search inside files. Business Knowledge searches file names and README text,... |
| `index.mdx` | Business Knowledge stores the facts PostHog uses when it answers questions about your business. PostHog AI, Support, and the... |
| `learn-from-support.mdx` | Learn from support turns your team's replies to resolved Support tickets into reusable answers in Business Knowledge. It's off... |
| `playground.mdx` | The Playground shows what Business Knowledge holds right now, and what's missing. It has two tabs: Chat checks the answer a... |
| `sources.mdx` | Paste a policy, an FAQ, or any other text, and give the source a name. Edit the source when the text changes. Changes apply to... |
| `start-here.mdx` | Open Business Knowledge and choose Add source. Most teams start with their docs and website. Paste the URL and choose... |
| `where-to-use.mdx` | Where to use Business Knowledge: PostHog AI, Support, and MCP clients all read the same sources. A source is used only once it's ready. |

### cmd-k/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Command palette: Power users, rejoice! You can access many PostHog features using your keyboard. |

### components/ (1 files)

| File | Description |
|------|-------------|
| `AgentIntegrationSection.mdx` | AgentIntegrationSection.mdx |

### csp-tracking/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | You can add a Content Security Policy (CSP) to your website to prevent cross-site scripting (XSS) attacks. This is a security... |

### customer-analytics/ (12 files)

| File | Description |
|------|-------------|
| `b2b-mode.mdx` | B2B mode: Customer analytics dashboard has a button to choose between B2C and B2B mode. B2B mode is only available for organizations... |
| `configure-dashboard-with-ai.mdx` | Configure dashboard with AI: You can use PostHog AI to find the best events to configure your Customer Analytics dashboard with. |
| `configure-your-dashboard.mdx` | Configure your dashboard: The customer analytics dashboard gives you an overview of the metrics that matter when building toward product-market fit:... |
| `create-customer-journeys.mdx` | Create customer journeys: To create a new journey, go to Customer analytics → Journeys and click New journey. You have three options: |
| `create-usage-metrics.mdx` | Create usage metrics: You can create usage metrics in two ways: |
| `customer-journeys.mdx` | Customer journeys let you visualize how users move through key conversion steps in your product. They combine funnels and... |
| `customer-profiles.mdx` | Customer profiles consolidate everything about a customer in one place. Instead of jumping between different parts of PostHog... |
| `dashboard-metrics.mdx` | Dashboard metrics: The customer analytics dashboard kickstarts your demographic customer analysis with the insights that matter. But what... |
| `saved-views.mdx` | Saved views let you save column configurations, filters, and sort order for the persons and groups lists. This helps you... |
| `start-here.mdx` | Customer Analytics helps you understand your users without building dashboards from scratch. It tracks active users, signups,... |
| `troubleshooting.mdx` | Customer Analytics troubleshooting: This page covers troubleshooting for Customer Analytics. For setup, see the installation guides. |
| `usage-metrics.mdx` | Usage metrics let you define global activity measurements and track them for each customer. Any event performed by your users... |

### data/ (19 files)

| File | Description |
|------|-------------|
| `actions.mdx` | Actions are a way of combining several related events into one, which you can then analyze in insights and dashboards as if it... |
| `annotations.mdx` | Annotations enable you to add written notes to a particular day or time on all your insights and dashboards so you can see how... |
| `anonymous-vs-identified-events.mdx` | When using PostHog's mobile SDKs, any changes made to personProfiles configuration will only apply to users who have updated... |
| `channel-type.mdx` | Channel type is the type of acquisition channel the user came from, for example: |
| `cohorts.mdx` | Cohorts enable you to easily create a list of users who have something in common, such as completing an action or having the... |
| `comments.mdx` | Replay comments: Comments enable you to add written notes to a particular time on a session recording so you can highlight what you see. |
| `embedded-analytics-projects.mdx` | You can use PostHog to power analytics dashboards inside your product. Capture your customers' events in PostHog, query the... |
| `event-filtering.mdx` | Event ingestion filtering lets you drop events at ingestion time based on event metadata. Filters are evaluated early in the... |
| `events-retention.mdx` | Events data retention: This page covers the events retention periods available on each plan, how to set yours, and how deletion works. |
| `events.mdx` | Events: An event is the core unit of data in PostHog. It represents an interaction a user has with your app or website. Examples... |
| `index.mdx` | Data management: PostHog has many tools to manage all your data. |
| `ingestion-warnings.mdx` | Ingestion warnings: Sometimes PostHog runs into problems during ingestion due to incorrect or suboptimal usage of PostHog. For example, if you... |
| `persons.mdx` | People in PostHog represent the users behind your events. You can view them in the People tab. |
| `property-filters.mdx` | Property filters let you narrow down events, persons, groups, and feature flag targeting using operators on property values.... |
| `query-log.mdx` | Query log: The querylog table in PostHog's data warehouse provides access to query execution metadata and performance metrics. This table... |
| `realtime-cohorts.mdx` | Realtime cohorts are rolling out gradually and aren't switched on in most projects yet. To get access, join the waitlist in... |
| `sessions.mdx` | Sessions: A session is a set of events that try to capture a single use of your product or visit to your website. They are used in... |
| `timestamps.md` | Timestamps: PostHog automatically computes timestamps for captured events, but you can also set them manually. For example: |
| `utm-segmentation.mdx` | UTM segmentation: UTM parameters are a set of five parameters that enable you to track the effectiveness of marketing campaigns across traffic... |

### data-pipelines/ (5 files)

| File | Description |
|------|-------------|
| `fivetran-airbyte.md` | While ETL tools like Fivetran, Airbyte, and similar platforms often offer unofficial PostHog connectors, we do not recommend... |
| `hog-functions-ai.mdx` | PostHog AI writes Hog functions for transformations, filters, and realtime destinations using natural language. Describe what... |
| `index.mdx` | Data pipelines is how you move data from one place to another. You can move data independently without it touching any other... |
| `start-here.mdx` | Start here: Data pipelines has three moving parts, and you rarely need all of them at once. Start with the one that matches the problem... |
| `troubleshooting.md` | Customer Data Platform troubleshooting: This page covers troubleshooting for CDP. For setup, see the installation guides. |

### data-pipelines/batch-exports/ (8 files)

| File | Description |
|------|-------------|
| `azureblob.md` | Azure Blob Storage destination for batch exports: With batch exports, data can be exported to Azure Blob Storage. |
| `bigquery.mdx` | BigQuery destination for batch exports: Batch exports can be used to export data to a BigQuery table. |
| `databricks.mdx` | Databricks destination for batch exports: Batch exports can be used to export data to a Databricks Delta table. |
| `index.mdx` | Batch exports give you a platform to schedule data exports to supported destinations. Batch exports are built on Temporal to... |
| `postgres.mdx` | Postgres destination for batch exports: Batch exports can be used to export data to a Postgres table. |
| `redshift.mdx` | Batch exports can be used to export data to Redshift, Amazon's data warehouse product. There are two SQL commands that can be... |
| `s3.md` | Batch exports support two S3-family destinations: AWS S3 for buckets hosted on Amazon Web Services, and S3-compatible for any... |
| `snowflake.mdx` | Snowflake destination for batch exports: With batch exports, data can be exported to a Snowflake database table. |

### data-pipelines/destinations/ (46 files)

| File | Description |
|------|-------------|
| `activecampaign.md` | Send PostHog person data to ActiveCampaign: You'll also need access to the relevant ActiveCampaign account. |
| `airtable.md` | Send PostHog analytics to Airtable: It’s easier than ever to export realtime PostHog data to satisfy the Airtable fanatics in your life. |
| `appcues.md` | You'll also need access to an Appcues account with API access enabled. You can create API credentials under settings in... |
| `attio.md` | You can use your PostHog event data to create and update contacts in Attio. Here's everything you need to get started. |
| `avo.md` | Send PostHog event data to Avo: You'll also need access to the relevant Avo account. |
| `aws-kinesis.md` | Send PostHog event data to AWS Kinesis: Send event data from PostHog into an AWS Kinesis stream. |
| `braze.md` | Send PostHog event data to Braze: You'll also need access to the relevant Braze account. |
| `brevo.md` | You can use your PostHog event data to create and update contacts in Brevo. Here's everything you need to get started. |
| `close.md` | Sync your PostHog person data to Close as contacts. When a person triggers an event, PostHog searches Close for a contact with... |
| `customerio.md` | Send PostHog event data to Customer.io: You'll also need access to the relevant Customer.io account. |
| `customizing-destinations.mdx` | Customizing destinations: Although we recommend using one of our pre-built destinations, you can also customize them and build your own. |
| `discord.md` | Send PostHog analytics events to your Discord server: Send event data from PostHog into the Discord server and channel of your choice. |
| `elt-destinations.mdx` | ELT destinations: A source doesn't have to stop at PostHog. Point a table at your own database or object store, and PostHog writes the rows... |
| `engage.md` | Send PostHog person data to Engage: You'll also need access to the relevant Engage account. |
| `gleap.md` | Send PostHog person data to Gleap: You'll also need access to the relevant Gleap account. |
| `google-ads.md` | Send PostHog conversion events to Google Ads: You'll also need access to the relevant Google Ads account. |
| `google-cloud-storage.md` | Send PostHog event data to Google Cloud Storage: You'll also need access to the relevant Google Cloud account. |
| `google-pubsub.md` | Send PostHog event data to Google Pub/Sub: You'll also need access to the relevant Google Cloud account. |
| `hubspot.md` | Send PostHog person data to Hubspot: You'll also need access to the relevant Hubspot account. |
| `index.md` | Realtime analytics data exports: As PostHog data arrives, you can export it immediately to other tools. You can use this for things like: |
| `intercom.md` | Send contacts and PostHog events to Intercom: You'll also need access to the relevant Intercom account. |
| `june.md` | Send analytics events to June: You can send analytics events to June to enrich your customer data in real-time. |
| `klaviyo.md` | You can use your PostHog event data to create and update contacts in Klaviyo. Here's everything you need to get started. |
| `knock.md` | Send PostHog event data to Knock: You'll also need access to the relevant Knock account. |
| `loops.md` | You'll also need access to the relevant Loops account. See the Loops PostHog integration guide to configure and test both... |
| `mailgun.md` | Send PostHog person data to Mailgun: You'll also need access to the relevant Mailgun account. |
| `mailjet.md` | Send PostHog person data to Mailjet: You'll also need access to the relevant Mailjet account. |
| `make.md` | Send PostHog event data to Make: Trigger scenarios in Make based on PostHog events. |
| `meta-ads.md` | Send PostHog conversion events to Meta Ads: You'll also need access to the relevant Meta Ads account. |
| `microsoft-ads.md` | Send PostHog conversion events to Microsoft Ads: You'll also need access to the relevant Microsoft Advertising account. |
| `microsoft-teams.md` | Send PostHog analytics events to your Microsoft Teams server: Send event data from PostHog into the Microsoft Teams server and channel of your choice. |
| `monitoring.mdx` | Monitoring your syncs: The ELT page answers three questions: what stopped, what moved, and what's running. |
| `posthog.md` | Send PostHog event data to another PostHog instance: You'll also need access to the destination PostHog account. |
| `reddit-ads-conversion-api.md` | Send PostHog conversion events to Reddit Ads (Conversions API): You'll also need access to the relevant Reddit Ads account. |
| `reddit-ads-pixel.md` | You should be aware that this destination relies on creating third-party cookies. You'll also need access to the relevant... |
| `rudderstack.md` | Send PostHog event data to RudderStack: You'll also need access to the relevant RudderStack account. |
| `salesforce.md` | This destination connects to your Salesforce instance, sending events from PostHog to Salesforce as they are ingested. |
| `sendgrid.md` | Send PostHog person data to Sendgrid: You can also send person properties to custom fields in Sendgrid. |
| `slack.mdx` | Send PostHog event data to Slack webhooks: Use this destination to send custom messages into Slack based on PostHog events or actions. |
| `snapchat-ads.md` | Send PostHog conversion events to Snapchat Ads: You'll also need access to the relevant Snapchat Business account. |
| `tiktok-ads.md` | You should be aware that this destination relies on creating third-party cookies. You'll also need access to the relevant... |
| `twilio.md` | You can use your PostHog event data to send SMS messages via Twilio. Here's everything you need to get started. |
| `webhook.mdx` | With webhook destinations, you can send event data from PostHog to any HTTP endpoint, whether it's to your own backend, an... |
| `whatsapp.md` | You can use your PostHog event data to send WhatsApp messages via the WhatsApp Cloud API (Meta Graph API). Here's everything... |
| `zapier.md` | Send PostHog event data to Zapier: Trigger Zaps in Zapier based on PostHog events. |
| `zendesk.md` | Send PostHog person data to Zendesk: You can also send person properties to User fields in Zendesk. |

### data-pipelines/file-download-exports/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | File download exports let you export PostHog data on demand and download the results as Parquet or JSON Lines files. You start... |

### data-pipelines/sources/ (19 files)

| File | Description |
|------|-------------|
| `bigquery.md` | You can connect your BigQuery tables to PostHog by configuring it as a source. You must grant a limited set of permissions so... |
| `chargebee.md` | The Chargebee connector syncs your billing data – customers, subscriptions, invoices, events, and more – into PostHog, so you... |
| `github.md` | The GitHub connector syncs your repository data – issues, pull requests, commits, and more – into PostHog, so you can analyze... |
| `google-ads.md` | You can sync data from Google Ads reports by configuring it as a source in PostHog. The supported reports that can be synced... |
| `google-sheets.md` | Linking Google Sheets as a source: The Google Sheets connector can link your spreadsheets in to PostHog to be queryable. |
| `hubspot.md` | The HubSpot connector syncs your CRM data – contacts, companies, deals, tickets, quotes, emails, meetings, forecasts, and... |
| `klaviyo.md` | The Klaviyo connector syncs your marketing data – campaigns, profiles, events, flows, lists, and metrics – into PostHog, so... |
| `linear.md` | Linking Linear as a source: The Linear connector can link issues, projects, teams, users, comments, labels, cycles, and resources to PostHog. |
| `linkedin-ads.md` | You can sync data from LinkedIn Ads reports by configuring it as a source in PostHog. The supported reports that can be synced... |
| `mailchimp.md` | Linking Mailchimp as a source: The Mailchimp connector can link lists, campaigns, reports, and contacts to PostHog. |
| `meta-ads.md` | You can sync data from Meta Ads reports by configuring it as a source in PostHog. The supported reports that can be synced... |
| `mongodb.md` | Linking MongoDB as a source: The MongoDB connector can link your MongoDB collections to PostHog. |
| `reddit-ads.md` | You can sync data from Reddit Ads reports by configuring it as a source in PostHog. The supported reports that can be synced... |
| `salesforce.md` | The Salesforce connector syncs your CRM data – accounts, contacts, leads, opportunities, and more – into PostHog, so you can... |
| `shopify.md` | Linking Shopify as a source: The Shopify connector can sync your Shopify store data into PostHog. |
| `stripe.md` | The Stripe connector syncs your Stripe data into PostHog, including charges, customers, invoices, products, subscriptions, and... |
| `tiktok-ads.md` | You can sync data from TikTok Ads reports by configuring it as a source in PostHog. The supported reports that can be synced... |
| `vitally.md` | The Vitally connector can link accounts, users, conversations, notes, tasks, projects, meetings, admins, and more to PostHog. |
| `zendesk.md` | The Zendesk connector syncs your customer support data – tickets, ticket events, ticket metric events, ticket fields, users,... |

### data-pipelines/surfaces/ (3 files)

| File | Description |
|------|-------------|
| `api.mdx` | Data pipelines API: Use the API when you want pipelines to live in your own configuration rather than being clicked together in the UI –... |
| `mcp.mdx` | The PostHog MCP server gives AI agents and MCP clients direct access to your pipelines. Because pipeline functions are just... |
| `web-app.mdx` | The PostHog web app is where you build pipelines and watch them run. Sources, transformations, destinations, and batch exports... |

### data-pipelines/transformations/ (4 files)

| File | Description |
|------|-------------|
| `customizing-transformations.md` | We've got a great library to get you started with the most common transformation needs. If you want to go further, you can... |
| `downsampling-plugin.mdx` | Downsample: Reduces the volume of events coming into PostHog by keeping only a percentage of them. Events that aren't kept are dropped... |
| `drop-events.mdx` | Drop events: Selectively discard events from being ingested based on specific criteria. Dropped events are permanently removed from your... |
| `index.md` | Realtime transformations: As PostHog data arrives, you can transform it immediately before ingestion. You can use this for things like: |

### data-warehouse/ (13 files)

| File | Description |
|------|-------------|
| `cutting-costs.mdx` | Cutting data warehouse costs: Full table syncs are the most expensive way to sync data into the data warehouse, but aren't always necessary. |
| `index.mdx` | Data warehouse: The data warehouse brings your business data into PostHog and puts it next to your product data. Sync Stripe, Postgres,... |
| `insights.mdx` | After linking your source, you can use its data in a trend, funnel, lifecycle, or stickiness insight like you would event or... |
| `integrated-warehouse.mdx` | This page explains how PostHog&apos;s integrated data warehouse works and how it differs from warehouse-native tools. |
| `join.mdx` | Joining data: The real power of the data warehouse is the ability to combine data from multiple tables in a single query. Joins enable you... |
| `query.mdx` | Querying the data warehouse with SQL: PostHog provides the full flexibility of SQL to query your data warehouse using the SQL editor. |
| `start-here.mdx` | Data warehouse lets you store, query, and analyze your data in a unified platform, so you can build better products and make... |
| `troubleshooting.mdx` | Data Warehouse troubleshooting: This page covers troubleshooting for Data Warehouse sources and syncs. For setup, see the installation guides. For... |
| `tutorials.mdx` | Tutorials and guides: Got a question which isn't answered below? Head to the community forum to let us know! |
| `under-the-hood.md` | Under the hood: There are two types of data sources we are able to connect data from—integrations we've built and custom sources you can link. |
| `warehouse-native.mdx` | Is PostHog warehouse native?: PostHog and Snowflake's relationship status: It's complicated. |
| `warehouse-properties.mdx` | Warehouse properties copy columns from a synced data warehouse table onto your person properties and group properties. Each... |
| `write-sql-ai.mdx` | Write SQL with PostHog AI: PostHog AI generates and fixes HogQL queries from natural language. Describe the data you want, and PostHog AI writes the... |

### data-warehouse/data-quality/ (8 files)

| File | Description |
|------|-------------|
| `block-materialization.mdx` | Block materialization on failing checks: Found a bug, or have feedback? Contact support. |
| `check-types.mdx` | Data quality check types: Found a bug, or have feedback? Contact support. |
| `index.mdx` | Data quality: Found a bug, or have feedback? Contact support. |
| `mcp.mdx` | Data quality MCP and SQL reference: Found a bug, or have feedback? Contact support. |
| `metrics.mdx` | Test semantic layer metrics: Found a bug, or have feedback? Contact support. |
| `start-here.mdx` | Get started with data quality: Found a bug, or have feedback? Contact support. |
| `triggers.mdx` | Data quality triggers and schedules: Found a bug, or have feedback? Contact support. |
| `troubleshooting.mdx` | Data quality results and troubleshooting: Found a bug, or have feedback? Contact support. |

### data-warehouse/sql/ (4 files)

| File | Description |
|------|-------------|
| `data-access.mdx` | Accessing data using SQL: Quotation symbols work the same way they would work with ClickHouse, which inherits from ANSI SQL: |
| `index.mdx` | SQL editor: The SQL editor enables you to directly access all your data in PostHog, from PostHog-specific events and persons tables to... |
| `useful-functions.mdx` | Useful SQL functions: Our SQL flavor includes many functions to aggregate and manipulate queried data. Below are some examples of some of the most... |
| `variables.mdx` | SQL variables enable you to dynamically set values in your queries. |

### data-warehouse/surfaces/ (3 files)

| File | Description |
|------|-------------|
| `api.mdx` | The PostHog API covers the warehouse end to end – the sources you import from, the tables that data lands in, and the models... |
| `mcp.mdx` | The PostHog MCP server lets your AI coding agent run HogQL queries, manage data warehouse views, sync import sources, annotate... |
| `web-app.mdx` | The PostHog web app is home base for the data warehouse. It's where you link sources, watch them sync, write SQL across... |

### data-warehouse/views/ (5 files)

| File | Description |
|------|-------------|
| `failures-and-suspension.mdx` | When a materialized view fails to refresh, its stored table keeps the last successful result. Queries, insights, and Endpoints... |
| `freshness.mdx` | Every materialized view has a refresh cadence: how often PostHog runs its query and replaces the stored table. You set it with... |
| `index.mdx` | Creating views: In the PostHog data warehouse, you can save your most used queries as views and reference them in subsequent queries. |
| `materialize-troubleshooting.mdx` | This page covers troubleshooting for materialized views. For setup, see materialized views. For what happens after repeated... |
| `materialize.mdx` | Materialized views: A materialized view is a view that PostHog materializes: it runs the view's query on a schedule and stores the result as a... |

### data-warehouse/warehouse/ (4 files)

| File | Description |
|------|-------------|
| `connect.mdx` | Connecting to the warehouse: Need access first? Join the waitlist, then set up your warehouse. |
| `index.mdx` | Warehouse: Not yet available to everyone – join the waitlist and we'll let you in as soon as it's ready. |
| `performance-tuning.mdx` | Performance: Need access first? Join the waitlist, then set up your warehouse. |
| `setup.mdx` | Setting up the warehouse: Setup requires beta access. Not in yet? Join the waitlist and we'll be in touch. |

### data/event-spec/ (1 files)

| File | Description |
|------|-------------|
| `ecommerce-events.mdx` | PostHog's ecommerce spec helps define the journey for a customer as they browse your store, click on promotions, view... |

### discussion/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Discussions gives you a way to add comments to anything in PostHog for your team members to see. It is a great way of sharing... |

### distributed-tracing/ (3 files)

| File | Description |
|------|-------------|
| `basics.mdx` | Tracing follows a single request as it travels through your application – across the functions, services, databases, and APIs... |
| `link-ai-observability.mdx` | If your product sends OpenTelemetry spans to Distributed tracing and LLM events to AI Observability, you can correlate the... |
| `start-here.mdx` | PostHog Distributed Tracing works with any OpenTelemetry client. Use the OTel SDKs you already have, point your trace exporter... |

### distributed-tracing/installation/ (9 files)

| File | Description |
|------|-------------|
| `dotnet.mdx` | .NET tracing installation: For the complete SDK reference, see the OpenTelemetry .NET docs. |
| `go.mdx` | Go tracing installation: For the complete SDK reference, see the OpenTelemetry Go docs. |
| `index.mdx` | Install tracing: PostHog Tracing works with any OpenTelemetry-compatible client – point its OTLP trace exporter at PostHog and you're done,... |
| `java.mdx` | Java tracing installation: For the complete SDK reference, see the OpenTelemetry Java docs. |
| `nextjs.mdx` | Next.js tracing installation: For the complete SDK reference, see the OpenTelemetry JavaScript docs. |
| `nodejs.mdx` | Node.js tracing installation: There are two ways to send spans from Node.js. |
| `php.mdx` | PHP tracing installation: For the complete SDK reference, see the OpenTelemetry PHP docs. |
| `python.mdx` | Python tracing installation: There are two ways to send spans from Python. |
| `ruby.mdx` | Ruby tracing installation: For the complete SDK reference, see the OpenTelemetry Ruby docs. |

### endpoints/ (18 files)

| File | Description |
|------|-------------|
| `best-practices.mdx` | Use cases and tips: If you need to show a subset of your analytics to your own customers, endpoints provide a secure, performant way to do this. |
| `caching.mdx` | Caching stores query results temporarily so repeated calls don't re-run the query. This is different from materialization,... |
| `customer-facing-analytics.mdx` | This guide shows how to build a customer-facing analytics feature where each user sees their own personalized stats. We'll... |
| `endpoint-types.mdx` | Endpoint types: Endpoints can be created from two types of sources: insights or SQL queries. Each has different strengths and use cases. |
| `endpoints-vs-query-api.mdx` | PostHog offers two ways to run queries programmatically: the Query API and Endpoints. Here's how they differ and when to use each. |
| `execution.mdx` | Execution: When you execute an endpoint, PostHog runs your query and returns the results. This page explains what happens under the hood... |
| `guide-breakdown.mdx` | This guide walks through creating an endpoint from an insight that has a breakdown, then querying it using the variables field... |
| `guide-variables.mdx` | This guide walks through creating an endpoint that accepts variables, allowing you to filter results at execution time. We'll... |
| `index.mdx` | Endpoints turn a saved insight or SQL query into a named, callable API route. You write the query once in PostHog, give it a... |
| `internal-tools.mdx` | This guide walks through integrating PostHog Endpoints with Retool to build internal dashboards and tools powered by your... |
| `materialization.mdx` | Materialization pre-computes your query results and stores them in S3. When someone calls your endpoint, PostHog returns the... |
| `openapi-sdk-generation.mdx` | Generate SDKs with OpenAPI: Each endpoint exposes an OpenAPI 3.0 spec that you can use to generate typed SDK clients for your preferred language. |
| `pricing.mdx` | Pricing: Endpoints is currently free to use. The pricing structure below reflects our current thinking, but may change before general... |
| `rate-limits.mdx` | Rate limits: Endpoints can provide better rate limits than other APIs depending on how they're configured. |
| `troubleshooting.mdx` | Endpoints troubleshooting: This page covers troubleshooting for Endpoints. For setup, see the installation guide. |
| `usage-analytics.mdx` | Usage and logs: The Usage tab on the Endpoints page shows analytics across all your endpoints, while the Logs tab on an individual endpoint's... |
| `variables.mdx` | Variables let you customize endpoint results at execution time without creating multiple endpoints. |
| `versioning.mdx` | Versioning: Every time you update an endpoint's query, PostHog creates a new version. This gives you a history of changes and lets you run... |

### endpoints/start-here/ (3 files)

| File | Description |
|------|-------------|
| `create-endpoint.mdx` | Create an endpoint: Once you have your insight or SQL query, create an endpoint from it. This will give you a stable API endpoint you can call to... |
| `define-your-data.mdx` | Endpoints can be created from existing insights or SQL queries in PostHog. Choose the approach that best fits your use case. |
| `index.mdx` | Endpoints serve data from insights and SQL queries through an API. Create or select the insight or SQL query that returns the... |

### endpoints/start-here/retrieve-data/ (7 files)

| File | Description |
|------|-------------|
| `api.mdx` | Retrieve data from your endpoint with cURL: Call PostHog endpoints directly using HTTP requests. |
| `go.mdx` | Retrieve data from your endpoint with Go: Call PostHog endpoints from Go. |
| `index.mdx` | Retrieve data from your endpoint: Endpoints support two kinds of keys, both with the endpoint:read scope. |
| `nodejs.mdx` | Retrieve data from your endpoint with Node.js: Call PostHog endpoints from Node.js. |
| `openapi.mdx` | Retrieve data from your endpoint with an OpenAPI SDK: Generate type-safe SDKs for any language from your PostHog endpoints using OpenAPI. |
| `python.mdx` | Retrieve data from your endpoint with Python: Call PostHog endpoints from Python using the requests library. |
| `typescript.mdx` | Retrieve data from your endpoint with TypeScript: Call PostHog endpoints from TypeScript with type safety. |

### endpoints/surfaces/ (3 files)

| File | Description |
|------|-------------|
| `api.mdx` | Call endpoints from your app: Endpoints is in beta and free to use while it is. Send us feedback in app. |
| `mcp.mdx` | Use endpoints over PostHog MCP: Endpoints is in beta and free to use while it is. Send us feedback in app. |
| `web-app.mdx` | Endpoints is in beta and free to use while it is. Send us feedback in app. |

### error-tracking/ (20 files)

| File | Description |
|------|-------------|
| `alerts.mdx` | To stay on top of issues, you can set up alerts. These enable you to post to Slack, Discord, Teams, or an HTTP Webhook when an... |
| `assigning-issues.mdx` | Error tracking enables you to assign issues to specific PostHog roles or teammates. This helps your team find relevant issues... |
| `capture.mdx` | You can track and monitor errors and exceptions in your code by capturing exception events. This can be done automatically... |
| `code-variables.mdx` | Code variables: PostHog SDK can automatically capture the state of local variables when an exception occurs, giving you a debugger-like view... |
| `fingerprints.mdx` | Fingerprints: Every captured exception is assigned a fingerprint. This fingerprint is used to group similar exceptions into issues. This... |
| `grouping-issues.mdx` | Issues are created by grouping together similar exception events. When no custom grouping behavior is configured, exceptions... |
| `index.mdx` | Error tracking captures exceptions from across your stack and turns them into issues you can prioritize, assign, and resolve.... |
| `integrations.mdx` | Set up integrations: PostHog integrates with GitHub, GitLab, Linear, and Jira to enhance error tracking with source code context, commit... |
| `issues-and-exceptions.mdx` | This page introduces the concept of issues and exceptions, how they fit into the error tracking workflow, and how you can work... |
| `managing-issues.mdx` | Manage and resolve issues: Error tracking gives you multiple ways to help you manage issues and work towards resolution. |
| `monitoring.mdx` | Monitor and search issues: This guide covers how to find the most relevant, urgent, and impactful issues in your error tracking using the issues page. |
| `pricing.mdx` | Error Tracking pricing: PostHog Error Tracking comes with a generous free tier and transparent, usage-based pricing. Our large free tier means more... |
| `rate-limiting.mdx` | Rate limits cap how many exception events PostHog ingests, so a single noisy client or runaway issue can't blow through your... |
| `references.mdx` | If you're looking for detailed reference documentation for the PostHog SDKs and API related to error tracking, you can find... |
| `releases.mdx` | Releases describe a single deployment. They contain the artefacts you uploaded, the version that produced them, and any build... |
| `spikes.mdx` | Spike detection automatically monitors each issue for sudden increases in exception volume, so you can catch regressions and... |
| `stack-traces.mdx` | Stack traces: Error tracking enables you to view the stack trace and code context associated with an exception. This can help understand,... |
| `start-here.mdx` | To get started with Error Tracking, the first step is to install the PostHog SDK to start capturing exception events within... |
| `troubleshooting.mdx` | Error Tracking troubleshooting: This page covers troubleshooting for Error Tracking. For setup, see the installation guides. |
| `tutorials.mdx` | Tutorials and guides: Got a question which isn't answered below? Head to the community forum to let us know! |

### error-tracking/code-variables/ (1 files)

| File | Description |
|------|-------------|
| `python.mdx` | Code variables in Python: The Python SDK (v6.9.1+) supports automatic code variables capture, allowing you to see the state of local variables when... |

### error-tracking/installation/ (27 files)

| File | Description |
|------|-------------|
| `android.mdx` | Android Error Tracking installation |
| `angular.mdx` | Angular Error Tracking installation |
| `dotnet.mdx` | .NET Error Tracking installation: For ASP.NET Core projects, install the PostHog.AspNetCore package: |
| `elixir.mdx` | Elixir Error Tracking installation: Add the PostHog Elixir SDK to your list of dependencies in mix.exs: |
| `flutter.mdx` | Flutter Error Tracking installation |
| `go.mdx` | Go Error Tracking installation: Install the PostHog Go SDK: |
| `hono.mdx` | Hono Error Tracking installation |
| `index.mdx` | Install PostHog in seconds with our wizard by running this command in your project directory with your terminal (it also works... |
| `ios.mdx` | iOS Error Tracking installation |
| `kmp.mdx` | Kotlin Multiplatform Error Tracking installation |
| `manual.mdx` | Manual Error Tracking installation |
| `nestjs.mdx` | NestJS Error Tracking installation: Install the PostHog Node SDK: |
| `nextjs.mdx` | Next.js Error Tracking installation |
| `node.mdx` | Node.js Error Tracking installation |
| `nuxt-3-6.mdx` | Nuxt Error Tracking installation (v3.6 and below) |
| `nuxt-3-7.mdx` | Nuxt Error Tracking installation (v3.7 and above) |
| `php.mdx` | PHP Error Tracking installation: Install the PostHog PHP SDK via Composer: |
| `python.mdx` | Python Error Tracking installation: The Python SDK includes request context and error tracking integrations for common web frameworks: |
| `react-native.mdx` | The @posthog/react-native-plugin package supports CocoaPods, the hybrid CocoaPods and Swift Package Manager path, and React... |
| `react.mdx` | React Error Tracking installation |
| `roblox.mdx` | Roblox Error Tracking installation: PostHog is available for Roblox through Wally or as a model file you import in Studio. |
| `ruby-on-rails.mdx` | Ruby on Rails Error Tracking installation |
| `ruby.mdx` | Ruby Error Tracking installation |
| `rust.mdx` | Rust Error Tracking installation: Install the PostHog Rust SDK: |
| `svelte.mdx` | SvelteKit Error Tracking installation |
| `unity.mdx` | Unity Error Tracking installation: PostHog is available for Unity through the Unity Package Manager. |
| `web.mdx` | Web Error Tracking installation |

### error-tracking/link-releases/ (4 files)

| File | Description |
|------|-------------|
| `index.mdx` | Link releases: Python, Ruby, and PHP apps run their source code directly, so there are no source maps to upload. Stack traces already show... |
| `php.mdx` | Link releases for PHP: PHP apps run their source code directly, so there are no source maps to upload. Stack traces already show the right files and... |
| `python.mdx` | Python apps run their source code directly, so there are no source maps to upload. Stack traces already show the right files... |
| `ruby.mdx` | Ruby apps run their source code directly, so there are no source maps to upload. Stack traces already show the right files and... |

### error-tracking/surfaces/ (3 files)

| File | Description |
|------|-------------|
| `cli.mdx` | The PostHog CLI is how error tracking gets what it needs from your build. Stack traces arrive minified or stripped, so the CLI... |
| `mcp.mdx` | The PostHog MCP server exposes function calling tools to any MCP client, enabling AI agents to interact with PostHog's API via... |
| `web-app.mdx` | The PostHog web app is home base for error tracking. It's where you triage, resolve, and route issues, with each one already... |

### error-tracking/upload-debug-symbols/ (1 files)

| File | Description |
|------|-------------|
| `kmp.mdx` | Kotlin Multiplatform apps produce different debug symbols for each target. Configure uploads for every target where you ship... |

### error-tracking/upload-mappings/ (1 files)

| File | Description |
|------|-------------|
| `android.mdx` | Upload mappings for Android: Automatic mappings uploading is handled through the Gradle build process on Android. |

### error-tracking/upload-source-maps/ (17 files)

| File | Description |
|------|-------------|
| `angular.mdx` | Upload source maps for Angular: You can configure Angular to generate source maps by adding the following to your angular.json file: |
| `cli.mdx` | Upload source maps with CLI: If you already keep your project's configuration in a dotenv-style file, you can load these variables from it with the... |
| `flutter.mdx` | A minimum CLI version of 0.7.4 is required, but we recommend keeping up with the latest CLI version to ensure you have all of... |
| `github-actions.mdx` | Uploading source maps with GitHub Actions requires your build to have already generated source maps. This action does not... |
| `go.mdx` | The Go SDK resolves stack traces in-process from the Go runtime, so captured frames already carry file names, line numbers,... |
| `index.mdx` | Upload source maps: If you serve compiled or minified code, PostHog requires source maps to generate accurate stack traces. |
| `ios.mdx` | Upload dSYMs for iOS: A minimum CLI version of 0.7.7 is required, but we recommend keeping up with the latest CLI version to ensure you have all of... |
| `nextjs.mdx` | Upload source maps for Next.js: Add the following to your next.config.js file: |
| `node.mdx` | If you serve minified bundles in production, PostHog requires source maps to generate accurate stack traces. Here are... |
| `nuxt.mdx` | For Nuxt v3.7 and above, the @posthog/nuxt module automatically handles source map generation and upload during the build process. |
| `react-native.mdx` | A minimum CLI version of 0.7.8 is required, but we recommend keeping up with the latest CLI version to ensure you have all of... |
| `react.mdx` | Upload source maps for React: If you're using React with Vite, you can enable source maps in your vite.config.js file. |
| `rollup.mdx` | Upload source maps for Rollup: Add the following to your rollup.config.js file: |
| `rust.mdx` | The Rust SDK resolves stack traces in-process from whatever debug info the running binary carries — which works well in... |
| `vite.mdx` | Upload source maps for Vite: Vite uses Rollup under the hood, so you can use the PostHog Rollup plugin to upload source maps: |
| `web.mdx` | Upload source maps for web: If you serve minified bundles in production, PostHog requires source maps to generate accurate stack traces. Here are... |
| `webpack.mdx` | Upload source maps for Webpack: Add the following to your webpack.config.js file: |

### experiments/ (26 files)

| File | Description |
|------|-------------|
| `adding-experiment-code.mdx` | Adding experiment code: Once you've created your experiment in PostHog, the next step is to add your code. |
| `analyze-experiments-ai.mdx` | PostHog AI creates Experiments and analyzes their results. You can set up A/B tests, check statistical significance, and ask... |
| `analyzing-results.mdx` | Analyzing results: After your experiment runs and collects data, you'll want to analyze the results to determine if your changes had a... |
| `best-practices.mdx` | A good hypothesis focuses your testing and guides your decision-making. It should include your goal metric, how you think your... |
| `changing-distribution-after-rollout.mdx` | What happens when changing distribution after rollout?: It helps to look at Experiments with two separate questions: |
| `creating-an-experiment.mdx` | Creating an experiment: To create a new experiment, go to the Experiments section in the PostHog app, and click on the New experiment button in the... |
| `cuped.mdx` | CUPED (Controlled-experiment Using Pre-Experiment Data) is an optional variance reduction method for experiment metrics. It... |
| `data-warehouse.mdx` | If you have event-like data such as purchases, subscriptions, and usage records in a Data Warehouse table, you can use it... |
| `exposures.mdx` | Exposures are the foundation of experiment analysis in PostHog. A user must be exposed to your experiment before they can be... |
| `holdouts.mdx` | Holdouts exclude a percentage of users from experiments. You can exclude these users from specific experiments or even all of... |
| `index.mdx` | Experiments let you test a change against a control and find out whether it actually worked. You define variants, pick the... |
| `legacy-methodology.mdx` | Legacy statistics methodology: In the field of experimentation, there are two primary statistical approaches: frequentist and Bayesian. |
| `llm-prompt-experiments.mdx` | A/B testing prompts |
| `managing-lifecycle.mdx` | Managing lifecycle: After you've analyzed your experiment metrics and determined a winning variant, you can manage the experiment's lifecycle by... |
| `metrics.mdx` | Experiment metrics: Once you've created your experiment, you can assign metrics to let you evaluate your experiment's impact and determine if the... |
| `no-code-web-experiments.md` | No-code experiments are great because they're quick to set up and require no coding, but it's important to understand their... |
| `running-experiments-without-feature-flags.mdx` | You can run Experiments without using PostHog's Feature Flags if you're using a different feature flag library and want to... |
| `sample-size-running-time.mdx` | Running time and sample size: Before running an experiment, you'll want to know how long it needs to run to get reliable results. The running time... |
| `start-here.mdx` | Experiments enable you to test the impact of product changes and understand how they affect your users' behavior. For example,... |
| `statistics-bayesian.mdx` | Bayesian statistics: PostHog's Bayesian analysis engine provides a statistically rigorous yet user-friendly approach to experimentation. Instead of... |
| `statistics-frequentist.mdx` | PostHog's frequentist analysis engine provides a statistically rigorous and widely understood approach to experimentation. It... |
| `testing-and-launching.mdx` | Once you've written your code, it's a good idea to test that each variant behaves as you'd expect. If you find out your... |
| `tracking-long-term-metrics.mdx` | Some experiments need more time for metrics to mature than you want to keep enrolling new users. For example, you're testing... |
| `traffic-allocation.mdx` | Traffic allocation: Experiment traffic allocation controls which users see which variant in your experiment. There are two main levels of control: |
| `troubleshooting.mdx` | Experiment troubleshooting: This page covers troubleshooting for Experiments. For setup, see the installation guides. |
| `tutorials.mdx` | Tutorials and guides: Got a question which isn't answered below? Head to the community forum to let us know! |

### experiments/installation/ (29 files)

| File | Description |
|------|-------------|
| `android.mdx` | Android Experiments installation |
| `angular.mdx` | Angular Experiments installation |
| `astro.mdx` | Astro Experiments installation |
| `bubble.mdx` | Bubble Experiments installation |
| `django.mdx` | Django Experiments installation |
| `dotnet.mdx` | Once PostHog is initialized, you should be able to capture events. For your experiment to be meaningful, we need to capture an... |
| `flutter.mdx` | Flutter Experiments installation |
| `framer.mdx` | Framer Experiments installation |
| `go.mdx` | Go Experiments installation |
| `index.mdx` | Install PostHog in seconds with our wizard by running this command in your project directory with your terminal (it also works... |
| `ios.mdx` | iOS Experiments installation |
| `kmp.mdx` | Kotlin Multiplatform Experiments installation |
| `laravel.mdx` | Laravel Experiments installation |
| `nextjs.mdx` | Next.js Experiments installation |
| `node.mdx` | Node.js Experiments installation |
| `nuxt.mdx` | Nuxt Experiments installation |
| `php.mdx` | PHP Experiments installation |
| `python.mdx` | Python Experiments installation |
| `react-native.mdx` | React Native Experiments installation |
| `react-router.mdx` | React Router Experiments installation |
| `react.mdx` | React Experiments installation |
| `remix.mdx` | Remix Experiments installation |
| `ruby-on-rails.mdx` | Ruby on Rails Experiments installation |
| `ruby.mdx` | Ruby Experiments installation |
| `rust.mdx` | Once PostHog is initialized, you should be able to capture events. For your experiment to be meaningful, we need to capture an... |
| `svelte.mdx` | Svelte Experiments installation |
| `vue.mdx` | Vue Experiments installation |
| `web.mdx` | Web Experiments installation |
| `webflow.mdx` | Webflow Experiments installation |

### experiments/snippets/ (1 files)

| File | Description |
|------|-------------|
| `returning-users-exposures.mdx` | The $featureflagcalled event is deduplicated by the SDK to avoid sending redundant data. In the web SDK, this deduplication is... |

### experiments/surfaces/ (3 files)

| File | Description |
|------|-------------|
| `api.mdx` | Experiments API: Use the API when experiments need to be created or read by something other than a person – a release pipeline that opens an... |
| `mcp.mdx` | The PostHog MCP server exposes experiments as function calling tools, so an AI agent can create an experiment, launch it, read... |
| `web-app.mdx` | The PostHog web app is where experiments are designed, launched, and read. Open Experiments to see every draft, running, and... |

### feature-flags/ (26 files)

| File | Description |
|------|-------------|
| `adding-feature-flag-code.mdx` | Adding feature flag code: Once you've created your feature flag in PostHog, the next step is to add your code: |
| `best-practices.mdx` | A flag hashes two things – the flag key and the distinct ID – and returns a deterministic result. Same inputs, same output.... |
| `bootstrapping.mdx` | Bootstrap Feature Flags: Bootstrapping Feature Flags makes precomputed flag values available as soon as a client-side PostHog SDK initializes. This... |
| `canary-release.md` | Few things are worse than shipping a new feature, having it unexpectedly break, and then scrambling to fix it. To mitigate... |
| `cleaning-up-stale-flags.mdx` | Feature flags accumulate, and you're billed based on /flags requests, not the number of flags in your project. However, a... |
| `creating-feature-flags.mdx` | Creating Feature Flags: Before you can evaluate a feature flag in your application code, you need to create it in PostHog. You need to configure the... |
| `cutting-costs.mdx` | PostHog Feature Flags comes with a generous free tier and transparent, usage-based pricing. Our large free tier means more... |
| `dependencies.mdx` | Feature flag dependencies allow you to create a feature flag (called the dependent flag) that's dependent on the state of... |
| `device-bucketing.mdx` | Device bucketing keeps feature flag values stable for anonymous and pre-login users. Instead of hashing on the user's... |
| `early-access-feature-management.mdx` | Early access feature management enables your users to opt in (and out) of features at different stages of development, from... |
| `evaluation-contexts.mdx` | Evaluation contexts provide fine-grained control over where and when your feature flags evaluate. By constraining flag... |
| `index.mdx` | Feature flags let you ship code without shipping the feature. Wrap a change in a flag, roll it out to 1% of users, watch what... |
| `manage-flags-ai.mdx` | PostHog AI creates and manages Feature Flags using natural language. Describe the flag you want – including rollout... |
| `multi-project-feature-flags.mdx` | Sometimes, you may want to use the same feature flag keys across different PostHog projects. For example, when you're testing... |
| `phased-rollout.md` | How to do a phased rollout: Phased rollouts, also known as phased releases, are a way to roll out new features safely by testing a feature works in... |
| `project-wide-settings.mdx` | Project-wide settings: You can configure project-wide feature flag settings to establish defaults and maintain safety measures for your team. These... |
| `property-overrides.mdx` | Property overrides let you provide person or group properties directly to PostHog for feature flag evaluation, instead of... |
| `remote-config.mdx` | Remote config: Boolean and multivariate flags are helpful for dynamic values that differ from user to user, but sometimes you need a simple... |
| `scheduled-flag-changes.mdx` | Scheduling feature flag changes enable you to automatically change flag properties at a future point in time. For example, you... |
| `stable-identity-for-flags.mdx` | Feature Flags are pure functions – same inputs, same outputs. The most common way to break that contract is to change the... |
| `start-here.mdx` | A feature flag lets you toggle a feature on or off without redeploying code. To get started, install the PostHog SDK for your... |
| `targeting-groups.md` | To decide what value to return, PostHog’s feature flag service uses a flag key and an entity. Which entity to use it up to... |
| `testing.mdx` | Once you've written your code, it's a good idea to test that each variant behaves as you'd expect. There are 5 ways you can do... |
| `troubleshooting.mdx` | Feature Flags troubleshooting: This page covers troubleshooting for Feature Flags. For setup, see the installation guides. |
| `tutorials.mdx` | Tutorials and guides: Got a question which isn't answered below? Head to the community forum to let us know! |
| `user-and-group-targeting.mdx` | User and group targeting: Feature flags evaluate against an entity to decide what value to return. By default, that entity is a user (identified by... |

### feature-flags/installation/ (23 files)

| File | Description |
|------|-------------|
| `android.mdx` | Android Feature Flags installation |
| `api.mdx` | API Feature Flags installation |
| `dotnet.mdx` | .NET Feature Flags installation |
| `elixir.mdx` | Elixir Feature Flags installation |
| `flutter.mdx` | Flutter Feature Flags installation |
| `go.mdx` | Go Feature Flags installation |
| `index.mdx` | Install PostHog in seconds with our wizard by running this command in your project directory with your terminal (it also works... |
| `ios.mdx` | iOS Feature Flags installation |
| `java.mdx` | Java Feature Flags installation |
| `kmp.mdx` | Kotlin Multiplatform Feature Flags installation |
| `nodejs.mdx` | Node.js Feature Flags installation |
| `openfeature-java.mdx` | OpenFeature (Java): PostHog provides an official OpenFeature provider for server-side JVM applications, so you can evaluate PostHog flags through... |
| `openfeature-js.mdx` | PostHog provides official OpenFeature providers for JavaScript, so you can evaluate PostHog feature flags through the standard... |
| `openfeature.mdx` | OpenFeature (Python): PostHog provides an official OpenFeature provider for Python, so you can evaluate PostHog feature flags through the standard... |
| `php.mdx` | PHP Feature Flags installation |
| `python.mdx` | Python Feature Flags installation |
| `react-native.mdx` | React Native Feature Flags installation |
| `react-router.mdx` | React Router Feature Flags installation |
| `react.mdx` | React Feature Flags installation |
| `remix.mdx` | Remix Feature Flags installation |
| `ruby.mdx` | Ruby Feature Flags installation |
| `rust.mdx` | Rust Feature Flags installation |
| `web.mdx` | Web Feature Flags installation |

### feature-flags/local-evaluation/ (2 files)

| File | Description |
|------|-------------|
| `distributed-environments.mdx` | Local evaluation in distributed or stateless environments |
| `index.mdx` | Server-side local evaluation: Evaluating feature flags requires making a request to PostHog for each flag. However, you can improve performance by... |

### feature-flags/snippets/ (12 files)

| File | Description |
|------|-------------|
| `bootstrapping-intro.mdx` | bootstrapping-intro.mdx: Since there is a delay between initializing PostHog and fetching feature flags, feature flags are not always available... |
| `faq-false-or-none-events.mdx` | Feature Flag Called events showing None, (empty string), or false instead of your variant names has three potential causes: |
| `flag-charge-estimate.mdx` | flag-charge-estimate.mdx: We make a request to fetch feature flags (using the /flags endpoint) when one of the below occurs: |
| `groups-flags-posthog-js.mdx` | groups-flags-posthog-js.mdx: If you have updated tracking, you can use group-based feature flags as normal in posthog-js. |
| `groups-ingestion-go.mdx` | groups-ingestion-go.mdx: Using groups with go requires the latest version of posthog-go. Update dependencies via: |
| `groups-ingestion-node.mdx` | groups-ingestion-node.mdx: Update posthog-node to version 1.2.0 or above to make use of the new functionality. |
| `groups-ingestion-other.mdx` | groups-ingestion-other.mdx: Not all libraries support group analytics yet, but you can work around this issue by sending events in specific formats. |
| `groups-ingestion-php.mdx` | groups-ingestion-php.mdx: Update posthog-php to version 2.1.0 or above to make use of the new functionality. |
| `groups-ingestion-posthog-js.mdx` | groups-ingestion-posthog-js.mdx: Update posthog-js2 to version 1.16.0 or above to make use of the new functionality. |
| `groups-ingestion-python.mdx` | groups-ingestion-python.mdx: Update posthog-python to version 1.4.3 or above to make use of the new functionality. |
| `groups-ingestion-segment.mdx` | groups-ingestion-segment.mdx: For backend libraries you need to send a distinct id (as with any other .track call). |
| `local-evaluation-intro.mdx` | local-evaluation-intro.mdx: Evaluating feature flags requires making a request to PostHog for each flag. However, you can improve performance by... |

### feature-flags/surfaces/ (3 files)

| File | Description |
|------|-------------|
| `api.mdx` | Feature flags API: There are two APIs for feature flags, and they answer different questions. The /flags endpoint evaluates flags for a user at... |
| `mcp.mdx` | The PostHog MCP server lets your AI coding agent create, manage, and schedule feature flags directly from your code editor.... |
| `web-app.mdx` | The PostHog web app is home base for feature flags. It's where you create a flag, decide who gets it, watch the rollout, and... |

### getting-started/ (7 files)

| File | Description |
|------|-------------|
| `data-import-export.mdx` | Data import and export: Beyond the everyday capture of user events, there are many ways to get bulk data into and out of PostHog. |
| `enable-betas.mdx` | Enabling beta features: At PostHog, there are always new betas for you to try. Many are available to everyone by default, such as SQL access. Others... |
| `identify-users.mdx` | Identify users: If your app already knows the signed-in user when you initialize the JavaScript web SDK, the loaded callback is a convenient... |
| `install.mdx` | Install PostHog |
| `next-steps.mdx` | Next steps: Are you migrating from another tool like PostHog? |
| `send-events.mdx` | Send events: Once your PostHog instance is up and running, the next step is to start sending events. |
| `start-here.mdx` | start-here.mdx |

### health-checks/ (13 files)

| File | Description |
|------|-------------|
| `authorized-urls.mdx` | No authorized URLs: The authorized URLs check fires when your project has no authorized URLs (also called app URLs) configured. Authorized URLs... |
| `external-data-sync-failures.mdx` | The external data sync failures check fires when one of your external data sources fails to sync, which means the connected... |
| `index.mdx` | Health checks continuously inspect your PostHog setup for problems that quietly degrade your data – a missing SDK, traffic... |
| `ingestion-warnings.mdx` | Ingestion warnings: The ingestion warnings check surfaces ingestion warnings – events that PostHog had to drop, mis-merge, or degrade as they came... |
| `keeping-sdks-current.mdx` | Keeping SDKs current: The SDK health check identifies when your PostHog SDKs are outdated, but understanding why they fall behind, and how to... |
| `materialized-view-failures.mdx` | The materialized view failures check fires when a materialized view in your Data Warehouse fails to refresh, which leaves... |
| `no-live-events.mdx` | No live events: The no live events check fires when your project hasn't received any $pageview or $screen events for a sustained period. It's... |
| `no-reverse-proxy.mdx` | No reverse proxy: The no reverse proxy check fires when none of your traffic is being sent through a reverse proxy. A reverse proxy serves... |
| `pageleave-events.mdx` | The missing pageleave events check fires when your project sends $pageview events but no $pageleave events. PostHog uses the... |
| `partial-reverse-proxy.mdx` | The partial reverse-proxy coverage check fires when some of your hostnames send events through a reverse proxy but others... |
| `scroll-depth.mdx` | The scroll-depth check fires when your $pageleave events arrive without scroll-depth metadata, which leaves scroll-depth... |
| `sdk-health.mdx` | SDK health: The SDK health check watches the versions of the PostHog SDKs sending events to your project and flags any that have fallen... |
| `web-vitals.mdx` | Missing web vitals: The missing web vitals check fires when your project sends $pageview events but no $webvitals events, which means Core Web... |

### hog/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Hog: We want you to have the power to transform and export your data in real time, without the headache of maintaining your own... |

### how-posthog-works/ (6 files)

| File | Description |
|------|-------------|
| `clickhouse.md` | ClickHouse is our main analytics backend. |
| `data-model.mdx` | Data model: fields: Here's a look at the fields on each data type. To learn more about how to think about data in PostHog, see understanding PostHog. |
| `index.mdx` | PostHog's architecture: This section covers PostHog's data model, ingestion pipeline, ClickHouse setup and data querying. This page provides an... |
| `ingestion-pipeline.mdx` | Ingestion pipeline: In simple terms, the ingestion pipeline is a collection of services which listen for events as they are sent in, processed,... |
| `queries.mdx` | Querying data: This page provides a high-level overview of how internal queries run when creating insights in PostHog. |
| `recordings-ingestion.mdx` | Session replay ingestion: We use rrweb to collect "snapshot data" from the browser. This data is gathered by the replay capture service (a dedicated... |

### integrate/ (2 files)

| File | Description |
|------|-------------|
| `provisioning.mdx` | Provisioning API: PostHog's provisioning API lets you create PostHog accounts for your users and deep link them into their PostHog project. |
| `snippet.mdx` | snippet.mdx |

### integrations/ (4 files)

| File | Description |
|------|-------------|
| `lovable.mdx` | Lovable integration: The PostHog MCP lets Lovable query your analytics data, investigate errors, manage feature flags, and run experiments - all... |
| `replit.mdx` | Replit integration: The PostHog MCP lets Replit Agent set up analytics, error tracking, and feature flags in your project automatically. Once... |
| `v0.mdx` | v0 integration: The PostHog MCP lets v0 query your analytics data, investigate errors, manage feature flags, and run experiments - all through... |
| `vercel-marketplace.mdx` | Vercel Marketplace integration: The Vercel Marketplace integration adds PostHog to your Vercel projects. There are two ways to set it up: |

### js-snippets/ (3 files)

| File | Description |
|------|-------------|
| `index.md` | JS snippets enable you to easily add functionality to your site without extra code. They are injected through the posthog-js... |
| `notification-bar.md` | Notification Bar: The Notification Bar JS snippet displays a customizable banner at the top of your website. Use it to announce product updates,... |
| `pineapple-mode.md` | Pineapple Mode: Activating pineapple mode makes it rain pineapples all over your product or website. Yes, really. |

### libraries/ (39 files)

| File | Description |
|------|-------------|
| `angular.mdx` | Angular: PostHog makes it easy to get data about traffic and usage of your Angular app. Integrating PostHog into your site enables... |
| `astro.mdx` | Astro: PostHog makes it easy to get data about traffic and usage of your Astro app. Integrating PostHog into your site enables... |
| `bootstrapping.mdx` | Bootstrapping seeds a PostHog SDK with data your app already knows when the SDK initializes. This makes identity, session, or... |
| `bubble.mdx` | Bubble: PostHog makes it easy to get data about traffic and usage of your Bubble app. Integrating PostHog into your site enables... |
| `cloudflare-workers.mdx` | Cloudflare Workers: This doc focuses on features unique to Cloudflare Workers. If you're looking for details on frameworks like React, Vue, Remix,... |
| `convex.mdx` | Convex runs your backend as short-lived isolates, so the usual posthog-node shutdown flow doesn't apply. This doc covers what... |
| `discord.mdx` | Discord: PostHog connects to Discord in two ways, depending on where you are: |
| `django.mdx` | Django: PostHog makes it easy to get data about traffic and usage of your Django app. Integrating PostHog enables analytics, custom... |
| `docusaurus.mdx` | Docusaurus: To easily track your Docusaurus site, you can install the PostHog plugin. This enables you to autocapture pageviews, clicks,... |
| `fastify.mdx` | Fastify: Use the PostHog Node.js SDK to capture events and request errors from your Fastify app. |
| `flask.mdx` | Flask: PostHog makes it easy to get data about traffic and usage of your Flask app. Integrating PostHog enables analytics, custom... |
| `framer.mdx` | Framer: PostHog makes it easy to get data about traffic and usage of your Framer app. Integrating PostHog into your site enables... |
| `gatsby.mdx` | Gatsby behaves like a single-page app which means to track $pageview events special care is needed. This integration takes... |
| `github.mdx` | GitHub: The PostHog GitHub App connects your GitHub organization or account to PostHog. Several products build on it: |
| `google-tag-manager.mdx` | Google Tag Manager helps you add code snippets or tracking pixels to your website in a low-code way to send data to services... |
| `grafana.md` | Grafana is an open source observability and data visualization platform. Grafana's echo service captures frontend usage events... |
| `hono.mdx` | Hono: PostHog makes it easy to get data about usage of your Hono app. Integrating PostHog into your app enables analytics, custom... |
| `laravel.md` | Laravel: You can integrate PostHog with Laravel using the experimental Laravel SDK or the PHP SDK with manual instrumentation. Both... |
| `moengage.md` | MoEngage: Forwarding events from MoEngage to PostHog. |
| `n8n.md` | n8n: Integrating PostHog with n8n for workflow automation. |
| `nestjs.mdx` | NestJS: PostHog integrates with your NestJS app to enable analytics, custom events capture, Feature Flags, Error Tracking, and more. |
| `nuxt-js-2.mdx` | PostHog makes it easy to get data about usage of your Nuxt.js app. Integrating PostHog into your app enables analytics about... |
| `nuxt-js-3-6.mdx` | Nuxt.js (v3.0 to v3.6): PostHog makes it easy to get data about usage of your Nuxt.js app. Integrating PostHog into your app enables analytics about... |
| `nuxt-js.mdx` | Nuxt.js: PostHog makes it easy to get data about usage of your Nuxt.js app. Integrating PostHog into your app enables analytics about... |
| `phoenix.mdx` | Phoenix: PostHog makes it easy to get data about traffic and usage of your Phoenix projects. Integrating PostHog into your site enables... |
| `remix.mdx` | Remix: PostHog makes it easy to get data about traffic and usage of your Remix app. Integrating PostHog into your site enables... |
| `retool.md` | Retool: Integrating PostHog with Retool. |
| `ruby-on-rails.mdx` | Ruby on Rails: PostHog makes it easy to get data about traffic and usage of your Ruby on Rails app. Integrating PostHog enables analytics,... |
| `rudderstack.md` | RudderStack is an open-source, customer data platform for developers. It allows you to collect and deliver customer event data... |
| `segment.md` | Segment is a customer data platform (CDP) that enables you to capture data from many sources and send it to many destinations.... |
| `shopify.mdx` | Shopify: PostHog makes it easy to get data about traffic and usage of your Shopify store. Integrating PostHog into your site enables... |
| `slack.mdx` | Slack: The PostHog app for Slack helps you stay connected to your product data and receive timely updates directly in your workspace. |
| `svelte.mdx` | Svelte: PostHog makes it easy to get data about traffic and usage of your Svelte app. Integrating PostHog into your site enables... |
| `tanstack-start.mdx` | TanStack Start: This tutorial shows how to integrate PostHog with a TanStack Start app for both client-side and server-side analytics. |
| `vercel.mdx` | Vercel: This doc focuses on features unique to the Vercel platform like Vercel Functions, the AI SDK, and the Flags SDK. If you're... |
| `webflow.mdx` | Webflow: PostHog makes it easy to get data about traffic and usage of your Webflow app. Integrating PostHog into your site enables... |
| `woocommerce.md` | Getting traffic, usage, and user behavior data about your WooCommerce site is simple with PostHog. Once set up, PostHog gives... |
| `wordpress.md` | Getting traffic, usage, and user behavior data about your WordPress site is simple with PostHog. Once you have that data, you... |
| `zapier.md` | Zapier: Sending events to PostHog using Zapier. |

### libraries/android/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Android: It uses an internal queue to make calls fast and non-blocking. It also batches requests and flushes asynchronously, making it... |

### libraries/capacitor/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Capacitor: PostHog makes it easy to capture data from your Capacitor app, no matter the platform. You can find out more in the plugin's... |

### libraries/dotnet/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | .NET: This is an optional library you can install if you're working with .NET Core. It uses an internal queue to make calls fast and... |

### libraries/elixir/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Elixir: This library provides an Elixir HTTP client for PostHog. See the repository for more information. |

### libraries/flutter/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Flutter: This is an optional library you can install if you're working with Flutter. It uses an internal queue to make calls fast and... |

### libraries/go/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Go: This library uses an internal queue to make calls fast and non-blocking. It also batches requests and flushes asynchronously,... |

### libraries/godot/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Godot: The PostHog SDK for Godot is a GDScript addon for Godot 4.5 and later. It supports custom events, user identification, Feature... |

### libraries/ios/ (3 files)

| File | Description |
|------|-------------|
| `configuration.mdx` | iOS SDK configuration: You can enable or disable autocapture through the PostHogConfig object. |
| `index.mdx` | iOS: The PostHog iOS SDK is a library that you can use to track events, identify users, record session replays, evaluate feature... |
| `usage.mdx` | iOS SDK usage: To exclude specific UI elements from autocapture or Session Replay, add ph-no-capture as either an accessibilityLabel or... |

### libraries/java/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Java: This is an optional library you can install if you're working with server-side Java applications. It uses an internal queue to... |

### libraries/js/ (7 files)

| File | Description |
|------|-------------|
| `config.mdx` | When calling posthog.init, there are various configuration options you can set to customize and control the behavior of PostHog. |
| `index.mdx` | JavaScript web: If your app already knows the signed-in user when PostHog initializes, you can call identify from the loaded callback to... |
| `persistence.mdx` | If you want to change how PostHog stores this information, you can do so with the persistence configuration option: |
| `security.mdx` | The JavaScript SDK runs with the same access to your page as your own application code. Use version controls, Subresource... |
| `snippet-versioning.mdx` | The PostHog HTML snippet loads the JavaScript web SDK (posthog-js) from a CDN. By default, the snippet loads from the legacy... |
| `types.mdx` | If you're loading PostHog via a <script> tag and want TypeScript types for window.posthog, you can install the @posthog/types... |
| `usage.mdx` | JavaScript web usage: The third argument to posthog.capture() accepts a transport option. In the browser JavaScript SDK, transport: "sendBeacon"... |

### libraries/kmp/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Kotlin Multiplatform: The PostHog Kotlin Multiplatform (KMP) SDK lets you capture analytics from shared Kotlin code that runs on Android, iOS, the... |

### libraries/next-js/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | Next.js: PostHog makes it easy to get data about traffic and usage of your Next.js app. Integrating PostHog into your site enables... |
| `posthog-next.mdx` | @posthog/next is currently in pre-release. The API may change before the stable release. For production apps, see the standard... |

### libraries/node/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Node.js: If you're working with Node.js (versions 20+), the official posthog-node library is the simplest way to integrate your... |

### libraries/php/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | PHP: This is an optional library you can install if you're working with PHP. It uses an internal queue to batch requests, flushes... |

### libraries/python/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Python: The Python SDK makes it easy to capture events, evaluate feature flags, track errors, and more in your Python apps. |

### libraries/react/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | React: PostHog makes it easy to get data about traffic and usage of your React app. Integrating PostHog into your site enables... |

### libraries/react-native/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | React Native: The optional @posthog/react-native-plugin package adds native features such as session replay and native crash capture.... |

### libraries/react-router/ (5 files)

| File | Description |
|------|-------------|
| `index.mdx` | React Router: This guide walks you through setting up PostHog for React Router. React Router V7 has three distinct modes, and each requires... |
| `react-router-v6.mdx` | React Router V6: This guide walks you through setting up PostHog for React Router V6. If you're using React Router v7, find the guide for that... |
| `react-router-v7-data-mode.mdx` | React Router V7 data mode: This guide walks you through setting up PostHog for React Router V7 in data mode. If you're using React Router in another... |
| `react-router-v7-declarative-mode.mdx` | This guide walks you through setting up PostHog for React Router V7 in declarative mode. If you're using React Router in... |
| `react-router-v7-framework-mode.mdx` | This guide walks you through setting up PostHog for React Router V7 in framework mode. If you're using React Router in another... |

### libraries/roblox/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Roblox: This is the official PostHog SDK for Roblox. It's server-authoritative: because only the Roblox server can make outbound HTTP... |

### libraries/ruby/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Ruby: The posthog-ruby library provides tracking functionality on the server-side for applications built in Ruby. |

### libraries/rust/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Rust: capture is fire-and-forget – it queues the event and returns, and a background worker delivers it. Events still queued when... |

### libraries/unity/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Unity: This is the official PostHog SDK for Unity. It uses an internal queue to make calls fast and non-blocking. It also batches... |

### libraries/vue-js/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Vue.js: PostHog makes it easy to get data about usage of your Vue.js app. Integrating PostHog into your app enables analytics about... |

### logs/ (14 files)

| File | Description |
|------|-------------|
| `alerts.mdx` | Set up log alerts: Log alerts notify you when the volume of logs matching specific filters crosses a threshold. Use them to catch spikes in... |
| `basics.mdx` | Why you need logs: Logs are records of what happens inside your application at runtime. It includes the requests it handled, the errors it hit,... |
| `best-practices.mdx` | Logging best practices: Most logging is bad. Not because people don't log enough. They log too much of the wrong things and too little of the right... |
| `explain-logs-ai.mdx` | When a log line doesn't tell you enough on its own, open it and switch to the Explore with AI tab. PostHog AI reads that one... |
| `index.mdx` | Logs is an OpenTelemetry-native log store, so there are no PostHog-specific SDKs to adopt – point any OTLP client at PostHog... |
| `link-person.mdx` | Link logs to a person: PostHog can surface every log emitted on behalf of a specific user on that user's profile in the Logs tab. The link is... |
| `link-session-replay.mdx` | Link session replay: Connecting your backend logs to frontend session replays provides complete visibility into the user journey, helping you... |
| `metrics.mdx` | Log-based metrics: A log-based metric turns your logs into a metric time series at ingestion. You write a rule that counts the log lines matching... |
| `patterns.mdx` | Log patterns group similar log lines into templates, so you read the shape of your log traffic instead of scrolling through... |
| `pii-scrubbing.mdx` | PII scrubbing: PostHog can scrub common sensitive patterns out of your Logs at ingestion, before they're written to storage. This is an... |
| `pricing.mdx` | Logs pricing: Logs comes with a generous free tier and transparent, usage-based pricing. Our large free tier means more than 90% of... |
| `search.mdx` | Search logs: There are two ways to filter logs on the logs page: the facet rail on the left sidebar and the filter bar at the top. |
| `start-here.mdx` | PostHog Logs works with any OpenTelemetry client. No PostHog-specific packages required. Use the OTel SDKs you already have,... |
| `troubleshooting.mdx` | Logs troubleshooting: This page covers troubleshooting for Logs. For setup, see the installation guide. |

### logs/installation/ (18 files)

| File | Description |
|------|-------------|
| `android.mdx` | Android Logs installation: The PostHog Android SDK has built-in support for capturing structured Logs from Android apps. The SDK handles the OTLP... |
| `datadog.mdx` | Datadog Logs installation: If you're already using Datadog to collect logs, you can forward them to PostHog by configuring your existing Datadog log... |
| `dotnet.mdx` | .NET Logs installation: For the complete SDK reference, see the OpenTelemetry .NET docs. |
| `flutter.mdx` | The PostHog Flutter SDK has built-in support for capturing structured Logs from your Flutter app across mobile and web. The... |
| `go.mdx` | Go Logs installation: You'll need your PostHog project token to authenticate log requests. This is the same key you use for capturing events and... |
| `index.mdx` | PostHog Logs works with any OpenTelemetry-compatible client. You don't need any PostHog-specific packages - just use standard... |
| `ios.mdx` | iOS Logs installation: The PostHog iOS SDK has built-in support for capturing structured Logs from iOS, macOS, tvOS, watchOS, and visionOS apps. The... |
| `java.mdx` | Java Logs installation: Add the following dependencies to your pom.xml: |
| `javascript.mdx` | The PostHog JavaScript web SDK ships with first-class support for Logs. Send structured log records with the posthog.logger... |
| `nextjs.mdx` | You'll need your PostHog project token to authenticate log requests. This is the same key you use for capturing events and... |
| `nodejs.mdx` | You'll need your PostHog project token to authenticate log requests. This is the same key you use for capturing events and... |
| `other.mdx` | PostHog Logs works with any OpenTelemetry-compatible client. Check the OpenTelemetry documentation for your specific language... |
| `pino.mdx` | Pino Logs installation: Send your existing Pino logs to PostHog with the OpenTelemetry Pino instrumentation. You don't need to change your logger... |
| `python.mdx` | Python Logs installation: You'll need your PostHog project token to authenticate log requests. This is the same key you use for capturing events and... |
| `react-native.mdx` | React Native Logs installation: PostHog's React Native SDK has built-in support for capturing structured logs. Unlike other languages where you wire... |
| `ruby-on-rails.mdx` | posthog-rails forwards Rails.logger output to PostHog Logs over OpenTelemetry (OTLP), automatically correlated with each... |
| `rust.mdx` | Rust Logs installation: This guide targets opentelemetry 0.32 and needs 0.28 or later. If your application uses the log crate rather than tracing,... |
| `winston.mdx` | Winston Logs installation: Send your existing Winston logs to PostHog with the OpenTelemetry Winston instrumentation. You don't need to change your... |

### logs/surfaces/ (3 files)

| File | Description |
|------|-------------|
| `api.mdx` | Use the Logs API: The Logs API is the surface for anything you want to script or wire into your own tooling: pulling log records into a... |
| `mcp.mdx` | The PostHog MCP server gives coding agents direct access to your logs. Ask your agent to search, filter, and analyze log data... |
| `web-app.mdx` | Use Logs in PostHog Web: The PostHog web app is home base for Logs. It's where you search log records, narrow them down with facets, mine patterns... |

### mcp-analytics/ (11 files)

| File | Description |
|------|-------------|
| `conversation-id.mdx` | Conversation IDs: A PostHog $sessionid normally follows the MCP protocol session. The handshake-free 2026-07-28 revision has no protocol... |
| `custom-events.mdx` | Use an event properties callback (eventProperties in TypeScript, eventproperties in Python and Ruby, WithProperties in Go) to... |
| `events.mdx` | Event and property reference: This page is the wire-level contract for the MCP Analytics SDKs, and for servers that send the events themselves.... |
| `identifying-users.mdx` | Identifying users: By default, the SDK attributes MCP events to a generated session ID (ses…). On 2025-11-25, this normally follows the protocol... |
| `index.mdx` | MCP Analytics shows how AI agents use your MCP tools. It records tool calls, agent intent, reported models, failures, and... |
| `intent.mdx` | Capturing agent intent: Intent explains why an agent called a tool. Use it to understand the goals behind tool usage. |
| `missing-capability.mdx` | Missing-capability reports show what agents need but your server does not support. Without these reports, an agent may stop or... |
| `privacy.mdx` | Privacy and redaction: MCP tool calls can contain API tokens, personal data, and model output. The SDK sanitizes and truncates events before sending... |
| `queries.mdx` | Sample queries: Use these HogQL queries after you install the SDK and capture $mcptoolcall events. See the event reference for property... |
| `sdk-v2.mdx` | MCP SDK v2: The 2026-07-28 MCP revision removes the initialize handshake and protocol sessions. The TypeScript SDK serves it on MCP SDK... |
| `start-here.mdx` | The TypeScript package @posthog/mcp is pre-1.0. The Python integration is in beta, and the Ruby and Rust integrations are... |

### mcp-analytics/installation/ (8 files)

| File | Description |
|------|-------------|
| `go.mdx` | The Go SDK is in beta. It has the same defaults as the other SDKs, but captures fewer events and has fewer optional features.... |
| `index.mdx` | Install MCP Analytics: MCP Analytics captures how agents use your MCP server. Add the SDK for your server's language, and every tool call becomes a... |
| `other-languages.mdx` | MCP Analytics has SDKs for TypeScript, Python, Go, Ruby, and Rust. If your MCP server uses another language, such as Java,... |
| `python.mdx` | Python MCP Analytics is in beta, so its API may change. Pin your posthog version during the beta. |
| `ruby.mdx` | PostHog::MCP is experimental and not officially supported. The MCP Analytics team doesn't maintain it. Its API, its options,... |
| `rust.mdx` | posthogrs::mcp is experimental and not officially supported. Its API, its options, and the $mcp events it captures may change... |
| `typescript.mdx` | @posthog/mcp is in beta (pre-1.0). Minor 0.x releases may contain breaking API changes until v1. Pin a version during the beta. |
| `webmcp.mdx` | WebMCP installation for MCP Analytics: If your web app registers tools with WebMCP, posthog-js captures each tool call as a $mcptoolcall event. |

### mcp-analytics/surfaces/ (3 files)

| File | Description |
|------|-------------|
| `api.mdx` | MCP Analytics API: The MCP Analytics API is in beta. Endpoints may change before general availability. |
| `mcp.mdx` | Query MCP Analytics over PostHog MCP: MCP Analytics tools are in beta. |
| `web-app.mdx` | MCP Analytics in PostHog Web: The MCP Analytics views are in beta. |

### metrics/ (5 files)

| File | Description |
|------|-------------|
| `architecture.mdx` | How metrics works: This page explains what happens to a metric between your application and a chart: how ingestion works, what a series is, how... |
| `basics.mdx` | Why you need metrics: Metrics are numbers about your system measured over time: how many requests you served, how long they took, how deep the job... |
| `explore.mdx` | Use your metrics: Once metrics are flowing, open Metrics in PostHog. The metrics scene has three tabs: |
| `index.mdx` | Application metrics: Any team can turn on metrics: open Metrics in PostHog and select Enable metrics in the onboarding view. See turn on metrics... |
| `start-here.mdx` | Any team can turn on metrics: open Metrics in PostHog and select Enable metrics in the onboarding view. See turn on metrics... |

### metrics/installation/ (8 files)

| File | Description |
|------|-------------|
| `docker.mdx` | If your services already expose Prometheus-format /metrics endpoints, the PostHog metrics agent scrapes them and forwards... |
| `google-cloud.mdx` | Google Cloud Monitoring can't push metrics anywhere by itself, so the PostHog metrics agent pulls from it: set a GCP project... |
| `index.mdx` | Install metrics: There are three ways to get metrics into PostHog: |
| `javascript.mdx` | If posthog-js is already running on your site, you can record metrics directly with the posthog.metrics API. No new packages,... |
| `kubernetes.mdx` | If your Kubernetes workloads already expose Prometheus-format /metrics endpoints, the PostHog metrics agent scrapes them and... |
| `nodejs.mdx` | The posthog-node SDK includes the posthog.metrics API, so you can record metrics with the same client you use for events and... |
| `other.mdx` | PostHog's application metrics work with any OpenTelemetry-compatible client. If your app or infrastructure already exports... |
| `python.mdx` | The posthog-python SDK includes the posthog.metrics API, so you can record metrics with the same client you use for events and... |

### migrate/ (12 files)

| File | Description |
|------|-------------|
| `google-analytics.mdx` | Migrate from Google Analytics to PostHog: Migrating data from Google Analytics is a three step process: |
| `heap.mdx` | Migrate from Heap to PostHog: Migrating data from Heap is a three step process: |
| `index.mdx` | Historical migrations refer to ingesting and importing past data into PostHog for analysis. This includes: |
| `launchdarkly.mdx` | Migrate from LaunchDarkly to PostHog: PostHog and LaunchDarkly have many of the same features and concepts, but different names and slight variations. |
| `managed-migrations.mdx` | Managed migrations provide an automated way to migrate your historical data into PostHog. |
| `matomo.mdx` | Migrate from Matomo to PostHog: Migrating data from Matomo is a two step process: |
| `migrate-from-amplitude.mdx` | Migrate from Amplitude to PostHog: Migrating from Amplitude is a two step process: |
| `migrate-to-cloud.mdx` | Migrate to PostHog Cloud: This guide is relevant to users wanting to migrate both: |
| `mixpanel.mdx` | PostHog is a great alternative to Mixpanel, especially if you want to replace other tools for session replay and A/B testing. |
| `pendo.mdx` | Migrate from Pendo to PostHog: Migrating data from Pendo is a two step process: |
| `plausible.mdx` | Compared to other tools, Plausible is easy to get data out of, but it is difficult to convert to PostHog's schema. This is... |
| `statsig.mdx` | Statsig is a multi-product feature flag, experimentation, and analytics platform. This means going from Statsig to PostHog... |

### model-context-protocol/ (12 files)

| File | Description |
|------|-------------|
| `claude-code.mdx` | The PostHog MCP server enables Claude Code to directly interact with your PostHog data – managing feature flags, querying... |
| `claude-desktop.mdx` | The PostHog MCP server enables Claude Desktop to directly interact with your PostHog data – managing feature flags, querying... |
| `codex.mdx` | The PostHog MCP server enables Codex to directly interact with your PostHog data – managing feature flags, querying analytics,... |
| `cursor.mdx` | PostHog MCP for Cursor: The PostHog MCP server enables Cursor to directly interact with your PostHog data – managing feature flags, querying... |
| `enterprise-managed-authorization.mdx` | The PostHog MCP server supports the Model Context Protocol Enterprise-Managed Authorization extension. This lets your... |
| `faq.mdx` | Everything you need to know about authentication, scoping, filtering, safety, and billing for the PostHog MCP server. If... |
| `index.mdx` | The PostHog Model Context Protocol (MCP) server is a free, hosted endpoint that lets your AI agent use PostHog – with just... |
| `tools.mdx` | The PostHog MCP server exposes function-calling MCP tools across every PostHog product – from feature flags and experiments to... |
| `use-cases.mdx` | PostHog MCP use cases: Once you've connected the PostHog MCP server, your agent can read and write across PostHog's products. Here's a tour of the... |
| `vscode.mdx` | PostHog MCP for VS Code: The PostHog MCP server enables VS Code to directly interact with your PostHog data – managing feature flags, querying... |
| `windsurf.mdx` | PostHog MCP for Windsurf: The PostHog MCP server enables Windsurf to directly interact with your PostHog data – managing feature flags, querying... |
| `zed.mdx` | PostHog MCP for Zed: The PostHog MCP server enables Zed to directly interact with your PostHog data – managing feature flags, querying analytics,... |

### new-to-posthog/ (5 files)

| File | Description |
|------|-------------|
| `activation.mdx` | Users getting value: Measuring activation with PostHog: You should have the basics of your PostHog integration up and rolling now. |
| `getting-hogpilled.mdx` | Getting HogPilled: Winning with PostHog: Most startups fail. The ones that win often do it by accident. |
| `retention.mdx` | With integration complete and activation defined, we turn our sights toward measuring how well we keep our customers coming back. |
| `revenue.mdx` | See the money: Capturing revenue with PostHog: While the analytics tasks so far have been full of subtlety, revenue is easy. |
| `understand-posthog.mdx` | Your data in PostHog: To get the most from PostHog, it helps to build a picture of how your data in PostHog is structured, grouped, and related. |

### new-to-posthog/switch-guide/ (3 files)

| File | Description |
|------|-------------|
| `migration-planning.mdx` | What to expect as you migrate: With your team onboarded and a successful pilot completed, you can turn your attention to planning your migration. |
| `planning-your-pilot.mdx` | Planning your pilot: We want you to love using PostHog. |
| `switching-to-posthog.mdx` | Switching to PostHog: PostHog is an easy sell for new projects and companies: one login and one simple integration gets you everything you need to... |

### notebooks/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Notebooks enable you to combine the tools of PostHog into a single space for analysis. Rather than jumping between dashboards,... |

### posthog-ai/ (14 files)

| File | Description |
|------|-------------|
| `allow-access.mdx` | You can pop PostHog AI open wherever you are in PostHog. Click on the PostHog AI icon in the right-hand sidebar of the app to... |
| `context-and-commands.mdx` | PostHog AI automatically detects the active tab or page you're on to infer context. But you can also manually add other data... |
| `edit-memory.mdx` | You can use PostHog AI memory to save context or instructions that persist between conversations. This helps PostHog AI to... |
| `example-prompts.mdx` | PostHog AI can be used in many ways. Because it works directly with your project's data, its responses and actions are unique... |
| `faq.mdx` | PostHog AI FAQ: While working with PostHog AI, you will certainly share some information with it. Data analysis is a core feature. When doing... |
| `index.mdx` | PostHog AI is an AI product analyst that lives inside PostHog. Ask it a question in plain English and it queries your data,... |
| `investigate-web-traffic.mdx` | This guide shows you how the PostHog team uses PostHog AI to investigate web traffic. It includes a video demo and the prompts... |
| `modes.mdx` | PostHog AI uses specialized modes to handle different types of analysis tasks. Each mode is optimized with specific tools and... |
| `plan-mode.mdx` | Plan mode is a structured workflow for tackling complex, multi-step tasks. Instead of executing immediately, the agent first... |
| `pricing.mdx` | PostHog AI pricing: AI features in PostHog consume AI credits. Each time you interact with an AI-powered feature – whether you're asking PostHog... |
| `research-mode.mdx` | Research mode is a powerful workflow for in-depth data analysis. It uses Claude Opus 4.6 with extended thinking capabilities... |
| `start-here.mdx` | Getting started with PostHog AI: To get started, the first step is to open the PostHog AI chat in the right sidepanel of the PostHog app. |
| `tools.mdx` | PostHog AI is equipped with a collection of developer tools, enabling it to perform work within the platform. It's capable of... |
| `write-and-edit-sql.mdx` | This guide shows you how the PostHog team uses PostHog AI to write and edit SQL queries. It includes a video demo and the... |

### posthog-ai/surfaces/ (2 files)

| File | Description |
|------|-------------|
| `slack.mdx` | Use PostHog AI in Slack: PostHog AI in Slack is in beta. Behavior and available actions may change. |
| `web-app.mdx` | The PostHog web app is home base for PostHog AI. It's available on every page, either as a full chat in the right-hand sidebar... |

### privacy/ (8 files)

| File | Description |
|------|-------------|
| `ad-blockers.md` | Tracking endpoints and ad blockers: PostHog provides a range of services that help teams build great products. |
| `ccpa-compliance.mdx` | PostHog & CCPA compliance: If you have users who are Californian residents, it's important to understand the implications of handling their data... |
| `data-collection.mdx` | PostHog offers a range of controls to help you manage data collection. This guide covers data collection controls available to... |
| `data-storage.mdx` | Controlling data storage: This guide covers the various features available after data reaches PostHog Cloud servers to help you achieve your privacy... |
| `gdpr-compliance.mdx` | The General Data Protection Regulation (GDPR) is a privacy and security law, drafted and passed by the European Union (EU). It... |
| `hipaa-compliance.mdx` | PostHog & HIPAA compliance: PostHog only offers Business Associate Agreements (BAAs) for PostHog Cloud to users with the Boost, Scale, or Enterprise... |
| `index.mdx` | Privacy compliance: Posthog gives you privacy controls at different levels to protect user privacy and comply with regulations. This guide covers... |
| `soc2.mdx` | System and Organization Control 2 Type 2 (SOC 2) is a compliance framework developed by the American Institute of Certified... |

### product-analytics/ (28 files)

| File | Description |
|------|-------------|
| `analyze-data-ai.mdx` | PostHog AI generates insights, builds dashboards, and answers questions about your product data using natural language.... |
| `autocapture.mdx` | Autocapture: PostHog can automatically capture a variety of events in your app without specific tracking code. This page covers the... |
| `best-practices.mdx` | Before optimizing your analytics setup, make sure you're tracking the events that matter most for your business – your growth... |
| `capture-events.mdx` | Capturing events: Once your PostHog instance is up and running, the next step is to start sending events. |
| `color-themes.mdx` | Customizable chart colors: PostHog allows you to customize color themes for your insights, making it easier to align visualizations with your brand... |
| `correlation.mdx` | Correlation analysis is a feature within funnels that automatically highlights significant factors impacting conversion rate. |
| `cutting-costs.mdx` | We aim to be significantly cheaper than our competitors. In addition to our pay-as-you-go pricing, below are tips to reduce... |
| `dashboards.mdx` | Dashboards are the easiest way to track all your most important product and performance metrics. |
| `funnels.mdx` | Funnels: For every flow in your product, more people will start it than complete it successfully. Funnels enable you to visualize your... |
| `group-analytics.mdx` | Group analytics is getting a makeover! Sign up for the customer analytics feature preview to get a sneak peek, and share your... |
| `identify.mdx` | Identifying users: You need to identify users to know who's using your product and what they're doing. Identifying users lets you follow users... |
| `identity-resolution.mdx` | Identity resolution is the problem of coordinating a single, stable representation of a user across every environment your... |
| `index.mdx` | Product analytics helps you understand how people use your product. Use the events you capture to explore adoption,... |
| `insights.mdx` | Creating insights: Insights are the main building blocks of product analytics. |
| `lifecycle.mdx` | Lifecycle: The lifecycle insight visualizes new, returning, resurrecting, and dormant users. |
| `path-cleaning.mdx` | Path cleaning |
| `paths.mdx` | User paths are a type of insight that enable you to follow users along their journey through your product and determine where... |
| `person-properties.mdx` | Person properties enable you to capture, manage, and analyze specific data about a user. You can use them to create filters or... |
| `pricing.mdx` | Product Analytics comes with a generous free tier and transparent, usage-based pricing. Our large free tier means more than... |
| `privacy.mdx` | Privacy controls: PostHog offers a range of controls to limit what data is captured by product analytics. They are listed below in order of... |
| `retention.mdx` | Retention shows you how many users return during subsequent periods. It's useful for answering questions like: |
| `schema-management.mdx` | Schema management lets you define and enforce the structure of your events using typed property groups. This helps document... |
| `sharing.mdx` | For any dashboard or insight, you can share a public link and/or embed it using an iframe. This is useful if you want to share... |
| `start-here.mdx` | To get started with Product Analytics, the first step is to install the PostHog SDK to start capturing events within your... |
| `stickiness.mdx` | Stickiness is a type of insight that enables you to see how many times users perform an event within a specific time period.... |
| `subscriptions.mdx` | Subscriptions enable you to send insights or dashboards to your email or Slack on a regular basis. |
| `troubleshooting.mdx` | Product Analytics troubleshooting: This page covers troubleshooting for Product Analytics and event capture. For setup, see the installation guides. |
| `tutorials.mdx` | Tutorials and guides: Got a question which isn't answered below? Head to the community forum to let us know! |

### product-analytics/installation/ (21 files)

| File | Description |
|------|-------------|
| `ai-wizard.mdx` | AI wizard Product Analytics installation |
| `android.mdx` | Android Product Analytics installation |
| `api.mdx` | API Product Analytics installation |
| `dotnet.mdx` | .NET Product Analytics installation |
| `elixir.mdx` | Elixir Product Analytics installation |
| `flutter.mdx` | Flutter Product Analytics installation |
| `go.mdx` | Go Product Analytics installation |
| `index.mdx` | Install PostHog in seconds with our wizard by running this command in your project directory with your terminal (it also works... |
| `ios.mdx` | iOS Product Analytics installation: PostHog is available through CocoaPods or as a Swift Package Manager dependency. |
| `java.mdx` | Java Product Analytics installation |
| `kmp.mdx` | Kotlin Multiplatform Product Analytics installation |
| `nodejs.mdx` | Node.js Product Analytics installation |
| `php.mdx` | PHP Product Analytics installation |
| `python.mdx` | Python Product Analytics installation |
| `react-native.mdx` | Our React Native library enables you to integrate PostHog with your React Native project. For Expo projects, there are no... |
| `react-router.mdx` | React Router Product Analytics installation |
| `react.mdx` | React Product Analytics installation |
| `remix.mdx` | Remix Product Analytics installation |
| `ruby.mdx` | Ruby Product Analytics installation |
| `rust.mdx` | Rust Product Analytics installation |
| `web.mdx` | Web Product Analytics installation |

### product-analytics/surfaces/ (3 files)

| File | Description |
|------|-------------|
| `api.mdx` | Product analytics API: Use the API to run analytics queries and manage saved insights from your own systems – a nightly report, an internal admin... |
| `mcp.mdx` | The PostHog MCP server gives your AI coding agent direct access to your analytics. Query trends, funnels, retention, and... |
| `web-app.mdx` | The PostHog web app is home base for product analytics. It's where you build insights, save them to dashboards, share them... |

### product-analytics/trends/ (8 files)

| File | Description |
|------|-------------|
| `aggregations.mdx` | Aggregations: There are numerous ways to aggregate events and properties in trends, so you can go beyond just tracking the total number of... |
| `breakdowns.mdx` | Breakdowns: You can use breakdowns to split up trends insights by the values of a specific property, such as by Current URL, Country, or... |
| `charts.mdx` | Charts: There are fifteen charts and visualization options in trends. They're split into two categories: |
| `filters.mdx` | Filters: Trends support two types of filters: |
| `formulas.mdx` | Formulas are custom mathematical expressions that you can use to compare and combine the value of multiple series. |
| `overview.mdx` | Trends insights enable you to plot data from people, events, and properties however you want. |
| `statistical-analysis.mdx` | Statistical analysis: When analyzing data, it's important to understand if your results are statistically significant. In other words, are the... |
| `tips.mdx` | Clicking on a data point in a trends insight opens the persons modal, which shows you a list of users/groups that performed it... |

### prompt-management/ (3 files)

| File | Description |
|------|-------------|
| `index.mdx` | Prompt management lets you create and update LLM prompts directly in PostHog. When you use prompts through the SDK, they're... |
| `prompt-experiments.mdx` | A/B testing prompts |
| `temporal.mdx` | Temporal splits your code into workflows, which must be deterministic, and activities, which can do anything. A prompt fetch... |

### replay-vision/ (15 files)

| File | Description |
|------|-------------|
| `alerts.mdx` | Alerts: An alert watches a scanner's observations and notifies you when something you care about happens. Alerts live on the scanner's... |
| `api.mdx` | Scan requests let your own code ask Replay Vision about specific sessions. Use them when something outside PostHog decides... |
| `calibration.mdx` | Rating observations is how you teach a scanner. Every thumbs up or down, and the note you leave with it, feeds a short set of... |
| `creating-scanners.mdx` | Creating scanners: A scanner is made up of six things you author: |
| `index.mdx` | Replay Vision uses AI to automatically watch your session recordings and turn what it sees into structured, queryable data.... |
| `mcp.mdx` | MCP: The PostHog MCP server exposes Replay Vision through a set of tools your AI coding agent can call directly – design and create... |
| `observations.mdx` | Observations: An observation is one scanner's result for one recording. Each scanner has an Observations tab listing every observation it's... |
| `quota-and-limits.mdx` | Quota and limits: Replay Vision usage is metered per organization in credits, on a monthly billing cycle. This page covers how observations are... |
| `running-scanners.mdx` | Running scanners: There are three ways a scanner produces observations: automatically in the background as new recordings come in, on demand... |
| `scanner-prompts.mdx` | Scanner prompts: These prompts create Replay Vision scanners that follow the best practices from What we learned from our first 400k Replay... |
| `scanner-types.mdx` | Scanner types: The scanner type determines the shape of the structured output the model returns. It's chosen when you create a scanner and... |
| `scouts.mdx` | Scouts: Observations tell you what a scanner found, one session at a time. A scout reads them for you: it's a scheduled agent that... |
| `start-here.mdx` | This walkthrough takes you from zero to your first observation in about five minutes. We'll have PostHog AI draft a scanner... |
| `troubleshooting.mdx` | Troubleshooting: Common things that go wrong with Replay Vision, and what to do about each. |
| `what-to-watch.mdx` | Highlights: Each card is one session, picked from one scanner: |

### revenue-analytics/ (9 files)

| File | Description |
|------|-------------|
| `analyze-revenue-ai.mdx` | PostHog AI tracks revenue trends, builds dashboards, and analyzes your business performance using natural language. Ask about... |
| `capture-revenue-events.mdx` | Capturing revenue events: You can collect revenue data as PostHog events. This guide walks through what properties to include and how to configure... |
| `connect-to-customers.mdx` | Connect to customers: PostHog automatically connects revenue data to persons and groups when you use revenue events. For data warehouse sources, you... |
| `deferred-revenue.mdx` | Deferred revenue: When using revenue data from your Data Warehouse (like Stripe), PostHog will automatically defer revenue recognition to match... |
| `managed-views.mdx` | Managed views: Revenue analytics works by automatically transforming the data coming from your different revenue sources (Stripe or events)... |
| `query-revenue-mcp.mdx` | The PostHog MCP server lets your AI coding agent query revenue data directly from your code editor. Check MRR, analyze revenue... |
| `revenue-metrics.mdx` | Revenue metrics: PostHog computes a set of revenue metrics from the revenue data you send us, whether that comes from a payment platform like... |
| `start-here.mdx` | You can configure PostHog to integrate with a revenue data source like Stripe, or you can explicitly capture revenue data as... |
| `troubleshooting.mdx` | Revenue Analytics troubleshooting: This page covers troubleshooting for Revenue Analytics. For setup, see the installation guides. |

### revenue-analytics/payment-platforms/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | Connect to payment platforms: The simplest way to get started with revenue analytics is to connect to a payment platform. |
| `stripe.mdx` | Stripe payment platform: When using revenue analytics, you can connect Stripe to PostHog as a source of revenue data. PostHog will automatically use... |

### self-driving/ (14 files)

| File | Description |
|------|-------------|
| `anatomy-of-a-pr.mdx` | Anatomy of a pull request: Self-driving is in open beta. It's improving quickly – expect rough edges, and expect them to disappear fast. |
| `context.mdx` | Context: Self-driving is in open beta. It's improving quickly – expect rough edges, and expect them to disappear fast. |
| `faq.mdx` | Self-driving is in open beta. It's improving quickly – expect rough edges, and expect them to disappear fast. |
| `index.mdx` | Self-driving: PostHog makes your product self-driving. It watches how people actually use your product, finds what's worth fixing, opens a... |
| `pricing.mdx` | Self-driving is in open beta and pricing is subject to change. It's improving quickly – expect rough edges, and expect them to... |
| `reports.mdx` | Reports: Self-driving is in open beta. It's improving quickly – expect rough edges, and expect them to disappear fast. |
| `scout-examples.mdx` | Scout examples: Self-driving is in open beta. It's improving quickly – expect rough edges, and expect them to disappear fast. |
| `scouts.mdx` | Scouts: Self-driving is in open beta. It's improving quickly – expect rough edges, and expect them to disappear fast. |
| `self-improving-loop.mdx` | The self-improving loop: Self-driving is in open beta. It's improving quickly – expect rough edges, and expect them to disappear fast. |
| `setup.mdx` | Set up self-driving: Self-driving is in open beta. It's improving quickly – expect rough edges, and expect them to disappear fast. |
| `signals.mdx` | Signals: Self-driving is in open beta. It's improving quickly – expect rough edges, and expect them to disappear fast. |
| `steering.mdx` | Use steering instructions to tell Self-driving agents what matters to your project and how to approach their work. Set shared... |
| `web.mdx` | Web app: PostHog Web is the PostHog you already know, now a surface for self-driving. It's the full product in your browser, and it... |
| `whats-in-a-scout.mdx` | What's in a scout: This page is for the curious. If you want to understand how scouts work under the hood, this page is for you. |

### self-driving/from-our-inbox/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | From our inbox: Self-driving is in open beta. It's improving quickly – expect rough edges, and expect them to disappear fast. |

### self-driving/from-our-inbox/_curator/ (1 files)

| File | Description |
|------|-------------|
| `SKILL.md` | Scout: from our inbox: > |

### self-driving/from-our-inbox/_examples/ (21 files)

| File | Description |
|------|-------------|
| `2026-09-26-dashboard-missing-dropped-signals.md` | 2026-09-26-dashboard-missing-dropped-signals.md |
| `2026-09-26-logs-scout-missing-worker.md` | 2026-09-26-logs-scout-missing-worker.md |
| `2026-09-26-notification-feed-history-scan.md` | 2026-09-26-notification-feed-history-scan.md |
| `2026-09-26-refund-note-newlines.md` | 2026-09-26-refund-note-newlines.md |
| `2026-09-26-similar-issues-bad-input.md` | 2026-09-26-similar-issues-bad-input.md |
| `2026-09-26-work-column-selection-scans.md` | 2026-09-26-work-column-selection-scans.md |
| `2026-09-29-docs-scout-mechanical-corrections.md` | 2026-09-29-docs-scout-mechanical-corrections.md |
| `2026-09-30-scout-search-spaces.md` | 2026-09-30-scout-search-spaces.md |
| `2026-10-01-android-retry-setting-scope.md` | 2026-10-01-android-retry-setting-scope.md |
| `2026-10-02-pganalyze-repeat-signals.md` | 2026-10-02-pganalyze-repeat-signals.md |
| `2026-10-05-scout-complete-hour-comparisons.md` | 2026-10-05-scout-complete-hour-comparisons.md |
| `2026-10-08-claude-settings-install-hint.md` | 2026-10-08-claude-settings-install-hint.md |
| `2026-10-12-automatic-scouts-onboarding.md` | 2026-10-12-automatic-scouts-onboarding.md |
| `2026-10-13-legacy-feed-redirect.md` | 2026-10-13-legacy-feed-redirect.md |
| `2026-10-14-scout-stable-digest-memory.md` | 2026-10-14-scout-stable-digest-memory.md |
| `2026-10-15-chart-row-limit.md` | 2026-10-15-chart-row-limit.md |
| `2026-10-19-twilio-release-status.md` | 2026-10-19-twilio-release-status.md |
| `2026-10-20-date-picker-screenshot-clock.md` | 2026-10-20-date-picker-screenshot-clock.md |
| `2026-10-28-scout-timestamp-conversion.md` | 2026-10-28-scout-timestamp-conversion.md |
| `2026-10-31-alert-zero-multiplier.md` | 2026-10-31-alert-zero-multiplier.md |
| `2026-11-06-missing-pull-request-diff.md` | 2026-11-06-missing-pull-request-diff.md |

### self-driving/inbox/ (5 files)

| File | Description |
|------|-------------|
| `implementation.mdx` | Implementation: Self-driving is in open beta. It's improving quickly – expect rough edges, and expect them to disappear fast. |
| `index.mdx` | Inbox: Self-driving is in open beta. It's improving quickly – expect rough edges, and expect them to disappear fast. |
| `research.mdx` | Research tasks: Self-driving is in open beta. It's improving quickly – expect rough edges, and expect them to disappear fast. |
| `sources.mdx` | Signal sources: Self-driving is in open beta. It's improving quickly – expect rough edges, and expect them to disappear fast. |
| `troubleshooting.mdx` | Troubleshooting: Self-driving is in open beta. It's improving quickly – expect rough edges, and expect them to disappear fast. |

### self-host/ (1 files)

| File | Description |
|------|-------------|
| `index.mdx` | Self-host PostHog: We don't publish CVEs for PostHog. A CVE names the affected version(s) and the release that fixes them, but PostHog doesn't... |

### self-host/configure/ (8 files)

| File | Description |
|------|-------------|
| `egress.md` | In order to understand usage and build better products, PostHog instances routinely send usage reports to our servers. In... |
| `email.md` | Configuring email: PostHog's core relies on email messaging for certain functionality. For example: - Sending a reset link to a user that has... |
| `environment-variables.md` | Environment variables: As of PostHog 1.33.0 some settings can now be managed directly in the app, without having to connect to your cluster and/or... |
| `instance-settings.md` | Instance settings: When self-hosting PostHog there are several instance settings that can be adjusted according to your needs. These settings are... |
| `running-behind-proxy.md` | Running behind a proxy: If you're running PostHog behind a proxy, there are a few more things you need to do to make sure PostHog works. You usually... |
| `securing-posthog.mdx` | Securing PostHog: You can restrict access to PostHog by IP by passing ALLOWEDIPBLOCKS. This is a comma separated list, and can either be... |
| `session-replay-storage.mdx` | The original version of session replay stored recordings in ClickHouse. At higher scale, this was impractical and expensive.... |
| `slack.md` | Configuring Slack: PostHog has built in support for sending Slack notifications via Actions or Subscriptions. For self-hosted PostHog instances,... |

### self-host/deploy/ (1 files)

| File | Description |
|------|-------------|
| `troubleshooting.md` | Troubleshooting and debugging your PostHog instance: First, check that DNS is set up properly: |

### self-host/open-source/ (2 files)

| File | Description |
|------|-------------|
| `disclaimer.mdx` | Self-hosted open-source deployment is made for hobbyists or hosting PostHog in weird and wonderful ways (like in your basement). |
| `support.mdx` | Open-source self-hosted support: PostHog at production scale is a data-intensive application with a complex system architecture. |

### semantic-layer/ (8 files)

| File | Description |
|------|-------------|
| `certifications-and-relationships.mdx` | Metrics govern your answers. Certifications and relationships govern the tables the answers come from: which sources to trust,... |
| `governance.mdx` | Governance: The semantic layer's whole design reduces to one sentence: AI generates, a human owns. This page explains how that principle... |
| `index.mdx` | Semantic layer: Ask three AI tools "what's our MRR?" and you get three different queries and three different numbers. Not because the tools... |
| `mcp-tools.mdx` | The PostHog MCP server is how agents work with the semantic layer. This page is the reference for the semantic layer's tools –... |
| `metrics.mdx` | Metrics: A metric is a named, governed answer to a business question: one definition, one owner, one source of truth. Instead of every... |
| `query.mdx` | The whole semantic layer is queryable with SQL through system.informationschema – from the SQL editor in PostHog or the... |
| `start-here.mdx` | In this guide you'll take a metric that only exists in people's heads – MRR – and turn it into a governed definition every AI... |
| `troubleshooting.mdx` | Troubleshooting and limitations: If the data-catalog- tools are missing: |

### session-replay/ (17 files)

| File | Description |
|------|-------------|
| `canvas-recording.mdx` | Canvas recording: PostHog can capture canvas elements from your application. It works in both 2D and WebGL environments. |
| `console-log-recording.mdx` | PostHog can capture console logs, info, warnings, and errors from your application. This is useful for debugging and providing... |
| `find-replays-ai.mdx` | PostHog AI searches and filters session recordings using natural language. Instead of building filters manually, describe the... |
| `how-to-control-which-sessions-you-record.mdx` | This page is written with the assumed defaults: '2026-06-25' when initializing the PostHog SDK. Earlier defaults values change... |
| `how-to-watch-recordings.mdx` | To watch recordings, you can visit the Replay page or click on any data point in an insight. This opens a list of persons and... |
| `iframes.mdx` | Iframe recording: PostHog can record iframes embedded in your website as long as: |
| `index.mdx` | Session replay records what real users do in your product and plays it back like a DVR, with a synced DevTools panel showing... |
| `integrations.mdx` | Integrations: Session replay integrates with issue tracking tools like Linear, GitHub, GitLab, and Jira. This enables you to create and link... |
| `mobile.mdx` | Mobile session replay enables you to record user sessions in mobile apps. This includes screen recordings, network requests,... |
| `network-recording.mdx` | Session replay allows you to capture network requests and responses, providing insights into network performance and potential... |
| `privacy.mdx` | Privacy controls: PostHog offers a range of controls to limit what data is captured by session recordings. Our privacy controls run in the... |
| `recording-retention.mdx` | Depending on how your app or website is built, recordings can take a lot of disk space. To manage this, we have the following... |
| `sharing.mdx` | Replays are typically viewed in session replay part of PostHog, but sometimes, you might want to share them internally or... |
| `snapshot-api.mdx` | The snapshot API is structured a little like hitting the homepage of a website to see what documents are available and then... |
| `start-here.mdx` | Add a PostHog SDK to your app and enable session recording. Web needs a snippet or the JavaScript SDK; mobile apps use the... |
| `troubleshooting.mdx` | Session Replay troubleshooting: This page covers troubleshooting for Session Replay. For setup, see the installation guides. |
| `tutorials.mdx` | Tutorials and guides: Got a question which isn't answered below? Head to the community forum to let us know! |

### session-replay/installation/ (21 files)

| File | Description |
|------|-------------|
| `android.mdx` | Android Session Replay installation |
| `angular.mdx` | Angular Session Replay installation |
| `astro.mdx` | Astro Session Replay installation |
| `bubble.mdx` | Bubble Session Replay installation |
| `flutter.mdx` | Flutter Session Replay installation |
| `framer.mdx` | Framer Session Replay installation |
| `html-snippet.mdx` | HTML snippet Session Replay installation |
| `index.mdx` | Session replay enables you to record users navigating through your website or mobile app and play back the individual sessions... |
| `ios.mdx` | iOS Session Replay installation |
| `kmp.mdx` | Kotlin Multiplatform Session Replay installation |
| `nextjs.mdx` | Next.js Session Replay installation |
| `nuxt.mdx` | Nuxt Session Replay installation |
| `react-native.mdx` | React Native Session Replay installation: The native plugin supports three additive iOS dependency paths: |
| `react-router.mdx` | React Router Session Replay installation |
| `react.mdx` | React Session Replay installation |
| `remix.mdx` | Remix Session Replay installation |
| `svelte.mdx` | Svelte Session Replay installation |
| `unity.mdx` | Unity Session Replay installation |
| `vue.mdx` | Vue Session Replay installation |
| `web.mdx` | Web Session Replay installation |
| `webflow.mdx` | Webflow Session Replay installation |

### session-replay/surfaces/ (3 files)

| File | Description |
|------|-------------|
| `api.mdx` | PostHog's REST API exposes session recordings and playlists, so you can pull replay metadata into your own systems, automate... |
| `mcp.mdx` | The PostHog MCP server exposes session replay to any MCP client, so your AI coding agent can find and read sessions from your... |
| `web-app.mdx` | The PostHog web app is where you watch replays. Open Replay and you get a filterable list of recorded sessions on the left and... |

### settings/ (9 files)

| File | Description |
|------|-------------|
| `access-control.mdx` | Access control: PostHog's access control system allows you to manage permissions at three levels: organization, project, and resource. This... |
| `account-settings.mdx` | Account settings: In your Account settings you will find options for: |
| `activity-logs.mdx` | Activity logs show who changed what, and when. Use them to investigate unexpected changes, track feature flag rollouts,... |
| `agent-discovery.mdx` | Agent discovery (auth.md): PostHog publishes machine-readable metadata so AI agents can discover how to authenticate and create accounts, with no... |
| `approvals.mdx` | Approvals add a review step before high-impact changes take effect. Use them to prevent accidental rollouts, enforce change... |
| `organizations.mdx` | Organizations: An organization is the highest abstraction level within a PostHog instance. It's made up of projects (see more in the project... |
| `projects.mdx` | Projects: A project is a silo of data within PostHog. All data belongs to a single project and all queries are project-specific. |
| `property-access-control.mdx` | Property access control: Use property access control to hide sensitive event and person properties from members who shouldn't see them. Restricted... |
| `warehouse-access-control.mdx` | You can restrict who can query synced or self-managed warehouse tables, views, and materialized views. Denied tables and views... |

### settings/activity-logs/ (1 files)

| File | Description |
|------|-------------|
| `siem.mdx` | SIEM integration: You can forward PostHog activity logs into a security information and event management (SIEM) system to keep an audit trail... |

### settings/authentication/ (5 files)

| File | Description |
|------|-------------|
| `id-jag.mdx` | ID-JAG (Identity Assertion JWT Authorization Grant, also called XAA) lets your organization's identity provider (IdP), such as... |
| `oidc.mdx` | OIDC: OpenID Connect (OIDC) enables users to access multiple systems with a single set of credentials. This is helpful for growing... |
| `saml.mdx` | SAML: Security Assertion Markup Language (SAML) enables users to access multiple systems with a single set of credentials. This is... |
| `scim.mdx` | SCIM: System for Cross-domain Identity Management (SCIM) enables you to automatically provision and deprovision users in PostHog... |
| `sso.mdx` | SSO makes logging in easier for users to log and compliance easier for administrators. |

### skills/ (2 files)

| File | Description |
|------|-------------|
| `community.mdx` | Community skills: The community skills store is a public catalog of agent skills shared by PostHog users. You can browse it, install skills into... |
| `index.mdx` | Skills are versioned, reusable instructions for AI agents, stored centrally in PostHog and managed in the Skills section of... |

### slack/ (4 files)

| File | Description |
|------|-------------|
| `commands.mdx` | You mention @PostHog to start a task. Everything else – routing rules, project routing, the command list itself – is... |
| `index.mdx` | PostHog Slack app: The PostHog Slack app is in beta. Commands, scopes, and behavior are still moving – expect some rough edges and reach out in... |
| `pricing.mdx` | The Slack app is in beta. Billing is usage-based through PostHog AI credits and may change as the product matures – check this... |
| `setup.mdx` | To use @PostHog in Slack, a project admin connects your Slack workspace to each PostHog project. To ship code, connect GitHub... |

### sql/ (7 files)

| File | Description |
|------|-------------|
| `aggregations.mdx` | Supported aggregations: This is an ever-expanding list of enabled aggregations. |
| `ai-functions.mdx` | SQL AI functions: PostHog SQL includes AI functions that classify query rows and generate embeddings for semantic search. |
| `clickhouse-functions.mdx` | Supported ClickHouse functions: This is an ever-expanding list of enabled ClickHouse functions. |
| `expressions.mdx` | SQL expressions enable you to directly access, modify, and aggregate data in many places in PostHog including: |
| `index.mdx` | SQL access in PostHog: You can use SQL (Structured Query Language) throughout PostHog to manage, query, and modify data. |
| `optimizing-queries.mdx` | Queries made with a personal API key draw from an hourly read budget per project. The budget refills continuously, and unused... |
| `tutorials.mdx` | SQL tutorials: Got a question which isn't answered below? Head to the community forum to let us know! |

### support/ (14 files)

| File | Description |
|------|-------------|
| `ai-agent.mdx` | AI agent: The AI agent is in beta, and it is not enabled for every project. If you do not see AI agent under Support > Settings, ask us... |
| `email.mdx` | Connect email: The email channel lets customers reach you by email. Incoming emails turn into support tickets in PostHog. Your replies go... |
| `github.mdx` | Connect GitHub: The GitHub Issues channel connects your GitHub repositories to PostHog Support, enabling two-way sync between GitHub issues... |
| `inbox.mdx` | Support inbox: The PostHog web app is home base for a support engineer. It's the surface for your Support inbox, where you read and reply to... |
| `index.mdx` | Support is one inbox for every customer conversation, with the sender's session replay, events, and errors already attached.... |
| `javascript-api.mdx` | The posthog.conversations JavaScript API gives you full programmatic control over PostHog Support. Use it to build a custom... |
| `pricing.mdx` | Support pricing: The core of Support is free. There is no ticket cap and no per-seat charge. You pay only for opt-in pieces, and only after we... |
| `slack.mdx` | Connect Slack: The SupportHog Slack bot connects your Slack workspace to PostHog Support, enabling two-way sync between Slack conversations... |
| `start-here.mdx` | Get started with Support: The first step is to enable Support and add the in-app widget to your site, so customer conversations start arriving as... |
| `teams.mdx` | Microsoft Teams support is in beta, and it is not enabled for every project. If you do not see Microsoft Teams under Support >... |
| `troubleshooting.mdx` | Troubleshooting Support: Fixes for the problems we see most often. Each fix links to the setup page that has the full details. |
| `use-cases.mdx` | Support use cases: Pick the setup that matches how your customers already reach you. Each one uses the same inbox. |
| `widget.mdx` | Set up the widget: The Support widget is a chat interface that appears on your website so your customers can start conversations with your team.... |
| `workflows.mdx` | Automate ticket handling: Support integrates with Workflows to automate ticket management. Tickets emit events that trigger Workflows, and Workflow... |

### support/concepts/ (1 files)

| File | Description |
|------|-------------|
| `channels.mdx` | Channels: A channel is a way a customer conversation reaches Support. Whatever channel a message arrives on, it becomes a ticket in the... |

### support/imports/ (2 files)

| File | Description |
|------|-------------|
| `index.mdx` | PostHog Support can import historical ticket data from other help desks into the unified inbox. Use this when migrating to... |
| `zendesk.mdx` | Import from Zendesk: Zendesk import is in beta. |

### support/surfaces/ (2 files)

| File | Description |
|------|-------------|
| `mcp.mdx` | The PostHog MCP server brings Support into Claude Code, Cursor, and other AI tools. If you already work in one of these tools,... |
| `slack.mdx` | Use Support in Slack: SupportHog is how a support team works in Slack. Customers raise a ticket with @SupportHog or a :ticket: reaction. Your team... |

### surveys/ (12 files)

| File | Description |
|------|-------------|
| `conditional-questions.mdx` | Conditional questions: It is useful to be able to display survey questions conditionally. For example, you may want to ask follow-up questions based... |
| `create-surveys-ai.mdx` | PostHog AI creates Surveys from natural language descriptions. Describe the survey you want – including the audience, question... |
| `creating-surveys.mdx` | Creating surveys: To create a new survey, go to the surveys tab in the PostHog app, and click on the New survey button in the top right. This... |
| `destinations.mdx` | Survey responses destinations: You can send survey responses to Slack, Discord, Microsoft Teams, or a custom webhook. The easiest way is to add a... |
| `implementing-custom-surveys.mdx` | Implementing custom surveys: At its most basic level, a survey is a collection of response events. If you wanted to, you could capture events from... |
| `index.mdx` | Surveys collect qualitative feedback from your users – NPS, product-market fit, churn reasons, or plain open text – and put it... |
| `setup.mdx` | Initial setup: There are two ways to set up surveys: |
| `start-here.mdx` | Get started with Surveys: Surveys are rendered by the PostHog SDK you already have installed. Add PostHog to your app – or check that your existing... |
| `summarize-responses-ai.mdx` | PostHog AI analyzes and summarizes your Survey responses, extracting themes, sentiment, and actionable insights from open-text... |
| `troubleshooting.mdx` | Surveys troubleshooting: This page covers troubleshooting for Surveys. For setup, see the installation guides. |
| `tutorials.mdx` | Tutorials and guides: Got a question which isn't answered below? Head to the community forum to let us know! |
| `viewing-results.mdx` | Viewing survey results: Survey results can be viewed in three places: |

### surveys/installation/ (18 files)

| File | Description |
|------|-------------|
| `android.mdx` | Android Surveys installation: Not all survey features are available on every SDK. See the SDK feature support matrix for a full comparison. |
| `angular.mdx` | Angular Surveys installation |
| `astro.mdx` | Astro Surveys installation |
| `bubble.mdx` | Bubble Surveys installation |
| `flutter.mdx` | Flutter Surveys installation |
| `framer.mdx` | Framer Surveys installation |
| `index.mdx` | Surveys installation: Surveys let you collect qualitative feedback from your users through targeted, customizable popups. You can trigger them based... |
| `ios.mdx` | iOS Surveys installation: Not all survey features are available on every SDK. See the SDK feature support matrix for a full comparison. |
| `nextjs.mdx` | Next.js Surveys installation |
| `nuxt.mdx` | Nuxt Surveys installation |
| `react-native.mdx` | React Native Surveys installation: Not all survey features are available on every SDK. See the SDK feature support matrix for a full comparison. |
| `react-router.mdx` | React Router Surveys installation |
| `react.mdx` | React Surveys installation |
| `remix.mdx` | Remix Surveys installation |
| `svelte.mdx` | Svelte Surveys installation |
| `vue.mdx` | Vue Surveys installation |
| `web.mdx` | Web Surveys installation |
| `webflow.mdx` | Webflow Surveys installation |

### surveys/surfaces/ (3 files)

| File | Description |
|------|-------------|
| `api.mdx` | Surveys API: Use the API when you want surveys managed by your own tooling rather than by hand – creating a survey per experiment from a... |
| `mcp.mdx` | The PostHog MCP server exposes PostHog's API as function calling tools to any MCP client, so an agent in Cursor, Claude Code,... |
| `web-app.mdx` | Surveys in PostHog Web: The PostHog web app is where surveys are built, targeted, launched, and read. You write the questions, decide who sees them... |

### tasks/ (3 files)

| File | Description |
|------|-------------|
| `agent-environment.mdx` | Use these variables when your scripts or agent instructions need to detect a PostHog task environment. This guide covers agent... |
| `agent-instructions.mdx` | Agent instructions are standing instructions that PostHog cloud agents read at the start of a task run. They work like an... |
| `index.mdx` | Task infrastructure: PostHog uses shared task infrastructure to run agents across its products. Use these guides when your scripts or agent... |

### toolbar/ (5 files)

| File | Description |
|------|-------------|
| `create-toolbar-actions.mdx` | Creating actions from the toolbar: The toolbar enables you to easily create actions by clicking elements directly on your website. |
| `extension.mdx` | Chrome extension: The PostHog Chrome extension gives you the toolbar tools in a Chrome side panel next to your website. With it, you can inspect... |
| `heatmaps.mdx` | Heatmaps shows you how users are interacting with elements on your website or app. |
| `index.mdx` | Toolbar: The toolbar is like "Inspect Element" for PostHog features and data. |
| `override-feature-flags.mdx` | Overriding feature flags |

### vscode-extension/ (6 files)

| File | Description |
|------|-------------|
| `flag-management.mdx` | Flag management in the VS Code extension: The VS Code extension lets you create, toggle, edit, and manage feature flags without leaving your editor. |
| `index.mdx` | VS Code extension: The PostHog VS Code extension brings feature flags, experiments, event analytics, and session replay data directly into your... |
| `inline-code-intelligence.mdx` | The VS Code extension analyzes your source code in real time and overlays PostHog data directly in the editor. It detects... |
| `session-replay.mdx` | The VS Code extension connects your code to Session Replay data, showing you how many sessions and users are triggering events... |
| `sidebar-dashboard.mdx` | The extension adds a PostHog panel to the VS Code sidebar (activity bar), giving you a dashboard-like interface with tabs for... |
| `stale-flag-cleanup.mdx` | Stale flag cleanup: Over time, feature flags accumulate in codebases. Flags that were fully rolled out, linked to completed experiments, or simply... |

### web-analytics/ (16 files)

| File | Description |
|------|-------------|
| `bot-detection.mdx` | Bot and traffic detection: PostHog classifies traffic by user agent and source IP address so you can tell humans apart from bots, crawlers, and... |
| `campaign-attribution-troubleshooting.mdx` | This page covers troubleshooting for campaign attribution issues. For general web analytics troubleshooting, see the main... |
| `conversion-goals.mdx` | Conversion goals: A conversion goal is a key event or action you want users to do. It can be seen as the main focus your website is driving... |
| `dashboard.mdx` | Web analytics dashboard: The web analytics dashboard provides an overview of your website's traffic. |
| `index.mdx` | Web analytics gives you a simple dashboard of the numbers every website team looks at – visitors, pageviews, sessions, bounce... |
| `investigate-traffic-ai.mdx` | PostHog AI analyzes your web traffic, investigates anomalies, and builds dashboards using natural language. Ask about traffic... |
| `live.mdx` | Live: The Live tab in Web Analytics is a real-time view of what's happening on your site right now: how many users are active, what... |
| `managing-bot-traffic.mdx` | Bots, crawlers, and AI agents make up a growing share of web traffic, and not all of it is noise. PostHog lets you decide –... |
| `marketing-analytics-schema.mdx` | This page documents the column definitions used in Marketing Analytics, including how each metric is calculated and where the... |
| `marketing-analytics.mdx` | Marketing Analytics: This feature is currently an opt-in beta. You can enable it on the feature previews settings page. Please leave a comment on... |
| `path-cleaning.mdx` | Path cleaning: You can also manage path cleaning rules programmatically using the PostHog MCP server. The path-cleaning-rules-update tool... |
| `sending-http-logs.mdx` | $httplog is PostHog's event for server-side HTTP request logs. Most bots, crawlers, and AI agents never run JavaScript, so the... |
| `start-here.mdx` | Web analytics runs on the $pageview events the PostHog SDK sends, so the only real setup step is getting PostHog onto your... |
| `troubleshooting.mdx` | Web Analytics troubleshooting: This page covers troubleshooting for Web Analytics. For setup, see the installation guides. |
| `web-vitals.mdx` | Web vitals: PostHog can automatically capture web vitals like largest contentful paint, first input delay, cumulative layout shift, and... |
| `web-vs-product-analytics.mdx` | What is the difference between web analytics and product analytics?: Here's a quick comparison: |

### web-analytics/installation/ (27 files)

| File | Description |
|------|-------------|
| `ai-wizard.mdx` | AI wizard web analytics installation |
| `android.mdx` | Android web analytics installation |
| `angular.mdx` | Angular web analytics installation |
| `astro.mdx` | Astro web analytics installation |
| `bubble.mdx` | Bubble web analytics installation |
| `docusaurus.mdx` | Docusaurus web analytics installation |
| `flutter.mdx` | Flutter web analytics installation |
| `framer.mdx` | Framer web analytics installation |
| `gtm.mdx` | Google Tag Manager web analytics installation |
| `html-snippet.mdx` | HTML snippet web analytics installation |
| `index.mdx` | After installing PostHog and ensuring autocapture is enabled, head to your web analytics dashboard to see your data. And then... |
| `ios.mdx` | iOS web analytics installation |
| `kmp.mdx` | Kotlin Multiplatform web analytics installation |
| `nextjs.mdx` | Next.js web analytics installation |
| `nuxt.mdx` | Nuxt web analytics installation |
| `phoenix.mdx` | Phoenix web analytics installation |
| `react-native.mdx` | React Native web analytics installation |
| `react-router.mdx` | React Router Web Analytics installation |
| `react.mdx` | React web analytics installation |
| `remix.mdx` | Remix web analytics installation |
| `shopify.mdx` | Shopify web analytics installation |
| `svelte.mdx` | Svelte web analytics installation |
| `tanstack.mdx` | TanStack Start web analytics installation |
| `vue.mdx` | Vue web analytics installation |
| `web.mdx` | JavaScript web analytics installation |
| `webflow.mdx` | Webflow web analytics installation |
| `wordpress.mdx` | WordPress web analytics installation |

### web-analytics/surfaces/ (3 files)

| File | Description |
|------|-------------|
| `api.mdx` | Web analytics API: The API is how traffic data gets into PostHog and how you get it back out. Your site sends pageviews, sessions, and heatmap... |
| `mcp.mdx` | The PostHog MCP server lets your AI agent query web analytics data directly from your code editor. Check traffic after a... |
| `web-app.mdx` | The PostHog web app is home base for web analytics. It's where you read the dashboard, watch traffic arrive in real time,... |

### workflows/ (19 files)

| File | Description |
|------|-------------|
| `ai-tasks.mdx` | The Create AI task step starts an AI agent from a workflow. The agent runs in the background with the tools you give it:... |
| `best-practices.mdx` | Workflows best practices: Use a single well-defined trigger per workflow (e.g. “user sign-up”, “purchase completed”, or a webhook), so the logic is... |
| `broadcasts.mdx` | Send a broadcast: A broadcast sends one email to a group of people, once or on a schedule. Use it for one-off sends like announcements, or... |
| `configure-channels.mdx` | Before you can design a workflow, you need to configure a workflows channel. Channels let you dispatch actions or messages to... |
| `create-emails-ai.mdx` | PostHog AI creates email templates for your Workflows using natural language. Describe the email you want to send – including... |
| `editing-live-workflows.mdx` | You can edit a workflow while it's enabled and people are moving through it. PostHog uses a follow-live model: every step of... |
| `email-drip-campaign.mdx` | In this guide we'll walk through creating a simple drip campaign. After following this guide, you will: - Send a welcome email... |
| `engagement-events.mdx` | Workflow events: PostHog Workflows captures two types of events as standard PostHog events: email engagement events and conversion events.... |
| `import-customerio-optouts.mdx` | In this guide we'll walk through importing your opt-out lists from Customer.io into PostHog and keeping them in sync. |
| `index.mdx` | Workflows is PostHog's no-code, drag-and-drop tool for automating processes and sending messages to your users. You decide... |
| `installation.mdx` | Workflows is a no-code product – you can create and launch Workflows without installing any SDK. However, installing a PostHog... |
| `launch-workflow.mdx` | This guide covers creating a very basic workflow where we send an email to users who perform an event on your app or site.... |
| `library.mdx` | Our library lets you create reusable message templates for your workflows. You can access it from the Library tab in Workflows. |
| `opt-outs.mdx` | Before a workflow sends anything, PostHog checks two lists: the recipient's opt-out preferences and the project's suppression... |
| `replay-vision.mdx` | The Replay Vision step has Replay Vision watch the session recording behind the event that started a workflow. It answers a... |
| `sending-reputation.mdx` | Every project holds a sending tier from 0 to 7. The tier caps how many emails your workflows send per hour and per day, and... |
| `start-here.mdx` | Getting started with workflows: The workflow builder is a powerful, no-code tool for automating processes and sending messages to your users. |
| `troubleshooting.mdx` | Workflows troubleshooting: This page covers troubleshooting for Workflows. For setup, see the installation guide. |
| `workflow-builder.mdx` | Workflow builder: Workflows are a collection of steps that automate a process or deliver messages to your users based on your configured logic.... |

### workflows/push-notifications/ (7 files)

| File | Description |
|------|-------------|
| `android.mdx` | Android push notifications: Set up Workflows push notifications in the Android SDK. For the concept and channel setup, see Push notifications. |
| `flutter.mdx` | Flutter push notifications: Set up Workflows push notifications in the Flutter SDK. For the concept and channel setup, see Push notifications. |
| `import-device-tokens.mdx` | If you're moving to Workflows push notifications from another push provider, you can import the APNs device tokens and FCM... |
| `index.mdx` | Push notifications: PostHog mobile SDKs can register a device for Workflows push notifications and capture when a user opens one. Sends go out... |
| `ios.mdx` | iOS push notifications: Set up Workflows push notifications in the iOS SDK. For the concept and channel setup, see Push notifications. |
| `push-step-options.mdx` | Push step settings: The Push step in the workflow builder sends a notification to every device a person registered with one of your push channels.... |
| `react-native.mdx` | Set up Workflows push notifications in the React Native SDK. For the concept and channel setup, see Push notifications. |

### workflows/surfaces/ (3 files)

| File | Description |
|------|-------------|
| `api.mdx` | Workflows are stored as hog flows, and every one of them is available over the PostHog REST API. Use it when you want... |
| `mcp.mdx` | The PostHog MCP server brings Workflows into Claude Code, Cursor, and other AI tools. It covers the full lifecycle – create a... |
| `web-app.mdx` | The PostHog web app is where workflows are built. It's the surface for the drag-and-drop workflow builder, the content library... |

### workflows/transactional-emails/ (11 files)

| File | Description |
|------|-------------|
| `api.mdx` | Use the API to send transactional emails from any language. The SDKs for Node.js, Python, Go, .NET, Rust, Ruby, Elixir, and... |
| `dotnet.mdx` | The .NET SDK sends transactional emails from version 2.20.0. You need a transactional email and a project secret API key... |
| `elixir.mdx` | The Elixir SDK sends transactional emails from version 2.20.0. You need a transactional email and a project secret API key... |
| `examples.mdx` | These examples cover the transactional emails that most products send. Each one says which settings to use, how to build its... |
| `go.mdx` | The Go SDK sends transactional emails from version 1.40.0. You need a transactional email and a project secret API key first.... |
| `index.mdx` | Send transactional emails: Transactional emails are a new feature. Things might change or break while we work on them. |
| `node.mdx` | The Node.js SDK sends transactional emails from version 5.61.2. You need a transactional email and a project secret API key... |
| `php.mdx` | The PHP SDK sends transactional emails from version 4.22.0. You need a transactional email and a project secret API key first.... |
| `python.mdx` | The Python SDK sends transactional emails from version 7.81.2. You need a transactional email and a project secret API key... |
| `ruby.mdx` | The Ruby SDK sends transactional emails from version 3.30.0. You need a transactional email and a project secret API key... |
| `rust.mdx` | The Rust SDK sends transactional emails from version 0.31.0. You need a transactional email and a project secret API key... |

