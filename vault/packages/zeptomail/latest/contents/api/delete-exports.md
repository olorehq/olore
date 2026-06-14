<!-- source: https://www.zoho.com/zeptomail/help/api/delete-exports.html -->

# Delete exports

## Purpose

This API deletes the exported files.

## Request URL

**Method : DELETE**

https://api.zeptomail.com/v1.1/{{export\_type}}/exports?export\_ids

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

scope=Zeptomail.Exports.All

or

scope=Zeptomail.Exports.DELETE

**ALL**-This gives full CRUD (Create, Read, Update and Delete) access to all export APIs.

**DELETE -** This allows access only to perform DELETE operations.

## Path parameters

|     |     |     |
| --- | --- | --- |
| **Parameter name** | **Value** | **Description** |
| export\_type**\*** | **Value:** mail-logs or activity-logs or suppression-list | Type of export information to be obtained. |

## Query parameters

|     |     |     |
| --- | --- | --- |
| **Parameter name** | **Type** | **Description** |
| export\_ids | String | - Represents the unique id that was generated when the files were exported. Use this to delete the desired exports.<br>- You can add multiple export ids by separating them with commas. |

**Note:**

\* \- Mandatory parameter

#### Sample request

```curl
Copiedcurl "https://api.zeptomail.com/v1.1/{{export_type}}/exports?export_ids=123"
-X DELETE
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
```

#### Sample response

```json
Copied{
  "status": {
    "code": 204,
    "description": "success"
  }
}
```
