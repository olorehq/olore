# End User Data Management: Making GDPR and CCPA requests


Mixpanel supports account holders’ ability to request the deletion or export of end user data.

Requests can be submitted through either a form found in a Mixpanel project or through a personal data export and deletion API that is documented below.

Only organization owners and admin can access or submit end user export or deletion requests.

These tools can be used to exercise Right to Access, Right to Portability, and Right to be Forgotten for end users or “data subjects” as part of the General Data Protection Regulation (GDPR). [Learn more about GDPR here](https://mixpanel.com/legal/mixpanel-gdpr/). These tools also can help satisfy requirements stated in the California Consumer Privacy Act (CCPA). [Learn more about CCPA here](https://mixpanel.com/legal/mixpanel-ccpa/).

Requests to export or delete end user data can take multiple weeks to process.

## Generate OAuth Token

In order to submit a request, you must first generate a GDPR OAuth token from your Personal Settings. This token is required for requests submitted both through the Mixpanel interface and through Mixpanel's APIs. Users can retrieve this token from their [Account Settings](https://mixpanel.com/settings/account#data-privacy) by selecting their initials in the top right of Mixpanel and selecting **Profile & Preferences**, and then the Data & Privacy tab. The OAuth token has a one year expiry. For requests submitted via API, the token should be passed in the Authentication header. Users are eligible to generate an OAuth token if they are the Project Owner, or if they are a Project Owner or Admin of a project that supports team member roles.

![](/Personal-Data-and-Privacy-Settings.png)

## Gather the Project Information and Distinct_ids

Mixpanel exports or deletes end user data according to the user's distinct_id. To export or delete end user data, first select a project that you own and collect the distinct_id of the user(s). Like all data in Mixpanel, the distinct_id can be custom specified in a tracking implementation. As this is the case, it is necessary to ensure that any provided distinct_id is accurate and stored in a project. Any incorrect identifiers submitted as part of export or deletion requests will result in inability to process the request.

It is possible to submit a request from Mixpanel once you gather the distinct_ids of end users requesting exports or deletions. If you implemented Mixpanel before 2020 and are using the alias method to manage user identity, it is possible to submit either the end user’s alias or their distinct_id as part of a deletion request. All data associated with a submitted alias will be deleted. In addition, all data associated with the distinct_id(s) that the alias maps to will be deleted.

## Submit Requests via Request Form in Mixpanel

To access the "Data & Privacy" modal containing the end user data request form:

1. Navigate to "Data & Privacy" by clicking on the settings gear in the upper-right corner and navigating to Organization Settings.
2. Select Data & Privacy on the left hand side.

![Data & Privacy](/export-deletion-request-form.png)

### Exporting User Data

You must submit an export request to export end user data. This is done to satisfy a GDPR right to access request from your users.

1. In the “Data and Privacy” section, click Request Export.
2. In the “Export User Data” box:
- Select the either CCPA or GDPR under type of export.
- Select a project in the "Project" dropdown.
- Under “User Data To Export”, select to export data for a single user or multiple users.
   - For a single user, provide the distinct_id of the user.
   - For multiple users, upload a list of distinct_ids as a .csv file. There is a limit of 2000 Users.
3. Click Submit Request. Note that requests can take multiple weeks to process.

![Data & Privacy](/export-user-data-form.png)

### Deleting User Data

You must submit a deletion request to delete end user data. This is done to satisfy a GDPR right to erasure request from your users.

1. In the “Data and Privacy” section, click Request Deletion.
2. In the “Request User Data Deletion” box:
- Select the either CCPA or GDPR under type of export.
- Select a project in the "Project" dropdown.
- Select to delete data for a single user or multiple users.
   - For a single user, provide the distinct_id of the user.
   - For multiple users, upload a list of distinct_ids as a CSV file. There is a limit of 500 users per request.
 3. Click Submit Request. Note that requests can take up to several weeks to process.

![Data & Privacy](/delete-user-data-form.png)

### GDPR Requests

GDPR requests are specifically designed to satisfy requirements as outlined in the General Data Protection Regulation.

**Export**
A GDPR export contains all data connected to the requested distinct_id.

**Deletion**
A GDPR deletion includes all data connected to the requested distinct_id.

### CCPA Requests

CCPA requests are specifically designed to satisfy requirements as outlined in the California Consumer Privacy Act.

**Export**
A CCPA export contains all data from the previous year connected to the requested distinct_id.

**Deletion**
A CCPA deletion includes all data connected to the requested distinct_id.

**Disclosure types**
There are three different disclosure types as outlined in the CCPA. To export or delete everything, you can select “Data” as the disclosure type. Select “Categories” to export or delete the data table headers. Select “Sources” to export or delete data connected to the means of data collection.

## Opt Out Users
While the following API can be used to delete or retrieve personal data as outlined by the GDPR, it is important to also opt users out of subsequent tracking. Deleting data from Mixpanel will remove it permanently, but it will not prevent the data from being collected moving forward. If tracking using a client-side Mixpanel library, you can opt users out of tracking using Mixpanel's opt-out methods. These are available in the following client-side libraries:
* [JavaScript](https://developer.mixpanel.com/reference/javascript#opting-users-out-of-tracking)
* [iOS - Objective-C](https://developer.mixpanel.com/reference/ios#opting-users-out-of-tracking)
* [iOS - Swift](https://developer.mixpanel.com/reference/swift#opting-users-out-of-tracking)
* [Android](https://developer.mixpanel.com/reference/android#opting-users-out-of-tracking)

See Mixpanel’s [Privacy-Friendly Tracking](https://developer.mixpanel.com/docs/privacy-friendly-tracking) guide for more information on best practices when handling personal information in Mixpanel.

## Submit Requests via API
Mixpanel deletion and retrieval APIs are in place to help Mixpanel implementations meet the requirements outlined by the General Data Protection Regulation (GDPR) legislation.

> 📘GDPR Request Rate Limits
> You can batch up to 2000 distinct IDs per deletion request and up to 2000 for a retrieval request. Request rates are limited for GDPR API requests.

Please [see our GDPR API Reference](https://developer.mixpanel.com/reference/gdpr-api) to learn more about the deletion/retrieval endpoints.
