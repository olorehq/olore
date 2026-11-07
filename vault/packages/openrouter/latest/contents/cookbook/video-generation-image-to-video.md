> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Turn an Image into a Video

> Use frame images to control the first or last frame of an OpenRouter video

Use this guide when you need to add image-to-video generation where an image becomes the first or last frame of a generated video.

By the end, your implementation should submit an image-to-video job with `frame_images` and download the finished clip.

> [!TIP]
>
> For reusable agent knowledge across projects, install the [openrouter-video skill](https://github.com/OpenRouterTeam/skills/tree/main/skills/openrouter-video).

## Before you start

You need:

* An OpenRouter API key available as `OPENROUTER_API_KEY`
* Node.js 20 or newer
* A public HTTPS image URL available as `FIRST_FRAME_URL`
* A model that supports `frame_images`, confirmed with `GET /api/v1/videos/models`

> [!TIP]
>
> If you haven't chosen a model yet, read [Choose a Video Generation Model](https://openrouter.ai/docs/cookbook/video-generation/choose-video-model.md) first. It helps you pick one based on clip duration, output shape, input type, audio, provider controls, and cost.

Use the API reference pages as the source of truth for exact fields:

* [Create video generation request](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request.md)
* [List video generation models](https://openrouter.ai/docs/api/api-reference/video-generation/list-all-video-generation-models.md)
* [TypeScript SDK video generation reference](https://openrouter.ai/docs/client-sdks/typescript/sdks/videogeneration/README.md)

> [!WARNING]
>
> Submitting `POST /api/v1/videos` starts a real video generation job and may spend OpenRouter credits.

`frame_images` is for exact frame control. If you provide both `frame_images` and `input_references`, OpenRouter treats the request as image-to-video.

Use a stable, directly downloadable image URL. Some providers cannot fetch image URLs that require cookies, redirects through HTML pages, bot checks, or unusual headers.

Before submitting, check that your image URL returns `200` with an image content type:

```bash lines theme={null}
curl -I "$FIRST_FRAME_URL"
```

Example output:

```text lines theme={null}
HTTP/2 200
content-type: image/jpeg
```

## Step 1: Choose a model with frame-image support

Fetch the model list and choose a model whose `supported_frame_images` includes the frame type you want:

```bash lines theme={null}
curl https://openrouter.ai/api/v1/videos/models
```

Example model output excerpt:

```json lines theme={null}
{
  "id": "google/veo-3.1-lite",
  "supported_durations": [8, 4, 6],
  "supported_resolutions": ["720p", "1080p"],
  "supported_aspect_ratios": ["16:9", "9:16"],
  "supported_frame_images": ["first_frame", "last_frame"]
}
```

For first-frame and last-frame control, look for `supported_frame_images` containing `first_frame` and `last_frame`.

## Step 2: Submit the image-to-video job

Build the video request with `frame_images` when the image should anchor an exact frame. This example uses a first frame. Put the same request shape in whatever server route, queue, or worker owns video generation in your app. Validate `duration`, `resolution`, and `aspect_ratio` against the selected model's supported fields from the [video models API](https://openrouter.ai/docs/api/api-reference/video-generation/list-all-video-generation-models.md) before submitting. Unsupported values return a 400 with the supported values.

```js expandable lines theme={null}
const apiKey = process.env.OPENROUTER_API_KEY;
const firstFrameUrl = process.env.FIRST_FRAME_URL;

if (!apiKey) {
  throw new Error("Set OPENROUTER_API_KEY first.");
}

if (!firstFrameUrl) {
  throw new Error("Set FIRST_FRAME_URL to a directly downloadable image URL.");
}

const response = await fetch("https://openrouter.ai/api/v1/videos", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "google/veo-3.1-lite",
    prompt:
      "The camera slowly pushes in as the subject turns toward warm window light, cinematic, realistic motion",
    duration: 4,
    resolution: "720p",
    aspect_ratio: "16:9",
    generate_audio: false,
    frame_images: [
      {
        type: "image_url",
        image_url: {
          url: firstFrameUrl,
        },
        frame_type: "first_frame",
      },
    ],
  }),
});

if (!response.ok) {
  throw new Error(await response.text());
}

const job = await response.json();
console.log(job);
```

The submit call returns the job fields immediately. In the QA run, the submitted job later completed and downloaded with this final summary:

```json lines theme={null}
{
  "id": "kBJZL5kI6gO33dfKN76A",
  "status": "completed",
  "output_path": "image-video.mp4",
  "bytes": 1515304
}
```

## Step 3: Use a last frame when you need a transition

If the selected model supports `last_frame`, add both frames so the model can move from a known starting composition to a known ending composition:

```js lines theme={null}
const lastFrameUrl = process.env.LAST_FRAME_URL;

if (!lastFrameUrl) {
  throw new Error("Set LAST_FRAME_URL to a directly downloadable image URL.");
}

// Before submitting, confirm this URL returns 200 with an image content type:
// curl -I "$LAST_FRAME_URL"
const frameImages = [
  {
    type: "image_url",
    image_url: { url: firstFrameUrl },
    frame_type: "first_frame",
  },
  {
    type: "image_url",
    image_url: { url: lastFrameUrl },
    frame_type: "last_frame",
  },
];
```

Then set `frame_images` in the request body to `frameImages`.

Request shape for the optional last-frame path:

```json lines theme={null}
[
  {
    "type": "image_url",
    "image_url": { "url": "https://your-domain.example/first-frame.jpg" },
    "frame_type": "first_frame"
  },
  {
    "type": "image_url",
    "image_url": { "url": "https://your-domain.example/last-frame.jpg" },
    "frame_type": "last_frame"
  }
]
```

This is useful when you want the video to move from a known starting composition to a known ending composition.

## Step 4: Poll and download

After submission, poll from a server route, worker, or job runner instead of the browser. Poll with a limit, stop on terminal failure, then download the completed video.

Example polling and download helper:

```js expandable lines theme={null}
import { writeFile } from "node:fs/promises";

async function waitForVideo(job) {
  let current = job;

  for (let attempt = 1; attempt <= 60; attempt += 1) {
    if (current.status === "completed") {
      return current;
    }

    if (current.status === "failed") {
      throw new Error(current.error ?? "Video generation failed.");
    }

    if (["cancelled", "expired"].includes(current.status)) {
      throw new Error(current.error ?? `Video generation ${current.status}.`);
    }

    await new Promise((resolve) => setTimeout(resolve, 30_000));

    if (!current.polling_url) {
      throw new Error("Video job did not include a polling_url.");
    }

    const pollingUrl = new URL(current.polling_url, "https://openrouter.ai");
    const response = await fetch(pollingUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }

    current = await response.json();
  }

  throw new Error("Video generation did not complete after 60 attempts.");
}

async function downloadVideo(job) {
  const videoUrl =
    job.unsigned_urls?.[0] ??
    `https://openrouter.ai/api/v1/videos/${job.id}/content?index=0`;

  const response = await fetch(videoUrl, {
    headers: videoUrl.startsWith("https://openrouter.ai/api/")
      ? { Authorization: `Bearer ${apiKey}` }
      : undefined,
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return Buffer.from(await response.arrayBuffer());
}

const completedJob = await waitForVideo(job);
const videoBuffer = await downloadVideo(completedJob);
await writeFile("image-video.mp4", videoBuffer);
console.log("Saved image-video.mp4");
```

The QA run saved the finished video after polling completed:

```text lines theme={null}
Saved image-video.mp4
```

## Check your work

The first frame of the resulting video should closely match the image you provided as `first_frame`. If you also supplied `last_frame`, the clip should resolve toward that image. The implementation should produce a playable MP4 from the completed job.
