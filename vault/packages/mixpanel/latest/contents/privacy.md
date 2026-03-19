# Privacy Overview
Mixpanel believes in respecting and protecting people’s fundamental online privacy and data rights. This is why we've built Mixpanel's analysis tools in compliance with industry best practices and global data regulations like the GDPR and the CCPA.

Visit our [Privacy Hub](https://mixpanel.com/legal/privacy-hub/) to see how we comply with various privacy guidelines.

## Storing Your Data in the European Union
Mixpanel provides you with the option to process and store your customers' personal data in Europe via our [EU Data Residency Program](https://mixpanel.com/legal/eu-data-residency/).
You can enable this by selecting the "EU Data Residency" option when creating a new project and using our EU subdomain during all API calls.

See [EU Data Residency](/docs/privacy/eu-residency) for detailed information on how to use EU Data Residency with Mixpanel.

## Storing Your Data in India
You may process and store your customers' personal data in India via our India Data Residency Program<!-- TODO: link to India DC privacy website page -->.
Contact your Mixpanel account manager to learn more about enabling India Data Residency for your account.

See [India Data Residency](/docs/privacy/in-residency) for detailed information on how to use India Data Residency with Mixpanel.

## Manage Personal Data
[Mixpanel deletion and retrieval APIs](https://developer.mixpanel.com/reference/gdpr-api) are in place to help Mixpanel implementations meet the requirements outlined by the General Data Protection Regulation (GDPR) legislation.


> 📘GDPR Request Rate Limits
> You can batch up to 2000 distinct IDs per deletion request and up to 2000 for a retrieval request. Request rates are limited for GDPR API requests.

### User Opt-Out
While the following API can be used to delete or retrieve personal data as outlined by the GDPR, it is important to also opt users out of subsequent tracking. If tracking using a client-side Mixpanel library, you can opt users out of tracking using Mixpanel's opt-out methods. These are available in the following client-side libraries:
* [JavaScript](/docs/tracking-methods/sdks/javascript#opting-users-out-of-tracking)
* [iOS - Objective-C](/docs/tracking-methods/sdks/ios#opting-users-out-of-tracking)
* [iOS - Swift](/docs/tracking-methods/sdks/swift#opting-users-out-of-tracking)
* [Android](/docs/tracking-methods/sdks/android#opting-users-out-of-tracking)

See Mixpanel’s [Managing Personal Information](/docs/privacy/protecting-user-data) guide for more information on best practices when handling personal information in Mixpanel.

### Authentication
Authentication occurs via a user-specific OAuth token with a scope that only includes the following deletion and retrieval APIs. Users can retrieve this token from their [Account Settings](https://mixpanel.com/settings/account#data-privacy) by selecting their initials in the top right of Mixpanel and selecting **Profile & Preferences**, and then the Data & Privacy tab. The OAuth token has a one-year expiry. It should be passed in the Authentication header. Users are eligible to generate an OAuth token if they are the [project owner](/docs/orgs-and-projects/roles-and-permissions#project-roles), or if they are a project owner or admin of a project that supports [team member roles](/docs/orgs-and-projects/roles-and-permissions#project-roles).

![](/Personal-Data-and-Privacy-Settings.png)
