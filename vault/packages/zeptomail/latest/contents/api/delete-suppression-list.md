<!-- source: https://www.zoho.com/zeptomail/help/api/delete-suppression-list.html -->

# Delete suppression list entry

## Purpose

This API removes email addresses or domains from the suppression list.

## Request URL

**Method : DELETE**

https://api.zeptomail.com/v1.1/suppressions/{zem\_dnd\_type}

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

scope=Zeptomail.Suppressions.All

or

scope=Zeptomail.Suppressions.DELETE

**ALL** -This gives full CRUD (Create, Read, Update and Delete) access to all suppression APIs.

**DELETE** \- This allows access to perform the DELETE operation alone.

## Path parameters

|     |     |     |
| --- | --- | --- |
| **Parameter** | **Type** | **Description** |
| zem\_dnd\_type | Email/Domain | Defines the type of suppression data to be deleted — whether email or domain.<br>For example, to delete an email address from the list, replace the parameter(zem\_dnd\_type) with "email" in the [request URL](https://www.zoho.com/zeptomail/help/api/delete-suppression-list.html#req-url). |

## **Request Body**

- **values****\***Array



  - The email address or domain to be deleted.

**Note:**

\* \- Mandatory parameter

## Failure response parameter

|     |     |     |
| --- | --- | --- |
| **Value** | **Error** | **Solution** |
| DND\_102 | Suppression data not found | Ensure you have entered the correct value before proceeding. |

#### Sample request

```curl
Copiedcurl "https://api.zeptomail.in/v1.1/suppressions/{email}"
-X DELETE
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
{

{
    "values":["rebecc@zilker.com"]
}
```

#### Success code

```en
Copied204
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
