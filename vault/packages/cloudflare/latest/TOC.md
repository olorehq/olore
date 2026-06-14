# Cloudflare Table of Contents

## Directory Map

```
contents/
├── workers/                        # Workers runtime, APIs, examples, wrangler (443 files)
│   ├── runtime-apis/               # Web APIs, bindings, fetch, caches (89 files)
│   ├── examples/                   # Code examples (49 files)
│   ├── wrangler/                   # Wrangler CLI docs (41 files)
│   ├── framework-guides/           # Next.js, SvelteKit, Remix, etc. (31 files)
│   ├── configuration/              # wrangler.toml, bindings (27 files)
│   ├── testing/                    # Vitest, unit testing (37 files)
│   ├── ci-cd/                      # CI/CD integration (21 files)
│   ├── tutorials/                  # End-to-end tutorials (19 files)
│   ├── observability/              # Logs, metrics, tracing (26 files)
│   ├── languages/                  # Python, Rust, WASM (16 files)
│   ├── vite-plugin/                # Vite plugin docs (13 files)
│   ├── databases/                  # D1, Hyperdrive, Durable Objects (13 files)
│   ├── platform/                   # Limits, pricing, compatibility (13 files)
│   ├── static-assets/              # Static file serving (20 files)
│   ├── get-started/                # Quickstart (5 files)
│   └── best-practices/             # Performance, security tips (2 files)
├── cloudflare-one/                 # Zero Trust / SASE platform (734 files)
│   ├── networks/                   # Tunnels, WARP, Gateway (197 files)
│   ├── access-controls/            # Access policies, identity (82 files)
│   ├── integrations/               # IdP, SCIM, MDM integrations (82 files)
│   ├── team-and-resources/         # Users, groups, devices (64 files)
│   ├── traffic-policies/           # Gateway policies, filtering (52 files)
│   ├── tutorials/                  # Deployment guides (25 files)
│   ├── insights/                   # Analytics, risk scoring (40 files)
│   ├── email-security/             # Cloud email security (73 files)
│   ├── data-loss-prevention/       # DLP policies (18 files)
│   └── troubleshooting/            # Debug guides (16 files)
├── realtime/                       # Cloudflare Realtime / RealtimeKit (715 files)
│   ├── realtimekit/ui-kit/         # UI Kit components and API reference (604 files)
│   │   └── api-reference/          # React, Angular, iOS, Android APIs (593 files)
│   ├── realtimekit/core/           # Core SDK concepts (39 files)
│   ├── realtimekit/recording-guide/# Recording APIs (13 files)
│   ├── sfu/                        # SFU / WebRTC (15 files)
│   └── turn/                       # TURN server (8 files)
├── rules/                          # Cloudflare Rules (transform, page, URL) (192 files)
│   ├── transform/                  # Transform Rules (46 files)
│   ├── snippets/                   # Rules Snippets (36 files)
│   ├── url-forwarding/             # Redirect rules (31 files)
│   └── compression-rules/          # Compression rules (10 files)
├── waf/                            # Web Application Firewall (164 files)
├── learning-paths/                 # Guided tutorials by product (323 files)
├── fundamentals/                   # Account setup, zones, APIs (140 files)
├── ssl/                            # SSL/TLS, certificates (138 files)
├── dns/                            # DNS management (139 files)
│   ├── zone-setups/                # Partial/full zone setup (44 files)
│   ├── manage-dns-records/         # CNAME, A, MX records (24 files)
│   └── dnssec/                     # DNSSEC configuration (9 files)
├── ddos-protection/                # DDoS protection rules (155 files)
│   ├── managed-rulesets/           # Managed DDoS rulesets (20 files)
│   └── advanced-ddos-systems/      # Advanced TCP/DNS protection (23 files)
├── pages/                          # Pages (static sites, full-stack) (125 files)
├── cloudflare-wan/                 # WAN services, Magic networking (111 files)
├── analytics/                      # Analytics, insights (103 files)
├── agents/                         # AI Agents platform (109 files)
├── logs/                           # Logpush, Log Retrieval (110 files)
├── ai-gateway/                     # AI Gateway (LLM proxy, caching) (88 files)
├── cache/                          # Caching rules and configuration (85 files)
├── reference-architecture/         # Reference architecture diagrams (84 files)
├── email-security/                 # Area 1 email security (88 files)
├── cloudflare-for-platforms/       # Workers for Platforms (98 files)
├── r2/                             # R2 object storage (104 files)
├── d1/                             # D1 SQL database (58 files)
├── durable-objects/                # Durable Objects (59 files)
├── kv/                             # Workers KV (34 files)
├── queues/                         # Queues (42 files)
├── hyperdrive/                     # Hyperdrive DB proxy (64 files)
├── pipelines/                      # Pipelines data streaming (38 files)
├── workflows/                      # Workflows orchestration (37 files)
├── images/                         # Cloudflare Images (65 files)
├── stream/                         # Stream video (66 files)
├── workers-ai/                     # Workers AI models (67 files)
├── vectorize/                      # Vectorize vector DB (28 files)
├── ai-search/                      # AI Search (62 files)
├── ai-crawl-control/               # AI crawl control (34 files)
├── ai/                             # AI overview (13 files)
├── load-balancing/                 # Load balancing (64 files)
├── tunnel/                         # Cloudflare Tunnel (35 files)
├── turnstile/                      # Turnstile CAPTCHA (52 files)
├── bots/                           # Bot management (52 files)
├── api-shield/                     # API Shield (38 files)
├── ruleset-engine/                 # Ruleset engine internals (45 files)
├── support/                        # Troubleshooting guides (116 files)
│   ├── troubleshooting/            # Common issues (102 files)
│   └── third-party-software/       # CMS, forum integrations (14 files)
├── 1.1.1.1/                        # 1.1.1.1 DNS resolver (39 files)
├── email-service/                  # Email Routing (50 files)
├── magic-transit/                  # Magic Transit (48 files)
├── zaraz/                          # Zaraz (50 files)
├── speed/                          # Speed / performance (49 files)
├── sandbox/                        # Sandbox code execution (62 files)
├── browser-run/                    # Browser Rendering API (50 files)
├── use-cases/                      # Use case guides (59 files)
├── firewall/                       # Firewall rules (legacy) (28 files)
├── security/                       # Security overview (10 files)
├── spectrum/                       # Spectrum TCP/UDP (20 files)
├── waiting-room/                   # Waiting Room (31 files)
├── web3/                           # Web3 gateways (35 files)
├── terraform/                      # Terraform provider (33 files)
├── pulumi/                         # Pulumi provider (7 files)
├── images/                         # Cloudflare Images (65 files)
├── artifacts/                      # Build artifacts (30 files)
├── containers/                     # Cloudflare Containers (29 files)
├── registrar/                      # Domain registrar (23 files)
├── client-side-security/           # Page Shield (29 files)
├── cloudflare-challenges/          # CAPTCHA / challenges (20 files)
├── automatic-platform-optimization/# APO for WordPress (16 files)
├── data-localization/              # Data localization suite (25 files)
├── byoip/                          # Bring Your Own IP (21 files)
├── network/                        # Network overview (9 files)
├── network-flow/                   # Network flow analytics (23 files)
├── radar/                          # Cloudflare Radar (28 files)
├── agents/                         # AI Agents (109 files)
├── agent-memory/                   # Agent Memory binding (11 files)
├── agent-setup/                    # Agent setup guides (6 files)
├── dynamic-workers/                # Dynamic Workers (17 files)
├── workers-vpc/                    # Workers VPC (20 files)
├── secrets-store/                  # Secrets Store (9 files)
├── flagship/                       # Feature flags (16 files)
├── r2-sql/                         # R2 SQL (15 files)
├── smart-shield/                   # Smart Shield (23 files)
├── cloudflare-network-firewall/    # Network firewall (34 files)
├── version-management/             # Version management (13 files)
├── migration-guides/               # Migration guides (1 file)
└── ...additional products...
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Workers quickstart | `contents/workers/get-started/` |
| Workers runtime APIs | `contents/workers/runtime-apis/` |
| Workers examples | `contents/workers/examples/` |
| Wrangler CLI | `contents/workers/wrangler/` |
| D1 SQL database | `contents/d1/` |
| KV storage | `contents/kv/` |
| R2 object storage | `contents/r2/` |
| Durable Objects | `contents/durable-objects/` |
| Queues | `contents/queues/` |
| Workflows | `contents/workflows/` |
| AI Gateway | `contents/ai-gateway/` |
| Workers AI | `contents/workers-ai/` |
| Vectorize | `contents/vectorize/` |
| Pages deployment | `contents/pages/` |
| DNS management | `contents/dns/` |
| SSL/TLS | `contents/ssl/` |
| WAF rules | `contents/waf/` |
| Zero Trust / Access | `contents/cloudflare-one/` |
| Cloudflare Tunnel | `contents/tunnel/` |
| Troubleshooting | `contents/support/troubleshooting/` |
| Account fundamentals | `contents/fundamentals/` |

## Detailed Structure

### workers/ (443 files)

| Subdirectory | Description |
|--------------|-------------|
| `runtime-apis/` | Web standard APIs, bindings, Cache, Fetch, WebSockets (89 files) |
| `examples/` | Runnable code examples organized by topic (49 files) |
| `wrangler/` | Wrangler CLI commands and configuration (41 files) |
| `testing/` | Vitest integration, unit testing Workers (37 files) |
| `framework-guides/` | Next.js, SvelteKit, Remix, Nuxt, Astro guides (31 files) |
| `configuration/` | wrangler.toml reference, environment variables (27 files) |
| `observability/` | Logs, Tail Workers, analytics (26 files) |
| `static-assets/` | Serving static files from Workers (20 files) |
| `tutorials/` | Full-stack app tutorials (19 files) |
| `ci-cd/` | GitHub Actions, deploy pipelines (21 files) |
| `languages/` | Python, Rust, WASM Workers (16 files) |
| `vite-plugin/` | Vite plugin for Workers dev (13 files) |
| `platform/` | Limits, pricing, compute classes (13 files) |
| `databases/` | Connecting to databases (13 files) |
| `get-started/` | Hello World quickstart (5 files) |
| `best-practices/` | Performance and security tips (2 files) |

### cloudflare-one/ (734 files)

| Subdirectory | Description |
|--------------|-------------|
| `networks/` | WARP, tunnels, private networks, Gateway (197 files) |
| `access-controls/` | Access applications, policies, identity providers (82 files) |
| `integrations/` | IdP connectors, SCIM, MDM, device clients (82 files) |
| `team-and-resources/` | User management, seats, organizations (64 files) |
| `email-security/` | Area 1 email security integration (73 files) |
| `insights/` | Risk scores, analytics dashboards (40 files) |
| `traffic-policies/` | DNS/HTTP/Network Gateway policies (52 files) |
| `tutorials/` | End-to-end deployment walkthroughs (25 files) |
| `data-loss-prevention/` | DLP profiles and policies (18 files) |
| `troubleshooting/` | Debug connectivity and policy issues (16 files) |
| `remote-browser-isolation/` | Browser isolation (11 files) |

### realtime/ (715 files)

| Subdirectory | Description |
|--------------|-------------|
| `realtimekit/ui-kit/api-reference/react/` | React UI Kit API reference (137 files) |
| `realtimekit/ui-kit/api-reference/angular/` | Angular UI Kit API reference (137 files) |
| `realtimekit/ui-kit/api-reference/core/` | Core SDK API reference (137 files) |
| `realtimekit/ui-kit/api-reference/android/` | Android SDK reference (50 files) |
| `realtimekit/ui-kit/api-reference/react-native/` | React Native reference (74 files) |
| `realtimekit/ui-kit/api-reference/ios/` | iOS SDK reference (39 files) |
| `realtimekit/ui-kit/api-reference/flutter/` | Flutter SDK reference (18 files) |
| `realtimekit/core/` | Core concepts, sessions, media (39 files) |
| `realtimekit/recording-guide/` | Recording and playback (13 files) |
| `sfu/` | SFU / WebRTC integration (15 files) |
| `turn/` | TURN server configuration (8 files) |

### rules/ (192 files)

| Subdirectory | Description |
|--------------|-------------|
| `transform/` | Transform Rules (modify requests/responses) (46 files) |
| `snippets/` | Rules Snippets (JS code in rules) (36 files) |
| `url-forwarding/` | Redirect Rules (31 files) |
| `page-rules/` | Legacy Page Rules (12 files) |
| `origin-rules/` | Override origin settings (14 files) |
| `compression-rules/` | Compression settings (10 files) |
| `configuration-rules/` | Per-request config overrides (6 files) |
| `cloud-connector/` | Connect to cloud storage (10 files) |

### dns/ (139 files)

| Subdirectory | Description |
|--------------|-------------|
| `zone-setups/` | Full/partial zone, secondary DNS (44 files) |
| `manage-dns-records/` | Add/edit/delete records (24 files) |
| `dnssec/` | DNSSEC setup and validation (9 files) |
| `dns-firewall/` | DNS firewall configuration (7 files) |
| `internal-dns/` | Internal/private DNS (9 files) |
| `nameservers/` | Custom and vanity nameservers (8 files) |

### support/ (116 files)

| Subdirectory | Description |
|--------------|-------------|
| `troubleshooting/` | Error codes, connectivity issues, debugging (102 files) |
| `third-party-software/` | CMS, forum, ecommerce compatibility (14 files) |
