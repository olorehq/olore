# GDPR Compliance

## Supporting Data Subject Rights

As controllers of personal data, Mixpanel and its customers must uphold certain rights stated by the GDPR, including:

## Right to Access and Data Portability

Mixpanel supports individuals’ right to access and right to portability of their personal data through individual export requests. Any Mixpanel account holder will be able to request an export of one’s personal data, as well as the personal data of their end-users. [The form for submitting end-user personal data export requests](/docs/privacy/end-user-data-management) and for submitting account holder data export requests is available through Personal Settings > Data & Privacy.

## Right to Erasure

We support individuals’ right to erasure through a permanent deletion of personal data upon request. [Deletion API](https://developer.mixpanel.com/docs/privacy-security#manage-personal-data) is available to all users.

## Right to Object

Our customers control what data is sent to Mixpanel, and may decide to halt the sending of personal data at any time. To assist with supporting individuals’ right to object to the collection of one’s personal data, Mixpanel also has built dedicated methods for our client-side SDKs that can be used to [opt end users out of tracking](/docs/privacy/protecting-user-data).

Mixpanel collects information about how customers use the product, and uses this data to identify product gaps and improve existing products. While this information is useful, Mixpanel recognizes the importance of an individual's right to object. Mixpanel has therefore streamlined opt-out systems for its customers, who can opt out of tracking through simple controls, located under Personal Settings > Data & Privacy.

## Data Retention Policy

As the processor of its customers’ data and to protect the privacy of information it stores, Mixpanel holds data no longer than is needed to provide its services. To further support this, Mixpanel has implemented the following data retention policy:

Section 1. Events are automatically deleted after 2\* years on an ongoing basis from all projects.

- The start of the retention period is the date that is transferred to Mixpanel with an Event (i.e., the “Event Date”), which typically corresponds to the date a user completed an action on a web or mobile application. In the event that an Event Date is not transferred to Mixpanel with an Event by our Customer, the Event Date is recorded as the date we received the Event.
- \*As of September 1, 2025, Mixpanel's event retention period is 2 years. If your project was created prior to September 1, 2025 the retention period is 5 years; provided, that your project retention period will be reduced to 2 years in the event that you modify your plan or move to Mixpanel's Free Plan.

Section 2. User data is retained for the duration of an active Subscription Plan. Customers are given the ability to delete profiles using the [Engage API](https://developer.mixpanel.com/reference/delete-profile).

- Custom data retention windows can be set for user data by sending regular deletion requests to the Engage API. For more questions about setting custom data retention windows, [contact our support team](https://mixpanel.com/get-support).

Section 3. Session Replays (i.e., all of the session data necessary for replaying user sessions in Mixpanel's user interface) are stored for 30 days from ingestion date.

- Custom retention periods for Session Replay are available to customers on certain plans for a period of up to 12 months. Please review Mixpanel's Session Replay Documentation for additional information regarding custom retention period. Changes to the retention period impact replays ingested after the change. Sessions captured and ingested before a retention period change retain the previous retention period.
- Underlying Events (e.g., for visualization in metrics, dashboards, etc.) will be retained for the period set out in Section 1 of this Policy.

This policy includes projects that were deleted or reset through the Project Settings - deleting a project through the Project Settings triggers a soft deletion. The data in the deleted or reset project will remain stored in Mixpanel for 60-90 days, after which it will be hard deleted and unrecoverable.

## Rate Limit

We place a [rate limit](/docs/privacy/end-user-data-management#rate-limit) in place to ensure the integrity of our system as well as prevent a single project from monopolizing the available resources for other projects
