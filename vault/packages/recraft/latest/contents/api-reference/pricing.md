> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Pricing

> Recraft API unit packages and the per-image and per-request price of every model and operation.

The Recraft API is pay as you go. You buy API units in advance and each request deducts its cost. The `credits` field of every response shows how many units it used.

> [card] \$1 = 1,000 units
>
> Buy any number of packages.

> [card] From \$0.007
>
> per image, with V4.1 Flash

> [card] No expiry
>
> Purchased units don't expire.

API unit packages are non-cancellable and non-refundable. All tokens of one account share the same balance; check it with [Get user information](https://www.recraft.ai/docs/api-reference/endpoints.md#get-user-information).

## Image generation

Price per image. Multiply by 1,000 for API units: \$0.035 is 35 units.

| Model | Raster | Vector | Pro raster (2K) | Pro vector |
| - | - | - | - | - |
| [V4.1 Flash](https://www.recraft.ai/docs/api-reference/models/recraft-v4-1-flash.md) | \$0.007 | — | — | — |
| [V4.1](https://www.recraft.ai/docs/api-reference/models/recraft-v4-1.md) and V4.1 Utility | \$0.035 | \$0.08 | \$0.21 | \$0.30 |
| [V4 Styles](https://www.recraft.ai/docs/api-reference/models/recraft-v4-styles.md) | \$0.035 | \$0.05 | \$0.10 | \$0.12 |
| [V4](https://www.recraft.ai/docs/api-reference/models/recraft-v4.md) | \$0.04 | \$0.08 | \$0.25 | \$0.30 |
| [V3](https://www.recraft.ai/docs/api-reference/models/recraft-v3.md) | \$0.04 | \$0.08 | — | — |
| [V2](https://www.recraft.ai/docs/api-reference/models/recraft-v2.md) | \$0.022 | \$0.044 | — | — |

Generating with style references also creates a style, which adds \$0.005 per request.

## Image editing with V3

Price per image, with `recraftv3` (raster) or `recraftv3_vector` (vector).

| Operation | Raster | Vector |
| - | - | - |
| [Image to image](https://www.recraft.ai/docs/api-reference/tools/image-to-image.md) | \$0.04 | \$0.08 |
| [Inpainting](https://www.recraft.ai/docs/api-reference/tools/inpainting.md) | \$0.04 | \$0.08 |
| [Outpainting](https://www.recraft.ai/docs/api-reference/tools/outpainting.md) | \$0.04 | \$0.08 |
| [Replace background](https://www.recraft.ai/docs/api-reference/tools/background.md) | \$0.04 | \$0.08 |
| [Generate background](https://www.recraft.ai/docs/api-reference/tools/background.md#generate-background) | \$0.04 | \$0.08 |

## Image tools

Price per request.

| Operation | Price | API units |
| - | - | - |
| [Erase region](https://www.recraft.ai/docs/api-reference/tools/erase-region.md) | \$0.002 | 2 |
| [Crisp upscale](https://www.recraft.ai/docs/api-reference/tools/upscale.md) | \$0.004 | 4 |
| [Create style](https://www.recraft.ai/docs/api-reference/endpoints.md#create-style) | \$0.005 | 5 |
| [Vectorize image](https://www.recraft.ai/docs/api-reference/tools/vectorize.md) | \$0.01 | 10 |
| [Remove background](https://www.recraft.ai/docs/api-reference/tools/remove-background.md) | \$0.01 | 10 |
| [Enhance prompt](https://www.recraft.ai/docs/api-reference/tools/enhance-prompt.md) | \$0.01 | 10 |
| [Remix image](https://www.recraft.ai/docs/api-reference/tools/remix.md) | \$0.04 | 40 |
| [Enhance details](https://www.recraft.ai/docs/api-reference/tools/enhance-details.md) (V4.1 Pro) | \$0.21 | 210 |
| [Creative upscale](https://www.recraft.ai/docs/api-reference/tools/upscale.md#creative-upscale) | \$0.25 | 250 |


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.