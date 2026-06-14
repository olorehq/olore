<!-- source: https://www.zoho.com/zeptomail/help/ruby-on-rails-for-zeptomail.html -->

# Ruby on Rails for ZeptoMail

Ruby on Rails is a popular open-source web app framework. This framework can be used to build different types of applications such as e-commerce sites, marketing platforms, content management systems, and more. Applications built using Ruby can be configured to send user-triggered transactional emails. This can be done by connecting their application with ZeptoMail. For applications built using Ruby on Rails, it is necessary to configure ZeptoMail for both Ruby and Rails separately.

Follow the steps below to install ZeptoMail Ruby package.

#### Table of Contents

- [Installing ZeptoMail Ruby package](https://www.zoho.com/zeptomail/help/ruby-on-rails-for-zeptomail.html#zeptomail-ruby)
- [Email-sending using ZeptoMail](https://www.zoho.com/zeptomail/help/ruby-on-rails-for-zeptomail.html#email-sending)
  - [Generating send mail token](https://www.zoho.com/zeptomail/help/ruby-on-rails-for-zeptomail.html#send-mail-token)
  - [ZeptoMail configuration](https://www.zoho.com/zeptomail/help/ruby-on-rails-for-zeptomail.html#zeptomail-configuration)
  - [Email sending](https://www.zoho.com/zeptomail/help/ruby-on-rails-for-zeptomail.html#email-sending-code)
- [Using attachments](https://www.zoho.com/zeptomail/help/ruby-on-rails-for-zeptomail.html#using-attachments)
- [Installing ZeptoMail Rails package](https://www.zoho.com/zeptomail/help/ruby-on-rails-for-zeptomail.html#zeptomail-rails)
  - [Email-sending](https://www.zoho.com/zeptomail/help/ruby-on-rails-for-zeptomail.html#email-sending-rails)
- [Sending template emails​](https://www.zoho.com/zeptomail/help/ruby-on-rails-for-zeptomail.html#templates)

## Installing ZeptoMail Ruby package

As a first step, you should install the ZeptoMail package. To install the package:

1. Navigate to Ruby's package [platform](https://rubygems.org/gems/zoho_zeptomail-ruby "ZeptoMail gem file.").
2. Copy the gem file available and paste it in the command prompt/terminal of your device.

## Email-sending using ZeptoMail

Once you install the ZeptoMail package, you should configure it to start sending emails. This includes adding the **Send Mail Token** that will be used for email-sending. You should generate the token from your ZeptoMail account. Follow the steps to generate it.

### Generating send mail token

1. Login to your ZeptoMail [account](https://zeptomail.zoho.com/).
2. Select the Agent that you want to connect to your application.
3. Navigate to the SMTP/API tab. This will open the Setup Details page.
4. From here you can copy the Agent specific send mail token under the API tab.
5. You can either use the default Send Mail Token or generate a new one.



**Agent >> SMTP/API >> Send Mail Token >> Click to copy icon.**

### ZeptoMail configuration

Once you generate the token, you can now connect ZeptoMail. There are two ways to do it:

- By pasting the following code to the command line.



export ZOHO\_ZEPTOMAIL\_API\_KEY\_TOKEN="Send mail token"

or

- By navigating to the Ruby project and pasting the send mail token to the **.env file.**



ZOHO\_ZEPTOMAIL\_API\_KEY\_TOKEN="Send mail token"

The hosted region is set to US by default, but if you wish to change it you can use the following

- export ZOHO\_ZEPTOMAIL\_HOSTED\_REGION = "zeptomail.zoho.dc" -  command line
- ZOHO\_ZEPTOMAIL\_HOSTED\_REGION = "zeptomail.zoho.dc" - .env file

### Email-sending

Once you configure, paste the following email-sending code to your application's development environment.

```ruby
Copiedrequire 'json'
require 'zoho_zeptomail'

client =  ZohoZeptoMail::Client.new()
email =  ZohoZeptoMail::SendMail.new(client)

email.add_recipients("address" => "ron@zylker.com", "name" => "Ron")
email.add_recipients("address" => "leslie@zylker.com", "name" => "Leslie")
email.add_cc("address" => "chris@zylker.com", "name" => "Chris")
email.add_bcc("address" => "andy@zylker.com", "name" => "Andy")
email.add_from("address"=> "password.reset@finance.zcorp.in", "name"=> "April")
email.add_subject("Password reset email")
email.add_body("Hello \n <p>Here is your password reset email!</p>")
email.send;
```

### Using attachments

You can also add relevant attachments to your email using the "attachment" helper. Specify the filename and the path when you add the helper.

For example:

```ruby
Copiedemail.add_attachment(content: 'spec/test.png', filename: 'Hello.png', mime_type: 'image/png')
email.add_attachment(content: 'spec/sample.pdf', filename: 'Hello.pdf', mime_type: 'plain/text')
```

## Installing ZeptoMail Rails package

Once you install ZeptoMail for Ruby, you should install the ZeptoMail Rails package. The process is similar to that of Ruby's:

1. Navigate to the Rails package [platform](https://rubygems.org/gems/zoho_zeptomail-rails "Rails platform") and copy paste the installation code.

The configuration steps for the Rails package is similar to that of Ruby's. Follow the Configuration steps once you install the Rails package.

### Email-sending

Once you configure ZeptoMail for Rails, paste the following email-sending code to your application development environment.

```ruby
Copied#require 'minitest/autorun'

require 'rubygems'
require 'base64'
require 'bundler'
require 'bundler/setup'
require 'nokogiri'
require 'zoho_zeptomail-rails'
require 'rails'
require 'action_mailer'

ActionMailer::Base.raise_delivery_errors = true
ActionMailer::Base.delivery_method = :zohozeptomail

class TestMailer < ActionMailer::Base
  default from: 'password.reset@finance.zcorp.in'

  def msg(from, to, subject)
    mail(
      from: 'password.reset@finance.zcorp.in,
      to: to,
      subject: subject,
      cc: 'ron@zylkertech.com'
    ) do
        |format|
        format.text { render plain: 'testemail123' }
        format.text { render plain: 'hello' }
        format.text { render plain: 'hello' }
        format.text { render plain: '<div>testemail</div>'}
        format.html { render html: '<b>testemail</b>' }
        format.html { render html: '<div>Hello, this is a test email.</div>'}
        attachments['helllo.pdf'] = File.read('Hello.pdf')
        attachments['hi.txt'] = File.read('Hello.txt')
        attachments['image.png'] = File.read('test.png')
        attachments['test.pdf'] = File.read('sample.pdf')
    end
  end
end

TestMailer.msg('password.reset@finance.zcorp.in', 'michael.scott@zylker.com', 'hello-word').deliver!
```

Show full

Show less

The default FROM address given in the code block will be used to send emails from the application. Ensure that you add the desired FROM address to the code before sending emails.

## Email-sending using templates

Alternatively you can also send emails from your Ruby project using preset templates.

To use the template, you should copy the template key from your ZeptoMail account. Follow the steps given below to copy the template key.

1. Go to the desired Agent.
2. Navigate to the Templates tab.



![](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/templ-api.png)

3. Copy the template key available next to the template.

**Agent >> Templates tab >> Copy template key**

Use the generated key in the code below to send emails using templates from your Ruby project.

```ruby
Copiedrequire 'json'
require 'zoho_zeptomail'

let(:client) { ZohoZeptoMail::Client.new('your_zoho_zeptomail_token','host_region') }
let(:email) { ZohoZeptoMail::SendTemplateMail.new(client) }

email.add_from("address"=> "april@zylker.com", "name"=> "April")
email.add_recipients("address" => "ron@zylker.com", "name" => "Ron")
email.add_recipients("address" => "andy@zylker.com", "name" => "Andy")
email.add_cc("address" => "chris@zylker.com", "name" => "Chris")
email.add_bcc("address" => "andy@zylker.com", "name" => "Andy")
email.add_template(key: '2d6f.32wefdhfi.23rjrgdfni', value: '{"name":"name_value","OTP":"OTP_value","team":"team_value","product_name":"product_name_value"}')
email.send
```

Note:

- Before you get started it is important to know that [ZeptoMail](https://www.zoho.com/zeptomail/) is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, check out [Zoho Campaigns](https://www.zoho.com/campaigns/).
