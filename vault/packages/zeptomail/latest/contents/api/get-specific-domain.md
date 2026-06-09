<!-- source: https://www.zoho.com/zeptomail/help/api/get-specific-domain.html -->

# Get specific domain details

## Purpose

This API returns a specific domain using its domain\_key. This key can be obtained using the [GET domains API](https://www.zoho.com/zeptomail/help/api/list-all-domains.html).

## Request URL

**Method : GET**

https://api.zeptomail.com/v1.1/domains/{domain\_key}

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

Any one of the following scopes can be used to access this API

scope=Zeptomail.Domains.All

or

scope=Zeptomail.Domains.READ

**ALL**\- This gives full CRUD (Create, Read, Update and Delete) access to all domain APIs.

**READ -** This allows access only to READ operations.

## Path parameters

|     |     |     |
| --- | --- | --- |
| Parameter | Type | Description |
| domain\_key\* | String | Identification key of the domain to be fetched. This key can be obtained using the [GET domains API](https://www.zoho.com/zeptomail/help/api/list-all-domains.html). |

**Note:**

\* \- Mandatory parameter

#### Sample request

```curl
Copiedcurl "https://api.zeptomail.in/v1.1/domains/{domain_key}
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
                 "domain_name": "mail.zylker.com",\
                 "domain_key": "2e625d9d42a1",\
                 "dkim":\
                 {\
                     "public_key": "k=rsa; p=MI**",\
                     "host": "15131721._domainkey.mail.zylker.com",\
                     "verified_time": "29 May 2024 07:30 PM",\
                     "selector": 15131721,\
                     "status": "verified"\
                 },\
                 "cname":\
                 {\
                     "host": "bounce.mail.zylker.com",\
                     "cname_record": "cluster90.zeptomail.com",\
                     "status": "unverified"\
                 },\
                 "is_restricted_senders": false,\
                 "status": "unverified"\
             }\
         ],
         "status": "success"
     }

```
