> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Recraft API

> Generate and edit raster and vector images with Recraft models over one REST API. Get a token, send a prompt, get an image.

> [!TIP]
>
> **Building with an AI agent?** Give Claude, Cursor, or ChatGPT this one link. It has every model, parameter, and a working request:
>
> ```text theme={null}
> https://www.recraft.ai/docs/api-reference/agents.md
> ```
>
> Using Claude Code? Install the [Recraft skill](https://www.recraft.ai/docs/api-reference/ai-tools.md#claude-code-skill) once and ask for what you need.

## Your first image

Create a token in [API tokens](https://www.recraft.ai/app/api/api-keys) and set it once per terminal session:

```bash theme={null}
export RECRAFT_API_TOKEN=your_token
```

Then send a prompt:

```bash cURL theme={null}
curl https://external.api.recraft.ai/v1/images/generations \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "a red fox in a snowy forest, flat vector", "model": "recraftv4_1_vector"}'
```

```python Python theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={'prompt': 'a red fox in a snowy forest, flat vector', 'model': 'recraftv4_1_vector'},
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
    prompt='a red fox in a snowy forest, flat vector',
    model='recraftv4_1_vector',
)
print(response.data[0].url)
```

```javascript JavaScript theme={null}
const response = await fetch('https://external.api.recraft.ai/v1/images/generations', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.RECRAFT_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ prompt: 'a red fox in a snowy forest, flat vector', model: 'recraftv4_1_vector' }),
});
if (!response.ok) throw new Error(await response.text());
console.log((await response.json()).data[0].url);
```

You get a link to an SVG file, valid for about 24 hours:

```json theme={null}
{
  "created": 1759140000,
  "credits": 80,
  "data": [{ "image_id": "0e6a1b8c-5b1f-4a8e-9f3a-2c7d4e8b9a10", "url": "https://..." }]
}
```

New to the API? The [Quickstart](https://www.recraft.ai/docs/api-reference/getting-started.md) walks through each step.

## Models

> [card] [V4.1 Flash](https://www.recraft.ai/docs/api-reference/models/recraft-v4-1-flash.md)
>
> About 1.3 s and \$0.007 per image, quality close to V4.1.
>
> RasterFastest

> [card] [V4.1](https://www.recraft.ai/docs/api-reference/models/recraft-v4-1.md)
>
> The default. Photorealism, illustration, and strong short prompts. From \$0.035.
>
> RasterVectorStyles

> [card] [V4 Styles](https://www.recraft.ai/docs/api-reference/models/recraft-v4-styles.md)
>
> Match any style from 1 to 10 reference images. From \$0.035.
>
> RasterVectorStyle match

> [card] [V4](https://www.recraft.ai/docs/api-reference/models/recraft-v4.md)
>
> Design taste and production-grade vectors. From \$0.04.
>
> RasterVectorStyles

> [card] [V3](https://www.recraft.ai/docs/api-reference/models/recraft-v3.md)
>
> Curated styles, exact text placement, and all editing operations. From \$0.04.
>
> InpaintOutpaintText layout

> [card] [V2](https://www.recraft.ai/docs/api-reference/models/recraft-v2.md)
>
> The cheapest vector option, for icons and simple illustration. From \$0.022.
>
> RasterVectorIcons

Not sure which to pick? Compare them in [All models](https://www.recraft.ai/docs/api-reference/models/overview.md).

## What else you can do

> [card] [Edit](https://www.recraft.ai/docs/api-reference/tools/image-to-image.md)
>
> Image to image, inpaint, outpaint, and erase region.

> [card] [Background](https://www.recraft.ai/docs/api-reference/tools/remove-background.md)
>
> Remove, replace, or generate a background.

> [card] [Vectorize](https://www.recraft.ai/docs/api-reference/tools/vectorize.md)
>
> Turn a PNG or JPG into SVG for \$0.01.

> [card] [Upscale](https://www.recraft.ai/docs/api-reference/tools/upscale.md)
>
> Crisp or creative upscale, and enhance details.

> [card] [Styles](https://www.recraft.ai/docs/api-reference/styles.md)
>
> Save your brand look once, reuse it in every request.

> [card] [Enhance prompt](https://www.recraft.ai/docs/api-reference/tools/enhance-prompt.md)
>
> Expand a short prompt into a detailed one.

## Reference

* [Endpoints](https://www.recraft.ai/docs/api-reference/endpoints.md): every operation with its parameters.
* [Pricing](https://www.recraft.ai/docs/api-reference/pricing.md) and [Limits and sizes](https://www.recraft.ai/docs/api-reference/appendix.md): prices, sizes, prompt limits, and rate limits.
* [Clients and SDKs](https://www.recraft.ai/docs/api-reference/clients.md): plain HTTP or the OpenAI Python library.
* [Use with AI tools](https://www.recraft.ai/docs/api-reference/ai-tools.md): `llms.txt`, Markdown pages, and the Claude Code skill.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.