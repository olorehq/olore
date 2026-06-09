<!-- source: https://www.zoho.com/zeptomail/help/api/edit-suppression-list.html -->

# Edit suppression list

## Purpose

This API allows you to edit the email addresses in the suppression list.

## Request URL

**Method : PUT**

https://api.zeptomail.com/v1.1/suppressions/{zem\_dnd\_type}

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

scope=Zeptomail.Suppressions.All

or

scope=Zeptomail.Suppressions.UPDATE

**ALL** -This gives full CRUD (Create, Read, Update and Delete) access to all suppression APIs.

**UPDATE**\- This allows access to perform the UPDATE operation alone.

## Steps to obtain the Agent key

Select the Agent that you want to connect to your application.

1. Navigate to the SMTP/API tab. Go to the API section.
2. Copy the Agent alias from this section.



**Agents >> API section >> Copy Agent alias**

## Path parameters

|     |     |     |
| --- | --- | --- |
| **Parameter** | **Value** | **Description** |
| zem\_dnd\_type | Email/Domain | Defines the type of suppression data to be edited — whether email or domain.<br>For example, to edit an email address, replace the parameter(zem\_dnd\_type) with "email" in the [request URL](https://www.zoho.com/zeptomail/help/api/edit-suppression-list.html#url). |

## **Request Body**

- **action****\***String



  - To be specified when more than one suppression entry is added.
  - Values can be — reject, suppress or suppress\_tracking. More information on the suppression list actions is available [here](https://www.zoho.com/zeptomail/help/suppression-list.html#Emailsuppression).

- **mailagent\_keys**Array



  - The Agent alias value. Can be obtained using the steps mentioned [here.](https://www.zoho.com/zeptomail/help/api/edit-suppression-list.html#agentkey-steps)

- **description**String



  - Reason for the suppression.

- **values****\***Array



  - The new email address or domain.

**Note:**

\* \- Mandatory parameter

## Failure response code

|     |     |     |
| --- | --- | --- |
| **Value** | **Error** | **Solution** |
| DND\_102 | Suppression data not found | Ensure you have entered the correct value before proceeding. |

#### Sample request

```curl
Copiedcurl "https://api.zeptomail.com/v1.1/suppressions/{email}"
-X PUT
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
{
    "suppression_type":"email",
    "action":"reject",
    "values":["rebecca@zilker.com"],
    "description":"Modifying the suppression action"
    "mailagent_keys":["4e29626b34b4a653"]
}
```

#### Sample response

```json
Copied {
    "data": {
        "modified_time": "03 Jan 2025 10:33 PM",
        "suppression_type": "email",
        "values": [\
            "rebecca@zilker.com"\
        ],
        "action": "reject",
        "description": "testing",
        "category": "manual"
    },
    "status": "success"
}
```

#### Failure response

```json
Copied{
    "error": {
        "code": "DND_102",
        "field": "values",
        "message": "Suppression data not found",
        "value": "[rebecca@zilker.com]"
    },
    "status": "failure"
}
```
