<!-- source: https://www.zoho.com/zeptomail/help/api/list-agents.html -->

# List all Agents

## Purpose

This API lists all the Agents available in your ZeptoMail account.

## Request URL

**Method : GET**

https://api.zeptomail.com/v1.1/agents

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

Any one of the following scopes can be used to access this API

scope=Zeptomail.MailAgents.All

or

scope=Zeptomail.MailAgents.READ

**ALL**-This gives full CRUD (Create, Read, Update and Delete) access to all Agent APIs.

**READ -** This allows access only to READ operations.

#### Sample request

```json
Copiedcurl "https://api.zeptomail.in/v1.1/agents
-X GET
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
```

#### Sample response

```json
Copied     {
         "data": [\
             {\
                 "mailagent_name": "Notifications",\
                 "created_time": "04 Jun 2023 08:19 PM",\
                 "description": "Used to send notification emails",\
                 "mailagent_key": "4a00b66e61948f67",\
                 "status": "active"\
             },\
             {\
                 "mailagent_name": "Invoices",\
                 "created_time": "04 Jun 2023 08:21 PM",\
                 "description": "Used for invoices",\
                 "mailagent_key": "4b95b2770849a1bd",\
                 "status": "active"\
             },\
             {\
                 "mailagent_name": "Security_codes",\
                 "created_time": "23 May 2023 10:24 AM",\
                 "description": "Used for security codes",\
                 "mailagent_key": "26466a440b777740",\
                 "status": "active"\
             }\
         ],
         "status": "success"
     }

```
