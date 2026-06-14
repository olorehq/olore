# Polly Documentation Structure

## Directory Overview

| Directory | Purpose | Files |
|-----------|---------|-------|
| `contents/` (root) | Overview, getting started, general info, migration | 4 |
| `contents/strategies/` | Resilience strategy API reference and options | 7 |
| `contents/pipelines/` | Resilience pipeline usage and registry | 2 |
| `contents/advanced/` | DI, telemetry, testing, performance, context, F#/VB | 6 |
| `contents/chaos/` | Chaos engineering strategies (fault, latency, outcome, behavior) | 5 |
| `contents/extensibility/` | Custom proactive and reactive strategy authoring | 3 |
| `contents/community/` | Community resources, integrations, cheat sheets | 6 |
| `contents/api/` | API index | 1 |
| `contents/v7/` | Legacy v7 extensibility docs | 1 |

## Root Files

| File | Description |
|------|-------------|
| `index.md` | Polly overview — what it does and links to all major areas |
| `getting-started.md` | Installation (NuGet) and quick-start pipeline example |
| `general.md` | Supported targets, async support, cancellation, thread safety |
| `migration-v8.md` | Migration guide from Polly v7 to v8 |

## strategies/

| File | Description |
|------|-------------|
| `index.md` | Overview of all resilience strategies and when to use them |
| `retry.md` | Retry strategy — options, delays, jitter, callbacks |
| `circuit-breaker.md` | Circuit breaker strategy — sampling duration, thresholds, states |
| `timeout.md` | Timeout strategy — options and cancellation behavior |
| `rate-limiter.md` | Rate limiter strategy — concurrency and token bucket limiters |
| `fallback.md` | Fallback strategy — providing alternative results on failure |
| `hedging.md` | Hedging strategy — parallel execution to reduce latency |

## pipelines/

| File | Description |
|------|-------------|
| `index.md` | ResiliencePipeline usage, building, and combining strategies |
| `resilience-pipeline-registry.md` | ResiliencePipelineRegistry for named pipeline management |

## advanced/

| File | Description |
|------|-------------|
| `dependency-injection.md` | Integrating Polly with .NET IServiceCollection DI |
| `telemetry.md` | Telemetry events, meters, and custom listeners |
| `testing.md` | Testing resilience pipelines with Polly.Testing package |
| `performance.md` | Performance characteristics and optimization guidance |
| `resilience-context.md` | ResilienceContext — passing data through pipeline execution |
| `use-with-fsharp-and-visual-basic.md` | Using Polly from F# and Visual Basic |

## chaos/

| File | Description |
|------|-------------|
| `index.md` | Chaos engineering overview and Simmy integration |
| `fault.md` | Fault chaos strategy — injecting exceptions |
| `latency.md` | Latency chaos strategy — injecting delays |
| `outcome.md` | Outcome chaos strategy — injecting faulted results |
| `behavior.md` | Behavior chaos strategy — injecting custom behaviors |

## extensibility/

| File | Description |
|------|-------------|
| `index.md` | Extensibility overview — custom strategy authoring |
| `proactive-strategy.md` | Authoring proactive (non-result-based) custom strategies |
| `reactive-strategy.md` | Authoring reactive (result-based) custom strategies |

## community/

| File | Description |
|------|-------------|
| `cheat-sheets.md` | Quick-reference cheat sheets for Polly patterns |
| `http-client-integrations.md` | Using Polly with IHttpClientFactory and HttpClient |
| `libraries-and-contributions.md` | Third-party libraries built on Polly |
| `polly-contrib.md` | Polly-Contrib organization and community packages |
| `resources.md` | Blog posts, videos, and external resources |
| `git-workflow.md` | Contribution git workflow |

## api/

| File | Description |
|------|-------------|
| `index.md` | API documentation index |

## v7/

| File | Description |
|------|-------------|
| `extensibility.md` | Legacy v7 extensibility documentation |
