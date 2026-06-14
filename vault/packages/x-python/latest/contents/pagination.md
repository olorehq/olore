> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Pagination

The X API uses pagination for endpoints that return multiple pages of results (e.g. timelines, search etc.). Each API call response includes a `meta` object with `result_count`, `previous_token`, and `next_token`. The XDK takes care of making multiple API calls using the `next_token` so developers can just specify how much data they are looking for without having to make multiple calls.
The SDK simplifies this with:

* **Built-in Iterators**: Use generator functions for seamless multi-page fetching.
* **Explicit Token Handling**: For flexible manual control when needed by passing `pagination_token` when needed.
* **Max Results Enforcement**: Respect `max_results` per call (up to API limits, e.g., 100 for search).

## Automatic Pagination (Recommended)

Use the `iterate()` method on paginated responses to fetch all results lazily.
**Example: Paginated Search**

```python theme={null}
from xdk import Client
client = Client(bearer_token="your_bearer_token")
# Search with automatic pagination
all_posts = []
for page in client.posts.search_recent(
    query="python",
    max_results=100,  # Per page
    tweet_fields=["created_at", "author_id"]  # Optional expansions
):
    all_posts.extend(page.data)
    print(f"Fetched {len(page.data)} Posts (total: {len(all_posts)})")
print(f"Total tweets: {len(all_posts)}")
```

* The iterator handles `next_token` automatically.
* Stops when no `next_token` is present.
* Supports rate limit backoff to avoid 429 errors.

## Manual Pagination

If you require control over the results for some custom logic (e.g. processing page-by-page), you can still use the `next_token` and do the pagination manually as shown below:

```python theme={null}
# Get first page - search_recent returns an Iterator
first_page = next(client.posts.search_recent(
    query="xdk python sdk",
    max_results=100,
    pagination_token=None  # First page
))
print(f"First page: {len(first_page.data) if first_page.data else 0} Posts")
# Extract next_token from meta
next_token = None
if hasattr(first_page, 'meta') and first_page.meta:
    if hasattr(first_page.meta, 'next_token'):
        next_token = first_page.meta.next_token
    elif isinstance(first_page.meta, dict):
        next_token = first_page.meta.get('next_token')
if next_token:
    second_page = next(client.posts.search_recent(
        query="xdk python sdk",
        max_results=100,
        pagination_token=next_token
    ))
    print(f"Second page: {len(second_page.data) if second_page.data else 0} Posts")
```

**Tips**:

* Always specify `max_results` to optimize (default varies by endpoint).
* Monitor `meta.result_count` for debugging.
* For very large queries, consider async iteration to avoid blocking.
  For detailed code examples using the Python XDK, check out our [code samples GitHub repo](https://github.com/xdevplatform/samples/tree/main/python).
