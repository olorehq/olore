# Hot Shard Limits

In order to maintain fast queries and catch implementation mistakes, we set a limit on the number of events sent to a particular identifier in a given time window. This threshold has been established for a project as:
- 200K events per `distinct_id` per event date in the project's user analytics.
- 1M events per `group identifier` per event date (still represented as distinct_id in the rest of this doc) in each of the project's [analytic groups](/docs/data-structure/advanced/group-analytics).

## What is a hot shard?
Whenever a project goes above the threshold described above, it generates an imbalance when storing events across distinct_ids, where one distinct_id's events grows larger than the rest, impacting storage and query systems which in-turn results in high query latencies (slower reports) for the end user.

Since we distribute events across shards, this imbalance is called a **hot shard**.

Group analytics has a different storage sharding of events separate from the user analytics. A hot shard that appears in an analytic group may or may not not appear in user analytics.

## What happens when we detect a hot shard?
Once a given entry crosses the threshold, all subsequent matching events (same `distinct_id` and calendar day) will have the following transformations applied to them:
- `event` will be changed to `$hotshard_events` (display name is `Hotshard Events`).  The original event name will be preserved under a property called `mp_original_event_name` (display name is `Hotshard Original Event Name`). Changing the name removes the bad events from being selected for analysis yet remain accessible for debugging.
- `distinct_id` is changed to `""`[^1]. The original value will be preserved under a property called `mp_original_distinct_id` (display name is `Hotshard Original Distinct ID`). Removing the distinct_id allows Mixpanel backend to distribute these events evenly across shards ensuring that performance is not adversely affected while keeping the data accessible for debugging.
- If the hot shard comes from a `group identifier`, these transformed events would show up when you analyze by the respect `Group` in Insights report. 

Original Event - 
```json
{
  "event": "Signed up",
  "properties": {
    "time": 1618716477000,
    "distinct_id": "hotshard@mixpanel.com",
    "$insert_id": "36a92782-cd7d-41a0-93af-8c23ec6c4191",
  }
}
```

Updated Event - 
```json
{
  "event": "$hotshard_events",
  "properties": {
    "time": 1618716477000,
    "distinct_id": "",
    "mp_original_event_name": "Signed up",
    "mp_original_distinct_id": "hotshard@mixpanel.com",
    "$insert_id": "36a92782-cd7d-41a0-93af-8c23ec6c4191",
  }
}
```

These events can be queried from the dashboard just like any other events. An email is sent to organization owners and the specific project's owners to alert them of the hot shard. In addition, a monthly report (per project) is sent as well for hot shards that were detected and remediated in the past month.

Starting in June 2024, we are also limitedly emitting a new type of events called `$hotshard_record`. The purpose is to keep track of all user-analytics and group-analytics hotshard remediation history that has happened inside your project in a central event type.

```json
{
  "event": "$hotshard_record",
  "properties": {
    "time": 1618716477000,
    "hotshard_distinct_id": "hotshard@mixpanel.com",
    "hotshard_group_key": "group_key",
    "hotshard_group_display_name": "group_display_name",
  }
}
```

## Recovering from a hot shard
The process can be broken down into 3 main steps:
* Reviewing the hot shard events in your project to identify which events, and `distinct_id` or (analytics groups and `group identifier`) values are involved
* Change the implementation to avoid further instances of the hot shard
* (Optionally) Fix historical data via exporting, transforming and re-importing the data

### Reviewing hot shard data in your project
A great starting point for the analysis would be to create a copy of [this board](https://mixpanel.com/project/3187769/view/3699049/app/boards#id=7145081) from our demo project into the affected project. As you open the board linked above, you will see instructions to click on "Use this board" to transfer it over to your project and to edit the default date range. Only projects with US residency will be able to copy the board directly. Projects with EU and IN residency will need to recreate the reports manually.

![Screenshot use this board](/tracking_id_limits_copy_board.png)

The board eases the process of identifying the data marked as coming from a hot shard. Essentially, it helps you create reports to break down that data by the main `distinct_id` values affected as well as the event names. For example, you can see reports pointing to the main `distinct_id` values (by volume) generating the hot shard.

![Sample hot shard report](/tracking_id_limits_sample_report.png)

### Changing your implementation
Once you have identified the cluster of `distinct_id` values related to the issue, it would be time to review your implementation and inspect the reason why a set of these IDs are getting a higher than usual number of events. In general terms, you will often find these main scenarios:

#### Events that are non-attributable to users but marked with a specific ID
In some instances, your project will have events that should not be attributed to a specific user or group, like some automated tests being tracked, or perhaps ad-spend data you're importing; it may be that when implementing, a specific ID was arbitrarily chosen for those events, say the string `"0"`, `"spend_data"` or perhaps even the name of the pod/server the data is coming from. This can lead to hundreds of thousands of events with the same ID causing this issue. 

If your use case is similar to this, and the event **should not be attributed to specific users or groups**, you can change your implementation to send those events with an empty string value `""`. Upon ingestion, Mixpanel will randomly store these events in different shards so you will not incur a performance hit if this is your intended use case.

#### ID management issue
Throughout the user journey, a given user might trigger events under multiple `distinct_id` values; the most frequent use case being a user initially being anonymous and then authenticating. When a user authenticates, generally, we advice changing the ID of the user to the authenticated one and for projects with ID merge enabled, and this is done through the `identify` function. Ideally this function should receive the user's authenticated ID to link it to the anonymous activity, but sometimes there can be implementation issues; as an example, the implementation may provide a static string for all users instead of the new user ID, like this:

```javascript
function authenticate_user(user_id){
	mixpanel.identify('user_id');
	mixpanel.track('user_authenticated');
}
```
Although the code above looks almost like it should work, it could be easy to miss a static string is being passed to the function instead of the dynamic value for each user. This would mean that after this function runs, all users would actually send events with the same id value: `user_id`.

You will want to fix the implementation to identify users correctly and avoid new users being impacted. You can find more information on [identifying users in this doc](/docs/tracking-methods/id-management/identifying-users).

In case you've identified the problematic set of ID values, but you have not been able to identify the root cause in the implementation. Reach out to our [support team](https://mixpanel.com/get-support) and provide the details you've uncovered so far; providing your copy of the board and any details on the investigation in your code will be of great assistance helping you identify the issue.

#### Group Analytics implementation issue
Adding users to groups causes the group_key and group_id to send as a property key and value for all events triggered by that user on the device.

```javascript
mixpanel.set_group(“company”, [“Company”])
}
```
Similar to the issue above, it is also easy to pass a static string to this function. After this runs, all events sent would include the group identifier: `Company`.

### Fix historical data not involving Groups Analytics
Before re-importing, verify newly imported events will no longer create hot shards and the original issue has been solved.

Once the implementation has been changed, you can still have a situation in which some of your metrics might be temporarily down since they were tracked with a different event name (`$hotshard_events` instead of the original name) and without a distinct_id (which can make unique counts go down, although this is usually less of an impact).

The great news is that since the events are still in your project, you can export them, transform them and re-import them.

Below you will find an example script leveraging [our python module](https://github.com/mixpanel/mixpanel-utils) to export the `$hotshard_events` by day to a folder, transform them (in this case replace the event name with the original name the events had) and re-import them. This script is meant as a template for you to review and adjust. You will want to pay special attention to the `transform_event` function in which you can remap properties as needed for the final event to be imported. You can find the configuration options towards the start of the script within the `SETTINGS` variable.

```python
import glob
import gzip
import json
from mixpanel_utils import MixpanelUtils

SETTINGS = {
    "PROJECT_ID": "<REPLACE YOUR PROJECT ID>",
    "TOKEN": "<REPLACE PROJECT TOKEN>",
    "SA_USERNAME": "<REPLACE SERVICE ACCOUNT USERNAME>",
    "SA_PASSWORD": "<REPLACE SERVICE ACCOUNT PASSWORD>",
    "EU": False, # set to TRUE if your project is in the EU
    "EXPORT_FOLDER": "exported_files", # make sure to create the folder if it does not exist
    "FROM": "2023-09-01",
    "TO": "2023-09-15",
}
mputils = MixpanelUtils(SETTINGS["SA_PASSWORD"],token=SETTINGS["TOKEN"],service_account_username=SETTINGS["SA_USERNAME"], eu=SETTINGS["EU"], project_id=SETTINGS["PROJECT_ID"])

def flush_events(events):
    global mputils
    if(len(events) == 0):
        return False
    mputils.import_events(events,timezone_offset=0)
    return True

def transform_event(event):
    try:
        data = json.loads(event)
        data["event"] = data["properties"]["mp_original_event_name"]
        del data["properties"]["mp_original_event_name"]
        del data["properties"]["mp_original_distinct_id"]

        # example if you wanted to remap the value from $user_id to distinct_id
        # if("$user_id" in data["properties"]):
        #     data["properties"]["distinct_id"] = data["properties"]["$user_id"]

        return data
    except:
        return False
#export hotshard events
mputils.export_events(f'{SETTINGS["EXPORT_FOLDER"]}/events.json',{
    "from_date": SETTINGS["FROM"],
    "to_date": SETTINGS["TO"],
    "event": '["$hotshard_events"]'
}, add_gzip_header=True, request_per_day=True, raw_stream=True)

exported_files = glob.glob(f'{SETTINGS["EXPORT_FOLDER"]}/*.json.gz')
for file_name in exported_files:
    events = []
    event_queue_max = 50_000 # arbitrary max length before sending in batches
    with gzip.open(file_name,'rt') as file:
        for line in file:
            event = transform_event(line)
            if(event == False):
                continue
            events.append(event)
            if(len(events) >= event_queue_max):
                flush_events(events)
                events = []
        
        #flush remaining events
        if(len(events) > 0):
            flush_events(events)
            events = []
```

### Fix historical data involving Groups Analytics
Just like the strategy above, before re-importing, verify newly imported events will no longer create hot shards and the original issue has been solved.

Since hot shards involving Groups Analytics are more complicated, we would need a different strategy of fixing historical data here. As of right now, our recommendation would require you to export all events related to the hot group ID (not just `$hotshard_events), contact our [support team](https://mixpanel.com/get-support) to delete these events from Mixpanel, and reimport the fixed events.

Below are two sample scripts leveraging[our python module](https://github.com/mixpanel/mixpanel-utils) to export all events related to recent hot shard `group identifiers` by day to a folder. The idea would be to:
* Export the data and verify you store it to re-import it later. When you run the script to export, make sure to note the selector and date range generated by the script
* Reach out to our [support team](https://mixpanel.com/get-support) asking  for a deletion to remediate the hot shard issue. Provide the selector and date ranges from the previous script to make sure it aligns with the data you exported.
* Once the deletion has been confirmed by our support team (do note it can take about 1 week after the deletion is scheduled), use the second sample script to clean and re-import the data. Please note that the remediation strategy here will blank-out that group identifier for the day it's remediated.

#### Export all events related to the group hot shard
First step script below would download all events related to the group hot shards, leveraging the convenient `$hotshard_record` events for history-reading purpose. Notice the selector used below would include a time-threshold to bound both the export and deletion later to be the same set of events.

```python
import glob
import gzip
import json
import shlex
import tempfile
import os
import time
from mixpanel_utils import MixpanelUtils

SETTINGS = {
    "PROJECT_ID": "<REPLACE YOUR PROJECT ID>",
    "TOKEN": "<REPLACE PROJECT TOKEN>",
    "SA_USERNAME": "<REPLACE SERVICE ACCOUNT USERNAME>",
    "SA_PASSWORD": "<REPLACE SERVICE ACCOUNT PASSWORD>",
    "EU": False, # set to TRUE if your project is in the EU
    "EXPORT_FOLDER": "exported_files", # make sure to create the folder if it does not exist
    "FROM": "2023-09-01",
    "TO": "2023-09-15",
}

mputils = MixpanelUtils(SETTINGS["SA_PASSWORD"],token=SETTINGS["TOKEN"],service_account_username=SETTINGS["SA_USERNAME"], eu=SETTINGS["EU"], project_id=SETTINGS["PROJECT_ID"])

def generate_individual_selector(hotshard_group_id, group_key):
    return (
        f"""((defined (properties["{group_key}"])) AND
        (
            (any(X, properties["{group_key}"], X="{hotshard_group_id}")) OR
            (string(properties["{group_key}"], "undefined") == "{hotshard_group_id}")
        ))"""
    )

def generate_selector(hotshard_key_group_id_tuples, time_threshold):
    return " OR ".join(
        [
            generate_individual_selector(hotshard_group_id, group_key)
            for hotshard_group_id, group_key in hotshard_key_group_id_tuples
        ]
    ) + f""" AND (number(properties["mp_processing_time_ms"]) < {time_threshold})"""

def hotshard_group_tuple(event):
    try:
        data = json.loads(event)
        hotshard_group_id = data.get("properties", {}).get("hotshard_distinct_id", "")
        group_key = data.get("properties", {}).get("hotshard_group_key", "")
        if group_key == "":
            return False
        return (hotshard_group_id, group_key)

    except:
        return False


unique_tuples = set()
# Find unique hot shard records
with tempfile.TemporaryDirectory() as temp_dir:
    file_path = os.path.join(temp_dir, "hotshard_records_events.json")
    mputils.export_events(file_path,
  {
        "from_date": SETTINGS["FROM"],
        "to_date": SETTINGS["TO"],
        "event": '["$hotshard_record"]' ,
    }, add_gzip_header=True, raw_stream=True)

    with gzip.open(file_path + ".gz",'rt') as file:
        for line in file:
            tupl = hotshard_group_tuple(line)
            if(tupl== False):
                continue

            unique_tuples.add(tupl)
    if len(unique_tuples) == 0:
        print("No hotshard records found")
        exit(0)
    print("UNIQUE_HOTSHARD_GROUP_TUPLES=", list(unique_tuples))

TIME_THRESHOLD = int(time.time() * 1000)
print("TIME_THRESHOLD=", TIME_THRESHOLD)
SELECTOR = generate_selector(unique_tuples, TIME_THRESHOLD)
print("SELECTOR=", shlex.quote(SELECTOR))

#Export all events related to hotshard groups
mputils.export_events(f'{SETTINGS["EXPORT_FOLDER"]}/events.json',{
    "from_date": SETTINGS["FROM"],
    "to_date": SETTINGS["TO"],
    "where": SELECTOR,
}, add_gzip_header=True, request_per_day=True, raw_stream=True)
```

#### Delete and re-import
Reach out to our [support team](https://mixpanel.com/get-support) for a deletion requests on events related to the group hot shards above. Include the `SELECTOR`, `FROM`, `TO` settings above so Mixpanel support team can get a clear understanding on the deletion criteria.

After hard-delete went through, use the below template script to fix the exported data kept from above, and re-import them.

```python
import glob
import gzip
import json
import shlex
import tempfile
import os
import time
from mixpanel_utils import MixpanelUtils

SETTINGS = {
    "PROJECT_ID": "<REPLACE YOUR PROJECT ID>",
    "TOKEN": "<REPLACE PROJECT TOKEN>",
    "SA_USERNAME": "<REPLACE SERVICE ACCOUNT USERNAME>",
    "SA_PASSWORD": "<REPLACE SERVICE ACCOUNT PASSWORD>",
    "EU": False, # set to TRUE if your project is in the EU
    "EXPORT_FOLDER": "exported_files", # make sure to create the folder if it does not exist
    "FROM": "2023-09-01",
    "TO": "2023-09-15",
    # unique tuples acquired from export script run
    "UNIQUE_HOTSHARD_GROUP_TUPLES": [
        ("test_hot_shard_group_test_key_A", "test_key"),
        ("test_hot_shard_group_test_key_B", "test_key_2"),
    ],
}

mputils = MixpanelUtils(SETTINGS["SA_PASSWORD"],token=SETTINGS["TOKEN"],service_account_username=SETTINGS["SA_USERNAME"], eu=SETTINGS["EU"], project_id=SETTINGS["PROJECT_ID"])

def flush_events(events):
    global mputils
    if len(events) == 0:
        return False
    mputils.import_events(events, timezone_offset=0)
    return True


def transform_event(event):
    try:
        data = json.loads(event)
        if data["event"] == "$hotshard_events":
            data["event"] = data["properties"]["mp_original_event_name"]
            del data["properties"]["mp_original_event_name"]
            del data["properties"]["mp_original_distinct_id"]

        # example remediation you wanted to blank out the hot shard in groups
        for hotshard_group_id, group_key in SETTINGS["UNIQUE_HOTSHARD_GROUP_TUPLES"]:
            if group_key not in data["properties"]:
                continue

            if data["properties"][group_key] == hotshard_group_id:
                data["properties"][group_key] = ""
            elif hotshard_group_id in data["properties"][group_key]:
                data["properties"][group_key] = [
                    "" if x == hotshard_group_id else x for x in data["properties"][group_key]
                ]

        return data
    except:
        return False


# Work on exported files from export script run
exported_files = glob.glob(f'{SETTINGS["EXPORT_FOLDER"]}/*.json.gz')
for file_name in exported_files:
    events = []
    event_queue_max = 50_000  # arbitrary max length before sending in batches
    with gzip.open(file_name, "rt") as file:
        for line in file:
            event = transform_event(line)
            if event == False:
                continue
            events.append(event)
            if len(events) >= event_queue_max:
                flush_events(events)
                events = []

        # flush remaining events
        if len(events) > 0:
            flush_events(events)
            events = []
```

## Hot Shard FAQ

#### How does hot shard detection work?
The detection step runs in the ingestion pipeline. A counter of events is maintained for each `distinct_id` and `event_date` combination. The counter is best-effort as a result of the underlying systems used to maintain such a large key space.

Once a pre-defined threshold is crossed, the `distinct_id` is marked as contributing to a hot shard and all subsequent events for this `distinct_id` and `event_date` are updated to even the load across shards. Historical events prior to the hotshard detection for the same `distinct_id` are not updated.

#### I received an email about a hot shard but I don't see users with more than 200K events, why?

Since the detection is done at ingestion, duplicates (potentially as a result of client-side tracking retries) are also counted as part of the hotshard threshold (roughly > 200K event volume). This means you might see <200K events in Mixpanel reports as being remediated for certain distinct_id which were only deduplicated post-ingesting these events.

[^1]: Due to a side-effect on how events are serialized, some remediated entries were initially saved with a numeric distinct_id (instead of ""). This value can safely be ignored.  
