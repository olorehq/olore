> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Image to image

> Create a new image from an existing image and a prompt, and set with strength how far it moves from the original. Works with Recraft V3, V4, and V4.1.

Image to image creates a new image from an existing one. It can keep aspects of the original, such as composition, color, or subject identity, and change the rest based on your prompt. Use `strength` to set how similar the result stays to the original.

> [card] $0.04 / $0.08
>
> per image with V3 raster / vector. [V4 and V4.1 prices](https://www.recraft.ai/docs/api-reference/pricing.md)

> [card] Image + prompt → image
>
> up to 20 MB, 16 MP

> [card] POST /v1/images/imageToImage
>
> endpoint

## Try it

Create a token in [API tokens](https://www.recraft.ai/app/api/api-keys) (it needs a positive API units balance) and set it once per terminal session:

```bash theme={null}
export RECRAFT_API_TOKEN=your_token
```

Then run. The request turns a public sample illustration into a winter scene. It uses the default model, `recraftv4_1`:

```bash cURL theme={null}
curl https://external.api.recraft.ai/v1/images/imageToImage \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png",
    "prompt": "the same scene in winter, snow on the road",
    "strength": 0.4
  }'
```

```python Python theme={null}
# pip install requests
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/imageToImage',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'image_url': 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
        'prompt': 'the same scene in winter, snow on the road',
        'strength': 0.4,
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

```javascript JavaScript theme={null}
// Node.js 18+, run as an ES module (file.mjs)
const response = await fetch('https://external.api.recraft.ai/v1/images/imageToImage', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.RECRAFT_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    image_url: 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
    prompt: 'the same scene in winter, snow on the road',
    strength: 0.4,
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
    path='/images/imageToImage',
    cast_to=object,
    body={
        'image_url': 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
        'prompt': 'the same scene in winter, snow on the road',
        'strength': 0.4,
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
| `prompt` | string, **required** | A text description of the areas to change. The maximum length depends on the model. See [Prompt length](https://www.recraft.ai/docs/api-reference/appendix.md#prompt-length). |
| `strength` | float, **required** | How much the result differs from the original, from `0` to `1`. `0` is almost identical, `1` is the least similar. |
| `model` | string, `recraftv4_1` | A Recraft V3, V4, or V4.1 model, raster or vector. V4.1 Flash is not supported. See [All models](https://www.recraft.ai/docs/api-reference/models/overview.md) for every `model` value. |
| `n` | integer, `1` | Number of images, 1 to 6. |
| `random_seed` | integer | Seed for reproducible results. |
| `controls` | object | Custom parameters to tweak generation. See [Controls](https://www.recraft.ai/docs/api-reference/endpoints.md#controls). |
| `response_format` | string, `url` | `url`, `b64_json`, or `multipart`. See [Image inputs and results](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-results). |
| `image_format` | string, `webp` | `webp` (lossless) or `png`. Applies to raster output only. See [Image format](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md#image-format). |
| `style` | string | **V3 only.** A [curated style](https://www.recraft.ai/docs/api-reference/styles.md#list-of-curated-styles), for example `Illustration`. |
| `style_id` | UUID | **V3 only.** Use a style as a visual reference. See [Styles](https://www.recraft.ai/docs/api-reference/styles.md). |
| `style_match` | string | **V3 only**, with `style_id`. Must be `regular`. Image to image doesn't take V4 / V4.1 styles, so `flexible` and `precise` don't apply here. See [Style match](https://www.recraft.ai/docs/api-reference/styles.md#style-match). |
| `negative_prompt` | string | **V3 only.** What the image must not contain. |
| `text_layout` | array of objects | **V3 only.** Words and their positions in the image. See [Text layout](https://www.recraft.ai/docs/api-reference/endpoints.md#text-layout). |

The input image must be PNG, JPG, WEBP, or SVG, under 20 MB, up to 16 MP, with sides between 256 and 4096 px. See [Input images](https://www.recraft.ai/docs/api-reference/appendix.md#input-images).

## Examples

> [accordion] Upload a local file
>
> ```bash cURL theme={null}
> curl https://external.api.recraft.ai/v1/images/imageToImage \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -F "image=@image.png" \
>   -F "prompt=the same scene in winter, snow on the road" \
>   -F "strength=0.4"
> ```
>
> ```python Python theme={null}
> import os
>
> import requests
>
> with open('image.png', 'rb') as image:
>     response = requests.post(
>         'https://external.api.recraft.ai/v1/images/imageToImage',
>         headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
>         data={
>             'prompt': 'the same scene in winter, snow on the road',
>             'strength': 0.4,
>         },
>         files={'image': image},
>     )
> if not response.ok:
>     raise SystemExit(f'{response.status_code}: {response.text}')
> print(response.json()['data'][0]['url'])
> ```

> [accordion] Stay close to the original
>
> A low `strength` keeps the result almost identical to the input, so the prompt changes only small details. Here `n` returns two variants.
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/imageToImage \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png",
>     "prompt": "golden evening light",
>     "strength": 0.15,
>     "n": 2
>   }'
> ```

> [accordion] V3 with a style and a negative prompt
>
> `style` and `negative_prompt` work only with V3 models. With `recraftv3` an image costs \$0.04. Use `recraftv3_vector` for SVG output.
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/imageToImage \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png",
>     "prompt": "the same scene in winter",
>     "strength": 0.4,
>     "model": "recraftv3",
>     "style": "Illustration",
>     "negative_prompt": "people"
>   }'
> ```

## Related

> [card] [Remix image](https://www.recraft.ai/docs/api-reference/tools/remix.md)
>
> Make variations of an image without a prompt.

> [card] [Enhance prompt](https://www.recraft.ai/docs/api-reference/tools/enhance-prompt.md)
>
> Expand a short prompt before you use it.

> [card] [Recraft V4.1](https://www.recraft.ai/docs/api-reference/models/recraft-v4-1.md)
>
> The default model for this endpoint.

> [card] [Pricing](https://www.recraft.ai/docs/api-reference/pricing.md)
>
> Prices of every model and tool.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.