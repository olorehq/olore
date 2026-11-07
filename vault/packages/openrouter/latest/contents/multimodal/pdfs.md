> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# PDF Inputs

> How to send PDFs to OpenRouter models

OpenRouter supports PDF processing through the [Responses API](https://openrouter.ai/docs/api_reference/responses/overview.md) (`/api/v1/responses`) and Chat Completions (`/api/v1/chat/completions`). On the Responses API, PDFs can be sent as **direct URLs** (`file_url`) or **base64-encoded data URLs** (`file_data`) in the `input` array, via the `input_file` content type; on Chat Completions they go in a `file` content part. This feature works on **any** model on OpenRouter. The examples on this page use the Responses API except where noted.

**URL support**: Send publicly accessible PDFs directly without downloading or encoding **Base64 support**: Required for local files or private documents that aren't publicly accessible

PDFs also work in the chat room for interactive testing.

> [!NOTE]
>
> When a model supports file input natively, the PDF is passed directly to the model. When the model does not support file input natively, OpenRouter will parse the file and pass the parsed results to the requested model.

> [!TIP]
>
> You can send both PDFs and other file types in the same request.

## Plugin Configuration

To configure PDF processing, use the `plugins` parameter in your request. OpenRouter provides several PDF processing engines with different capabilities and pricing; `engine` is one of `cloudflare-ai`, `mistral-ocr`, or `native`:

```json lines theme={null}
{
  "plugins": [
    {
      "id": "file-parser",
      "pdf": {
        "engine": "cloudflare-ai"
      }
    }
  ]
}
```

## Pricing

OpenRouter provides several PDF processing engines:

1. `"mistral-ocr"`: Best for scanned documents or PDFs with images (\$2 per 1,000 pages). Requests pinned to the US data region use Mistral's US regional endpoint and the US rate (\$2.2 per 1,000 pages), which includes Mistral's 10% regional upcharge.
2. `"cloudflare-ai"`: Converts PDFs to markdown using Cloudflare Workers AI (Free).
3. `"native"`: Only available for models that support file input natively (charged as input tokens).

> [!NOTE]
>
> The `"pdf-text"` engine is deprecated and automatically redirected to `"cloudflare-ai"`. Existing requests using `"pdf-text"` will continue to work.

> [!WARNING]
>
> OCR costs apply to all requests, including BYOK. OpenRouter uses its own Mistral key for OCR (not your BYOK key), so the per-page fee is always billed to your OpenRouter account.

If you don't explicitly specify an engine, OpenRouter will default first to the model's native file processing capabilities, and if that's not available, we will use the `"mistral-ocr"` engine.

## OCR Image Limits

When the `"mistral-ocr"` engine extracts images from a PDF, OpenRouter requests at most **8 images per PDF** from Mistral via the OCR API's `image_limit` parameter, and forwards no more than 8 images per request to the downstream model. Surplus images are dropped while all extracted text is preserved in full.

This cap exists because per-prompt image limits vary significantly across providers. Some reject requests with more than 8 images outright, and even providers with higher caps often fail with context-length errors when a long PDF emits one image per page. Capping at 8 keeps requests within the limits of every supported provider.

If your downstream model does not accept image input at all, OCR-extracted images are stripped entirely and only the parsed text is forwarded.

## Using PDF URLs

For publicly accessible PDFs, you can send the URL directly without needing to download and encode the file:

> [!NOTE]
>
> PDF URLs work with all processing engines. For Mistral OCR, the URL is passed directly to the service. For other engines, OpenRouter fetches the PDF and processes it internally.

## Using Base64 Encoded PDFs

For local PDF files or when you need to send PDF content directly, you can base64 encode the file:

## Skip Parsing Costs

When you send a PDF to the Chat Completions API (`/api/v1/chat/completions`), the response may include file annotations in the assistant's message. These annotations contain structured information about the PDF document that was parsed. By sending these annotations back in subsequent requests, you can avoid re-parsing the same PDF document multiple times, which saves both processing time and costs. The Responses API returns `file_citation` annotations instead, which can't be sent back to skip parsing, so the examples in this section and the annotation schema below use Chat Completions.

Here's how to reuse file annotations:

> [!NOTE]
>
> When you include the file annotations from a previous response in your subsequent requests, OpenRouter will use this pre-parsed information instead of re-parsing the PDF, which saves processing time and costs. This is especially beneficial for large documents or when using the `mistral-ocr` engine which incurs additional costs.

## File Annotations Schema (Chat Completions)

When OpenRouter parses a PDF sent to Chat Completions, the response includes file annotations in the assistant message. Here is the TypeScript type for the annotation schema:

```typescript lines theme={null}
type FileAnnotation = {
  type: 'file';
  file: {
    hash: string;           // Unique hash identifying the parsed file
    name?: string;          // Original filename (optional)
    content: ContentPart[]; // Parsed content from the file
  };
};

type ContentPart =
  | { type: 'text'; text: string }
  | { type: 'image_url'; image_url: { url: string } };
```

The `content` array contains the parsed content from the PDF, which may include text blocks and images (as base64 data URLs). The `hash` field uniquely identifies the parsed file content and is used to skip re-parsing when you include the annotation in subsequent requests.

## Response Format

### Responses API

The Responses API may include a `file_citation` annotation when the provider cites a parsed file in its output. Parsing a file alone does not guarantee a citation:

```json expandable lines theme={null}
{
  "id": "gen-1234567890",
  "object": "response",
  "created_at": 1234567890,
  "model": "google/gemma-3-27b-it",
  "status": "completed",
  "output": [
    {
      "id": "msg_abc123",
      "type": "message",
      "role": "assistant",
      "status": "completed",
      "content": [
        {
          "type": "output_text",
          "text": "The document discusses...",
          "annotations": [
            {
              "type": "file_citation",
              "file_id": "abc123...",
              "filename": "document.pdf",
              "index": 0
            }
          ]
        }
      ]
    }
  ],
  "usage": {
    "input_tokens": 1000,
    "input_tokens_details": { "cached_tokens": 0 },
    "output_tokens": 100,
    "output_tokens_details": { "reasoning_tokens": 0 },
    "total_tokens": 1100
  }
}
```

### Chat Completions

Chat Completions returns the parsed file as a reusable `file` annotation on the assistant message (see [Skip Parsing Costs](#skip-parsing-costs)):

```json expandable lines theme={null}
{
  "id": "gen-1234567890",
  "provider": "DeepInfra",
  "model": "google/gemma-3-27b-it",
  "object": "chat.completion",
  "created": 1234567890,
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "The document discusses...",
        "annotations": [
          {
            "type": "file",
            "file": {
              "hash": "abc123...",
              "name": "document.pdf",
              "content": [
                { "type": "text", "text": "Parsed text content..." },
                { "type": "image_url", "image_url": { "url": "data:image/png;base64,..." } }
              ]
            }
          }
        ]
      }
    }
  ],
  "usage": {
    "prompt_tokens": 1000,
    "completion_tokens": 100,
    "total_tokens": 1100
  }
}
```

## Error Responses with Parsed Annotations (Chat Completions)

If OpenRouter successfully parses your PDF but every inference provider then fails to generate a completion, the error response still includes the parsed annotations under `error.metadata.file_annotations`. The shape matches the success-path `FileAnnotation` documented above, so you can hand the same array straight back to OpenRouter on a retry to skip re-parsing.

This applies to the `"mistral-ocr"` and `"cloudflare-ai"` engines, which parse the PDF before sending it to a model. The `"native"` engine doesn't produce annotations because the file is forwarded directly to the model.

```json lines theme={null}
{
  "error": {
    "code": 502,
    "message": "Provider returned an error",
    "metadata": {
      "file_annotations": [
        {
          "type": "file",
          "file": {
            "hash": "abc123...",
            "name": "document.pdf",
            "content": [
              { "type": "text", "text": "Parsed text content..." }
            ]
          }
        }
      ]
    }
  }
}
```

When you read annotations from both the success and error paths, dedupe by `file.hash`. The hash is stable across both shapes for the same parsed file:

```typescript expandable lines theme={null}
// FileAnnotation is the type defined under "File Annotations Schema" above.
function isFileAnnotation(value: unknown): value is FileAnnotation {
  if (typeof value !== 'object' || value === null) return false;
  const candidate = value as { type?: unknown; file?: { hash?: unknown } };
  return (
    candidate.type === 'file' &&
    typeof candidate.file?.hash === 'string'
  );
}

function extractFileAnnotations(response: unknown): FileAnnotation[] {
  if (typeof response !== 'object' || response === null) return [];

  const root = response as {
    choices?: Array<{ message?: { annotations?: unknown[] } }>;
    error?: { metadata?: { file_annotations?: unknown[] } };
  };

  const fromMessage = root.choices?.[0]?.message?.annotations ?? [];
  const fromError = root.error?.metadata?.file_annotations ?? [];

  const seen = new Set<string>();
  const out: FileAnnotation[] = [];
  for (const a of [...fromMessage, ...fromError]) {
    if (isFileAnnotation(a) && !seen.has(a.file.hash)) {
      seen.add(a.file.hash);
      out.push(a);
    }
  }
  return out;
}
```
