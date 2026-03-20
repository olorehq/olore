# Migrating to Simplified ID Merge

## Overview
Mixpanel currently has three versions of ID management:

- Prior to March 2020, we only had 1 version that merges a user's very first anonymous state to the identified state (typically on sign-up when a User ID is created).  We will refer to this as **Legacy ID Management** (or Legacy for short).
- In March 2020, we released **Original ID Merge** (formerly known as just "ID Merge"), which supports retroactive identity merging, enabling the merging of multiple anonymous states to an identified state across multiple devices and platforms.
- In March 2023, we released **Simplified ID Merge** to remove the complexities of having to rely on different [identity methods](https://developer.mixpanel.com/reference/create-identity) (i.e. \$identify, \$create_alias, \$merge) for different merging scenarios. This also removed the need to cap Distinct IDs at 500 in an ID cluster.

To determine your current ID Management version, navigate to <b>Identity Merge</b> setting under your [Organization Settings](https://mixpanel.com/settings/org/id-management) (for Organization Owners/Admins) or [Project Settings](https://mixpanel.com/settings/project/id-management) (for Project Owners/Admins). 

The Organization Settings for Identity Merge determines the default identity management for every new project created:

- **Disabled**: Legacy ID Management
- **Original API**: Original ID Merge
- **Simplified API**: Simplified ID Merge

![image](/Tracking/org-setting.png "Organization ID Merge Setting")

<br />

You can change the identity management version for a specific project (without affecting other projects) via Project Settings, provided no data has been ingested into the project. For new projects, we recommend setting the Simplified ID Merge (<b>Simplified API</b>) option as it is a generally more straightforward, simpler way of managing your users' identity in Mixpanel. 

![image](/Tracking/project-setting.png)

## Deciding to Migrate

It is currently not possible to automatically convert an existing project, already populated with data, from Legacy or Original ID Merge to Simplified ID Merge. This is because Simplified ID Merge has a very different backend architecture. <b>To adopt Simplified ID Merge, you would need to set up a new empty Mixpanel project</b>. 

This guide assists you in evaluating whether a migration to Simplified ID Merge will benefit your tracking based on your current identity management requirements and future product plans. We'll outline the pros and cons of each ID Management version and guide you through key considerations to make an informed decision. We'll also provide details on the resources required on your end should you decide to proceed with the migration. 

### On Legacy ID Management

The main limitation of Legacy ID Management was that anonymous user states could become orphaned. This happens when an anonymous user was initially tracked on one platform or device, signs up as a user, and later on moved to another platform or device, triggering various anonymous events before logging in. The anonymous events on the second platform would be orphaned, resulting in duplicated users on Mixpanel. 

Aliasing on Legacy ID Management can only be done once. Once a User ID is aliased to an Anonymous ID (typically on the 1st device where they started using your product), subsequent attempts to alias the same User ID to a different Anonymous ID (generated from a different platform or device) will fail. Here’s a diagram illustrating how a typical user journey on different devices ends up creating an orphaned user.

![image](/Tracking/legacy-id-management.png)

<br />

The lack of a retroactive identity merging feature means that orphaned users are created whenever new Anonymous IDs are introduced during user interactions across multiple sessions, devices, and platforms. This prevents you from getting a holistic view of the user's journey. 

><b>Staying on Legacy ID Management</b> <br />
> Note: If you are only tracking authenticated users (i.e. don't track events while the user is anonymous), you don't need the retroactive identity merging feature in Simplified ID Merge and should not consider the migration. We have preserved the documentation on the Legacy ID Management [here](https://github.com/mixpanel/docs/blob/main/legacy/aliases.md). 

### On Original ID Merge

While retroactive identity merging is supported on Original ID Merge, the main limitation is that each user's ID cluster is limited to a maximum of 500 Distinct IDs. Upon reaching this limit, any new Distinct ID can no longer be merged into the same ID cluster. They will then become orphaned (duplicate users on Mixpanel), preventing you from getting a holistic view of the user's journey. 

Reaching the 500 Distinct IDs per ID cluster limit is possible when the process of generating new Anonymous IDs through the `reset()` call on logout, and adding them to the ID cluster repeats 500 times. The `reset()` call is typically implemented in products where multiple users are sharing the same device. This ensures that anonymous events post logout are linked to the next user who logins in, rather than the last user who logout. If some of your users are approaching this cluster limit, you should revisit your implementation and consider removing the `reset()` call, unless there is a compelling use case where the benefits outweigh the implications of reaching the ID cluster limit. 

Also, if you are considering Simplified ID Merge, it's important to note that it does not support multiple identified IDs (i.e. User IDs) per ID cluster. This is supported on Original ID Merge via special events such as \$merge and \$create_alias but they are not supported on Simplified ID Merge as the approach to identity management is completely different, more details [here](/docs/tracking-methods/id-management/identifying-users-simplified#example-user-flows).

><b>Staying on Original ID Merge</b>
>- If you don’t generally support multiple users sharing the same device, and don’t have a compelling use case requiring `reset()` calls on logout (or if you are implementing via server-side and do not generate new anonymous IDs for the same user), you are unlikely to run into the limit of 500 IDs per ID cluster, and should not consider the migration.  
>- You have ID management requirements that are not supported in Simplified ID Merge (e.g. the need to support multiple identified IDs per user)

## Understanding Simplified ID Merge

Unlike Legacy ID Management, which requires an explicit alias call to connect anonymous to identified state, or Original ID Merge, which requires special identity events (i.e. \$identify, \$create_alias, and \$merge) to initiate identity merging; <b>Simplified ID Merge only requires including reserved event properties `$device_id` and `$user_id` on the events for identity merging to take place</b>. You can learn more about Simplified ID Merge [here](/docs/tracking-methods/id-management/identifying-users). Here’s a quick example to illustrate: 

1. When a user is anonymous, the events should include a `$device_id` property that stores the Anonymous ID.
```
{
  "event": "View Anonymous Page",
  "properties": {
    "token": "{{token}}",
    "$device_id": "anonymous111" 		
  }
}
```

2. As soon as the user is identified (i.e. logged in), the events should include both `$device_id` (user's Anonymous ID) and `$user_id` (user's User ID) properties. A single instance of such event is adequate to trigger identity merging which merges “anonymous111” and “charlie”. Subsequent events can continue to have the same `$device_id` and `$user_id` properties or minimally just the `$user_id` property.
```
{
  "event": "Sign Up",
  "properties": {
    "token": "{{token}}",
    "$device_id": "anonymous111", 
    "$user_id": "charlie"
  }
}
```    

3. Upon user logging out, you can generate a new Anonymous ID for `$device_id` to temporarily store the anonymous events, and then later merge them with the next user who logs in (could be the same user, or a different user sharing the same device). Unlike Original ID Merge, Simplified ID Merge does not have a limit on the number of identifiers allowed in an ID cluster.
```
//after user logout 
{
  "event": "View Anonymous Page",
  "properties": {
    "token": "{{token}}",
    "$device_id": "anonymous222"		
  }
}
```    

4. Upon user (re)identification, send events containing both the `$device_id` and `$user_id` properties to trigger identity merging.    
```
//same user 
{
  "event": "Sign In",
  "properties": {
    "token": "{{token}}",
    "$device_id": "anonymous222", 
    "$user_id": "charlie"
  }
}
```
```
//different user sharing the same device 
{
  "event": "Sign In",
  "properties": {
    "token": "{{token}}",
    "$device_id": "anonymous222", 
    "$user_id": "taylor"
  }
}
```

Simplified ID Merge can retroactively merge an unlimited number of anonymous IDs (`$device_id`) to a user (`$user_id`). This ensures that anonymous events across multiple platforms, devices, or sessions can always be merged to the respective user. The implementation above results in the following ID cluster if **charlie** is the one who re-logged in.

![image](/Tracking/charlie_id_cluster.png)

- Any ID provided as `$device_id` will be prefixed with `$device:` in the ID cluster.
- You can merge unlimited number of `$device_id` into a `$user_id`
- `distinct_id` is optional on events because Mixpanel automatically updates or overrides it whenever `$user_id` or `$device_id` is present on the events. It takes the value of `$user_id` if present; otherwise, it takes `$device_id` and prefixes it with `$device:` 
<br /> 

<b>Example 1:</b>
```
//Triggered event 
{
  "event": "Sign Up",
  "properties": {
    "token": "{{token}}",
    "$device_id": "anonymous111", 
    "$user_id": "charlie"
  }
}
```

```
//distinct_id set by Mixpanel 
{
  "event": "Sign Up",
  "properties": {
    "token": "{{token}}",
    "$device_id": "anonymous111", 
    "$user_id": "charlie",
    "distinct_id": "charlie"
  }
}
```

<b>Example 2:</b>
```
//Triggered event 
{
  "event": "View Anonymous Page",
  "properties": {
    "token": "{{token}}",
    "$device_id": "anonymous111" 		
  }
}
```

```
//distinct_id set by Mixpanel 
{
  "event": "View Anonymous Page",
  "properties": {
    "token": "{{token}}",
    "$device_id": "anonymous111", 		
    "distinct_id": "$device:anonymous111"
  }
}
```

## Considerations when Migrating

Take note of the following details when planning for the migration from Legacy ID Management or Original ID Merge to Simplified ID Merge:  

1. Simplified ID Merge supports only one User ID (`$user_id`) per ID cluster, and this User ID will serve as the user's canonical Distinct ID. If you need an ID management solution that supports multiple User IDs per user, such as both a email address and a phone number, it’s recommended to remain on Legacy ID Management or Original ID Merge which provide methods such as \$create_alias or \$merge to merge multiple User IDs.

   - For example, here’s an attempt to merge `+6512345678` (additional User ID) with `charlie` on Simplified ID Merge:
   ```
   {
     "event": "Add phone number as user ID",
     "properties": {
       "token": "{{token}}",
       "$device_id": "+6512345678", 
       "$user_id": "charlie"
     }
   }
   ```
      
   - This results to phone number `+6512345678` being treated as one of the Anonymous IDs and prefixed with `$device:`. As such, if you subsequently send events with `$user_id` as `+6512345678` it will not be associated to `charlie` and would result to creating a completely different new ID cluster where `+6512345678` is the main User ID.
     
     ![image](/Tracking/charlie_two_user_ids.png)
     <br />
     
2. If you are sending events via third-party integrations, ensure that they are compatible with Simplified ID Merge by having reserved properties, `$device_id` and `$user_id` on the events.

   For backward compatibility, Simplified ID Merge still supports events that are only sent with `distinct_id` property (i.e. no `$device_id` and `$user_id` properties):
   - `distinct_id` values prefixed with a `$device:` will be used as `$device_id`, while
   - `distinct_id` values without the `$device:` prefix will be used as `$user_id`

   Ensure that the `distinct_id` value of an anonymous user's events are always prefixed with `$device:` if this approach is used.
   <br />
   
   <b>Example 1:</b>
   ```
   //Triggered event 
   {
       "event": "Message Sent",
       "properties": {
           "token": "{{token}}",
           "distinct_id": "charlie"
       }
   }    
   ```
   
   ```
   //$user_id is set by Mixpanel 
   {
       "event": "Message Sent",
       "properties": {
           "token": "{{token}}",
           "distinct_id": "charlie", 
           "$user_id": "charlie"
       }
   }
   ```
   
    <b>Example 2:</b>
    ```
    //Triggered event 
    {
        "event": "App Install",
        "properties": {
            "token": "{{token}}",
            "distinct_id": "$device:anonymous111"
        }
    }        
    ```
      
    ```
    //$device_id is set by Mixpanel 
    {
        "event": "App Install",
        "properties": {
            "token": "{{token}}",
            "distinct_id": "$device:anonymous111",
            "$device_id": "anonymous111"
        }
    }
    ```

3. If you have Mixpanel in your mobile apps, you’ll need to ship a new version of the app with the updated ID management implementation, and the new project’s token as part of the migration process. Without a forced app update, it may take awhile for all users to upgrade to the latest app version. During this period, some events will still be tracked to the old project. Be prepared for data backfilling if you want these events, as well as the historical data to be included in the new project.
   
4. With the introduction of the retroactive identity merging feature in Original and Simplified ID Merge, it may take up to 24 hours for identity merging (merging 2 unique users into 1 unique user) to be fully reflected in all Mixpanel reports. More details [here](/docs/tracking-methods/id-management/identifying-users-simplified#faq).
   
5. All Mixpanel [Client-Side SDKs](/docs/tracking-methods/choosing-the-right-method#client-side-tracking) support Simplified ID Merge except for [Unity SDK](/docs/tracking-methods/sdks/unity). 

## Migrating to Simplified ID Merge

The following guide outlines the steps required to set up the new Mixpanel project and populate it with data compatible with Simplified ID Merge. This will help you estimate the time and resources required on your end to complete the migration. 

### Set Up a New Mixpanel Project

> <b>Note: You need to set up a new Mixpanel project and enable Simplified ID Merge as none of the configurations from any existing project(s) can be carried over.</b>

1. Create a new Mixpanel project in your existing organization by navigating to <b>Projects</b> setting under [Organization Settings](https://mixpanel.com/settings/org/projects). You can refer to [Creating Projects](/docs/orgs-and-projects/managing-projects#creating-projects) section in our documentation.
   
2. Enable <b>Simplified API</b> in the new project by navigating to <b>Identity Merge</b> setting under this new Project's Settings. Refer to [this](/docs/tracking-methods/id-management#switching-between-simplified-and-original-api) section in our documentation.

   Please note that the new project follows the organization’s default (Legacy or Original ID Merge). You have to switch the project to Simplified ID Merge <b><i>before</i></b> sending any data to the project. Make sure to override the default selection in every newly created project.

![image](/Tracking/simplified_project_settings.png)

3. Continue to set up the new project by following the guide [here](/docs/best-practices/project-setup). Configure the new project's settings by referring to your existing project’s settings. Some of the setup tasks may include:

   - [Inviting users](/docs/orgs-and-projects/roles-and-permissions#invite-users-to-a-project) to the project and granting them [Roles and Permissions](/docs/orgs-and-projects/roles-and-permissions#permissions)
   - Creating [Teams](/docs/orgs-and-projects/roles-and-permissions#teams) and adding users to them
   -  Adding [group keys](/docs/data-structure/group-analytics#group-keys-in-project-settings) from Group Analytics
   -  Creating [data views](/docs/data-governance/data-views-and-classification#create-data-view) and adding users or teams to them
   -  Creating or granting [service accounts](https://developer.mixpanel.com/reference/service-accounts) access to this project
   -  Configuring [session settings](/docs/features/sessions)
   
   Note that the new project comes with newly generated project token, API secret, and new sets of service account credentials (if you had created new service account in the new project). Replace the project token in your implementations with the new ones to start sending data to this new project. Ensure that any backend scripts using API secret or service accounts are updated as well.

### Populating Data into New Project

This process typically involves populating both the live data and historical data into the new project. Coming from Legacy or Original ID Merge, you will find that the implementation for Simplified ID Merge is generally more straightforward and robust. It’s important to review and modify your ID management implementation to get the expected result in terms of user identity merging. 

#### Sending Live Data

Update your tech stack with the new project’s token, API secret, and service accounts credentials to redirect data to the new project. 

1. Mixpanel <b>[Client-Side SDK](/docs/tracking-methods/choosing-the-right-method#client-side-tracking)</b> integration:

   - Upgrade to the latest SDK version supporting Simplified ID Merge and initialize the SDK with new project’s token:
      - [Javascript ≥ v2.46.0](https://github.com/mixpanel/mixpanel-js/releases/tag/v2.46.0)
      - [Android ≥ v7.3.0](https://github.com/mixpanel/mixpanel-android/releases/tag/v7.3.0)
      - [iOS (Objective-C) ≥ v5.0.2](https://github.com/mixpanel/mixpanel-iphone/releases/tag/v5.0.2)
      - [Swift ≥ v4.0.5](https://github.com/mixpanel/mixpanel-swift/releases/tag/v4.0.5)
      - [React Native ≥ v2.2.0](https://github.com/mixpanel/mixpanel-react-native/releases/tag/v2.2.0)
      - [Flutter ≥ v2.1.0](https://github.com/mixpanel/mixpanel-flutter/releases/tag/v2.1.0)

      <b>Note: Mixpanel [Unity](/docs/tracking-methods/sdks/unity) SDK currently does not support Simplified ID Merge.</b>

   - Refer to the implementation guide [here](/docs/tracking-methods/id-management/identifying-users-simplified#client-side-identity-management). You only need to call `identify` and `reset` methods at specific points in the user journeys as the SDK will automatically add the reserved properties `$device_id` and `$user_id` to the events before sending them to Mixpanel.
   - You should not call `alias`, as this method will not trigger identity merging in a Simplified ID Merge project. It is only provided as a backward-compatible solution for users who are on Legacy / Original ID Merge.

<br />

2. Mixpanel <b>API / [Server-Side SDK](/docs/tracking-methods/choosing-the-right-method#server-side-tracking)</b> integration:

   - If you are sending data from server via Mixpanel's [Import API](https://developer.mixpanel.com/reference/import-events), update the project token or service account to point to the new project.
   - You should not send \$identify, \$create_alias, and \$merge events since they will be ignored in Simplified ID Merge projects and will not trigger identity merging.
   - Update your Import API payload to include `$device_id` and `$user_id` properties in the events. A single instance of such event is adequate to trigger identity merging. You can learn more about Simplified ID Merge in this [section](#understanding-simplified-id-merge).
   - If it's not feasible to include both `$device_id` and `$user_id` in events triggered typically from a user interacting with your product; you can still trigger identity merging by sending a dummy event that includes both `$device_id` and `$user_id` at the point when user is switching from anonymous to identified state. You can choose any name for the dummy event (e.g. login) except for \$identify, \$create_alias, and \$merge.

<br />

3. <b>Customer Data Platform (CDP)</b> integration:

   - Ensure that your CDP is updated with new Mixpanel project token or API secret.
   - Check the CDP's support for Simplified ID Merge [here](/docs/tracking-methods/id-management#third-party-integration-support).

<br />

4. Other <b>3rd-party Platforms</b> integration: 

   If you are sending events from 3rd-party platforms (i.e. attribution and messaging tools), make sure to update the Mixpanel project token (or API secret) and ensure that 3rd-party events sent to Mixpanel are compatible with Simplified ID Merge. Refer to this [section](/docs/tracking-methods/id-management/identifying-users#how-should-i-link-identified-ids-from-3rd-party-systems) for more information. 

<br />

5. <b>Data Warehouse</b> integration: 

   Consider using our [Mixpanel Warehouse Connector](/docs/tracking-methods/warehouse-connectors) which supports Simplified ID Merge. Make sure that events from the data warehouse contains information that can be mapped to the reserved properties `$device_id` and `$user_id` before setting up the connector in Mixpanel.

For mobile apps, adoption of the latest app version may take some time. This means that users who have upgraded to the latest app version will start sending data to the new project (with Simplified ID Merge), whereas users on the older apps will continue to send data to the old project. To capture the full data, consider migrating the residual data in the old project to the new one, and repeat the process until the app adoption reaches a satisfactory level. You can find additional information about backfilling and key considerations in the [next section](#backfilling-historical-data).

#### Backfilling Historical Data

> Note: This is an optional step. If your existing project did not have that much data and you don’t mind starting your analysis from scratch, you can skip this section on backfilling.

<br />

Before starting the backfilling process, it’s important to have a discussion internally to determine the volume of historical data that needs to be migrated. It’s advisable to migrate only what you need (i.e. recent data actively queried by the team) as this is more manageable and resource-efficient. Note that backfilling historical data can have significant impact on your billing. Refer to [this section](/docs/pricing#are-monthly-events-calculated-based-on-ingestion-time-or-event-timestamp) for more details.

- Mixpanel Client-Side SDKs, by default, use the /track API endpoint which accepts events up to 5 days old, so it is advisable to initiate the backfill process only after the data for a given day has stabilized to avoid the need for multiple backfills.
- If waiting data to stabilize is not feasible, consider using `mp_processing_time_ms` property (UTC timestamp of when the event was processed by our servers) to identify late-arriving events and selectively backfill them into the new project.
- To prevent data duplication caused by backfilling, ensure that each imported event includes a [`$insert_id`](https://developer.mixpanel.com/reference/import-events#propertiesinsert_id) which provides a unique identifier for the event and is used for deduplication.

<br />

Depending on where you data resides, there are different ways to backfill historical data into the new project:

1. <b>Mixpanel APIs</b> - if Mixpanel is your single source of truth, export data from the existing project using [Raw Export API](https://developer.mixpanel.com/reference/raw-event-export) and then import it into the new project via [Import API](https://developer.mixpanel.com/reference/import-events). Ensure that the data is compatible with Simplified ID Merge before importing it to Mixpanel.

   - You can use Engage API to migrate user data (APIs for both [user export](https://developer.mixpanel.com/reference/engage-query) and batched [user import](https://developer.mixpanel.com/reference/profile-batch-update) are available).
   - Consider incorporating the export and import functions from [Mixpanel-utils open source library](https://github.com/mixpanel/mixpanel-utils) in your migration script.

2. <b>Mixpanel Warehouse Connector</b> - if you’ve been storing your data in a data warehouse, you can import them into Mixpanel using [Warehouse Connector](/docs/tracking-methods/warehouse-connectors) which supports both events and user data. 

3. <b>Customer Data Platform (CDP)</b> - replay the historical data from CDP to Mixpanel.  

Please make sure that the historical data is properly formatted before backfilling it to a new project via any of the methods mentioned above. Familiarize yourself with the Simplified ID Merge implementation in this [section](#understanding-simplified-id-merge) to plan out the required data transformation tasks for your historical data. 

If your historical events do not include both `$device_id` and `$user_id` that are required in Simplified ID Merge for identity merging, check if you can retrieve this ID mapping information from your system through other means. Instrument a dummy event that includes both `$device_id` and `$user_id` based on your ID mappings and send that to the new project to enable identity merging. You can choose any name for the dummy event except for \$identify, \$create_alias, and \$merge.

##### Legacy ID Management

If you had implemented using Mixpanel Client-Side SDKs (except for Unity) and have been making alias calls to link Anonymous ID to User ID, the Client-Side SDKs should have already populated `$device_id` and `$user_id` on your events (please verify this in your existing Mixpanel project). These historical events can be directly imported into the new Simplified ID Merge project as they include reserved properties required for identity merging. 

However, in the case of a custom implementation without the reserved properties `$device_id` and `$user_id` present on your events (e.g. server-side implementation), it’s necessary to transform these events before backfilling it to the new project. For example, you can derive the reserved properties from other relevant properties on the events or from ID mappings maintained in your system. 

##### Original ID Merge

If you had implemented using Mixpanel Client-Side SDKs (except for Unity) and have been calling identify to merge pre and post-login states, the SDK should have already populated `$device_id` and `$user_id` on your events (please verify this in your existing Mixpanel project). These historical events can be directly imported into the new Simplified ID Merge project as they include reserved properties required for identity merging. 

If you are also calling alias or merge (using special events, \$create_alias or \$merge) to merge multiple user IDs per user, it's important to note that this functionality is not supported in Simplified ID Merge. Additional details can be found in this [section](#considerations-when-migrating).

#### Validating Identity Management

As you migrate your data (both live and historical) into the new Simplified ID Merge project, it's important to check if identity merging is working properly.

- Verify that users who are using your product across multiple platforms, devices, or sessions are being merged correctly and reserved properties `$user_id` and `$device_id` are being populated.
- Sample a couple of key users and compare their events and user profiles between existing and new project to check for any missing events / user profiles or events being merged to the wrong user.

#### Data Migration Approach

Discuss internally and decide on the best data migration approach with minimal interruption to the analysis activities on Mixpanel. 

1. Test both live and historical backfilled data thoroughly in a development environment before deploying to production. For historical data, you only need a subset of them in the new project for testing and verification purposes.

2. Prepare for the official transition to the new project as soon as live data is re-directed there. Make sure that your project is well-setup by then.

   - If data delays or incomplete data are expected in the new project, clearly communicate this to your Mixpanel users as their analysis will be impacted. For example, having a data backfilling plan in place and sharing details such as “X months of data will be available in new project within Y hours”. This proactive approach will help manage expectations with your Mixpanel users and ensure a seamless transition.
   - Do check the [cost implication](/docs/pricing) of having overlapping data across multiple projects. If you have any questions, do reach out to our [Mixpanel Support](/docs/response-times#contacting-mixpanel-support) team for assistance.

3. In cases of a more intricate migration, involving larger data volumes coming from different sources that potentially pose a higher risk to Mixpanel users' experience, you might want to consider doing historical backfilling before updating the live implementation. This approach enables you to have ample time to configure your new project, replicate existing reports and non-data entities into the new project, and test them against the backfilled data. While this may require multiple backfills, you have the option to only deploy the live data implementation when you are ready. 

### Migrating Reports and Non-Data Entities

As part of creating the new Simplified ID Merge project, you would also need to migrate existing boards, reports, and non-data entities (e.g. cohorts, custom events, custom properties, lookup tables, etc.) into the new project. Below is a recommended approach on how to go about doing this work:

1. <b>Cohorts, Custom Events, and Custom Properties</b>
   
   Manual Recreation: This involves manually copying and pasting / replicating the logic from the existing project into the new project's [cohorts](/docs/users/cohorts#creating-cohorts), [custom events](/docs/features/custom-events#create-a-custom-event), and [custom properties](/docs/features/custom-properties#creating-a-custom-property) definitions.

   For example for custom properties, follow steps to [Creating a Custom Property](/docs/features/custom-properties#creating-a-custom-property) and copy over the definition from the old project.

<br />

2. <b>Lookup Tables</b>

   Manual Recreation: If your existing project is heavily reliant on [Lookup Tables](/docs/data-structure/lookup-tables) for reports, manually [re-upload](/docs/data-structure/lookup-tables#how-do-i-upload-a-lookup-table) the lookup tables to the new project via Lexicon and map them to the relevant event / user properties.

<br />

3. <b>Boards & Reports</b>

   Move Board: Mixpanel provides a [Move Board](/docs/boards/move-boards) feature that allows you to directly [transfer Boards between projects](/changelogs/2023-07-27-move) preserving reports, filters, and text annotations.

   Before you move any Board, it's important to note the following:
   - Duplicate the existing Board and move the new copy into the new project. This would minimize impact where users are still using Boards and reports in the old project.
   - Any saved cohorts, custom events, custom properties, lookup tables would need to be created first as they don't get automatically moved as part of the Move Board. 
   - You may need to replicate the permissions for the moved Board should you have very specific [sharing permissions](/docs/boards/sharing-and-permission) set in the existing project.
   - Double check that all reports (especially those that use cohorts, custom events, custom properties, lookup tables) are working properly.

<br />

1. <b>Lexicon</b>

   Schemas API or CSV Export/Import: Migrate the Lexicon schema definitions (i.e. display name, descriptions, etc.) of your events, event properties, and user properties from the existing project to the new project using either the [Lexicon Schemas API](https://developer.mixpanel.com/reference/lexicon-schemas-api) or [Lexicon CSV Export/Import](/docs/data-governance/lexicon#export-and-import-lexicon-data).

   Make sure that the events, event properties, and user properties that you're migrating are still relevant to your new project. You may want to take this opportunity to clean up your schema and remove any unused or deprecated elements before executing the import.

***If you have any questions or encounter any issues along the way, do reach out to our [Mixpanel Support](/docs/response-times#contacting-mixpanel-support) team for assistance.***
