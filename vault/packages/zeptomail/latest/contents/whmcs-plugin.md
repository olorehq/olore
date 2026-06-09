<!-- source: https://www.zoho.com/zeptomail/help/whmcs-plugin.html -->

# ZeptoMail module for WHMCS

The [ZeptoMail module](https://marketplace.whmcs.com/product/6921-zeptomail) for WHMCS allows you to send transactional emails directly from your site hosted with WHMCS. Configure your [ZeptoMail account](https://zeptomail.zoho.com/) with WHMCS to start sending your emails.

## Steps to install ZeptoMail module

1. Login to the WHMCS Marketplace.
2. Search for the ZeptoMail module. Click **Get it now.**

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/whmcs7_1.png)
3. A zip file labelled "ZeptoMail-WHMCS-1.0.zip" will be downloaded. Decompress the file.
4. Find the " ZeptoMail " folder in the decompressed "ZeptoMail-WHMCS-1.0" folder. Upload it in the **/modules/mail** directory in your WHMCS account.
5. You will now be able to use this module.

## Configuring ZeptoMail module

Once the module is installed, you should configure it to start sending out your emails. Follow the steps given below to configure your ZeptoMail account.

1. Navigate to System settings on the top right corner of your Dashboard.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/whmcs1.png)
2. Select General settings.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/whmcs2.png)
3. Navigate to the **Mail** tab. Under **Mail Provider** section, select the Configure Mail Provider button.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/whmcs3.png)
4. The Configure Mail Provider box will appear. Fill in the configuration parameters given below :


   - Mail provider: The email service you will use to send your emails.
   - Hosted region: The region in which your ZeptoMail account is hosted. You can obtain this value from your ZeptoMail login URL.
   - Send Mail token: The **Send Mail token** generated within the Agent using which you wish to configure WHMCS. This information can be obtained from the **setup info** section of your ZeptoMail account.
   - From email address: The email address that will be used to send your emails. Ensure that the domain which you use to send your emails is a valid domain verified in ZeptoMail. To verify your domain in ZeptoMail, follow the steps given [here.](https://www.zoho.com/zeptomail/help/domains.html)
   - From name: The sender name which will be displayed over the emails sent.

     ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/whmcs4.png)

Note:

The From name and From email address will be auto-populated from the General settings of your WHMCS account.

5. Click **save**.
6. Once configured, you will be able to send emails.

**Test email :**

To send a test email :

1. In the configuration window, select **Test Configuration.**

**![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/whmcs5.png)**
2. A test email will be sent to the **From address.**

Note:

Sending emails through ZeptoMail is subject to our **Usage Policy** restrictions. Please refer to our [Usage Policy page](https://www.zoho.com/zeptomail/terms.html) for details.
