# mixpanel Table of Contents

## Directory Map

```
contents/
├── quickstart/                      # Installation, setup, and first steps (8 files)
├── tracking-methods/                # SDKs, integrations, id management (30 files)
│   ├── sdks/                        # Per-language SDK docs (20 files)
│   │   ├── android/
│   │   ├── flutter/
│   │   ├── go/
│   │   ├── ios/
│   │   ├── java/
│   │   ├── javascript/
│   │   ├── nodejs/
│   │   ├── python/
│   │   ├── react-native/
│   │   ├── ruby/
│   │   └── swift/
│   └── integrations/               # Third-party tracking integrations (18 files)
├── data-structure/                  # Data model, events, properties, profiles (9 files)
├── reports/                         # Insights, Funnels, Flows, Retention (10 files)
│   ├── apps/                        # JQL, Impact, Signal
│   └── funnels/
├── tracking-best-practices/         # Debugging, bot filtering, geolocation (8 files)
├── data-pipelines/                  # Export to warehouses and cloud storage (13 files)
│   ├── integrations/                # BigQuery, Snowflake, Redshift, S3, etc.
│   └── old-pipelines/              # Deprecated API-based pipelines
├── cohort-sync/                     # Audience syncing to ad/marketing tools (24 files)
│   └── integrations/               # Per-platform cohort sync guides
├── data-governance/                 # Lexicon, data views, event approval (6 files)
├── access-security/                 # SSO, 2FA, audit log (6 files)
│   └── single-sign-on/
├── users/                           # User profiles and cohorts (2 files)
├── privacy/                         # GDPR, EU/India residency, data mgmt (5 files)
├── orgs-and-projects/               # Orgs, projects, roles, permissions (3 files)
├── session-replay/                  # Session replay + heatmaps + privacy (3 files)
├── boards/                          # Dashboards and boards (5 files)
├── migration/                       # Migrating from Adobe, Amplitude, GA (4 files)
├── features/                        # Cross-cutting features (12 files)
└── (root files)                     # Overviews and single-page docs (20 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user / quickstart | `contents/quickstart/install-mixpanel.mdx` |
| Track events (JS) | `contents/tracking-methods/sdks/javascript.mdx` |
| Track events (Python) | `contents/tracking-methods/sdks/python.mdx` |
| Track events (Node.js) | `contents/tracking-methods/sdks/nodejs.mdx` |
| Track events (iOS) | `contents/tracking-methods/sdks/ios.mdx` |
| Track events (Android) | `contents/tracking-methods/sdks/android.mdx` |
| Identity management | `contents/tracking-methods/id-management.mdx` |
| Event data model | `contents/data-structure/events-and-properties.mdx` |
| User profiles | `contents/data-structure/user-profiles.mdx` |
| Funnels | `contents/reports/funnels/funnels-overview.mdx` |
| Retention analysis | `contents/reports/retention.mdx` |
| Cohort sync | `contents/cohort-sync.mdx` |
| Data pipelines (export) | `contents/data-pipelines.mdx` |
| Debugging | `contents/tracking-best-practices/debugging.mdx` |

## Detailed Structure

### quickstart/ (8 files)

| File | Description |
|------|-------------|
| `quickstart/install-mixpanel.mdx` | Install Mixpanel SDK |
| `quickstart/identify-users.mdx` | User identification setup |
| `quickstart/capture-events.mdx` | Track your first events |
| `quickstart/capture-events/autocapture.mdx` | Auto-capture setup |
| `quickstart/capture-events/track-events.mdx` | Manual event tracking |
| `quickstart/connect-your-data.mdx` | Connecting data sources |
| `quickstart/company-analytics.mdx` | Company-level analytics setup |
| `quickstart/install-with-ai.mdx` | AI-assisted installation |

### tracking-methods/ (root, 5 files)

| File | Description |
|------|-------------|
| `tracking-methods/choosing-the-right-method.mdx` | Compare SDK vs. server vs. warehouse |
| `tracking-methods/sdks.mdx` | SDK overview and list |
| `tracking-methods/autocapture.mdx` | Autocapture feature docs |
| `tracking-methods/id-management.mdx` | Identity management overview |
| `tracking-methods/warehouse-connectors.mdx` | Warehouse connector overview |
| `tracking-methods/integrations.mdx` | Integration overview |
| `tracking-methods/data-inspector.mdx` | Data inspector tool |

### tracking-methods/sdks/ (20 files)

| File | Description |
|------|-------------|
| `tracking-methods/sdks/javascript.mdx` | JavaScript SDK |
| `tracking-methods/sdks/javascript/javascript-flags.mdx` | JS feature flags |
| `tracking-methods/sdks/javascript/javascript-openfeature.mdx` | JS OpenFeature integration |
| `tracking-methods/sdks/javascript/javascript-replay.mdx` | JS session replay |
| `tracking-methods/sdks/nodejs.mdx` | Node.js SDK |
| `tracking-methods/sdks/nodejs/nodejs-flags.mdx` | Node.js feature flags |
| `tracking-methods/sdks/nodejs/nodejs-openfeature.mdx` | Node.js OpenFeature integration |
| `tracking-methods/sdks/python.mdx` | Python SDK |
| `tracking-methods/sdks/python/python-flags.mdx` | Python feature flags |
| `tracking-methods/sdks/python/python-openfeature.mdx` | Python OpenFeature integration |
| `tracking-methods/sdks/ios.mdx` | iOS Swift SDK |
| `tracking-methods/sdks/swift.mdx` | Swift SDK |
| `tracking-methods/sdks/swift/swift-flags.mdx` | Swift feature flags |
| `tracking-methods/sdks/swift/swift-openfeature.mdx` | Swift OpenFeature integration |
| `tracking-methods/sdks/swift/swift-replay.mdx` | Swift session replay |
| `tracking-methods/sdks/android.mdx` | Android SDK |
| `tracking-methods/sdks/android/android-flags.mdx` | Android feature flags |
| `tracking-methods/sdks/android/android-openfeature.mdx` | Android OpenFeature integration |
| `tracking-methods/sdks/android/android-replay.mdx` | Android session replay |
| `tracking-methods/sdks/react-native.mdx` | React Native SDK |
| `tracking-methods/sdks/react-native/react-native-flags.mdx` | React Native feature flags |
| `tracking-methods/sdks/react-native/react-native-replay.mdx` | React Native session replay |
| `tracking-methods/sdks/flutter.mdx` | Flutter SDK |
| `tracking-methods/sdks/flutter/flutter-flags.mdx` | Flutter feature flags |
| `tracking-methods/sdks/flutter/flutter-replay.mdx` | Flutter session replay |
| `tracking-methods/sdks/go.mdx` | Go SDK |
| `tracking-methods/sdks/go/go-flags.mdx` | Go feature flags |
| `tracking-methods/sdks/go/go-openfeature.mdx` | Go OpenFeature integration |
| `tracking-methods/sdks/java/index.mdx` | Java SDK |
| `tracking-methods/sdks/java/java-flags.mdx` | Java feature flags |
| `tracking-methods/sdks/java/java-openfeature.mdx` | Java OpenFeature integration |
| `tracking-methods/sdks/ruby.mdx` | Ruby SDK |
| `tracking-methods/sdks/ruby/ruby-flags.mdx` | Ruby feature flags |
| `tracking-methods/sdks/ruby/ruby-openfeature.mdx` | Ruby OpenFeature integration |
| `tracking-methods/sdks/php.mdx` | PHP SDK |
| `tracking-methods/sdks/unity.mdx` | Unity SDK |

### tracking-methods/integrations/ (18 files)

| File | Description |
|------|-------------|
| `tracking-methods/integrations/segment.mdx` | Segment integration |
| `tracking-methods/integrations/mparticle.mdx` | mParticle integration |
| `tracking-methods/integrations/rudderstack.md` | RudderStack integration |
| `tracking-methods/integrations/google-tag-manager.mdx` | Google Tag Manager |
| `tracking-methods/integrations/nextjs.mdx` | Next.js integration |
| `tracking-methods/integrations/shopify.mdx` | Shopify integration |
| `tracking-methods/integrations/stripe.mdx` | Stripe integration |
| `tracking-methods/integrations/launchdarkly.md` | LaunchDarkly integration |
| `tracking-methods/integrations/langfuse.mdx` | Langfuse LLM observability |
| `tracking-methods/integrations/google-sheets.mdx` | Google Sheets integration |
| `tracking-methods/integrations/google-pubsub.md` | Google Pub/Sub |
| `tracking-methods/integrations/google-cloud-storage.md` | Google Cloud Storage |
| `tracking-methods/integrations/amazon-s3.md` | Amazon S3 |
| `tracking-methods/integrations/aws-kafka.md` | AWS Kafka |
| `tracking-methods/integrations/snowplow.md` | Snowplow |
| `tracking-methods/integrations/tealium.md` | Tealium |
| `tracking-methods/integrations/freshpaint.md` | Freshpaint |
| `tracking-methods/integrations/ad-spend.mdx` | Ad spend tracking |
| `tracking-methods/integrations/mobile-attribution-tracking.md` | Mobile attribution |
| `tracking-methods/integrations/cms-ecommerce.mdx` | CMS and ecommerce |
| `tracking-methods/integrations/vendo.mdx` | Vendo integration |

### tracking-methods/id-management/ (3 files)

| File | Description |
|------|-------------|
| `tracking-methods/id-management/identifying-users-simplified.mdx` | Simplified ID merge system |
| `tracking-methods/id-management/identifying-users-original.mdx` | Original ID merge system |
| `tracking-methods/id-management/migrating-to-simplified-id-merge-system.md` | Migrate to simplified ID |

### data-structure/ (9 files)

| File | Description |
|------|-------------|
| `data-structure/concepts.mdx` | Core data model concepts |
| `data-structure/events-and-properties.mdx` | Events and properties reference |
| `data-structure/user-profiles.mdx` | User profiles |
| `data-structure/group-analytics.mdx` | Group analytics overview |
| `data-structure/group-analytics/group-analytics-implementation.mdx` | Group analytics implementation |
| `data-structure/group-analytics/group-analytics-faq.mdx` | Group analytics FAQ |
| `data-structure/lookup-tables.mdx` | Lookup tables |
| `data-structure/property-reference.mdx` | Property reference overview |
| `data-structure/property-reference/properties.mdx` | Properties reference |
| `data-structure/property-reference/default-properties.mdx` | Default properties |
| `data-structure/property-reference/reserved-properties.mdx` | Reserved properties |
| `data-structure/property-reference/data-type.mdx` | Data types |

### reports/ (10 files)

| File | Description |
|------|-------------|
| `reports.mdx` | Reports overview |
| `reports/insights.mdx` | Insights report |
| `reports/funnels.mdx` | Funnels overview |
| `reports/funnels/funnels-overview.mdx` | Funnels detailed overview |
| `reports/funnels/funnels-quickstart.mdx` | Funnels quickstart |
| `reports/funnels/funnels-advanced.mdx` | Advanced funnels |
| `reports/funnels/funnels-faq.mdx` | Funnels FAQ |
| `reports/retention.mdx` | Retention analysis |
| `reports/flows.mdx` | Flows report |
| `reports/apps.mdx` | Apps overview |
| `reports/apps/impact.mdx` | Impact report |
| `reports/apps/signal.mdx` | Signal report |
| `reports/apps/jql.md` | JQL reference |

### tracking-best-practices/ (8 files)

| File | Description |
|------|-------------|
| `tracking-best-practices/tracking-plan.mdx` | Creating a tracking plan |
| `tracking-best-practices/server-side-best-practices.md` | Server-side tracking best practices |
| `tracking-best-practices/debugging.mdx` | Debugging event tracking |
| `tracking-best-practices/developer-environments.md` | Managing dev environments |
| `tracking-best-practices/bot-traffic.mdx` | Filtering bot traffic |
| `tracking-best-practices/geolocation.mdx` | Geolocation tracking |
| `tracking-best-practices/hot-shard-limits.md` | Hot shard limits |
| `tracking-best-practices/traffic-attribution.mdx` | Traffic attribution |
| `tracking-best-practices/warehouse-best-practices.mdx` | Warehouse tracking best practices |

### data-pipelines/ (13 files)

| File | Description |
|------|-------------|
| `data-pipelines.mdx` | Data Pipelines overview |
| `data-pipelines/json-pipelines.mdx` | JSON pipelines |
| `data-pipelines/common-sql-queries.mdx` | Common SQL queries for exported data |
| `data-pipelines/integrations.mdx` | Pipeline integrations overview |
| `data-pipelines/integrations/bigquery.mdx` | BigQuery pipeline |
| `data-pipelines/integrations/snowflake.mdx` | Snowflake pipeline |
| `data-pipelines/integrations/redshift-spectrum.mdx` | Redshift Spectrum pipeline |
| `data-pipelines/integrations/aws-s3.mdx` | AWS S3 pipeline |
| `data-pipelines/integrations/gcp-gcs.mdx` | GCP/GCS pipeline |
| `data-pipelines/integrations/azure-blob-storage.mdx` | Azure Blob Storage pipeline |
| `data-pipelines/integrations/databricks.mdx` | Databricks pipeline |
| `data-pipelines/old-pipelines.mdx` | Deprecated API-based pipelines |
| `data-pipelines/old-pipelines/integrations/raw-aws-pipeline.mdx` | Raw AWS pipeline (deprecated) |
| `data-pipelines/old-pipelines/integrations/raw-azure-pipeline.mdx` | Raw Azure pipeline (deprecated) |
| `data-pipelines/old-pipelines/integrations/raw-gcs-pipeline.mdx` | Raw GCS pipeline (deprecated) |
| `data-pipelines/old-pipelines/integrations/schematized-aws-pipeline.mdx` | Schematized AWS (deprecated) |
| `data-pipelines/old-pipelines/integrations/schematized-azure-pipeline.mdx` | Schematized Azure (deprecated) |
| `data-pipelines/old-pipelines/integrations/schematized-bigquery-pipeline.mdx` | Schematized BigQuery (deprecated) |
| `data-pipelines/old-pipelines/integrations/schematized-gcs-pipeline.mdx` | Schematized GCS (deprecated) |
| `data-pipelines/old-pipelines/integrations/schematized-snowflake-pipeline.mdx` | Schematized Snowflake (deprecated) |
| `data-pipelines/old-pipelines/schematized-export-pipeline.mdx` | Schematized export pipeline (deprecated) |

### cohort-sync/ (24 files)

| File | Description |
|------|-------------|
| `cohort-sync.mdx` | Cohort sync overview |
| `cohort-sync/webhooks.mdx` | Webhook-based cohort sync |
| `cohort-sync/build-an-integration.md` | Building a cohort sync integration |
| `cohort-sync/integrations.mdx` | Available cohort sync integrations |
| `cohort-sync/integrations/braze.mdx` | Braze |
| `cohort-sync/integrations/segment.mdx` | Segment |
| `cohort-sync/integrations/facebook-ads.mdx` | Facebook Ads |
| `cohort-sync/integrations/google-ads.mdx` | Google Ads |
| `cohort-sync/integrations/iterable.mdx` | Iterable |
| `cohort-sync/integrations/mailchimp.mdx` | Mailchimp |
| `cohort-sync/integrations/marketo.mdx` | Marketo |
| `cohort-sync/integrations/mparticle.mdx` | mParticle |
| `cohort-sync/integrations/onesignal.mdx` | OneSignal |
| `cohort-sync/integrations/salesforce-marketing-cloud.mdx` | Salesforce Marketing Cloud |
| `cohort-sync/integrations/abtasty.mdx` | AB Tasty |
| `cohort-sync/integrations/appcues.mdx` | Appcues |
| `cohort-sync/integrations/apptimize.mdx` | Apptimize |
| `cohort-sync/integrations/airship.mdx` | Airship |
| `cohort-sync/integrations/chameleon.mdx` | Chameleon |
| `cohort-sync/integrations/clevertap.mdx` | CleverTap |
| `cohort-sync/integrations/insider.mdx` | Insider |
| `cohort-sync/integrations/kameleoon.mdx` | Kameleoon |
| `cohort-sync/integrations/leanplum.mdx` | Leanplum |
| `cohort-sync/integrations/moengage.mdx` | MoEngage |
| `cohort-sync/integrations/taplytics.mdx` | Taplytics |
| `cohort-sync/integrations/vwo.mdx` | VWO |
| `cohort-sync/integrations/webengage.mdx` | WebEngage |
| `cohort-sync/integrations/xtremepush.mdx` | XtremePush |

### data-governance/ (6 files)

| File | Description |
|------|-------------|
| `data-governance/lexicon.mdx` | Lexicon data dictionary |
| `data-governance/data-views-and-classification.mdx` | Data views and classification |
| `data-governance/data-standards.mdx` | Data standards |
| `data-governance/event-approval.mdx` | Event approval workflows |
| `data-governance/data-volume-monitoring.mdx` | Data volume monitoring |
| `data-governance/data-clean-up.mdx` | Data cleanup tools |
| `data-governance/warehouse-sync-monitoring.mdx` | Warehouse sync monitoring |

### access-security/ (6 files)

| File | Description |
|------|-------------|
| `access-security/login-methods.mdx` | Login methods |
| `access-security/two-factor-authentication.mdx` | Two-factor authentication |
| `access-security/single-sign-on.mdx` | SSO overview |
| `access-security/single-sign-on/okta.md` | Okta SSO setup |
| `access-security/single-sign-on/azure.md` | Azure AD SSO setup |
| `access-security/single-sign-on/google.mdx` | Google SSO setup |
| `access-security/single-sign-on/jumpcloud.md` | JumpCloud SSO setup |
| `access-security/single-sign-on/shared-sso.mdx` | Shared SSO |
| `access-security/audit-log.mdx` | Audit log overview |
| `access-security/audit-log/audit-log-reference.md` | Audit log reference |

### users/ (2 files)

| File | Description |
|------|-------------|
| `users.mdx` | Users overview |
| `users/cohorts.mdx` | Cohorts |

### privacy/ (5 files)

| File | Description |
|------|-------------|
| `privacy.md` | Privacy overview |
| `privacy/gdpr-compliance.md` | GDPR compliance |
| `privacy/eu-residency.md` | EU data residency |
| `privacy/in-residency.mdx` | India data residency |
| `privacy/end-user-data-management.md` | End-user data management (deletion, opt-out) |
| `privacy/protecting-user-data.mdx` | Protecting user data |

### orgs-and-projects/ (3 files)

| File | Description |
|------|-------------|
| `orgs-and-projects.md` | Orgs and projects overview |
| `orgs-and-projects/organizations.mdx` | Organizations |
| `orgs-and-projects/managing-projects.mdx` | Managing projects |
| `orgs-and-projects/roles-and-permissions.mdx` | Roles and permissions |

### session-replay/ (3 files)

| File | Description |
|------|-------------|
| `session-replay.mdx` | Session replay overview |
| `session-replay/heatmaps.mdx` | Heatmaps |
| `session-replay/session-replay-privacy-controls.mdx` | Privacy controls for session replay |

### boards/ (5 files)

| File | Description |
|------|-------------|
| `boards.mdx` | Boards overview |
| `boards/templates.mdx` | Board templates |
| `boards/public-boards.mdx` | Public boards |
| `boards/sharing-and-permission.mdx` | Board sharing and permissions |
| `boards/boards-on-boards.mdx` | Nested boards |
| `boards/move-boards.mdx` | Moving boards |

### migration/ (4 files)

| File | Description |
|------|-------------|
| `migration.md` | Migration overview |
| `migration/amplitude.md` | Migrate from Amplitude |
| `migration/google-analytics.mdx` | Migrate from Google Analytics |
| `migration/adobe-analytics.md` | Migrate from Adobe Analytics |

### features/ (12 files)

| File | Description |
|------|-------------|
| `features/alerts.mdx` | Alerts |
| `features/annotations.mdx` | Annotations |
| `features/chart-customization.mdx` | Chart customization |
| `features/comments.mdx` | Comments |
| `features/computed-properties.mdx` | Computed properties |
| `features/custom-buckets.mdx` | Custom buckets |
| `features/custom-events.mdx` | Custom events |
| `features/custom-properties.mdx` | Custom properties |
| `features/embeds.md` | Embeds |
| `features/revenue-analytics.mdx` | Revenue analytics |
| `features/saved-metrics-and-behaviors.mdx` | Saved metrics and behaviors |
| `features/sessions.mdx` | Sessions |
| `features/slack-integration.mdx` | Slack integration |
| `features/spark.mdx` | Spark AI features |

### Root files

| File | Description |
|------|-------------|
| `what-is-mixpanel.mdx` | Mixpanel product overview |
| `what-to-track.mdx` | What events to track |
| `export-methods.mdx` | Export methods overview |
| `tracking-methods.mdx` | Tracking methods overview |
| `data-structure.mdx` | Data structure overview |
| `data-governance.mdx` | Data governance overview |
| `experiments.mdx` | A/B experiments |
| `featureflags.mdx` | Feature flags overview |
| `featureflags/runtime-events.mdx` | Feature flag runtime events |
| `session-replay.mdx` | Session replay overview |
| `root-cause-analysis.mdx` | Root cause analysis |
| `agentic-automations.mdx` | Agentic automations |
| `mcp.mdx` | MCP integration |
| `mixpanel-agent.mdx` | Mixpanel AI agent |
| `mixpanel-headless.mdx` | Headless Mixpanel |
| `metric_tree.mdx` | Metric tree |
| `business-context.mdx` | Business context |
| `quickstart.mdx` | Quickstart overview |
