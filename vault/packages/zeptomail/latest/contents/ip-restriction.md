<!-- source: https://www.zoho.com/zeptomail/help/ip-restriction.html -->

# IP Restrictions

[ZeptoMail](https://www.zoho.com/zeptomail/) ensures secure email-sending through IP restriction. You can whitelist the IP addresses used to access ZeptoMail's services, blocking any access from unapproved sources. This helps organizations limit access to authorized networks and add an extra layer of protecting in case of credential compromise.

## Steps to add allowed IPs

You can add static IPs, your current IP and a range of IPs to the account. Follow the steps below to add to the list:

1. Login to [ZeptoMail](https://zeptomail.zoho.com/)
2. Navigate to **Settings > IP Restrictions** from the left pane.
3. Click on the **Add IP(s)** button. The **Add allowed IPs** pop up will appear.



![Add IP](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/addip.png)

4. You can add the restricted IPs for three cases:
1. **Email-sending(SMTP&API)**\- Only the configured IP addresses can send emails using SMTP/API.
2. **Web UI access** \- Only the added IPs can login and access ZeptoMail. We recommend you to add your organization's IP here.
3. **Access REST APIs** \- Only the added IPs can access the REST APIs to perform the necessary operations.
5. You can choose more than one option from the list.
6. Enter the **Name** of the restriction and choose the case for which you wish to add the IP.



![Add allowed IPs](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/settings-ip.png)

7. Enter the allowed IP details:
   - **Add IP Address** \- The IP address you wish to include.
   - **Add IP Range** \- The range of IP addresses you wish to include.
8. Click **Add**.
9. You will be prompted to authorize your identity using your account password. Once done, the IP will be added.

## IP restriction within Agents

Alternatively, you can add the restricted IPs for a particular Agent in the Agent setting option. To add Agent-specific IP restriction: **Agent>>Agent settings>>IP restriction.**

Follow the steps given in [this page](https://www.zoho.com/zeptomail/help/agents.html#masetting) to add to the list.
