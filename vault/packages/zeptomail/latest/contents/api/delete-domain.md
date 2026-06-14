<!-- source: https://www.zoho.com/zeptomail/help/api/delete-domain.html -->

# Delete domain

## Purpose

This API deletes a domain added to the ZeptoMail account.

## Request URL

**Method : DELETE**

https://api.zeptomail.com/v1.1/domains/{domain\_key}

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

scope=Zeptomail.Domains.All

or

scope=Zeptomail.Domains.DELETE

**ALL**-This gives full CRUD (Create, Read, Update and Delete) access to all domain APIs.

**DELETE** \- This allows access only to the DELETE operation.

## Path parameters

|     |     |     |
| --- | --- | --- |
| Parameter | Type | Description |
| domain\_key \* | String | Identification key of the domain to be edited. This key can be obtained using the [GET domains API](https://www.zoho.com/zeptomail/help/api/list-all-domains.html). |

**Note:**

\* \- Mandatory parameter

#### Sample request

```curl
Copiedcurl "https://api.zeptomail.in/v1.1/domains/{domain_key}"
-X DELETE
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
```

#### Success response

```en
CopiedSuccess response code: 204
```

#### Failure response parameter

```json
Copied     {
         "error":
         {
             "code": "DE_111",
             "message": "Domain verified in another account"
         },
         "status": "failure"
     }

```
