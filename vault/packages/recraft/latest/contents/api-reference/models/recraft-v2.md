> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Recraft V2

> Recraft V2 raster and SVG models: the lowest-cost vector option in the API, for icons and minimalistic illustration, from $0.022 per image.

Recraft V2, released in February 2024, is a previous-generation model and the cheapest vector option in the API. It remains a good fit for minimalistic icons, textured illustration, and vector workflows.

> [!WARNING]
>
> V2 does not render text reliably. If the image contains text, use [Recraft V3](https://www.recraft.ai/docs/api-reference/models/recraft-v3.md) or newer.

> [card] \$0.022
>
> per image, raster

> [card] 1K
>
> WebP, PNG, or SVG

> [card] 1,000
>
> characters of prompt

> [card] recraftv2
>
> `model` value

## Try it

Create a token in [API tokens](https://www.recraft.ai/app/api/api-keys) (it needs a positive API units balance) and set it once per terminal session:

```bash theme={null}
export RECRAFT_API_TOKEN=your_token
```

Then run:

```bash cURL theme={null}
curl https://external.api.recraft.ai/v1/images/generations \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "settings gear icon",
    "model": "recraftv2_vector",
    "style": "Icon"
  }'
```

```python Python theme={null}
# pip install requests
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'prompt': 'settings gear icon',
        'model': 'recraftv2_vector',
        'style': 'Icon',
    },
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
    prompt='settings gear icon',
    model='recraftv2_vector',
    extra_body={'style': 'Icon'},
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
  body: JSON.stringify({
    prompt: 'settings gear icon',
    model: 'recraftv2_vector',
    style: 'Icon',
  }),
});
if (!response.ok) throw new Error(await response.text());
const result = await response.json();
console.log(result.data[0].url);
```

## Response

```json theme={null}
{
  "created": 1759140000,
  "credits": 44,
  "data": [
    {
      "image_id": "0e6a1b8c-5b1f-4a8e-9f3a-2c7d4e8b9a10",
      "url": "https://..."
    }
  ]
}
```

* `data` has one entry per image (`n`). Download each image from its `url`, here an SVG file.
* Image URLs are temporary: files are kept for about 24 hours, so download them. See [Limits and sizes](https://www.recraft.ai/docs/api-reference/appendix.md#image-storage).
* `credits` is the number of API units charged for the request.
* Pass `"response_format": "b64_json"` to get the image bytes inline, or `"multipart"` for the lowest latency. See [Image inputs and results](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-results).

## Parameters

| Parameter | Type, default | Description |
| - | - | - |
| `prompt` | string, **required** | What to generate. Up to 1,000 characters. |
| `model` | string | `recraftv2` or `recraftv2_vector`. Without it the API uses `recraftv4_1`. |
| `style` | string, `Photorealism` | A [curated style](https://www.recraft.ai/docs/api-reference/styles.md#list-of-curated-styles), e.g. `Icon`, `Vector art`, `Illustration`. Default for `recraftv2_vector` is `Vector art`. |
| `size` | string, auto | Aspect ratio (`1:1`, `16:9`, `3:4`, ...) or exact size (`1024x1024`). Picked from the prompt when omitted. See [supported sizes](https://www.recraft.ai/docs/api-reference/appendix.md#image-sizes). |
| `n` | integer, `1` | Number of images, 1 to 6. |
| `negative_prompt` | string | What the image must not contain. |
| `response_format` | string, `url` | `url`, `b64_json`, or `multipart`. |
| `image_format` | string, `webp` | `webp` (lossless) or `png`. Ignored for vector output, which is always SVG. |

> [accordion] More parameters
>
> | Parameter | Type, default | Description |
> | - | - | - |
> | `style_id` | UUID | Apply a [custom style](https://www.recraft.ai/docs/api-reference/styles.md#custom-styles) instead of `style`. |
> | `style_reference_urls` | array of strings | Up to 10 image URLs to use as style references. See [Style references](https://www.recraft.ai/docs/api-reference/endpoints.md#style-references). |
> | `style_match` | string | Only `regular` for V2. |
> | `random_seed` | integer | Seed for reproducible results. |
> | `controls.colors` | array of colors | Preferred colors, e.g. `[{"rgb": [255, 102, 0]}]`. See [Colors](https://www.recraft.ai/docs/api-reference/endpoints.md#colors). |
> | `controls.background_color` | color | Desired background color, e.g. `{"rgb": [255, 255, 255]}`. |
>
> Not supported by V2: `text_layout`, and the `artistic_level` and `no_text` controls.

## Variants

| `model` | Output | Price per image |
| - | - | - |
| `recraftv2` | Raster, 1K | \$0.022 |
| `recraftv2_vector` | Vector, SVG | \$0.044 |

## Capabilities

| Capability | Support |
| - | - |
| [Generate image](https://www.recraft.ai/docs/api-reference/endpoints.md#generate-image) | Yes |
| [Create style](https://www.recraft.ai/docs/api-reference/endpoints.md#create-style) | Yes, \$0.005 per request |
| Vector output | Yes, `recraftv2_vector` |
| [Styles](https://www.recraft.ai/docs/api-reference/styles.md) | Curated styles, custom styles, and style references |
| `negative_prompt` | Yes |
| [Controls](https://www.recraft.ai/docs/api-reference/endpoints.md#controls) | Partial: `colors` and `background_color` |
| Image to image, inpainting, text layout | No, see [Recraft V3](https://www.recraft.ai/docs/api-reference/models/recraft-v3.md) |

## Examples

> [accordion] Icon set in brand colors
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/generations \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "prompt": "shopping cart icon",
>     "model": "recraftv2_vector",
>     "style": "Icon",
>     "n": 4,
>     "controls": {"colors": [{"rgb": [255, 102, 0]}]}
>   }'
> ```

## Related

> [card] [Curated styles](https://www.recraft.ai/docs/api-reference/styles.md#list-of-curated-styles)
>
> The full list of V2 and V2 Vector styles.

> [card] [All models](https://www.recraft.ai/docs/api-reference/models/overview.md)
>
> The whole lineup with prices and best-fit use cases.

> [card] [Endpoints](https://www.recraft.ai/docs/api-reference/endpoints.md)
>
> Full request reference for generate image.

> [card] [About Recraft V2](https://www.recraft.ai/docs/recraft-models/recraft-V2.md)
>
> V2's curated styles, icon workflows, and limitations in detail.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.