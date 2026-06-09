<!-- source: https://www.zoho.com/zeptomail/help/api/batch-email-templates.html -->

# Templates API - Batch Emails

You can use this API to send emails using templates. Refer the templates [help documentation](https://www.zoho.com/zeptomail/help/using-templates.html) to create templates in ZeptoMail.

#### Table of Contents

- [Pre-requisite](https://www.zoho.com/zeptomail/help/api/batch-email-templates.html#pre-requisite)
- [Batch Email API](https://www.zoho.com/zeptomail/help/api/batch-email-templates.html#batchemail)
- [Request Body](https://www.zoho.com/zeptomail/help/api/batch-email-templates.html#requestbody)
- [Response Parameters](https://www.zoho.com/zeptomail/help/api/batch-email-templates.html#alink5)
- [Status Codes](https://www.zoho.com/zeptomail/help/api/batch-email-templates.html#status)

## Pre-requisite

You will require a Send Mail token and the Reference ID of the template you wish to use while sending emails via this API.

### Steps to generate Send mail token:

1. Select the Agent that you want to connect to your application.
2. Navigate to the SMTP/API tab. This will open the Setup Details page.
3. From here you can copy your Agent specific send mail token under the API tab.
4. You can either use the default Send Mail Token or generate a new one.



**Agents >> SMTP/API >> Send Mail Token >> Click to copy icon.**

**Steps to copy Template ID:**

1. Navigate to the [Agents](https://zeptomail.zoho.com/#mailAgents) tab on the left panel of your ZeptoMail account and select the Agent.
2. Go to the **Templates** tab.
3. Choose the template you wish to use from the pre-existing templates or create a new template.
4. Copy the template ID of your template using the copy icon.

## Sending batch emails using Templates

### Purpose

This API can be used to send batch emails using templates.

### Request URL

https://api.zeptomail.com/v1.1/email/template/batch

### Authorization token

You need to add send mail token to authenticate your API requests. This is a unique token that you can generate within your Agent in your ZeptoMail account. Use the send mail token as a **header** when you call ZeptoMail REST Email Sending API.

### Example

POST /v1.1/email/template/batch

### Query String:

POST

HOST: https://api.zeptomail.com

Header:

Authorization: zoho-enczapikey <space> <send mail token>

- You can scroll down the sample code section of this page to view the sample request and sample response.
- The maximum number of email addresses that can be included in a batch emails is **500\.** To request a higher limit, please contact [support@zeptomail.com](mailto:support@zeptomail.com).

* * *

## Request Body

- **template\_key/template\_alias****\***JSON array



  - Unique key identifier for your template. template\_alias is the alias name given to the template key.
  - It can be used in place of template\_key.

- **bounce address** JSON array



  - The email address to which bounced emails will be sent.
  - **Allowed value** \- A valid bounce email address as configured in your Agent.

- **from****\***JSON object

**Allowed value** \- A valid sender email address with "address" and "name" key-value pairs. The following items should be included in the object:

  - **address** String



    - A valid email address containing a domain that is verified in your Agent.

  - **name** String



    - Sender's name.
- **to****\***JSON array

**Allowed value** \- JSON object of email\_address.

  - **email\_address** JSON object



    - A valid recipient email address with "address" and "name" key-value pairs.

  - **address** String



    - Recipient's email address field.

  - **name** String



    - Recipient's name.

  - **merge\_info** JSON object



    - Represents merge fields of the mail. Merge fields are dynamic parameters that take the value of the variable assigned to them. They can be used in HTML body, text body, client reference, and subject. Merge fields within "to" apply to respective recipients.
- **subject****\***String



  - The subject of the email to be sent.

- **HTML body/textbody** String



  - Email body content. Allowed value: either textbody or htmlbody.

- **cc** JSON array



  - Email addresses of cc'd recipients.
  - **Allowed value** \- JSON object of email\_address.

- **bcc** JSON array



  - Email addresses of bcc'd recipients.
  - **Allowed value** \- JSON object of email\_address.

- **track\_clicks** Boolean



  - To enable/disable email click tracking.
  - **Allowed value**:
    - **True** : Enable email click tracking.
    - **False** : Disable email click tracking.

- **track\_opens** Boolean



  - To enable/disable email open tracking.
  - **Allowed value**:
    - **True** : Enable email open tracking.
    - **False** : Disable email open tracking.

- **client\_reference** String



  - Identifier set by the user to track a particular transaction.

- **mime\_headers** JSON object



  - Additional headers for reference in the email.

- **attachment** JSON array

The attachments to add to transactional emails. Click [here](https://www.zoho.com/zeptomail/help/file-cache.html) for unsupported formats.

**Allowed value** \- JSON object of attachments (base64 content or file\_cache\_key or both).

  - **content** String



    - Content of attachment. Base64 encoded value of a file.

  - **mime\_type** String



    - Indicates attachment content type. Example: text/plain, image/jpg.

  - **name** String



    - File name of the attachment.

  - **file\_cache\_key** String



    - Unique key for attached files in Agent. Obtain from File Cache section.
- **inline\_images** JSON array



  - Inline images added to email.
  - **Allowed value** \- Base64 content or file\_cache\_key or both.
  - Base64 content includes mime\_type, content, and cid parameters.

  - **cid** String



    - Content ID used by HTML body for content lookup. Each content requires a separate cid.
    - **Allowed value** \- Base64 content or file\_cache\_key or both.

## Failure Response Parameters

|     |     |     |
| --- | --- | --- |
| **Parameter** | **Data Type** | **Description** |
| error | JSON object | It consists of code, details, message, and request\_id parameters |
| code | String | The code corresponding to the status of the request made |
| details | JSON array | It consists of code, message and target parameters |
| target\_value | String | A unique id which is generated for every request |
| code | String | The code for the error found |
| message | String | Reason for the error |
| target | String | The field that caused the error |
| message | String | The status of the request made |

## HTTP status codes

|     |     |
| --- | --- |
| **Status code** | **Description** |
| 2xx | Success |
| 4xx | Failure.<br>Action needed at the user end to fix the error. |
| 5xx | Failure.<br>Action needed at ZeptoMail server to fix the error. |

## Error Codes

- [API Error codes](https://www.zoho.com/zeptomail/help/api/error-codes.html)

Before you get started it is important to know that ZeptoMail is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, you can visit [Zoho Campaigns](https://www.zoho.com/campaigns/).

#### Sample Request

```json
Copiedcurl "https://api.zeptomail.com/v1.1/email/template/batch" \
-X POST \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-H "Authorization:Zoho-enczapikey ***" \
-d {
    "template_key": "ea36f19a.2bec9ad9c994ee6f.k1.7207ab80-da56-11eb-850c-525400256d50.17a6198be38",
    "bounce_address": "bounce@bounce.zylker.com",
    "from": {
        "address": "rebecca@zylker.com",
        "name": "Rebecca"
    },
    "to": [\
        {\
            "email_address": {\
                "address": "paula@zylker.com",\
                "name": "Paula"\
            },\
            "merge_info": {\
                "contact": "960*******23",\
                "company": "Zylker"\
            }\
        },\
        {\
            "email_address": {\
                "address": "charles@zylker.com",\
                "name": "Charles"\
            },\
            "merge_info": {\
                "contact": "860*******13",\
                "company": "Zillum"\
            }\
        }\
    ],
    "reply_to": [\
        {\
            "address": "rebecca@zylker.com",\
            "name": "Rebecca"\
        }\
    ],
    "client_reference": "1234",
    "mime_headers": {
        "X-Test": "test"
    }
}'
```

#### Sample Response

```json
Copied{
  "data": [\
    {\
      "code": "EM_104",\
      "additional_info": [],\
      "message": "Email request received"\
    }\
  ],
  "message": "OK",
  "request_id": "ea36f19a.2bec9ad9c994ee6f.b1.1567dc40-e96c-11eb-bfc9-525400256d50.17ac4746004",
  "object": "email"
}
```
