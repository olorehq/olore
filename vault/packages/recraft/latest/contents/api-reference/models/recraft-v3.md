> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Recraft V3

> Recraft V3 raster and SVG models: curated styles, text placement, negative prompts, and the only line that supports inpainting, outpainting, and background operations.

Recraft V3, released in October 2024, is a previous-generation model known for photorealism and text rendering. In the API it has the widest operation support: inpainting, outpainting, and the background operations run on V3 only, and it is the only line that places text at exact positions.

> [card] \$0.04
>
> per image, raster

> [card] 1K
>
> WebP, PNG, or SVG

> [card] 1,000
>
> characters of prompt

> [card] recraftv3
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
    "prompt": "two race cars on a track",
    "model": "recraftv3",
    "style": "Photorealism"
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
        'model': 'recraftv3',
        'style': 'Photorealism',
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
    model='recraftv3',
    extra_body={'style': 'Photorealism'},
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
    model: 'recraftv3',
    style: 'Photorealism',
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
  "credits": 40,
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
| `prompt` | string, **required** | What to generate. Up to 1,000 characters. |
| `model` | string | `recraftv3` or `recraftv3_vector`. Without it the API uses `recraftv4_1`, unless `style` names a V3 style. |
| `style` | string, `Recraft V3 Raw` | A [curated style](https://www.recraft.ai/docs/api-reference/styles.md#list-of-curated-styles), e.g. `Photorealism`, `Illustration`, `Vector art`. Default for `recraftv3_vector` is `Vector art`. |
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
> | `style_match` | string | Only `regular` for V3. |
> | `text_layout` | array of objects | Words and their positions in the image. See [Text layout](https://www.recraft.ai/docs/api-reference/endpoints.md#text-layout). |
> | `random_seed` | integer | Seed for reproducible results. |
> | `controls.colors` | array of colors | Preferred colors, e.g. `[{"rgb": [255, 102, 0]}]`. See [Colors](https://www.recraft.ai/docs/api-reference/endpoints.md#colors). |
> | `controls.background_color` | color | Desired background color, e.g. `{"rgb": [255, 255, 255]}`. |
> | `controls.artistic_level` | integer | 0 (static, clean) to 5 (dynamic, eccentric). |
> | `controls.no_text` | boolean | Do not add text to the image. |

## Variants

| `model` | Output | Price per image |
| - | - | - |
| `recraftv3` | Raster, 1K | \$0.04 |
| `recraftv3_vector` | Vector, SVG | \$0.08 |

## Capabilities

| Capability | Endpoint | Price (raster / vector) |
| - | - | - |
| [Generate image](https://www.recraft.ai/docs/api-reference/endpoints.md#generate-image) | `/v1/images/generations` | \$0.04 / \$0.08 |
| [Image to image](https://www.recraft.ai/docs/api-reference/tools/image-to-image.md) | `/v1/images/imageToImage` | \$0.04 / \$0.08 |
| [Image inpainting](https://www.recraft.ai/docs/api-reference/tools/inpainting.md) | `/v1/images/inpaint` | \$0.04 / \$0.08 |
| [Image outpainting](https://www.recraft.ai/docs/api-reference/tools/outpainting.md) | `/v1/images/outpaint` | \$0.04 / \$0.08 |
| [Replace background](https://www.recraft.ai/docs/api-reference/tools/background.md) | `/v1/images/replaceBackground` | \$0.04 / \$0.08 |
| [Generate background](https://www.recraft.ai/docs/api-reference/tools/background.md#generate-background) | `/v1/images/generateBackground` | \$0.04 / \$0.08 |
| [Create style](https://www.recraft.ai/docs/api-reference/endpoints.md#create-style) | `/v1/styles` | \$0.005 per request |

Also supported: curated and custom [styles](https://www.recraft.ai/docs/api-reference/styles.md), `negative_prompt`, [text layout](https://www.recraft.ai/docs/api-reference/endpoints.md#text-layout), and the full set of [controls](https://www.recraft.ai/docs/api-reference/endpoints.md#controls).

## Examples

> [accordion] Vector art with a negative prompt
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/generations \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "prompt": "mountain landscape badge",
>     "model": "recraftv3_vector",
>     "style": "Vector art",
>     "negative_prompt": "text, letters"
>   }'
> ```

> [accordion] Text at exact positions
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/generations \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "prompt": "cute red panda with a sign",
>     "model": "recraftv3",
>     "style": "Illustration",
>     "text_layout": [
>       {"text": "RECRAFT", "bbox": [[0.3, 0.45], [0.6, 0.45], [0.6, 0.55], [0.3, 0.55]]},
>       {"text": "AI", "bbox": [[0.62, 0.45], [0.70, 0.45], [0.70, 0.55], [0.62, 0.55]]}
>     ]
>   }'
> ```
>
> Each `bbox` is four `[x, y]` points relative to the image, from `(0, 0)` top-left to `(1, 1)` bottom-right.

> [accordion] Inpainting
>
> Regenerate the white area of `mask.png` in `image.png`:
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/inpaint \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -F "prompt=a vase with sunflowers" \
>   -F "model=recraftv3" \
>   -F "image=@image.png" \
>   -F "mask=@mask.png"
> ```
>
> See [Image inpainting](https://www.recraft.ai/docs/api-reference/tools/inpainting.md) for mask requirements.

## Related

> [card] [Curated styles](https://www.recraft.ai/docs/api-reference/styles.md#list-of-curated-styles)
>
> The full list of V3 and V3 Vector styles.

> [card] [Endpoints](https://www.recraft.ai/docs/api-reference/endpoints.md)
>
> Full request reference for generation and every editing operation.

> [card] [All models](https://www.recraft.ai/docs/api-reference/models/overview.md)
>
> The whole lineup with prices and best-fit use cases.

> [card] [About Recraft V3](https://www.recraft.ai/docs/recraft-models/recraft-V3.md)
>
> The model's background and strengths in detail.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.