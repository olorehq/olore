# Migrating to Mixpanel

If you’re reading this, congrats on considering making the switch from another analytics provider to Mixpanel 🎊  Our migration guides are intended to outline how a migration works, what to expect, and how to mitigate the risks and switching costs of a migration whilst accelerate time to value.

## What a migration will solve

- Cut-over sending live data to Mixpanel
- Historical backfill of existing data (subject to what data can be modeled as events)
- Integrates easily with existing event data collection methods - SDKs, CDPs, DWH, RETL

## What a migration won’t solve

- Existing issues with data trust/quality or data governance → As part of the migration, we recommend a data audit as the first step to only transfer your valuable data and clean up trust/quality issues
- Reporting, Dashboards, and Saved Entities → As part of the migration, you should review your top used reports and dashboards from other tools and sit down with each team to re-build them in Mixpanel

## What level of effort does the migration take?

A migration primarily consists of 4 phases:

1. Technical migration of data → Data audit, Live data cut-over, Historical data import
2. Change management migration of end users → Champion identification, User interviews, Team by team specific trainings, Ensuring adoption for each team
3. Data governance and implementation optimization → Improving/Implementing data governance processes, Identifying missing or incorrect data, Optimizing workflows for adding/editing data
4. Ongoing success planning → Building a product analytics practice

From a technical perspective, the migration process is relatively straightforward. If you have an engineer with access to your data and the ability to write code/transforms to send data to new destinations, this can be done in a single sprint (1-3 weeks).

From an end user perspective, Mixpanel is simpler and easier to learn than other analytics tools but there of course will be a learning curve. The largest hurdle is copying over key saved reports, dashboards, etc. that the team is familiar with in your current tool and teaching them how to rebuild these in Mixpanel. We recommend doing this process in detail for each team, showing them how to recreate key analyses side-by-side in Mixpanel. You can then leverage your team champions to force multiply your adoption efforts.

When going through this migration, there is no better time to audit your own data and reports to only migrate what matters. Most data and reporting is stale after some time anyways, prioritize the data and reports your team uses every day for their Top 10 key questions. These can be easily copied over and Mixpanel also provides Customer Success resources during Onboarding to assist with this.

## Technical migration of data

### Migrating live data tracking

Depending on your current setup, the steps for migrating your live data tracking will differ. Please see the appropriate provider specific guides for more details on how to migrate your existing live data tracking and get started with Mixpanel.

- [Adobe Analytics Migration Guide](/docs/migration/adobe-analytics)
- [Amplitude Migration Guide](/docs/migration/amplitude)
- [Google Analytics Migration Guide](/docs/migration/google-analytics)

### Data audit

We’ve found from experience that <20% of the data in a product analytics tool is used for 80%+ of the queries. This is especially true the longer you have been using a tool - over time teams add more and more tracking for new events and properties, and without strong data governance practices, you will inevitably have some messy data in your current analytics tool(s).

In the spirit of making sense of the mess, we don't recommended that you bring all historical data into Mixpanel. A common practice is to leverage your current providers' tooling to understand which reports, events, and properties are queried by your users. No queries in the past 30 days? These events and properties have probably gone stale - there is low value and high effort in bringing them to Mixpanel, so cut them from your import and do not migrate the existing tracking.

After you’ve gotten rid of the obvious (the reports, events, and properties no one uses), you can fine tune this approach by doing user interviews with your top users/champions. These users can help you explicitly define the data they need brought along to Mixpanel (mapped to their key questions and KPIs) so you can focus on what matters. Because these users are the ones building reporting others use, capturing their use cases and making them change agents can be highly beneficial to your migration.

This data audit step is optional, but highly recommended - It is a larger upfront investment to make it easier for your users to find useful metrics / reports and avoid higher maintenance costs in the future.

### Loading historical data

To backfill data, we recommend the following approaches:

- If you have a data warehouse: Leverage our [data warehouse connector](/docs/tracking-methods/warehouse-connectors) or our [Import API](https://developer.mixpanel.com/reference/import-events) to import to Mixpanel. 
- If you have a data warehouse without your current provider's data: Export your data to the data warehouse so you have a record, and then use our data warehouse connector or Import API
- If you do not have a data warehouse: Since there is no historical record of data, for this method you will need to export your data from your current provider and move it into Mixpanel - we provide an easy to use helper function for this [here](https://github.com/mixpanel/mixpanel-utils)

To perform a successful historical data load, we recommend:

- Have your Mixpanel champion or owner first set up your [Organization settings](/docs/best-practices/project-setup#mixpanel-organization) and [Project settings](/docs/best-practices/project-setup#mixpanel-projects). This will ensure the right access level for your team and enable you to prepare the workspace for ingesting data. This can be done later but doing it up front will allow for you to set key settings for data ingestion (US vs EU servers, project timezone, etc.).
- Load a limited subset of the data into a test project (for example, a single day or data or a sample of the entire dataset) to get started. This will help you identify any errors in the end to end process before you do a full historical data load.
- Load a year’s worth (or less) of historical data during your migration. This will allow your team to review year-over-year trends easily and do historical analysis as needed, without sending a bunch of data which is stale and unlikely to be used.

For a more in-depth look into the steps required for a successful project migration, check out our [project migration playbook](/guides/playbooks/project-migration). 

Note that backfilling historical data can have significant impact on your billing. Refer to [this section](/docs/pricing#are-monthly-events-calculated-based-on-ingestion-time-or-event-timestamp) for more details.

## Change management migration of end users

Once data is live, shift our focus to change management and migrating the existing users. You can mitigate risk here by:

- Going team by team to assess currently used reports in other analytics providers, as starting with a baseline of key known reports from another tool helps build trust and confidence for new users to Mixpanel
- Running targeted trainings where you re-build known reports side-by-side in Mixpanel to teach users to fish
- Building a product with awesome UI/UX that will make up for the up-front costs in simpler, more powerful analysis down the line

The goal is to focus on each team individually, and you can process multiple in parallel. A team is the perfect unit to focus on as they have shared context and goals, so their needs as far as metrics and analysis will be similar. You can then help each team to the point they can self-serve answers from Mixpanel to answer their questions.

## Data governance and implementation optimization

In many cases, your goal in a migration will be to complete the process as quickly as possible - after all, you may be paying for multiple providers at once. Assessing your data quality and governance is likely to be less of a priority in the short term.

We recommend once your data and users are migrated to utilize your learnings from these processes to assess the current state of your data trust and where you need to address data issues to gain adoption. This might mean needing to implement new datasets or improve existing tracking to increase the number of use cases which can be explored by end users. You can read more around our recommended approach and questions to ask yourself [here](https://mixpanel.com/blog/5-questions-for-planning-your-data-architecture/).

## Ongoing success planning

After the migration, we recommend you focus on longer term goals like:

- Improving Data Governance → Creating scalable processes and strategies for managing data at scale
- Optimizing Analysis → Helping end users analyze data for more use cases, faster via training and documentation
- Building a Product Analytics Practice → Cultural change to be a self-serve, data democratized organization

You can read more about how we do this [here](https://mixpanel.com/blog/establish-a-product-analytics-practice/).

## Not sure where to start or need help?

Mixpanel’s Customer Success team has worked with 10,000+ customers over the past 10+ years to help drive outcomes with product analytics. We’re always happy to discuss your team’s individual needs, our migration process, the support you’ll receive, or any other question you have — drop us a line at [success@mixpanel.com](mailto:success@mixpanel.com).
