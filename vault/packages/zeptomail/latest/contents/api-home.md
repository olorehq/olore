<!-- source: https://www.zoho.com/zeptomail/help/api-home.html -->

# Application Programming Interface

ZeptoMail's REST APIs allow you to send transactional emails like OTPs, password reset emails, invoices and more from your application. You can use ZeptoMail's preset templates along with the email-sending APIs to simplify email drafting. You can learn everything about building email templates in this [guide](https://www.zoho.com/zeptomail/help/using-templates.html "Templates help page").

## Send Mail token

All API requests made to ZeptoMail should be authenticated using an authorization parameter called the Send Mail Token. This token is unique to each Agent. If API requests are made without these headers, ZeptoMail will return an HTTP "401 Unauthorised" error.

### Generate send mail token

Follow the steps to generate the Send Mail Token

1. Select the Agent that you want to connect to your application.
2. Navigate to SMTP/API section. This will open the Setup Details page.
3. From here you can copy your Agent specific send mail token under the API tab.
4. You can either use the default Send Mail Token or generate a new one.

**Agents >> SMTP/API >> Send Mail Token >> Click to copy icon**

### Note

To use ZeptoMail's APIs including their authentication and scopes, refer to our [API guide.](https://www.zoho.com/zeptomail/help/api-index.html)

## Mail Send API - JSON format

JSON messages are passed in the request body. You can go to [API documentation](https://www.zoho.com/zeptomail/help/api/email-sending.html) section to view:

- [Sample curl and Sample API JSON format](https://www.zoho.com/zeptomail/help/api/email-sending.html)
- [Request Body Parameters](https://www.zoho.com/zeptomail/help/api/email-sending.html#request-body)
- [Success Response Parameters](https://www.zoho.com/zeptomail/help/api/email-sending.html#success-response)
- [Failure Response Parameters](https://www.zoho.com/zeptomail/help/api/email-sending.html#failure-response)
- [Status Codes](https://www.zoho.com/zeptomail/help/api/email-sending.html#status-code)
- [Error Codes](https://www.zoho.com/zeptomail/help/api/email-sending.html#email-sending-error-codes)
- [**Download the SDK**](https://stratus.zoho.com/zeptomail/v3/sdk/java_v3.zip)

Note

Before you get started it is important to know that [ZeptoMail](https://www.zoho.com/zeptomail/) is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, you can visit [Zoho Campaigns](https://www.zoho.com/campaigns/).
