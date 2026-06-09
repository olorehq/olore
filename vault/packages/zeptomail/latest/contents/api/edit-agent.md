<!-- source: https://www.zoho.com/zeptomail/help/api/edit-agent.html -->

# Edit existing Agent

## Purpose

This API edits an existing Agent in the ZeptoMail account.

## Request URL

**Method : PUT**

https://api.zeptomail.com/v1.1/agents/{agentkey}

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

scope=Zeptomail.MailAgents.All

or

scope=Zeptomail.MailAgents.UPDATE

**ALL**-This gives full CRUD (Create, Read, Update and Delete) access to all Agent APIs.

**UPDATE -** This allows access only to the UPDATE operation.

## Path parameter

|     |     |     |
| --- | --- | --- |
| **Parameter name** | **Type** | **Description** |
| agentkey **\*** | String | Also known as Agent alias. It represents the Agent to be edited. |

## Steps to generate the Agent key

Select the Agent that you want to connect to your application.

1. Navigate to the SMTP/API tab. Go to the API section.
2. Copy the Agent alias from this section.



**Agents >> API section >> Copy the Agent alias**

## **Request Body (JSON object)**

- **mailagent\_name****\***String



  - The new (edited) value of the Agent's name (Maximum length= **100** characters).

- **description**String



  - Short description about the Agent's purpose.

**Note:**

\* \- Mandatory parameter

## Error codes

|     |     |
| --- | --- |
| **Code** | **Message** |
| MA\_101 | Invalid Agent input |
| MA\_107 | Agent name already exists |

#### Sample request

```json
Copiedcurl "https://api.zeptomail.in/v1.1/agents/{agentkey}
-X PUT
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
{
 "mailagent_name" : "Invoice",
    "description" : "To send invoices"
}
```

#### Sample success response

```json
Copied{
    "data": {
        "mailagent_name": "Invoice",
        "created_time": "12 Jun 2023 11:57 AM",
        "description": "testing",
        "mailagent_key": "207d9ce8a267762c",
        "status": "active"
    },
    "status": "success"
}
```

#### Sample failure response

```json
Copied{
    "error": {
        "code": "MA_101",
        "message": "Invalid agent input"
    },
    "status": "failure"
}
```
