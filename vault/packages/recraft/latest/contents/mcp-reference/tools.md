> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Tools

Recraft's MCP server allows use of the following tools.

## Billing

The MCP server charges the same prices as the Recraft web platform and deducts from your **subscription credits** balance. See [Credits](https://www.recraft.ai/docs/plans-and-billing/credits.md) for credit costs per operation.

## Tools

| Tool name | Description | Parameters |
| - | - | - |
| `generate_image` | Generates raster/vector images from a prompt | - `prompt`  - `style`  - `size`  - `model`  - `number of images` |
| `create_style` | Creates a style from a list of images | - `list of images`  - `basic style` |
| `vectorize_image` | Vectorizes a raster image into a vector format | - `image` |
| `image_to_image` | Generates raster/vector images from an image + prompt | - `image`  - `prompt`  - `similarity strength`  - `style`  - `size`  - `model`  - `number of images` |
| `remove_background` | Removes the background of an image | - `image` |
| `replace_background` | Generates a new background in an image from a prompt | - `image`  - `prompt for background`  - `style`  - `size`  - `model`  - `number of images` |
| `crisp_upscale` | Upscales image resolution without altering content | - `image` |
| `creative_upscale` | Upscales image resolution while regenerating details | - `image` |
| `get_user` | Retrieves information about the user and balance | – |

For a detailed explanation of each tool, its parameters, and pricing, visit the [Recraft API docs](https://www.recraft.ai/docs/api-reference/getting-started.md).

## Models and style compatibility

Tools that accept a `model` parameter (`generate_image`, `image_to_image`, `replace_background`) work with any model from the Recraft V2, V3, V4, and V4.1 generations. A few compatibility rules apply:

* **Styles are supported on V4 and V4.1 models** (including their Pro, Utility, and Vector variants, plus the dedicated V4 Styles model) through the `style_id` / `custom_style_id` parameters. See [Styles](https://www.recraft.ai/docs/api-reference/styles.md) for the full compatibility matrix.
* **Vector models** (names ending in `_vector`) produce SVG output; raster models produce PNG/WEBP/JPG output. Pair your chosen model with a compatible style category — raster styles with raster models, vector styles with vector models.
* **`custom_style_id`** created via `create_style` is bound to the model and base style supplied at creation time; reuse it with the same model.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.