> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Selection tools

There are several tools to do a selection of a region on an image for editing. To start editing a selected area of an image, first select the image on canvas, then click **Edit area** in the right **context panel**. Each tool offers a different way to define the target area, depending on the shape, detail, or boundaries of what you want to edit.

## Lasso

Lasso allows you to draw a freehand selection around objects or areas in an image. Click the Lasso tool and draw an area of any shape within the image. The system will select everything inside of the drawn area.

## Brush

Brush allows you to draw with a circular brush to choose the area within the image. You can adjust the brush size using the slider in the selection menu. The area formed of all brush strokes made will be selected by the system.

## Area

Area is a selection tool allowing you to select a rectangular area within the image. Click the Area tool, then click on the image, hold and drag to form the rectangle you need. The system will select everything inside the drawn rectangle.

## Magic wand

The magic wand tool helps you quickly select specific areas or objects in an image based on their visual boundaries. It is only available on paid plans.

Click the Wand tool and select any part of the image. The system will auto-detect the boundaries and highlight the selection. Use this selection for inpainting, masking, or replacing elements. The wand works best for clean, well-defined areas such as flat shapes or backgrounds.

# Tools available after selection

After selecting a region of an image using one of the selection tools (**Lasso**, **Brush**, **Area**, or **Wand**), you can apply one of two manual editing options: **Erase** or **Cut**.

## Erase tool

The Erase tool lets you remove unwanted elements from a selected area.

**How to use the erase tool**:

* Make a selection using Lasso, Brush, Area, or Wand.
* Click the **Erase** button.

Recraft will remove the selected content and automatically fill the cleared area to maintain visual continuity.

## Cut tool

The Cut tool removes the selected area and fills it with transparency, without applying any AI regeneration. Use this when you want to eliminate something cleanly without replacement, such as cutting out a logo or isolating a subject.

**How to use the cut tool**:

* Make a selection using Lasso, Brush, Area, or Wand
* Click the **Scissors** icon.

The selected area is deleted, leaving a transparent region that can be left as is or edited manually later.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.