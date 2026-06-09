<!-- source: https://www.zoho.com/zeptomail/help/drupal-integration.html -->

# ZeptoMail module for Drupal

Drupal is an open-source content management framework to build websites and web applications. Drupal supports various third-party modules that can be integrated to enhance application's experience.

The [Zoho ZeptoMail module](https://www.drupal.org/project/zeptomail "Module page") for Drupal can be used to send transactional emails from your Drupal application.

#### Table of Contents

- [Installing ZeptoMail module for Drupal](https://www.zoho.com/zeptomail/help/drupal-integration.html#installation)
- [Configuring ZeptoMail](https://www.zoho.com/zeptomail/help/drupal-integration.html#configuration)
- [Email sending using ZeptoMail](https://www.zoho.com/zeptomail/help/drupal-integration.html#email-sending)

## Installing ZeptoMail module for Drupal

Follow the steps given below to install the ZeptoMail module in Drupal to send transactional emails.

01. Login to your [Drupal admin dashboard](https://www.drupal.org/project/project_module).
02. Search for the ZeptoMail module in the search bar at the top.
03. Navigate to the **Releases** section in the module and copy the installation command.
04. In your local device, open the terminal or command prompt and go to Drupal's root directory.
05. Paste the copied installation command.
06. Run the command to download and install the module.
07. On successful installation, navigate to the administrator settings in your application.
08. Go to the **Extend** section on the top pane.
09. Search for the Zoho ZeptoMail module in the list and select it using the checkbox.



    ![UI screenshot of installation](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/drupal_install.png)

10. Click **Install.**
11. The module is successfully installed.

## Configuring ZeptoMail

1. Once you enable the module, go to the **Configuration** menu at the top.
2. Locate the ZeptoMail module in the **Systems** section on the right and select it.



![UI screenshot of configuration](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/drupal_configuration.png)

3. In the configuration pop-up, paste the Send Mail Token generated from your ZeptoMail account. Follow the steps below to generate the token.
1. Login to your ZeptoMail [account](https://zeptomail.zoho.com/).
2. Select the Agent that you want to connect to your application.
3. Navigate to the SMTP/API tab. This will open the Setup Details page.
4. From here you can copy your Agent specific send mail token under the API tab.
5. You can either use the default Send Mail Token or generate a new one.



      **Agents >> SMTP/API >> Send Mail Token >> Click to copy icon.**
4. Next, enter the FROM name and FROM address. Click **Save.**



![UI screenshot of configuration](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/drupal_config.png)

5. You have successfully configured the ZeptoMail module in Drupal.

## Email sending using ZeptoMail

You can set ZeptoMail as your default email-sending medium. To do so:

1. Navigate to the Configuration menu and go to Systems section.
2. In the **Default Mail System** section, select ZeptoMail mailer from the Sender drop-down. Click Save configuration.



![UI screenshot of mail configuration](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/drupal_system_mail_configuration.png)

3. This will route all the transactional emails via ZeptoMail.

Note:

Before you get started it is important to know that ZeptoMail is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, you can visit [Zoho Campaigns](https://www.zoho.com/campaigns/).
