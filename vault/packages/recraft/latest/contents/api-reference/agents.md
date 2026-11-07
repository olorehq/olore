> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Recraft API for AI agents

> The whole Recraft API on one page for AI agents and LLMs: rules, auth, every model id with price and parameters, every endpoint, limits, and working examples.

This page is written to be pasted into an AI agent (Claude, Cursor, ChatGPT, Copilot) as context. The Markdown version is at `https://www.recraft.ai/docs/api-reference/agents.md`. Everything needed to write working code against the Recraft API is here.

## Rules for writing code

1. Use plain HTTP: `curl`, Python `requests`, or JavaScript `fetch`. Do not use the OpenAI SDK unless asked; if you do, every non-OpenAI parameter must go in `extra_body`.
2. Read the token from the `RECRAFT_API_TOKEN` environment variable. Never hard-code it.
3. Always pass `model` explicitly. Pick it from the model table below.
4. Only send parameters the chosen model supports (see the model table). Check against the table instead of relying on the API to catch a wrong parameter.
5. On a non-2xx response, print the status code and the response body as text, then stop. Error bodies are plain text or JSON (a missing or invalid token returns `401` with `text/plain` `request unauthorized`), so never parse an error body as JSON without checking `Content-Type`. See [Errors](https://www.recraft.ai/docs/api-reference/error-handling.md).
6. Image URLs in responses are temporary (about 24 hours). Download the files if they must be kept.
7. Send JSON (`Content-Type: application/json`). Pass input images as URLs, or local files as data URLs (`data:image/png;base64,...`), so nested fields like `controls` keep working. Use `multipart/form-data` only for simple uploads with flat fields.

## Basics

* Base URL: `https://external.api.recraft.ai/v1`
* Auth header: `Authorization: Bearer $RECRAFT_API_TOKEN`
* Token: created at [https://www.recraft.ai/app/api/api-keys](https://www.recraft.ai/app/api/api-keys) (needs a positive API units balance). 1 USD = 1,000 API units.
* Rate limits: 100 images per minute and 5 requests per second per user.

## Minimal request

```bash theme={null}
curl https://external.api.recraft.ai/v1/images/generations \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "two race cars on a track", "model": "recraftv4_1"}'
```

```python theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={'prompt': 'two race cars on a track', 'model': 'recraftv4_1'},
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
image_url = response.json()['data'][0]['url']
with open('image.webp', 'wb') as f:
    f.write(requests.get(image_url).content)
```

Response of generation, image to image, remix, and the V3 edit endpoints:

```json theme={null}
{
  "created": 1759140000,
  "credits": 35,
  "data": [{"image_id": "0e6a1b8c-5b1f-4a8e-9f3a-2c7d4e8b9a10", "url": "https://..."}]
}
```

* `data`: one item per image. `url` is present with `response_format: url` (default); `b64_json` with `response_format: b64_json`.
* `credits`: API units charged.
* `style_id`: present when a style was created from attached references.
* `response_format: multipart` returns `multipart/form-data`: a `response` part with the JSON above, then one part per image, named by its `image_id` (also in the `Content-ID` header). Lowest latency.
* `image_format`: `webp` (default, lossless) or `png` for raster output. Vector output is always SVG.

## Models

`model` value, output, price per image, and what each accepts on `POST /v1/images/generations`.

| `model` | Output | Price | Prompt limit |
| - | - | - | - |
| `recraftv4_1_flash` (alias `recraftv4_1_flash_raster`) | Raster 1K | 0.007 USD | 10,000 |
| `recraftv4_1` (default) | Raster 1K | 0.035 USD | 10,000 |
| `recraftv4_1_vector` | SVG | 0.08 USD | 10,000 |
| `recraftv4_1_pro` | Raster 2K | 0.21 USD | 10,000 |
| `recraftv4_1_pro_vector` | SVG | 0.30 USD | 10,000 |
| `recraftv4_1_utility` | Raster 1K | 0.035 USD | 10,000 |
| `recraftv4_1_utility_vector` | SVG | 0.08 USD | 10,000 |
| `recraftv4_1_utility_pro` | Raster 2K | 0.21 USD | 10,000 |
| `recraftv4_1_utility_pro_vector` | SVG | 0.30 USD | 10,000 |
| `recraftv4_styles` | Raster 1K | 0.035 USD | 10,000 |
| `recraftv4_styles_vector` | SVG | 0.05 USD | 10,000 |
| `recraftv4_styles_pro` | Raster 2K | 0.10 USD | 10,000 |
| `recraftv4_styles_pro_vector` | SVG | 0.12 USD | 10,000 |
| `recraftv4` | Raster 1K | 0.04 USD | 10,000 |
| `recraftv4_vector` | SVG | 0.08 USD | 10,000 |
| `recraftv4_pro` | Raster 2K | 0.25 USD | 10,000 |
| `recraftv4_pro_vector` | SVG | 0.30 USD | 10,000 |
| `recraftv3` | Raster 1K | 0.04 USD | 1,000 |
| `recraftv3_vector` | SVG | 0.08 USD | 1,000 |
| `recraftv2` | Raster 1K | 0.022 USD | 1,000 |
| `recraftv2_vector` | SVG | 0.044 USD | 1,000 |

Every raster model also accepts a `_raster` alias that behaves the same: `recraftv2_raster`, `recraftv3_raster`, `recraftv4_raster`, `recraftv4_pro_raster`, `recraftv4_1_raster`, `recraftv4_1_pro_raster`, `recraftv4_1_utility_raster`, `recraftv4_1_utility_pro_raster`, `recraftv4_1_flash_raster`, `recraftv4_styles_raster`, `recraftv4_styles_pro_raster`. Prefer the base names.

Which to pick:

* Default, best quality: `recraftv4_1`. Print-ready 2K: `_pro`. SVG: `_vector`.
* Product shots, mockups, flat predictable images: `recraftv4_1_utility*`.
* Fastest and cheapest (about 1.3 s), raster only, no styles: `recraftv4_1_flash`.
* Must match a given visual style from reference images: `recraftv4_styles*` (a style is required).
* Curated named styles, `negative_prompt`, exact text placement, inpainting, outpainting, background operations: `recraftv3` / `recraftv3_vector`.
* Cheapest vector, icons: `recraftv2_vector`.

Parameter support by model family:

| Parameter | V4.1 Flash | V4.1, V4 | V4 Styles | V3 | V2 |
| - | - | - | - | - | - |
| `prompt`, `n`, `size`, `random_seed`, `response_format`, `image_format` | yes | yes | yes | yes | yes |
| `controls.colors`, `controls.background_color` | yes | yes | yes | yes | yes |
| `style_id`, `style_reference_urls`, `style_references` | no | yes | yes, one is required | yes | yes |
| `style_match` | no | `flexible`, `precise` | `flexible`, `precise` | `regular` | `regular` |
| `style` (curated name, e.g. `Photorealism`, `Illustration`, `Vector art`; `Icon` (V2 vector only)) | no | no | no | yes | yes |
| `negative_prompt` | no | no | no | yes | yes |
| `text_layout` | no | no | no | yes | no |
| `controls.artistic_level` (0–5), `controls.no_text` | no | no | no | yes | no |

## Generate image

`POST /v1/images/generations`. Variants that enforce the output type: `POST /v1/images/generations/raster` and `POST /v1/images/generations/vector`.

| Field | Type, default | Notes |
| - | - | - |
| `prompt` | string, required | Limit per model above. |
| `model` | string, `recraftv4_1` | Defaults to `recraftv4_styles` when style references are attached. |
| `n` | integer, `1` | 1 to 6. |
| `size` | string, auto | Prefer `w:h`: `1:1`, `2:1`, `1:2`, `3:2`, `2:3`, `4:3`, `3:4`, `5:4`, `4:5`, `6:10`, `14:10`, `10:14`, `16:9`, `9:16`. An exact `WxH` must be one of the model's sizes (table below); anything else is rejected. |
| `style_id` | UUID | A style created for the same model. Cannot be combined with style references. |
| `style_reference_urls` | array of strings | 1 to 10 image URLs or data URLs (PNG, JPG, WEBP; 64 MB total). Creates a style for this request and returns its `style_id`. Costs 0.005 USD extra. |
| `style_references` | files | Multipart counterpart of `style_reference_urls`. |
| `style_match` | string | See table above. Defaults to the style's stored value. |
| `style` | string | V2 / V3 curated style name. |
| `negative_prompt` | string | V2 / V3. |
| `text_layout` | array | V3. `[{"text": "WORD", "bbox": [[x, y], [x, y], [x, y], [x, y]]}]`, one word per item, coordinates 0 to 1 from the top-left. `text` allows uppercase Latin letters, digits, and basic punctuation only; see [Text layout](https://www.recraft.ai/docs/api-reference/endpoints.md#text-layout). |
| `controls` | object | `{"colors": [{"rgb": [255, 102, 0]}], "background_color": {"rgb": [255, 255, 255]}}`. Up to 10 colors; optional `weight` per color (0 to 1, set for all or none, sum at most 1). |
| `random_seed` | integer | Reproducibility. |
| `response_format` | string, `url` | `url`, `b64_json`, `multipart`. |
| `image_format` | string, `webp` | `webp` or `png`. |

Exact sizes by model (same order as the `w:h` list above):

| Models | Sizes |
| - | - |
| V4.1, V4.1 Utility, V4.1 Flash, V4, V4 Styles (1K) | `1024x1024`, `1536x768`, `768x1536`, `1280x832`, `832x1280`, `1216x896`, `896x1216`, `1152x896`, `896x1152`, `832x1344`, `1280x896`, `896x1280`, `1344x768`, `768x1344` |
| V4.1 Pro, V4.1 Utility Pro, V4 Pro, V4 Styles Pro (2K) | `2048x2048`, `3072x1536`, `1536x3072`, `2560x1664`, `1664x2560`, `2432x1792`, `1792x2432`, `2304x1792`, `1792x2304`, `1664x2688`, `2560x1792`, `1792x2560`, `2688x1536`, `1536x2688` |
| V3, V2 | `1024x1024`, `2048x1024`, `1024x2048`, `1536x1024`, `1024x1536`, `1365x1024`, `1024x1365`, `1280x1024`, `1024x1280`, `1024x1707`, `1434x1024`, `1024x1434`, `1820x1024`, `1024x1820` |
| All vector models | `w:h` ratios only |

## Styles

`POST /v1/styles` creates a reusable style (0.005 USD). Returns `{"id": "<style_id>", ...}`.

| Field | Type, default | Notes |
| - | - | - |
| `image_urls` | array of strings | JSON. 1 to 10 reference image URLs or data URLs. |
| `files` | files | Multipart counterpart, any field name. |
| `model` | string, `recraftv4_styles` | The model the style is for. The style only works with that model. Not `recraftv4_1_flash`. |
| `match` | string | `flexible` (default) or `precise` for V4 / V4.1; `regular` for V2 / V3. |
| `image_weights` | array of numbers | One per image. |

Two ways to apply a style: create it once and pass `style_id` (cheaper for repeated use), or attach `style_reference_urls` to each generation.

## Edit an image

All take the input as `image_url` (JSON: URL or data URL) or `image` (multipart file). Masks: `mask_url` / `mask`, grayscale, same size as the image, white = area to change, black = keep. Input limits: under 20 MB, up to 16 MP, max side 4096 px, min side 256 px. Mask pixels must be pure black (0) or pure white (255).

| Endpoint | What it does | Required fields | Useful optional fields | Models | Price |
| - | - | - | - | - | - |
| `POST /v1/images/imageToImage` | New image from an image and a prompt | `image_url`, `prompt`, `strength` (0 to 1, 1 = least similar) | `model`, `n`, `controls`; V3 only: `style`, `negative_prompt` | V3, V4, V4.1 (not Flash); default `recraftv4_1` | 0.04 USD / 0.08 USD with V3; see [Pricing](https://www.recraft.ai/docs/api-reference/pricing.md) |
| `POST /v1/images/inpaint` | Regenerate the masked area | `image_url`, `mask_url`, `prompt` | `negative_prompt`, `style`, `style_id`, `n`, `controls` | `recraftv3`, `recraftv3_vector` | 0.04 USD / 0.08 USD |
| `POST /v1/images/outpaint` | Extend beyond the borders | `image_url`, `prompt`, and at least one of: `size`, `expand_left` / `expand_right` / `expand_top` / `expand_bottom` (pixels), `zoom_out_percentage`. `size` and `expand_*` can't be combined; `zoom_out_percentage` alone works | `negative_prompt`, `style`, `n` | `recraftv3`, `recraftv3_vector` | 0.04 USD / 0.08 USD |
| `POST /v1/images/replaceBackground` | New background from a prompt | `image_url`, `prompt` | `negative_prompt`, `style`, `n` | `recraftv3`, `recraftv3_vector` | 0.04 USD / 0.08 USD |
| `POST /v1/images/generateBackground` | Generate the masked background | `image_url`, `mask_url`, `prompt` | `negative_prompt`, `style`, `n` | `recraftv3`, `recraftv3_vector` | 0.04 USD / 0.08 USD |
| `POST /v1/images/eraseRegion` | Remove the masked objects. Returns `image`, not `data` (see Process an image) | `image_url`, `mask_url` | none | none | 0.002 USD |
| `POST /v1/images/variateImage` | Remix: variations without a prompt | `image_url`, `size` | `model`, `n`, `random_seed` | optional `model` | 0.04 USD |

All accept `response_format` and `image_format`. To avoid unwanted content ("no people, no text") with V2 / V3 models, use `negative_prompt`, not `controls`.

## Process an image

Input as `image_url` (JSON) or `file` (multipart). No `model` field. Min side 256 px (32 px for crisp upscale).

These endpoints, and erase region, return a single `image` instead of a `data` array:

```json theme={null}
{"created": 1759140000, "credits": 10, "image": {"image_id": "0e6a1b8c-5b1f-4a8e-9f3a-2c7d4e8b9a10", "url": "https://..."}}
```

Read `response.json()['image']['url']`, not `['data'][0]`.

| Endpoint | What it does | Optional fields | Price |
| - | - | - | - |
| `POST /v1/images/vectorize` | Raster to SVG | `shape_stacking`: `hierarchical` (default) or `cut_out` | 0.01 USD |
| `POST /v1/images/removeBackground` | Transparent cutout; SVG in, SVG out | `image_format` | 0.01 USD |
| `POST /v1/images/crispUpscale` | Higher resolution, same content | `image_format` | 0.004 USD |
| `POST /v1/images/creativeUpscale` | Higher resolution with regenerated detail and faces | `image_format` | 0.25 USD |
| `POST /v1/images/enhance` | Re-render with V4.1 Pro, sharper textures | `refinement`: `moderate` (default) or `subtle` | 0.21 USD |

## Other endpoints

* `POST /v1/prompts/enhance` with `{"prompt": "..."}` (up to 2,000 characters) returns `{"enhanced_prompt": "..."}`. 0.01 USD.
* `GET /v1/users/me` returns `{"id", "email", "name", "credits"}`: the remaining API units balance.

## Examples

Vector logo in brand colors:

```bash theme={null}
curl https://external.api.recraft.ai/v1/images/generations \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "minimal fox logo, flat",
    "model": "recraftv4_1_vector",
    "size": "1:1",
    "controls": {"colors": [{"rgb": [255, 102, 0]}, {"rgb": [30, 30, 30]}]}
  }'
```

Generate in a style from reference images, then reuse it:

```python theme={null}
import os

import requests

API = 'https://external.api.recraft.ai/v1'
HEADERS = {'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"}

response = requests.post(f'{API}/images/generations', headers=HEADERS, json={
    'prompt': 'a cyclist riding through a city park',
    'model': 'recraftv4_styles',
    'style_reference_urls': [
        'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
    ],
})
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
result = response.json()
style_id = result['style_id']

response = requests.post(f'{API}/images/generations', headers=HEADERS, json={
    'prompt': 'a picnic by the lake',
    'model': 'recraftv4_styles',
    'style_id': style_id,
    'n': 4,
})
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
for image in response.json()['data']:
    print(image['url'])
```

Inpaint local files, sent as data URLs:

```python theme={null}
import base64
import os

import requests


def data_url(path):
    with open(path, 'rb') as f:
        return 'data:image/png;base64,' + base64.b64encode(f.read()).decode()


response = requests.post(
    'https://external.api.recraft.ai/v1/images/inpaint',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'image_url': data_url('room.png'),
        'mask_url': data_url('mask.png'),
        'prompt': 'a green velvet armchair',
        'negative_prompt': 'people, text',
        'model': 'recraftv3',
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

Lowest latency: image bytes in the response (`response_format: multipart`):

```python theme={null}
# pip install requests requests-toolbelt
import json
import os

import requests
from requests_toolbelt.multipart.decoder import MultipartDecoder

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'prompt': 'neon street at night, rain',
        'model': 'recraftv4_1_flash',
        'n': 2,
        'image_format': 'png',
        'response_format': 'multipart',
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')

result, images = None, {}
for part in MultipartDecoder.from_response(response).parts:
    image_id = part.headers.get(b'Content-ID')
    if image_id is None:
        result = json.loads(part.content)
    else:
        images[image_id.decode().strip('<>')] = part.content

for image in result['data']:
    with open(f"{image['image_id']}.png", 'wb') as f:
        f.write(images[image['image_id']])
```

## Other ways in

* One model or tool: add `.md` to its docs URL, for example `https://www.recraft.ai/docs/api-reference/models/recraft-v4-1.md` or `https://www.recraft.ai/docs/api-reference/tools/vectorize.md`.
* OpenAPI description: `https://www.recraft.ai/docs/api-reference/openapi.json`.
* Recraft MCP server (`https://mcp.recraft.ai/mcp`) lets an assistant call Recraft as a tool. It bills the subscription credits of the user's Recraft plan, not API units.

Full human-readable docs: [https://www.recraft.ai/docs/api-reference/introduction](https://www.recraft.ai/docs/api-reference/introduction.md). Index of all pages: [https://www.recraft.ai/docs/llms.txt](https://www.recraft.ai/docs/llms.txt).


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.