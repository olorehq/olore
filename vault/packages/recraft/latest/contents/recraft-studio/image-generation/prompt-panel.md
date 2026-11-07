> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Prompt panel

The prompt panel lives in Recraft Studio's left panel, alongside two tabs: Create and Chat. It's where you start a generation, edit an existing image with natural language, or work with the agent, and it holds the models, styles, and settings for whichever tab you're using.

## The two tabs

Create generates new content and edits existing images. Choose a generation type: Image, Vector, Video, Mockup, or Image set. Then set the model, style, prompt, references, aspect ratio, colors, and generation count.

To edit, attach an existing image as a reference and describe the change — there's no separate Edit tab.

Chat is the agentic mode. Describe what you want, and the agent handles it.

## What each tab controls

* **Prompt field:** Enter natural language descriptions or instructions.
* **Generation type:** Choose Image, Vector, Video, Mockup, or Image set (Create tab only).
* **Model selection:** Choose the model used for generation or editing.
* **Style selection:** Apply a visual style.
* **Add references:** Attach reference images to guide a generation.
* **Aspect ratio:** Choose from preset ratios. Manual, custom dimensions aren't available.
* **Colors:** Apply a color palette.
* **Generation count:** Generate multiple outputs at once.

Settings don't carry across generation types. Aspect ratio and the rest are set independently for raster images, vectors, and video.

## Attaching references

Clicking an image selects it and opens its Selected object panel — it doesn't attach it as a reference. To attach that same image as a reference, click it a second time while it's already selected. This surfaces an **"Add"** thumbnail next to Add references in the Create panel, along with a floating prompt bar on the canvas. This keeps selecting an image on the canvas separate from attaching it as a reference.

## Reusing a generation's settings

Click any image to open its Selected object panel: the prompt, model, style, and other parameters used to create it. **Reuse** puts those settings back into the panel so you can generate again as is or change something first, and **Copy** copies just the prompt. For an image made with AI editing, it also carries the image references and the editing model used. Selected object isn't available in Chat.

## Placement

The prompt panel sits in the left panel, with the Create and Chat tabs.

## FAQ

**Can I see the prompt and settings used for an image on the canvas?**

Yes. Click the image to open its Selected object panel, which shows the prompt, model, style, aspect ratio, and other settings used to create it.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.