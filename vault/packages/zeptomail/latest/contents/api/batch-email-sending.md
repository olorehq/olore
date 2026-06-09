<!-- source: https://www.zoho.com/zeptomail/help/api/batch-email-sending.html -->

# Batch Email Sending API

## Purpose

The API is used to send a batch of transactional emails.

## Request URL

**Method : POST**

https://api.zeptomail.com/POST/v1.1/email/batch

**Header**: Authorization: zoho-enczapikey \*\*\*

## Authorization token

You need to add send mail token to authenticate your API requests. This is a unique token that you can generate within your Agent in your ZeptoMail account. Use the send mail token as a header when you call ZeptoMail REST Email Sending API.

#### Example

POST /v1.1/email

## Steps to generate Send mail token

1. Select the Agent that you want to connect to your application.
2. Navigate to the SMTP/API tab. This will open the Setup Details page.
3. From here you can copy your Agent specific send mail token under the API tab.
4. You can either use the default Send Mail Token or generate a new one.

**Agents >> SMTP/API >> Send Mail Token >> Click to copy icon.**

### **Recipient-specific merge field details**

Merge fields are dynamic values that will replace the content provided within them. They can set be set in HTML body, text body, client reference and subject. Let's look at the different placements of merge info tag and what they mean.

1. Merge info is added **within** the "to" information :
   - The merge info will be applied for the recipient in "to" tag.
2. Merge info is added **both within and outside** the "to" information
   - The merge info available within "to" will be applied for the recipient in "to" tag.
   - The merge info available outside, will be used for recipients that do not have merge info within the "to" body.

The maximum number of email addresses that can be included in a batch emails is **500\.** To request a higher limit, contact [support@zeptomail.com](mailto:support@zeptomail.com).

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

#### Merge tag within "to"

```curl
Copiedcurl  "https://api.zeptomail.com/v1.1/email/batch" \
-X POST
-H 'Authorization: Zoho-enczapikey ***'\
-H 'Content-Type: application/json' \
-d  '{
"from": { "address": "invoice@zylker.com", "name": "Invoice" },
"subject":"Batch mail Test",
"to": [\
    {\
        "email_address":\
{\
"address": "paul.s@zfashions.com",\
"name": "Paul"\
},\
        "merge_info" :\
 {\
"contact" : "98********" ,\
"company" : "Z fashions"\
 }\
    },\
    {\
        "email_address":\
{\
"address": "rebecca@zcorp.com",\
"name": "Rebecca"\
},\
        "merge_info" :\
{\
"contact" : "87********" ,\
"company" : "Z Inc."\
}\
    },\
    {\
        "email_address":\
{\
"address": "george@zfashions.com",\
"name": "George"\
},\
"merge_info" : {\
 "contact" : "87********" ,\
"company" : "Z fashions" }\
    }\
],
"htmlbody":"<div><b>This is a sample email.{{contact}} {{company}}</b></div",
"textbody" : "This is a sample email",
} '
```

#### Merge tag within and outside "to"

```curl
Copiedcurl  'https://api.zeptomail.com/v1.1/email/batch' \
-X POST
-H 'Authorization: Zoho-enczapikey ***'\
-H 'Content-Type: application/json' \
-d  '{
"from": { "address": "invoice@zylker.com", "name": "Invoice" },
"subject":"Batch mail Test",
"to": [\
    {\
        "email_address":\
{\
"address": "paul.s@zfashions.com",\
"name": "Paul"\
},\
        "merge_info" :\
 {\
"contact" : "98********" ,\
"company" : "Z fashions"\
 }\
    },\
    {\
        "email_address":\
{\
"address": "rebecca@zcorp.com",\
"name": "Rebecca"\
},\
        "merge_info" :\
{\
"contact" : "87********" ,\
"company" : "Z Inc."\
}\
    },\
    {\
        "email_address":\
{\
"address": "george@zfashions.com",\
"name": "George"\
},\
    }\
],
"htmlbody":"<div><b>This is a sample email.{{contact}} {{company}}</b></div",
"textbody" : "This is a sample email",
"merge_info" : {
 "contact" : "87********" ,
"company" : "Z fashions" }
}   '
```
