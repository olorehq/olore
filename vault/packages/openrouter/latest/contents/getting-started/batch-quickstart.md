> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Batch API Quickstart

> Submit a batch, get notified when it finishes, read the results, and clean up

This guide submits a batch, waits for it with a webhook or by polling, reads the results, and deletes the batch. For what batch is and when to use it, see the [Batch API overview](https://openrouter.ai/docs/guides/features/batch-api.md).

Before you start, you need:

* An [OpenRouter API key](https://openrouter.ai/settings/keys).
* Credits for the estimated cost. OpenRouter checks the estimate against your balance before it accepts the batch. Batches on your own provider key (BYOK) and invoiced accounts skip this check.
* A model from the [batch models list](https://openrouter.ai/models?variant=batch). Use its normal slug, for example `anthropic/claude-haiku-5.5`. A model with no batch variant returns `400`.

***

## Build the batch

A batch has one model, one endpoint, and a list of requests. Each request `body` is the same body you send to the sync endpoint.

| Field | Required | Description |
| - | - | - |
| `endpoint` | Yes | `/v1/chat/completions`, `/v1/responses`, `/v1/messages`, or `/v1/embeddings`. Every request uses this endpoint. |
| `model` | Yes | The model for every request. A request body can leave out `model`. If it sets `model`, the value must match. |
| `requests` | Yes | A non-empty array of `{ custom_id, body }`. `custom_id` must be unique in the batch. |
| `callback_url` | No | A public HTTPS URL that receives a webhook when the batch finishes. See [Wait with a webhook](#option-a-wait-with-a-webhook). |
| `provider` | No | `only` and `allow_fallbacks`. See [Choose a provider](#choose-a-provider). |
| `completion_window` | No | `24h`, which is the default and the only accepted value. |

```json title="batch.json" lines theme={null}
{
  "endpoint": "/v1/responses",
  "model": "anthropic/claude-haiku-5.5",
  "callback_url": "https://example.com/webhooks/openrouter-batch",
  "requests": [
    {
      "custom_id": "review-1",
      "body": {
        "input": "Classify: The fit is perfect."
      }
    },
    {
      "custom_id": "review-2",
      "body": {
        "input": "Classify: It arrived broken."
      }
    }
  ]
}
```

> [!WARNING]
>
> Put `endpoint`, `model`, `provider`, `completion_window`, and `callback_url` before `requests`. OpenRouter reads the body as a stream so it can accept large batches without buffering them. If `requests` comes first, the submit returns `400`.

***

## Add images and files

Batch accepts text, public image URLs, and some file URLs. It returns text and embeddings only. What works depends on the provider that runs the batch, so pin a provider with [`provider.only`](#choose-a-provider) when you send images. A batch with file URLs or inline files that lands on a provider that can't take them moves to another provider for the model that can. This happens only for batches billed through OpenRouter, not ones sent with your own provider key, when `provider.allow_fallbacks` is not `false` and, if you set `provider.only`, the new provider is in that list.

| Provider | Image URL | File URL |
| - | - | - |
| Anthropic | Yes | Yes |
| DeepInfra (`/v1/chat/completions` only) | Yes | Yes |
| Mistral | Yes | Yes |
| OpenAI | Yes | Models served on the Responses API only |
| Google Vertex | Yes, and `gs://` images with BYOK | No |
| Google AI Studio | Yes | No. Public YouTube URLs work as `video_url` parts. |
| xAI, Together, Sail Research | Yes | No |
| Alibaba (`/v1/chat/completions` only) | Yes | No |
| Fireworks, Morph | No | No |

File parts use the endpoint's own type: `input_file` on `/v1/responses`, `file` on `/v1/chat/completions`, and `document` on `/v1/messages`. The entries below use the Responses shape so they drop into the batch above; on a `/v1/chat/completions` batch, send `messages` with `image_url` and `file` parts instead.

On Google Vertex, image URLs must use HTTPS, end in `.png`, `.jpg`, `.jpeg`, `.webp`, `.heic`, or `.heif`, and not point at Google API, Googleusercontent, or Cloud Storage HTTPS hosts. A provider can also turn off image URLs for one model. File URLs work only on models that list file input. If the provider chosen at submit can't take file URLs, the batch moves to the cheapest other provider for the model that can, under the same conditions, as long as it costs at most twice the original provider's price. It fails with `No batch provider for model '<model>' that this batch can route to accepts file URLs; use the sync API.` when no provider qualifies.

```json title="Image URL" lines theme={null}
{
  "custom_id": "photo-1",
  "body": {
    "input": [
      {
        "role": "user",
        "content": [
          { "type": "input_text", "text": "Describe this product photo." },
          { "type": "input_image", "image_url": "https://example.com/shoe.jpg", "detail": "auto" }
        ]
      }
    ]
  }
}
```

```json title="File URL" lines theme={null}
{
  "custom_id": "contract-1",
  "body": {
    "input": [
      {
        "role": "user",
        "content": [
          { "type": "input_text", "text": "Summarize this contract." },
          { "type": "input_file", "filename": "contract.pdf", "file_url": "https://example.com/contract.pdf" }
        ]
      }
    ]
  }
}
```

| Not supported | What to do instead |
| - | - |
| Base64 or data-URI images | Host the image and send a public `https` URL. Inline base64 images (`image/png`, `image/jpeg`, `image/webp`, `image/gif` in `image_url.url` data URIs) are allowlist-only and also need a provider whose batch API has been verified to read them. Anthropic reads all four, up to 5 MiB decoded per image. OpenAI reads all four, animated GIF included, on both `/v1/chat/completions` and `/v1/responses`, up to 20 MiB decoded per image and per request (inline files and images in one request share that limit). DeepInfra is verified for `image/png` and `image/jpeg` (up to 20 MiB decoded per image and across all inline media in one request); it rejects `image/webp` and `image/gif` with its accepted types, and the MIME type must be lowercase with no parameters. Sail Research reads all four, static and animated GIF included, up to 20 MiB decoded per image and per request, and up to 20 images per request counting public URL and inline images together. Alibaba reads all four, up to 4 MiB decoded per image and per request, and refuses any request whose native line would exceed 6,291,456 bytes, because one oversized line fails the whole Alibaba batch. Mistral reads `image/png`, `image/jpeg`, and `image/webp`, up to 10 MiB decoded per image and 20 MiB of inline media per request; OpenRouter refuses inline `image/gif` for Mistral. xAI reads PNG, JPEG, and WebP but not GIF, up to 17 MiB decoded per image and per request (inline files and images in one request share that limit). Every other provider still rejects them with the provider's name and its accepted types. Pin the provider for the batch that contains these lines (for example `provider: { only: ["sail-research"] }` at the batch top level, next to `model`; see [Choose a provider](#choose-a-provider)): an unpinned batch can route to a provider that refuses inline images, and that refusal does not fall back to another provider. Accounts on the explicit allowlist bypass known-CSAM screening until it is wired into batch submit; accounts admitted only by a rollout to all accounts get `Inline base64 images need known-CSAM screening, which is not active for this batch; use a public http(s) image URL.` Other accounts get `Only public http(s) image URLs are supported in batch; base64/data-URI images are rejected`. Inline images must be content parts of a `user` message: inline images in `messages[].images`, on assistant or system turns, and in tool results aren't supported in batch. |
| Inline file bytes and provider file IDs | Send a public file URL, or an inline base64 data URI (`data:<media type>;base64,...`) of a type the provider's batch API has been verified to read. For accounts with inline files enabled, either individually or through a rollout to all accounts: PDFs work on Anthropic, DeepInfra, Google AI Studio, Google Vertex, Mistral, and OpenAI (up to 20 MiB decoded per file and per request) and on xAI (up to 17 MiB decoded per file and per request), so two 12 MiB files in one request fail admission even though each fits on its own; plain text, CSV, Markdown, and HTML also work on Google AI Studio and on OpenAI models served on the Responses wire; JSON and Word (`.docx`) also work on OpenAI models served on the Responses wire. OpenAI models still served on Chat Completions (for example `gpt-audio`) take PDFs only. Audio and video stay rejected as inline bytes; inline images follow the image row above. Each file must be what its media type says: a PDF starts with `%PDF-`, text types are valid UTF-8, JSON parses, and a `.docx` is a Word (OOXML) package, not just any ZIP archive. A type the chosen provider can't take fails the batch with the provider's name and its accepted types. Other accounts get `Inline base64 files are not enabled for this account in batch`. If the provider chosen at submit can't take inline files at all, the batch moves to another provider for the model that can (unless `provider.allow_fallbacks` is `false`); a type the chosen provider can't take is not re-routed. Inline bytes count toward the request size and are reserved against your balance as text at submit, so a large text file reserves more than its final token cost until the batch finalizes. |
| Audio input, and video other than YouTube | Use the sync API. A YouTube video on Google AI Studio holds the model's full input limit against your balance at submit, because its length is unknown. You are billed for the tokens the provider reports. |
| Image or audio output (`modalities`, `audio`, `image_config`) | Use the sync API. |
| OpenRouter web search (`:online`, the `web` plugin, `web_search_options`) | Use the provider's own search tool, for example OpenAI `web_search` on `/v1/responses` or Anthropic `web_search_20250305` on `/v1/messages`. Google Vertex rejects web search tools. |
| `stream: true`, `speed`, `deferred_tools`, Anthropic beta features | Remove them, or use the sync API. |
| `access_programs.cyber` other than `standard` (OpenAI Daybreak programs) | Supported only on BYOK OpenAI requests served on the Responses API, using your own OpenAI key enrolled in that program. Remove the field on every other batch; the line is rejected before anything reaches the provider. |
| A request with no input, or a max output token cap below 1 | Fix the request. |
| A web search tool with an `engine` other than `auto` or `native` | Remove `engine`, or set it to `native`. |

Unknown parameters are dropped before the request reaches the provider, the same as the sync API.

> [!NOTE]
>
> The provider fetches each URL when it runs the batch, which can be hours after you submit. Keep the URL public until the batch finishes. A request that fails these checks moves the batch to `failed`, and `error.message` names the request's `custom_id`.

***

## Submit the batch

```text title="Endpoint" lines theme={null}
POST https://openrouter.ai/api/v1/batches
```

```shell title="Shell" lines theme={null}
curl https://openrouter.ai/api/v1/batches \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  -d @batch.json
```

```typescript title="TypeScript (fetch)" lines theme={null}
const headers = {
  Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
  'Content-Type': 'application/json',
};

const response = await fetch('https://openrouter.ai/api/v1/batches', {
  method: 'POST',
  headers,
  body: JSON.stringify({
    endpoint: '/v1/responses',
    model: 'anthropic/claude-haiku-5.5',
    callback_url: 'https://example.com/webhooks/openrouter-batch',
    requests: reviews.map((review) => ({
      custom_id: review.id,
      body: { input: `Classify: ${review.text}` },
    })),
  }),
});

if (response.status !== 202) {
  throw new Error((await response.json()).error.message);
}
const batch = await response.json();
```

```python title="Python" lines theme={null}
import os
import requests

response = requests.post(
    "https://openrouter.ai/api/v1/batches",
    headers={"Authorization": f"Bearer {os.environ['OPENROUTER_API_KEY']}"},
    json={
        "endpoint": "/v1/responses",
        "model": "anthropic/claude-haiku-5.5",
        "callback_url": "https://example.com/webhooks/openrouter-batch",
        "requests": [
            {
                "custom_id": review["id"],
                "body": {"input": f"Classify: {review['text']}"},
            }
            for review in reviews
        ],
    },
)
response.raise_for_status()
batch = response.json()
```

```json title="202 Accepted" lines theme={null}
{
  "id": "batch_123",
  "object": "batch",
  "endpoint": "/v1/responses",
  "model": "anthropic/claude-haiku-5.5",
  "completion_window": "24h",
  "status": "validating",
  "created_at": 1782097200,
  "finalized_at": null,
  "provider": "Anthropic",
  "expires_at": 1782183600,
  "request_counts": { "total": 2, "completed": 0, "failed": 0 },
  "usage": null,
  "results": null,
  "error": null
}
```

Save the `id`. A `202` means OpenRouter stored the batch. It checks every request next. If a check fails, the batch moves to `failed` and `error.message` says why.

`provider` is the provider that runs the batch. `expires_at` is the time after which that provider stops working on the batch, or `null` if the provider has no hard deadline. Most providers allow 24 hours. Google AI Studio allows 48 hours, and Google Vertex allows 96 hours.

If OpenRouter moves the batch to another provider for capacity before it starts, later reads show the new `provider`. `expires_at` changes to the new provider's window, still counted from `created_at`.

***

## Wait for the batch to finish

Most batches finish in minutes, and nearly all finish within 24 hours. Use a webhook to find out when a batch finishes, and keep a slow poll as a backup.

> [!NOTE]
>
> Google Vertex can queue a batch for up to 72 hours while it waits for capacity, then process it for up to 24 hours. A Vertex batch that is still `validating` or `in_progress` after 24 hours is healthy.

### Option A: Wait with a webhook

Set `callback_url` on the batch or **Default batch webhook URL** in your workspace settings. A batch-level URL overrides the workspace default and must use public HTTPS. A private or internal address makes the submit fail with `400`.

OpenRouter sends one `POST` when the batch reaches a final status:

| Event | Sent when |
| - | - |
| `batch.completed` | The batch finished. Some requests in it can still have errors. |
| `batch.failed` | A check failed, or the provider rejected the batch. |
| `batch.expired` | The provider did not finish before `expires_at`. |
| `batch.cancelled` | The provider cancelled the batch. |

```json title="Webhook body" lines theme={null}
{
  "id": "evt_51504673caddb4daeaed47e7de1dde8e",
  "object": "event",
  "type": "batch.completed",
  "created_at": 1792445705,
  "data": { "id": "batch_123" }
}
```

| Header | Value |
| - | - |
| `X-OpenRouter-Signature` | `t=<unix seconds>,v1=<hex HMAC-SHA256>`. Sent only when the workspace has a webhook signing secret. |
| `X-OpenRouter-Idempotency-Key` | `<batch id>-<status>`, for example `batch_123-completed`. |

The event holds only the batch ID. Fetch the batch to get the status and results. A repeated delivery of the same event has the same `id` and idempotency key.

To get a signing secret, open your workspace settings and select **Generate signing secret** under **Webhook signing secret**. Video generation webhooks use the same secret.

```typescript title="Webhook receiver (Express)" lines theme={null}
import crypto from 'node:crypto';
import express from 'express';

const app = express();
const signingSecret = process.env.OPENROUTER_WEBHOOK_SECRET;
if (!signingSecret) throw new Error('Set OPENROUTER_WEBHOOK_SECRET');

function isValidSignature(rawBody: Buffer, header: string): boolean {
  const parts = header.split(',').map((part) => part.trim());
  const timestamp = parts.find((part) => part.startsWith('t='))?.slice(2);
  const signature = parts.find((part) => part.startsWith('v1='))?.slice(3);
  if (!timestamp || !signature) return false;

  const age = Math.floor(Date.now() / 1000) - Number(timestamp);
  if (Number.isNaN(age) || Math.abs(age) > 300) return false;

  const expected = crypto
    .createHmac('sha256', signingSecret)
    .update(Buffer.concat([Buffer.from(`${timestamp},`, 'utf8'), rawBody]))
    .digest('hex');
  if (expected.length !== signature.length) return false;
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}

app.post(
  '/webhooks/openrouter-batch',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    if (!isValidSignature(req.body, req.header('X-OpenRouter-Signature') ?? '')) {
      return res.sendStatus(401);
    }

    const event = JSON.parse(req.body.toString('utf8'));
    try {
      // A repeated delivery carries the same event id, so this adds no second job.
      await queue.addIfAbsent(event.id, { batchId: event.data.id });
    } catch {
      return res.sendStatus(500); // OpenRouter retries the delivery
    }
    return res.sendStatus(200);
  },
);
```

1. Verify the signature against the raw body, before you parse the JSON.
2. Put the batch ID on a durable queue in one write, keyed by the event `id`. The `id` is part of the signed body, and a repeated delivery has the same `id`, so a repeat adds no second job.
3. If the queue write fails, return a non-`2xx` response so OpenRouter retries. A `2xx` tells OpenRouter the delivery succeeded.
4. From the queue, fetch the batch. The webhook can arrive a few seconds before `GET` shows the final status. If the status does not match the event yet, wait and retry.

> [!TIP]
>
> To see a real delivery before you write a receiver, set `callback_url` to a temporary [Webhook.site](https://webhook.site) URL. Webhook.site shows the body and headers. It does not verify the signature.

### Option B: Poll

Call `GET /api/v1/batches/{id}` until the status is final: `completed`, `failed`, `expired`, or `cancelled`. Once a minute is enough. Back off if you get `429`.

If a batch the provider ran ends `failed`, `expired`, or `cancelled` and the provider reports fewer requests than OpenRouter accepted, `request_counts.total` is the accepted number and the requests the provider did not report count as `failed`. Older batches that have no stored accepted count keep the provider's counts.

```typescript title="Poll until final" lines theme={null}
const FINAL = new Set(['completed', 'failed', 'expired', 'cancelled']);

async function waitForBatch(id: string) {
  for (;;) {
    const response = await fetch(`https://openrouter.ai/api/v1/batches/${id}`, { headers });
    if (response.ok) {
      const batch = await response.json();
      const resultsReady = batch.status !== 'completed' || batch.results !== null;
      if (FINAL.has(batch.status) && resultsReady) return batch;
    } else if (response.status !== 429 && response.status < 500) {
      // 402, 404, and 410 do not clear by retrying.
      const detail = await response.json().then((b) => b?.error?.message).catch(() => null);
      throw new Error(detail ?? `Batch poll failed with ${response.status}`);
    } else {
      await response.body?.cancel();
    }
    const delayMs = response.status === 429 ? 120_000 : 60_000;
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }
}
```

The status moves through `validating`, `in_progress`, and `finalizing` before it reaches a final status. If you use both a webhook and polling, process each batch once.

To check many batches at once, list them. List items have metadata only, and `results` is always `null`.

```shell title="List batches still running" lines theme={null}
curl 'https://openrouter.ai/api/v1/batches?status=validating&status=in_progress&limit=100' \
  -H "Authorization: Bearer $OPENROUTER_API_KEY"
```

| Parameter | Description |
| - | - |
| `limit` | 1 to 100. Defaults to 20. |
| `after` | The previous page's `last_id`. Use it while `has_more` is `true`. |
| `status` | Repeat to include more than one status. `finalizing` and `cancelling` are not accepted. |
| `created_after`, `created_before` | Unix seconds, or an ISO 8601 date or datetime with an offset, for example `2026-08-20T00:00:00Z`. When you set both, `created_after` must be earlier than `created_before`, or the request returns `400`. |

```json title="200 OK" lines theme={null}
{
  "object": "list",
  "data": [
    {
      "id": "batch_123",
      "object": "batch",
      "status": "in_progress",
      "model": "anthropic/claude-haiku-5.5",
      "provider": "Anthropic",
      "request_counts": { "total": 2, "completed": 1, "failed": 0 },
      "results": null
    }
  ],
  "first_id": "batch_123",
  "last_id": "batch_123",
  "has_more": false
}
```

Batches are listed newest first. Every API key in a workspace sees the same batches, including batches submitted with other keys.

> [!NOTE]
>
> Page with `after` only; offset and `before` are unsupported. Use the ID cursor rather than timestamps: `created_at` has whole-second precision, while `created_after` preserves subsecond precision. A batch created later in the same second can still match `created_after=<created_at>`.

***

## Read the results

When the status is `completed`, `results` holds one entry per request. There is no separate download endpoint. Each entry has either a `response` or an `error`. Results are not in input order, so match them on `custom_id`.

```typescript title="Read the results" lines theme={null}
const batch = await waitForBatch(batchId);
if (batch.status !== 'completed') {
  throw new Error(batch.error?.message ?? `Batch ended as ${batch.status}`);
}

const retry: string[] = [];
for (const result of batch.results) {
  if (result.error) {
    retry.push(result.custom_id);
    continue;
  }
  if (result.response.body.status !== 'completed') {
    retry.push(result.custom_id);
    continue;
  }
  const message = result.response.body.output.find(
    (item: { type: string }) => item.type === 'message',
  );
  const text = message?.content.find(
    (part: { type: string; text?: string }) => part.type === 'output_text',
  )?.text;
  if (text === undefined) {
    retry.push(result.custom_id);
    continue;
  }
  save(result.custom_id, text);
}
console.log(`Cost $${batch.usage.cost}. ${retry.length} requests to retry.`);
```

```json title="Completed batch" lines theme={null}
{
  "id": "batch_123",
  "object": "batch",
  "status": "completed",
  "provider": "Anthropic",
  "request_counts": { "total": 2, "completed": 1, "failed": 1 },
  "usage": {
    "prompt_tokens": 40,
    "completion_tokens": 12,
    "total_tokens": 52,
    "cost": 0.000005,
    "is_byok": false
  },
  "results": [
    {
      "id": "batch_req_1",
      "custom_id": "review-1",
      "response": {
        "status_code": 200,
        "request_id": "request_1",
        "body": {
          "id": "gen-batch-1782097200-a1b2c3d4e5f6a7b8c9d0",
          "object": "response",
          "model": "anthropic/claude-haiku-5.5",
          "status": "completed",
          "output": [
            {
              "type": "message",
              "id": "msg_abc123",
              "status": "completed",
              "role": "assistant",
              "content": [{ "type": "output_text", "text": "positive", "annotations": [] }]
            }
          ]
        }
      },
      "error": null
    },
    {
      "id": "batch_req_2",
      "custom_id": "review-2",
      "response": null,
      "error": {
        "type": "invalid_request_error",
        "message": "max_tokens is greater than the model limit",
        "param": "max_tokens",
        "error_type": "invalid_request"
      }
    }
  ],
  "error": null
}
```

```json title="Failed batch" lines theme={null}
{
  "id": "batch_456",
  "object": "batch",
  "status": "failed",
  "request_counts": { "total": 2, "completed": 0, "failed": 0 },
  "usage": null,
  "results": null,
  "error": {
    "message": "Batch request 'review-2' contains unsupported 'input_audio' content."
  }
}
```

Each `response.body` has the same shape as the sync endpoint's response. Its `id` is the generation ID. To report a bad generation, submit that ID through [Report Feedback](https://openrouter.ai/docs/guides/overview/report-feedback.md).

> [!NOTE]
>
> OpenRouter deletes requests and results 30 days after you submit. After that, `GET` on the batch returns `410 Gone`. Save the results you need before then.

***

## Delete the batch

To remove the stored requests and results sooner, delete the batch after you save the results. You can only delete a finished batch. A batch that is still running returns `409`. There is no cancel endpoint yet.

```shell title="Shell" lines theme={null}
curl -X DELETE https://openrouter.ai/api/v1/batches/batch_123 \
  -H "Authorization: Bearer $OPENROUTER_API_KEY"
```

```json title="200 OK" lines theme={null}
{
  "id": "batch_123",
  "object": "batch",
  "deletion": {
    "openrouter": "deleted",
    "upstream": { "provider": "Anthropic", "status": "deleted" }
  }
}
```

| `deletion.upstream.status` | Meaning |
| - | - |
| `deleted` | The provider's batch record was deleted too. Anthropic, Fireworks, Google AI Studio, Google Vertex, and Mistral support this. |
| `unsupported` | The provider has no batch-delete API. |
| `not_applicable` | The batch never reached the provider. |

OpenRouter also deletes provider-side files, whatever `upstream.status` says:

| Provider | Files deleted |
| - | - |
| OpenAI, Mistral, DeepInfra, Morph, Alibaba, xAI | Uploaded input, output, and error files |
| Fireworks | Input and output datasets |
| Google AI Studio | Uploaded input and output files |
| Together | Uploaded input. Together does not allow deleting generated output. |
| Google Vertex | Output in OpenRouter-owned storage. Files in your own GCP bucket (BYOK) stay under your control. |
| Anthropic, Sail Research | None. These providers take inline requests, so there are no files. |

This includes input left behind by a submission that failed.

`upstream` is left out when no provider was assigned. A `200` means every cleanup step finished, and a later `GET` returns `404`. A `5xx` means cleanup stopped part-way. Send the same request again to resume.

Deleting a batch does not refund it. Billing, generation, and audit records stay. To delete a BYOK batch, the provider key it ran on must still be enabled. Otherwise the request returns `409`.

***

## Choose a provider

A batch runs on one provider. By default, OpenRouter picks the cheapest provider that serves the model in batch mode, after your account's provider allowlist, data policy, [guardrails](https://openrouter.ai/docs/guides/features/guardrails.md), and BYOK keys apply. Guardrail model lists match a batch model by its base model, so allowing `openai/gpt-5-nano` also allows `openai/gpt-5-nano:batch`. Providers at the same price share traffic, and a BYOK key is preferred over cheaper platform providers. If the chosen provider has no capacity, OpenRouter moves the batch to the next cheapest allowed provider and bills that provider's price.

| Option | Batch | What it does |
| - | - | - |
| `provider.only` | Supported | Use only these [provider slugs](https://openrouter.ai/docs/guides/routing/provider-selection.md), for example `["google-vertex"]`. |
| `provider.allow_fallbacks` | Supported | Set to `false` to keep the batch on the provider chosen at submit. If that provider has no capacity, or can't take the batch's inline files, the batch fails. |
| `provider.order` | Rejected | Put only the provider you want in `only`. |
| `provider.sort` | Rejected | Batch always picks the lowest price first. |
| Other sync preferences | Rejected | Remove them. |

```json title="Pin to Google Vertex" lines theme={null}
{
  "endpoint": "/v1/chat/completions",
  "model": "google/gemini-3.8-flash",
  "provider": { "only": ["google-vertex"], "allow_fallbacks": false },
  "requests": [
    {
      "custom_id": "ticket-1",
      "body": {
        "messages": [{ "role": "user", "content": "Summarize this ticket in one sentence." }]
      }
    }
  ]
}
```

Set `provider` at the top level of the batch, next to `model`. It applies to every request. A `provider` field inside a request `body` does not pin the batch, so a chat batch with `provider` only in its bodies runs on the default provider.

If none of the providers in `only` serves the model in batch mode, the submit returns `404`. Embeddings batches do not accept `provider`.

***

## Use other endpoints

Set `endpoint` to choose the request shape for every `body` in the batch. To mix shapes, submit separate batches.

```json title="Anthropic Messages" lines theme={null}
{
  "endpoint": "/v1/messages",
  "model": "anthropic/claude-haiku-5.5",
  "requests": [
    {
      "custom_id": "msg-1",
      "body": {
        "max_tokens": 64,
        "messages": [{ "role": "user", "content": "Say hello." }]
      }
    }
  ]
}
```

```json title="Chat Completions" lines theme={null}
{
  "endpoint": "/v1/chat/completions",
  "model": "anthropic/claude-haiku-5.5",
  "requests": [
    {
      "custom_id": "chat-1",
      "body": {
        "messages": [{ "role": "user", "content": "Say hello." }]
      }
    }
  ]
}
```

```json title="Embeddings" lines theme={null}
{
  "endpoint": "/v1/embeddings",
  "model": "openai/text-embedding-3-small",
  "requests": [
    {
      "custom_id": "emb-1",
      "body": {
        "input": [
          "The quick brown fox jumped over the lazy dog.",
          "Pack my box with five dozen liquor jugs."
        ]
      }
    }
  ]
}
```

For embeddings, `input` is a string, an array of strings, a token array, or an array of token arrays. Multimodal input, `input_type`, and `provider` are not supported on embeddings batches.

Each result `body` is a standard embeddings response, with one embedding per input string, ordered by `index`:

```json title="Embeddings result" lines theme={null}
{
  "id": "batch_req_emb_1",
  "custom_id": "emb-1",
  "response": {
    "status_code": 200,
    "request_id": "request_456",
    "body": {
      "object": "list",
      "data": [
        { "object": "embedding", "embedding": [0.0023064255, -0.009327292, 0.015797347], "index": 0 },
        { "object": "embedding", "embedding": [-0.012282, 0.0034567, -0.0089123], "index": 1 }
      ],
      "model": "openai/text-embedding-3-small",
      "usage": { "prompt_tokens": 18, "total_tokens": 18 }
    }
  },
  "error": null
}
```

***

## BYOK

If you have a [provider key](https://openrouter.ai/docs/guides/overview/auth/byok.md), batches route through it the same as sync requests. The provider bills you for inference, and OpenRouter charges only the BYOK fee. Completed batches report `usage.is_byok: true` and the provider's inference estimate in `usage.cost_details.upstream_inference_cost`.

When the BYOK-only switch is on for your account or workspace, batches run only on your own provider keys:

* Keys marked as fallback-only count, the same as sync requests.
* If none of your keys covers the model, the submit fails with `404` instead of `202 Accepted`.
* Keys for providers that can't run a batch on your own key (Fireworks, Mistral, Sail Research, and Claude Platform on AWS) don't count.

> [accordion] Google Vertex
>
> Vertex batches use a bucket in your GCP project for input and output. Leave out `bucket`, and OpenRouter creates a private bucket on the first batch in each region. You can also give an existing bucket. See [Google Vertex API keys](https://openrouter.ai/docs/guides/overview/auth/byok.md#google-vertex-api-keys) for permissions.
>
> Vertex BYOK also accepts `gs://your-bucket/image.jpg` image URLs. Your project's Vertex AI service agent must be able to read the image until the batch finishes. Image names must end in `.png`, `.jpg`, `.jpeg`, `.webp`, `.heic`, or `.heif`.

> [accordion] Anthropic
>
> An Anthropic key declared for the US [data region](https://openrouter.ai/docs/guides/overview/auth/byok.md) sends `inference_geo: "us"` on Claude 4.6 and later models, the same as sync requests.

> [accordion] Alibaba
>
> The key's `endpoint_url` must be a DashScope OpenAI-compatible base that ends in `/v1`, for example `https://dashscope.aliyuncs.com/compatible-mode/v1`. Other URLs return `400` at submit.

> [accordion] Keys with invalid characters
>
> A key that contains characters that cannot go in an HTTP header, such as a Unicode dash or an invisible character from copy and paste, returns `400` at submit. Fix the key in your provider key settings and resubmit. Google Vertex service-account JSON keys are exempt.

***

## Common errors

| Status | Cause | Fix |
| - | - | - |
| `400` | Bad input, `requests` before other fields, a private `callback_url`, or a model with no batch variant. | Read `error.message`. Pick a model from the [batch models list](https://openrouter.ai/models?variant=batch). |
| `402` | The estimated cost is more than your balance. | Add credits, or split the batch. |
| `404` | No provider in `provider.only`, your account's allowlist, or your guardrails serves the model in batch mode, or every batch endpoint for the model requires your own [provider key](https://openrouter.ai/docs/guides/overview/auth/byok.md) and no eligible key is configured (the error names those providers). | Change `provider.only`, your provider settings, or the guardrail on your key; add a provider key; or pick a model with a platform-billed batch endpoint. |
| `409` | You tried to delete a batch that is still running. | Wait until it finishes. |
| `410` | The batch is older than 30 days, so its results were deleted. | Results cannot be recovered. |
| `413` | The batch has more requests than the [per-batch limit](https://openrouter.ai/docs/guides/features/batch-api.md#limits), or is larger than 200 MB. `error.message` states the limit. | Split the batch, or use file URLs instead of inline files. |
| `422` | The model targets the `:online` variant, or the batch uses a feature batch rejects at submit. | Remove it, or use the sync API. |
| `429` | Too many submits, or too many batches or requests in progress. | Wait for running batches to finish, then retry. |

**Content screening.** A batch can fail validation after `202 Accepted` when image screening rejects a request. The batch moves to `status: "failed"`, its `error` identifies the request and reports `This request contains prohibited content.`, and no requests in that batch are submitted to the provider. This refusal is terminal; do not retry the same content. If screening is temporarily unavailable, the batch usually continues to the provider without waiting for screening. For accounts where screening is required, the batch instead stays in `validating` while OpenRouter retries screening; keep polling the same batch instead of submitting a replacement, which could leave both batches eligible to run. Screening one batch has a time limit: when it runs out, the remaining requests usually continue unscreened, but where screening is required the batch fails with `This batch has too many images to screen within the submit window. Split it into smaller batches.` and will not succeed on retry, so split it into smaller batches.
