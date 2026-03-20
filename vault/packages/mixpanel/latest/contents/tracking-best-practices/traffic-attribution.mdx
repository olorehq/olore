# Traffic Attribution: Analyze your marketing channels

## Web Attribution

When setting up your Mixpanel implementation, one issue of particular interest is tracking users by their original source of traffic. By default, Mixpanel does some of this tracking for you on the web in the form of several [default properties](/docs/data-structure/property-reference/default-properties).

### UTM Properties

Mixpanel's JavaScript library tracks all [UTM tags](/docs/tracking-methods/sdks/javascript#track-utm-tags) by default. This allows you to segment key actions by relevant campaign information using [attribution models](/docs/features/attribution), so that you can quantify the effectiveness of specific campaigns.

Mixpanel's JavaScript library will also track initial_utm_parameters as a profile property, based on the first-ever visit. This is helpful because knowing which acquisition channel originally brought a user to your site allows you to attribute purchases or other key events accurately.

- utm_source: source where traffic is coming from, including a website or advertiser
- utm_medium: advertising medium, including email and banner ads
- utm_campaign: campaign name associated with the traffic
- utm_content: specific link within an ad that a user clicked
- utm_term: keywords associated with campaigns
- utm_id / utm_campaign_id: unique identifier of a campaign
- utm_source_platform: marketing platform responsible for directing traffic
- utm_creative_format: a type of ad creative, for example: display, native, video, search
- utm_marketing_tactic: targeting criteria applied to a campaign, for example: remarketing, prospecting
- Initial UTM: tracks the first time a user reaches any of the above parameters

UTM parameters are by default persisted across events as [Super Properties](/docs/tracking-methods/sdks/javascript#setting-super-properties). To opt in to the recommended modern behavior most compatible with our [attribution models](/docs/features/attribution), use the SDK initialization option `{stop_utm_persistence: true}` to disable UTM param persistence (refer to our [Release Notes](https://github.com/mixpanel/mixpanel-js/releases/tag/v2.52.0) in GitHub).

#### Organic Traffic

If a user arrives at your landing page organically, no UTM tags will be parsed because the URL does not contain them. As a result, the UTM property will be absent from the events and will appear as "(not set)" when used as a breakdown in a report. You can interpret a "(not set)" value for any UTM property as indicating organic or direct traffic.

Learn more about falsy values [here](/docs/data-structure/property-reference/data-type#undefined-and-null).

### Initial Referrer and Initial Referring Domain Properties

Mixpanel's JavaScript library will track Initial Referrer and Initial Referring Domain and append them as a property to any event that a user completes. These properties are stored in the Mixpanel cookie the first time a user comes to your site and will not change on future site visits as long as the cookie is not cleared.

If a user comes to your site from www.google.com for the first time, for example, then the initial referring domain is equal to www.google.com and the initial referrer is the URL that they first came from. This information will be stored in the Mixpanel cookie and sent with all future events.

Having this information allows you to build reports to see how users from different initial referrers convert through an application.

#### $direct

An initial referrer is equal to `$direct` when a user first lands on a site without being referred by another website. The user may have typed the website address directly, clicked a bookmark, clicked a link from an email, or might have security settings in their browser that prevent referrer data from being passed.

## Mobile Attribution

Mobile attribution, or tracking campaign sources for app installs/uninstalls/downloads on mobile devices, can be more complex than the web due to the way mobile devices store attribution information.

For Android, Google provides a [Play Install Referrer Library](https://developer.android.com/google/play/installreferrer/library) so you know where your installations came from. You can use the [getInstallReferrer ( )](https://developer.android.com/reference/com/android/installreferrer/api/ReferrerDetails#getinstallreferrer) method to retrieve the referrer URL string, parse it, and send that data to Mixpanel as properties in events.

For iOS, users enter the Apple App Store carrying data about where they came from, but the App Store strips that data once the user arrives in the store. Therefore, users who download your application don’t come with any data showing where they were before arriving at the App Store.

To track channel attribution on iOS, you'll need to use a [mobile attribution tool](/docs/tracking-methods/integrations/mobile-attribution-tracking). You can see a list of the partners we integrate with on our [tech partners page](https://mixpanel.com/partners/integrations?categories=attribution-deep-linking).

## Server-Side Attribution

Unlike web tracking, server-side implementations generally don't have access to global contexts or variables that can provide attribution data. This means these data, such as UTM parameters and referrer information, need to be extracted manually from the request. Below is an example of how this can be done using Python:

```python
from urllib.parse import urlparse

from mixpanel import Mixpanel

mp = mixpanel.init("YOUR_TOKEN")

def track_to_mp(request, event_name, properties):

  # ... handle additional event properties such as $browser, $device, and $os ...

  if "Referer" in request.headers:
    properties.update({
      "$referrer": request.headers["Referer"]
      "$referring_domain": urlparse(request.headers["Referer"]).hostname
    })

  # assumes query parameters are available as Flask request.args dict
  utm_keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]
  utm_values = {key: request.args[key] for key in utm_keys if request.args.get(key)}
  properties.update(utm_values)

  properties["ip"] = request.remote_addr
  mp.track(request.user_id, event_name, properties)
```
