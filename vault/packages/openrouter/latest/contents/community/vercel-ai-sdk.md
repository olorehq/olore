> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Vercel AI SDK

> Using OpenRouter with Vercel AI SDK

## Vercel AI SDK

You can use the [Vercel AI SDK](https://www.npmjs.com/package/ai) to integrate OpenRouter with your Next.js app. To get started, install [@openrouter/ai-sdk-provider](https://github.com/OpenRouterTeam/ai-sdk-provider):

```bash title="npm" lines theme={null}
npm install @openrouter/ai-sdk-provider
```

```bash title="pnpm" lines theme={null}
pnpm add @openrouter/ai-sdk-provider
```

```bash title="yarn" lines theme={null}
yarn add @openrouter/ai-sdk-provider
```

```bash title="bun" lines theme={null}
bun add @openrouter/ai-sdk-provider
```

```bash title="deno" lines theme={null}
deno add npm:@openrouter/ai-sdk-provider
```

And then you can use [streamText()](https://sdk.vercel.ai/docs/reference/ai-sdk-core/stream-text) API to stream text from OpenRouter.

```typescript title="TypeScript" expandable lines theme={null}
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { streamText } from 'ai';
import { z } from 'zod';

export const getLasagnaRecipe = async (modelName: string) => {
  const openrouter = createOpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const response = streamText({
    model: openrouter(modelName),
    prompt: 'Write a vegetarian lasagna recipe for 4 people.',
  });

  await response.consumeStream();
  return response.text;
};

export const getWeather = async (modelName: string) => {
  const openrouter = createOpenRouter({
    apiKey: '<OPENROUTER_API_KEY>',
  });

  const response = streamText({
    model: openrouter(modelName),
    prompt: 'What is the weather in San Francisco, CA in Fahrenheit?',
    tools: {
      getCurrentWeather: {
        description: 'Get the current weather in a given location',
        parameters: z.object({
          location: z
            .string()
            .describe('The city and state, e.g. San Francisco, CA'),
          unit: z.enum(['celsius', 'fahrenheit']).optional(),
        }),
        execute: async ({ location, unit = 'celsius' }) => {
          // Mock response for the weather
          const weatherData = {
            'Boston, MA': {
              celsius: '15°C',
              fahrenheit: '59°F',
            },
            'San Francisco, CA': {
              celsius: '18°C',
              fahrenheit: '64°F',
            },
          };

          const weather = weatherData[location];
          if (!weather) {
            return `Weather data for ${location} is not available.`;
          }

          return `The current weather in ${location} is ${weather[unit]}.`;
        },
      },
    },
  });

  await response.consumeStream();
  return response.text;
};
```

## Video Generation

OpenRouter supports [video generation](https://openrouter.ai/docs/guides/overview/multimodal/video-generation.md) through the AI SDK's [`experimental_generateVideo`](https://sdk.vercel.ai/docs/reference/ai-sdk-core/generate-video) API. The provider handles the asynchronous submit-poll-download workflow automatically.

```typescript title="TypeScript" lines theme={null}
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { experimental_generateVideo as generateVideo } from 'ai';

const openrouter = createOpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const { video } = await generateVideo({
  model: openrouter.videoModel('google/veo-3.1'),
  prompt: 'A golden retriever playing fetch on a sunny beach with waves crashing in the background',
  aspectRatio: '16:9',
  duration: 4,
});

console.log(video.mediaType); // 'video/mp4'
console.log(video.uint8Array.byteLength); // video size in bytes
```

### Passthrough Options

Each video model supports model-specific parameters that can be passed through via `provider.options` in `extraBody`, keyed by provider slug. See the [video generation docs](https://openrouter.ai/docs/guides/overview/multimodal/video-generation.md#via-the-video-models-api) for the full list of `allowed_passthrough_parameters` per model.

```typescript title="TypeScript (Veo 3.1)" expandable lines theme={null}
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { experimental_generateVideo as generateVideo } from 'ai';

const openrouter = createOpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const { video } = await generateVideo({
  model: openrouter.videoModel('google/veo-3.1', {
    generateAudio: true,
    extraBody: {
      provider: {
        options: {
          'google-vertex': {
            parameters: {
              personGeneration: 'allow_all',
              enhancePrompt: true,
            },
          },
        },
      },
    },
  }),
  prompt: 'A timelapse of a flower blooming in a sunlit garden',
  aspectRatio: '16:9',
});
```

```typescript title="TypeScript (Wan 2.7)" expandable lines theme={null}
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { experimental_generateVideo as generateVideo } from 'ai';

const openrouter = createOpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const { video } = await generateVideo({
  model: openrouter.videoModel('alibaba/wan-2.7', {
    extraBody: {
      provider: {
        options: {
          'atlas-cloud': {
            negative_prompt: 'blurry, low quality, distorted, watermark',
          },
        },
      },
    },
  }),
  prompt: 'A character walking through a forest',
  aspectRatio: '16:9',
  duration: 4,
});
```

### Video Model Settings

| Setting | Type | Default | Description |
| - | - | - | - |
| `generateAudio` | boolean | `false` | Whether to generate audio alongside the video |
| `pollIntervalMs` | number | `2000` | Polling interval in milliseconds when waiting for generation |
| `maxPollTimeMs` | number | `600000` | Maximum time in milliseconds to wait before timing out |
| `extraBody` | object | None | Default body parameters merged into every request for this model |

### Image-to-Video

You can pass a reference image to guide the video generation:

```typescript title="TypeScript" lines theme={null}
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { experimental_generateVideo as generateVideo } from 'ai';

const openrouter = createOpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const { video } = await generateVideo({
  model: openrouter.videoModel('alibaba/wan-2.7'),
  prompt: 'A character walking through a forest',
  image: new URL('https://example.com/first-frame.png'),
  resolution: '1920x1080',
});
```

### Provider Metadata

The response includes OpenRouter-specific metadata accessible via `providerMetadata`:

```typescript title="TypeScript" lines theme={null}
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { experimental_generateVideo as generateVideo } from 'ai';

const openrouter = createOpenRouter({
  apiKey: '<OPENROUTER_API_KEY>',
});

const result = await generateVideo({
  model: openrouter.videoModel('google/veo-3.1'),
  prompt: 'A slow pan across a calm mountain lake at sunrise',
  aspectRatio: '16:9',
});

console.log(result.providerMetadata?.openrouter);
// { generationId: 'gen-...', cost: 0.25 }
```

For the full list of supported models, resolutions, aspect ratios, and provider-specific options, see the [Video Generation documentation](https://openrouter.ai/docs/guides/overview/multimodal/video-generation.md).
