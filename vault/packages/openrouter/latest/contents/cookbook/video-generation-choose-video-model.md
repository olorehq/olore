> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Choose a Video Generation Model

> Select an OpenRouter video model by matching clip requirements and scoring priorities

Use this guide when you need to add video model selection based on the clip your app needs to generate.

By the end, your implementation should have a small model-selection helper that filters models by capability and scores them by priority before submitting a video job.

> [!TIP]
>
> Not sure what model to use? Copy this prompt to run a model-selection process.
>
> For reusable agent knowledge across projects, install the [openrouter-video skill](https://github.com/OpenRouterTeam/skills/tree/main/skills/openrouter-video).

## Before you start

You need:

* Node.js 20 or newer
* An OpenRouter API key available as `OPENROUTER_API_KEY` only if you submit the optional generation request
* A stable, directly downloadable image URL if you test an image-to-video request

Use the API reference pages as the source of truth for exact fields:

* [Create video generation request](https://openrouter.ai/docs/api/api-reference/video-generation/submit-a-video-generation-request.md)
* [List video generation models](https://openrouter.ai/docs/api/api-reference/video-generation/list-all-video-generation-models.md)
* [TypeScript SDK video generation reference](https://openrouter.ai/docs/client-sdks/typescript/sdks/videogeneration/README.md)

> [!WARNING]
>
> Submitting `POST /api/v1/videos` starts a real video generation job and may spend OpenRouter credits. Use the model-selection and request-preview steps first, then submit only when the request is ready.

## Step 1: Fetch the video model list

Call the dedicated video model endpoint:

```js lines theme={null}
const response = await fetch("https://openrouter.ai/api/v1/videos/models");

if (!response.ok) {
  throw new Error(await response.text());
}

const { data } = await response.json();
const models = data;

console.log(models.map((model) => model.id));
```

Actual output from the model-list call:

```text lines theme={null}
[
  "x-ai/grok-imagine-video-1.5-lite",
  "heygen/heygen-video-1",
  "black-forest-labs/flux-video-edit",
  "minimax/hailuo-3-max",
  "alibaba/wan-3.0-prime",
  "alibaba/wan-3.0",
  "heygen/avatar-iv",
  "black-forest-labs/flux-video-upscale",
  "bytedance/seedance-2.0-mini",
  "bytedance/seedance-2.5",
  "black-forest-labs/flux-3-video",
  "minimax/hailuo-3",
  "runway/aleph-2",
  "runway/gen-4.5",
  "x-ai/grok-imagine-video-1.5",
  "alibaba/happyhorse-1.1",
  "alibaba/happyhorse-1.0",
  "x-ai/grok-imagine-video",
  "kwaivgi/kling-v3.0-pro",
  "kwaivgi/kling-v3.0-std",
  "google/veo-3.1-fast",
  "google/veo-3.1-lite",
  "kwaivgi/kling-video-o1",
  "minimax/hailuo-2.3",
  "bytedance/seedance-2.0",
  "alibaba/wan-2.7",
  "bytedance/seedance-2.0-fast",
  "alibaba/wan-2.6",
  "bytedance/seedance-1-5-pro",
  "google/veo-3.1"
]
```

Each model includes the values you need for routing decisions. Use the [List video generation models API reference](https://openrouter.ai/docs/api/api-reference/video-generation/list-all-video-generation-models.md) as the source of truth for the endpoint response and model metadata fields. If your app uses the TypeScript SDK, see the generated [`listVideosModels` SDK reference](https://openrouter.ai/docs/client-sdks/typescript/sdks/videogeneration/README#listvideosmodels) for the SDK method shape.

## Step 2: Filter by the job you want to run

Start by translating the product request into model requirements: clip length, output shape, generation mode, audio, deterministic retries, provider-specific controls, and cost. Use the API reference above for the exact metadata fields to inspect before filtering.

For example, this helper finds models that can generate a 720p, vertical, image-to-video clip with first-frame support:

```js expandable lines theme={null}
function findVideoModels(models) {
  return models.filter((model) => {
    const supportsRequest =
      model.supported_resolutions?.includes("720p") &&
      model.supported_aspect_ratios?.includes("9:16") &&
      model.supported_durations?.includes(5) &&
      model.supported_frame_images?.includes("first_frame");

    return supportsRequest;
  });
}

function getLowestAdvertisedPrice(model) {
  const prices = Object.values(model.pricing_skus ?? {})
    .map((price) => Number(price))
    .filter((price) => Number.isFinite(price));

  return prices.length > 0 ? Math.min(...prices) : Number.POSITIVE_INFINITY;
}

const matchingModels = findVideoModels(models).sort((first, second) => {
  return getLowestAdvertisedPrice(first) - getLowestAdvertisedPrice(second);
});

if (matchingModels.length === 0) {
  throw new Error("No matching video model found.");
}

console.log(
  JSON.stringify(
    matchingModels.map((match) => ({
      id: match.id,
      lowest_advertised_price: getLowestAdvertisedPrice(match),
    })),
    null,
    2,
  ),
);
```

Example output:

```json expandable lines theme={null}
[
  {
    "id": "bytedance/seedance-1-5-pro",
    "lowest_advertised_price": 0.0000012
  },
  {
    "id": "bytedance/seedance-2.0-mini",
    "lowest_advertised_price": 0.0000021
  },
  {
    "id": "bytedance/seedance-2.0",
    "lowest_advertised_price": 0.0000024
  },
  {
    "id": "bytedance/seedance-2.0-fast",
    "lowest_advertised_price": 0.000002475
  },
  {
    "id": "bytedance/seedance-2.5",
    "lowest_advertised_price": 0.0000064
  },
  {
    "id": "alibaba/wan-2.6",
    "lowest_advertised_price": 0.04
  },
  {
    "id": "alibaba/wan-3.0",
    "lowest_advertised_price": 0.05
  },
  {
    "id": "alibaba/wan-3.0-prime",
    "lowest_advertised_price": 0.068
  },
  {
    "id": "kwaivgi/kling-v3.0-std",
    "lowest_advertised_price": 0.084
  },
  {
    "id": "alibaba/happyhorse-1.1",
    "lowest_advertised_price": 0.0988
  },
  {
    "id": "alibaba/happyhorse-1.0",
    "lowest_advertised_price": 0.0988
  },
  {
    "id": "alibaba/wan-2.7",
    "lowest_advertised_price": 0.1
  },
  {
    "id": "kwaivgi/kling-v3.0-pro",
    "lowest_advertised_price": 0.112
  },
  {
    "id": "kwaivgi/kling-video-o1",
    "lowest_advertised_price": 0.112
  },
  {
    "id": "x-ai/grok-imagine-video",
    "lowest_advertised_price": 0.2
  },
  {
    "id": "x-ai/grok-imagine-video-1.5-lite",
    "lowest_advertised_price": 1
  },
  {
    "id": "x-ai/grok-imagine-video-1.5",
    "lowest_advertised_price": 1
  },
  {
    "id": "runway/gen-4.5",
    "lowest_advertised_price": 12
  },
  {
    "id": "black-forest-labs/flux-3-video",
    "lowest_advertised_price": 17
  }
]
```

At this point, you have models that satisfy the hard requirements. Score the matching set before selecting one.

## Step 3: Score the matching models by priority

Use weighted priorities to make the final choice. For example, a draft workflow might prioritize speed and cost, while a production render might prioritize quality and cost:

```js expandable lines theme={null}
const priorityProfiles = {
  fastAndCheap: {
    speed: 0.55,
    cost: 0.35,
    quality: 0.1,
  },
  qualityAndCost: {
    speed: 0.15,
    cost: 0.3,
    quality: 0.55,
  },
  balanced: {
    speed: 0.33,
    cost: 0.33,
    quality: 0.34,
  },
};

const resolutionRanks = new Map([
  ["480p", 1],
  ["720p", 2],
  ["1080p", 3],
  ["4K", 4],
]);

function getResolutionRank(model) {
  return Math.max(
    0,
    ...(model.supported_resolutions ?? []).map((resolution) => {
      return resolutionRanks.get(resolution) ?? 0;
    }),
  );
}

function getSpeedScore(model) {
  const id = model.id.toLowerCase();

  if (id.includes("fast")) return 1;
  if (id.includes("lite") || id.includes("std")) return 0.8;
  if (id.includes("pro") || id.includes("o1")) return 0.35;

  return 0.55;
}

function normalize(value, min, max, invert = false) {
  if (!Number.isFinite(value) || max === min) {
    return 0.5;
  }

  const score = (value - min) / (max - min);

  return invert ? 1 - score : score;
}

function scoreVideoModels(models, weights) {
  const prices = models.map(getLowestAdvertisedPrice).filter(Number.isFinite);
  const minPrice = prices.length > 0 ? Math.min(...prices) : 0;
  const maxPrice = prices.length > 0 ? Math.max(...prices) : 0;
  const maxResolutionRank = Math.max(0, ...models.map(getResolutionRank));

  return models
    .map((model) => {
      const price = getLowestAdvertisedPrice(model);
      const speedScore = getSpeedScore(model);
      const costScore = Number.isFinite(price)
        ? normalize(price, minPrice, maxPrice, true)
        : 0;
      const qualityScore =
        maxResolutionRank === 0 ? 0.5 : getResolutionRank(model) / maxResolutionRank;
      const score =
        weights.speed * speedScore +
        weights.cost * costScore +
        weights.quality * qualityScore;

      return {
        model,
        id: model.id,
        score: Number(score.toFixed(3)),
        lowest_advertised_price: price,
        speed_score: Number(speedScore.toFixed(3)),
        cost_score: Number(costScore.toFixed(3)),
        quality_score: Number(qualityScore.toFixed(3)),
      };
    })
    .sort((first, second) => second.score - first.score);
}

function summarizeScores(rankedModels) {
  return rankedModels.slice(0, 4).map(({ model: _model, ...summary }) => {
    return summary;
  });
}

const fastAndCheapModels = scoreVideoModels(
  matchingModels,
  priorityProfiles.fastAndCheap,
);
const qualityAndCostModels = scoreVideoModels(
  matchingModels,
  priorityProfiles.qualityAndCost,
);
const model = fastAndCheapModels[0]?.model;

if (!model) {
  throw new Error("No scored video model found.");
}

console.log(
  JSON.stringify(
    {
      fast_and_cheap: summarizeScores(fastAndCheapModels),
      quality_and_cost: summarizeScores(qualityAndCostModels),
    },
    null,
    2,
  ),
);
console.log(`Use ${model.id}`);
```

Actual output from the scoring helper:

```json expandable lines theme={null}
{
  "fast_and_cheap": [
    {
      "id": "bytedance/seedance-2.0-fast",
      "score": 0.95,
      "lowest_advertised_price": 0.000002475,
      "speed_score": 1,
      "cost_score": 1,
      "quality_score": 0.5
    },
    {
      "id": "x-ai/grok-imagine-video-1.5-lite",
      "score": 0.844,
      "lowest_advertised_price": 1,
      "speed_score": 0.8,
      "cost_score": 0.941,
      "quality_score": 0.75
    },
    {
      "id": "kwaivgi/kling-v3.0-std",
      "score": 0.838,
      "lowest_advertised_price": 0.084,
      "speed_score": 0.8,
      "cost_score": 0.995,
      "quality_score": 0.5
    },
    {
      "id": "bytedance/seedance-2.0",
      "score": 0.752,
      "lowest_advertised_price": 0.0000024,
      "speed_score": 0.55,
      "cost_score": 1,
      "quality_score": 1
    }
  ],
  "quality_and_cost": [
    {
      "id": "bytedance/seedance-2.0",
      "score": 0.932,
      "lowest_advertised_price": 0.0000024,
      "speed_score": 0.55,
      "cost_score": 1,
      "quality_score": 1
    },
    {
      "id": "x-ai/grok-imagine-video-1.5-lite",
      "score": 0.815,
      "lowest_advertised_price": 1,
      "speed_score": 0.8,
      "cost_score": 0.941,
      "quality_score": 0.75
    },
    {
      "id": "alibaba/wan-2.6",
      "score": 0.794,
      "lowest_advertised_price": 0.04,
      "speed_score": 0.55,
      "cost_score": 0.998,
      "quality_score": 0.75
    },
    {
      "id": "alibaba/wan-3.0",
      "score": 0.794,
      "lowest_advertised_price": 0.05,
      "speed_score": 0.55,
      "cost_score": 0.997,
      "quality_score": 0.75
    }
  ]
}
```

```text lines theme={null}
Use bytedance/seedance-2.0-fast
```

Pick the model that best fits your product needs after capability matching. For example, you might prefer the lowest compatible price, audio support, seed support, provider-specific controls, a specific provider, or a known latency profile. The speed score is a slug-based heuristic, and the quality score uses resolution support as a proxy. Pricing SKU units can differ by provider, so treat the helper as a quick starting point and inspect the matching model's `pricing_skus` before routing production traffic.

## Step 4: Preview the generation request

Before submitting, have the implementation build the exact request body it will send. This makes capability mismatches visible before starting a paid job:

```js expandable lines theme={null}
const firstFrameUrl = process.env.FIRST_FRAME_URL;

if (!firstFrameUrl) {
  throw new Error("Set FIRST_FRAME_URL to a directly downloadable image URL.");
}

const requestBody = {
  model: model.id,
  prompt:
    "A handheld vertical product shot of a ceramic mug on a sunny kitchen counter",
  duration: 5,
  resolution: "720p",
  aspect_ratio: "9:16",
  frame_images: [
    {
      type: "image_url",
      image_url: {
        url: firstFrameUrl,
      },
      frame_type: "first_frame",
    },
  ],
};

console.log(JSON.stringify(requestBody, null, 2));
```

Before submitting, check that your image URL returns `200` with an image content type:

```bash lines theme={null}
curl -I "$FIRST_FRAME_URL"
```

Example output:

```text lines theme={null}
HTTP/2 200
content-type: image/jpeg
```

## Step 5: Submit when ready

```js lines theme={null}
const apiKey = process.env.OPENROUTER_API_KEY;

if (!apiKey) {
  throw new Error("Set OPENROUTER_API_KEY before submitting a video job.");
}

const generation = await fetch("https://openrouter.ai/api/v1/videos", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify(requestBody),
});

if (!generation.ok) {
  throw new Error(await generation.text());
}

console.log(await generation.json());
```

The submission response contains the job `id`, `polling_url`, and an initial status. In a completed run, that submitted job later reached this final state:

```json lines theme={null}
{
  "id": "S2wge1oFOBzIj1PpFcFu",
  "status": "completed",
  "polling_url": "https://openrouter.ai/api/v1/videos/S2wge1oFOBzIj1PpFcFu",
  "has_unsigned_urls": true
}
```

## Check your work

Before submission, you should see a request body whose model supports every capability you filtered for. If you submit the request, you should see a response with a video job `id`, a `polling_url`, and an initial status such as `pending`. To wait for the playable MP4, use the polling and download helper from [Generate and Download a Video from Text](https://openrouter.ai/docs/cookbook/video-generation/text-to-video.md).
