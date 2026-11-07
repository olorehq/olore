> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Data Collection

> What data OpenRouter collects

> [!NOTE]
>
> OpenRouter retains prompts only when you opt in, or when retention is needed for CSAM review, reporting, and related legal preservation. Requests to Safety Retention endpoints are the exception: OpenRouter or the provider may retain prompts and responses from any request, only to prevent abuse, and not for training. You can exclude them with **ZDR only** in your [privacy settings](https://openrouter.ai/settings/privacy). OpenRouter has never sold or licensed prompt data. We share it only to deliver the service or meet legal duties, such as NCMEC reports. We document which providers may capture data for training, and provide settings to control how your own prompts may be used.

When using AI through OpenRouter, whether via the chat interface or the API, your prompts and responses go through multiple touchpoints. You control how your data is handled at each step.

This page gives an overview of how your data is stored and used by OpenRouter. More information is available in the [privacy policy](https://openrouter.ai/privacy) and [terms of service](https://openrouter.ai/terms).

## Within OpenRouter

OpenRouter does not store your prompts or responses, *unless* you opt in to one or both of the following, or content is flagged as potential CSAM:

* **Private Input & Output Logging:** Make your prompts and completions visible in your logs for debugging, comparing model responses, and optimizing prompts. OpenRouter does not access or use this data. For organizations, org admins can view all logged data; members can view their own. Off by default. Enable it in your [Observability settings](https://openrouter.ai/workspaces/default/observability).
* **OpenRouter Use of Inputs/Outputs:** Allow OpenRouter to use your prompt and completion data to improve the product. In exchange, you receive a 1% discount on all model usage. Off by default. Enable it in your [Privacy settings](https://openrouter.ai/workspaces/default/settings).

**CSAM screening:** OpenRouter will screen inference requests, including ZDR traffic, for child sexual abuse material (CSAM) in flight. Content flagged as potential CSAM may be retained for human review, reporting, and preservation where required by law. See [CSAM Screening Across OpenRouter](https://openrouter.ai/blog/announcements/csam-screening).

*Anonymous Input Categorization: OpenRouter samples a small number of prompts for categorization to power our reporting and model ranking. If you are not opted in to OpenRouter use of inputs/outputs, any categorization of your prompts is stored completely anonymously and never associated with your account or user ID. The categorization is done by model with a zero-data-retention policy.*

## Metadata Collection

OpenRouter does store metadata (e.g. number of prompt and completion tokens, latency, etc) for each request. This is used to power our reporting and model ranking, and your [logs metadata](https://openrouter.ai/logs).

This metadata does not include the content of your prompts or responses, only information about the request itself.
