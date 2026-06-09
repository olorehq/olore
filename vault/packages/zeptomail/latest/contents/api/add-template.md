<!-- source: https://www.zoho.com/zeptomail/help/api/add-template.html -->

# Adding email templates

## Purpose

This API helps you add an email template.

## Request URL

**Method : POST**

https://api.zeptomail.eu/v1.1/agents/{agent-alias}/templates

## OAuth scope

Any one of the following scopes can be used to access this API

scope=Zeptomail.MailTemplates.All

or

scope=Zeptomail.MailTemplates.CREATE

**ALL**\- This will give the basic CRUD access too all the email templates APIs.

The steps to generate and use OAuth token can be found [here.](https://www.zoho.com/accounts/protocol/oauth.html)

## Path parameters

|     |     |     |
| --- | --- | --- |
| **Parameter** | **Type** | **Description** |
| agent-alias | String | Unique alias value given to the Agent. It is available in the **API** section of your Agent. |

Ensure that the template you select belongs to the Agent you are currently using, since templates are specific to each Agent.

## **Request Body (JSON object)**

- **template\_name****\***String



  - Name of the template.

- **template\_alias**String



  - Unique alias for the template that can be used instead of the template key. It can be obtained from the **Template** section of your ZeptoMail account. You can use either the template name or the template alias, but _**not both.**_

- **subject****\***String



  - Subject to be added in the email template.

- **htmlbody****\*\***String



  - The corresponding HTML content of the body in the email template.

- **textbody****\*\***String



  - Plain text body of the email in the template.

**Note:**

\* \- Mandatory parameter

\*\* \- At least one of them is mandatory

#### Sample request

```json
Copiedcurl "https://api.zeptomail.eu/v1.1/agents/{agent-alias}/templates\"
-X POST
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
-d '{
    "template_name": "E-invite",
    "subject": "Invitation to the event",
    "htmlbody": "<h1> Hi {{name}}</h1>, invitation link {{link}}",
    "template_alias": "e-invite emails"
}'
```

#### Sample response

```json
Copied{
  "data": [\
    {\
      "htmlbody": "<h1> Hi {{name}}</h1>, invitation link {{link}}",\
      "upload_time": "19 Sep 2022 11:32 AM",\
      "template_name": "E-invite",\
      "template_key": "ea****607",\
      "template_size": 9,\
      "modified_time": "19 Sep 2022 11:32 AM",\
      "subject": "Invitation to the event",\
    }\
  ],
  "message": "OK",
  "object": "templates"
}
```
