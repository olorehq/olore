> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Model Routing

> Let a router pick the model for each request, and compare routers on the Model Routing Benchmarks

A model router picks which model handles each request. You send a router slug, such as `openrouter/auto`, as the `model`, and the router chooses a model from the catalog for that request. The response's `model` field tells you which model served it.

OpenRouter offers its own routers and also provides routers and composite models built by others. You can find them all in the [model catalog](https://openrouter.ai/models).

Model routing sits on top of [provider routing](https://openrouter.ai/docs/guides/routing/provider-selection.md). Once a router picks a model, OpenRouter chooses among the providers that host it using your provider preferences, live uptime and latency, price, and prompt cache state, the same way it does for a direct request to that model.

## Choose a router

### Auto Router

| Router | Slug | Use it when |
| - | - | - |
| [Auto Router](https://openrouter.ai/docs/guides/routing/routers/auto-router.md) | `openrouter/auto` | You want one general purpose slug for mixed traffic, apps, and agents. |
| [Auto Code](https://openrouter.ai/docs/guides/routing/routers/auto-code.md) | `openrouter/auto-code` | You run a coding agent or harness and want a router tuned for pass rate, speed, and cost per solved task. |

Auto Router and Auto Code run on the same routing engine. A fast decision model rates each request, and a routing policy weighs that rating against live prices, cache status, and benchmark results to pick a model and reasoning effort. Both work inside the model pool your [guardrails](https://openrouter.ai/docs/guides/features/guardrails.md), [zero data retention](https://openrouter.ai/docs/guides/features/zdr.md) requirements, provider restrictions, BYOK keys, and allowed and excluded model lists permit.

### Specialty routers

| Router | Slug | Use it when |
| - | - | - |
| [Free Models Router](https://openrouter.ai/docs/guides/routing/routers/free-router.md) | `openrouter/free` | You want zero-cost inference for experiments and low-volume use. |
| [Pareto Router](https://openrouter.ai/docs/guides/routing/routers/pareto-router.md) | `openrouter/pareto-code` | You want a coding model selected by benchmark score, above a minimum coding score you set. |
| [Fusion Router](https://openrouter.ai/docs/guides/routing/routers/fusion-router.md) | `openrouter/fusion` | You want deep research, with a panel of models deliberating on one answer. |

### Routing technologies

| Router | Slug | Use it when |
| - | - | - |
| [Switchyard](https://openrouter.ai/docs/guides/routing/routers/switchyard-router.md) | `nvidia/switchyard` | You want to switch between a small set of models you choose, powered by NVIDIA NeMo Switchyard. |
| [Jev Router](https://openrouter.ai/docs/guides/routing/routers/jev-router.md) | `typesafe/jev-router` | You want TypeSafe's Jev decision model to pick a model and reasoning effort. |

## Compare routers on the Model Routing Benchmarks

The [Model Routing Benchmarks](https://openrouter.ai/benchmarks/routers) page publishes score and cost per task for each router on OpenRouter, next to single-model baselines, across coding, agentic, and multimodal benchmarks. Runs repeat periodically.

## Inspect routing decisions

Send the `X-OpenRouter-Metadata: enabled` header to get [router metadata](https://openrouter.ai/docs/guides/routing/routers/router-metadata.md) on the response. The router's pipeline stage lists the models it considered, the one it picked, and why. In the [chatroom](https://openrouter.ai/chat?models=openrouter%2Fauto), a routing insights panel shows the same analysis beside each reply.

## Pricing

Routers don't add a routing fee. You pay the standard price of the model that serves the request, and the context length is that model's. Judge-backed [Switchyard](https://openrouter.ai/docs/guides/routing/routers/switchyard-router.md#the-judge) requests also bill a separate judge call.
