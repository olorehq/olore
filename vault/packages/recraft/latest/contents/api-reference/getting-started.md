\> ## Documentation Index
\> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
\> Use this file to discover all available pages before exploring further.

\# Getting started

Welcome to Recraft image generation and editing API.

Learn the basics of the Recraft API, including raster and vector image generation, style creation, image generation in your brand style and colors, image vectorization, and background removal.

\*\*Authenticate and interact with our API in a matter of minutes.\*\*

\### Models

Recraft has developed three generations of proprietary models:

\\* Recraft V4, Recraft V4 Vector, Recraft V4 Pro, Recraft V4 Pro Vector
\\* Recraft V3 (aka Red Panda), Recraft V3 Vector
\\* Recraft V2 (aka Recraft 20B), Recraft V2 Vector

Recraft V4 models, released in February 2026, represent a ground-up rebuild and our most advanced generation to date. Focused on what matters for real work — design taste, prompt accuracy, and output quality at any size — V4 models deliver true design vision in composition, lighting, textures, and overall feel, along with the world's only production-grade vector generation. Available in two versions: V4 (1MP) for everyday work and fast iteration, and V4 Pro (4MP) for print-ready assets and large-scale use. Both share the same creative capabilities, design taste, and art-directed professional results.

Recraft V3 models, released in October 2024, were new state-of-the-art models trained from scratch that introduced major advances in photorealism and text rendering. V3 ranked first on the Hugging Face Text-to-Image leaderboard for five consecutive months.

Recraft V2 models, released in February 2024, were the first AI models built specifically for designers. V2 enabled the creation of both raster and vector images with anatomical accuracy, consistent brand styling, and precise iteration control.

All eight models from V2, V3, and V4 generations are available in the Recraft API and within the Recraft web and mobile applications.

\## Authentication

We use \[Bearer\](https://swagger.io/docs/specification/authentication/bearer-authentication/) API tokens for authentication. To access your API key, log in to Recraft, \[enter your profile\](https://app.recraft.ai/profile/api) and hit 'Generate' (available only if your API units balance is above zero). All requests should include your API key in an Authorization HTTP header as follows:\
\
\`Authorization: Bearer RECRAFT\_API\_TOKEN\`

A user may create multiple API tokens; however, all tokens share the same API units balance.

\## Swagger

Interactive API documentation is available via \[Swagger\](https://external.api.recraft.ai/doc/#/). You can explore all available endpoints, test API calls, and view request/response schemas directly in your browser.

\### REST / Python Library

The Recraft API adheres to REST principles, allowing you to interact using any utilities (e.g., curl), programming languages, or libraries of your choice.

One of the easiest of available alternatives is \[OpenAI Python library\](https://github.com/openai/openai-python) which is also compatible with Recraft API, but it’s important to remember that not all parameters/options are supported or implemented. Additionally, some parameters may have different meanings, or they may be quietly ignored if they are not applicable to the Recraft API.

Future examples will be shown using that library, for example, once installed, you can use the following code to be authenticated:

\`\`\`python theme={null}
from openai import OpenAI

client = OpenAI(
 base\_url='https://external.api.recraft.ai/v1',
 api\_key=,
)
\`\`\`

Built with \[Mintlify\](https://mintlify.com).