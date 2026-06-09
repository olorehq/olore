<!-- source: https://www.zoho.com/zeptomail/help/api/add-suppression-list.html -->

# Add to the suppression list

## Purpose

This API adds email addresses to the suppression list to prevent further email sending to them.

## Request URL

**Method : POST**

https://api.zeptomail.com/v1.1/suppressions/{zem\_dnd\_type}

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

scope=Zeptomail.Suppressions.All

or

scope=Zeptomail.Suppressions.CREATE

**ALL** -This gives full CRUD (Create, Read, Update and Delete) access to all suppression APIs.

**CREATE**\- This allows access to perform the CREATE operation alone.

## Steps to obtain the Agent key

Select the Agent that you want to connect to your application.

1. Navigate to the SMTP/API tab. Go to the API section.
2. Copy the Agent alias from this section.



**Agents >> API section >> Copy Agent alias**

## Path parameters

|     |     |     |
| --- | --- | --- |
| **Parameter** | **Value** | **Description** |
| zem\_dnd\_type | Email/Domain | Defines the type of suppression data to be added — whether email or domain. <br>For example, to add an email address to the list, replace the parameter(zem\_dnd\_type) with "email" in the [request URL](https://www.zoho.com/zeptomail/help/api/add-suppression-list.html#url). |

## **Request Body**

- **action****\***String



  - To be specified when more than one suppression entry is added. Values can be — reject, suppress or suppress\_tracking. More information on this is available [here.](https://www.zoho.com/zeptomail/help/suppression-list.html#Emailsuppression)

- **mailagent\_keys**Array



  - The Agent alias value. Can be generated using the steps mentioned [here.](https://www.zoho.com/zeptomail/help/api/add-suppression-list.html#steps)

- **description**String



  - Reason for the suppression.

- **values****\***Array



  - The email address or domain to be suppressed, whichever is applicable.

**Note:**

\* \- Mandatory parameter

## Failure response code

|     |     |     |
| --- | --- | --- |
| **Value** | **Error** | **Solution** |
| DND\_101 | Suppression data already exists | Cross-verify if the domain or email address is already present in the suppression list before adding it to the list. |

#### Sample request

```curl
Copiedcurl "https://api.zeptomail.com/v1.1/suppressions/{email}"
-X POST
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
{
    "suppression_type":"email",
    "action":"suppress",
    "values":["rebecca@zilker.com"],
    "description":"Suppress the email address",
    "mailagent_keys":["4e29626b34b4a653"]
}
```

#### Sample response

```json
Copied{
    "data": {
        "modified_time": "03 Jan 2025 10:31 PM",
        "suppression_type": "email",
        "values": [\
            "rebecca@zilker.com"\
        ],
        "action": "suppress",
        "description": "Suppress the email address",
        "mailagent_keys": [\
            "4e29626b34b4a653"\
        ],
        "category": "manual"
    },
    "status": "success"
}
```

#### Sample Failure response

```json
Copied{
    "error": {
        "code": "DND_101",
        "field": "values",
        "message": "Suppression data already exist",
        "value": "[rebecca@zilker.com]"
    },
    "status": "failure"
}
```
