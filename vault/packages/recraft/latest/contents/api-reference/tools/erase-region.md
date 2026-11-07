> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Erase region

> Erase part of an image with a mask for $0.002 per request.

Erase region removes the part of an image that a mask marks. Use it to take out objects, text, or blemishes.

> [card] \$0.002
>
> per request

> [card] Image and mask
>
> up to 20 MB and 16 MP each

> [card] POST /v1/images/eraseRegion
>
> endpoint

## Try it

Create a token in [API tokens](https://www.recraft.ai/app/api/api-keys) (it needs a positive API units balance) and set it once per terminal session:

```bash theme={null}
export RECRAFT_API_TOKEN=your_token
```

Then run. The request erases the white area of a sample mask from a public sample illustration:

```bash cURL theme={null}
curl https://external.api.recraft.ai/v1/images/eraseRegion \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png",
    "mask_url": "https://www.recraft.ai/docs/images/samples/motorcycle-mask.png"
  }'
```

```python Python theme={null}
# pip install requests
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/eraseRegion',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'image_url': 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
        'mask_url': 'https://www.recraft.ai/docs/images/samples/motorcycle-mask.png',
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['image']['url'])
```

```javascript JavaScript theme={null}
// Node.js 18+, run as an ES module (file.mjs)
const response = await fetch('https://external.api.recraft.ai/v1/images/eraseRegion', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.RECRAFT_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    image_url: 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
    mask_url: 'https://www.recraft.ai/docs/images/samples/motorcycle-mask.png',
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
    path='/images/eraseRegion',
    cast_to=object,
    body={
        'image_url': 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
        'mask_url': 'https://www.recraft.ai/docs/images/samples/motorcycle-mask.png',
    },
)
print(response['image']['url'])
```

## Response

```json theme={null}
{
  "created": 1759140000,
  "credits": 2,
  "image": {
    "image_id": "0e6a1b8c-5b1f-4a8e-9f3a-2c7d4e8b9a10",
    "url": "https://..."
  }
}
```

* The result is a single `image`, not a `data` array. Raster results come in the `image_format` you choose.
* Image URLs are temporary: files are kept for about 24 hours, so download them. See [Limits and sizes](https://www.recraft.ai/docs/api-reference/appendix.md#image-storage).
* `credits` is the number of API units charged for the request.

## Parameters

| Parameter | Type, default | Description |
| - | - | - |
| `image_url` | string, **required** in JSON | URL or data URL of the input image. |
| `mask_url` | string, **required** in JSON | URL or data URL of the mask. |
| `image` | file, **required** in multipart | The input image, uploaded instead of `image_url`. |
| `mask` | file, **required** in multipart | The mask, uploaded instead of `mask_url`. |
| `response_format` | string, `url` | `url`, `b64_json`, or `multipart`. See [Image inputs and results](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-results). |
| `image_format` | string, `webp` | `webp` (lossless) or `png`. See [Image format](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-format). |

The image must be PNG, JPG, WEBP, or SVG. The mask must be PNG, JPG, or WEBP. Both must be under 20 MB, up to 16 MP, with sides between 256 and 4096 px, and the mask must have exactly the size of the image. See [Input images](https://www.recraft.ai/docs/api-reference/appendix.md#input-images).

The mask is a grayscale image. White pixels (`255`) mark the area to erase, black pixels (`0`) stay as they are. Every pixel must be pure black or pure white.

## Examples

> [accordion] Upload local files
>
> ```bash cURL theme={null}
> curl https://external.api.recraft.ai/v1/images/eraseRegion \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -F "image=@image.png" \
>   -F "mask=@mask.png"
> ```
>
> ```python Python theme={null}
> import os
>
> import requests
>
> with open('image.png', 'rb') as image, open('mask.png', 'rb') as mask:
>     response = requests.post(
>         'https://external.api.recraft.ai/v1/images/eraseRegion',
>         headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
>         files={'image': image, 'mask': mask},
>     )
> if not response.ok:
>     raise SystemExit(f'{response.status_code}: {response.text}')
> print(response.json()['image']['url'])
> ```

> [accordion] Draw a mask in code
>
> This script makes a black mask the size of the image and paints a white rectangle where the object is. Then it sends both files.
>
> ```python theme={null}
> # pip install pillow requests
> import os
>
> import requests
> from PIL import Image, ImageDraw
>
> image = Image.open('image.png')
>
> # Black keeps pixels, white erases them. Use only values 0 and 255.
> mask = Image.new('L', image.size, 0)
> ImageDraw.Draw(mask).rectangle((120, 80, 360, 300), fill=255)
> mask.save('mask.png')
>
> with open('image.png', 'rb') as image_file, open('mask.png', 'rb') as mask_file:
>     response = requests.post(
>         'https://external.api.recraft.ai/v1/images/eraseRegion',
>         headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
>         files={'image': image_file, 'mask': mask_file},
>     )
> if not response.ok:
>     raise SystemExit(f'{response.status_code}: {response.text}')
> print(response.json()['image']['url'])
> ```

> [accordion] Erase from an SVG
>
> The image can be an SVG. The mask is always a raster file: PNG, JPG, or WEBP.
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/eraseRegion \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -F "image=@logo.svg" \
>   -F "mask=@mask.png"
> ```

## Related

> [card] [Remove background](https://www.recraft.ai/docs/api-reference/tools/remove-background.md)
>
> Cut out the subject instead of erasing an area.

> [card] [Pricing](https://www.recraft.ai/docs/api-reference/pricing.md)
>
> Prices of every model and tool.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.