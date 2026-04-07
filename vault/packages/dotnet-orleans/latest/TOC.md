# dotnet-orleans Table of Contents

## Directory Map

```
contents/
├── overview.md                    # Overview of Orleans
├── benefits.md                    # Orleans benefits
├── migration-guide.md             # Migration guide between major versions
├── quickstarts/                   # Quick start guides (2 files)
├── grains/                        # Grain programming model (30 files)
│   ├── grain-persistence/         # State persistence providers
│   ├── grain-versioning/          # Grain versioning
│   └── event-sourcing/            # Event sourcing with JournaledGrain
├── host/                          # Silo hosting and configuration (28 files)
│   ├── configuration-guide/       # All configuration options
│   └── monitoring/                # Monitoring and error codes
├── streaming/                     # Orleans Streams (6 files)
├── deployment/                    # Deployment guides (9 files)
├── implementation/                # Internals and runtime details (10 files)
│   └── streams-implementation/    # Streams internals
├── dashboard/                     # Orleans Dashboard (1 file)
├── tutorials-and-samples/         # Tutorials and code samples (5 files)
└── resources/                     # Best practices, FAQ, NuGet packages (3 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New to Orleans | `contents/overview.md` |
| Quick start | `contents/quickstarts/build-your-first-orleans-app.md` |
| Grain basics | `contents/grains/index.md` |
| Configuration | `contents/host/configuration-guide/index.md` |
| Persistence | `contents/grains/grain-persistence/index.md` |
| Streaming | `contents/streaming/index.md` |
| Deployment | `contents/deployment/index.md` |
| Troubleshooting | `contents/deployment/troubleshooting-deployments.md` |
| Testing | `contents/implementation/testing.md` |
| Migration | `contents/migration-guide.md` |

## Detailed Structure

### Root (3 files)

| File | Description |
|------|-------------|
| `overview.md` | Orleans overview and introduction |
| `benefits.md` | Key benefits of Orleans |
| `migration-guide.md` | Migrating between major Orleans versions |

### quickstarts/ (2 files)

| File | Description |
|------|-------------|
| `build-your-first-orleans-app.md` | Build your first Orleans application |
| `deploy-scale-orleans-on-azure.md` | Deploy and scale Orleans on Azure |

### grains/ (13 files)

| File | Description |
|------|-------------|
| `index.md` | Grains overview |
| `grain-identity.md` | Grain identity and keys |
| `grain-lifecycle.md` | Grain activation and deactivation lifecycle |
| `grain-references.md` | Working with grain references |
| `grain-extensions.md` | Extending grains with interfaces |
| `grain-placement.md` | Grain placement strategies |
| `grain-placement-filtering.md` | Filtering grain placement |
| `grainservices.md` | Grain services (per-silo singletons) |
| `stateless-worker-grains.md` | Stateless worker grains |
| `timers-and-reminders.md` | Timers and persistent reminders |
| `observers.md` | Grain observers for push notifications |
| `interceptors.md` | Incoming and outgoing call filters |
| `request-context.md` | Request context for ambient data |
| `request-scheduling.md` | Request scheduling and reentrancy |
| `cancellation-tokens.md` | Cancellation token support |
| `transactions.md` | ACID transactions |
| `oneway.md` | One-way fire-and-forget messages |
| `code-generation.md` | Source code generation |
| `external-tasks-and-grains.md` | Using external tasks with grains |

### grains/grain-persistence/ (5 files)

| File | Description |
|------|-------------|
| `index.md` | Grain persistence overview |
| `azure-storage.md` | Azure Blob/Table storage provider |
| `azure-cosmos-db.md` | Azure Cosmos DB storage provider |
| `relational-storage.md` | ADO.NET relational storage provider |
| `dynamodb-storage.md` | Amazon DynamoDB storage provider |

### grains/grain-versioning/ (5 files)

| File | Description |
|------|-------------|
| `grain-versioning.md` | Grain versioning overview |
| `compatible-grains.md` | Defining compatible grain versions |
| `backward-compatibility-guidelines.md` | Guidelines for backward compatibility |
| `version-selector-strategy.md` | Version selector strategies |
| `deploying-new-versions-of-grains.md` | Deploying new grain versions |

### grains/event-sourcing/ (8 files)

| File | Description |
|------|-------------|
| `index.md` | Event sourcing overview |
| `journaledgrain-basics.md` | JournaledGrain basics |
| `journaledgrain-diagnostics.md` | JournaledGrain diagnostics |
| `event-sourcing-configuration.md` | Configuration for event sourcing |
| `log-consistency-providers.md` | Log consistency providers |
| `immediate-vs-delayed-confirmation.md` | Confirmation strategies |
| `notifications.md` | Event notifications |
| `replicated-instances.md` | Replicated grain instances |

### host/ (7 files)

| File | Description |
|------|-------------|
| `client.md` | Orleans client setup |
| `silo-lifecycle.md` | Silo startup and shutdown lifecycle |
| `grain-directory.md` | Custom grain directory |
| `heterogeneous-silos.md` | Multi-silo type clusters |
| `aspire-integration.md` | .NET Aspire integration |
| `transport-layer-security.md` | TLS/mTLS configuration |

### host/configuration-guide/ (14 files)

| File | Description |
|------|-------------|
| `index.md` | Configuration guide overview |
| `server-configuration.md` | Silo (server) configuration |
| `client-configuration.md` | Client configuration |
| `local-development-configuration.md` | Local development setup |
| `typical-configurations.md` | Common configuration patterns |
| `serialization.md` | Serialization overview |
| `serialization-configuration.md` | Configuring serializers |
| `serialization-customization.md` | Custom serializers |
| `serialization-immutability.md` | Immutable types and serialization |
| `adonet-configuration.md` | ADO.NET provider configuration |
| `configuring-ado-dot-net-providers.md` | Configuring ADO.NET providers |
| `activation-collection.md` | Grain activation collection (idle timeout) |
| `configuring-garbage-collection.md` | GC configuration |
| `list-of-options-classes.md` | All Orleans options classes reference |
| `silo-metadata.md` | Silo metadata |
| `startup-tasks.md` | Startup tasks |
| `shutting-down-orleans.md` | Graceful shutdown |

### host/monitoring/ (3 files)

| File | Description |
|------|-------------|
| `index.md` | Monitoring overview |
| `silo-error-code-monitoring.md` | Silo error codes reference |
| `client-error-code-monitoring.md` | Client error codes reference |

### streaming/ (6 files)

| File | Description |
|------|-------------|
| `index.md` | Streams overview |
| `streams-why.md` | Why use Orleans Streams |
| `streams-quick-start.md` | Streams quick start |
| `streams-programming-apis.md` | Streams programming APIs |
| `stream-providers.md` | Stream providers |
| `broadcast-channel.md` | Broadcast channels |

### deployment/ (9 files)

| File | Description |
|------|-------------|
| `index.md` | Deployment overview |
| `deploy-to-azure-app-service.md` | Deploy to Azure App Service |
| `deploy-to-azure-container-apps.md` | Deploy to Azure Container Apps |
| `kubernetes.md` | Deploy to Kubernetes |
| `service-fabric.md` | Deploy to Service Fabric |
| `consul-deployment.md` | Consul-based clustering deployment |
| `handling-failures.md` | Handling deployment failures |
| `troubleshooting-deployments.md` | Troubleshooting deployments |
| `troubleshooting-azure-cloud-services-deployments.md` | Troubleshoot Azure Cloud Services |

### implementation/ (8 files)

| File | Description |
|------|-------------|
| `index.md` | Implementation details overview |
| `cluster-management.md` | Cluster membership protocol |
| `grain-directory.md` | Grain directory internals |
| `orleans-lifecycle.md` | Orleans lifecycle internals |
| `scheduler.md` | Task scheduler internals |
| `messaging-delivery-guarantees.md` | Messaging delivery guarantees |
| `load-balancing.md` | Load balancing |
| `testing.md` | Testing Orleans applications |

### implementation/streams-implementation/ (2 files)

| File | Description |
|------|-------------|
| `index.md` | Streams implementation overview |
| `azure-queue-streams.md` | Azure Queue Streams implementation |

### dashboard/ (1 file)

| File | Description |
|------|-------------|
| `index.md` | Orleans built-in dashboard |

### tutorials-and-samples/ (5 files)

| File | Description |
|------|-------------|
| `index.md` | Tutorials and samples overview |
| `tutorial-1.md` | Tutorial: Hello World |
| `overview-helloworld.md` | Hello World application overview |
| `adventure.md` | Adventure game sample |
| `custom-grain-storage.md` | Custom grain storage sample |

### resources/ (3 files)

| File | Description |
|------|-------------|
| `best-practices.md` | Orleans best practices |
| `frequently-asked-questions.md` | FAQ |
| `nuget-packages.md` | NuGet packages reference |
