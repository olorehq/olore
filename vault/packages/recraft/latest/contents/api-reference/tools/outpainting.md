> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Outpainting

> Extend an image beyond its borders with new content generated from a prompt, from $0.04 per image.

Outpainting extends an image beyond its borders with new content from a prompt. Use it to change the aspect ratio, add scenery, or zoom out to show more of the scene. The original image stays intact.

> [card] $0.04 / $0.08
>
> per image, raster / vector

> [card] Image → larger image
>
> up to 20 MB, 16 MP

> [card] POST /v1/images/outpaint
>
> endpoint

## Try it

Create a token in [API tokens](https://www.recraft.ai/app/api/api-keys) (it needs a positive API units balance) and set it once per terminal session:

```bash theme={null}
export RECRAFT_API_TOKEN=your_token
```

Then run. The request widens a public sample illustration to 16:9:

```bash cURL theme={null}
curl https://external.api.recraft.ai/v1/images/outpaint \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png",
    "prompt": "a wide country road with hills",
    "model": "recraftv3",
    "size": "16:9"
  }'
```

```python Python theme={null}
# pip install requests
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/outpaint',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'image_url': 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
        'prompt': 'a wide country road with hills',
        'model': 'recraftv3',
        'size': '16:9',
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

```javascript JavaScript theme={null}
// Node.js 18+, run as an ES module (file.mjs)
const response = await fetch('https://external.api.recraft.ai/v1/images/outpaint', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.RECRAFT_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    image_url: 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
    prompt: 'a wide country road with hills',
    model: 'recraftv3',
    size: '16:9',
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
    path='/images/outpaint',
    cast_to=object,
    body={
        'image_url': 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
        'prompt': 'a wide country road with hills',
        'model': 'recraftv3',
        'size': '16:9',
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
| `image_url` | string, **required** in JSON | URL or data URL of the image to extend. |
| `image` | file, **required** in multipart | The image to extend, uploaded instead of `image_url`. |
| `prompt` | string, **required** | What to draw in the new area. Up to 1,000 characters. |
| `size` | string | Size of the result: an aspect ratio (`16:9`) or an exact size (`WxH`). The source image is placed inside it. Can't be combined with `expand_*`. See [supported sizes](https://www.recraft.ai/docs/api-reference/appendix.md#image-sizes). |
| `expand_left`, `expand_right`, `expand_top`, `expand_bottom` | integer | Pixels to add on each side, from 0 to 4096. Can't be combined with `size`. |
| `zoom_out_percentage` | number, `0` | How much the source image is scaled down before outpainting, from 0 up to (not including) 100. Higher values give more surrounding context. Use it alone or with `size` or `expand_*`. |
| `model` | string, `recraftv3` | `recraftv3` (raster) or `recraftv3_vector` (SVG). Other models don't support outpainting. |
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

Set at least one of `size`, `expand_*`, or `zoom_out_percentage`. `size` and `expand_*` can't be used together. The result must not exceed 4096 px on either side.

The input image must be PNG, JPG, WEBP, or SVG, under 20 MB, up to 16 MP, with sides between 256 and 4096 px. See [Input images](https://www.recraft.ai/docs/api-reference/appendix.md#input-images).

## Examples

> [accordion] Upload a local file
>
> ```bash cURL theme={null}
> curl https://external.api.recraft.ai/v1/images/outpaint \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -F "image=@image.png" \
>   -F "prompt=a wide country road with hills" \
>   -F "model=recraftv3" \
>   -F "size=16:9"
> ```
>
> ```python Python theme={null}
> import os
>
> import requests
>
> with open('image.png', 'rb') as image:
>     response = requests.post(
>         'https://external.api.recraft.ai/v1/images/outpaint',
>         headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
>         data={
>             'prompt': 'a wide country road with hills',
>             'model': 'recraftv3',
>             'size': '16:9',
>         },
>         files={'image': image},
>     )
> if not response.ok:
>     raise SystemExit(f'{response.status_code}: {response.text}')
> print(response.json()['data'][0]['url'])
> ```

> [accordion] Add pixels on chosen sides
>
> `expand_*` adds the given number of pixels to each side you name. Here the image grows by 256 px to the left and to the right. Don't combine it with `size`.
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/outpaint \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png",
>     "prompt": "a wide country road with hills",
>     "model": "recraftv3",
>     "expand_left": 256,
>     "expand_right": 256
>   }'
> ```

> [accordion] Zoom out
>
> `zoom_out_percentage` scales the source image down and generates content around it. It works on its own or together with `size` or `expand_*`.
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/outpaint \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png",
>     "prompt": "a wide country road with hills",
>     "model": "recraftv3",
>     "zoom_out_percentage": 30
>   }'
> ```

## Related

> [card] [Inpainting](https://www.recraft.ai/docs/api-reference/tools/inpainting.md)
>
> Regenerate part of an image with a mask.

> [card] [Replace and generate background](https://www.recraft.ai/docs/api-reference/tools/background.md)
>
> Change the background of an image.

> [card] [Recraft V3](https://www.recraft.ai/docs/api-reference/models/recraft-v3.md)
>
> The model line behind outpainting.

> [card] [Pricing](https://www.recraft.ai/docs/api-reference/pricing.md)
>
> Prices of every model and tool.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.