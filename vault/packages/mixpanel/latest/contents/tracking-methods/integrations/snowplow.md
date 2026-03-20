# Snowplow

If you already use Snowplow to collect event data, it's easy to route that data to Mixpanel. The value of connecting Snowplow and Mixpanel is to enable fast, self-serve product analytics on the events you already collect. Snowplow offers a native integration that forwards events directly to Mixpanel.

## How Snowplow Works
[Snowplow](https://snowplow.io/) is a customer data infrastructure platform for collecting and storing event data from your application. Teams use Snowplow's SDKs and platform to exercise full control over event data collection in their own cloud. Snowplow's [event-centric approach](https://docs.snowplow.io/docs/fundamentals/events) is fully compatible with Mixpanel; [our infrastructure](https://developer.mixpanel.com/docs/under-the-hood) is also purpose-built to ingest, store, and query events.

Below we show the architecture of a Snowplow pipeline from their [documentation](https://docs.snowplowanalytics.com/docs/fundamentals).

![image](/230695089-ad29a224-0f8e-425a-88a5-f34be4600628.png)

## How the Integration Works

The Mixpanel integration uses Snowplow's [event forwarding](https://docs.snowplow.io/docs/destinations/forwarding-events/integrations/mixpanel). It works as a destination in your Snowplow pipeline. As events flow through Snowplow's collection and enrichment process, the event forwarder sends validated events directly to Mixpanel, in near real-time, via the [Mixpanel Import API](https://developer.mixpanel.com/reference/import-events).

## Setup

### Create the Connection

Add Mixpanel as an event forwarding destination in your Snowplow pipeline. This is configured in **Destinations** > **Connections** in the Snowplow Console UI:

1. Select **Set up connection**, and choose **Loader connection** from the menu
2. Select Mixpanel as the destination type
3. Choose your Mixpanel server location
4. Enter your Mixpanel account credentials

### Identity Management

The integration automatically handles user identification using Mixpanel's simplified ID merge functionality. It uses `distinct_id` for user identification, and combines `domain_userid` with `client_session.user_id` for device tracking, automatically connecting anonymous and identified user activity.

### Schema Mapping

The integration provides default mappings for:
- Required fields: event name, timestamp, user ID, event ID
- Optional fields: geographic data, device information, browser details, UTM parameters

You can also add custom event properties using the format `properties.your_custom_field`.

For detailed setup instructions, refer to the [Snowplow documentation](https://docs.snowplow.io/docs/destinations/forwarding-events).
