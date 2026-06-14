# Checkly Table of Contents

## Directory Map

```
contents/
├── what-is-checkly.mdx         # Product overview
├── index.mdx                   # Documentation home
├── quickstarts/                # Getting started guides (9 files)
├── concepts/                   # Core concepts (10 files)
├── constructs/                 # CLI constructs reference (36 files)
├── cli/                        # CLI usage and reference (29 files)
├── detect/                     # Monitoring checks (69 files)
│   ├── synthetic-monitoring/   # API, browser, multistep, Playwright, agentic checks
│   └── uptime-monitoring/      # URL, TCP, ICMP, DNS, heartbeat monitors
├── communicate/                # Alerting and dashboards (20 files)
│   ├── alerts/
│   ├── dashboards/
│   ├── maintenance-windows/
│   └── status-pages/
├── resolve/                    # Root cause analysis and traces (22 files)
│   ├── ai-root-cause-analysis/
│   └── traces/                 # OpenTelemetry trace import/export/instrumentation
├── platform/                   # Platform configuration (22 files)
│   ├── private-locations/
│   ├── runtimes/
│   ├── reporting/
│   └── snippets/
├── integrations/               # Third-party integrations (44 files)
│   ├── alerts/
│   ├── ci-cd/
│   ├── iac/                    # Terraform, Pulumi
│   ├── incident-management/
│   └── observability/
├── api-reference/              # REST API reference (181 files)
│   ├── accounts/
│   ├── checks/
│   ├── check-groups/
│   ├── alert-channels/
│   ├── status-pages/
│   ├── maintenance-windows/
│   └── ... (30+ resource categories)
├── guides/                     # How-to guides (24 files)
├── learn/playwright/           # Playwright automation guides (48 files)
├── admin/                      # Account administration (8 files)
└── ai/                         # AI features and coding assistant integration (6 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/what-is-checkly.mdx` |
| Quick start | `contents/quickstarts/` |
| Core concepts | `contents/concepts/` |
| CLI reference | `contents/cli/` |
| Create API check | `contents/detect/synthetic-monitoring/api-checks/` |
| Create browser check | `contents/detect/synthetic-monitoring/browser-checks/` |
| Create Playwright check | `contents/detect/synthetic-monitoring/playwright-checks/` |
| URL/uptime monitoring | `contents/detect/uptime-monitoring/` |
| Constructs (MaC) | `contents/constructs/` |
| Alert channels | `contents/communicate/alerts/` |
| REST API | `contents/api-reference/` |
| Trace integration | `contents/resolve/traces/` |
| Private locations | `contents/platform/private-locations/` |
| CI/CD integration | `contents/integrations/ci-cd/` |
| Playwright guides | `contents/learn/playwright/` |
| AI coding assistants | `contents/ai/` |

## Detailed Structure

### quickstarts/ (9 files)

| File | Description |
|------|-------------|
| `api-check.mdx` | API check quickstart |
| `browser-check.mdx` | Browser check quickstart |
| `creating-a-browser-check.mdx` | Creating a browser check |
| `heartbeat-monitor.mdx` | Heartbeat monitor quickstart |
| `multistep-check.mdx` | Multistep check quickstart |
| `openapi-spec.mdx` | OpenAPI spec quickstart |
| `playwright-check.mdx` | Playwright check quickstart |
| `tcp-monitor.mdx` | TCP monitor quickstart |
| `url-monitor.mdx` | URL monitor quickstart |

### concepts/ (10 files)

| File | Description |
|------|-------------|
| `checks.mdx` | What checks are |
| `locations.mdx` | Check locations |
| `monitoring-as-code.mdx` | Monitoring as Code (MaC) |
| `scheduling.mdx` | Check scheduling |
| `overview.mdx` | Concepts overview |

### constructs/ (36 files)

Key files for Monitoring as Code constructs:

| File | Description |
|------|-------------|
| `api-check.mdx` | ApiCheck construct |
| `browser-check.mdx` | BrowserCheck construct |
| `playwright-check.mdx` | PlaywrightCheck construct |
| `multistep-check.mdx` | MultistepCheck construct |
| `check-group.mdx` | CheckGroup construct |
| `check-group-v2.mdx` | CheckGroupV2 construct |
| `alert-channel.mdx` | AlertChannel construct |
| `dashboard.mdx` | Dashboard construct |
| `heartbeat-check.mdx` | HeartbeatCheck construct |
| `url-monitor.mdx` | UrlMonitor construct |
| `tcp-monitor.mdx` | TcpMonitor construct |
| `dns-monitor.mdx` | DnsMonitor construct |
| `agentic-check.mdx` | AgenticCheck construct |
| `overview.mdx` | Constructs overview |

### cli/ (29 files)

Key CLI documentation:

| File | Description |
|------|-------------|
| `installation.mdx` | CLI installation |
| `command-line-reference.mdx` | All CLI commands |
| `constructs-reference.mdx` | Construct API reference |
| `project-structure.mdx` | Project structure |
| `using-environment-variables.mdx` | Environment variables in CLI |
| `authentication.mdx` | CLI authentication |

### detect/synthetic-monitoring/ (38 files)

| Subdirectory | Description |
|--------------|-------------|
| `api-checks/` (10 files) | API check configuration, assertions, setup/teardown |
| `browser-checks/` (12 files) | Browser check setup, Playwright integration |
| `playwright-checks/` (7 files) | Playwright check suites |
| `multistep-checks/` (7 files) | Multistep check configuration |
| `agentic-checks/` (2 files) | AI agentic checks |

### detect/uptime-monitoring/ (22 files)

| Subdirectory | Description |
|--------------|-------------|
| `url-monitors/` (2 files) | URL/HTTP uptime monitoring |
| `tcp-monitors/` (3 files) | TCP monitoring |
| `icmp-monitors/` (2 files) | ICMP/ping monitoring |
| `dns-monitors/` (2 files) | DNS monitoring |
| `heartbeat-monitors/` (8 files) | Heartbeat/cron monitoring |

### communicate/ (20 files)

| Subdirectory | Description |
|--------------|-------------|
| `alerts/` | Alert channels (email, Slack, PagerDuty, webhooks) |
| `dashboards/` | Public and private dashboards |
| `maintenance-windows/` | Scheduled maintenance windows |
| `status-pages/` | Status page configuration |

### resolve/ (22 files)

| Subdirectory | Description |
|--------------|-------------|
| `ai-root-cause-analysis/overview.mdx` | Rocky AI root cause analysis |
| `traces/how-it-works.mdx` | How trace correlation works |
| `traces/overview.mdx` | OTel traces overview |
| `traces/import/` (4 files) | Import traces via OTel, HTTPS/gRPC |
| `traces/export/` (4 files) | Export to Grafana Tempo, Honeycomb, New Relic, Dash0 |
| `traces/instrumentation/` (10 files) | Instrument Node.js, Express, Next.js, Django, Flask, Go, Java, Ruby, .NET, Laravel |

### platform/ (22 files)

| Subdirectory | Description |
|--------------|-------------|
| `private-locations/` (7 files) | Agent config, images, autoscaling, Kubernetes, proxy |
| `runtimes/` (2 files) | Runtime specs and overview |
| `reporting/` (2 files) | Analytics API, reporting overview |
| `snippets/` (2 files) | Reusable code snippets |
| `variables.mdx` | Environment variables |
| `secrets.mdx` | Secret management |
| `groups.mdx` | Check groups |
| `allowlisting-traffic.mdx` | Allowlist Checkly IPs |

### integrations/ (44 files)

| Subdirectory | Description |
|--------------|-------------|
| `alerts/` (10 files) | Slack, email, SMS, webhook, OpsGenie, PagerDuty, etc. |
| `ci-cd/` (6 files) | GitHub Actions, GitLab CI, Jenkins, Vercel |
| `iac/terraform/` (11 files) | Terraform provider |
| `iac/pulumi/` (5 files) | Pulumi provider |
| `incident-management/` (9 files) | PagerDuty, OpsGenie, FireHydrant, iLert, etc. |
| `observability/` (3 files) | Prometheus, Coralogix |

### api-reference/ (181 files)

REST API reference organized by resource. Key resources:

| Resource | Files | Description |
|----------|-------|-------------|
| `accounts/` | 11 | Account management |
| `checks/` | 13 | Create/read/update/delete checks |
| `check-groups/` | 9 | Check group operations |
| `alert-channels/` | 6 | Alert channel CRUD |
| `maintenance-windows/` | 12 | Maintenance window operations |
| `status-pages/` | 8 | Status page management |
| `analytics/` | 11 | Check analytics and metrics |
| `test-sessions/` | 6 | Test session operations |
| `triggers/` | 6 | Check triggers |
| `environments-variables/` | 5 | Environment variable management |
| `private-locations/` | 8 | Private location management |
| `runtimes/` | 2 | Runtime information |

### guides/ (24 files)

How-to guides for common tasks. Browse `contents/guides/` for all available guides.

### learn/playwright/ (48 files)

Playwright testing guides relevant to Checkly browser and playwright checks:

Key topics: assertions, authentication, debugging, selectors, navigation, file operations, mobile emulation, API testing, performance, multi-tab flows, intercept requests, login automation, and more.

### admin/ (8 files)

| File | Description |
|------|-------------|
| `creating-api-key.mdx` | Create API keys |
| `changing-your-email-password.mdx` | Account settings |
| `team-management/overview.mdx` | Team management |
| `team-management/saml.mdx` | SAML SSO |
| `team-management/single-sign-on.mdx` | SSO setup |
| `team-management/microsoft-azure-ad.mdx` | Azure AD integration |
| `team-management/multi-factor-authentication.mdx` | MFA setup |

### ai/ (6 files)

| File | Description |
|------|-------------|
| `overview.mdx` | AI features overview |
| `rocky-ai.mdx` | Rocky AI assistant |
| `rules.mdx` | AI coding rules for Checkly |
| `skills.mdx` | AI skills integration |
| `llms-txt.mdx` | LLM context access |
| `markdown-access.mdx` | Markdown docs access for AI |
