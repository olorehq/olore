> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# App Attribution

> Get your app featured in OpenRouter rankings and analytics

App attribution allows developers to associate their API usage with their application, enabling visibility in OpenRouter's public rankings and detailed analytics. By including simple headers in your requests, your app can appear in our leaderboards and gain insights into your model usage patterns.

## Benefits of app attribution

When you properly attribute your app usage, you gain access to:

* **Public App Rankings**: Your app appears in OpenRouter's [public rankings](https://openrouter.ai/rankings) with daily, weekly, and monthly leaderboards
* **Model Apps Tabs**: Your app is featured on individual model pages showing which apps use each model most
* **Detailed Analytics**: Access comprehensive analytics showing your app's model usage over time, token consumption, and usage patterns
* **Professional Visibility**: Showcase your app to the OpenRouter developer community

## Attribution headers

OpenRouter tracks app attribution through the following HTTP headers:

### HTTP-Referer (required)

The `HTTP-Referer` header identifies your app's URL and is used as the primary identifier for rankings. **This header is required for app attribution.** Without it, no app page will be created and your usage will not appear in rankings. Your app's URL becomes its unique identifier in the system.

### X-OpenRouter-Title

The `X-OpenRouter-Title` header sets or modifies your app's display name
in rankings and analytics. `X-Title` is still supported for backwards compatibility. This header alone does not create an app page. It must be paired with `HTTP-Referer`.

### X-OpenRouter-Categories

The `X-OpenRouter-Categories` header assigns your app to one or more marketplace categories. Pass a comma-separated list of up to 2 categories per request. Categories must be lowercase, hyphen-separated, and each category is limited to 30 characters. Only recognized categories from the list below are accepted; OpenRouter drops unrecognized ones without an error. Categories are merged with any existing ones (up to 10 total).

### X-OpenRouter-App-Visibility

The `X-OpenRouter-App-Visibility` header controls whether a **new** app is listed publicly. Send `hidden` to create the app hidden: it is excluded from the public rankings, the app marketplace, and public app pages, while attribution keeps working and the app's usage still shows in your own analytics. Any other value, or no header at all, creates a public app.

`hidden` applies only when the request creates a brand-new app: an `HTTP-Referer` that resolves to an app that already exists — including through origin grouping, or through an app created by a prior OAuth authorization — keeps that app's current visibility. The header is ignored on every later request, so it cannot list a hidden app publicly, and a caller of somebody else's app cannot hide it. To change an app that already exists, contact support.

```http theme={null}
HTTP-Referer: https://internal-service.example.com
X-OpenRouter-App-Visibility: hidden
```

#### Category groups

Categories are organized into groups for the [marketplace](https://openrouter.ai/apps):

**Coding** (tools for software development):

* `cli-agent`: Terminal-based coding assistants
* `ide-extension`: Editor/IDE integrations
* `cloud-agent`: Cloud-hosted coding agents
* `programming-app`: Programming apps
* `native-app-builder`: Mobile and desktop app builders

**Creative** (creative apps):

* `creative-writing`: Creative writing tools
* `video-gen`: Video generation apps
* `image-gen`: Image generation apps
* `audio-gen`: Audio generation apps

**Productivity** (writing and productivity tools):

* `writing-assistant`: AI-powered writing tools
* `general-chat`: General chat apps
* `personal-agent`: Personal AI agents
* `legal`: Legal tools and assistants

**Entertainment** (entertainment apps):

* `roleplay`: Roleplay apps and other character-based chat apps
* `game`: Gaming and interactive entertainment apps

#### Custom categories

Only recognized categories from the list above are accepted.
OpenRouter drops unrecognized values without an error. If you have a use case
that doesn't fit the existing categories, reach out to us and
we may add new categories in the future.

> [!WARNING]
>
> `HTTP-Referer` is **required** to create an app page and appear in rankings. Setting only `X-OpenRouter-Title` without a URL will not create an app entry. Apps using `localhost` URLs must also include `X-OpenRouter-Title` to be tracked.

## Implementation examples

```typescript title="TypeScript SDK" expandable lines theme={null}
import { OpenRouter } from '@openrouter/sdk';

const openRouter = new OpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
  httpReferer: 'https://myapp.com', // Your app's URL
  appTitle: 'My AI Assistant', // Your app's display name
  appCategories: 'cli-agent,cloud-agent', // Optional categories
});

const response = await openRouter.responses.send({
  responsesRequest: {
    model: 'openai/gpt-5.2',
    input: 'Hello, world!',
    stream: false,
  },
});

if (!('output' in response)) {
  throw new Error('Expected a non-streaming response');
}

console.log(response.output.find((item) => item.type === 'message'));
```

```python title="Python (OpenAI SDK)" expandable lines theme={null}
from openai import OpenAI

client = OpenAI(
  base_url="https://openrouter.ai/api/v1",
  api_key="<OPENROUTER_API_KEY>",
)

response = client.responses.create(
  extra_headers={
    "HTTP-Referer": "https://myapp.com", # Your app's URL
    "X-OpenRouter-Title": "My AI Assistant", # Your app's display name
    "X-OpenRouter-Categories": "cli-agent,cloud-agent", # Optional
  },
  model="openai/gpt-5.2",
  input="Hello, world!",
)
```

```typescript title="TypeScript (OpenAI SDK)" expandable lines theme={null}
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: '<OPENROUTER_API_KEY>',
  defaultHeaders: {
    'HTTP-Referer': 'https://myapp.com', // Your app's URL
    'X-OpenRouter-Title': 'My AI Assistant', // Your app's display name
    'X-OpenRouter-Categories': 'cli-agent,cloud-agent', // Optional
  },
});

async function main() {
  const response = await openai.responses.create({
    model: 'openai/gpt-5.2',
    input: 'Hello, world!',
  });

  console.log(response.output_text);
}

main();
```

```python title="Python (Direct API)" expandable lines theme={null}
import requests
import json

response = requests.post(
  url="https://openrouter.ai/api/v1/responses",
  headers={
    "Authorization": "Bearer <OPENROUTER_API_KEY>",
    "HTTP-Referer": "https://myapp.com", # Your app's URL
    "X-OpenRouter-Title": "My AI Assistant", # Your app's display name
    "X-OpenRouter-Categories": "cli-agent,cloud-agent", # Optional
    "Content-Type": "application/json",
  },
  data=json.dumps({
    "model": "openai/gpt-5.2",
    "input": "Hello, world!"
  })
)
```

```typescript title="TypeScript (fetch)" lines theme={null}
fetch('https://openrouter.ai/api/v1/responses', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer <OPENROUTER_API_KEY>',
    'HTTP-Referer': 'https://myapp.com', // Your app's URL
    'X-OpenRouter-Title': 'My AI Assistant', // Your app's display name
    'X-OpenRouter-Categories': 'cli-agent,cloud-agent', // Optional
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/gpt-5.2',
    input: 'Hello, world!',
  }),
});
```

```shell title="cURL" lines theme={null}
curl https://openrouter.ai/api/v1/responses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "HTTP-Referer: https://myapp.com" \
  -H "X-OpenRouter-Title: My AI Assistant" \
  -H "X-OpenRouter-Categories: cli-agent,cloud-agent" \
  -d '{
  "model": "openai/gpt-5.2",
  "input": "Hello, world!"
}'
```

## Where your app appears

### App rankings

Your attributed app will appear in OpenRouter's main rankings page at [openrouter.ai/rankings](https://openrouter.ai/rankings). The rankings show:

* **Top Apps**: Largest public apps by token usage
* **Time Periods**: Daily, weekly, and monthly views
* **Usage Metrics**: Total token consumption across all models

### Model apps tabs

On individual model pages (e.g., [GPT-4o](https://openrouter.ai/models/openai/gpt-4o)), your app will be featured in the "Apps" tab showing:

* **Top Apps**: Apps using that specific model most
* **Weekly Rankings**: Updated weekly based on usage
* **Usage Context**: How your app compares to others using the same model

### Individual app analytics

Once your app is tracked, you can access detailed analytics at `openrouter.ai/apps?url=<your-app-url>` including:

* **Model Usage Over Time**: Charts showing which models your app uses
* **Token Consumption**: Detailed breakdown of prompt and completion tokens
* **Usage Patterns**: Historical data to understand your app's AI usage trends

## Best practices

### URL requirements

* **Always include `HTTP-Referer`.** It's the minimum requirement for app attribution.
* Use your app's primary domain (e.g., `https://myapp.com`)
* Avoid using subdomains unless they represent distinct apps
* For localhost development, always include `X-OpenRouter-Title` as well
* You can view your app's page at `openrouter.ai/apps?url=<your-referer-url>`

### Title guidelines

* Keep titles concise and descriptive
* Use your app's actual name as users know it
* Avoid generic names like "AI App" or "Chatbot"

### Privacy considerations

* Only public apps, meaning those that send headers, are included in rankings
* Attribution headers don't expose sensitive information about your requests

## Keeping attributed apps private

If you use attribution as internal telemetry for services you don't want listed
publicly, send `X-OpenRouter-App-Visibility: hidden` alongside `HTTP-Referer`:

```bash theme={null}
curl https://openrouter.ai/api/v1/responses \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "HTTP-Referer: https://internal-service.example.com" \
  -H "X-OpenRouter-Title: Internal Service" \
  -H "X-OpenRouter-App-Visibility: hidden" \
  -H "Content-Type: application/json" \
  -d '{"model": "openai/gpt-4o", "input": "Hello"}'
```

Set it once in the client every internal service shares and each new URL you
add lands hidden the first time it sends traffic — no request afterwards, from
you or anyone else, changes that app's visibility in either direction.

## Related documentation

* [Quickstart Guide](https://openrouter.ai/docs/quickstart.md) - Basic setup with attribution headers
* [API Reference](https://openrouter.ai/docs/api_reference/overview.md) - Complete header documentation
* [Usage Accounting](https://openrouter.ai/docs/cookbook/administration/usage-accounting.md) - Understanding your API usage
