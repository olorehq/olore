<!-- source: https://www.zoho.com/zeptomail/help/api/email-sending.html -->

# Email Sending API

## Purpose

The API is used to connect your application with ZeptoMail to send [transactional emails](https://www.zoho.com/zeptomail/).

## Request URL

https://api.zeptomail.eu/v1.1/email

## Authorization token

You need to add send mail token to authenticate your API requests. This is a unique token that you can generate within your Agent in your ZeptoMail account. Use the send mail token as a **header** when you call ZeptoMail's REST Email Sending API.

### **Example**

POST /v1.1/email

_**Query String:**_

Method: POST

HOST: https://api.zeptomail.eu/v1.1/email

Header:

Authorization: zoho-enczapikey <space> <send mail token>

### Steps to generate Send mail token:

1. Select the Agent that you want to connect to your application.
2. Navigate to the SMTP/API tab. This will open the Setup Details page.
3. From here you can copy your Agent specific send mail token under the API tab.
4. You can either use the default Send Mail Token or generate a new one.



**Agents >> SMTP/API >> Send Mail Token >> Click to copy icon.**

* * *

## Request Body

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

- **attachments** JSON array

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

## Success response parameters

|     |     |     |
| --- | --- | --- |
| **Parameter** | **Data Type** | **Description** |
| Data | JSON array | It consists of code, additional\_info and message parameters |
| code | String | The code corresponding to a success response |
| additional\_info | JSON array | Provides additional information about the action performed in the request |
| message | String | The action taken for this request |
| message | String | The status of the request made |
| request\_id | String | A unique id which is generated for every request |
| object | Email | It signifies that the response is for email API |

## Failure response parameters

|     |     |     |
| --- | --- | --- |
| **Parameter** | **Data Type** | **Description** |
| error | JSON object | It consists of code, details, message and request\_id parameters |
| code | String | The code corresponding to the status of the request made |
| details | JSON array | Consists of code, message and target parameters |
| code | String | Code of the error found |
| message | String | Reason for the error |
| target | String | The field that caused the error |
| message | String | The status of the request made |
| request\_id | String | Unique id generated for every request |

## HTTPS status code

|     |     |
| --- | --- |
| **Status code** | **Description** |
| 2xx | Success |
| 4xx | Failure<br>Action needed by the user to fix the error |
| 5xx | Failure<br>Action needed by ZeptoMail to fix the error |

## Error codes

- [API error codes](https://www.zoho.com/zeptomail/help/api/error-codes.html)
- [SMTP error codes](https://www.zoho.com/zeptomail/help/api/smtp-error-codes.html)

Before you get started it is important to know that ZeptoMail is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, you can visit [Zoho Campaigns.](https://www.zoho.com/campaigns/)

#### Curl Request details

```json
Copiedcurl "https://api.zeptomail.eu/v1.1/email" \
-X POST \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-H "Authorization:Zoho-enczapikey YOUR_API_KEY" \
-d '{
    "from": { "address": "accounts@info.zylker.com", "name": "Paula" },
    "to": [ { "email_address": { "address": "Sara.d@zylker.com", "name": "Sara" } } ],
    "cc": [ { "email_address": { "address": "Devin.jo@zylker.com", "name": "Devin" } } ],
    "reply_to": [ { "address": "Kevin@zylker.com", "name": "Kevin" } ],
    "subject": "Account Confirmation",
    "htmlbody": "<div><b> Kindly click on Verify Account to confirm your account </b></div>",
    "attachments": [\
        {\
            "file_cache_key": "ea36f19a.342fc7e29c25f1ed.h1.776d4400-9b3b-11ef-a4db-525400256d50.192faea6440"\
        }\
    ],
    "track_clicks" : true,
    "track_opens" : true,
    "client_reference": "reference",
    "mime_headers": { "message": "value" }
}'
```
