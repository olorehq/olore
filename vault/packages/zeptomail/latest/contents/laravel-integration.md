<!-- source: https://www.zoho.com/zeptomail/help/laravel-integration.html -->

# ZeptoMail for Laravel

Applications built using the Laravel framework can now integrate with ZeptoMail to send transactional emails. This guide will show you how to do that.

#### Table of Contents

- [Pre-requisites](https://www.zoho.com/zeptomail/help/laravel-integration.html#prerequisites)
- [Installation](https://www.zoho.com/zeptomail/help/laravel-integration.html#installation)
- [Configuration](https://www.zoho.com/zeptomail/help/laravel-integration.html#configuration)
- [Send a test email](https://www.zoho.com/zeptomail/help/laravel-integration.html#testemail)
- [Setup email-sending](https://www.zoho.com/zeptomail/help/laravel-integration.html#setup)

## Pre-requisites

Before you connect with Laravel, ensure you have the following in place:

1. Verify your email-sending domain.
2. Generate the API key.

## Installation

Install ZeptoMail for Laravel using the Composer package manager. Navigate to your Laravel application's terminal and paste the following

```php
Copiedcomposer require zohomail/laravel-zeptomail:dev-main
```

## Configuration

To send emails using ZeptoMail, set it as a mail driver. Create a new mailer definition in the mailers array of your application's configuration file.

```php
Copied'zeptomail' => [\
    'transport' => 'zeptomail',\
],
```

Navigate to your application's .env file and add the Send Mail Token. Follow the steps given here to generate the Send Mail Token:

1. Select the Agent that you want to connect to your application.
2. Navigate to SMTP/API tab. This will open the Setup Details page.
3. From here you can copy your Agent specific send mail token under the API tab.
4. You can either use the default Send Mail Token or generate a new one.

**Agent >> SMTP/API >> Send Mail Token >> Click to copy icon.**

```php
CopiedZEPTOMAIL_HOST=zoho.com
ZEPTOMAIL_TOKEN="SEND_MAIL_TOKEN"
MAIL_MAILER=zeptomail
MAIL_FROM_ADDRESS=invoice@zylker.com
MAIL_FROM_NAME="App Name"
```

Once you configure ZeptoMail, you can check the configuration by sending a test email.

## Test email

- Open your command prompt and launch the tinker environment

```php
Copiedphp artisan tinker
```

- Next, execute the following email-sending command

```php
CopiedMail::raw('This is a test email', function ($message) { $message->to('test@email.com') ->subject('Testing Laravel'); });
```

- Enter the relevant email address in the to field.
- Navigate to your application terminal and execute the command.

Once you test your configuration, you can automate your transactional email-sending in your application using Laravel. Follow the steps below to do so.

## Setup email-sending

- First, create a mailable class.

```php
Copiedphp artisan make:mail Welcomemail
```

- Next, you should configure the **app/Mail/Welcomemail.php** class using the code given below

```php
Copied<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Attachment;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Headers;
use Illuminate\Queue\SerializesModels;
use Zeptomail\EmailHeader\CategoryHeader;
use Zeptomail\EmailHeader\CustomVariableHeader;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mime\Header\UnstructuredHeader;

class ZeptoWelcomeMail extends Mailable
{
    use Queueable, SerializesModels;

    private string $name;

    /**
     * Create a new message instance.
     */
    public function __construct(string $name)
    {
        $this->name = $name;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from:  new Address('rebecca@zylker.com', 'Rebecca'),//sender address should be verified
            replyTo: [\
                      new Address('taylor@zylkertech.com', 'Taylor'),\
                  ],
            subject: 'Welcome Mail'
	);
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail.zepto-welcome-email',
            with: ['name' => $this->name],
        );
    }

}
```

Show full

Show less

- Next, create a custom template under **resources/views/mail/welcome-email.blade.php.**

```php
Copied<p> Hi {{$name}}, </p>
<p>
Welcome to the service!
</p>
```

- Next, paste the following router code to the **app/routes/console.php** file.

```php
Copied<?php
use App\Mail\ZeptoWelcomeMail;
use Illuminate\Support\Facades\Mail;

Artisan::command('send-zepto-welcome-mail', function () {
    Mail::to('rebecca@zylker.com')->send(new ZeptoWelcomeMail("Jon"));

})->purpose('Send welcome mail');
```

- Finally, you can check your configuration by sending an email. Navigate to your console and paste the following command

```php
Copiedphp artisan send-zepto-welcome-mail
```

Note:

Before you get started it is important to know that [ZeptoMail](https://www.zoho.com/zeptomail/) is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, you can visit [Zoho Campaigns](https://www.zoho.com/campaigns/).
