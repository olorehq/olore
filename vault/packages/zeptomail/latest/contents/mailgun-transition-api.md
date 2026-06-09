<!-- source: https://www.zoho.com/zeptomail/help/mailgun-transition-api.html -->

# Transition API for Mailgun to Zoho ZeptoMail

The following document gives the transition API for Mailgun users opting [Zoho ZeptoMail](https://www.zoho.com/zeptomail/) for their transactional email sending.

## Purpose

Modify your existing code to send transactional emails from Zoho ZeptoMail.

## Request URL

https://api.zeptomail.com/v1.1/mg/email

## Authorization token

You need to add send mail token to authenticate your API requests. This is a unique token that you can obtain from the **Agent** in your ZeptoMail account. Use the send mail token as a **header** when you call ZeptoMail REST Email Sending API.

To generate a send mail token, you should have a ZeptoMail account with a verified domain added to it. Follow the steps given [here](https://www.zoho.com/zeptomail/help/getting-started.html) to create your ZeptoMail account. Once you create an account, you can generate the send mail token using the steps given below :

### Steps to generate Send mail token:

1. In the Agents tab on the left panel of your [ZeptoMail account](https://zeptomail.zoho.com/), select the Agent that you want to connect to your application.
2. Navigate to the **SMTP/API** tab in the Agent.
3. From here you can copy the Agent-specific send mail token from the API tab.
4. You can use the default Send Mail Token or generate a new one.

### **Example**

POST /v1.1/mg/email

_**Query String:**_

Method: POST

HOST: https://api.zeptomail.com/v1.1/mg/email

Header:

Authorization: zoho-enczapikey <space> <send mail token>

## **Request Body (JSON object)**

- **From** String



  - Sender's email address.

- **To** String



  - Recipient email address.

- **Cc** String



  - CC'd recipient email address.

- **Bcc** String



  - BCC'd recipient email address.

- **Subject** String



  - Email's subject.

- **HtmlBody** String



  - Email's HTML body.

- **Text** String



  - Email's plain text body.

CurlJavaPythonPHPNode JSC

```curl
Copiedcurl -X POST "https://api.zeptomail.com/v1.1/mg/email" \
     -H "Authorization: Zoho-enczapikey YOUR_API_KEY_HERE" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     --data "from=sender@example.in" \
     --data "to=recipient1@example.com,recipient2@example.com" \
     --data "subject=Test Email" \
     --data "text=This is a test email." \
     --data "html=<div><b>Test Email</b> <img src=\"cid:step3.jpg\"/></div>" \
     --data "cc=recipient3@example.com,recipient4@example.com" \
     --data "bcc=recipient5@example.com,recipient6@example.com"
```

```java
Copiedimport org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

public class ZeptoMailMultipart {

    public static void main(String[] args) {
        String url = "https://api.zeptomail.com/v1.1/mg/email";
        String apiKey = "Zoho-enczapikey YOUR_API_KEY_HERE";

        // Build the multipart form data
        MultipartEntityBuilder builder = MultipartEntityBuilder.create();
        builder.addTextBody("from", "sender@example.in", ContentType.TEXT_PLAIN);
        builder.addTextBody("to", "recipient1@example.com,recipient2@example.com", ContentType.TEXT_PLAIN);
        builder.addTextBody("subject", "Test Email", ContentType.TEXT_PLAIN);
        builder.addTextBody("text", "This is a test email.", ContentType.TEXT_PLAIN);
        builder.addTextBody("html", "<div><b>Test Email</b> <img src=\"cid:step3.jpg\"/></div>", ContentType.TEXT_HTML);
        builder.addTextBody("cc", "recipient3@example.com,recipient4@example.com", ContentType.TEXT_PLAIN);
        builder.addTextBody("bcc", "recipient5@example.com,recipient6@example.com", ContentType.TEXT_PLAIN);

        HttpEntity multipart = builder.build();

        // Send the POST request
        try (CloseableHttpClient client = HttpClients.createDefault()) {
            HttpPost post = new HttpPost(url);
            post.setHeader("Authorization", apiKey);
            post.setEntity(multipart);

            CloseableHttpResponse response = client.execute(post);
            HttpEntity responseEntity = response.getEntity();

            String result = EntityUtils.toString(responseEntity);
            System.out.println("Response: " + result);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

```python
Copiedimport requests
from requests_toolbelt.multipart.encoder import MultipartEncoder

# Creating form data for the request
formdata = MultipartEncoder(
    fields={
        "from": "sender@example.in",
        "to": "recipient1@example.com,recipient2@example.com",
        "subject": "Test Email",
        "text": "This is a test email.",
        "html": "<div><b>Test Email</b> <img src=\"cid:step3.jpg\"/></div>",
        "cc": "recipient3@example.com,recipient4@example.com",
        "bcc": "recipient5@example.com,recipient6@example.com"
    }
)

# API endpoint URL
url = "https://api.zeptomail.com/v1.1/mg/email"

# Headers including authorization and content type
headers = {
    "Authorization": "Zoho-enczapikey YOUR_API_KEY_HERE",
    "Content-Type": formdata.content_type  # Required for multipart form data
}

# Sending POST request to the API endpoint
try:
    response = requests.post(url, headers=headers, data=formdata)
    response.raise_for_status()  # Raise error if HTTP request failed
    result = response.json()  # Parse JSON response
    print(result)
except requests.exceptions.RequestException as err:
    print(f"Error: {err}")
```

```php
Copied<?php

// API endpoint URL
$url = "https://api.zeptomail.com/v1.1/mg/email";

// Form data as an array
$formData = [\
    "from" => "sender@example.in",\
    "to" => "recipient1@example.com,recipient2@example.com",\
    "subject" => "Test Email",\
    "text" => "This is a test email.",\
    "html" => "<div><b>Test Email</b> <img src=\"cid:step3.jpg\"/></div>",\
    "cc" => "recipient3@example.com,recipient4@example.com",\
    "bcc" => "recipient5@example.com,recipient6@example.com"\
];

// Authorization header
$headers = [\
    "Authorization: Zoho-enczapikey YOUR_API_KEY_HERE"\
];

// Initialize cURL session
$ch = curl_init($url);

// cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_POSTFIELDS, $formData);

// Execute the POST request
$response = curl_exec($ch);

// Check for errors in the request
if ($response === false) {
    $error = curl_error($ch);
    echo "Error: $error";
} else {
    // Parse and print the response
    $result = json_decode($response, true);
    print_r($result);
}

// Close cURL session
curl_close($ch);

?>
```

```nodejs
Copiedlet formdata = new FormData();

formdata.append("from", "sender@example.com");
formdata.append("to", "recipient1@example.com,recipient2@example.com");
formdata.append("subject", "Test Email");
formdata.append("text", "Hello, this is test Email");
formdata.append("html", "<div>Hello, this is test Email</div>");
formdata.append("cc", "cc1@example.com,cc2@example.com");
formdata.append("bcc", "bcc1@example.com,bcc2@example.com");

fetch("https://api.zeptomail.com/v1.1/mg/email", {
    body: formdata,
    method: "POST",
    headers: {
        "Authorization": "Zoho-enczapikey <your-api-key>",
    }
})
.then(async (resp) => {
    let result = await resp.json();
    console.log(result,result.details);
})
.catch((err) => {
    console.log(err);
});
```

```c
Copiedusing System;
using System.Collections.Specialized;
using System.Net;
using System.Text;

public class Program
{
    public static void Main()
    {
        string url = "https://api.zeptomail.com/v1.1/mg/email";

        var formData = new NameValueCollection
        {
            { "from", "sender@example.com" },
            { "to", "recipient1@example.com","recipient2@example.com" },
            { "subject", "Test Email" },
            { "text", "This is a test email." },
            { "html", "<div><b>Test Email</b></div>" },
            { "cc", "recipient3@example.com,recipient4@example.com" },
            { "bcc", "recipient5@example.com,recipient6@example.com" }
        };

        using (var client = new WebClient())
        {
            client.Headers.Add("Authorization", "Zoho-enczapikey <your-api-key>");

            try
            {
                byte[] responseBytes = client.UploadValues(url, "POST", formData);
                string responseBody = Encoding.UTF8.GetString(responseBytes);
                Console.WriteLine(responseBody);
            }
            catch (WebException e)
            {
                Console.WriteLine("Error: " + e.Message);
                if (e.Response != null)
                {
                    using (var reader = new System.IO.StreamReader(e.Response.GetResponseStream()))
                    {
                        Console.WriteLine(reader.ReadToEnd());
                    }
                }
            }
        }
    }
}
```

Show full

Show less
