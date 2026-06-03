# Cloudflare Table of Contents

## Directory Map

```
contents/
├── workers/                      # Cloudflare Workers serverless platform (439 files)
├── workers-ai/                   # Workers AI - run AI models on the edge (66 files)
├── workers-vpc/                  # Workers VPC networking (20 files)
├── agents/                       # AI Agents built on Workers (86 files)
├── pages/                        # Cloudflare Pages - frontend deployment (124 files)
├── d1/                           # D1 - serverless SQL database (57 files)
├── kv/                           # KV - key-value storage (33 files)
├── durable-objects/              # Durable Objects - stateful Workers (58 files)
├── r2/                           # R2 - object storage (103 files)
├── r2-sql/                       # R2 SQL data catalog (15 files)
├── queues/                       # Queues - message queuing (41 files)
├── pipelines/                    # Pipelines - data streaming (38 files)
├── hyperdrive/                   # Hyperdrive - accelerate database connections (63 files)
├── vectorize/                    # Vectorize - vector database (27 files)
├── ai-gateway/                   # AI Gateway - AI traffic control (85 files)
├── ai-search/                    # AI Search (62 files)
├── ai-crawl-control/             # AI Crawl Control (33 files)
├── workflows/                    # Workflows - durable execution (36 files)
├── containers/                   # Containers on Workers (29 files)
├── sandbox/                      # Sandbox SDK - isolated code execution (61 files)
├── dynamic-workers/              # Dynamic Workers (17 files)
├── browser-run/                  # Browser Rendering API (48 files)
├── artifacts/                    # Artifacts (29 files)
├── realtime/                     # Cloudflare Realtime - WebRTC/SFU/TURN (698 files)
│   ├── realtimekit/              # RealtimeKit SDK
│   │   ├── core/                 # Core API reference
│   │   ├── ui-kit/               # UI Kit components & API reference
│   │   ├── collaborative-stores/ # Collaborative data stores
│   │   ├── recording-guide/      # Recording functionality
│   │   └── ai/                   # AI integrations
│   ├── sfu/                      # SFU (Selective Forwarding Unit)
│   └── turn/                     # TURN server
├── cloudflare-one/               # Cloudflare One - Zero Trust platform (721 files)
├── cloudflare-wan/               # Cloudflare WAN (110 files)
├── dns/                          # DNS management (138 files)
├── ssl/                          # SSL/TLS certificates (136 files)
├── cache/                        # Caching configuration (83 files)
├── waf/                          # Web Application Firewall (163 files)
├── ddos-protection/              # DDoS protection (155 files)
├── rules/                        # Cloudflare Rules (transform, redirect, etc.) (190 files)
├── ruleset-engine/               # Ruleset Engine (45 files)
├── firewall/                     # Firewall rules (legacy) (28 files)
├── load-balancing/               # Load Balancing (63 files)
├── api-shield/                   # API Shield - API security (37 files)
├── bots/                         # Bot Management (51 files)
├── turnstile/                    # Turnstile - CAPTCHA alternative (50 files)
├── zaraz/                        # Zaraz - third-party tool manager (49 files)
├── stream/                       # Cloudflare Stream - video (65 files)
├── images/                       # Cloudflare Images (63 files)
├── logs/                         # Logpush and log configuration (106 files)
├── analytics/                    # Analytics and metrics (103 files)
├── email-routing/                # Email Routing (26 files)
├── email-security/               # Email security / area1 (88 files)
├── email-service/                # Email Service (42 files)
├── speed/                        # Speed optimization (48 files)
├── magic-transit/                # Magic Transit - network protection (47 files)
├── spectrum/                     # Spectrum - TCP/UDP proxy (20 files)
├── tunnel/                       # Cloudflare Tunnel (34 files)
├── terraform/                    # Terraform provider (33 files)
├── pulumi/                       # Pulumi provider (7 files)
├── cloudflare-for-platforms/     # Cloudflare for Platforms - multi-tenant (98 files)
├── cloudflare-network-firewall/  # Network Firewall (33 files)
├── fundamentals/                 # Core Cloudflare concepts and account setup (136 files)
├── registrar/                    # Domain registrar (23 files)
├── data-localization/            # Data Localization Suite (24 files)
├── network/                      # Network services (9 files)
├── network-flow/                 # Network flow analytics (22 files)
├── network-interconnect/         # Network Interconnect (4 files)
├── network-error-logging/        # Network Error Logging (4 files)
├── waiting-room/                 # Waiting Room (31 files)
├── web-analytics/                # Web Analytics (17 files)
├── web3/                         # Web3 gateway (35 files)
├── radar/                        # Cloudflare Radar (27 files)
├── security/                     # Security settings (10 files)
├── security-center/              # Security Center (16 files)
├── smart-shield/                 # Smart Shield (23 files)
├── client-side-security/         # Client-Side Security (28 files)
├── cloudflare-challenges/        # Cloudflare challenges (20 files)
├── byoip/                        # Bring Your Own IP (20 files)
├── health-checks/                # Health Checks (8 files)
├── log-explorer/                 # Log Explorer (8 files)
├── 1.1.1.1/                      # 1.1.1.1 DNS resolver (39 files)
├── warp-client/                  # WARP client (12 files)
├── ai/                           # AI overview (13 files)
├── learning-paths/               # Step-by-step learning paths (323 files)
├── reference-architecture/       # Reference architectures (84 files)
├── use-cases/                    # Use case guides (59 files)
├── migration-guides/             # Migration guides (1 file)
├── support/                      # Troubleshooting and support (120 files)
├── flagship/                     # Flagship (16 files)
├── moq/                          # MoQ - Media over QUIC (3 files)
├── constellation/                # Constellation ML (3 files)
├── dmarc-management/             # DMARC Management (5 files)
├── tenant/                       # Tenant API (11 files)
├── notifications/                # Notifications (11 files)
├── version-management/           # Version Management (12 files)
├── secrets-store/                # Secrets Store (9 files)
├── resource-tagging/             # Resource Tagging (9 files)
├── randomness-beacon/            # Randomness Beacon (9 files)
├── time-services/                # Time Services (9 files)
├── privacy-gateway/              # Privacy Gateway (7 files)
├── privacy-proxy/                # Privacy Proxy (14 files)
├── key-transparency/             # Key Transparency (6 files)
├── multi-cloud-networking/       # Multi-Cloud Networking (5 files)
├── client-ip-geolocation/        # Client IP Geolocation (4 files)
├── argo-smart-routing/           # Argo Smart Routing (4 files)
├── china-network/                # China Network (11 files)
├── automatic-platform-optimization/ # APO for WordPress (16 files)
├── google-tag-gateway/           # Google Tag Gateway (1 file)
└── data-localization/            # Data Localization (24 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Workers serverless | `contents/workers/get-started/` |
| Workers AI / LLM inference | `contents/workers-ai/get-started.mdx` |
| AI Agents | `contents/agents/index.mdx` |
| Pages deployment | `contents/pages/get-started/` |
| D1 SQL database | `contents/d1/get-started.mdx` |
| KV storage | `contents/kv/get-started.mdx` |
| Durable Objects | `contents/durable-objects/get-started/` |
| R2 object storage | `contents/r2/get-started.mdx` |
| Queues | `contents/queues/get-started.mdx` |
| Hyperdrive | `contents/hyperdrive/get-started.mdx` |
| Vectorize | `contents/vectorize/get-started.mdx` |
| AI Gateway | `contents/ai-gateway/get-started.mdx` |
| Workflows | `contents/workflows/get-started/` |
| Realtime (WebRTC) | `contents/realtime/realtimekit/index.mdx` |
| Zero Trust / ZTNA | `contents/cloudflare-one/index.mdx` |
| DNS | `contents/dns/index.mdx` |
| SSL/TLS | `contents/ssl/index.mdx` |
| WAF | `contents/waf/index.mdx` |
| DDoS protection | `contents/ddos-protection/index.mdx` |
| Rules engine | `contents/rules/index.mdx` |
| Load Balancing | `contents/load-balancing/index.mdx` |
| Cloudflare Tunnel | `contents/tunnel/index.mdx` |
| Troubleshooting | `contents/support/troubleshooting/` |
| Fundamentals / concepts | `contents/fundamentals/index.mdx` |
| Learning paths | `contents/learning-paths/` |

## Detailed Structure

### workers/ (439 files)

| Directory | Description |
|-----------|-------------|
| `get-started/` | Quickstart guides |
| `configuration/` | wrangler.toml reference |
| `runtime-apis/` | Runtime APIs (fetch, caches, streams, etc.) |
| `platform/` | Platform limits, pricing, compatibility |
| `languages/` | TypeScript, Python, Rust usage |
| `examples/` | Code examples |
| `observability/` | Logging and tracing |

### workers-ai/ (66 files)

| Directory | Description |
|-----------|-------------|
| `get-started.mdx` | Getting started |
| `models/` | Available AI models |
| `configuration/` | Configuration options |
| `tutorials/` | Tutorials |

### agents/ (86 files)

| Directory | Description |
|-----------|-------------|
| `index.mdx` | Overview |
| `get-started/` | Getting started |
| `api/` | Agents API reference |
| `concepts/` | Core concepts |
| `guides/` | How-to guides |
| `examples/` | Code examples |
| `tools/` | Tool use |
| `memory/` | Memory and persistence |

### realtime/ (698 files)

| Directory | Description |
|-----------|-------------|
| `realtimekit/core/api-reference/` | Core SDK API reference |
| `realtimekit/ui-kit/api-reference/` | UI Kit API reference (React, Angular, iOS, Android, Flutter) |
| `realtimekit/collaborative-stores/` | Collaborative data stores |
| `realtimekit/recording-guide/` | Recording guides |
| `realtimekit/ai/` | AI integrations |
| `sfu/` | Selective Forwarding Unit docs |
| `turn/` | TURN server docs |

### cloudflare-one/ (721 files)

| Directory | Description |
|-----------|-------------|
| `connections/` | Connection methods (WARP, Cloudflare Tunnel) |
| `policies/` | Zero Trust access and gateway policies |
| `identity/` | Identity providers |
| `analytics/` | Analytics and logging |
| `applications/` | Application configuration |

### d1/ (57 files)

| Directory | Description |
|-----------|-------------|
| `get-started.mdx` | Quickstart |
| `sql-api/` | SQL API reference |
| `platform/` | Platform details, limits |
| `tutorials/` | Tutorials |
| `configuration/` | Configuration |

### r2/ (103 files)

| Directory | Description |
|-----------|-------------|
| `get-started.mdx` | Getting started |
| `api/` | S3-compatible API reference |
| `data-access/` | Data access methods |
| `data-catalog/` | Data catalog / R2 SQL |
| `platform/` | Pricing, limits |
| `tutorials/` | Tutorials |

### pages/ (124 files)

| Directory | Description |
|-----------|-------------|
| `get-started/` | Getting started with deployment |
| `configuration/` | Build configuration |
| `functions/` | Pages Functions (serverless) |
| `framework-guides/` | Framework-specific guides |
| `platform/` | Platform limits and features |

### waf/ (163 files)

| Directory | Description |
|-----------|-------------|
| `managed-rules/` | Cloudflare managed WAF rules |
| `custom-rules/` | Custom WAF rules |
| `rate-limiting-rules/` | Rate limiting |
| `exposed-credentials-check/` | Credential leak detection |

### rules/ (190 files)

| Directory | Description |
|-----------|-------------|
| `transform-rules/` | URL/header rewrite rules |
| `redirect-rules/` | Redirect rules |
| `origin-rules/` | Origin rules |
| `cache-rules/` | Cache rules |
| `configuration-rules/` | Configuration rules |
| `snippets/` | Rules snippets |

### dns/ (138 files)

| Directory | Description |
|-----------|-------------|
| `manage-dns-records/` | DNS record management |
| `zone-setups/` | Zone setup options |
| `dnssec/` | DNSSEC configuration |
| `reference/` | DNS reference |

### ssl/ (136 files)

| Directory | Description |
|-----------|-------------|
| `edge-certificates/` | Edge certificate configuration |
| `origin-configuration/` | Origin SSL configuration |
| `custom-certificates/` | Custom certificate upload |
| `reference/` | SSL/TLS reference |

### support/ (120 files)

| Directory | Description |
|-----------|-------------|
| `troubleshooting/http-status-codes/` | HTTP status code reference |
| `troubleshooting/general-troubleshooting/` | General troubleshooting |
| `third-party-software/` | Third-party software compatibility |

### learning-paths/ (323 files)

| Directory | Description |
|-----------|-------------|
| `get-started-free/` | Getting started on free plan |
| `workers/` | Workers learning path |
| `zero-trust-web-access/` | Zero Trust web access |
| `data-center-protection/` | Data center DDoS protection |
| `ddos-protection/` | DDoS protection path |
| `replace-vpn/` | Replace VPN with Zero Trust |
| `secure-internet-traffic/` | Secure internet access |
| `load-balancing/` | Load balancing path |
