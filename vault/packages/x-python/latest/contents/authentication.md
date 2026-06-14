> ## Documentation Index
> Fetch the complete documentation index at: https://docs.x.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Authentication

The X API requires authentication for all endpoints. The XDK supports three authentication methods:

1. Bearer Token (app-only)
2. OAuth 2.0 with PKCE
3. OAuth 1.0a (User Context)

* **Bearer Token**: Use this for read-only access for endpoints that support app-auth (e.g., searching Post's, streaming endpoints).
* **OAuth 2.0 PKCE**: Secure authentication for scope-based, user-authorized access (e.g. getting authenticated user's Post non\_public metrics)
* **OAuth 1.0a**: Legacy authentication for user-specific operations (e.g., posting on behalf of a user, managing lists)
  Obtain credentials from the [X Developer Console](https://developer.x.com/en/portal/dashboard). You'll need an approved developer account and an app with appropriate permissions (e.g., Read + Write).

## Creating a Client

All authentication flows create a `Client` instance:

```python theme={null}
from xdk import Client
```

### 1. Bearer Token (App-Only)

For read-only operations without user context.
**Steps**:

1. In the Developer Console, generate a Bearer Token for your app.
2. Pass it to the `Client`.
   **Example**:

```python theme={null}
client = Client(bearer_token="XXXXX")
```

**Usage**:

```python theme={null}
# search_recent returns an Iterator, so iterate over it
for page in client.posts.search_recent(query="python", max_results=10):
    if page.data and len(page.data) > 0:
        first_post = page.data[0]
        post_text = first_post.text if hasattr(first_post, 'text') else first_post.get('text', '')
        print(post_text)  # Access first Post
        break
```

### 2. OAuth 2.0 with PKCE (User Context)

This example shows how to use OAuth 2.0 with Proof Key for Code Exchange (PKCE). Use this for user-specific access (e.g. posting on behalf of a user), uploading media for a user etc.).
**Steps**:

1. In the Developer Console, register your app with a redirect URI (e.g., `http://localhost:8080/callback`).
2. Get Client ID (no secret needed for PKCE).
3. Initiate the flow, direct user to auth URL and handle callback.
   **Example** (using a web server for callback):

```python theme={null}
from xdk.oauth2_auth import OAuth2PKCEAuth
from urllib.parse import urlparse
import webbrowser
# Step 1: Create PKCE instance
auth = OAuth2PKCEAuth(
    client_id="YOUR_CLIENT_ID",
    redirect_uri="YOUR_CALLBACK_URL",
    scope="tweet.read users.read offline.access"
)
# Step 2: Get authorization URL
auth_url = auth.get_authorization_url()
print(f"Visit this URL to authorize: {auth_url}")
webbrowser.open(auth_url)
# Step 3: Handle callback (in a real app, use a web framework like Flask)
# Assume callback_url = "http://localhost:8080/callback?code=AUTH_CODE_HERE"
callback_url = input("Paste the full callback URL here: ")
# Step 4: Exchange code for tokens
tokens = auth.fetch_token(authorization_response=callback_url)
access_token = tokens["access_token"]
refresh_token = tokens["refresh_token"]  # Store for renewal
# Step 5: Create client
# Option 1: Use bearer_token (OAuth2 access tokens work as bearer tokens)
client = Client(bearer_token=access_token)
# Option 2: Pass the full token dict for automatic refresh support
# client = Client(token=tokens)
```

**Token Refresh** (automatic in SDK for long-lived sessions):

```python theme={null}
# If access token expires, refresh using stored refresh_token
# The refresh_token method uses the stored token from the OAuth2PKCEAuth instance
tokens = auth.refresh_token()
# Use the refreshed token
client = Client(bearer_token=tokens["access_token"])
# Or pass the full token dict: client = Client(token=tokens)
```

### 3. OAuth 1.0a (User Context)

For legacy applications or specific use cases that require OAuth 1.0a authentication:
**Steps**:

1. In the Developer Console, get your API Key and API Secret.
2. If you already have access tokens, use them directly. Otherwise, complete the OAuth 1.0a flow to obtain them.
3. Create an OAuth1 instance and pass it to the Client.
   **Example** (with existing access tokens):

```python theme={null}
from xdk import Client
from xdk.oauth1_auth import OAuth1
# Step 1: Create OAuth1 instance with credentials
oauth1 = OAuth1(
    api_key="YOUR_API_KEY",
    api_secret="YOUR_API_SECRET",
    callback="http://localhost:8080/callback",
    access_token="YOUR_ACCESS_TOKEN",
    access_token_secret="YOUR_ACCESS_TOKEN_SECRET"
)
# Step 2: Create client with OAuth1
client = Client(auth=oauth1)
# Step 3: Use the client
response = client.users.get_me()
me = response.data
print(me)
```

**Example** (complete OAuth 1.0a flow):

```python theme={null}
from xdk import Client
from xdk.oauth1_auth import OAuth1
import webbrowser
# Step 1: Create OAuth1 instance
oauth1 = OAuth1(
    api_key="YOUR_API_KEY",
    api_secret="YOUR_API_SECRET",
    callback="http://localhost:8080/callback"
)
# Step 2: Get request token
request_token = oauth1.get_request_token()
# Step 3: Get authorization URL
auth_url = oauth1.get_authorization_url(login_with_x=False)
print(f"Visit this URL to authorize: {auth_url}")
webbrowser.open(auth_url)
# Step 4: User authorizes and you receive oauth_verifier
# In a real app, handle this via callback URL
oauth_verifier = input("Enter the OAuth verifier from the callback: ")
# Step 5: Exchange for access token
access_token = oauth1.get_access_token(oauth_verifier)
# Step 6: Create client
client = Client(auth=oauth1)
# Now you can use the client
response = client.users.get_me()
```

**Note**:

* Never hardcode secrets in production; use environment variables or secret managers (e.g., `os.getenv("X_BEARER_TOKEN")`).
* For PKCE, ensure HTTPS for redirect URIs in production.
* The SDK validates tokens and raises `xdk.AuthenticationError` on failures.
  For detailed code examples using the Python XDK, check out our [code samples GitHub repo](https://github.com/xdevplatform/samples/tree/main/python).
