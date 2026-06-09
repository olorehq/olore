<!-- source: https://www.zoho.com/zeptomail/help/api/get-specific-email-log.html -->

# Fetch specific email details

## Purpose

This API fetches a specific email log using the email reference id.

## Request URL

**Method : GET**

https://api.zeptomail.com /v1.1/email/email-reference/{email-reference}

## OAuth scope

The steps to generate and use OAuth token can be found [here.](https://www.zoho.com/accounts/protocol/oauth.html)

scope=Zeptomail.email.ALL

or

scope=Zeptomail.email.READ

**ALL** -This gives full CRUD (Create, Read, Update and Delete) access to all email logs APIs.

**READ** \- This allows access to perform the READ operation alone.

## Path parameter

|     |     |     |
| --- | --- | --- |
| **Parameter name** | **Type** | **Description** |
| email-reference | String | Message id or Request id of the email |

#### Sample Request

```curl
Copiedcurl "https://api.zeptomail.in/v1.1/email/{email-reference}"
-X GET
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
```

#### Sample Response

```json
Copied     {
       "data": {
         "email_tracking_details": {
           "email_open": {
             "details": [\
               {\
                 "time": "2024-03-14T03:48:29-07:00",\
                 "first_event_time": "2024-03-14T03:48:28-07:00",\
                 "user_agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:59.0) Gecko/20100101 Firefox/59.0"\
               }\
             ],
             "event_count": 1
           },
           "email_link_click": {
             "details": [\
               {\
                 "time": "2024-03-14T03:48:29-07:00",\
                 "first_event_time": "2024-03-14T03:48:28-07:00",\
                 "user_agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:59.0) Gecko/20100101 Firefox/59.0"\
               }\
             ],
             "event_count": 1
           }
         },
         "email_delivery_details": {
           "hardbounce": [\
             {\
               "reason": "mail.com (mxgmxus009) Nemesis ESMTP Service not available No SMTP service IP address is block listed",\
               "recipient": "tim@mail.com",\
               "time": "2024-02-14T13:21:24+05:30",\
               "category": "Policy failure"\
             }\
           ]
         },
         "email_info": {
           "email_reference": "ea36f19a.737a00c139129ee5.m1.aa4f6f50-cb0d-11ee-a6fa-525400d08b0c.18da69822c5@zylkertech.in",
           "mail_type": "send-mail",
           "subject": "Account Confirmation",
           "bounce_address": "bounce@zylkertech.in",
           "from": {
             "address": "alert@zylkertech.in",
             "name": "Rebecca"
           },
           "message_id": "<ea36f19a.737a00c139129ee5.m1.aa4f6f50-cb0d-11ee-a6fa-525400d08b0c.18da69822c5@zylkertech.in>",
           "to": [\
             {\
               "address": "Jon@zylker.com",\
               "name": "Jon"\
             },\
             {\
               "address": "george@zylker.com",\
               "name": "George"\
             }\
           ],
           "processed_time": "2024-02-14T13:20:04+05:30",
           "mailagent_key": "ea36f19a.737a00c139129ee5.a3a6bf2fbcae297",
           "status": "processed"
         },
         "request_id": "ea36f19a.737a00c139129ee5.m1.aa4f6f50-cb0d-11ee-a6fa-525400d08b0c.18da69822c5"
       },
       "status": "success"
     }


```

Show full

Show less
