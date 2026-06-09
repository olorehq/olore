<!-- source: https://www.zoho.com/zeptomail/help/api/file-upload.html -->

# File Cache Upload API

## Purpose

The API is used to upload files to File Cache

## Request URL

https://api.zeptomail.com/v1.1/files?name=logo.jpg

## Authorization token

You need to add send mail token to authenticate your API requests. This is a unique token that you can generate within your Agent in your [ZeptoMail account](https://zeptomail.zoho.com/). Use the send mail token as a **header** when you call ZeptoMail REST Email Sending API.

### **Example**

POST /v1.1/email

_**Query String:**_

POST

HOST: https://api.zeptomail.com

Header:

Authorization: zoho-enczapikey <space> <send mail token>

### Steps to generate Send mail token:

Select the Agent that you want to connect to your application.

1. Navigate to the SMTP/API tab. This will open the Setup Details page.
2. From here you can copy your Agent specific send mail token under the API tab.
3. You can either use the default Send Mail Token or generate a new one.



**Agents >> SMTP/API >> Send Mail Token >> Click to copy icon.**

## Request Values

\* \- Mandatory parameters

|     |     |     |
| --- | --- | --- |
| **Parameter** | **Data Type** | **Description** |
| name | String | Name of the file you are uploading to File Cache |
| **Header** | **Data Type** | **Description** |
| Authorization |  | Send Mail token used to send email |
| **Body** | **Data Type** | **Description** |
| content\_type |  | Content type can be text or plain. |
| data binary |  | Pathway of the file available in your device. |

## Success Response Parameters

|     |     |     |
| --- | --- | --- |
| **Parameter** | **Data Type** | **Description** |
| data | JSON array | It consists of code, additional\_info and message parameters |
| code | String | The code corresponding to a success response |
| additional\_info | JSON array | Provides additional information about the action performed in the request |
| message | String | The status of the request made |
| file\_cache\_key | String | A unique key which is generated for the uploaded file. This key is used to send emails with this file as an attachment. |

## Error Codes

|     |     |
| --- | --- |
| **Error codes** | **Reason** |
| TM 3301 | Chosen file has empty content. Fix the content to proceed. |
| TM 4001 | Invalid Send Mail token. |
| TM 8001 | File size exceeded. |
| TM 3501 | File added violates the Secure Attachment Policy. [Learn more](https://www.zoho.com/mail/help/secure-attachment-policy.html) |

Note:

Before you get started it is important to know that ZeptoMail is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, you can visit [Zoho Campaigns](https://www.zoho.com/campaigns/).

#### Sample Request

```curl
Copiedcurl --location -g --request POST 'https://api.zeptomail.com/v1.1/files?name=logo.jpg' \
--header 'Authorization: {{apitoken}}' \
--header 'Content-Type: text/plain' \
--data-binary '@/Users/rebecca-5499/Documents/Attachment/logo.jpg'
```

#### Sample Response

```json
Copied{
  "file_cache_key": "ea36f19a.13bcc89ebf85b76.h1.fa11ae90-0a35-11ec-924b-525400256d50.17b9b5697f9",
  "data": [\
    {\
      "code": "fm_101",\
      "additional_info": [],\
      "message": "File uploaded successfully"\
    }\
  ],
  "message": "OK",
  "object": "file"
}
```
