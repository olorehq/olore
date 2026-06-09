<!-- source: https://www.zoho.com/zeptomail/help/api/mailchannels-transition-api.html -->

# Transition API for MailChannels to Zoho ZeptoMail

The following document gives the transition API code for MailChannels users opting for Zoho ZeptoMail for their email sending.

## Purpose

To send transactional emails using ZeptoMail API.

## Request URL

https://api.zeptomail.com/v1.1/mc/email

## Authorization token

You need to add send mail token to authenticate your API requests. This is a unique token that you can obtain from the **Agent** in your ZeptoMail account. Use the send mail token as a **header** when you call ZeptoMail REST Email Sending API.

To generate a send mail token, you should have a reviewed ZeptoMail account with a verified domain added to it. Follow the steps given [here](https://www.zoho.com/zeptomail/help/getting-started.html) to create your ZeptoMail account. Once you create an account, you can generate the send mail token using the steps given below :

### Steps to generate Send mail token:

1. In the Agents tab on the left panel of your [ZeptoMail account](https://zeptomail.zoho.com/), select the Agent that you want to connect to your application.
2. Navigate to the **SMTP/API** tab in the Agent.
3. From here you can copy the Agent-specific send mail token from the API tab.
4. You can use the default Send Mail Token or generate a new one.

### **Example**

POST /v1.1/mc/email

_**Query String:**_

Method: POST

HOST: https://api.zeptomail.com/v1.1/mc/email

Header:

Authorization: zoho-enczapikey <space> <send mail token>

## Request body

|     |     |     |
| --- | --- | --- |
| **Parameter** | **Data Type** | **Description** |
| 1)headers | JSON object | The additional headers to be sent in the email for your reference purposes. |
| 2)personalizations | String | The recipient details. |
| 2.1)cc | JSON array | Email addresses of cc'd recipients.<br>**Allowed value** - JSON object of email\_address. |
| 2.2)bcc | JSON array | Email addresses of bcc'd recipients.<br>**Allowed value** - JSON object of email\_address. |
| 2.2.1)type | String | The mime type of the content you will be including. Ex : html/plain |
| 2.2.2)value | String | The message body you will be adding. |
| 2.3)to | JSON array | **Allowed value** - JSON object of email\_address. |
| 2.3.1)email | String | Recipient's email address field. |
| 2.3.2)name | String | Recipient's name. |
| 3)content | String | This consists of the email body and the mime type. |
| 4)subject | String | Subject of the transactional email |
| 5)reply\_to | JSON array | **Allowed value** - JSON object of reply\_to email addresses. |
| 5.1)address | String | The email address to which the recipient's email responses will be addressed.<br>**Allowed value** \- A valid email address containing a domain that is verified in your Agent. |
| 5.2)name | String | Name for the reply-to parameter. |

Note that you will not need the following parameters while sending out emails using ZeptoMail and can omit them. This omission of these parameters, however, will not affect your email sending and you can use the API as such.

- dkim\_domain
- dkim\_selector
- dkim\_private\_key

Note:

Before you get started, it is important to know that Zoho ZeptoMail is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, you can visit [Zoho Campaigns](https://www.zoho.com/campaigns/).

#### Transition API code

CurlJavaPythonPHPCsharp

```curl
Copiedcurl -X POST \
 -H "Accept: application/json" \
 -H "Content-Type: application/json" \
 "https://api.zeptomail.com/v1.1/mc/email" \
 -H "Authorization: <send mail token>" \
 -d '{
  "headers" : {
    "key" : "headers"
  },
  "personalizations" : [ {\
    "cc" : [ {\
      "name" : "name",\
      "email" : "email"\
    } ],\
    "bcc" : [ {\
      "name" : "name",\
      "email" : "email"\
    } ],\
    "to" : [ {\
      "name" : "name",\
      "email" : "email"\
    } ]\
  } ],
  "from" : {
    "name":"name",
    "email":"email"
  },
  "subject" : "subject",
  "content" : [ {\
    "type" : "text",\
    "value" : "value"\
  } ]
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
        String postUrl = "https://api.zeptomail.com/v1.1/mc/email";
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
            JSONObject object = new JSONObject("{
                \"headers\" : { \"<key>\" : \"<headers>\" },
                \"from\": { \"email\": \"<fromName>\", \"name\": \"<fromAddress@example.com>\" },
                \"personalizations\" : [ {\
                    \"cc\" : [ { \"name\" : \"<ccName>\", \"email\" : \"<ccAddress@example.com>\" } ],\
                    \"bcc\" : [ { \"name\" : \"<bccName>\", \"email\" : \"<bccAddress@example.com>\" } ],\
                    \"to\" : [ { \"name\" : \"<toName>\", \"email\" : \"<toAddress@example.com>\" } ] } ],
                \"subject\" : \"Test subject\",
                \"content\" : [ { \"type\" : \"<html/text>\", \"value\" : \"<This is a test email>\" } ],
                \"reply_to\" : { \"email\": \"<replyToName>\", \"name\": \"<replyToAddress@example.com>\" }
            }");
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

url = "https://api.zeptomail.com/v1.1/mc/email"

payload = "{ \"headers\" : { \"<key>\" : \"<headers>\" }, \"from\": { \"email\": \"<fromName>\", \"name\": \"<fromAddress@example.com>\" }, \"personalizations\" : [ { \"cc\" : [ { \"name\" : \"<ccName>\", \"email\" : \"<ccAddress@example.com>\" } ], \"bcc\" : [ { \"name\" : \"<bccName>\", \"email\" : \"<bccAddress@example.com>\" } ], \"to\" : [ { \"name\" : \"<toName>\", \"email\" : \"<toAddress@example.com>\" } ] } ], \"subject\" : \"Test subject\", \"content\" : [ { \"type\" : \"<html/text>\", \"value\" : \"<This is a test email>\" } ], \"reply_to\" : { \"email\": \"<replyToName>\", \"name\": \"<replyToAddress@example.com>\" } }"
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
    CURLOPT_URL => "https://api.zeptomail.com/v1.1/mc/email",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => '{
        "headers": {
            "<key>": "<headers>"
        },
        "from": {
            "email": "<fromName>",
            "name": "<fromAddress@example.com>"
        },
        "personalizations": [\
            {\
            "cc": [\
                {\
                "name": "<ccName>",\
                "email": "<ccAddress@example.com>"\
                }\
            ],\
            "bcc": [\
                {\
                "name": "<bccName>",\
                "email": "<bccAddress@example.com>"\
                }\
            ],\
            "to": [\
                {\
                "name": "<toName>",\
                "email": "<toAddress@example.com>"\
                }\
            ]\
            }\
        ],
        "subject": "Test subject",
        "content": [\
            {\
            "type": "<html/text>",\
            "value": "<This is a test email>"\
            }\
        ],
        "reply_to": {
            "email": "<replyToName>",
            "name": "<replyToAddress@example.com>"
        }
    }'
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
            var baseAddress = "https://api.zeptomail.com/v1.1/mc/email";

            var http = (HttpWebRequest)WebRequest.Create(new Uri(baseAddress));
            http.Accept = "application/json";
            http.ContentType = "application/json";
            http.Method = "POST";
            http.PreAuthenticate = true;
            http.Headers.Add("Authorization", "<send_mail_token>");
            JObject parsedContent = JObject.Parse("{
                'headers' : {
                    '<key>' : '<headers>'
                },
                'from': {
                    'email': '<fromName>',
                    'name': '<fromAddress@example.com>'
                },
                'personalizations' : [ {\
                    'cc' : [ {\
                        'name' : '<ccName>',\
                        'email' : '<ccAddress@example.com>'\
                    } ],\
                    'bcc' : [ {\
                        'name' : '<bccName>',\
                        'email' : '<bccAddress@example.com>'\
                    } ],\
                    'subject' : 'Test subject',\
                    'to' : [ {\
                        'name' : '<toName>',\
                        'email' : '<toAddress@example.com>'\
                    } ]\
                } ],
                'content' : [ {\
                    'type' : '<html/text>',\
                    'value' : '<This is a test email>'\
                } ],
                'reply_to' : {
                    'email': '<replyToName>',
                    'name': '<replyToAddress@example.com>'
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

Show full

Show less
