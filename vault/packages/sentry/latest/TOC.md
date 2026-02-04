# Sentry Table of Contents

## Directory Map

```
contents/
├── platforms/          # SDK documentation for all platforms (1655 files)
│   ├── javascript/     # JavaScript & frameworks
│   ├── python/         # Python SDKs
│   ├── react-native/   # React Native
│   ├── dart/           # Dart & Flutter
│   ├── java/           # Java SDKs
│   ├── go/             # Go SDK
│   ├── apple/          # iOS/macOS SDKs
│   ├── dotnet/         # .NET SDKs
│   ├── php/            # PHP SDKs
│   ├── ruby/           # Ruby SDKs
│   ├── android/        # Android SDK
│   ├── kotlin/         # Kotlin SDK
│   ├── rust/           # Rust SDK
│   ├── unity/          # Unity SDK
│   ├── unreal/         # Unreal Engine
│   ├── native/         # C/C++ SDKs
│   ├── elixir/         # Elixir SDK
│   ├── godot/          # Godot Engine
│   ├── powershell/     # PowerShell SDK
│   └── [gaming]        # Nintendo Switch, PlayStation, Xbox
├── product/            # Feature documentation (229 files)
│   ├── issues/         # Error tracking & issue management
│   ├── alerts/         # Alerting & notifications
│   ├── releases/       # Release tracking
│   ├── crons/          # Cron monitoring
│   ├── uptime-monitoring/ # Uptime checks
│   ├── insights/       # Performance insights
│   ├── dashboards/     # Custom dashboards
│   ├── explore/        # Data exploration
│   ├── user-feedback/  # User feedback collection
│   ├── codecov/        # Code coverage
│   ├── sentry-basics/  # Core concepts
│   ├── sentry-toolbar/ # Developer toolbar
│   ├── sentry-mcp/     # Model Context Protocol
│   ├── ai-in-sentry/   # AI features
│   └── [more]          # Additional features
├── organization/       # Organization settings (110 files)
│   ├── integrations/   # Third-party integrations
│   ├── early-adopter-features/ # Beta features
│   └── dynamic-sampling/ # Sampling configuration
├── concepts/           # Core concepts (31 files)
├── api/                # API reference (8 files)
├── cli/                # sentry-cli documentation (8 files)
├── pricing/            # Pricing & plans (15 files)
├── security-legal-pii/ # Security & privacy (17 files)
└── account/            # Account management (3 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| SDK setup | `contents/platforms/{language}/index.mdx` |
| Error tracking | `contents/product/issues/index.mdx` |
| Performance monitoring | `contents/product/insights/index.mdx` |
| Alerts setup | `contents/product/alerts/index.mdx` |
| API reference | `contents/api/index.mdx` |
| Integrations | `contents/organization/integrations/index.mdx` |

## Detailed Structure

### platforms/ (1655 files)

The largest section covering all SDK implementations. Each platform has:
- Installation & setup
- Configuration options
- Error tracking
- Performance monitoring
- Session replay (where supported)
- Troubleshooting

**Major platforms:**
- `javascript/` - JavaScript, Node.js, and all JS frameworks (React, Vue, Angular, Next.js, etc.)
- `python/` - Python with framework integrations (Django, Flask, FastAPI, etc.)
- `react-native/` - React Native mobile development
- `dart/` - Dart & Flutter
- `java/` - Java with Spring, Android, etc.
- `go/` - Go SDK
- `apple/` - iOS, macOS, tvOS, watchOS
- `dotnet/` - .NET Core, ASP.NET, etc.
- `php/` - PHP with Laravel, Symfony, etc.
- `ruby/` - Ruby with Rails
- `android/` - Android (Java/Kotlin)

### product/ (229 files)

Feature-specific documentation:

**Core monitoring:**
- `issues/` - Error tracking, grouping, triaging
- `alerts/` - Alert rules, notifications
- `releases/` - Release tracking, health
- `crons/` - Cron job monitoring
- `uptime-monitoring/` - Uptime checks

**Performance & insights:**
- `insights/` - Performance insights (queries, assets, etc.)
- `dashboards/` - Custom dashboard creation
- `explore/` - Traces, spans, metrics exploration

**Feedback & collaboration:**
- `user-feedback/` - User feedback widgets
- `codecov/` - Code coverage integration

**Developer tools:**
- `sentry-basics/` - Core concepts
- `sentry-toolbar/` - Developer toolbar
- `sentry-mcp/` - Model Context Protocol integration
- `ai-in-sentry/` - AI-powered features

### organization/ (110 files)

Organization-level settings and integrations:

- `integrations/` - Third-party integrations (GitHub, Jira, Slack, etc.)
  - `source-code-mgmt/` - GitHub, GitLab, Bitbucket, Azure DevOps
  - `cloud-monitoring/` - AWS Lambda, GCP, Cloudflare Workers
  - `debugging/` - Debug tools integrations
  - `data-forwarding/` - Splunk, Grafana, Segment, etc.
- `early-adopter-features/` - Beta/experimental features
- `dynamic-sampling/` - Sampling rules configuration
- `data-storage-location/` - Regional data storage

### concepts/ (31 files)

Core Sentry concepts:
- Data management
- Quotas & limits
- Search syntax
- Sampling strategies
- Data scrubbing

### api/ (8 files)

REST API documentation for programmatic access.

### cli/ (8 files)

sentry-cli tool documentation for:
- Source maps upload
- Release management
- Debug files upload

### pricing/ (15 files)

Pricing plans, quotas, and billing information.

### security-legal-pii/ (17 files)

Security policies, legal compliance, and PII handling.

### account/ (3 files)

Account-level settings and management.
