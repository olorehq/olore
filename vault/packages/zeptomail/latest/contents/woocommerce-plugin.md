<!-- source: https://www.zoho.com/zeptomail/help/woocommerce-plugin.html -->

# Zoho ZeptoMail plugin for WooCommerce

WooCommerce is an open source e-commerce plugin for WordPress. Designed for varying scales of businesses, it gained popularity for its ease of use and simplicity. The [Zoho ZeptoMail plugin](https://wordpress.org/plugins/zeptomail-woocommerce/#developers) for WooCommerce lets you send transactional emails from your online store built with WooCommerce. Use the custom email templates to securely send your order confirmations, invoices, security code requests and more.

Pre-requisites to using the plugin :

- A reviewed Zoho ZeptoMail [account](https://zeptomail.zoho.com/)
- Self hosted WooCommerce account

## Steps to install Zoho ZeptoMail plugin

Follow the steps below to install the plugin :

1. Login to your self hosted WooCommerce site and navigate to the admin dashboard.
2. Go to the Plugins section. Click **Add new plugin.**
3. Search for the ZeptoMail plugin and click **Install now**.

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/marketplace-wc.png)
4. To start using the plugin, navigate to **Plugin** **>** **Installed plugins.**

![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/pluginsettings_wc.png)
5. Click the **activate** button corresponding to the plugin.
6. To use the plugin to send out emails, you should configure it within your WooCommerce account.

## Configuring ZeptoMail plugin

01. To configure your account, you should authorize WooCommerce to use ZeptoMail's services.
02. Go to Zoho's API console [page](https://api-console.zoho.com/) to generate the client id and client secret parameters.
03. Select the **Add client** option on the right.

    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/api-console_wc.png)
04. Choose **Server based applications** from the options and fill out your application details - the store's name, your store URL and copy the Authorized redirected URI from the configuration page in WooCommerce. Select **Update.**

    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/clientcreation_wc.png)
05. The client id and client secret will be generated.
06. In the configuration screen, select the region where your account is hosted, copy paste the client id and client secret parameters. Click **Configure.**

    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/authorize_wc.png)
07. Once you configure your account, you should setup your email sending options. Select the desired Agent, enter a suitable From name and From email address. If you wish to CC the emails, you can do so by selecting the CC checkbox. Click **Save.**

    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/configure_wc.png)
08. Next, you have the option to choose the email settings for individual emails. You can either choose to use the default email option or use a template.

    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/emailsettings_wc.png)
09. To add a template, in your ZeptoMail account, navigate to the Agent you have linked with your plugin. Go to the **Templates** tab and copy the template id you wish to use.

    ![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/template-wc.png)
10. Paste that in the templates email tab. Click **Save**.
11. You can now start sending out transactional emails from your WooCommerce account.
