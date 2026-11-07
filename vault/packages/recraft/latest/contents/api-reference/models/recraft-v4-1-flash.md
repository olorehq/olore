> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Recraft V4.1 Flash

> The fastest and cheapest Recraft API model: about 1.3 seconds and $0.007 per image, with quality close to V4.1. Raster only, no styles.

Recraft V4.1 Flash, released in September 2026, is a fast, low-cost model with quality close to Recraft V4.1. It's built for high-volume generation and rapid iteration, follows prompts closely, and avoids the generic AI look. Strong use cases: photography, portraits, atmosphere, complex scenes, mixed media, and logo concepts.

> [card] \$0.007
>
> per image

> [card] \~1.3 s
>
> end-to-end per image

> [card] 1K
>
> raster, WebP or PNG

> [card] recraftv4\_1\_flash
>
> `model` value

## Try it

Create a token in [API tokens](https://www.recraft.ai/app/api/api-keys) (it needs a positive API units balance) and set it once per terminal session:

```bash theme={null}
export RECRAFT_API_TOKEN=your_token
```

Flash is built for speed, so this request uses `"response_format": "multipart"`, which we recommend with Flash: the image bytes come back in the response itself, with no second download.

```bash cURL theme={null}
curl https://external.api.recraft.ai/v1/images/generations \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "two race cars on a track",
    "model": "recraftv4_1_flash",
    "response_format": "multipart"
  }' \
  --output response.multipart
```

```python Python theme={null}
# pip install requests requests-toolbelt
import json
import os

import requests
from requests_toolbelt.multipart import decoder

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'prompt': 'two race cars on a track',
        'model': 'recraftv4_1_flash',
        'response_format': 'multipart',
    },
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
    print('saved', f"{image['image_id']}.webp")
```

```javascript JavaScript theme={null}
// Node.js 18+, run as an ES module (file.mjs)
import { writeFile } from 'node:fs/promises';

const response = await fetch('https://external.api.recraft.ai/v1/images/generations', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.RECRAFT_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    prompt: 'two race cars on a track',
    model: 'recraftv4_1_flash',
    response_format: 'multipart',
  }),
});
if (!response.ok) throw new Error(await response.text());

// Split the multipart body into parts. Each part is named by image_id;
// the part named "response" holds the JSON.
const boundary = response.headers.get('content-type').match(/boundary="?([^";]+)"?/)[1];
const body = Buffer.from(await response.arrayBuffer());
const parts = {};
const delimiter = `--${boundary}`;
let start = body.indexOf(delimiter);
while (start !== -1) {
  const next = body.indexOf(delimiter, start + delimiter.length);
  if (next === -1) break;
  const part = body.subarray(start + delimiter.length + 2, next - 2);
  const split = part.indexOf('\r\n\r\n');
  const name = part.subarray(0, split).toString().match(/name="([^"]+)"/)[1];
  parts[name] = part.subarray(split + 4);
  start = next;
}

const result = JSON.parse(parts.response.toString());
for (const image of result.data) {
  await writeFile(`${image.image_id}.webp`, parts[image.image_id]);
  console.log('saved', `${image.image_id}.webp`);
}
```

```python Python (OpenAI SDK) theme={null}
# pip install openai
# The OpenAI SDK can't read multipart responses, so this tab returns a URL instead.
import os

from openai import OpenAI

client = OpenAI(
    base_url='https://external.api.recraft.ai/v1',
    api_key=os.environ['RECRAFT_API_TOKEN'],
)

response = client.images.generate(
    prompt='two race cars on a track',
    model='recraftv4_1_flash',
)
print(response.data[0].url)
```

## Response

The response is `multipart/form-data`. The part named `response` carries this JSON, followed by one part per image with its raw bytes, named by its `image_id` (also in the part's `Content-ID` header):

```json theme={null}
{
  "created": 1759140000,
  "credits": 7,
  "data": [
    {
      "image_id": "0e6a1b8c-5b1f-4a8e-9f3a-2c7d4e8b9a10"
    }
  ]
}
```

* `data` has one entry per image (`n`), and each image part's `Content-Type` is the image format (`image/webp` by default, or `image/png`).
* `credits` is the number of API units charged for the request.
* With the default `"response_format": "url"`, each `data` entry has a `url` instead, kept for about 24 hours. See [Image inputs and results](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-results).

## Parameters

| Parameter | Type, default | Description |
| - | - | - |
| `prompt` | string, **required** | What to generate. Up to 10,000 characters. |
| `model` | string | `recraftv4_1_flash` (`recraftv4_1_flash_raster` is an alias). Without it the API uses `recraftv4_1`. |
| `size` | string, auto | Aspect ratio (`1:1`, `16:9`, `3:4`, ...) or exact size (`1024x1024`). Picked from the prompt when omitted. See [supported sizes](https://www.recraft.ai/docs/api-reference/appendix.md#image-sizes). |
| `n` | integer, `1` | Number of images, 1 to 6. |
| `response_format` | string, `url` | `url`, `b64_json`, or `multipart`. |
| `image_format` | string, `webp` | `webp` (lossless) or `png`. |

> [accordion] More parameters
>
> | Parameter | Type, default | Description |
> | - | - | - |
> | `random_seed` | integer | Seed for reproducible results. |
> | `controls.colors` | array of colors | Preferred colors, e.g. `[{"rgb": [255, 102, 0]}]`. See [Colors](https://www.recraft.ai/docs/api-reference/endpoints.md#colors). |
> | `controls.background_color` | color | Desired background color, e.g. `{"rgb": [255, 255, 255]}`. |
>
> Not supported by Flash: `style`, `style_id`, `style_match`, style references, `negative_prompt`, and `text_layout`.

## Variants

| `model` | Output | Price per image |
| - | - | - |
| `recraftv4_1_flash` | Raster, 1K | \$0.007 |

Flash has no Vector or Pro variants. For those, use [Recraft V4.1](https://www.recraft.ai/docs/api-reference/models/recraft-v4-1.md).

## Capabilities

| Capability | Support |
| - | - |
| [Generate image](https://www.recraft.ai/docs/api-reference/endpoints.md#generate-image) | Yes |
| Image to image, create style | No |
| Vector output | No |
| [Styles](https://www.recraft.ai/docs/api-reference/styles.md) | No |
| [Controls](https://www.recraft.ai/docs/api-reference/endpoints.md#controls) | Partial: `colors` and `background_color` |

## Examples

> [accordion] Get a URL instead of bytes
>
> Without `response_format`, the response is JSON with a temporary download `url` per image:
>
> ```bash cURL theme={null}
> curl https://external.api.recraft.ai/v1/images/generations \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "prompt": "two race cars on a track",
>     "model": "recraftv4_1_flash"
>   }'
> ```
>
> ```python Python theme={null}
> import os
>
> import requests
>
> response = requests.post(
>     'https://external.api.recraft.ai/v1/images/generations',
>     headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
>     json={
>         'prompt': 'two race cars on a track',
>         'model': 'recraftv4_1_flash',
>     },
> )
> if not response.ok:
>     raise SystemExit(f'{response.status_code}: {response.text}')
> print(response.json()['data'][0]['url'])
> ```

> [accordion] Batch of variations
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/generations \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "prompt": "portrait of an old fisherman, golden hour, film photo",
>     "model": "recraftv4_1_flash",
>     "size": "4:5",
>     "n": 6
>   }'
> ```
>
> Six images for \$0.042.

## Related

> [card] [Recraft V4.1](https://www.recraft.ai/docs/api-reference/models/recraft-v4-1.md)
>
> The full-quality V4.1 line: Pro, Utility, and Vector variants with style support.

> [card] [All models](https://www.recraft.ai/docs/api-reference/models/overview.md)
>
> The whole lineup with prices and best-fit use cases.

> [card] [Image inputs and results](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md)
>
> Response formats in detail, including multipart.

> [card] [Pricing](https://www.recraft.ai/docs/api-reference/pricing.md)
>
> API unit charges across every model and operation.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.