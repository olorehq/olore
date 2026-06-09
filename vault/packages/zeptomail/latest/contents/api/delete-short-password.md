<!-- source: https://www.zoho.com/zeptomail/help/api/delete-short-password.html -->

# Delete SMTP short password

## Purpose

This API deletes the SMTP short password available in the desired Agent.

## Request URL

**Method : DEL**

https://api.zeptomail.com/v1.1/agents/{agentkey}/short-passwords/{{id}}

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

scope=Zeptomail.MailAgents.All

or

scope=Zeptomail.MailAgents.DELETE

**ALL**-This gives full CRUD (Create, Read, Update and Delete) access to all Agent APIs.

**DELETE -** This allows access only to the DELETE operation.

## Path parameter

|     |     |     |
| --- | --- | --- |
| **Parameter name** | **Type** | **Description** |
| agentkey **\*** | String | Also known as Agent alias. It represents the Agent where the SMTP short password should be deleted |
| id **\*** | String | Unique id of the send mail token |

## Steps to generate the Agent key

Select the Agent that you want to connect to your application.

1. Navigate to the SMTP/API tab. Go to the API section.
2. Copy the Agent alias from this section.
3. You can copy the send mail token available right below the Agent alias.

**Note:**

\* \- Mandatory parameter

## Error codes

|     |     |
| --- | --- |
| **Code** | **Message** |
| GE\_124 | No record found |

**Note**

Some applications do not allow lengthy passwords and require shorter ones. Only generate, the less secure shorter passwords if you are using applications with such restrictions.

#### Sample request

```json
Copiedcurl "https://api.zeptomail.in/v1.1/agents/{agentkey}/short-passwords/{{id}}
-X DELETE
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
```

#### Sample success response

```json
Copied{
  "status": {
    "code": 204,
    "description": "success"
  }
}
```

#### Sample failure response

```json
Copied     {
         "error": {
             "code": "GE_124",
             "message": "No records found"
         },
         "status": "failure"
     }

```
