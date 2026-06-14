<!-- source: https://www.zoho.com/zeptomail/help/api/edit-domain.html -->

# Edit domain

## Purpose

This API edits a domain available in the ZeptoMail account.

## Request URL

**Method : PUT**

https://api.zeptomail.com/v1.1/domains/{domain\_key}

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

scope=Zeptomail.Domains.All

or

scope=Zeptomail.Domains.UPDATE

**ALL**-This gives full CRUD (Create, Read, Update and Delete) access to all domain APIs.

**UPDATE -** This allows access only to UPDATE operations.

## Steps to generate the Agent key

Select the Agent that you want to connect to your application.

1. Navigate to the SMTP/API tab. Go to the API section.
2. Copy the Agent alias from this section.



**Agents >> API section >> Copy the Agent alias**

## Path parameters

|     |     |     |
| --- | --- | --- |
| Parameter name | Type | Description |
| domain\_key**\*** | String | Identification key of the domain to be edited. This key can be obtained using the [GET domains API](https://www.zoho.com/zeptomail/help/api/list-all-domains.html). |

## **Request Body (JSON object)**

- **new\_domain**String



  - Name of the domain to be edited. (Maximum length= **100** characters).

- **new\_sub\_domain\_prefix**String



  - New prefix of the subdomain that is edited. (Maximum length= **100** characters).

- **associate\_mailagents**JSON array



  - Agent(s) with which the domain should be associated.

- **unassociate\_mailagents**JSON array



  - Agent(s) from which the domain should be disassociated.

**Note:**

\* \- Mandatory parameter

#### Sample request

```curl
Copiedcurl "https://api.zeptomail.in/v1.1/domains/{domain_key}"
-X PUT
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
-d
'{
    "new_domain": "mailer.zylker.com",
    "new_sub_domain_prefix": "noreply",
    "associate_mailagents":
    [\
        "5a57413991a0a222",\
        "5a54523991a0a222"\
    ],
    "unassociate_mailagents":
    [\
        "5a55413331a0a222",\
        "5a56523092a0a222"\
    ]
}'
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
                 "public_key": "k=rsa; p=MI***",
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
