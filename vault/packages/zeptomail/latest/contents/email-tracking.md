<!-- source: https://www.zoho.com/zeptomail/help/email-tracking.html -->

# Open and click tracking

Transactional emails are important messages and it is essential to know whether your recipients have engaged with them. This helps you tailor your email contents for better visibility and user experience. Two parameters that help you monitor email activity are opens and clicks.

ZeptoMail's email tracking option allows you to view the opens and clicks for your transactional emails, giving you visibility on how they've performed. You can enable  tracking separately for each Agent, which gives you the flexibility to analyse only the desired information.

#### Table of Contents

- [Open tracking](https://www.zoho.com/zeptomail/help/email-tracking.html#open-tracking)
- [Click tracking](https://www.zoho.com/zeptomail/help/email-tracking.html#click-tracking)
- [How does tracking work?](https://www.zoho.com/zeptomail/help/email-tracking.html#track-subdomain)
- [How to enable tracking in ZeptoMail?](https://www.zoho.com/zeptomail/help/email-tracking.html#enable-tracking)
- [Tracking metrics in ZeptoMail](https://www.zoho.com/zeptomail/help/email-tracking.html#zem-metrics)

## Open tracking

The open tracking metric gives an insight on the number of times an email was opened by the recipient. This metric helps you analyse if the email has reached the recipient's inbox.

**How does it work?**

Email opens are captured using pixel tracking, where a small transparent 1X1 image (pixel) is embedded in the header or footer of the email. The image is not visible to the recipient. When the email is opened, the image loads and the open count is registered by ZeptoMail.

## Click tracking

The click tracking metric informs you if a recipient has clicked on the embedded link(s) in your emails. Click tracking keeps track of the content relevance and the number of customers who have followed through to the next step.

**How does it work?**

Click tracking works by adding a tracking parameter to the attached URL. Whenever the URL is accessed, the click count will be registered and displayed to the end-user.

Email tracking is possible only for emails with a HTML body.

## How does tracking work?

When you enable tracking, a tracking parameter is added to all the emails you send. Whenever a recipient opens an email or clicks on an embedded link, they are briefly redirected to a tracking subdomain before displaying the message or being directed to the embedded link. The count registered in the sub-domain will be retrieved and displayed by ZeptoMail.

You can also add a custom tracking sub-domain to track your emails. To use it, you should add a CNAME record in your DNS and point it to ZeptoMail's tracking domain. As a best practice, add the sub-domain of the email-sending domain to prevent ISPs from thinking the tracking domain as a spammer.

## Enable tracking in ZeptoMail

Follow the steps given below to enable email tracking:

1. Login to your ZeptoMail account.
2. Select the desired Agent from the left pane.
3. Navigate to **Email Tracking** tab.



![Email tracking tab](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/track-tab.png)

4. Use the toggle button to enable tracking (clicks and opens).



![Enable tracking toggle button](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/track-toggle.png)

5. Enter the sub-domain you wish to use to track your clicks and click **Save.**



![Tracking details](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/track-details.png)

6. **Verifying the subdomain**
1. You should add the CNAME records shown in the UI to your [DNS](https://www.zoho.com/zeptomail/help/dns.html). You can do this manually or share records with your colleagues.
2. To share records with the colleagues, click the **Share records with colleague** button. Enter the recipient's email address, a suitable description with instructions to verify the domain and click **Send.**
3. Click **Verify** to complete the Email Tracking set up.



      ![Verify track subdomain](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/tracksubdomain-new.png)
7. Once you add the CNAME records, the subdomain details will be added to our Admin records. You will receive an email from us once tracking is enabled for you. If you want to disable your tracking at any point in time, you can simply close the toggle option.
8. You can also configure tracking using headers. Use boolean values for the headers to enable or disable tracking. If these headers are not specified, then the data will be tracked as per the option set in the tracking section.
   - ​SMTP header fields: " **X-TM-OPEN-TRACK"** and " **X-TM-CLICK-TRACK"**
   - API fields: **"track\_opens"** and **"track\_clicks"**

## Tracking metrics in ZeptoMail

The tracking metrics are available in the following sections:

- **Reports section** \- As part of the [overall report](https://www.zoho.com/zeptomail/help/reports.html#overall) available in the Reports section.
- **Dashboard** \- The [same graph](https://www.zoho.com/zeptomail/help/dashboard.html#MAR) that is available in the Reports section.
- **Agent overview** \- As part of the Agent's [overview graph](https://www.zoho.com/zeptomail/help/overview.html).
- **Domains section** \- Included in the domain's [performance graph](https://www.zoho.com/zeptomail/help/domains-section.html#overview) in the Domains section. The data is available in the Domains section within each Agent.
- **Processed emails section** \- The open and click count for each email is available in the [processed emails section](https://www.zoho.com/zeptomail/help/processed-emails.html#details).

Before you get started it is important to know that ZeptoMail is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, you can visit [Zoho Campaigns](https://www.zoho.com/campaigns/).
