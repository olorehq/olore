> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Migrating to @openrouter/agent

> Move agent toolkit imports from @openrouter/sdk to the standalone @openrouter/agent package

> [!TIP]
>
> Using an AI coding assistant? Install the migration skill to let your agent handle the import updates for you: `gh skill install OpenRouterTeam/skills openrouter-agent-migration`

The agent toolkit (`callModel`, `tool`, stop conditions, etc.) has moved from `@openrouter/sdk` to a standalone **`@openrouter/agent`** package. The agent package includes its own `OpenRouter` client class, so you no longer need `@openrouter/sdk` as a dependency for agent workflows.

## Who needs to migrate?

You need to migrate if your code imports any of the following from `@openrouter/sdk`:

* `callModel` / `ModelResult`
* `tool` / `Tool` / tool type guards
* Stop conditions (`stepCountIs`, `hasToolCall`, etc.)
* Async parameters (`CallModelInput`, `resolveAsyncFunctions`)
* Conversation state helpers
* Message format converters (`fromClaudeMessages`, `fromChatMessages`, etc.)

If you only use the REST API client for non-agent features (`client.chat.send(...)`, `client.models.list()`, etc.), **no changes are needed**.

## Step 1: Install the new package

```bash title="npm" lines theme={null}
npm install @openrouter/agent
```

```bash title="pnpm" lines theme={null}
pnpm add @openrouter/agent
```

```bash title="yarn" lines theme={null}
yarn add @openrouter/agent
```

```bash title="bun" lines theme={null}
bun add @openrouter/agent
```

```bash title="deno" lines theme={null}
deno add npm:@openrouter/agent
```

## Step 2: Update imports

Replace `@openrouter/sdk` subpath imports with the equivalent `@openrouter/agent` subpath.

### Client class

`@openrouter/agent` ships its own `OpenRouter` client, so you can drop the `@openrouter/sdk` dependency entirely if you only use agent features:

```diff lines theme={null}
- import OpenRouter from '@openrouter/sdk';
- import { callModel } from '@openrouter/sdk/funcs/call-model';
+ import { OpenRouter } from '@openrouter/agent';

  const client = new OpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
  });
+
+ const result = client.callModel({
+   model: 'openai/gpt-4o',
+   input: 'Hello',
+ });
+ const text = await result.getText();
```

You can also import the client from a direct subpath:

```typescript lines theme={null}
import { OpenRouter } from '@openrouter/agent/openrouter';
```

### Core imports

```diff lines theme={null}
- import { callModel } from '@openrouter/sdk/funcs/call-model';
+ import { callModel } from '@openrouter/agent/call-model';

- import { ModelResult } from '@openrouter/sdk/lib/model-result';
+ import { ModelResult } from '@openrouter/agent/model-result';

- import { tool } from '@openrouter/sdk/lib/tool';
+ import { tool } from '@openrouter/agent/tool';
```

### Tool types and guards

```diff lines theme={null}
- import type { Tool } from '@openrouter/sdk/lib/tool-types';
+ import type { Tool } from '@openrouter/agent/tool-types';

- import {
-   hasExecuteFunction,
-   isGeneratorTool,
- } from '@openrouter/sdk/lib/tool-types';
+ import {
+   hasExecuteFunction,
+   isGeneratorTool,
+ } from '@openrouter/agent/tool-types';
```

### Stop conditions

```diff lines theme={null}
- import {
-   stepCountIs,
-   hasToolCall,
-   maxCost,
- } from '@openrouter/sdk/lib/stop-conditions';
+ import {
+   stepCountIs,
+   hasToolCall,
+   maxCost,
+ } from '@openrouter/agent/stop-conditions';
```

### Async parameters

```diff lines theme={null}
- import type {
-   CallModelInput,
- } from '@openrouter/sdk/lib/async-params';
+ import type {
+   CallModelInput,
+ } from '@openrouter/agent/async-params';
```

### Conversation state and message formats

Conversation helpers and message format converters are available from the package barrel:

```diff lines theme={null}
- import {
-   createInitialState,
-   updateState,
-   fromClaudeMessages,
-   fromChatMessages,
- } from '@openrouter/sdk';
+ import {
+   createInitialState,
+   updateState,
+   fromClaudeMessages,
+   fromChatMessages,
+ } from '@openrouter/agent';
```

## Step 3: Verify your build

Run your type checker and tests to confirm everything resolves correctly:

```bash lines theme={null}
npx tsc --noEmit
npm test
```

## Full import mapping reference

| Old import path | New import path |
| - | - |
| `@openrouter/sdk` (client class) | `@openrouter/agent` or `@openrouter/agent/openrouter` |
| `@openrouter/sdk/funcs/call-model` | `@openrouter/agent/call-model` |
| `@openrouter/sdk/lib/model-result` | `@openrouter/agent/model-result` |
| `@openrouter/sdk/lib/tool` | `@openrouter/agent/tool` |
| `@openrouter/sdk/lib/tool-types` | `@openrouter/agent/tool-types` |
| `@openrouter/sdk/lib/stop-conditions` | `@openrouter/agent/stop-conditions` |
| `@openrouter/sdk/lib/async-params` | `@openrouter/agent/async-params` |
| `@openrouter/sdk` (barrel: state, messages) | `@openrouter/agent` |

## Automated migration

The script below handles **subpath imports** automatically. Barrel imports (`from '@openrouter/sdk'`) and client class imports (`import OpenRouter from '@openrouter/sdk'`) must be updated **manually**. A blanket replacement on the bare package name would also match subpath imports and break your code. See the [Client class](#client-class) and [Conversation state](#conversation-state-and-message-formats) sections above for the correct replacements.

```bash lines theme={null}
# Using sed (macOS)
find src -name '*.ts' -o -name '*.tsx' | xargs sed -i '' \
  -e "s|@openrouter/sdk/funcs/call-model|@openrouter/agent/call-model|g" \
  -e "s|@openrouter/sdk/lib/model-result|@openrouter/agent/model-result|g" \
  -e "s|@openrouter/sdk/lib/tool-types|@openrouter/agent/tool-types|g" \
  -e "s|@openrouter/sdk/lib/tool|@openrouter/agent/tool|g" \
  -e "s|@openrouter/sdk/lib/stop-conditions|@openrouter/agent/stop-conditions|g" \
  -e "s|@openrouter/sdk/lib/async-params|@openrouter/agent/async-params|g"
```

```bash lines theme={null}
# Using sed (Linux)
find src -name '*.ts' -o -name '*.tsx' | xargs sed -i \
  -e "s|@openrouter/sdk/funcs/call-model|@openrouter/agent/call-model|g" \
  -e "s|@openrouter/sdk/lib/model-result|@openrouter/agent/model-result|g" \
  -e "s|@openrouter/sdk/lib/tool-types|@openrouter/agent/tool-types|g" \
  -e "s|@openrouter/sdk/lib/tool|@openrouter/agent/tool|g" \
  -e "s|@openrouter/sdk/lib/stop-conditions|@openrouter/agent/stop-conditions|g" \
  -e "s|@openrouter/sdk/lib/async-params|@openrouter/agent/async-params|g"
```

> [!NOTE]
>
> The `tool-types` replacement runs before `tool` to avoid partial matches. After running the script, search your codebase for any remaining `from '@openrouter/sdk'` (without a `/` subpath) to find barrel and client imports that need manual updates.

## FAQ

### Do I still need `@openrouter/sdk`?

Only if you use non-agent REST API features like `client.models.list()`, `client.credits.get()`, or `client.chat.send()`. If your code only uses `callModel`, tools, and the agent client, you can remove `@openrouter/sdk` entirely.

### Can I use both packages together?

Yes. They are designed to work side by side. Use `@openrouter/sdk` for REST API features and `@openrouter/agent` for the agent toolkit:

```typescript lines theme={null}
import { OpenRouter } from '@openrouter/sdk';
import { callModel } from '@openrouter/agent/call-model';
import { tool } from '@openrouter/agent/tool';
```

### Will the old imports keep working?

The agent exports will be removed from `@openrouter/sdk` in a future major version. Update your imports now to avoid a breaking change later.

### Do I need to change my API key or configuration?

No. `@openrouter/agent` uses the same API key and endpoints. No server-side changes are required.
