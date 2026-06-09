<!-- source: https://www.zoho.com/zeptomail/help/api/get-suppression-list.html -->

# Get suppression list details

## Purpose

This API allows you to obtain the list of email address/domains added to the suppression list.

## Request URL

**Method : GET**

https://api.zeptomail.com/v1.1/suppressions/{zem\_dnd\_type}

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

scope=Zeptomail.Suppressions.All

or

scope=Zeptomail.Suppressions.READ

**ALL** -This gives full CRUD (Create, Read, Update and Delete) access to all suppression APIs.

**READ** \- This allows access to perform the READ operation alone.

## Steps to generate the Agent key

Select the Agent that you want to connect to your application.

1. Navigate to the SMTP/API tab. Go to the API section.
2. Copy the Agent alias from this section.



**Agents >> API section >> Copy Agent alias**

## Path value

**https://api.zeptomail.com/v1.1/suppressions/{zem\_dnd\_type}**  \- Fetches all the data.

**https://api.zeptomail.com//v1.1/suppressions/email?limit=10&offset=2&mailagent\_key=ea3.erf.te45rfb** \- Fetches specified entries alone.

## Path parameters

- **zem\_dnd\_type****\***Email/Domain



  - Defines the type of suppression data to be fetched — whether email or domain.
  - For example, to obtain an email address, replace the parameter(zem\_dnd\_type) with "email" in the [request URL](https://www.zoho.com/zeptomail/help/api/get-suppression-list.html#url).

- **mailagent\_keys**Array



  - Agent alias value. Can be obtained using the steps mentioned [here](https://www.zoho.com/zeptomail/help/api/get-suppression-list.html#agent-key).

- **limit**Int



  - Number of suppression entries to be fetched.
  - Default value: 100.

- **offset**Int



  - Place value of the data in the list. Offset value indicates the starting point of the data search in the list.
  - Default value: 0

- **date\_from**date



  - Entry (date and time) from when the data should be fetched.
  - Format: dd/mm/yyyy, hh:mm AM/PM. For example: 01/12/2025, 01:00 PM.

- **date\_to**date



  - Entry (date and time) till when the data should be fetched.
  - Format: dd/mm/yyyy, hh:mm AM/PM. For example: 01/12/2025, 01:00 PM.

**Note:**

\* \- Mandatory parameter

#### Sample request

```curl
Copiedcurl "https://api.zeptomail.in/v1.1/suppressions/{email}"
-X GET
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
{
```

#### Sample response

```json
Copied{

   "data": [\
\
       {\
\
           "modified_time": "01 Mar 2024 04:44 PM",\
\
           "action": "suppress",\
\
           "description": "",\
\
           "mailagent_keys": [\
\
               "7a4b2d4ae1b57728"\
\
           ],\
\
           "category": "manual",\
\
           "value": "reese@zilker.com"\
\
       },\
\
       {\
\
           "modified_time": "01 Mar 2024 04:23 PM",\
\
           "action": "suppress",\
\
           "description": "Manual suppression",\
\
           "mailagent_keys": [\
\
               "7a4b2d4ae1b57728"\
\
           ],\
\
           "category": "manual",\
\
           "value": "rachel@zilker.com"\
\
       },\
\
       {\
\
           "modified_time": "20 Feb 2024 07:54 PM",\
\
           "action": "reject",\
\
           "description": "Suppression data",\
\
           "category": "manual",\
\
           "value": "rob@zilker.com"\
\
       }\
\
   ],

   "status": "success"

}
```
