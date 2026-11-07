> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Endpoints

> Every Recraft API endpoint with its price and docs page, plus the full reference for image generation, styles, controls, and text layout.

Every Recraft API endpoint at a glance, plus the full reference for image generation, styles, and the shared `controls` and `text_layout` objects. Each tool has its own page with a runnable request.

## Authentication

All requests need an `Authorization: Bearer RECRAFT_API_TOKEN` header. See the [Quickstart](https://www.recraft.ai/docs/api-reference/getting-started.md) to get a token.

Python examples on this page come in two variants: plain HTTP with `requests`, and the OpenAI Python library (see [Clients and SDKs](https://www.recraft.ai/docs/api-reference/clients.md#openai-python-library) for how it maps to the Recraft API).

## All endpoints

Base URL: `https://external.api.recraft.ai/v1`. Every endpoint takes JSON (images as URLs or data URLs) or `multipart/form-data` (images as files).

| Endpoint | Request | Price | Docs |
| - | - | - | - |
| Generate image | `POST /images/generations` | per model | [below](#generate-image), [models](https://www.recraft.ai/docs/api-reference/models/overview.md) |
| Create style | `POST /styles` | \$0.005 | [below](#create-style) |
| List, get, or delete styles | `GET /styles`, `GET /styles/{style_id}`, `DELETE /styles/{style_id}`, `GET /styles/basic` | — | [below](#manage-styles) |
| Image to image | `POST /images/imageToImage` | per model | [Image to image](https://www.recraft.ai/docs/api-reference/tools/image-to-image.md) |
| Inpainting | `POST /images/inpaint` | \$0.04 / \$0.08 | [Inpainting](https://www.recraft.ai/docs/api-reference/tools/inpainting.md) |
| Outpainting | `POST /images/outpaint` | \$0.04 / \$0.08 | [Outpainting](https://www.recraft.ai/docs/api-reference/tools/outpainting.md) |
| Replace background | `POST /images/replaceBackground` | \$0.04 / \$0.08 | [Background](https://www.recraft.ai/docs/api-reference/tools/background.md) |
| Generate background | `POST /images/generateBackground` | \$0.04 / \$0.08 | [Background](https://www.recraft.ai/docs/api-reference/tools/background.md) |
| Vectorize | `POST /images/vectorize` | \$0.01 | [Vectorize](https://www.recraft.ai/docs/api-reference/tools/vectorize.md) |
| Remove background | `POST /images/removeBackground` | \$0.01 | [Remove background](https://www.recraft.ai/docs/api-reference/tools/remove-background.md) |
| Erase region | `POST /images/eraseRegion` | \$0.002 | [Erase region](https://www.recraft.ai/docs/api-reference/tools/erase-region.md) |
| Crisp upscale | `POST /images/crispUpscale` | \$0.004 | [Upscale](https://www.recraft.ai/docs/api-reference/tools/upscale.md) |
| Creative upscale | `POST /images/creativeUpscale` | \$0.25 | [Upscale](https://www.recraft.ai/docs/api-reference/tools/upscale.md) |
| Enhance details | `POST /images/enhance` | \$0.21 | [Enhance details](https://www.recraft.ai/docs/api-reference/tools/enhance-details.md) |
| Remix image | `POST /images/variateImage` | \$0.04 | [Remix](https://www.recraft.ai/docs/api-reference/tools/remix.md) |
| Enhance prompt | `POST /prompts/enhance` | \$0.01 | [Enhance prompt](https://www.recraft.ai/docs/api-reference/tools/enhance-prompt.md) |
| User information | `GET /users/me` | — | [below](#get-user-information) |

Raster / vector prices are for `recraftv3` / `recraftv3_vector`. See [Pricing](https://www.recraft.ai/docs/api-reference/pricing.md) for every model.

## Image inputs and results

The API accepts input images and returns generated images in several formats, so you can pick the one that fits your client best:

* **Inputs** — send an image or a mask as a multipart file (`image`, `mask`, `file`, ...), or reference it in a JSON body by URL or data URL in the matching `*_url` field.
* **Results** — choose how generated images come back with `response_format`: a download `url` (default), Base64 in `b64_json`, or raw bytes in a `multipart` response.
* **Image format** — raster images come back as lossless WebP by default, pass `image_format: png` to get PNG instead.

Both are described in detail in [Image inputs and results](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md).

> [!NOTE]
>
> For the best latency use `response_format: multipart`.

## Generate image

Creates an image given a prompt.

```javascript theme={null}
POST https://external.api.recraft.ai/v1/images/generations
```

In addition to the general endpoint above, two specialized variants accept the same request body but constrain the allowed `model` and `style` values to a single output type:

```javascript theme={null}
POST https://external.api.recraft.ai/v1/images/generations/raster
POST https://external.api.recraft.ai/v1/images/generations/vector
```

* **`/generations/raster`** — only raster models (any model from the list above whose name does **not** end in `_vector`) and raster styles are accepted. Requests using a vector model or vector style are rejected.
* **`/generations/vector`** — only vector models (any model from the list above whose name ends in `_vector`) and vector styles are accepted. Requests using a raster model or raster style are rejected.

Use these variants when you want the server to enforce the output type — for example, in an agent or workflow that must produce only raster (or only vector) images. The base `/generations` endpoint remains available and accepts any supported model or style.

### Example

```python Python theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'prompt': 'race car on a track',
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
    prompt='race car on a track',
)
print(response.data[0].url)
```

```bash cURL theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/generations \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "race car on a track"
  }'
```

### Parameters

| Parameter | Type | Description | Compatibility |
| - | - | - | - |
| prompt (required) | string | A text description of the desired image(s). | Maximum prompt length depends on model, refer to [Appendix](https://www.recraft.ai/docs/api-reference/appendix.md#prompt-length) |
| n | integer or null, default is 1 | The number of images to generate, must be between 1 and 6. | All models |
| model | string or null, default is `recraftv4_1` | The model to use for image generation. When [style references](#style-references) are attached, defaults to `recraftv4_styles`. | See [All models](https://www.recraft.ai/docs/api-reference/models/overview.md) for every `model` value. |
| size | string or null | The size of the generated images in `WxH` or `w:h` format. If not specified, the size is auto-selected based on the prompt. | Depends on model, supported values are published in [Appendix](https://www.recraft.ai/docs/api-reference/appendix.md#image-sizes) |
| style | string or null | The style of the generated images, refer to [Styles](https://www.recraft.ai/docs/api-reference/styles.md). | All models except V4.1 Flash |
| style\_id | UUID or null | Use a style as visual reference, refer to [Styles](https://www.recraft.ai/docs/api-reference/styles.md). | All models except V4.1 Flash |
| style\_match | string or null | Controls how closely the generated images match the referenced style, refer to [Styles](https://www.recraft.ai/docs/api-reference/styles.md#style-match). Must be one of `regular`, `precise`, `flexible`. When omitted, the style's stored value (or the model default) is used. A value not supported by the resolved model is rejected. | `regular` — V2 / V3 models; `flexible`, `precise` — V4 / V4.1 models (except V4.1 Flash) |
| style\_references | files | **(multipart only)** Style reference images. See [Style references](#style-references). | All models except V4.1 Flash |
| style\_reference\_urls | array of strings or null | **(JSON only)** URLs or data URLs of the style reference images, the JSON-body counterpart of `style_references`. See [Style references](#style-references). | All models except V4.1 Flash |
| negative\_prompt | string or null | A text description of undesired elements on an image. | V2 / V3 models |
| random\_seed | integer or null | Seed for reproducible generation. | All models |
| response\_format | string or null, default is `url` | The format in which the generated images are returned. Must be one of `url`, `b64_json` or `multipart`, see [Image results](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-results). | All models |
| image\_format | string or null, default is `webp` | The file format of the returned raster images. Must be one of `webp` or `png`, see [Image format](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-format). | All models |
| text\_layout | Array of objects or null | Refer to [Text Layout](#text-layout). | V3 models only |
| controls | object or null | A set of custom parameters to tweak generation process, refer to [Controls](#controls). | All models, partially supported for V4 / V4.1 |

***Note***: when using the V4 Styles models, a style must be specified — either via `style_id`, or via [style references](#style-references). A request without one is rejected.

***Note***: the V4.1 Flash model (`recraftv4_1_flash`) does not support styles: `style`, `style_id`, `style_match`, and [style references](#style-references) are not supported with it.

### Style references

Instead of referencing an existing style by `style_id`, you can attach style reference images directly to a generation request. When present, the server creates a private style from these images and applies it to the generation. The resolved style's id is returned as `style_id` in the response, so you can reuse it in later requests.

* Provide the images as `style_references` (multipart file parts, any field name) or as `style_reference_urls` (URLs or data URLs, JSON only).
* Images must be in PNG, JPG, or WEBP format. The maximum number of images is 10, and their total size is limited to 64 MB (each file must also be under the 20 MB upload limit).
* V2, V3, V4 and V4.1 models (including the dedicated V4 Styles model, but not V4.1 Flash) support style references; when no `model` is specified the request defaults to `recraftv4_styles`. Combining style references with `style_id` is rejected.
* Billing is composite: creating the style is charged once, in addition to the per-image generation cost. The response `credits` field is the sum of both.

#### Example

```python Python (Multipart) theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    data={
        'prompt': 'race car on a track',
        'model': 'recraftv4_styles',
    },
    files={'style_references': open('reference.png', 'rb')},
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
print(response.json()['style_id'])
```

```python Python (JSON) theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'prompt': 'race car on a track',
        'model': 'recraftv4_styles',
        'style_reference_urls': ['https://example.com/reference.png'],
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
print(response.json()['style_id'])
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
    prompt='race car on a track',
    model='recraftv4_styles',
    extra_body={'style_reference_urls': ['https://example.com/reference.png']},
)
print(response.data[0].url)
print(response.style_id)
```

```bash cURL (Multipart) theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/generations \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -F "prompt=race car on a track" \
  -F "model=recraftv4_styles" \
  -F "style_references=@reference.png"
```

```bash cURL (JSON) theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/generations \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "race car on a track",
    "model": "recraftv4_styles",
    "style_reference_urls": ["https://example.com/reference.png"]
  }'
```

## Create style

Upload a set of images to create a style reference.

```javascript theme={null}
POST https://external.api.recraft.ai/v1/styles
```

### Example

```python Python (Multipart) theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/styles',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    data={
        'model': 'recraftv4_styles',
    },
    files={'file1': open('image.png', 'rb')},
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['id'])
```

```python Python (JSON) theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/styles',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'model': 'recraftv4_styles',
        'image_urls': ['https://example.com/image.png'],
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['id'])
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
    path='/styles',
    cast_to=object,
    body={
        'model': 'recraftv4_styles',
        'image_urls': ['https://example.com/image.png'],
    },
)
print(response['id'])
```

```bash cURL (Multipart) theme={null}
curl -X POST https://external.api.recraft.ai/v1/styles \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -F "model=recraftv4_styles" \
  -F "file1=@image.png"
```

```bash cURL (JSON) theme={null}
curl -X POST https://external.api.recraft.ai/v1/styles \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "recraftv4_styles",
    "image_urls": ["https://example.com/image.png"]
  }'
```

**Response**

```javascript theme={null}
{
    "id": "229b2a75-05e4-4580-85f9-b47ee521a00d",
    "style": "any",
    "creation_time": "2024-01-01T00:00:00Z",
    "is_private": true,
    "credits": 5
}
```

### Parameters

Upload a set of images to create a style reference.

| Parameter | Type | Description | Compatibility |
| - | - | - | - |
| files | files | **(multipart only)** Images in PNG, JPG, or WEBP format for use as style references, sent as multipart file parts (any field name). The max number of images is 10. Total size of all images is limited to 64 MB (each file must also be under the 20 MB upload limit). | All models |
| image\_urls | array of strings | **(JSON only)** URLs or data URLs of the reference images, the JSON-body counterpart of `files`. Same image format, count, and size limits apply. | All models |
| model | string or null, default is `recraftv4_styles` | The transform model the style is created for. | All models except V4.1 Flash |
| match | string or null | How closely images generated with this style should match it, refer to [Styles](https://www.recraft.ai/docs/api-reference/styles.md#style-match); the value is stored on the style and used at generation time. When omitted, defaults to `regular` for V2 / V3 models and to `flexible` for V4 / V4.1 models. | `regular` — V2 / V3 models; `flexible` (default), `precise` — V4 / V4.1 models |
| image\_weights | array of numbers or null | Per-image weights; the number of weights must match the number of uploaded images. | All models |
| source\_styles | array of UUIDs or null | Existing style IDs to mix into the new style. May be used instead of, or together with, uploaded images. All source styles must be created with the same model. | V2 / V3 models |
| source\_style\_weights | array of numbers or null | Per-source-style weights; the number of weights must match the number of `source_styles`. | V2 / V3 models |
| prompt | string or null | Optional text prompt associated with the style. | Maximum prompt length depends on model, refer to [Appendix](https://www.recraft.ai/docs/api-reference/appendix.md#prompt-length) |
| palette | object or null | The color palette associated with the style, applied to images generated with it: an array of preferable `colors` and an optional `background_color`, refer to [Colors](#colors). | All models |
| style | string or null | The base style of the generated images. When omitted, defaults to `vector_illustration` for vector models, `realistic_image` for V2 / V3 raster models, and `any` for V4 / V4.1 raster models. | `vector_illustration` — All models; `any` — V4 / V4.1 models; `realistic_image`, `digital_illustration` — V2 / V3 models; `icon` — V2 models only |
| mix\_policy | string or null | How sources are mixed when combining images/source styles. Must be one of `PaletteMatch`, `MaxWeight`. | V2 / V3 models |

***Note***: at least one of `files`, `image_urls`, or `source_styles` must be provided.

## Manage styles

Four endpoints manage the custom styles of your account.

| Request | Returns |
| - | - |
| `GET /v1/styles` | `{"styles": [...]}`: the styles you created. Each has `id`, `style` (base style, for example `any` or `vector_illustration`), `creation_time`, and `is_private`. |
| `GET /v1/styles/{style_id}` | One style with the same fields. |
| `DELETE /v1/styles/{style_id}` | Deletes the style. |
| `GET /v1/styles/basic` | `{"styles": [...]}`: basic styles, each with `style_id`, `style`, and the `model` it works with. |

### Example

```bash cURL theme={null}
# List your styles
curl https://external.api.recraft.ai/v1/styles \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN"

# Delete one
curl -X DELETE https://external.api.recraft.ai/v1/styles/229b2a75-05e4-4580-85f9-b47ee521a00d \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN"
```

```python Python theme={null}
import os

import requests

API = 'https://external.api.recraft.ai/v1'
HEADERS = {'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"}

response = requests.get(f'{API}/styles', headers=HEADERS)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
for style in response.json()['styles']:
    print(style['id'], style['style'], style['creation_time'])
```

## Get user information

Returns information of the current user including credits balance.

```javascript theme={null}
GET https://external.api.recraft.ai/v1/users/me
```

### Example

```python Python theme={null}
import os

import requests

response = requests.get(
    'https://external.api.recraft.ai/v1/users/me',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json())
```

```python Python (OpenAI SDK) theme={null}
# pip install openai
import os

from openai import OpenAI

client = OpenAI(
    base_url='https://external.api.recraft.ai/v1',
    api_key=os.environ['RECRAFT_API_TOKEN'],
)

response = client.get(path='/users/me', cast_to=object)
print(response)
```

```bash cURL theme={null}
curl https://external.api.recraft.ai/v1/users/me \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN"
```

**Response**

```javascript theme={null}
{
    "credits": 1000,
    "email": "test@example.com",
    "id": "c18a1988-45e7-4c00-82c4-4ad7d3dbce3a",
    "name": "Recraft Test"
}
```

## Auxiliary

### Controls

The generation process can be adjusted with a number of tweaks.

| Parameter | Type | Description | Compatibility |
| - | - | - | - |
| colors | array of color definitions | An array of preferable colors. | All models |
| background\_color | color definition | Use the given color as a desired background color. | All models |
| artistic\_level | integer or null | Defines the artistic tone of your image. At a simple level, the person looks straight at the camera in a static and clean style. Dynamic and eccentric levels introduce movement and creativity. The value should be in the range `[0..5]`. | V3 models only |
| no\_text | bool | Do not embed text layouts. | V3 models only |

#### Colors

A color is an object with the following fields:

| Parameter | Type | Description |
| - | - | - |
| rgb (required) | array of 3 integers | The RGB components of the color, each in the `0...255` range — e.g. `[255, 100, 50]`. |
| weight | number or null | The relative preference of this color, in the `0.0...1.0` range. Weights must be set either for every color in the array or for none, and their sum across the array must not exceed `1.0`. |

A `colors` array may contain at most 10 colors.

Color objects are used in two places:

* `colors` and `background_color` in [Controls](#controls) — preferable colors for a single generation request;
* `colors` and `background_color` in the `palette` parameter of [Create style](#create-style) — the color palette stored with a style.

**Example**

A generation with two weighted preferable colors and a desired background color:

```python Python theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'prompt': 'race car on a track',
        'controls': {
            'colors': [
                {'rgb': [0, 255, 0], 'weight': 0.6},
                {'rgb': [255, 0, 0], 'weight': 0.2},
            ],
            'background_color': {'rgb': [40, 40, 40]},
        },
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
    prompt='race car on a track',
    extra_body={
        'controls': {
            'colors': [
                {'rgb': [0, 255, 0], 'weight': 0.6},
                {'rgb': [255, 0, 0], 'weight': 0.2},
            ],
            'background_color': {'rgb': [40, 40, 40]},
        },
    },
)
print(response.data[0].url)
```

```bash cURL theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/generations \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "race car on a track",
    "controls": {
      "colors": [
        {"rgb": [0, 255, 0], "weight": 0.6},
        {"rgb": [255, 0, 0], "weight": 0.2}
      ],
      "background_color": {"rgb": [40, 40, 40]}
    }
  }'
```

Creating a style with a stored `palette` (in multipart requests, the palette is passed as repeated `palette[colors][][rgb][]` and `palette[background_color][rgb][]` fields carrying the RGB values; weights can be set in JSON requests only):

```python Python (Multipart) theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/styles',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    data={
        'model': 'recraftv4_styles',
        'palette[colors][][rgb][]': [0, 255, 0, 255, 0, 0],
        'palette[background_color][rgb][]': [40, 40, 40],
    },
    files={'file1': open('image.png', 'rb')},
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['id'])
```

```python Python (JSON) theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/styles',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'model': 'recraftv4_styles',
        'image_urls': ['https://example.com/image.png'],
        'palette': {
            'colors': [
                {'rgb': [0, 255, 0], 'weight': 0.6},
                {'rgb': [255, 0, 0], 'weight': 0.2},
            ],
            'background_color': {'rgb': [40, 40, 40]},
        },
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['id'])
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
    path='/styles',
    cast_to=object,
    body={
        'model': 'recraftv4_styles',
        'image_urls': ['https://example.com/image.png'],
        'palette': {
            'colors': [
                {'rgb': [0, 255, 0], 'weight': 0.6},
                {'rgb': [255, 0, 0], 'weight': 0.2},
            ],
            'background_color': {'rgb': [40, 40, 40]},
        },
    },
)
print(response['id'])
```

```bash cURL (Multipart) theme={null}
curl -X POST https://external.api.recraft.ai/v1/styles \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -F "model=recraftv4_styles" \
  -F "palette[colors][][rgb][]=0" -F "palette[colors][][rgb][]=255" -F "palette[colors][][rgb][]=0" \
  -F "palette[colors][][rgb][]=255" -F "palette[colors][][rgb][]=0" -F "palette[colors][][rgb][]=0" \
  -F "palette[background_color][rgb][]=40" -F "palette[background_color][rgb][]=40" -F "palette[background_color][rgb][]=40" \
  -F "file1=@image.png"
```

```bash cURL (JSON) theme={null}
curl -X POST https://external.api.recraft.ai/v1/styles \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "recraftv4_styles",
    "image_urls": ["https://example.com/image.png"],
    "palette": {
      "colors": [
        {"rgb": [0, 255, 0], "weight": 0.6},
        {"rgb": [255, 0, 0], "weight": 0.2}
      ],
      "background_color": {"rgb": [40, 40, 40]}
    }
  }'
```

### Text Layout

Text layout is used to define spatial and textual attributes for individual text elements. Each text element consists of an individual word and its bounding box (bbox).

This feature is supported by Recraft V3 and Recraft V3 Vector models only.

| Parameter | Description |
| - | - |
| text (required) | A single word containing only supported characters. |
| bbox (required) | A bounding box representing a 4-angled polygon. Each point in the polygon is defined by relative coordinates. |

**Bounding box**: The bounding box (bbox) is a list of 4 points representing a 4-angled figure (not necessarily a rectangle). Each point specifies its coordinates relative to the layout dimensions, where (0, 0) is the top-left corner, (1, 1) is the bottom-right corner.

**Coordinates**: Coordinates are **relative** to the layout dimensions. Coordinates can extend beyond the \[0, 1] range, such values indicate that the shape will be cropped.

**Points**: The bounding box must always have **exactly 4 points**. Each point is an array of two floats \[x, y] representing the relative position.

**Supported characters**

The `text` field must contain a single word composed only of the following characters:

```text theme={null}
! " # $ % & ' ( ) * + , - . / 
0 1 2 3 4 5 6 7 8 9 
: ; < > ? @ 
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 
_ { } 
Ø Đ Ħ Ł Ŋ Ŧ 
Α Β Ε Ζ Η Ι Κ Μ Ν Ο Ρ Τ Υ Χ 
І 
А В Е К М Н О Р С Т У Х 
ß ẞ
 
```

Any character not listed above will result in validation errors.

**Example**

```python Python theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'prompt': 'cute red panda with a sign',
        'style': 'Illustration',
        'text_layout': [
            {
                'text': 'Recraft',
                'bbox': [[0.3, 0.45], [0.6, 0.45], [0.6, 0.55], [0.3, 0.55]],
            },
            {
                'text': 'AI',
                'bbox': [[0.62, 0.45], [0.70, 0.45], [0.70, 0.55], [0.62, 0.55]],
            },
        ],
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
    prompt='cute red panda with a sign',
    extra_body={
        'style': 'Illustration',
        'text_layout': [
            {
                'text': 'Recraft',
                'bbox': [[0.3, 0.45], [0.6, 0.45], [0.6, 0.55], [0.3, 0.55]],
            },
            {
                'text': 'AI',
                'bbox': [[0.62, 0.45], [0.70, 0.45], [0.70, 0.55], [0.62, 0.55]],
            },
        ],
    },
)
print(response.data[0].url)
```

```bash cURL theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/generations \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "cute red panda with a sign",
    "style": "Illustration",
    "text_layout": [
      {
        "text": "Recraft",
        "bbox": [[0.3, 0.45], [0.6, 0.45], [0.6, 0.55], [0.3, 0.55]]
      },
      {
        "text": "AI",
        "bbox": [[0.62, 0.45], [0.70, 0.45], [0.70, 0.55], [0.62, 0.55]]
      }
    ]
  }'
```


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.