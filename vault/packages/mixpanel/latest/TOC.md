# mixpanel Table of Contents

## Directory Map

```
contents/
├── quickstart/             # Getting started and installation (9 files)
│   └── capture-events/     # Event capture methods
├── tracking-methods/       # SDK and integration tracking (58 files)
│   ├── sdks/               # Platform-specific SDKs (JS, iOS, Android, etc.)
│   ├── integrations/       # Third-party integrations
│   └── id-management/      # User identification
├── data-structure/         # Events, properties, user profiles (12 files)
│   ├── group-analytics/    # Group analytics implementation
│   └── property-reference/ # Property types and defaults
├── reports/                # Analytics reports (12 files)
│   ├── funnels/            # Funnel analysis
│   └── apps/               # Signal, Impact, JQL
├── tracking-best-practices/ # Best practices for tracking (9 files)
├── cohort-sync/            # Cohort sync integrations (27 files)
│   └── integrations/       # Braze, Segment, etc.
├── data-pipelines/         # Data export pipelines (21 files)
│   ├── integrations/       # BigQuery, Snowflake, S3, etc.
│   └── old-pipelines/      # Legacy pipeline docs
├── features/               # Product features (14 files)
├── data-governance/        # Lexicon, data views, governance (7 files)
├── access-security/        # SSO, 2FA, login (8 files)
│   └── single-sign-on/     # Azure, Okta, Google, JumpCloud
├── session-replay/         # Session replay and heatmaps (2 files)
├── migration/              # Migrating from other analytics (3 files)
├── privacy/                # GDPR, data management (5 files)
├── boards/                 # Dashboards and boards (5 files)
├── orgs-and-projects/      # Org and project management (3 files)
├── users/                  # User profiles and cohorts (1 file)
└── featureflags/           # Feature flags (1 file)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/quickstart.mdx` |
| Install SDK | `contents/quickstart/install-mixpanel.mdx` |
| Track events | `contents/quickstart/capture-events/track-events.mdx` |
| JavaScript SDK | `contents/tracking-methods/sdks/javascript.mdx` |
| iOS SDK | `contents/tracking-methods/sdks/ios.mdx` |
| Android SDK | `contents/tracking-methods/sdks/android.mdx` |
| User identification | `contents/tracking-methods/id-management.mdx` |
| Funnels | `contents/reports/funnels/funnels-overview.mdx` |
| Cohorts | `contents/users/cohorts.mdx` |
| Data export | `contents/export-methods.mdx` |
| Feature flags | `contents/featureflags.mdx` |
| Session replay | `contents/session-replay.mdx` |

## Detailed Structure

### Root files (22 files)

| File | Description |
|------|-------------|
| `what-is-mixpanel.mdx` | Overview of Mixpanel |
| `quickstart.mdx` | Quickstart landing page |
| `tracking-methods.mdx` | Tracking methods overview |
| `data-structure.mdx` | Data structure overview |
| `reports.mdx` | Reports overview |
| `features.mdx` | Features overview |
| `export-methods.mdx` | Data export methods |
| `experiments.mdx` | A/B experiments |
| `featureflags.mdx` | Feature flags overview |
| `session-replay.mdx` | Session replay overview |
| `what-to-track.mdx` | Guidance on what events to track |
| `metric_tree.mdx` | Metric tree feature |
| `tracking-best-practices.mdx` | Tracking best practices overview |
| `data-governance.mdx` | Data governance overview |
| `cohort-sync.mdx` | Cohort sync overview |
| `data-pipelines.mdx` | Data pipelines overview |
| `access-security.mdx` | Access and security overview |
| `migration.md` | Migration overview |
| `boards.mdx` | Boards overview |
| `users.mdx` | Users overview |
| `orgs-and-projects.md` | Orgs and projects overview |
| `privacy.md` | Privacy overview |

### quickstart/ (9 files)

| File | Description |
|------|-------------|
| `install-mixpanel.mdx` | Installing Mixpanel SDK |
| `capture-events/track-events.mdx` | Track events manually |
| `capture-events/autocapture.mdx` | Autocapture events |
| `identify-users.mdx` | Identify users |
| `connect-your-data.mdx` | Connect data sources |
| `company-analytics.mdx` | Company/group analytics setup |
| `install-with-ai.mdx` | AI-assisted installation |
| `tips-and-tricks.mdx` | Quickstart tips |

### tracking-methods/ (58 files)

| File/Dir | Description |
|----------|-------------|
| `sdks/javascript.mdx` | JavaScript SDK |
| `sdks/javascript/javascript-flags.mdx` | JS feature flags |
| `sdks/javascript/javascript-replay.mdx` | JS session replay |
| `sdks/ios.mdx` | iOS Swift SDK |
| `sdks/swift.mdx` | Swift SDK |
| `sdks/swift/swift-flags.mdx` | Swift feature flags |
| `sdks/swift/swift-replay.mdx` | Swift session replay |
| `sdks/android.mdx` | Android SDK |
| `sdks/android/android-flags.mdx` | Android feature flags |
| `sdks/android/android-replay.mdx` | Android session replay |
| `sdks/react-native.mdx` | React Native SDK |
| `sdks/react-native/react-native-flags.mdx` | React Native feature flags |
| `sdks/react-native/react-native-replay.mdx` | React Native session replay |
| `sdks/flutter.mdx` | Flutter SDK |
| `sdks/flutter/flutter-flags.mdx` | Flutter feature flags |
| `sdks/nodejs.mdx` | Node.js SDK |
| `sdks/nodejs/nodejs-flags.mdx` | Node.js feature flags |
| `sdks/python.mdx` | Python SDK |
| `sdks/python/python-flags.mdx` | Python feature flags |
| `sdks/ruby.mdx` | Ruby SDK |
| `sdks/ruby/ruby-flags.mdx` | Ruby feature flags |
| `sdks/java/index.mdx` | Java SDK |
| `sdks/java/java-flags.mdx` | Java feature flags |
| `sdks/go.mdx` | Go SDK |
| `sdks/go/go-flags.mdx` | Go feature flags |
| `sdks/php.mdx` | PHP SDK |
| `sdks/unity.mdx` | Unity SDK |
| `id-management.mdx` | Identity management |
| `id-management/identifying-users-simplified.mdx` | Simplified ID merge |
| `id-management/identifying-users-original.mdx` | Original ID management |
| `id-management/migrating-to-simplified-id-merge-system.md` | ID merge migration |
| `integrations/segment.mdx` | Segment integration |
| `integrations/mparticle.mdx` | mParticle integration |
| `integrations/google-tag-manager.mdx` | GTM integration |
| `integrations/nextjs.mdx` | Next.js integration |
| `integrations/shopify.mdx` | Shopify integration |
| `integrations/stripe.mdx` | Stripe integration |
| `autocapture.mdx` | Autocapture |
| `warehouse-connectors.mdx` | Warehouse connectors |
| `choosing-the-right-method.mdx` | Choosing tracking method |
| `data-inspector.mdx` | Data inspector |

### data-structure/ (12 files)

| File | Description |
|------|-------------|
| `events-and-properties.mdx` | Events and properties |
| `user-profiles.mdx` | User profiles |
| `group-analytics.mdx` | Group analytics |
| `group-analytics/group-analytics-implementation.mdx` | Group analytics implementation |
| `group-analytics/group-analytics-faq.mdx` | Group analytics FAQ |
| `lookup-tables.mdx` | Lookup tables |
| `concepts.mdx` | Core concepts |
| `property-reference/properties.mdx` | Properties reference |
| `property-reference/default-properties.mdx` | Default properties |
| `property-reference/reserved-properties.mdx` | Reserved properties |
| `property-reference/data-type.mdx` | Data types |

### reports/ (12 files)

| File | Description |
|------|-------------|
| `insights.mdx` | Insights report |
| `funnels.mdx` | Funnels overview |
| `funnels/funnels-overview.mdx` | Funnels documentation |
| `funnels/funnels-quickstart.mdx` | Funnels quickstart |
| `funnels/funnels-advanced.mdx` | Advanced funnels |
| `funnels/funnels-faq.mdx` | Funnels FAQ |
| `retention.mdx` | Retention report |
| `flows.mdx` | Flows report |
| `apps/signal.mdx` | Signal app |
| `apps/impact.mdx` | Impact app |
| `apps/jql.md` | JQL (JavaScript query language) |

### tracking-best-practices/ (9 files)

| File | Description |
|------|-------------|
| `debugging.mdx` | Debugging tracking |
| `tracking-plan.mdx` | Creating a tracking plan |
| `server-side-best-practices.md` | Server-side tracking |
| `geolocation.mdx` | Geolocation tracking |
| `traffic-attribution.mdx` | Traffic attribution |
| `bot-traffic.mdx` | Filtering bot traffic |
| `warehouse-best-practices.mdx` | Warehouse tracking best practices |
| `developer-environments.md` | Developer environments |
| `hot-shard-limits.md` | Hot shard limits |

### cohort-sync/ (27 files)

| File/Dir | Description |
|----------|-------------|
| `integrations.mdx` | Cohort sync integrations list |
| `webhooks.mdx` | Cohort webhooks |
| `build-an-integration.md` | Build a cohort sync integration |
| `integrations/` | All cohort sync partner integrations (Braze, Segment, Iterable, etc.) |

### data-pipelines/ (21 files)

| File/Dir | Description |
|----------|-------------|
| `integrations/bigquery.mdx` | BigQuery pipeline |
| `integrations/snowflake.mdx` | Snowflake pipeline |
| `integrations/aws-s3.mdx` | AWS S3 pipeline |
| `integrations/databricks.mdx` | Databricks pipeline |
| `integrations/redshift-spectrum.mdx` | Redshift pipeline |
| `integrations/gcp-gcs.mdx` | GCP GCS pipeline |
| `integrations/azure-blob-storage.mdx` | Azure Blob pipeline |
| `json-pipelines.mdx` | JSON pipelines |
| `common-sql-queries.mdx` | Common SQL queries for pipelines |
| `old-pipelines/` | Legacy pipeline docs |

### features/ (14 files)

| File | Description |
|------|-------------|
| `computed-properties.mdx` | Computed properties |
| `custom-events.mdx` | Custom events |
| `custom-properties.mdx` | Custom properties |
| `custom-buckets.mdx` | Custom buckets |
| `sessions.mdx` | Sessions |
| `revenue-analytics.mdx` | Revenue analytics |
| `saved-metrics-and-behaviors.mdx` | Saved metrics and behaviors |
| `alerts.mdx` | Alerts |
| `annotations.mdx` | Annotations |
| `chart-customization.mdx` | Chart customization |
| `slack-integration.mdx` | Slack integration |
| `mcp.mdx` | MCP (Model Context Protocol) integration |
| `spark.mdx` | Spark feature |
| `embeds.md` | Embed reports |

### data-governance/ (7 files)

| File | Description |
|------|-------------|
| `lexicon.mdx` | Lexicon data dictionary |
| `data-views-and-classification.mdx` | Data views and classification |
| `data-clean-up.mdx` | Data cleanup tools |
| `data-standards.mdx` | Data standards |
| `event-approval.mdx` | Event approval workflow |
| `data-volume-monitoring.mdx` | Data volume monitoring |
| `warehouse-sync-monitoring.mdx` | Warehouse sync monitoring |

### access-security/ (8 files)

| File | Description |
|------|-------------|
| `login-methods.mdx` | Login methods |
| `single-sign-on.mdx` | SSO overview |
| `single-sign-on/okta.md` | Okta SSO |
| `single-sign-on/azure.md` | Azure SSO |
| `single-sign-on/google.mdx` | Google SSO |
| `single-sign-on/jumpcloud.md` | JumpCloud SSO |
| `single-sign-on/shared-sso.mdx` | Shared SSO |
| `two-factor-authentication.md` | Two-factor auth |

### session-replay/ (2 files)

| File | Description |
|------|-------------|
| `session-replay-privacy-controls.mdx` | Session replay privacy |
| `heatmaps.mdx` | Heatmaps |

### migration/ (3 files)

| File | Description |
|------|-------------|
| `google-analytics.md` | Migrate from Google Analytics |
| `amplitude.md` | Migrate from Amplitude |
| `adobe-analytics.md` | Migrate from Adobe Analytics |

### privacy/ (5 files)

| File | Description |
|------|-------------|
| `gdpr-compliance.md` | GDPR compliance |
| `end-user-data-management.md` | End user data management |
| `eu-residency.md` | EU data residency |
| `in-residency.mdx` | India data residency |
| `protecting-user-data.mdx` | Protecting user data |

### boards/ (5 files)

| File | Description |
|------|-------------|
| `sharing-and-permission.mdx` | Board sharing and permissions |
| `templates.mdx` | Board templates |
| `public-boards.mdx` | Public boards |
| `boards-on-boards.mdx` | Boards on boards |
| `move-boards.mdx` | Moving boards |

### orgs-and-projects/ (3 files)

| File | Description |
|------|-------------|
| `organizations.md` | Organizations management |
| `managing-projects.mdx` | Managing projects |
| `roles-and-permissions.mdx` | Roles and permissions |
