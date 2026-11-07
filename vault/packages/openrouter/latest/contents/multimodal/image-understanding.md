> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Image Inputs

> How to send images to OpenRouter models

Requests with images, to multimodal models, are available via the [Responses API](https://openrouter.ai/docs/api_reference/responses/overview.md) (`/api/v1/responses`) with a multi-part message in the `input` parameter. Each image is an `input_image` content part whose `image_url` can either be a URL or a base64-encoded data URL. Note that multiple images can be sent in separate content array entries. The number of images you can send in a single request varies per provider and per model. Due to how the content is parsed, we recommend sending the text prompt first, then the images. If the images must come first, put them before the text within the same user message; system messages should contain text only.

OpenRouter supports both **direct URLs** and **base64-encoded data** for images:

* **URLs**: More efficient for publicly accessible images as they don't require local encoding
* **Base64**: Required for local files or private images that aren't publicly accessible

### Using Image URLs

Here's how to send an image using a URL:

### Using Base64 Encoded Images

For locally stored images, you can send them using base64 encoding. Here's how to do it:

Supported image content types are:

* `image/png`
* `image/jpeg`
* `image/webp`
* `image/gif`
