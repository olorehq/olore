<!-- source: https://www.zoho.com/zeptomail/help/api/generate-api-keys.html -->

# Generate send mail token

## Purpose

This API generates a new send mail token for the desired Agent. An Agent can have **2** send mail tokens in total.

## Request URL

**Method : POST**

https://api.zeptomail.com/v1.1/agents/{agentkey}/apikeys

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
| agentkey **\*** | String | Also known as Agent alias. It represents the Agent where the new send mail token should be generated. |

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

#### Sample request

```json
Copiedcurl "https://api.zeptomail.in/v1.1/agents/{agentkey}/apikeys
-X POST
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
```

#### Sample success response

```json
Copied     {
         "data": {
             "created_time": "06 Jun 2023 08:21 PM",
             "password": "T5***",
             "id": "118fe**",
             "username": "emailappsmtp..."
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
