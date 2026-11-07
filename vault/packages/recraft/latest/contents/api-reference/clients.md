> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Clients and SDKs

> Call the Recraft API from any HTTP client, or from the OpenAI Python library with a custom base URL and extra_body for Recraft-specific parameters.

The Recraft API is a plain REST API. Any HTTP client works. The examples in these docs use `curl`, Python `requests`, and JavaScript `fetch`, and most Python examples also have a **Python (OpenAI SDK)** tab.

## Any HTTP client

Send JSON (or `multipart/form-data` for file uploads) to `https://external.api.recraft.ai/v1` with a Bearer token:

```bash theme={null}
curl https://external.api.recraft.ai/v1/images/generations \
  -H "Authorization: Bearer $RECRAFT_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "two race cars on a track", "model": "recraftv4_1"}'
```

See [Image inputs and results](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md) for how to send images and choose the response format.

## Synchronous requests

Every request is synchronous: the connection stays open until the images are ready, and the response carries them (as URLs, Base64, or bytes). There are no job IDs to poll and no webhooks.

* Set your HTTP client's timeout explicitly instead of relying on its default, and keep it long enough for the slowest model you call.
* To generate many images, send requests in parallel within the [rate limits](https://www.recraft.ai/docs/api-reference/appendix.md#rate-limits), or ask for up to 6 images in one request with `n`.

## OpenAI Python library

The [OpenAI Python library](https://github.com/openai/openai-python) is compatible with the Recraft API. Point it at the Recraft base URL:

```python theme={null}
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

Keep in mind:

* **Recraft-specific parameters go in `extra_body`.** The library passes `prompt`, `model`, `n`, `size`, and `response_format` natively. Everything else (`style_id`, `style_reference_urls`, `style_match`, `controls`, `image_format`, `negative_prompt`, `text_layout`, ...) must go through `extra_body`, or the library rejects it:

  ```python theme={null}
  response = client.images.generate(
      prompt='isometric illustration of a delivery van',
      model='recraftv4_1',
      extra_body={
          'controls': {'colors': [{'rgb': [255, 102, 0]}]},
          'image_format': 'png',
      },
  )
  ```

* **Endpoints outside the OpenAI API** (styles, vectorize, upscale, inpaint, and others) are called with `client.post`:

  ```python theme={null}
  style = client.post(
      path='/styles',
      cast_to=object,
      body={
          'model': 'recraftv4_styles',
          'image_urls': ['https://example.com/reference.png'],
      },
  )
  print(style['id'])
  ```

* **`multipart` responses are not supported.** The library reads JSON only, so use `response_format` `url` or `b64_json` with it, and a plain HTTP client for `multipart`.

* **Some OpenAI parameters don't apply.** Parameters without a Recraft meaning are ignored or may be interpreted differently. Check the model page for what each model accepts.

## Other languages

Use your language's standard HTTP client with the requests shown on each [model page](https://www.recraft.ai/docs/api-reference/models/overview.md), or generate a client from the [OpenAPI specification](https://www.recraft.ai/docs/api-reference/swagger.md). The specification can lag behind these docs, so check new models and fields against the model pages.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.