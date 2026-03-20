# Langfuse

[Langfuse](https://langfuse.com) is an open-source LLM engineering platform that provides observability and analytics for AI applications. This integration allows you to **automatically sync LLM metrics from Langfuse into your Mixpanel dashboards**, enabling you to understand how your AI features impact user behavior and business outcomes.

Use this integration to answer questions like:

- _"Are my most active users also the ones who are most engaged with my LLM content?"_
- _"Does interacting with the LLM feature relate to higher retention rates?"_
- _"How does the LLM feature impact my conversion rates?"_
- _"Does the user feedback captured in Langfuse correlate with user behavior in Mixpanel?"_

## Setup

### Prerequisites

- An active Langfuse account with a project configured
- Your Mixpanel Project Token (found in Project Settings)

### Configure the integration

1. Log into your Langfuse account and navigate to your project settings
2. Find the Mixpanel integration section
3. Select your Mixpanel region:
   - **US**: api.mixpanel.com
   - **EU**: api-eu.mixpanel.com
   - **India**: api-in.mixpanel.com
4. Enter your Mixpanel Project Token
5. Enable the integration

### Data synchronization

Once enabled, Langfuse will:

- Perform an initial sync of all historical data from your Langfuse project
- Automatically sync new data every hour (with a 30-minute delay)

Your Mixpanel dashboards will stay up to date with your latest LLM metrics.

## Data Schema

### User Matching

Langfuse automatically maps user identifiers to ensure seamless data integration:

| Langfuse Field                        | Mixpanel Field | Description                                                                                 |
| ------------------------------------- | -------------- | ------------------------------------------------------------------------------------------- |
| `user_id`                             | `distinct_id`  | Primary user identifier                                                                     |
| Trace/generation/score timestamp      | `time`         | Event timestamp (milliseconds since epoch)                                                  |
| `trace.metadata.$mixpanel_session_id` | `session_id`   | Optional session identifier (add this to your Langfuse trace metadata for session tracking) |

### Events

The integration sends three event types to Mixpanel:

#### `[Langfuse] Trace`

Represents a complete LLM interaction (e.g., a user conversation or workflow).

**Properties:**

- `time`: Milliseconds since epoch when the event occurred
- `distinct_id`: User ID or anonymous identifier
- `$user_id`: User ID sent to Mixpanel's native user ID field
- `$insert_id`: Unique identifier for deduplication
- `session_id`: Optional session identifier (from `$mixpanel_session_id` in metadata, or falls back to Langfuse session_id)
- `langfuse_trace_name`: The name of the trace
- `langfuse_url`: The URL of the trace in Langfuse
- `langfuse_user_url`: Deep link to the user profile in Langfuse
- `langfuse_id`: The unique identifier of the trace
- `langfuse_cost_usd`: The total cost associated with the trace
- `langfuse_count_observations`: The number of observations (LLM calls) in the trace
- `langfuse_session_id`: The session ID related to the event
- `langfuse_project_id`: The project ID associated with the event
- `langfuse_user_id`: User ID related to the event (defaults to `langfuse_unknown_user` if null)
- `langfuse_latency`: The latency of the trace in milliseconds
- `langfuse_release`: Release information associated with the trace
- `langfuse_version`: The version of the trace
- `langfuse_tags`: Tags associated with the trace
- `langfuse_environment`: The environment associated with the trace (e.g., production, staging)
- `langfuse_event_version`: The integration version of Langfuse

#### `[Langfuse] Generation`

Represents an individual LLM generation (e.g., a single API call to OpenAI, Anthropic, etc.).

**Properties:**

- `time`: Milliseconds since epoch when the generation started
- `distinct_id`: User ID or anonymous identifier
- `$user_id`: User ID sent to Mixpanel's native user ID field
- `$insert_id`: Unique identifier for deduplication
- `session_id`: Optional session identifier (from `$mixpanel_session_id` in metadata, or falls back to Langfuse session_id)
- `langfuse_generation_name`: The name of the generation
- `langfuse_trace_name`: Name of the trace related to the generation
- `langfuse_trace_id`: The unique identifier of the trace related to the generation
- `langfuse_url`: The URL of the generation in Langfuse
- `langfuse_user_url`: Deep link to the user profile in Langfuse
- `langfuse_id`: Unique identifier of the generation
- `langfuse_cost_usd`: Computed total cost of the generation
- `langfuse_input_units`: Number of tokens used in the input/prompt
- `langfuse_output_units`: Number of tokens produced by the generation
- `langfuse_total_units`: Total number of tokens consumed in the generation process
- `langfuse_session_id`: The session ID associated with the trace of the generation
- `langfuse_project_id`: The project ID where the generation occurred
- `langfuse_user_id`: The user ID that started the trace linked to the generation (defaults to `langfuse_unknown_user` if unavailable)
- `langfuse_latency`: The observed latency of the generation in milliseconds
- `langfuse_time_to_first_token`: The time taken to generate the first token when streaming (milliseconds)
- `langfuse_release`: Release information of the trace attached to the generation
- `langfuse_version`: The version information about the generation
- `langfuse_model`: The model used during this generation (e.g., gpt-4, claude-3-sonnet)
- `langfuse_level`: The level associated with the generation
- `langfuse_tags`: Tags attached to the trace of the generation
- `langfuse_environment`: The environment associated with the generation
- `langfuse_event_version`: The integration version with Langfuse

#### `[Langfuse] Score`

Represents user feedback, evaluations, or quality metrics.

**Properties:**

- `time`: Milliseconds since epoch when the score event occurred
- `distinct_id`: User ID or anonymous identifier
- `$user_id`: User ID sent to Mixpanel's native user ID field
- `$insert_id`: Unique identifier for deduplication
- `session_id`: Optional session identifier (from `$mixpanel_session_id` in metadata, or falls back to Langfuse session_id)
- `langfuse_score_name`: The name associated with the score (e.g., "user_feedback", "accuracy")
- `langfuse_score_value`: The numeric value of the score
- `langfuse_score_string_value`: The string value of the score (for BOOLEAN and CATEGORICAL scores)
- `langfuse_score_data_type`: The data type of the score (NUMERIC, BOOLEAN, or CATEGORICAL)
- `langfuse_score_comment`: Comments attached to the score
- `langfuse_score_metadata`: Additional metadata attached to the score
- `langfuse_trace_name`: The name of the trace associated with the score
- `langfuse_trace_id`: The unique identifier of the trace associated with the score
- `langfuse_user_url`: Deep link to the user profile in Langfuse
- `langfuse_id`: The unique identifier of the score
- `langfuse_session_id`: The session ID related to the score's trace
- `langfuse_project_id`: The project ID linked with the score's trace
- `langfuse_user_id`: The user ID that triggered the trace tied to the score (defaults to `langfuse_unknown_user` if not available)
- `langfuse_release`: The release information of the trace associated with the score
- `langfuse_tags`: Tags related to the trace of the score
- `langfuse_environment`: The environment associated with the score
- `langfuse_event_version`: The integration version with Langfuse

## Use Cases

### Get Started with the Analytics for AI Dashboard Template

The fastest way to see value from this integration is to use Mixpanel's **Analytics for AI dashboard template**. This pre-built dashboard provides instant insights into how your LLM features are performing and how they impact user behavior.

[**View the Analytics for AI Dashboard Template →**](https://mixpanel.com/p/NaKPyubj6EuA4oV75taqrq)

The template includes ready-to-use reports for:

- **LLM Feature Adoption**: Track how many users are engaging with your AI features
- **Cost Analysis**: Monitor your LLM spending by user and feature
- **Performance Metrics**: Visualize latency, token usage, and generation times
- **User Feedback**: Analyze scores and ratings from Langfuse
- **Retention Impact**: Understand retention rates of AI feature users

### Analyze LLM Feature Adoption

Create funnels to track:

- Users who trigger `[Langfuse] Trace` events
- Conversion to key actions in your product
- Retention rates for AI feature users vs. non-users

### Monitor LLM Costs by User Segment

Build insights to:

- Group users by `langfuse_cost_usd` total spend
- Segment by user properties (plan type, company size, etc.)
- Identify high-cost users or sessions

### Correlate User Feedback with Behavior

Analyze how `[Langfuse] Score` events relate to:

- Session length and engagement
- Feature usage patterns
- Churn or upgrade likelihood

### Track Model Performance Impact

Compare:

- `langfuse_latency` across different `langfuse_model` values
- Token usage efficiency (`langfuse_total_units`)
- Cost differences between model versions

## Troubleshooting

**Events not appearing in Mixpanel?**

- Verify you selected the correct Mixpanel region in Langfuse
- Confirm your Project Token is correct
- Allow up to 90 minutes for the first sync to complete
- Check that your Langfuse project has trace data

**User matching issues?**

- Ensure the `user_id` in Langfuse matches the `distinct_id` in Mixpanel
- For session tracking, add `$mixpanel_session_id` to your Langfuse trace metadata

**Need additional help?**
Contact Langfuse support or submit a feature request on their [ideas board](https://langfuse.com/ideas).

## Learn More

- [Langfuse Mixpanel Integration Documentation](https://langfuse.com/integrations/analytics/mixpanel)
- [Langfuse Documentation](https://langfuse.com/docs)
- [Langfuse GitHub](https://github.com/langfuse/langfuse)
- [LLM Observability Best Practices](https://langfuse.com/docs/observability)
