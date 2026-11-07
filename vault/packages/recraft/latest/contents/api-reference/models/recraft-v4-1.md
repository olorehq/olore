> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Recraft V4.1

> The default Recraft API model: polished raster and SVG images with strong photorealism and prompt following, from $0.035 per image.

Recraft V4.1 is the default model of the API, released in May 2026. It gives sharp, polished results with strong photorealism and prompt following, and returns raster or editable SVG images.

> [card] \$0.035
>
> per image, standard raster

> [card] 1K / 2K
>
> WebP, PNG, or SVG

> [card] 10,000
>
> characters of prompt

> [card] recraftv4\_1
>
> default `model`

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
    "prompt": "two race cars on a track",
    "model": "recraftv4_1"
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
        'prompt': 'two race cars on a track',
        'model': 'recraftv4_1',
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
    prompt='two race cars on a track',
    model='recraftv4_1',
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
    prompt: 'two race cars on a track',
    model: 'recraftv4_1',
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
  "credits": 35,
  "data": [
    {
      "image_id": "0e6a1b8c-5b1f-4a8e-9f3a-2c7d4e8b9a10",
      "url": "https://..."
    }
  ]
}
```

* `data` has one entry per image (`n`). Download each image from its `url`.
* Image URLs are temporary: files are kept for about 24 hours, so download them. See [Limits and sizes](https://www.recraft.ai/docs/api-reference/appendix.md#image-storage).
* `credits` is the number of API units charged for the request.
* Pass `"response_format": "b64_json"` to get the image bytes inline, or `"multipart"` for the lowest latency. See [Image inputs and results](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-results).

## Parameters

| Parameter | Type, default | Description |
| - | - | - |
| `prompt` | string, **required** | What to generate. Up to 10,000 characters. |
| `model` | string, `recraftv4_1` | One of the [variants](#variants) below. |
| `size` | string, auto | Aspect ratio (`1:1`, `16:9`, `3:4`, ...) or exact size (`1024x1024`). Picked from the prompt when omitted. See [supported sizes](https://www.recraft.ai/docs/api-reference/appendix.md#image-sizes). |
| `n` | integer, `1` | Number of images, 1 to 6. |
| `style_id` | UUID | Apply a [custom style](https://www.recraft.ai/docs/api-reference/styles.md#custom-styles). |
| `response_format` | string, `url` | `url`, `b64_json`, or `multipart`. |
| `image_format` | string, `webp` | `webp` (lossless) or `png`. Ignored for vector output, which is always SVG. |

> [accordion] More parameters
>
> | Parameter | Type, default | Description |
> | - | - | - |
> | `style_reference_urls` | array of strings | Up to 10 image URLs to use as style references instead of `style_id`. See [Style references](https://www.recraft.ai/docs/api-reference/endpoints.md#style-references). |
> | `style_match` | string | `flexible` or `precise`: how closely to follow the style. See [Style match](https://www.recraft.ai/docs/api-reference/styles.md#style-match). |
> | `random_seed` | integer | Seed for reproducible results. |
> | `controls.colors` | array of colors | Preferred colors, e.g. `[{"rgb": [255, 102, 0]}]`. See [Colors](https://www.recraft.ai/docs/api-reference/endpoints.md#colors). |
> | `controls.background_color` | color | Desired background color, e.g. `{"rgb": [255, 255, 255]}`. |
>
> Not supported by V4.1: `negative_prompt`, `style` (curated styles), `text_layout`, and the `artistic_level` and `no_text` controls.

## Variants

| `model` | Output | Price per image |
| - | - | - |
| `recraftv4_1` | Raster, 1K | \$0.035 |
| `recraftv4_1_vector` | Vector, SVG | \$0.08 |
| `recraftv4_1_pro` | Raster, 2K | \$0.21 |
| `recraftv4_1_pro_vector` | Vector, SVG | \$0.30 |
| `recraftv4_1_utility` | Raster, 1K | \$0.035 |
| `recraftv4_1_utility_vector` | Vector, SVG | \$0.08 |
| `recraftv4_1_utility_pro` | Raster, 2K | \$0.21 |
| `recraftv4_1_utility_pro_vector` | Vector, SVG | \$0.30 |

* **Pro** variants generate at 2K with finer detail, for print-ready and large-scale assets.
* **Utility** variants trade the main line's artistic point of view for predictability: flat lighting, front-facing composition, simple scenes. Use them for mockups and product listing photos.
* **Vector** variants return editable SVG, built for logos, typography, and illustration.

## Capabilities

| Capability | Support |
| - | - |
| [Generate image](https://www.recraft.ai/docs/api-reference/endpoints.md#generate-image) | Yes, default model |
| [Image to image](https://www.recraft.ai/docs/api-reference/tools/image-to-image.md) | Yes, default model |
| [Create style](https://www.recraft.ai/docs/api-reference/endpoints.md#create-style) | Yes |
| Vector output | Yes, `_vector` variants |
| [Styles](https://www.recraft.ai/docs/api-reference/styles.md) | Custom styles and style references |
| [Controls](https://www.recraft.ai/docs/api-reference/endpoints.md#controls) | Partial: `colors` and `background_color` |
| Negative prompt, curated styles, text layout | No, see [Recraft V3](https://www.recraft.ai/docs/api-reference/models/recraft-v3.md) |

> [!NOTE]
>
> For high-volume generation, see [Recraft V4.1 Flash](https://www.recraft.ai/docs/api-reference/models/recraft-v4-1-flash.md): about 1.3 seconds and \$0.007 per image, raster only, no styles.

## Examples

> [accordion] Vector logo
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/generations \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "prompt": "minimal fox logo, flat, two colors",
>     "model": "recraftv4_1_vector",
>     "size": "1:1"
>   }'
> ```
>
> The `url` points to an SVG file.

> [accordion] Product photo in 2K
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/generations \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "prompt": "ceramic coffee mug on a white table, soft daylight, product listing photo",
>     "model": "recraftv4_1_utility_pro",
>     "size": "4:3",
>     "image_format": "png"
>   }'
> ```

> [accordion] In brand colors
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/generations \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "prompt": "isometric illustration of a delivery van",
>     "model": "recraftv4_1",
>     "controls": {
>       "colors": [{"rgb": [255, 102, 0]}, {"rgb": [30, 30, 30]}],
>       "background_color": {"rgb": [255, 255, 255]}
>     }
>   }'
> ```

> [accordion] With a custom style
>
> A style works only with the model it was created for, so create it with `"model": "recraftv4_1"`. This creates the style (\$0.005) and generates with it:
>
> ```bash theme={null}
> STYLE_ID=$(curl -s https://external.api.recraft.ai/v1/styles \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{"model": "recraftv4_1", "image_urls": ["https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png"]}' \
>   | python3 -c 'import json, sys; print(json.load(sys.stdin)["id"])')
>
> curl https://external.api.recraft.ai/v1/images/generations \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "prompt": "a cozy reading corner",
>     "model": "recraftv4_1",
>     "style_id": "'"$STYLE_ID"'"
>   }'
> ```
>
> Reuse the same `STYLE_ID` for later requests. To skip the separate step, pass `style_reference_urls` in the generation request instead.

## Related

> [card] [All models](https://www.recraft.ai/docs/api-reference/models/overview.md)
>
> The whole lineup with prices and best-fit use cases.

> [card] [Endpoints](https://www.recraft.ai/docs/api-reference/endpoints.md)
>
> Full request reference for every operation.

> [card] [Pricing](https://www.recraft.ai/docs/api-reference/pricing.md)
>
> API unit charges across every model and operation.

> [card] [What's new in V4.1](https://www.recraft.ai/docs/recraft-models/recraft-v4-1.md)
>
> What V4.1 changed, with side-by-side comparisons.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.