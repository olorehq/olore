<!-- source: https://www.zoho.com/zeptomail/help/agents.html -->

# Agents in ZeptoMail

An Agent in ZeptoMail is used to segment the outgoing [transactional emails](https://www.zoho.com/zeptomail/) based on their purpose, application, type and more. This ensures separate channels for each category, ensuring better management and organization. You can associate one or more domains to each Agent for sending out emails.

Note

- A maximum of **50** Agents can be created for your ZeptoMail account. If you require additional Agents, reach out to us at support@zeptomail.com.
- You can add and use up to **100 domains** in your ZeptoMail account.
- The maximum number of recipients you can add in your email (which includes to, cc and bcc fields) is **500**.
- The maximum size of the email you can send including the headers, in-line images, and attachments is **15MB**.

#### Table of Contents

- [Create an Agent](https://www.zoho.com/zeptomail/help/agents.html#create)
- [Sections of an Agent](https://www.zoho.com/zeptomail/help/agents.html#sections)
- [Agent setting](https://www.zoho.com/zeptomail/help/agents.html#masetting)
- [Blocked Agent](https://www.zoho.com/zeptomail/help/agents.html#blocked-mail-agent)
- [Points to remember​](https://www.zoho.com/zeptomail/help/agents.html#points-to-remember)

## Create an Agent

By default an Agent will be created during the account creation process. To create additional Agents, follow the instructions below:

1. Log in to your [ZeptoMail account](https://zeptomail.zoho.com/).
2. Click the **Add Agent** icon near **Agents** in the _left panel_.



![Add agent](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/agent-add.png)

3. The **Add Agent** pop-up appears.
4. Provide the **Agent Name**, **Domain**, and **Description** for the new Agent. You can associate multiple domains with an Agent.



![Add agent values](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/agent-values.png)

5. Click **Add** to create the new Agent.

Note

**Sandbox mode:** When you create a new Agent, you will find a checkbox to create a sandbox Agent. Sandbox Agents are dummy Agents that do not deliver any emails to the recipient and are meant for testing outgoing emails and their performance. You can find more information about them [here](https://www.zoho.com/zeptomail/help/agent-sandbox.html).

![Agent sandbox](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/agent-sandbox.png)

## Sections of an Agent

Each Agent has multiple sections to help you manage sending, domains and tracking.

|     |     |
| --- | --- |
| **Section** | **Purpose** |
| Overview | View email stats, bounce details and engagement metrics(opens and clicks). [Read more](https://www.zoho.com/zeptomail/help/overview.html) |
| SMTP/API | Contains the API and SMTP credentials to send out emails. Also lists plugins that can be integrated with ZeptoMail. [Read more](https://www.zoho.com/zeptomail/help/smtp-and-api.html). |
| Domains | View and manage the domains associated with a particular Agent. [Read more.](https://www.zoho.com/zeptomail/help/domain-association.html "Domain association mail agent") |
| Processed emails | Lists outgoing email logs and their delivery details. [Read more](https://www.zoho.com/zeptomail/help/processed-emails.html "Processed emails section Agent"). |
| Templates | Create, edit and manage email templates. [Read more](https://www.zoho.com/zeptomail/help/using-templates.html "Templates section Agent"). |
| Webhooks | Configure webhooks to trigger HTTP call backs to your application based on configured events. [Read more.](https://www.zoho.com/zeptomail/help/webhooks.html "Reports section Agent") |
| Email tracking | Enable and monitor opens or clicks. [Read more.](https://www.zoho.com/zeptomail/help/email-tracking.html "Email tracking Agent") |
| File cache | Upload any inline images or attachments to be sent in the email. [Read more.](https://www.zoho.com/zeptomail/help/file-cache.html "File cache Agent") |

## Agent setting

The Agent setting section comprises the following:

- IP restriction
- Suppression list
- Sending limits
- Shutdown an Agent

### IP restriction list

IP restriction allows you to add those IPs from where transactional emails are sent. This provides an additional security layer in case your send mail token is inadvertently compromised and prevents unauthorized parties from sending email through your account. To add to the list :

1. Click **Add IPs.**



![Add ip restriction](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/agent-add-ip.png)

2. You can either add individual IP addresses or a range.



![Add allowed IPs](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/agent-setting-ip.png)

3. Click **Add.**
4. You will be required to validate your identity, post which the IP will be added to the list.

### Suppression list

The suppression list contains those addresses for which you no longer wish to send any emails and those that you do not wish to track anymore. Apart from email addresses, you can also suppress email-sending to whole domain. You can add the email addresses or domains specific to Agents to this list. To do so:

1. Go to the **Suppression list** section in Agent settings.
2. Choose whether you wish to add the email address or domain from the tab at the top.



![Suppression list](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/agent-supprlist.png)

3. Enter the email address or domain you wish to suppress. Enter the reason for the suppression.
4. Confirm the selection using the **Add** button.
5. The email address or domain will be added to the list.

### Sending limits

You can set limits on the number of emails sent from your Agents, based on your usage. This helps you monitor and control your outgoing emails according to your business needs. You can configure individual sending limits for each Agent. All limits automatically reset at 12am server time each day.

There are two types of limits you can configure:

- **Blocking limit**\- Sets the maximum number of emails that can be sent from your Agent in a day. Once this limit is reached, outgoing emails will be blocked until the limit resets.
- **Warning limit** \- Sets a threshold to alert you before you reach your blocking limit. This helps you manage your remaining email quota and take timely action when needed.

Note

- The warning limit must always be set lower than the blocking limit, as it is intended to alert you before the sending limit is reached.

To add an email limit

1. Go to the **Agent settings** section.



![Add sending limit](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/sending-limit.png)

2. Select **Sending limit.**
3. Enter the desired Blocking and Warning limit for that Agent. Save the limits.

If the number of outgoing email exceeds the set limit:

- For API users, the email will not be processed and you will receive a SM\_151 error in your console.
- For SMTP users, your email will be accepted by ZeptoMail servers, but will not be sent out to your recipients. The email will have a Process failed status.

The Settings section lists all the limits set for a ZeptoMail account. You can add, edit or delete the limits from there too. This [help page](https://www.zoho.com/zeptomail/help/email-limits.html) gives you more information on email limit actions in the Settings section.

## Blocked Agent

In some cases, your outgoing emails may bounce or be marked as spam. When this happens, the Agent or domain responsible for most of these emails will be temporarily blocked. You can view the list of blocked Agents or domains in the left pane. This is done to protect your sending reputation and prevent further delivery issues. Agent blocking also help our team identify the cause of the problem and assist you in resolving it effectively.

![Blocked agents](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/agent-block.png)

Click **More details** to view the blocked Agent(s) or domain(s) along with the steps you can take to prevent further blocking.

You can take the following mitigation to secure your Agent and reduce the chances of further bounces or spam:

- Regenerate the API token— A compromised token can be misused by bad actors to send spam. Generating a new token ensures your Agent remains secure.
- Add IP restrictions— Restrict your Agent to trusted IP addresses. This ensures emails are triggered only from authorized sources.

![More information on agent block](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/agent-insight.png)

To unblock your Agent or domain, submit a feedback form with the suspected reason for bounce/spam along with the mitigation measures you have carried out. Our team will review the information and unblock your Agent or domain after verification.

![Share insights](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/blockedma2.png)

### Shutdown and Delete an Agent

You can delete the Agents that you no longer use. To delete the Agent, you should first initiate a shut down process, which will go on for **45 days.** During this period, your Agent will not be operable, i.e., no emails will be sent out from it. Only the pre-existing data like email logs and reports will be available. Once the shutdown period is over, the Agent and its related information will be completely deleted. Only Postmaster has the permission to perform the deletion operation.

Here are a list of things to keep in mind before initiating the Agent shutdown process:

- Once the shutdown of an Agent is initiated, the process and the associated actions **cannot be reverted.**
- After initiating the shutdown process, emails cannot be sent using API or SMTP from the Agent.
- All actions performed by the Agent such as scheduled emails, tracking, webhooks triggering, etc., will be blocked immediately once the shutdown is initiated.
- After shutdown, processed email logs and reports will remain till the deletion of the Agent.
- Once the Agent is deleted, all information corresponding to the Agent except the associated domains will be deleted irreversibly.

Steps to initiate the shutdown process:

1. Log in to [ZeptoMail account](https://zeptomail.zoho.com/).
2. Launch the Agents section from the left panel.
3. Select the Agent you want to delete.
4. On top right corner click on **Agent setting.**
5. Click **Shutdown Agent**



![Agent shutdown](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/agent-shutdown.png)

6. In the Shutdown Initiation popup, agree to proceed and click Shutdown.
7. You will be required to validate your identity in order to shutdown your Agent. Once validated, it will be deleted.

Once the shutdown process has started, the Postmaster can delete the Agent at any time.

## Points to remember

- All the domains you add can be associated to a single Agent or multiple Agents.
- The domain should be verified to send transactional emails from it.
- You can use different domains for sending different types of transactional emails from the same Agent. This is purely based on your sending requirements.
  - Example: The company Zylker sends two types of transactional emails - Daily reports and account alerts from the same Agent. It uses the sub-domain reports.zylker.com for daily reports and alerts.zylker.com for account alerts. Both these verified sub-domains are part of the same Agent.
- However, you can also send different emails using different Agents. For instance, Zylker can use Agent 1 to send welcome emails and Agent 2 to send daily reports. Agent 1 will have the sub-domain info.zylker.com added to it. Agent 2 will have alerts.zylker.com sub-domain added to it.
- ZeptoMail does not support certain formats of in-line images and attachments. [Click here](https://www.zoho.com/zeptomail/help/file-cache.html#alink-un-sup-for) to view the list of unsupported formats.

Note

Before you get started it is important to know that [ZeptoMail](https://www.zoho.com/zeptomail/) is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, check out [Zoho Campaigns](https://www.zoho.com/campaigns/).
