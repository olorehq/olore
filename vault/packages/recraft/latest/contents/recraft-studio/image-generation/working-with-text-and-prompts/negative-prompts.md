> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Negative prompts

Negative prompts help guide the AI by specifying what you don’t want to appear in the image. This gives you more control over the outcome, especially when avoiding unwanted objects, styles, or features.

**How to use negative prompts**:

1. Select your image on the canvas and click the **settings button** in the prompt panel.
2. In the **Negative prompt** field, enter the elements or concepts you want to exclude from the image.
3. Optionally, you can disable text generation in your output by toggling the **Avoid text in image** switch to **Yes**.
4. Generate your image as usual. Recraft will attempt to avoid the elements you specified.

Tip: avoid double negation in negative prompts. For example, to exclude apples from an image, write `"apples"` in the negative prompt, not `"no apples"`. Using “no” can confuse the model and lead to the opposite effect.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.