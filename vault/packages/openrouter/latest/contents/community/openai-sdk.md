> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# OpenAI SDK

> Using OpenRouter with OpenAI SDK

## Using the OpenAI SDK

* Using `pip install openai`: [github](https://github.com/OpenRouterTeam/openrouter-examples-python/blob/main/src/openai_test.py).
* Using `npm i openai`: [github](https://github.com/OpenRouterTeam/openrouter-examples/tree/main/typescript).
  > [!TIP]
  >
  > You can also use [Grit](https://app.grit.io/studio?key=RKC0n7ikOiTGTNVkI8uRS) to automatically migrate your code. Simply run `npx @getgrit/launcher openrouter`.

```typescript title="TypeScript" expandable lines theme={null}
import OpenAI from "openai"

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: "<OPENROUTER_API_KEY>",
  defaultHeaders: {
    "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
    "X-OpenRouter-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
  },
})

async function main() {
  const response = await openai.responses.create({
    model: "openai/gpt-4o",
    input: "Say this is a test",
  })

  console.log(response.output_text)
}
main();
```

```python title="Python" expandable lines theme={null}
from openai import OpenAI
from os import getenv

# gets API Key from environment variable OPENROUTER_API_KEY
client = OpenAI(
  base_url="https://openrouter.ai/api/v1",
  api_key=getenv("OPENROUTER_API_KEY"),
)

response = client.responses.create(
  model="openai/gpt-4o",
  extra_headers={
    "HTTP-Referer": "<YOUR_SITE_URL>", # Optional. Site URL for rankings on openrouter.ai.
    "X-OpenRouter-Title": "<YOUR_SITE_NAME>", # Optional. Site title for rankings on openrouter.ai.
  },
  # pass extra_body to access OpenRouter-only arguments.
  # extra_body={
    # "models": [
    #   "openai/gpt-4o",
    #   "mistralai/mixtral-8x22b-instruct"
    # ]
  # },
  input="Say this is a test",
)
print(response.output_text)
```
