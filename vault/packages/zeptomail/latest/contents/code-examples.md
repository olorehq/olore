<!-- source: https://www.zoho.com/zeptomail/help/code-examples.html -->

# Sample codes for common use cases

Given below are examples for common use cases to help you get started with ZeptoMail.

#### Sending test email

CurlPHPPythonNode JS

```curl
Copiedcurl "https://api.zeptomail.com/v1.1/email" \
        -X POST \
        -H "Accept: application/json" \
        -H "Content-Type: application/json" \
        -H "Authorization:Zoho-enczapikey ****" \
        -d '{
        "from": {"address": "invoice@zylker.com"},
        "to": [{"email_address": {"address": "rebecca@zohomail.com","name": "Rebecca"}}],
        "subject":"Test Email",
        "htmlbody":"<div><b> Test email sent successfully. </b></div>"}'


```

```php
Copied<?php

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.zeptomail.com/v1.1/email",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_SSLVERSION => CURL_SSLVERSION_TLSv1_2,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => '{
"from": { "address": "invoice@zylker.com"},
"to": [{"email_address": {"address": "rebecca@zohomail.com","name": "Rebecca"}}],
"subject":"Test Email",
"htmlbody":"<div><b> Test email sent successfully. </b></div>",
}',
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

```python
Copiedimport requests
import json

url = "https://api.zeptomail.com/v1.1/email"

payload = "{ "from": { "address": "invoice@zylker.com"}, "to": [{"email_address": {"address": "rebecca@zohomail.com","name": "Rebecca"}}], "subject":"Test Email", "htmlbody":"<div><b> Test email sent successfully. </b></div>" }"
json_str = json.dumps(payload)
headers = {
'accept': "application/json",
'content-type': "application/json",
'authorization': "Zoho-enczapikey ****",
}

response = requests.request("POST", url, data=json_str, headers=headers)

print(response.text)
```

```nodejs
Copied// For ES6, set type: "module" in package.json.
import { SendMailClient } from "zeptomail";

// For CommonJS
var { SendMailClient } = require("zeptomail");

const url = "https://api.zeptomail.com/v1.1/email";
const token = "Zoho-enczapikey ***";

let client = new SendMailClient({url, token});

client.sendMail({
    "from": {
        "address": "invoice@zylker.com"
    },
    "to": [\
        {\
            "email_address": {\
                "address": "rebecca@zohomail.com",\
                "name": "Rebecca"\
            }\
        }\
    ],
    "subject": "Test Email",
    "htmlbody": "<div><b> Test email sent successfully. </b></div>"
}).then((resp) => console.log("success")).catch((error) => console.log("error"));
```

Show full

Show less

#### Send an email with attachment (base64)

CurlPHPPythonNode JS

```curl
Copiedcurl "https://api.zeptomail.com/v1.1/email" \
        -X POST \
        -H "Accept: application/json" \
        -H "Content-Type: application/json" \
        -H "Authorization:Zoho-enczapikey ****" \
        -d '{
        "from": {"address": "welcome@zylker.com"},
        "to": [{"email_address": {"address": "paula@zohomail.com","name": "Paula"}}],
        "subject":"Test Email",
        "htmlbody":"<div><b> Test email sent successfully. </b></div>",
	"attachments" : [{\
				"name" : "attachment.txt",\
				"content" : "base64 encoded attachment",\
				"mime_type" : "plain/txt"\
			}]
}'
```

```php
Copied<?php

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.zeptomail.com/v1.1/email",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_SSLVERSION => CURL_SSLVERSION_TLSv1_2,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => '{
"from": { "address": "welcome@zylker.com"},
"to": [{"email_address": {"address": "paula@zohomail.com","name": "Paula"}}],
"subject":"Test Email",
"htmlbody":"<div><b> Test email sent successfully. </b></div>",
"attachments" : [{\
				"name" : "attachment.txt",\
				"content" : "base46 encoded attachment",\
				"mime_type" : "plain/txt"\
			}]
}',
    CURLOPT_HTTPHEADER => array(
        "accept: application/json",
        "authorization: Zoho-enczapikey ****",
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

```python
Copiedimport requests
import json

url = "https://api.zeptomail.com/v1.1/email"

payload = "{ "from": {"address": "welcome@zylker.com"}, "to": [{"email_address": {"address": "paula@zohomail.com","name": "Paula"}}], "subject":"Test Email", "htmlbody":"<div><b> Test email sent successfully. </b></div>", "attachments" : [{ "name" : "attachment.txt", "content" : "base64 encoded attachment", "mime_type" : "plain/txt" }] }"
json_str = json.dumps(payload)
headers = {
'accept': "application/json",
'content-type': "application/json",
'authorization': "Zoho-enczapikey ***",
}

response = requests.request("POST", url, data=json_str, headers=headers)

print(response.text)
```

```nodejs
Copied// For ES6, set type: "module" in package.json.
import { SendMailClient } from "zeptomail";

// For CommonJS
var { SendMailClient } = require("zeptomail");

const url = "https://api.zeptomail.com/v1.1/email";
const token = "Zoho-enczapikey ***";

let client = new SendMailClient({url, token});

client.sendMail({
    "from": {
        "address": "welcome@zylker.com"
    },
    "to": [\
        {\
            "email_address": {\
                "address": "paula@zohomail.com",\
                "name": "Paula"\
            }\
        }\
    ],
    "subject": "Test Email",
    "htmlbody": "<div><b> Test email sent successfully. </b></div>",
    "attachments": [\
        {\
            "name": "attachment.txt",\
            "content": "base64 encoded attachment",\
            "mime_type": "plain/txt"\
        }\
    ]
}).then((resp) => console.log("success")).catch((error) => console.log("error"));
```

Show full

Show less

#### Send email with attachment (using filecache)

CurlPHPPythonNode JS

```curl
Copiedcurl "https://api.zeptomail.com/v1.1/email" \
        -X POST \
        -H "Accept: application/json" \
        -H "Content-Type: application/json" \
        -H "Authorization:Zoho-enczapikey ***" \
        -d '{
        "from": {"address": "welcome@zylker.com"},
        "to": [{"email_address": {"address": "john@zohomail.com","name": "John"}}],
        "subject":"Test Email",
        "htmlbody":"<div><b> Test email sent successfully. </b></div>",
	"attachments" : [{\
				"file_cache_key" : "ea36f19a.1033669632ce7549.h1.465b2bc0-198c-11ee-910a-8a90785fcf47.1891b4b707c"\
			}]
}'
```

```php
Copied<?php

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.zeptomail.com/v1.1/email",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_SSLVERSION => CURL_SSLVERSION_TLSv1_2,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => '{
"from": { "address": "welcome@zylker.com"},
"to": [{"email_address": {"address": "john@zohomail.com","name": "John"}}],
"subject":"Test Email",
"htmlbody":"<div><b> Test email sent successfully. </b></div>",
"attachments" : [{\
				"file_cache_key" : "2d6f.2b020fa1.h1.3ada1be0-1b20-11ee-a926-525400103106.18925a2cc9e"\
			}]
}',
    CURLOPT_HTTPHEADER => array(
        "accept: application/json",
        "authorization: Zoho-enczapikey ****",
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

```python
Copiedimport requests
import json

url = "https://api.zeptomail.com/v1.1/email"

payload = "{ "from": {"address": "welcome@zylker.com"}, "to": [{"email_address": {"address": "john@zohomail.com","name": "John"}}], "subject":"Test Email", "htmlbody":"<div><b> Test email sent successfully. </b></div>", "attachments" : [{ "file_cache_key" : "ea36f19a.1033669632ce7549.h1.465b2bc0-198c-11ee-910a-8a90785fcf47.1891b4b707c" }] }"
json_str = json.dumps(payload)
headers = {
'accept': "application/json",
'content-type': "application/json",
'authorization': "Zoho-enczapikey ****",
}

response = requests.request("POST", url, data=json_str, headers=headers)

print(response.text)
```

```nodejs
Copied// For ES6, set type: "module" in package.json.
import { SendMailClient } from "zeptomail";

// For CommonJS
var { SendMailClient } = require("zeptomail");

const url = "https://api.zeptomail.com/v1.1/email";
const token = "Zoho-enczapikey ***";

let client = new SendMailClient({url, token});

client.sendMail({
    "from": {
        "address": "welcome@zylker.com"
    },
    "to": [\
        {\
            "email_address": {\
                "address": "john@zohomail.com",\
                "name": "John"\
            }\
        }\
    ],
    "subject": "Test Email",
    "htmlbody": "<div><b> Test email sent successfully. </b></div>",
    "attachments": [\
        {\
            "file_cache_key": "ea36f19a.1033669632ce7549.h1.465b2bc0-198c-11ee-910a-8a90785fcf47.1891b4b707c"\
        }\
    ]
}).then((resp) => console.log("success")).catch((error) => console.log("error"));
```

Show full

Show less

#### Send email to multiple recipients

CurlPHPPythonNode JS

```curl
Copiedcurl "https://api.zeptomail.com/v1.1/email" \
        -X POST \
        -H "Accept: application/json" \
        -H "Content-Type: application/json" \
        -H "Authorization:Zoho-enczapikey ****" \
        -d '{
        "from": {"address": "notifications@zylker.com"},
        "to": [\
        	{"email_address": {"address": "natalie@zohomail.com","name": "Natalie"}},\
        	{"email_address": {"address": "samuel@zohomail.com","name": "Samuel"}}\
        	],
        "bcc": [\
        	{"email_address": {"address": "tim.h@zohomail.com","name": "Tim"}},\
        	{"email_address": {"address": "ruth.l@zohomail.com","name": "Ruth"}}\
        	],
        "cc": [\
        	{"email_address": {"address": "ron.g@zohomail.com","name": "Ron"}},\
        	{"email_address": {"address": "harry.p@zohomail.com","name": "Harry"}}\
        	],
        "subject":"Test Email",
        "htmlbody":"<div><b> Test email sent successfully. </b></div>"}'
```

```php
Copied<?php

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.zeptomail.com/v1.1/email",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_SSLVERSION => CURL_SSLVERSION_TLSv1_2,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => '{
"from": { "address": "notifications@zylker.com"},
"to": [\
        	{"email_address": {"address": "natalie@zohomail.com","name": "Natalie"}},\
        	{"email_address": {"address": "samuel@zohomail.com","name": "Samuel"}}\
        	],
        "bcc": [\
        	{"email_address": {"address": "tim.h@zohomail.com","name": "Tim"}},\
        	{"email_address": {"address": "ruth.l@zohomail.com","name": "Ruth"}}\
        	],
        "cc": [\
        	{"email_address": {"address": "ron.g@zohomail.com","name": "Ron"}},\
        	{"email_address": {"address": "harry.p@zohomail.com","name": "Harry"}}\
        	],"subject":"Test Email",
"htmlbody":"<div><b> Test email sent successfully. </b></div>",

}',
    CURLOPT_HTTPHEADER => array(
        "accept: application/json",
        "authorization: Zoho-enczapikey ****",
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

```python
Copiedimport requests
import json

url = "https://api.zeptomail.com/v1.1/email"

payload = "{ "from": {"address": "notifications@zylker.com"}, "to": [ {"email_address": {"address": "natalie@zohomail.com","name": "Natalie"}}, {"email_address": {"address": "samuel@zohomail.com","name": "Samuel"}} ], "bcc": [ {"email_address": {"address": "tim.h@zohomail.com","name": "Tim"}}, {"email_address": {"address": "ruth.l@zohomail.com","name": "Ruth"}} ], "cc": [ {"email_address": {"address": "ron.g@zohomail.com","name": "Ron"}}, {"email_address": {"address": "harry.p@zohomail.com","name": "Harry"}} ], "subject":"Test Email", "htmlbody":"<div><b> Test email sent successfully. </b></div>"}"
json_str = json.dumps(payload)
headers = {
'accept': "application/json",
'content-type': "application/json",
'authorization': "Zoho-enczapikey ****",
}

response = requests.request("POST", url, data=json_str, headers=headers)

print(response.text)
```

```nodejs
Copied// For ES6, set type: "module" in package.json.
import { SendMailClient } from "zeptomail";

// For CommonJS
var { SendMailClient } = require("zeptomail");

const url = "https://zeptomail.zoho.com/";
const token = "Zoho-enczapikey ****";

let client = new SendMailClient({url, token});

client.sendMail({
    "from": {
        "address": "notifications@zylker.com"
    },
    "to": [\
        {\
            "email_address": {\
                "address": "natalie@zohomail.com",\
                "name": "Natalie"\
            }\
        },\
        {\
            "email_address": {\
                "address": "jakson.m@zohomail.com",\
                "name": "Jackson"\
            }\
        }\
    ],
    "bcc": [\
        {\
            "email_address": {\
                "address": "samuel@zohomail.com",\
                "name": "Samuel"\
            }\
        },\
        {\
            "email_address": {\
                "address": "tim.h@zohomail.com",\
                "name": "Tim"\
            }\
        }\
    ],
    "cc": [\
        {\
            "email_address": {\
                "address": "ruth.l@zohomail.com",\
                "name": "Ruth"\
            }\
        },\
        {\
            "email_address": {\
                "address": "ron.g@zohomail.com",\
                "name": "Ron"\
            }\
        }\
    ],
    "subject": "Test Email",
    "htmlbody": "<div><b> Test email sent successfully. </b></div>"
}).then((resp) => console.log("success")).catch((error) => console.log("error"));
```

Show full

Show less

#### Single email template

CurlPHPPythonNode JS

```curl
Copiedcurl "https://api.zeptomail.com/v1.1/email/template" \
        -X POST \
        -H "Accept: application/json" \
        -H "Content-Type: application/json" \
        -H "Authorization:Zoho-enczapikey ****" \
        -d '{
        "from": {"address": "welcome@zfashions.com"},
        "to": [{"email_address": {"address": "erica.samuel@zohomail.com","name": "Erica"}}],
	"template_key": "ea36f19a.1033669632ce7549.k1.2b3eeef0-198a-11ee-910a-8a90785fcf47.1891b3da35f",
	"merge_info": {"header": "header", "footer" : "footer"}
	}'

```

```php
Copied<?php

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.zeptomail.com/v1.1/email/template",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_SSLVERSION => CURL_SSLVERSION_TLSv1_2,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => '{
"from": { "address": "welcome@zylker.com"},
"to": [{"email_address": {"address": "erica.samuel@zohomail.com","name": "Erica"}}],
"subject":"Test Email",
"htmlbody":"<div><b> Test email sent successfully. </b></div>",
"template_key": "2d6f.2b020fa1.k1.0bf691e0-de72-11ed-882e-52540064429e.18797f5f9fe",
	"merge_info": {"header": "header", "footer" : "footer"}
}',
    CURLOPT_HTTPHEADER => array(
        "accept: application/json",
        "authorization: Zoho-enczapikey ****",
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

```python
Copiedimport requests
import json

url = "https://api.zeptomail.com/v1.1/email/template"

payload = "{ "from": {"address": "welcome@zylker.com"}, "to": [{"email_address": {"address": "erica.samuel@zohomail.com","name": "Erica"}}], "template_key": "ea36f19a.1033669632ce7549.k1.2b3eeef0-198a-11ee-910a-8a90785fcf47.1891b3da35f", "merge_info": {"header": "header", "footer" : "footer"} }"
json_str = json.dumps(payload)
headers = {
'accept': "application/json",
'content-type': "application/json",
'authorization': "Zoho-enczapikey ***",
}

response = requests.request("POST", url, data=json_str, headers=headers)

print(response.text)
```

```nodejs
Copied// For ES6, set type: "module" in package.json.
import { SendMailClient } from "zeptomail";

// For CommonJS
var { SendMailClient } = require("zeptomail");

const url = "https://api.zeptomail.com/v1.1/email/template";
const token = "Zoho-enczapikey ***";

let client = new SendMailClient({url, token});

client.sendMail({
    "from": {
        "address": "welcome@zylker.com"
    },
    "to": [\
        {\
            "email_address": {\
                "address": "erica.samuel@zohomail.com",\
                "name": "Erica"\
            }\
        }\
    ],
    "template_key": "ea36f19a.1033669632ce7549.k1.2b3eeef0-198a-11ee-910a-8a90785fcf47.1891b3da35f",
    "merge_info": {
        "header": "header",
        "footer": "footer"
    }
}).then((resp) => console.log("success")).catch((error) => console.log("error"));
```

Show full

Show less

#### Batch email template

CurlPHPPythonNode JS

```curl
Copiedcurl "https://api.zeptomail.com/v1.1/email/template/batch" \
        -X POST \
        -H "Accept: application/json" \
        -H "Content-Type: application/json" \
        -H "Authorization:Zoho-enczapikey ***" \
        -d '{
        "from": {"address": "notifications@zylker.com"},
        "to": [\
        	{\
        	"email_address": {"address": "michael.s@zohomail.com","name": "Michael"},\
        	"merge_info": {"header": "header", "footer" : "footer"}\
        	},\
        	{\
        	"email_address": {"address": "anderson97@zohomail.com","name": "Anderson"},\
        	"merge_info": {"header": "header1", "footer" : "footer1"}\
        	}\
        ],
	"template_key": "ea36f19a.1033669632ce7549.k1.2b3eeef0-198a-11ee-910a-8a90785fcf47.1891b3da35f",
	}'
```

```php
Copied<?php

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.zeptomail.com/v1.1/email/template/batch",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_SSLVERSION => CURL_SSLVERSION_TLSv1_2,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => '{
"from": { "address": "notifications@zylker.com"},
"to": [\
        	{\
        	"email_address": {"address": "michael.s@zohomail.com","name": "Michael"},\
        	"merge_info": {"header": "header", "footer" : "footer"}\
        	},\
        	{\
        	"email_address": {"address": "anderson97@zohomail.com","name": "Anderson"},\
        	"merge_info": {"header": "header1", "footer" : "footer1"}\
        	}\
        ],"subject":"Test Email",
"htmlbody":"<div><b> Test email sent successfully. </b></div>",
"template_key": "2d6f.2b020fa1.k1.0bf691e0-de72-11ed-882e-52540064429e.18797f5f9fe",
}',
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

```python
Copiedimport requests
import json

url = "https://api.zeptomail.com/v1.1/email/template/batch"

payload = "{ "from": {"address": "notifications@zylker.com"}, "to": [ { "email_address": {"address": "michael.s@zohomail.com","name": "Michael"}, "merge_info": {"header": "header", "footer" : "footer"} }, { "email_address": {"address": "anderson97@zohomail.com","name": "Anderson"}, "merge_info": {"header": "header1", "footer" : "footer1"} } ], "template_key": "ea36f19a.1033669632ce7549.k1.2b3eeef0-198a-11ee-910a-8a90785fcf47.1891b3da35f", }"
json_str = json.dumps(payload)
headers = {
'accept': "application/json",
'content-type': "application/json",
'authorization': "Zoho-enczapikey ***",
}

response = requests.request("POST", url, data=json_str, headers=headers)

print(response.text)
```

```nodejs
Copied// For ES6, set type: "module" in package.json.
import { SendMailClient } from "zeptomail";

// For CommonJS
var { SendMailClient } = require("zeptomail");

const url = "https://api.zeptomail.com/v1.1/email/template/batch";
const token = "Zoho-enczapikey ****";

let client = new SendMailClient({url, token});

client.sendMail({
    "from": {
        "address": "notifications@zylker.com"
    },
    "to": [\
        {\
            "email_address": {\
                "address": "michael.s@zohomail.com",\
                "name": "Michael"\
            },\
            "merge_info": {\
                "header": "header",\
                "footer": "footer"\
            }\
        },\
        {\
            "email_address": {\
                "address": "anderson97@zohomail.com",\
                "name": "Anderson"\
            },\
            "merge_info": {\
                "header": "header1",\
                "footer": "footer1"\
            }\
        }\
    ],
    "template_key": "ea36f19a.1033669632ce7549.k1.2b3eeef0-198a-11ee-910a-8a90785fcf47.1891b3da35f"
}).then((resp) => console.log("success")).catch((error) => console.log("error"));
```

Show full

Show less

#### Send email with inline image (base64)

CurlPHPPythonNode JS

```curl
Copiedcurl "https://api.zeptomail.com/v1.1/email" \
        -X POST \
        -H "Accept: application/json" \
        -H "Content-Type: application/json" \
        -H "Authorization:Zoho-enczapikey ***" \
        -d '{
        "from": {"address": "invoice@zylker.com"},
        "to": [{"email_address": {"address": "george.m@zohomail.com","name": "George"}}],
        "subject":"Test Email",
	"htmlbody": "<html><body>Sample send mail<img src=\"cid:welcome_image_design\">",
	"inline_images": [\
        {\
            "content": "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mP8z8BQz0AEYBxVSF+FABJADveWkH6oAAAAAElFTkSuQmCC",\
            "mime_type": "image/jpg",\
            "cid": "welcome_image_design"\
        }\
    ]
    }'
```

```php
Copied<?php

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.zeptomail.com/v1.1/email",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_SSLVERSION => CURL_SSLVERSION_TLSv1_2,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => '{
"from": { "address": "invoice@zylker.com"},
"to": [{"email_address": {"address": "george.m@zohomail.com","name": "George"}}],
"subject":"Test Email",
"htmlbody": "<html><body>Sample send mail<img src=\"cid:img-welcome-design\">",
	"inline_images": [\
        {\
            "content": "/9j/4AAQSkZJRgABAQAAAQABAAD/4QBqRXhpZgAASUkqAAgAAAADABIBAwABAAAAAQAAADEBAgARAAAAMgAAAGmHBAABAAAARAAAAAAAAABTaG90d2VsbCAwLjMwLjE0AAACAAKgCQABAAAAUwAAAAOgCQABAAAAMQAAAAAAAAD/4QnwaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjgzIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iNDkiIHRpZmY6SW1hZ2VXaWR0aD0iODMiIHRpZmY6SW1hZ2VIZWlnaHQ9IjQ5IiB0aWZmOk9yaWVudGF0aW9uPSIxIi8+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/bAEMAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhQYEhQVFP/bAEMBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIADEAUwMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APhzw3rQ1K0ieRcSodr/AO93/Wp9d8K2WuBpHHk3OPlnTofQEd6wfBcoW5v9PmI80MXjIOcnPOK6WCdrefyZshSco1fTxSqRudFOzVmcLe+C9UtCdsS3aLzvgODj6ViujIzKylWBwQ3UH3r17ULmW1sJ54QZJkQ7cd/w715BLPJcySSSk+c7F2zwSScmuapFdERVjyOyEq/oBmOqQiFcrz5p7AdqpIDMyxqPmYgV22maVFpVsVUZmk5cnr9KVCnedzmbsXY2HYYqykh9aqfzqWJ+a9SxKui2soqVQr96q0I+09aLG3MWTDyeKKj+1Ad6KnmNOZHmEF3LZ3MU8MrRzR9Gz19q6SHxxJcFFv7dSvaWPjH4Vy/brke3SjAznHNeXCbhsY3fQ9Y0fU4r20WSCXzMcA9wKyvEPhOy1GQ3CL9nlPV4vX3Fcn4X1ZtH1AMCTBJw6HoPfFejTbLq08yJw8Z5Vu9dkGpnTFe0hdnG6T4TawvDc3En2hI/9WoGNxPcity4UhuTz3Oasebu5PU1HKvyiuiKUTkkmyqVOeppw4qRVVuO9I8RHStCR6S8AHmpODzVUDb1qeN+BQVcUgZoqTAPainZGh5iRgkelJRRXhkCh9pzXceBdUE1pNayHBjORn0NcNjNbvg9z/ajRhsF4iR7kGt6UrOxcZcjsdpcwtDcE4+U8ilUiSMjAz9KdHOLxTG5KzL61G8ckB5HB7ivRL06FOVTDJUquH70Tp5i7gd31qsnDelUYWLTxhh0qBg6etSxS84PNSnD9qYWIVuAFGSc0UNaqWJop3LuecUUUV4ZIVqeEP8AkPwf7r/zoorWn8SHH4jt/wDmKmtG+/49B9BRRXpmsNzNt/8AVNVb/lo31ooqjJ7ix/f/ABq3HRRTENPU/WiiigD/2Q==",\
            "mime_type": "image/jpg",\
            "cid": "img-welcome-design"\
        }\
    ]
}',
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

```python
Copiedimport requests
import json

url = "https://api.zeptomail.com/v1.1/email"

payload = "{"from": {"address": "invoice@zylker.com"}, "to": [{"email_address": {"address": "george.m@zohomail.com","name": "George"}}], "subject":"Test Email", "htmlbody": "<html><body>Sample send mail<img src=\"cid:welcome_img_design\">", "inline_images": [ { "content":\
"iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mP8z8BQz0AEYBxVSF+FABJADveWkH6oAAAAAElFTkSuQmCC",\
            "mime_type": "image/jpg",\
            "cid": "img-welcome-design"\
        }\
        ]
json_str = json.dumps(payload)
headers = {
'accept': "application/json",
'content-type': "application/json",
'authorization': "Zoho-enczapikey ****",
}

response = requests.request("POST", url, data=json_str, headers=headers)

print(response.text)
```

```nodejs
Copied// For ES6, set type: "module" in package.json.
import { SendMailClient } from "zeptomail";

// For CommonJS
var { SendMailClient } = require("zeptomail");

const url = "https://api.zeptomail.com/v1.1/email";
const token = "Zoho-enczapikey ***";

let client = new SendMailClient({url, token});

client.sendMail({
    "from": {
        "address": "invoice@zylker.com"
    },
    "to": [{\
        "email_address": {\
            "address": "george.m@zohomail.com",\
            "name": "George"\
        }\
    }],
    "subject": "Test Email",
    "htmlbody": "<html><body>Sample send mail<img src=\"cid:welcome_img_design\">",
    "inline_images": [{\
   "content":   "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mP8z8BQz0AEYBxVSF+FABJADveWkH6oAAAAAElFTkSuQmCC",\
            "mime_type": "image/jpg",\
            "cid": "welcome_img_design"\
        }\
        ]
}).then((resp) => console.log("success")).catch((error) => console.log("error"));
```

Show full

Show less

#### Send email with inline image (File-cache key)

CurlPHPPythonNode JS

```curl
Copiedcurl "https://api.zeptomail.com/v1.1/email" \
        -X POST \
        -H "Accept: application/json" \
        -H "Content-Type: application/json" \
        -H "Authorization:Zoho-enczapikey ***" \
        -d '{
        "from": {"address": "orders@zylker.com"},
        "to": [{"email_address": {"address": "richard56@zohomail.com","name": "Richard"}}],
        "subject":"Test Email",
	"htmlbody": "<html><body>Sample send mail<img src=\"cid:img-welcome-design\">",
	"inline_images": [\
        {\
            "file_cache_key" : "ea36f19a.1033669632ce7549.h1.465b2bc0-198c-11ee-910a-8a90785fcf47.1891b4b707c",\
            "cid": "img-welcome-design"\
        }\
    ]
    }'
```

```php
Copied<?php

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api.zeptomail.com/v1.1/email",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_SSLVERSION => CURL_SSLVERSION_TLSv1_2,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => '{
"from": { "address": "orders@zylker.com"},
"to": [{"email_address": {"address": "richard56@zohomail.com","name": "Richard"}}],
"subject":"Test Email",
"htmlbody": "<html><body>Sample send mail<img src=\"cid:img-welcome-design\">",
	"inline_images": [\
        {\
            "file_cache_key" : "2d6f.2b020fa1.h1.3ada1be0-1b20-11ee-a926-525400103106.18925a2cc9e",\
            "cid": "img-welcome-design"\
        }]
}',
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

```python
Copiedimport requests
import json

url = "https://api.zeptomail.com/v1.1/email"

payload = "{"from": {"address": "orders@zylker.com"}, "to": [{"email_address": {"address": "richard56@zohomail.com","name": "Richard"}}], "subject":"Test Email", "htmlbody": "<html><body>Sample send mail<img src=\"cid:img-welcome-design\">", "inline_images": [ { "file_cache_key" : "ea36f19a.1033669632ce7549.h1.465b2bc0-198c-11ee-910a-8a90785fcf47.1891b4b707c", "cid": "img-welcome-design" } ] }"
json_str = json.dumps(payload)
headers = {
'accept': "application/json",
'content-type': "application/json",
'authorization': "Zoho-enczapikey ****",
}

response = requests.request("POST", url, data=json_str, headers=headers)

print(response.text)
```

```nodejs
Copied// For ES6, set type: "module" in package.json.
import { SendMailClient } from "zeptomail";

// For CommonJS
var { SendMailClient } = require("zeptomail");

const url = "https://api.zeptomail.com/v1.1/email/";
const token = "Zoho-enczapikey ****";

let client = new SendMailClient({url, token});

client.sendMail({
    "from": {
        "address": "orders@zylker.com"
    },
    "to": [{\
        "email_address": {\
            "address": "richard56@zohomail.com",\
            "name": "Richard"\
        }\
    }],
    "subject": "Test Email",
    "htmlbody": "<html><body>Sample send mail<img src=\"cid:img-welcome-design\">",
    "inline_images": [{\
        "file_cache_key": "ea36f19a.1033669632ce7549.h1.465b2bc0-198c-11ee-910a-8a90785fcf47.1891b4b707c",\
        "cid": "img-welcome-design"\
    }]
}).then((resp) => console.log("success")).catch((error) => console.log("error"));
```

Show full

Show less
