> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Video Generation

> How to generate videos with OpenRouter models

OpenRouter supports video generation from text prompts (and optional reference images) via a dedicated asynchronous API. You can find the supported models, their capabilities, and pricing by filtering our [model list by video output](https://openrouter.ai/docs/guides/overview/models.md?output_modalities=video).

<video controls loop playsInline preload="metadata">
  <source src="https://model-assets.openrouter.ai/model-examples/minimax/hailuo-3/docs-hero/original-0.mp4?v=1" type="video/mp4" />
</video>

Generated with minimax/hailuo-3 (2K, 5s, 16:9, with audio)

> [accordion] Prompt and parameters
>
> > a slow cinematic push-in on a glowing neon sign that reads "OpenRouter" in the window of a cozy coffee shop on a rainy night, rain streaking down the glass, reflections rippling on wet pavement
>
> * **Model**: `minimax/hailuo-3`
> * **Output**: one 5-second `2K` `16:9` clip with audio
>
> See [Request Parameters](#request-parameters) for the full set of options.

> [!TIP]
>
> Adding video generation to an app? The [Video Generation Cookbook](https://openrouter.ai/docs/cookbook/video-generation/choose-video-model.md) breaks this workflow into step-by-step recipes for choosing a model, submitting text-to-video jobs, using images, passing provider options, and handling webhooks.
>
> For reusable agent knowledge across projects, install the [openrouter-video skill](https://github.com/OpenRouterTeam/skills/tree/main/skills/openrouter-video).

## Model Discovery

You can find video generation models in several ways:

### Via the Video Models API

Use the dedicated video models endpoint to list all available video generation models along with their supported parameters:

```bash lines theme={null}
curl "https://openrouter.ai/api/v1/videos/models"
```

The response returns a `data` array where each model includes:

```json lines theme={null}
{
  "data": [
    {
      "id": "google/veo-3.1",
      "canonical_slug": "google/veo-3.1",
      "name": "Google: Veo 3.1",
      "description": "...",
      "created": 1719792000,
      "supported_durations": [4, 6, 8],
      "supported_resolutions": ["720p", "1080p"],
      "supported_aspect_ratios": ["16:9", "9:16", "1:1"],
      "supported_sizes": ["1280x720", "1920x1080"],
      "pricing_skus": {
        "per-video-second": "0.50",
        "per-video-second-1080p": "0.75"
      },
      "allowed_passthrough_parameters": ["output_config"]
    }
  ]
}
```

| Field | Description |
| - | - |
| `id` | Model slug to use in generation requests |
| `canonical_slug` | Permanent model identifier |
| `supported_durations` | List of supported output durations in seconds |
| `supported_resolutions` | List of supported output resolutions (e.g., `720p`, `1080p`) |
| `supported_aspect_ratios` | List of supported aspect ratios (e.g., `16:9`, `9:16`) |
| `supported_sizes` | List of supported pixel dimensions (e.g., `1280x720`) |
| `pricing_skus` | Pricing information per SKU |
| `allowed_passthrough_parameters` | Provider-specific parameters that can be passed through via the `provider` option |

Use this endpoint to check which resolutions, aspect ratios, and passthrough parameters are supported by each model before submitting a generation request.

> [!TIP]
>
> Validate `duration`, `resolution`, and `aspect_ratio` against the selected model's `supported_durations`, `supported_resolutions`, and `supported_aspect_ratios` from [the video models API](https://openrouter.ai/docs/api/api-reference/video-generation/list-all-video-generation-models.md). Requests with unsupported values return a 400 that lists the supported values.

### Via the Models API

You can also use the `output_modalities` query parameter on the [Models API](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties.md) to discover video generation models:

```bash lines theme={null}
# List only video generation models
curl "https://openrouter.ai/api/v1/models?output_modalities=video"
```

### On the Models Page

Visit the [Models page](https://openrouter.ai/docs/guides/overview/models.md) and filter by output modalities to find models capable of video generation. Look for models that list `"video"` in their output modalities.

## How It Works

Unlike text or image generation, video generation is **asynchronous** because generating video takes significantly longer. The workflow is:

1. **Submit** a generation request to `POST /api/v1/videos`
2. **Receive** a job ID and polling URL immediately
3. **Poll** the polling URL (`GET /api/v1/videos/{jobId}`) until the status is `completed`
4. **Download** the video from the content URL (`GET /api/v1/videos/{jobId}/content`)

## API Usage

### Submitting a Video Generation Request

### Request Parameters

| Parameter | Type | Required | Description |
| - | - | - | - |
| `model` | string | Yes | The model to use for video generation (e.g., `google/veo-3.1`) |
| `prompt` | string | Yes | Text description of the video to generate |
| `duration` | integer | No | Duration of the generated video in seconds |
| `resolution` | string | No | Resolution of the output video (e.g., `720p`, `1080p`) |
| `aspect_ratio` | string | No | Aspect ratio of the output video (e.g., `16:9`, `9:16`, `3:2`) |
| `size` | string | No | Exact pixel dimensions in `WIDTHxHEIGHT` format (e.g., `1280x720`). Interchangeable with `resolution` + `aspect_ratio` |
| `frame_images` | array | No | Images for first/last frames (image-to-video) |
| `input_references` | array | No | Reference images for style guidance (reference-to-video) |
| `generate_audio` | boolean | No | Whether to generate audio alongside the video. Defaults to `true` for models that support audio output |
| `seed` | integer | No | Seed for deterministic generation (not guaranteed by all providers) |
| `callback_url` | string | No | URL to receive a webhook notification when the job completes. Overrides the workspace-level default callback URL if set. Must be HTTPS |
| `provider` | object | No | Provider-specific passthrough configuration |

### Supported Resolutions

* `480p`
* `720p`
* `768p`
* `1080p`
* `1K`
* `2K`
* `4K`

### Supported Aspect Ratios

* `16:9`: Widescreen landscape
* `9:16`: Vertical/portrait
* `1:1`: Square
* `4:3`: Standard landscape
* `3:4`: Standard portrait
* `3:2`: Photography landscape
* `2:3`: Photography portrait
* `21:9`: Ultra-wide
* `9:21`: Ultra-tall

### Using Images

There are two ways to provide images, each triggering a different generation mode:

* **`frame_images`**: Specifies first or last frame images for **image-to-video** generation. Each entry must include a `frame_type` of `first_frame` or `last_frame`.
* **`input_references`**: Provides style or content reference images for **reference-to-video** generation. The model uses these as visual guidance rather than exact frames.

If both fields are provided, `frame_images` takes precedence and the request is treated as image-to-video.

#### Image-to-Video (frame\_images)

```json lines theme={null}
{
  "model": "alibaba/wan-2.7",
  "prompt": "A character walking through a forest",
  "frame_images": [
    {
      "type": "image_url",
      "image_url": {
        "url": "https://example.com/first-frame.png"
      },
      "frame_type": "first_frame"
    }
  ],
  "resolution": "1080p"
}
```

#### Reference-to-Video (input\_references)

```json lines theme={null}
{
  "model": "alibaba/wan-2.7",
  "prompt": "A colossal solar flare beside a planet",
  "input_references": [
    {
      "type": "image_url",
      "image_url": {
        "url": "https://example.com/style-ref.png"
      }
    }
  ],
  "resolution": "1080p"
}
```

### Provider-Specific Options

You can pass provider-specific options using the `provider` parameter. Options are keyed by provider slug, and only the options for the matched provider are forwarded:

```json lines theme={null}
{
  "model": "google/veo-3.1",
  "prompt": "A time-lapse of a flower blooming",
  "provider": {
    "options": {
      "google-vertex": {
        "parameters": {
          "personGeneration": "allow",
          "negativePrompt": "blurry, low quality"
        }
      }
    }
  }
}
```

Google Veo models are the only video models that nest options in a `parameters` object. Other video models, including other Google video models, take their allowed passthrough keys directly under the slug of the provider the request is routed to. A `parameters` object sent to them is not forwarded, and Runway video upscale rejects any provider options. For example, Seedance 2.0 is served by the Seed provider, so it takes `watermark` directly under the `seed` slug:

```json lines theme={null}
{
  "model": "bytedance/seedance-2.0",
  "prompt": "A time-lapse of a flower blooming",
  "provider": {
    "options": {
      "seed": {
        "watermark": false
      }
    }
  }
}
```

A Seedance request routed to BytePlus uses the `byteplus` slug instead of `seed`.

Use the [Video Models API](#via-the-video-models-api) to check which passthrough parameters each model supports via the `allowed_passthrough_parameters` field.

## Response Format

### Submit Response (202 Accepted)

When you submit a video generation request, you receive an immediate response with the job details:

```json lines theme={null}
{
  "id": "abc123",
  "polling_url": "https://openrouter.ai/api/v1/videos/abc123",
  "status": "pending"
}
```

### Poll Response

When polling the job status, the response includes additional fields as the job progresses:

```json lines theme={null}
{
  "id": "abc123",
  "generation_id": "gen-1234567890-abcdef",
  "polling_url": "https://openrouter.ai/api/v1/videos/abc123",
  "status": "completed",
  "unsigned_urls": [
    "https://openrouter.ai/api/v1/videos/abc123/content?index=0"
  ],
  "usage": {
    "cost": 0.25,
    "is_byok": false
  }
}
```

### Job Statuses

| Status | Description |
| - | - |
| `pending` | The job has been submitted and is queued |
| `in_progress` | The video is being generated |
| `completed` | The video is ready to download |
| `failed` | The generation failed (check the `error` field) |

### Downloading the Video

Once the job status is `completed`, the `unsigned_urls` array contains URLs to download the generated video content. These URLs are not presigned, so send your API key in the `Authorization` header just as you do when polling. Each entry points at the content endpoint, which you can also call directly:

```bash lines theme={null}
curl "https://openrouter.ai/api/v1/videos/{jobId}/content?index=0" \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  --output video.mp4
```

The `index` query parameter defaults to `0` and can be used if the model generates multiple video outputs.

When OpenRouter holds a stored copy of the outputs, the completed response also includes `urls`: one signed download URL per output that works without an API key until `expires_at`. Use it where you cannot set headers, such as a `<video>` tag, `ffmpeg`, or a tool that only accepts a URL. Anyone holding one of these URLs can download that output until it expires, so do not log or share them. `unsigned_urls` keeps working with your API key for as long as the output is available, including when `urls` is absent.

## Webhooks

Instead of polling for job status, you can receive a webhook notification when a video generation job completes. There are two ways to configure a callback URL:

1. **Per-request**: Pass `callback_url` in the request body. This takes priority over the workspace default.
2. **Workspace default**: Set a default callback URL in your [workspace settings](https://openrouter.ai/docs/guides/features/workspaces.md). This applies to all video generation requests that don't specify their own `callback_url`.

### Webhook Payload

When a job reaches a terminal state, OpenRouter sends a POST request to the callback URL with an event envelope. Each delivery also carries an `X-OpenRouter-Idempotency-Key` header of the form `<job_id>-<status>` for safe retry deduplication.

`video.generation.completed`:

```json lines theme={null}
{
  "type": "video.generation.completed",
  "created_at": "2026-04-24T12:00:00.000Z",
  "data": {
    "id": "abc123",
    "status": "completed",
    "generation_id": "gen-xyz789",
    "model": "google/veo-3.1",
    "unsigned_urls": [
      "https://openrouter.ai/api/v1/videos/abc123/content?index=0"
    ],
    "usage": {
      "cost": 0.5,
      "is_byok": false
    }
  }
}
```

`video.generation.failed`:

```json lines theme={null}
{
  "type": "video.generation.failed",
  "created_at": "2026-04-24T12:00:00.000Z",
  "data": {
    "id": "abc123",
    "status": "failed",
    "generation_id": "gen-xyz789",
    "model": "google/veo-3.1",
    "error": "Content policy violation"
  }
}
```

`video.generation.cancelled`:

```json lines theme={null}
{
  "type": "video.generation.cancelled",
  "created_at": "2026-04-24T12:00:00.000Z",
  "data": {
    "id": "abc123",
    "status": "cancelled",
    "generation_id": "gen-xyz789",
    "model": "google/veo-3.1",
    "error": "Job was cancelled"
  }
}
```

`video.generation.expired`:

```json lines theme={null}
{
  "type": "video.generation.expired",
  "created_at": "2026-04-24T12:00:00.000Z",
  "data": {
    "id": "abc123",
    "status": "expired",
    "generation_id": "gen-xyz789",
    "model": "google/veo-3.1",
    "error": "Job exceeded maximum time to live"
  }
}
```

`generation_id` and `model` in `data` may be `null` when a job fails before those values are assigned (e.g. an early validation failure).

### Signing Secret

You can configure a signing secret in your [workspace settings](https://openrouter.ai/docs/guides/features/workspaces.md) to verify that webhook payloads are authentically from OpenRouter. When a signing secret is configured, each webhook delivery includes an `X-OpenRouter-Signature` header.

The signature includes a timestamp and an HMAC hash:

```lines theme={null}
X-OpenRouter-Signature: t=1234567890,v1=a1b2c3d4...
```

### Verifying Signatures

To verify the signature on your webhook receiver:

1. Extract the timestamp (`t`) and signature hash (`v1`) from the header
2. Construct the signed payload: `{timestamp},{raw_request_body}` (joined with a comma)
3. Compute the HMAC-SHA256 of the signed payload using your signing secret as the key
4. Compare the hex-encoded result with the `v1` value

```typescript expandable lines theme={null}
import crypto from 'crypto';

const FIVE_MINUTES_IN_SECONDS = 300;

function verifyWebhookSignature(
  rawBody: string,
  signatureHeader: string,
  secret: string,
): boolean {
  const parts = signatureHeader.split(',');
  const timestamp = parts.find((p) => p.startsWith('t='))?.slice(2);
  const hash = parts.find((p) => p.startsWith('v1='))?.slice(3);

  if (!timestamp || !hash) {
    return false;
  }

  // Reject timestamps older than 5 minutes to prevent replay attacks
  const age = Math.floor(Date.now() / 1000) - Number(timestamp);
  if (Number.isNaN(age) || age > FIVE_MINUTES_IN_SECONDS) {
    return false;
  }

  const signedPayload = `${timestamp},${rawBody}`;
  const expected = crypto
    .createHmac('sha256', secret)
    .update(signedPayload)
    .digest('hex');

  if (expected.length !== hash.length) {
    return false;
  }

  return crypto.timingSafeEqual(
    Buffer.from(expected),
    Buffer.from(hash),
  );
}
```

> [!WARNING]
>
> Use the **raw request body** (the exact bytes received) for verification. Parsing and re-serializing JSON may change key ordering or number formatting, which will cause verification to fail.

## Best Practices

* **Detailed Prompts**: Provide specific, descriptive prompts for better video quality. Include details about motion, camera angles, lighting, and scene composition
* **Appropriate Resolution**: Higher resolutions take longer to generate and cost more. Choose the resolution that fits your use case
* **Polling Interval**: Use a reasonable polling interval (e.g., 30 seconds) to avoid excessive API calls. Video generation typically takes 30 seconds to several minutes depending on the model and parameters
* **Error Handling**: Always check the job status for `failed` state and handle the `error` field appropriately
* **Reference Images**: When using reference images, ensure they are high quality and relevant to the desired video output

## Zero Data Retention

Video generation is **not eligible** for [Zero Data Retention (ZDR)](https://openrouter.ai/docs/guides/features/zdr.md). Because video generation is asynchronous, the provider must retain the generated video output briefly so you can retrieve it after generation completes. This temporary retention is inherent to the async polling workflow, and you can't bypass it.

If you have ZDR enforcement enabled (either via [account settings](https://openrouter.ai/settings/privacy) or the per-request `zdr` parameter), OpenRouter won't route video generation requests.

## Troubleshooting

**Job stays in `pending` for a long time?**

* Video generation can take several minutes depending on the model, resolution, and server load
* Continue polling at regular intervals

**Generation failed?**

* Check the `error` field in the poll response for details
* Verify the model supports video generation (`output_modalities` includes `"video"`)
* Ensure your prompt is appropriate and within model guidelines
* Check that any reference images are accessible and in supported formats

**Model not found?**

* Use the [Video Models API](#via-the-video-models-api) or the [Models page](https://openrouter.ai/docs/guides/overview/models.md) to find available video generation models
* Verify the model slug is correct (e.g., `google/veo-3.1`)
