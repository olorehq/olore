# Cloudflare Documentation Table of Contents

## Directory Map

```
contents/
├── workers/                    # Cloudflare Workers (392 files)
│   ├── runtime-apis/           # Runtime APIs: fetch, cache, bindings, streams (85 files)
│   ├── examples/               # Code examples (49 files)
│   ├── testing/                # Vitest, unit tests (35 files)
│   ├── framework-guides/       # Next.js, Remix, Astro, Nuxt (26 files)
│   ├── configuration/          # Routes, wrangler.toml, integrations (25 files)
│   ├── observability/          # Logs, traces, OpenTelemetry (24 files)
│   ├── tutorials/              # Step-by-step tutorials (19 files)
│   ├── ci-cd/                  # Deployment pipelines (19 files)
│   ├── wrangler/               # Wrangler CLI (20 files)
│   ├── languages/              # JS, TS, Python, Rust (15 files)
│   ├── platform/               # Compatibility dates, limits (12 files)
│   ├── databases/              # DB integrations (11 files)
│   ├── static-assets/          # Static assets, routing (17 files)
│   ├── vite-plugin/            # Vite plugin (12 files)
│   ├── get-started/            # Quickstart (4 files)
│   └── best-practices/         # Best practices (1 file)
├── agents/                     # Cloudflare Agents SDK (68 files)
│   ├── api-reference/          # Agent API reference (25 files)
│   ├── guides/                 # How-to guides (12 files)
│   ├── getting-started/        # Setup and quickstart (6 files)
│   ├── model-context-protocol/ # MCP integration (7 files)
│   ├── concepts/               # Core concepts (7 files)
│   └── x402/                  # x402 payment protocol (5 files)
├── ai-gateway/                 # AI Gateway (81 files)
│   ├── usage/                  # Provider integrations (30 files)
│   ├── features/               # Caching, logging, rate limiting (13 files)
│   ├── configuration/          # Setup and config (7 files)
│   ├── evaluations/            # LLM evaluations (5 files)
│   ├── observability/          # Analytics and logs (6 files)
│   ├── integrations/           # Third-party integrations (5 files)
│   └── tutorials/              # Tutorials (4 files)
├── cloudflare-one/             # Cloudflare Zero Trust (611 files)
│   └── ...                     # Access, Gateway, WARP, tunnels
├── realtime/                   # Cloudflare Realtime / Calls (527 files)
│   └── ...                     # WebRTC, audio/video, WHIP/WHEP
├── rules/                      # Cloudflare Rules (184 files)
│   └── ...                     # Page rules, transform rules, redirect rules
├── ddos-protection/            # DDoS Protection (149 files)
├── waf/                        # Web Application Firewall (147 files)
├── ssl/                        # SSL/TLS (125 files)
├── dns/                        # DNS management (122 files)
├── pages/                      # Cloudflare Pages (117 files)
├── fundamentals/               # Platform fundamentals (117 files)
├── logs/                       # Logpush, log management (94 files)
├── cloudflare-wan/             # Cloudflare WAN (94 files)
├── cloudflare-for-platforms/   # For platforms / SaaS (89 files)
├── analytics/                  # Analytics and metrics (89 files)
├── r2/                         # R2 Object Storage (87 files)
│   ├── examples/               # Code examples (20 files)
│   ├── data-catalog/           # Data catalog (12 files)
│   ├── buckets/                # Bucket management (8 files)
│   ├── api/                    # API reference (8 files)
│   ├── platform/               # Platform info (8 files)
│   ├── reference/              # Reference docs (8 files)
│   ├── tutorials/              # Tutorials (6 files)
│   ├── data-migration/         # Migration (4 files)
│   ├── get-started/            # Quickstart (4 files)
│   └── objects/                # Object management (3 files)
├── email-security/             # Email Security (77 files)
├── cache/                      # Caching (68 files)
├── stream/                     # Cloudflare Stream (63 files)
├── workers-ai/                 # Workers AI inference (59 files)
│   ├── features/               # AI features (23 files)
│   ├── guides/                 # Usage guides (15 files)
│   ├── platform/               # Platform info (8 files)
│   ├── configuration/          # Config (4 files)
│   └── get-started/            # Quickstart (3 files)
├── load-balancing/             # Load Balancing (59 files)
├── sandbox/                    # Sandbox SDK (54 files)
├── images/                     # Cloudflare Images (54 files)
├── hyperdrive/                 # Hyperdrive (54 files)
├── durable-objects/            # Durable Objects (53 files)
│   ├── api/                    # DO API reference (11 files)
│   ├── examples/               # Examples (12 files)
│   ├── reference/              # Reference (8 files)
│   ├── best-practices/         # Best practices (5 files)
│   ├── platform/               # Platform info (4 files)
│   ├── observability/          # Observability (3 files)
│   ├── tutorials/              # Tutorials (2 files)
│   └── concepts/               # Concepts (2 files)
├── d1/                         # D1 SQLite Database (52 files)
│   ├── reference/              # SQL reference (8 files)
│   ├── best-practices/         # Best practices (8 files)
│   ├── platform/               # Limits, pricing (5 files)
│   ├── observability/          # Monitoring (4 files)
│   ├── examples/               # Examples (6 files)
│   ├── worker-api/             # Worker binding API (4 files)
│   ├── sql-api/                # SQL API (3 files)
│   ├── tutorials/              # Tutorials (7 files)
│   └── configuration/          # Config (2 files)
├── turnstile/                  # Turnstile CAPTCHA (46 files)
├── zaraz/                      # Zaraz (45 files)
├── bots/                       # Bot Management (43 files)
├── ruleset-engine/             # Ruleset Engine (42 files)
├── magic-transit/              # Magic Transit (41 files)
├── speed/                      # Performance/Speed (40 files)
├── queues/                     # Cloudflare Queues (38 files)
│   ├── configuration/          # Queue config (9 files)
│   ├── examples/               # Examples (8 files)
│   ├── platform/               # Platform info (5 files)
│   ├── reference/              # Reference (4 files)
│   ├── event-subscriptions/    # Event subscriptions (3 files)
│   └── tutorials/              # Tutorials (3 files)
├── api-shield/                 # API Shield (37 files)
├── browser-rendering/          # Browser Rendering (36 files)
├── 1.1.1.1/                    # 1.1.1.1 DNS resolver (36 files)
├── ai-search/                  # AI Search (32 files)
├── workflows/                  # Workflows (31 files)
├── tunnel/                     # Cloudflare Tunnel (30 files)
├── web3/                       # Web3 gateway (29 files)
├── pipelines/                  # Pipelines (29 files)
├── kv/                         # KV Store (29 files)
│   ├── examples/               # Examples (6 files)
│   ├── platform/               # Platform info (5 files)
│   ├── api/                    # KV API (4 files)
│   ├── reference/              # Reference (4 files)
│   ├── concepts/               # Concepts (3 files)
│   └── tutorials/              # Tutorials (1 file)
├── cloudflare-network-firewall/ # Network Firewall (29 files)
├── waiting-room/               # Waiting Room (27 files)
├── terraform/                  # Terraform provider (27 files)
├── firewall/                   # Firewall (legacy) (27 files)
├── ai-crawl-control/           # AI Crawl Control (27 files)
├── containers/                 # Containers (26 files)
├── page-shield/                # Page Shield (25 files)
├── email-routing/              # Email Routing (25 files)
├── radar/                      # Cloudflare Radar (24 files)
├── data-localization/          # Data Localization (24 files)
├── vectorize/                  # Vectorize vector DB (23 files)
│   ├── reference/              # Reference (5 files)
│   ├── platform/               # Platform info (5 files)
│   ├── best-practices/         # Best practices (4 files)
│   ├── examples/               # Examples (3 files)
│   ├── get-started/            # Quickstart (2 files)
│   └── tutorials/              # Tutorials (1 file)
├── security-center/            # Security Center (23 files)
├── smart-shield/               # Smart Shield (21 files)
├── network-flow/               # Network Flow (21 files)
├── byoip/                      # BYOIP (20 files)
├── registrar/                  # Registrar (19 files)
├── spectrum/                   # Spectrum (17 files)
├── cloudflare-challenges/      # Challenges (17 files)
├── web-analytics/              # Web Analytics (16 files)
├── billing/                    # Billing (16 files)
├── automatic-platform-optimization/ # APO (15 files)
├── workers-vpc/                # Workers VPC (13 files)
├── warp-client/                # WARP Client (12 files)
├── r2-sql/                     # R2 SQL (12 files)
├── version-management/         # Version management (11 files)
├── notifications/              # Notifications (11 files)
├── time-services/              # Time services (9 files)
├── tenant/                     # Tenant management (9 files)
├── randomness-beacon/          # Randomness Beacon (9 files)
├── privacy-proxy/              # Privacy Proxy (9 files)
├── network/                    # Network (9 files)
├── china-network/              # China Network (9 files)
├── log-explorer/               # Log Explorer (8 files)
├── secrets-store/              # Secrets Store (7 files)
├── pulumi/                     # Pulumi provider (7 files)
├── health-checks/              # Health Checks (7 files)
├── security/                   # Security overview (6 files)
├── privacy-gateway/            # Privacy Gateway (6 files)
├── multi-cloud-networking/     # Multi-cloud networking (6 files)
├── network-interconnect/       # Network Interconnect (5 files)
├── key-transparency/           # Key Transparency (5 files)
├── dmarc-management/           # DMARC Management (5 files)
├── network-error-logging/      # Network Error Logging (4 files)
├── client-ip-geolocation/      # Client IP Geolocation (4 files)
├── argo-smart-routing/         # Argo Smart Routing (4 files)
├── moq/                        # MoQ (2 files)
├── constellation/              # Constellation (deprecated, 2 files)
└── migration-guides/           # Migration guides (1 file)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Workers quickstart | `contents/workers/get-started/` |
| Workers runtime APIs | `contents/workers/runtime-apis/` |
| Workers wrangler CLI | `contents/workers/wrangler/` |
| KV storage | `contents/kv/` |
| D1 database | `contents/d1/` |
| Durable Objects | `contents/durable-objects/` |
| R2 object storage | `contents/r2/` |
| Queues | `contents/queues/` |
| AI Gateway | `contents/ai-gateway/` |
| Workers AI | `contents/workers-ai/` |
| Agents SDK | `contents/agents/` |
| Vectorize | `contents/vectorize/` |
| Pages deployment | `contents/pages/` |
| DNS management | `contents/dns/` |
| SSL/TLS | `contents/ssl/` |
| WAF | `contents/waf/` |
| Zero Trust | `contents/cloudflare-one/` |
| Cloudflare Tunnel | `contents/tunnel/` |
| Turnstile | `contents/turnstile/` |

## Detailed Structure

### workers/runtime-apis/ (85 files)

| Path | Description |
|------|-------------|
| `workers/runtime-apis/bindings/` | Service bindings, env bindings |
| `workers/runtime-apis/handlers/` | fetch, scheduled, queue handlers |
| `workers/runtime-apis/streams/` | ReadableStream, WritableStream |
| `workers/runtime-apis/rpc/` | RPC between workers |
| `workers/runtime-apis/nodejs/` | Node.js compat APIs |
| `workers/runtime-apis/webassembly/` | WASM |

### workers/wrangler/ (20 files)

| Path | Description |
|------|-------------|
| `workers/wrangler/` | Wrangler CLI commands and config |
| `workers/wrangler/migration/` | Migration guides |

### d1/ (52 files)

| Path | Description |
|------|-------------|
| `d1/worker-api/` | D1Database, prepare, batch, exec |
| `d1/sql-api/` | SQL API reference |
| `d1/reference/` | SQL compatibility, limits |
| `d1/best-practices/` | Query optimization, indexes |
| `d1/tutorials/` | Northwind example, REST API |

### durable-objects/ (53 files)

| Path | Description |
|------|-------------|
| `durable-objects/api/` | DurableObject class, storage API, alarms |
| `durable-objects/examples/` | Code examples |
| `durable-objects/best-practices/` | Design patterns |
| `durable-objects/reference/` | Limits, pricing |

### r2/ (87 files)

| Path | Description |
|------|-------------|
| `r2/api/` | S3-compatible API, Workers binding |
| `r2/buckets/` | Bucket configuration |
| `r2/objects/` | Object operations |
| `r2/data-catalog/` | Data catalog features |
| `r2/examples/` | Code examples |

### kv/ (29 files)

| Path | Description |
|------|-------------|
| `kv/api/` | get, put, delete, list operations |
| `kv/concepts/` | How KV works, consistency |
| `kv/reference/` | Limits, pricing |

### queues/ (38 files)

| Path | Description |
|------|-------------|
| `queues/configuration/` | Queue setup, consumer config |
| `queues/reference/` | Message format, limits |
| `queues/event-subscriptions/` | Event subscriptions |

### ai-gateway/ (81 files)

| Path | Description |
|------|-------------|
| `ai-gateway/usage/` | OpenAI, Anthropic, Bedrock integrations |
| `ai-gateway/features/` | Caching, logging, rate limiting |
| `ai-gateway/evaluations/` | LLM evaluations |
| `ai-gateway/observability/` | Logs and analytics |

### agents/ (68 files)

| Path | Description |
|------|-------------|
| `agents/api-reference/` | Agent class, state, storage APIs |
| `agents/getting-started/` | Setup, quickstart |
| `agents/guides/` | How-to guides |
| `agents/model-context-protocol/` | MCP integration |

### vectorize/ (23 files)

| Path | Description |
|------|-------------|
| `vectorize/get-started/` | Quickstart |
| `vectorize/reference/` | Index config, metadata |
| `vectorize/best-practices/` | Embedding strategies |
