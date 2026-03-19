# Group Analytics FAQ

## Limits

The limits below ensure group analytics works correctly in Mixpanel:
- 1M group profiles per group key (e.g. company_id)
- 1M events per day per group identifier (e.g. company_id = "Mixpanel") - see [Hot Shard Limits](/docs/tracking-best-practices/hot-shard-limits)
- Group properties have similar [limits as User properties](/docs/data-structure/user-profiles#what-are-the-limits-of-user-properties)
- This add-on supports up to 3 group keys. Enterprise Plans can increase this to 6 for an additional fee. 

## Events Missing from Groups
The group key property must be present as an event property on an event in order to attribute them to a group profile.

Having the group key present as a user profile property does not automatically attribute the events by that user to the group.

Mixpanel does not backfill historical data to groups before the group key was implemented. This means that Mixpanel is only able to attribute group data from the date that the group key was set up in your Project Settings. Historical events that contain the group key as an event property sent prior to the implementation of the group key in Project Settings will not be attributed to a group.

## Group Analysis in Reports
Group properties are supported when analyzing by users, but user properties are not supported when analyzing by groups.

## Exporting Group Profiles via API
Use the [Engage API endpoint](https://developer.mixpanel.com/reference/engage-query) to export Group Profiles by adding `data_group_id` in the `data` param of the request.

```
curl --request POST \
  --url https://eu.mixpanel.com/api/2.0/engage \
  --header 'Authorization: Basic <redacted>' \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data 'filter_by_cohort={"id": <cohort_id_here>}' \
  --data data_group_id=<data_group_id_here>
```

The `<data_group_id>` for the respective group key's profile can be found under Group Keys within Project Settings:

![image](/data-group-id.png "Data Group ID")

Alternatively, the `<data_group_id>` can also be seen as part of the URL of the [Group Profile](/docs/data-structure/group-analytics#group-profiles) page:

`https://mixpanel.com/project/<project_id>/view/<workspace_id>/app/profile#distinct_id=<distinct_id>&data_group_id=<data_group_id>`

Here's an actual [example](https://mixpanel.com/project/3187769/view/3699049/app/profile#distinct_id=company_id_8889&data_group_id=-1405123841946871899) with `data_group_id` = `-1405123841946871899`: 

![image](/engage-api-data-group-id.png "Engage API Data Group ID")

## How is B2B Company Analytics different than Group Analytics? 

Company Analytics is an advanced offering ‘within’ group analytics. 

Group Analytics focuses on the concept of there being multiple entities on which analysis can be done ‘independently’ (eg. user ID, restaurant ID, driver ID, company ID, etc.)

Company Analytics is specific to B2B Companies where you are likely to have a user ID and company ID. Here we focus on the idea that users ‘belong’ to a company, and that company behavior is ‘dependant’ on user behavioral activity. For instance, in SaaS companies, the health of an account is determined by how active the users of that account are.

## What are the unique features of B2B Company Analytics? 

There are two features unique to B2B Company Analytics being set up, which aren’t available with the generic group analytics setup.  
- Company Profiles - this is an advanced version of group profiles that shows you the health of a company
- Company Activation filters & breakdowns
