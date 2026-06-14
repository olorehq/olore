<!-- source: https://www.zoho.com/zeptomail/help/api/generate-short-password.html -->

# Generate SMTP short password

## Purpose

This API generates a new SMTP short password for the desired Agent. An Agent can have upto **2** short passwords.

## Request URL

**Method : POST**

https://api.zeptomail.com/v1.1/agents/{agentkey}/short-passwords

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

scope=Zeptomail.MailAgents.All

or

scope=Zeptomail.MailAgents.CREATE

**ALL**-This gives full CRUD (Create, Read, Update and Delete) access to all Agent APIs.

**CREATE -** This allows access only to the CREATE operation.

## Path parameter

|     |     |     |
| --- | --- | --- |
| **Parameter name** | **Type** | **Description** |
| agentkey **\*** | String | Also known as Agent alias. It represents the Agent where the short password should be generated. |

## Steps to generate the Agent key

Select the Agent that you want to connect to your application.

1. Navigate to the SMTP/API tab. Go to the API section.
2. Copy the Agent alias from this section.



**Agents >> API section >> Copy the Agent alias**

**Note:**

\* \- Mandatory parameter

## Error codes

|     |     |
| --- | --- |
| **Code** | **Message** |
| MA\_101 | Invalid Agent input |
| GE\_117 | Threshold reached |

**Note**

Some applications do not allow lengthy passwords and require shorter ones. Only generate, the less secure shorter passwords if you are using applications with such restrictions.

#### Sample request

```json
Copiedcurl "https://api.zeptomail.in/v1.1/agents/{agentkey}/short-passwords
-X POST
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
```

#### Sample success response

```json
Copied     {
         "data": {
             "created_time": "06 Jun 2023 08:11 PM",
             "password": "T5***",
             "id": "118fe8fdb0647",
             "username": "emailappsmtp.."
         },
         "status": "success"
     }

```

#### Sample failure response

```json
Copied     {
         "error": {
             "code": "GE_117",
             "message": "threshold reached"
         },
         "status": "failure"
     }

```
