> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Enhance details

> Re-render a raster image with Recraft V4.1 Pro for sharper textures and finer details for $0.21 per request.

Enhance details re-renders a raster image with Recraft V4.1 Pro. It sharpens textures and fine details and keeps the composition.

> [card] \$0.21
>
> per request, Recraft V4.1 Pro

> [card] PNG, JPG, WEBP
>
> up to 20 MB, 16 MP

> [card] POST /v1/images/enhance
>
> endpoint

## Try it

Create a token in [API tokens](https://www.recraft.ai/app/api/api-keys) (it needs a positive API units balance) and set it once per terminal session:

```bash theme={null}
export RECRAFT_API_TOKEN=your_token
```

Then run. The request enhances a public sample illustration:

```bash cURL theme={null}
curl https://external.api.recraft.ai/v1/images/enhance \
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
    'https://external.api.recraft.ai/v1/images/enhance',
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
const response = await fetch('https://external.api.recraft.ai/v1/images/enhance', {
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
    path='/images/enhance',
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
  "credits": 210,
  "image": {
    "image_id": "0e6a1b8c-5b1f-4a8e-9f3a-2c7d4e8b9a10",
    "url": "https://..."
  }
}
```

* The result is a single `image`, not a `data` array. `image.url` points to a raster file in the `image_format` you choose.
* The result is rendered at Recraft V4.1 Pro resolution for the aspect ratio of the source image.
* Image URLs are temporary: files are kept for about 24 hours, so download them. See [Limits and sizes](https://www.recraft.ai/docs/api-reference/appendix.md#image-storage).
* `credits` is the number of API units charged for the request.

## Parameters

| Parameter | Type, default | Description |
| - | - | - |
| `image_url` | string, **required** in JSON | URL or data URL of the input image. |
| `file` | file, **required** in multipart | The input image, uploaded instead of `image_url`. |
| `refinement` | string, `moderate` | How much the details may change. `subtle` keeps the source as close as possible. `moderate` allows more generative detail. |
| `response_format` | string, `url` | `url`, `b64_json`, or `multipart`. See [Image inputs and results](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-results). |
| `image_format` | string, `webp` | `webp` (lossless) or `png`. See [Image format](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-format). |

The input image must be PNG, JPG, or WEBP, under 20 MB, up to 16 MP, with sides between 256 and 4096 px. An image larger than 2048 px on its longest side is downscaled before enhancing. See [Input images](https://www.recraft.ai/docs/api-reference/appendix.md#input-images).

## Examples

> [accordion] Upload a local file
>
> `refinement` goes in a form field next to the file.
>
> ```bash cURL theme={null}
> curl https://external.api.recraft.ai/v1/images/enhance \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -F "file=@image.png" \
>   -F "refinement=subtle"
> ```
>
> ```python Python theme={null}
> import os
>
> import requests
>
> with open('image.png', 'rb') as image:
>     response = requests.post(
>         'https://external.api.recraft.ai/v1/images/enhance',
>         headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
>         data={'refinement': 'subtle'},
>         files={'file': image},
>     )
> if not response.ok:
>     raise SystemExit(f'{response.status_code}: {response.text}')
> print(response.json()['image']['url'])
> ```

> [accordion] Stay close to the source
>
> `subtle` preserves the source as closely as possible. Use it when the image is already right and you only want sharper detail.
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/enhance \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png",
>     "refinement": "subtle"
>   }'
> ```

> [accordion] Allow more generative detail
>
> `moderate` is the default. Set it explicitly when you want the result to add more detail than `subtle` does.
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/enhance \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png",
>     "refinement": "moderate"
>   }'
> ```

## Related

> [card] [Upscale](https://www.recraft.ai/docs/api-reference/tools/upscale.md)
>
> Increase resolution with crisp or creative upscale.

> [card] [Pricing](https://www.recraft.ai/docs/api-reference/pricing.md)
>
> Prices of every model and tool.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.