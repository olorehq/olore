# Setup Okta SSO


## Overview

Before using this document, read the [general Mixpanel SSO set-up instructions](/docs/access-security/single-sign-on).

You have two setup options in order to use Single Sign-On (SSO) for Mixpanel through Okta:

A.  For most use cases, you can use the **Mixpanel app** within the OIN (Okta's app store). 

B.  If you have a more custom setup, follow Okta's documentation on setting up a new application to create a custom Mixpanel app.

### Configure SSO in Mixpanel

Follow the [general SSO set-up instructions](/docs/access-security/single-sign-on).

Make sure to collect your postback URL and successfully claim your domain.

### Configure the Mixpanel App in Okta

A.  Use the [Mixpanel app within the OIN (Okta's app store)](https://www.okta.com/integrations/mixpanel/), or

B.  Follow [Okta's documentation on setting up a new application](https://help.okta.com/en-us/Content/Topics/Apps/Apps_Apps_Page.htm) to create a custom Mixpanel app.

#### Configure SAML

A. If you use the Mixpanel app from the OIN, the following SAML configuration is already built into the app.

B. If you create a custom app, you must fill the form found in the **Configure SAML** menu in Okta. Make sure that the following fields are adjusted to exactly match the corresponding values:

- **Single sign on URL:** Postback URL from Mixpanel (https://mixpanel.com/security/sso/v2/authorize/?org_id=YOUR_ORG_ID)
- **Requestable SSO URLs:** https://sso.mixpanel.com/sso/saml2
- **Recipient URL:** https://sso.mixpanel.com/sso/saml2
- **Destination URL:** https://sso.mixpanel.com/sso/saml2
- **Audience URI:** https://mixpanel.com/security/sso/v2/authorize/

The following screenshot highlights what you should place in the fields:

![Okta Config SAML 1 Image](/okta_config_1.png)

To add the Requestable SSO URLs field, navigate to Advanced Settings: 

![Okta Config SAML 2 Image](/okta_config_2.png)

Additionally, it is required that you use `email` as an attribute statement, other attributes we recommend include `firstName` and `lastName`.

|    Name    |     Value      |
|-----------:|---------------:|
| firstName  | user.firstName |
| lastName   | user.lastName  |
| email      | user.email     |

![Okta Config SAML 2 Image](/okta_config_3.png)

### Obtain Information From Okta

In order to configure Mixpanel use with Okta, you must first obtain your **Public Certificate**, **Authentication URL**, and **Issuer URL**.

To access this information, first select the select the Mixpanel app under the **Applications** tab in Okta. Click on the **Sign On** tab.

In the right **About** column under the **SAML Setup** section, click **View SAML setup instructions**.

![Okta Info 1 Image](/Admin/Okta/okta_saml_setup_instructions_fixed.png)

#### Public Certificate

The X.509 certificate allows users signing in through a third-party identity provider to be authenticated by Mixpanel without supplying a username and password. Each identity provider account has a unique X.509 certificate that will need to be uploaded to Mixpanel during the SSO setup process.

Click **Download Certificate** in the second entry to download your certificate.

![Okta Info 2 Image](/okta_info2.png)

You can also find the Public Certificate in the **Sign On** tab of the **Mixpanel** app. Scroll down to the **SAML Signing Certificates** section. Click **Actions** for the SHA-2 certificate and **Download certificate**. 

![Okta Certificate Download Image](/Admin/Okta/okta_download_certificate.png)

If you Public Certificate is expired or compromised, click **Generate new certificate** to generate a new certificate to upload in Mixpanel.

#### Authentication URL

Your Authentication URL is in the third entry labeled **Redirect Login URL**.

![Okta Info 3 Image](/okta_info3.png)

#### Issuer URL

You will find your Issuer URL in the third entry labeled **Identity Provider Issuer**.

![Okta Info 4 Image](/okta_info4.png)

### Enable SSO

From Mixpanel, navigate to your **Organization Settings** and then the **Access Security** tab. From the **2FA & SSO** menu, insert your **Public Certificate**, **Authentication URL**, and **Issuer URL**.

Optionally toggle **Require Single Sign-On** to prevent your users from logging in with a username and password. Organization Owners and Admins will still be able to log in using username and password in case SSO is not set up correctly.

### Configuring SCIM Provisioning

SCIM provisioning uses [the Mixpanel app within the OIN (Okta's app store)](https://www.okta.com/integrations/mixpanel/).

The following prerequisites must be met to set up SCIM provisioning:

- You must have an active Enterprise plan subscription with Mixpanel. 
- You must have Okta SSO set up with Mixpanel.
- The `Username` value in Okta must be an email address with a domain that you've claimed.
- You need to have generated a SCIM OAuth token to use with the app. This token is located in **SCIM** menu of the **Access Security** tab in your Organization Settings. You will need to be an Organization Owner or Admin to access this.

![Okta SCIM 1 Image](/Admin/Okta/sso_scim_token_updated_2024.png)

The following provisioning features are supported:

- **Push New Users:** New users created through Okta and assigned to the application will be created in Mixpanel.
- **Push Profile Updates:** Updates made to the assigned user's supported profile attributes (First Name, Last Name, Email) through Okta will be pushed to Mixpanel.
- **Push User Deactivation:** Deactivating the user or removing the user from the application through Okta will deactivate the user in Mixpanel (or delete the account if specified).
- **Reactivate Users:** Reassigning a previously unassigned user to the application will reactivate the user's account in Mixpanel.

Please note the following when provisioning users from Okta to Mixpanel with SCIM:
- New users provisioned from Okta will be automatically added as an Organization Member.
- You will need to provision other [Organization Roles](https://docs.mixpanel.com/docs/orgs-and-projects/roles-and-permissions#organization-roles) to users within the Mixpanel product.
- You will not be able to set the user's Organization Role and Project access within Okta. 

You can also provision Groups of users in Okta to Mixpanel [Teams](/docs/orgs-and-projects/roles-and-permissions#teams) with SCIM.
- Use the same name for the Group in Okta as the Team in Mixpanel.
- In the Mixpanel Team, set the Organization Role and access to projects for the group of users.
- You will not be able to provision Organization Role and Project access for the Group within Okta. 

Note that it is advised you turn on **IDP Managed Access** if you are using SCIM Provisioning. Otherwise, Okta and Mixpanel might fall out of sync.

#### Configuration Setup

1. Click the **Configure API Integration** button in Okta to begin.

![Okta SCIM 2 Image](/okta_scim2.png)

2. Check the **Enable API Integration** box, then enter your SCIM token.

Select the supported features (Create / Update / Deactivate) you wish to enable:

![Okta SCIM 3 Image](/okta_scim3.png)

3. The following profile attributes are required to be sent from Okta to Mixpanel:
- Username
- Given name
- Family name
- Primary email

![Okta SCIM 4 Image](/okta_scim4.png)

4. Select and assign the users you wish to provision:

![Okta SCIM 5 Image](/okta_scim5.png)

#### Troubleshooting

1. If a Mixpanel account has already been created with the Okta user's email (their Okta Username) and that account is **not a member** of your Mixpanel organization, provisioning setup for that Okta user will fail. To resolve this, manually invite the existing user to your organization.

2. Provisioning will also fail if the domain of the user's email has not been claimed by your organization. To resolve this, manually invite the existing user to your organization.
