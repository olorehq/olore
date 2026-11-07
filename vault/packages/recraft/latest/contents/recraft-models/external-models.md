> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# External Models in Recraft

Recraft Studio gives you access to a curated selection of third-party image and video generation models alongside Recraft's own proprietary models.

## What are external models?

External models are image and video generation models built by other providers that are available to use directly inside Recraft Studio. You can find them in the model selector alongside Recraft's native V2, V3, V4 and V4.1 models.

### Where can I use external models?

External models are available in **Recraft Studio only**. Each generation consumes credits based on the model and quality setting.

**External models are not available via the Recraft API.** The API supports only Recraft's proprietary model family (V2, V3, V4 and V4.1 generations).

### Supported external models for Image generation

| Provider | Models |
| :- | :- |
| **OpenAI** | GPT Image 1.5 Low, Medium, High GPT Image 2 Low, Medium, High |
| **Google** | Nano Banana Nano Banana 2 Nano Banana Pro Nano Banana 2 4K Nano Banana Pro 4K Nano Banana 2 Lite |
| **Black Forest Labs** | Flux 1 Schnell Flux 1 Kontext Pro Flux 1 Kontext Max Flux 2 Dev Flux 2 Pro Flux 2 Max Flux 2 Flex |
| **Alibaba** | Qwen-Image 2 Qwen-Image 2 Pro Qwen Image 3 Qwen Image 3 2K Z-Image Turbo |
| **ByteDance** | Seedream V4 Seedream V4.5 Seedream 5.0 Lite, Seedream 5.0 Pro |
| **Ideogram** | Ideogram V4 Turbo Ideogram V4 Balanced Ideogram V4 Quality |
| **ImagineArt** | ImagineArt 2.0 |
| **Grok Imagine** | Grok Imagine Image, **Grok Imagine Image 2** |
| **NVIDIA** | Cosmos 3 Super |
| **Krea** | Krea 2 Large Krea 2 Medium Krea 2 Turbo |
| Reve | **Reve 2.1** |

> *The list of available external models may change over time as new models are added or removed.*

## Credits and Reference Images

Credit consumption varies depending on the selected model. The exact number of credits is displayed in the product when you choose a model.

| Provider | Credits | Reference Images |
| :- | :- | :- |
| **OpenAI** | 2–24 credits | Supports up to **10 reference images**. |
| **Google** | 5–40 credits | **Nano Banana** models support up to **10 reference images**. |
| **Black Forest Labs** | 1–18 credits | **FLUX.1 Kontext Max** and **FLUX.1 Kontext Pro** support **1 reference image**. **FLUX.2 Dev** supports **3 reference images**. **FLUX.2 Pro**, **FLUX.2 Flex**, and **FLUX.2 Max** support up to **8 reference images**. |
| **Alibaba** | 1–14 credits | **Qwen-Image 2**, and **Qwen-Image 2 Pro** support up to **10 reference images**. Qwen Image 3 and Qwen Image 3 2K support up to **3 reference images** |
| **ByteDance** | 7–22 credits | Supports up to **10 reference images**. |
| **Ideogram** | 4–17 credits | Credit cost varies by model. |
| **ImagineArt** | 8 credits | Credit cost is fixed at **8 credits**. |
| **Grok Imagine** | 4-13 credits | Supports up to **3 reference images**. |
| **NVIDIA** | 7 credits | Credit cost is fixed at **7 credits**. |
| **Krea** | 2–8 credits | Credit cost varies by model. |
| Reve | 33 credits | Supports 1 image reference |

> **Note:** The exact credit cost for each model is shown in the Recraft interface when you select it and may vary depending on the chosen model.

### Supported external models for Video generation

| **Provider** | **Models** |
| :- | :- |
| **OpenAI** | **Sora 2** **Sora 2 Pro** |
| **Google** | **Gemini Omni Flash** **Veo 3.1 Lite** **Veo 3.1 Fast** **Veo 3.1** |
| **Kling** | **Kling 2.1 Master** **Kling 2.5 Turbo** **Kling 2.6 Pro** **Kling 3 Turbo** **Kling 3 Omni Standard** **Kling 3 Omni Pro**  **Kling 3 Standard** **Kling 3 Pro** |
| **Pixverse** | **Pixverse V6** **Pixverse V5.5** **Pixverse V5.6** |
| **Seedance** | **Seedance 1.5 Pro** **Seedance 2.0 Fast** **Seedance 2.0** **Seadance 2.5** |
| **Alibaba** | **Wan 2.2 A14B** **Wan 2.5 Preview** **Wan 2.6** **Wan 2.7** **Happy Horse 1.0** **Happy Horse 1.1** |
| **MiniMax** | **MiniMax H3** **Hailuo-02 Standard** **Hailuo-02 Pro** **Hailuo-2.3 Standard** **Hailuo-2.3 Pro** |
| **Ray** | **Ray 2 Flash**  **Ray 2** |
| **Grok Imagine** | **Grok Imagine Video** **Grok Imagine Video 1.5** |
| Flux | Flux 3 Video |

## Video Generation Credits

Video generation is priced **per second**. The total cost of a generation depends on both the **selected model** and additional video settings. In general, the longer the video, the higher the total credit cost.

| Provider | Credits per Second |
| :- | :- |
| **OpenAI** | 17–83 credits, depending on the selected model and additional settings |
| **Google** | 13–142 credits,  depending on the selected model and additional settings |
| **Kling** | 12–56 credits,  depending on the selected model and additional settings |
| **PixVerse** | 7–80 credits,  depending on the selected model and additional settings |
| **Seedance** | 9–53 credits,  depending on the selected model and additional settings |
| **Alibaba** | 7–35 credits,  depending on the selected model and additional settings |
| **MiniMax** | 9–22 credits,  depending on the selected model and additional settings |
| **Ray** | 15–36 credits,  depending on the selected model and additional settings |
| **Grok Imagine** | 10-28 credits, depending on the selected model and additional settings |
| Flux | 35-42 credits, depending on the selected model and additional settings |

> **Note:** The exact credit cost is displayed in the Recraft interface when you select a model and configure your video generation settings.

### FAQ

**Can I use GPT Image, Flux, or other external models through the Recraft API?** No. The Recraft API supports only Recraft's own models (V2, V3, V4 and V4.1 ). External models are available in Recraft Studio only.

**Why do different models have different credit prices?** Different models have different credit prices because each model has unique capabilities and API costs. More advanced or higher-quality models require more credits per use. For example, Nano Banana Pro 4K costs more credits than basic raster generation. The credit cost reflects the model’s complexity and external API pricing. You can find more details about how credits work [**here**](https://www.recraft.ai/docs/plans-and-billing/credits.md).


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.