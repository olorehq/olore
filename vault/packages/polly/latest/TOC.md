# polly Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/strategies/` | Resilience strategies: retry, circuit breaker, timeout, fallback, hedging, rate limiter | 7 |
| `contents/advanced/` | Advanced topics: DI, telemetry, testing, performance, resilience context | 6 |
| `contents/chaos/` | Chaos engineering strategies: fault, latency, outcome, behavior injection | 5 |
| `contents/community/` | HTTP client integrations, contrib libraries, cheat sheets, resources | 5 |
| `contents/extensibility/` | Custom strategy extensibility: proactive and reactive strategies | 3 |
| `contents/pipelines/` | Resilience pipelines and pipeline registry | 2 |
| `contents/v7/` | Polly v7 extensibility docs | 1 |
| `contents/` (root) | Getting started, general concepts, migration guide, index | 4 |

## strategies/

| File | Description |
|------|-------------|
| `strategies/index.md` | Overview of all resilience strategies |
| `strategies/retry.md` | Retry strategy: configuration, delay, jitter, callbacks |
| `strategies/circuit-breaker.md` | Circuit breaker strategy: half-open, sampling, configuration |
| `strategies/timeout.md` | Timeout strategy: configuration and cancellation |
| `strategies/fallback.md` | Fallback strategy: providing substitute results on failure |
| `strategies/hedging.md` | Hedging strategy: parallel/sequential hedged requests |
| `strategies/rate-limiter.md` | Rate limiter strategy: concurrency and token bucket limiters |

## advanced/

| File | Description |
|------|-------------|
| `advanced/dependency-injection.md` | Registering and resolving Polly pipelines with .NET DI |
| `advanced/telemetry.md` | Built-in telemetry, metrics, and OpenTelemetry integration |
| `advanced/testing.md` | Unit testing with Polly pipelines and NSubstitute/Moq |
| `advanced/performance.md` | Performance considerations and optimization tips |
| `advanced/resilience-context.md` | Passing context data through resilience pipelines |
| `advanced/use-with-fsharp-and-visual-basic.md` | Using Polly from F# and Visual Basic |

## chaos/

| File | Description |
|------|-------------|
| `chaos/index.md` | Overview of Polly chaos engineering (Simmy) |
| `chaos/fault.md` | Fault injection strategy: injecting exceptions |
| `chaos/latency.md` | Latency injection strategy: adding artificial delays |
| `chaos/outcome.md` | Outcome injection strategy: injecting results |
| `chaos/behavior.md` | Behavior injection strategy: executing custom actions |

## community/

| File | Description |
|------|-------------|
| `community/http-client-integrations.md` | Using Polly with HttpClientFactory and IHttpClientBuilder |
| `community/cheat-sheets.md` | Quick reference cheat sheets for common Polly patterns |
| `community/libraries-and-contributions.md` | Third-party libraries and community contributions |
| `community/polly-contrib.md` | Polly-Contrib ecosystem and custom policy templates |
| `community/resources.md` | Blog posts, courses, videos, and learning resources |

## extensibility/

| File | Description |
|------|-------------|
| `extensibility/index.md` | Overview of custom strategy extensibility |
| `extensibility/proactive-strategy.md` | Building proactive (non-reactive) custom strategies |
| `extensibility/reactive-strategy.md` | Building reactive custom strategies (fault-handling) |

## pipelines/

| File | Description |
|------|-------------|
| `pipelines/index.md` | ResiliencePipeline: composing and executing strategies |
| `pipelines/resilience-pipeline-registry.md` | ResiliencePipelineRegistry for named pipeline management |

## v7/

| File | Description |
|------|-------------|
| `v7/extensibility.md` | Custom policies in Polly v7 (legacy reference) |

## Root files

| File | Description |
|------|-------------|
| `index.md` | Polly documentation home and overview |
| `getting-started.md` | Installation and first steps with Polly v8 |
| `general.md` | Core concepts: ResilienceStrategy, execution, generics |
| `migration-v8.md` | Migration guide from Polly v7 to v8 |
