> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# OpenRouter Python SDK

> Python SDK for building AI features against 400+ models through OpenRouter.

The OpenRouter Python SDK gives you type-safe access to 400+ models across
providers through a single unified API, with both sync and async clients.

## Installation

```bash theme={null}
pip install openrouter
```

## Quickstart

```python theme={null}
from openrouter import OpenRouter
import os

with OpenRouter(
    api_key=os.getenv("OPENROUTER_API_KEY", ""),
) as open_router:
    res = open_router.chat.send(
        messages=[
            {"content": "What is the capital of France?", "role": "user"},
        ],
        stream=False,
    )
    print(res)
```

## API reference

Browse the API reference for each resource in the sidebar. Type definitions for
every request, response, and model are linked inline from each resource page.
