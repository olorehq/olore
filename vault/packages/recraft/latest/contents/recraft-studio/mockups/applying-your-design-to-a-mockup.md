> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Applying your design to the mockup

Once the mockup frame is ready, you can add and position your artwork:

1. Upload or generate your design (image, logo, text, etc.) onto the canvas.
2. Place it over the mockup frame.
3. Adjust **position**, **size**, and **rotation**.
4. Use available styling options:
   * **Appearance settings**: Control blending, texture, shading, and how the design interacts with the surface.
   * **Tiling**: Repeat the design pattern across the mockup.
   * **Masking**: Limit where the design appears on the mockup surface.
5. When you’re satisfied, select the mockup image and export it as a PNG, JPG, PDF, or TIFF (CMYK) format.

## Appearance settings

The Appearance panel controls how the applied design visually interacts with the mockup surface. These settings affect only the design layer, not the mockup base.

### Blend mode

Blend mode determines how the colors and brightness of the design combine with the underlying mockup.

| Blend mode | Description |
| - | - |
| **Normal** | Displays the design as-is, without blending with the mockup colors. |
| **Darken** | Keeps the darker pixels from either the design or the mockup, allowing lighter areas to drop out. |
| **Multiply** | Darkens the result by combining design and mockup colors, making the design appear printed into shadows. |
| **Color Burn** | Deepens shadows and increases contrast by darkening the mockup based on the design. |
| **Lighten** | Keeps the lighter pixels from either the design or the mockup, removing darker design areas. |
| **Screen** | Brightens the result by lightening darker areas while preserving highlights. |
| **Color Dodge** | Intensifies highlights by brightening the mockup using the design’s lighter colors. |
| **Overlay** | Increases contrast by darkening shadows and lightening highlights while preserving midtones. |
| **Soft Light** | Applies a subtle contrast adjustment, gently lightening or darkening based on the design. |
| **Hard Light** | Applies strong contrast, similar to Overlay but with a more pronounced effect. |
| **Difference** | Produces an inverted, high-contrast result by subtracting color values between layers. |
| **Exclusion** | Similar to Difference but with lower contrast and softer color inversion. |
| **Hue** | Applies the design’s hue while preserving the mockup’s brightness and saturation. |
| **Saturation** | Applies the design’s saturation while preserving the mockup’s hue and brightness. |
| **Color** | Applies the design’s hue and saturation while preserving the mockup’s brightness. |
| **Luminosity** | Applies the design’s brightness while preserving the mockup’s color information. |

### AI Blend mode

AI Blend mode applies adaptive, AI-generated shading to the design based on the lighting, folds, and contours of the mockup surface.

When enabled, the design appears more naturally integrated into the product. AI Blend mode works alongside standard blend modes and can be toggled on or off independently.

### Show texture

Show texture controls whether the surface texture of the mockup is applied to the design.

* **Yes**: The design inherits surface details such as fabric grain or material texture.
* **No**: The design appears smooth and uniform on the surface.

This setting affects texture only and does not change lighting or shading.

### Tiling

Tiling controls how the design repeats across the mockup surface.

* **None**: The design appears once.
* **Repeat**: The design is tiled evenly across the surface.
* **Mirror**: The design is tiled with alternating mirrored tiles to reduce visible seams.

Tiling works best with seamless patterns.

### Masking the design

Masking lets you hide or reveal parts of a design so it fits the surface of a mockup, such as fabric folds, edges, or object contours.

To edit a mask:

1. Select the design placed on top of the mockup.
2. Open **Edit mask** in the right sidebar.
3. Choose a **Selection** mode:

   * **Brush**: Paint freeform areas into the mask.
   * **Lasso**: Draw a closed shape to define a masked region.
   * **Area**: Select a rectangular region to add to the mask.
   * **Wand**: Automatically selects contiguous areas based on visual boundaries.
4. Set **Show mask → Yes** to visualize the active mask while editing.

#### Precision controls

* When using the **Brush** tool, hold **Shift** while dragging to constrain the stroke to a straight line.
* You can also hold **Shift** and click to continue the previous brush stroke in a straight line. This is useful for outlining rigid or angled edges, such as a rotated rectangle.

#### Erasing parts of a mask

* Hold **Option** (Alt) while using **Brush**, **Lasso**, or **Area** to erase parts of the existing mask.
* This allows you to quickly correct mistakes, such as removing unwanted cutouts where parts of the design disappear.

#### Brush size

* When **Brush** is selected, adjust **Brush size** using the slider in the **Edit mask** panel for finer or broader control.

When finished, close **Edit mask** or toggle **Show mask → No** to return to the normal canvas view.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.