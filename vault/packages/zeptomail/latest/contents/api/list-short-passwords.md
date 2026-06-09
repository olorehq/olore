<!-- source: https://www.zoho.com/zeptomail/help/api/list-short-passwords.html -->

# List SMTP short passwords

## Purpose

This API lists the short SMTP password(weaker credentials)available in an Agent.

## Request URL

**Method : GET**

https://api.zeptomail.com/v1.1/agents/{agentkey}/short-passwords

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
| agentkey **\*** | String | Also known as Agent alias. It specifies the Agent whose password should be retrieved |

## Steps to generate the Agent key

Select the Agent that you want to connect to your application.

1. Navigate to the SMTP/API tab. Go to the API section.
2. Copy the Agent alias from this section.



**Agents >> API section >> Copy Agent alias**

**Note:**

\* \- Mandatory parameter

## Error codes

|     |     |
| --- | --- |
| **Code** | **Message** |
| MA\_101 | Invalid Agent input |

**Note**

Some applications do not allow lengthy passwords and require shorter ones. Only generate the less secure shorter passwords if you are using applications with such restrictions.

#### Sample request

```json
Copiedcurl "https://api.zeptomail.in/v1.1/agents/{agentkey}/short-passwords
-X GET
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
```

#### Sample success response

```json
Copied     {
         "data": [\
             {\
                 "created_time": "06 Jun 2023 06:19 PM",\
                 "password": "m1***",\
                 "id": "17cceddd98355",\
                 "username": "emailappsmtp.."\
             }\
         ],
         "status": "success"
     }

```

#### Sample failure response

```json
Copied     {
         "error": {
             "code": "MA_101",
             "message": "Invalid agent input"
         },
         "status": "failure"
     }

```
