<!-- source: https://www.zoho.com/zeptomail/help/api/download-exports.html -->

# Download exported files

## Purpose

This API downloads the files scheduled for export in the chosen category— email logs, suppression lists and activity logs.

## Request URL

**Method : GET**

https://api.zeptomail.com/v1.1/{export\_type}/exports/{export\_id}/download

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

scope=Zeptomail.Exports.All

or

scope=Zeptomail.Exports.READ

**ALL**-This gives full CRUD (Create, Read, Update and Delete) access to all export APIs.

**READ -** This allows access to perform the READ operation only.

## Path parameters

|     |     |     |
| --- | --- | --- |
| **Parameter name** | **Type** | **Description** |
| export\_type**\*** | **Values**: mail-logs or activity-logs or suppression-list. | Type of export information to be obtained. |
| export\_id**\*** | String | Represents the unique id that was generated when the files were exported. Use this to specify the export data to be downloaded. |

**Note:**

\* \- Mandatory parameter

#### Sample request

```curl
Copiedcurl "https://api.zeptomail.com/v1.1/{export_type}/exports/{export_id}/download"
-X GET
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
```
