<!-- source: https://www.zoho.com/zeptomail/help/api/list-api-keys.html -->

# List send mail token

## Purpose

This API lists the send mail token of the desired Agent.

## Request URL

**Method : GET**

https://api.zeptomail.com/v1.1/agents/{agentkey}/apikeys

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

scope=Zeptomail.MailAgents.All

or

scope=Zeptomail.MailAgents.READ

**ALL**-This gives full CRUD (Create, Read, Update and Delete) access to all Agent APIs.

**READ -** This allows access only to the READ operation.

## Path parameter

|     |     |     |
| --- | --- | --- |
| **Parameter name** | **Type** | **Description** |
| agentkey **\*** | String | Also known as Agent alias. It represents the Agent whose send mail token should be obtained. |

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

#### Sample request

```json
Copiedcurl "https://api.zeptomail.in/v1.1/agents/{agentkey}/apikeys
-X GET
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
```

#### Sample success response

```json
Copied{
    "data": [\
        {\
            "created_time": "06 Jun 2023 07:15 PM",\
            "apikey": "OlyO55***",\
            "id": "4b960e532bb95634",\
            "username": "emailapikey"\
        }\
    ],
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
