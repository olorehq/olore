# dotnet-architecture Table of Contents

## Directory Map

```
contents/
├── blazor-for-web-forms-developers/   # Blazor migration guide for ASP.NET Web Forms devs (15 files)
├── cloud-native/                       # Cloud-native .NET apps for Azure (43 files)
├── maui/                               # Enterprise app patterns using .NET MAUI (14 files)
├── microservices/                      # .NET Microservices architecture guide (74 files)
│   ├── architect-microservice-container-applications/  # Design patterns (17 files)
│   ├── container-docker-introduction/                  # Docker fundamentals (4 files)
│   ├── docker-application-development-process/         # Dev workflow (2 files)
│   ├── implement-resilient-applications/               # Resiliency patterns (9 files)
│   ├── microservice-ddd-cqrs-patterns/                 # DDD and CQRS (18 files)
│   ├── multi-container-microservice-net-applications/  # Multi-container apps (11 files)
│   ├── net-core-net-framework-containers/              # .NET vs .NET Framework (7 files)
│   └── secure-net-microservices-web-applications/      # Security (4 files)
└── modern-web-apps-azure/              # Modern ASP.NET Core web apps (11 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Microservices architecture overview | `contents/microservices/index.md` |
| DDD and CQRS patterns | `contents/microservices/microservice-ddd-cqrs-patterns/index.md` |
| Cloud-native .NET on Azure | `contents/cloud-native/index.md` |
| Blazor migration from Web Forms | `contents/blazor-for-web-forms-developers/index.md` |
| Modern web apps with ASP.NET Core | `contents/modern-web-apps-azure/index.md` |
| .NET MAUI enterprise patterns | `contents/maui/index.md` |
| Docker and containerization | `contents/microservices/container-docker-introduction/index.md` |
| Resilient HTTP with Polly | `contents/microservices/implement-resilient-applications/index.md` |

## Detailed Structure

### blazor-for-web-forms-developers/ (15 files)

| File | Description |
|------|-------------|
| `index.md` | Book cover / introduction page |
| `introduction.md` | Why Blazor, comparison with Web Forms |
| `architecture-comparison.md` | Architecture differences between Web Forms and Blazor |
| `project-structure.md` | Project layout, solution structure |
| `app-startup.md` | App startup and host configuration |
| `hosting-models.md` | Blazor Server vs WebAssembly hosting models |
| `components.md` | Razor components, lifecycle, parameters |
| `pages-routing-layouts.md` | Routing, pages, and layout components |
| `middleware.md` | ASP.NET Core middleware pipeline |
| `config.md` | App configuration and settings |
| `data.md` | Data access in Blazor |
| `forms-validation.md` | Forms and validation |
| `state-management.md` | State management approaches |
| `security-authentication-authorization.md` | Auth in Blazor apps |
| `migration.md` | Step-by-step migration guide from Web Forms |

### cloud-native/ (43 files)

| File | Description |
|------|-------------|
| `index.md` | Book cover / introduction |
| `introduction.md` | What is cloud-native? |
| `definition.md` | CNCF cloud-native definition and pillars |
| `candidate-apps.md` | Identifying apps suitable for cloud-native |
| `introduce-eshoponcontainers-reference-app.md` | Reference application overview |
| `map-eshoponcontainers-azure-services.md` | eShopOnContainers Azure service mapping |
| `leverage-containers-orchestrators.md` | Containers and Kubernetes orchestration |
| `leverage-serverless-functions.md` | Azure Functions for serverless |
| `combine-containers-serverless-approaches.md` | Hybrid container and serverless |
| `scale-applications.md` | Scaling strategies |
| `scale-containers-serverless.md` | Auto-scaling containers and functions |
| `other-deployment-options.md` | Deployment options beyond AKS |
| `deploy-containers-azure.md` | Deploying containers to Azure |
| `deploy-eshoponcontainers-azure.md` | Deploying eShopOnContainers to Azure |
| `communication-patterns.md` | Service communication patterns |
| `front-end-communication.md` | Frontend-to-backend communication |
| `service-to-service-communication.md` | Synchronous service-to-service |
| `grpc.md` | gRPC in cloud-native apps |
| `service-mesh-communication-infrastructure.md` | Service mesh (Linkerd, Istio) |
| `distributed-data.md` | Distributed data management |
| `relational-vs-nosql-data.md` | Choosing relational vs NoSQL |
| `elastic-search-in-azure.md` | Elasticsearch for search |
| `azure-caching.md` | Azure Cache for Redis |
| `resiliency.md` | Resiliency overview |
| `application-resiliency-patterns.md` | Retry, circuit breaker, bulkhead |
| `resilient-communications.md` | Resilient inter-service communication |
| `infrastructure-resiliency-azure.md` | Infrastructure-level resiliency |
| `monitoring-health.md` | Health checks and monitoring |
| `monitoring-azure-kubernetes.md` | Monitoring AKS clusters |
| `azure-monitor.md` | Azure Monitor integration |
| `observability-patterns.md` | Logging, tracing, metrics |
| `logging-with-elastic-stack.md` | ELK stack for logging |
| `identity.md` | Identity concepts |
| `authentication-authorization.md` | AuthN/AuthZ patterns |
| `azure-active-directory.md` | Azure AD integration |
| `identity-server.md` | IdentityServer setup |
| `security.md` | Security overview |
| `azure-security.md` | Azure security services |
| `centralized-configuration.md` | Config management (Azure App Config) |
| `feature-flags.md` | Feature flags with Azure App Config |
| `devops.md` | CI/CD and DevOps for cloud-native |
| `infrastructure-as-code.md` | IaC with Terraform and Bicep |
| `application-bundles.md` | Deployment bundles |
| `summary.md` | Key conclusions summary |

### maui/ (14 files)

| File | Description |
|------|-------------|
| `index.md` | Book cover / introduction |
| `preface.md` | Purpose and scope of the guide |
| `introduction.md` | Overview of enterprise MAUI patterns |
| `mvvm.md` | MVVM pattern in .NET MAUI |
| `mvvm-community-toolkit-features.md` | MVVM Community Toolkit usage |
| `dependency-injection.md` | DI container and service registration |
| `communicating-between-components.md` | Messaging and component communication |
| `navigation.md` | Navigation patterns in MAUI |
| `validation.md` | Input validation strategies |
| `accessing-remote-data.md` | HTTP client and remote API access |
| `app-settings-management.md` | App configuration and settings |
| `micro-services.md` | Connecting MAUI to microservices backends |
| `authentication-and-authorization.md` | AuthN/AuthZ with IdentityServer |
| `unit-testing.md` | Unit testing MAUI apps |

### microservices/ (74 files)

#### microservices/ (top level)

| File | Description |
|------|-------------|
| `index.md` | Book overview and guide introduction |
| `key-takeaways.md` | Summary of key conclusions |

#### microservices/container-docker-introduction/ (4 files)

| File | Description |
|------|-------------|
| `index.md` | Introduction to containerization |
| `docker-defined.md` | What is Docker? |
| `docker-terminology.md` | Docker terminology and concepts |
| `docker-containers-images-registries.md` | Containers, images, and registries |

#### microservices/docker-application-development-process/ (2 files)

| File | Description |
|------|-------------|
| `index.md` | Development environment overview |
| `docker-app-development-workflow.md` | Inner-loop dev workflow with Docker |

#### microservices/net-core-net-framework-containers/ (7 files)

| File | Description |
|------|-------------|
| `index.md` | Choosing .NET vs .NET Framework |
| `general-guidance.md` | General guidance for selecting runtime |
| `net-core-container-scenarios.md` | When to choose .NET |
| `net-framework-container-scenarios.md` | When to stay on .NET Framework |
| `container-framework-choice-factors.md` | Decision factors |
| `net-container-os-targets.md` | Windows vs Linux containers |
| `official-net-docker-images.md` | Official .NET Docker images |

#### microservices/architect-microservice-container-applications/ (17 files)

| File | Description |
|------|-------------|
| `index.md` | Chapter intro: architecting microservices |
| `microservices-architecture.md` | Microservices architecture overview |
| `service-oriented-architecture.md` | SOA vs microservices |
| `containerize-monolithic-applications.md` | Containerizing monoliths |
| `docker-application-state-data.md` | State and data in containers |
| `logical-versus-physical-architecture.md` | Logical vs physical architecture |
| `identify-microservice-domain-model-boundaries.md` | Defining bounded contexts |
| `data-sovereignty-per-microservice.md` | Database-per-service pattern |
| `distributed-data-management.md` | Distributed data challenges |
| `direct-client-to-microservice-communication-versus-the-api-gateway-pattern.md` | API gateway pattern |
| `communication-in-microservice-architecture.md` | Sync vs async communication |
| `asynchronous-message-based-communication.md` | Message-based async patterns |
| `microservices-addressability-service-registry.md` | Service discovery and registry |
| `microservice-based-composite-ui-shape-layout.md` | Micro-frontend patterns |
| `resilient-high-availability-microservices.md` | HA and resilience at the architecture level |
| `scalable-available-multi-container-microservice-applications.md` | Orchestrator-based scaling |
| `maintain-microservice-apis.md` | API versioning and backwards compatibility |

#### microservices/multi-container-microservice-net-applications/ (11 files)

| File | Description |
|------|-------------|
| `index.md` | Chapter intro: multi-container apps |
| `microservice-application-design.md` | Application design decisions |
| `data-driven-crud-microservice.md` | Building a CRUD microservice |
| `database-server-container.md` | SQL Server in a container |
| `multi-container-applications-docker-compose.md` | Docker Compose for multi-container apps |
| `implement-api-gateways-with-ocelot.md` | API gateway with Ocelot |
| `background-tasks-with-ihostedservice.md` | Background services with IHostedService |
| `integration-event-based-microservice-communications.md` | Integration events and event bus |
| `rabbitmq-event-bus-development-test-environment.md` | RabbitMQ event bus implementation |
| `subscribe-events.md` | Event subscription and handlers |
| `test-aspnet-core-services-web-apps.md` | Testing ASP.NET Core microservices |

#### microservices/microservice-ddd-cqrs-patterns/ (18 files)

| File | Description |
|------|-------------|
| `index.md` | Chapter intro: DDD and CQRS |
| `apply-simplified-microservice-cqrs-ddd-patterns.md` | Simplified CQRS/DDD application |
| `eshoponcontainers-cqrs-ddd-microservice.md` | eShopOnContainers ordering microservice |
| `cqrs-microservice-reads.md` | CQRS read side implementation |
| `ddd-oriented-microservice.md` | Designing a DDD microservice |
| `microservice-domain-model.md` | Domain model design |
| `net-core-microservice-domain-model.md` | Implementing domain model in .NET |
| `seedwork-domain-model-base-classes-interfaces.md` | SeedWork base classes and interfaces |
| `implement-value-objects.md` | Value object implementation |
| `enumeration-classes-over-enum-types.md` | Enumeration classes pattern |
| `domain-model-layer-validations.md` | Validation in the domain layer |
| `client-side-validation.md` | Client-side validation strategies |
| `domain-events-design-implementation.md` | Domain events |
| `infrastructure-persistence-layer-design.md` | Persistence layer design |
| `infrastructure-persistence-layer-implementation-entity-framework-core.md` | EF Core implementation |
| `nosql-database-persistence-infrastructure.md` | NoSQL persistence with Cosmos DB |
| `microservice-application-layer-web-api-design.md` | Web API application layer design |
| `microservice-application-layer-implementation-web-api.md` | Web API implementation with MediatR |

#### microservices/implement-resilient-applications/ (9 files)

| File | Description |
|------|-------------|
| `index.md` | Chapter intro: resiliency |
| `handle-partial-failure.md` | Partial failure handling strategies |
| `partial-failure-strategies.md` | Retry, circuit breaker, fallback |
| `implement-retries-exponential-backoff.md` | Retry with exponential backoff |
| `implement-http-call-retries-exponential-backoff-polly.md` | HTTP retries using Polly |
| `use-httpclientfactory-to-implement-resilient-http-requests.md` | IHttpClientFactory and typed clients |
| `implement-circuit-breaker-pattern.md` | Circuit breaker with Polly |
| `implement-resilient-entity-framework-core-sql-connections.md` | Resilient EF Core SQL connections |
| `monitor-app-health.md` | Health checks with ASP.NET Core |

#### microservices/secure-net-microservices-web-applications/ (4 files)

| File | Description |
|------|-------------|
| `index.md` | Chapter intro: securing microservices |
| `authorization-net-microservices-web-applications.md` | Role and policy-based authorization |
| `developer-app-secrets-storage.md` | Secrets management in development |
| `azure-key-vault-protects-secrets.md` | Azure Key Vault for secrets |

### modern-web-apps-azure/ (11 files)

| File | Description |
|------|-------------|
| `index.md` | Book overview and introduction |
| `modern-web-applications-characteristics.md` | Characteristics of modern web apps |
| `architectural-principles.md` | SOLID, DRY, separation of concerns |
| `common-web-application-architectures.md` | Monolith, clean, layered architectures |
| `common-client-side-web-technologies.md` | JavaScript frameworks, Blazor |
| `choose-between-traditional-web-and-single-page-apps.md` | MPA vs SPA tradeoffs |
| `develop-asp-net-core-mvc-apps.md` | ASP.NET Core MVC development |
| `work-with-data-in-asp-net-core-apps.md` | EF Core, repositories, caching |
| `test-asp-net-core-mvc-apps.md` | Testing strategies for ASP.NET Core |
| `development-process-for-azure.md` | Dev workflow targeting Azure |
| `azure-hosting-recommendations-for-asp-net-web-apps.md` | Azure hosting options for web apps |
