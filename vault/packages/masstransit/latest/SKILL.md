---
name: olore-masstransit-latest
description: Local MassTransit documentation reference (latest). MassTransit message bus documentation. Use for distributed messaging, consumers, sagas, state machines, RabbitMQ, Azure Service Bus, Amazon SQS, and event-driven architecture in .NET.
---

# MassTransit Documentation

MassTransit is an open-source distributed application framework for .NET that provides a consistent abstraction on top of supported message transports (RabbitMQ, Azure Service Bus, Amazon SQS, Kafka, ActiveMQ, SQL, and more). It simplifies building event-driven, message-based applications with consumers, sagas, state machines, routing slips, and the outbox pattern.

## Documentation Structure

```
contents/
├── 2.quick-starts/          # Transport-specific quick start guides (6 files)
├── 3.documentation/
│   ├── 1.concepts/          # Core messaging concepts (10 files)
│   ├── 2.configuration/     # Full configuration reference (40 files)
│   │   ├── 1.sagas/         # Saga configuration
│   │   ├── 2.transports/    # Transport-specific config
│   │   ├── 3.middleware/    # Middleware and filters
│   │   ├── 4.persistence/   # Saga persistence backends
│   │   ├── 6.topology/      # Broker topology
│   │   ├── 7.routing-slips/ # Routing slip configuration
│   │   └── integrations/    # SignalR, logging, NServiceBus, analyzers
│   ├── 3.patterns/          # Messaging patterns (12 files)
│   │   ├── 6.saga/          # Saga patterns and state machines
│   │   └── 7.routing-slips/ # Routing slip patterns
│   └── 6.transports/        # Transport reference docs (7 files)
├── 4.support/               # Upgrade guides and troubleshooting (5 files)
└── samples/                 # Complete working code samples (5 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / setup | `contents/2.quick-starts/1.in-memory.md`, `contents/3.documentation/2.configuration/0.index.md` |
| Messages and contracts | `contents/3.documentation/1.concepts/1.messages.md`, `contents/3.documentation/2.configuration/serialization.md` |
| Consumers | `contents/3.documentation/1.concepts/2.consumers.md`, `contents/3.documentation/2.configuration/1.consumers.md` |
| Publishing and sending | `contents/3.documentation/1.concepts/3.producers.md` |
| Request / response | `contents/3.documentation/1.concepts/6.requests.md` |
| Exception handling and retry | `contents/3.documentation/1.concepts/4.exceptions.md` |
| Testing | `contents/3.documentation/1.concepts/5.testing.md`, `contents/3.documentation/2.configuration/test-harness.md` |
| Sagas and state machines | `contents/3.documentation/3.patterns/6.saga/2.state-machine.md`, `contents/3.documentation/2.configuration/1.sagas/0.overview.md` |
| Saga persistence | `contents/3.documentation/2.configuration/4.persistence/entity-framework.md`, `contents/3.documentation/2.configuration/4.persistence/marten.md`, `contents/3.documentation/2.configuration/4.persistence/mongodb.md`, `contents/3.documentation/2.configuration/4.persistence/redis.md` |
| RabbitMQ | `contents/2.quick-starts/2.rabbitmq.md`, `contents/3.documentation/2.configuration/2.transports/2.rabbitmq.md`, `contents/3.documentation/6.transports/2.rabbitmq.md` |
| Azure Service Bus | `contents/2.quick-starts/3.azure-service-bus.md`, `contents/3.documentation/2.configuration/2.transports/3.azure-service-bus.md` |
| Amazon SQS | `contents/2.quick-starts/4.amazon-sqs.md`, `contents/3.documentation/2.configuration/2.transports/4.amazon-sqs.md` |
| Kafka | `contents/3.documentation/2.configuration/2.transports/10.kafka.md`, `contents/3.documentation/6.transports/kafka.md` |
| SQL transport / PostgreSQL | `contents/2.quick-starts/5.postgresql.md`, `contents/3.documentation/2.configuration/2.transports/6.sql.md` |
| Outbox pattern | `contents/3.documentation/3.patterns/10.in-memory-outbox.md`, `contents/3.documentation/3.patterns/11.transactional-outbox.md`, `contents/3.documentation/2.configuration/3.middleware/3.outbox.md` |
| Job consumers | `contents/3.documentation/3.patterns/13.job-consumers.md`, `contents/samples/job-consumer.md` |
| Routing slips / Courier | `contents/3.documentation/1.concepts/7.routing-slips.md`, `contents/3.documentation/2.configuration/7.routing-slips/0.overview.md` |
| Middleware and filters | `contents/3.documentation/2.configuration/3.middleware/0.index.md`, `contents/3.documentation/2.configuration/3.middleware/1.filters.md` |
| Scheduling | `contents/3.documentation/2.configuration/5.scheduling.md` |
| Observability / OpenTelemetry | `contents/3.documentation/2.configuration/observability.md` |
| MultiBus | `contents/3.documentation/2.configuration/multibus.md` |
| Topology and broker configuration | `contents/3.documentation/2.configuration/6.topology/0.index.md`, `contents/3.documentation/2.configuration/6.topology/deploy.md` |
| Upgrading between versions | `contents/4.support/4.upgrade.md` |
| Troubleshooting | `contents/4.support/common-mistakes.md`, `contents/4.support/show-configuration.md` |

## When to use

Use this skill when the user asks about:
- Setting up MassTransit with any transport (RabbitMQ, Azure Service Bus, Amazon SQS, Kafka, SQL)
- Defining and consuming messages in .NET
- Publishing and sending messages, request/response patterns
- Writing consumers, including fault consumers and exception handling
- Sagas, state machines, and stateful workflow patterns
- Saga persistence with Entity Framework, MongoDB, Redis, Marten, DynamoDB, etc.
- Outbox pattern (in-memory or transactional) for exactly-once delivery
- Routing slips and activity-based workflows (Courier)
- Job consumers for long-running background work
- Middleware, filters, and pipeline customization
- Message scheduling and delayed delivery
- Topology configuration and broker setup
- Testing MassTransit applications with the test harness
- Observability with OpenTelemetry
- Upgrading MassTransit versions

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
