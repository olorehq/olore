> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Limits and sizes

> Rate limits, image storage, prompt length, supported image sizes, and input image limits for every Recraft API model.

> [card] 100 / min
>
> images per user

> [card] 5 / s
>
> requests per user

> [card] \~24 h
>
> image URL lifetime

> [card] 10,000
>
> prompt characters, V4 and newer

## Rate limits

| Limit | Value |
| - | - |
| Images generated | 100 per minute, per user |
| Requests | 5 per second, per user |

Limits apply per user, across all API tokens. They may change in the future.

## Image storage

* Generated images are stored for about **24 hours**. Download the files you need to keep. This policy may change, so don't rely on the exact duration.
* Image URLs are public and need no authentication. They contain a unique signed identifier, so a lost URL can't be recovered.

## Prompt length

| Models | Max characters |
| - | - |
| V4.1, V4.1 Utility, V4.1 Flash, V4, V4 Styles, including all Pro and Vector variants | 10,000 |
| V3, V3 Vector, V2, V2 Vector | 1,000 |
| [Enhance prompt](https://www.recraft.ai/docs/api-reference/tools/enhance-prompt.md) input | 2,000 |

## Image sizes

Set `size` in one of two formats:

* **Aspect ratio** `w:h`, for example `16:9`. Works with every model. Prefer it.
* **Exact size** `WxH`, for example `1344x768`. Must be one of the sizes listed for the model; any other value is rejected.

When `size` is omitted, the size is picked from the prompt.

| Ratio | 1K models | 2K models (Pro) | V2, V3 |
| - | - | - | - |
| `1:1` | `1024x1024` | `2048x2048` | `1024x1024` |
| `2:1` | `1536x768` | `3072x1536` | `2048x1024` |
| `1:2` | `768x1536` | `1536x3072` | `1024x2048` |
| `3:2` | `1280x832` | `2560x1664` | `1536x1024` |
| `2:3` | `832x1280` | `1664x2560` | `1024x1536` |
| `4:3` | `1216x896` | `2432x1792` | `1365x1024` |
| `3:4` | `896x1216` | `1792x2432` | `1024x1365` |
| `5:4` | `1152x896` | `2304x1792` | `1280x1024` |
| `4:5` | `896x1152` | `1792x2304` | `1024x1280` |
| `6:10` | `832x1344` | `1664x2688` | `1024x1707` |
| `14:10` | `1280x896` | `2560x1792` | `1434x1024` |
| `10:14` | `896x1280` | `1792x2560` | `1024x1434` |
| `16:9` | `1344x768` | `2688x1536` | `1820x1024` |
| `9:16` | `768x1344` | `1536x2688` | `1024x1820` |

* **1K models:** `recraftv4_1`, `recraftv4_1_utility`, `recraftv4_1_flash`, `recraftv4`, `recraftv4_styles`.
* **2K models:** `recraftv4_1_pro`, `recraftv4_1_utility_pro`, `recraftv4_pro`, `recraftv4_styles_pro`.
* **V2, V3:** `recraftv2`, `recraftv3`.
* **Vector models** (every `_vector` model) accept the same 14 ratios as `w:h` only; SVG output has no fixed pixel size.

## Input images

For every endpoint that takes an image, sent as a file or as `image_url`:

| Limit | Value |
| - | - |
| Formats | PNG, JPG, WEBP; SVG where noted on the endpoint |
| File size | Under 20 MB |
| Resolution | Up to 16 MP, longest side up to 4096 px |
| Shortest side | At least 256 px (32 px for crisp upscale) |
| Masks | Grayscale, same size as the image, pixels pure black (`0`) or pure white (`255`) |
| Style references | 1 to 10 images, 64 MB in total |

See [Image inputs and results](https://www.recraft.ai/docs/api-reference/image-inputs-and-results.md) for how to send images and receive results.

Questions or ideas for these docs? [Contact support](mailto:help@recraft.ai).


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.