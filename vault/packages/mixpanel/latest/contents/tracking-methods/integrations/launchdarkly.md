# LaunchDarkly

## Overview
This guide helps send LaunchDarkly feature flag impressions as events to Mixpanel. This is useful if you want to answer questions like:
* What did my users do after being exposed to an experiment?
* Did users who were exposed convert better than users who didn't?
* Were the right set of users exposed to my experiment?

Doing this involves sending impression events from LaunchDarkly to Mixpanel and doing the analysis in Mixpanel.

## Exporting data from LaunchDarkly

In order to perform its analyses, Mixpanel needs impression events. These events tell Mixpanel which user was exposed to which variant at which time. 

These events must be called `$experiment_started` and must have the `Experiment name` and `Variant name` properties -- Mixpanel recognizes these events and uses them to autopopulate the Experiments report(/docs/reports/apps/experiments).
```json
{
  "event": "$experiment_started",
  "properties": {
    "distinct_id": "alice@example.com",
    "time": 1709275888,
    "Experiment name": "my_experiment",
    "Variant name": "control"
  }
}
```

LaunchDarkly does not export this by default, so there are two options:
1. Pay to [export](https://docs.launchdarkly.com/home/getting-started) from LaunchDarkly to Pubsub. If you go this route, you will need to write some code that pulls from PubSub and pushes to Mixpanel. We have a sample guide [here](/docs/tracking-methods/integrations/google-pubsub). This is server-side, so will likely be more accurate, but requires more work to integrate.
2. Log assignments with wrapper code (see [below](#logging-assignments-with-wrapper-code)). This is more convenient, but can be less reliable due to the limitations of client-side tracking.


## Logging assignments with wrapper code

To manually log LaunchDarkly assignments, you'll need to find all places in your code where feature flags are being invoked and replace with a wrapper function. The example below is based on Javascript, see [LaunchDarkly SDK documentation](https://docs.launchdarkly.com/sdk) to find the syntax for your language of choice.

### Find all places where feature flags are being invoked

LaunchDarkly’s SDK exposes methods for retrieving whether or not a feature is enabled for the current user. 

```js
const variation = client.variation("YOUR_EXPERIMENT_KEY", "control");
if (variation == "variant_abc") {
  // show the variant you are testing
} else if (variation == "control") {
  // show control
}
```

### Track events to Mixpanel

In order to capture assignment data, every time the feature flag is invoked, you need to log the user, timestamp, and which experiment and variant they're seeing.

To do this for all experiments, we recommend wrapping the code that checks whether a feature flag is enabled in a helper function. You can then call `mixpanel.track` to send an event as part of that helper function:

```js
function checkFeatureEnabled(experimentKey, defaultValue) {
  // determine whether or not this feature is enabled for the current user
  const variation = client.variation(experimentKey, defaultValue);

  // This assumes the Mixpanel SDK is initialized
  // Note: Use this precise event name
  mixpanel.track("$experiment_started", {
      "Experiment name": experimentKey,
      "Variant name": variation,
  });

  // return the variation
  return variation;
}
```

It is possible that an engineer on your team could call this new function before showing the new feature to the user. Be sure that the assignment event is only sent once the user experiences the feature you are experimenting on.

## Using the events in Mixpanel
If you track events according to the above spec, you can use the [Experiments report](/docs/reports/apps/experiments) to get a bird's eye view of all experiments you have running.

You can also build [cohorts](/docs/users/cohorts) of users in each variant, and then filter/breakdown by those cohorts in any report in Mixpanel.

