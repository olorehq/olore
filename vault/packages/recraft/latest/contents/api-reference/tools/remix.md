> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Remix image

> Generate variations of an image without a prompt, in the aspect ratio you choose, for $0.04 per request.

Remix generates new versions of an image and keeps its overall concept. Each variation differs slightly in details such as character appearance, object position, or scene composition. It uses no prompt, and it can change the aspect ratio.

> [card] \$0.04
>
> per request

> [card] Image → 1–6 images
>
> up to 20 MB, 16 MP

> [card] POST /v1/images/variateImage
>
> endpoint

## Try it

Create a token in [API tokens](https://www.recraft.ai/app/api/api-keys) (it needs a positive API units balance) and set it once per terminal session:

```bash theme={null}
export RECRAFT_API_TOKEN=your_token
```

Then run. The request remixes a public sample illustration into a square image:

```bash cURL theme={null}
curl https://external.api.recraft.ai/v1/images/variateImage \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png",
    "size": "1:1"
  }'
```

```python Python theme={null}
# pip install requests
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/variateImage',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'image_url': 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
        'size': '1:1',
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

```javascript JavaScript theme={null}
// Node.js 18+, run as an ES module (file.mjs)
const response = await fetch('https://external.api.recraft.ai/v1/images/variateImage', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.RECRAFT_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    image_url: 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
    size: '1:1',
  }),
});
if (!response.ok) throw new Error(await response.text());
const result = await response.json();
console.log(result.data[0].url);
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
    path='/images/variateImage',
    cast_to=object,
    body={
        'image_url': 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
        'size': '1:1',
    },
)
print(response['data'][0]['url'])
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
* The `model` decides whether the output is raster or vector. A vector model returns SVG files.
* Image URLs are temporary: files are kept for about 24 hours, so download them. See [Limits and sizes](https://www.recraft.ai/docs/api-reference/appendix.md#image-storage).
* `credits` is the number of API units charged for the request.
* Pass `"response_format": "b64_json"` to get the image bytes inline, or `"multipart"` for the lowest latency. See [Image inputs and results](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-results).

## Parameters

| Parameter | Type, default | Description |
| - | - | - |
| `image_url` | string, **required** in JSON | URL or data URL of the input image. |
| `image` | file, **required** in multipart | The input image, uploaded instead of `image_url`. |
| `size` | string, **required** | Size of the generated images: an aspect ratio `w:h` (for example `16:9`) or an exact size `WxH`. See [supported sizes](https://www.recraft.ai/docs/api-reference/appendix.md#image-sizes). |
| `model` | string | The model to use. It decides whether the output is raster or vector. See [All models](https://www.recraft.ai/docs/api-reference/models/overview.md) for every `model` value. |
| `n` | integer, `1` | Number of variations, 1 to 6. |
| `random_seed` | integer | Seed for reproducible results. |
| `response_format` | string, `url` | `url`, `b64_json`, or `multipart`. See [Image inputs and results](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-results). |
| `image_format` | string, `webp` | `webp` (lossless) or `png`. Applies to raster output only. See [Image format](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-format). |

The input image must be PNG, JPG, WEBP, or SVG, under 20 MB, up to 16 MP, with sides between 256 and 4096 px. See [Input images](https://www.recraft.ai/docs/api-reference/appendix.md#input-images).

## Examples

> [accordion] Upload a local file
>
> ```bash cURL theme={null}
> curl https://external.api.recraft.ai/v1/images/variateImage \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -F "image=@image.png" \
>   -F "size=1:1"
> ```
>
> ```python Python theme={null}
> import os
>
> import requests
>
> with open('image.png', 'rb') as image:
>     response = requests.post(
>         'https://external.api.recraft.ai/v1/images/variateImage',
>         headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
>         data={'size': '1:1'},
>         files={'image': image},
>     )
> if not response.ok:
>     raise SystemExit(f'{response.status_code}: {response.text}')
> print(response.json()['data'][0]['url'])
> ```

> [accordion] Several wide variations
>
> Set `size` to another aspect ratio and `n` to get a few variations in one request. The response has one `data` entry per image.
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/variateImage \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png",
>     "size": "16:9",
>     "n": 3
>   }'
> ```

> [accordion] Reproducible variations as PNG
>
> Pass `random_seed` to make a request reproducible. `image_format` returns PNG instead of WebP.
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/variateImage \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png",
>     "size": "1:1",
>     "random_seed": 13191922,
>     "image_format": "png"
>   }'
> ```

## Related

> [card] [Image to image](https://www.recraft.ai/docs/api-reference/tools/image-to-image.md)
>
> Change an image with a prompt and a strength value.

> [card] [Pricing](https://www.recraft.ai/docs/api-reference/pricing.md)
>
> Prices of every model and tool.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.