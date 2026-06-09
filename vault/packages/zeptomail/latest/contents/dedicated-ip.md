<!-- source: https://www.zoho.com/zeptomail/help/dedicated-ip.html -->

# Dedicated IP in Zoho ZeptoMail

#### Table of Contents

- [Dedicated IP](https://www.zoho.com/zeptomail/help/dedicated-ip.html#dedicated_ip)
- [Applying for a dedicated IP](https://www.zoho.com/zeptomail/help/dedicated-ip.html#applying_dedicated_ip)
  - [Who is eligible?](https://www.zoho.com/zeptomail/help/dedicated-ip.html#eligibility)
  - [IP warmup](https://www.zoho.com/zeptomail/help/dedicated-ip.html#ip_warmup)
  - [When should I buy more than one IP?](https://www.zoho.com/zeptomail/help/dedicated-ip.html#more_ip)
  - [Dedicated IP rules](https://www.zoho.com/zeptomail/help/dedicated-ip.html#ip_rules)
- [Dedicated IP in Zoho ZeptoMail](https://www.zoho.com/zeptomail/help/dedicated-ip.html#zem_dedicated_ip)

## Dedicated IP

Email sending in [Zoho ZeptoMail](https://www.zoho.com/zeptomail/) works using a shared IP with a high sender reputation. All the emails sent from ZeptoMail will be routed through that IP. However, you can use a separate IP for your emails if you have a high email sending volume. These exclusive IPs are called dedicated IPs. Dedicated IPs are exclusive IPs assigned to an account in ZeptoMail. An account with a dedicated IP will have its emails routed only through the assigned IP.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/shared_ip_vs_dedicated_ip.png)

## Applying for a dedicated IP

### Who is eligible?

- A high-volume sender like a mid-size or enterprise-level customer who sends 50k - 70k emails in a week is eligible to apply for a dedicated IP. In general, to be eligible to use a dedicated IP, you should have a consistent practice of sending a minimum of 10,000 emails (approx.) in a day.
- As mentioned in our [terms of service](https://www.zoho.com/zeptomail/terms.html), the email bounce rate should be lower than 5% and spam rates should be less than 0.1% (less than 10 in 10,000 emails).

Note:

Dedicated IPs are separate from your credit cycle and are billed annually. For details on the pricing, refer [here](https://www.zoho.com/zeptomail/pricing.html#dedicatedip).

Follow the steps below to request access :

1. Login to your Zoho ZeptoMail [account](https://zeptomail.zoho.com/).
2. Navigate to **Dedicated IP** on the left pane.
3. Select **Request Dedicated IP** button. Choose the number of IPs you want.
4. Go through the terms and conditions and agree to them.
5. Click request.

Once you raise an IP request, we will review your account based on the pre-requisites mentioned [here](https://www.zoho.com/zeptomail/help/dedicated-ip.html#eligibility). If everything is in place, you can make the payment for the requested IP. Once the payment is processed, we will start warming up your IP to start sending out your emails.

## IP warm-up

Choosing a dedicated IP for the first time works similar to sending out emails from scratch. You should get the IP ready to handle the email load and ensure the recipient servers trust the IP. The IP's legitimacy is determined by its IP reputation. IP reputation is the score given by ESPs to the sending server and is determined based on the sender's past email activities. A good IP reputation for your dedicated IP makes sure your emails reach your recipients on time. Since a new IP will not have a substantial email activity to improve its IP reputation, a good way to do this is by warming it up.

IP warm-up entails gradually increasing email sending from the IP. This is what we do for your dedicated IPs too. Right after a dedicated IP is assigned to you, we initiate an **automatic warmup process**. This will occur in the following manner :

- A small portion of your emails will be routed through the dedicated IP. While the remaining will be routed through the shared pool.
- This number will be gradually increased to establish an IP reputation. Once the dedicated IP is completely warmed up, all the emails will be routed through it.
- If you have an existing dedicated IP and you request a new one, the emails will be shared between the old and the new dedicated IPs.

### When should I buy more than one IP?

If you are a high volume sender, you can opt to purchase 1 dedicated IP for every **10 million** emails you send. Every extra IP that you request for, will undergo the same evaluation process as that of the initial IP.

### Dedicated IP rules

If you have opted for more than one IP, you can split the email-sending based on your preference. The emails can be channelized based on certain **Rules** available in ZeptoMail. Using these rules, you can select the percentage of emails you wish to route through specific IPs.

Follow the steps below to split email-sending between multiple dedicated IPs.

1. Login to your Zoho ZeptoMail account. Select dedicated IP.
2. Navigate to the **Rules** tab. You can create the appropriate filter to split the emails between the IPs.
3. To create a filter, click **Add rule.**

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/add_rule.png)
4. Enter a name for the filter.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/dedicated_ip.png)
5. Choose the condition based on which you wish to sort. The available condition types are :


1. Any of the conditions (OR) - If the emails match any of the conditions specified, the selected IPs will be used.
2. All of the conditions (AND) - If the emails match all of the conditions mentioned, the selected IPs will be used.
3. Advanced conditions (AND/OR) - A mix of AND and OR conditions can be used to filter the emails.
6. Once you select the condition type, you can set the conditions for which the emails should be processed. The available conditions and their operating parameters are as follows :




|     |     |
| --- | --- |
| **Conditions** | **Operating Parameter** |
| From | Is, Is not |
| Subject | Contains, Does not contain, Is, Is not, Begins with, Ends with |
| Agent | Is, Is not |

7. Next, choose the percentage of emails you wish to allocate for each IP. Ensure that the total percentage count adds up to 100. Any value below or above that will not be accepted.
8. Click **Save** to add the rule for your IPs.

Note:

In case of multiple IP request, warmup will be initiated only for the IPs that you have paid for. Ensure you pay for all the IPs that you request for smooth IP handover.

## Dedicated IP in Zoho ZeptoMail

Once your dedicated IP is approved and your warmup complete, all your emails will be routed through the IP assigned to you.

- The dedicated IP section will have the list of dedicated IPs assigned to send out emails for you.



![Dedicated ip section](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/dedip-section.png)

- You can view the emails' statuses using the **View report** button. The bounce statuses and the number of emails sent will be available. The date range can be adjusted based on your preference.



![Dedicated ip reports](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/dedip-report.png)

- The graph can also be downloaded to your local machine using the download option.



![Dedicated ip download](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/dedip-download.png)

- At any point, if you wish to deactivate a dedicated IP, you can do so using the **Deactivate** button. Once deactivated, the IP cannot be retrieved and the payment for it will not be refunded.



![Dedicated ip deactivate](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/dedip-deactivate.png)


Note :

Dedicated IP is rolled out in a phased manner across data centres. To know the availability of dedicated IP in your region, contact **support@zeptomail.com.**
