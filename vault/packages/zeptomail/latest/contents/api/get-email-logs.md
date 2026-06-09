<!-- source: https://www.zoho.com/zeptomail/help/api/get-email-logs.html -->

# Fetch email logs

## Purpose

This API fetches the email logs based on the given search criteria(s).

## Request URL

**Method : GET**

https://api.zeptomail.com/v1.1/email

## OAuth scope

The steps to generate and use OAuth token can be found [here.](https://www.zoho.com/accounts/protocol/oauth.html)

scope=Zeptomail.email.ALL

or

scope=Zeptomail.email.READ

**ALL** -This gives full CRUD (Create, Read, Update and Delete) access to all email logs APIs.

**READ** \- This allows access to perform the READ operation alone.

## Path parameter

https://api.zeptomail.com/v1.1/email/? <search criteria and its corresponding value>

You can search for multiple criteria by separating them with the '&' symbol. For example: https://api.zeptomail.com/v1.1/email/? <search criteria 1& search criteria 2>

## Request body

You can use the desired criteria from the list below, in the API request. The API response will contain the search value as well as the listed parameters.

- **mailagent\_key**String



  - Agent key obtained from the SMTP/API section.
  - To obtain: **Agent > SMTP/API section > API > Copy Agent alias.**

- **request\_id**String



  - Request id of the email.

- **date\_from**String



  - Date from which the values are to be fetched.
  - **Format:** DD/MM/YYYY, hh:mm AM/PM. Example: 19/02/2025, 01:00 AM.

- **date\_to**String



  - Date till which the values are to be fetched
  - **Format:** DD/MM/YYYY, hh:mm AM/PM. Example: 19/02/2025, 01:00 AM.

- **from**String



  - The FROM address whose details are to be obtained.

- **to**String



  - Recipient email address.

- **cc**String



  - The CC'd recipient email address.

- **bcc**String



  - The BCC'd recipient email address.

- **recipient**String



  - The FROM address whose details are to be obtained.

- **offset**Int



  - Number of records to skip from the top.

- **limit** Int



  - Number of records to be displayed.

- **subject**String



  - Email subject.

- **client\_reference**String



  - Client\_reference id of the email.

- **is\_hb**Boolean



  - Filters out all the hard bounced emails and displays the rest.

- **is\_sb**Boolean



  - Filters out all the soft bounced emails and displays the rest.

- **is\_mailfailure**Boolean



  - Filters out all the processed failed emails and displays the rest.

- **is\_delivered**Boolean



  - Filters out all the delivered emails and displays the the rest.

#### Sample request

```curl
Copiedcurl "https://api.zeptomail.in/v1.1/email/?{search-criteria}"
-X GET
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
```

#### Sample response

```json
Copied     {
       "metadata": {
         "offset": 0,
         "count": 3,
       },
       "data": {
         "logs": [\
           {\
             "email_tracking_details": {},\
             "email_delivery_details": {},\
             "email_info": {\
               "email_reference": "ea36f19a.737a00c139129ee5.m1.e2278fa0-ecc5-11ee-90a5-525400256d50.18e83943d9a@zylkertech.in",\
               "mail_type": "Welcome email",\
               "subject": "Welcome to the service!",\
               "bounce_address": "bounce@zylkertech.in",\
               "from": {\
                 "address": "one@zylkertech.in"\
               },\
               "message_id": "<ea36f19a.737a00c139129ee5.m1.e2278fa0-ecc5-11ee-90a5-525400256d50.18e83943d9a@zylkertech.in>",\
               "to": [\
                 {\
                   "address": "rebecca@zylker.com"\
                 }\
               ],\
               "processed_time": "2024-03-28T11:11:54+05:30",\
               "mailagent_key": "ea36f19a.737a00c139129ee5.a3a6bf2fbcae297",\
               "status": "processed"\
             },\
             "request_id": "ea36f19a.737a00c139129ee5.t1.e2278fa0-ecc5-11ee-90a5-525400256d50.18e83943d9a"\
           },\
           {\
             "email_tracking_details": {},\
             "email_delivery_details": {},\
             "email_info": {\
               "email_reference": "ea36f19a.737a00c139129ee5.m1.464e7de0-ecbc-11ee-90a5-525400256d50.18e835544be@zylkertech.in",\
               "mail_type": "Welcome email",\
               "subject": "Welcome to the service!",\
               "bounce_address": "bounce@zylkertech.in",\
               "from": {\
                 "address": "one@zylkertech.in"\
               },\
               "message_id": "<ea36f19a.737a00c139129ee5.m1.464e7de0-ecbc-11ee-90a5-525400256d50.18e835544be@zylkertech.in>",\
               "to": [\
                 {\
                   "address": "jon@zylker.com"\
                 }\
               ],\
               "processed_time": "2024-03-28T10:03:07+05:30",\
               "mailagent_key": "ea36f19a.737a00c139129ee5.a3a6bf2fbcae297",\
               "status": "processed"\
             },\
             "request_id": "ea36f19a.737a00c139129ee5.t1.464e7de0-ecbc-11ee-90a5-525400256d50.18e835544be"\
           },\
           {\
             "email_tracking_details": {},\
             "email_delivery_details": {},\
             "email_info": {\
               "email_reference": "ea36f19a.737a00c139129ee5.m1.2bf6deb0-ecbc-11ee-90a5-525400256d50.18e8354981b@zylkertech.in",\
               "mail_type": "Welcome email",\
               "subject": "Welcome to the service!",\
               "bounce_address": "bounce@zylkertech.in",\
               "from": {\
                 "address": "one@zylkertech.in"\
               },\
               "message_id": "<ea36f19a.737a00c139129ee5.m1.2bf6deb0-ecbc-11ee-90a5-525400256d50.18e8354981b@zylkertech.in>",\
               "to": [\
                 {\
                   "address": "rebecca@zylker.com"\
                 }\
               ],\
               "processed_time": "2024-03-28T10:02:23+05:30",\
               "mailagent_key": "ea36f19a.737a00c139129ee5.a3a6bf2fbcae297",\
               "status": "processed"\
             },\
             "request_id": "ea36f19a.737a00c139129ee5.t1.2bf6deb0-ecbc-11ee-90a5-525400256d50.18e8354981b"\
           }\
         ]
       },
       "status": "success"
     }

```
