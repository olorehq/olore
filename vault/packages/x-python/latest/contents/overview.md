> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Python XDK

The Python XDK (X Developer Kit) is our official client library for interacting with the X API v2 using Python. It allows developers to get started with our API quickly and build applications with it. It is generated based on our official [OpenAPI specification](https://api.x.com/2/openapi.json). It abstracts away low-level HTTP details while providing fine-grained control when needed.

## Key Features

* 🔐 **OAuth Support**: Full support for Bearer Token (app-only) auth, OAuth 2.0 with PKCE (user context), and OAuth 1.0.
* 🔄 **Pagination**: Automatically page through large results. The XDK takes care of pagination without requiring you to make multiple API calls using the `next_token`.
* 📡 **Streaming**: Supports real-time data streaming for endpoints like filtered stream that require persistent http connection.
* 🎯 **Comprehensive Coverage**: Supports all X API v2 endpoints including such as search, timelines, filtered-stream and more.
  **Version Compatibility**: Python 3.8+. Tested on CPython and PyPy.
  **License**: [MIT License](https://github.com/xdevplatform/xdk/blob/main/LICENSE)
  For detailed code examples using the Python XDK, check out our [code samples GitHub repo](https://github.com/xdevplatform/samples/tree/main/python).
