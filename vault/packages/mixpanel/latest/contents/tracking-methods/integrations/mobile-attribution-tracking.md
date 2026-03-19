# Mobile Attribution

Determining the source and channels for your mobile traffic can be complex to set up yourself, especially for installs, since the user goes mainly through the Google Play Store or the Apple App Store before continuing their journey, and mapping that can be a challenge. In our view, it’s best to partner with a service that can focus on reliably mapping that journey, and [we have a list of partners](https://mixpanel.com/partners/integrations?categories=attribution-deep-linking) that we encourage customers to review for this purpose.

> Specifically for Android installs, the Android SDK itself supports a function called [getInstallReferrer](https://developer.android.com/reference/com/android/installreferrer/api/ReferrerDetails#getInstallReferrer()) which you can leverage to parse some of the source data if you’d prefer to not implement through a partner, although for a smaller subset of the attribution data.

Mobile attribution partner integrations work in 3 main ways: 
- Webhooks/Callbacks: the partner sends the attribution data to your servers
- SDK → SDK integrations: your app leverages the partner SDK to send the data to Mixpanel
- Partner Server → Mixpanel integrations; the partner directly sends the data to Mixpanel

Each one has its benefits and drawbacks, although **usually Webhooks or the SDK → SDK route will be the best fit** in terms of configuration and correctness.

## Webhooks

Some of our partners support webhooks (or callbacks); the idea being that you can set up the partner so that when there’s new data for an install/re-engagement, said data is sent from the partner to your server or a service of your choosing (if you want to offload processing it). The data you receive will have an install/device ID and the attribution data. You can then either choose to send that data directly to Mixpanel ([through our ingestion APIs](https://developer.mixpanel.com/reference/events)) or, better yet, store it in a data warehouse so you have that on your end, and leverage [our data warehouse connectors](/docs/tracking-methods/warehouse-connectors) to import that data to Mixpanel.

> **Note**: Adjust is just selected alphabetically from the list of partners. We encourage customers to review the list and choose based on the ones that fit their requirements best.

Picking Adjust as a partner to provide an example, we can see their section [on callbacks here](https://help.adjust.com/en/article/server-callbacks#single-activity-callbacks). The callback returns, as one of the values, an `adid` (Adjust device ID). This is also a value you will have available in the SDK in the client. You can send this to your own server from the client so that, when you receive that `adid` value, you know which user this belongs to, so you can send the data to Mixpanel with the right distinct_id.

To fully illustrate the workflow, you could create a table in your DB that holds the attribution data for the device with the `adid` value as the primary key (data that you will receive from the webhook). Then, when the app launches, you will have both the `adid` from the SDK as well as the distinct_id from Mixpanel after you initialize the library, which you can update your table with, and if the user authenticates, you will also have a map of `adid` to authenticated user ID which you can also update. You can then build a view that has the event data you want to send in which you would use the distinct_id from after initializing the library to send the event with and, if you also have the user ID (because the user authenticated), you can create another view for the profile using the user ID as the distinct_id (profiles should be created with the authenticated ID only). Both of those views can be directly connected to the project via the data warehouse connector or you can also design a process that reads from the view and sends the data to our APIs.

**Advantages:**
- Highly configurable. Once you receive the data, you can choose how to send the data to Mixpanel, what part of that data, and even transform it before you send it
- Highest level of data accuracy. As you can edit/transform the data before you send it, it gives you the ability to further clean/transform the data you ultimately send. As a use case, sometimes, the attribution source for a device changes (even for the install). If the partner supports sending you callbacks for each of the values of the attribution, you can receive that data and choose what best fits your use case to then send it to Mixpanel

**Disadvantages**:

- Requires setup in your server (or another 3rd party service) to receive the partner’s webhook and process it.

## SDK to SDK

Another recommended way to approach this which is highly configurable would be to leverage the partner’s SDK (which you need to install in any of the solutions), and when the app launches for the first time, you would use their SDK to query the attribution data asynchronously. Once you receive it on the device, assuming you also have Mixpanel’s SDK installed, you can then track the attribution through both sending your own install event with that data and, potentially, also sending it to your server or storing it in local storage (that way, if the user authenticates, you can also choose to store it in the profile from the value you had already saved).

> **Note**: Adjust is just selected alphabetically from the list of partners. We encourage customers to review the list and choose based on the ones that fit their requirements best.

Picking Adjust as a partner to provide an example, in their docs, we can see [the section of the documentation](https://help.adjust.com/en/article/mixpanel-sdk-integration) which refers to querying the attribution data in the device. Once you download the data, an example workflow would be to check local storage (shared preferences) and if you have not yet stored the attribution data, you would proceed to do so and also send the app install event with properties with said attribution data. Below you will see an example of that idea for Android:

```java
private trackAttribution(AdjustAttribution attribution){
		if(isAttributionAlreadyStored()){ //function to check if the data is already on the device
		    return;// data already stored, nothing to do
		}
		JSONObject props = new JSONObject();
		insertJsonProperty(props, "[Adjust]Network", attribution.network);
		insertJsonProperty(props, "[Adjust]Campaign", attribution.campaign);
		insertJsonProperty(props, "[Adjust]Adgroup", attribution.adgroup);
		insertJsonProperty(props, "[Adjust]Creative", attribution.creative);
		
		storeAttribution(props); //store the data for later user
		mixpanel.track("install", props);//send the install event since this is the first time it has been received
}
private void insertJsonProperty(JSONObject props, String name, String value) {
    try {
        if (value != null) {
            props.put(name, value);
        }
    } catch(JSONException e) { }
}
```

**Advantages:**

- Highly configurable. Once you receive the data, you can choose how to send the data to Mixpanel, what part of that data
- Does not require any additional infrastructure to maintain
- Less likely to cause ID management issues as all the tracking is done via the Mixpanel SDK so there is no other potential ID to join from other systems.

**Disadvantages:**

- Requires a bit more implementation work than Partner Server to Mixpanel and requires app updates to pause/resume

## Partner Server to Mixpanel

Most of our attribution partners support a form of server-to-server integration. The main idea is that you will install the partner’s SDK in your app and follow their configuration instructions. Part of those instructions usually involve querying Mixpanel’s distinct_id (unique ID for the user) in the device and sending that over to their server. Once the partner has the attribution data, as well as knows which is the distinct_id for that user in that device, they will send said data in the form of events and properties (as well as profile properties) directly from the partner server to Mixpanel.

**Advantages**:

- These kinds of integrations usually require the least amount of setup on the app. If you don’t track events in Mixpanel from the app directly (just from the server) could sometimes even be done without an app update.
- Once set up, you can enable/disable the functionality from the partner’s page without another app update, and change some settings

**Disadvantages**:

- ID management issues; by default, the partner will send the data with an ID of their choosing which will be different from the one you’re tracking events with, so you can get into a state in which the data sent from the integration is not connected to the user data you’ve tracked otherwise.
- Hidden profiles; even when setting up ID management correctly, if sending profile data is enabled, anonymous profiles can be created for users which can be problematic as (on ID merge enabled projects) you can merge events, but merging profiles is not supported, which can lead to 1 (or more) profiles to be hidden if you have multiple profiles for the user.
- Not as configurable; events and properties will be sent with the defaults sent by the partner which some partners have configuration options for, but can be limited.
