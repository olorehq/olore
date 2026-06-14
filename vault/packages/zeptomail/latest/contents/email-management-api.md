<!-- source: https://www.zoho.com/zeptomail/help/email-management-api.html -->

# Email management APIs

ZeptoMail's REST APIs allow users to send transactional emails like OTPs, password reset emails, invoices and more from their application. They can either use a preset template or build emails from scratch. There is a separate API that handles email-sending using templates. You can learn everything about building email templates in this [guide](https://www.zoho.com/zeptomail/help/using-templates.html).

Application developers using APIs should authenticate the API requests to ZeptoMail by adding an authorization parameter. This is the **Send Mail Token** (a unique token for every Agent) that you can generate in your ZeptoMail account. If API requests are made to ZeptoMail without these headers, you will receive HTTP response "401 Unauthorised" error.

### Generate send mail token

Follow the steps to generate the Send Mail Token

1. Select the Agent that you want to connect to your application.
2. Navigate to the SMTP/API section. This will open the Setup Details page.
3. From here you can copy your Agent specific send mail token under the API tab.
4. You can either use the default Send Mail Token or generate a new one.

**Agents >> SMTP/API >> Send Mail Token >> Click to copy icon.**

The following APIs are available in ZeptoMail :

- ##### [Email-sending API](https://www.zoho.com/zeptomail/help/api/email-sending.html)

- ##### [Batch email-sending API](https://www.zoho.com/zeptomail/help/api/batch-email-sending.html)

- ##### [Templates API - single email](https://www.zoho.com/zeptomail/help/api/email-templates.html)

- ##### [Templates API - batch email](https://www.zoho.com/zeptomail/help/api/batch-email-templates.html)


### Mail Send API - JSON format

JSON messages are passed in the request body. You can go to [API documentation](https://www.zoho.com/zeptomail/help/api/email-sending.html) section to view:

- [Sample curl and Sample API JSON format](https://www.zoho.com/zeptomail/help/api/email-sending.html)
- [Request Body Parameters](https://www.zoho.com/zeptomail/help/api/email-sending.html#request-body)
- [Success Response Parameters](https://www.zoho.com/zeptomail/help/api/email-sending.html#success-response)
- [Failure Response Parameters](https://www.zoho.com/zeptomail/help/api/email-sending.html#failure-response)
- [Status Codes](https://www.zoho.com/zeptomail/help/api/email-sending.html#status-code)
- [Error Codes](https://www.zoho.com/zeptomail/help/api/email-sending.html#email-sending-error-codes)
- [**Download the SDK**](https://stratus.zoho.com/zeptomail/v3/sdk/java_v3.zip)

Note:

Before you get started it is important to know that ZeptoMail is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, you can visit [Zoho Campaigns](https://www.zoho.com/campaigns/).
