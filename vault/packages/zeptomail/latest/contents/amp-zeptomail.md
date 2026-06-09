<!-- source: https://www.zoho.com/zeptomail/help/amp-zeptomail.html -->

# Accelerated Mobile Pages In ZeptoMail

Accelerated Mobile Pages (AMP) is proprietary Google technology built to speed up loading time of websites viewed on mobile devices. AMP is designed to decrease the load time of mobile pages by prioritising critical content over third-party assets like ads. This is done using AMP-specific tags. This ensures that users see the important content first even if other assets take longer to load.

## What is AMP for email?

AMP can be incorporated to suit for emails to improve interactivity and include dynamic content. This involves adding carousels, accordions and other responsive elements to help users interact dynamically with the content in the email. Given below are some of the features you can add using AMP :

- **Add dynamic content**

Content that users can interact with is called a dynamic content. For example, if you add a poll within your emails, you will be able to see the number of participants of the poll. This value will be updated whenever a new candidate takes part in it. Similarly, you can add forms which can be filled out, use multiple widgets, fetch and render JSON data and so on.
- **Change email structure**

AMP helps you change an email's layout, by adding side-bars, accordions, carousels and so on. This enhances how the content is displayed and adds variety to the content.

[Google's document](https://amp.dev/documentation/guides-and-tutorials/email/learn/email-spec/amp-email-format?redirected) on AMP for emails gives you information on email markup, structure and various HTML components available for AMP emails.

To start sending emails using AMP, you need to register with Google. Follow the instructions provided [here](https://developers.google.com/gmail/ampemail/register) to get started.

## Using AMP to send emails in ZeptoMail

The functionality of email AMPs can be extended to transactional emails. The AMP HTML code can be used in your email API, along with the corresponding tags, to add dynamic elements like feedback forms, updated shipping status in the email. It should be noted that you can use AMP only while sending emails using APIs.

The mandatory parameters to be included within your AMP code are :

|     |     |
| --- | --- |
| **Rule** | **Description** |
| Starts with **<!doctype html>** | Standard HTML format. |
| **<html ⚡4email>** or **<html amp4email>** | Used to mention that the page has an AMP content. |
| **<head>** and **<body>** | These tags are mandatory in AMP although they are optional in HTML. |
| **<meta charset="utf-8">** | Added immediately after the <head> tag. This ensures that the special characters are displayed across all email clients. |
| **<script async src="https: // cdn.ampproject.org/v0.js"></script>** | Included inside the <head> tag. It is required to load the dynamic elements seamlessly. |
| **<style amp4email-boilerplate>body{visibility:hidden}</style>** | This boiler plate should be added to hide content until AMP JS is loaded. |

Here is an example showing how you can include AMP within your code:

```json
Copiedcurl "https://api.zeptomail.com/v1.1/email" \
-X POST \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-H "Authorization:Zoho-enczapikey ***" \
-d '{
	"bounce_address":"bounces@info.zylker.com",
	"from": { "address": "accounts@info.zylker.com",  "name": "Paula"},
	"to": [{"email_address": {"address": "rudra.d@zylker.com","name": "Rudra"}}],
	"subject":"Account Confirmation",
	"htmlbody":"<div><b> Kindly click on Verify Account to confirm your account </b></div>",
	"ampbody" : "<!doctype html> <html ⚡4email data-css-strict> <head> <meta charset=\"utf-8\"> <script async src=\"https://cdn.ampproject.org/v0.js\"></script> <style amp4email-boilerplate>body{visibility:hidden}</style> </head> <body> Kindly click on Verify Account to confirm your account. </body> </html>"
	}'
```

The details about request body parameters can be found [here](https://www.zoho.com/zeptomail/help/api/email-sending.html).

Further, you can test the emails you send using the steps mentioned [here.](https://developers.google.com/gmail/ampemail/testing-dynamic-email)
