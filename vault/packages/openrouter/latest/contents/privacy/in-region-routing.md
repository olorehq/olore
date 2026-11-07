> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# In-Region Routing

> Keep prompts and completions in Europe or the US

In-Region Routing (IRR) processes the prompts and completions in your requests within a designated region. When you send a request through a region-specific base URL, the request is decrypted within that region and routed only to shared provider endpoints in that region: Europe (the EU/EEA, the UK, and Switzerland) for `eu.openrouter.ai`, and the US for `us.openrouter.ai`. If no endpoint eligible for the region (shared, BYOK, or private) can serve the request, it errors instead of leaving the region. Requests served by your own BYOK key go to your deployment's region, which you control. Account and operational records are handled separately; see [What stays outside the region](#what-stays-outside-the-region).

EU in-region routing (`eu.openrouter.ai`) and US in-region routing (`us.openrouter.ai`) are available on the Business and Enterprise plans. There is no setting to turn on: once your account is on one of these plans, you choose the region for each request by sending it to that region's base URL. Organization admins can upgrade to Business in [Settings > Manage plan](https://openrouter.ai/settings/manage-plan). For Enterprise, [contact our enterprise team](https://openrouter.ai/enterprise/form).

## Using In-Region Routing

Send API requests through the region-specific base URL:

```lines theme={null}
https://eu.openrouter.ai
https://us.openrouter.ai
```

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
  serverURL: 'https://eu.openrouter.ai/api/v1',
});

const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'anthropic/claude-sonnet-5',
    input: 'Hello',
    stream: false,
  },
});
```

```typescript title="TypeScript (fetch)" lines theme={null}
fetch('https://eu.openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer <OPENROUTER_API_KEY>',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'anthropic/claude-sonnet-5',
    input: 'Hello',
  }),
});
```

```python title="Python" lines theme={null}
import requests

headers = {
  'Authorization': 'Bearer <OPENROUTER_API_KEY>',
  'Content-Type': 'application/json',
}

response = requests.post('https://eu.openrouter.ai/api/v1/responses', headers=headers, json={
  'model': 'anthropic/claude-sonnet-5',
  'input': 'Hello',
})
```

```bash title="cURL" lines theme={null}
curl https://eu.openrouter.ai/api/v1/responses \
  -H "Authorization: Bearer <OPENROUTER_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "anthropic/claude-sonnet-5",
    "input": "Hello"
  }'
```

## How Requests Are Routed

On a regional domain, OpenRouter filters the candidate endpoints for your request down to those whose provider infrastructure is located in that region. If OpenRouter has not onboarded an endpoint for the requested model to that region, the request fails with an error rather than falling back to an out-of-region endpoint. A provider might serve the model from infrastructure in the region, but the endpoint is only eligible once OpenRouter has onboarded it for EU or US routing. See Finding In-Region Models for the current list. In-region routing fails closed: OpenRouter never silently routes a regional request outside the region.

Two categories of endpoints are always excluded from regional routing even if the model is otherwise available:

* **Global / cross-region deployments.** Provider deployments that can process requests in any region (for example, Bedrock `global.` cross-region inference profiles or Vertex `global` locations) do not guarantee residency and are not eligible.
* **Multi-model routers.** Router-type models (such as the Auto Router) are excluded from regional model lists.

### Regional Endpoints on the Global Domain

Some providers bill a premium for serving a model from a specific region. OpenRouter detects the premium from the endpoint's own pricing: a regional endpoint that costs more than the provider's own standard (non-regional) endpoint for the same model and service tier, or more than the cheapest standard endpoint when the provider has no standard one, is a regional-surcharge endpoint, and one priced at parity is treated like any other endpoint. Only endpoints a default request can use count as the standard reference, so a disabled endpoint or one that needs your own key never sets the price. For closed-weight models, where the premium is a fixed multiple of the model's list price, default routing on the global domain (`https://openrouter.ai`) skips these regional-surcharge endpoints whenever the model also has a standard-priced endpoint. The model page lists them under **Not used in Standard routing**. That grouping describes shared routing without your BYOK keys, so an endpoint that only your own key unlocks still appears there.

Open-weight models (models with a Hugging Face id) have no single list price, so their regional endpoints are not held out: they stay in default routing and compete on price and performance with every other endpoint for the model, the same way priority service-tier endpoints do.

A regional-surcharge endpoint is used when:

* The request arrives on a regional domain (`https://eu.openrouter.ai` or `https://us.openrouter.ai`), where in-region routing applies
* The request pins that endpoint with its regional slug in `provider.only` or `provider.order`, for example `amazon-bedrock/eu-west-1`. A bare provider slug such as `amazon-bedrock` does not pin its regional endpoints
* The request routes through your prioritized BYOK key for a provider whose only endpoints for the model are regional, billing the premium to your own provider account. See [BYOK and Regional Endpoints](https://openrouter.ai/docs/guides/overview/auth/byok.md#byok-and-regional-endpoints)

If every endpoint for a model is surcharge-priced, they all stay in default routing.

### Finding In-Region Models

To see which models are available for in-region routing:

* Call [`/api/v1/models`](https://eu.openrouter.ai/api/v1/models) on a regional domain to get the full list programmatically, or pass a `region` query parameter (`eu` or `us`) on the main domain
* Browse [EU-eligible models](https://openrouter.ai/models?region=eu) or [US-eligible models](https://openrouter.ai/models?region=us) on the models page with the **In-Region Routing** filter
* See the live EU model list with per-provider prices on [EU in-region routing on Business](https://openrouter.ai/business/eu)

## Enforcing In-Region Routing with Guardrails

Sending requests to a regional base URL is a per-request choice. To guarantee that traffic for a key, member, or an entire workspace can only enter OpenRouter through a specific region, restrict the allowed data regions in a [guardrail](https://openrouter.ai/docs/guides/features/guardrails.md). Each guardrail can specify `allowed_data_regions`, a list of the OpenRouter domains that requests governed by that guardrail must arrive through:

| Value | Base URL |
| - | - |
| `global` | `https://openrouter.ai` |
| `europe` | `https://eu.openrouter.ai` |
| `us` | `https://us.openrouter.ai` |

A request that arrives through a domain not in the list is rejected with a **403 Forbidden** error before any inference or endpoint selection happens, so no prompt is ever processed outside the permitted regions. Leaving the setting unrestricted (`null`) accepts requests from any domain.

Enforcement applies to every OpenRouter API surface, including chat completions, embeddings, rerank, image, audio, and video generation, server tools, the Batch API, and generation lookups.

When more than one guardrail governs a request (the workspace default guardrail, the member's guardrail, and the API key's guardrail), the effective set of regions is the intersection of every guardrail that sets one, so a lower-level guardrail can only narrow the regions permitted above it. For example, if the workspace default guardrail allows `europe` and `us` and an API key guardrail allows only `europe`, requests with that key must arrive through `https://eu.openrouter.ai`.

To enforce EU residency for a whole workspace, set `allowed_data_regions` to `["europe"]` on the [workspace default guardrail](https://openrouter.ai/docs/guides/features/guardrails.md#updating-the-workspace-default-guardrail-via-api). This can be configured in the guardrail editor under **Data regions** or through the [Guardrails API](https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail.md).

> [!NOTE]
>
> The guardrail value for the EU is `europe`, while the [Models API](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties.md) region filter takes `region=eu`. The two are not interchangeable.

Data-region guardrails require a Business or Enterprise plan. If your plan stops including in-region routing while a region guardrail is still assigned, the guardrail keeps enforcing its region list, but the regional domains themselves reject requests from accounts without in-region routing. Requests governed by that guardrail are therefore rejected until you upgrade or clear the restriction (any region not in the list stays blocked; `global` in the list keeps `https://openrouter.ai` open).

## What stays outside the region

In-region routing covers the prompts and completions in requests sent to a regional domain and served by shared provider endpoints. Account and operational records, BYOK deployments, and destinations you configure are outside that boundary. For `eu.openrouter.ai`:

| Processed in Europe (requests to `eu.openrouter.ai`) | May be stored or processed in the US | Your responsibility |
| - | - | - |
| Prompt and completion processing | Account data | BYOK deployment region |
| Provider inference, on shared provider endpoints in Europe (the EU/EEA, the UK, and Switzerland) | Billing records | [Broadcast](https://openrouter.ai/docs/guides/features/broadcast) and observability destinations you configure |
| OpenRouter's request handling | Authentication data | |
| | Security logs | |
| | Abuse-monitoring metadata | |
| | Other operational records | |

OpenRouter supports GDPR programs with a DPA and Standard Contractual Clauses. The DPA includes an EU-only processing addendum (Exhibit A) for API payloads, which applies when you elect it in writing. See the [Data Processing Agreement](https://openrouter.ai/data-processing-agreement).

Features that would process data outside the region are rejected on regional domains; see [Feature Availability](#feature-availability). For your own resources, see [Observability with In-Region Routing](#observability-with-in-region-routing) and [BYOK with In-Region Routing](#byok-with-in-region-routing).

## Feature Availability

Everything on a regional domain must uphold the same residency guarantee as inference itself. Features whose infrastructure or third-party vendors process data outside your region are therefore unavailable on regional domains today, and requests that use them return an error instead of silently processing data out of region.

A regional request is admitted by its hostname and any guardrail `allowed_data_regions`. Each server tool and plugin engine in the request must then be resident in that region. See [Privacy and regional availability](https://openrouter.ai/docs/guides/features/server-tools.md#privacy-and-regional-availability) for the per-tool matrix.

**Not available with in-region routing today:**

* **Web search, except Exa in the US.** The [web search plugin](https://openrouter.ai/docs/guides/features/plugins/web-search.md) only runs on a regional domain through an engine whose backend is resident in that region. Today that is Exa on `us.openrouter.ai`, whose search backend is US-resident. `engine: "exa"`, `engine: "auto"`, and an omitted engine all run on Exa there; `auto` and an omitted engine skip the provider's native search on regional domains. Every other configuration is rejected. Perplexity, Parallel, and Firecrawl process queries outside your data region, and `engine: "native"` is not covered by the provider's regional inference commitment. No web search plugin engine is available on `eu.openrouter.ai`.
* **Web search and web fetch server tools.** The [`web_search`](https://openrouter.ai/docs/guides/features/server-tools/web-search) server tool follows the same rule as the plugin: `engine: "exa"`, `engine: "auto"`, and an omitted engine run on Exa on `us.openrouter.ai`, and every other configuration is rejected on regional domains. The [`web_fetch`](https://openrouter.ai/docs/guides/features/server-tools/web-fetch) server tool is backed by out-of-region fetch vendors, so it is not available on regional domains.
* **Other server tools with out-of-region infrastructure**, including [files](https://openrouter.ai/docs/guides/features/server-tools/files.md), [image generation](https://openrouter.ai/docs/guides/features/server-tools/image-generation.md), [Fusion](https://openrouter.ai/docs/guides/features/server-tools/fusion.md), [shell](https://openrouter.ai/docs/guides/features/server-tools/shell.md), and sandboxed [bash](https://openrouter.ai/docs/guides/features/server-tools/bash.md) (`engine: "openrouter"`). Server tools that execute entirely in-region ([tool search](https://openrouter.ai/docs/guides/features/server-tools/tool-search.md), [apply patch](https://openrouter.ai/docs/guides/features/server-tools/apply-patch.md), [datetime](https://openrouter.ai/docs/guides/features/server-tools/datetime.md), [advisor](https://openrouter.ai/docs/guides/features/server-tools/advisor.md), [subagent](https://openrouter.ai/docs/guides/features/server-tools/subagent.md), [search models](https://openrouter.ai/docs/guides/features/server-tools/search-models.md), and client-side bash) remain available.
* **PDF parsing engines other than `native` in the EU.** On `eu.openrouter.ai`, [PDF inputs](https://openrouter.ai/docs/guides/overview/multimodal/pdfs.md) require the `native` engine. On `us.openrouter.ai`, `native` and `mistral-ocr` are available. `cloudflare-ai` runs on the global endpoint only. An unavailable engine returns a `400` error.
* **Batch API.** The [Batch API](https://openrouter.ai/docs/batch-quickstart.md) currently runs on US-based storage and queueing infrastructure and does not yet support regional data residency. Submit batch requests through the global endpoint at `openrouter.ai`.
* **Multi-model routers** such as the Auto Router, as described above.

Zero Data Retention ([ZDR](https://openrouter.ai/docs/guides/features/zdr.md)) enforcement and [data collection controls](https://openrouter.ai/docs/guides/privacy/provider-logging.md) work normally with in-region routing and are commonly combined with it. See [Sovereign AI](https://openrouter.ai/docs/guides/features/sovereign-ai.md) for how these features compose.

## Observability with In-Region Routing

[Broadcast](https://openrouter.ai/docs/guides/features/broadcast) supports in-region routing. Every broadcast destination is configured with the data regions it receives traces from (global, EU, or US), and a trace from a regional request is only delivered to destinations configured for that region.

Regional broadcast delivery upholds the same data boundary as inference:

* **Traces are sent from within the data boundary.** EU and US traces are delivered to your destination directly from infrastructure inside the region, and regional trace data is never persisted to queueing infrastructure outside the region.
* **Delivery is best-effort.** Because regional traces are handled in memory only and never queued out of region, a failed delivery to a destination is not retried through the global retry queue the way global traffic is.
* **You control where the destination lives.** OpenRouter sends the trace from inside the data boundary, but the receiving endpoint is yours. If you need end-to-end residency for observability data, host the destination (e.g. your OpenTelemetry collector, Langfuse instance, or S3 bucket) inside the selected data boundary.

Configure destination regions in [Settings > Observability](https://openrouter.ai/settings/observability) when adding or editing a destination.

Separately, OpenRouter's own [input/output logging](https://openrouter.ai/docs/guides/features/input-output-logging.md) is currently skipped for all requests through the regional endpoints, even when the feature is enabled. Requests work as normal; prompt and completion logging is simply not performed.

## BYOK with In-Region Routing

[BYOK](https://openrouter.ai/docs/guides/overview/auth/byok.md) works with in-region routing, but there is an important boundary to understand:

* **OpenRouter controls which shared endpoints are eligible.** On a regional domain, OpenRouter only routes to shared provider endpoints whose infrastructure is located in that region. BYOK endpoints are not filtered this way: they are added for the provider your key belongs to, and OpenRouter sends the request to the resource your key is configured for.
* **You control where your own deployment runs.** For hyperscaler providers (AWS Bedrock, Azure, Google Vertex AI), your BYOK key authenticates against cloud resources in *your* account. OpenRouter cannot move or reconfigure those resources. If your deployment is provisioned in a region outside your data region, requests to it would leave the region.

Sending requests to `eu.openrouter.ai` or `us.openrouter.ai` does **not** by itself regionalize your cloud deployments. When you combine BYOK with in-region routing, you must ensure your hyperscaler deployments are provisioned in the matching region. The provider-specific behavior is below.

Your key is only used for a model when the provider's shared endpoint for that model is itself eligible for the region. When that shared endpoint is outside your data region but your own account with the provider processes requests inside it, declare the region on the key under **Provider agreement → Data region** in your workspace BYOK settings. See [Declaring a Data Region on a Key](https://openrouter.ai/docs/guides/overview/auth/byok.md#declaring-a-data-region-on-a-key) for the options and the cases where the declaration is not honored.

### AWS Bedrock

How OpenRouter chooses the Bedrock invocation region under in-region routing depends on your key type:

* **AWS credentials (JSON with a `region` field):** If your configured region is inside your data region (e.g. `eu-west-1` on the EU domain, `us-east-1` on the US domain), OpenRouter uses it. If your configured region is outside your data region, or no region is set, OpenRouter does **not** honor it; it instead invokes Bedrock in a default in-region location (`eu-west-1` for the EU, `us-east-1` for the US). Your AWS credentials must therefore have Bedrock access and model access enabled in that region, or requests will fail.
* **Bedrock API keys:** These are tied to a single AWS region at creation time and cannot be redirected. Create the key in a region inside your data region.
* **Cross-region inference profiles:** `global.` inference profiles can process requests in any AWS region, so they are excluded from regional routing entirely.

### Azure (AI Foundry and Azure OpenAI)

Azure BYOK configurations point at a specific resource you created (`resource_name` for Foundry configs, or a full `endpoint_url` for per-deployment configs). The geographic region of that resource was fixed when you created it in the Azure portal, and OpenRouter routes to the resource exactly as configured.

**You must create your Azure resource in a region within your data region** (e.g. an EU Azure region such as Sweden Central or West Europe for the EU domain). OpenRouter cannot verify or change where your Azure resource is deployed; a US-deployed Azure resource used from the EU domain would process your prompts in the US. Also review Azure's own data-processing settings: some Azure OpenAI features (such as global deployment types) process data outside the resource's region, so use regional (not global) deployment types for residency-sensitive workloads.

**You must also declare the region on the key.** On `eu.openrouter.ai` and `us.openrouter.ai`, an Azure key is only used when its **Provider agreement → Data region** setting matches the request's region. An Azure key left on **Global** is never used on a regional domain, even when the model's shared endpoint is in-region. See [Declaring a Data Region on a Key](https://openrouter.ai/docs/guides/overview/auth/byok.md#declaring-a-data-region-on-a-key).

### Google Vertex AI

Vertex BYOK service account keys accept an optional `region` field that selects the Vertex location OpenRouter sends requests to. Under in-region routing:

* **Set `region` to a location inside your data region** (e.g. `europe-west1` for the EU, `us-central1` for the US).
* **For most Vertex models, OpenRouter enforces this**: a key region outside your data region is rejected with an error, and an unset or `"global"` region resolves to a default location inside your data region instead of Google's global endpoint. Make sure your project has model access and quota in that location.
* **Exceptions**: models served through Vertex's OpenAI-compatible endpoint (which includes non-OpenAI models such as Llama and DeepSeek) and models served through the Vertex Interactions API use the key's configured region directly, defaulting to `global` when unset, without enforcement against your data region. Because you cannot always tell from the model which path serves it, always set an explicit in-region location on your key and never use `"global"`, since the global location lets Google process the request in any region.

### OpenAI

OpenAI serves a project with data residency only on its regional API host. To use such a project under in-region routing, enter the key as JSON with a `region` field:

```json lines theme={null}
{
  "api_key": "sk-...",
  "region": "eu"
}
```

* **`region`** is `eu` or `us`. OpenRouter sends requests made with the key to `https://eu.api.openai.com` or `https://us.api.openai.com`, and saving the key declares the matching data region on it.
* **An EU key serves `eu.openrouter.ai`, and a US key serves `us.openrouter.ai`.** A regional key never serves the other region's domain. On `openrouter.ai` it still goes to its own regional host, because OpenAI serves the project nowhere else.
* **A plain string key** is for a Global project and uses `api.openai.com`. It is never used on a regional domain.
* If OpenAI does not process an API on the regional host, a request to that API with a regional key fails with an error instead of falling back to `api.openai.com`. Use a plain key for those requests.

See [Declaring a Data Region on a Key](https://openrouter.ai/docs/guides/overview/auth/byok.md#declaring-a-data-region-on-a-key) for how the declaration interacts with key priority, fallback keys, and guardrails.

### Anthropic

Anthropic serves one global API host, so residency comes from the request rather than a regional endpoint. Declare **United States** on the Anthropic key under **Provider agreement → Data region**.

* **Claude 4.6 and later.** OpenRouter adds `inference_geo: "us"` to requests made with that key on `openrouter.ai` and `us.openrouter.ai`. Anthropic processes them in the US and bills them to your account at its US-only rate.
* **Claude 4.5 and earlier.** These models reject the parameter. On `openrouter.ai` the key runs them without a US pin; on `us.openrouter.ai` a request for them fails unless another provider eligible for the request serves that model in the US.
* **Batch API.** Batches follow the same rule as sync requests.
* **No EU option.** Anthropic has no European inference geo, so an Anthropic key cannot be declared for `eu.openrouter.ai`, and a US-declared key is not used there.
* **Files stay global.** The [Files API](https://openrouter.ai/docs/guides/features/files-api.md) works on `openrouter.ai` only.

### Baseten

To use Baseten under in-region routing, create a [regional Dedicated Deployment](https://docs.baseten.co/deployment/regional-deployments) in Baseten and add its URL as a [private endpoint](https://openrouter.ai/docs/guides/routing/private-endpoints.md) on OpenRouter. OpenRouter derives the region from the `model-{model_id}-region-{us|eu}.api.baseten.co` hostname: a `region-eu` deployment is eligible on `eu.openrouter.ai`, a `region-us` deployment on `us.openrouter.ai`.

The region is fixed per deployment, so changing the URL on OpenRouter re-derives it. Shared Model APIs, non-regional dedicated hosts, and regional environments are served on the global domain only.

### Why This Matters

OpenRouter's in-region guarantee covers everything OpenRouter controls: where your request is decrypted, which provider endpoints it is routed to, and where responses are processed. For BYOK on hyperscalers, the final leg of the request runs on infrastructure in *your* cloud account, so the residency of that leg is determined by how you provisioned it. A correctly regionalized deployment plus a regional OpenRouter domain gives you end-to-end residency; a misconfigured deployment silently breaks it on the leg you control, which is why verifying your deployment regions is essential.

## Getting Started

* Organization admins can upgrade to the Business plan in [Settings > Manage plan](https://openrouter.ai/settings/manage-plan). For Enterprise, [contact our enterprise team](https://openrouter.ai/enterprise/form). There is nothing to turn on afterward: send requests to `https://eu.openrouter.ai` or `https://us.openrouter.ai`.
* Review [Sovereign AI](https://openrouter.ai/docs/guides/features/sovereign-ai.md) for combining in-region routing with ZDR and data collection controls
* Configure [BYOK](https://openrouter.ai/docs/guides/overview/auth/byok.md) keys with region-appropriate deployments as described above

## Frequently asked questions

### Is OpenRouter US-only?

No. OpenRouter Business routes requests sent to `eu.openrouter.ai` only to shared provider endpoints in Europe (the EU/EEA, the UK, and Switzerland), and requests sent to `us.openrouter.ai` only to shared provider endpoints in the US. Requests sent to `openrouter.ai` use global routing. Requests served by your own BYOK key go to your deployment's region, which you control.

### Does EU routing need Enterprise?

No. EU in-region routing is self-serve on Business: no contract, no monthly minimum. Organization admins can upgrade in [Settings > Manage plan](https://openrouter.ai/settings/manage-plan) and then send requests to `https://eu.openrouter.ai`. Enterprise is available if you need a custom agreement.
