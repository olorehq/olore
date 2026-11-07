> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Build a Token-Efficient Review Agent

> Use a cheap executor model for routine work and call Advisor only for compact uncertainty checks

**Goal:** Build a review agent that drafts routine answers with a cheap model and asks a stronger Advisor model only after the executor compresses uncertainty into a short packet.

**Outcome:** Your app sends normal review tasks to a low-cost executor, adds one compact `plan-reviewer` Advisor entry when a second model is worth the spend, and logs whether Advisor was offered without storing prompts or advice.

> [!TIP]
>
> Want your coding agent to add this workflow to your app? Copy this prompt.

> [!WARNING]
>
> Advisor is a beta server tool. It runs an inner model call, so it can add cost and latency. This recipe keeps that call behind a budget gate and sends a compact review prompt instead of forwarding the full transcript. Use returned `usage.cost` when present, or estimate spend from the selected advisor model's current pricing before widening the gate.

## Before you start

You need:

* Node.js 20 or newer
* An OpenRouter API key in `OPENROUTER_API_KEY`
* A review, planning, or agent workflow that already calls OpenRouter
* A cheap executor model for routine work
* A stronger advisor model for compact second opinions

If you are starting a new TypeScript agent, use the [Agent SDK `callModel` API](https://openrouter.ai/docs/sdks/typescript/call-model/overview) for the executor loop. The sample below uses Chat Completions so the server-tool request shape is visible, but the budget-gate pattern is the same inside an Agent SDK workflow.

Use these references for exact schemas:

* [Advisor server tool](https://openrouter.ai/docs/guides/features/server-tools/advisor.md)
* [Agent SDK `callModel` overview](https://openrouter.ai/docs/sdks/typescript/call-model/overview)
* [Create a chat completion](https://openrouter.ai/docs/api/api-reference/chat/create-a-chat-completion.md)
* [Create a response](https://openrouter.ai/docs/api/api-reference/responses/create-a-response.md)
* [TypeScript SDK Chat reference](https://openrouter.ai/docs/client-sdks/typescript/sdks/chat/README.md)

## What you're building

This recipe builds a tiny budget-aware implementation-plan reviewer.

The executor model handles the normal response and writes most plans by itself. The app only offers the `plan-reviewer` Advisor when the task has uncertainty signals like a large diff, missing tests, a schema change, or unfamiliar ownership. When Advisor is available, the executor can ask it for one focused second opinion before writing the final answer.

```text lines theme={null}
Review task
  → app checks whether a second model earns its cost
  → cheap executor drafts the answer
  → uncertain task: executor can call plan-reviewer with a compact prompt
  → final answer includes the plan, open questions, and next action
```

For this workflow, give the Advisor the decision being reviewed, the changed files, the uncertainty signals, and a short diff summary.

## 1. Define the compact review packet

Start with the smallest object the agent needs. This is the data your app already knows before it calls OpenRouter.

```js lines theme={null}
const reviewTask = {
  title: "Move usage-event writes to a monthly partitioned table",
  userQuestion:
    "Should we ship this migration plan, or ask for another design pass?",
  changedFiles: [
    "packages/db/migrations/2026-06-10-usage-partitions.sql",
    "services/cfw-api/src/usage/write-usage-event.ts",
  ],
  diffSummary:
    "Adds monthly partitions for usage_events and routes new writes by workspace_id and created_at.",
  uncertaintySignals: ["schema-change", "missing-rollback", "billing-path"],
};
```

Keep this packet small. Full diffs, raw conversation history, logs, and customer data belong in your own review UI or trace system, not in the Advisor prompt by default.

## 2. Add the cheap executor and budget-gated Advisor

The sample below shows the routing pattern and Chat Completions request shape. Adapt the same budget gate and `tools` shape inside your existing OpenRouter call, including Agent SDK `callModel` if that is your agent loop.

```js expandable lines theme={null}
const ADVISOR_WORTHY_SIGNALS = new Set([
  "billing-path",
  "large-diff",
  "missing-rollback",
  "missing-tests",
  "schema-change",
  "unknown-owner",
]);

const reviewTask = {
  title: "Move usage-event writes to a monthly partitioned table",
  userQuestion:
    "Should we ship this migration plan, or ask for another design pass?",
  changedFiles: [
    "packages/db/migrations/2026-06-10-usage-partitions.sql",
    "services/cfw-api/src/usage/write-usage-event.ts",
  ],
  diffSummary:
    "Adds monthly partitions for usage_events and routes new writes by workspace_id and created_at.",
  uncertaintySignals: ["schema-change", "missing-rollback", "billing-path"],
};

const shouldEnableAdvisor = (task) =>
  task.uncertaintySignals.some((signal) => ADVISOR_WORTHY_SIGNALS.has(signal));

const createAdvisorTool = (advisorModel) => ({
  type: "openrouter:advisor",
  parameters: {
    name: "plan-reviewer",
    model: advisorModel,
    instructions:
      "You are a senior engineering reviewer. Review only the compact task packet. Identify hidden assumptions, missing rollback steps, missing tests, and cheaper alternatives. Be concise.",
    forward_transcript: false,
    max_completion_tokens: 220,
    temperature: 0,
  },
});

const formatTaskPacket = (task) =>
  [
    `Title: ${task.title}`,
    `Question: ${task.userQuestion}`,
    `Changed files: ${task.changedFiles.join(", ")}`,
    `Uncertainty signals: ${task.uncertaintySignals.join(", ")}`,
    `Diff summary: ${task.diffSummary}`,
  ].join("\n");

const buildReviewRequest = ({ task, executorModel, advisorModel }) => {
  const isAdvisorEnabled = shouldEnableAdvisor(task);

  return {
    requestBody: {
      model: executorModel,
      messages: [
        {
          role: "system",
          content:
            "You are a token-efficient implementation-plan reviewer. Use the cheap executor model for routine reasoning. If the plan-reviewer tool is available, call it at most once when a compact second-model check can change the answer. Send the advisor a compact prompt only. Do not paste full diffs, logs, secrets, or chat transcripts into the advisor prompt.",
        },
        {
          role: "user",
          content: formatTaskPacket(task),
        },
      ],
      ...(isAdvisorEnabled
        ? {
            tools: [createAdvisorTool(advisorModel)],
            tool_choice: "auto",
          }
        : {}),
      max_tokens: 500,
      temperature: 0.2,
    },
    telemetryContext: {
      executor_model: executorModel,
      advisor_model: isAdvisorEnabled ? advisorModel : null,
      did_enable_advisor: isAdvisorEnabled,
    },
  };
};

const { requestBody, telemetryContext } = buildReviewRequest({
  task: reviewTask,
  executorModel: "openai/gpt-4o-mini",
  advisorModel: "~anthropic/claude-opus-latest",
});
```

Send `requestBody` through the request path your app already uses. For routine tasks, `tools` is omitted and the request stays on the cheap executor model. For uncertain tasks, the request offers one named Advisor tool:

```json lines theme={null}
{
  "type": "openrouter:advisor",
  "parameters": {
    "name": "plan-reviewer",
    "model": "~anthropic/claude-opus-latest",
    "instructions": "You are a senior engineering reviewer. Review only the compact task packet. Identify hidden assumptions, missing rollback steps, missing tests, and cheaper alternatives. Be concise.",
    "forward_transcript": false,
    "max_completion_tokens": 220,
    "temperature": 0
  }
}
```

The executor chooses whether to call `plan-reviewer`. It passes only `prompt` in the tool-call arguments because the advisor model is pinned in `parameters.model`.

## 3. Make the Advisor prompt earn its tokens

The cost control comes from 3 choices:

* The app decides whether a second model is worth the spend.
* The executor stays cheap.
* The Advisor sees a compact prompt, not the whole transcript.

In this workflow, `forward_transcript: false` is deliberate. The Advisor receives the executor's compact `prompt` argument, plus its own `instructions`. If you set `forward_transcript: true`, the Advisor can see the full parent conversation, which is useful for some agents but often defeats the token-saving goal.

Use the system prompt to tell the executor what belongs in the Advisor call:

```text lines theme={null}
When calling plan-reviewer, include:
- the decision you want reviewed
- the changed files or affected modules
- the uncertainty signals
- the shortest useful plan summary

Do not include:
- full diffs
- secrets
- logs
- the entire conversation
- unrelated implementation details
```

That keeps the expensive model focused on the part where it changes the outcome.

## 4. Add specialist reviewers only when uncertainty splits

If the executor can identify different kinds of uncertainty, give it separate Advisor entries. Each entry is its own tool. Do not use a nested `parameters.advisors` roster.

```js expandable lines theme={null}
const tools = [
  {
    type: "openrouter:advisor",
    parameters: {
      name: "schema-reviewer",
      model: process.env.SCHEMA_ADVISOR_MODEL ?? "~anthropic/claude-opus-latest",
      instructions:
        "Review the compact task packet for data-model assumptions, migration order, rollback gaps, and tests. Return the most useful correction.",
      forward_transcript: false,
      max_completion_tokens: 180,
    },
  },
  {
    type: "openrouter:advisor",
    parameters: {
      name: "cost-reviewer",
      model: process.env.COST_ADVISOR_MODEL ?? "openai/gpt-4o-mini",
      instructions:
        "Review the compact task packet for token, latency, and infrastructure cost. Suggest a cheaper path if it preserves the requested behavior.",
      forward_transcript: false,
      max_completion_tokens: 180,
    },
  },
];
```

The executor chooses the matching tool without passing a `name` argument. At most one Advisor entry can omit `name`; that unnamed entry becomes the default Advisor.

If you replay the conversation across requests, keep Advisor entries in a stable order. Advisor identity comes from each entry's index in the `tools` array, so reordering or inserting entries can make `schema-reviewer` and `cost-reviewer` reconstruct each other's memory.

## 5. Log cost and routing, not private content

Add telemetry where your app already records model calls. This recipe's sample logs only model names, whether Advisor was enabled, finish reason, and usage keys.

Log:

* `executor_model`
* `advisor_model` or Advisor entry name
* `did_enable_advisor`
* `finish_reason`
* `usage.prompt_tokens`, `usage.completion_tokens`, `usage.total_tokens`, and `usage.cost` when returned
* route or feature name, such as `budgeted_plan_review`

Do not log:

* API keys
* cookies
* full prompts
* full advisor advice
* raw diffs
* user content unless your product already has an explicit retention policy

If your app uses the Responses API and your UI benefits from showing the second opinion as it arrives, set `stream: true` on that Advisor entry. It streams advice deltas for Responses clients, then still returns the completed advice item. Chat Completions ignores `stream`, and Messages streaming is planned.

## Check your work

Validate the workflow through the path you're adding.

Confirm:

* Routine tasks send no Advisor tool, or leave Advisor disabled by your budget gate.
* Advisor-worthy tasks include one `openrouter:advisor` entry named `plan-reviewer`.
* The Advisor entry uses flat `parameters`, not `parameters.advisors`.
* The executor model is the cheap model from your config.
* The Advisor model is separately configurable.
* The Advisor prompt contains a compact uncertainty packet, not full diffs or the full conversation.
* Logs include model names, Advisor enablement, finish reason, and usage fields when present.
* Logs do not include `OPENROUTER_API_KEY`, raw prompts, cookies, full diffs, or full generated content.

After you wire the pattern into your app, log routing telemetry like this. Treat `usage_keys` as provider-dependent. Assert the routing fields, then check that usage includes the billing fields your app depends on. `finish_reason` is typically `stop` after the server-side tool call resolves, but don't treat the literal value as a fixed contract.

```json lines theme={null}
{
  "telemetry": {
    "executor_model": "openai/gpt-4o-mini",
    "advisor_model": "~anthropic/claude-opus-latest",
    "did_enable_advisor": true,
    "finish_reason": "stop",
    "usage_keys": [
      "prompt_tokens",
      "completion_tokens",
      "total_tokens",
      "cost"
    ]
  }
}
```

Token counts, cost, answer text, and provider-specific usage detail keys vary by model and prompt. Treat the routing fields and redaction boundary as the contract.

## Next steps

* Read the [Advisor reference](https://openrouter.ai/docs/guides/features/server-tools/advisor.md) for exact parameters, multiple-advisor rules, memory, streaming, and API-surface details.
* Use [Response Caching](https://openrouter.ai/docs/guides/features/response-caching.md) for repeated stable prefixes in the executor prompt.
* Add [Human-in-the-Loop controls](https://openrouter.ai/docs/cookbook/building-agents/hitl-tools.md) when a second opinion should pause for a person instead of another model.
