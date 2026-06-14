> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Streaming

The X API supports real-time data via endpoints like the [Filtered Stream Endpoint](https://docs.x.com/x-api/posts/filtered-stream/introduction), delivering matching Posts as they occur. This requires making a persistent http connection.

## Setup and Basic Streaming

### Synchronous

```python theme={null}
from xdk import Client
# Initialize client
client = Client(bearer_token="your_bearer_token")
# Stream posts (make sure you have rules set up first)
for post_response in client.stream.posts():
    data = post_response.model_dump() if hasattr(post_response, 'model_dump') else dict(post_response)
    if 'data' in data and data['data']:
        tweet = data['data']
        post_text = tweet.get('text', '') if isinstance(tweet, dict) else (tweet.text if hasattr(tweet, 'text') else '')
        print(f"Post: {post_text}")
```

### Async

```python theme={null}
import asyncio
from asyncio import Queue
import threading
from xdk import Client
async def stream_posts_async(client: Client):
    queue = Queue()
    loop = asyncio.get_event_loop()
    stop = threading.Event()
    def run_stream():
        for post in client.stream.posts():
            if stop.is_set():
                break
            asyncio.run_coroutine_threadsafe(queue.put(post), loop)
        asyncio.run_coroutine_threadsafe(queue.put(None), loop)
    threading.Thread(target=run_stream, daemon=True).start()
    while True:
        post = await queue.get()
        if post is None:
            break
        data = post.model_dump()
        if 'data' in data and data['data']:
            print(f"Post: {data['data'].get('text', '')}")
    stop.set()
async def main():
    client = Client(bearer_token="your_bearer_token")
    await stream_posts_async(client)
asyncio.run(main())
```

## Rule Management

Rules define filters on what specific data you are looking for(e.g. keywords, users etc). You can learn more about how to build rules using [this guide](https://docs.x.com/x-api/posts/filtered-stream/integrate/build-a-rule)
**Adding Rules**:

```python theme={null}
from xdk.stream.models import UpdateRulesRequest
# Add a rule
add_rules = {
    "add": [
        {"value": "from:xdevelopers", "tag": "official_updates"}
    ]
}
request_body = UpdateRulesRequest(**add_rules)
response = client.stream.update_rules(body=request_body)
```

**Deleting Rules**:

```python theme={null}
from xdk.stream.models import UpdateRulesRequest
delete_rules = {
    "delete": {
        "ids": ["rule_id_1", "rule_id_2"]
    }
}
request_body = UpdateRulesRequest(**delete_rules)
response = client.stream.update_rules(body=request_body)
```

**Listing Rules**:

```python theme={null}
# get_rules returns an Iterator, so iterate over it
for page in client.stream.get_rules():
    if page.data:
        for rule in page.data:
            # Access rule attributes - Pydantic models support both attribute and dict access
            rule_id = rule.id if hasattr(rule, 'id') else rule.get('id', '')
            rule_value = rule.value if hasattr(rule, 'value') else rule.get('value', '')
            rule_tag = rule.tag if hasattr(rule, 'tag') else rule.get('tag', '')
            print(f"ID: {rule_id}, Value: {rule_value}, Tag: {rule_tag}")
    break  # Remove break to get all pages
```

For full rule syntax, see [X Streaming Rules Docs](https://developer.x.com/en/docs/twitter-api/tweets/filtered-stream/integrate/build-a-rule).

## Troubleshooting

* **403 Forbidden**: Invalid auth or insufficient permissions.
* **420 Enhance Your Calm**: Rate limited; wait and retry.
* **No Data**: Check rules with `get_rules()`; ensure matching Posts exist.
  For detailed code examples using the Python XDK, check out our [code samples GitHub repo](https://github.com/xdevplatform/samples/tree/main/python).
  For more examples and API reference, see the inline docstrings (e.g., `help(client.tweets.search_recent)`) or the generated stubs in the source. Contribute feedback via the [GitHub repo](https://github.com/xdevplatform/xdk/tree/main/xdk/python).
