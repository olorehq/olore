> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Frequently Asked Questions

> Common questions about OpenRouter

## Getting started

> [accordion] Why should I use OpenRouter?
>
> OpenRouter provides a unified API to access all the major LLM models on the
> market. It also allows users to aggregate their billing in one place and
> keep track of all of their usage using our analytics.
>
> OpenRouter passes through the pricing of the underlying providers, while pooling their uptime,
> so you get the same pricing you'd get from the provider directly, with a
> unified API and fallbacks so that you get much better uptime.
>
> [Learn more in our Quickstart guide](https://openrouter.ai/docs/quickstart.md).

> [accordion] How do I get started with OpenRouter?
>
> To get started, create an account and add credits on the
> [Credits](https://openrouter.ai/settings/credits) page. Credits are simply
> deposits on OpenRouter that you use for LLM inference.
> When you use the API or chat interface, we deduct the request cost from your
> credits. Each model and provider has a different price per million tokens.
>
> Once you have credits you can either use the chat room, or create API keys
> and start using the API. You can read our [quickstart](https://openrouter.ai/docs/quickstart.md)
> or [enterprise](https://openrouter.ai/docs/cookbook/get-started/enterprise-quickstart.md) guide for code samples and more.

> [accordion] How do I get support?
>
> The best way to get technical support is to join our
> [Discord](https://discord.gg/openrouter) and ask the community in the #help forum.
>
> For billing and account management questions, please contact us at [support@openrouter.ai](mailto:support@openrouter.ai).

> [accordion] How do I get billed for my usage on OpenRouter?
>
> For each model we have the pricing displayed per million tokens. There is
> usually a different price for prompt and completion tokens. There are also
> models that charge per request, for images and for reasoning tokens. All of
> these details will be visible on the models page.
>
> When you make a request to OpenRouter, we receive the total number of tokens processed
> by the provider. We then calculate the corresponding cost and deduct it from your credits.
> You can review your complete usage history in the [Activity tab](https://openrouter.ai/activity).
>
> We pass through the pricing of the underlying providers; there is no markup
> on inference pricing (however we do charge a [fee](https://openrouter.ai/docs/faq.md#pricing-and-fees) when purchasing credits).

## Pricing and fees

> [accordion] What are the fees for using OpenRouter?
>
> OpenRouter charges a {getTotalFeeString('stripe', null)} fee when you purchase credits. We pass through
> the pricing of the underlying model providers without any markup, so you pay
> the same rate as you would directly with the provider.
>
> Crypto payments are charged a fee of {getTotalFeeString('coinbase', null)}.

> [accordion] Is there a fee for using my own provider keys (BYOK)?
>
> Yes. BYOK has a plan-dependent free allowance measured by list-price
> inference cost, not request count. Pay-as-you-go includes
> \$25,000 per month with no BYOK fee,
> while Enterprise allowances are custom.
> Usage above the allowance has a fee of 5% of what the
> same model and provider would normally cost on OpenRouter. This fee is
> deducted from your OpenRouter credits. This allows you to manage your rate
> limits and costs directly with the provider while still using
> OpenRouter's unified interface. See the
> [pricing page](https://openrouter.ai/pricing) for details.
>
> [Learn more about BYOK](https://openrouter.ai/docs/guides/overview/auth/byok.md).

## Models and providers

> [accordion] What LLM models does OpenRouter support?
>
> OpenRouter provides access to a wide variety of LLM models, including frontier models from major AI labs.
> For a complete list of models you can visit the [models browser](https://openrouter.ai/models) or fetch the list through the [models api](https://openrouter.ai/api/v1/models).

> [accordion] How frequently are new models added?
>
> We work on adding models as quickly as we can. We often have partnerships with
> the labs releasing models and can release models as soon as they are
> available. If there is a model missing that you'd like OpenRouter to support, feel free to message us on
> [Discord](https://discord.gg/openrouter).

> [accordion] What are model variants?
>
> Variants are suffixes that can be added to the model slug to change its behavior. There are two kinds. See the [Model Variants overview](https://openrouter.ai/docs/guides/routing/model-variants/overview.md) for the full reference and the rule for resolving a suffixed ID to its metadata.
>
> Catalog variants are separate entries in our [models api](https://openrouter.ai/api/v1/models) with their own pricing, context length, and endpoints. They only work on the models that list them.
>
> 1. `:free` - A free version of the model with its own rate limits. [Learn more](https://openrouter.ai/docs/guides/routing/model-variants/free.md).
> 2. `:batch` - The batch-priced version of the model used by the [Batch API](https://openrouter.ai/docs/batch-quickstart.md).
>
> Routing variants work on every model and change how the request is routed. They are not listed in the models api, and the model's metadata is the base model's.
>
> 1. `:nitro` - Providers will be sorted by throughput rather than the default sort, optimizing for faster response times. [Learn more](https://openrouter.ai/docs/guides/routing/model-variants/nitro.md).
> 2. `:floor` - Providers will be sorted by price rather than the default sort, prioritizing the most cost-effective options. [Learn more](https://openrouter.ai/docs/guides/routing/model-variants/floor.md).
> 3. `:exacto` - Providers will be sorted using quality-first signals tuned for tool-calling reliability. [Learn more](https://openrouter.ai/docs/guides/routing/model-variants/exacto.md).
> 4. `:online` (deprecated) - All requests will run a query to extract web results that are attached to the prompt. Use the [`openrouter:web_search` server tool](https://openrouter.ai/docs/guides/features/server-tools/web-search) instead. [Learn more](https://openrouter.ai/docs/guides/routing/model-variants/online.md).

> [accordion] I am an inference provider, how can I get listed on OpenRouter?
>
> You can read our requirements at the [Providers
> page](https://openrouter.ai/docs/guides/providers/integration.md). If you would like to contact us, the best
> place to reach us is over email. Listed providers can report accounts that abuse
> their endpoints through the [abuse reports
> API](https://openrouter.ai/docs/guides/providers/integration.md#abuse-reports).

> [accordion] What is the expected latency/response time for different models?
>
> For each model on OpenRouter we show the latency (time to first token) and the token
> throughput for all providers. You can use this to estimate how long requests
> will take. If you would like to optimize for throughput you can use the
> `:nitro` variant to route to the fastest provider.

> [accordion] How does model fallback work if a provider is unavailable?
>
> If a provider returns an error OpenRouter will automatically fall back to the
> next provider. This happens transparently to the user and allows production
> apps to be much more resilient. OpenRouter has a lot of options to configure
> the provider routing behavior. The full documentation can be found [here](https://openrouter.ai/docs/guides/routing/provider-selection.md).

## API technical specifications

> [accordion] What authentication methods are supported?
>
> OpenRouter uses three authentication methods:
>
> 1. Cookie-based authentication for the web interface and chatroom
> 2. API keys (passed as Bearer tokens) for accessing the completions API and other core endpoints
> 3. [Management API keys](https://openrouter.ai/docs/guides/overview/auth/management-api-keys.md) for programmatically managing API keys through the key management endpoints
>
> [Learn more about API authentication](https://openrouter.ai/docs/api_reference/authentication.md).

> [accordion] How are rate limits calculated?
>
> For free models, rate limits are determined by the credits that you have purchased.
> If you have purchased at least 10 credits, your free model rate limit will be 1000 requests per day.
> Otherwise, you will be rate limited to 50 free model API requests per day.
>
> You can learn more about how rate limits work for paid accounts in our [rate limits documentation](https://openrouter.ai/docs/api_reference/limits.md).

> [accordion] What API endpoints are available?
>
> OpenRouter implements the OpenAI API specification for the
> [/responses](https://openrouter.ai/docs/api_reference/responses/overview.md), /chat/completions, and
> /completions endpoints, allowing you to use any model with the same
> request/response format. Additional endpoints like /api/v1/models are also
> available. See our [API documentation](https://openrouter.ai/docs/api_reference/overview.md) for
> detailed specifications.

> [accordion] What are the supported formats?
>
> The API supports text, images, and PDFs.
> [Images](https://openrouter.ai/docs/guides/overview/multimodal/image-understanding.md) can be passed as
> URLs or base64 encoded images. [PDFs](https://openrouter.ai/docs/guides/overview/multimodal/pdfs.md) can also be sent as URLs or base64 encoded data, and work with any model on OpenRouter.

> [accordion] How does streaming work?
>
> Streaming uses server-sent events (SSE) for real-time token delivery. Set
> `stream: true` in your request to enable streaming responses.
>
> [Learn more about streaming](https://openrouter.ai/docs/api_reference/streaming.md).

> [accordion] What SDK support is available?
>
> OpenRouter is a drop-in replacement for OpenAI. Therefore, any SDKs that
> support OpenAI by default also support OpenRouter. Check out our
> [OpenAI SDK docs](https://openrouter.ai/docs/guides/community/openai-sdk.md) for more details.
>
> [See all supported frameworks and integrations](https://openrouter.ai/docs/guides/community/frameworks-and-integrations-overview.md).

## Privacy and data logging

Please see our [Terms of Service](https://openrouter.ai/terms) and [Privacy Policy](https://openrouter.ai/privacy).

> [accordion] What data is logged during API use?
>
> We log basic request metadata (timestamps, model used, token counts). Prompt
> and completion are not logged by default. We do zero logging of your prompts/completions,
> even if an error occurs, unless you opt-in to logging them.
>
> We have an opt-in [setting](https://openrouter.ai/settings/preferences) that
> lets users opt-in to log their prompts and completions in exchange for a 1%
> discount on usage costs.
>
> [Learn more about data collection](https://openrouter.ai/docs/guides/privacy/data-collection.md).

> [accordion] What data is logged during Chatroom use?
>
> The same data privacy applies to the chatroom as the API. All conversations
> in the chatroom are stored locally on your device. Conversations will not sync across devices.
> It is possible to export and import conversations using the settings menu in the chatroom.

> [accordion] What third-party sharing occurs?
>
> OpenRouter is a proxy that sends your requests to the model provider for it to be completed.
> We work with all providers to, when possible, ensure that prompts and completions are not logged or used for training.
> Providers that do log, or where we have been unable to confirm their policy, will not be routed to unless the model training
> toggle is switched on in the [privacy settings](https://openrouter.ai/settings/privacy) tab.
>
> If you specify [provider routing](https://openrouter.ai/docs/guides/routing/provider-selection.md) in your request, but none of the providers
> match the level of privacy specified in your account settings, you will get an error and your request will not complete.
>
> [Learn more about provider logging policies](https://openrouter.ai/docs/guides/privacy/provider-logging.md).

> [accordion] What are ZDR, Safety Retention, and Retention and Training?
>
> They're the three data policy tiers OpenRouter uses for endpoints. ZDR means no routine storage of prompts or responses after processing, apart from a CSAM exception. Safety Retention means OpenRouter or a provider may retain prompts and responses from any request, only to prevent abuse; it's not used for training. Retention and Training means data may be stored and used for training under the provider's policy.
>
> When you enforce ZDR, you can choose **ZDR only** or **Allow Safety Retention** in your [privacy settings](https://openrouter.ai/settings/privacy) or guardrails. [Learn more](https://openrouter.ai/docs/guides/features/zdr.md#data-policy-tiers).

> [accordion] Does OpenRouter support EU data residency?
>
> Yes, for prompts and completions. Requests to `eu.openrouter.ai` are decrypted in the EU and routed only to shared provider endpoints in Europe (the EU/EEA, the UK, and Switzerland). BYOK requests go to your own deployment's region. Account and billing data may be stored or processed in the US. DPA Exhibit A covers API payloads when elected in writing.
>
> Business is self-serve, with no contract, and the DPA includes SCCs. See [EU in-region routing on Business](https://openrouter.ai/business/eu) for the live EU model list and the full data boundary.

## Credit and billing systems

> [accordion] What purchase options exist?
>
> OpenRouter uses a credit system where the base currency is US dollars. All
> of the pricing on our site and API is denoted in dollars. Users can top up
> their balance manually or set up auto top up so that the balance is
> replenished when it gets below the set threshold.

> [accordion] Do credits expire?
>
> Per our [terms](https://openrouter.ai/terms), we reserve the right to expire
> unused credits after one year of purchase.

> [accordion] My credits haven't showed up in my account
>
> If you paid using Stripe, sometimes there is an issue with the Stripe
> integration and credits can get delayed in showing up on your account. Please allow up to one hour.
> If your credits still have not appeared after an hour, check to confirm you have not been charged and
> that you do not have a stripe receipt email. If you do not have a receipt email or have not been charged,
> your card may have been declined. Please try again with a different card or payment method.
>
> If you have been charged and still do not have credits, please reach out to us via email
> at [support@openrouter.ai](mailto:support@openrouter.ai) with details of the purchase.
>
> If you paid using crypto, please reach out to us via email at [support@openrouter.ai](mailto:support@openrouter.ai)
> and we will look into it.

> [accordion] What's the refund policy?
>
> Refunds for unused Credits may be requested within twenty-four (24) hours from the time the transaction was processed. If no refund request is received within twenty-four (24) hours following the purchase, any unused Credits become non-refundable. To request a refund within the eligible period, you can use the refund button on the [Credits](https://openrouter.ai/settings/credits) page. The unused credit amount will be refunded to your payment method; the platform fees are non-refundable. Note that cryptocurrency payments are never refundable.

> [accordion] How to monitor credit usage?
>
> The [Activity](https://openrouter.ai/activity) page allows users to view
> their historic usage and filter the usage by model, provider and api key.
>
> We also provide a [credits api](https://openrouter.ai/docs/api/api-reference/credits/get-remaining-credits.md) that has
> live information about the balance and remaining credits for the account.

> [accordion] What free tier options exist?
>
> All new users receive a small free allowance to test out OpenRouter.
> There are many [free models](https://openrouter.ai/models?max_price=0) available
> on OpenRouter. These models have low rate limits (50 requests per day total)
> and are usually not suitable for production use. If you have purchased at least 10 credits,
> the free models will be limited to 1000 requests per day.
>
> You can also use the [Free Models Router](https://openrouter.ai/docs/cookbook/get-started/free-models-router-playground.md) (`openrouter/free`) to automatically select a free model for your requests.

> [accordion] How do volume discounts work?
>
> OpenRouter does not currently offer volume discounts, but you can reach out to us
> over email if you think you have an exceptional use case.

> [accordion] What payment methods are accepted?
>
> We accept all major credit cards, AliPay and cryptocurrency payments in
> USDC. We are working on integrating PayPal soon, if there are any payment
> methods that you would like us to support please reach out on [Discord](https://discord.gg/openrouter).

> [accordion] How does OpenRouter make money?
>
> We charge a small [fee](https://openrouter.ai/docs/faq.md#pricing-and-fees) when purchasing credits. We never mark-up the pricing
> of the underlying providers, and you'll always pay the same as the provider's
> listed price.

## Account management

> [accordion] How can I delete my account?
>
> Go to the [Settings](https://openrouter.ai/settings/preferences) page and click Manage Account.
> In the modal that opens, select the Security tab. You'll find an option there to delete your account.
>
> Note that unused credits will be lost and cannot be reclaimed if you delete and later recreate your account.

> [accordion] How does team access work?
>
> Organization management information can be found in our [organization management documentation](https://openrouter.ai/docs/cookbook/administration/organization-management.md).

> [accordion] What analytics are available?
>
> Our [activity dashboard](https://openrouter.ai/activity) provides real-time
> usage metrics. If you would like any specific reports or metrics please
> contact us.

> [accordion] How can I contact support?
>
> For account and billing questions, please contact us at [support@openrouter.ai](mailto:support@openrouter.ai).

> [accordion] How can I file a bug report or change request for OpenRouter?
>
> You can file bug reports or change requests by posting in our [Discord](https://discord.gg/openrouter).
