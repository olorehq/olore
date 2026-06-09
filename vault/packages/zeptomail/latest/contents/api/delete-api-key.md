<!-- source: https://www.zoho.com/zeptomail/help/api/delete-api-key.html -->

# Delete send mail token

## Purpose

This API deletes the send mail token available in the desired Agent.

## Request URL

**Method : DELETE**

https://api.zeptomail.com/v1.1/agents/{agentkey}/apikeys/{{id}}

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

scope=Zeptomail.MailAgents.All

or

scope=Zeptomail.MailAgents.DELETE

**ALL**-This gives full CRUD (Create, Read, Update and Delete) access to all Agent APIs.

**DELETE -** This allows access to perform the DELETE operation alone.

## Path parameter

|     |     |     |
| --- | --- | --- |
| **Parameter name** | **Type** | **Description** |
| agentkey **\*** | String | Also known as Agent alias. It represents the Agent where the send mail token should be deleted. |
| id **\*** | String | The send mail token that can be generated from the SMTP/API section of the Agent. |

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

#### Sample request

```json
Copiedcurl "https://api.zeptomail.in/v1.1/agents/{agentkey}/apikeys/{{id}}
-X DELETE
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
```

#### Sample reponse

```json
Copied{
  "status": {
    "code": 204,
    "description": "success"
  }
}
```
