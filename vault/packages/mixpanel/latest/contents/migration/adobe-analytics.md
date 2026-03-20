# Migrating from Adobe Analytics

If you haven't already, we recommend starting with our [Migration Guides Overview](/docs/migration) as it details the key components of migrating to Mixpanel from other analytics tools. Below we outline specific steps and considerations when migrating from Adobe Analytics.

## Differences in the data models

### Data Model

Mixpanel’s data model is based on events and properties, rather than Adobe which is schema-based with many different configurable data types. While this might be a shift if you come from the schema model where you define your data to be captured upfront before sending any data, we’ve found [schema-on-read](/docs/how-it-works/infrastructure#schema-on-read) to be both more flexible and easier to set up and use.

- [Events](/docs/what-is-mixpanel#events) capture granular user actions, like a Pageview, Signup, or Purchase.
- [Properties](/docs/what-is-mixpanel#properties) capture attributes of those events, like which page was viewed, the UTM Campaign that led to a Signup, or the Item that was purchased.

Events and properties with schema-on-read let you get more granular than an enforced schema so you can spend your time analyzing data versus formatting it. Mixpanel automatically constructs a schema from the events and properties you send, so you can answer the same questions as before faster and with less development headaches.

In contrast, on Adobe, every user interaction comes across as a “hit”. Within “hits”, there are what Adobe terms “eVars”, which are variables that can be customized to the organization’s requirements. The following diagram helps to illustrate the key differences between Adobe and Mixpanel’s instrumentation: on Adobe, an administrator needs to manually instrument every metric before it can be used in the platform. For example, the administrator would need to create a separate metric for “Total Page Views” and “Unique Page Views” before an end user can query it. Whereas on Mixpanel, once the event “Page View” is sent, the end user easily, on the fly, whip up a report to show the page views by total vs. unique users.  

![image](/adobe-vs-MP-instrumentation.png)

In Mixpanel, we also have a separate table for users and user properties. If using Mixpanel’s SDK, unique users are identified by a `$device_id` to associate events to the same anonymous user. Once a user signs up or logs in, you’ll call .identify(<user_id>) to map users’ known user_id to their `$device_id`. In Adobe on the other hand, unique users are identified by the concatenation of post_visid_high and post_visid_low properties on the “hit”. Adobe will take the first ID present from in the “hit” as the official visitor ID, and then use the concatenation of post_visid_high and post_visid_low as the standard of identifying unique visitors regardless of how they were identified as a [unique visitor](https://experienceleague.adobe.com/docs/analytics/export/analytics-data-feed/data-feed-contents/datafeeds-calculate.html?lang=en). For example, if you are setting a custom visitor ID (included in the "vid" query parameter), that ID will be used before other IDs that might be present on that same hit. 

### Frequently used key metrics on Adobe and how they differ on Mixpanel

**A visit**: Always tied to a time period, so you know whether to count a new visit if the same user returns to your site. A visit ends when they meet any of the following criteria:

- **30 minutes of inactivity**: Almost all sessions end in this manner. If more than 30 minutes lapse between hits, a new visit begins.
- **12 hours of activity**: If a user consistently fires image requests without any 30-minute gaps for more than 12 hours, a new visit automatically starts.
    
    So for example, if a user visits the site for 20 hours without any 30-minutes gap:
    
    - In Mixpanel, we will register it as 1 session
    - In Adobe, this will be registered as 1 session, but 2 visits (assuming they default to the 30-minute gapped session)
- **2500 hits**: If a user generates a large number of hits without starting a new session, a new visit is counted after 2500 image requests.
- **100 hits in 100 seconds**: If a visit has more than 100 hits that occur in the first 100 seconds of the visit, the visit automatically ends. This behavior typically indicates bot activity, and this limitation is enforced to help increase report performance.

⚠️ **Caveats to behaviors that could affect Visit metrics**

If a visitor performs any of these actions, a new visit starts:

- Clears their cache mid-session and continues browsing your site
- Leaves your site open in a tab for longer than 30 minutes, then continues browsing
- Opens a different browser and navigates to your site on the same computer
- The same person browsing your site on different devices

**Page Views**: Not to be confused with Visits. Page views count the number of times a page is being viewed. Visits count the number of sessions for visitors. One visit can consist of one or more page views.

**Unique visitors**: Adobe has a rather complicated mechanism of identifying unique user as illustrated in the table on their help docs [here](https://experienceleague.adobe.com/docs/analytics/components/metrics/unique-visitors.html?lang=en). It lists the ways a visitor is identified, along with its priority. Some hits can have multiple visitor identification methods; in these cases the higher priority method is used.

** As unique visitor identifiers are typically stored in a browser cookie, a new unique visitor is counted if they perform any of the following:

- Clears their cache at any time
- Opens a different browser on the same computer. One unique visitor is counted per browser.
- The same person browsing your site on different devices. A separate unique visitor is counted per device.
- Opens a private browsing session (such as Chrome’s Incognito tab).

As a result, many internal Adobe users aren't too sure of how unique visitors are actually calculated given that it’s also dependent on how their data set up is done by the consultants they hire, eventually making these calculations somewhat of a black box.


## Track forward looking real-time data

Choose your current implementation method for Adobe Analytics and follow the below steps for starting to send live data to Mixpanel.

### Warehouse Connectors

[Mixpanel Warehouse Connectors](/docs/tracking-methods/warehouse-connectors), allows you to natively import data from Snowflake, BigQuery or Redshift into Mixpanel. With this feature, you can set up recurring syncs from your data warehouse and ensure that Mixpanel is always in sync with your trusted data.

### Client-side SDKs & Server-side SDKs

You’ll have to setup Mixpanel fresh given Mixpanel leverages an event-based model that does not exist in Adobe Analytics. Depending on your current setup and how you’ve enabled data capture in Adobe, these steps will likely be as if you are starting an [entirely new implementation](/docs/getting-started/plan-your-implementation).

The rest of this guide will cover the Mixpanel JavaScript SDK for brevity, but the steps apply for any of our libraries.

We recommend the following steps to get started quickly:

- Configure the [Mixpanel JavaScript SDK](https://developer.mixpanel.com/docs/javascript-full-api-reference) to automatically track page views, where UTM params are tracked by default
    
    ```
    mixpanel.init('YOUR_TOKEN', {track_pageview: true});
    ```
    
- Track a few key [“value moment” events](/docs/getting-started/plan-your-implementation#value-moment-event) of interest
    
    ```
    // Send a "Played song" event to Mixpanel
    // with a property "genre"
    mixpanel.track(
        "Played song",
        {
            "genre": "hip-hop"
        }
    );
    ```
    
- Use the [Mixpanel Marketing KPI Template](https://mixpanel.com/project?show-template-selector=true) to build your initial board

This will allow you to explore Mixpanel’s capabilities with the lowest amount of lift to see value. The reporting around marketing analytics will also showcase reporting that end users are used to coming over from Adobe Analytics. 

### Customer Data Platforms (CDPs)

CDPs like [Segment](https://segment.com/) have always tracked event data and synthesized them into a specific schema format for Adobe Analytics. You can add Mixpanel as a destination to your CDP and immediately start receiving the same data as your other destinations.

Since CDPs already collect all your data via 1 SDK and route to many downstream destinations, enabling Mixpanel is straightforward. Simply go to your CDP settings and add Mixpanel as a destination:

![Segment Connection](https://user-images.githubusercontent.com/129823695/234812593-dffee962-bb34-49b8-9686-96bc0f0565d8.png)

Once you set up the connection to Mixpanel, you can proceed with configuring key settings like:

- Which events and properties to send → only send what matters
- Edit any mappings/editing/filtering that has to be done on the data → ensure high data quality and governance
- Connection settings, or CDP specific settings for data syncs → control over how data is sent

We provide Mixpanel as a destination and setup guides for all of the most popular CDPs:

- [Segment](https://segment.com/docs/connections/destinations/catalog/actions-mixpanel/)
- [mParticle](https://docs.mparticle.com/integrations/mixpanel/audience/)
- [Rudderstack](https://www.rudderstack.com/docs/destinations/streaming-destinations/mixpanel/)

### Data Warehouse

If you have your Adobe Analytics instance sitting on top of data that you collect and store in your data warehouse, getting started is simple. Instead of transforming and modeling that data to send to Adobe, you would model the data as [Events](/docs/how-it-works/concepts) and send it to Mixpanel via a Reverse ETL (RETL) tool or via directly hitting our [Import API](https://developer.mixpanel.com/reference/import-events).

## Loading historical data

For most cases, we recommend starting fresh when migrating from Adobe Analytics. If you must import Adobe data, we strongly encourage loading historical data into a separate project as data structures, identity management, user cohort definitions, etc. are completely different in Adobe than in Mixpanel. In certain situations, retaining historical data in Mixpanel serves the purpose of enabling the team to visualize past trends. However, as this set of historical data would reside in a separate project, visualizing trends over time periods may pose challenges. For instances where historical data proves essential, we advise importing a year's worth (or less) of historical data during the migration process.

Note that backfilling historical data can have significant impact on your billing. Refer to [this section](/docs/pricing#are-monthly-events-calculated-based-on-ingestion-time-or-event-timestamp) for more details.

### Undertaking discovery: Why and what is historical data for

1. **Whats the purpose of bringing in historical data?**
    
    It’s key to understand if you would just like a place to store historical data once Adobe is sunset or would you actually need those historical data for key metrics analysis. If its the former, the recommendation would be to send those data into a warehouse rather than Mixpanel.
    
2. **What is the time frame which you are looking at for historical data?**
    
    We recommend up to 2 years worth of data and usually the cut off time to be the last month before the complete set of data flows into Mixpanel.

3. **Are there specific events and event properties which you would most likely query on Mixpanel?**
    
    Instead of running the full load which would take a long time for the data to be available in the Mixpanel project, are there specific events and properties which are considered P0 for your team? In that case when running the script the data will be available in a much shorter period of time.
    
4. **Given the complexity of unique identifiers in Adobe (also dependent on consultants have implemented for the organization), what is the logic for the main identifier for your unique visitors.** 
    
5. **What is the limit to the % of discrepancies in which they are willing to accept**
    
    The differences in the data model between Mixpanel and Adobe means that there will be a higher than expected discrepancy range and based on some previous projects we have done with customers. The range looks to be around 5% for most metrics. 

To backfill data, we recommend:

- If you already have your historical data in a warehouse,
  - Utilize our [warehouse connector](/docs/tracking-methods/warehouse-connectors), to send historical data into a separate Mixpanel project
- If you have a CDP, this should be straightforward
    - Utilize the CDPs backfilling feature, like [Segment Replay](https://segment.com/docs/guides/what-is-replay/), to re-send historical data to Mixpanel
- For any other implementation method
    - First, export your data to the data warehouse so you have a record of Adobe Analytics
    - Once exported, your data warehouse tables can be transformed and modeled into the [event format](/docs/data-structure/events-and-properties) Mixpanel expects
    - Leverage our [Import API](https://developer.mixpanel.com/reference/import-events) to send us the formatted events from your data warehouse

The process of importing old data with a different format has many potential issues - identity management, data discrepancies, etc. - as Mixpanel is fundamentally different than Adobe Analytics. It may be worth considering your use cases for importing old data before proceeding, as matching users and data across the systems can be time consuming.

For Adobe Analytics specifically, due to the complexity of the data format and the fact it is a specific schema for each customer means we are unable to provide advice for all scenarios without speaking to your team directly.

### Setting Up the Project(s)

To prevent any potential issues with identity management due to the drastic difference in data model, we recommend that the customer set up separate projects when importing historical data from Adobe. 

We recommend customers use Simplified API for their identity management, because they can easily designate their anonymous id and prefix it with a $device.

For any 3rd party integrations, the recommendation is to populate the identifiers that are being used on those 3rd party systems as user profile properties and utilize that as a mean to identify users when exporting out cohorts. 

***This step needs to be done before any data is sent to the project.***

## Not sure where to start or need help?

If you're unsure how you currently track data, or might want to consider tracking data differently as you migrate to Mixpanel, we recommend starting [here](https://mixpanel.com/blog/guide-to-choosing-your-data-architecture/).

Mixpanel Customer Success and Support have been helping thousands of customers migrate from other tools to Mixpanel over the past decade. You can see an overview of the process we run with our Enterprise plan customers migrating from Adobe Analytics [here](https://mxpnl.notion.site/Adobe-Migration-Package-4035f7e2f62f43adb65e34b23ad14d23?pvs=4).

If you need help, just [reach out here](https://mixpanel.com/get-support) and we'll be ready to assist with advice specific to your situation.

