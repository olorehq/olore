> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Recraft V4 Styles

> Style-consistent generation: define a style from 1 to 10 reference images and every image holds to it. No training step, from $0.035 per image.

Recraft V4 Styles, released in August 2026, is a dedicated model line for style-consistent generation. You define a style from one to ten reference images, and every generation holds to its rendering technique, color, texture, and composition. There is no training step: references can come from anywhere, and you generate immediately.

> [!NOTE]
>
> V4 Styles models **always** require a style: pass `style_reference_urls` (or uploaded `style_references`) or a `style_id`. A request with neither is rejected.

> [card] \$0.035
>
> per image, plus \$0.005 per new style

> [card] 1K / 2K
>
> WebP, PNG, or SVG

> [card] 1 to 10
>
> reference images

> [card] recraftv4\_styles
>
> `model` value

## Try it

Create a token in [API tokens](https://www.recraft.ai/app/api/api-keys) (it needs a positive API units balance) and set it once per terminal session:

```bash theme={null}
export RECRAFT_API_TOKEN=your_token
```

Then run. The request uses a public sample illustration as the style reference:

```bash cURL theme={null}
curl https://external.api.recraft.ai/v1/images/generations \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "a cyclist riding through a city park",
    "model": "recraftv4_styles",
    "style_reference_urls": [
      "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png"
    ]
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
        'prompt': 'a cyclist riding through a city park',
        'model': 'recraftv4_styles',
        'style_reference_urls': [
            'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
        ],
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
result = response.json()
print(result['data'][0]['url'])
print(result['style_id'])  # reuse it in later requests
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
    prompt='a cyclist riding through a city park',
    model='recraftv4_styles',
    extra_body={
        'style_reference_urls': [
            'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
        ],
    },
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
    prompt: 'a cyclist riding through a city park',
    model: 'recraftv4_styles',
    style_reference_urls: [
      'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
    ],
  }),
});
if (!response.ok) throw new Error(await response.text());
const result = await response.json();
console.log(result.data[0].url);
console.log(result.style_id); // reuse it in later requests
```

## Response

```json theme={null}
{
  "created": 1759140000,
  "credits": 40,
  "style_id": "229b2a75-05e4-4580-85f9-b47ee521a00d",
  "data": [
    {
      "image_id": "0e6a1b8c-5b1f-4a8e-9f3a-2c7d4e8b9a10",
      "url": "https://..."
    }
  ]
}
```

* `style_id` is the style created from your references. Pass it instead of the references in later requests to skip the style creation charge.
* `credits` is the total charged: here 35 for the image plus 5 for creating the style.
* `data` has one entry per image (`n`). Download each image from its `url`.
* Image URLs are temporary: files are kept for about 24 hours, so download them. See [Limits and sizes](https://www.recraft.ai/docs/api-reference/appendix.md#image-storage).

## Parameters

| Parameter | Type, default | Description |
| - | - | - |
| `prompt` | string, **required** | What to generate. Up to 10,000 characters. |
| `model` | string | `recraftv4_styles` or another of the [variants](#variants) below. Defaults to `recraftv4_styles` when style references are attached. |
| `style_reference_urls` | array of strings | 1 to 10 URLs or data URLs of reference images (PNG, JPG, WEBP). Use this **or** `style_id`. |
| `style_id` | UUID | A style from a previous response or from [Create style](https://www.recraft.ai/docs/api-reference/endpoints.md#create-style). |
| `style_match` | string, `flexible` | `flexible` matches the general vibe, `precise` follows the style meticulously. |
| `size` | string, auto | Aspect ratio (`1:1`, `16:9`, `3:4`, ...) or exact size (`1024x1024`). See [supported sizes](https://www.recraft.ai/docs/api-reference/appendix.md#image-sizes). |
| `n` | integer, `1` | Number of images, 1 to 6. |
| `response_format` | string, `url` | `url`, `b64_json`, or `multipart`. |
| `image_format` | string, `webp` | `webp` (lossless) or `png`. Ignored for vector output, which is always SVG. |

> [accordion] More parameters
>
> | Parameter | Type, default | Description |
> | - | - | - |
> | `style_references` | files | **Multipart only.** Upload local reference images instead of passing URLs. |
> | `random_seed` | integer | Seed for reproducible results. |
> | `controls.colors` | array of colors | Preferred colors, e.g. `[{"rgb": [255, 102, 0]}]`. See [Colors](https://www.recraft.ai/docs/api-reference/endpoints.md#colors). |
> | `controls.background_color` | color | Desired background color, e.g. `{"rgb": [255, 255, 255]}`. |
>
> Not supported: `negative_prompt`, `style` (curated styles), `text_layout`.

## Variants

| `model` | Output | Price per image |
| - | - | - |
| `recraftv4_styles` | Raster, 1K | \$0.035 |
| `recraftv4_styles_vector` | Vector, SVG | \$0.05 |
| `recraftv4_styles_pro` | Raster, 2K | \$0.10 |
| `recraftv4_styles_pro_vector` | Vector, SVG | \$0.12 |

A style applies the same way on every variant. Creating a style costs \$0.005 once, on top of the per-image price.

## Capabilities

| Capability | Support |
| - | - |
| [Generate image](https://www.recraft.ai/docs/api-reference/endpoints.md#generate-image) | Yes, a style is always required |
| [Create style](https://www.recraft.ai/docs/api-reference/endpoints.md#create-style) | Yes, default model of `/v1/styles` |
| Vector output | Yes, `_vector` variants |
| [Style match](https://www.recraft.ai/docs/api-reference/styles.md#style-match) | `flexible` (default) and `precise` |
| [Controls](https://www.recraft.ai/docs/api-reference/endpoints.md#controls) | Partial: `colors` and `background_color` |
| Image to image, inpainting | No |

## Examples

> [accordion] Create a style once, reuse it for a set
>
> Use this flow when the same style serves many requests, as in brand and campaign work.
>
> **1. Create the style** (\$0.005):
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/styles \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "model": "recraftv4_styles",
>     "image_urls": [
>       "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png"
>     ]
>   }'
> ```
>
> ```json theme={null}
> {
>   "id": "229b2a75-05e4-4580-85f9-b47ee521a00d",
>   "style": "any",
>   "creation_time": "2026-08-20T00:00:00Z",
>   "is_private": true,
>   "credits": 5
> }
> ```
>
> **2. Generate with the `id`** as `style_id`, as many times as you need:
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/generations \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "prompt": "a picnic by the lake",
>     "model": "recraftv4_styles",
>     "style_id": "229b2a75-05e4-4580-85f9-b47ee521a00d",
>     "n": 4
>   }'
> ```
>
> Replace the `style_id` with the `id` you received.

> [accordion] Upload local reference files
>
> ```bash cURL theme={null}
> curl https://external.api.recraft.ai/v1/images/generations \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -F "prompt=product hero shot, bottle on a table" \
>   -F "model=recraftv4_styles" \
>   -F "style_references=@reference-1.png" \
>   -F "style_references=@reference-2.png"
> ```
>
> ```python Python theme={null}
> import os
>
> import requests
>
> with open('reference-1.png', 'rb') as ref1, open('reference-2.png', 'rb') as ref2:
>     response = requests.post(
>         'https://external.api.recraft.ai/v1/images/generations',
>         headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
>         data={'prompt': 'product hero shot, bottle on a table', 'model': 'recraftv4_styles'},
>         files=[('style_references', ref1), ('style_references', ref2)],
>     )
> if not response.ok:
>     raise SystemExit(f'{response.status_code}: {response.text}')
> print(response.json()['data'][0]['url'])
> ```

> [accordion] Precise style match
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/generations \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "prompt": "a cyclist riding through a city park",
>     "model": "recraftv4_styles",
>     "style_match": "precise",
>     "style_reference_urls": [
>       "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png"
>     ]
>   }'
> ```
>
> Run it again with `"style_match": "flexible"` to compare.

> [accordion] SVG logo in a style
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/generations \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "prompt": "coffee shop logo, cup with steam",
>     "model": "recraftv4_styles_pro_vector",
>     "style_reference_urls": [
>       "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png"
>     ]
>   }'
> ```

## Working with styles

### Reference images

| Constraint | Value |
| - | - |
| Formats | PNG, JPG, WEBP |
| Count | 1 to 10 |
| Total size | 64 MB across all images, and under 20 MB per file |
| Transport | `style_reference_urls` (JSON) or `style_references` (multipart) on generation; `image_urls` (JSON) or `files` (multipart) on [Create style](https://www.recraft.ai/docs/api-reference/endpoints.md#create-style) |

A single reference is enough. Similar references sharpen the match, varied references widen the range. References don't have to come from Recraft: other generators, branding materials, and existing assets all work. Create style also accepts `image_weights`, one per image, to bias the style toward specific references.

### Style match

Every style stores a match value, set with `match` at style creation:

* **`flexible`** (default) matches the general vibe and gives the model slightly more liberty.
* **`precise`** follows the style meticulously: rendering technique, color, composition, and lighting.

`style_match` in a generation request overrides the stored value for that request. See [Style match](https://www.recraft.ai/docs/api-reference/styles.md#style-match).

### Billing

Generation and style creation are billed separately. Attaching references to a generation creates a style and charges \$0.005 on top of the image price; the response `credits` is the sum. Reusing the returned `style_id` costs generation only.

A style created once, then a 10-image set:

| | Standard | Pro |
| - | - | - |
| Style creation | \$0.005 | \$0.005 |
| 10 raster images | \$0.35 | \$1.00 |
| **Total** | **\$0.355** | **\$1.005** |

### Styles on other V4 models

Every V4 and V4.1 model (except V4.1 Flash) also accepts `style_id` or style references, at that model's own price. A style must be used with a matching model: the `model` it was created with (Create style defaults to `recraftv4_styles`). V4 Styles is purpose-built for style consistency and always requires a style; the other models treat a style as optional.

### Errors

| Condition | Result |
| - | - |
| V4 Styles model with no `style_id` and no references | Rejected |
| `style_id` and style references in the same request | Rejected |
| More than 10 reference images, or over 64 MB total | Rejected |
| Reference in a format other than PNG, JPG, WEBP | Rejected |
| Style references with no `model` | Accepted, uses `recraftv4_styles` |

## Related

> [card] [Styles](https://www.recraft.ai/docs/api-reference/styles.md)
>
> How styles work across models: custom styles and style match.

> [card] [Style creation guide](https://www.recraft.ai/docs/v4-styles-creation-guide.md)
>
> How to pick references that produce a strong style.

> [card] [All models](https://www.recraft.ai/docs/api-reference/models/overview.md)
>
> The whole lineup with prices and best-fit use cases.

> [card] [Endpoints](https://www.recraft.ai/docs/api-reference/endpoints.md)
>
> Full request reference for generate image and create style.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.