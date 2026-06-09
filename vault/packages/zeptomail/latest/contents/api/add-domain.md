<!-- source: https://www.zoho.com/zeptomail/help/api/add-domain.html -->

# Add domain

## Purpose

This API adds a new domain to the ZeptoMail account.

## Request URL

**Method : POST**

https://api.zeptomail.com/v1.1/domains

## OAuth scope

**The steps to generate and use OAuth token can be found** [**here.**](https://www.zoho.com/accounts/protocol/oauth.html)

scope=Zeptomail.Domains.All

or

scope=Zeptomail.Domains.CREATE

**ALL**-This gives full CRUD (Create, Read, Update and Delete) access to all domain APIs.

**CREATE -** This allows access only to CREATE operations.

## Steps to generate the Agent key

Select the Agent that you want to connect to your application.

1. Navigate to the SMTP/API tab. Go to the API section.
2. Copy the Agent alias from this section.



**Agents >> API section >> Copy the Agent alias**

## **Request Body (JSON object)**

- **domain\_name****\***String



  - Name of the domain to be added. (Maximum length= **100** characters).

- **mailagent\_keys****\***Array



  - Represents the Agent(s) with which the domain(s) should be associated. This is also known as Agent alias.

- **sub\_domain\_prefix****\***String



  - Prefix of the subdomain that will be used to capture bounced emails. (Maximum length= **100** characters).

**Note:**

\* \- Mandatory parameter

#### Sample request

```curl
Copiedcurl "https://api.zeptomail.in/v1.1/domains"
-X POST
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
-d '{
    "domain_name": "zylker.com",
    "sub_domain_prefix": "bounce",
    "mailagent_keys":
    [\
        "5a57413991a0a232"\
    ]
}
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
