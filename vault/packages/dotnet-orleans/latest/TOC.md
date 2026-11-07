# dotnet-orleans Table of Contents

## Directory Map

```
contents/
  ./  # 3 files
  dashboard/  # 1 files
  deployment/  # 9 files
  grains/  # 19 files
  grains/event-sourcing/  # 8 files
  grains/grain-persistence/  # 5 files
  grains/grain-versioning/  # 5 files
  host/  # 6 files
  host/configuration-guide/  # 17 files
  host/monitoring/  # 3 files
  implementation/  # 8 files
  implementation/streams-implementation/  # 2 files
  quickstarts/  # 2 files
  resources/  # 3 files
  streaming/  # 6 files
  tutorials-and-samples/  # 5 files
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New to Orleans | `contents/overview.md` |
| First app | `contents/quickstarts/build-your-first-orleans-app.md` |
| Grains | `contents/grains/index.md` |
| Configuration | `contents/host/configuration-guide/index.md` |
| Persistence | `contents/grains/grain-persistence/index.md` |
| Streaming | `contents/streaming/index.md` |
| Deployment | `contents/deployment/index.md` |
| Troubleshooting | `contents/deployment/troubleshooting-deployments.md` |
| Migration | `contents/migration-guide.md` |

## Detailed Structure

### ./ (3 files)

| File | Description |
|------|-------------|
| `benefits.md` | Orleans benefits |
| `migration-guide.md` | Orleans migration guides |
| `overview.md` | Orleans overview |

### dashboard/ (1 files)

| File | Description |
|------|-------------|
| `index.md` | Orleans Dashboard |

### deployment/ (9 files)

| File | Description |
|------|-------------|
| `consul-deployment.md` | Use Consul as a membership provider |
| `deploy-to-azure-app-service.md` | Deploy Orleans to Azure App Service |
| `deploy-to-azure-container-apps.md` | Deploy Orleans to Azure Container Apps |
| `handling-failures.md` | Failure handling |
| `index.md` | Run an Orleans application |
| `kubernetes.md` | Kubernetes hosting |
| `service-fabric.md` | Host with Service Fabric |
| `troubleshooting-azure-cloud-services-deployments.md` | Troubleshoot Azure Cloud Service deployments |
| `troubleshooting-deployments.md` | Troubleshoot deployments |

### grains/ (19 files)

| File | Description |
|------|-------------|
| `cancellation-tokens.md` | Use cancellation tokens in Orleans grains |
| `code-generation.md` | Code generation |
| `external-tasks-and-grains.md` | External tasks and grains |
| `grain-extensions.md` | Grain extensions |
| `grain-identity.md` | Grain identity |
| `grain-lifecycle.md` | Grain lifecycle overview |
| `grain-placement-filtering.md` | Grain placement filtering |
| `grain-placement.md` | Grain placement |
| `grain-references.md` | Grain references |
| `grainservices.md` | Create a GrainService |
| `index.md` | Develop a grain |
| `interceptors.md` | Grain call filters |
| `observers.md` | Observers |
| `oneway.md` | One-way requests |
| `request-context.md` | Request context |
| `request-scheduling.md` | Request scheduling |
| `stateless-worker-grains.md` | Stateless worker grains |
| `timers-and-reminders.md` | Timers and reminders |
| `transactions.md` | Transactions in Orleans |

### grains/event-sourcing/ (8 files)

| File | Description |
|------|-------------|
| `event-sourcing-configuration.md` | Event sourcing configuration |
| `immediate-vs-delayed-confirmation.md` | Immediate and delayed confirmation |
| `index.md` | Event sourcing overview |
| `journaledgrain-basics.md` | The JournaledGrain API |
| `journaledgrain-diagnostics.md` | JournaledGrain diagnostics |
| `log-consistency-providers.md` | Log-consistency providers |
| `notifications.md` | Notifications |
| `replicated-instances.md` | Replicated grains |

### grains/grain-persistence/ (5 files)

| File | Description |
|------|-------------|
| `azure-cosmos-db.md` | Azure Cosmos DB grain persistence |
| `azure-storage.md` | Azure Storage grain persistence |
| `dynamodb-storage.md` | Amazon DynamoDB grain persistence |
| `index.md` | Grain persistence |
| `relational-storage.md` | ADO.NET grain persistence |

### grains/grain-versioning/ (5 files)

| File | Description |
|------|-------------|
| `backward-compatibility-guidelines.md` | Backward compatibility guidelines |
| `compatible-grains.md` | Compatible grains |
| `deploying-new-versions-of-grains.md` | Deploy new version of grains |
| `grain-versioning.md` | Grain interface versioning |
| `version-selector-strategy.md` | Version selector strategy |

### host/ (6 files)

| File | Description |
|------|-------------|
| `aspire-integration.md` | Orleans and Aspire integration |
| `client.md` | Orleans clients |
| `grain-directory.md` | Grain Directory |
| `heterogeneous-silos.md` | Heterogeneous silos overview |
| `silo-lifecycle.md` | Orleans silo lifecycles |
| `transport-layer-security.md` | Orleans Transport Layer Security (TLS) |

### host/configuration-guide/ (17 files)

| File | Description |
|------|-------------|
| `activation-collection.md` | Activation collection |
| `adonet-configuration.md` | ADO.NET Database Configuration |
| `client-configuration.md` | Client configuration |
| `configuring-ado-dot-net-providers.md` | Configure ADO.NET providers |
| `configuring-garbage-collection.md` | Configure .NET garbage collection |
| `index.md` | Orleans configuration guide |
| `list-of-options-classes.md` | List of options classes |
| `local-development-configuration.md` | Local development configuration |
| `serialization-configuration.md` | Serialization configuration in Orleans |
| `serialization-customization.md` | Serialization customization in Orleans |
| `serialization-immutability.md` | Serialization of immutable types in Orleans |
| `serialization.md` | Serialization in Orleans |
| `server-configuration.md` | Server configuration |
| `shutting-down-orleans.md` | Shut down Orleans silos |
| `silo-metadata.md` | Silo metadata |
| `startup-tasks.md` | Background Services and Startup Tasks |
| `typical-configurations.md` | Typical Configurations |

### host/monitoring/ (3 files)

| File | Description |
|------|-------------|
| `client-error-code-monitoring.md` | Client error code monitoring |
| `index.md` | Orleans observability |
| `silo-error-code-monitoring.md` | Silo error code monitoring |

### implementation/ (8 files)

| File | Description |
|------|-------------|
| `cluster-management.md` | Cluster management in Orleans |
| `grain-directory.md` | Grain Directory Implementation |
| `index.md` | Implementation details |
| `load-balancing.md` | Load balancing |
| `messaging-delivery-guarantees.md` | Messaging delivery guarantees |
| `orleans-lifecycle.md` | Orleans lifecycle |
| `scheduler.md` | Scheduling overview |
| `testing.md` | Unit testing |

### implementation/streams-implementation/ (2 files)

| File | Description |
|------|-------------|
| `azure-queue-streams.md` | Azure Queue streams overview |
| `index.md` | Streams implementation details |

### quickstarts/ (2 files)

| File | Description |
|------|-------------|
| `build-your-first-orleans-app.md` | Quickstart: Build your first Orleans app with ASP.NET Core |
| `deploy-scale-orleans-on-azure.md` | Deploy and scale an Orleans app on Azure |

### resources/ (3 files)

| File | Description |
|------|-------------|
| `best-practices.md` | Best practices in Orleans |
| `frequently-asked-questions.md` | Frequently asked questions |
| `nuget-packages.md` | Orleans NuGet packages |

### streaming/ (6 files)

| File | Description |
|------|-------------|
| `broadcast-channel.md` | Broadcast channels |
| `index.md` | Streaming with Orleans |
| `stream-providers.md` | Orleans stream providers |
| `streams-programming-apis.md` | Orleans streaming APIs |
| `streams-quick-start.md` | Orleans streaming quickstart |
| `streams-why.md` | Why streams in Orleans? |

### tutorials-and-samples/ (5 files)

| File | Description |
|------|-------------|
| `adventure.md` | Adventure game sample project |
| `custom-grain-storage.md` | Custom grain storage sample project |
| `index.md` | Orleans sample projects |
| `overview-helloworld.md` | Tutorial: Hello world |
| `tutorial-1.md` | Minimal Orleans app sample project |
