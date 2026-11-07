> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Message Transforms

> Transform prompt messages

To help with prompts that exceed the maximum context size of a model, OpenRouter supports a context compression [plugin](https://openrouter.ai/docs/guides/features/plugins.md) that can be enabled per-request:

```typescript lines theme={null}
{
  plugins: [{ id: "context-compression" }], // Compress prompts that are > context size.
  messages: [...],
  model // Works with any model
}
```

This can be useful for situations where perfect recall is not required. The plugin works by removing or truncating messages from the middle of the prompt, until the prompt fits within the model's context window.

In some cases, the issue is not the token context length, but the actual number of messages. The plugin addresses this as well: For instance, Anthropic's Claude models enforce a maximum of 100000 messages. When this limit is exceeded with context compression enabled, the plugin will keep half of the messages from the start and half from the end of the conversation.

When context compression is enabled, OpenRouter will first try to find models whose context length is at least half of your total required tokens (input + completion). For example, if your prompt requires 10,000 tokens total, models with at least 5,000 context length will be considered. If no models meet this criteria, OpenRouter will fall back to using the model with the highest available context length.

The compression will then attempt to fit your content within the chosen model's context window by removing or truncating content from the middle of the prompt. If context compression is disabled and your total tokens exceed the model's context length, the request will fail with an error message suggesting you either reduce the length or enable context compression.

> [!NOTE]
>
> [All OpenRouter endpoints](https://openrouter.ai/docs/guides/overview/models.md) with 8k (8,192 tokens) or less context length will default to using context compression. To disable this, pass `plugins: [{"id": "context-compression", "enabled": false}]` in the request body.

Context compression is automatically skipped for [image-generation models](https://openrouter.ai/docs/guides/overview/multimodal/image-generation.md) that only output images (no text output). This preserves reference images in image-to-image requests. Compression would otherwise truncate multipart message content and drop input `image_url` parts. Multimodal models that output both text and images (e.g., Gemini, gpt-image) still use compression since they have real text context windows.

The middle of the prompt is compressed because [LLMs pay less attention](https://arxiv.org/abs/2307.03172) to the middle of sequences.
