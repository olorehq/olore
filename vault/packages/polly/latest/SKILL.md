---
name: olore-polly-latest
description: Local polly documentation reference (latest). Polly resilience library documentation. Use for retry policies, circuit breakers, timeouts, hedging, rate limiting, fallback strategies, and fault handling in .NET.
---

# polly Documentation

Polly resilience library documentation. Use for retry policies, circuit breakers, timeouts, hedging, rate limiting, fallback strategies, and fault handling in .NET.

## Documentation Structure

```
contents/
├── strategies/       # Retry, circuit breaker, timeout, fallback, hedging, rate limiter (7 files)
├── advanced/         # DI, telemetry, testing, performance, resilience context (6 files)
├── chaos/            # Chaos engineering: fault, latency, outcome, behavior injection (5 files)
├── community/        # HTTP client integrations, contrib libraries, cheat sheets (5 files)
├── extensibility/    # Custom proactive and reactive strategies (3 files)
├── pipelines/        # ResiliencePipeline and pipeline registry (2 files)
├── v7/               # Polly v7 legacy extensibility reference (1 file)
└── (root)            # Getting started, general concepts, migration guide (4 files)
```

## Topic Guide

| Topic | Key Files |
|-------|-----------|
| Installation & setup | `contents/getting-started.md`, `contents/index.md` |
| Core concepts | `contents/general.md` |
| Retry policy | `contents/strategies/retry.md` |
| Circuit breaker | `contents/strategies/circuit-breaker.md` |
| Timeout | `contents/strategies/timeout.md` |
| Fallback | `contents/strategies/fallback.md` |
| Hedging | `contents/strategies/hedging.md` |
| Rate limiting | `contents/strategies/rate-limiter.md` |
| Composing strategies | `contents/pipelines/index.md` |
| Named pipelines & DI | `contents/pipelines/resilience-pipeline-registry.md`, `contents/advanced/dependency-injection.md` |
| Telemetry & OpenTelemetry | `contents/advanced/telemetry.md` |
| Testing with Polly | `contents/advanced/testing.md` |
| Performance | `contents/advanced/performance.md` |
| Passing context data | `contents/advanced/resilience-context.md` |
| Chaos/fault injection | `contents/chaos/index.md`, `contents/chaos/fault.md`, `contents/chaos/latency.md` |
| Custom strategies | `contents/extensibility/proactive-strategy.md`, `contents/extensibility/reactive-strategy.md` |
| HttpClientFactory integration | `contents/community/http-client-integrations.md` |
| Migration from v7 | `contents/migration-v8.md` |

## When to use

Use this skill when the user asks about:
- Retry policies and transient fault handling in .NET
- Circuit breakers, timeouts, and fallback strategies
- Hedging and rate limiting with Polly
- Composing resilience pipelines
- Dependency injection with Polly v8
- Telemetry, metrics, and OpenTelemetry integration
- Unit testing code that uses Polly
- Chaos engineering and fault injection (Simmy)
- Writing custom Polly strategies
- Migrating from Polly v7 to v8
- HttpClientFactory and IHttpClientBuilder integration

## How to find information

1. Use Topic Guide above to identify relevant files
2. Read `TOC.md` for complete file listing by directory
3. Read specific files from `contents/{path}`
