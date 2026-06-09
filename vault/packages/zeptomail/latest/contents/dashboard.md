<!-- source: https://www.zoho.com/zeptomail/help/dashboard.html -->

# ZeptoMail Dashboard

[​Dashboard](https://zeptomail.zoho.com/#dashboard) is the first screen you see when you login to your ZeptoMail account. It provides a quick snapshot of all the key information you need to monitor and manage you email-sending. From credit details and API codes to reports and domain verification status, the Dashboard lists all the important sections of your account in a single place. It consists of the following sections:

- [Email count](https://www.zoho.com/zeptomail/help/dashboard.html#Emailcount)
- [Credit information](https://www.zoho.com/zeptomail/help/dashboard.html#Credit-information)
- [Mail analysis report](https://www.zoho.com/zeptomail/help/dashboard.html#MAR)
- [Bounce category](https://www.zoho.com/zeptomail/help/dashboard.html#Bouncecategory)
- [Setup Options](https://www.zoho.com/zeptomail/help/dashboard.html#alink-setup-options)
- [Help Guides](https://www.zoho.com/zeptomail/help/dashboard.html#alink-help-guides)
- [Unverified Domains](https://www.zoho.com/zeptomail/help/dashboard.html#alink-unverified-domains)


![Dashboard ](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/dashboard-full.png)

​

## Email Count

Email count gives a categorization of the outgoing emails into the following sections:

- **Sent**\- Total number of emails processed. If your email has 1 recipient in the 'to' field, 1 recipient in 'cc' field, and 1 recipient in 'bcc' field; then the total count of emails sent is 3.
- **Delivered** \- Number of emails delivered to the recipient.
- **Soft Bounces** \- Number of emails that did not deliver due to temporary reasons like recipient server being down or the recipient's inbox being full.
- **Hard Bounces**\- Number of emails that did not deliver due to permanent reasons like invalid recipient address.
- **Process failed -** Number of emails that have not been sent out due to various reasons.

By default, the past 24 hours' information is available. You can choose the desired time range from the drop-down in the top-right corner.

## Credit Information

The **Credit Information** section displays the subscription related information. ZeptoMail uses a credit-based system where a single credit allows you to send 10,000 emails. This [help guide](https://www.zoho.com/zeptomail/help/subscription.html) explains the subscription model in detail.

The overall credit information available in the dashboard includes: the credit balance, the number of emails left, and option to enable auto top-up. The following operations can be performed:

- **Buy extra credits** - To purchase additional credits.
- **View more details** \- To go to the subscriptions tab where you'll find the purchase dates, expiry dates, and the credits usage details.
- **Enable now -** ​To enable the Auto top-up feature for your account.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/dash-credits.png)

​

To know more about your subscription details visit [here](https://www.zoho.com/zeptomail/help/subscription.html).

## Mail analysis report

This report gives a visual comparison of the email details against time. The graph is plotted for the following values:

- **Sent** \- Total number of emails processed. If your email has 1 recipient in 'to' field, 1 recipient in 'cc' field, and 1 recipient in 'bcc' field; then the total count of emails sent is 3.
- **Delivered**\- Number of emails that have been delivered to the recipient.
- **Hard Bounces**\- Number of emails that did not deliver due to permanent reasons like invalid recipient address.
- **Soft Bounces** \- Number of emails that did not deliver due to temporary reasons like recipient server being down or recipient's inbox being full.
- **Click** \- Count of the number of times a link was accessed.
- **Open** \- Number of times the recipient opened your emails.
- **Process failed -** ​Emails that have not been sent out due to various reasons.


​![Mail analysis](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/mail-analysis-new.png)

Note: You have to enable Email Tracking to track the number of opens and clicks.

## Bounce categories

This section categorizes and gives a graphical representation of the various email bounces.

![Bounce categories](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bounce-categories.png)

Refer the guide [here](https://www.zoho.com/zeptomail/help/bounce-error.html) to learn more about how we list bounce information in ZeptoMail.

### Setup Options

The **SMTP/API** section lists all Agents connected to ZeptoMail along with their API code. This allows quick navigation to the desired Agent.

![setup option](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/dashboard-section.png)

#### Troubleshooting

The SMTP/API section gives quick troubleshooting tips for any issues with email-sending in ZeptoMail. There are three levels at which you can try and fix your issues:

- Network-level changes: Changes that can be done on your server side like fixing the port values, security level certifications (SSL/TLS) and firewall settings.
- Application-level changes: Changes with respect to the SMTP and API settings in your applications. This could be the password length or the domain configured for SMTP or JSON and CORS-related issues in API.
- ZeptoMail-level changes: This section lists all the sender address (if any) configured for a domain. Ensure you use the sender addresses you've added to avoid disruption in email-sending.

## Help Guides

In this section, you'll find quick links to some of the help guides available in ZeptoMail.

- [SMTP & API Info](https://www.zoho.com/zeptomail/help/smtp-and-api.html) \- You can download the SDK file; find SMTP credentials and the Send Mail Token for both API and SMTP.
- [Email templates](https://www.zoho.com/zeptomail/help/using-templates.html) \- You can view how to create and use templates in your account.

Note

If your SMTP application is restricting longer passwords, then you can generate a shorter password. Click **Generate weaker credentials** in the SMTP section within the Agent.

## Unverified Domains

This section lists all the unverified domains added to your ZeptoMail account.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/dash-unverified_domain.png)

Follow the [domain verification steps](https://www.zoho.com/zeptomail/help/domains.html) to quickly verify your domain.

### Chart options

There are three buttons on the upper-right corner of the charts available in the dashboard.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/dash-stats.png)

They indicate the following:

- **Time range** \- Lists the time range over which you wish to view the data.
- **Download** \- To download the chart to your device. Allowed formats - JPEG, PNG, SVG, CSV, PDF.
- **Expand**\- Gives you an enlarged view of the chart.

Note

Before you get started it is important to know that [ZeptoMail](https://www.zoho.com/zeptomail/) is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, you can visit [Zoho Campaigns](https://www.zoho.com/campaigns/).
