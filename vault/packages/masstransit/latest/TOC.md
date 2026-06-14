# MassTransit Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/2.quick-starts/` | Quick start guides for each transport | 6 |
| `contents/3.documentation/1.concepts/` | Core messaging concepts | 10 |
| `contents/3.documentation/2.configuration/` | Configuration guides (consumers, sagas, transports, middleware, persistence, topology, routing slips, integrations) | 40 |
| `contents/3.documentation/3.patterns/` | Messaging patterns (sagas, outbox, job consumers, routing slips, claim check) | 12 |
| `contents/3.documentation/6.transports/` | Transport-specific reference docs | 7 |
| `contents/4.support/` | Upgrade guides, troubleshooting, package list | 5 |
| `contents/samples/` | Complete working code samples | 5 |

## 2.quick-starts/

| File | Description |
|------|-------------|
| `1.in-memory.md` | In-memory transport quick start |
| `2.rabbitmq.md` | RabbitMQ quick start |
| `3.azure-service-bus.md` | Azure Service Bus quick start |
| `4.amazon-sqs.md` | Amazon SQS quick start |
| `5.postgresql.md` | PostgreSQL/SQL transport quick start |
| `templates.md` | MassTransit project templates |

## 3.documentation/1.concepts/

| File | Description |
|------|-------------|
| `0.index.md` | Concepts overview |
| `1.messages.md` | Message types, contracts, and design |
| `2.consumers.md` | Consumer types and usage |
| `3.producers.md` | Publishing and sending messages, message initialization |
| `4.exceptions.md` | Exception handling and fault consumers |
| `5.testing.md` | Unit and integration testing |
| `6.requests.md` | Request/response pattern |
| `7.routing-slips.md` | Routing slip concept overview |
| `mediator.md` | Mediator (in-process) usage |
| `riders.md` | Rider concept for Kafka/EventHub |

## 3.documentation/2.configuration/

| File | Description |
|------|-------------|
| `0.index.md` | Configuration overview with AddMassTransit |
| `1.consumers.md` | Consumer registration and configuration |
| `1.sagas/0.overview.md` | Saga configuration overview |
| `1.sagas/1.state.md` | State instance configuration |
| `1.sagas/2.event.md` | Event configuration in sagas |
| `1.sagas/3.requests.md` | Request handling in sagas |
| `1.sagas/4.registration.md` | Saga registration |
| `1.sagas/9.custom.md` | Custom saga repositories |
| `2.transports/2.rabbitmq.md` | RabbitMQ transport configuration |
| `2.transports/3.azure-service-bus.md` | Azure Service Bus configuration |
| `2.transports/4.amazon-sqs.md` | Amazon SQS configuration |
| `2.transports/5.activemq.md` | ActiveMQ configuration |
| `2.transports/6.sql.md` | SQL transport configuration |
| `2.transports/10.kafka.md` | Kafka rider configuration |
| `2.transports/11.azure-event-hub.md` | Azure Event Hub configuration |
| `2.transports/21.azure-functions.md` | Azure Functions hosting |
| `2.transports/22.aws-lambda.md` | AWS Lambda hosting |
| `3.middleware/0.index.md` | Middleware overview |
| `3.middleware/1.filters.md` | Middleware filters |
| `3.middleware/2.scoped.md` | Scoped filters |
| `3.middleware/3.outbox.md` | Outbox middleware |
| `3.middleware/transactions.md` | Transaction support |
| `4.persistence/azure-cosmos.md` | Azure Cosmos DB saga persistence |
| `4.persistence/azure-service-bus.md` | Azure Service Bus saga persistence |
| `4.persistence/azure-table.md` | Azure Table Storage saga persistence |
| `4.persistence/dapper.md` | Dapper saga persistence |
| `4.persistence/dynamodb.md` | DynamoDB saga persistence |
| `4.persistence/entity-framework.md` | Entity Framework Core saga persistence |
| `4.persistence/marten.md` | Marten (PostgreSQL) saga persistence |
| `4.persistence/mongodb.md` | MongoDB saga persistence |
| `4.persistence/nhibernate.md` | NHibernate saga persistence |
| `4.persistence/redis.md` | Redis saga persistence |
| `5.scheduling.md` | Message scheduling and delayed delivery |
| `6.topology/0.index.md` | Topology overview |
| `6.topology/1.message.md` | Message topology |
| `6.topology/conventions.md` | Topology conventions |
| `6.topology/deploy.md` | Broker topology deployment |
| `7.routing-slips/0.overview.md` | Routing slip configuration overview |
| `7.routing-slips/1.registration.md` | Activity registration |
| `7.routing-slips/2.routing_slip.md` | Building and executing routing slips |
| `integrations/1.signalr.md` | SignalR integration |
| `integrations/external-systems.md` | Consuming messages from non-MassTransit systems |
| `integrations/logging.md` | Logging configuration |
| `integrations/nsb.md` | NServiceBus interoperability |
| `integrations/roslyn-analyzer.md` | Roslyn code analyzer |
| `multibus.md` | Multiple bus instances (MultiBus) |
| `observability.md` | OpenTelemetry and observability |
| `obsolete.md` | Obsolete methods and migration guidance |
| `serialization.md` | Message serialization configuration |
| `test-harness.md` | Test harness configuration |
| `usage-telemetry.md` | Usage telemetry configuration and opt-out |

## 3.documentation/3.patterns/

| File | Description |
|------|-------------|
| `6.saga/0.index.md` | Saga patterns overview |
| `6.saga/1.consumer-sagas.md` | Consumer-based sagas |
| `6.saga/2.state-machine.md` | State machine sagas (Automatonymous) |
| `6.saga/3.persistence.md` | Saga persistence patterns |
| `6.saga/guidance.md` | Saga design guidance |
| `7.routing-slips/monitor-via-saga.md` | Monitoring routing slips via saga |
| `8.claim-check.md` | Claim check pattern for large messages |
| `9.durable-futures.md` | Durable futures pattern |
| `10.in-memory-outbox.md` | In-memory outbox pattern |
| `11.transactional-outbox.md` | Transactional outbox pattern |
| `12.newid.md` | NewId sequential ID generation |
| `13.job-consumers.md` | Job consumer pattern |

## 3.documentation/6.transports/

| File | Description |
|------|-------------|
| `in-memory.md` | In-memory transport reference |
| `2.rabbitmq.md` | RabbitMQ transport reference |
| `3.azure-service-bus.md` | Azure Service Bus transport reference |
| `4.amazon-sqs.md` | Amazon SQS transport reference |
| `5.activemq.md` | ActiveMQ transport reference |
| `kafka.md` | Kafka rider reference |
| `sql.md` | SQL transport reference |

## 4.support/

| File | Description |
|------|-------------|
| `3.samples.md` | Sample repositories and code |
| `4.upgrade.md` | Upgrade notes between versions |
| `common-mistakes.md` | Common mistakes and troubleshooting |
| `packages.md` | NuGet package listing |
| `show-configuration.md` | How to probe and display bus configuration |

## samples/

| File | Description |
|------|-------------|
| `getting-started.md` | Getting started sample walkthrough |
| `job-consumer.md` | Job consumer sample |
| `sample-kafka.md` | Kafka sample |
| `sql-transport.md` | SQL transport sample |
| `web-application-factory.md` | ASP.NET web application factory sample |
