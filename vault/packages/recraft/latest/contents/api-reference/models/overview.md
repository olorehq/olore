> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# All models

> Every Recraft API model with its price, output, and best use case, and how model names encode raster, vector, Pro, Utility, and Flash variants.

The Recraft API provides access to several generations of Recraft image models. Each family comes in multiple variants, and the variant is encoded in the `model` parameter value:

* names ending in `_vector` produce vector (SVG) images; all other models produce raster images;
* `_pro` variants generate at a higher resolution (2K raster) with finer detail;
* `_utility` variants (Recraft V4.1 only) produce clean, predictable images with flat lighting and simple composition;
* `_flash` variants (Recraft V4.1 only) are fast, low-cost raster models without style support;
* `_styles` models are dedicated style-driven models that always require a style.
* every raster model also accepts a `_raster` alias of the same model, for example `recraftv4_1_raster` for `recraftv4_1` or `recraftv4_pro_raster` for `recraftv4_pro`. The aliases behave exactly like the base names; these docs use the base names.

> [!NOTE]
>
> When no `model` is specified, [Generate image](https://www.recraft.ai/docs/api-reference/endpoints.md#generate-image) defaults to `recraftv4_1`. The one exception: a request with attached [style references](https://www.recraft.ai/docs/api-reference/endpoints.md#style-references) and no `model` defaults to `recraftv4_styles`.

## The model lineup

| Model | Price per raster / vector image | Best suited for |
| - | - | - |
| [Recraft V4.1 Flash](https://www.recraft.ai/docs/api-reference/models/recraft-v4-1-flash.md) | \$0.007 / — | The fastest and cheapest model, with quality close to V4.1: high-volume generation and rapid iteration, raster only |
| [Recraft V4 Styles](https://www.recraft.ai/docs/api-reference/models/recraft-v4-styles.md) | from \$0.035 / \$0.05 | State-of-the-art style-consistent generation: define a style from your references once, and every image holds to it |
| [Recraft V4.1](https://www.recraft.ai/docs/api-reference/models/recraft-v4-1.md) | from \$0.035 / \$0.08 | The default and most capable model: photorealism, illustration, and strong results from short prompts |
| [Recraft V4](https://www.recraft.ai/docs/api-reference/models/recraft-v4.md) | from \$0.04 / \$0.08 | Design taste, prompt accuracy, and output quality at any size: true design vision in composition, lighting, and textures |
| [Recraft V3](https://www.recraft.ai/docs/api-reference/models/recraft-v3.md) *(previous generation)* | \$0.04 / \$0.08 | Photorealism and text rendering, plus inpainting, outpainting, and background operations |
| [Recraft V2](https://www.recraft.ai/docs/api-reference/models/recraft-v2.md) *(previous generation)* | \$0.022 / \$0.044 | The most cost-efficient vector option: icons, minimalistic vector styles, and consistent brand styling |

## Release history

| Released | Family | What it brought |
| - | - | - |
| September 2026 | [V4.1 Flash](https://www.recraft.ai/docs/api-reference/models/recraft-v4-1-flash.md) | About 1.3 seconds and \$0.007 per image, quality close to V4.1 |
| August 2026 | [V4 Styles](https://www.recraft.ai/docs/api-reference/models/recraft-v4-styles.md) | State-of-the-art style matching from 1 to 10 references, no training |
| May 2026 | [V4.1](https://www.recraft.ai/docs/api-reference/models/recraft-v4-1.md) | Sharper photorealism, better prompt following, and the Utility line |
| February 2026 | [V4](https://www.recraft.ai/docs/api-reference/models/recraft-v4.md) | Ground-up rebuild: design taste and production-grade vectors |
| October 2024 | [V3](https://www.recraft.ai/docs/api-reference/models/recraft-v3.md) | Photorealism and text rendering; first on the Hugging Face text-to-image leaderboard for five months |
| February 2024 | [V2](https://www.recraft.ai/docs/api-reference/models/recraft-v2.md) | The first model built for designers, raster and vector |

## Related

> [card] [Quickstart](https://www.recraft.ai/docs/api-reference/getting-started.md)
>
> Authentication and your first generation request.

> [card] [Endpoints](https://www.recraft.ai/docs/api-reference/endpoints.md)
>
> Full parameter reference for every API operation.

> [card] [Pricing](https://www.recraft.ai/docs/api-reference/pricing.md)
>
> The full price list, including image editing and utility operations.

> [card] [Appendix](https://www.recraft.ai/docs/api-reference/appendix.md)
>
> Supported image sizes and maximum prompt lengths per model.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.