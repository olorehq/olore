# Google Cloud Storage

This guide demonstrates how to set up a serverless ingest pipeline from a Google Cloud Storage bucket into Mixpanel. Once this is set up, you can simply upload files containing events into the designated GCS bucket and the events will be ingested into Mixpanel, both one-time and on a recurring basis. Setup should take ~10 minutes.

![image](/gcs-integration-architecture.png)

Note: This guide assumes you are running in Google Cloud Platform, and have the necessary IAM Access to have Cloud Functions read from GCS.

## Step 1: Create a GCS Bucket

[Create a dedicated Cloud Storage bucket](https://console.cloud.google.com/storage/create-bucket) for this integration. We recommend including `mixpanel-import` in the name to make it explicit and avoid any accidental data sharing.

You can create the bucket in any region, though we recommend `us-central` for highest throughput.

## Step 2: Setup Import Config

### Step 2a: Setup the Cloud Function

Create a [new Cloud Function](https://console.cloud.google.com/functions/add). 
* Set the trigger to `Cloud Storage`, the Event Type to `Finalize/Create` and the bucket name to the bucket created in step 2. This means that any object uploaded to this bucket will trigger an invocation of this Cloud Function.
* Set Memory to 1GiB, Timeout to 300, and Instances to 20

![image](/230694797-af63de4f-7f10-4325-ad62-204a0ab66dea.png)


### Step 2b: Write the Cloud Function
Switch the runtime to `Python3.9` and change the entrypoint from `hello_gcs` to `main`. Paste the code below for `main.py` and `requirements.txt`.

![image](/230694808-424dc8ed-f650-40a6-9893-f141e5033701.png)

```python main.py
from datetime import date
import gzip
import json
import random
import time

from google.cloud import storage
import requests

# Fill this out.
PROJECT_TOKEN = ""

# Flush a batch once these limits are hit
EVENTS_PER_BATCH = 2000
BYTES_PER_BATCH = 2 * 1024 * 1024


# Adjust event timestamps of test data so that it appears recent in Mixpanel.
# NOTE: THIS IS JUST FOR DEMO PURPOSES.
# REPLACE THIS WITH YOUR OWN TRANSFORMS IN PRODUCTION.
def transform_to_event(line):
    """Convert a line of the file to a json string in Mixpanel's format."""
    event = json.loads(line)
    event["properties"]["time"] = int(date.today().strftime("%s"))
    return json.dumps(event)


def flush(batch):
    payload = gzip.compress("\n".join(batch).encode("utf-8"))
    tries = 0
    while True:
        resp = requests.post(
            "https://api.mixpanel.com/import",
            params={"strict": "1"},
            headers={
                "Content-Type": "application/x-ndjson",
                "Content-Encoding": "gzip",
                "User-Agent": "mixpanel-gcs"
            },
            auth=(PROJECT_TOKEN, ""),
            data=payload,
        )
        if resp.status_code == 429 or resp.status_code >= 500:
            time.sleep(min(2 ** tries, 60) + random.randint(1, 5))
            tries += 1
            continue
        return resp


def main(request, context):
    gcs = storage.Client()
    bucket = gcs.get_bucket(request["bucket"])
    blob = bucket.get_blob(request["name"])
    
    compressed = request["name"].endswith(".gz")

    error = None
    batch, batch_bytes = [], 0
    
    # As a convenience, check for files ending with .gz
    f = blob.open("rb")
    if request["name"].endswith(".gz") and request.get("contentEncoding") != "gzip":
        f = gzip.open(f)
    
    for line in f:
        # Here we assume each line is valid JSON representing a single Mixpanel event
        # If lines are not in Mixpanel's format, apply any transformations here.
        line = transform_to_event(line)

        batch.append(line)
        batch_bytes += len(line)

        if len(batch) == EVENTS_PER_BATCH or batch_bytes >= BYTES_PER_BATCH:
            resp = flush(batch)
            batch, batch_bytes = [], 0

            if resp.status_code != 200:
                error = resp.json()
                break

    # Flush final batch
    if batch and not error:
        resp = flush(batch)
        if resp.status_code != 200:
            error = resp.json()

    f.close()
    print(
        json.dumps(
            {
                "message": "Import complete",
                "request": request,
                "success": error is None,
                "first_error": error,
                "severity": "INFO",
            }
        )
    )
```
```text requirements.txt
google-cloud-storage
requests
```

This code will be triggered whenever a new object is added to your bucket. It streams over the newly added object, assuming each line is newline delimited JSON in Mixpanel's event format. It then forms batches and hits our /import API, retrying any retryable errors. It logs a single message on completion. If it fails due to a validation error, this log includes the first non-retryable error encountered.

Click `Deploy` to deploy the function. At this point, any file you upload to the bucket will trigger an invocation of the function and an import into Mixpanel. Let's test it out!

## Step 3: Test with sample data and watch the logs

Let's test the connection with some [sample events](https://storage.googleapis.com/mixpanel-sample-data/10-events.json). Run the following to copy them to your bucket, which will trigger the import:

`gsutil cp gs://mixpanel-sample-data/10-events.json gs://<YOUR-BUCKET>/`

Monitor the logs of your Cloud Function; you should see an `Import Complete` log line within a minute. 

![image](/230694850-de50a891-8a38-48ee-907d-4f23d1f1f22c.png)

If you navigate to Stackdriver logs, you will see a more detailed log that includes the filename being imported and the first error encountered (if any).

![image](/230694856-1cae32ec-8672-4ef6-b00d-4e885fd5388d.png)

Finally, let's confirm that the events made it into Mixpanel. Head to the [Events](https://mixpanel.com/report/live) page, pick `test_event` in the event picker, and you should see the events you just imported.

![image](/230694863-7ef80f4b-ce7b-484b-bd8a-b248cfe024ef.png)


## Step 4: Import more data
We're now ready for an import of your own data. If your data is not already in the Mixpanel format, this is a good time to write a transformation step to run as part of the Cloud Function. We recommend testing locally as you iterate on your data transformation logic, as it's much quicker than redeploying the Cloud Function. The [Overview](/docs/quickstart/connect-your-data?sdk=httpapi) page has sample code and data to test locally.

Once you're ready and have tested with a few small files, you can upload all the files for your import to your GCS bucket, and the import will kick off. This pipeline can be made recurring by uploading files to the GCS bucket periodically.

We recommend partitioning files in GCS to ~200MB of JSON for optimal performance.
