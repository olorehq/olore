# MassTransit Table of Contents

## Directory Map

```
contents/
├── 1.introduction/           # What is MassTransit (1 file)
├── 2.quick-starts/           # Quick start guides (6 files)
├── 3.documentation/
│   ├── 1.concepts/           # Core concepts (10 files)
│   ├── 2.configuration/      # Configuration reference (38 files)
│   │   ├── 1.sagas/          # Saga configuration
│   │   ├── 2.transports/     # Transport configuration
│   │   ├── 3.middleware/     # Middleware
│   │   ├── 4.persistence/    # Persistence backends
│   │   ├── 6.topology/       # Topology configuration
│   │   ├── 7.routing-slips/  # Routing slip configuration
│   │   └── integrations/     # Third-party integrations
│   ├── 3.patterns/           # Messaging patterns (13 files)
│   │   ├── 6.saga/           # Saga patterns
│   │   └── 7.routing-slips/  # Routing slip patterns
│   └── 6.transports/         # Transport reference (8 files)
├── 4.support/                # Support and upgrade guides (6 files)
└── samples/                  # Sample code references (5 files)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| New user | `contents/1.introduction/0.index.md` |
| Quick start (in-memory) | `contents/2.quick-starts/1.in-memory.md` |
| Quick start (RabbitMQ) | `contents/2.quick-starts/2.rabbitmq.md` |
| Consumers | `contents/3.documentation/1.concepts/2.consumers.md` |
| Sagas / state machines | `contents/3.documentation/3.patterns/6.saga/2.state-machine.md` |
| Transport config | `contents/3.documentation/2.configuration/2.transports/` |
| Persistence config | `contents/3.documentation/2.configuration/4.persistence/` |
| Testing | `contents/3.documentation/1.concepts/5.testing.md` |
| Troubleshooting | `contents/4.support/common-mistakes.md` |
| Upgrade guide | `contents/4.support/4.upgrade.md` |

## Detailed Structure

### 1.introduction/ (1 file)

| File | Description |
|------|-------------|
| `0.index.md` | What is MassTransit, core capabilities overview |

### 2.quick-starts/ (6 files)

| File | Description |
|------|-------------|
| `0.index.md` | Quick starts overview |
| `1.in-memory.md` | In-memory transport quick start |
| `2.rabbitmq.md` | RabbitMQ quick start |
| `3.azure-service-bus.md` | Azure Service Bus quick start |
| `4.amazon-sqs.md` | Amazon SQS quick start |
| `5.postgresql.md` | PostgreSQL (SQL transport) quick start |
| `templates.md` | Project templates |

### 3.documentation/1.concepts/ (10 files)

| File | Description |
|------|-------------|
| `0.index.md` | Concepts overview |
| `1.messages.md` | Message types and contracts |
| `2.consumers.md` | Consumers, consumer definitions |
| `3.producers.md` | Publishing and sending messages |
| `4.exceptions.md` | Exception handling, retry, redelivery |
| `5.testing.md` | Unit and integration testing |
| `6.requests.md` | Request/response pattern |
| `7.routing-slips.md` | Routing slips overview |
| `mediator.md` | Mediator (in-process bus) |
| `riders.md` | Riders (Kafka, Azure Event Hub) |

### 3.documentation/2.configuration/ (main files)

| File | Description |
|------|-------------|
| `0.index.md` | Configuration overview |
| `1.consumers.md` | Consumer registration and configuration |
| `5.scheduling.md` | Message scheduling |
| `multibus.md` | Multiple bus instances |
| `observability.md` | OpenTelemetry, metrics, tracing |
| `serialization.md` | Message serialization |
| `test-harness.md` | Test harness configuration |
| `obsolete.md` | Obsolete methods and migration |

### 3.documentation/2.configuration/1.sagas/ (6 files)

| File | Description |
|------|-------------|
| `0.overview.md` | Saga configuration overview |
| `1.state.md` | State machine states |
| `2.event.md` | Events and behaviors |
| `3.requests.md` | Request handling in sagas |
| `4.registration.md` | Saga registration |
| `9.custom.md` | Custom saga repositories |

### 3.documentation/2.configuration/2.transports/ (9 files)

| File | Description |
|------|-------------|
| `2.rabbitmq.md` | RabbitMQ configuration |
| `3.azure-service-bus.md` | Azure Service Bus configuration |
| `4.amazon-sqs.md` | Amazon SQS configuration |
| `5.activemq.md` | ActiveMQ configuration |
| `6.sql.md` | SQL transport configuration |
| `10.kafka.md` | Kafka configuration |
| `11.azure-event-hub.md` | Azure Event Hub configuration |
| `21.azure-functions.md` | Azure Functions integration |
| `22.aws-lambda.md` | AWS Lambda integration |

### 3.documentation/2.configuration/3.middleware/ (5 files)

| File | Description |
|------|-------------|
| `0.index.md` | Middleware overview |
| `1.filters.md` | Custom middleware filters |
| `2.scoped.md` | Scoped filters |
| `3.outbox.md` | Outbox middleware |
| `transactions.md` | Transaction middleware |

### 3.documentation/2.configuration/4.persistence/ (10 files)

| File | Description |
|------|-------------|
| `entity-framework.md` | Entity Framework Core saga persistence |
| `marten.md` | Marten (PostgreSQL) saga persistence |
| `mongodb.md` | MongoDB saga persistence |
| `redis.md` | Redis saga persistence |
| `azure-cosmos.md` | Azure Cosmos DB saga persistence |
| `azure-service-bus.md` | Azure Service Bus saga persistence |
| `azure-table.md` | Azure Table Storage saga persistence |
| `dapper.md` | Dapper saga persistence |
| `dynamodb.md` | Amazon DynamoDB saga persistence |
| `nhibernate.md` | NHibernate saga persistence |

### 3.documentation/2.configuration/6.topology/ (4 files)

| File | Description |
|------|-------------|
| `0.index.md` | Topology overview |
| `1.message.md` | Message topology |
| `conventions.md` | Naming conventions |
| `deploy.md` | Topology deployment |

### 3.documentation/2.configuration/7.routing-slips/ (3 files)

| File | Description |
|------|-------------|
| `0.overview.md` | Routing slip overview |
| `1.registration.md` | Activity registration |
| `2.routing_slip.md` | Building routing slips |

### 3.documentation/2.configuration/integrations/ (5 files)

| File | Description |
|------|-------------|
| `1.signalr.md` | SignalR integration |
| `external-systems.md` | External system integration |
| `logging.md` | Logging configuration |
| `nsb.md` | NServiceBus interoperability |
| `roslyn-analyzer.md` | Roslyn code analyzer |

### 3.documentation/3.patterns/ (13 files)

| File | Description |
|------|-------------|
| `0.index.md` | Patterns overview |
| `8.claim-check.md` | Claim check pattern |
| `9.durable-futures.md` | Durable futures pattern |
| `10.in-memory-outbox.md` | In-memory outbox pattern |
| `11.transactional-outbox.md` | Transactional outbox pattern |
| `12.newid.md` | NewId sequential ID generation |
| `13.job-consumers.md` | Job consumers pattern |
| `6.saga/0.index.md` | Saga patterns overview |
| `6.saga/1.consumer-sagas.md` | Consumer saga implementation |
| `6.saga/2.state-machine.md` | Automatonymous state machine sagas |
| `6.saga/3.persistence.md` | Saga persistence strategies |
| `6.saga/guidance.md` | Saga design guidance |
| `7.routing-slips/monitor-via-saga.md` | Monitor routing slips via saga |

### 3.documentation/6.transports/ (8 files)

| File | Description |
|------|-------------|
| `0.index.md` | Transports overview |
| `2.rabbitmq.md` | RabbitMQ transport details |
| `3.azure-service-bus.md` | Azure Service Bus transport details |
| `4.amazon-sqs.md` | Amazon SQS transport details |
| `5.activemq.md` | ActiveMQ transport details |
| `in-memory.md` | In-memory transport details |
| `kafka.md` | Kafka transport details |
| `sql.md` | SQL transport details |

### 4.support/ (6 files)

| File | Description |
|------|-------------|
| `0.index.md` | Support overview |
| `3.samples.md` | Sample projects |
| `4.upgrade.md` | Upgrade guide |
| `common-mistakes.md` | Common mistakes and fixes |
| `packages.md` | NuGet packages reference |
| `show-configuration.md` | Diagnostic configuration display |

### samples/ (5 files)

| File | Description |
|------|-------------|
| `getting-started.md` | Getting started sample |
| `job-consumer.md` | Job consumer sample |
| `sample-kafka.md` | Kafka sample |
| `sql-transport.md` | SQL transport sample |
| `web-application-factory.md` | Web application factory sample |
