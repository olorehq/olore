> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Agentic mode

## AI Chat (Agentic) mode

Recraft Studio's AI Chat (Agentic) mode enables users to talk and generate images in Recraft Studio like a design assistant.

To use it, open the **Chat** tab in the left panel.

Chat doesn't keep a record of what you generated in it. Earlier results stay visible on the canvas, but the conversation itself won't show a history of your generations. For that, use **History** in the top left.

### What's possible with AI Chat mode

**Session-driven generation & iteration**: Start by describing an idea or intent, and iterate on the visuals using the entire session context.

**Brainstorming prompts and design ideas.** Use this mode interface to help craft and refine prompts or explore different design directions without complex instructions.

**Step-by-step workflows**: Multi-step tasks are guided automatically to help move from brainstorming to finished assets in fewer steps.

**Smart tips in context**: Get suggestions for next actions, such as upscaling images to higher clarity and resolution, discovering different styles, or improving results within a workflow.

**Canvas integration**: Result appears side-by-side on the canvas, preserving context to help compare or build on earlier outputs without resetting.

### How credits work in AI Chat mode

AI Chat mode uses the same credit system as the rest of Recraft Studio. Each interaction with the language model consumes credits, in addition to any credits used for image generation or editing.

* Simple, one-off requests may use as little as 1 credit.
* Longer conversations with multiple iterations and accumulated context consume more credits.
* AI Chat credits are separate from image generation and editing costs.

For better control over usage, start a new session when switching tasks instead of continuing a long conversation.

Credit usage scales with compute:

* Quick requests stay lightweight.
* Complex, multi-step workflows use more credits.

This keeps everyday tasks efficient while accurately reflecting the cost of more advanced sessions.

### Example AI Chat mode workflows

* Start by asking for help with a prompt for a design task, e.g.: *"I need a hero illustration for a SaaS landing page about teamwork. Help me craft 3 prompt ideas"*
* Select one of the suggested prompts, edit it as needed, and try generating in different styles by typing *"generate it in flat style"* or *"generate it in photorealistic style".*
* To change specific details on an image, type in the session e.g., *"take 2nd image generated in flat style, but add a dog showing a pet-friendly office"*
* Experiment with styles by attaching a reference image, then ask in the session to apply the style to another image
* When generating or iterating on images, use a session to specify the aspect ratio, number of images, or to apply Recraft features such as remove/replace background, vectorize, or upscale.
* Try using some more advanced design workflows or chain of generations and editing actions e.g.,:
  * *"Generate a photoreal product shot of a ceramic mug on a plain light background. Then remove the background. Then produce a clean vector interpretation of the silhouette."*
  * Use key visuals as image reference(s), then ask to create a marketing assets (such as a landing hero, social cover, email hero), specifying desirable formats, colors or other important details.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.