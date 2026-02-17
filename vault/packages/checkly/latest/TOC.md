# Checkly Table of Contents

## Directory Map

```
contents/
├── (root)                     # Main landing pages (3 files)
├── quickstarts/               # Quick start guides (9 files)
├── concepts/                  # Core concepts (9 files)
├── detect/                    # Monitoring and testing (64 files)
│   ├── synthetic-monitoring/  # Synthetic monitoring
│   ├── testing/              # Test integration
│   └── uptime-monitoring/    # Uptime checks
├── api-reference/             # REST API reference (132 files)
├── cli/                       # CLI usage (21 files)
├── constructs/                # Monitoring as Code constructs (28 files)
├── platform/                  # Platform features (23 files)
├── guides/                    # How-to guides (23 files)
├── learn/                     # Tutorials and examples (100 files)
├── integrations/              # Third-party integrations (49 files)
├── communicate/               # Alerting and status pages (18 files)
├── resolve/                   # Incident management (22 files)
├── admin/                     # Account management (8 files)
└── snippets/                  # Reusable code snippets (21 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/quickstart.mdx` |
| What is Checkly | `contents/what-is-checkly.mdx` |
| API monitoring | `contents/quickstarts/api-check.mdx` |
| Browser checks | `contents/quickstarts/browser-check.mdx` |
| CLI reference | `contents/cli/command-line-reference.mdx` |
| REST API | `contents/api-reference/` |
| Monitoring as Code | `contents/constructs/` |

## Detailed Structure

### Root Files (3)

| File | Description |
|------|-------------|
| `index.mdx` | Documentation home page |
| `quickstart.mdx` | Quick start guide |
| `what-is-checkly.mdx` | Product overview |

### quickstarts/ (9 files)

| File | Description |
|------|-------------|
| `api-check.mdx` | API monitoring quick start |
| `browser-check.mdx` | Browser check quick start |
| `playwright-check.mdx` | Playwright test quick start |
| `multistep-check.mdx` | Multi-step check guide |
| `heartbeat-monitor.mdx` | Heartbeat monitoring |
| `tcp-monitor.mdx` | TCP check setup |
| `url-monitor.mdx` | URL monitoring |
| `openapi-spec.mdx` | OpenAPI import |
| `creating-a-browser-check.mdx` | Browser check tutorial |

### concepts/ (9 files)

Core concepts and terminology for understanding Checkly's monitoring model.

### detect/ (64 files)

Monitoring and testing features:
- **synthetic-monitoring/** - API, browser, multi-step, Playwright checks
- **testing/** - Test integration, Playwright reporter
- **uptime-monitoring/** - Heartbeat, TCP, DNS monitors

### api-reference/ (132 files)

Complete REST API documentation covering:
- Accounts, alert channels, alert notifications
- Analytics, badges, check alerts
- Check groups, check results, check sessions
- Check status, checks, client certificates
- Dashboards, environment variables, heartbeats
- Incidents, locations, maintenance windows
- Monitors, OpenTelemetry, private locations
- Reporting, runtimes, static IPs
- Status pages, triggers

### cli/ (21 files)

CLI documentation including command reference, project structure, and Monitoring as Code workflows.

### constructs/ (28 files)

Monitoring as Code constructs for programmatic check definitions using TypeScript.

### platform/ (23 files)

Platform features including:
- Private locations
- OpenTelemetry traces
- Runtimes and specs
- Static IPs and allowlisting

### guides/ (23 files)

How-to guides for common tasks and workflows.

### learn/ (100 files)

Extensive tutorials, examples, and learning resources.

### integrations/ (49 files)

Third-party integrations documentation covering various services and tools.

### communicate/ (18 files)

- **alerts/** - Alert configuration and channels
- **dashboards/** - Dashboard creation
- **maintenance-windows/** - Maintenance scheduling
- **status-pages/** - Public status pages

### resolve/ (22 files)

Incident management and resolution workflows.

### admin/ (8 files)

Account management, team settings, and API keys.

### snippets/ (21 files)

Reusable code snippets for common operations.
