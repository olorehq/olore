# dotnet-architecture Table of Contents

## Directory Map

```
contents/
├── blazor-for-web-forms-developers/  # Blazor for Web Forms developers (15 files)
├── cloud-native/  # Cloud-native apps with Azure/Kubernetes (44 files)
├── maui/  # .NET MAUI mobile/desktop apps (14 files)
├── microservices/  # Microservices and containers (74 files)
├── modern-web-apps-azure/  # Modern ASP.NET Core web apps on Azure (11 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Microservices overview | `contents/microservices/index.md` |
| DDD/CQRS patterns | `contents/microservices/microservice-ddd-cqrs-patterns/` |
| Resilient apps | `contents/microservices/implement-resilient-applications/` |
| Cloud-native | `contents/cloud-native/index.md` |
| Web apps on Azure | `contents/modern-web-apps-azure/index.md` |
| MAUI | `contents/maui/index.md` |
| Blazor for Web Forms devs | `contents/blazor-for-web-forms-developers/index.md` |

## Detailed Structure

### blazor-for-web-forms-developers/ (15 files)

| File | Description |
|------|-------------|
| `app-startup.md` | Learn how to define the startup logic for your app. |
| `architecture-comparison.md` | Learn how the architectures of ASP.NET Web Forms and Blazor compare. |
| `components.md` | Learn how to build reusable UI components with Blazor and how they compare to ASP.NET Web Forms controls. |
| `config.md` | Learn how to configure Blazor apps without using ConfigurationManager. |
| `data.md` | Learn how to access and handle data in ASP.NET Web Forms and Blazor. |
| `forms-validation.md` | Learn how to build forms with client-side validation in Blazor. |
| `hosting-models.md` | Learn the different ways to host a Blazor app, including in the browser on WebAssembly or on the server. |
| `index.md` | Learn how to build full-stack web apps with .NET using Blazor and .NET Core in a simple and familiar way. |
| `introduction.md` | An introduction to Blazor and writing full-stack web apps with .NET |
| `middleware.md` | Learn about handling HTTP requests with modules, handlers, and middleware. |
| `migration.md` | Learn how to approach migrating an existing ASP.NET Web Forms app to Blazor. |
| `pages-routing-layouts.md` | Learn how to create pages in Blazor, work with client-side routing, and manage page layouts. |
| `project-structure.md` | Learn how the project structures of ASP.NET Web Forms and Blazor projects compare. |
| `security-authentication-authorization.md` | Learn how to handle authentication and authorization in ASP.NET Web Forms and Blazor. |
| `state-management.md` | Learn different approaches for managing state in ASP.NET Web Forms and Blazor. |

### cloud-native/ (44 files)

| File | Description |
|------|-------------|
| `application-bundles.md` | Architecting Cloud Native .NET Apps for Azure \| Cloud Native Application Bundles |
| `application-resiliency-patterns.md` | Architecting Cloud Native .NET Apps for Azure \| Application Resiliency Patterns |
| `authentication-authorization.md` | Architecting Cloud Native .NET Apps for Azure \| Authentication and Authorization in Cloud Native Apps |
| `azure-active-directory.md` | Architecting Cloud Native .NET Apps for Azure \| Azure Active Directory |
| `azure-caching.md` | Learn about caching strategies in a cloud-native application. |
| `azure-monitor.md` | Using Azure Monitor to gain visibility into your system is running. |
| `azure-security.md` | Architecting Cloud Native .NET Apps for Azure \| Azure Security for Cloud Native Apps |
| `candidate-apps.md` | Learn which types of applications benefit from a cloud-native approach |
| `centralized-configuration.md` | Centralizing configuration for cloud-native applications using Azure App Configuration and AzureKey Vault. |
| `combine-containers-serverless-approaches.md` | Combining containers and Kubernetes with serverless approaches |
| `communication-patterns.md` | Learn about key service communication concerns in cloud-native applications |
| `definition.md` | Learn about the foundational pillars that provide the bedrock for cloud-native systems |
| `deploy-containers-azure.md` | Deploying Containers in Azure with Azure Container Registry, Azure Kubernetes Service, and Azure Dev Spaces. |
| `deploy-eshoponcontainers-azure.md` | Deploying the eShopOnContainers application using Azure Kubernetes Service, Helm, and DevSpaces. |
| `devops.md` | DevOps considerations for cloud-native applications |
| `distributed-data.md` | Contrast data storage in monolithic and cloud-native applications. |
| `elastic-search-in-azure.md` | Learn about adding Elastic Search capabilities to cloud-native applications. |
| `feature-flags.md` | Implement feature flags in cloud-native applications leveraging Azure App Config |
| `front-end-communication.md` | Learn how front-end clients communicate with cloud-native systems |
| `grpc.md` | Learn about gRPC, its role in cloud-native applications, and how it differs from HTTP RESTful communication. |
| `identity-server.md` | Architecting Cloud Native .NET Apps for Azure \| IdentityServer |
| `identity.md` | Architecting Cloud Native .NET Apps for Azure \| Identity |
| `index.md` | A guide for building cloud-native applications leveraging containers, microservices, and serverless features of Azure. |
| `infrastructure-as-code.md` | Embracing Infrastructure as Code (IaC) with cloud-native applications |
| `infrastructure-resiliency-azure.md` | Architecting Cloud Native .NET Apps for Azure \| Cloud Infrastructure Resiliency with Azure |
| `introduce-eshoponcontainers-reference-app.md` | Introducing the eShopOnContainers Cloud Native Microservices Reference App for ASP.NET Core and Azure. |
| `introduction.md` | Learn about cloud-native computing |
| `leverage-containers-orchestrators.md` | Leveraging Docker Containers and Kubernetes Orchestrators in Azure |
| `leverage-serverless-functions.md` | Leveraging Serverless and Azure Functions in Cloud-Native Applications |
| `logging-with-elastic-stack.md` | Logging using Elastic Stack, Logstash, and Kibana |
| `map-eshoponcontainers-azure-services.md` | Mapping eShopOnContainers to Azure Services like Azure Kubernetes Service, API Gateway, and Azure Service Bus. |
| `monitoring-azure-kubernetes.md` | Monitoring in Azure Kubernetes Services |
| `monitoring-health.md` | Monitoring and Health |
| `observability-patterns.md` | Observability patterns for cloud-native applications |
| `other-deployment-options.md` | Other Container Deployment Options using Azure |
| `relational-vs-nosql-data.md` | Learn about relational and NoSQL data in cloud-native applications |
| `resiliency.md` | Architecting Cloud Native .NET Apps for Azure \| Cloud Native Resiliency |
| `resilient-communications.md` | Architecting Cloud Native .NET Apps for Azure \| Resilient Communication |
| `scale-applications.md` | Scaling cloud-native applications with Azure Kubernetes Service and Azure Functions to meet user demand in a cost effective way. |
| `scale-containers-serverless.md` | Scaling cloud-native applications with Azure Kubernetes Service to meet user demand. |
| `security.md` | Architecting Cloud Native .NET Apps for Azure \| Security |
| `service-mesh-communication-infrastructure.md` | Learn about how service mesh technologies streamline cloud-native microservice communication |
| `service-to-service-communication.md` | Learn how back-end cloud-native microservices communicate with other back-end microservices. |
| `summary.md` | Learn the key conclusions about Cloud Native applications that are fully developed in the Architecting Cloud-Native .NET Apps for Azure guide/e-book. |

### maui/ (14 files)

| File | Description |
|------|-------------|
| `accessing-remote-data.md` | Communicating with Web APIs in .NET MAUI |
| `app-settings-management.md` | Managing persistent configurations in .NET MAUI |
| `authentication-and-authorization.md` | Providing security and identity management for .NET MAUI application |
| `communicating-between-components.md` | Providing loosely-coupled messaging for a .NET MAUI application |
| `dependency-injection.md` | Patterns for building flexible, decoupled, and testable applications |
| `index.md` | Learn how to design adaptable, maintainable, and testable MAUI applications. |
| `introduction.md` | Introduction to enterprise architecture for .NET MAUI |
| `micro-services.md` | Strategies for developing scalable back-end architecture |
| `mvvm-community-toolkit-features.md` | Helper components to simplify app development and maintenance |
| `mvvm.md` | Overview of the Model-View-ViewModel pattern used by .NET MAUI |
| `navigation.md` | Managing Navigation in a .NET MAUI Application |
| `preface.md` | Guidance for what the book will cover, reference materials, and how to approach the book. |
| `unit-testing.md` | Learn how to unit test .NET MAUI application logic, choose a test framework and platform, and identify scenarios that need device or UI tests. |
| `validation.md` | Provide feedback and checks to ensure data is correct at runtime |

### microservices/ (2 files)

| File | Description |
|------|-------------|
| `index.md` | .NET Microservices Architecture for Containerized .NET Applications \| Microservices are modular and independently deployable services. Docker containers (for Linux and Windows) simplify deployment and testing by bundling a service and its dependencies into a single unit, which is then run in an isolated environment. |
| `key-takeaways.md` | Get the key takeaways from the .NET Microservices Architecture for Containerized .NET Applications guide/e-book, to have a quick look at the high-level issues involved when using a microservices architecture, like benefits and drawbacks, DDD patterns for design and development, as well as resiliency, security, and the use of orchestrators. |

### microservices/architect-microservice-container-applications/ (17 files)

| File | Description |
|------|-------------|
| `asynchronous-message-based-communication.md` | .NET Microservices Architecture for Containerized .NET Applications \| Asynchronous message-based communications is an essential concept in the microservices architecture, because it's the best way to keep microservices independent from one another while also being synchronized eventually. |
| `communication-in-microservice-architecture.md` | Explore different ways of communication between microservices, understanding the implications of synchronous and asynchronous ways. |
| `containerize-monolithic-applications.md` | Containerizing monolithic applications, although doesn't get all the benefits from the microservices architecture, has important deployment benefits that can be delivered right away. |
| `data-sovereignty-per-microservice.md` | Data sovereignty per microservice is one of the key points of microservices. Each microservice must be the sole owner of its database, sharing it with no other. Of course all instances of a microservice connect to the same high availability database. |
| `direct-client-to-microservice-communication-versus-the-api-gateway-pattern.md` | Understand the differences and the uses of the API gateway pattern and the direct client-to-microservice communication. |
| `distributed-data-management.md` | Learn what are the challenges and solutions for distributed data management in the microservices world. |
| `docker-application-state-data.md` | State and data management in Docker applications. Microservice instances are expendable, but data is NOT. Learn how to handle this with microservices. |
| `identify-microservice-domain-model-boundaries.md` | Explore the essence of partitioning a large application into microservices to achieve a sound architecture. |
| `index.md` | Architecting container and microservice-based applications is no small feat and shouldn't be taken lightly. Learn the core concepts in this chapter. |
| `logical-versus-physical-architecture.md` | Understand the differences between Logical and physical architectures. |
| `maintain-microservice-apis.md` | Create microservice APIs and contracts considering evolution and versioning because needs change. |
| `microservice-based-composite-ui-shape-layout.md` | Microservices architecture is not only for the back end. Get a peek view at using it in the front end. |
| `microservices-addressability-service-registry.md` | Understand the role of the container image registries in the microservices architecture. |
| `microservices-architecture.md` | .NET Microservices Architecture for Containerized .NET Applications \| 30.000 feet view of Microservices architecture. |
| `resilient-high-availability-microservices.md` | Microservices have to be designed to withstand transient network and dependencies failures they must be resilient to achieve high availability. |
| `scalable-available-multi-container-microservice-applications.md` | Discover the options to orchestrate microservices and multi-container applications for high scalability and availability and the possibilities of Azure Dev Spaces while developing Kubernetes application lifecycle. |
| `service-oriented-architecture.md` | Learn the fundamental differences between microservices and a Service-oriented architecture (SOA). |

### microservices/container-docker-introduction/ (4 files)

| File | Description |
|------|-------------|
| `docker-containers-images-registries.md` | .NET Microservices Architecture for Containerized .NET Applications \| Docker containers, images, and registries |
| `docker-defined.md` | .NET Microservices Architecture for Containerized .NET Applications \| What is Docker? |
| `docker-terminology.md` | .NET Microservices Architecture for Containerized .NET Applications \| Docker terminology |
| `index.md` | .NET Microservices Architecture for Containerized .NET Applications \| Introduction to Containers and Docker |

### microservices/docker-application-development-process/ (2 files)

| File | Description |
|------|-------------|
| `docker-app-development-workflow.md` | Learn details of the workflow for developing Docker-based applications. Optimize Dockerfiles and use the simplified workflow available in Visual Studio. |
| `index.md` | Get a high-level overview of the options for developing Docker-based applications. Using your choice of Visual Studio for Windows or Visual Studio Code for multiplatform support (Windows, macOS, and Linux). |

### microservices/implement-resilient-applications/ (9 files)

| File | Description |
|------|-------------|
| `handle-partial-failure.md` | Learn how to handle partial failures gracefully. A microservice might not be fully functional but it might still be able to do some useful work. |
| `implement-circuit-breaker-pattern.md` | Learn how to implement the Circuit Breaker pattern as a complementary system to Http retries. |
| `implement-http-call-retries-exponential-backoff-polly.md` | Learn how to handle HTTP failures with Polly and IHttpClientFactory. |
| `implement-resilient-entity-framework-core-sql-connections.md` | Learn how to implement resilient Entity Framework Core SQL connections. This technique is especially important when using Azure SQL Database in the cloud. |
| `implement-retries-exponential-backoff.md` | Learn how to implement retries with exponential backoff. |
| `index.md` | Learn about resilience, a core concept in a microservices architecture. You must know how to handle transient failures gracefully when they occur. |
| `monitor-app-health.md` | Explore one way of implementing health monitoring. |
| `partial-failure-strategies.md` | Get to know several strategies for handling partial failures gracefully. |
| `use-httpclientfactory-to-implement-resilient-http-requests.md` | Learn how to use IHttpClientFactory, available since .NET Core 2.1, for creating `HttpClient` instances, making it easy for you to use it in your applications. |

### microservices/microservice-ddd-cqrs-patterns/ (18 files)

| File | Description |
|------|-------------|
| `apply-simplified-microservice-cqrs-ddd-patterns.md` | .NET Microservices Architecture for Containerized .NET Applications \| Understand the overall relation between CQRS and DDD patterns. |
| `client-side-validation.md` | .NET Microservices Architecture for Containerized .NET Applications \| Explore the key concepts of client-side validation. |
| `cqrs-microservice-reads.md` | .NET Microservices Architecture for Containerized .NET Applications \| Understand the implementation of the queries side of CQRS on the ordering microservice in eShopOnContainers using Dapper. |
| `ddd-oriented-microservice.md` | .NET Microservices Architecture for Containerized .NET Applications \| Understand the design of the DDD-oriented ordering microservice and its application layers. |
| `domain-events-design-implementation.md` | .NET Microservices Architecture for Containerized .NET Applications \| Get an in-depth view of domain events, a key concept to establish communication between aggregates. |
| `domain-model-layer-validations.md` | .NET Microservices Architecture for Containerized .NET Applications \| Understand key concepts of domain model validations. |
| `enumeration-classes-over-enum-types.md` | .NET Microservices Architecture for Containerized .NET Applications \| Lear how you can use enumeration classes, instead of enums, as a way to solve some limitations of the latter. |
| `eshoponcontainers-cqrs-ddd-microservice.md` | .NET Microservices Architecture for Containerized .NET Applications \| Understand the way CQRS is implemented in the ordering microservice in eShopOnContainers. |
| `implement-value-objects.md` | .NET Microservices Architecture for Containerized .NET Applications \| Get into the details and options to implement value objects using new Entity Framework features. |
| `index.md` | .NET Microservices Architecture for Containerized .NET Applications \| Understand how to tackle complex business scenarios applying DDD and CQRS Patterns |
| `infrastructure-persistence-layer-design.md` | .NET Microservices Architecture for Containerized .NET Applications \| Explore the repository pattern in the design of the infrastructure persistence layer. |
| `infrastructure-persistence-layer-implementation-entity-framework-core.md` | .NET Microservices Architecture for Containerized .NET Applications \| Explore the implementation details for the infrastructure persistence layer, using Entity Framework Core. |
| `microservice-application-layer-implementation-web-api.md` | Understand the Dependency Injection and the Mediator patterns and their implementation details in the Web API application layer. |
| `microservice-application-layer-web-api-design.md` | .NET Microservices Architecture for Containerized .NET Applications \| A brief mention of the SOLID principles for designing the application layer. |
| `microservice-domain-model.md` | .NET Microservices Architecture for Containerized .NET Applications \| Understand the key concepts when designing a DDD-oriented domain model. |
| `net-core-microservice-domain-model.md` | .NET Microservices Architecture for Containerized .NET Applications \| Get into the implementation details of a DDD-oriented domain model. |
| `nosql-database-persistence-infrastructure.md` | Understand the use of NoSql databases in general, and Azure Cosmos DB in particular, as an option to implement persistence. |
| `seedwork-domain-model-base-classes-interfaces.md` | .NET Microservices Architecture for Containerized .NET Applications \| Use the seedwork concept as a starting point to start implementation for a DDD-oriented domain model. |

### microservices/multi-container-microservice-net-applications/ (11 files)

| File | Description |
|------|-------------|
| `background-tasks-with-ihostedservice.md` | .NET Microservices Architecture for Containerized .NET Applications \| Understand the new options to use IHostedService and BackgroundService to implement background tasks in microservices .NET Core. |
| `data-driven-crud-microservice.md` | .NET Microservices Architecture for Containerized .NET Applications \| Understand the creation of a simple CRUD (data-driven) microservice within the context of a microservices application. |
| `database-server-container.md` | Understand the importance of using a database server running as a container only for development. Never for production. |
| `implement-api-gateways-with-ocelot.md` | Learn how to implement API Gateways with Ocelot and how to use Ocelot in a container-based environment. |
| `index.md` | .NET Microservices Architecture for Containerized .NET Applications \| Understand the external architecture for Designing and Developing Multi Container and Microservice Based .NET Applications. |
| `integration-event-based-microservice-communications.md` | .NET Microservices Architecture for Containerized .NET Applications \| Understand integration events to implement event-based communication between microservices. |
| `microservice-application-design.md` | .NET Microservices Architecture for Containerized .NET Applications \| Understand the benefits and downsides of a microservice-oriented application, so you can take an informed decision. |
| `multi-container-applications-docker-compose.md` | How to specify  microservices composition for a multicontainer application with docker-compose.yml. |
| `rabbitmq-event-bus-development-test-environment.md` | .NET Microservices Architecture for Containerized .NET Applications \| Use RabbitMQ to implement an event bus messaging for integration events for the development or test environments. |
| `subscribe-events.md` | .NET Microservices Architecture for Containerized .NET Applications \| Understand the details of publishing and subscription to integration events. |
| `test-aspnet-core-services-web-apps.md` | .NET Microservices Architecture for Containerized .NET Applications \| Explore an architecture for testing ASP.NET Core services and web apps in containers. |

### microservices/net-core-net-framework-containers/ (7 files)

| File | Description |
|------|-------------|
| `container-framework-choice-factors.md` | .NET Microservices Architecture for Containerized .NET Applications \| Decision table, .NET implementations to use for Docker |
| `general-guidance.md` | .NET Microservices Architecture for Containerized .NET Applications \| General guidance |
| `index.md` | .NET Microservices Architecture for Containerized .NET Applications \| Choosing Between .NET and .NET Framework for Docker Containers |
| `net-container-os-targets.md` | .NET Microservices Architecture for Containerized .NET Applications \| What OS to target with .NET containers |
| `net-core-container-scenarios.md` | .NET Microservices Architecture for Containerized .NET Applications \| When to choose .NET for Docker containers |
| `net-framework-container-scenarios.md` | .NET Microservices Architecture for Containerized .NET Applications \| When to choose .NET Framework for Docker containers |
| `official-net-docker-images.md` | .NET Microservices Architecture for Containerized .NET Applications \| Official .NET Docker images |

### microservices/secure-net-microservices-web-applications/ (4 files)

| File | Description |
|------|-------------|
| `authorization-net-microservices-web-applications.md` | Security in .NET Microservices and Web Applications - Get an overview of the main authorization options in ASP.NET Core applications - role-based and policy-based. |
| `azure-key-vault-protects-secrets.md` | Security in .NET Microservices and Web Applications - Azure Key Vault is an excellent way to handle application secrets that are completely controlled by administrators. Administrators can even assign and revoke development values without developers having to handle them. |
| `developer-app-secrets-storage.md` | Security in .NET Microservices and Web Applications - Don't store your application secrets like passwords, connection strings or API keys in source control, understand the options you can use in ASP.NET Core, in particular you have to understand how to handle "user secrets". |
| `index.md` | Security in .NET Microservices and Web Applications - Get to know the authentication options in ASP.NET Core web applications. |

### modern-web-apps-azure/ (11 files)

| File | Description |
|------|-------------|
| `architectural-principles.md` | Architect Modern Web Applications with ASP.NET Core and Azure \| Architectural principles |
| `azure-hosting-recommendations-for-asp-net-web-apps.md` | Architect Modern Web Applications with ASP.NET Core and Azure \| Azure hosting recommendations for ASP.NET web apps |
| `choose-between-traditional-web-and-single-page-apps.md` | Learn how to choose between traditional web apps and single page applications (SPAs) when building web applications. |
| `common-client-side-web-technologies.md` | Architect Modern Web Applications with ASP.NET Core and Azure \| Common client-side web technologies |
| `common-web-application-architectures.md` | Architect Modern Web Applications with ASP.NET Core and Azure \| Explore the common web application architectures |
| `develop-asp-net-core-mvc-apps.md` | Architect Modern Web Applications with ASP.NET Core and Azure \| developing ASP.NET Core MVC Apps |
| `development-process-for-azure.md` | Architect Modern Web Applications with ASP.NET Core and Azure \| Development process for Azure |
| `index.md` | A guide that provides end-to-end guidance on building monolithic web applications using ASP.NET Core and Azure. |
| `modern-web-applications-characteristics.md` | Architect Modern Web Applications with ASP.NET Core and Azure \| Characteristics of modern web applications |
| `test-asp-net-core-mvc-apps.md` | Architect Modern Web Applications with ASP.NET Core and Azure \| Test ASP.NET Core MVC Apps |
| `work-with-data-in-asp-net-core-apps.md` | Architect Modern Web Applications with ASP.NET Core and Azure \| Working with data in ASP.NET Core apps |
