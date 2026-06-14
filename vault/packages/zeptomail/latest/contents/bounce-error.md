<!-- source: https://www.zoho.com/zeptomail/help/bounce-error.html -->

# Email bounces

Email bounces occur when an email doesn't reach the recipient and is returned to the sender. Bounces can be due to varying reasons. However, they are largely categorised as hard and soft bounces.

- **Hard bounce** occurs when your emails fail to reach the recipients due to a permanent reason. Examples: incorrect recipient email address, fake email ids or some IPs being deliberately blocked by the recipient servers.
- **Soft bounce** on the other hand occurs due to temporary reasons, which usually clear up in a while. Examples: receiving server being temporarily down, the size of the email being large or the recipient's inbox being full.

It is important to keep your email bounces to a minimum to ensure [good deliverability](https://www.zoho.com/zeptomail/guide/email-deliverability.html) of your transactional emails.

## Bounce reports

ZeptoMail has a dedicated Bounce reports dashboard that gives extensive information on email bounces. This categorization helps you analyse bounces across Agents and domains, which helps you get to the root of things and handle them better.

### Bounce report sections

1. [Bounce count](https://www.zoho.com/zeptomail/help/bounce-error.html#bounce-count)
2. [Analysis report](https://www.zoho.com/zeptomail/help/bounce-error.html#analysis-report)
3. [Bounces by domains](https://www.zoho.com/zeptomail/help/bounce-error.html#bounces-by-domain)
4. [Bounces by Agents](https://www.zoho.com/zeptomail/help/bounce-error.html#bounces-by-agent)

#### Bounce count

The bounce count at the top gives you the total number bounced emails of the total emails sent from your account. You can also view the percentage value next to the data.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bounce_reports_dashboard.png)

This bounce value can be viewed based on the desired time range too. To do so, click on the time range drop-down in the right and select the desired time period.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bounce_reports_time_range.png)

The section right below gives you a detailed split-up of the bounce count.

**Filter criteria**

You can filter the bounce data based on the Agent or domain and view the information.

![Agent section](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bouncereport-agent.png)

1. Agent filter - Once you select the Agent filter, you can either opt to view bounce data from all Agents or specific Agent. To view stats from a specific Agent, select the desired Agent from the drop-down on the right.



![Agent filter](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bouncereport-filter.png)

2. Domain filter - This is similar to the Agent filter. You can either opt to view bounce data from all domain or specific domain. To view stats from a specific domain, select the desired domain from the drop-down on the right.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bounce_domains_listing.png)


For the selected value, you will be able to view the total number of bounces and the timeline of the bounce occurrence.

**Chart and download options**

You will be able to view the different chart options on the top right corner.

![Chart options](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bouncereport-chart.png)

There are two chart options:

- Line chart - Displays the bounce data and the timeline of their occurrence.



![UI screenshot of line chart](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/linechart.png)

- Tabular format - Displays the exact count of emails that have encountered a particular bounce. The chart also shows the date and time of occurrence.



![Agent tabular](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bouncerepots-tabular.png)

You can also download the data available in the graph for future references. To download the chart:

- Pick the desired chart-view option from the top-right corner.



![Agent download option](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bouncereports-downloadoptions.png)

- Select the download button and pick the desired download option. These are the supported download options:
  - JPEG
  - PNG
  - SVG
  - CSV
  - PDF

#### **Analysis report**

- The analysis report of the bounced emails gives the exact reason for the bounces and emails that have encountered them.
- ZeptoMail categorises email bounces to understand the reason behind them better. Given below are a comprehensive list of bounces encountered by transactional emails.

|     |     |     |
| --- | --- | --- |
| ERROR | DESCRIPTION |
| Connection Issues | Host not reachable | When the recipient server does not accept the connection request or is unresponsive. |
| Relaying error | When the message is not relayed between servers. |
| Protocol error | Indicates a TLS handshake failure between the sender and the receiver. |
| Routing error | When the recipient server is unable to route the emails to the recipient's domain. Can occur due to DNS issues and misconfiguration of router settings. |
| Connection refused error | When the recipient rejects the connection attempt from the sender due to reasons like IP or domain reputation or poor DNS configuration. |
| Temporary error | An error caused by any temporary issue and can be resolved once the email sending is retried. |
| Policy failure | Policy rejection | When the sender fails the recipient's policy settings and limitations. |
| Over quota | When the recipient's email account has reached its default space limit. |
| Bad configuration | Occurs due to some error in the recipient server setting. As a result, it might be rejecting incoming emails. |
| Too many recipients | When the list of recipients exceeds the number set by the sender. |
| Black listed | When the recipient has marked the sender as suspicious and blocked incoming emails from that sender. |
| Grey listed | This is temporary error that occurs when the recipient is set to reject emails from new IPs and domains. |
| Sender IP error | Occurs when the recipient may have blocked the sender's IP due to poor sender reputation. |
| Spam | Flagged as spam | When the email lands in the spam folder due to deliverability issues. |
| Virus detected | When the email's links or attachments have been flagged as a possible virus by the recipient's email filters. |
| User not found | Unknown user | Recipient email address does not exist in the organization or domain. |
| Inactive mailbox | When the recipient's mailbox is not in use. |
| Invalid DNS | Invalid DNS records | Recipient server unable to deliver the message because of DNS configuration issues on their end. |

- This report lists the reasons for the bounce in the descending order of their percentage and count. Each category of bounce error has sub-categories that pin-point the exact reasons to help you solve them better.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bounce_desc_order.png)

- Each category report lists all the emails that have encountered that particular error in the selected time range. Select the **View emails** button to list the emails that have encountered a particular error.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bounce_desc_order_emails.png)

**Chart and download options**

The bounce data can either be viewed in graphical format or as in a tabular format. You can choose the one of your choice from the top-right corner.

Further, you can also download the data for a later use. The supported formats are:

- JPEG
- PNG
- SVG
- CSV
- PDF

#### Bounces by Domain

This section gives you domain-specific bounce information. A pie-chart of all domains that have encountered an email bounce will be available. The data is listed based on the number of emails and their percentage. The information can be viewed in the desired time range.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bounce_domains.png)

- You can also view the list of emails that have bounced in a particular domain.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bounce_domains_emails.png)

- There is an expanded view of the bounce stats for better clarity.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bounce_domain_2steps.png)

You can also download the graph in the desired format for future references. The supported formats are:

- JPEG
- PNG
- SVG
- CSV
- PDF

#### Bounces by Agents

This section gives you Agent-specific bounce information. A pie-chart of all Agents that have encountered an email bounce will be available. The data is listed based on the number of emails and their percentage. The information can be viewed in the desired time range.

![Agent report](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bouncereport-ma.png)

- You can also view the list of emails that have bounced in a particular Agent.



![Open agent](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bouncereport-open.png)

- There is an expanded view of the stats for better clarity.



![Expand agent](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/bouncereport-expand.png)


You can also download the graph in the desired format for future references. The supported formats are:

- JPEG
- PNG
- SVG
- CSV
- PDF

Note:

Before you get started it is important to know that ZeptoMail is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, you can visit [Zoho Campaigns](https://www.zoho.com/campaigns/).
