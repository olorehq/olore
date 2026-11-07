> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Replace and generate background

> Replace the background of an image from a prompt, or generate a new one behind a mask, from $0.04 per image.

Replace background finds the background of an image and redraws it from a prompt. Generate background does the same for an area you mark with a mask.

> [card] $0.04 / $0.08
>
> per image, raster / vector

> [card] Image + prompt → image
>
> up to 20 MB, 16 MP

> [card] POST /v1/images/replaceBackground
>
> endpoint, mask variant below

## Try it

Create a token in [API tokens](https://www.recraft.ai/app/api/api-keys) (it needs a positive API units balance) and set it once per terminal session:

```bash theme={null}
export RECRAFT_API_TOKEN=your_token
```

Then run. The request replaces the background of a public sample illustration:

```bash cURL theme={null}
curl https://external.api.recraft.ai/v1/images/replaceBackground \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png",
    "prompt": "a desert highway at sunset",
    "model": "recraftv3"
  }'
```

```python Python theme={null}
# pip install requests
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/replaceBackground',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'image_url': 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
        'prompt': 'a desert highway at sunset',
        'model': 'recraftv3',
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

```javascript JavaScript theme={null}
// Node.js 18+, run as an ES module (file.mjs)
const response = await fetch('https://external.api.recraft.ai/v1/images/replaceBackground', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.RECRAFT_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    image_url: 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
    prompt: 'a desert highway at sunset',
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
    path='/images/replaceBackground',
    cast_to=object,
    body={
        'image_url': 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
        'prompt': 'a desert highway at sunset',
        'model': 'recraftv3',
    },
)
print(response['data'][0]['url'])
```

## Response

Both operations return the same result.

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

Parameters of `POST /v1/images/replaceBackground`:

| Parameter | Type, default | Description |
| - | - | - |
| `image_url` | string, **required** in JSON | URL or data URL of the input image. |
| `image` | file, **required** in multipart | The input image, uploaded instead of `image_url`. |
| `prompt` | string, **required** | What the new background looks like. Up to 1,000 characters. |
| `model` | string, `recraftv3` | `recraftv3` (raster) or `recraftv3_vector` (SVG). Other models don't support background operations. |
| `style` | string | A [curated style](https://www.recraft.ai/docs/api-reference/styles.md#list-of-curated-styles) for the new background. V3 styles only. |
| `n` | integer, `1` | Number of images, 1 to 6. |
| `negative_prompt` | string | What the new background must not contain. |
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

The input image must be PNG, JPG, WEBP, or SVG, under 20 MB, up to 16 MP, with sides between 256 and 4096 px. See [Input images](https://www.recraft.ai/docs/api-reference/appendix.md#input-images).

## Generate background

`POST /v1/images/generateBackground` works like replace background, but you mark the background with a mask instead of letting the model find it. Use it when you want to control exactly which area is regenerated.

The request below uses the sample image and a sample mask that is white over the background and black over the motorcycle and rider, so only the background is generated.

```bash cURL theme={null}
curl https://external.api.recraft.ai/v1/images/generateBackground \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png",
    "mask_url": "https://www.recraft.ai/docs/images/samples/motorcycle-background-mask.png",
    "prompt": "a desert highway at sunset",
    "model": "recraftv3"
  }'
```

```python Python theme={null}
# pip install requests
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generateBackground',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'image_url': 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
        'mask_url': 'https://www.recraft.ai/docs/images/samples/motorcycle-background-mask.png',
        'prompt': 'a desert highway at sunset',
        'model': 'recraftv3',
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

```javascript JavaScript theme={null}
// Node.js 18+, run as an ES module (file.mjs)
const response = await fetch('https://external.api.recraft.ai/v1/images/generateBackground', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.RECRAFT_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    image_url: 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
    mask_url: 'https://www.recraft.ai/docs/images/samples/motorcycle-background-mask.png',
    prompt: 'a desert highway at sunset',
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
    path='/images/generateBackground',
    cast_to=object,
    body={
        'image_url': 'https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png',
        'mask_url': 'https://www.recraft.ai/docs/images/samples/motorcycle-background-mask.png',
        'prompt': 'a desert highway at sunset',
        'model': 'recraftv3',
    },
)
print(response['data'][0]['url'])
```

### Request parameters

| Parameter | Type, default | Description |
| - | - | - |
| `image_url` | string, **required** in JSON | URL or data URL of the input image. |
| `image` | file, **required** in multipart | The input image, uploaded instead of `image_url`. |
| `mask_url` | string, **required** in JSON | URL or data URL of the mask. |
| `mask` | file, **required** in multipart | The mask, uploaded instead of `mask_url`. |
| `prompt` | string, **required** | What the new background looks like. Up to 1,000 characters. |

The mask is a grayscale image (PNG, JPG, or WEBP) of exactly the same size as the image. Pure white pixels (`255`) are regenerated and pure black pixels (`0`) stay unchanged. Every pixel must be one of the two.

`model`, `n`, `style`, `style_id`, `style_match`, `negative_prompt`, `text_layout`, `controls`, `response_format`, and `image_format` work as in the table above. The image limits are the same.

## Examples

> [accordion] Upload a local file
>
> ```bash cURL theme={null}
> curl https://external.api.recraft.ai/v1/images/replaceBackground \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -F "image=@image.png" \
>   -F "prompt=a desert highway at sunset" \
>   -F "model=recraftv3"
> ```
>
> ```python Python theme={null}
> import os
>
> import requests
>
> with open('image.png', 'rb') as image:
>     response = requests.post(
>         'https://external.api.recraft.ai/v1/images/replaceBackground',
>         headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
>         data={
>             'prompt': 'a desert highway at sunset',
>             'model': 'recraftv3',
>         },
>         files={'image': image},
>     )
> if not response.ok:
>     raise SystemExit(f'{response.status_code}: {response.text}')
> print(response.json()['data'][0]['url'])
> ```

> [accordion] Upload a local image and mask
>
> For generate background, upload the mask next to the image.
>
> ```bash cURL theme={null}
> curl https://external.api.recraft.ai/v1/images/generateBackground \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -F "image=@image.png" \
>   -F "mask=@mask.png" \
>   -F "prompt=a desert highway at sunset" \
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
>         'https://external.api.recraft.ai/v1/images/generateBackground',
>         headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
>         data={
>             'prompt': 'a desert highway at sunset',
>             'model': 'recraftv3',
>         },
>         files={'image': image, 'mask': mask},
>     )
> if not response.ok:
>     raise SystemExit(f'{response.status_code}: {response.text}')
> print(response.json()['data'][0]['url'])
> ```

> [accordion] Get an SVG result
>
> `recraftv3_vector` returns SVG instead of a raster image. It costs \$0.08 per image, for both operations.
>
> ```bash theme={null}
> curl https://external.api.recraft.ai/v1/images/replaceBackground \
>   -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "image_url": "https://cdn.prod.website-files.com/655727fe69827d9a402de12c/679b82f54ef9617939df9d8e_motorcycle--going-fast.png",
>     "prompt": "a desert highway at sunset",
>     "model": "recraftv3_vector"
>   }'
> ```

## Related

> [card] [Inpainting](https://www.recraft.ai/docs/api-reference/tools/inpainting.md)
>
> Regenerate any masked area, not only the background.

> [card] [Outpainting](https://www.recraft.ai/docs/api-reference/tools/outpainting.md)
>
> Extend an image beyond its borders.

> [card] [Recraft V3](https://www.recraft.ai/docs/api-reference/models/recraft-v3.md)
>
> The model line behind background operations.

> [card] [Pricing](https://www.recraft.ai/docs/api-reference/pricing.md)
>
> Prices of every model and tool.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.