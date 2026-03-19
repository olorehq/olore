# Google Pubsub

This guide demonstrates how to plug Mixpanel into an event collection pipeline hosted in Google Cloud. Once set up, your events will route to Mixpanel and be available in real-time for analytics. This approach is serverless and open-source, and takes ~5 minutes to set up.

Note: if you are on AWS, this approach is very similar using Kinesis and AWS Lambda.
![image](/230694918-71c5be55-a04f-4915-9de4-cf3ac8724937.png)


## Step 1: Create a Cloud Pub/Sub Topic
(You can skip this step if you already have a Pub/Sub topic with events flowing through it.)

Create a [new Pub/Sub Topic](https://console.cloud.google.com/cloudpubsub/topic). All events that will ultimately route to Mixpanel will flow through this Pub/Sub topic.

![image](/230694928-a155186e-33cf-4302-90b0-0cdf1324e66d.png)

### Step 2a: Add a Cloud Function Trigger to your Pub/Sub Topic
In this step, we set up a Cloud Function to trigger whenever events are pushed to your Pub/Sub topic. [Google's documentation](https://cloud.google.com/functions/docs/calling/pubsub) goes into full detail on how this trigger works.

From your newly created topic, click `+Trigger Cloud Function`. Give the Cloud Function a name and Save.

![image](/230694959-ec45da0e-571f-4a9d-88e5-3b0338e0e826.png)


![image](/230694939-ccaaff07-1a57-4dc4-a8c3-8f88ea1e581c.png)


### Step 2b: Write the Cloud Function
Switch the runtime to `Python3.9` and change the entrypoint from `hello_pubsub` to `main`. Paste the code below for main.py and requirements.txt.

```python main.py
import base64
from datetime import date
import gzip
import json
import random
import time

import requests

# Fill this out.
PROJECT_TOKEN = ""


def main(event, context):
    # Assumes the message consists of lines of JSON, each in Mixpanel's format
    msg = base64.b64decode(event["data"]).decode("utf-8")
    events = [json.loads(line) for line in msg.split("\n") if len(line) > 0]

    # Adjust the timestamps of each of the sample events so that
    # they appear recent. Note: this is just for this demo, do not
    # do this in production.
    for e in events:
        e["properties"]["time"] = int(date.today().strftime("%s"))

    # Send to Mixpanel
    tries = 0
    payload = gzip.compress(json.dumps(events).encode("utf-8"))
    while True:
        resp = requests.post(
            "https://api.mixpanel.com/import",
            params={"strict": "1"},
            auth=(PROJECT_TOKEN, ""),
            headers={"Content-Type": "application/json", "Content-Encoding": "gzip", "User-Agent": "mixpanel-pubsub"},
            data=payload,
        )
        if resp.status_code == 429 or resp.status_code >= 500:
            # Retryable errors, use exponential backoff
            tries += 1
            time.sleep(min(2 ** tries, 60) + random.randint(1, 5))
            continue
        else:
            break

    if resp.status_code != 200:
        # Log failures. In production, write to a dead-letter queue
        print({"message": "Import failed", "error": resp.json(), "severity": "WARN"})
    else:
        # Log success for debugging. Remove in production.
        print(
            {
                "message": "Import succeeded",
                "count": resp.json()["num_records_imported"],
                "severity": "INFO",
            }
        )
```
```text requirements.txt
requests
```

This code does a very simple passthrough of events from the incoming Pubsub message into Mixpanel's [Import API](https://developer.mixpanel.com/reference/import-events). You can use this function to transform events from your Pub/Sub topic into Mixpanel's format before sending them to our Import API.

## Step 3: Test with sample events
Now messages published to our Pubsub topic will trigger an invocation of the function and route events to Mixpanel. Let's give it a try by manually sending a message via the PubSub UI.

On the topic page, navigate to `Messages -> Publish message`.
![image](/230695002-37659b46-07d4-4b22-8591-65cb7aef5d5d.png)


Then paste in the following events as the message body.
```json events
{"event": "test_event", "properties": {"distinct_id": "Sunrostern", "$insert_id": "28096095", "title": "Creator Giveaway for Publishing Notes", "url": "https://www.viewert.com", "score": "1", "time": 1628315585}}
{"event": "test_event", "properties": {"distinct_id": "feross", "$insert_id": "28059483", "title": "`at` Method for Relative Indexing", "url": "https://v8.dev/features/at-method", "score": "1", "time": 1628074042}}
{"event": "test_event", "properties": {"distinct_id": "prostoalex", "$insert_id": "28069645", "title": "Home Classrooms Became a Necessity During Covid. Now They\u2019re a Selling Point", "url": "https://www.wsj.com/articles/home-classrooms-covid-real-estate-11628100036", "score": "1", "time": 1628135271}}
{"event": "test_event", "properties": {"distinct_id": "bingewave", "$insert_id": "28063639", "title": "Building a Live Streaming Movie App and Live TV Website \u2013 ReactJS", "url": "https://medium.com/bingewave/building-a-live-streaming-movie-app-live-tv-website-part-1-d0857aaac8ea", "score": "1", "time": 1628097439}}
{"event": "test_event", "properties": {"distinct_id": "jashkenas", "$insert_id": "28063632", "title": "Classic Research in Data Visualization", "url": "https://observablehq.com/@tophtucker/classic-research-in-data-visualization", "score": "1", "time": 1628097398}}
{"event": "test_event", "properties": {"distinct_id": "ivandiblasi68", "$insert_id": "28091778", "title": "Il sistema sanitario irlandese colpito da un ransomware", "url": "https://www.kaspersky.it/blog/irish-health-service-ransomware/24680/", "score": "1", "time": 1628278340}}
{"event": "test_event", "properties": {"distinct_id": "akdav", "$insert_id": "28091776", "title": "DeFi and KYC", "url": "https://link.medium.com/bsn7z9Jmvib", "score": "1", "time": 1628278312}}
{"event": "test_event", "properties": {"distinct_id": "webscraping99", "$insert_id": "28085411", "title": "LinkedIn Profile Detail Scrapers \u2013 Ahmad Software Technologies", "url": "https://ahmadsoftwaretechnologies3.mypixieset.com/linkedin-profile-detail-scrapers/", "score": "1", "time": 1628246831}}
{"event": "test_event", "properties": {"distinct_id": "Dorimoody", "$insert_id": "28064346", "title": "Our Children and Our Citations: Each One, Both Together", "url": "https://www.plough.com/en/topics/life/work/our-children-and-our-citations-each-one-both-together", "score": "1", "time": 1628101041}}
{"event": "test_event", "properties": {"distinct_id": "feross", "$insert_id": "28064342", "title": "The SEC Has Its Eye on Crypto", "url": "https://www.bloomberg.com/opinion/articles/2021-08-04/the-sec-has-its-eye-on-crypto", "score": "1", "time": 1628101019}}
```

Once you `Publish`, the function will trigger and pass the above payload to the Cloud Function. Within a minute, you should see an `Import succeeded` log line in the Cloud Function logs.

You can then navigate to the [Events](http://mixpanel.com/report/live) page to see the events in Mixpanel.
![image](/230695027-ed9f09e9-1df2-46b2-a477-1013aa25e298.png)


## Step 4: Connecting your production pipeline
At this point, you can route events from your production Pub/Sub topic through a Cloud Function in a similar manner as described above. Simplify modify the Cloud Function to transform events from your internal event format into the format expected by Mixpanel. This is also a good point to strip any PII.

Once connected, this will result in a steady stream of events being sent to Mixpanel. Happy streaming!

# Error Handling
In rare instances, Mixpanel's \/import API may return a 429 or 5XX error. These can be safely retried. We recommend an exponential backoff with jitter strategy, as written in the sample code above. PubSub can be configured to perform exponential backoff if the function itself times out.

If the payload is malformed, our API might return a 400 error. In this case, the item cannot be ingested and this error should not be retried. Enqueue these messages onto a dead-letter-queue for inspection later on. This might happen while initially testing the connector, but should be rare in production, assuming the shape of data flowing through the pipeline remains consistent.

Google has a [great reference](https://cloud.google.com/pubsub/docs/handling-failures) on best practices for handling both retryable and non-retryable errors.
