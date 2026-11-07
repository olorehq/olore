> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Upscale

> Increase image resolution: crisp upscale keeps the content and costs $0.004 per request, creative upscale also regenerates fine detail and faces.

Upscale increases the resolution of a raster image. Crisp upscale makes the image sharper and cleaner and keeps the content the same. Creative upscale regenerates fine detail and faces.

> [card] From \$0.004
>
> per request, \$0.25 for creative upscale

> [card] PNG, JPG, WEBP
>
> up to 20 MB, 16 MP

> [card] POST /v1/images/crispUpscale
>
> and /v1/images/creativeUpscale

## Try it

Create a token in [API tokens](https://www.recraft.ai/app/api/api-keys) (it needs a positive API units balance) and set it once per terminal session:

```bash theme={null}
export RECRAFT_API_TOKEN=your_token
```

Then run. The request upscales a public sample illustration with crisp upscale:

```bash cURL theme={null}
curl https://external.api.recraft.ai/v1/images/crispUpscale \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png"
  }'
```

```python Python theme={null}
# pip install requests
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/crispUpscale',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'image_url': 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['image']['url'])
```

```javascript JavaScript theme={null}
// Node.js 18+, run as an ES module (file.mjs)
const response = await fetch('https://external.api.recraft.ai/v1/images/crispUpscale', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.RECRAFT_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    image_url: 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
  }),
});
if (!response.ok) throw new Error(await response.text());
const result = await response.json();
console.log(result.image.url);
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
    path='/images/crispUpscale',
    cast_to=object,
    body={
        'image_url': 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
    },
)
print(response['image']['url'])
```

## Response

```json theme={null}
{
  "created": 1759140000,
  "credits": 4,
  "image": {
    "image_id": "0e6a1b8c-5b1f-4a8e-9f3a-2c7d4e8b9a10",
    "url": "https://..."
  }
}
```

* The result is a single `image`, not a `data` array. `image.url` points to a raster file in the `image_format` you choose.
* Image URLs are temporary: files are kept for about 24 hours, so download them. See [Limits and sizes](https://www.recraft.ai/docs/api-reference/appendix.md#image-storage).
* `credits` is the number of API units charged for the request: 4 for crisp upscale, 250 for creative upscale.

## Parameters

Both endpoints take the same parameters. Only the input limits differ.

### Crisp upscale

`POST /v1/images/crispUpscale` costs \$0.004 per request.

| Parameter | Type, default | Description |
| - | - | - |
| `image_url` | string, **required** in JSON | URL or data URL of the input image. |
| `file` | file, **required** in multipart | The input image, uploaded instead of `image_url`. |
| `response_format` | string, `url` | `url`, `b64_json`, or `multipart`. See [Image inputs and results](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-results). |
| `image_format` | string, `webp` | `webp` (lossless) or `png`. See [Image format](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-format). |

The input image must be PNG, JPG, or WEBP, under 20 MB, up to 16 MP, with sides between 32 and 4096 px. See [Input images](https://www.recraft.ai/docs/api-reference/appendix.md#input-images).

### Creative upscale

`POST /v1/images/creativeUpscale` costs \$0.25 per request.

| Parameter | Type, default | Description |
| - | - | - |
| `image_url` | string, **required** in JSON | URL or data URL of the input image. |
| `file` | file, **required** in multipart | The input image, uploaded instead of `image_url`. |
| `response_format` | string, `url` | `url`, `b64_json`, or `multipart`. See [Image inputs and results](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-results). |
| `image_format` | string, `webp` | `webp` (lossless) or `png`. See [Image format](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-format). |

The input image must be PNG, JPG, or WEBP, under 20 MB, up to 16 MP, with sides between 256 and 4096 px. See [Input images](https://www.recraft.ai/docs/api-reference/appendix.md#input-images).

## Examples

> [accordion] Upload a local file
>
> ```bash cURL theme={null}
> curl https://external.api.recraft.ai/v1/images/crispUpscale \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -F "file=@image.png"
> ```
>
> ```python Python theme={null}
> import os
>
> import requests
>
> with open('image.png', 'rb') as image:
>     response = requests.post(
>         'https://external.api.recraft.ai/v1/images/crispUpscale',
>         headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
>         files={'file': image},
>     )
> if not response.ok:
>     raise SystemExit(f'{response.status_code}: {response.text}')
> print(response.json()['image']['url'])
> ```

> [accordion] Creative upscale
>
> Creative upscale regenerates fine detail and faces. Send the same request to `creativeUpscale`.
>
> ```bash cURL theme={null}
> curl https://external.api.recraft.ai/v1/images/creativeUpscale \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png"
>   }'
> ```
>
> ```python Python theme={null}
> import os
>
> import requests
>
> response = requests.post(
>     'https://external.api.recraft.ai/v1/images/creativeUpscale',
>     headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
>     json={
>         'image_url': 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
>     },
> )
> if not response.ok:
>     raise SystemExit(f'{response.status_code}: {response.text}')
> print(response.json()['image']['url'])
> ```

> [accordion] Get the file in the response
>
> `b64_json` returns the image bytes inside the JSON response, so there is no URL to download. Set `image_format` to `png` to get a PNG.
>
> ```python theme={null}
> import base64
> import os
>
> import requests
>
> response = requests.post(
>     'https://external.api.recraft.ai/v1/images/crispUpscale',
>     headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
>     json={
>         'image_url': 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
>         'response_format': 'b64_json',
>         'image_format': 'png',
>     },
> )
> if not response.ok:
>     raise SystemExit(f'{response.status_code}: {response.text}')
> with open('upscaled.png', 'wb') as f:
>     f.write(base64.b64decode(response.json()['image']['b64_json']))
> ```

## Related

> [card] [Enhance details](https://www.recraft.ai/docs/api-reference/tools/enhance-details.md)
>
> Re-render an image with Recraft V4.1 Pro.

> [card] [Pricing](https://www.recraft.ai/docs/api-reference/pricing.md)
>
> Prices of every model and tool.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.