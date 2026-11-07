> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Inpainting

> Regenerate the masked part of an image from a prompt and keep the rest unchanged, from $0.04 per image.

Inpainting regenerates the part of an image that a mask marks and keeps the rest unchanged. Use it to fix a detail, swap an object, or change one area without starting over.

> [card] $0.04 / $0.08
>
> per image, raster / vector

> [card] Image + mask → image
>
> up to 20 MB, 16 MP

> [card] POST /v1/images/inpaint
>
> endpoint

## Try it

Create a token in [API tokens](https://www.recraft.ai/app/api/api-keys) (it needs a positive API units balance) and set it once per terminal session:

```bash theme={null}
export RECRAFT_API_TOKEN=your_token
```

Then run. The request swaps the motorcycle in a public sample illustration for a bicycle. The public sample mask is white over the motorcycle and rider:

```bash cURL theme={null}
curl https://external.api.recraft.ai/v1/images/inpaint \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png",
    "mask_url": "https://www.recraft.ai/docs/images/samples/motorcycle-mask.png",
    "prompt": "a red vintage bicycle with a rider",
    "model": "recraftv3"
  }'
```

```python Python theme={null}
# pip install requests
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/inpaint',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'image_url': 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
        'mask_url': 'https://www.recraft.ai/docs/images/samples/motorcycle-mask.png',
        'prompt': 'a red vintage bicycle with a rider',
        'model': 'recraftv3',
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

```javascript JavaScript theme={null}
// Node.js 18+, run as an ES module (file.mjs)
const response = await fetch('https://external.api.recraft.ai/v1/images/inpaint', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.RECRAFT_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    image_url: 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
    mask_url: 'https://www.recraft.ai/docs/images/samples/motorcycle-mask.png',
    prompt: 'a red vintage bicycle with a rider',
    model: 'recraftv3',
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
    path='/images/inpaint',
    cast_to=object,
    body={
        'image_url': 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
        'mask_url': 'https://www.recraft.ai/docs/images/samples/motorcycle-mask.png',
        'prompt': 'a red vintage bicycle with a rider',
        'model': 'recraftv3',
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

* `data` has one entry per image (`n`). Download each image from its `url`. With `recraftv3_vector`, each `url` points to an SVG file.
* Image URLs are temporary: files are kept for about 24 hours, so download them. See [Limits and sizes](https://www.recraft.ai/docs/api-reference/appendix.md#image-storage).
* `credits` is the number of API units charged for the request.

## Parameters

| Parameter | Type, default | Description |
| - | - | - |
| `image_url` | string, **required** in JSON | URL or data URL of the image to change. |
| `image` | file, **required** in multipart | The image to change, uploaded instead of `image_url`. |
| `mask_url` | string, **required** in JSON | URL or data URL of the mask. |
| `mask` | file, **required** in multipart | The mask, uploaded instead of `mask_url`. |
| `prompt` | string, **required** | What to draw in the white area of the mask. Up to 1,000 characters. |
| `model` | string, `recraftv3` | `recraftv3` (raster) or `recraftv3_vector` (SVG). Other models don't support inpainting. |
| `style` | string | A [curated style](https://www.recraft.ai/docs/api-reference/styles.md#list-of-curated-styles) for the new content. V3 styles only. |
| `n` | integer, `1` | Number of images, 1 to 6. |
| `negative_prompt` | string | What the new content must not contain. |
| `response_format` | string, `url` | `url`, `b64_json`, or `multipart`. See [Image inputs and results](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-results). |
| `image_format` | string, `webp` | `webp` (lossless) or `png`. See [Image format](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-format). |

> [accordion] More parameters
>
> | Parameter | Type, default | Description |
> | - | - | - |
> | `style_id` | UUID | Use a [custom style](https://www.recraft.ai/docs/api-reference/styles.md#custom-styles) as a visual reference. V3 styles only. |
> | `style_match` | string | Only `regular` for V3. |
> | `text_layout` | array of objects | Words and their positions in the image. See [Text layout](https://www.recraft.ai/docs/api-reference/endpoints.md#text-layout). |
> | `controls` | object | Extra generation settings: `colors`, `background_color`, `artistic_level`, `no_text`. See [Controls](https://www.recraft.ai/docs/api-reference/endpoints.md#controls). |

The mask is a grayscale image (PNG, JPG, or WEBP) of exactly the same size as the image. Pure white pixels (`255`) are regenerated and pure black pixels (`0`) stay unchanged. Every pixel must be one of the two.

The input image must be PNG, JPG, WEBP, or SVG, under 20 MB, up to 16 MP, with sides between 256 and 4096 px. See [Input images](https://www.recraft.ai/docs/api-reference/appendix.md#input-images).

## Examples

> [accordion] Upload local files
>
> ```bash cURL theme={null}
> curl https://external.api.recraft.ai/v1/images/inpaint \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -F "image=@image.png" \
>   -F "mask=@mask.png" \
>   -F "prompt=a red vintage bicycle with a rider" \
>   -F "model=recraftv3"
> ```
>
> ```python Python theme={null}
> import os
>
> import requests
>
> with open('image.png', 'rb') as image, open('mask.png', 'rb') as mask:
>     response = requests.post(
>         'https://external.api.recraft.ai/v1/images/inpaint',
>         headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
>         data={
>             'prompt': 'a red vintage bicycle with a rider',
>             'model': 'recraftv3',
>         },
>         files={'image': image, 'mask': mask},
>     )
> if not response.ok:
>     raise SystemExit(f'{response.status_code}: {response.text}')
> print(response.json()['data'][0]['url'])
> ```

> [accordion] Pick from several variants
>
> Set `n` to get up to 6 results from one request. `data` then has one entry per image, and the price is per image.
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/inpaint \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png",
>     "mask_url": "https://www.recraft.ai/docs/images/samples/motorcycle-mask.png",
>     "prompt": "a red vintage bicycle with a rider",
>     "model": "recraftv3",
>     "n": 3
>   }'
> ```

> [accordion] Get an SVG result
>
> `recraftv3_vector` returns SVG instead of a raster image. It costs \$0.08 per image.
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/inpaint \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png",
>     "mask_url": "https://www.recraft.ai/docs/images/samples/motorcycle-mask.png",
>     "prompt": "a red vintage bicycle with a rider",
>     "model": "recraftv3_vector"
>   }'
> ```

## Related

> [card] [Outpainting](https://www.recraft.ai/docs/api-reference/tools/outpainting.md)
>
> Extend an image beyond its borders.

> [card] [Erase region](https://www.recraft.ai/docs/api-reference/tools/erase-region.md)
>
> Remove an area without writing a prompt.

> [card] [Recraft V3](https://www.recraft.ai/docs/api-reference/models/recraft-v3.md)
>
> The model line behind inpainting.

> [card] [Pricing](https://www.recraft.ai/docs/api-reference/pricing.md)
>
> Prices of every model and tool.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.