# Server-Side Best Practices

This document gives tips for implementing scalable, maintainable server-side tracking. If you're just getting started, check out the [quickstart](/docs/quickstart/connect-your-data).

## Tracking Browser, Device, and OS
Mixpanel's Web and Mobile SDKs parse `User-Agent` into a set of properties about the user's browser, device, and OS. This doesn't happen automatically with server-side tracking, but it's easy to add these properties yourself.

`User-Agent` is a header sent on all requests to your server. Most server frameworks provide a way to access your headers:
* [Django](https://docs.djangoproject.com/en/4.1/ref/request-response/#django.http.HttpRequest.headers) exposes this as `request.headers["User-Agent"]`.
* [Flask](https://flask.palletsprojects.com/en/2.2.x/api/#flask.Request.headers) exposes this as `request.headers["User-Agent"]`.
* [Go](https://pkg.go.dev/net/http#Request) exposes this in `Headers["User-Agent"]` on the http.Request struct.
* [Nginx](http://nginx.org/en/docs/http/ngx_http_log_module.html) exposes this as `$http_user_agent`.

Parse the user agent using a library for your language and send the browser, device, and OS properties to Mixpanel. Here's an example using Python and [uaparser](https://github.com/ua-parser/uap-python):

```python
from mixpanel import Mixpanel
from ua_parser import user_agent_parser

mp = mixpanel.init("YOUR_TOKEN")

def track_to_mp(request, event_name, properties):
  parsed = user_agent_parser.Parse(request.headers["User-Agent"])

  # Set parsed values as properties.
  # You can also parse out the browser/device/os versions.
  properties.update({
    "$browser": parsed["user_agent"]["family"],
    "$device": parsed["device"]["family"],
    "$os": parsed["os"]["family"],
  })

  properties["ip"] = request.remote_addr
  mp.track(request.user_id, event_name, properties)

def handle_signup(request):
  # ... logic to process the signup ...

  track_to_mp(request, "Signed Up", {"Signup Type": request.form["type"]})

  return "Signup successful!"
```

## Tracking UTMs and Referrer
Mixpanel's Web SDK parses UTM parameters from the current URL and obtains referrer information from the browser's `document.referrer` property to enable easy marketing analytics. Since this is not automatic for server-side implementations, these properties will need to be added manually to tracked events. Below is an example in Python:

```python
from urllib.parse import urlparse

from mixpanel import Mixpanel

mp = mixpanel.init("YOUR_TOKEN")

def track_to_mp(request, event_name, properties):

  # ... handle additional event properties such as $browser, $device, and $os ...

  if "Referrer" in request.headers:
    properties.update({
      "$referrer": request.headers["referrer"]
      "$referring_domain": urlparse(request.headers["Referrer"]).hostname
    })

  # assumes query parameters are available as Flask request.args dict
  utm_keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]
  utm_values = {key: request.args[key] for key in utm_keys if request.args.get(key)}
  properties.update(utm_values)

  properties["ip"] = request.remote_addr
  mp.track(request.user_id, event_name, properties)
```

## Tracking Geolocation (Server-side)
By default, Mixpanel uses the IP address of the request to set geolocation properties. If you're tracking from your server, you need to override the IP property of your events and profile updates from your server's IP address to the client's IP address.

Read our full guide on [managing geolocation](/docs/tracking-best-practices/geolocation).

## Tracking Page Views
Page view tracking must be done manually for server-side implementations. Here are some general guidelines for tracking page views.

- Track page views as a single event type by using a constant `event_name`
- Track different pages as an event property and not as different events for better analysis
- Plan ahead for handling page views from anonymous users, identified users, and connecting them to merge a user's journey
  - Get started below with [Identifying Users](#identifying-users)
- Fire page view events only on successful responses to the client
- Parse headers and the request URL for common web analytics properties such as referrer and UTM parameters
  - See above for [parsing user agent](#tracking-browser-device-and-os) and [marketing attribution properties](#tracking-utms-and-referrer)

## Identifying Users
Mixpanel's server-side SDKs and HTTP API do not generate IDs automatically, meaning your server is responsible for generating IDs and maintaining ID persistence.

Read our full guide on [Server-side ID Management](/docs/tracking-methods/id-management/identifying-users-simplified#server-side-identity-management).
