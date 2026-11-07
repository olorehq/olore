> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Input & Output Logging

> Privately store and review your prompts and completions

Input & Output Logging lets you privately save and review the full content of your requests and responses. Use it to debug issues, compare model responses, and optimize your prompts. Once enabled, your prompts and completions are accessible from your [Logs](https://openrouter.ai/logs) page.

> [!NOTE]
>
> This feature is currently in **Beta**.

## Enabling Input & Output Logging

Navigate to your [**Observability**](https://openrouter.ai/workspaces/default/observability) settings and toggle **Input & Output Logging** to enable it. For organizations, only admins can view and toggle this setting.

## Filtering by API Key

By default, Input & Output Logging applies to requests from all of your API keys. In the **API Keys Filter** section of your Observability settings, you can narrow this down:

* **Included API Keys**: only log requests made with these keys. If no keys are selected, all API keys are included.
* **Excluded API Keys**: never log requests made with these keys. Exclusions take precedence over included keys.

For organizations, admins can lock these filters so members cannot modify them.

## Viewing Stored Prompts

Once Input & Output Logging is enabled, you can view your stored prompts and completions from the [Logs](https://openrouter.ai/logs) page:

1. Open your **Logs** page
2. Click on a generation in the list to open the generation detail view
3. Switch between the **Prompt** and **Completion** tabs to review the full content

The generation detail view also shows metadata including the model used, provider, token counts, and cost.

> [!NOTE]
>
> Only generations made after enabling Input & Output Logging will have stored content.

## Storage, Privacy, and Access

* **Storage**: Prompt and response data is stored in an isolated Google Cloud Storage project with separate access controls. All data is encrypted at rest using Google Cloud's [default encryption](https://docs.cloud.google.com/docs/security/encryption/default-encryption) (AES-256).
* **Retention**: Data is retained for a minimum of 3 months, and may be retained beyond 3 months at OpenRouter's discretion unless you request deletion. Account owners can request deletion of their stored data at any time by contacting [support@openrouter.ai](mailto:support@openrouter.ai).
* **Privacy**: OpenRouter does not access or use your prompt and response data logged with this feature for model training, analytics, or any other purpose. The data is stored solely for your own review and use. See the [Privacy Policy](https://openrouter.ai/privacy) for full details.
* **Organization access**: For organization accounts, org admins can view stored prompt and response content for every request in the organization. Other members, including workspace admins, can view stored content only for requests attributed to them: requests they make in the OpenRouter app and requests made with API keys they created, whoever uses the key. Content for requests with no attributed creator is visible only to org admins.

## Regional routing limitation

At this time, Input & Output Logging does **not** apply to requests routed through `eu.openrouter.ai` or `us.openrouter.ai`. If you have in-region routing enabled, requests processed through either regional endpoint will work as normal but input/output logging will be skipped.

## Comparison with Broadcast

Input & Output Logging allows you to view your prompts and completions in your logs on the OpenRouter platform. Broadcast sends your data to an external observability tool. Both features are configured in your workspace's [Observability settings](https://openrouter.ai/settings/observability) and can be used together for comprehensive observability.

| | Input & Output Logging | Broadcast |
| - | - | - |
| **Where data is stored** | On OpenRouter | On your external platform |
| **Setup** | Single toggle | Configure destinations and credentials |
| **Access** | Logs page | Your observability platform |
| **Use case** | Quick debugging, evaluating responses, and optimizing prompts | Production monitoring and analytics |
| **Privacy** | Always private (org admins, plus each member for their own requests) | Configurable per destination |

## Comparison with OpenRouter Using Inputs/Outputs

Input & Output Logging keeps your data strictly private for your own use, makes your prompts and completions visible in logs, and is enabled in Observability. Enabling OpenRouter to use your inputs/outputs is an independent setting, enabled in Privacy, that allows OpenRouter to use your data to improve the product in exchange for a 1% discount on all model usage. You can enable one, the other, or both.

| | Input & Output Logging | Data Discount Logging |
| - | - | - |
| **Purpose** | Private review and debugging | Discount in exchange for data sharing |
| **Privacy** | Never used by OpenRouter | OpenRouter may use data to improve the product |
| **Discount** | No discount | 1% discount on all LLMs |
| **Where to enable** | Observability settings | Privacy settings |
