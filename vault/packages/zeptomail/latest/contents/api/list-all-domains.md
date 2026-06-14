<!-- source: https://www.zoho.com/zeptomail/help/api/list-all-domains.html -->

# List all domains

## Purpose

This API lists all the domains added to your ZeptoMail account.

## Request URL

**Method : GET**

https://api.zeptomail.com/v1.1/domains

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

Any one of the following scopes can be used to access this API

scope=Zeptomail.Domains.All

or

scope=Zeptomail.Domains.READ

**ALL**-This gives full CRUD (Create, Read, Update and Delete) access to all domain APIs.

**READ -** This allows access only to READ operations.

### Note

The **domain\_key** obtained in this API will be used in the APIs to [validate verification](https://www.zoho.com/zeptomail/help/api/verify-domain.html), [list](https://www.zoho.com/zeptomail/help/api/get-specific-domain.html), [edit](https://www.zoho.com/zeptomail/help/api/edit-domain.html) and [delete](https://www.zoho.com/zeptomail/help/api/delete-domain.html) domains.

#### Sample request

```curl
Copiedcurl "https://api.zeptomail.in/v1.1/domains
-X GET
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
```

#### Sample response

```json
Copied     {
         "data":
         [\
             {\
                 "associated_mailagents":\
                 [\
                     "5a57413991a0a232"\
                 ],\
                 "domain_name": "zylker.com",\
                 "domain_key": "2e625d9d42a1",\
                 "is_restricted_senders": false,\
                 "status": "unverified"\
             },\
             {\
                 "associated_mailagents":\
                 [\
                     "5a57413991a0a232"\
                 ],\
                 "domain_name": "mail.zylker.com",\
                 "domain_key": "2e625d9d42a1",\
                 "is_restricted_senders": true,\
                 "status": "verified"\
             }\
         ],
         "status": "success"
     }

```
