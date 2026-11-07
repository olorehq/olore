> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Batch API

> Run thousands of requests at about half the sync price, with results within 24 hours

The Batch API takes thousands of requests in one call, runs them in the background, and returns every result in one response. Use it for work where nobody waits for the answer, such as evals, classification, data labeling, summarizing a backlog, or embedding a corpus.

> [card] Use batch when
>
> Nobody is waiting for the response, and cost matters more than speed.

> [card] Use the sync API when
>
> A user waits for the answer, or you need image or audio output, OpenRouter web search, or Zero Data Retention.

## Key facts

| Item | Details |
| - | - |
| Price | Typically 50% of the sync per-token price. Each model page shows its batch price. |
| Models | Models with a batch variant. [Browse batch models](https://openrouter.ai/models?variant=batch). |
| Endpoints | `/v1/chat/completions`, `/v1/responses`, `/v1/messages`, `/v1/embeddings` |
| Size | Up to 200 MB per batch, with a cap on the number of requests. See [Limits](#limits). One model and one endpoint per batch. |
| Turnaround | Within 24 hours on most providers. Google Vertex can take up to 96 hours. Most batches finish in minutes. |
| Input | Requests go inline in the JSON body. There is no JSONL file to upload. |
| Results | Returned inline by `GET /api/v1/batches/{id}`. Match each result to its request with `custom_id`. |
| Notifications | Optional signed webhook when the batch finishes. |
| Data | Deleted 30 days after you submit, or when you delete the batch. Batch endpoints do not train on your data. |

## How it works

1. **Submit the batch.** `POST /api/v1/batches` with a `model`, an `endpoint`, and your `requests`. The response is `202` with `status: "validating"`.
2. **Wait for it to finish.** Set `callback_url` to receive a webhook, or poll `GET /api/v1/batches/{id}`.
3. **Read the results.** When `status` is `completed`, `results` holds one entry per request.

```shell title="Shell" lines theme={null}
curl https://openrouter.ai/api/v1/batches \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "endpoint": "/v1/responses",
    "model": "anthropic/claude-haiku-5.5",
    "requests": [
      {
        "custom_id": "review-1",
        "body": {
          "input": "Classify: The fit is perfect."
        }
      }
    ]
  }'
```

> [!WARNING]
>
> A `202` means OpenRouter stored the batch, not that the batch is valid. OpenRouter checks each request after it accepts the batch. If a check fails, the batch moves to `failed` and `error.message` says why.

The [Batch quickstart](https://openrouter.ai/docs/batch-quickstart.md) walks through every step, with webhooks, polling, images and files, and deletion.

## Batch status

```text title="Status progression" lines theme={null}
validating → in_progress → finalizing → completed
```

| Status | Meaning |
| - | - |
| `completed` | The batch finished. Some requests in it can still have errors. |
| `failed` | A check failed, or the provider rejected the batch. `error.message` says why. |
| `expired` | The provider did not finish before `expires_at`. |
| `cancelled` | The provider cancelled the batch. |

> [!NOTE]
>
> A completed batch can contain failed requests. Each result has either a `response` or an `error`. Check `request_counts.failed` before you assume every request worked.

## Pricing

Batch requests are typically billed at 50% of the model's standard per-token price. Some components are not discounted: web search calls bill at standard rates, and prompt caching rates vary by model. The price on each model page is the source of truth. For a completed batch, `usage.cost` reports the amount OpenRouter charged.

Before OpenRouter accepts a batch, it estimates the cost. If the estimate is more than your balance, the submit returns `402`. With a [provider key (BYOK)](https://openrouter.ai/docs/guides/overview/auth/byok.md), the provider bills you for inference and OpenRouter charges only the BYOK fee.

## Limitations

| Not supported | What to do instead |
| - | - |
| Cancel a batch | Wait for the batch to finish, then [delete it](https://openrouter.ai/docs/batch-quickstart.md#delete-the-batch). |
| Image or audio output | Use the sync API. Batch returns text and embeddings. |
| Base64 images, audio input, and video other than YouTube | Send public image URLs, or use the sync API. See [Images and files](https://openrouter.ai/docs/batch-quickstart.md#add-images-and-files). |
| OpenRouter web search (`:online`, the `web` plugin) | Use the provider's own search tool on a model that supports it. |
| Zero Data Retention | Use the sync API. Batch keeps data for 30 days, so it cannot run when your privacy settings require ZDR for the model's provider. |
| Provider `order` and `sort` | Use `provider.only` to choose providers. See [Choose a provider](https://openrouter.ai/docs/batch-quickstart.md#choose-a-provider). |
| Regional data residency | Use the global endpoint at `openrouter.ai`. Batch runs on US-based infrastructure. |

## Limits

Batch limits generally follow the batch limits of the upstream providers. OpenRouter adjusts them over time, and they can differ between accounts, so this page does not list fixed numbers. When a submit hits a limit, `error.message` states the current value.

| Limit | Status when exceeded |
| - | - |
| Requests per batch | `413` |
| Request body size (200 MB) | `413` |
| Batches in progress per account | `429` |
| Requests in progress per account | `429` |
| Requests submitted per minute per account | `429` |

For a `413`, split the batch. For a `429`, wait for running batches to finish if you hit an in-progress limit, or one minute if you hit the per-minute limit.

## Frequently asked questions

> [accordion] Which provider runs my batch?
>
> OpenRouter picks the cheapest provider that serves the model in batch mode. If that provider has no capacity, OpenRouter moves the batch to the next one at a similar price. The `provider` field on the batch shows which provider ran it. See [Choose a provider](https://openrouter.ai/docs/batch-quickstart.md#choose-a-provider).

> [accordion] Are results in the same order as my requests?
>
> No. Match each result to its request with `custom_id`.

> [accordion] How long are results kept?
>
> 30 days after you submit. After that, `GET` returns `410 Gone`. Save the results you need, or delete the batch sooner.

> [accordion] Where can I see my batches?
>
> In the **Batches** tab of your [logs](https://openrouter.ai/logs), or with `GET /api/v1/batches`.
