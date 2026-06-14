<!-- source: https://www.zoho.com/zeptomail/help/sendgrid-transition-api.html -->

# Transition API for Sendgrid to Zoho ZeptoMail

The following document gives the transition API for Sendgrid users opting [Zoho ZeptoMail](https://www.zoho.com/zeptomail/) for their transactional email sending.

## Purpose

Modify your existing code to send transactional emails from Zoho ZeptoMail.

## Request URL

https://api.zeptomail.com/v1.1/sg/email

## Authorization token

You need to add send mail token to authenticate your API requests. This is a unique token that you can obtain from the **Agent** in your ZeptoMail account. Use the send mail token as a **header** when you call ZeptoMail REST Email Sending API.

To generate a send mail token, you should have a ZeptoMail account with a verified domain added to it.

Follow the steps given [here](https://www.zoho.com/zeptomail/help/getting-started.html) to create your ZeptoMail account. Once you create an account, you can generate the send mail token using the steps given below :

### Steps to generate Send mail token:

1. In the Agents tab on the left panel of your [ZeptoMail account](https://zeptomail.zoho.com/), select the Agent that you want to connect to your application.
2. Navigate to the **SMTP/API** tab within the Agent.
3. From here you can copy the Agent-specific send mail token from the API tab.
4. You can use the default Send Mail Token or generate a new one.

### **Example**

POST /v1.1/sg/email

_**Query String:**_

Method: POST

HOST: https://api.zeptomail.com/v1.1/sg/email

Header:

Authorization: zoho-enczapikey <space> <send mail token>

## **Request Body (JSON object)**

- **headers**JSON object



  - The additional headers to be sent in the email for your reference purposes.

- **from** String



  - Includes the sender's details.

  - **email** String



    - A valid sender address.

  - **name** String



    - The sender's name
- **personalizations** String



  - Includes the recipient details. The parameters included are :

  - **to** String



    - Details of the recipient(s).

  - **cc** String



    - Details of the cc'd recipient(s).

  - **bcc** String



    - Details of the bcc's recipient(s).
- **subject** String



  - Transactional email's content.

- **content** String



  - Contains the email body.

**Allowed value** \- html/plain

  - **value** String



    - The email body.
- **reply\_to** String



  - Reply to email details.

  - **email** String



    - A valid reply to address.

  - **name** String



    - A valid replyto name.
- **attachments** Array



  - The attachments sent along with the email.

**Allowed value** \- text/html.

  - **Name** String



    - Attachment's name.

  - **Content** String



    - Attachment's content in encoded base 64 format.

CurlJavaPythonPHPCsharpNode JS

```curl
Copiedcurl "https://api.zeptomail.com/v1.1/sg/email" \
-X POST \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-H "Authorization: Zoho-enczapikey ***" \
-d '{
        "headers" : { "key" : "headers" },
         "from": { "email": "rebecca@example.com", "name": "Rebecca" },
          "personalizations" : [ { "to" : [ { "name" : "John Doe", "email" : "john@example.com" },{ "name" : "Julia Doe", "email" : "julia@example.com" } ],\
           "cc" : [ { "name" : "Jane", "email" : "jane@example.com" } ],\
            "bcc" : [ { "name" : "Jim", "email" : "jim@example.com" } ] },\
             {"to" : [ { "name" : "Janice", "email" : "janice@example.com" } ],\
             "bcc" : [ { "name" : "Jordan", "email" : "jordan@example.com" } ] } ],
            "subject" : "Order confirmation",
            "content" : [ { "type" : "html/text", "value" : "Your order is confirmed!" } ],
            "reply_to" : { "email": "customer_service@example.com", "name": "Customer Service Team" } }'
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
        String postUrl = "https://api.zeptomail.com/v1.1/sg/email";
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
            conn.setRequestProperty("Authorization", "Zoho-enczapikey ***");
            JSONObject object = new JSONObject("{\"headers\" : { \"key\" : \"headers\" }, \"from\": { \"email\": \"rebecca@example.in\", \"name\": \"Rebecca\" }, \"personalizations\" : [ { \"cc\" : [ { \"name\" : \"Jane\", \"email\" : \"jane@example.com\" } ], \"bcc\" : [ { \"name\" : \"Jim\", \"email\" : \"jim@example.com\" } ],\"to\" : [ { \"name\" : \"John\", \"email\" : \"john@example.com\" },  { \"name\" : \"Julia Doe\", \"email\" : \"julia@example.com\"} ] },{\"to\" : [ { \"name\" : \"Janice\", \"email\" : \"janice@example.com\" }],\"bcc\" : [ { \"name\" : \"Jordan\", \"email\" : \"jordan@example.com\" } ] } ], \"subject\" : \"Order Confirmation\", \"content\" : [ { \"type\" : \"html/text\", \"value\" : \"Your order is confirmed!\" } ], \"reply_to\" : { \"email\": \"customer_service@example.com\", \"name\": \"Customer Service Team\" } }");
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

url = "https://api.zeptomail.com/v1.1/sg/email"

payload = "{ \"headers\" : { \"key\" : \"headers\" }, \"from\": { \"email\": \"rebecca@example.in\", \"name\": \"Rebecca\" }, \"personalizations\" : [ { \"cc\" : [ { \"name\" : \"Jane\", \"email\" : \"jane@example.com\" } ], \"bcc\" : [ { \"name\" : \"Jim\", \"email\" : \"jim@example.com\" } ],  \"to\" : [ { \"name\" : \"John\", \"email\" : \"john@example.com\" },{ \"name\" : \"Julia\", \"email\" : \"julia@example.com\" } ] }, {\"to\" : [ { \"name\" : \"Janice\", \"email\" : \"janice@example.com\" }], \"bcc\" : [ { \"name\" : \"Jordan\", \"email\" : \"jordan@example.com\" } ] }], \"subject\" : \"Order confirmation\", \"content\" : [ { \"type\" : \"html/text\", \"value\" : \"Your order is confirmed!\" } ], \"reply_to\" : { \"email\": \"customer_service@example.com\", \"name\": \"Customer Service Team\" } }"
headers = {
'accept': "application/json",
'content-type': "application/json",
'authorization': "Zoho-enczapikey ***",
}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```php
Copied<?php

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.zeptomail.com/v1.1/sg/email",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => '{
        "headers": {
            "[key]": "[headers]"
        },
        "from": {
            "email": "rebecca@example.in",
            "name": "Rebecca"
        },
        "personalizations": [\
          {\
            "to": [\
              {\
                "email": "john@example.com",\
                "name": "John"\
              },\
              {\
                "email": "julia@example.com",\
                "name": "Julia"\
              }\
            ],\
            "cc": [\
              {\
                "email": "jane@example.com",\
                "name": "Jane"\
              }\
            ],\
            "bcc": [\
              {\
                "email": "jim@example.com",\
                "name": "Jim"\
              }\
            ],\
          },\
          {\
            "to": [\
              {\
                "email": "janice@example.com",\
                "name": "Janice"\
              }\
            ],\
            "bcc": [\
              {\
                "email": "jordan@example.com",\
                "name": "Jordan"\
              }\
            ]\
          }\
        ],
        "subject": "Order Confirmation",
        "content": [\
            {\
            "type": "html/text",\
            "value": "Your order is confirmed!"\
            }\
        ],
        "reply_to": {
            "email": "customer_service@example.com",
            "name": "Customer Service Team"
        }
    }'
    CURLOPT_HTTPHEADER => array(
        "accept: application/json",
        "authorization: Zoho-enczapikey ***",
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
            var baseAddress = "https://api.zeptomail.com/v1.1/sg/email";

            var http = (HttpWebRequest)WebRequest.Create(new Uri(baseAddress));
            http.Accept = "application/json";
            http.ContentType = "application/json";
            http.Method = "POST";
            http.PreAuthenticate = true;
            http.Headers.Add("Authorization", "Zoho-enczapikey ***");
            JObject parsedContent = JObject.Parse("{
                'headers' : {'key' : 'headers'},
                'from': {
                    'email': 'rebecca@example.com',
                    'name': 'Rebecca'
                },
                'personalizations': [\
                    {\
                        'to': [\
                            {\
                                'email': 'john@example.com',\
                                'name': 'John'\
                            },\
                            {\
                                'email': 'julia@example.com',\
                                'name': 'Julia'\
                            }\
                        ],\
                        'cc': [\
                            {\
                                'email': 'jane@example.com',\
                                'name': 'Jane'\
                            }\
                        ],\
                        'bcc': [\
                            {\
                                'email': 'jim@example.com',\
                                'name': 'Jim'\
                            }\
                        ],\
                    },\
                    {\
                        'to': [\
                            {\
                                'email': 'janice@example.com',\
                                'name': 'Janice'\
                            }\
                        ],\
                        'bcc': [\
                            {\
                                'email': 'jordan@example.com',\
                                'name': 'Jordan'\
                            }\
                        ]\
                    }\
                ],
                'subject' : 'Order Confirmation',
                'content' : [\
                    {\
                        'type' : 'html/text',\
                        'value' : 'Your order is confirmed!'\
                    }\
                ],
                'reply_to' : {
                    'email': 'customer_service@example.com',
                    'name': 'Customer Service Team'
                }
            }");
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

fetch("https://api.zeptomail.com/v1.1/sg/email", {
    body: JSON.stringify({
        "personalizations": [\
          {\
            "to": [\
              {\
                "email": "john@example.com",\
                "name": "John"\
              },\
              {\
                "email": "julia@example.com",\
                "name": "Julia"\
              }\
            ],\
            "cc": [\
              {\
                "email": "jane@example.com",\
                "name": "Jane"\
              }\
            ],\
            "bcc": [\
              {\
                "email": "jim@example.com",\
                "name": "Jim"\
              }\
            ],\
          },\
          {\
            "to": [\
              {\
                "email": "janice@example.com",\
                "name": "Janice"\
              }\
            ],\
            "bcc": [\
              {\
                "email": "jordan@example.com",\
                "name": "Jordan"\
              }\
            ]\
          }\
        ],
        "from": {
          "email": "rebecca@example.in",
          "name": "Rebecca"
        },
        "reply_to": {
          "email": "customer_service@example.com",
          "name": "Customer Service Team"
        },
        "subject": "Order Confirmation",
        "content": [\
          {\
            "type": "text/html",\
            "value": "Your order is confirmed!"\
          }\
        ],
        "attachments": [\
          {\
            "content": "[base64-content]",\
            "filename": "index.html",\
            "type": "text/html",\
            "disposition": "attachment"\
          }\
        ],
      }),
    method: "POST",
    headers: {
        "Authorization": "Zoho-enczapikey ***",
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
}).then(async (resp) => {
    let result = await resp.json()
    console.log(result)
}).catch((err) => {
    console.log(err)
})
```

Show full

Show less
