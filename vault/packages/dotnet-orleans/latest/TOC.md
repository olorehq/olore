# dotnet-orleans Table of Contents

## Directory Map

```
contents/
├── overview.md                          # Orleans overview
├── benefits.md                          # Key benefits
├── migration-guide.md                   # Version migration guide
├── quickstarts/                         # Getting started (2 files)
├── dashboard/                           # Orleans dashboard (1 file)
├── grains/                              # Grain fundamentals (19 files)
│   ├── event-sourcing/                  # JournaledGrain / event sourcing (8 files)
│   ├── grain-persistence/               # State persistence providers (5 files)
│   └── grain-versioning/                # Grain versioning strategies (5 files)
├── host/                                # Silo / client hosting (6 files)
│   ├── configuration-guide/             # Full configuration reference (17 files)
│   └── monitoring/                      # Error codes and telemetry (3 files)
├── streaming/                           # Streaming APIs and providers (6 files)
├── deployment/                          # Deployment guides (9 files)
├── implementation/                      # Internals and runtime (8 files)
│   └── streams-implementation/          # Stream internals (2 files)
├── resources/                           # Best practices, FAQ, packages (3 files)
└── tutorials-and-samples/               # Sample projects (4 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New to Orleans | `contents/overview.md` |
| First app | `contents/quickstarts/build-your-first-orleans-app.md` |
| Grain fundamentals | `contents/grains/index.md` |
| Silo/client setup | `contents/host/configuration-guide/index.md` |
| Persistence | `contents/grains/grain-persistence/index.md` |
| Streaming | `contents/streaming/index.md` |
| Deployment | `contents/deployment/index.md` |
| Troubleshooting | `contents/deployment/troubleshooting-deployments.md` |
| Version migration | `contents/migration-guide.md` |
| NuGet packages | `contents/resources/nuget-packages.md` |

## Detailed Structure

### Root (3 files)

| File | Description |
|------|-------------|
| `overview.md` | What is Orleans, virtual actor model, grains, silos |
| `benefits.md` | Key benefits: productivity, scalability, availability |
| `migration-guide.md` | Migrate between Orleans major versions (7.0 → 10.0) |

### quickstarts/ (2 files)

| File | Description |
|------|-------------|
| `quickstarts/build-your-first-orleans-app.md` | Hello World quickstart |
| `quickstarts/deploy-scale-orleans-on-azure.md` | Deploy and scale on Azure |

### dashboard/ (1 file)

| File | Description |
|------|-------------|
| `dashboard/index.md` | Orleans built-in dashboard overview |

### grains/ (19 files)

| File | Description |
|------|-------------|
| `grains/index.md` | Grain overview and interface definition |
| `grains/grain-identity.md` | Grain keys and identity types |
| `grains/grain-lifecycle.md` | Grain activation, deactivation, lifecycle stages |
| `grains/grain-references.md` | Obtaining and using grain references |
| `grains/grain-extensions.md` | Extending grains with extra interfaces |
| `grains/grainservices.md` | Singleton grain services per silo |
| `grains/grain-placement.md` | Placement strategies |
| `grains/grain-placement-filtering.md` | Filtering grain placement |
| `grains/observers.md` | Push notifications via grain observers |
| `grains/interceptors.md` | Incoming and outgoing call filters |
| `grains/request-context.md` | Passing ambient data with requests |
| `grains/request-scheduling.md` | Reentrancy and request scheduling |
| `grains/oneway.md` | Fire-and-forget one-way requests |
| `grains/stateless-worker-grains.md` | Stateless worker grains for parallelism |
| `grains/timers-and-reminders.md` | Grain timers and durable reminders |
| `grains/transactions.md` | ACID distributed transactions |
| `grains/cancellation-tokens.md` | Cooperative cancellation in grains |
| `grains/code-generation.md` | Source generator and proxy code generation |
| `grains/external-tasks-and-grains.md` | Scheduling external tasks from grains |

### grains/event-sourcing/ (8 files)

| File | Description |
|------|-------------|
| `grains/event-sourcing/index.md` | Event sourcing overview |
| `grains/event-sourcing/journaledgrain-basics.md` | JournaledGrain API basics |
| `grains/event-sourcing/journaledgrain-diagnostics.md` | Diagnostics and debugging |
| `grains/event-sourcing/event-sourcing-configuration.md` | Configuration options |
| `grains/event-sourcing/log-consistency-providers.md` | Built-in log consistency providers |
| `grains/event-sourcing/immediate-vs-delayed-confirmation.md` | Confirmation modes |
| `grains/event-sourcing/notifications.md` | Cross-instance notifications |
| `grains/event-sourcing/replicated-instances.md` | Multi-cluster replication |

### grains/grain-persistence/ (5 files)

| File | Description |
|------|-------------|
| `grains/grain-persistence/index.md` | Grain state persistence API |
| `grains/grain-persistence/azure-storage.md` | Azure Blob and Table storage provider |
| `grains/grain-persistence/azure-cosmos-db.md` | Azure Cosmos DB storage provider |
| `grains/grain-persistence/dynamodb-storage.md` | AWS DynamoDB storage provider |
| `grains/grain-persistence/relational-storage.md` | ADO.NET relational storage provider |

### grains/grain-versioning/ (5 files)

| File | Description |
|------|-------------|
| `grains/grain-versioning/grain-versioning.md` | Grain interface versioning overview |
| `grains/grain-versioning/compatible-grains.md` | Compatibility rules between versions |
| `grains/grain-versioning/backward-compatibility-guidelines.md` | Guidelines for backward-compatible changes |
| `grains/grain-versioning/version-selector-strategy.md` | Strategies for routing to grain versions |
| `grains/grain-versioning/deploying-new-versions-of-grains.md` | Rolling upgrade deployment |

### host/ (6 files)

| File | Description |
|------|-------------|
| `host/client.md` | Connecting clients to the cluster |
| `host/silo-lifecycle.md` | Silo startup, shutdown, lifecycle |
| `host/grain-directory.md` | Custom grain directory configuration |
| `host/heterogeneous-silos.md` | Multi-grain-type silo deployments |
| `host/transport-layer-security.md` | TLS configuration for silo-to-silo communication |
| `host/aspire-integration.md` | .NET Aspire integration |

### host/configuration-guide/ (17 files)

| File | Description |
|------|-------------|
| `host/configuration-guide/index.md` | Configuration overview |
| `host/configuration-guide/local-development-configuration.md` | Local dev / localhost clustering |
| `host/configuration-guide/server-configuration.md` | Silo builder configuration |
| `host/configuration-guide/client-configuration.md` | Client builder configuration |
| `host/configuration-guide/typical-configurations.md` | Common configuration patterns |
| `host/configuration-guide/list-of-options-classes.md` | All options classes reference |
| `host/configuration-guide/startup-tasks.md` | Startup task registration |
| `host/configuration-guide/activation-collection.md` | Idle grain deactivation tuning |
| `host/configuration-guide/silo-metadata.md` | Silo metadata and properties |
| `host/configuration-guide/shutting-down-orleans.md` | Graceful shutdown |
| `host/configuration-guide/configuring-garbage-collection.md` | GC configuration |
| `host/configuration-guide/serialization.md` | Serialization overview |
| `host/configuration-guide/serialization-configuration.md` | Serializer configuration |
| `host/configuration-guide/serialization-customization.md` | Custom serializers |
| `host/configuration-guide/serialization-immutability.md` | Immutable data serialization |
| `host/configuration-guide/adonet-configuration.md` | ADO.NET provider configuration |
| `host/configuration-guide/configuring-ado-dot-net-providers.md` | ADO.NET detailed setup |

### host/monitoring/ (3 files)

| File | Description |
|------|-------------|
| `host/monitoring/index.md` | Monitoring overview and telemetry |
| `host/monitoring/silo-error-code-monitoring.md` | Silo error codes reference |
| `host/monitoring/client-error-code-monitoring.md` | Client error codes reference |

### streaming/ (6 files)

| File | Description |
|------|-------------|
| `streaming/index.md` | Streams overview |
| `streaming/streams-why.md` | Why use Orleans streams |
| `streaming/streams-quick-start.md` | Streams quick start |
| `streaming/streams-programming-apis.md` | Full streaming programming API |
| `streaming/stream-providers.md` | Stream provider configuration |
| `streaming/broadcast-channel.md` | Broadcast channels for fan-out |

### deployment/ (9 files)

| File | Description |
|------|-------------|
| `deployment/index.md` | Deployment overview |
| `deployment/deploy-to-azure-app-service.md` | Deploy to Azure App Service |
| `deployment/deploy-to-azure-container-apps.md` | Deploy to Azure Container Apps |
| `deployment/kubernetes.md` | Deploy to Kubernetes |
| `deployment/service-fabric.md` | Deploy to Service Fabric |
| `deployment/consul-deployment.md` | Consul-based membership provider |
| `deployment/handling-failures.md` | Failure handling strategies |
| `deployment/troubleshooting-deployments.md` | General deployment troubleshooting |
| `deployment/troubleshooting-azure-cloud-services-deployments.md` | Azure-specific troubleshooting |

### implementation/ (8 files)

| File | Description |
|------|-------------|
| `implementation/index.md` | Runtime internals overview |
| `implementation/cluster-management.md` | Cluster membership protocol |
| `implementation/grain-directory.md` | Distributed grain directory internals |
| `implementation/load-balancing.md` | Load balancing and silo selection |
| `implementation/messaging-delivery-guarantees.md` | Message delivery guarantees |
| `implementation/orleans-lifecycle.md` | Orleans lifecycle system |
| `implementation/scheduler.md` | Task scheduler internals |
| `implementation/testing.md` | Unit testing Orleans applications |

### implementation/streams-implementation/ (2 files)

| File | Description |
|------|-------------|
| `implementation/streams-implementation/index.md` | Streams runtime internals |
| `implementation/streams-implementation/azure-queue-streams.md` | Azure Queue stream provider internals |

### resources/ (3 files)

| File | Description |
|------|-------------|
| `resources/best-practices.md` | Best practices for Orleans development |
| `resources/frequently-asked-questions.md` | FAQ |
| `resources/nuget-packages.md` | NuGet package reference |

### tutorials-and-samples/ (4 files)

| File | Description |
|------|-------------|
| `tutorials-and-samples/index.md` | Tutorials and samples overview |
| `tutorials-and-samples/overview-helloworld.md` | Hello World tutorial overview |
| `tutorials-and-samples/tutorial-1.md` | Tutorial: building a minimal grain app |
| `tutorials-and-samples/custom-grain-storage.md` | Tutorial: implementing custom storage |
