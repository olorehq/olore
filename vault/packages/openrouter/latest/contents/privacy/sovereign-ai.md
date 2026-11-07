> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Sovereign AI

> EU and US in-region routing, and what it does and does not cover

## Does OpenRouter support EU data residency?

Yes, for prompts and completions. Requests to `eu.openrouter.ai` are decrypted in the EU and routed only to shared provider endpoints in Europe (the EU/EEA, the UK, and Switzerland). Requests served by your own BYOK key go to your deployment's region, which you control. Account, billing, and other operational records may be stored or processed in the US.

EU in-region routing is self-serve on Business: no contract, no monthly minimum.

## What sovereign AI means

Sovereign AI refers to a nation's or region's ability to develop, deploy, and control artificial intelligence systems within its own borders, using local infrastructure and under local regulatory frameworks. As AI becomes critical infrastructure, governments and enterprises increasingly require that AI workloads, and the data they process, stay within specific geographic and jurisdictional boundaries.

OpenRouter offers EU and US in-region routing. There is no setting to turn on: you choose the region for each request by sending it to that region's base URL. This page describes what OpenRouter covers and what it doesn't, so you can map it to your own requirements.

## Drivers of sovereign AI

Sovereign AI is driven by two converging forces:

### Regulatory Compliance

Regulations like the EU AI Act, GDPR, and sector-specific rules (healthcare, finance, defense) impose strict requirements on where data can be processed and stored. Organizations operating across jurisdictions need infrastructure that respects these boundaries.

### Data Residency and Privacy

Sensitive data (whether personal, financial, or classified) may need to be processed within a particular jurisdiction. For AI workloads, the core requirement is usually that prompts and completions are processed in a designated region.

## What OpenRouter covers

### In-Region Routing

For Business and Enterprise customers, OpenRouter supports EU and US [in-region routing](https://openrouter.ai/docs/guides/features/in-region-routing.md). When you send a request to a regional base URL, the request is decrypted within the designated region and routed only to shared provider endpoints in that region: Europe (the EU/EEA, the UK, and Switzerland) for `eu.openrouter.ai`, and the US for `us.openrouter.ai`. Requests served by your own BYOK key go to your deployment's region, which you control. Server tools and plugin engines run on a regional domain only when they have a backend resident in that region; a request that uses any other tool or engine fails instead of falling back to global infrastructure. See [Privacy and regional availability](https://openrouter.ai/docs/guides/features/server-tools.md#privacy-and-regional-availability) for each tool's regional availability.

In-region routing fails closed: if no endpoint eligible for the region (shared, BYOK, or private) can serve the requested model, the request errors instead of leaving the region. Features that would process data outside the region are rejected on regional domains. See [Feature Availability](https://openrouter.ai/docs/guides/features/in-region-routing.md#feature-availability) for the list.

Choosing a regional base URL per request is the first step. To guarantee that every request in a workspace stays in-region regardless of how a client is configured, restrict the allowed data regions in a [guardrail](https://openrouter.ai/docs/guides/features/guardrails.md). The guardrail's `allowed_data_regions` setting (`global`, `europe`, `us`) lists the OpenRouter domains that governed requests must arrive through; requests through any other domain are rejected with a 403 before processing. Setting it on the workspace default guardrail enforces the policy for all keys and members in that workspace, and per-member or per-key guardrails can narrow it further. See [Enforcing In-Region Routing with Guardrails](https://openrouter.ai/docs/guides/features/in-region-routing.md#enforcing-in-region-routing-with-guardrails).

To use in-region routing, send API requests through the region-specific base URL:

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
    model: 'meta-llama/llama-3.3-70b-instruct',
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
    model: 'meta-llama/llama-3.3-70b-instruct',
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
  'model': 'meta-llama/llama-3.3-70b-instruct',
  'input': 'Hello',
})
```

```bash title="cURL" lines theme={null}
curl https://eu.openrouter.ai/api/v1/responses \
  -H "Authorization: Bearer <OPENROUTER_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "meta-llama/llama-3.3-70b-instruct",
    "input": "Hello"
  }'
```

> [!NOTE]
>
> **In-region models list**
>
> To see which models are available for in-region routing, you can:
>
> * Call [`/api/v1/models`](https://eu.openrouter.ai/api/v1/models) through the EU domain to get the full list programmatically, or pass a `region` query parameter (`eu` or `us`) on the main domain
> * Browse [EU-eligible models](https://openrouter.ai/models?region=eu) or [US-eligible models](https://openrouter.ai/models?region=us) on the models page with the **In-Region Routing** filter
> * See the live EU model list, what may be stored or processed in the US, and guardrail setup on [EU in-region routing on Business](https://openrouter.ai/business/eu)

For full details on how requests are routed, which features are available on regional domains, and how BYOK works with regional routing, see the [In-Region Routing](https://openrouter.ai/docs/guides/features/in-region-routing.md) guide.

### Zero Data Retention (ZDR)

When [Zero Data Retention](https://openrouter.ai/docs/guides/features/zdr.md) is enforced, OpenRouter routes model inference only to provider endpoints that have a Zero Data Retention policy. ZDR enforcement does not apply to plugins, server tools, or their backends, which follow their own retention policies. See [Privacy and regional availability](https://openrouter.ai/docs/guides/features/server-tools.md#privacy-and-regional-availability) for each server tool's execution path and backend policy.

ZDR can be enforced per model group (Anthropic, OpenAI, Google, SpaceXAI, and all other models) in your [privacy settings](https://openrouter.ai/settings/privacy), via [guardrails](https://openrouter.ai/docs/guides/features/guardrails.md), or per-request:

```json lines theme={null}
{
  "model": "meta-llama/llama-3.3-70b-instruct",
  "input": "Hello",
  "provider": {
    "zdr": true
  }
}
```

### Data Collection Controls

Control whether providers can collect your data with the `data_collection` parameter:

```json lines theme={null}
{
  "provider": {
    "data_collection": "deny"
  }
}
```

When set to `"deny"`, your requests are only routed to providers that do not collect user data. This can also be configured as an account-wide default in your [privacy settings](https://openrouter.ai/settings/privacy).

### GDPR programs

OpenRouter supports GDPR programs with a DPA and Standard Contractual Clauses. The DPA includes an EU-only processing addendum (Exhibit A) for API payloads, which applies when you elect it in writing. See the [Data Processing Agreement](https://openrouter.ai/data-processing-agreement).

## What OpenRouter doesn't cover

In-region routing applies to the prompts and completions in requests sent to a regional domain. It doesn't move every record OpenRouter keeps about your account into the region:

| Processed in Europe (requests to `eu.openrouter.ai`) | May be stored or processed in the US | Your responsibility |
| - | - | - |
| Prompt and completion processing | Account data | BYOK deployment region |
| Provider inference, on shared provider endpoints in Europe (the EU/EEA, the UK, and Switzerland) | Billing records | [Broadcast](https://openrouter.ai/docs/guides/features/broadcast) and observability destinations you configure |
| OpenRouter's request handling | Authentication data | |
| | Security logs | |
| | Abuse-monitoring metadata | |
| | Other operational records | |

For setup details, see [BYOK with In-Region Routing](https://openrouter.ai/docs/guides/features/in-region-routing.md#byok-with-in-region-routing) and [Observability with In-Region Routing](https://openrouter.ai/docs/guides/features/in-region-routing.md#observability-with-in-region-routing).

## Building an in-region stack with OpenRouter

Combine these features to keep prompts and completions in one region:

1. **Send requests to a regional base URL** (`eu.openrouter.ai` or `us.openrouter.ai`) to keep model inference and supported tools within that region
2. **Restrict allowed data regions in a guardrail** so every request in a workspace, member, or API key must arrive through that regional domain
3. **Enforce ZDR** to route inference only to provider endpoints with a Zero Data Retention policy
4. **Deny data collection** to prevent training on your data
5. **Provision BYOK deployments and Broadcast destinations in the same region**, since OpenRouter can't move resources in your own accounts

This gives you a single API with unified billing and per-request control over where prompts and completions are processed, without managing relationships with individual providers in each region.

## Getting Started

In-region routing (EU or US) is self-serve on Business: no contract, no monthly minimum. To get started:

* Upgrade to Business in [Settings > Manage plan](https://openrouter.ai/settings/manage-plan), then send requests to `https://eu.openrouter.ai` or `https://us.openrouter.ai`. For Enterprise, [contact our enterprise team](https://openrouter.ai/enterprise/form).
* [Create an API key](https://openrouter.ai/settings/keys) and use [provider routing](https://openrouter.ai/docs/guides/routing/provider-selection.md) to control which providers serve your requests
* Enable [ZDR](https://openrouter.ai/docs/guides/features/zdr.md) and [data collection controls](https://openrouter.ai/docs/guides/privacy/provider-logging.md)
* Restrict allowed data regions with a [guardrail](https://openrouter.ai/docs/guides/features/guardrails.md)

For a complete enterprise setup guide, see the [Enterprise Quickstart](https://openrouter.ai/docs/cookbook/get-started/enterprise-quickstart.md).
