<!-- source: https://www.zoho.com/zeptomail/help/api/get-template.html -->

# Get email templates

## Purpose

This API is used to retrieve a single email template.

## Request URL

**Method : GET**

https://api.zeptomail.com/v1.1/agents/{agent-alias}/templates{template-key}

## OAuth scope

Any one of the following scopes can be used to access this API

scope=Zeptomail.MailTemplates.All

or

scope=Zeptomail.MailTemplates.READ

**ALL**\- This will give the basic CRUD access too all the email templates APIs.

The steps to generate and use OAuth token can be found [here.](https://www.zoho.com/accounts/protocol/oauth.html)

## Path parameters

|     |     |     |
| --- | --- | --- |
| **Parameter** | **Type** | **Description** |
| agent-alias | String | Unique alias value given to the Agent. It is available in the **API** section of your Agent. |
| template-key | String | Unique key for the template. |

- Ensure that the template you select belongs to the Agent you are currently using, since templates are specific to each Agent.
- Use [this API](https://www.zoho.com/zeptomail/help/api/list-template.html) to fetch multiple templates.

#### Sample request

```json
Copiedcurl "https://api.zeptomail.com/v1.1/agents/{agent-alias}/templates/{{template-key}}\"
-X GET
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
```

#### Sample response

```json
Copied{

   "data": {

       "htmlbody": "<h1> Hi {{name}}</h1>, Invite Link: {{link}}",

       "created_time": "12 Dec 2022 11:18 PM",

       "template_name": "Invite mail update",

       "template_key": "ea36f19a.5ecaba242f82149d.k1.1fb151c0-7a45-11ed-a51f-8a90785fcf47.185077368dc",

       "modified_time": "12 Dec 2022 11:18 PM",

       "attachments": [\
\
           {\
\
               "file_cache_key": "ea36f19a.5ecaba242f82149d.h1.caba3570-58fb-11ed-b527-8a90785fcf47.1842d4e0247",\
\
               "content_type": "text/plain",\
\
               "file_name": "abc.txt"\
\
           },\
\
           {\
\
               "file_cache_key": "ea36f19a.5ecaba242f82149d.h1.d77c6f20-328c-11ed-8601-525400256d50.183316d7712",\
\
               "content_type": "image/png",\
\
               "file_name": "Screenshot from 2022-09-06 15-14-23.png"\
\
           }\
\
       ],

       "subject": "Invite mail subject update",

       "template_alias": "invite-email",

       "sample_merge_info": {

           "name": "name_value",

           "link": "link_value"

       }

   },

   "message": "OK",

   "object": "templates"
```

Show full

Show less
