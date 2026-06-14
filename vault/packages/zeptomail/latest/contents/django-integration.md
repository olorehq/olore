<!-- source: https://www.zoho.com/zeptomail/help/django-integration.html -->

# Zoho ZeptoMail for Django

Applications built using Django can now integrate with Zoho ZeptoMail to send transactional emails. The integration supports both plain text and HTML emails, along with attachments.

#### Table of Contents

- [Pre-requisites](https://www.zoho.com/zeptomail/help/django-integration.html#prerequisite)
  - [Generate Send Mail Token](https://www.zoho.com/zeptomail/help/django-integration.html#sendmailtoken)
- [Installing ZeptoMail](https://www.zoho.com/zeptomail/help/django-integration.html#install)
- [Configuring ZeptoMail](https://www.zoho.com/zeptomail/help/django-integration.html#configure)
- [Email sending](https://www.zoho.com/zeptomail/help/django-integration.html#emailsending)
  - [Plain text emails](https://www.zoho.com/zeptomail/help/django-integration.html#plaintext)
  - [Plain text + HTML emails](https://www.zoho.com/zeptomail/help/django-integration.html#plainandhtml)
- [Using attachments](https://www.zoho.com/zeptomail/help/django-integration.html#attachments)
  - [Using file path](https://www.zoho.com/zeptomail/help/django-integration.html#filepath)
  - [Using filename and content](https://www.zoho.com/zeptomail/help/django-integration.html#filename)
  - [Using MIMEbase instance](https://www.zoho.com/zeptomail/help/django-integration.html#mimebase)

## Pre-requisites

- [Verify](https://www.zoho.com/zeptomail/help/domains.html) the email sending domain
- Generate the Send Mail Token you will use to send emails.

### Generate Send Mail Token

- Select the Agent that you want to connect to your application.
- Navigate to the SMTP/API tab. This will open the Setup Details page.
- From here you can copy your Agent specific send mail token under the API tab.
- You can either use the default Send Mail Token or generate a new one.

**Agents >> SMTP/API >> Send Mail Token >> Click to copy icon.**

## Installing ZeptoMail

Django can be installed as library file in your system's terminal. Add the following installation data.

```en
Copiedpip install django-zoho-zeptomail
```

## Configure ZeptoMail

To configure ZeptoMail, add the following parameters in the settings.py file of your Django application.

```en
CopiedEMAIL_BACKEND = 'zoho_zeptomail.backend.zeptomail_backend.ZohoZeptoMailEmailBackend'
DEFAULT_FROM_EMAIL = 'rebecca@zylker.com'
ZOHO_ZEPTOMAIL_API_KEY_TOKEN = 'Send Mail Token'
ZOHO_ZEPTOMAIL_HOSTED_REGION = 'zeptomail.zoho.com'
```

- The default FROM address will be used for all emails sent out from the application.
- It is mandatory to mention the region where your application is hosted. It is optional for applications hosted in US.

## Email sending

There are two types of emails you can send using ZeptoMail. They are:

- Plain text emails
- Plain text and HTML emails

### Plain text emails

- Use the following code to send plain text emails using the **send\_mail** function.

```en
Copiedfrom django.core.mail import send_mail

send_mail(
    subject='Hello!',
    message='This is an acknowledgement for your action on our website',
    from_email='rebecca@zylker.com',
    recipient_list=['sam@zylker.com']
)
```

- To add multiple recipients (CC, BCC):

```en
Copiedfrom django.core.mail.message import EmailMessage

email_message = EmailMessage(
    subject='Hello!',
    body='This is an acknowledgement for your action on our website',
    from_email='rebecca@zylker.com',
    to=['sam@zylker.com'],
    bcc=['john@zylker.com'],
    cc=['george@zylker.com'],
    reply_to=['samuel@zylker.com']
)
email_message.send()
```

### Plain text and HTML emails

- Use the following code to send plain text + HTML emails

```en
Copiedfrom django.core.mail import send_mail

send_mail(
    subject='Hello!',
    message='This is an acknowledgement for your action on our website',
    from_email='rebecca@zylker.com',
    recipient_list=['sam@zylker.com'],
    html_message='This is an acknowledgement for your action on our website'
)
```

- To add other recipients - CC, BCC using the EmailMultiAlternatives class

```en
Copiedfrom django.core.mail.message import EmailMultiAlternatives

email_message = EmailMultiAlternatives(
    subject='Hello!',
    body='This is an acknowledgement for your action on our website',
    from_email='rebecca@zylker.com',
    to=['sam@zylker.com'],
    bcc=['john@zylker.com'], # Optional
    cc=['george@zylker.com'], # Optional
    reply_to=['samuel@zylker.com'] # Optional
)
email_message.attach_alternative(
    'This is an acknowledgement for your action on our website',
    'text/html'
)
email_message.send()
```

## Adding attachments

There are three methods to add attachments to emails sent using ZeptoMail:

- **Using file path**

```en
Copiedfrom django.core.mail.message import EmailMessage

email_message = EmailMessage(
    subject='Hello!',
    body='This is an acknowledgement for your action on our website',
    from_email='rebecca@zylker.com',
    to=['sam@zylker.com']
)
email_message.attach_file('/example/attachment.txt')
email_message.attach_file('/example/attachment.jpg')
email_message.send()
```

- **Using filename and file content**

```en
Copiedfrom django.core.mail.message import EmailMessage

email_message = EmailMessage(
    subject='Hello!',
    body='This is an acknowledgement for your action on our website',
    from_email='rebecca@zylker.com',
    to=['sam@zylker.com']
)

# Text file (Read mode 'r')
with open('/example/attachment.txt', 'r') as file:
    email_message.attach('attachment.txt', file.read())

# Binary file (Read mode 'rb')
with open('/example/attachment.jpg', 'rb') as file:
    email_message.attach('attachment.jpg', file.read())

email_message.send()
```

- **Using the MIMEBase instance**

```en
Copiedfrom email.mime.image import MIMEImage
from email.mime.text import MIMEText
from django.core.mail.message import EmailMessage

email_message = EmailMessage(
    subject='Hello!',
    body='This is an acknowledgement for your action on our website',
    from_email='rebecca@zylker.com',
    to=['sam@zylker.com']
)

# Text file (Read mode 'r')
with open('/example/attachment.txt', 'r') as file:
    mime_text = MIMEText(file.read())
    mime_text.add_header(
        'Content-Disposition', 'attachment; filename=attachment.txt')
    email_message.attach(mime_text)

# Binary file (Read mode 'rb')
with open('/example/attachment.jpg', 'rb') as file:
    mime_image = MIMEImage(file.read())
    mime_image.add_header(
        'Content-Disposition', 'inline; filename=attachment.jpg')
    email_message.attach(mime_image)

email_message.send()
```

Show full

Show less
