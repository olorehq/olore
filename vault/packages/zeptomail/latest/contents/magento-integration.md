<!-- source: https://www.zoho.com/zeptomail/help/magento-integration.html -->

# ZeptoMail integration with Magento

Magento is an open-source e-commerce platform that allows businesses to build on. A business hosted on Magento will be communicating with their customers using transactional emails like invoices, tracking details and other account related emails like welcome emails, password reset emails and more. This is possible by integrating their service with Zoho ZeptoMail. The business owner can easily download ZeptoMail and configure it with their Magento account to send out these emails. Follow the steps below to download Magento :

1. Go to the Magento root directory on your server and enter the following commands:
1. composer require zohomail/magento2-zeptomail:^1.0
2. php bin/magento module:enable Zoho\_ZeptoMail.
3. php bin/magento setup:upgrade
4. php bin/magento setup:static-content:deploy
5. php bin/magento cache:clean
2. Login to your Magento [admin panel](https://account.magento.com/customer/account/login).
3. You will find ZeptoMail listed on the left pane. You should configure ZeptoMail to start using it to send transactional emails.

## Steps to configure ZeptoMail

01. Select **ZeptoMail** from the left pane.



    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/magento1.png)

02. From the top pane, select the store for which you wish to configure ZeptoMail. You should configure ZeptoMail separately for each store.



    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/magento2.png)

03. From the drop-down, select the region where your account is hosted.
04. Copy paste the **Send Mail Token** from your ZeptoMail account. This will used to send emails.
05. Magento allows the following types of emails to interact with your customers :
    1. General contact - Email address for your store, used for all general queries.
    2. Customer support - All customer support requests will be handled through this email address.
    3. Sales representative - The sales-related activities can be handled using this email address.
    4. Custom email 1 & 2 - Two email addresses that can be customized based on your needs.
06. Add the email address that will be used to send emails from each category. If you use an email address apart from the ones you mention, the **General contact** email address will be used by default.



    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/magento4.png)

07. The email addresses should be associated with domain(s) verified in your ZeptoMail account.
08. Click **Save.**
09. The configuration will be successfully saved. The emails will be sent from these accounts.
10. You can also send test emails to check your configuration.
