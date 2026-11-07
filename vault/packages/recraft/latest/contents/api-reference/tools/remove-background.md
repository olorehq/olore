> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Remove background

> Remove the background from a PNG, JPG, WEBP, or SVG image for $0.01 per request.

Remove background cuts the subject out of an image. Use it for product photos, avatars, and assets that go on other backgrounds. An SVG input returns an SVG.

> [card] \$0.01
>
> per request

> [card] PNG, JPG, WEBP, SVG
>
> SVG in, SVG out. Up to 20 MB, 16 MP

> [card] POST /v1/images/removeBackground
>
> endpoint

## Try it

Create a token in [API tokens](https://www.recraft.ai/app/api/api-keys) (it needs a positive API units balance) and set it once per terminal session:

```bash theme={null}
export RECRAFT_API_TOKEN=your_token
```

Then run. The request removes the background from a public sample illustration:

```bash cURL theme={null}
curl https://external.api.recraft.ai/v1/images/removeBackground \
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
    'https://external.api.recraft.ai/v1/images/removeBackground',
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
const response = await fetch('https://external.api.recraft.ai/v1/images/removeBackground', {
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
    path='/images/removeBackground',
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
  "credits": 10,
  "image": {
    "image_id": "0e6a1b8c-5b1f-4a8e-9f3a-2c7d4e8b9a10",
    "url": "https://..."
  }
}
```

* The result is a single `image`, not a `data` array. A raster input returns a raster file in the `image_format` you choose. An SVG input returns an SVG file.
* Image URLs are temporary: files are kept for about 24 hours, so download them. See [Limits and sizes](https://www.recraft.ai/docs/api-reference/appendix.md#image-storage).
* `credits` is the number of API units charged for the request.

## Parameters

| Parameter | Type, default | Description |
| - | - | - |
| `image_url` | string, **required** in JSON | URL or data URL of the input image. |
| `file` | file, **required** in multipart | The input image, uploaded instead of `image_url`. |
| `response_format` | string, `url` | `url`, `b64_json`, or `multipart`. See [Image inputs and results](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-results). |
| `image_format` | string, `webp` | `webp` (lossless) or `png`. Ignored for SVG results, which are always SVG. See [Image format](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-format). |

The input image must be PNG, JPG, WEBP, or SVG, under 20 MB, up to 16 MP, with sides between 256 and 4096 px. An SVG smaller than 256 px is scaled up before processing. An SVG over the size limits, or an unsafe SVG, is rejected. See [Input images](https://www.recraft.ai/docs/api-reference/appendix.md#input-images).

## Examples

> [accordion] Upload a local file
>
> ```bash cURL theme={null}
> curl https://external.api.recraft.ai/v1/images/removeBackground \
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
>         'https://external.api.recraft.ai/v1/images/removeBackground',
>         headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
>         files={'file': image},
>     )
> if not response.ok:
>     raise SystemExit(f'{response.status_code}: {response.text}')
> print(response.json()['image']['url'])
> ```

> [accordion] Remove the background from an SVG
>
> An SVG input returns an SVG, so the result stays editable and scalable. `image_format` doesn't affect it.
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/removeBackground \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -F "file=@logo.svg"
> ```

> [accordion] Get the result as PNG
>
> Raster results are lossless WebP by default. Set `image_format` to `png` for a PNG file.
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/removeBackground \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png",
>     "image_format": "png"
>   }'
> ```

## Related

> [card] [Vectorize](https://www.recraft.ai/docs/api-reference/tools/vectorize.md)
>
> Turn the cut-out into an editable SVG.

> [card] [Pricing](https://www.recraft.ai/docs/api-reference/pricing.md)
>
> Prices of every model and tool.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.