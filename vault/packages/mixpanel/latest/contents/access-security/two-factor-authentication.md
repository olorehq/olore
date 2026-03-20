# Two-Factor Authentication


## Overview

Two-factor authentication (2FA) is a security process that requires users to provide two different authentication factors, such as passwords or tokens, to verify their identity.

### Enable Two-Factor Authentication for your Organization

If you are an organization admin, you can enable two-factor authentication by doing the following:

1. In your "Organization Settings", select **Access Security**.

![2FA Access Security Image](/2fa_access_security.png)

2. In “Two Factor Authentication”, if the icon is gray, click it to enable. If the icon is purple, click it to disable.

**Note: If your organization has SSO enabled, your organization will not have access to 2FA.**

![2FA Enable Image](/2fa_enable_2fa.png)

3. The “Verify Mixpanel password” box will appear.

**Note: If you do not have a password because you use Magic Link or Google Sign In, please go to your personal settings to set up your password.**

![2FA Verify Password Image](/2fa_verify_password.png)

4. Enter your password and click **Confirm** to finalize changes.

### Setting up your Two-Factor Authentication Method

Once two-factor authentication has been enabled for your organization, an individual member of your organization can set up two-factor authentication via the methods below.

#### Setup via second login

On their second login, Mixpanel Users will be prompted to set up two-factor authentication via an authentication app.

##### Authentication App

1. In order to set up two-factor authentication via an authentication app, select the authentication app option and ensure you have your preferred authentication app downloaded. We recommend using apps such as Google Authenticator, Authy and Microsoft Authenticator.

![2FA Authentication App 1 Image](/2fa_authentication_app1.png)

2. Scan the QR code via your Authentication App in order to complete the setup.

![2FA Authentication App 2 Image](/2fa_authentication_app2.png)

If you are unable to scan the QR code, click on “Can’t scan QR code?” This will provide you a two-factor secret to set up your authentication app manually.

![2FA Authentication App 2b Image](/2fa_authentication_app2b.png)

3. Before you log in into Mixpanel, download or copy your recovery codes. These are essential for you to log in if you happen to lose your phone.

**Note: This is the only location you can save your recovery codes, please ensure you save them in a safe place.**

![2FA Authentication App 3 Image](/2fa_authentication_app3.png)

#### Setup via personal settings page

An individual user can also set up their two-factor authentication via their personal settings. In order to setup two-factor authentication, follow these steps:

1. Go to the settings icon > personal settings> your profile, then click on "Set Up Method".

![2FA Personal 1 Image](/2fa_personal1.png)

2. You will be asked to log out in order to set up two-factor authentication. Log in to Mixpanel and follow the setup process.

![2FA Personal 2 Image](/2fa_personal2.png)

### Changing your Two-Factor Authentication Method

An individual user can switch between different authentication apps for their two-factor authentication method via their personal setting. (i.e. Authy to Google Authenticator)

**Note: Changing your two-factor method will reset it**

Users can switch their method via the following steps:

1. Go to settings cog > personal settings> your profile, then click "**Change Method**".

![2FA Change 1 Image](/2fa_change1.png)

2. To change your method, log out and log back in to Mixpanel to start the setup process for your new authentication method.

![2FA Change 2 Image](/2fa_change2.png)

### Login via backup methods

If you are unable to log in due to two-factor authentication because you lost your phone, we have a couple backup methods you can use to log in depending on your authentication method.

**Note: Contact support if none of these backup methods work for you.**

#### Login via recovery codes (authentication app)

If an authentication app is your preferred method of authentication, you can login via your saved recovery codes if you don’t have access to your phone. A user can login via a recovery code by doing the following:

1. Click on “Need help? Use a recovery code to sign in”

![2FA Backup 1 Image](/2fa_backup1.png)

2. Enter your recovery code and click "Login".

![2FA Backup 2 Image](/2fa_backup2.png)

**Note: If you use all your recovery codes, you will be asked to reset your two-factor authentication method on your next login.**

### Resetting Two-Factor Authentication for Users

As an organization admin, you can reset two-factor authentication (2FA) for users within your organization. To do this, follow these steps:

1. Navigate to the Access Security section within your "Organization Settings".
2. Click on the 2FA tab.
3. Select the users whose 2FA needs to be reset.
4. Click Reset Two-Factor Authorization

This will reset their two-factor authentication, allowing them to set up 2FA again the next time they log in.
