> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Provider Logging

> Provider logging and data retention policies

Each AI provider on OpenRouter has its own data handling policies for logging and retention. This page explains how to control which providers can access your data.

## Provider Policies

### Training on Prompts

Each provider on OpenRouter has its own data handling policies. We reflect those policies in structured data on each AI endpoint that we offer.

On your account settings page, you can set whether you would like to allow routing to providers that may train on your data (according to their own policies). There are separate settings for paid and free models.

Wherever possible, OpenRouter works with providers to ensure that prompts will not be trained on, but there are exceptions. If you opt out of training in your account settings, OpenRouter will not route to providers that train. This setting has no bearing on OpenRouter's own policies and what we do with your prompts.

> [!TIP]
>
> **Data Policy Filtering**
>
> You can [restrict individual requests](https://openrouter.ai/docs/guides/routing/provider-selection.md#requiring-providers-to-comply-with-data-policies) to only use providers with a certain data policy.
>
> This is also available as an account-wide setting in [your privacy settings](https://openrouter.ai/settings/privacy).

### Data Retention & Logging

Providers also have their own data retention policies, often for compliance reasons. OpenRouter does not have routing rules that change based on data retention policies of providers, but the retention policies as reflected in each provider's terms are shown below. Any user of OpenRouter can ignore providers that don't meet their own data retention requirements.

The table uses three data policy tiers. **Zero retention** (ZDR) means no routine storage after processing. **Safety Retention** means the provider may retain prompts and responses from any request, only to prevent abuse; it's not used for training. Other providers retain data for the period shown and may train on it if marked. See [Data policy tiers](https://openrouter.ai/docs/guides/features/zdr.md#data-policy-tiers).

The full terms of service for each provider are linked from the provider's page, and aggregated in the [documentation](https://openrouter.ai/docs/guides/routing/provider-selection.md#terms-of-service).

These policies cover model providers. Server tools and plugins that call third-party services, such as search engines and sandboxes, follow those services' policies. See [Privacy and regional availability](https://openrouter.ai/docs/guides/features/server-tools.md#privacy-and-regional-availability).

## In-region routing

On the Business and Enterprise plans, OpenRouter supports in-region routing in the EU and US. There is no setting to turn on: send a request to `https://eu.openrouter.ai` or `https://us.openrouter.ai`, and its prompts and completions are processed within that region and do not leave it. See [In-Region Routing](https://openrouter.ai/docs/guides/features/in-region-routing.md) for details.

> [!NOTE]
>
> **Regional models list**
>
> To see which models are available for regional routing, call `/api/v1/models/user` through the corresponding regional hostname. [Learn more](https://openrouter.ai/docs/api/api-reference/models/list-models-filtered-by-user-provider-preferences-privacy-settings-and-guardrails.md)

Organization admins can upgrade to Business in [Settings > Manage plan](https://openrouter.ai/settings/manage-plan). For Enterprise, contact our enterprise team at [https://openrouter.ai/enterprise/form](https://openrouter.ai/enterprise/form).
