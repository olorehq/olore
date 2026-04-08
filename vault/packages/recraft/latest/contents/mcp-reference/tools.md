\> ## Documentation Index
\> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
\> Use this file to discover all available pages before exploring further.

\# Tools

Recraft's MCP server allows use of the following tools:

\| Tool name \| Description \| Parameters \| Price \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \|
\| \`generate\_image\` \| Generates raster/vector images from a prompt \| - \`prompt\`

 \- \`style\`

 \- \`size\`

 \- \`model\`

 \- \`number of images\` \| \\$0.04 / \\$0.08 per raster/vector image \|
\| \`create\_style\` \| Creates a style from a list of images \| - \`list of images\`

 \- \`basic style\` \| \\$0.04 \|
\| \`vectorize\_image\` \| Vectorizes a raster image into a vector format \| - \`image\` \| \\$0.01 \|
\| \`image\_to\_image\` \| Generates raster/vector images from an image + prompt \| - \`image\`

 \- \`prompt\`

 \- \`similarity strength\`

 \- \`style\`

 \- \`size\`

 \- \`model\`

 \- \`number of images\` \| \\$0.04 / \\$0.08 per raster/vector image \|
\| \`remove\_background\` \| Removes the background of an image \| - \`image\` \| \\$0.01 \|
\| \`replace\_background\` \| Generates a new background in an image from a prompt \| - \`image\`

 \- \`prompt for background\`

 \- \`style\`

 \- \`size\`

 \- \`model\`

 \- \`number of images\` \| \\$0.04 / \\$0.08 per raster/vector image \|
\| \`crisp\_upscale\` \| Upscales image resolution without altering content \| - \`image\` \| \\$0.004 \|
\| \`creative\_upscale\` \| Upscales image resolution while regenerating details \| - \`image\` \| \\$0.25 \|
\| \`get\_user\` \| Retrieves information about the user and balance \| – \| – \|

For a detailed explanation of each tool, its parameters, and pricing, visit the \[Recraft API docs\](https://www.recraft.ai/docs/api-reference/getting-started).

Built with \[Mintlify\](https://mintlify.com).