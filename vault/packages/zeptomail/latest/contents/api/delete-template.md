<!-- source: https://www.zoho.com/zeptomail/help/api/delete-template.html -->

# Delete template

## Purpose

This API deletes the chosen template.

## Request URL

**Method : DELETE**

https://api.zeptomail.com/v1.1/agents/{agent-alias}/templates{template-key}

## OAuth scope

Any one of the following scopes can be used to access this API

scope=Zeptomail.MailTemplates.All

or

scope=Zeptomail.MailTemplates.DELETE

**ALL**\- This will give the basic CRUD access too all the email templates APIs.

The steps to generate and use OAuth token can be found [here.](https://www.zoho.com/accounts/protocol/oauth.html)

## Path parameters

|     |     |     |
| --- | --- | --- |
| **Parameter** | **Type** | **Description** |
| agent-alias | String | Unique alias value given to the Agent. It is available in the **API** section of your Agent. |
| template-key | String | Unique key for the template. It is available in the template section within the Agent. |

Ensure that the template you select belongs to the Agent you are currently using, since templates are specific to each Agent.

#### Sample request

```json
Copiedcurl "https://api.zeptomail.com/v1.1/agents/{agent-alias}/templates/{{template-key}}\"
-X DELETE
-H "Authorization : Zoho-oauthtoken ***"\
-H "Content-Type : application/json" \
```
