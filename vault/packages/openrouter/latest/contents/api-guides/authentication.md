> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Authentication

> API Authentication

You can cover model costs with OpenRouter API keys.

Our API authenticates requests using Bearer tokens. This allows you to use `curl` or the [OpenAI SDK](https://platform.openai.com/docs/frameworks) directly with OpenRouter.

> [!WARNING]
>
> API keys on OpenRouter are more powerful than keys used directly for model APIs.
>
> They allow users to set credit limits for apps, and they can be used in [OAuth](https://openrouter.ai/docs/guides/overview/auth/oauth.md) flows.

## Using an API key

To use an API key, [first create your key](https://openrouter.ai/keys). Give it a name and choose a credit limit (or no limit). Once a key has used its credit limit, requests with it are rejected until you raise the limit on the key's page, or, for a daily, weekly, or monthly limit, until the limit resets. Keys created for you during onboarding get a \$100 credit limit and expire after 180 days.

> [!WARNING]
>
> We recommend setting a credit limit on every key. A key with no limit lets a leaked key or a runaway agent spend your entire balance, including any auto top-ups. If you need a key without a limit, keep it out of client-side code and rotate it promptly if you suspect it has been [exposed](#if-your-key-has-been-exposed).

If you're calling the OpenRouter API directly, set the `Authorization` header to a Bearer token with your API key.

If you're using the OpenAI Typescript SDK, set the `api_base` to `https://openrouter.ai/api/v1` and the `apiKey` to your API key.

```typescript title="TypeScript SDK" lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
  httpReferer: '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
  appTitle: '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
});

const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'openai/gpt-5.2',
    input: 'Say this is a test',
    stream: false,
  },
});

if (!('output' in response)) {
  throw new Error('Expected a non-streaming response');
}

console.log([...response.output].reverse().find((item) => item.type === 'message'));
```

```python title="Python (OpenAI SDK)" lines theme={null}
from openai import OpenAI

client = OpenAI(
  base_url="https://openrouter.ai/api/v1",
  api_key="<OPENROUTER_API_KEY>",
)

response = client.responses.create(
  extra_headers={
    "HTTP-Referer": "<YOUR_SITE_URL>",  # Optional. Site URL for rankings on openrouter.ai.
    "X-OpenRouter-Title": "<YOUR_SITE_NAME>",     # Optional. Site title for rankings on openrouter.ai.
  },
  model="openai/gpt-5.2",
  instructions="You are a helpful assistant.",
  input="Hello!",
)

reply = response.output_text
```

```typescript title="TypeScript (OpenAI SDK)" expandable lines theme={null}
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: '<OPENROUTER_API_KEY>',
  defaultHeaders: {
    'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
  },
});

async function main() {
  const response = await openai.responses.create({
    model: 'openai/gpt-5.2',
    input: 'Say this is a test',
  });

  console.log(response.output_text);
}

main();
```

```typescript title="TypeScript (Raw API)" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai.
    'X-OpenRouter-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai.
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/gpt-5.2',
    input: 'What is the meaning of life?',
  }),
});
```

```shell title="cURL" lines theme={null}
curl https://openrouter.ai/api/v1/responses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -d '{
  "model": "openai/gpt-5.2",
  "instructions": "You are a helpful assistant.",
  "input": "Hello!"
}'
```

To stream responses, see [Streaming](https://openrouter.ai/docs/api_reference/streaming.md).

## If your key has been exposed

> [!WARNING]
>
> You must protect your API keys and never commit them to public repositories.

OpenRouter is a GitHub secret scanning partner, and has other methods to detect exposed keys. If we determine that your key has been compromised, you will receive an email notification.

If you receive such a notification or suspect your key has been exposed, immediately visit [your key settings page](https://openrouter.ai/settings/keys) to delete the compromised key and create a new one.

Using environment variables and keeping keys out of your codebase is strongly recommended.
