> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Quickstart

This example showcases how to quickly search for Posts using the XDK using Bearer Token authentication.

## Step 1: Install the SDK

```bash theme={null}
pip install xdk
```

## Step 2: Get Your Bearer Token

1. Log in to the [X Developer Console](https://developer.x.com/en/portal/dashboard).
2. Create or select an app.
3. Under "Keys and Tokens," generate a Bearer Token (app-only auth).

## Step 3: Write and Run Your First Script

Create a file `quickstart.py`:

```python theme={null}
# Import the client
from xdk import Client
# Replace with your actual Bearer Token
client = Client(bearer_token="YOUR_BEARER_TOKEN_HERE")
# Fetch recent Posts mentioning "api"
# search_recent returns an Iterator, so iterate over it
for page in client.posts.search_recent(query="api", max_results=10):
    if page.data and len(page.data) > 0:
        # Access first Post - Pydantic models support both attribute and dict access
        first_post = page.data[0]
        post_text = first_post.text if hasattr(first_post, 'text') else first_post.get('text', '')
        print(f"Latest Post: {post_text}")
        break
    else:
        print("No Posts found.")
        break
```

Run it:

```bash theme={null}
python quickstart.py
```

**Expected Output**:

```
Latest Post: Exciting updates on XDK Python SDK!
```

**Troubleshooting**: If you get a 401 error, double-check your Bearer Token. For rate limits (429), wait and retry.

## Next Steps

* Explore [Authentication](/xdks/python/authentication) to understand how to use Bearer Token (app-only) auth, OAuth 2.0 with PKCE (user context), and OAuth 1.0a (legacy user context).
* Learn about [Pagination](/xdks/python/pagination) for use-cases where you want large number of results returned without worrying about making multiple API calls.
* Dive into [Streaming](/xdks/python/streaming) to learn how to work with real-time data.
  For detailed code examples using the Python XDK, check out our [code samples GitHub repo](https://github.com/xdevplatform/samples/tree/main/python).
