# Partners: Build a Cohort Sync Integration with Mixpanel

Building an integration with Mixpanel is a powerful way to provide value to your customers that also use Mixpanel. If your company is interested in becoming a Certified Technology Partner, building an integration is also the first step.

## Setting up a Sandbox
Sign up for a [free Mixpanel account](https://mixpanel.com/pricing), which you can use as a sandbox when building and testing your integration.

## Create an Integration ID
In order to properly understand API usage and provide you with resources as part of our Technology Partner Program, you must first define your **Integration ID** and pass it along when sending event data or calling Mixpanel’s APIs.

Your Integration ID should be a string representing your company’s or solution’s name. If Mixpanel were a developer, our Integration ID would be “mixpanel”.

Note: Always include your integration ID -- this will help customers better understand the source of their event data in Mixpanel.

### Event Tracking
For event data, you will include your Integration ID as the `$source` property value.

This can be added to the [Event Object](doc:data-model-deep-dive#anatomy-of-an-event)  when using the [Ingestion API](https://developer.mixpanel.com/reference/ingestion-api):

```json
{
    “event”: “Sign up”,
    “properties”: {
        “distinct_id”: “123”,
        “time”: 1321499371,
        “$source”: “your_integration_id”,
        “token”: “<YOUR_PROJECT_TOKEN>”
    }
}
```

### API Usage

If you choose to leverage our APIs for your integration, you must pass along your Integration ID with every API as the **X-Mixpanel-Integration-ID** header value.

```curl
curl --request GET \
  --url https://mixpanel.com/api/app/projects/12345/schemas/event/my_event/1-0-0 \
  --header ‘accept: application/json’ \
  --header ‘X-Mixpanel-Integration-ID: your_integration_id’
```

## Integration Opportunities

### Connect to Mixpanel's EU Servers
Give your customers the option to send data to [our EU servers](https://developer.mixpanel.com/reference/overview) when they activate your Mixpanel integration.

###  Receive Cohort Syncs from Mixpanel
Use this [webhook spec](/docs/cohort-sync/webhooks) to process inbound cohorts Mixpanel syncs to your product, allowing your customers to engage more effectively with the right users at the right time.
**Note**: This spec is intended for partner SaaS companies looking to build integrations with Mixpanel. If you are yourself a Mixpanel customer looking to query on Cohorts, refer to the [cohorts query API](https://developer.mixpanel.com/reference/cohorts).

### Auto-populate Experiments
If you are offering experiments or A/B tests to your customers, add support for [auto-populating our Experiments report](/docs/reports/apps/experiments) to your integration in order to reduce time-to-value for our mutual customers.

### Sync your Schemas
Sync your internal data dictionary or tracking plan with Mixpanel using the [Lexicon Schemas API](https://developer.mixpanel.com/reference/lexicon-schemas-api). Schemas that you upload will be used to populate Lexicon and provide additional context for your data across the query UI.

# Make your Integration Successful
### QA your Code
For integrations sending events to Mixpanel, our [Events page](https://mixpanel.com/report/events) can be a great way to test if everything is working as expected.

### Document Your Integration
Customer-facing documentation that explains, which use cases your integration helps to solve and how to set it up, will increase the utilization of your integration.

### Get Listed on mixpanel.com
Finally, submit your integration to [create a listing](https://mixpanel.com/partners/integrations/get-listed/form) on our Integrations Directory and to let our customers discover your solution and the integration.
