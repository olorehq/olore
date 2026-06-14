<!-- source: https://www.zoho.com/zeptomail/help/api/fetch-exports.html -->

# Fetch exported files

## Purpose

This API lists all the exported files in an account.

## Request URL

**Method : GET**

https://api.zeptomail.eu/v1.1/{{export\_type}}/exports

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

scope=Zeptomail.Exports.All

or

scope=Zeptomail.Exports.READ

**ALL**-This gives full CRUD (Create, Read, Update and Delete) access to all export APIs.

**READ -** This allows access only to perform READ operations.

## Path parameters

|     |     |     |
| --- | --- | --- |
| **Parameter name** | **Value** | **Description** |
| export\_type**\*** | **Value**: mail-logs or activity-logs or suppression-list | Type of export information to be obtained. |

**Note:**

\* \- Mandatory parameter

#### Sample request

```curl
Copiedcurl "https://api.zeptomail.eu/v1.1/{{export_type}}/exports"
-X GET
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
```

#### Sample response

```json
Copied{
    "data": [\
        {\
            "created_time": "11 Feb 2026 11:46 AM",\
            "export_type": "mail-logs",\
            "modified_time": "11 Feb 2026 11:46 AM",\
            "is_content_included": false,\
            "file_status": "completed",\
            "file_name": "MailReport - 11 Feb 2026 11:46 AM.zip",\
            "is_downloaded": false,\
            "export_id": "38747230-0711-11f1-9ca1-5254003efefb",\
            "search_query": {\
                "mailagent_name": "All Agents",\
                "is_delivered": true,\
                "date_to": "11 Feb 2026 11:46 AM",\
                "date_from": "27 Jan 2026 11:46 AM"\
            },\
            "expiry_time": "14 Feb 2026 11:46 AM",\
            "created_by": "Rebecca",\
            "file_size": 3952\
        },\
\
    ],
    "status": "success"
}
```
