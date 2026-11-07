> ## Documentation Index
> Fetch the complete documentation index at: https://www.recraft.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Errors

> How Recraft API errors look, which ones are known, and how to handle and retry them in your code.

A failed request returns a non-2xx HTTP status. The body explains the error, but its format varies: some errors return plain text, others JSON. Read the body as text first, and parse it as JSON only when `Content-Type` is `application/json`.

## Known errors

| Status | When | Body |
| - | - | - |
| `401` | The `Authorization` header is missing, or the token is invalid | `text/plain`: `request unauthorized` |
| `404` | The path doesn't exist, for example a typo in the endpoint | `text/plain`: `404 page not found` |

Requests the API can't process, for example a size outside the [supported sizes](https://www.recraft.ai/docs/api-reference/appendix.md#image-sizes), fail with an error status too. Print the status and the body to see why.

## Handle errors

```python Python theme={null}
import os

import requests

response = requests.post(
    'https://external.api.recraft.ai/v1/images/generations',
    headers={'Authorization': f"Bearer {os.environ['RECRAFT_API_TOKEN']}"},
    json={'prompt': 'two race cars on a track', 'model': 'recraftv4_1'},
)
if not response.ok:
    # The body is plain text or JSON: print it as text
    raise SystemExit(f'{response.status_code}: {response.text}')
print(response.json()['data'][0]['url'])
```

```javascript JavaScript theme={null}
// Node.js 18+, run as an ES module (file.mjs)
const response = await fetch('https://external.api.recraft.ai/v1/images/generations', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.RECRAFT_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ prompt: 'two race cars on a track', model: 'recraftv4_1' }),
});
if (!response.ok) {
  // The body is plain text or JSON: read it as text
  throw new Error(`${response.status}: ${await response.text()}`);
}
console.log((await response.json()).data[0].url);
```

## Retries

* **Most 4xx errors** mean the request needs a change: a token, a parameter, or a size. Fix it before sending again; retrying the same request gives the same result. The exception is going over the rate limits, below.
* **5xx errors and network timeouts** are usually temporary. Retry with exponential backoff, for example after 1, 2, and 4 seconds.
* **Rate limits** are 100 images per minute and 5 requests per second per user. Space out your requests to stay under them, and back off when requests start failing. See [Limits and sizes](https://www.recraft.ai/docs/api-reference/appendix.md#rate-limits).

## Related

> [card] [Limits and sizes](https://www.recraft.ai/docs/api-reference/appendix.md)
>
> Rate limits, sizes, prompt length, and input limits.

> [card] [Quickstart](https://www.recraft.ai/docs/api-reference/getting-started.md)
>
> Get a token and make a request that works.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.