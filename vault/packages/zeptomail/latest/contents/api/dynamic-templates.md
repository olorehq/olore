<!-- source: https://www.zoho.com/zeptomail/help/api/dynamic-templates.html -->

# Dynamic variable support in ZeptoMail

ZeptoMail offers various email templates that you can incorporate within your code while sending emails. They reduce the burden of creating your desired email from scratch every time. You can find everything about using Templates in ZeptoMail [here.](https://www.zoho.com/zeptomail/help/using-templates.html)

This one-size-fits-all concept may not be applicable for every use case. It will also be cumbersome to edit your code every time a new change is needed. Dynamic templates in ZeptoMail help resolve this. These dynamic templates are built using the Mustache templating language. Using this, you can easily personalise your emails to fit your needs.

The dynamic templates option available are :

- Variable replacement
- Collection iteration
- Conditional statement
- Missing variable
- Display HTML value
- Variable interpolation

## Variable replacement

A variable replacement code substitutes the required customer's details with the variable. It can be as simple as replacing the customer's name in the place of the assigned variable, such as the one given below

```http
Copied<p>Hello {{ name }}</p>
```

An example test data will yield the following result :

```http
CopiedSample input :

{ "name" : "ZeptoMail" }

Sample HTML output :

<p>Hello ZeptoMail</p>
```

## Collection iteration

Iteration is used to display certain user-specific details in a loop or continuously. This differs from a variable replacement where the variable is substituted only once. Any number of values or loops of the given code can be executed. Let us take a look at a sample code.

```http
Copied{{#user.order}}
<tr>
            <td>
                <b>{{this.order_item}}</b>
            </td>
            <td>
                <b>{{this.order_amount}}</b>
            </td>
</tr>
{{/user.order}}
```

The above code is used to display the order of a user. Since, this may include more than one item, iteration comes in handy.

A sample input and the output is given below.

```http
CopiedSample input :

{
  "user": {
        "order": [\
            {\
                "order_item": "Bag :"\
                "order_amount": "500"\
            },\
            {\
                "order_item": "Phone :"\
                "order_amount": "10000"\
            }\
        ]
    }
}

Sample HTML output :

<tr>
  <td><b>Bag :</b></td>
  <td><b>500</b></td>
  <td><b>Phone :</b></td> <td>
  <b>10000</b></td>
</tr>
```

Show full

Show less

## Conditional statement

Conditional statements are used to display particular contents to the user based on a set of variables. Consider these statements as "if-else" statements, where if a statement is true, then a set of values are displayed, else, another set of values are displayed. A sample code to check if there are any items available in a user's cart can be as follows :

```http
Copied{{#user.subscription.payment}}
    <p>Your previous payment is pending.</p>
{{/user.subscription.payment}}
{{^user.subscription.payment}}
    <p>No outstanding payments..</p>
{{/user.subscription.payment}}
```

In this case, if the value is true, the code within the "#" and "/" will be executed. If the value is false, the second block, i.e., the code between "^" and "/" will be executed.

Take the example of subscription to a service,

```http
Copied//Test data one
{
    "user": {
        "subscription": {
            "payment": true
        }
    }
}

Sample HTML Output :

<p>Your previous payment is pending.</p>
```

Since the value is true, meaning there is a pending payment, the first block of the code is executed. Incase there aren't any pending payments, the below code will be executed.

```http
Copied//Test data two
{
    "user": {
        "subscription": {
            "payment": false
        }
    }
}

Sample HTML Output :

<p>No outstanding payments.</p>
```

## Missing variable

If values are not assigned to any variable, then a blank string will be displayed beside it. Consider the following :

```http
Copied<p>Bag price is {{ product.bag.price }} and color  : {{ product.bag.color }}</p>
```

The above code is written to display the price and the colour of the bag. The test data is given as below:

```http
CopiedSample input :

{
    "product": {
        "bag": {
            "price": "$ 16"
        }
    }

Sample HTML output :

<p>Bag price is : $ 16 and color : </p>
```

Since a value for colour isn't mentioned, a blank space will be displayed.

## Display HTML value

By default, Mustache will encode all HTML code in the template you want to utilize. However, you can use escape parentheses \[ {{{ HTML\_code}}} \] to include HTML parameters and bypass this behaviour. Using HTML code without encoding may lead to security concerns, such as cross-site attacks and care should be taken while using them.

For example,

```http
Copied<p>Hi {{{name}}}</p>
```

The test data and the result will be :

```http
CopiedSample input :

{ "name": "<b>ZeptoMail</b>" }

Sample HTML output :

<p>Hi <b>ZeptoMail</b> </p>
```

Note that the HTML tags have been retained while executing the above code.

## Variable interpolation

Variable interpolation allows you to assign values or placeholders to a string. Variable interpolation allows you to evaluate these placeholders directly.

```http
Copied<p>Bag price : {{ product.bag.price }}</p>
```

In the above code, the price will directly be fetched. Here is the test input and output

```http
CopiedSample input :

{
    "product": {
        "bag": {
            "price": "$ 16"
        }
    }
}

Sample HTML output :

<p>Bag price : $ 16</p>
```
