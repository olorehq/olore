> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Examples

> Ready-to-run Recraft API examples for generation, styles, editing, vectorizing, upscaling, and prompt enhancement.

Generate AI images using cURL or Python and create your own styles programmatically.

## Generate image

### Fast, low-cost generation with Recraft V4.1 Flash

```bash generate_recraftv4_1_flash.sh theme={null}
curl https://external.api.recraft.ai/v1/images/generations \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "prompt": "portrait of a street musician at golden hour",
        "model": "recraftv4_1_flash",
        "response_format": "multipart"
    }' \
    --output response.multipart
```

```python generate_recraftv4_1_flash.py theme={null}
import json
import os

import requests
from requests_toolbelt.multipart import decoder

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'prompt': 'portrait of a street musician at golden hour',
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
        images[image_id.decode()] = part.content

for image in result['data']:
    with open(f"{image['image_id']}.png", 'wb') as f:
        f.write(images[image['image_id']])
```

### Raster generation with Recraft V4.1

```bash generate_recraftv4_1.sh theme={null}
curl https://external.api.recraft.ai/v1/images/generations \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "prompt": "two race cars on a track",
        "model": "recraftv4_1"
    }'
```

```python generate_recraftv4_1.py theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'prompt': 'two race cars on a track',
        'model': 'recraftv4_1',
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

```python generate_recraftv4_1_openai.py theme={null}
# pip install openai
import os

from openai import OpenAI

client = OpenAI(
    base_url='https://external.api.recraft.ai/v1',
    api_key=os.environ['RECRAFT_API_TOKEN'],
)

response = client.images.generate(
    prompt='two race cars on a track',
    model='recraftv4_1',
)
print(response.data[0].url)
```

### Vector generation with Recraft V4.1 Vector

```bash generate_recraftv4_1_vector.sh theme={null}
curl https://external.api.recraft.ai/v1/images/generations \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "prompt": "cat on a mat",
        "model": "recraftv4_1_vector"
    }'
```

```python generate_recraftv4_1_vector.py theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'prompt': 'cat on a mat',
        'model': 'recraftv4_1_vector',
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

```python generate_recraftv4_1_vector_openai.py theme={null}
# pip install openai
import os

from openai import OpenAI

client = OpenAI(
    base_url='https://external.api.recraft.ai/v1',
    api_key=os.environ['RECRAFT_API_TOKEN'],
)

response = client.images.generate(
    prompt='cat on a mat',
    model='recraftv4_1_vector',
)
print(response.data[0].url)
```

### Custom image size with Recraft V4.1 Pro

```bash generate_recraftv4_1_pro_with_size.sh theme={null}
curl https://external.api.recraft.ai/v1/images/generations \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "prompt": "red point siamese cat",
        "model": "recraftv4_1_pro",
        "size": "2560x1664"
    }'
```

```python generate_recraftv4_1_pro_with_size.py theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'prompt': 'red point siamese cat',
        'model': 'recraftv4_1_pro',
        'size': '2560x1664',
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

```python generate_recraftv4_1_pro_with_size_openai.py theme={null}
# pip install openai
import os

from openai import OpenAI

client = OpenAI(
    base_url='https://external.api.recraft.ai/v1',
    api_key=os.environ['RECRAFT_API_TOKEN'],
)

response = client.images.generate(
    prompt='red point siamese cat',
    model='recraftv4_1_pro',
    size='2560x1664',
)
print(response.data[0].url)
```

### Generation with style references (Recraft V4 Styles)

```bash generate_with_style_references.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/generations \
    -H "Content-Type: multipart/form-data" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -F "prompt=product hero shot, bottle on a table" \
    -F "model=recraftv4_styles" \
    -F "style_references=@reference.png"
```

```bash generate_with_style_references_json.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/generations \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "prompt": "product hero shot, bottle on a table",
        "model": "recraftv4_styles",
        "style_reference_urls": ["https://example.com/reference.png"]
    }'
```

```python generate_with_style_references.py theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    data={
        'prompt': 'product hero shot, bottle on a table',
        'model': 'recraftv4_styles',
    },
    files={
        'style_references': open('reference.png', 'rb'),
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
print(response.json()['style_id'])
```

```python generate_with_style_references_openai.py theme={null}
# pip install openai
import os

from openai import OpenAI

client = OpenAI(
    base_url='https://external.api.recraft.ai/v1',
    api_key=os.environ['RECRAFT_API_TOKEN'],
)

response = client.images.generate(
    prompt='product hero shot, bottle on a table',
    model='recraftv4_styles',
    extra_body={'style_reference_urls': ['https://example.com/reference.png']},
)
print(response.data[0].url)
print(response.style_id)
```

### Generation with a curated style (Recraft V3)

```bash generate_digital_illustration.sh theme={null}
curl https://external.api.recraft.ai/v1/images/generations \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "prompt": "a monster with lots of hands",
        "style": "Hand-drawn"
    }'
```

```python generate_digital_illustration.py theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'prompt': 'a monster with lots of hands',
        'style': 'Hand-drawn',
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

```python generate_digital_illustration_openai.py theme={null}
# pip install openai
import os

from openai import OpenAI

client = OpenAI(
    base_url='https://external.api.recraft.ai/v1',
    api_key=os.environ['RECRAFT_API_TOKEN'],
)

response = client.images.generate(
    prompt='a monster with lots of hands',
    extra_body={'style': 'Hand-drawn'},
)
print(response.data[0].url)
```

## Create style

### Style creation and generation with Recraft V4 Styles

```bash create_v4_style_and_generate.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/styles \
    -H "Content-Type: multipart/form-data" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -F "model=recraftv4_styles" \
    -F "file1=@reference-1.png"

# response: {"id":"229b2a75-05e4-4580-85f9-b47ee521a00d"}

curl https://external.api.recraft.ai/v1/images/generations \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "prompt": "product hero shot, bottle on a table",
        "model": "recraftv4_styles",
        "style_id": "229b2a75-05e4-4580-85f9-b47ee521a00d"
    }'
```

```bash create_v4_style_and_generate_json.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/styles \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "model": "recraftv4_styles",
        "image_urls": ["https://example.com/reference-1.png"]
    }'

# response: {"id":"229b2a75-05e4-4580-85f9-b47ee521a00d"}

curl https://external.api.recraft.ai/v1/images/generations \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "prompt": "product hero shot, bottle on a table",
        "model": "recraftv4_styles",
        "style_id": "229b2a75-05e4-4580-85f9-b47ee521a00d"
    }'
```

```python create_v4_style_and_generate.py theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/styles',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    data={
        'model': 'recraftv4_styles',
    },
    files={
        'file1': open('reference-1.png', 'rb'),
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
style_id = response.json()['id']
print(style_id)

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'prompt': 'product hero shot, bottle on a table',
        'model': 'recraftv4_styles',
        'style_id': style_id,
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

```python create_v4_style_and_generate_openai.py theme={null}
# pip install openai
import os

from openai import OpenAI

client = OpenAI(
    base_url='https://external.api.recraft.ai/v1',
    api_key=os.environ['RECRAFT_API_TOKEN'],
)

style = client.post(
    path='/styles',
    cast_to=object,
    body={
        'model': 'recraftv4_styles',
        'image_urls': ['https://example.com/reference-1.png'],
    },
)
print(style['id'])

response = client.images.generate(
    prompt='product hero shot, bottle on a table',
    model='recraftv4_styles',
    extra_body={'style_id': style['id']},
)
print(response.data[0].url)
```

### Style creation and generation with Recraft V3

```bash create_style_and_generate.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/styles \
    -H "Content-Type: multipart/form-data" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -F "style=digital_illustration" \
    -F "model=recraftv3" \
    -F "file=@image.png"

# response: {"id":"095b9f9d-f06f-4b4e-9bb2-d4f823203427"}

curl https://external.api.recraft.ai/v1/images/generations \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "prompt": "wood potato masher",
        "model": "recraftv3",
        "style_id": "095b9f9d-f06f-4b4e-9bb2-d4f823203427"
    }'
```

```bash create_style_and_generate_json.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/styles \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "style": "digital_illustration",
        "model": "recraftv3",
        "image_urls": ["https://example.com/image.png"]
    }'

# response: {"id":"095b9f9d-f06f-4b4e-9bb2-d4f823203427"}

curl https://external.api.recraft.ai/v1/images/generations \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "prompt": "wood potato masher",
        "model": "recraftv3",
        "style_id": "095b9f9d-f06f-4b4e-9bb2-d4f823203427"
    }'
```

```python create_style_and_generate.py theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/styles',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    data={
        'style': 'digital_illustration',
        'model': 'recraftv3',
    },
    files={
        'file': open('image.png', 'rb'),
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
style_id = response.json()['id']
print(style_id)

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'prompt': 'wood potato masher',
        'model': 'recraftv3',
        'style_id': style_id,
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

```python create_style_and_generate_openai.py theme={null}
# pip install openai
import os

from openai import OpenAI

client = OpenAI(
    base_url='https://external.api.recraft.ai/v1',
    api_key=os.environ['RECRAFT_API_TOKEN'],
)

style = client.post(
    path='/styles',
    cast_to=object,
    body={
        'style': 'digital_illustration',
        'model': 'recraftv3',
        'image_urls': ['https://example.com/image.png'],
    },
)
print(style['id'])

response = client.images.generate(
    prompt='wood potato masher',
    model='recraftv3',
    extra_body={'style_id': style['id']},
)
print(response.data[0].url)
```

## Image to image

### Image to image with a curated style (Recraft V3)

```bash image_to_image.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/imageToImage \
    -H "Content-Type: multipart/form-data" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -F "image=@image.png" \
    -F "prompt=winter" \
    -F "strength=0.2" \
    -F "style=Illustration"
```

```bash image_to_image_json.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/imageToImage \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "image_url": "https://example.com/image.png",
        "prompt": "winter",
        "strength": 0.2,
        "style": "Illustration"
    }'
```

```python image_to_image.py theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/imageToImage',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    data={
        'prompt': 'winter',
        'strength': 0.2,
        'style': 'Illustration',
    },
    files={
        'image': open('image.png', 'rb'),
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

```python image_to_image_openai.py theme={null}
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
        'image_url': 'https://example.com/image.png',
        'prompt': 'winter',
        'strength': 0.2,
        'style': 'Illustration',
    },
)
print(response['data'][0]['url'])
```

## Image inpainting

### Inpainting with a curated style (Recraft V3)

```bash inpaint.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/inpaint \
    -H "Content-Type: multipart/form-data" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -F "prompt=moon" \
    -F "style=Enterprise" \
    -F "image=@image.png" -F "mask=@mask.png"
```

```bash inpaint_json.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/inpaint \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "prompt": "moon",
        "style": "Enterprise",
        "image_url": "https://example.com/image.png",
        "mask_url": "https://example.com/mask.png"
    }'
```

```python inpaint.py theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/inpaint',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    data={
        'style': 'Enterprise',
        'prompt': 'moon',
    },
    files={
        'image': open('image.png', 'rb'),
        'mask': open('mask.png', 'rb'),
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

```python inpaint_openai.py theme={null}
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
        'prompt': 'moon',
        'style': 'Enterprise',
        'image_url': 'https://example.com/image.png',
        'mask_url': 'https://example.com/mask.png',
    },
)
print(response['data'][0]['url'])
```

## Image outpainting

### Outpainting to a target aspect ratio

```bash outpaint.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/outpaint \
    -H "Content-Type: multipart/form-data" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -F "prompt=a mountain landscape" \
    -F "size=16:9" \
    -F "zoom_out_percentage=25.0" \
    -F "image=@image.png"
```

```bash outpaint_json.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/outpaint \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "prompt": "a mountain landscape",
        "size": "16:9",
        "zoom_out_percentage": 25.0,
        "image_url": "https://example.com/image.png"
    }'
```

```python outpaint.py theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/outpaint',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    data={
        'prompt': 'a mountain landscape',
        'size': '16:9',
        'zoom_out_percentage': 25.0,
    },
    files={
        'image': open('image.png', 'rb'),
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

```python outpaint_openai.py theme={null}
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
        'prompt': 'a mountain landscape',
        'size': '16:9',
        'zoom_out_percentage': 25.0,
        'image_url': 'https://example.com/image.png',
    },
)
print(response['data'][0]['url'])
```

### Outpainting with per-side margins

```bash outpaint_expand.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/outpaint \
    -H "Content-Type: multipart/form-data" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -F "prompt=a mountain landscape" \
    -F "expand_left=256" \
    -F "expand_right=256" \
    -F "expand_top=128" \
    -F "expand_bottom=128" \
    -F "image=@image.png"
```

```bash outpaint_expand_json.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/outpaint \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "prompt": "a mountain landscape",
        "expand_left": 256,
        "expand_right": 256,
        "expand_top": 128,
        "expand_bottom": 128,
        "image_url": "https://example.com/image.png"
    }'
```

```python outpaint_expand.py theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/outpaint',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    data={
        'prompt': 'a mountain landscape',
        'expand_left': 256,
        'expand_right': 256,
        'expand_top': 128,
        'expand_bottom': 128,
    },
    files={
        'image': open('image.png', 'rb'),
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

```python outpaint_expand_openai.py theme={null}
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
        'prompt': 'a mountain landscape',
        'expand_left': 256,
        'expand_right': 256,
        'expand_top': 128,
        'expand_bottom': 128,
        'image_url': 'https://example.com/image.png',
    },
)
print(response['data'][0]['url'])
```

## Vectorize image

### Vectorization of a PNG image

```bash vectorize.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/vectorize \
    -H "Content-Type: multipart/form-data" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -F "file=@image.png"
```

```bash vectorize_json.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/vectorize \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "image_url": "https://example.com/image.png"
    }'
```

```python vectorize.py theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/vectorize',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    files={
        'file': open('image.png', 'rb'),
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['image']['url'])
```

```python vectorize_openai.py theme={null}
# pip install openai
import os

from openai import OpenAI

client = OpenAI(
    base_url='https://external.api.recraft.ai/v1',
    api_key=os.environ['RECRAFT_API_TOKEN'],
)

response = client.post(
    path='/images/vectorize',
    cast_to=object,
    body={
        'image_url': 'https://example.com/image.png',
    },
)
print(response['image']['url'])
```

## Remove background

### Background removal with a Base64 JSON response

```bash remove_background_b64.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/removeBackground \
    -H "Content-Type: multipart/form-data" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -F "response_format=b64_json" \
    -F "file=@image.png"
```

```bash remove_background_b64_json.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/removeBackground \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "response_format": "b64_json",
        "image_url": "https://example.com/image.png"
    }'
```

```python remove_background_b64.py theme={null}
import base64
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/removeBackground',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    data={
        'response_format': 'b64_json',
    },
    files={
        'file': open('image.png', 'rb'),
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
with open('no_background.webp', 'wb') as f:
    f.write(base64.b64decode(response.json()['image']['b64_json']))
```

```python remove_background_b64_openai.py theme={null}
# pip install openai
import base64
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
        'response_format': 'b64_json',
        'image_url': 'https://example.com/image.png',
    },
)
with open('no_background.webp', 'wb') as f:
    f.write(base64.b64decode(response['image']['b64_json']))
```

## Crisp upscale

### Crisp upscale with a Base64 JSON response

```bash crisp_upscale_b64.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/crispUpscale \
    -H "Content-Type: multipart/form-data" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -F "response_format=b64_json" \
    -F "file=@image.png"
```

```bash crisp_upscale_b64_json.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/crispUpscale \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "response_format": "b64_json",
        "image_url": "https://example.com/image.png"
    }'
```

```python crisp_upscale_b64.py theme={null}
import base64
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/crispUpscale',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    data={
        'response_format': 'b64_json',
    },
    files={
        'file': open('image.png', 'rb'),
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
with open('upscaled.webp', 'wb') as f:
    f.write(base64.b64decode(response.json()['image']['b64_json']))
```

```python crisp_upscale_b64_openai.py theme={null}
# pip install openai
import base64
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
        'response_format': 'b64_json',
        'image_url': 'https://example.com/image.png',
    },
)
with open('upscaled.webp', 'wb') as f:
    f.write(base64.b64decode(response['image']['b64_json']))
```

## Creative upscale

### Creative upscale of a PNG image

```bash creative_upscale.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/creativeUpscale \
    -H "Content-Type: multipart/form-data" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -F "file=@image.png"
```

```bash creative_upscale_json.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/creativeUpscale \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "image_url": "https://example.com/image.png"
    }'
```

```python creative_upscale.py theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/creativeUpscale',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    files={
        'file': open('image.png', 'rb'),
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['image']['url'])
```

```python creative_upscale_openai.py theme={null}
# pip install openai
import os

from openai import OpenAI

client = OpenAI(
    base_url='https://external.api.recraft.ai/v1',
    api_key=os.environ['RECRAFT_API_TOKEN'],
)

response = client.post(
    path='/images/creativeUpscale',
    cast_to=object,
    body={
        'image_url': 'https://example.com/image.png',
    },
)
print(response['image']['url'])
```

## Enhance details

### Subtle enhancement of a PNG image

```bash enhance_details.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/enhance \
    -H "Content-Type: multipart/form-data" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -F "file=@image.png" \
    -F "refinement=subtle"
```

```bash enhance_details_json.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/enhance \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "image_url": "https://example.com/image.png",
        "refinement": "subtle"
    }'
```

```python enhance_details.py theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/enhance',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    data={
        'refinement': 'subtle',
    },
    files={
        'file': open('image.png', 'rb'),
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['image']['url'])
```

```python enhance_details_openai.py theme={null}
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
        'image_url': 'https://example.com/image.png',
        'refinement': 'subtle',
    },
)
print(response['image']['url'])
```

## Remix image

### Image variation with WEBP output

```bash variate_image.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/variateImage \
    -H "Content-Type: multipart/form-data" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -F "response_format=url" \
    -F "size=1024x1024" \
    -F "n=1" \
    -F "random_seed=13191922" \
    -F "image_format=webp" \
    -F "image=@image.png"
```

```bash variate_image_json.sh theme={null}
curl -X POST https://external.api.recraft.ai/v1/images/variateImage \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "response_format": "url",
        "size": "1024x1024",
        "n": 1,
        "random_seed": 13191922,
        "image_format": "webp",
        "image_url": "https://example.com/image.png"
    }'
```

```python variate_image.py theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/variateImage',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    data={
        'size': '1024x1024',
        'n': 1,
        'response_format': 'url',
        'random_seed': 13191922,
        'image_format': 'webp',
    },
    files={
        'image': open('image.png', 'rb'),
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

```python variate_image_openai.py theme={null}
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
        'response_format': 'url',
        'size': '1024x1024',
        'n': 1,
        'random_seed': 13191922,
        'image_format': 'webp',
        'image_url': 'https://example.com/image.png',
    },
)
print(response['data'][0]['url'])
```

## Enhance prompt

### Enhance a prompt

```bash enhance_prompt.sh theme={null}
curl https://external.api.recraft.ai/v1/prompts/enhance \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
    -d '{
        "prompt": "race car on a track"
    }'
```

```python enhance_prompt.py theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/prompts/enhance',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={
        'prompt': 'race car on a track',
    },
)
if not response.ok:
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['enhanced_prompt'])
```

```python enhance_prompt_openai.py theme={null}
# pip install openai
import os

from openai import OpenAI

client = OpenAI(
    base_url='https://external.api.recraft.ai/v1',
    api_key=os.environ['RECRAFT_API_TOKEN'],
)

response = client.post(
    path='/prompts/enhance',
    cast_to=object,
    body={
        'prompt': 'race car on a track',
    },
)
print(response['enhanced_prompt'])
```


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.