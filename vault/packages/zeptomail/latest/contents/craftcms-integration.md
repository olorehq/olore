<!-- source: https://www.zoho.com/zeptomail/help/craftcms-integration.html -->

# ZeptoMail plugin for CraftCMS

CraftCMS is a content management system that helps users manage their content in websites and applications. Applications and websites built using Craft can integrate with ZeptoMail to send transactional emails.

## Installing ZeptoMail plugin for CraftCMS

1. You can download the plugin from the plugin store.
2. Alternatively, you can paste the following command in your application's root folder.



**composer require "zoho-mail/craft-zoho-zepto-mail:^1.0" -w && php craft plugin/install zoho-zepto-mail**

3. Once installed, the plugin will be listed on the left pane of the Admin section.

## Configuring the ZeptoMail plugin

Follow the steps below to connect your ZeptoMail application with the Craft application.

1. Login to the CraftCMS admin section and select the ZeptoMail plugin from the left pane.
2. Copy paste the Send Mail Token from desired Agent of your ZeptoMail account.
3. Enter the From name and address. Click Save.



![UI screenshot of configuration](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/craft_config.png)

To route your transactional emails via ZeptoMail,

1. Navigate to the **Settings** section on the left pane.
2. Select **Email** under the System option.



![UI screenshot of email option](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/craft_email.png)

3. Enter a suitable **System email address** and **Sender name.** This configured address will be used while sending emails from ZeptoMail.



![UI screenshot of settings section](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/craft_settings.png)

4. Choose Zoho ZeptoMail from the **Transport type** drop-down.
5. Click save on the top right corner.

## Sending test email

You can check the configuration by sending a test email. To send a test email:

1. Navigate to the Email option in the Settings section.
2. Click the **Test** button.
3. You can check the status of the email from the Processed email section of the configured Agent.
