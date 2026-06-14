\> ## Documentation Index
\> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
\> Use this file to discover all available pages before exploring further.

\# Recraft V2

Recraft V2 is an image generation model released in March 2024 and the first model trained from scratch by Recraft. With 20 billion parameters, it was a breakthrough in human anatomical accuracy and the first to support brand consistency and brand color inputs. It also introduced vector image generation (SVG output), as well as minimalistic icon and illustration styles.

V2 is available both in the web tool and via the API. In API use, it has a lower inference cost than V3. While V2 does not match V3 in prompt adherence or text accuracy, it remains preferred by many users for a set of specific styles and vector-based workflows.

As of 2025, V2 is the only model that supports generating vector icons with brand consistency, allowing multiple icons to be produced with consistent line width, corner shapes, and other stylistic rules.

\### \*\*V2 curated styles\*\*

The curated library in V2 includes \*\*Plastic 3D\*\*, \*\*Linocut\*\*, \*\*Grain\*\*, and \*\*Vector Art\*\*, among others, and remain favorites of Recraft designers.

\\* \*\*Plastic 3D\*\* produces consistently stylized 3D figures and icons in a chosen color palette, and is often used for app UI and presentation graphics.
\\* \*\*Linocut\*\* is a vector style that can be monochrome or palette-based, and is frequently used for packaging.
\\* \*\*Grain\*\* is valued for its textured look, common in blog and book illustrations.
\\* \*\*Vector Art\*\* is popular for its distinctive outputs and is often used for logos, despite V2’s lack of accurate text generation.

\### \*\*V2 icon and pictogram styles\*\*

V2 includes several icon styles with different behavior.

The \*\*Recraft V2 Icon\*\* style produces a different style for each generation when creating icons one-by-one. To achieve consistency, a new Vector Icon style must be created, or the Image Set tool can be used with \*\*Recraft V2 Icon\*\* selected.

The \*\*Recraft V2 Pictogram\*\* style works similarly: each generation returns a new style unless the Image Set feature is used. This style also supports adjustable parameters such as cap type (see in-tool for available options).

Other V2 icon styles produce consistent results by default. The most popular is \*\*Vector Icon Outline\*\*, which generates outline-style vector icons with a consistent look.

\### \*\*Limitations of V2\*\*

Some style names exist in both V2 and V3, but the visual results can differ significantly between them. V2 does not support accurate in-image text generation and may produce typographic errors. It uses the \*\*Level of detail\*\* parameter, which is not supported in V3, and does not support the \*\*Artistic level\*\* parameter available in V3.

Built with \[Mintlify\](https://mintlify.com).