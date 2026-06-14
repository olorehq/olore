<!-- source: https://www.zoho.com/zeptomail/help/amazon-ses-transition-api.html -->

# Transition API for Amazon SES to Zoho ZeptoMail

If you currently send transactional emails using Amazon SES, this guide will help you modify your existing code to send them through Zoho ZeptoMail with minimal changes.

## Purpose

Modify your existing code to send transactional emails from Zoho ZeptoMail.

## Migration procedure

Follow the steps below:

1. Create a ZeptoMail account.
   - Refer this [help guide](https://www.zoho.com/zeptomail/help/getting-started.html) to get started.
2. Verify your email-sending domain.
   - Use our domain verification guide [here](https://www.zoho.com/zeptomail/help/domains.html) to add and verify your domain.
3. Create your  Agent. Agents help segment your emails based on your preference.
4. Generate the Send Mail Token. This is the authorization token that you will use to authenticate your API requests. You can obtain this from the desired **Agent** in your ZeptoMail account. Use the send mail token as a **header** when you call ZeptoMail REST Email Sending API. Follow the steps below to generate the send mail token.
1. In the Agents tab on the left panel of your [ZeptoMail account](https://zeptomail.zoho.com/), select the Agent that you want to connect to your application.
2. Navigate to the **SMTP/API** tab in the Agent.
3. From here you can copy the Agent-specific send mail token from the API tab.
4. You can use the default Send Mail Token or generate a new one.

## Request URL

https://api.zeptomail.com/v1.1/as/email

_**Query String:**_

Method: POST

HOST: https://api.zeptomail.com/v1.1/as/email

Header:

Authorization: zoho-enczapikey <space> <send mail token>

## **Request Body (JSON object)**

- **Headers**JSON object



  - The additional headers to be sent in the email for your reference purposes.

- **Content** JSON object



  - Contains the entire content of the email including the email headers and the content.

  - **Simple** JSON object



    - The email body along with the subject and body.

    - **Body** JSON object



      - Body of the message. Either a HTML body, text body or both can be included.
      - **HTML** JSON object



        - The email body with HTML tags, hyperlinks and messages. This format will be displayed for clients that support this format.

      - **Text** JSON object



        - The email body that will display the plain text format of the message.

    - **Subject** JSON object



      - Subject line of the email.
- **Destination** JSON object



  - Contains all the recipient information. The following parameters will be included in this section :
  - **BCCAddresses** Array



    - Contains the BCC'd recipients.

  - **CCAddresses** Array



    - Contains the CC'd recipients.

  - **ToAddresses** Array



    - Contains the recipients' information.

- **FeedbackForwardingEmailAddress** String



  - Specifies the bounce and feedback email addresses.

- **ReplyToAddresses** Array



  - The "reply-to" email addresses. This email address receives the message when a recipient replies to an email.

CurlJavaPythonPHPNode JSC

```curl
Copiedcurl -X POST https://api.zeptomail.com/v1.1/as/email \
-H "Authorization: Zoho-enczapikey YOUR_API_KEY_HERE" \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-d '{
  "Content": {
    "Simple": {
      "Body": {
        "Html": {
          "Charset": "UTF-8",
          "Data": "<p>Hello</p>"
        },
        "Text": {
          "Charset": "UTF-8",
          "Data": "Hello"
        }
      },
      "Subject": {
        "Charset": "UTF-8",
        "Data": "Test subject"
      }
    }
  },
  "Destination": {
    "BccAddresses": [\
      "recipient1@example.com"\
    ],
    "CcAddresses": [\
      "recipient2@example.com"\
    ],
    "ToAddresses": [\
      "recipient3@example.com"\
    ]
  },
  "FeedbackForwardingEmailAddress": "bounce@example.com",
  "FromEmailAddress": "sender@example.com",
  "ReplyToAddresses": [\
    "reply@example.com"\
  ]
}'
```

```java
Copiedimport java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;
import org.json.JSONObject;

public class ZeptoMailApi {
    public static void main(String[] args) {
        try {
            // API endpoint URL
            URL url = new URL("https://api.zeptomail.com/v1.1/as/email");

            // Create a JSON object for the payload
            JSONObject payload = new JSONObject();

            JSONObject htmlBody = new JSONObject();
            htmlBody.put("Charset", "UTF-8");
            htmlBody.put("Data", "<p>Hello</p>");

            JSONObject textBody = new JSONObject();
            textBody.put("Charset", "UTF-8");
            textBody.put("Data", "Hello");

            JSONObject body = new JSONObject();
            body.put("Html", htmlBody);
            body.put("Text", textBody);

            JSONObject subject = new JSONObject();
            subject.put("Charset", "UTF-8");
            subject.put("Data", "Test subject");

            JSONObject simple = new JSONObject();
            simple.put("Body", body);
            simple.put("Subject", subject);

            JSONObject content = new JSONObject();
            content.put("Simple", simple);

            payload.put("Content", content);

            JSONObject destination = new JSONObject();
            destination.put("BccAddresses", new String[] {"recipient1@example.com"});
            destination.put("CcAddresses", new String[] {"recipient2@example.com"});
            destination.put("ToAddresses", new String[] {"recipient3@example.com"});
            payload.put("Destination", destination);

            payload.put("FeedbackForwardingEmailAddress", "bounce@example.com");
            payload.put("FromEmailAddress", "sender@example.com");
            payload.put("ReplyToAddresses", new String[] {"reply@example.com"});

            // Set up the connection
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Authorization", "Zoho-enczapikey YOUR_API_KEY_HERE");
            conn.setRequestProperty("Accept", "application/json");
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setDoOutput(true);

            // Write payload to request body
            try (OutputStream os = conn.getOutputStream()) {
                byte[] input = payload.toString().getBytes("utf-8");
                os.write(input, 0, input.length);
            }

            // Get the response
            Scanner scanner = new Scanner(conn.getInputStream(), "UTF-8");
            String response = scanner.useDelimiter("\\A").next();
            scanner.close();
            System.out.println("Response: " + response);
            conn.disconnect();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

```python
Copiedimport requests
import json

# API endpoint URL
url = "https://api.zeptomail.com/v1.1/as/email"

# Payload containing email details
payload = {
    "Content": {
        "Simple": {
            "Body": {
                "Html": {
                    "Charset": "UTF-8",
                    "Data": "<p>Hello from Example</p>"
                },
                "Text": {
                    "Charset": "UTF-8",
                    "Data": "Hello from Example"
                }
            },
            "Subject": {
                "Charset": "UTF-8",
                "Data": "Test subject"
            }
        }
    },
    "Destination": {
        "BccAddresses": [\
            "recipient1@example.com"\
        ],
        "CcAddresses": [\
            "recipient2@example.com"\
        ],
        "ToAddresses": [\
            "recipient3@example.com"\
        ]
    },
    "FeedbackForwardingEmailAddress": "bounce@example.com",
    "FromEmailAddress": "sender@example.com",
    "ReplyToAddresses": [\
        "reply@example.com"\
    ]
}

# Headers containing authorization and content-type
headers = {
    "Authorization": "Zoho-enczapikey YOUR_API_KEY_HERE",
    "Accept": "application/json",
    "Content-Type": "application/json"
}

# Sending POST request to the API endpoint
try:
    response = requests.post(url, headers=headers, data=json.dumps(payload))
    response.raise_for_status()  # Raise error if HTTP request failed
    result = response.json()  # Parse JSON response
    print(result)
except requests.exceptions.RequestException as err:
    print(f"Error: {err}")
```

```php
Copied<?php

// API endpoint URL
$url = "https://api.zeptomail.com/v1.1/as/email";

// Payload containing email details
$payload = [\
    "Content" => [\
        "Simple" => [\
            "Body" => [\
                "Html" => [\
                    "Charset" => "UTF-8",\
                    "Data" => "<p>Hello from Example</p>"\
                ],\
                "Text" => [\
                    "Charset" => "UTF-8",\
                    "Data" => "Hello from Example"\
                ]\
            ],\
            "Subject" => [\
                "Charset" => "UTF-8",\
                "Data" => "Test subject"\
            ]\
        ]\
    ],\
    "Destination" => [\
        "BccAddresses" => [\
            "recipient1@example.com"\
        ],\
        "CcAddresses" => [\
            "recipient2@example.com"\
        ],\
        "ToAddresses" => [\
            "recipient3@example.com"\
        ]\
    ],\
    "FeedbackForwardingEmailAddress" => "bounce@example.com",\
    "FromEmailAddress" => "sender@example.com",\
    "ReplyToAddresses" => [\
        "reply@example.com"\
    ]\
];

// Headers containing authorization and content-type
$headers = [\
    "Authorization: Zoho-enczapikey YOUR_API_KEY_HERE",\
    "Accept: application/json",\
    "Content-Type: application/json"\
];

// Initialize cURL session
$ch = curl_init($url);

// Set cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));

// Execute the POST request
$response = curl_exec($ch);

// Check for errors
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
Copiedfetch("https://api.zeptomail.com/v1.1/as/email", {
    body: JSON.stringify({
        "Content": {
            "Simple": {
                "Body": {
                    "Html": {
                      "Charset": " UTF-8",
                      "Data": "<p>Hello</p>"
                    },
                    "Text": {
                        "Charset": "UTF-8",
                        "Data": "Hello"
                    }
                },
                "Subject": {
                    "Charset": "UTF-8",
                    "Data": "Test subject"
                }
            }
        },
        "Destination": {
          "BccAddresses": [\
            "bcc@example.com"\
            ],
          "CcAddresses": [\
            "cc@example.com"\
            ],
          "ToAddresses": [\
            "recipient@example.com"\
            ]
        },
        "FeedbackForwardingEmailAddress": "bounce@example.com",
        "FromEmailAddress": "sender@example.com",
        "ReplyToAddresses": [\
          "reply@example.com"\
        ]
    }),
    method: "POST",
    headers: {
        "Authorization": "Zoho-enczapikey <your-api-key>",
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
})
.then(async (resp) => {
    if (resp.ok) {
        let result = await resp.json();
        console.log(result);
    } else {
        console.log(`Error: ${resp.statusText}`);
        const errorBody = await resp.text();
        console.log(`Error body: ${errorBody}`);
    }
})
.catch((err) => {
    console.log('Error sending email:', err);
});
```

```c
Copiedusing System;
using System.IO;
using System.Net;
using System.Text;
using Newtonsoft.Json;

namespace ZeptoMailRequest
{
    public class Program
    {
        public static void Main(string[] args)
        {
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
            var baseAddress = "https://api.zeptomail.com/v1.1/as/email";
            var http = (HttpWebRequest)WebRequest.Create(new Uri(baseAddress));
            http.Accept = "application/json";
            http.ContentType = "application/json";
            http.Method = "POST";
            http.PreAuthenticate = true;

            http.Headers.Add("Authorization", "Zoho-enczapikey <your-api-key>");

            var payload = new
            {
                Content = new
                {
                    Simple = new
                    {
                        Body = new
                        {
                            Html = new
                            {
                                Charset = "UTF-8",
                                Data = "<p>Hello</p>"
                            },
                            Text = new
                            {
                                Charset = "UTF-8",
                                Data = "Hello"
                            }
                        },
                        Subject = new
                        {
                            Charset = "UTF-8",
                            Data = "Test subject"
                        }
                    }
                },
                Destination = new
                {
                    BccAddresses = new[] { "recipient1@example.com" },
                    CcAddresses = new[] { "recipient2@example.com" },
                    ToAddresses = new[] { "recipient3@example.com" }
                },
                FeedbackForwardingEmailAddress = "bounce@example.com",
                FromEmailAddress = "from@example.com",
                ReplyToAddresses = new[] { "reply@example.com" }
            };

            string jsonPayload = JsonConvert.SerializeObject(payload);

            byte[] bytes = Encoding.UTF8.GetBytes(jsonPayload);

            using (Stream newStream = http.GetRequestStream())
            {
                newStream.Write(bytes, 0, bytes.Length);
            }

            using (var response = http.GetResponse())
            {
                using (var stream = response.GetResponseStream())
                {
                    using (var sr = new StreamReader(stream))
                    {
                        var content = sr.ReadToEnd();
                        Console.WriteLine(content);
                    }
                }
            }
        }
    }
}
```

Show full

Show less
