> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Vector Editor

The Vector Editor lets you edit every point, curve, and color of a vector image directly in Recraft Studio. It works with any vector on the canvas—both images generated in Recraft and SVG files imported from your computer. There is no need to switch to another tool or add extra export steps. Refine your vector right on the canvas, then export it as an SVG or PDF when you're ready.

> [!NOTE]
>
> Vector is its own generation type in Create, separate from Image. Reference images aren't available when generating with the Vector generation type.

## The image panel

When you select a vector image on the canvas, a panel opens on the right with options grouped by purpose:

* **Modify**: Change background, Remove background, Edit area, Remix image, Adjust colors, Outpaint.
* **Reuse:** Turn into frame, Turn into raster image, Reuse for video, Extract prompt.
* **Finalise:** Export.

## How to open the Vector Editor

1. Double-click any vector image on the canvas. The vector is temporarily split into its individual shapes, and you can click outside to exit.
2. To break a vector into shapes permanently, select it and click "**Turn into frame**" in the panel, under the **Reuse** section. Either way, each shape becomes its own editable object.

The vector splits into its individual shapes inside a frame, and each shape becomes editable.

## Working with shapes

Once a vector is converted to a frame, you can edit each shape independently:

* **Move, scale, and rotate** any shape.
* **Reorder shapes** with **Send to back** and **Bring to front** to control how they overlap.
* **Change colors**: select a shape and pick a new fill color.
* **Select multiple shapes** inside a frame by holding Cmd/Ctrl and dragging across them.

## Editing points and curves

Double-click a shape to edit its individual points, tangents, and edges:

* **Move points and edges** by dragging them.
* **Add new points** to a path.
* **Add or remove tangents**: hold Cmd/Ctrl and click a point to add or delete its tangents. Drag the tangent ends to adjust the curve.
* **Delete points and edges**: select them and press Delete.
* **Select multiple points** by dragging across them. Hold Shift and click to add or remove individual points from the selection.
* **Transform a selection**: moving, rotating, and scaling also work on multiple selected points. To resize relative to the center of the selection, hold Option on Mac or Alt on other OS.

Shapes and points snap into place as you move them, making it easier to keep your design aligned.

## Converting back and exporting

When you're done editing, you can:

* **If you double-clicked the vector**, simply click outside it when you're done. Your edits are kept, and the vector stays a single image.
* **If you used Turn into frame**, you can convert the frame back to a vector image at any point to continue working with it as a single object.

**Export the frame as a vector**: if the frame contains only vector elements, you can export it as an SVG or PDF. See [How to export an image](https://www.recraft.ai/docs/recraft-studio/exporting-and-sharing/how-to-export-an-image.md).

**Note**: A frame can only be exported as a vector if every element inside it is a vector. If the frame contains raster elements, vectorize them first—see [Vectorizing](https://www.recraft.ai/docs/recraft-studio/format-conversions-and-scaling/vectorizing.md).


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.