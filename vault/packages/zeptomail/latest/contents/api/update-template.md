<!-- source: https://www.zoho.com/zeptomail/help/api/update-template.html -->

# Update email template

## Purpose

This API is used to edit your existing templates.

## Request URL

**Method : PUT**

https://api.zeptomail.com/v1.1/agents/{agent-alias}/templates/{template-key}

## OAuth scope

Any one of the following scopes can be used to access this API

scope=Zeptomail.MailTemplates.All

or

scope=Zeptomail.MailTemplates.UPDATE

**ALL**\- This will give the basic CRUD access too all the email templates APIs.

The steps to generate and use OAuth token can be found [here.](https://www.zoho.com/accounts/protocol/oauth.html)

## Path parameters

|     |     |     |
| --- | --- | --- |
| **Parameter** | **Type** | **Description** |
| agent-alias | String | Unique alias value given to the Agent. It is available in the **API** section of your Agent. |

Ensure that the template you select belongs to the Agent you are currently using, since templates are specific to each Agent.

## Request Body (JSON object)

- **template\_name****\***String



  - Name of the template.

- **template\_alias**String



  - Unique alias for the template that can be used instead of the template key. You can use either the template name or the template alias but _**not both.**_

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
Copiedcurl "https://api.zeptomail.com/v1.1/agents/{agent-alias}/templates/{{template-key}}\"
-X PUT
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
-d '{
    "template_name": "E-invite (new)",
    "subject": "Email invitation",
    "htmlbody": "<h1> Hi {{name}}</h1>, invitation link {{link}}",
   }'
```

#### Sample response

```json
Copied{
  "data": [\
    {\
      "htmlbody": "<h1> Hi {{name}}</h1>, invitation link {{link}}",\
      "upload_time": "19 Sep 2022 11:32 AM",\
      "template_name": "E-invite(new)",\
      "template_key": "ea***607",\
      "template_size": 16,\
      "modified_time": "19 Sep 2022 11:32 AM",\
      "subject": "Email invitation"\
    }\
  ],
  "message": "OK",
  "object": "templates"
}
```
