<!-- source: https://www.zoho.com/zeptomail/help/suppression-list.html -->

# Suppression Lists

Suppression list in ZeptoMail allows you to add email addresses that you no longer wish to send any emails to or track activity for. This maybe required in cases when there are repeated bounces or cases when a customer requests that their emails' opens and clicks are not tracked. Suppression lists help you maintain a good sender reputation and reduce risk of spam traps.

In ZeptoMail, email addresses can be added to the list either manually or automatically.

- While there is no overall cap on the number of suppressed addresses, up to **50 email addresses** can be added at a time.
- Only a user with the Postmaster access can add to the suppression list.

#### Table of Contents

- [Steps to add to Suppression list](https://www.zoho.com/zeptomail/help/suppression-list.html#Stepstoadd)
  - [Email suppression](https://www.zoho.com/zeptomail/help/suppression-list.html#Emailsuppression)
  - [Tracking suppression](https://www.zoho.com/zeptomail/help/suppression-list.html#Trackingsuppression)
- [Manage suppression list](https://www.zoho.com/zeptomail/help/suppression-list.html#manage)
- [Domain suppression](https://www.zoho.com/zeptomail/help/suppression-list.html#domainsuppression)
- [Auto suppression](https://www.zoho.com/zeptomail/help/suppression-list.html#Autosuppression)
- [Export logs](https://www.zoho.com/zeptomail/help/suppression-list.html#exportlogs)

## Steps to Add Suppression List

1. Login to **ZeptoMail**.
2. Navigate to **Suppression list** section from the left pane. Click the add email button on the right-hand side.



![Add suppression entry](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/supprsn-add.png)

3. The **add email address** popup appears.
4. Select the type of suppression:
   - Email suppression: To prevent further email-sending.
   - Tracking suppression: To disable open or click tracking.
5. Choose the appropriate type based on your preference.

#### **Email Suppression**

1. Enter the email address(es) you wish to add and the reason for blocking.



![Enter suppression values](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/supprsn-values.png)

2. For cases where your mailing list contains multiple recipients, you can select one of the following options:
   - **Suppress**: The suppressed email address(es) alone will not receive the email.
   - **Reject**: Email addresses present along with the suppressed address(es) too will not receive the email.
3. Enter the email addresses and choose whether you want to suppress or reject them.
4. You can limit email suppression to specific Agents. In this case, only the email addresses linked to those selected Agent(s) alone will be suppressed. However, emails will still be delivered to the email address present in other Agents that aren't included in the list.



![Add agent to suppression](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/supprsn-agent.png)

5. Once you add the Agent, click **Add.**

- Examples of suppress and reject options while sending an email to multiple recipients:
  - **Suppress**: Say a list contains four recipients— a1@zylker.com, a2@zylker.com, a3@zylker.com and a4@zylker.com. If a1@zylker.com is suppressed, emails will not be sent to that address alone.
  - **Reject**: If a1@zylker.com is rejected, emails will not be sent to other three recipients as well.

#### **​** **Suppress tracking**

You can enable activity tracking for Agents in ZeptoMail. This allows you to track the open and clicks of all the emails sent from that Agent. If you wish to disable activity tracking for a some email addresses alone, you can do that using the **Suppress tracking** option.

1. Navigate to the Suppression list section and enter the email address(es) that you do not wish to track anymore.



![Add tracking suppression addresses](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/trackn-value.png)

​
2. Enter the reason for suppression.
3. You can limit the tracking suppression to specific Agents. In this case, only the email addresses linked to those selected Agent(s) alone will be suppressed. However, tracking will be enabled if the same email address appears in other Agents that aren't included in the list.



![Add agents for tracking suppression](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/trackn-agent.png)

4. Once you add the necessary Agent, click **Add.**

## Managing suppression list entries

### **Editing entries**

You can further edit the entries in your suppression list by hovering over the respective email address.

![Edit suppression entries](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/supprsn-edit.png)

1. Click the **edit** icon on the right. The **edit email address** pop-up opens.
2. You can change the reason for the bounce along with the actions to be performed.
3. Click **save** to confirm the changes.

### **Deleting entries**

To delete a suppressed email address added to the list, click the **delete icon** near the corresponding email address. Confirm the deletion.

![Delete suppression entries](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/supprsn-delete.png)

## Domain suppression

Domain suppression allows you to add entire domains that you do not want to send any emails to or track activity for. This includes all **email addresses and subdomains** associated with that domain. To add to the list:

1. Navigate to the **Domains** tab in the Suppression list section.
2. Click **Add domain.** The Add domain pop-up appears.
3. Enter the domain(s) that you wish to suppress.
4. Enter the reason for the suppression. Select the relevant action for multiple recipients- whether suppress or reject.
5. Click **Add.**



![Domain suppression](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/supprsn-domain.png)

6. Similar to email address suppression, you can choose the Agent to which you wish to restrict the suppression/tracking.
7. The domain(s) will be added to the list.

## **​** Auto-suppression

Apart from manual addition, entries can also be automatically added to the list using the **Auto-suppression** option. However, this option is applicable only for hard bounces, specifically — Domain not found, Mailbox not found and User not found. You can enable/disable this option in the Suppression list section.

**Suppression level**

With auto-suppression too you can choose whether you'd want to suppress email-sending to the Agent that caused the bounce or from all Agents using the radio buttons.

![Auto suppression](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/supprsn-auto.png)

Auto-suppression can be enabled only for individual email addresses. You cannot add domains using this option.

## Export logs

You can export and download the last 60 days' data available in the suppression list. To do that:

1. Click on the **Export** button.



![Export suppression list](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/supprsn-export.png)

2. Select the date range and the type of suppression you would like to export.
3. If you wish to password protect the exported file, you can do so by selecting the password checkbox. Enter the password using which you want to protect your file in the textbox.
4. Select **Initiate export** to export the file.



![Export suppression list](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/suppr-list-export.png)

5. The exported files can be viewed under the **suppression list** tab in the **activity logs** section.
