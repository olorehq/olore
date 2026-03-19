# Migrating from Google Analytics

If you haven't already, we recommend starting with our [Migration Guides Overview](/docs/migration) as it details the key components of migrating to Mixpanel from other analytics tools. Below we outline specific steps and considerations when migrating from Google Analytics.

## Currently using Google Analytics 4 (GA4) and not seeing value?

Try unifying your marketing and product data in one place. This guide will outline the steps needed in order to bring your GA4 data into Mixpanel allowing you to dig deeper into how users across different channels are interacting with your product, learn where the points of friction are, and where you should be investing your marketing spend to maximize engagement with your product.

### Loading historical data 

Given GA4 has a similar data format to Mixpanel, it is possible to migrate some of your historical data to see trends. In the cases where historical data is essential, we recommend loading a year’s worth (or less) of historical data during your migration. This will allow your team to review year-over-year trends easily and do historical analysis as needed.

Note that backfilling historical data can have significant impact on your billing. Refer to [this section](/docs/pricing#are-monthly-events-calculated-based-on-ingestion-time-or-event-timestamp) for more details.

#### Loading historical data via Mixpanel BigQuery Warehouse Connector 

![image](/ga4_overview.png)

At a high-level, the migration consists of 4 steps:
1. Set up a new Mixpanel project which is on [Simplified ID Merge system](/docs/tracking-methods/id-management#identity-merge-apis). 
2. Set up GA4 BigQuery Export following the instructions [here](https://support.google.com/analytics/answer/9823238?hl=en#zippy=%2Cin-this-article). 
3. Set up [Mixpanel Warehouse Connector](/docs/tracking-methods/warehouse-connectors) to initiate data sync from BigQuery to Mixpanel  

##### Pre-migration data audit
Before migrating your data to Mixpanel, you should conduct a data audit to quickly identify the key events and properties that you want to migrate over. You can learn more about the importance of pre-migration data audit [here](/docs/migration#data-audit).  

The following SQL queries can be used to conduct a data audit in BigQuery. 

SQL query to return events by volume: 

```jsx
SELECT 
    event_name, 
    COUNT(event_name) AS total_rows
FROM `bigquery-public-data.ga4_obfuscated_sample_ecommerce.events_20210131` 
GROUP BY event_name
ORDER BY total_rows DESC
```

SQL query to return event properties by volume: 

```jsx
SELECT DISTINCT
    event_name,
    ep.key  AS event_properties,
    COUNT(event_name) as total_rows
FROM `bigquery-public-data.ga4_obfuscated_sample_ecommerce.events_20210131` , UNNEST(event_params) as ep
GROUP BY event_name, ep.key
ORDER BY event_name ASC
```

SQL query to return sample values of the event properties: 

```jsx
SELECT 
  event_name,
  ep.key,
  COALESCE(ep.value.int_value, ep.value.float_value, ep.value.double_value) AS value
FROM `bigquery-public-data.ga4_obfuscated_sample_ecommerce.events_20210131`, UNNEST(event_params) AS ep
LIMIT 100
```

SQL query to return user properties by volume: 

```jsx
SELECT 
    up.value.user_property_name AS user_properties, 
    COUNT(up.value.user_property_name) AS total_users
FROM `mixpanel-sa.analytics_406874950.users_20231002` , UNNEST(user_properties) AS up
GROUP BY up.value.user_property_name
```

##### Setting up BigQuery Warehouse Connectors 
Our [Warehouse Connector](/docs/tracking-methods/warehouse-connectors) will automatically detect GA4 datasets in BigQuery. You can use this to migrate your historical data from BigQuery to Mixpanel as well as seamlessly import new data going forward.

Once you've given your new Mixpanel project, that is leveraging Simplified ID Merge, access to your [BigQuery Instance](/docs/tracking-methods/warehouse-connectors#step-1-connect-a-warehouse) in the [Warehouse Sources](https://mixpanel.com/report/settings/%23project%2F%24project_id%24%2Fwarehousesources/) tab of your project settings it's time to import your data. Navigate to [Project Settings → Warehouse Data](https://mixpanel.com/report/settings/%23project%2F%24project_id%24%2Fwarehousedata/) and click +Event Table.

Under setup select your BigQuery source you gave Mixpanel access to. In the dataset drop-down, choose your GA4 dataset, then select the GA4 events table. Your Event Name, Event Time, and Distinct ID columns will automatically map for you. If you're tracking users in an anonymous state with GA4 you can select user_pseudo_id for the Device ID column. 

Under sync settings select One Time to backfill the data or Append to bring in new data based on Insert Time (sync mode doesn't include Mirror, only Append and One Time). If you choose Append for Sync Mode, set the frequency to daily. Insert time will default to event_timestamp.

Preview the events and associated event properties to ensure the data looks as expected then select Create to import the data into Mixpanel. 

![image](/ga4_events.png)

Navigate to [Project Settings → Warehouse Data](https://mixpanel.com/report/settings/%23project%2F%24project_id%24%2Fwarehousedata/) and click +User Table.

Under setup select your BigQuery source you gave Mixpanel access to. In the dataset drop-down, choose your GA4 dataset, then select the GA4 users table. Your Distinct ID column will automatically map to user_id for you.

Under sync settings select One Time to backfill the data or Append to bring in new data based on Insert Time (sync mode doesn't include Mirror, only Append and One Time). If you choose Append for Sync Mode, set the frequency to daily. 

Preview the users and associated user properties to ensure the data looks as expected then select Create to import the data into Mixpanel. Once the import is complete, navigate to the Users tab and ensure the profiles have been imported as expected. 

![image](/ga4_users.png)

##### Post-migration data validation
You can use our [Lexicon](/docs/data-governance/lexicon) or Events page to check that your data has successfully been ingested. However, if your historical events are older than 30 days, they will not show up on Lexicon, Events page or in the event dropdown menu across all reports. In this case, you can leverage our [Insights report](/docs/reports/insights) to validate the historical events, by selecting the import time frame and filtering by the following default properties: 

- Warehouse Import ID (tracked as `$warehouse_import_id`)
- Warehouse Import Job ID (`$warehouse_import_job_id`)
- Import = true (`$import`)
- Source = warehouse-import (`$source`)

Please filter by tracked name, $warehouse_import_id instead of the display name, “Warehouse Import ID”. You can find the properties values on the Warehouse Connector’ sync logs:

![image](/ga4_event_validation.png)

### Track forward looking real-time data

The Warehouse Connectors support for GA4 allows you to automatically bring in your event and user data. But if you're looking to replace tracking for your current GA4 implementation, you can follow the steps below to send live data to Mixpanel.

#### Client-side SDKs & Server-side SDKs

Mixpanel and GA4’s client-side SDKs have *very similar* developer facing APIs. This makes it fairly easy to “find and replace” embedded GA4 calls and swap them for Mixpanel calls.
    
This section will detail the Javascript SDKs (for the sake of brevity), although both analytics platforms have fairly uniform tracking APIs for other SDKs (mobile, server-side, etc.)

##### Events

GA4 method

```jsx
gtag('event', 'event_name', {
    'param1': 'value1',
    'param2': 'value2'
});
```

Mixpanel method

```jsx
mixpanel.track('event_name', {
    'param1': 'value1',
    'param2': 'value2'
});
```

##### Identity Management

GA4 method

```jsx
gtag('config', 'GA_MEASUREMENT_ID', {
    'user_id': 'USER_ID'
});
```

Mixpanel method

```jsx
mixpanel.identify('USER_ID');
```

##### User Properties

GA4 method

```jsx
gtag('set', 'user_properties', {
    'property1': 'value1',
    'property2': 'value2'
});
```

Mixpanel method

```jsx
mixpanel.people.set({
    'property1': 'value1',
    'property2': 'value2'
});
```

##### Super Properties

GA4 method → GA4 doesn't have a direct equivalent, but you can set global properties on the SDK config we recommend moving to Mixpanel

```jsx
gtag('config', 'GA_MEASUREMENT_ID', {
    'custom_map': {
        'dimension1': 'property1',
        'dimension2': 'property2'
    },
    'property1': 'value1',
    'property2': 'value2'
});
```

Mixpanel method

```jsx
mixpanel.register({
    'property1': 'value1',
    'property2': 'value2'
});
```

Keep in mind that you will need to initialize the [Mixpanel SDK](https://developer.mixpanel.com/docs/javascript-full-api-reference) by adding the Mixpanel snippet to your website before using these tracking calls. Replace the placeholders (e.g., 'event_name', 'USER_ID', 'value1', etc.) with the appropriate values from GA4 in your code as you migrate the code.
    
#### Google Tag Manager (GTM)

Mixpanel has a [Google Tag Manager (GTM) custom template](/docs/tracking-methods/integrations/google-tag-manager) which can be leveraged to implement events within an hour. Simply load the template, and you can send Mixpanel the same events you’ve setup for your GA4 instance.

This method is straightforward since you’ve already setup your SDK to track “events” and are using Google Tag Manager. You can leverage this same setup to implement Mixpanel.
    
#### Customer Data Platforms (CDPs)

CDPs like [Segment](https://segment.com/) will already be tracking events to GA4 that you want to duplicate to Mixpanel. You can add Mixpanel as a destination to your CDP and immediately start receiving the same data as your other destinations.
    
CDPs like [Segment](https://segment.com/) have always tracked event data and synthesized them into sessions for Universal Analytics. You can add Mixpanel as a destination to your CDP and immediately start receiving the same data as your other destinations.
    
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

## Currently using Universal Analytics with Google?

### Differences in the data models

Mixpanel’s data model is based on events and properties, rather than sessions. While this might be a shift if you come from the sessions-based model, we’ve found it to be both more flexible and easier to set up and use.

- [Events](/docs/what-is-mixpanel#events) capture granular user actions, like a Pageview, Signup, or Purchase.
- [Properties](/docs/what-is-mixpanel#properties) capture attributes of those events, like which page was viewed, the UTM Campaign that led to a Signup, or the Item that was purchased.

Events let you get more granular than [sessions](/docs/features/sessions), so that you can deeply understand user behavior. At the same time, Mixpanel automatically constructs sessions from events, so you can answer session-level questions too.

### Track forward looking real-time data

Choose your current implementation method for Universal Analytics (UA) and you can follow the below steps for starting to send live data to Mixpanel.

#### Client-side SDKs & Server-side SDKs
You’ll have to setup Mixpanel fresh given Mixpanel leverages an event-based model that does not exist in Universal Analytics. The good news is you can get started within an hour, which is lesser or equivalent work to setting up GA4 from an SDK perspective, since both need a fresh implementation to be setup on an “events” model vs UA’s “sessions” model.
    
We recommend the following steps to get started quickly:

- Configure the [Mixpanel JavaScript SDK](https://developer.mixpanel.com/docs/javascript-full-api-reference) to automatically track page views, where UTM params are tracked by default

    ```jsx
    mixpanel.init('YOUR_TOKEN', {track_pageview: true});
    ```

- Track a few key conversion events of interest

    ```jsx
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
    
#### Google Tag Manager (GTM)
Mixpanel has a [Google Tag Manager (GTM) custom template](/docs/tracking-methods/integrations/google-tag-manager) which can be leveraged to implement events within an hour. The template initializes the Mixpanel JavaScript SDK with similar calls as outlined in the above section.
    
We recommend setting up the following in the custom template to get started quickly: a) Choose to auto-track pages, b) Set your conversion events. Once done, Mixpanel will start receiving page views and key conversion events.
    
#### Customer Data Platforms (CDPs)
CDPs like [Segment](https://segment.com/) have always tracked event data and synthesized them into sessions for Universal Analytics. You can add Mixpanel as a destination to your CDP and immediately start receiving the same data as your other destinations.
    
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

### Loading historical data

Mixpanel's data model is fundamentally different from UA. As such, the process of importing old data with a different format has many potential issues - identity management, data discrepancies, etc. It may be worth considering your use cases for importing old data before proceeding, as matching users and data across the systems can be time consuming. [Mixpanel Support](https://mixpanel.com/get-support) is here to help if you need advice how to go about importing the historical data.

Consequently, for most cases, we recommend starting fresh when migrating from UA. In the cases where historical data is essential, we recommend loading a year’s worth (or less) of historical data during your migration. This will allow your team to review year-over-year trends easily and do historical analysis as needed.

To backfill data, we recommend:
- If you have a CDP, this should be straightforward
    - Utilize the CDP's backfilling feature, like [Segment Replay](https://segment.com/docs/guides/what-is-replay/), to re-send historical data to Mixpanel
- For any other implementation method
    - First, export your data to the data warehouse so you have a record of Universal Analytics
    - Once exported, your data warehouse tables can be transformed and modeled into the [event format](/docs/data-structure/events-and-properties) Mixpanel expects
    - Leverage our [Import API](https://developer.mixpanel.com/reference/import-events) to send us the formatted events from your data warehouse

## Not sure where to start or need help?

If you're unsure how you currently track data, or might want to consider tracking data differently as you migrate to Mixpanel, we recommend starting [here](https://mixpanel.com/blog/guide-to-choosing-your-data-architecture/).

Mixpanel Customer Success and Support have been helping thousands of customers migrate from other tools to Mixpanel over the past decade. You can see an overview of the process we run with our Enterprise plan customers migrating from Google Analytics [here](https://mxpnl.notion.site/Google-Analytics-Migration-Package-8020a686880a4caab4dd6653b777892e?pvs=4).

If you need help, just [reach out here](https://mixpanel.com/get-support) and we'll be ready to assist with advice specific to your situation.
