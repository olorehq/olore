> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Context panel

The context panel surfaces actions and properties for the current selection on the [canvas](https://www.recraft.ai/docs/recraft-studio/work-area/canvas.md). It changes dynamically based on what is selected and provides a focused place to inspect, modify, and act on one or more objects.

The context panel is selection-driven. It appears only when at least one object is selected on the canvas and updates automatically as the selection changes.

## What the context panel is responsible for

The context panel handles object-specific and batch actions, including:

* displaying properties for the current selection, such as dimensions and metadata
* exposing actions that apply to the selected object or objects
* enabling batch operations when multiple objects are selected
* providing access to export and arrangement controls

It does not create new content or interpret natural language instructions. Those actions are handled by the [prompt panel](https://www.recraft.ai/docs/recraft-studio/image-generation/prompt-panel.md).

## Context panel states

The context panel adapts based on selection state and object type. Available actions vary depending on whether a single object or multiple objects are selected, and on the types of objects in the selection.

**Single object selected**

When a single image or object is selected, the context panel shows properties and actions specific to that object. This may include:

* object dimensions (width and height in pixels)
* prompt and generation-related metadata (when applicable)
* object-specific actions such as export, background removal, vectorization, or upscaling

This state is used for inspecting and acting on individual elements.

**Multiple objects selected**

When multiple objects are selected, the context panel switches to batch actions. The set of available actions depends on the types of objects selected.

For standard images, batch actions may include:

* running the same prompts across all selected images
* background removal
* vectorization
* crisp or creative upscaling
* merging layers
* exporting selected images

For other object types, such as mockups, fewer batch actions may be available. In these cases, the context panel typically includes:

* merge layers
* arrange
* export

In all multi-selection cases, an **Arrange** control is available. This control allows you to group and rearrange selected objects along a horizontal or vertical plane.

## Actions for a single selected object

Actions for a single selected object\
When a single image or object is selected, the context panel groups actions into three sections:

**Modify**

* Edit image: Apply natural language editing to the selected image.
* Change background: Replace the background using natural language instructions. View [Change background](https://www.recraft.ai/docs/recraft-studio/image-editing/background-tools.md#change-background).
* Remove background: Automatically remove the background from the selected image. View [Remove background](https://www.recraft.ai/docs/recraft-studio/image-editing/background-tools.md#remove-background).
* **Erase area** (previously Edit area): Erase a specific region of the image after selecting it. View [Erase area](https://www.recraft.ai/docs/recraft-studio/image-editing/manual-editing-tools.md#erase-area).
* **Remix image** (previously Generate Remix): Create multiple variations of the selected image while preserving its overall structure. View [Remix](https://www.recraft.ai/docs/recraft-studio/image-editing/remix.md).
* Adjust colors: Modify the color palette of the selected image. View [Color palettes](https://www.recraft.ai/docs/recraft-studio/color-palettes/using-color-palettes-in-generation.md).
* Outpaint: Extend the image beyond its original borders.

**Reuse**

* **Turn into mockup** (previously Use in mockup): Place the selected image into a mockup for product or scene visualization. View [Mockups](https://www.recraft.ai/docs/recraft-studio/mockups/how-to-create-a-mockup.md).
* **Turn into vector** (previously Vectorize): Convert the selected raster image into an editable vector format. View [Vectorizing](https://www.recraft.ai/docs/recraft-studio/format-conversions-and-scaling/vectorizing.md).
* Reuse for video: Use the selected image as a starting point for video generation.
* Extract prompt: Retrieve the prompt and settings used to generate the image for reuse or refinement. View [Extract prompt](https://www.recraft.ai/docs/recraft-studio/image-generation/working-with-text-and-prompts/extract-prompt.md).

**Finalise**

* Upscale: Increase image resolution and detail. View [Upscaling](https://www.recraft.ai/docs/recraft-studio/format-conversions-and-scaling/upscaling.md).
* Export: Export the selected object in supported formats. View [How to export an image](https://www.recraft.ai/docs/recraft-studio/exporting-and-sharing/how-to-export-an-image.md).

### Actions for multiple selected objects

When multiple objects are selected, the context panel provides batch actions, including:

* **Align**: Align selected objects to an edge (left, right, top, bottom, center).
* **Arrange**: Adjust the relative ordering of selected objects as a group.
* **Merge objects**: Combine selected objects into a single image.
* **Export**: Export all selected objects together. View [How to export an image](https://www.recraft.ai/docs/recraft-studio/exporting-and-sharing/how-to-export-an-image.md).


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.