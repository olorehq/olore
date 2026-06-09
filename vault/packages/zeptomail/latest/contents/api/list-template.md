<!-- source: https://www.zoho.com/zeptomail/help/api/list-template.html -->

# List email templates

## Purpose

This API retrieves multiple email templates.

## Request URL

**Method : GET**

https://api.zeptomail.com/v1.1/agents/{agent-alias}/templates?offset=\*&limit=\*

\\*\- Add the desired values.

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
| offset | Int | Positional value of the template starting from which the set of templates have to be listed. Offset value should be the previous positional value of the desired template. **Example** : If you wish to retrieve the 9th template, offset should be 8. |
| limit | Int | Denotes the number of templates that need to listed. |

- Ensure that the template you select belongs to the Agent you are currently using, since templates are specific to each Agent.
- Use [this API](https://www.zoho.com/zeptomail/help/api/get-template.html) to fetch a single template.

#### Sample request

```json
Copiedcurl "https://api.zeptomail.com/v1.1/agents/{agent-alias}/templates/?offset=0&limit=10' \
-X GET
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
```

#### Sample response

```json
Copied{

 "metadata": {

   "offset": 0,

   "count": 2,

   "limit": 10

 },

 "data": [\
\
   {\
\
     "created_time": "12 Dec 2022 11:18 PM",\
\
     "template_name": "Invite mail update",\
\
     "template_key": "ea36f19a.5ecaba242f82149d.k1.1fb151c0-7a45-11ed-a51f-8a90785fcf47.185077368dc",\
\
     "modified_time": "12 Dec 2022 11:18 PM",\
\
     "subject": "Invite mail subject update",\
\
     "template_alias": "invite-email"\
\
   },\
\
   {\
\
     "created_time": "08 Dec 2022 01:33 PM",\
\
     "template_name": "Test Template",\
\
     "template_key": "ea36f19a.5ecaba242f82149d.k1.d5202e70-76ce-11ed-b259-525400256d50.184f0c302d7"\
\
     "modified_time": "08 Dec 2022 01:33 PM",\
\
     "subject": "Event Reminder Testing {{{event_title_val}}}",\
\
     "template_alias": "testing"\
\
   }\
\
 ],

 "message": "OK"

}
```

Show full

Show less
