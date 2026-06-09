<!-- source: https://www.zoho.com/zeptomail/help/api/verify-domain.html -->

# Validate domain verification

## Purpose

This API helps validate if a domain is verified in your ZeptoMail account. If it is verified, then the status is returned as "verified", else the status will be "unverified".

## Request URL

**Method : PUT**

https://api.zeptomail.com/v1.1/domains/{domain\_key}/verify

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

Any one of the following scopes can be used to access this API

scope=Zeptomail.Domains.All

or

scope=Zeptomail.Domains.UPDATE

**ALL**\- This gives full CRUD (Create, Read, Update and Delete) access to all domain APIs.

**UPDATE -** This allows access only to domain update operations.

## Path parameters

|     |     |     |
| --- | --- | --- |
| Parameter | Type | Description |
| domain\_key\* | String | Identification key of the domain to be fetched. This value can be obtained using the [GET domains API.](https://www.zoho.com/zeptomail/help/api/list-all-domains.html) |

**Note:**

\* \- Mandatory parameter

#### Sample request

```curl
Copiedcurl "https://api.zeptomail.in/v1.1/domains/{domain_key}/verify
-X PUT
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
```

#### Sample response

```json
Copied     {
         "data":
         {
             "associated_mailagents":
             [\
                 "33cf52b1ecde1da0"\
             ],
             "domain_name": "domains.zylker.com",
             "domain_key": "1c7a8298da361",
             "dkim":
             {
                 "public_key": "k=rsa; p=MIG**",
                 "host": "5203937._domainkey.domains.zylker.com",
                 "selector": 5203937,
                 "status": "unverified"
             },
             "cname":
             {
                 "host": "bounce.domains.zylker.com",
                 "cname_record": "cluster90.zeptomail.com",
                 "status": "unverified"
             },
             "is_restricted_senders": false,
             "status": "unverified"
         },
         "status": "success"
     }

```
