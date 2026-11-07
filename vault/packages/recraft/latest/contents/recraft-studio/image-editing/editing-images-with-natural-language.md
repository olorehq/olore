> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Editing images with natural language

Recraft Studio supports targeted image editing using integrated external models from **Google (Nano Banana)**, **OpenAI (GPT Image)**, **ByteDance (Seedream)**, **Black Forest Labs (Flux)**, **Alibaba (Qwen)**, **Ideogram**, **Krea**, **ImagineArt**, **NVIDIA (Cosmos)**, and **xAI (Grok Imagine)** that respond to natural language prompts and, for many models, optional reference images. These models are built directly into the Recraft interface, so you can make precise edits without switching platforms or starting from scratch.

Natural language editing allows you to modify specific aspects of an image (like clothing, background, or facial expression) while preserving the overall structure and style. Only the elements described in your prompt are changed; everything else remains intact.

## Use cases

* Make small adjustments, such as changing clothing, background elements, or facial features
* Refine visual details without regenerating the entire image
* Maintain stylistic or character consistency across multiple images
* Add, remove, or modify specific objects within a scene
* Adjust visual elements like lighting, color palette, or seasonal context
* Update product features or character traits while keeping composition intact
* Apply a consistent style or mood using reference images

## **Two ways to start an edit**

Select an image on the canvas and choose **Edit image** in the right panel, under Modify. The prompt for it is right there, next to the image.

Or work in **Create** in the left panel: attach an existing image as a reference and describe the change. Use this when you're combining several references, or continuing from a generation you just made.

Both use the same editing models and produce the same result.

*The existing model list, reference limits and provider table all stay as they are.*

## How to edit an image with natural language prompts

1. Open a project and upload or generate the image you want to modify.
2. Select the image on the canvas.
3. Select a model:

In the prompt panel, select a model. Models are grouped by provider (Recraft, Flux, GPT, Nano Banana, Ideogram, Krea, Seedream, Qwen, ImagineArt, NVIDIA, Grok Imagine), and each provider offers multiple quality/speed tiers — for example, GPT Image 2 (Low, Medium, High) or Nano Banana 2 (Standard, Lite, 4K). Selecting **Auto mode** lets Recraft choose the best model for your prompt automatically.

Enter a prompt describing the change (e.g., *"make the jacket red"* or *"change background to nighttime"*).

(Optional) Click the **paper clip icon** in the prompt panel to attach reference images:

* Up to **10 images** for GPT Image, Nano Banana, Seedream, and Qwen models
* **1–8 images** for Flux models, varying by tier (Flux 1 Kontext supports 1; Flux 2 Pro/Flex/Max support 8)

Reference images are not supported by Ideogram, Krea, ImagineArt, NVIDIA, or Grok Imagine models. Exact limits are shown next to each model in the picker.

* Click the **generate button** to apply the edit.

You can repeat the process as needed. Each new edit builds on the previous result without requiring a full regeneration.

## Supported models

Currently, the reference image feature is supported only by select external models (see table below for which ones support it). You can manually choose a model, or leave **Auto mode** selected to let Recraft pick a model automatically when a reference image is attached.

| Provider | Model | Credits | Time | Reference images |
| - | - | - | - | - |
| Google | Nano Banana | 5 | 12s | 10 |
| Google | Nano Banana 2 | 11 | 25s | 10 |
| Google | Nano Banana 2 Lite | 7 | 4s | 10 |
| Google | Nano Banana 2 4K | 22 | 60s | 10 |
| Google | Nano Banana Pro | 20 | 30s | 10 |
| Google | Nano Banana Pro 4K | 40 | 60s | 10 |
| OpenAI | GPT Image 1.5 Low | 2 | 15s | 10 |
| OpenAI | GPT Image 1.5 Medium | 7 | 25s | 10 |
| OpenAI | GPT Image 1.5 High | 24 | 50s | 10 |
| OpenAI | GPT Image 2 Low | 2 | 35s | 10 |
| OpenAI | GPT Image 2 Medium | 7 | 45s | 10 |
| OpenAI | GPT Image 2 High | 24 | 90s | 10 |
| Black Forest Labs | Flux 1 Schnell | 1 | 2s | — |
| Black Forest Labs | Flux 1 Kontext Pro | 8 | 7s | 1 |
| Black Forest Labs | Flux 1 Kontext Max | 15 | 12s | 1 |
| Black Forest Labs | Flux 2 Dev | 3 | 6s | 3 |
| Black Forest Labs | Flux 2 Pro | 10 | 10s | 8 |
| Black Forest Labs | Flux 2 Flex | 13 | 20s | 8 |
| Black Forest Labs | Flux 2 Max | 18 | 20s | 8 |
| ByteDance | Seedream V4 | 7 | 18s | 10 |
| ByteDance | Seedream V4.5 | 8 | 30s | 10 |
| ByteDance | Seedream 5.0 Lite | 8 | 30s | 10 |
| ByteDance | Seedream 5.0 Pro | 22 | 150s | 10 |
| Alibaba | Qwen-Image 2 | 6 | 12s | 10 |
| Alibaba | Qwen-Image 2 Pro | 12 | 25s | 10 |
| Alibaba | Z-Image Turbo | 1 | 3s | 10 |
| Ideogram | Ideogram V4 Turbo | 4 | 20s | — |
| Ideogram | Ideogram V4 Balanced | 6 | 30s | — |
| Ideogram | Ideogram V4 Quality | 10 | 40s | — |
| Krea | Krea 2 Turbo | 2 | 15s | — |
| Krea | Krea 2 Medium | 4 | 25s | — |
| Krea | Krea 2 Large | 8 | 30s | — |
| ImagineArt | ImagineArt 2.0 | 8 | 40s | — |
| NVIDIA | Cosmos 3 Super | 7 | 30s | — |
| xAI | Grok Imagine Image | 4 | 8s | 3 |

## Notes on external models

Each external model has its own supported aspect ratios, shown in the aspect-ratio selector when you choose a model. Some models support a wide range (e.g., GPT Image 2 supports 16:9 and other widescreen formats natively), while others are more limited. If your original image uses a ratio a model doesn't support, the output will default to the closest supported format.

The credit cost for using external models depends on each model's API pricing.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.