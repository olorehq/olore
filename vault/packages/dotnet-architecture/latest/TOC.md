# dotnet-architecture Table of Contents

## Directory Map

```
contents/
├── microservices/                                    # .NET Microservices architecture guide (73 files)
│   ├── architect-microservice-container-applications/  # Microservice design patterns
│   ├── container-docker-introduction/               # Docker fundamentals
│   ├── docker-application-development-process/      # Docker dev workflow
│   ├── implement-resilient-applications/            # Resiliency patterns
│   ├── microservice-ddd-cqrs-patterns/              # DDD and CQRS
│   ├── multi-container-microservice-net-applications/  # Multi-container apps
│   ├── net-core-net-framework-containers/           # Choosing .NET runtime
│   └── secure-net-microservices-web-applications/   # Security
├── cloud-native/                                     # Cloud-native .NET apps (40 files)
├── modern-web-apps-azure/                            # ASP.NET Core + Azure (11 files)
├── blazor-for-web-forms-developers/                  # Blazor migration guide (15 files)
└── maui/                                             # .NET MAUI mobile/desktop (15 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Microservices architecture | `contents/microservices/index.md` |
| Cloud-native patterns | `contents/cloud-native/index.md` |
| Modern web apps | `contents/modern-web-apps-azure/index.md` |
| Blazor migration | `contents/blazor-for-web-forms-developers/index.md` |
| .NET MAUI apps | `contents/maui/index.md` |
| DDD/CQRS patterns | `contents/microservices/microservice-ddd-cqrs-patterns/index.md` |
| Resilient apps | `contents/microservices/implement-resilient-applications/index.md` |
| Docker intro | `contents/microservices/container-docker-introduction/index.md` |

## Detailed Structure

### microservices/ (top-level, 2 files)

| File | Description |
|------|-------------|
| `index.md` | .NET Microservices architecture e-book overview |
| `key-takeaways.md` | Summary of key learnings |

### microservices/architect-microservice-container-applications/ (18 files)

| File | Description |
|------|-------------|
| `index.md` | Section overview |
| `microservices-architecture.md` | What is a microservices architecture |
| `service-oriented-architecture.md` | SOA vs microservices |
| `containerize-monolithic-applications.md` | Containerizing monoliths |
| `identify-microservice-domain-model-boundaries.md` | Domain boundaries |
| `logical-versus-physical-architecture.md` | Logical vs physical arch |
| `docker-application-state-data.md` | State and data in Docker |
| `microservice-based-composite-ui-shape-layout.md` | Composite UI patterns |
| `microservices-addressability-service-registry.md` | Service discovery |
| `data-sovereignty-per-microservice.md` | Data ownership |
| `communication-in-microservice-architecture.md` | Communication patterns |
| `direct-client-to-microservice-communication-versus-the-api-gateway-pattern.md` | API gateway pattern |
| `asynchronous-message-based-communication.md` | Async messaging |
| `distributed-data-management.md` | Distributed data challenges |
| `maintain-microservice-apis.md` | API versioning and evolution |
| `resilient-high-availability-microservices.md` | HA design |
| `scalable-available-multi-container-microservice-applications.md` | Scalability |

### microservices/container-docker-introduction/ (4 files)

| File | Description |
|------|-------------|
| `index.md` | Docker introduction overview |
| `docker-defined.md` | What is Docker |
| `docker-terminology.md` | Docker terminology |
| `docker-containers-images-registries.md` | Containers, images, registries |

### microservices/docker-application-development-process/ (2 files)

| File | Description |
|------|-------------|
| `index.md` | Development process overview |
| `docker-app-development-workflow.md` | Inner loop workflow |

### microservices/implement-resilient-applications/ (9 files)

| File | Description |
|------|-------------|
| `index.md` | Resiliency overview |
| `partial-failure-strategies.md` | Strategies for partial failures |
| `handle-partial-failure.md` | Handling partial failures |
| `implement-retries-exponential-backoff.md` | Retry with exponential backoff |
| `implement-http-call-retries-exponential-backoff-polly.md` | Polly-based HTTP retries |
| `implement-resilient-entity-framework-core-sql-connections.md` | Resilient EF Core SQL |
| `implement-circuit-breaker-pattern.md` | Circuit breaker pattern |
| `use-httpclientfactory-to-implement-resilient-http-requests.md` | IHttpClientFactory |
| `monitor-app-health.md` | Health checks |

### microservices/microservice-ddd-cqrs-patterns/ (18 files)

| File | Description |
|------|-------------|
| `index.md` | DDD/CQRS overview |
| `ddd-oriented-microservice.md` | DDD-oriented microservice design |
| `microservice-domain-model.md` | Domain model design |
| `net-core-microservice-domain-model.md` | Implementing domain model in .NET |
| `seedwork-domain-model-base-classes-interfaces.md` | Seedwork base classes |
| `implement-value-objects.md` | Value objects implementation |
| `enumeration-classes-over-enum-types.md` | Enumeration classes |
| `domain-model-layer-validations.md` | Domain validation |
| `domain-events-design-implementation.md` | Domain events |
| `infrastructure-persistence-layer-design.md` | Persistence layer design |
| `infrastructure-persistence-layer-implementation-entity-framework-core.md` | EF Core implementation |
| `nosql-database-persistence-infrastructure.md` | NoSQL persistence |
| `client-side-validation.md` | Client-side validation |
| `eshoponcontainers-cqrs-ddd-microservice.md` | eShopOnContainers CQRS/DDD |
| `apply-simplified-microservice-cqrs-ddd-patterns.md` | Simplified CQRS/DDD |
| `cqrs-microservice-reads.md` | CQRS read side |
| `microservice-application-layer-web-api-design.md` | Application layer Web API design |
| `microservice-application-layer-implementation-web-api.md` | Web API implementation |

### microservices/multi-container-microservice-net-applications/ (11 files)

| File | Description |
|------|-------------|
| `index.md` | Multi-container apps overview |
| `microservice-application-design.md` | Application design |
| `data-driven-crud-microservice.md` | Simple CRUD microservice |
| `database-server-container.md` | Database containers |
| `multi-container-applications-docker-compose.md` | Docker Compose setup |
| `implement-api-gateways-with-ocelot.md` | API gateway with Ocelot |
| `integration-event-based-microservice-communications.md` | Integration events |
| `rabbitmq-event-bus-development-test-environment.md` | RabbitMQ event bus |
| `subscribe-events.md` | Subscribing to events |
| `background-tasks-with-ihostedservice.md` | Background tasks |
| `test-aspnet-core-services-web-apps.md` | Testing services |

### microservices/net-core-net-framework-containers/ (7 files)

| File | Description |
|------|-------------|
| `index.md` | Runtime choice overview |
| `general-guidance.md` | General guidance |
| `net-core-container-scenarios.md` | When to use .NET Core |
| `net-framework-container-scenarios.md` | When to use .NET Framework |
| `net-container-os-targets.md` | OS targets for containers |
| `container-framework-choice-factors.md` | Decision factors |
| `official-net-docker-images.md` | Official Docker images |

### microservices/secure-net-microservices-web-applications/ (4 files)

| File | Description |
|------|-------------|
| `index.md` | Security overview |
| `authorization-net-microservices-web-applications.md` | Authorization approaches |
| `developer-app-secrets-storage.md` | Secrets management in dev |
| `azure-key-vault-protects-secrets.md` | Azure Key Vault |

### cloud-native/ (40 files)

| File | Description |
|------|-------------|
| `index.md` | Cloud-native .NET e-book overview |
| `introduction.md` | Introduction to cloud-native |
| `definition.md` | Defining cloud-native |
| `candidate-apps.md` | Apps suited for cloud-native |
| `introduce-eshoponcontainers-reference-app.md` | eShopOnContainers reference app |
| `map-eshoponcontainers-azure-services.md` | Azure services mapping |
| `leverage-containers-orchestrators.md` | Containers and orchestrators |
| `communication-patterns.md` | Service communication patterns |
| `front-end-communication.md` | Frontend communication |
| `service-to-service-communication.md` | Service-to-service comms |
| `grpc.md` | gRPC in cloud-native apps |
| `service-mesh-communication-infrastructure.md` | Service mesh |
| `distributed-data.md` | Distributed data patterns |
| `relational-vs-nosql-data.md` | Relational vs NoSQL |
| `deploy-containers-azure.md` | Deploying containers to Azure |
| `leverage-serverless-functions.md` | Serverless functions |
| `combine-containers-serverless-approaches.md` | Hybrid approaches |
| `scale-applications.md` | Scaling cloud-native apps |
| `scale-containers-serverless.md` | Scaling containers/serverless |
| `resiliency.md` | Resiliency overview |
| `application-resiliency-patterns.md` | App resiliency patterns |
| `resilient-communications.md` | Resilient communication |
| `infrastructure-resiliency-azure.md` | Azure infrastructure resiliency |
| `monitoring-health.md` | Health monitoring |
| `logging-with-elastic-stack.md` | Logging with Elastic Stack |
| `monitoring-azure-kubernetes.md` | AKS monitoring |
| `azure-monitor.md` | Azure Monitor |
| `elastic-search-in-azure.md` | Elasticsearch on Azure |
| `observability-patterns.md` | Observability patterns |
| `identity.md` | Identity in cloud-native |
| `authentication-authorization.md` | Auth patterns |
| `azure-active-directory.md` | Azure Active Directory |
| `identity-server.md` | IdentityServer |
| `security.md` | Security overview |
| `azure-security.md` | Azure security features |
| `deploy-eshoponcontainers-azure.md` | Deploying eShopOnContainers |
| `other-deployment-options.md` | Other deployment options |
| `infrastructure-as-code.md` | IaC patterns |
| `feature-flags.md` | Feature flags |
| `centralized-configuration.md` | Centralized configuration |
| `azure-caching.md` | Azure caching |
| `application-bundles.md` | Application bundles (CNAB) |
| `devops.md` | DevOps for cloud-native |
| `summary.md` | Chapter summaries |

### modern-web-apps-azure/ (11 files)

| File | Description |
|------|-------------|
| `index.md` | Modern web apps e-book overview |
| `modern-web-applications-characteristics.md` | Characteristics of modern apps |
| `architectural-principles.md` | Architecture principles (SRP, SoC, DI) |
| `common-web-application-architectures.md` | MVC, Clean, Microservices arch |
| `common-client-side-web-technologies.md` | JavaScript frameworks overview |
| `choose-between-traditional-web-and-single-page-apps.md` | SPA vs MPA tradeoffs |
| `develop-asp-net-core-mvc-apps.md` | ASP.NET Core MVC development |
| `work-with-data-in-asp-net-core-apps.md` | EF Core, Dapper, repositories |
| `test-asp-net-core-mvc-apps.md` | Testing ASP.NET Core apps |
| `development-process-for-azure.md` | Dev process for Azure-hosted apps |
| `azure-hosting-recommendations-for-asp-net-web-apps.md` | Azure hosting options |

### blazor-for-web-forms-developers/ (15 files)

| File | Description |
|------|-------------|
| `index.md` | Blazor e-book overview |
| `introduction.md` | Introduction to Blazor |
| `architecture-comparison.md` | ASP.NET Web Forms vs Blazor |
| `hosting-models.md` | Blazor hosting models |
| `project-structure.md` | Blazor project structure |
| `app-startup.md` | App startup and configuration |
| `pages-routing-layouts.md` | Pages, routing, layouts |
| `components.md` | Blazor components |
| `config.md` | Configuration |
| `data.md` | Data access patterns |
| `state-management.md` | State management |
| `forms-validation.md` | Forms and validation |
| `middleware.md` | Middleware |
| `security-authentication-authorization.md` | Security and auth |
| `migration.md` | Migration guide |

### maui/ (15 files)

| File | Description |
|------|-------------|
| `index.md` | .NET MAUI e-book overview |
| `preface.md` | Preface |
| `introduction.md` | Introduction to .NET MAUI |
| `mvvm.md` | MVVM pattern |
| `mvvm-community-toolkit-features.md` | MVVM Community Toolkit |
| `dependency-injection.md` | Dependency injection |
| `navigation.md` | Navigation patterns |
| `communicating-between-components.md` | Component communication |
| `accessing-remote-data.md` | Accessing remote APIs |
| `authentication-and-authorization.md` | Auth in MAUI |
| `app-settings-management.md` | Settings management |
| `unit-testing.md` | Unit testing MAUI apps |
| `validation.md` | Input validation |
| `micro-services.md` | MAUI with microservices |
