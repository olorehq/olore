> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Image inputs and results

> How to send images to the Recraft API as files, URLs, or data URLs, and how to get results as URLs, Base64, or multipart bytes.

How images are passed to the Recraft API and how generated images are returned.

## Image inputs

Every endpoint that takes an image (or mask) as input accepts the request in **two interchangeable formats**:

* **`multipart/form-data`** — upload the binary file directly using form fields (`image`, `mask`, `file`, ...). This is convenient for local files.
* **`application/json`** — pass the image *by reference* instead of uploading bytes. Each file field has a JSON counterpart that accepts a **public URL** or a **[data URL](https://developer.mozilla.org/en-US/docs/Web/URI/Schemes/data)** (a `data:image/...;base64,...` string).

The mapping between the multipart file fields and their JSON counterparts:

| Multipart field | JSON field | Type | Endpoints |
| - | - | - | - |
| `image` | `image_url` | string — URL or data URL of the input image | [Image to image](https://www.recraft.ai/docs/api-reference/tools/image-to-image.md) [Image inpainting](https://www.recraft.ai/docs/api-reference/tools/inpainting.md) [Image outpainting](https://www.recraft.ai/docs/api-reference/tools/outpainting.md) [Replace background](https://www.recraft.ai/docs/api-reference/tools/background.md) [Generate background](https://www.recraft.ai/docs/api-reference/tools/background.md#generate-background) [Erase region](https://www.recraft.ai/docs/api-reference/tools/erase-region.md) [Remix image](https://www.recraft.ai/docs/api-reference/tools/remix.md) |
| `mask` | `mask_url` | string — URL or data URL of the mask image | [Image inpainting](https://www.recraft.ai/docs/api-reference/tools/inpainting.md) [Generate background](https://www.recraft.ai/docs/api-reference/tools/background.md#generate-background) [Erase region](https://www.recraft.ai/docs/api-reference/tools/erase-region.md) |
| `file` | `image_url` | string — URL or data URL of the input image | [Vectorize image](https://www.recraft.ai/docs/api-reference/tools/vectorize.md) [Remove background](https://www.recraft.ai/docs/api-reference/tools/remove-background.md) [Crisp upscale](https://www.recraft.ai/docs/api-reference/tools/upscale.md) [Creative upscale](https://www.recraft.ai/docs/api-reference/tools/upscale.md#creative-upscale) [Enhance details](https://www.recraft.ai/docs/api-reference/tools/enhance-details.md) |
| `files` | `image_urls` | array of strings — URLs or data URLs of the input images | [Create style](https://www.recraft.ai/docs/api-reference/endpoints.md#create-style) |
| `style_references` | `style_reference_urls` | array of strings — URLs or data URLs of the style reference images | [Generate image](https://www.recraft.ai/docs/api-reference/endpoints.md#generate-image) |

All other parameters are identical between the two formats. Use JSON when your image is already hosted somewhere (just send the URL) or when a JSON body fits your client better; use multipart to upload local files directly.

### Examples

Generate an image with a style reference passed as a file and as a URL:

#### `multipart/form-data`

```python Python theme={null}
import os

import requests

with open('reference.png', 'rb') as reference:
    response = requests.post(
        'https://external.api.recraft.ai/v1/images/generations',
        headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
        data={'prompt': 'product hero shot, bottle on a table'},
        files={'style_references': reference},
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

response = client.post(
    path='/images/generations',
    cast_to=object,
    options={'headers': {'Content-Type': 'multipart/form-data'}},
    body={'prompt': 'product hero shot, bottle on a table'},
    files={'style_references': open('reference.png', 'rb')},
)
print(response['data'][0]['url'])
```

```bash cURL theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/generations \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: multipart/form-data" \
  -F "prompt=product hero shot, bottle on a table" \
  -F "style_references=@reference.png"
```

#### `application/json`

```python Python theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'prompt': 'product hero shot, bottle on a table',
        'style_reference_urls': ['https://example.com/reference.png'],
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
    prompt='product hero shot, bottle on a table',
    extra_body={'style_reference_urls': ['https://example.com/reference.png']},
)
print(response.data[0].url)
```

```bash cURL theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/generations \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "product hero shot, bottle on a table",
    "style_reference_urls": ["https://example.com/reference.png"]
  }'
```

## Image results

Every endpoint that returns images takes the `response_format` parameter:

* **`url`** (default) — a JSON response, every image carries a `url` to download it from.
* **`b64_json`** — a JSON response, every image carries its bytes Base64-encoded in `b64_json`.
* **`multipart`** — a `multipart/form-data` response. The `response` part carries the same JSON with an `image_id` per image, followed by one part per image with the raw bytes. The part is named by the `image_id`, which is also in its `Content-ID` header, and its `Content-Type` is the image media type (`image/png`, `image/webp` or `image/svg+xml`).

> [!NOTE]
>
> For the best latency use `response_format: multipart`.

Errors keep their non-2xx status with every `response_format`. The error body is plain text or JSON, not multipart; see [Errors](https://www.recraft.ai/docs/api-reference/error-handling.md). The [OpenAI Python library](https://www.recraft.ai/docs/api-reference/clients.md#openai-python-library) only reads JSON responses, so use `url` or `b64_json` with it.

### Examples

#### `url`

```python Python theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={'prompt': 'race car on a track'},
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

#### `b64_json`

```python Python theme={null}
import base64
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={'prompt': 'race car on a track', 'response_format': 'b64_json'},
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
with open('image.webp', 'wb') as f:
    f.write(base64.b64decode(response.json()['data'][0]['b64_json']))
```

```python Python (OpenAI SDK) theme={null}
# pip install openai
import base64
import os

from openai import OpenAI

client = OpenAI(
    base_url='https://external.api.recraft.ai/v1',
    api_key=os.environ['RECRAFT_API_TOKEN'],
)

response = client.images.generate(
    prompt='race car on a track',
    response_format='b64_json',
)
with open('image.webp', 'wb') as f:
    f.write(base64.b64decode(response.data[0].b64_json))
```

```bash cURL theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/generations \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "race car on a track",
    "response_format": "b64_json"
  }'
```

#### `multipart`

```python Python theme={null}
# pip install requests requests-toolbelt
import json
import os

import requests
from requests_toolbelt.multipart import decoder

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={'prompt': 'race car on a track', 'response_format': 'multipart'},
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')

result, images = None, {}
for part in decoder.MultipartDecoder.from_response(response).parts:
    image_id = part.headers.get(b'Content-ID')
    if image_id is None:
        result = json.loads(part.content)
    else:
        images[image_id.decode().strip('<>')] = part.content

for image in result['data']:
    with open(f"{image['image_id']}.webp", 'wb') as f:
        f.write(images[image['image_id']])
```

```bash cURL theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/generations \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "race car on a track",
    "response_format": "multipart"
  }' \
  --output response.multipart
```

## Image format

Every endpoint that returns raster images also takes the `image_format` parameter, which sets the file format of the result:

* **`webp`** (default) — lossless WebP.
* **`png`** — PNG.

Vector images are always returned as SVG, `image_format` does not affect them. With `response_format: multipart` the `Content-Type` of every image part follows the chosen format.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.