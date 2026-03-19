# AB Tasty


## Overview

The Mixpanel and AB Tasty integration provides a bidirectional data sync, allowing you to export Mixpanel cohorts to AB Tasty for precise experiment targeting and import AB Tasty experiment data into Mixpanel for comprehensive behavior analysis. This seamless exchange enhances your ability to analyze, segment, and personalize user experiences.

## Permissions

To set up this integration, the following permissions are required:

### Mixpanel Permissions:

- Service Account Access: You will need a Mixpanel Service Account with permissions to read and manage cohorts.
- Project Token: Ensure you have access to the Mixpanel Project Token for the relevant project.

### AB Tasty Permissions:

Admin Access: You need admin-level permissions in AB Tasty to configure and enable integrations.

## Enable the Integration

### Mixpanel Setup

1. Access Integration under the Data Management tab in the top navigation bar.
2. In the Integrations list, select AB Tasty, and click Connect.
3. To set up the AB Tasty integration, you need to enter your account’s API Key. Copy and paste the API Key of your AB Tasty account. Click Continue.



### In AB Tasty

1. Access Integrations > Integration Hub.
2. Search for and select Mixpanel.
3. Click Setup connector.
4. Give a name to your connector so you can easily retrieve it.
5. Click Save and create connector.

## Export Cohorts from Mixpanel to AB Tasty

To export the cohorts to AB Tasty, follow the steps below:

1. Click Cohorts under Users in the navigation bar.
2. Select the cohort that you want to export. Click the three-dot icon on the right side of the cohort.
3. Click Export to > AB Tasty. Select either one-time sync or dynamic sync. Click Start Sync.

AB Tasty Documentation on cohorts exports from Mixpanel is [here](https://support.abtasty.com/hc/en-us/articles/7305491216924-Mixpanel)

- Mixpanel sends the cohorts every 15 minutes in case of recurring exports
- AB tasty pushes the abtasty_visitor_id to Mixpanel, and Mixpanel includes it in the cohort export. The abtasty_visitor_id is used to match the user.
- For the cohorts to be used in AB Tasty’s segment builder (once exported from Mixpanel), we need to match at least one user i.e. empty cohorts will not be displayed in the segment builder.


## AB Tasty Events in Mixpanel

Analyze your AB Tasty experiments in Mixpanel with a powerful, streamlined workflow. By creating two simple custom properties and configuring your project's Experiment Settings, you can access AB Tasty data in dropdowns, breakdowns, and experimentation reports. This one-time setup eliminates the need for complex, report-by-report data parsing and unlocks a more powerful and consistent way to measure the impact of your A/B tests.

### How AB Tasty Data Arrives

When the integration is active, AB Tasty sends a single event to Mixpanel named `"Event"` for users exposed to a test. This event contains one property, `"AB Tasty"`, which holds a concatenated string of the campaign and variation IDs. For example: `[12345]My Homepage Test[67890]Variation B`.

### Step 1: Create Campaign and Variation Custom Properties

Before configuring the Experiment Settings, you must first parse the campaign and variation names from the `"AB Tasty"` property into their own dedicated custom properties.

Navigate to **Lexicon** in your Mixpanel project and create the two custom properties below.

#### A. Campaign Custom Property
![Screenshot 2025-06-17 at 1 49 40 PM](https://github.com/user-attachments/assets/add85567-80d5-4a11-b05c-0934a5365b28)

This property uses a REGEX function to extract the campaign name.

1.  **Create a new Custom Property.**
2.  Name it. `AB Tasty Campaign Name` is recommended, but the name does not need to exactly match this format.
3.  Use the following formula:
    ```
    REGEX_EXTRACT(properties["AB Tasty"], "^\\[\\d+\\](.*?)(?=\\[\\d+\\])", 1)
    ```
4.  **Save** the property.

> **How it works:** This formula reads the `"AB Tasty"` property and extracts only the text that exists *between* the first and second ID brackets (e.g., `[12345]` and `[67890]`).

#### B. Variation Custom Property
![Screenshot 2025-06-17 at 1 49 16 PM](https://github.com/user-attachments/assets/fd48158a-a436-48bc-9d2b-f4cb9931f2e6)

This property uses a nested SPLIT function to isolate the variation name.

1.  **Create another new Custom Property.**
2.  Name it. `AB Tasty Variant Name` is recommended, but the name does not need to exactly match this format.
3.  Use the following formula:
    ```
    SPLIT(SPLIT(properties["AB Tasty"], "[", 3), "]", 1)
    ```
4.  **Save** the property.

> **How it works:** This formula first splits the full string by the `[` character to isolate the end of the string, and then splits that result by the `]` character to capture only the variation name.

### Step 2: Configure Project Experiment Settings

With your Custom Properties created, you can now tell Mixpanel how to recognize your AB Tasty experiments.

![image](https://github.com/user-attachments/assets/4384ed79-79d8-4035-8ffe-35550a0835e1)

1.  Navigate to your **Project Settings**.
2.  Scroll to the **Experiment Event Settings** section.
3.  Define the mapping for your AB Tasty experiments:
    * **Experiment Event**: Select the `"Event"` event.
    * **Experiment Name**: Map this to your new custom property, `AB Tasty Campaign Name`.
    * **Variant Name**: Map this to your new custom property, `AB Tasty Variation Name`.
4.  **Save** your settings.

### The Result: Powerful, Automated Analysis

Once saved, Mixpanel will automatically process all incoming AB Tasty data according to your settings. You can now analyze your experiments without any further configuration.

This provides several key advantages:
* No more ad-hoc filtering or complex formulas in your reports.
* Consistent, reliable analysis across all of your AB Tasty experiments.
* Unlock the full power of Mixpanel's Experimentation features, including significance testing and impact on multiple goals.
