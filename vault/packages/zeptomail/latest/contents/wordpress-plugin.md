<!-- source: https://www.zoho.com/zeptomail/help/wordpress-plugin.html -->

# ZeptoMail Plugin for WordPress

[ZeptoMail Plugin for WordPress](https://wordpress.org/plugins/transmail/) helps you configure your ZeptoMail account in your WordPress site. It allows you to send transactional emails from WordPress using your [ZeptoMail account](https://zeptomail.zoho.com/).

#### Table of Contents

- [Pre-requisites for using ZeptoMail Plugin](https://www.zoho.com/zeptomail/help/wordpress-plugin.html#alink1)
- [How to install ZeptoMail Plugin](https://www.zoho.com/zeptomail/help/wordpress-plugin.html#alink2)
- [Configuration steps](https://www.zoho.com/zeptomail/help/wordpress-plugin.html#alink3)
  - [Parameters involved](https://www.zoho.com/zeptomail/help/wordpress-plugin.html#alink4)
- [Test Email Configuration](https://www.zoho.com/zeptomail/help/wordpress-plugin.html#alink5)
- [Email logs](https://www.zoho.com/zeptomail/help/wordpress-plugin.html#emaillogs)
- [Troubleshooting](https://www.zoho.com/zeptomail/help/wordpress-plugin.html#troubleshoot_wp)

To make sure that emails from your website are considered valid and authentic, you need to use only authorized server configuration to send emails. Configuring email servers for your websites can be too technical and complex. To make it simple, in WordPress Sites, you can directly install the ZeptoMail WordPress Plugin to easily use any Agent in your ZeptoMail account to send [transactional emails](https://www.zoho.com/zeptomail/) from your site.

## ZeptoMail Plugin for WordPress - Requirements

To use the ZeptoMail plugin for Wordpress, you need to have a self-hosted Wordpress site for your domain.

- A ZeptoMail Account
- A self-hosted WordPress site
- PHP 5.6 or later

## How to install ZeptoMail Plugin in WordPress?

1. Login to your self-hosted WordPress account and navigate to the Admin Dashboard.
2. Navigate to **Plugins > Add New** section of the Dashboard from the left panel.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/pluginlist.png)
3. Search for **ZeptoMail Plugin** using the Search bar and click the **Install Now** button next to the plugin.
4. You can also install the ZeptoMail Plugin from here.
5. To begin using the plugin, go to the **Plugins > Installed Plugins** Section.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/activateplugin.png)
6. Click the **Activate** button near the ZeptoMail Plugin.
7. The ZeptoMail plugin will be activated in your WordPress account.

## Configuration Parameters - ZeptoMail WordPress Plugin

|     |     |
| --- | --- |
| **Parameter** | **Description** |
| Hosted region | The region in which your Zoho Account Data resides.  (One of the valid domains hosted with Zoho) |
| Send Mail token | Send Mail token generated in the ZeptoMail Agent you wish to configure in WordPress. |
| Email Format | Emails from the plugin will be sent in the chosen format by default. |
| From Email Address | The email address that will be used while sending all emails. |
| From Name | The name that will be shown as the Display Name while sending all emails from WordPress. |

## Configuring ZeptoMail Plugin

Once the plugin is installed, you need to configure your ZeptoMail account in WordPress to send transactional emails via ZeptoMail API.

1. After installing the plugin, the ZeptoMail plugin tab will appear on the left menu. Navigate to the **ZeptoMail Account configuration page** under this tab.

​​![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/welcome.png)
2. Choose the region where your ZeptoMail account is hosted.
3. Next, select the format in which your emails will be sent - HTML or Plain text.
4. Enter the **From name, From addresses** and **Send mail token** you wish to use to send out emails for you. A total of three **From addresses** and **Send mail tokens** can be used. The from address and send mail token values can be from a single Agent or multiple Agents.
5. Of the three email addresses, one can be set as a default address. This will be used, if an incorrect email address or an email address apart from the ones mentioned is used to send out emails.
6. Next, choose the number of email logs you wish to see in the **Email logs** section.
7. Click **save and test configuration** to save changes. The configuration will be checked and validated. In case of discrepancies, the data should be changed to send out emails.

The **Send mail token** you use to send out emails should be generated from your ZeptoMail account.

### Steps to generate send mail token

1. Login to your **ZeptoMail Account** and access the relevant **Agent** you wish to configure in WordPress.
2. Copy your existing **Send Mail token** or generate a new one from the **SMTP/API** section of that Agent.
3. Go to the ZeptoMail Account configuration page in the WordPress Dashboard to complete the process.

Once the configuration is correctly saved, you will be able to send transactional emails using the plugin.

## Test email from the plugin

Once the ZeptoMail plugin is configured in your WordPress account, you can check the functionality of the plugin by sending a Test Email.

1. In your WordPress Dashboard left menu, go to **ZeptoMail > Test Mail**.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/testemail.png)​​
2. Enter the following details:
   - **From :** Validated sender address from the list
   - **To:** Email Address of the recipient
   - **Subject:** Subject of the email
   - **Content:** The message or body of the email
3. Click **Send Mail**.

A test mail will be sent. By default, the email will be sent using the 'From address' of the account.

## Email logs

1. You can view the list of emails that haven't reached the recipients due to various reasons from the **Email logs** section. You can attempt to resend these emails again using the **Resend log** button.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/failedlogs.png)

2. Further, you can filter the contents based on commonly encountered errors using the filter option.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/filter_logs.png)

The error codes listed are :


|     |     |     |
| --- | --- | --- |
| **Code** | **Reason** | **Solution** |
| SERR\_157 | Invalid send mail token | Obtain the correct send mail token from the **Setup info** section of the Agent. |
| SM\_111 | Unverified from address domain | Verify the domain or use an email address with a verified domain |
| LE\_102 | Credit exhausted | Purchase new credits |


You can refer [this document](https://www.zoho.com/zeptomail/help/api/error-codes.html) for information on other types of errors you encounter.


## Troubleshooting

### Using ZeptoMail with other SMTP plugins (e.g., WP Mail SMTP)

You can use ZeptoMail with other SMTP plugins but only one plugin should handle your outgoing mail at a time. Running two mail plugins at once can cause conflicts where one plugin may silently block the other, and emails might not send at all.

- If you want ZeptoMail to send all your emails: Disable the other mail plugin, or ensure they are not configured to override WordPress email sending.
- If the other plugin needs to handle specific emails (such as contact form submissions): Set that plugin to use its own built-in mailer, and make sure it is not set to override WordPress mail globally.

### Email sending function overridden by another plugin

Another plugin on your site may have taken over the WordPress mail function. This means ZeptoMail plugin never receives the request to send email in the first place. You can temporarily disable other mail plugins one by one and send a test email after each. If email starts working after you disable a specific plugin, that plugin is the cause of the conflict.

### SMTP connection errors

An SMTP connection error usually means WordPress cannot reach the mail server. This can happen due to wrong settings, a firewall, or your hosting provider blocking outbound connections.

Steps to try:

1. Double-check your SMTP host, port number, encryption type (SSL or TLS), and your login credentials.
2. Try using port 465 (SSL) or port 587 (TLS) if your current port is not working.
3. Contact your hosting provider and ask if outbound SMTP connections are blocked on your server.

### “From Name” validation error

The From Name field allows only specific characters. If you use an emoji, HTML code, or an unsupported symbol, the plugin will show a validation error and the email will not send. Make sure to remove any emojis, HTML tags, or special characters from the From Name and save the changes.

Allowed characters:

- Letters, numbers, spaces
- Symbols: . , \_ - + & ’ ( ) :

### Emails not sending

If no emails are going out, follow these steps :

1. Go to the plugin settings and send a test email to confirm the basic setup is working.
2. Temporarily disable any other mail or SMTP plugins and test again.
3. Enable debug logging in the plugin settings and check the error log for any specific error messages.

If all the above-given troubleshooting methods do not resolve the issue, reach out to our Customer support ( [support@eu.zeptomail.com](mailto:support@eu.zeptomail.com "support email id")) with the screenshot of the configuration settings page for a solution.

Note:

Sending emails through ZeptoMail is subjective to our **Usage Policy** restrictions. Please refer to our [Usage Policy page](https://www.zoho.com/zeptomail/terms.html) for details.
