\> ## Documentation Index
\> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
\> Use this file to discover all available pages before exploring further.

\# Examples

Generate AI images using cURL or Python and create your own styles programmatically.

\### Generate a raster image using Recraft V4 model

 \`\`\`bash generate\_recraftv4.sh theme={null}
 curl https://external.api.recraft.ai/v1/images/generations \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer $RECRAFT\_API\_TOKEN" \
 -d '{
 "prompt": "two race cars on a track",
 "model": "recraftv4"
 }'
 \`\`\`

 \`\`\`python generate\_recraftv4.py theme={null}
 from openai import OpenAI

 client = OpenAI(base\_url='https://external.api.recraft.ai/v1', api\_key=\_RECRAFT\_API\_TOKEN)

 response = client.images.generate(
 prompt='two race cars on a track',
 model='recraftv4'
 )
 print(response.data\[0\].url)
 \`\`\`

\### Generate a vector image using Recraft V4 Vector model

 \`\`\`bash generate\_recraftv4\_vector.sh theme={null}
 curl https://external.api.recraft.ai/v1/images/generations \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer $RECRAFT\_API\_TOKEN" \
 -d '{
 "prompt": "cat on a mat",
 "model": "recraftv4\_vector"
 }'
 \`\`\`

 \`\`\`python generate\_recraftv4\_vector.py theme={null}
 from openai import OpenAI

 client = OpenAI(base\_url='https://external.api.recraft.ai/v1', api\_key=\_RECRAFT\_API\_TOKEN)

 response = client.images.generate(
 prompt='cat on a mat',
 model='recraftv4\_vector'
 )
 print(response.data\[0\].url)
 \`\`\`

\### Generate a realistic image by Recraft V3 with specific size

 \`\`\`bash generate\_with\_size.sh theme={null}
 curl https://external.api.recraft.ai/v1/images/generations \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer $RECRAFT\_API\_TOKEN" \
 -d '{
 "prompt": "red point siamese cat",
 "model": "recraftv3",
 "style": "Photorealism",
 "size": "1280x1024"
 }'
 \`\`\`

 \`\`\`python generate\_with\_size.py theme={null}
 from openai import OpenAI

 client = OpenAI(base\_url='https://external.api.recraft.ai/v1', api\_key=\_RECRAFT\_API\_TOKEN)

 response = client.images.generate(
 prompt='red point siamese cat',
 model='recraftv3',
 style='Photorealism',
 size='1280x1024',
 )
 print(response.data\[0\].url)
 \`\`\`

\### Generate a digital illustration by Recraft V3 with specific style

 \`\`\`bash generate\_digital\_illustration.sh theme={null}
 curl https://external.api.recraft.ai/v1/images/generations \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer $RECRAFT\_API\_TOKEN" \
 -d '{
 "prompt": "a monster with lots of hands",
 "style": "Hand-drawn"
 }'
 \`\`\`

 \`\`\`python generate\_digital\_illustration.py theme={null}
 from openai import OpenAI

 client = OpenAI(base\_url='https://external.api.recraft.ai/v1', api\_key=\_RECRAFT\_API\_TOKEN)

 response = client.images.generate(
 prompt='a monster with lots of hands',
 style='Hand-drawn',
 )
 print(response.data\[0\].url)
 \`\`\`

\### Image to image by Recraft V3 with digital illustration style

 \`\`\`bash image\_to\_image.sh theme={null}
 curl -X POST https://external.api.recraft.ai/v1/images/imageToImage \
 -H "Content-Type: multipart/form-data" \
 -H "Authorization: Bearer $RECRAFT\_API\_TOKEN" \
 -F "image=@image.png" \
 -F "prompt=winter" \
 -F "strength=0.2" \
 -F "style=Illustration"
 \`\`\`

 \`\`\`python image\_to\_image.py theme={null}
 from openai import OpenAI

 client = OpenAI(base\_url='https://external.api.recraft.ai/v1', api\_key=\_RECRAFT\_API\_TOKEN)

 response = client.post(
 path='/images/imageToImage',
 cast\_to=object,
 options={'headers': {'Content-Type': 'multipart/form-data'}},
 files={
 'image': open('image.png', 'rb'),
 },
 body={
 'prompt': 'winter',
 'strength': 0.2,
 'style': 'Illustration',
 },
 )
 print(response\['data'\]\[0\]\['url'\])
 \`\`\`

\### Inpaint an image by Recraft V3 with style Enterprise

 \`\`\`bash inpaint.sh theme={null}
 curl -X POST https://external.api.recraft.ai/v1/images/inpaint \
 -H "Content-Type: multipart/form-data" \
 -H "Authorization: Bearer $RECRAFT\_API\_TOKEN" \
 -F "prompt=moon" \
 -F "style=Enterprise" \
 -F "image=@image.png" -F "mask=@mask.png"
 \`\`\`

 \`\`\`python inpaint.py theme={null}
 from openai import OpenAI

 client = OpenAI(base\_url='https://external.api.recraft.ai/v1', api\_key=\_RECRAFT\_API\_TOKEN)

 response = client.post(
 path='/images/inpaint',
 cast\_to=object,
 options={'headers': {'Content-Type': 'multipart/form-data'}},
 files={
 'image': open('image.png', 'rb'),
 'mask': open('mask.png', 'rb'),
 },
 body={
 'style': 'Enterprise',
 'prompt': 'moon',
 },
 )
 print(response\['data'\]\[0\]\['url'\])
 \`\`\`

\### Create own Recraft V3 style by uploading reference images and use them for generation

 \`\`\`bash create\_style\_and\_generate.sh theme={null}
 curl -X POST https://external.api.recraft.ai/v1/styles \
 -H "Content-Type: multipart/form-data" \
 -H "Authorization: Bearer $RECRAFT\_API\_TOKEN" \
 -F "style=digital\_illustration" \
 -F "file=@image.png"

 # response: {"id":"095b9f9d-f06f-4b4e-9bb2-d4f823203427"}

 curl https://external.api.recraft.ai/v1/images/generations \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer $RECRAFT\_API\_TOKEN" \
 -d '{
 "prompt": "wood potato masher",
 "style\_id": "095b9f9d-f06f-4b4e-9bb2-d4f823203427"
 }'
 \`\`\`

 \`\`\`python create\_style\_and\_generate.py theme={null}
 from openai import OpenAI

 client = OpenAI(base\_url='https://external.api.recraft.ai/v1', api\_key=\_RECRAFT\_API\_TOKEN)

 style = client.post(
 path='/styles',
 cast\_to=object,
 options={'headers': {'Content-Type': 'multipart/form-data'}},
 body={'style': 'digital\_illustration'},
 files={'file': open('image.png', 'rb')},
 )
 print(style\['id'\])

 response = client.images.generate(
 prompt='wood potato masher',
 extra\_body={'style\_id': style\['id'\]},
 )
 print(response.data\[0\].url)
 \`\`\`

\### Vectorize an image in PNG format

 \`\`\`bash vectorize.sh theme={null}
 curl -X POST https://external.api.recraft.ai/v1/images/vectorize \
 -H "Content-Type: multipart/form-data" \
 -H "Authorization: Bearer $RECRAFT\_API\_TOKEN" \
 -F "file=@image.png"
 \`\`\`

 \`\`\`python vectorize.py theme={null}
 from openai import OpenAI

 client = OpenAI(base\_url='https://external.api.recraft.ai/v1', api\_key=\_RECRAFT\_API\_TOKEN)

 response = client.post(
 path='/images/vectorize',
 cast\_to=object,
 options={'headers': {'Content-Type': 'multipart/form-data'}},
 files={'file': open('image.png', 'rb')},
 )
 print(response\['image'\]\['url'\])
 \`\`\`

\### Remove background from a PNG image, get the result in B64 JSON

 \`\`\`bash remove\_background\_b64.sh theme={null}
 curl -X POST https://external.api.recraft.ai/v1/images/removeBackground \
 -H "Content-Type: multipart/form-data" \
 -H "Authorization: Bearer $RECRAFT\_API\_TOKEN" \
 -F "response\_format=b64\_json" \
 -F "file=@image.png"
 \`\`\`

 \`\`\`python remove\_background\_b64.py theme={null}
 from openai import OpenAI

 client = OpenAI(base\_url='https://external.api.recraft.ai/v1', api\_key=\_RECRAFT\_API\_TOKEN)

 response = client.post(
 path='/images/removeBackground',
 cast\_to=object,
 options={'headers': {'Content-Type': 'multipart/form-data'}},
 body={'response\_format': 'b64\_json'},
 files={'file': open('image.png', 'rb')},
 )
 print(response\['image'\]\['url'\])
 \`\`\`

\### Run crisp upscale tool for a PNG image, get the result in B64 JSON

 \`\`\`bash crisp\_upscale\_b64.sh theme={null}
 curl -X POST https://external.api.recraft.ai/v1/images/crispUpscale \
 -H "Content-Type: multipart/form-data" \
 -H "Authorization: Bearer $RECRAFT\_API\_TOKEN" \
 -F "response\_format=b64\_json" \
 -F "file=@image.png"
 \`\`\`

 \`\`\`python crisp\_upscale\_b64.py theme={null}
 from openai import OpenAI

 client = OpenAI(base\_url='https://external.api.recraft.ai/v1', api\_key=\_RECRAFT\_API\_TOKEN)

 response = client.post(
 path='/images/crispUpscale',
 cast\_to=object,
 options={'headers': {'Content-Type': 'multipart/form-data'}},
 body={'response\_format': 'b64\_json'},
 files={'file': open('image.png', 'rb')},
 )
 print(response\['image'\]\['url'\])
 \`\`\`

\### Run creative upscale tool for a PNG image

 \`\`\`bash creative\_upscale.sh theme={null}
 curl -X POST https://external.api.recraft.ai/v1/images/creativeUpscale \
 -H "Content-Type: multipart/form-data" \
 -H "Authorization: Bearer $RECRAFT\_API\_TOKEN" \
 -F "file=@image.png"
 \`\`\`

 \`\`\`python creative\_upscale.py theme={null}
 from openai import OpenAI

 client = OpenAI(base\_url='https://external.api.recraft.ai/v1', api\_key=\_RECRAFT\_API\_TOKEN)

 response = client.post(
 path='/images/creativeUpscale',
 cast\_to=object,
 options={'headers': {'Content-Type': 'multipart/form-data'}},
 files={'file': open('image.png', 'rb')},
 )
 print(response\['image'\]\['url'\])
 \`\`\`

\### Variate PNG image, get the result in WEBP format

 \`\`\`bash variate\_image.sh theme={null}
 curl -X POST https://external.api.recraft.ai/v1/images/variateImage \
 -H "Content-Type: multipart/form-data" \
 -H "Authorization: Bearer $RECRAFT\_API\_TOKEN" \
 -F "response\_format=url" \
 -F "size=1024x1024" \
 -F "n=1" \
 -F "seed=13191922" \
 -F "image\_format=webp" \
 -F "file=@image.png"
 \`\`\`

 \`\`\`python variate\_image.py theme={null}
 from openai import OpenAI

 client = OpenAI(base\_url='https://external.api.recraft.ai/v1', api\_key=\_RECRAFT\_API\_TOKEN)

 response = client.post(
 path='/images/variateImage',
 cast\_to=object,
 options={'headers': {'Content-Type': 'multipart/form-data'}},
 body={"size": "1024x1024", "n": 1, "response\_format": "url", "seed": 13191922, "image\_format": "webp"},
 files={'file': open('image.png', 'rb')},
 )
 print(response\['data'\]\[0\]\["url"\])
 \`\`\`

\### Explore images

 \`\`\`bash explore.sh theme={null}
 curl https://external.api.recraft.ai/v1/images/explore \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer $RECRAFT\_API\_TOKEN" \
 -d '{
 "prompt": "race car on a track",
 "model": "recraftv4"
 }'
 \`\`\`

 \`\`\`python explore.py theme={null}
 from openai import OpenAI

 client = OpenAI(base\_url='https://external.api.recraft.ai/v1', api\_key=\_RECRAFT\_API\_TOKEN)

 response = client.post(
 path='/images/explore',
 cast\_to=object,
 body={
 'prompt': 'race car on a track',
 'model': 'recraftv4',
 },
 )
 print(response\['data'\]\[0\]\['url'\])
 \`\`\`

\### Explore similar images

 \`\`\`bash explore\_similar.sh theme={null}
 curl https://external.api.recraft.ai/v1/images/explore/similar \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer $RECRAFT\_API\_TOKEN" \
 -d '{
 "source\_image\_id": "c18a1988-45e7-4c00-82c4-4ad7d3dbce3a",
 "similarity": 3
 }'
 \`\`\`

 \`\`\`python explore\_similar.py theme={null}
 from openai import OpenAI

 client = OpenAI(base\_url='https://external.api.recraft.ai/v1', api\_key=\_RECRAFT\_API\_TOKEN)

 response = client.post(
 path='/images/explore/similar',
 cast\_to=object,
 body={
 'source\_image\_id': 'c18a1988-45e7-4c00-82c4-4ad7d3dbce3a',
 'similarity': 3,
 },
 )
 print(response\['data'\]\[0\]\['url'\])
 \`\`\`

Built with \[Mintlify\](https://mintlify.com).