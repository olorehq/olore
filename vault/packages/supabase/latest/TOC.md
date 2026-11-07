# supabase Table of Contents

## Directory Map

```
contents/
├── guides/ai/                          # 35 files
├── guides/ai-tools/                    # 5 files
├── guides/api/                         # 15 files
├── guides/auth/                        # 85 files
├── guides/cron/                        # 2 files
├── guides/database/                    # 94 files
├── guides/deployment/                  # 13 files
├── guides/functions/                   # 57 files
├── guides/getting-started/             # 43 files
├── guides/integrations/                # 8 files
├── guides/local-development/           # 16 files
├── guides/observability/               # 21 files
├── guides/platform/                    # 49 files
├── guides/queues/                      # 5 files
├── guides/realtime/                    # 18 files
├── guides/resources/                   # 1 files
├── guides/security/                    # 11 files
├── guides/self-hosting/                # 21 files
├── guides/storage/                     # 45 files
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/guides/getting-started/quickstarts/` |
| Auth | `contents/guides/auth.mdx` |
| Database | `contents/guides/database/overview.mdx` |
| Edge Functions | `contents/guides/functions.mdx` |
| Storage | `contents/guides/storage.mdx` |
| Realtime | `contents/guides/realtime.mdx` |
| Self-hosting | `contents/guides/self-hosting.mdx` |

## Detailed Structure

### guides/ (18 files)

| File | Description |
|------|-------------|
| `ai-tools.mdx` | AI Tools: Connect your AI coding agent to Supabase. |
| `ai.mdx` | AI & Vectors: The best vector database is the database you already have. |
| `api.mdx` | Data REST API: Auto-generating data REST API. |
| `auth.mdx` | Auth: Use Supabase to authenticate and authorize your users. |
| `cron.mdx` | Cron: Schedule Recurring Jobs with Cron Syntax in Postgres |
| `deployment.mdx` | Deployment & Branching |
| `functions.mdx` | Edge Functions: Run TypeScript functions globally at the edge. |
| `getting-started.mdx` | Getting Started: Resources for getting started with Supabase. |
| `integrations.mdx` | Integrations |
| `local-development.mdx` | Local Development & CLI: Learn how to develop locally and use the Supabase CLI |
| `observability.mdx` | Observability: Read project data, diagnose issues, and run agent prompts to check your project |
| `platform.mdx` | Supabase Platform: Getting started with the Supabase Platform. |
| `queues.mdx` | Supabase Queues: Durable Message Queues with Guaranteed Delivery in Postgres |
| `realtime.mdx` | Realtime: Send and receive messages to connected clients. |
| `resources.mdx` | Resources: Resources for getting started building with Supabase. |
| `security.mdx` | Supabase Security: Security and compliance on the Supabase platform. |
| `self-hosting.mdx` | Self-Hosting: Install and run your own Supabase on your computer, server, or cloud infrastructure. |
| `storage.mdx` | Storage: Use Supabase to store and serve files. |

### guides/ai/ (17 files)

| File | Description |
|------|-------------|
| `automatic-embeddings.mdx` | Automatic embeddings: Automate embedding generation and updates in Postgres |
| `choosing-compute-addon.mdx` | Choosing your Compute Add-on: Choosing the right Compute Add-on for your vector workload. |
| `concepts.mdx` | Concepts: Learn about embeddings within AI and vector applications. |
| `engineering-for-scale.mdx` | Engineering for Scale: Building an enterprise-grade vector architecture. |
| `going-to-prod.mdx` | Going to Production: Going to production checklist for AI applications. |
| `google-colab.mdx` | Google Colab: Use Google Colab to manage your Supabase Vector store. |
| `hugging-face.mdx` | Hugging Face Inference API: Learn how to integrate hugging face models with Supabase |
| `hybrid-search.mdx` | Hybrid search: Combine keyword search with semantic search. |
| `keyword-search.mdx` | Keyword search: Learn how to search by words or phrases. |
| `langchain.mdx` | LangChain: Learn how to integrate Supabase with LangChain, a popular framework for composing AI, Vectors, and embeddings |
| `python-clients.mdx` | Choosing a Client: Learn how to manage vectors using Python |
| `rag-with-permissions.mdx` | RAG with Permissions: Fine-grained access control with Retrieval Augmented Generation. |
| `semantic-search.mdx` | AI semantic search: Learn how to search by meaning rather than exact keywords. |
| `structured-unstructured.mdx` | Structured and Unstructured: Supabase is flexible enough to associate structured and unstructured metadata with embeddings. |
| `vecs-python-client.mdx` | Python client: Manage unstructured vector stores in Postgres. |
| `vector-columns.mdx` | Vector columns: Learn how to use vectors within your own Postgres tables |
| `vector-indexes.mdx` | Vector indexes: Understanding vector indexes |

### guides/ai-tools/ (5 files)

| File | Description |
|------|-------------|
| `ai-prompts.mdx` | AI Prompts: Prompts for working with Supabase using AI-powered IDE tools |
| `ai-skills.mdx` | Agent Skills |
| `byo-mcp.mdx` | Deploy MCP servers: Build and deploy remote MCP servers on Supabase Edge Functions |
| `mcp.mdx` | Supabase MCP Server: Connect your AI tools to Supabase using MCP |
| `plugins.mdx` | Supabase Plugin for AI Coding Agents: One-click setup for Supabase in your AI coding agent |

### guides/ai/examples/ (8 files)

| File | Description |
|------|-------------|
| `building-chatgpt-plugins.mdx` | Building ChatGPT plugins: Use Supabase as a Retrieval Store for your ChatGPT plugin. |
| `headless-vector-search.mdx` | Adding generative Q&A for your documentation: Learn how to build a ChatGPT-style doc search powered using our headless search toolkit. |
| `huggingface-image-captioning.mdx` | Generate image captions using Hugging Face: Use the Hugging Face Inference API to make calls to 100,000+ Machine Learning models from Supabase Edge Functions. |
| `image-search-openai-clip.mdx` | Image Search with OpenAI CLIP: Implement image search with the OpenAI CLIP Model and Supabase Vector. |
| `mixpeek-video-search.mdx` | Video Search with Mixpeek Multimodal Embeddings: Implement video search with the Mixpeek Multimodal Embed API and Supabase Vector. |
| `nextjs-vector-search.mdx` | Vector search with Next.js and OpenAI: Learn how to build a ChatGPT-style doc search powered by Next.js, OpenAI, and Supabase. |
| `openai.mdx` | Generating OpenAI GPT3 completions: Generate GPT text completions using OpenAI and Supabase Edge Functions. |
| `semantic-image-search-amazon-titan.mdx` | Semantic Image Search with Amazon Titan: Implement semantic image search with Amazon Titan and Supabase Vector in Python. |

### guides/ai/integrations/ (4 files)

| File | Description |
|------|-------------|
| `amazon-bedrock.mdx` | Amazon Bedrock: Learn how to integrate Supabase with Amazon Bedrock, a fully managed service of high-performing foundation models. |
| `fireworks-ai.mdx` | Fireworks AI: Call Fireworks AI models from Supabase Edge Functions, and store and search Fireworks embeddings in Postgres with pgvector. |
| `llamaindex.mdx` | Learn how to integrate Supabase with LlamaIndex, a data framework for your LLM applications. |
| `roboflow.mdx` | Roboflow: Learn how to integrate Supabase with Roboflow, a tool for running fine-tuned and foundation vision models. |

### guides/ai/quickstarts/ (4 files)

| File | Description |
|------|-------------|
| `face-similarity.mdx` | Face similarity search: Identify the celebrities who look most similar to you using Supabase Vecs. |
| `generate-text-embeddings.mdx` | Generate Embeddings: Generate text embeddings using Edge Functions. |
| `hello-world.mdx` | Creating and managing collections: Connecting to your database with Colab. |
| `text-deduplication.mdx` | Semantic Text Deduplication: Finding duplicate movie reviews with Supabase Vecs. |

### guides/ai/vector-indexes/ (2 files)

| File | Description |
|------|-------------|
| `hnsw-indexes.mdx` | HNSW indexes: Understanding HNSW indexes in pgvector |
| `ivf-indexes.mdx` | IVFFlat indexes: Understanding IVFFlat indexes in pgvector |

### guides/api/ (10 files)

| File | Description |
|------|-------------|
| `automatic-retries-in-supabase-js.mdx` | How to do automatic retries with `supabase-js`: Learn how to configure automatic retries for your Supabase API requests. |
| `creating-routes.mdx` | Creating API Routes: API routes are automatically created when you create Postgres Tables, Views, or Functions. |
| `custom-claims-and-role-based-access-control-rbac.mdx` | Custom Claims & Role-based Access Control (RBAC): Use Auth Hooks to add custom claims for managing role-based access control. |
| `handling-errors-in-supabase-js.mdx` | Handling errors in `supabase-js`: Read `error.hint` first — Postgres often tells you the exact fix. Log the full error so you actually see it. |
| `query-plans.mdx` | Query plans with explain(): See whether Postgres scans a whole table or uses an index for a slow Data API query. |
| `quickstart.mdx` | Build an API route in less than 2 minutes.: Create your first API route by creating a public `leaderboard` table. |
| `securing-your-api.mdx` | Securing your API: Secure your Data API with explicit grants and Postgres Row Level Security. |
| `sql-to-api.mdx` | Converting SQL to JavaScript API: Implementing common SQL patterns in the JavaScript API |
| `sql-to-rest.mdx` | SQL to REST API Translator: Translate SQL queries to HTTP requests and Supabase client code |
| `using-custom-schemas.mdx` | Using Custom Schemas: You need additional steps to use custom database schemas with data APIs. |

### guides/api/rest/ (5 files)

| File | Description |
|------|-------------|
| `auto-generated-docs.mdx` | Auto-generated documentation: Supabase provides documentation that updates automatically. |
| `client-libs.mdx` | Client Libraries: Supabase provides several client libraries for the REST and Realtime APIs. |
| `generating-python-types.mdx` | Generating Python Types: How to generate Python types for your API and Supabase libraries. |
| `generating-types.mdx` | Generating TypeScript Types: How to generate types for your API and Supabase libraries. |
| `postgrest-error-codes.mdx` | PostgREST error codes: Identify PostgREST errors and resolve them |

### guides/auth/ (35 files)

| File | Description |
|------|-------------|
| `_flow-template.mdx` | A DESCRIPTIVE TITLE: A DESCRIPTIVE SUBTITLE |
| `architecture.mdx` | Auth architecture: The architecture behind Supabase Auth. |
| `audit-logs.mdx` | Auth Audit Logs: Monitor and track authentication events with audit logging. |
| `auth-anonymous.mdx` | Anonymous Sign-Ins: Create and use anonymous users to authenticate with Supabase |
| `auth-captcha.mdx` | Enable CAPTCHA Protection: Add CAPTCHA Protection to your Supabase project |
| `auth-email-passwordless.mdx` | Passwordless email sign-in: Email sign-in using Magic Links or One-Time Passwords (OTPs) |
| `auth-email-templates.mdx` | Email Templates: Learn how to manage the email templates in Supabase. |
| `auth-hooks.mdx` | Auth Hooks: Use HTTP or Postgres Functions to customize your authentication flow |
| `auth-identity-linking.mdx` | Identity Linking: Manage the identities associated with your user |
| `auth-mfa.mdx` | Supabase Auth multi-factor authentication: Add an additional layer of security to your apps with Supabase Auth multi-factor authentication. |
| `auth-smtp.mdx` | Send emails with custom SMTP: Moving towards production: Configuring a custom SMTP provider |
| `auth-web3.mdx` | Sign in with Web3: Use your Web3 wallet to authenticate users with Supabase |
| `choosing-a-server-package.mdx` | Which package to use: When to use supabase-js, @supabase/ssr, or @supabase/server on the server. |
| `custom-oauth-providers.mdx` | Custom OAuth/OIDC Providers: Add any OAuth2 or OIDC-compatible identity provider to your Supabase project |
| `enterprise-sso.mdx` | Enterprise Single Sign-On: Learn about Single Sign-On support in Supabase Auth for enterprise applications |
| `general-configuration.mdx` | General configuration: General configuration options for Supabase Auth |
| `identities.mdx` | Identities |
| `jwt-fields.mdx` | JWT Claims Reference: Complete reference for claims appearing in JWTs created by Supabase Auth |
| `jwts.mdx` | JSON Web Token (JWT): Information on how best to use JSON Web Tokens with Supabase |
| `managing-user-data.mdx` | User Management: View, delete, and export user information. |
| `native-mobile-deep-linking.mdx` | Native Mobile Deep Linking: Set up Deep Linking for mobile applications. |
| `oauth-server.mdx` | OAuth 2.1 Server: Turn your Supabase project into an OAuth 2.1 and OpenID Connect identity provider |
| `passkeys.mdx` | Passkey authentication: Allow users to sign in with passkeys (WebAuthn) |
| `password-security.mdx` | Password security: Help your users to protect their password security |
| `passwords.mdx` | Password-based Auth: Allow users to sign in with a password connected to their email or phone number. |
| `phone-login.mdx` | Phone sign-in: Learn about signing in to your platform using SMS one-time passwords. |
| `rate-limits.mdx` | Rate limits: Rate limits protect your services from abuse |
| `redirect-urls.mdx` | Redirect URLs: Set up redirect urls with Supabase Auth. |
| `server-side.mdx` | Server-Side Rendering: How SSR works with Supabase Auth. |
| `sessions.mdx` | User sessions |
| `signing-keys.mdx` | JWT Signing Keys: Best practices on managing keys used by Supabase Auth to create and verify JSON Web Tokens |
| `signout.mdx` | Signing out: Signing out a user |
| `social-sign-in.mdx` | Social sign-in: Signing in with social accounts |
| `testing-auth-flows.mdx` | Test auth flows: Test email and phone sign-in without hitting email and SMS limits |
| `users.mdx` | Users |

### guides/auth/auth-hooks/ (6 files)

| File | Description |
|------|-------------|
| `before-user-created-hook.mdx` | Before User Created Hook: Prevent unwanted signups by inspecting and rejecting user creation requests |
| `custom-access-token-hook.mdx` | Custom Access Token Hook: Customize the access token issued by Supabase Auth |
| `mfa-verification-hook.mdx` | MFA Verification Hook |
| `password-verification-hook.mdx` | Password Verification Hook |
| `send-email-hook.mdx` | Send Email Hook: Use your own email service to send authentication emails. |
| `send-sms-hook.mdx` | Send SMS Hook: Use your own SMS service to send authentication messages. |

### guides/auth/auth-mfa/ (2 files)

| File | Description |
|------|-------------|
| `phone.mdx` | Multi-Factor Authentication (Phone): Add an additional layer of security with phone (SMS or WhatsApp) multi-factor-authentication. |
| `totp.mdx` | Multi-Factor Authentication (TOTP): Add an additional layer of security to your apps with TOTP multi-factor authentication. |

### guides/auth/debugging/ (1 files)

| File | Description |
|------|-------------|
| `error-codes.mdx` | Auth error codes: Learn about the Auth error codes and how to resolve them |

### guides/auth/enterprise-sso/ (1 files)

| File | Description |
|------|-------------|
| `auth-sso-saml.mdx` | Single Sign-On with SAML 2.0 for Projects: Use Single Sign-On (SSO) authentication on your project with SAML 2.0 |

### guides/auth/oauth-server/ (4 files)

| File | Description |
|------|-------------|
| `getting-started.mdx` | Getting Started with OAuth 2.1 Server: Learn how to enable OAuth 2.1 and register client applications in your Supabase project |
| `mcp-authentication.mdx` | Model Context Protocol (MCP) Authentication: Integrate Supabase Auth with MCP servers to authenticate AI agents using your existing user base |
| `oauth-flows.mdx` | OAuth 2.1 Flows: Understanding the authorization code and refresh token flows with OpenID Connect |
| `token-security.mdx` | Token Security and Row Level Security: Secure your data with Row Level Security policies for OAuth clients |

### guides/auth/quickstarts/ (5 files)

| File | Description |
|------|-------------|
| `astrojs.mdx` | Use Supabase Auth with Astro: Learn how to configure Supabase Auth for Astro with server-side rendering. |
| `nextjs.mdx` | Use Supabase Auth with Next.js: Learn how to configure Supabase Auth for the Next.js App Router. |
| `react-native.mdx` | Use Supabase Auth with React Native: Learn how to use Supabase Auth with React Native |
| `react.mdx` | Use Supabase Auth with React: Learn how to use Supabase Auth with React.js. |
| `with-expo-react-native-social-sign-in.mdx` | Build a Social Sign-in App with Expo React Native: Learn how to implement social sign-in in an app with Expo React Native and Supabase Database and Auth functionality. |

### guides/auth/server-side/ (3 files)

| File | Description |
|------|-------------|
| `advanced-guide.mdx` | Advanced guide: Details about SSR Auth flows and implementation for advanced users. |
| `creating-a-client.mdx` | Creating a Supabase client for SSR: Configure your Supabase client to use cookies |
| `migrating-to-ssr-from-auth-helpers.mdx` | Migrating to the SSR package from Auth Helpers: Step-by-step guide to migrating your app to the new SSR package |

### guides/auth/sessions/ (2 files)

| File | Description |
|------|-------------|
| `implicit-flow.mdx` | Implicit flow: About authenticating with implicit flow. |
| `pkce-flow.mdx` | PKCE flow: About authenticating with PKCE flow. |

### guides/auth/social-sign-in/ (19 files)

| File | Description |
|------|-------------|
| `auth-apple.mdx` | Sign in with Apple: Use Sign in with Apple with Supabase |
| `auth-azure.mdx` | Sign in with Azure (Microsoft): Add Azure (Microsoft) OAuth to your Supabase project |
| `auth-bitbucket.mdx` | Sign in with Bitbucket: Add Bitbucket OAuth to your Supabase project |
| `auth-discord.mdx` | Sign in with Discord: Add Discord OAuth to your Supabase project |
| `auth-facebook.mdx` | Sign in with Facebook: Add Facebook OAuth to your Supabase project |
| `auth-figma.mdx` | Sign in with Figma: Add Figma OAuth to your Supabase project |
| `auth-github.mdx` | Sign in with GitHub: Add GitHub OAuth to your Supabase project |
| `auth-gitlab.mdx` | Sign in with GitLab: Add GitLab OAuth to your Supabase project |
| `auth-google.mdx` | Sign in with Google: Use Sign in with Google on the web, in native apps or with Chrome extensions |
| `auth-kakao.mdx` | Sign in with Kakao: Add Kakao OAuth to your Supabase project |
| `auth-keycloak.mdx` | Sign in with Keycloak: Add Keycloak OAuth to your Supabase project |
| `auth-linkedin.mdx` | Sign in with LinkedIn: Add LinkedIn OAuth to your Supabase project |
| `auth-notion.mdx` | Sign in with Notion: Add Notion OAuth to your Supabase project |
| `auth-slack.mdx` | Sign in with Slack: Add Slack OAuth to your Supabase project |
| `auth-spotify.mdx` | Sign in with Spotify: Add Spotify OAuth to your Supabase project |
| `auth-twitch.mdx` | Sign in with Twitch: Add Twitch OAuth to your Supabase project |
| `auth-twitter.mdx` | Sign in with X / Twitter: Add X / Twitter OAuth to your Supabase project |
| `auth-workos.mdx` | SSO and social sign-in with WorkOS |
| `auth-zoom.mdx` | Sign in with Zoom: Add Zoom OAuth to your Supabase project |

### guides/auth/third-party/ (7 files)

| File | Description |
|------|-------------|
| `auth0.mdx` | Auth0 third-party auth: Use Auth0 with your Supabase project |
| `aws-cognito.mdx` | Amazon Cognito (Amplify): Use Amazon Cognito via Amplify or standalone with your Supabase project |
| `clerk.mdx` | Clerk third-party auth: Use Clerk with your Supabase project |
| `custom-oidc.mdx` | Custom OIDC provider: Use any OIDC-compliant identity provider with your Supabase project |
| `firebase-auth.mdx` | Firebase Auth: Use Firebase Auth with your Supabase project |
| `overview.mdx` | Third-party auth: First-class support for authentication providers |
| `workos.mdx` | WorkOS: Use WorkOS with your Supabase project |

### guides/cron/ (2 files)

| File | Description |
|------|-------------|
| `install.mdx` | Install |
| `quickstart.mdx` | Cron quickstart |

### guides/database/ (33 files)

| File | Description |
|------|-------------|
| `arrays.mdx` | Working With Arrays: How to use arrays in Postgres and the Supabase API. |
| `beekeeper-studio.mdx` | Connecting with Beekeeper Studio |
| `connecting-to-postgres.mdx` | Connect to your database: Supabase provides several ways to connect to your Postgres database, whether your code runs in the frontend, in a persistent backend, or in a serverless function. |
| `connection-management.mdx` | Connection management: Using your connections resourcefully |
| `custom-postgres-config.mdx` | Customizing Postgres configs: Configuring Postgres for your Supabase project. |
| `dbeaver.mdx` | Connecting with DBeaver |
| `debugging-functions.mdx` | Debugging database functions: Logging and error handling inside Postgres functions. |
| `drizzle.mdx` | Drizzle: Drizzle Quickstart |
| `extensions.mdx` | Postgres Extensions Overview: Using Postgres extensions. |
| `full-text-search.mdx` | Full Text Search: How to use full text search in Postgres. |
| `functions.mdx` | Database functions: Creating and using Postgres functions. |
| `import-data.mdx` | Import data into Supabase |
| `joins-and-nesting.mdx` | Querying Joins and Nested tables: The Data APIs automatically detect relationships between Postgres tables. |
| `json.mdx` | Managing JSON and unstructured data: Using the JSON data type in Postgres. |
| `metabase.mdx` | Connecting to Metabase |
| `migrating-to-pg-partman.mdx` | Migrate from TimescaleDB to pg_partman: Convert TimescaleDB hypertables to Postgres native partitions managed by pg_partman. |
| `multigres.mdx` | Multigres: Horizontally scalable Postgres for high availability |
| `orioledb.mdx` | OrioleDB Overview: A storage extension for Postgres which uses Postgres's pluggable storage system |
| `overview.mdx` | Database: Use Supabase to connect, manage, and secure your Postgres database. |
| `partitions.mdx` | Partitioning tables: Organizing tables into partitions in Postgres. |
| `pgadmin.mdx` | Connecting with pgAdmin |
| `postgres-js.mdx` | Postgres.js: Postgres.js Quickstart |
| `prisma.mdx` | Prisma: Prisma Quickstart |
| `psql.mdx` | Connecting with PSQL |
| `query-optimization.mdx` | Query Optimization: Choosing indexes to improve your query performance. |
| `replication.mdx` | Database replication: An introduction to database replication and change data capture. |
| `secure-data.mdx` | Securing your data |
| `supavisor.mdx` | Supavisor: Troubleshooting Supavisor errors |
| `tables.mdx` | Tables and data: Creating and using Postgres tables. |
| `testing.mdx` | Testing Your Database: Test your database schema, tables, functions, and policies. |
| `vault.mdx` | Vault: Manage secrets in Postgres |
| `views.mdx` | Database views: Creating and using views in Postgres. |
| `webhooks.mdx` | Database Webhooks: Trigger external payloads on database events. |

### guides/database/connecting-to-postgres/ (2 files)

| File | Description |
|------|-------------|
| `pooling-and-limits.mdx` | Connection pooling and limits: How Supabase pools database connections, and the limits that apply to them. |
| `serverless-drivers.mdx` | Serverless drivers: Choose a driver for connecting to your Postgres database from a serverless environment. |

### guides/database/extensions/ (27 files)

| File | Description |
|------|-------------|
| `http.mdx` | http: RESTful Client: An HTTP Client for Postgres Functions. |
| `hypopg.mdx` | HypoPG: Hypothetical indexes: Quickly check if an index can be used without creating it. |
| `index_advisor.mdx` | index_advisor: query optimization: Automatically optimize SQL queries |
| `pg_cron.mdx` | pg_cron: Schedule Recurring Jobs with Cron Syntax in Postgres: pg_cron: schedule recurring Jobs with cron syntax in Postgres. |
| `pg_graphql.mdx` | pg_graphql: GraphQL for Postgres: A GraphQL Interface for Postgres |
| `pg_hashids.mdx` | pg_hashids: Short UIDs: Generate Short UIDs from Numbers |
| `pg_jsonschema.mdx` | pg_jsonschema: JSON Schema Validation: Validate json/jsonb with JSON Schema in Postgres. |
| `pg_net.mdx` | pg_net: Async Networking: pg_net: an async networking extension for Postgres. |
| `pg_partman.mdx` | pg_partman: partition management: Automated partition management |
| `pg_plan_filter.mdx` | pg_plan_filter: Restrict Total Cost: Block queries over a total cost limit |
| `pg_repack.mdx` | pg_repack: Physical storage optimization and maintenance: A tool to remove bloat from tables and indexes and optimize physical data order and physical storage |
| `pg_stat_statements.mdx` | pg_stat_statements: Query Performance Monitoring: Track planning and execution statistics of all SQL statements executed on the database. |
| `pgaudit.mdx` | PGAudit: Postgres Auditing: Session and object auditing via Postgres standard logging |
| `pgjwt.mdx` | pgjwt: JSON Web Tokens: Encode and decode JWTs in Postgres |
| `pgmq.mdx` | pgmq: Queues: pgmq: Managed queues in Postgres |
| `pgroonga.mdx` | PGroonga: Multilingual Full Text Search: Full Text Search for multiple languages in Postgres |
| `pgrouting.mdx` | pgrouting: Geospatial Routing: Extends PostGIS with Geospatial Routing |
| `pgsodium.mdx` | pgsodium (pending deprecation): Encryption Features: Encryption library for Postgres |
| `pgtap.mdx` | pgTAP: Unit Testing: Unit testing in Postgres. |
| `pgvector.mdx` | pgvector: Embeddings and vector similarity: pgvector: a Postgres extension for storing embeddings and performing vector similarity search. |
| `plpgsql_check.mdx` | plpgsql_check: PL/pgSQL Linter: Lint PL/pgSQL code |
| `plv8.mdx` | plv8: JavaScript Language: JavaScript language for Postgres. |
| `postgis.mdx` | PostGIS: Geo queries: Working with geo-spatial data in Postgres |
| `postgres_fdw.mdx` | postgres_fdw: Query Postgres server from another |
| `rum.mdx` | RUM: improved inverted index for full-text search based on GIN index: A GIN-like index with additional tree-organized data for each index entry |
| `timescaledb.mdx` | timescaledb: Time-Series data: Scalable time-series data storage and analysis |
| `uuid-ossp.mdx` | uuid-ossp: Unique Identifiers: A UUID generator for Postgres. |

### guides/database/extensions/wrappers/ (1 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Foreign Data Wrappers: Connecting to external systems using Postgres Foreign Data Wrappers. |

### guides/database/multigres/ (1 files)

| File | Description |
|------|-------------|
| `compatibility.mdx` | Multigres compatibility: Where Multigres-backed Postgres projects differ from standard Postgres. |

### guides/database/postgres/ (19 files)

| File | Description |
|------|-------------|
| `cascade-deletes.mdx` | Cascade Deletes: Understand the types of foreign key constraint deletes |
| `column-level-security.mdx` | Column Level Security: Secure your data using Postgres Column Level Security. |
| `configuration.mdx` | Database configuration: Updating the default configuration for your Postgres database. |
| `data-deletion.mdx` | Deleting data and dropping objects safely: Strategies for removing data and schema objects while minimising impact. |
| `dropping-all-tables-in-schema.mdx` | Drop all tables in a Postgres schema: Useful snippet for deleting all tables in a given schema |
| `enums.mdx` | Managing Enums in Postgres: Define a strict set of values that can be used in table and function definitions. |
| `event-triggers.mdx` | Event Triggers: Automatically execute SQL on database events. |
| `first-row-in-group.mdx` | Select first row for each group in Postgres: Postgres snippet for grabbing the first row in each distinct group by group |
| `indexes.mdx` | Managing Indexes in Postgres: Improve query performance using various index types in Postgres |
| `postgres-log-config.mdx` | Postgres log configurations: Configure database log settings to better suit your observability and compliance requirements |
| `roles-superuser.mdx` | Roles, superuser access and unsupported operations |
| `roles.mdx` | Postgres Roles: Managing access to your Postgres database and configuring permissions. |
| `row-level-security-performance.mdx` | Row Level Security performance: Measure and tune Postgres Row Level Security policies. |
| `row-level-security.mdx` | Row Level Security: Secure your data using Postgres Row Level Security. |
| `setup-replication-external.mdx` | Replicate to another Postgres database using Logical Replication: Example to setup logical replication using publish-subscribe to a Postgres database outside of Supabase |
| `testing-row-level-security.mdx` | Test Row Level Security policies with pgTAP: Catch policy mistakes before they reach production. |
| `timeouts.mdx` | Timeouts: Extend database timeouts to execute longer transactions |
| `triggers.mdx` | Postgres Triggers: Automatically execute SQL on table events. |
| `which-version-of-postgres.mdx` | Print Postgres version: Useful snippet for finding out which version of postgres you are running |

### guides/database/prisma/ (1 files)

| File | Description |
|------|-------------|
| `prisma-troubleshooting.mdx` | Troubleshooting prisma errors: Prisma error troubleshooting |

### guides/database/replication/ (6 files)

| File | Description |
|------|-------------|
| `manual-replication-faq.mdx` | Manual replication FAQ: Common questions and considerations when setting up manual replication. |
| `manual-replication-monitoring.mdx` | Manual replication monitoring: Track replication health and performance. |
| `manual-replication-setup.mdx` | Set up manual replication: Set up replication with Airbyte, Estuary, Fivetran, and other tools. |
| `pipelines-faq.mdx` | Pipelines FAQ: Common questions and answers about Supabase Pipelines. |
| `pipelines-monitoring.mdx` | Monitor pipeline status: Track replication status, view logs, and troubleshoot issues. |
| `pipelines.mdx` | Set up Pipelines: Configure publications, destinations, and Supabase Pipelines. |

### guides/database/replication/pipelines/ (4 files)

| File | Description |
|------|-------------|
| `bigquery.mdx` | BigQuery destination: Configure BigQuery as a Supabase Pipelines destination. |
| `clickhouse.mdx` | ClickHouse destination: Replicate Supabase Postgres changes to ClickHouse. |
| `ducklake.mdx` | DuckLake destination: Configure DuckLake as a Supabase Pipelines destination. |
| `snowflake.mdx` | Snowflake destination: Replicate Supabase Postgres changes to Snowflake. |

### guides/deployment/ (6 files)

| File | Description |
|------|-------------|
| `branching.mdx` | Branching: Use Supabase Branches to test and preview changes |
| `database-migrations.mdx` | Deploy database migrations: How to manage schema migrations for your Supabase project. |
| `going-into-prod.mdx` | Production Checklist: Things to do before making your app publicly available |
| `managing-environments.mdx` | Managing Environments: Manage multiple environments using Database Migrations and GitHub Actions. |
| `maturity-model.mdx` | Maturity Model: Growing with your application. |
| `shared-responsibility-model.mdx` | Shared Responsibility Model: Running databases is a shared responsibility between you and Supabase. |

### guides/deployment/branching/ (6 files)

| File | Description |
|------|-------------|
| `configuration.mdx` | Configuration: Configure your Supabase branches using configuration as code |
| `dashboard.mdx` | Branching via the dashboard: Create, manage, review, and merge branches directly in the dashboard |
| `github-integration.mdx` | GitHub integration: Connect with GitHub to sync branches with your repository |
| `integrations.mdx` | Branching integrations: Use Supabase branching with hosting providers and other tools |
| `troubleshooting.mdx` | Troubleshooting: Common issues and solutions for Supabase branching |
| `working-with-branches.mdx` | Working with branches: Learn how to develop and manage your Supabase branches |

### guides/deployment/terraform/ (1 files)

| File | Description |
|------|-------------|
| `reference.mdx` | Terraform Provider reference: Resources and data sources available through the Terraform Provider |

### guides/functions/ (36 files)

| File | Description |
|------|-------------|
| `ai-models.mdx` | Running AI Models: Run AI models in Edge Functions using the built-in Supabase AI API. |
| `architecture.mdx` | Edge Functions Architecture: Understanding the Architecture of Supabase Edge Functions |
| `auth-headers.mdx` | Authorization headers: How the Authorization and apikey headers and the verify_jwt platform check work |
| `auth-legacy-jwt.mdx` | Integrating With Supabase Auth: Integrate Supabase Auth with Edge Functions |
| `auth.mdx` | Securing Edge Functions: Authentication patterns for Edge Functions |
| `background-tasks.mdx` | Background Tasks: Run background tasks in an Edge Function outside of the request handler. |
| `compression.mdx` | Handling Compressed Requests: Handling Gzip compressed requests. |
| `connect-to-postgres.mdx` | Integrating with Supabase Database (Postgres): Connecting to Postgres from Edge Functions. |
| `cors.mdx` | CORS (Cross-Origin Resource Sharing) support for Invoking from the browser: Add CORS headers to invoke Edge Functions from the browser. |
| `dart-edge.mdx` | Dart Edge: Write your functions using Dart. |
| `debugging-tools.mdx` | Local Debugging: Debug your Edge Functions locally using Chrome DevTools for easy breakpoint debugging and code inspection. |
| `dependencies.mdx` | Managing dependencies: Handle dependencies within Edge Functions. |
| `deploy.mdx` | Deploy to Production: Deploy your Edge Functions to your remote Supabase Project. |
| `development-environment.mdx` | Development Environment: Set up your local development environment for Edge Functions. |
| `development-tips.mdx` | Development tips: Tips for getting started with Edge Functions. |
| `ephemeral-storage.mdx` | File Storage: Use persistent and ephemeral file storage |
| `error-codes.mdx` | Edge Functions error codes: Understand the error codes returned by Edge Functions to properly debug issues and handle responses. |
| `error-handling.mdx` | Error Handling: Implement proper error responses and client-side handling to create reliable applications. |
| `function-configuration.mdx` | Function Configuration: Configure individual function behavior. Customize authentication, dependencies, and other settings per function. |
| `http-methods.mdx` | Routing: Handle different request types in a single function to create efficient APIs. |
| `kysely-postgres.mdx` | Type-Safe SQL with Kysely: Combining Kysely with Deno Postgres gives you a convenient developer experience for interacting directly with your Postgres database. |
| `limits.mdx` | Edge Functions limits: Limits applied Edge Functions in Supabase's hosted platform. |
| `logging.mdx` | Edge Functions logging: Monitor your Edge Functions with logging to track execution, debug issues, and optimize performance. |
| `pricing.mdx` | Edge Functions pricing |
| `quickstart-dashboard.mdx` | Getting Started with Edge Functions (Dashboard): Learn how to create, test, and deploy your first Edge Function using the Supabase Dashboard. |
| `quickstart.mdx` | Getting Started with Edge Functions: Learn how to create, test, and deploy your first Edge Function using the Supabase CLI. |
| `recursive-functions.mdx` | Recursive / Nested Function Calls: Understanding rate limits when Edge Functions invoke each other |
| `regional-invocation.mdx` | Regional Invocations: Execute Edge Functions in specific regions for optimal performance. |
| `routing.mdx` | Handling Routing in Functions: Handle custom routing within Edge Functions. |
| `schedule-functions.mdx` | Scheduling Edge Functions: Schedule Edge Functions with pg_cron. |
| `secrets.mdx` | Environment variables: Store API keys and other secrets where your Edge Functions can read them. |
| `status-codes.mdx` | Status codes: Understand HTTP status codes returned by Edge Functions to properly debug issues and handle responses. |
| `storage-caching.mdx` | Integrating with Supabase Storage: Integrate Edge Functions with Supabase Storage. |
| `unit-test.mdx` | Testing your Edge Functions: Writing Unit Tests for Edge Functions using Deno Test |
| `wasm.mdx` | Using Wasm modules: Use WebAssembly in Edge Functions. |
| `websockets.mdx` | Handling WebSockets: Handle WebSocket connections in Edge Functions. |

### guides/functions/examples/ (21 files)

| File | Description |
|------|-------------|
| `amazon-bedrock-image-generator.mdx` | Generate Images with Amazon Bedrock: Generate images with Amazon Bedrock and store them in Supabase Storage. |
| `auth-send-email-hook-react-email-resend.mdx` | Custom Auth Emails with React Email and Resend: Use the send email hook to send custom auth emails with React Email and Resend in Supabase Edge Functions. |
| `cloudflare-turnstile.mdx` | CAPTCHA support with Cloudflare Turnstile: Protecting Forms with Cloudflare Turnstile. |
| `discord-bot.mdx` | Building a Discord Bot: Building a Slash Command Discord Bot with Edge Functions. |
| `elevenlabs-generate-speech-stream.mdx` | Streaming Speech with ElevenLabs: Generate and stream speech through Supabase Edge Functions. Store speech in Supabase Storage and cache responses via built-in CDN. |
| `elevenlabs-transcribe-speech.mdx` | Transcription Telegram Bot: Build a Telegram bot that transcribes audio and video messages in 99 languages using TypeScript with Deno in Supabase Edge Functions. |
| `github-actions.mdx` | GitHub Actions: Deploying Edge Functions with GitHub Actions. |
| `image-manipulation.mdx` | Image Manipulation: How to optimize and transform images using Edge Functions. |
| `mcp-server-mcp-lite.mdx` | Building an MCP Server with mcp-lite: Build and deploy a Model Context Protocol (MCP) server on Supabase Edge Functions using mcp-lite. |
| `og-image.mdx` | Generating OG Images: Generate Open Graph images with Deno and Supabase Edge Functions. |
| `push-notifications.mdx` | Sending Push Notifications: Send Push Notifications to your React Native iOS and Android apps using Expo. |
| `rate-limiting.mdx` | Rate Limiting Edge Functions: Rate Limiting Edge Functions with Upstash Redis. |
| `resumable-websockets.mdx` | Resumable WebSockets with Edge Functions: Build reconnect-safe WebSockets with event replay, idempotency keys, and graceful restarts. |
| `screenshots.mdx` | Taking Screenshots with Puppeteer: Take screenshots in Edge Functions with Puppeteer and Browserless.io. |
| `semantic-search.mdx` | Semantic Search: Semantic Search with pgvector and Supabase Edge Functions |
| `send-emails.mdx` | Sending Emails: Sending emails from Edge Functions using the Resend API. |
| `sentry-monitoring.mdx` | Monitoring with Sentry: Monitor Edge Functions with the Sentry Deno SDK. |
| `slack-bot-mention.mdx` | Slack Bot Mention Edge Function: Building a Slack Bot that Handles Mentions. |
| `stripe-webhooks.mdx` | Handling Stripe Webhooks: Handling signed Stripe Webhooks with Edge Functions. |
| `telegram-bot.mdx` | Building a Telegram Bot: Building a Telegram Bot with Edge Functions. |
| `upstash-redis.mdx` | Upstash Redis: Build an Edge Functions Counter with Upstash Redis. |

### guides/getting-started/ (5 files)

| File | Description |
|------|-------------|
| `api-keys.mdx` | API keys: First-layer protection for your project's data |
| `architecture.mdx` | Architecture: Supabase design and architecture |
| `features.mdx` | Features: Supabase features |
| `migrating-to-new-api-keys.mdx` | Migrating to publishable and secret API keys: Move from legacy JWT-based anon and service_role keys to publishable and secret keys. |
| `the-supabase-way-to-build.mdx` | The Supabase way to build: Which building block to reach for, and when. |

### guides/getting-started/quickstarts/ (21 files)

| File | Description |
|------|-------------|
| `_template.mdx` | _template.mdx |
| `astrojs.mdx` | Use Supabase with Astro: Learn how to create a Supabase project, add sample data, and query from an Astro app. |
| `expo-react-native.mdx` | Use Supabase with Expo React Native: Learn how to create a Supabase project, add some sample data to your database, and query the data from an Expo app. |
| `flask.mdx` | Use Supabase with Python: Learn how to create a Supabase project, add some sample data to your database, and query the data from a Python app. |
| `flutter.mdx` | Use Supabase with Flutter: Learn how to create a Supabase project, add some sample data to your database, and query the data from a Flutter app. |
| `hono.mdx` | Use Supabase with Hono: Learn how to create a Supabase project, add some sample data to your database, secure it with auth, and query the data from a Hono app. |
| `ios-swiftui.mdx` | Use Supabase with iOS and SwiftUI: Learn how to create a Supabase project, add some sample data to your database, and query the data from an iOS app. |
| `kotlin.mdx` | Use Supabase with Android Kotlin: Learn how to create a Supabase project, add some sample data to your database, and query the data from an Android Kotlin app. |
| `laravel.mdx` | Use Supabase with Laravel: Learn how to create a PHP Laravel project, connect it to your Supabase Postgres database, and configure user authentication. |
| `nextjs.mdx` | Use Supabase with Next.js: Learn how to create a Supabase project, add some sample data, and query from a Next.js app. |
| `nuxtjs.mdx` | Use Supabase with Nuxt: Learn how to create a Supabase project, add some sample data to your database, and query the data from a Nuxt app. |
| `reactjs.mdx` | Use Supabase with React: Learn how to create a Supabase project, add some sample data to your database, and query the data from a React app. |
| `redwoodjs.mdx` | Use Supabase with RedwoodJS: Learn how to create a Supabase project, add some sample data to your database using Prisma migration and seeds, and query the data from a RedwoodJS app. |
| `refine.mdx` | Use Supabase with Refine: Learn how to create a Supabase project, add some sample data to your database, and query the data from a Refine app. |
| `reflex.mdx` | Use Supabase with Reflex: Learn how to create a Supabase project, add some sample data to your database, and query the data from a Reflex app. |
| `ruby-on-rails.mdx` | Use Supabase with Ruby on Rails: Learn how to create a Rails project and connect it to your Supabase Postgres database. |
| `solidjs.mdx` | Use Supabase with SolidJS: Learn how to create a Supabase project, add some sample data to your database, and query the data from a SolidJS app. |
| `spring-boot.mdx` | Use Supabase with Spring Boot: Learn how to create a Spring Boot project and connect it to your Supabase project. |
| `sveltekit.mdx` | Use Supabase with SvelteKit: Learn how to create a Supabase project, add some sample data to your database, and query the data from a SvelteKit app. |
| `tanstack.mdx` | Use Supabase with TanStack Start: Learn how to create a Supabase project, add some sample data to your database, and query the data from a TanStack Start app. |
| `vue.mdx` | Use Supabase with Vue: Learn how to create a Supabase project, add some sample data to your database, and query the data from a Vue app. |

### guides/getting-started/tutorials/ (17 files)

| File | Description |
|------|-------------|
| `with-angular.mdx` | Build a User Management App with Angular: Learn how to use Supabase in your Angular App. |
| `with-expo-react-native.mdx` | Build a User Management App with Expo React Native: Learn how to use Supabase in your React Native App. |
| `with-flutter.mdx` | Build a User Management App with Flutter: Learn how to use Supabase in your Flutter App. |
| `with-ionic-angular.mdx` | Build a User Management App with Ionic Angular: Learn how to use Supabase in your Ionic Angular App. |
| `with-ionic-react.mdx` | Build a User Management App with Ionic React: Learn how to use Supabase in your Ionic React App. |
| `with-ionic-vue.mdx` | Build a User Management App with Ionic Vue: Learn how to use Supabase in your Ionic Vue App. |
| `with-kotlin.mdx` | Build a Product Management Android App with Jetpack Compose: Learn how to use Supabase in your Android Kotlin App. |
| `with-nextjs.mdx` | Build a User Management App with Next.js: Learn how to use Supabase in your Next.js App. |
| `with-nuxt-3.mdx` | Build a User Management App with Nuxt 3: Learn how to use Supabase in your Nuxt 3 App. |
| `with-react.mdx` | Build a User Management App with React: Learn how to use Supabase in your React App. |
| `with-redwoodjs.mdx` | Build a User Management App with RedwoodJS: Learn how to use Supabase in your RedwoodJS App. |
| `with-refine.mdx` | Build a User Management App with Refine: Learn how to use Supabase in your Refine App. |
| `with-solidjs.mdx` | Build a User Management App with SolidJS: Learn how to use Supabase in your SolidJS App. |
| `with-svelte.mdx` | Build a User Management App with Svelte: Learn how to use Supabase in your Svelte App. |
| `with-sveltekit.mdx` | Build a User Management App with SvelteKit: Learn how to use Supabase in your SvelteKit App. |
| `with-swift.mdx` | Build a User Management App with Swift and SwiftUI: Learn how to use Supabase in your SwiftUI App. |
| `with-vue-3.mdx` | Build a User Management App with Vue 3: Learn how to use Supabase in your Vue 3 App. |

### guides/integrations/ (7 files)

| File | Description |
|------|-------------|
| `build-a-supabase-oauth-integration.mdx` | Build a Supabase Integration: This guide steps through building a Supabase Integration using OAuth2 and the management API, allowing you to manage users' organizations and projects on their behalf. |
| `partner-catalog.mdx` | Partner Catalog: Integrations and Partners |
| `partner-integration-guide.mdx` | Supabase Partner Integration Guide: Integrate Supabase with your platform or product. |
| `stripe-projects.mdx` | Stripe Projects: Provision a Supabase project from the Stripe CLI |
| `supabase-for-platforms.mdx` | Supabase for Platforms: Use Supabase as a platform for your own business and tools. |
| `vercel-marketplace.mdx` | Vercel Marketplace: Manage your Supabase projects directly through Vercel |
| `vercel-preview-branches.mdx` | Preview branches on Vercel: Keep Vercel preview deployments off your production database. |

### guides/integrations/build-a-supabase-oauth-integration/ (1 files)

| File | Description |
|------|-------------|
| `oauth-scopes.mdx` | Scopes for your OAuth App: Scopes let you specify the level of access your integration needs |

### guides/local-development/ (11 files)

| File | Description |
|------|-------------|
| `cli-workflows.mdx` | Local development workflow: Set up and run your day-to-day local development workflow with the Supabase CLI. |
| `customizing-email-templates.mdx` | Customizing email templates: Customize local email templates via the config file. |
| `database-migrations.mdx` | Local database migrations: Track and version your database schema changes with migrations. |
| `declarative-database-schemas.mdx` | Declarative database schemas: Manage your database schemas in one place and generate versioned migrations. |
| `diff-engines.mdx` | Diff engines: pg-delta and migra: How the Supabase CLI generates migrations, which engine your project uses, and how to switch. |
| `docker-and-native-runtimes.mdx` | Docker and native runtimes: Run a local Supabase project in containers or as processes on your machine without Docker |
| `local-and-hosted-projects.mdx` | Running commands against local and hosted projects: How the Supabase CLI picks a target, resolves settings, and asks before it changes a hosted project. |
| `managing-config.mdx` | Managing config and secrets: Managing local configuration using config.toml. |
| `restoring-downloaded-backup.mdx` | Restoring a downloaded backup locally: Restore a backup of a remote database on a local instance to inspect and extract data |
| `running-multiple-local-projects.mdx` | Running multiple local projects: Run a local Supabase project for every app, git worktree, or environment on one machine |
| `seeding-your-database.mdx` | Seeding your database: Populate your database with initial data for reproducible environments across local and testing. |

### guides/local-development/cli/ (3 files)

| File | Description |
|------|-------------|
| `getting-started.mdx` | Supabase CLI: Develop locally, deploy to the Supabase Platform, and set up CI/CD workflows |
| `migrating-to-v3.mdx` | Migrating to Supabase CLI v3: Breaking changes between Supabase CLI v2 and v3, and what to change in your scripts, CI, and config. |
| `testing-and-linting.mdx` | Testing and linting: Using the CLI to test your Supabase project. |

### guides/local-development/testing/ (2 files)

| File | Description |
|------|-------------|
| `overview.mdx` | Testing Overview: Learn how to develop and test database schemas, tables, functions, and Row Level Security (RLS) policies. |
| `pgtap-extended.mdx` | Advanced pgTAP Testing: Learn how to leverage dbdev and test helpers for advanced database testing. |

### guides/observability/ (14 files)

| File | Description |
|------|-------------|
| `advanced-log-filtering.mdx` | Query logs with SQL: Query ClickHouse logs through MCP, the Management API, or Explorer |
| `advisors.mdx` | Advisors: Health, security, and performance checks you or an agent can run against a project. |
| `automate-with-agents.mdx` | Agent prompts: Give an agent a prompt to check your project and report issues to fix. |
| `client-side-tracing.mdx` | Client-side tracing: Propagate W3C trace context from the Supabase JS, Swift, and Dart SDKs through Supabase services |
| `configure-logging.mdx` | Configure logging: Record additional Postgres and Realtime events for an investigation |
| `detecting.mdx` | Detection checks: Repeatable health, security, performance, and capacity checks with explicit inputs and outcomes |
| `inspect.mdx` | Inspect the database: Read live Postgres statistics such as bloat, cache hit rate, locks, and slow queries from the CLI, Explorer, or MCP. |
| `log-drains.mdx` | Log Drains: Getting started with Supabase Log Drains |
| `log-field-reference.mdx` | Log sources and fields: Log sources, ClickHouse fields, and event capture limits |
| `log-slow-queries.mdx` | Log slow and failing queries: Log slow queries, their query plans, and the queries behind errors in your Postgres logs. |
| `logs.mdx` | Logs in Studio: Filter, inspect, and export project events in the Logs view |
| `metrics.mdx` | Metrics API: Export Supabase database metrics to any Prometheus-compatible tool |
| `reports.mdx` | Reports: Built-in observability for your Supabase project |
| `sentry-monitoring.mdx` | Sentry integration: Integrate Sentry to monitor errors from a Supabase client |

### guides/observability/automate-with-agents/ (4 files)

| File | Description |
|------|-------------|
| `health.mdx` | Health: A read-only agent that checks API and Auth errors and Postgres connection pressure once per hour. |
| `performance.mdx` | Performance: A read-only agent that inspects query performance, blocking sessions, and Performance Advisor findings once per hour. |
| `security.mdx` | Automate with agents: security: A read-only agent that reviews Security Advisor findings and authentication and authorization failures each day. |
| `usage.mdx` | Automate with agents: usage: A read-only agent that tracks resource and request growth and estimates when a confirmed limit could be reached. |

### guides/observability/metrics/ (3 files)

| File | Description |
|------|-------------|
| `grafana-cloud.mdx` | Metrics API with Grafana Cloud: Use Grafana Cloud’s managed Prometheus to visualize Supabase metrics |
| `grafana-self-hosted.mdx` | Metrics API with Prometheus & Grafana (self-hosted): Deploy Prometheus and Grafana yourself to monitor Supabase metrics |
| `vendor-agnostic.mdx` | Vendor-agnostic Metrics API setup: Connect Supabase metrics to any Prometheus-compatible platform |

### guides/platform/ (36 files)

| File | Description |
|------|-------------|
| `access-control.mdx` | Access Control: Roles and permissions at the organization and project levels |
| `aws-marketplace.mdx` | AWS Marketplace |
| `backups.mdx` | Database Backups: Learn about backups for your Supabase project. |
| `billing-faq.mdx` | Billing FAQ: This documentation covers frequently asked questions around subscription plans, payments, invoices and billing in general |
| `billing-on-supabase.mdx` | About billing on Supabase |
| `clone-project.mdx` | Restore to a new project: How to clone your existing Supabase project |
| `compute-and-disk.mdx` | Compute and Disk: Learn about your project's compute and disk sizing options. |
| `cost-control.mdx` | Control your costs |
| `credits.mdx` | Credits |
| `custom-domains.mdx` | Custom Domains: Use a custom domain instead of the default Supabase domain for your project. |
| `database-size.mdx` | Understanding Database and Disk Size: Understanding how database size applies to your subscription. |
| `delete-project.mdx` | Deleting Your Project: Understanding the permanent consequences and how to protect yourself |
| `free-project-pausing.mdx` | Project Pausing: Free project pausing behavior. |
| `get-set-up-for-billing.mdx` | Get set up for billing |
| `hipaa-projects.mdx` | HIPAA Projects: Projects that store or process Protected Health Information (PHI) and other sensitive data |
| `ipv4-address.mdx` | Dedicated IPv4 Address for Ingress: Attach an IPv4 address to your database |
| `manage-your-subscription.mdx` | Manage your subscription |
| `manage-your-usage.mdx` | Manage your usage |
| `migrating-within-supabase.mdx` | Migrating within Supabase: Learn how to migrate from one Supabase project to another |
| `multi-factor-authentication.mdx` | Multi-factor Authentication: Enable multi-factor authentication (MFA) to keep your account secure. |
| `network-restrictions.mdx` | Network Restrictions: Apply network restrictions for your project's database. |
| `performance.mdx` | Performance Tuning: Getting the best results out of your Supabase project |
| `permissions.mdx` | Permissions: Permissions requirements for the Supabase Cloud hosting environment |
| `personal-access-tokens.mdx` | Personal Access Tokens: Scope personal access tokens to specific organizations, projects, and permissions |
| `postgres-connection-logging.mdx` | Postgres connection logging: Enable or disable Postgres connection logging for audit and compliance. |
| `privatelink.mdx` | PrivateLink: Secure private network connectivity to your Supabase database using AWS VPC Lattice. |
| `project-transfer.mdx` | Project Transfers: Transfer a project to another organization. |
| `read-replicas.mdx` | Read Replicas: Deploy read-only databases across multiple regions, for lower latency and better resource management. |
| `regions.mdx` | Available regions |
| `ssl-enforcement.mdx` | Postgres SSL Enforcement: Enforce SSL usage for all Postgres connections |
| `sso.mdx` | Enable SSO for Your Organization: General information about enabling single sign-on (SSO) for your organization |
| `team-database-access.mdx` | Map team members to Postgres roles: Give team members database access through their own access tokens instead of a shared password. |
| `temporary-access.mdx` | Temporary access: Enable temporary access for short-lived database connections tied to a Supabase user. |
| `upgrading.mdx` | Upgrading |
| `webhooks.mdx` | Platform Webhooks: Receive HTTP notifications when events occur in your Supabase organization or project. |
| `your-monthly-invoice.mdx` | Your monthly invoice |

### guides/platform/mfa/ (1 files)

| File | Description |
|------|-------------|
| `org-mfa-enforcement.mdx` | Enforce MFA on Organization: All users in an organization must have a valid MFA session to interact with organization resources |

### guides/platform/migrating-within-supabase/ (2 files)

| File | Description |
|------|-------------|
| `backup-restore.mdx` | Backup and Restore using the CLI: Learn how to backup and restore projects using the Supabase CLI |
| `dashboard-restore.mdx` | Restore Dashboard backup: Learn how to restore your dashboard backup to a new Supabase project |

### guides/platform/read-replicas/ (1 files)

| File | Description |
|------|-------------|
| `getting-started.mdx` | Getting started with Read Replicas: Deploy read-only databases across multiple regions, for lower latency and better resource management. |

### guides/platform/sso/ (8 files)

| File | Description |
|------|-------------|
| `azure.mdx` | Set Up SSO with Azure AD: Configure single sign-on with Azure AD (Microsoft Entra). |
| `choosing-login-flow.mdx` | Choosing the Right SSO Sign-in Flow: Quick reference guide to help you choose between IdP-initiated, SP-initiated, or both sign-in flows based on your use case. |
| `enterprise-mcp-authorization.mdx` | Enterprise-Managed Authorization for MCP: Authorize your organization's use of the Supabase MCP Server through your identity provider, or Claude on its behalf, without per-user OAuth prompts. |
| `gsuite.mdx` | Set Up SSO with Google Workspace: Configure single sign-on with Google Workspace (G Suite). |
| `login-flows.mdx` | Understanding SSO Sign-in Flows: Learn about IdP-initiated and SP-initiated SSO sign-in flows and when to use each approach. |
| `multiple-providers.mdx` | Multiple SSO Providers: Configure multiple SSO providers for different environments, teams, or use cases |
| `okta.mdx` | Set Up SSO with Okta: Configure single sign-on with Okta. |
| `testing-best-practices.mdx` | SSO Testing and Best Practices: Comprehensive guide to testing SSO configuration and best practices for secure, reliable single sign-on. |

### guides/platform/webhooks/ (1 files)

| File | Description |
|------|-------------|
| `events.mdx` | Platform Webhook Events: Event types and payload schemas for Platform Webhooks. |

### guides/queues/ (5 files)

| File | Description |
|------|-------------|
| `api.mdx` | Queues API |
| `consuming-messages-with-edge-functions.mdx` | Consuming Supabase Queue Messages with Edge Functions: Learn how to consume Supabase Queue messages server-side with a Supabase Edge Function |
| `expose-self-hosted-queues.mdx` | Expose Queues for local and self-hosted Supabase: Learn how to expose Queues when running Supabase with Supabase CLI or Docker Compose |
| `pgmq.mdx` | PGMQ Extension |
| `quickstart.mdx` | Quickstart: Learn how to use Supabase Queues to add and read messages |

### guides/realtime/ (18 files)

| File | Description |
|------|-------------|
| `architecture.mdx` | Realtime Architecture: Architecture of the Supabase Realtime service |
| `authorization.mdx` | Realtime Authorization: Authorization for Supabase Realtime |
| `benchmarks.mdx` | Benchmarks: Scalability Benchmarks for Supabase Realtime. |
| `broadcast.mdx` | Broadcast: Send low-latency messages using the client libs, REST, or your Database. |
| `concepts.mdx` | Realtime Concepts: Useful concepts to understand Realtime and how it works |
| `error_codes.mdx` | Operational Error Codes: List of operational codes to help understand your deployment and usage. |
| `getting_started.mdx` | Getting Started with Realtime: Learn how to build real-time applications with Supabase Realtime |
| `limits.mdx` | Realtime Limits: Understanding Realtime limits |
| `postgres-changes.mdx` | Postgres Changes: Listen to Postgres changes using Supabase Realtime. |
| `presence.mdx` | Presence: Share state between users with Realtime Presence. |
| `pricing.mdx` | Realtime Pricing |
| `protocol.mdx` | Realtime Protocol: Understanding Realtime Protocol |
| `realtime-listening-flutter.mdx` | Listening to Postgres Changes with Flutter: Listening to real-time changes on the database with Flutter |
| `realtime-user-presence.mdx` | Using Realtime Presence with Flutter: Track online users with Supabase Realtime Presence |
| `realtime-with-nextjs.mdx` | Using Realtime with Next.js: Client & Server Components in Next.js with Realtime Updates |
| `reports.mdx` | Realtime Reports: Reports to help debug Realtime issues |
| `settings.mdx` | Settings: Realtime Settings that allow you to configure your Realtime usage. |
| `subscribing-to-database-changes.mdx` | Subscribing to Database Changes: Listen to database changes in real-time from your website or application. |

### guides/resources/ (1 files)

| File | Description |
|------|-------------|
| `glossary.mdx` | Glossary: Definitions for terminology and acronyms used in the Supabase documentation. |

### guides/security/ (11 files)

| File | Description |
|------|-------------|
| `gdpr-compliance.mdx` | GDPR compliance and Supabase: How Supabase supports GDPR-compliant deployments, including data residency and the Data Processing Agreement (DPA). |
| `hipaa-compliance.mdx` | HIPAA Compliance and Supabase: Supabase provides a HIPAA compliant environment and helps you meet your compliance controls. |
| `npm-security.mdx` | Securing npm installs: Consumer-side guide to hardening your npm installs of Supabase packages against supply-chain attacks. |
| `platform-audit-logs.mdx` | Platform Audit Logs: Monitor and track organization member activities via platform API or dashboard. |
| `platform-security.mdx` | Secure configuration of Supabase platform: Supabase provides a secure yet flexible platform. Here is how to adjust various security settings across the platform. |
| `product-security.mdx` | Secure configuration of Supabase products: Supabase provides a secure yet flexible set of products. Here is how to adjust various security settings across the various products. |
| `production-checklist.mdx` | Production security checklist: Secure your database, your Supabase account, and Auth before you launch. |
| `rotate-leaked-api-keys.mdx` | Rotate a leaked or compromised API key: Stop a leaked API key from granting access to your project without breaking the components that use it. |
| `security-testing.mdx` | Security testing of your Supabase projects: Supabase provides a secure yet flexible platform. You may wish to validate the security of your own project implementation, we ask that you follow these guidelines. |
| `soc-2-compliance.mdx` | SOC 2 Compliance and Supabase: Supabase is SOC 2 compliant and helps you meet your compliance controls. |
| `tls.mdx` | TLS for project APIs: TLS versions and cipher suites supported by Supabase project APIs, and the removal of CBC-mode ciphers. |

### guides/self-hosting/ (21 files)

| File | Description |
|------|-------------|
| `accessing-postgres.mdx` | Accessing Postgres: Connect to your self-hosted Postgres database through the Supavisor or PgBouncer pooler, or with a direct connection. |
| `copy-from-platform-s3.mdx` | Copy Storage Objects from Platform: Copy storage objects from a managed Supabase project to a self-hosted instance using rclone. |
| `custom-email-templates.mdx` | Custom Email Templates: Configure custom email templates with self-hosted Supabase instance. |
| `custom-postgres-extensions.mdx` | Custom Postgres Extensions: Build a custom Docker image with additional Postgres extensions. |
| `docker.mdx` | Self-Hosting with Docker: Learn how to configure and deploy Supabase with Docker. |
| `enable-mcp.mdx` | Enabling MCP Server Access: Configure secure access to the MCP server in your self-hosted Supabase instance. |
| `postgres-upgrade-17.mdx` | Upgrade to Postgres 17: Start a new self-hosted Supabase deployment with Postgres 17, or upgrade an existing Postgres 15 installation. |
| `remove-superuser-access.mdx` | Remove Superuser Access from Studio: Learn how to switch from the supabase_admin to postgres role in self-hosted Supabase. |
| `restore-from-platform.mdx` | Restore a Platform Project to Self-Hosted: Restore your database from the Supabase platform to a self-hosted instance. |
| `self-hosted-auth-hooks.mdx` | Configure Auth Hooks: Set up auth hooks for self-hosted Supabase with Docker. |
| `self-hosted-auth-keys.mdx` | New API Keys and Asymmetric Authentication: Configure new API keys and ES256 asymmetric authentication for self-hosted Supabase. |
| `self-hosted-custom-oauth-providers.mdx` | Configure Custom OAuth/OIDC Providers: Set up any OAuth 2.0 or OIDC-compatible identity provider for self-hosted Supabase. |
| `self-hosted-envoy.mdx` | Envoy API Gateway: Architecture and configuration of the Envoy API gateway for self-hosted Supabase. |
| `self-hosted-functions.mdx` | Self-Hosted Functions: Run and manage Edge Functions in your self-hosted Supabase instance. |
| `self-hosted-oauth.mdx` | Configure Social Sign-in (OAuth) Providers: Set up social sign-in (OAuth/OIDC) providers for self-hosted Supabase with Docker. |
| `self-hosted-passkeys.mdx` | Configure Passkey Authentication: Set up passkey authentication for self-hosted Supabase. |
| `self-hosted-phone-mfa.mdx` | Configure Phone Sign-in & MFA: Set up phone sign-in SMS providers, OTP settings, and multi-factor authentication for self-hosted Supabase with Docker. |
| `self-hosted-proxy-https.mdx` | Configure Reverse Proxy and HTTPS: Set up a reverse proxy with HTTPS for self-hosted Supabase. |
| `self-hosted-s3.mdx` | Configure S3 Storage: Enable S3-compatible client endpoint and set up an S3 backend for self-hosted Supabase Storage. |
| `self-hosted-saml-sso.mdx` | Configure SAML SSO: Set up SAML 2.0 Single Sign-On for self-hosted Supabase with Docker. |
| `updating.mdx` | Update Your Self-Hosted Deployment: Update an existing self-hosted Supabase deployment to a newer release. |

### guides/storage/ (2 files)

| File | Description |
|------|-------------|
| `pricing.mdx` | Storage pricing |
| `quickstart.mdx` | Storage Quickstart: Learn how to use Supabase to store and serve files. |

### guides/storage/analytics/ (6 files)

| File | Description |
|------|-------------|
| `connecting-to-analytics-bucket.mdx` | Iceberg Catalog |
| `creating-analytics-buckets.mdx` | Creating Analytics Buckets: Set up your first analytics bucket using the SDK or dashboard. |
| `introduction.mdx` | Analytics Buckets: Store large datasets for analytics and reporting. |
| `limits.mdx` | Analytics Buckets Limits |
| `pricing.mdx` | Analytics Buckets Pricing |
| `query-with-postgres.mdx` | Query with Postgres: Query analytics bucket data directly from Postgres using SQL. |

### guides/storage/analytics/examples/ (3 files)

| File | Description |
|------|-------------|
| `apache-spark.mdx` | Apache Spark |
| `duckdb.mdx` | Analytics buckets with DuckDB |
| `pyiceberg.mdx` | PyIceberg |

### guides/storage/buckets/ (2 files)

| File | Description |
|------|-------------|
| `creating-buckets.mdx` | Creating Buckets: Learn how to create Supabase Storage buckets. |
| `fundamentals.mdx` | Storage Buckets: Learn how Supabase Storage Buckets works. |

### guides/storage/cdn/ (4 files)

| File | Description |
|------|-------------|
| `fundamentals.mdx` | Storage CDN: Learn how Supabase Storage caches objects with a CDN. |
| `metrics.mdx` | Cache Metrics: Learn how Supabase Storage caches objects with a CDN. |
| `purge-cdn-cache.mdx` | Purge CDN Cache: Learn how to manually purge Supabase Storage CDN cache. |
| `smart-cdn.mdx` | Smart CDN: Learn how Supabase Storage caches objects with a CDN. |

### guides/storage/debugging/ (2 files)

| File | Description |
|------|-------------|
| `error-codes.mdx` | Storage error codes: Learn about the Storage error codes and how to resolve them |
| `logs.mdx` | Logs: Learn how to check Storage Logs |

### guides/storage/management/ (3 files)

| File | Description |
|------|-------------|
| `copy-move-objects.mdx` | Copy Objects: Learn how to copy and move objects |
| `delete-objects.mdx` | Delete Objects: Learn about deleting objects |
| `download-objects.mdx` | Download Objects: Learn about downloading objects |

### guides/storage/production/ (1 files)

| File | Description |
|------|-------------|
| `scaling.mdx` | Storage Optimizations: Scaling Storage |

### guides/storage/s3/ (2 files)

| File | Description |
|------|-------------|
| `authentication.mdx` | S3 Authentication: Learn about authenticating with Supabase Storage S3. |
| `compatibility.mdx` | S3 Compatibility: Learn about the compatibility of Supabase Storage with S3. |

### guides/storage/schema/ (3 files)

| File | Description |
|------|-------------|
| `custom-roles.mdx` | Custom Roles: Learn about using custom roles with storage schema |
| `design.mdx` | The Storage Schema: Learn about the storage schema |
| `helper-functions.mdx` | Storage Helper Functions: Learn the storage schema |

### guides/storage/security/ (3 files)

| File | Description |
|------|-------------|
| `access-control.mdx` | Storage Access Control: Learn how to restrict Supabase file uploads. |
| `ownership.mdx` | Ownership: Learn how ownership works in Supabase Storage and how to control access |
| `signing-keys.mdx` | URL signing keys: Learn how Supabase Storage signs URLs and how to rotate your signing keys. |

### guides/storage/serving/ (3 files)

| File | Description |
|------|-------------|
| `bandwidth.mdx` | Bandwidth & Storage Egress |
| `downloads.mdx` | Serving assets from Storage |
| `image-transformations.mdx` | Storage Image Transformations: Transform images with Storage |

### guides/storage/uploads/ (4 files)

| File | Description |
|------|-------------|
| `file-limits.mdx` | Storage upload limits: Learn how to increase Supabase file limits. |
| `resumable-uploads.mdx` | Resumable Uploads: Learn how to upload files to Supabase Storage. |
| `s3-uploads.mdx` | S3 Uploads: Learn how to upload files to Supabase Storage using S3. |
| `standard-uploads.mdx` | Standard Uploads: Learn how to upload files to Supabase Storage. |

### guides/storage/vector/ (7 files)

| File | Description |
|------|-------------|
| `creating-vector-buckets.mdx` | Creating Vector Buckets: Set up vector buckets and indexes using the dashboard or JavaScript SDK. |
| `introduction.mdx` | Vector Buckets: Store, index, and query vector embeddings at scale with similarity search. |
| `limits.mdx` | Vector Bucket Limits: Understanding capacity, limits, and billing for vector buckets. |
| `local-development.mdx` | Vector Bucket Local Development: Develop and test vector bucket integrations in your local environment with the Supabase CLI. |
| `querying-vectors.mdx` | Querying Vectors: Perform similarity search and retrieve vectors using JavaScript SDK or Postgres. |
| `storing-vectors.mdx` | Storing Vectors: Insert and update vector embeddings with metadata using the JavaScript SDK or Postgres. |
| `working-with-indexes.mdx` | Working with Vector Indexes: Create, manage, and optimize vector indexes for efficient similarity search. |
