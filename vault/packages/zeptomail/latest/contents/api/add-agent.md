<!-- source: https://www.zoho.com/zeptomail/help/api/add-agent.html -->

# Add a new Agent

## Purpose

This API adds a new Agent to the ZeptoMail account.

## Request URL

**Method : POST**

https://api.zeptomail.com/v1.1/agents

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

scope=Zeptomail.MailAgents.All

or

scope=Zeptomail.MailAgents.CREATE

**ALL**-This gives full CRUD (Create, Read, Update and Delete) access to all Agent APIs.

**CREATE -** This allows access only to CREATE operations.

## **Request Body (JSON object)**

- **mailagent\_name****\***String



  - Name of the Agent to be added (Maximum length= **100** characters).

- **description**String



  - Short description about the Agent's purpose.

**Note:**

\* \- Mandatory parameter

## Error codes

|     |     |
| --- | --- |
| **Code** | **Message** |
| MA\_107 | Agent name already exists. |
| MA\_105 | You have reached the maximum limit for creating an Agent. Total number of Agents that can created is **50.** |

#### Sample request

```curl
Copiedcurl "https://api.zeptomail.in/v1.1/agents
-X POST
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
{
    "mailagent_name" : "Invoice",
    "description" : "Used to send invoices"
}
```

#### Sample success response

```json
Copied     {
         "data": {
             "mailagent_name": "Invoice",
             "created_time": "12 Jun 2023 11:50 AM",
             "description": "Used to send invoices",
             "mailagent_key": "1ac36788bcb06e03",
             "status": "active"
         },
         "status": "success"
     }

```

#### Sample failure response

```json
Copied     {
         "error": {
             "code": "MA_107",
             "field": "mailagent_name",
             "message": "Agent name already exists",
             "value": "Invoice"
         },
         "status": "failure"
     }

```
