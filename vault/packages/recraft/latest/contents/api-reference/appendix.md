\> ## Documentation Index
\> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
\> Use this file to discover all available pages before exploring further.

\# Appendix

\### Maximum prompt length

The maximum prompt length depends on the model.

\| Model \| Limit \|
\| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\- \| \-\-\-\-\- \|
\| Recraft V4 \| 10000 \|
\| Recraft V4 Vector \| 10000 \|
\| Recraft V4 Pro \| 10000 \|
\| Recraft V4 Pro Vector \| 10000 \|
\| Recraft V3 \| 1000 \|
\| Recraft V3 Vector \| 1000 \|
\| Recraft V2 \| 1000 \|
\| Recraft V2 Vector \| 1000 \|

\### List of supported image sizes

The image size can be specified using one of two formats:

\\* Explicit dimensions (\`WxH\`): defines the exact width (\`W\`) and height (\`H\`) of the output image in pixels. Example: \`1820x1024\`.
\\* Aspect ratio (\`w:h\`): defines the proportional relationship between width and height without specifying absolute dimensions. Example: \`16:9\`.

See \[Wikipedia\](https://en.wikipedia.org/wiki/Aspect\_ratio\_\\(image\\)) for more details.

The set of valid aspects and size values depends on the selected model. Refer to the table below for supported configurations.

| Models | Aspect | Size |
| --- | --- | --- |
| Recraft V4 | \`1:1\` | \`1024x1024\` |
| \`2:1\` | \`1536x768\` |
| \`1:2\` | \`768x1536\` |
| \`3:2\` | \`1280x832\` |
| \`2:3\` | \`832x1280\` |
| \`4:3\` | \`1216x896\` |
| \`3:4\` | \`896x1216\` |
| \`5:4\` | \`1152x896\` |
| \`4:5\` | \`896x1152\` |
| \`6:10\` | \`832x1344\` |
| \`14:10\` | \`1280x896\` |
| \`10:14\` | \`896x1280\` |
| \`16:9\` | \`1344x768\` |
| \`9:16\` | \`768x1344\` |
| Recraft V4 Pro | \`1:1\` | \`2048x2048\` |
| \`2:1\` | \`3072x1536\` |
| \`1:2\` | \`1536x3072\` |
| \`3:2\` | \`2560x1664\` |
| \`2:3\` | \`1664x2560\` |
| \`4:3\` | \`2432x1792\` |
| \`3:4\` | \`1792x2432\` |
| \`5:4\` | \`2304x1792\` |
| \`4:5\` | \`1792x2304\` |
| \`6:10\` | \`1664x2688\` |
| \`14:10\` | \`2560x1792\` |
| \`10:14\` | \`1792x2560\` |
| \`16:9\` | \`2688x1536\` |
| \`9:16\` | \`1536x2688\` |
| Recraft V2<br>Recraft V3 | \`1:1\` | \`1024x1024\` |
| \`2:1\` | \`2048x1024\` |
| \`1:2\` | \`1024x2048\` |
| \`3:2\` | \`1536x1024\` |
| \`2:3\` | \`1024x1536\` |
| \`4:3\` | \`1365x1024\` |
| \`3:4\` | \`1024x1365\` |
| \`5:4\` | \`1280x1024\` |
| \`4:5\` | \`1024x1280\` |
| \`6:10\` | \`1024x1707\` |
| \`14:10\` | \`1434x1024\` |
| \`10:14\` | \`1024x1434\` |
| \`16:9\` | \`1820x1024\` |
| \`9:16\` | \`1024x1820\` |
| Recraft V4 Pro Vector<br>Recraft V4 Vector<br>Recraft V3 Vector<br>Recraft V2 Vector | \`1:1\` |
| \`2:1\` |
| \`1:2\` |
| \`3:2\` |
| \`2:3\` |
| \`4:3\` |
| \`3:4\` |
| \`5:4\` |
| \`4:5\` |
| \`6:10\` |
| \`14:10\` |
| \`10:14\` |
| \`16:9\` |
| \`9:16\` |

\### Policies

\\* All generated images are currently stored for approx. 24 hours, this policy may change in the future, and you should not rely on it remaining constant.
\\* Images are publicly accessible via direct links without authentication. However, since the URLs include unique image identifiers and are cryptographically signed, restoring lost links is nearly impossible.
\\* Currently, image generation rates are defined on a per-user basis and set at \*\*100 images per minute\*\*. In addition, requests are limited to \*\*5 per second\*\*. These rate limits may be adjusted in the future.

Need help or have suggestions for improving our docs? \[Contact support\](mailto:\\\[help@recraft.ai\]\\(mailto:help@recraft.ai\\))

Built with \[Mintlify\](https://mintlify.com).