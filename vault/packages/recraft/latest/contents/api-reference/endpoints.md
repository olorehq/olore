\> ## Documentation Index
\> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
\> Use this file to discover all available pages before exploring further.

\# Endpoints

Dig into the details of the Recraft API endpoints.

\## Authentication

We use \[Bearer\](https://swagger.io/docs/specification/authentication/bearer-authentication/) API tokens for authentication. To access your API key, log in to Recraft and \[enter your profile\](https://app.recraft.ai/profile/api). All requests should include your API key in an Authorization HTTP header as follows:\
\
\`Authorization: Bearer RECRAFT\_API\_TOKEN\`

\### OpenAI Python library

Future examples will be shown using OpenAI Python library, for example, once installed, you can use the following code to be authenticated:

\`\`\`python theme={null}
from openai import OpenAI

client = OpenAI(
 base\_url='https://external.api.recraft.ai/v1',
 api\_key=,
)
\`\`\`

Since the Recraft API follows REST principles, you can interact with it using any standard HTTP client such as \`curl\`, as well as your preferred programming language or library.

\## Generate image

Creates an image given a prompt.

\`\`\`javascript theme={null}
POST https://external.api.recraft.ai/v1/images/generations
\`\`\`

\### Example

\`\`\`python theme={null}
response = client.images.generate(
 prompt='race car on a track',
)
print(response.data\[0\].url)
\`\`\`

\### Parameters

\| Parameter \| Type \| Description \| Compatibility \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| prompt (required) \| string \| A text description of the desired image(s). \| Maximum prompt length depends on model, refer to \[Appendix\](/api-reference/appendix#maximum-prompt-length) \|
\| n \| integer or null, default is 1 \| The number of images to generate, must be between 1 and 6. \| All models \|
\| model \| string or null, default is \`recraftv4\` \| The model to use for image generation. \| Must be one of: \`recraftv4\`, \`recraftv4\_vector\`, \`recraftv4\_pro\`, \`recraftv4\_pro\_vector\`, \`recraftv3\`, \`recraftv3\_vector\`, \`recraftv2\`, \`recraftv2\_vector\` \|
\| style \| string or null \| The style of the generated images, refer to \[Styles\](/api-reference/styles). \| V2 / V3 styles \|
\| style\\\_id \| UUID or null \| Use a style as visual reference, refer to \[Styles\](/api-reference/styles). \| V2 / V3 styles \|
\| size \| string or null, default is \`1:1\` \| The size of the generated images in \`WxH\` or \`w:h\` format. \| Depends on model, supported values are published in \[Appendix\](/api-reference/appendix#list-of-supported-image-sizes) \|
\| negative\\\_prompt \| string or null \| A text description of undesired elements on an image. \| V2 / V3 models \|
\| response\\\_format \| string or null, default is \`url\` \| The format in which the generated images are returned. Must be one of \`url\` or \`b64\_json\`. \| All models \|
\| text\\\_layout \| Array of objects or null \| Refer to \[Text Layout\](#text-layout). \| V3 models only \|
\| controls \| object or null \| A set of custom parameters to tweak generation process, refer to \[Controls\](#controls). \| All models, partially supported for V4 \|

\*\*Hint:\*\* if OpenAI Python Library is used, non-standard parameters can be passed using the \`extra\_body\` argument. For example:

\`\`\`python theme={null}
response = client.images.generate(
 prompt='race car on a track',
 extra\_body={
 'style\_id': style\_id,
 'controls': {
 ...
 }
 }
)
print(response.data\[0\].url)
\`\`\`

\## Create style

Upload a set of images to create a style reference.

\`\`\`javascript theme={null}
POST https://external.api.recraft.ai/v1/styles
\`\`\`

\### Example

\`\`\`python theme={null}
response = client.post(
 path='/styles',
 cast\_to=object,
 options={'headers': {'Content-Type': 'multipart/form-data'}},
 body={'style': 'digital\_illustration'},
 files={'file1': open('image.png', 'rb')},
)
print(response\['id'\])
\`\`\`

\### Output

\`\`\`javascript theme={null}
{"id": "229b2a75-05e4-4580-85f9-b47ee521a00d"}
\`\`\`

\### Request body

Upload a set of images to create a style reference.

\| Parameter \| Type \| Description \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| style (required) \| string \| The base style of the generated images, should be one of: \`any\`, \`realistic\_image\`, \`digital\_illustration\`, \`vector\_illustration\`, \`icon\` \|
\| files (required) \| files \| Images in PNG, JPG, or WEBP format for use as style references. The max number of images is 5. Total size of all images is limited to 5 MB. \|

\## Image to image

Image-to-image operation tool allows you to create images similar to a given image, preserving certain aspects like composition, color, or subject identity while altering others based on the prompt. This can be used to create variations of the image or images that have similar composition to existing image. Use prompt to describe the new image and strength to define similarity level.

\*\*\*Note\*\*\*: This operation is available with Recraft V3, Recraft V3 Vector models only.

\`\`\`javascript theme={null}
POST https://external.api.recraft.ai/v1/images/imageToImage
\`\`\`

\### Example

\`\`\`python theme={null}
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
 },
)
print(response\['data'\]\[0\]\['url'\])
\`\`\`

\### Parameters

\| Parameter \| Type \| Description \| Compatibility \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| image (required) \| file \| An image to modify, must be less than 5 MB in size, have resolution less than 16 MP, and max dimension less than 4096 pixels. \| \|
\| prompt (required) \| string \| A text description of areas to change. \| refer to \[Appendix\](/api-reference/appendix#maximum-prompt-length) \|
\| strength (required) \| float \| Defines the difference with the original image, should lie in \`\[0, 1\]\`, where \`0\` means almost identical, and \`1\` means minimal similarity. \| \|
\| n \| integer or null, default is 1 \| The number of images to generate, must be between 1 and 6. \| \|
\| model \| string or null, default is \`recraftv3\` \| The model to use for image generation. \| Must be one of: \`recraftv3\`, \`recraftv3\_vector\` \|
\| style \| string or null \| The style of the generated images, refer to \[Styles\](/api-reference/styles). \| V3 styles only \|
\| style\\\_id \| UUID or null \| Use a style as visual reference, refer to \[Styles\](/api-reference/styles). \| V3 styles only \|
\| response\\\_format \| string or null, default is \`url\` \| The format in which the generated images are returned. Must be one of \`url\` or \`b64\_json\`. \| \|
\| negative\\\_prompt \| string or null \| A text description of undesired elements on an image. \| \|
\| text\\\_layout \| Array of objects or null \| Refer to \[Text Layout\](#text-layout). \| \|
\| controls \| object or null \| A set of custom parameters to tweak generation process, refer to \[Controls\](#controls). \| \|

\## Image inpainting

Inpainting lets you regenerate specific parts of an image while keeping the rest intact. This is useful for correcting details, replacing elements, or making creative changes without starting from scratch. It uses a mask to identify the areas to be filled in, where white pixels represent the regions to inpaint, and black pixels indicate the areas to keep intact, i.e. the white pixels are filled based on the input provided in the prompt.

\*\*\*Note\*\*\*: This operation is available with Recraft V3, Recraft V3 Vector models only.

\`\`\`javascript theme={null}
POST https://external.api.recraft.ai/v1/images/inpaint
\`\`\`

\### Example

\`\`\`python theme={null}
response = client.post(
 path='/images/inpaint',
 cast\_to=object,
 options={'headers': {'Content-Type': 'multipart/form-data'}},
 files={
 'image': open('image.png', 'rb'),
 'mask': open('mask.png', 'rb'),
 },
 body={
 'prompt': 'winter',
 },
)
print(response\['data'\]\[0\]\['url'\])
\`\`\`

\### Parameters

Body of a request should contain an image file and a mask in PNG, JPG or WEBP format and parameters passed as content type \`'multipart/form-data'\`. The image must be no more than 5 MB in size, have resolution no more than 16 MP, max dimension no more than 4096 pixels and min dimension no less than 256 pixels.

\| Parameter \| Type \| Description \| Compatibility \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| image (required) \| file \| An image to modify, must be less than 5 MB in size, have resolution less than 16 MP, and max dimension less than 4096 pixels. \| \|
\| mask (required) \| file \| An image encoded in \*\*grayscale color mode\*\*, used to define the specific regions of an image that need modification. The white pixels represent the parts of the image that will be inpainted, while black pixels indicate the parts of the image that will remain unchanged. Should have exactly the same size as the image. Each pixel of the image should be either pure black (value \`0\`) or pure white (value \`255\`). \| \|
\| prompt (required) \| string \| A text description of areas to change. \| refer to \[Appendix\](/api-reference/appendix#maximum-prompt-length) \|
\| n \| integer or null, default is 1 \| The number of images to generate, must be between 1 and 6. \| \|
\| model \| string or null, default is \`recraftv3\` \| The model to use for image generation. \| Must be one of: \`recraftv3\`, \`recraftv3\_vector\` \|
\| style \| string or null \| The style of the generated images, refer to \[Styles\](/api-reference/styles). \| V3 styles only \|
\| style\\\_id \| UUID or null \| Use a style as visual reference, refer to \[Styles\](/api-reference/styles). \| V3 styles only \|
\| response\\\_format \| string or null, default is \`url\` \| The format in which the generated images are returned. Must be one of \`url\` or \`b64\_json\`. \| \|
\| negative\\\_prompt \| string or null \| A text description of undesired elements on an image. \| \|
\| text\\\_layout \| Array of objects or null \| Refer to \[Text Layout\](#text-layout). \| \|
\| controls \| object or null \| A set of custom parameters to tweak generation process, refer to \[Controls\](#controls). \| \|

\## Replace background

Replace Background operation detects background of an image and modifies it according to given prompt.

\*\*\*Note\*\*\*: This operation is available with Recraft V3, Recraft V3 Vector models only.

\`\`\`javascript theme={null}
POST https://external.api.recraft.ai/v1/images/replaceBackground
\`\`\`

\### Example

\`\`\`python theme={null}
response = client.post(
 path='/images/replaceBackground',
 cast\_to=object,
 options={'headers': {'Content-Type': 'multipart/form-data'}},
 files={
 'image': open('image.png', 'rb'),
 },
 body={
 'prompt': 'winter',
 },
)
print(response\['data'\]\[0\]\['url'\])
\`\`\`

\### Parameters

Body of a request should contain an image file in PNG, JPG or WEBP format and parameters passed as content type \`'multipart/form-data'\`. The image must be no more than 5 MB in size, have resolution no more than 16 MP, max dimension no more than 4096 pixels and min dimension no less than 256 pixels.

\| Parameter \| Type \| Description \| Compatibility \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| image (required) \| file \| An image to modify, must be less than 5 MB in size, have resolution less than 16 MP, and max dimension less than 4096 pixels. \| \|
\| prompt (required) \| string \| A text description of areas to change. \| refer to \[Appendix\](/api-reference/appendix#maximum-prompt-length) \|
\| n \| integer or null, default is 1 \| The number of images to generate, must be between 1 and 6. \| \|
\| model \| string or null, default is \`recraftv3\` \| The model to use for image generation. \| Must be one of: \`recraftv3\`, \`recraftv3\_vector\` \|
\| style \| string or null \| The style of the generated images, refer to \[Styles\](/api-reference/styles). \| V3 styles only \|
\| style\\\_id \| UUID or null \| Use a style as visual reference, refer to \[Styles\](/api-reference/styles). \| V3 styles only \|
\| response\\\_format \| string or null, default is \`url\` \| The format in which the generated images are returned. Must be one of \`url\` or \`b64\_json\`. \| \|
\| negative\\\_prompt \| string or null \| A text description of undesired elements on an image. \| \|
\| text\\\_layout \| Array of objects or null \| Refer to \[Text Layout\](#text-layout). \| \|
\| controls \| object or null \| A set of custom parameters to tweak generation process, refer to \[Controls\](#controls). \| \|

\## Generate background

Generate Background operation generates a background for a given image, based on a prompt and a mask that specifies the regions to fill.

\*\*\*Note\*\*\*: This operation is available with Recraft V3, Recraft V3 Vector models only.

\`\`\`javascript theme={null}
POST https://external.api.recraft.ai/v1/images/generateBackground
\`\`\`

\### Example

\`\`\`python theme={null}
response = client.post(
 path='/images/generateBackground',
 cast\_to=object,
 options={'headers': {'Content-Type': 'multipart/form-data'}},
 files={
 'image': open('image.png', 'rb'),
 'mask': open('mask.png', 'rb'),
 },
 body={
 'prompt': 'winter',
 },
)
print(response\['data'\]\[0\]\['url'\])
\`\`\`

\### Parameters

Body of a request should contain an image file and a mask file, both in PNG, JPG or WEBP format, and parameters passed as content type \`'multipart/form-data'\`. The image must be no more than 5 MB in size, have resolution no more than 16 MP, max dimension no more than 4096 pixels and min dimension no less than 256 pixels.

\| Parameter \| Type \| Description \| Compatibility \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| image (required) \| file \| An image to modify, must be less than 5 MB in size, have resolution less than 16 MP, and max dimension less than 4096 pixels. \| \|
\| mask (required) \| file \| An image encoded in \*\*grayscale color mode\*\*, used to define the specific regions of an image that need modification. The white pixels represent the parts of the image that will be inpainted, while black pixels indicate the parts of the image that will remain unchanged. Should have exactly the same size as the image. Each pixel of the image should be either pure black (value \`0\`) or pure white (value \`255\`). \| \|
\| prompt (required) \| string \| A text description of areas to change. \| refer to \[Appendix\](/api-reference/appendix#maximum-prompt-length) \|
\| n \| integer or null, default is 1 \| The number of images to generate, must be between 1 and 6. \| \|
\| model \| string or null, default is \`recraftv3\` \| The model to use for image generation. \| Must be one of: \`recraftv3\`, \`recraftv3\_vector\` \|
\| style \| string or null \| The style of the generated images, refer to \[Styles\](/api-reference/styles). \| V3 styles only \|
\| style\\\_id \| UUID or null \| Use a style as visual reference, refer to \[Styles\](/api-reference/styles). \| V3 styles only \|
\| response\\\_format \| string or null, default is \`url\` \| The format in which the generated images are returned. Must be one of \`url\` or \`b64\_json\`. \| \|
\| negative\\\_prompt \| string or null \| A text description of undesired elements on an image. \| \|
\| text\\\_layout \| Array of objects or null \| Refer to \[Text Layout\](#text-layout). \| \|
\| controls \| object or null \| A set of custom parameters to tweak generation process, refer to \[Controls\](#controls). \| \|

\## Vectorize image

Converts a given raster image to SVG format.

\`\`\`javascript theme={null}
POST https://external.api.recraft.ai/v1/images/vectorize
\`\`\`

\### Example

\`\`\`javascript theme={null}
response = client.post(
 path='/images/vectorize',
 cast\_to=object,
 options={'headers': {'Content-Type': 'multipart/form-data'}},
 files={'file': open('image.png', 'rb')},
)
print(response\['image'\]\['url'\])
\`\`\`

\`\`\`text theme={null}
"svg\_compression": "on/off" (default off)
"limit\_num\_shapes": "on/off" (default off)
"max\_num\_shapes": int (not set by default)
\`\`\`

\### \*\*Parameters\*\*

Body of a request should be a file in PNG, JPG or WEBP format and parameters passed as content type \`'multipart/form-data'\`. The image must be no more than 5 MB in size, have resolution no more than 16 MP, max dimension no more than 4096 pixels and min dimension no less than 256 pixels.

\| Parameter \| Type \| Description \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| response\\\_format \| string or null, default is \`url\` \| The format in which the generated images are returned. Must be one of \`url\` or \`b64\_json\`. \|

\## Remove background

Removes background of a given raster image.

\`\`\`javascript theme={null}
POST https://external.api.recraft.ai/v1/images/removeBackground
\`\`\`

\### Example

\`\`\`javascript theme={null}
response = client.post(
 path='/images/removeBackground',
 cast\_to=object,
 options={'headers': {'Content-Type': 'multipart/form-data'}},
 files={'file': open('image.png', 'rb')},
)
print(response\['image'\]\['url'\])
\`\`\`

\### \*\*Parameters\*\*

Body of a request should be a file in PNG, JPG or WEBP format and parameters passed as content type \`'multipart/form-data'\`. The image must be no more than 5 MB in size, have resolution no more than 16 MP, max dimension no more than 4096 pixels and min dimension no less than 256 pixels.

\| Parameter \| Type \| Description \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| response\\\_format \| string or null, default is \`url\` \| The format in which the generated images are returned. Must be one of \`url\` or \`b64\_json\`. \|

\## Crisp upscale

Enhances a given raster image using ‘crisp upscale’ tool, increasing image resolution, making the image sharper and cleaner.

\`\`\`javascript theme={null}
POST https://external.api.recraft.ai/v1/images/crispUpscale
\`\`\`

\### Example

\`\`\`javascript theme={null}
response = client.post(
 path='/images/crispUpscale',
 cast\_to=object,
 options={'headers': {'Content-Type': 'multipart/form-data'}},
 files={'file': open('image.png', 'rb')},
)
print(response\['image'\]\['url'\])
\`\`\`

\### Request body

Body of a request should be a file in PNG, JPG or WEBP format and parameters passed as content type \`multipart/form-data\`. The image must be no more than 5 MB in size, have resolution no more than 4 MP, max dimension no more than 4096 pixels and min dimension no less than 32 pixels.

\| Parameter \| Type \| Description \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| response\\\_format \| string or null, default is \`url\` \| The format in which the generated images are returned. Must be one of \`url\` or \`b64\_json\`. \|

\## Creative upscale

Enhances a given raster image using ‘creative upscale’ tool, boosting resolution with a focus on refining small details and faces.

\`\`\`javascript theme={null}
POST https://external.api.recraft.ai/v1/images/creativeUpscale
\`\`\`

\### Example

\`\`\`javascript theme={null}
response = client.post(
 path='/images/creativeUpscale',
 cast\_to=object,
 options={'headers': {'Content-Type': 'multipart/form-data'}},
 files={'file': open('image.png', 'rb')},
)
print(response\['image'\]\['url'\])
\`\`\`

\### Request body

Body of a request should be a file in PNG, JPG or WEBP format and parameters passed as content type \`multipart/form-data\`. The image must be no more than 5 MB in size, have resolution no more than 16 MP, max dimension no more than 4096 pixels and min dimension no less than 256 pixels.

\| Parameter \| Type \| Description \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| response\\\_format \| string or null, default is \`url\` \| The format in which the generated images are returned. Must be one of \`url\` or \`b64\_json\`. \|

\## Erase region

Erases a region of a given raster image following a given mask, where white pixels represent the regions to erase, and black pixels indicate the areas to keep intact.

\`\`\`javascript theme={null}
POST https://external.api.recraft.ai/v1/images/eraseRegion
\`\`\`

\### Example

\`\`\`javascript theme={null}
response = client.post(
 path='/images/eraseRegion',
 cast\_to=object,
 options={'headers': {'Content-Type': 'multipart/form-data'}},
 files={'image': open('image.png', 'rb'), 'mask': open('mask.png', 'rb')},
)
print(response\['image'\]\['url'\])
\`\`\`

\### Request body

Body of a request should contain a file and a mask, both in PNG, JPG or WEBP format, and parameters passed as content type \`multipart/form-data\`. The images must be no more than 5 MB in size, have resolution no more than 4 MP, max dimension no more than 4096 pixels and min dimension no less than 32 pixels. The mask and image must have the same dimensions.

\| Parameter \| Type \| Description \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| image (required) \| file \| An image to modify, must be less than 5 MB in size, have resolution less than 16 MP, and max dimension less than 4096 pixels. \|
\| mask (required) \| file \| An image encoded in \*\*grayscale color mode\*\*, used to define the specific regions of the image to be erased. The white pixels represent the parts of the image that will be erased, while black pixels indicate the parts of the image that will remain unchanged. Should have exactly the same size as the image. Each pixel of the image should be either pure black (value \`0\`) or pure white (value \`255\`). \|
\| response\\\_format \| string or null, default is \`url\` \| The format in which the generated images are returned. Must be one of \`url\` or \`b64\_json\`. \|

\## Remix image

Remix generates new versions of an image while keeping the overall concept intact. Each remix introduces slight differences in elements like character appearance, object position, or scene composition. The Remix function does not use a prompt. Instead, it uses the visual content of the original image to generate alternatives in different aspect ratios.

\`\`\`javascript theme={null}

POST https://external.api.recraft.ai/v1/images/variateImage
\`\`\`

\### Example

\`\`\`python theme={null}
response = client.post(
 path='/images/variateImage',
 cast\_to=object,
 options={'headers': {'Content-Type': 'multipart/form-data'}},
 files={'image': open('image.png', 'rb')},
 body={'size': '1024x1024'}
)
print(response\['data'\]\[0\]\['url'\])

"svg\_compression": "on/off" (default off)
"limit\_num\_shapes": "on/off" (default off)
"max\_num\_shapes": int (not set by default)
\`\`\`

\### Parameters

The request body must be a file in PNG, JPG, or WEBP format, submitted with the content type 'multipart/form-data'. The image must not exceed 5 MB in size, with a maximum resolution of 16 MP, a maximum dimension of 4096 px, and a minimum dimension of 256 px.

\| Parameter \| Type \| Description \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| image (required) \| file \| The input image in PNG, WEBP or JPEG format. \|
\| size (required) \| string \| The size of the generated images in \`WxH\` or \`w:h\` format, supported values are published in \[Appendix\](/api-reference/appendix#list-of-image-sizes). \|
\| n \| integer or null, default is 1 \| Number of variations to generate \\\[1–6\]. \|
\| random\\\_seed \| string or null \| Optional random seed for reproducibility. \|
\| response\\\_format \| string or null, default is \`url\` \| The format in which the generated images are returned. Must be one of \`url\` or \`b64\_json\`. \|
\| image\\\_format \| string or null \| Format of the output image. Must be one of: \`png\`, \`webp\`. \|

\## Explore

Generates a set of images based on a prompt, designed for visual exploration and discovery of diverse results.

\`\`\`javascript theme={null}
POST https://external.api.recraft.ai/v1/images/explore
\`\`\`

\### Example

\`\`\`python theme={null}
response = client.post(
 path='/images/explore',
 cast\_to=object,
 body={
 'prompt': 'race car on a track',
 },
)
print(response\['data'\]\[0\]\['url'\])
\`\`\`

\### Parameters

\| Parameter \| Type \| Description \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| prompt (required) \| string \| A text description of the desired image(s). Maximum prompt length depends on model, refer to \[Appendix\](/api-reference/appendix#maximum-prompt-length). \|
\| model \| string or null \| The model to use for image generation. Must be one of: \`recraftv4\`, \`recraftv4\_vector\`, \`recraftv4\_pro\`, \`recraftv4\_pro\_vector\`. \|
\| size \| string or null, default is \`1:1\` \| The size of the generated images in \`WxH\` or \`w:h\` format. Depends on model, supported values are published in \[Appendix\](/api-reference/appendix#list-of-supported-image-sizes). \|
\| response\\\_format \| string or null, default is \`url\` \| The format in which the generated images are returned. Must be one of \`url\` or \`b64\_json\`. \|
\| controls \| object or null \| A set of custom parameters to tweak generation process, refer to \[Controls\](#controls). Supports \`prompt\_to\_image\` controls. \|

\## Explore similar

Start from an image you already created and generate new images that are visually similar to the given source image.
The source image \*\*must\*\* be one previously generated via the Explore endpoint. The \`similarity\` parameter controls how closely the results should resemble the source.

\`\`\`javascript theme={null}
POST https://external.api.recraft.ai/v1/images/explore/similar
\`\`\`

\### Example

\`\`\`python theme={null}
response = client.post(
 path='/images/explore/similar',
 cast\_to=object,
 body={
 'source\_image\_id': 'c18a1988-45e7-4c00-82c4-4ad7d3dbce3a',
 'similarity': 5,
 },
)
print(response\['data'\]\[0\]\['url'\])
\`\`\`

\### Parameters

\| Parameter \| Type \| Description \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| source\\\_image\\\_id (required) \| UUID \| The ID of the source image to use as a visual reference for exploration. \|
\| similarity (required) \| integer \| Defines how closely the generated images should resemble the source image. The value should be between \`1\` and \`5\`: \`1\` — a little bit similar, \`2\` — moderately similar, \`3\` — quite similar, \`4\` — very similar, \`5\` — extremely similar. \|
\| response\\\_format \| string or null, default is \`url\` \| The format in which the generated images are returned. Must be one of \`url\` or \`b64\_json\`. \|

\## Get user information

Returns information of the current user including credits balance.

\`\`\`javascript theme={null}
GET https://external.api.recraft.ai/v1/users/me
\`\`\`

\### Example

\`\`\`python theme={null}
response = client.get(path='/users/me', cast\_to=object)
print(response)
\`\`\`

\### Output

\`\`\`javascript theme={null}
{
 "credits": 1000,
 "email": "test@example.com",
 "id": "c18a1988-45e7-4c00-82c4-4ad7d3dbce3a",
 "name": "Recraft Test"
}
\`\`\`

\## Auxiliary

\### Controls

The generation process can be adjusted with a number of tweaks.

\| Parameter \| Type \| Description \| Compatibility \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| colors \| array of color definitions \| An array of preferable colors. \| All models \|
\| background\\\_color \| color definition \| Use the given color as a desired background color. \| All models \|
\| artistic\\\_level \| integer or null \| Defines the artistic tone of your image. At a simple level, the person looks straight at the camera in a static and clean style. Dynamic and eccentric levels introduce movement and creativity. The value should be in the range \`\[0..5\]\`. \| V3 models only \|
\| no\\\_text \| bool \| Do not embed text layouts. \| V3 models only \|

\#### Colors

Color type is defined as an object with the following fields

\| Parameter \| Description \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| rgb (required) \| An array of 3 integer values in range of \`0...255\` defining RGB color model. \|

\*\*Example\*\*

\`\`\`python theme={null}
response = client.images.generate(
 prompt='race car on a track',
 extra\_body={
 'controls': {
 'colors': \[\
 {'rgb': \[0, 255, 0\]}\
 \]
 }
 }
)
print(response.data\[0\].url)
\`\`\`

\### Text Layout

Text layout is used to define spatial and textual attributes for individual text elements. Each text element consists of an individual word and its bounding box (bbox).

This feature is supported by Recraft V3 and Recraft V3 Vector models only.

\| Parameter \| Description \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| text (required) \| A single word containing only supported characters. \|
\| bbox (required) \| A bounding box representing a 4-angled polygon. Each point in the polygon is defined by relative coordinates. \|

\*\*Bounding box\*\*: The bounding box (bbox) is a list of 4 points representing a 4-angled figure (not necessarily a rectangle). Each point specifies its coordinates relative to the layout dimensions, where (0, 0) is the top-left corner, (1, 1) is the bottom-right corner.

\*\*Coordinates\*\*: Coordinates are \*\*relative\*\* to the layout dimensions. Coordinates can extend beyond the \\\[0, 1\] range, such values indicate that the shape will be cropped.

\*\*Points\*\*: The bounding box must always have \*\*exactly 4 points\*\*. Each point is an array of two floats \\\[x, y\] representing the relative position.

\*\*Supported characters\*\*

The \`text\` field must contain a single word composed only of the following characters:

\`\`\`text theme={null}
! " # $ % & ' ( ) \\* \+ , \- . /
0 1 2 3 4 5 6 7 8 9
: ; < \> ? @
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
\_ { }
Ø Đ Ħ Ł Ŋ Ŧ
Α Β Ε Ζ Η Ι Κ Μ Ν Ο Ρ Τ Υ Χ
І
А В Е К М Н О Р С Т У Х
ß ẞ

\`\`\`

Any character not listed above will result in validation errors.

\*\*Example\*\*

\`\`\`python theme={null}
response = client.images.generate(
 prompt="cute red panda with a sign",
 style="Illustration",
 extra\_body={
 "text\_layout": \[\
 {\
 "text": "Recraft",\
 "bbox": \[\[0.3, 0.45\], \[0.6, 0.45\], \[0.6, 0.55\], \[0.3, 0.55\]\],\
 },\
 {\
 "text": "AI",\
 "bbox": \[\[0.62, 0.45\], \[0.70, 0.45\], \[0.70, 0.55\], \[0.62, 0.55\]\],\
 },\
 \]
 },
)
print(response.data\[0\].url)
\`\`\`

Built with \[Mintlify\](https://mintlify.com).