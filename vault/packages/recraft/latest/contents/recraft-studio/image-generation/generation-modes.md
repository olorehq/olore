> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Generation modes

> [!NOTE]
>
> Agentic/AI Chat and Manual modes are available organically inside the new interface. If the old interface toggle is enabled, AI Chat is not accessible.

## Create (Manual) mode

Create mode is a prompt-based workflow with no conversational context. It's also where you edit: you can start from scratch or work with references — including AI editing of those references — all from this one tab. In this mode:

* Each request is treated independently.
* No history, context, or memory is applied between generations.
* You control all inputs explicitly through the prompt and settings.
* Generation is faster and more predictable.

Create mode is ideal when you know exactly what you want, need precise control, or are making quick, one-off generations — whether that's a new image or refining one you already have.

**Editing an existing image:** There's no separate Edit tab — editing now happens directly from **Create**. Use the **Add references** control (paperclip icon) in the Create panel to attach an existing image as a reference, then describe the change you want.

You can also edit from the canvas itself: click an image to open the right panel, which opens directly on the **Modify** block — everything you need to change the image, including AI editing, with its own prompt field right there.

Clicking an image opens its **Selected object** panel: the prompt, model, style, and parameters used to make it, with Reuse and Copy (copies just the prompt) buttons. To attach that same image as a reference instead, click it a second time while it's already selected — this surfaces an **"Add"** thumbnail next to Add references in the Create panel, along with a floating prompt bar on the canvas, rather than reopening its Selected object panel.

## Chat (Agentic) mode

AI chat uses an LLM-powered assistant to help generate and refine images through a conversational workflow.

In this mode:

* The system understands context and intent across multiple turns, and keeps track of your history.
* You can describe ideas naturally, refine them, and ask for suggestions.
* The assistant may suggest adjustments, apply styles, or select models automatically when helpful.
* You don’t need to restate details repeatedly as you iterate.
* Image generation and edits follow the flow of the conversation.

This mode is best for exploration, iteration, and situations where you want guidance or are still shaping what you want to create. It may also be faster in *achieving your goal*, especially when you’re not sure how to prompt something.

### Return to the old interface (optional)

If you re-enable the **old interface** toggle, the new interface is disabled and Agentic mode is no longer available.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.