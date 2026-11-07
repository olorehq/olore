> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Aspect ratios

Recraft Studio supports several preset aspect ratios that can be applied when generating new images. Use the Aspect ratio selector located in the prompt panel to choose the desired format.

Aspect ratio affects how content is framed and composed, and is especially important when preparing assets for platforms with fixed dimensions, such as social media, thumbnails, or print layouts.

> [!WARNING]
>
> Aspect ratio is set independently for each generation type. If you set a ratio while generating an **Image** and then switch to **Vector**, **Video**, **Mockup**, or **Image set**, the ratio does not carry over — each generation type keeps its own separate setting.

**How to generate an image using a custom or unsupported aspect ratio**

1. Generate an image using the aspect ratio closest to your desired one.
2. Create an empty Frame and manually type in the **W** and **H** values to the exact dimensions you need.
3. Drag and drop the generated image into the Frame.
4. Click **Generate frame** to outpaint the empty space and fill the frame to your target size.

### Using the Aspect slider to crop an image

You can crop an existing image by selecting it and using the Aspect slider to crop it to your desired dimensions.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.