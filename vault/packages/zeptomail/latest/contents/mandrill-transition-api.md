<!-- source: https://www.zoho.com/zeptomail/help/mandrill-transition-api.html -->

# Transition API for Mailchimp transactional to Zoho ZeptoMail

The following document gives the transition API for Mailchimp users opting [Zoho ZeptoMail](https://www.zoho.com/zeptomail/) for their transactional email sending.

## Purpose

Modify your existing code to send transactional emails from Zoho ZeptoMail.

## Request URL

https://api.zeptomail.com/v1.1/md/email

## Authorization token

You need to add send mail token to authenticate your API requests. This is a unique token that you can obtain from the **Agent** in your ZeptoMail account. Use the send mail token as a **header** when you call ZeptoMail REST Email Sending API.

To generate a send mail token, you should have a ZeptoMail account with a verified domain added to it. Follow the steps given [here](https://www.zoho.com/zeptomail/help/getting-started.html) to create your ZeptoMail account. Once you create an account, you can generate the send mail token using the steps given below :

### Steps to generate Send mail token:

1. In the Agents tab on the left panel of your [ZeptoMail account](https://zeptomail.zoho.com/), select the Agent that you want to connect to your application.
2. Navigate to the **SMTP/API** tab within the Agent.
3. From here you can copy the Agent-specific send mail token from the API tab.
4. You can use the default Send Mail Token or generate a new one.

### **Example**

POST /v1.1/md/email

_**Query String:**_

Method: POST

HOST: https://api.zeptomail.com/v1.1/md/email

Header:

Authorization: zoho-enczapikey <space> <send mail token>

## **Request Body (JSON object)**

- **Headers**JSON object



  - The additional headers to be sent in the email for your reference purposes.

- **Message** JSON object



  - All the content included within the email's body.

**Allowed value** \- JSON object of email\_address.

  - **Subject** String



    - Subject of the email that is being sent.

  - **html** String



    - HTML body of the email.

  - **from\_email** String



    - Sender's email address.

  - **from\_name** String



    - Sender's name.

  - **to** String



    - Details of the to field. It includes the following parameters :

    - **cc** String



      - The cc fields.

    - **bcc** String



      - The bcc fields.
  - **attachment** String



    - The attachments sent along with a message. The following parameters will be used in attachments :

    - **name** String



      - The attachment's file name.

    - **content** String



      - The attachment's content encoded in base 64 format.
  - **image** Array



    - The embedded images in the message.

    - **name** String



      - Content id of the image.

    - **content** String



      - The content of the image in the base 64 encoded format.

CurlJavaPythonPHPCsharpNode JS

```curl
Copiedcurl "https://api.zeptomail.com/v1.1/md/email" \
        -X POST \
        -H "Accept: application/json" \
        -H "Content-Type: application/json" \
        -H "Authorization: Zoho-enczapikey ***" \
        -d '{
	"headers" : {"key": "headers"},
	"message": {
	  "subject": "Your Example Order Confirmation",
	  "html": "<h1> This is a Test email </h1>",
	  "from_email": "rebecca@example.in",
	  "from_name": "Rebecca",
	  "to": [\
	      {"email": "john@example.com", "name": "John", "type": "to"},\
	      {"email": "julia@example.com", "name": "Julia", "type": "to"},\
	      {"email": "jane@example.com", "name": "Jane", "type": "cc"},\
	      {"email": "jim@example.com", "name": "Jim", "type": "bcc"}\
	  ],
	  "attachments": [\
	     {"name": "attachment.pdf", "type": "text/pdf", "content": "[base64 content]"}\
	   ],
	  "images": [\
	    {"name": "Image name", "type": "image/png", "content": "[base64 content]"}\
	  ]
        }}'
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
        String postUrl = "https://api.zeptomail.com/v1.1/md/email";
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
            JSONObject object = new JSONObject("
		    \"headers\" : { \"key\" : \"headers\" },
		    \"message\": { \"subject\": \"Your Example Order Confirmation\",
			    \"html\": \"<h1> This is a Test email </h1>\",
			    \"from_email\": \"rebecca@example.in\",
			    \"from_name\": \"Rebecca\",
			    \"to\": [\
			    	{\"email\": \"john@example.com\", \"name\": \"John\", \"type\": \"to\"},\
			    	{\"email\": \"julia@example.com\", \"name\": \"Julia\", \"type\": \"to\"},\
			    	{\"email\": \"jane@example.com\", \"name\": \"Jane\", \"type\": \"cc\"},\
			    	{\"email\": \"jim@example.com\", \"name\": \"Jim\", \"type\": \"bcc\"}],
			    \"attachments\": [{\"name\": \"attchment.pdf\", \"type\": \"text/pdf\", \"content\": [base64 content]}],
			    \"images\": [{\"name\": \"Image name\", \"type\": \"image/png\", \"content\": \"[base64 content]\"}]}
	    	");
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

url = "https://api.zeptomail.com/v1.1/md/email"

payload = "{ \"headers\" : { \"key\" : \"headers\" }, \"message\": { \"subject\": \"Your Example Order Confirmation\", \"html\": \"<h1> This is a Test email </h1>\", \"from_email\": \"rebecca@example.in\", \"from_name\": \"Rebecca\", \"to\": [{\"email\": \"john@example.com\", \"name\": \"John\", \"type\": \"to\"}, {\"email\": \"julia@example.com\", \"name\": \"Julia\", \"type\": \"to\"}, {\"email\": \"jane@example.com\", \"name\": \"Jane\", \"type\": \"cc\"}, {\"email\": \"jim@example.com\", \"name\": \"Jim\", \"type\": \"bcc\"}], \"attachments\": [{\"name\": \"attchment.pdf\", \"type\": \"text/pdf\", \"content\": [base64 content]}], \"images\": [{\"name\": \"Image name\", \"type\": \"image/png\", \"content\": \"[base64 content]\"}]} }"
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
    CURLOPT_URL => "https://api.zeptomail.com/v1.1/md/email",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => '{
       "headers": {"key": "headers"},
       "message": {
          "subject": "Your Example Order Confirmation",
          "html": "<h1> This is a Test email </h1>",
          "from_email": "rebecca@example.in",
          "from_name": "Rebecca",
          "to": [\
            {\
              "email": "john@example.com",\
              "name": "John",\
              "type": "to"\
            },\
            {\
              "email": "julia@example.com",\
              "name": "Julia",\
              "type": "to"\
            },\
            {\
              "email": "jane@example.com",\
              "name": "Jane",\
              "type": "cc"\
            },\
            {\
              "email": "jim@example.com",\
              "name": "Jim",\
              "type": "bcc"\
            }\
          ],
          "attachments": [\
            {\
              "name": "attachment.pdf",\
              "type": "text/pdf",\
              "content": "[base64 content]"\
            }\
          ],
          "images": [\
            {\
              "name": "Image name",\
              "type": "image/png",\
              "content": "[base64 content]"\
            }\
          ]
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
            var baseAddress = "https://api.zeptomail.com/v1.1/md/email";

            var http = (HttpWebRequest)WebRequest.Create(new Uri(baseAddress));
            http.Accept = "application/json";
            http.ContentType = "application/json";
            http.Method = "POST";
            http.PreAuthenticate = true;
            http.Headers.Add("Authorization", "Zoho-enczapikey ***");
            JObject parsedContent = JObject.Parse("{
               "headers": {"key": "headers"},
	       "message": {
		  "subject": "Your Example Order Confirmation",
		  "html": "<h1> This is a Test email </h1>",
		  "from_email": "rebecca@example.in",
		  "from_name": "Rebecca",
		  "to": [\
		    {\
		      "email": "john@example.com",\
		      "name": "John",\
		      "type": "to"\
		    },\
		    {\
		      "email": "julia@example.com",\
		      "name": "Julia",\
		      "type": "to"\
		    },\
		    {\
		      "email": "jane@example.com",\
		      "name": "Jane",\
		      "type": "cc"\
		    },\
		    {\
		      "email": "jim@example.com",\
		      "name": "Jim",\
		      "type": "bcc"\
		    }\
		  ],
		  "attachments": [\
		    {\
		      "name": "attachment.pdf",\
		      "type": "text/pdf",\
		      "content": "[base64 content]"\
		    }\
		  ],
		  "images": [\
		    {\
		      "name": "Image name",\
		      "type": "image/png",\
		      "content": "[base64 content]"\
		    }\
		  ]
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
Copiedfetch("https://api.zeptomail.com/v1.1/md/email", {
    body: JSON.stringify({
        "message": {
          "subject": "Your Example Order Confirmation",
          "html": "<h1> This is a Test email </h1>",
          "from_email": "rebecca@example.in",
          "from_name": "Rebecca",
          "to": [\
            {\
              "email": "john@example.com",\
              "name": "John",\
              "type": "to"\
            },\
            {\
              "email": "julia@example.com",\
              "name": "Julia",\
              "type": "to"\
            },\
            {\
              "email": "jane@example.com",\
              "name": "Jane",\
              "type": "cc"\
            },\
            {\
              "email": "jim@example.com",\
              "name": "Jim",\
              "type": "bcc"\
            }\
          ],
          "attachments": [\
            {\
              "name": "attachment.pdf",\
              "type": "text/pdf",\
              "content": "[base64 content]"\
            }\
          ],
          "images": [\
            {\
              "name": "Image name",\
              "type": "image/png",\
              "content": "[base64 content]"\
            }\
          ]
        }
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
