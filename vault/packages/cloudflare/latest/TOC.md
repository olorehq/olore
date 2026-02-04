# Cloudflare Documentation Table of Contents

## Directory Map

```
contents/
├── cloudflare-one/          # Zero Trust, WARP, Access, Gateway (584 files)
├── workers/                 # Cloudflare Workers runtime and APIs (336 files)
├── rules/                   # Configuration rules, transforms, redirects (175 files)
├── waf/                     # Web Application Firewall (129 files)
├── ssl/                     # SSL/TLS certificates and configuration (116 files)
├── pages/                   # Cloudflare Pages deployment platform (113 files)
├── dns/                     # DNS management and configuration (109 files)
├── fundamentals/            # Core concepts, account, API basics (95 files)
├── realtime/                # Real-time data and streaming (93 files)
├── magic-wan/               # Magic WAN networking (86 files)
├── analytics/               # Analytics APIs and dashboards (86 files)
├── logs/                    # Logpush and logging configuration (85 files)
├── r2/                      # R2 object storage (84 files)
├── ai-gateway/              # AI Gateway for LLM requests (74 files)
├── cloudflare-for-platforms/# Platform service for SaaS providers (73 files)
├── email-security/          # Email security and Area 1 (71 files)
├── cache/                   # Cache configuration and rules (64 files)
├── stream/                  # Stream video platform (58 files)
├── load-balancing/          # Load balancing configuration (53 files)
├── hyperdrive/              # Database connection pooling (52 files)
├── ddos-protection/         # DDoS mitigation (52 files)
├── images/                  # Image optimization and delivery (50 files)
├── durable-objects/         # Durable Objects coordination primitives (47 files)
├── d1/                      # D1 SQL database (47 files)
├── zaraz/                   # Third-party tool manager (44 files)
├── sandbox/                 # Development sandbox environment (44 files)
├── workers-ai/              # Workers AI inference platform (42 files)
├── ruleset-engine/          # Ruleset engine framework (40 files)
├── bots/                    # Bot management (40 files)
├── agents/                  # AI agents platform (38 files)
├── turnstile/               # CAPTCHA alternative (36 files)
├── magic-transit/           # Magic Transit networking (35 files)
├── 1.1.1.1/                 # 1.1.1.1 DNS resolver (34 files)
├── api-shield/              # API security and protection (32 files)
├── speed/                   # Performance optimization (31 files)
├── queues/                  # Message queues (31 files)
├── ai-search/               # AI-powered search (30 files)
├── pipelines/               # Data pipelines (29 files)
├── browser-rendering/       # Puppeteer browser automation (28 files)
├── web3/                    # Web3 and blockchain gateways (27 files)
├── firewall/                # Firewall rules and policies (27 files)
├── workflows/               # Serverless workflows (25 files)
├── waiting-room/            # Waiting room queue management (25 files)
├── magic-firewall/          # Magic Firewall (25 files)
├── kv/                      # Workers KV key-value store (25 files)
├── page-shield/             # Client-side security monitoring (24 files)
├── data-localization/       # Data residency controls (23 files)
├── containers/              # Container deployment (23 files)
├── email-routing/           # Email routing and forwarding (22 files)
├── security-center/         # Security insights and monitoring (21 files)
├── radar/                   # Internet traffic insights (21 files)
├── ai-crawl-control/        # AI bot crawl control (21 files)
├── terraform/               # Terraform provider (20 files)
└── ... (59 more products)   # Additional services and features
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Workers development | `contents/workers/get-started/guide.mdx` |
| Pages deployment | `contents/pages/get-started/guide.mdx` |
| D1 database | `contents/d1/get-started/index.mdx` |
| R2 storage | `contents/r2/get-started/index.mdx` |
| KV store | `contents/kv/get-started/index.mdx` |
| Durable Objects | `contents/durable-objects/get-started/index.mdx` |
| Workers AI | `contents/workers-ai/get-started/workers-wrangler.mdx` |
| AI Gateway | `contents/ai-gateway/get-started/index.mdx` |
| DNS configuration | `contents/dns/manage-dns-records/how-to/create-dns-records.mdx` |
| SSL/TLS setup | `contents/ssl/get-started/index.mdx` |
| WAF rules | `contents/waf/managed-rules/index.mdx` |
| Zero Trust setup | `contents/cloudflare-one/setup/index.mdx` |
| API reference | `contents/fundamentals/api/index.mdx` |
| Troubleshooting | `contents/fundamentals/troubleshooting/index.mdx` |

## Major Product Areas

### Serverless Platform (950+ files)

Core compute and storage primitives for building applications:

- **workers/** - JavaScript/TypeScript runtime, bindings, compatibility
- **pages/** - Static site deployment, Functions, framework guides
- **durable-objects/** - Stateful coordination, WebSockets, storage API
- **d1/** - SQL database, queries, migrations, backups
- **r2/** - S3-compatible object storage, buckets, multipart uploads
- **kv/** - Key-value store, namespaces, TTL, bulk operations
- **queues/** - Message queues, batching, retries
- **workflows/** - Step functions and orchestration
- **hyperdrive/** - Database connection pooling and acceleration

### AI & Machine Learning (190+ files)

AI inference, search, and agent platforms:

- **workers-ai/** - Run LLMs and ML models (Llama, Stable Diffusion, Whisper)
- **ai-gateway/** - Gateway for OpenAI, Azure, Anthropic, Hugging Face
- **agents/** - AI agent orchestration and workflows
- **vectorize/** - Vector database for embeddings
- **ai-search/** - AI-powered semantic search
- **ai-crawl-control/** - Bot management for AI crawlers

### Zero Trust & Security (1100+ files)

Network security, access control, and threat protection:

- **cloudflare-one/** - Zero Trust platform, WARP, Access, Gateway
- **waf/** - Web Application Firewall, managed rules, rate limiting
- **bots/** - Bot management and detection
- **ddos-protection/** - DDoS mitigation and alerts
- **api-shield/** - API security, schema validation, mTLS
- **turnstile/** - Privacy-friendly CAPTCHA alternative
- **page-shield/** - Client-side security monitoring
- **email-security/** - Email threat protection (Area 1)
- **firewall/** - Firewall rules and IP lists
- **magic-firewall/** - Network-layer firewall

### Network & Performance (500+ files)

CDN, DNS, load balancing, and network services:

- **dns/** - DNS management, DNSSEC, secondary DNS
- **cache/** - Cache rules, purging, custom cache keys
- **load-balancing/** - Load balancers, health checks, geo steering
- **ssl/** - SSL/TLS certificates, edge certificates, custom certs
- **speed/** - Performance optimization (Argo, Mirage, Polish)
- **magic-wan/** - SD-WAN and network interconnect
- **magic-transit/** - DDoS protection at network layer
- **spectrum/** - Layer 4 proxy for non-HTTP traffic
- **argo-smart-routing/** - Intelligent routing optimization
- **waiting-room/** - Queue management for traffic surges

### Developer Tools & Infrastructure (200+ files)

APIs, configuration, monitoring, and deployment:

- **fundamentals/** - Account setup, API docs, authentication
- **analytics/** - Web analytics, GraphQL analytics API
- **logs/** - Logpush, Logpull, log destinations
- **terraform/** - Infrastructure as code provider
- **pulumi/** - Pulumi provider for Cloudflare
- **warp-client/** - WARP client deployment and configuration
- **sandbox/** - Development and testing environment

### Platform Services (400+ files)

Additional services and integrations:

- **rules/** - Transform rules, URL rewrites, HTTP headers
- **ruleset-engine/** - Rule execution framework
- **images/** - Image resizing, optimization, variants
- **stream/** - Video streaming and encoding
- **zaraz/** - Third-party tool management
- **email-routing/** - Email forwarding and routing
- **registrar/** - Domain registration
- **web3/** - IPFS and Ethereum gateways
- **browser-rendering/** - Puppeteer browser automation
- **notifications/** - Webhook notifications and alerts

## Documentation Organization

Each product directory typically contains:

- **get-started/** or **quickstart/** - Setup and first steps
- **guides/** or **how-to/** - Task-oriented guides
- **configuration/** - Configuration options and examples
- **api/** or **reference/** - API reference documentation
- **examples/** or **tutorials/** - Code examples and tutorials
- **troubleshooting/** - Common issues and solutions
- **faq/** - Frequently asked questions
- **limits/** - Rate limits and quotas

## API Documentation

The primary API documentation is in `contents/fundamentals/api/`:

- REST API reference and authentication
- GraphQL API for analytics
- Wrangler CLI commands
- API tokens and permissions

Product-specific API endpoints are documented within each product directory.
