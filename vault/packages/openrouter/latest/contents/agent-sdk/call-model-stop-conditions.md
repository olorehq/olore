> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Stop Conditions

> Control multi-turn execution with `stopWhen`. Use built-in helpers or custom conditions to stop by step count, tool calls, cost, or tokens.

## Basic Usage

```typescript lines theme={null}
import { OpenRouter, stepCountIs } from '@openrouter/agent';

const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Research this topic thoroughly',
  tools: [searchTool, analysisTool],
  stopWhen: stepCountIs(5), // Stop after 5 steps
});
```

## Built-in Stop Conditions

### stepCountIs(n)

Stop after a specific number of steps:

```typescript lines theme={null}
import { stepCountIs } from '@openrouter/agent';

const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Analyze this data',
  tools: [analysisTool],
  stopWhen: stepCountIs(10), // Stop after 10 steps
});
```

### hasToolCall(name)

Stop when a specific tool is called:

```typescript lines theme={null}
import { hasToolCall } from '@openrouter/agent';

const finishTool = tool({
  name: 'finish',
  description: 'Call this when the task is complete',
  inputSchema: z.object({
    summary: z.string(),
  }),
  execute: async (params) => ({ done: true }),
});

const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Research until you have enough information, then call finish',
  tools: [searchTool, finishTool],
  stopWhen: hasToolCall('finish'), // Stop when finish tool is called
});
```

### maxTokensUsed(n)

Stop after using a certain number of tokens:

```typescript lines theme={null}
import { maxTokensUsed } from '@openrouter/agent';

const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Generate content',
  tools: [writingTool],
  stopWhen: maxTokensUsed(5000), // Stop after 5000 total tokens
});
```

### maxCost(amount)

Stop after reaching a cost threshold:

```typescript lines theme={null}
import { maxCost } from '@openrouter/agent';

const result = openrouter.callModel({
  model: 'openai/gpt-5.2',
  input: 'Perform extensive analysis',
  tools: [analysisTool],
  stopWhen: maxCost(1.00), // Stop after $1.00 spent
});
```

### finishReasonIs(reason)

Stop on a specific finish reason:

```typescript lines theme={null}
import { finishReasonIs } from '@openrouter/agent';

const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Complete this task',
  tools: [taskTool],
  stopWhen: finishReasonIs('stop'), // Stop when model finishes naturally
});
```

## Combining Conditions

Pass an array to stop on any condition:

```typescript lines theme={null}
import { stepCountIs, hasToolCall, maxCost } from '@openrouter/agent';

const result = openrouter.callModel({
  model: 'openai/gpt-5.2',
  input: 'Research thoroughly but stay within budget',
  tools: [searchTool, finishTool],
  stopWhen: [
    stepCountIs(10),        // Maximum 10 steps
    maxCost(0.50),          // Maximum $0.50
    hasToolCall('finish'),  // Or when finish is called
  ],
});
```

Execution stops when **any** condition is met.

## Final Response After Stop

A stop condition can fire while the model is still emitting tool calls. By default, the SDK then executes those pending tool calls (so they have matching outputs) and makes one more model turn with `toolChoice: 'none'`, appending a built-in final-answer directive (exported as `DEFAULT_FINAL_RESPONSE_DIRECTIVE`) as a user message — so the run ends with a real natural-language answer instead of a half-finished tool call. Tools stay in the request; only calling is forbidden, which preserves the prompt-cache prefix.

Tune it with `allowFinalResponse`:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5.2',
  input: 'Research this topic',
  tools: [searchTool],
  stopWhen: stepCountIs(5),
  // default (omitted or `true`): final turn + built-in directive

  // override the directive wording:
  // allowFinalResponse: 'Summarize what you found so far.',
  // make the final turn without appending any message:
  // allowFinalResponse: '',
  // disable the final turn (run ends on the halted tool-call turn):
  // allowFinalResponse: false,
});
```

> [!NOTE]
>
> Without the directive, models that emit tool-call syntax as text can leak an unparsed tool call (e.g. `<tool_call>…`) into the final content when the loop stops mid-tool-call. The default directive exists to prevent exactly that.

The final turn only happens when a stop condition halted the loop while the last response contained executable tool calls. It never fires on natural completion, HITL/approval pauses, or interruption.

### Empty final output after tool rounds

Some mini-class models intermittently treat a successful tool call as the terminal answer, returning an empty `output` array on the final turn. By default, the SDK retries that follow-up once, and if it's still empty, resolves the run with empty text instead of throwing `Invalid final response: empty or invalid output`.

This tolerance only applies after at least one completed tool execution round. Runs that produce no tool work still throw on an empty final response.

Opt back into the strict contract with `strictFinalResponse: true`:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-mini',
  input: 'Look up the weather in Paris',
  tools: [weatherTool],
  // Throw if the final turn after tool rounds returns empty output
  // (restores pre-0.8.0 behavior).
  strictFinalResponse: true,
});
```

Set `strictFinalResponse: true` if your code depends on non-empty final text and you'd rather see an error than an empty completion. Leave it off (the default) to keep tool-terminal runs from being reported as failures.

## Custom Stop Conditions

Create custom conditions with a function:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Process data',
  tools: [processTool],
  stopWhen: ({ steps }) => {
    // Stop after 20 steps
    if (steps.length >= 20) return true;

    // Stop if last step had no tool calls
    const lastStep = steps[steps.length - 1];
    if (lastStep && !lastStep.toolCalls?.length) return true;

    // Continue otherwise
    return false;
  },
});
```

### StopConditionContext

Custom functions receive:

| Property | Type | Description |
| - | - | - |
| `steps` | `StepResult[]` | All completed steps including results and usage |

### StepResult

Each step contains:

```typescript lines theme={null}
interface StepResult {
  response: Response;
  toolCalls?: ParsedToolCall[];
  toolResults?: ToolExecutionResult[];
  tokens: {
    input: number;
    output: number;
    cached: number;
  };
  cost: number;
}
```

## Advanced Patterns

### Time-Based Stopping

Stop after a time limit:

```typescript lines theme={null}
const startTime = Date.now();
const maxDuration = 30000; // 30 seconds

const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Work on this task',
  tools: [workTool],
  stopWhen: () => {
    return Date.now() - startTime > maxDuration;
  },
});
```

### Content-Based Stopping

Stop based on response content:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Search until you find the answer',
  tools: [searchTool],
  stopWhen: ({ steps }) => {
    const lastStep = steps[steps.length - 1];
    if (!lastStep) return false;

    // Check if response contains certain keywords
    const content = JSON.stringify(lastStep.response);
    return content.includes('ANSWER FOUND') || content.includes('TASK COMPLETE');
  },
});
```

### Quality-Based Stopping

Stop when results meet quality threshold:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Improve this text until it scores above 0.9',
  tools: [improverTool, scorerTool],
  stopWhen: ({ steps }) => {
    // Look for score in tool results
    for (const step of steps) {
      for (const result of step.toolResults ?? []) {
        if (result.toolName === 'scorer' && result.result?.score > 0.9) {
          return true;
        }
      }
    }
    return false;
  },
});
```

### Combination with Early Exit

Combine conditions for complex logic:

```typescript expandable lines theme={null}
import { stepCountIs, maxCost } from '@openrouter/agent';

const result = openrouter.callModel({
  model: 'openai/gpt-5.2',
  input: 'Complex research task',
  tools: [searchTool, analysisTool, summarizeTool],
  stopWhen: [
    // Hard limits
    stepCountIs(50),
    maxCost(5.00),

    // Custom success condition
    ({ steps }) => {
      const lastStep = steps[steps.length - 1];
      const hasSummary = lastStep?.toolCalls?.some(
        tc => tc.name === 'summarize'
      );
      return hasSummary;
    },
  ],
});
```

## Migration from maxToolRounds

If you were using `maxToolRounds`, migrate to `stopWhen`:

```typescript lines theme={null}
// Before: maxToolRounds
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Hello',
  tools: [myTool],
  maxToolRounds: 5,
});

// After: stopWhen
import { stepCountIs } from '@openrouter/agent';

const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Hello',
  tools: [myTool],
  stopWhen: stepCountIs(5),
});
```

### Default Behavior

If `stopWhen` is not specified, the loop runs until the model produces a turn with no tool calls. Always pass an explicit `stopWhen` (e.g. `stepCountIs(n)`, `maxCost(...)`) to bound iterations, cost, or tokens.

## Best Practices

### Always Set Limits

Always include a hard limit to prevent runaway execution:

```typescript lines theme={null}
stopWhen: [
  stepCountIs(100),    // Hard limit
  maxCost(10.00),      // Budget limit
  customCondition,     // Your logic
],
```

### Log Stop Reasons

Track why execution stopped:

```typescript lines theme={null}
const result = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Task',
  tools: [taskTool],
  stopWhen: ({ steps }) => {
    if (steps.length >= 10) {
      console.log('Stopped: step limit');
      return true;
    }
    const totalCost = steps.reduce((sum, step) => sum + (step.cost ?? 0), 0);
    if (totalCost >= 1.00) {
      console.log('Stopped: cost limit');
      return true;
    }
    return false;
  },
});
```

### Test Conditions

Verify conditions work as expected:

```typescript lines theme={null}
// Test with low limits first
const testResult = openrouter.callModel({
  model: 'openai/gpt-5-nano',
  input: 'Test task',
  tools: [testTool],
  stopWhen: stepCountIs(2), // Low limit for testing
});
```

## See Also

* **[Tools](https://openrouter.ai/docs/agent-sdk/call-model/tools.md)** - Multi-turn orchestration
* **[Dynamic Parameters](https://openrouter.ai/docs/agent-sdk/call-model/dynamic-parameters.md)** - Adaptive behavior
* **[nextTurnParams](https://openrouter.ai/docs/agent-sdk/call-model/next-turn-params.md)** - Tool-driven modifications
