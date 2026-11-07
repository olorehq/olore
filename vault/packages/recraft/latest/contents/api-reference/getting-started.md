> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Quickstart

> Get a Recraft API token and generate your first image with one request, in cURL, Python, or JavaScript.

Generate your first image with the Recraft API in about two minutes.

**1. Get an API token**

Open [API tokens](https://www.recraft.ai/app/api/api-keys) and select **Create token**. The selected account needs a positive API unit balance; [add units](https://www.recraft.ai/app/api/billing) if needed. All tokens for that account share its balance.

**2. Save it as an environment variable**

```bash theme={null}
export RECRAFT_API_TOKEN=your_token
```

Every example in these docs reads the token from `RECRAFT_API_TOKEN`.

**3. Make a request**

```bash cURL theme={null}
curl https://external.api.recraft.ai/v1/images/generations \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "two race cars on a track"}'
```

```python Python theme={null}
# pip install requests
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={'prompt': 'two race cars on a track'},
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

```python Python (OpenAI SDK) theme={null}
# pip install openai
import os

from openai import OpenAI

client = OpenAI(
    base_url='https://external.api.recraft.ai/v1',
    api_key=os.environ['RECRAFT_API_TOKEN'],
)

response = client.images.generate(
    prompt='two race cars on a track',
)
print(response.data[0].url)
```

```javascript JavaScript theme={null}
// Node.js 18+, run as an ES module (file.mjs)
const response = await fetch('https://external.api.recraft.ai/v1/images/generations', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.RECRAFT_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ prompt: 'two race cars on a track' }),
});
if (!response.ok) throw new Error(await response.text());
const result = await response.json();
console.log(result.data[0].url);
```

Without a `model`, the request uses [Recraft V4.1](https://www.recraft.ai/docs/api-reference/models/recraft-v4-1.md) at \$0.035 per image.

**4. Get the image**

The response lists the generated images:

```json theme={null}
{
  "created": 1759140000,
  "credits": 35,
  "data": [
    {
      "image_id": "0e6a1b8c-5b1f-4a8e-9f3a-2c7d4e8b9a10",
      "url": "https://..."
    }
  ]
}
```

Download the file from `data[0].url`: image URLs are temporary and files are kept for about 24 hours. `credits` is the number of API units the request cost.

## Authentication

All requests authenticate with a [Bearer token](https://swagger.io/docs/specification/authentication/bearer-authentication/) in the `Authorization` header:

```text theme={null}
Authorization: Bearer RECRAFT_API_TOKEN
```

The base URL is `https://external.api.recraft.ai/v1`. The API follows REST principles, so any HTTP client works. To use the OpenAI Python library instead, see [Clients and SDKs](https://www.recraft.ai/docs/api-reference/clients.md).

## Next steps

> [card] [Choose a model](https://www.recraft.ai/docs/api-reference/models/overview.md)
>
> Compare every model by price, output, and best use case.

> [card] [Fast generation](https://www.recraft.ai/docs/api-reference/models/recraft-v4-1-flash.md)
>
> About 1.3 seconds and \$0.007 per image with V4.1 Flash.

> [card] [Vector output](https://www.recraft.ai/docs/api-reference/models/recraft-v4-1.md#examples)
>
> Get editable SVG with a `_vector` model.

> [card] [Generate in a style](https://www.recraft.ai/docs/api-reference/models/recraft-v4-styles.md)
>
> Match a style from your own reference images.

> [card] [Edit images](https://www.recraft.ai/docs/api-reference/endpoints.md)
>
> Image to image, inpainting, vectorizing, upscaling, and more.

> [card] [Use with AI tools](https://www.recraft.ai/docs/api-reference/ai-tools.md)
>
> Give Claude, ChatGPT, or Cursor the docs to write your integration.

## All operations

The API also covers:

* [Create style](https://www.recraft.ai/docs/api-reference/endpoints.md#create-style), reusable custom styles from reference images.
* [Image to image](https://www.recraft.ai/docs/api-reference/tools/image-to-image.md), [inpainting](https://www.recraft.ai/docs/api-reference/tools/inpainting.md), and [outpainting](https://www.recraft.ai/docs/api-reference/tools/outpainting.md).
* [Replace background](https://www.recraft.ai/docs/api-reference/tools/background.md), [generate background](https://www.recraft.ai/docs/api-reference/tools/background.md#generate-background), and [remove background](https://www.recraft.ai/docs/api-reference/tools/remove-background.md).
* [Vectorize image](https://www.recraft.ai/docs/api-reference/tools/vectorize.md), [crisp upscale](https://www.recraft.ai/docs/api-reference/tools/upscale.md), and [creative upscale](https://www.recraft.ai/docs/api-reference/tools/upscale.md#creative-upscale).
* [Enhance details](https://www.recraft.ai/docs/api-reference/tools/enhance-details.md), [erase region](https://www.recraft.ai/docs/api-reference/tools/erase-region.md), and [remix image](https://www.recraft.ai/docs/api-reference/tools/remix.md).
* [Enhance prompt](https://www.recraft.ai/docs/api-reference/tools/enhance-prompt.md) and [get user information](https://www.recraft.ai/docs/api-reference/endpoints.md#get-user-information).

An interactive [Swagger reference](https://external.api.recraft.ai/doc/#/) is also available.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.