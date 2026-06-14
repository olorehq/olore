---
name: olore-polly-latest
description: Local Polly documentation reference (latest). Polly resilience library documentation. Use for retry policies, circuit breakers, timeouts, hedging, rate limiting, fallback strategies, and fault handling in .NET.
---

# Polly Documentation

Polly is a .NET resilience library for handling transient faults. It provides retry, circuit breaker, timeout, rate limiter, fallback, and hedging strategies that can be composed into resilience pipelines.

## Documentation Structure

```
contents/
├── (root)/           # Overview, getting started, general, migration (4 files)
├── strategies/       # Retry, circuit breaker, timeout, rate limiter, fallback, hedging (7 files)
├── pipelines/        # ResiliencePipeline usage and registry (2 files)
├── advanced/         # DI, telemetry, testing, performance, context (6 files)
├── chaos/            # Chaos engineering — fault, latency, outcome, behavior (5 files)
├── extensibility/    # Custom strategy authoring (3 files)
├── community/        # HttpClient integration, cheat sheets, resources (6 files)
├── api/              # API index (1 file)
└── v7/               # Legacy v7 docs (1 file)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Getting started / installation | `contents/getting-started.md`, `contents/index.md` |
| Retry policies | `contents/strategies/retry.md` |
| Circuit breaker | `contents/strategies/circuit-breaker.md` |
| Timeout | `contents/strategies/timeout.md` |
| Rate limiting | `contents/strategies/rate-limiter.md` |
| Fallback | `contents/strategies/fallback.md` |
| Hedging (parallel execution) | `contents/strategies/hedging.md` |
| Building pipelines / combining strategies | `contents/pipelines/index.md` |
| Named pipelines / registry | `contents/pipelines/resilience-pipeline-registry.md` |
| Dependency injection (.NET DI) | `contents/advanced/dependency-injection.md` |
| Telemetry and observability | `contents/advanced/telemetry.md` |
| Testing resilience pipelines | `contents/advanced/testing.md` |
| Performance | `contents/advanced/performance.md` |
| Passing context data | `contents/advanced/resilience-context.md` |
| Chaos / fault injection | `contents/chaos/index.md`, `contents/chaos/fault.md`, `contents/chaos/latency.md` |
| Custom strategies | `contents/extensibility/proactive-strategy.md`, `contents/extensibility/reactive-strategy.md` |
| HttpClient integration | `contents/community/http-client-integrations.md` |
| Migration from v7 | `contents/migration-v8.md` |

## When to use

Use this skill when the user asks about:
- Configuring retry policies with backoff, jitter, or custom predicates
- Implementing circuit breakers to prevent cascading failures
- Adding timeouts to async operations
- Rate limiting requests with concurrency or token bucket limiters
- Providing fallback values or behaviors on failure
- Hedging requests for low-latency requirements
- Composing multiple resilience strategies into a pipeline
- Integrating Polly with IHttpClientFactory or .NET DI
- Writing unit tests for resilience pipelines
- Injecting faults or latency for chaos testing
- Authoring custom resilience strategies
- Migrating from Polly v7 to v8

## How to find information

1. Use the Topic Guide above to identify relevant files for the user's question
2. Read `TOC.md` for the complete file listing by directory
3. Read specific files from `contents/{path}` as needed
