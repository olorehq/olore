> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Enhance prompt

> Expand a short prompt into a richer description with visual context, style cues, and composition details for $0.01 per request.

Enhance prompt expands a short prompt into a richer, more detailed description with added visual context, style cues, and composition details. Use the result as the `prompt` of any image generation endpoint.

> [card] \$0.01
>
> per request

> [card] Prompt → enhanced prompt
>
> up to 2,000 characters

> [card] POST /v1/prompts/enhance
>
> endpoint

## Try it

Create a token in [API tokens](https://www.recraft.ai/app/api/api-keys) (it needs a positive API units balance) and set it once per terminal session:

```bash theme={null}
export RECRAFT_API_TOKEN=your_token
```

Then run. The request enhances a short prompt:

```bash cURL theme={null}
curl https://external.api.recraft.ai/v1/prompts/enhance \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "race car on a track"
  }'
```

```python Python theme={null}
# pip install requests
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/prompts/enhance',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'prompt': 'race car on a track',
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['enhanced_prompt'])
```

```javascript JavaScript theme={null}
// Node.js 18+, run as an ES module (file.mjs)
const response = await fetch('https://external.api.recraft.ai/v1/prompts/enhance', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.RECRAFT_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    prompt: 'race car on a track',
  }),
});
if (!response.ok) throw new Error(await response.text());
const result = await response.json();
console.log(result.enhanced_prompt);
```

```python Python (OpenAI SDK) theme={null}
# pip install openai
import os

from openai import OpenAI

client = OpenAI(
    base_url='https://external.api.recraft.ai/v1',
    api_key=os.environ['RECRAFT_API_TOKEN'],
)

response = client.post(
    path='/prompts/enhance',
    cast_to=object,
    body={
        'prompt': 'race car on a track',
    },
)
print(response['enhanced_prompt'])
```

## Response

```json theme={null}
{
  "enhanced_prompt": "..."
}
```

* The result is a single `enhanced_prompt` string. It is not an image, so there is no `data` array.
* The enhanced prompt is more detailed than the original. Models have different prompt length limits, see [Prompt length](https://www.recraft.ai/docs/api-reference/appendix.md#prompt-length).

## Parameters

| Parameter | Type, default | Description |
| - | - | - |
| `prompt` | string, **required** | The prompt to enhance. It must not be empty and must not exceed 2,000 characters. See [Prompt length](https://www.recraft.ai/docs/api-reference/appendix.md#prompt-length). |

## Examples

> [accordion] Enhance a prompt, then generate an image
>
> Enhance a short prompt, then pass the result as `prompt` to `/v1/images/generations` with `recraftv4_1`. The two requests cost \$0.01 and the price of the generated image. See [Pricing](https://www.recraft.ai/docs/api-reference/pricing.md).
>
> ```bash cURL theme={null}
> ENHANCED=$(curl -s https://external.api.recraft.ai/v1/prompts/enhance \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{"prompt": "race car on a track"}' \
>   | python3 -c 'import json, sys; print(json.load(sys.stdin)["enhanced_prompt"])')
>
> curl https://external.api.recraft.ai/v1/images/generations \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d "$(python3 -c 'import json, sys; print(json.dumps({"prompt": sys.argv[1], "model": "recraftv4_1"}))' "$ENHANCED")"
> ```
>
> ```python Python theme={null}
> import os
>
> import requests
>
> headers = {'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"}
>
> response = requests.post(
>     'https://external.api.recraft.ai/v1/prompts/enhance',
>     headers=headers,
>     json={'prompt': 'race car on a track'},
> )
> if not response.ok:
>     raise SystemExit(f'{response.status_code}: {response.text}')
> enhanced_prompt = response.json()['enhanced_prompt']
> print(enhanced_prompt)
>
> response = requests.post(
>     'https://external.api.recraft.ai/v1/images/generations',
>     headers=headers,
>     json={'prompt': enhanced_prompt, 'model': 'recraftv4_1'},
> )
> if not response.ok:
>     raise SystemExit(f'{response.status_code}: {response.text}')
> print(response.json()['data'][0]['url'])
> ```

## Related

> [card] [Recraft V4.1](https://www.recraft.ai/docs/api-reference/models/recraft-v4-1.md)
>
> The default model for image generation.

> [card] [Pricing](https://www.recraft.ai/docs/api-reference/pricing.md)
>
> Prices of every model and tool.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.