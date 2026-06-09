<!-- source: https://www.zoho.com/zeptomail/help/api/export-logs.html -->

# Export logs

## Purpose

This API allows you to export the desired logs—emails, activity and suppression list.

## Request URL

**Method : POST**

https://api.zeptomail.com/v1.1/{{export\_type}}/exports

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

scope=Zeptomail.Exports.All

or

scope=Zeptomail.Exports.CREATE

**ALL**-This gives full CRUD (Create, Read, Update and Delete) access to all export APIs.

**CREATE -** This allows access to perform the CREATE operations only.

## Steps to obtain the Agent key

The Agent key represents the Agent whose logs you wish to export. The Agent key is the Agent alias available in your ZeptoMail account. To obtain the key:

1. Navigate to the SMTP/API tab. Go to the API section.
2. Copy the Agent alias from this section.



**Agents >> API section >> Copy the Agent alias**

## Path parameters

|     |     |     |
| --- | --- | --- |
| **Parameter name** | **Value** | **Description** |
| export\_type**\*** | **Value:** mail-logs or activity-logs or suppression-list | Type of data to be exported. |

## Request Body

The request body varies for each type of export— [email logs](https://www.zoho.com/zeptomail/help/api/export-logs.html#email-logs), [suppression list logs](https://www.zoho.com/zeptomail/help/api/export-logs.html#suppression-logs) and [activity logs](https://www.zoho.com/zeptomail/help/api/export-logs.html#activity-logs). Use the appropriate values in your request body, based on your preference of export.

## Request body for email logs export

- **date\_from**String



  - Date from which the values are to be fetched.
  - **Format**: DD/MM/YYYY, hh:mm AM/PM. Example: 19/02/2025, 01:00 AM.

- **date\_to**String



  - Date till which the values are to be fetched.
  - **Format**: DD/MM/YYYY, hh:mm AM/PM. Example: 19/02/2025, 01:00 AM.

- **is\_sb**Boolean



  - **Values:** True or False.
  - Specify if you wish to export soft bounce data.

- **is\_hb**Boolean



  - **Values:** True or False.
  - Specify if you wish to export hard bounce data.

- **is\_delivered**Boolean



  - **Values:** True or False.
  - Specify if you wish to export delivered emails' data.

- **is\_mailfailure**Boolean



  - **Values:** True or False.
  - Specify if you wish to export any process failed logs.

- **bounce\_category**String



  - Specifies the type of bounce error encountered in ZeptoMail. The list of bounce errors are mentioned [here](https://www.zoho.com/zeptomail/help/bounce-error.html#analysis-report). You can add the required value in your API call.

- **mailagent\_key**String



  - The Agent alias value. Can be obtained using the steps mentioned [here.](https://www.zoho.com/zeptomail/help/api/export-logs.html#agent-key)

- **password**String



  - The necessary password if you want to password-protect the exported data.

- **from**String



  - The sender whose email logs you wish to export.

- **to**String



  - The recipient whose logs you wish to export.

- **cc**String



  - The cc'd recipients whose data you wish to export.

- **bcc**String



  - The bcc'd recipients whose data you wish to export.

- **subject**String



  - Any email subject based on which you wish to export the files.

- **client\_reference**String



  - The reference id generated for the email.

## Request body for suppression logs export

- **date\_from**String



  - Date from which the values are to be fetched.
  - **Format**: DD/MM/YYYY, hh:mm AM/PM. Example: 19/02/2025, 01:00 AM.

- **date\_to**String



  - Date till which the values are to be fetched.
  - **Format**: DD/MM/YYYY, hh:mm AM/PM. Example: 19/02/2025, 01:00 AM.

- **dndType**String



  - **Values:** email \| domain
  - Represents the type of suppression you wish to export— email or domain.

- **password**String



  - The necessary password if you want to password-protect the exported data.

## Request body for activity logs export

- **date\_from**String



  - Date from which the values are to be fetched.
  - **Format**: DD/MM/YYYY, hh:mm AM/PM. Example: 19/02/2025, 01:00 AM.

- **date\_to**String



  - Date till which the values are to be fetched.
  - **Format**: DD/MM/YYYY, hh:mm AM/PM. Example: 19/02/2025, 01:00 AM.

- **entity**String



  - Represents a section within the ZeptoMail account. For example: IP restriction, Agent, Email template.
  - You can add the desired entity to export the related information.

- **password**String



  - The necessary password if you want to password-protect the exported data.

- **modified\_by**String



  - The user who has performed an action on the entity.

**Note:**

- \* \- Mandatory parameter
- The exported files will be available only for 3 days. We recommend you to download them within that time. You can download the exported files using the [Download Exports API.](https://www.zoho.com/zeptomail/help/api/download-exports.html)

#### Sample request

```json
Copiedcurl "https://api.zeptomail.com/v1.1/{{export_type}}/exports"
-X POST
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
-d
'{
    "date_from":"19/02/2025;10 AM"
     "date_to":"19/07/2025;10AM"
     "is_sb":"true"
     "is_hb":"false"
     "is_delivered":"true"
     "is_mailfailure":"false"
    "bounce_category":"Invalid DNS"
    "mailagent_key":"1bc8a7c7c719f435"
    "password":"***"
    "from":"rebecca@zylker.com"
    "to":"paul@zylker.com"
    "client_reference":"agent-1"
}
```

#### Sample response

```json
Copied"data": [\
        {\
            "created_time": "19 Jul 2025 09:00 AM",\
            "export_type": "mail-logs",\
            "modified_time": "19 Jul 2025 09:00 AM",\
            "is_content_included": false,\
            "file_status": "completed",\
            "file_name": "MailReport - 19 Jul 2025 09:00 AM.zip",\
            "is_downloaded": false,\
            "export_id": "38747230-0711-11f1-9ca1-5254003efefb",\
            "search_query": {\
                "mailagent_name": "All Agents",\
                "is_delivered": true,\
                "date_to": "19 Jul 2025 10:00 AM",\
                "date_from": "19 Feb 2025 10:00 AM"\
            },\
            "expiry_time": "22 Jul 2025 10:00 AM",\
            "created_by": "Rebecca",\
            "file_size": 3952\
        },\
],
    "status": "success"
```
