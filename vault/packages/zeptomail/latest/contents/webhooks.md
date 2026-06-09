<!-- source: https://www.zoho.com/zeptomail/help/webhooks.html -->

# Webhooks in an Agent

**What is a Webhook?**

Webhooks are user-defined HTTP callbacks that are triggered by an event. In ZeptoMail, Webhooks can be used to relay data based on recipient activity on the sent emails, to your application. The events for which the recipient data is relayed by the webhook are Opens, Clicks, and Bounces of the email. A Webhook instantly relays data to the configured URL and your application is instantly notified.

When the specific event occurs, the Webhook is triggered. That is, an HTTP POST request is made to the URL (or URI) configured by the developer to receive the webhook. The most useful feature of email webhooks is getting the user details when any or all of these events occur. The Webhook URL has to be configured in your [ZeptoMail account](https://zeptomail.zoho.com/) by the application developer to receive recipient details when these events occur. You can preview your webhook data within an [Agent](https://www.zoho.com/zeptomail/help/agents.html) and test it.

#### Table of Contents

- [Types of Webhooks](https://www.zoho.com/zeptomail/help/webhooks.html#alink1)
  - [Bounce Webhook](https://www.zoho.com/zeptomail/help/webhooks.html#alink1.1)
  - [Email Opens Webhook](https://www.zoho.com/zeptomail/help/webhooks.html#alink1.2)
  - [Link Clicks Webhook](https://www.zoho.com/zeptomail/help/webhooks.html#alink1.3)
- [Configure your Webhook URL](https://www.zoho.com/zeptomail/help/webhooks.html#alink2)
- [Edit your Webhook URL](https://www.zoho.com/zeptomail/help/webhooks.html#alink3)
- [Test your Webhook URL](https://www.zoho.com/zeptomail/help/webhooks.html#alink4)
- [Authenticate your Webhook URL](https://www.zoho.com/zeptomail/help/webhooks.html#alink5)
- [Delete your Webhook URL](https://www.zoho.com/zeptomail/help/webhooks.html#alink6)
- [Standard Reported Data](https://www.zoho.com/zeptomail/help/webhooks.html#alink7)
  - [Bounce Webhook](https://www.zoho.com/zeptomail/help/webhooks.html#alink7.1)
  - [Email Opens Webhook](https://www.zoho.com/zeptomail/help/webhooks.html#alink7.2)
  - [Link Clicks Webhook](https://www.zoho.com/zeptomail/help/webhooks.html#alink7.3)
  - [Feedback loop Webhook](https://www.zoho.com/zeptomail/help/webhooks.html#feedback-loop)
- [Securing Webhooks](https://www.zoho.com/zeptomail/help/webhooks.html#alink8)
  - [Validating Webhook Requests](https://www.zoho.com/zeptomail/help/webhooks.html#alink8.1)

## Types of Webhooks

We can classify webhooks under 3 types:

- [Bounce Webhook](https://www.zoho.com/zeptomail/help/webhooks.html#alink1)
- [Email Opens Webhook](https://www.zoho.com/zeptomail/help/webhooks.html#alink2)
- [Link Clicks Webhook](https://www.zoho.com/zeptomail/help/webhooks.html#alink3)

### Bounce Webhook

Using a bounce webhook you can receive the recipient details when your transactional emails bounce. The list of user details sent by ZeptoMail can be seen [here](https://www.zoho.com/zeptomail/help/webhooks.html#alink10). There are multiple reasons for your emails to bounce. For example, if your recipient's mailbox is full, your email will bounce temporarily. Such temporary bounces are called as soft bounces. If the bounce is permanent, due to an invalid recipient email address, it is called a hard bounce.

### Email Opens Webhook

Email Opens webhooks are used to retrieve the recipient details when they open your email. The list of user details sent by ZeptoMail can be seen [here](https://www.zoho.com/zeptomail/help/webhooks.html#alink11). **This event is triggered the first time the recipient opens the email.** Even if the recipient opens the email multiple times only the recipient details pertaining to the first instance are stored and transmitted by ZeptoMail.

### Link Clicks Webhook

Sometimes, your transactional emails will have clickable links as a part of its HTML body. Link Click webhook transmits the recipient details of those who clicked on these links. The list of user details sent by ZeptoMail can be seen [here](https://www.zoho.com/zeptomail/help/webhooks.html#alink12). ZeptoMail relays unique clicks information across all the tracked links in the email.

**If a recipient clicks on the same tracked link multiple times, only the unique clicks are recorded and relayed by ZeptoMail to the application via the webhook URL.**

## Configure your Webhook URL

1. From the _left panel_, select **Agents** and select the Agent for which you want to add webhooks.
2. Navigate to **Webhooks** tab.
3. Click on **Add Webhook**.



![Add webhooks](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/wh-add.png)

4. The **Add Webhooks** box will appear. Here you can add your webhook and test it.
5. Enter **Webhook URL**, **Description** and choose the notifications (from **Soft bounced**, **Hard bounced**, **Open,** **Click** and **Feedback loop**) for which you want the webhook to relay this data to your application.
6. Click on **Add** after the required details are filled.



![Add webhook data](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/wh-new.png)

7. **Webhook** is configured successfully.

## Edit your Webhook URL

1. From the _left panel_, select **Agents** and select the Agentfor which you want to edit the webhook.
2. Navigate to **Webhooks** tab. Here the list of webhooks configured for your **Agent** will be listed.
3. Hover over **Webhook** to view Edit webhook icon.
4. Click on **Edit webhook** to open the **Add Webhooks** box.
5. ![Edit webhooks](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/wh-edit.png)

6. You can edit **Webhook URL**, **Description** and select/ de-select from these notifications - **Soft bounced**, **Hard bounced**, **Open,** **Click** and **Delivered**.
7. Click on **Save** to apply the changes to your Webhook URL.

## Test your Webhook URL

You can test your webhook URL while creating a new webhook URL, or for an existing webhook URL. You can separately test your webhook URL for Soft bounce, Hard bounce, Open, and Click.

1. Navigate to **Webhooks** tab. You will see the Webhooks page where you can view the list of webhooks for that Agent.
2. If you are adding a new Webhook, click on **Add Webhook**. If it is for an existing webhook URL, click on the _edit icon_ located on the right side.
3. Now choose the notification from Soft bounced, Hard bounced, Open, and Click, you want to test by clicking on the drop-down.
4. Click on **Send Test** and check the successful reception of your data.

## Authenticate your Webhook URL

Webhook URL should be made public for [ZeptoMail](https://www.zoho.com/zeptomail/) to send data. Due to its public exposure, the URL is under threat. There is a possibility for hackers to manipulate the URL data by posting irrelevant information to the public webhook URL.

In order to protect the webhook URL, ZeptoMail provides an authentication key. Authentication protects your Webhook URL from irrelevant clicks. You can add an **Authentication Key** as a part of the data sent to the Webhook URL. Your application can then use this **Authentication Key** to validate the incoming webhook data.

1. From the _left panel_, select [**Agents**](https://www.zoho.com/zeptomail/help/agents.html) and select the Agent to which you want to add webhooks.
2. Navigate to **Webhooks** tab. You will see the Webhooks page where you can view the list of webhooks for that **Agent**.
3. Click on **Authentication Key** on the top right corner.
4. Enter **Authentication Key** and click on **Configure**.



![Configure webhook screenshot](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/webhook-configure.png)

5. Use **Authentication Key** to validate the webhook data sent to your application.

## Delete your Webhook URL

You can delete a Webhook URL, however, you will have to add it again to re-use it.

1. Navigate to **Webhooks** tab. You will see the Webhooks page where you can view the list of webhooks for that Agent.
2. Locate the webhook you want to delete and hover your cursor over it.
3. Click on the delete icon on the right corner.



![Delete webhook](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/wh-delete.png)

4. Click on OK to confirm the webhook deletion.

## Standard Reported Data

### Bounce webhook

- **event\_name** \- the type of event. This will be either hard bounce or soft bounce
- **event\_message**\- details about the event
  - **email\_info** \- This provides the details of the bounced email, like:
    - **email\_reference** \- used to trace the email
    - **client\_reference**\- it is the customer's unique reference to identify the mail
    - **is\_smtp\_trigger**\- true means the webhook is triggered using an SMTP
    - **subject**\- subject of the bounced email
    - **bounce\_address** \- the bounce email address configured in the Agent and the name
    - **from**\- the sender email address details
      - **address**\- the sender email address
      - **name**\- the sender name
    - **​to**- email address to which the bounce details are to be sent. You can add any number of "to" addresses here
      - **​email\_address**\- JSON array to add multiple email addresses
        - **address**\- the email address to which the bounce details are to be sent
    - **​​​​processed\_time** \- timestamp of when the email was sent
    - **object**\- event\_message data is for the object email
  - **event\_data** \- this field provides the reason for the bounce, time of bounce, and the diagnostic message
    - **details**\- details of the bounce like reason, time, and diagnostic\_message
      - **reason**\- the reason for the bounce
      - **time**\- the time of bounce
      - **diagnostic\_message**\- helps in trouble-shooting
    - **​object**\- event\_data is for the object bounce. It can be softbounce or hardbounce
  - **​request\_id**\- unique identifier of your email that was bounced
- **​mailagent\_key** \- the unique identifier of the Agent
- **webhook\_request\_id** \- this is the unique id for a specific webhook transaction.

### Email Opens webhook

- **event\_name** - the type of event. The event tracked here is email opens.
- **event\_message**- details about the event
  - **email\_info** \- this provides the details of the email that was opened, like:
    - **email\_reference** \- used to trace the email
    - **client\_reference**\- it is the customer's unique reference to identify the mail
    - **is\_smtp\_trigger**- true means the webhook is triggered using an SMTP
    - **subject**\- subject of the email that was opened
    - **bounce\_address** \- the bounce address configured
    - **from**-the sender email address details
      - **address**\- the sender email address
      - **name**\- the sender name
    - **​to**- email address to which the bounce details are to be sent. You can add any number of "to" addresses here
      - **​email\_address**\- JSON array to add multiple email addresses
        - **address**\- the email address to which the bounce details are to be sent
    - **​​​​processed\_time** \- timestamp of when the email was sent
    - **object**\- event\_message data is for the object email
  - **event\_data**\- this field provides the details about the event
    - **details**\- details like email\_client, modified\_time, ip\_location\_info, browser, operating\_system, time, and device
      - **email\_client**\- details of the recipient email client
        - **name**\- name of the recipient email client
        - **version**\- version of the recipient email client
      - **modified\_time**\- time the open event occurred
      - **ip\_location\_info**\- details of the recipient ip location
        - **zipcode**\- zipcode of the recipient
        - **country\_code**\- country\_code of the recipient
        - **city**\- city of the recipient while the event occurred
        - **latitude**\- latitude of the recipient while the event occurred
        - **country\_name**-city of the recipient where the event occurred
        - **ip\_address**-ip address used by the recipient while opening the email
        - **time\_zone**\- the recipient time zone
        - **region**\- the region of the recipient
        - **longitude**\- the longitude of the recipient
      - **​browser**\- the browser details used by the recipient to open the email
        - **​name**\- name of the browser
        - **version** \- the browser version
      - **operating\_system**\- the details of the operating system used by the recipient
        - **name**\- name of the recipient operating system
        - **version**\- version of the recipient operating system
      - **​time**\- the time of the event occurrence
      - **​device**\- the details of the recipient device
        - **​name**\- name of the recipient device
    - **​object**- event\_data is for the object email\_open
  - **​request\_id**\- unique identifier of your email that was opened
- **​mailagent\_key** \- the unique identifier of the Agent
- **webhook\_request\_id** \- this is the unique id for a specific webhook transaction

### Link Clicks webhook

- **event\_name** - the type of event. The event tracked here is email clicks.
- **event\_message**- details about the event
  - **email\_info** - this provides the details of the email that was clicked, like:
    - **email\_reference** \- used to trace the email
    - **client\_reference**\- it is the customer's unique reference to identify the mail
    - **is\_smtp\_trigger**- true means the webhook is triggered using an SMTP
    - **subject**\- subject of the email that was clicked
    - **bounce\_address** \- the bounce address configured
    - **from**-the sender email address details
      - **address**\- the sender email address
      - **name**\- the sender name
    - **​to**- email address to which the bounce details are to be sent. You can add any number of "to" addresses here
      - **​email\_address**\- JSON array to add multiple email addresses
        - **address**\- the email address to which the bounce details are to be sent
    - **​​​​processed\_time** \- timestamp of when the email was sent
    - **object**\- event\_message data is for the object email
  - **event\_data** \- this field provides the details about the event
    - **details**\- details like email\_client, modified\_time, ip\_location\_info, browser, operating\_system, time, and device
      - **email\_client**\- details of the recipient email client
        - **name**\- name of the recipient email client
        - **version**\- version of the recipient email client
      - **modified\_time**\- time the open event occurred
      - **ip\_location\_info**\- details of the recipient ip location
        - **zipcode**\- zipcode of the recipient
        - **country\_code**\- country\_code of the recipient
        - **city**\- city of the recipient while the event occurred
        - **latitude**\- latitude of the recipient while the event occurred
        - **country\_name**-city of the recipient where the event occurred
        - **ip\_address**-ip address used by the recipient while opening the email
        - **time\_zone**\- the recipient time zone
        - **region**\- the region of the recipient
        - **longitude**\- the longitude of the recipient
      - **​browser**\- the browser details used by the recipient to open the email
        - **​name**- name of the browser
        - **version**\- version of the recipient operating system
      - **operating\_system**\- the details of the operating system used by the recipient
        - **name**\- name of the recipient operating system
        - **version**\- version of the recipient operating system
      - **​time**\- the time of the event occurrence
      - **​device** \- the details of the recipient device
        - **​name**\- name of the recipient device
    - **​object**- event\_data is for the object email\_link\_click
  - **​request\_id**\- unique identifier of your email that was clicked
- **​mailagent\_key** \- the unique identifier of the Agent.
- **webhook\_request\_id** \- this is the unique id for a specific webhook transaction.

### Feedback loop webhook

- **event\_name** - type of event being tracked. The event tracked here is feedback loop
- **event\_message**- details about the event
  - **email\_info** \- contains the information of the email that was returned, like:
    - **client\_reference**\- customer's unique reference to identify the email
    - **email\_reference** \- reference id used to trace the email
    - **is\_smtp\_trigger**- specifies if the webhook is triggered using SMTP. true means the webhook is triggered using SMTP.
    - **subject**\- email's subject
    - **bounce\_address** \- the bounce address configured
    - **from**-the sender's details
      - **address**\- the sender's email address
      - **name**\- the sender's name
    - **​to**- email address to which the bounce details are to be sent. You can add any number of "to" addresses here
      - **​email\_address**\- JSON array to add multiple email addresses
        - **address**\- the email address to which the bounce details are to be sent
    - **reply\_to**\- the reply-to information
      - **address**\- the reply\_to email address
      - **name**\- the reply\_to name
    - **cc**\- the cc'd recipient details
      - **address**\- the cc'd email address
      - **name**\- the cc'd recipient's name
    - **reply\_to**\- the bcc'd recipient details
      - **address**\- the bcc'd email address
      - **name**\- the bcc'd recipient's name
    - **processed\_time -** timestamp of when the email was sent
    - **object -** type of request sent to the application. In this case, the value will be "fbl\_complaint"
  - **event\_data**-this field provides the details about the event
    - **details**\- details related to the event occurred
      - **fblFrom**\- the recipient address from where the event was triggered
      - **returnPath**\- the bounce address
      - **ip**\- IP from where the request was triggered
      - **from**\- the sender address
      - **to**-email address to which the bounce details are to be sent. You can add any number of "to" addresses here
  - **request\_id**\- unique identifier of the email that was returned
- **​mailagent\_key** \- the unique identifier of the Agent
- **webhook\_request\_id** \- the unique id for the specific webhook transaction

## Securing Webhooks

Securing your webhooks is recommended as it helps you determine if the requests have actually originated from ZeptoMail. To enable you to verify the webhooks, ZeptoMail adds a signature to all its webhook requests. This adds an extra layer of security to your webhooks.

### Validating Webhook requests

Each webhook request contains a producer-signature in their request header that is used to verify whether the request is generated by ZeptoMail. The producer signature consists of 3 parts - _timestamp_, _signature_, and _signing algorithm_.

- **ts**\- timestamp is the time when the webhook request was initiated from ZeptoMail server to user-configured URL
- **s** \- the signature is the MAC message generated on encoding the webhook event notification with the [authentication key](https://www.zoho.com/zeptomail/help/webhooks.html#alink8) added by you in your Agent
- **s-algorithm** \- signing algorithm is the standard HMAC SHA256 algorithm used to sign the payload of the webhook request

Sample producer-signature format: **ts** =1596109465823; **s** =dN0yVozgabP5NPlxMDfP1r5u65bVO9kTGEZMIQlqI2o%3D; **s-algorithm** =HmacSHA256

You can use the below sample code in your application to validate the webhook request. This algorithm will return a Boolean value of either True or False. True means that the webhook request is generated by ZeptoMail and False means the webhook request is not from ZeptoMail.

Sample code:

**import**javax.crypto.Mac;

**import**javax.crypto.spec.SecretKeySpec;

**import**javax.servlet.http.HttpServletRequest;

**import**java.io.BufferedReader;

**import**java.net.URLDecoder;

**import**java.security.MessageDigest;

**import**java.time.Duration;

**import**org.apache.commons.codec.Charsets;

**import**org.apache.commons.codec.binary.Base64;

**import**org.json.JSONObject;

**public class**WebhookRequestValidator {

_/\*\*_

_\*_

_\\* **@param****request**_

_\\* **@param****acceptableDuration**\- The maximum genuine delay that the request can suffer from the time of Request initiated from ZeptoMail server to that of the configured webhook URL destination._

_\\* **@param****secretKey**\- Secret key / Authentication key configured in the ZeptoMail portal_

_\\* **@throws** Exception_

_\*\*/_

**public static void**authenticateWebhookContent(HttpServletRequest request, Duration acceptableDuration, **byte**\[\] secretKey)

**throws**Exception {

String producerSignature = request.getHeader(**"producer-signature"**);

String psDecoded = URLDecoder. _decode_(producerSignature, **"UTF-8"**);

String sign\[\] = psDecoded.split(**";"**);

JSONObject signJSON = **new**JSONObject();

**for**(**int**i = 0; i < sign.**length**; i++) {

String field = sign\[i\];

String fieldArr\[\] = field.split(**"="**, 2);

signJSON.put(fieldArr\[0\], fieldArr\[1\]);

}

**long**timeSent = Long. _valueOf_(signJSON.getString(**"ts"**));

**long**diff = System. _currentTimeMillis_() \- timeSent;

**long**acceptableLimit = acceptableDuration.toMillis();

**if**(diff <= acceptableLimit) {

String signatureAlgorithm = signJSON.getString(**"s-algorithm"**);

String signatureReceived = signJSON.getString(**"s"**);

StringBuffer requestBody = **new**StringBuffer();

String value = **null**;

BufferedReader reader = request.getReader();

**while**((value = reader.readLine()) != **null**) {

requestBody.append(value);

}

String data = requestBody.toString();

String dataDecoded = URLDecoder. _decode_(data, **"UTF-8"**);

String arr\[\] = dataDecoded.split(**"="**, 2);

String dataValue = arr\[1\];

String constructedSignature = _getSignature_(dataValue, secretKey, signatureAlgorithm);

**byte**decode1\[\] = Base64. _decodeBase64_(signatureReceived);

**byte**decode2\[\] = Base64. _decodeBase64_(constructedSignature);

**if**(!MessageDigest. _isEqual_(decode1, decode2)) {

**throw new**Exception(**"Message digest isn't equal"**);

}

}

}

**private static**String getSignature(String data, **byte**\[\] secretKey, String signatureAlgorithm) **throws**Exception {

SecretKeySpec signingKey = **new**SecretKeySpec(secretKey, signatureAlgorithm);

Mac mac = Mac. _getInstance_(signatureAlgorithm);

mac.init(signingKey);

**byte**\[\] rawHmac = mac.doFinal(data.getBytes(Charsets. _**UTF\_8**_));

String result = Base64. _encodeBase64String_(rawHmac);

**return**result;

}

}

;i++)>

Note:

Before you get started it is important to know that ZeptoMail is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you ar e looking for a bulk email provider, check out [Zoho Campaigns](https://www.zoho.com/campaigns/).
