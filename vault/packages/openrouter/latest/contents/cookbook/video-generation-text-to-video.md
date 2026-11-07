> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Generate and Download a Video from Text

> Submit a text-to-video job, poll for completion, and save the generated MP4

Use this guide when you need to add text-to-video generation to an app with OpenRouter.

By the end, your implementation should submit a video job, poll for completion, and download the generated MP4.

> [!TIP]
>
> For reusable agent knowledge across projects, install the [openrouter-video skill](https://github.com/OpenRouterTeam/skills/tree/main/skills/openrouter-video).

## Before you start

You need:

* An OpenRouter API key available as `OPENROUTER_API_KEY`
* Node.js 20 or newer
* A video model slug, such as `google/veo-3.1-lite`

> [!TIP]
>
> If you haven't chosen a model yet, read [Choose a Video Generation Model](https://openrouter.ai/docs/cookbook/video-generation/choose-video-model.md) first. It helps you pick one based on clip duration, output shape, input type, audio, provider controls, and cost.

Use the API reference pages as the source of truth for exact fields:

* [Create video generation request](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request.md)
* [List video generation models](https://openrouter.ai/docs/api/api-reference/video-generation/list-all-video-generation-models.md)
* [TypeScript SDK video generation reference](https://openrouter.ai/docs/client-sdks/typescript/sdks/videogeneration/README.md)

Before wiring the submit path, confirm that the selected model supports the duration, resolution, and aspect ratio you plan to send. For example, the model used below returned this metadata during QA:

```bash lines theme={null}
node --input-type=module <<'EOF'
const { data } = await fetch(
  "https://openrouter.ai/api/v1/videos/models",
).then((response) => response.json());
const model = data.find((item) => item.id === "google/veo-3.1-lite");

console.log(
  JSON.stringify(
    {
      durations: model.supported_durations,
      resolutions: model.supported_resolutions,
      aspect_ratios: model.supported_aspect_ratios,
    },
    null,
    2,
  ),
);
EOF
```

Model metadata output:

```json lines theme={null}
{
  "durations": [8, 4, 6],
  "resolutions": ["720p", "1080p"],
  "aspect_ratios": ["16:9", "9:16"]
}
```

> [!WARNING]
>
> Submitting `POST /api/v1/videos` starts a real video generation job and may spend OpenRouter credits.

## Step 1: Submit the video job

Add a server-side submit step that sends `POST /api/v1/videos` with the chosen model, prompt, duration, resolution, and aspect ratio. Store the returned job object because the next step needs its `id`, `status`, and `polling_url`. Validate those values against the selected model's supported fields from the [video models API](https://openrouter.ai/docs/api/api-reference/video-generation/list-all-video-generation-models.md) before submitting. Unsupported values return a 400 with the supported values.

Adapt this submit shape in the server route, queue, or worker that owns video generation:

```ts expandable lines theme={null}
const apiKey = process.env.OPENROUTER_API_KEY;

if (!apiKey) {
  throw new Error("Set OPENROUTER_API_KEY first.");
}

async function openrouter(path: string, init: RequestInit = {}) {
  const response = await fetch(`https://openrouter.ai/api/v1${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response;
}

const submitResponse = await openrouter("/videos", {
  method: "POST",
  body: JSON.stringify({
    model: "google/veo-3.1-lite",
    prompt:
      "A cinematic 4-second shot of a glass greenhouse at sunrise, soft mist, slow dolly-in camera movement",
    duration: 4,
    resolution: "720p",
    aspect_ratio: "16:9",
    generate_audio: false,
  }),
});

const job = await submitResponse.json();
console.log(`Submitted video job: ${job.id}`);
```

A successful submit returns a job id. The QA run produced this shape:

```text lines theme={null}
Submitted video job: y34x1YREG4Pkdcj7f02v
```

## Step 2: Poll until the job finishes

Add polling in a server route, queue worker, or background job. Treat `completed` as success. Treat `failed`, `cancelled`, and `expired` as terminal errors, and keep a bounded retry limit so the worker can't run forever.

Polling logic:

```ts expandable lines theme={null}
let status = job;

for (let attempt = 1; attempt <= 60; attempt += 1) {
  if (status.status === "completed") {
    break;
  }

  if (status.status === "failed") {
    throw new Error(status.error ?? "Video generation failed.");
  }

  if (["cancelled", "expired"].includes(status.status)) {
    throw new Error(status.error ?? `Video generation ${status.status}.`);
  }

  await new Promise((resolve) => setTimeout(resolve, 30_000));

  if (!status.polling_url) {
    throw new Error("Video job did not include a polling_url.");
  }

  const pollingUrl = new URL(status.polling_url, "https://openrouter.ai");
  const pollResponse = await fetch(pollingUrl, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });

  if (!pollResponse.ok) {
    throw new Error(await pollResponse.text());
  }

  status = await pollResponse.json();
  console.log(`Status: ${status.status}`);
}

if (status.status !== "completed") {
  throw new Error("Video generation did not complete after 60 attempts.");
}
```

Completed poll output:

```text lines theme={null}
Status: completed
```

## Step 3: Download the video

When polling returns `completed`, download the first generated asset. The content endpoint is the most direct path; if you use a URL from `unsigned_urls`, include the bearer token when the URL points back to the OpenRouter API.

In Node.js, import `writeFile` from `node:fs/promises` or replace the file write with the storage layer your app uses.

```ts lines theme={null}
const videoResponse = await fetch(
  `https://openrouter.ai/api/v1/videos/${job.id}/content?index=0`,
  {
    headers: { Authorization: `Bearer ${apiKey}` },
  },
);

if (!videoResponse.ok) {
  throw new Error(await videoResponse.text());
}

const videoBuffer = Buffer.from(await videoResponse.arrayBuffer());
await writeFile("greenhouse.mp4", videoBuffer);

console.log("Saved greenhouse.mp4");
```

The QA run saved the finished video after polling completed:

```text lines theme={null}
Saved greenhouse.mp4
```

If your completed job includes `unsigned_urls`, this is the adaptable download shape:

```ts lines theme={null}
const videoUrl = status.unsigned_urls?.[0];

const downloadUrl =
  videoUrl ?? `https://openrouter.ai/api/v1/videos/${job.id}/content?index=0`;

const videoResponse = await fetch(downloadUrl, {
  headers: downloadUrl.startsWith("https://openrouter.ai/api/")
    ? { Authorization: `Bearer ${apiKey}` }
    : undefined,
});

if (!videoResponse.ok) {
  throw new Error(await videoResponse.text());
}

const videoBuffer = Buffer.from(await videoResponse.arrayBuffer());
await writeFile("greenhouse.mp4", videoBuffer);

console.log("Saved greenhouse.mp4");
```

## Step 4: Put the sequence in your app

Keep the submit, poll, and download steps in the part of your app that owns long-running work. This complete example keeps the pieces together so you can adapt the sequence into a server route, queue, or worker:

```ts expandable lines theme={null}
import { writeFile } from "node:fs/promises";

const apiKey = process.env.OPENROUTER_API_KEY;

if (!apiKey) {
  throw new Error("Set OPENROUTER_API_KEY first.");
}

async function postJson(path: string, body: unknown) {
  const response = await fetch(`https://openrouter.ai/api/v1${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}

const job = await postJson("/videos", {
  model: "google/veo-3.1-lite",
  prompt:
    "A cinematic 4-second shot of a glass greenhouse at sunrise, soft mist, slow dolly-in camera movement",
  duration: 4,
  resolution: "720p",
  aspect_ratio: "16:9",
  generate_audio: false,
});

console.log(`Submitted video job: ${job.id}`);

let status = job;

for (let attempt = 1; attempt <= 60; attempt += 1) {
  if (status.status === "completed") {
    break;
  }

  if (status.status === "failed") {
    throw new Error(status.error ?? "Video generation failed.");
  }

  if (["cancelled", "expired"].includes(status.status)) {
    throw new Error(status.error ?? `Video generation ${status.status}.`);
  }

  await new Promise((resolve) => setTimeout(resolve, 30_000));

  if (!status.polling_url) {
    throw new Error("Video job did not include a polling_url.");
  }

  const pollingUrl = new URL(status.polling_url, "https://openrouter.ai");
  const pollResponse = await fetch(pollingUrl, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });

  if (!pollResponse.ok) {
    throw new Error(await pollResponse.text());
  }

  status = await pollResponse.json();
  console.log(`Status: ${status.status}`);
}

if (status.status !== "completed") {
  throw new Error("Video generation did not complete after 60 attempts.");
}

const videoUrl = status.unsigned_urls?.[0];
const downloadUrl =
  videoUrl ?? `https://openrouter.ai/api/v1/videos/${job.id}/content?index=0`;

const videoResponse = await fetch(downloadUrl, {
  headers: downloadUrl.startsWith("https://openrouter.ai/api/")
    ? { Authorization: `Bearer ${apiKey}` }
    : undefined,
});

if (!videoResponse.ok) {
  throw new Error(await videoResponse.text());
}

const videoBuffer = Buffer.from(await videoResponse.arrayBuffer());
await writeFile("greenhouse.mp4", videoBuffer);

console.log("Saved greenhouse.mp4");
```

## Check your work

The job should move from `pending` or `in_progress` to `completed`, and the implementation should produce a playable MP4 from the completed job.
