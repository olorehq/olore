> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# PostHog

> Send traces to PostHog

[PostHog](https://posthog.com) is an open-source product analytics platform that helps you understand user behavior. With PostHog's LLM analytics, you can track and analyze your AI application usage.

## Step 1: Get your PostHog project API key

In PostHog, navigate to your project settings:

1. Log in to your PostHog account
2. Go to **Project Settings**
3. Copy your Project API Key (starts with `phc_...`)

## Step 2: Enable Broadcast in OpenRouter

Go to [Settings > Observability](https://openrouter.ai/settings/observability) and toggle **Enable Broadcast**.

![Enable Broadcast](https://mintcdn.com/openrouter-d02e98a0/PSwwwiCqAD_BNeni/assets/guides/features/broadcast/arize/broadcast-enable.png?fit=max\&auto=format\&n=PSwwwiCqAD_BNeni\&q=85\&s=a48ecd5df85b4e6f3982c8402671f631)

## Step 3: Configure PostHog

Click the edit icon next to **PostHog** and enter:

* **Api Key**: Your PostHog project API key (starts with `phc_...`)
* **Endpoint** (optional): Default is `https://us.i.posthog.com`. For EU region, use `https://eu.i.posthog.com`

## Step 4: Test and save

Click **Test Connection** to verify the setup. The configuration only saves if the test passes.

## Step 5: Send a test trace

Make an API request through OpenRouter and view the LLM analytics in your PostHog dashboard.

![PostHog LLM Analytics](https://mintcdn.com/openrouter-d02e98a0/PSwwwiCqAD_BNeni/assets/guides/features/broadcast/posthog/broadcast-posthog-analytics.png?fit=max\&auto=format\&n=PSwwwiCqAD_BNeni\&q=85\&s=0f08977fcb4041defda4348eb26b3ac8)

## Custom Metadata

PostHog receives LLM analytics events with custom metadata included as event properties. Use the `trace` field to attach additional context to your analytics data.

### Supported Metadata Keys

OpenRouter maps the reserved `trace` fields below to PostHog's native `$ai_*` properties, which power PostHog's built-in LLM analytics dashboards.

| Key | PostHog Property | Description |
| - | - | - |
| `trace_id` | `$ai_trace_id` | Custom trace identifier for grouping related events |
| `generation_name` | `$ai_span_name` | Name for the LLM generation event |

### Custom property pass-through

`trace_name` is forwarded as a plain custom property `trace_name` (not as `$ai_trace_name`), so you can filter events by trace name in PostHog without knowing PostHog's `$ai_*` naming convention.

Every other key inside `trace` that is not in the table above is forwarded as `metadata_<key>` (e.g. `feature` → `metadata_feature`).

> **Depth cap:** Custom property values are limited to 3 levels of nesting. Values nested deeper than 3 levels are replaced with `'[truncated]'`. This keeps event payloads compact and PostHog parse latency low.

### Example

```json lines theme={null}
{
  "model": "openai/gpt-4o",
  "messages": [{ "role": "user", "content": "Recommend a product..." }],
  "user": "user_12345",
  "session_id": "session_abc",
  "trace": {
    "trace_name": "Product Recommendations",
    "generation_name": "Generate Recommendation",
    "feature": "shopping-assistant",
    "ab_test_group": "variant_b"
  }
}
```

The above request produces a `$ai_generation` event with these properties (among others):

| PostHog property | Value |
| - | - |
| `trace_name` | `"Product Recommendations"` |
| `$ai_span_name` | `"Generate Recommendation"` |
| `metadata_feature` | `"shopping-assistant"` |
| `metadata_ab_test_group` | `"variant_b"` |

### Additional Context

* The `user` field maps to PostHog's `distinct_id` for user-level LLM analytics
* The `session_id` field maps to `$ai_session_id` for session grouping
* PostHog's LLM analytics dashboard automatically tracks token usage, costs, and model performance

## Privacy Mode

When [Privacy Mode](https://openrouter.ai/docs/guides/features/broadcast#privacy-mode) is enabled for this destination, the `$ai_input` and `$ai_output_choices` properties and provider error text are excluded from events. All other analytics data — token usage, costs, model information, and custom metadata — is still sent normally.
