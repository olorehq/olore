> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Adding text to an image

Recraft Studio lets you add and manipulate text directly on the canvas, either as part of your layout or as input for generation.

Text can be layered manually over any image, used within a **Frame** to guide generation of images with text, or incorporated into prompts for image generation.

## Typing text into the prompt

In Recraft Studio, you can generate text as part of an image by simply including it in the prompt. This is useful when you want the text to appear stylized within a design, such as a logo, sign, label, or poster, rather than adding it manually afterward.

You can write prompts that include both a visual description and the desired text, or prompts that only describe the text itself.

**Examples:**

* `"A coffee shop logo with the words 'Java Joint'"`
* `"The phrase 'Open super late' in neon sign style"`
* `"Tote bag design with the words 'Support your local bookworm'"`

Recraft Studio’s models will interpret the text prompt and incorporate it directly into the image, styled to match the overall look. You can increase accuracy by placing the text in quotation marks, which helps the model recognize it as literal text rather than a text description.

This method is best suited for cases where the text should feel embedded in the visual design rather than overlaid.

## Adding text manually

Manual text allows font selection from Google Fonts, color, size, line height, and letter spacing adjustments. This is best used for static overlays (e.g., captions, annotations, headlines) where you want full manual control.

How to manually add text:

1. On the canvas, select the **text tool** from the left toolbar.
2. A blank cursor appears. Click anywhere on the canvas and start typing.
3. Use the **text context panel** to adjust typeface, font size, weight, line height, letter spacing, color, and alignment as needed.
4. Use the bounding box controls to resize, rotate, or reposition the text as needed.
5. You can combine text with other visuals, including images, mockups, or frames.

## Using text in a frame for AI layout generation

For more advanced compositional control:

1. Add your image to the canvas.
2. Create a **Frame** and place the image and any text elements inside it.
3. Select the frame, then write a prompt (e.g., "Design a layout using the image and title text").
4. Click **Recraft Frame**.

Recraft Studio will use both the visual and text elements as input, generating a new composition with the text integrated according to the chosen style. This is useful for designing social media graphics, posters, or promotional layouts where you want AI assistance with composition and visual harmony.

**Notes and limitations**

* You can include multiple text elements within a Frame to simulate layout or multi-line designs.
* Recraft Studio uses the position of text boxes in a Frame as layout suggestions. During generation, text may be repositioned or restyled based on the selected style.
* Text added via a Frame becomes part of the generated image and cannot be edited afterward.
* For vector images, any text included will be preserved in the exported SVG file.
* Recraft V3 supports generating images with text, but does not handle very small text reliably. If text appears distorted or contains typos, try increasing its size.
* Recraft V2 does not support image generation with text. Using this model may result in text rendering errors or misspellings.
* Recraft V3 supports text generation within the following supported characters: '!', '"', '#', '\$', '%', '&', '\\'', '(', ')', '\*', '+', ',', '-', '.', '/','0', '1', '2', '3', '4', '5', '6', '7', '8', '9',':', '\<', '>', '?', '@','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','\_', ', ', 'Ø', 'Đ', 'Ħ', 'Ł', 'Ŋ', 'Ŧ', 'Α', 'Β', 'Ε', 'Ζ', 'Η', 'Ι', 'Κ', 'Μ', 'Ν', 'Ο', 'Ρ', 'Τ','Υ', 'Χ', 'І', 'А', 'В', 'Е', 'К', 'М', 'Н', 'О', 'Р', 'С', 'Т', 'У', 'Х','ß', 'ẞ'.\
  Notes:
  * Characters in different cases (like “B” and “b”) are treated as the same symbol.
  * Characters that appear identical are different characters with minute variations.
  * Characters not listed in this character set will not render.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.