> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Inpainting

Inpainting lets you regenerate specific parts of an image while keeping the rest intact. This is useful for correcting details, replacing elements, or making creative changes without starting from scratch.

> [!NOTE]
>
> Inpainting is currently available in the old interface, which is accessible by clicking the **Old interface** toggle in the top navigation.

**How to use inpainting**:

1. Select an image on the canvas.
2. Click the **Edit area** button in the top toolbar.
3. Choose a selection tool: **Lasso**, **Brush**, **Area**, or **Wand**.
4. Highlight the part of the image you want to change.
5. Enter a new prompt describing the desired update.
6. Click the **generation button** to apply the edit. The selected area will be replaced based on your prompt while the rest of the image stays the same.

**Note**: When using inpainting on large images, Recraft automatically downscales the image before applying edits, which can result in a noticeable loss of quality in the final output.

## Tips for better results

* If the selected area is too small, the change may be subtle or unnoticeable. Select a larger area for more effective inpainting.
* Inpainting works best on images resolutions of 1024 pixels or smaller. For larger images, Recraft automatically downscales before editing. The result will be returned at the supported resolution of 1024 pixels.
* After multiple rounds of inpainting, image quality may begin to degrade. If that happens, try reverting to an earlier version and batch several edits together in a single step.
* To learn more about the selection tools available, visit [Selection tools](https://www.recraft.ai/docs/recraft-studio/work-area/selection-tools.md).


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.