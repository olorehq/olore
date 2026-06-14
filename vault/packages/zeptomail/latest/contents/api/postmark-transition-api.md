<!-- source: https://www.zoho.com/zeptomail/help/api/postmark-transition-api.html -->

# Transition API for Postmark to Zoho ZeptoMail

The following document gives the transition API for Postmark users opting [Zoho ZeptoMail](https://www.zoho.com/zeptomail/) for their transactional email sending.

## Purpose

Modify your existing code to send transactional emails from Zoho ZeptoMail.

## Request URL

https://api.zeptomail.com/v1.1/pm/email

## Authorization token

You need to add send mail token to authenticate your API requests. This is a unique token that you can obtain from the **Agent** in your ZeptoMail account. Use the send mail token as a **header** when you call ZeptoMail REST Email Sending API.

To generate a send mail token, you should have a ZeptoMail account with a verified domain added to it. Follow the steps given [here](https://www.zoho.com/zeptomail/help/getting-started.html) to create your ZeptoMail account. Once you create an account, you can generate the send mail token using the steps given below :

### Steps to generate Send mail token:

1. In the Agents tab on the left panel of your [ZeptoMail account](https://zeptomail.zoho.com/), select the Agent that you want to connect to your application.
2. Navigate to the **SMTP/API** tab in the Agent.
3. From here you can copy the Agent-specific send mail token from the API tab.
4. You can use the default Send Mail Token or generate a new one.

### **Example**

POST /v1.1/pm/email

_**Query String:**_

Method: POST

HOST: https://api.zeptomail.com/v1.1/pm/email

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

- **ReplyTo** String



  - Reply to email address.

- **Subject** String



  - Email's subject.

- **HtmlBody** String



  - Email's body.

- **Attachment** Array



  - Attachments sent along with the email. The following parameters should be included while adding the attachment :

**Allowed value** \- text/plain

  - **Name** String



    - Attachment's name.

  - **Content** String



    - Encoded base 64 format of the attached content.
- **Attachment** Array



  - Image attachments embedded with the email. The following parameters should be included while adding the attachment :

**Allowed value** \- image/png

  - **Name** String



    - Attached image's name.

  - **ContentId** String



    - The content id used by html body for image lookup. Each image should be given a separate content value.

#### Transition API code

CurlJavaPythonPHPCsharpNode JS

```curl
Copiedcurl "https://api.zeptomail.com/v1.1/pm/email" \
-X POST \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-H "Authorization:Zoho-enczapikey ***" \
-d '{
        "From": "Rebecca <rebecca@zylkerfashions.com>",
        "To": "Jill <Jill@zohomail.com>, Robert<Robert@zylker.com>",
        "Cc": "John<John@zohomail.com>, Susan <susan@zylker.com>",
        "Bcc": "Bill <bill@zylker.com>",
        "Subject": "Invoice",
        "HtmlBody": "<html> <b>Hello, refer the generated invoice below.</b> <br> <img src=\"cid:image_cid\"/> </html>",
        "ReplyTo": "Hugh@zylker.com",
        "Attachments": [\
            {\
                "Name": "attachment.txt",\
                "Content": "<base64-formatted-content>",\
                "ContentType": "text/plain"\
            },\
            {\
                "Name": "image.png",\
                "ContentID": "cid:image_cid",\
                "Content": "<base64-formatted-content>"\
                "ContentType": "image/png"\
            }\
        ],
    }'
```

```java
Copiedimport java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.JSONObject;

public class JavaSendapi {
    public static void main(String[] args) throws Exception {
        String postUrl = "https://api.zeptomail.com/v1.1/pm/email";
        BufferedReader br = null;
        HttpURLConnection conn = null;
        String output = null;
        StringBuffer sb = new StringBuffer();
        try {
            URL url = new URL(postUrl);
            conn = (HttpURLConnection) url.openConnection();
            conn.setDoOutput(true);
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setRequestProperty("Accept", "application/json");
            conn.setRequestProperty("Authorization", "<send_mail_token>");
            JSONObject object = new JSONObject("{    \"From\": \"Rebecca <rebecca@zylkerfashions.com>\",    \"To\": \"John<John@zohomail.com>, Robert<Robert@zylker.com>\",    \"Cc\": \"Bill<Bill@zylker.com>, Jill<Jill@zohomail.com>\",    \"Bcc\": \"Hugh <Hugh@zylker.com>\",   \"Subject\": \"Invoice\",    \"HtmlBody\": \"<html> <b>Hello, refer the invoice details given below</b> <br> <img src=\\\"cid:image_cid\\\"/> </html>\",    \"ReplyTo\": \"Bill@zylker.com\",    \"Attachments\": [       {          \"Name\": \"attachment.txt\",            \"Content\": \"<base64-formatted-content>\",            \"ContentType\": \"text/plain\"        },        {            \"Name\": \"image.png\",            \"ContentID\": \"cid:image_cid\",            \"Content\": \"<base64-formatted-content>\",           \"ContentType\": \"image/png\"        }    ]}");
            OutputStream os = conn.getOutputStream();
            os.write(object.toString().getBytes());
            os.flush();
            br = new BufferedReader(new InputStreamReader((conn.getInputStream())));
            while ((output = br.readLine()) != null) {
                sb.append(output);
            }
            System.out.println(sb.toString());
        } catch (Exception e) {
            br = new BufferedReader(new InputStreamReader((conn.getErrorStream())));
            while ((output = br.readLine()) != null) {
                sb.append(output);
            }
            System.out.println(sb.toString());
        } finally {
            try {
                if (br != null) {
                    br.close();
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
            try {
                if (conn != null) {
                    conn.disconnect();
                }
            } catch (Exception e) {
                e.printStackTrace();

            }
        }
    }

}
```

```python
Copiedimport requests

url = "https://api.zeptomail.com/v1.1/pm/email"

payload = "{\"From\": \"Rebecca <Rebecca@zylkerfashions.com>\",    \"To\": \"John<John@zohomail.com>, Jill<Jill@zylker.com>\",    \"Cc\": \"Robert <Robert@zylker.com>, Bill<Bill@zylker.com>\",    \"Bcc\": \"Hugh<Hugh@zylker.com>\",    \"Subject\": \"Invoice\",    \"HtmlBody\": \"<html> <b>Hello, this is the invoice for your order.</b> <br> <img src=\\\"cid:image_cid\\\"/> </html>\",    \"ReplyTo\": \"Rachel@zylker.com\",    \"Attachments\": [       {            \"Name\": \"attachment.txt\",         \"Content\": \"<base64-formatted-content>\",            \"ContentType\": \"text/plain\"        },        {          \"Name\": \"image.png\",           \"ContentID\": \"cid:image_cid\",          \"Content\": \"<base64-formatted-content>\",           \"ContentType\": \"image/png\"       }   ]}"
headers = {
'accept': "application/json",
'content-type': "application/json",
'authorization': "<send_mail_token>",
}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```php
Copied<?php

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.zeptomail.com/v1.1/pm/email",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => '{
    "From": "Rebecca <Rebecca@zylkerfashions.com>",
    "To": "Bill <Bill@zohomail.com>, Robert <Robert@zylker.com>",
    "Cc": "John <John@zylkerfoods.com>, Jill <Jill@zohomail.com>",
    "Bcc": "Hugh <Hugh@zylkerfoods.com>",
    "Subject": "Invoice Email",
    "HtmlBody": "<html> <b>Hello, refer the invoice generated for your account.</b> <br> <img src=\"cid:image_cid\"/> </html>",
    "ReplyTo": "Michael@zylker.com",
    "Attachments": [\
        {\
            "Name": "attachment.txt",\
            "Content": "<base64-formatted-content>",\
            "ContentType": "text/plain"\
        },\
        {\
            "Name": "image.png",\
            "ContentID": "cid:image_cid",\
            "Content": "<base64-formatted-content>",\
            "ContentType": "image/png"\
        }\
    ]
}',
    CURLOPT_HTTPHEADER => array(
        "accept: application/json",
        "authorization: <send_mail_token>",
        "cache-control: no-cache",
        "content-type: application/json",
    ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
    echo "cURL Error #:" . $err;
} else {
    echo $response;
}
?>
```

```csharp
Copiedusing System;
using System.Net;
using System.Text;
using System.IO;
using System.Net.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Rextester
{
    public class Program
    {
        public static void Main(string[] args)
        {
            System.Net.ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls12;
            var baseAddress = "https://api.zeptomail.com/v1.1/pm/email";

            var http = (HttpWebRequest)WebRequest.Create(new Uri(baseAddress));
            http.Accept = "application/json";
            http.ContentType = "application/json";
            http.Method = "POST";
            http.PreAuthenticate = true;
            http.Headers.Add("Authorization", "<send_mail_token>");
            JObject parsedContent = JObject.Parse("{
                'From': 'Rebecca <Rebecca@zylker.com>',
                'To': 'John <John@zylkerfoods.com>, Jill <Jill@zohomail.com>',
                'Cc': 'Robert <Robert@zylker.com>, Rachel <Rachel@zylkerfoods.com>',
                'Bcc': 'Hugh <Hugh@zohomail.com>',
                'Subject': 'Invoice Email',
                'HtmlBody': '<html> <b>Hello, this is the invoice generated for your purchase.</b> <br> <img src=\"cid:image_cid\"/> </html>',
                'ReplyTo': 'Greg@zohomail.com',
                'Attachments': [\
                    {\
                        'Name': 'attachment.txt',\
                        'Content': '<base64-formatted-content>',\
                        'ContentType': 'text/plain'\
                    },\
                    {\
                        'Name': 'image.png',\
                        'ContentID': 'cid:image_cid',\
                        'Content': '<base64-formatted-content>'\
                        'ContentType': 'image/png'\
                    }\
                ]}");
            Console.WriteLine (parsedContent.ToString());
            ASCIIEncoding encoding = new ASCIIEncoding();
            Byte[] bytes = encoding.GetBytes(parsedContent.ToString());

            Stream newStream = http.GetRequestStream();
            newStream.Write(bytes, 0, bytes.Length);
            newStream.Close();

            var response = http.GetResponse();

            var stream = response.GetResponseStream();
            var sr = new StreamReader(stream);
            var content = sr.ReadToEnd();
            Console.WriteLine (content);
        }
    }
}
```

```nodejs
Copiedimport fetch from 'node-fetch';

fetch("https://api.zeptomail.com/v1.1/pm/email", {
    body: JSON.stringify({
        "From": "Rebecca <Rebecca@zylkerfashions.com>",
        "To": "Jill <Jill@zohomail.com>, Jack <Jack@zylker.com>",
        "Cc": "Robert <Robert@zylker.com>, Bill <Bill@zohomail.com>",
        "Bcc": "Hugh <Hugh@zylkerfoods.com>",
        "Subject": "Invoice Email",
        "HtmlBody": "<html> <b>Hello, this is a the invoice for your order.</b> <br> <img src=\"cid:image_cid\"/> </html>",
        "ReplyTo": "Rachel@zylker.com",
        "Attachments": [\
            {\
                "Name": "attachment.txt",\
                "Content": "<base64-formatted-content>",\
                "ContentType": "text/plain"\
            },\
            {\
                "Name": "image.png",\
                "ContentID": "cid:image_cid",\
                "Content": "<base64-formatted-content>"\
                "ContentType": "image/png"\
            }\
        ],
    }),
    method: "POST",
    headers: {
        "Authorization": "Zoho-enczapikey ***",
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
})
```

Show full

Show less
