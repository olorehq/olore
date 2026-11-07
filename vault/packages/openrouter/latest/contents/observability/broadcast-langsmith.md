> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# LangSmith

> Send traces to LangSmith

[LangSmith](https://smith.langchain.com) is LangChain's platform for debugging, testing, evaluating, and monitoring LLM applications.

## Step 1: Get your LangSmith API key and Project name

In LangSmith, go to **Settings > API Keys** to create a new API key. Then navigate to your project or create a new one to get the project name.

## Step 2: Enable Broadcast in OpenRouter

Go to [Settings > Observability](https://openrouter.ai/settings/observability) and toggle **Enable Broadcast**.

![Enable Broadcast](https://mintcdn.com/openrouter-d02e98a0/PSwwwiCqAD_BNeni/assets/guides/features/broadcast/arize/broadcast-enable.png?fit=max\&auto=format\&n=PSwwwiCqAD_BNeni\&q=85\&s=a48ecd5df85b4e6f3982c8402671f631)

## Step 3: Configure LangSmith

Click the edit icon next to **LangSmith** and enter:

* **Api Key**: Your LangSmith API key (starts with `lsv2_pt_...`)
* **Project**: Your LangSmith project name
* **Endpoint** (optional): Default is `https://api.smith.langchain.com`. Change for self-hosted instances

## Step 4: Test and save

Click **Test Connection** to verify the setup. The configuration only saves if the test passes.

## Step 5: Send a test trace

Make an API request through OpenRouter and view the trace in LangSmith. Your traces will appear in the specified project with full details including:

* Input and output messages
* Token usage (prompt, completion, and total tokens)
* Cost information
* Model and provider information
* Timing and latency metrics

## What data is sent

OpenRouter sends traces to LangSmith using the OpenTelemetry (OTEL) protocol with the following attributes:

* **GenAI semantic conventions**: Model name, token counts, costs, and request parameters
* **LangSmith-specific attributes**: Trace name, span kind, user ID, and custom metadata
* **Input and output**: Prompt and completion content on the run as `langsmith.span.input` / `langsmith.span.output` and `gen_ai.prompt` / `gen_ai.completion`. The root run no longer carries a duplicate copy under `langsmith.trace.input` / `langsmith.trace.output`.
* **Error handling**: Exception events with error types and messages when requests fail

> [!TIP]
>
> LangSmith uses the OTEL endpoint at `/otel/v1/traces` for receiving trace data. This ensures compatibility with LangSmith's native tracing infrastructure.

## Custom Metadata

LangSmith supports trace hierarchies, tags, and custom metadata for organizing and analyzing your LLM calls.

### Supported Metadata Keys

| Key | LangSmith Mapping | Description |
| - | - | - |
| `trace_id` | Trace ID | Group multiple runs into a single trace |
| `trace_name` | Run Name | Custom name displayed in the LangSmith trace list |
| `span_name` | Run Name | Name for intermediate chain/tool runs |
| `generation_name` | Run Name | Name for the LLM run |
| `parent_span_id` | Parent Run ID | Link to an existing run in your trace hierarchy |

### Tags

Any array of strings passed in metadata can be used as tags. Tags in LangSmith are comma-separated values that help you filter and organize traces.

### Example

```json lines theme={null}
{
  "model": "openai/gpt-4o",
  "messages": [{ "role": "user", "content": "Analyze this text..." }],
  "user": "user_12345",
  "session_id": "session_abc",
  "trace": {
    "trace_id": "analysis_workflow_123",
    "trace_name": "Text Analysis Pipeline",
    "span_name": "Sentiment Analysis",
    "generation_name": "Extract Sentiment",
    "environment": "production",
    "team": "nlp-team"
  }
}
```

### Run Types

OpenRouter maps observation types to LangSmith run types:

* **GENERATION** → `llm` run type
* **SPAN** → `chain` run type
* **EVENT** → `tool` run type

### Additional Context

* The `user` field maps to LangSmith's User ID
* The `session_id` field maps to LangSmith's Session ID for conversation tracking
* Custom metadata keys are passed as span attributes and viewable in the run details

## Privacy Mode

When [Privacy Mode](https://openrouter.ai/docs/guides/features/broadcast#privacy-mode) is enabled for this destination, prompt and completion content and provider error text are excluded from traces. All other trace data — token usage, costs, timing, model information, and custom metadata — is still sent normally. See [Privacy Mode](https://openrouter.ai/docs/guides/features/broadcast#privacy-mode) for details.
