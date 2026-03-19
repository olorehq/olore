# Tealium

This guide demonstrates how to set up Mixpanel event tracking and identity management with [Tealium's IQ Tag Management Platform](https://tealium.com/resource/datasheet/tealium-iq/). Setup should take about 10 minutes, and will go over the following 5 steps:

  1. Configuring Tag Hooks (one-time)
  2. Connecting Mixpanel to Tealium (one-time)
  3. Sending Events
  4. Adding Event Properties
  5. Identifying Users (one-time)

### Prerequisite: Tag Hooks

Tealium’s iQ Tag Management creates event streams fueled by [UDOs](https://docs.tealium.com/platforms/javascript/universal-data-object/) (Universal Data Objects). 

For web applications, UDOs are just javascript objects with a special shape; they are automatically detected by the [Tealium utag SDK](https://docs.tealium.com/platforms/javascript/universal-tag/), and they look like this:

```javascript
var utag_data = {
  "tealium_event": "page_view",
  // ^ the key is always 'tealium_event'
  // values will depend on your tealium implementation; standards: https://docs.tealium.com/platforms/javascript/track/#tealium_event

  //UDOs can contain any number of custom params
  "foo: "bar",
  "baz": "qux" 
}
```

In order to trigger Mixpanel events based on the values of `tealium_event`s, you’ll need to create a variable in Tealium’s data layer for `tealium_event` (the key not the value).

**This is a very common implementation pattern in Tealium**; if you’ve been using tealium for a while, you most likely have already mapped a UDO for `tealium_event` ... if you haven’t, here are the steps:

Find "data layer" in the main menu:

![01-dataLayerMenu](https://github.com/mixpanel/docs/assets/3978760/c99badbe-8755-42c6-8052-0af1dd873a44)

Click "add variable":

![02-addVar](https://github.com/mixpanel/docs/assets/3978760/ec812663-885f-4568-95c6-f61cfb22315c)

The type is "UDO Variable"; the source is "tealium_event" ... then click apply:

![03-UDOVar](https://github.com/mixpanel/docs/assets/3978760/b810e6f3-8316-4045-9aab-b4a1f05163e8)

Now save and publish!

![04-SavePublish](https://github.com/mixpanel/docs/assets/3978760/976a8c20-ef40-4c0b-9d7d-d5cfdb1baec2)

You should now see a "tealium_event" variable in your UDOs:

![05-TealiumEvent](https://github.com/mixpanel/docs/assets/3978760/d4d4f6e3-7ee2-4ac3-a6a7-cdb5c6c1b12f)

( ^ it should look exactly like this! ^)

You are now ready to setup mixpanel events with triggers based on the *values* passed to `tealium_event` ... these values are usually strings like `page_view` , `product_view`, `search` etc...

## Connecting Mixpanel to Tealium

- Find the **tags** section of iQ Tag Manager:

![06-NewTags](https://github.com/mixpanel/docs/assets/3978760/96522330-67a8-437e-bb6e-3fd2cc89df27)

- Click **add tags** and find 'mixpanel' using the search

![07-AddTag](https://github.com/mixpanel/docs/assets/3978760/88f75984-4717-475b-bdaf-85156fbc33f8)

 - Click **add** to bring the Mixpanel tag into your Tealium workspace.

![08-Mixpanel](https://github.com/mixpanel/docs/assets/3978760/ad7b8de6-727c-43e6-a21f-50e3713af16c)

You can now connect your Mixpanel project to Tealium and configure the tag's behavior.

You will need a [mixpanel account](https://mixpanel.com/register/) and a [mixpanel project](https://docs.mixpanel.com/docs/admin/organizations-projects/manage-projects) to continue.

In the first section of the tag wizard, enter your [**mixpanel project token**](https://help.mixpanel.com/hc/en-us/articles/115004502806-Find-Project-Token-) and click Next:

![09-ConnectingTags](https://github.com/mixpanel/docs/assets/3978760/272c360b-74ab-4561-b321-54faca49845e)

Next, you’ll setup **load rules** which determine which pages mixpanel will be deployed on.

In order for the mixpanel tag to appear on your pages, you will need to add a condition to your **[load rules](https://docs.tealium.com/iq-tag-management/load-rules/about/)** using the wizard. Load rules make it possible to conditionally apply tags in certain cases, based on variables and conditions that Tealium is aware of. 

For testing, it’s perfectly fine to say "load on all pages":

![10-LoadRules](https://github.com/mixpanel/docs/assets/3978760/78f6ce2d-6546-48f2-834a-ea48e981999c)

Mixpanel should now be deployed on all known Tealium pages of your site. Next, you will set up mappings which fire Mixpanel events based on mappings created in Tealium.

## Sending Events

The final section of the tag wizard is where **[data mappings](https://docs.tealium.com/iq-tag-management/data-mappings/about/)** are configured. 
Data mappings are *essentially* a GUI-driven configuration that *will compose and deploy javascript snippets* on your Tealium-tagged pages (if the load rules are met).

That the goal of this guide is to turn something of this form:

```javascript
var utag_data = {	"tealium_event": "page_view" }
```

Into the equivalent javascript:

```javascript
mixpanel.track('hello from tealium!')
```

When a user loads the page.

Here’s how you can setup this mapping:

- Use the `tealium_event` UDO variable to tell Tealium to pass `tealium_event` *values* to the mixpanel tag:

- Click "variables" dropdown and choose "tealium_event"

![11-Variables](https://github.com/mixpanel/docs/assets/3978760/c8c32537-50ac-4af1-ba36-a8be34bd9180)

- Bind the trigger `page_view` (from the UDO `tealium_event`) *to* the mixpanel method `track`:

- Click 'add’ when it looks like this... and then done

![12-Categories](https://github.com/mixpanel/docs/assets/3978760/e98f5fa3-8cf6-4be8-8a21-8ebcacdff277)

- You should now have this binding:

![13-Binding](https://github.com/mixpanel/docs/assets/3978760/96d8e794-0979-441a-be68-c2cfb471630b)

This will track the UDO `page_view` wherever it appears on our site.

Next, give the event a name in mixpanel... 

For this tutorial, we’ll use a **[custom value](https://docs.tealium.com/iq-tag-management/data-mappings/about/#custom-value-mapping)** ... this is added as another variable in tealium’s data mapper:

- Click "variables" drop down and choose use custom value:

![14-CustomValue](https://github.com/mixpanel/docs/assets/3978760/523c41dd-fe1f-42a5-b960-7212f7889693)

- Define your "custom value"

![15-CustomText](https://github.com/mixpanel/docs/assets/3978760/11e51314-042e-41a8-ad06-eae042cd1747)

- Now, in the **event parameters** menu bind our custom value `hello... from tealium` to the `eventName` for `track`:

![16-AddAndDone](https://github.com/mixpanel/docs/assets/3978760/31a484d3-247f-4dfc-8c48-f0bf1dc78ad2)

- Click "add" and "done" when you’ve mapped your custom value to Track : Event Name

Our final mapping now looks like this:

![17-FinalMapping](https://github.com/mixpanel/docs/assets/3978760/c5c1f92b-2c74-4313-8df0-f76a5c046e41)

If your screen looks similar, you’re ready to save and publish!

![18-SaveAndDone](https://github.com/mixpanel/docs/assets/3978760/e18e645a-58ff-479e-b731-062d2f346b0a)

Wait a couple moments for tealium to apply the updates to your environment, and then load one of your pages (that has this tag deployed) 

Pop open the developer console in your browser... you can see two requests to mixpanel:

![19-debugging](https://github.com/mixpanel/docs/assets/3978760/4b41ba9a-d669-4ac7-80de-00b273644d95)

If you’re using a [tealium browser extension debugger,](https://chrome.google.com/webstore/detail/tealium-tools/gidnphnamcemailggkemcgclnjeeokaa?hl=en-US) or have forced the utag into [debug mode by modifying the cookie](https://docs.tealium.com/platforms/javascript/debugging/#debug-mode):

```jsx
document.cookie="utagdb=true";
```

You can see the tag’s rendering states:

![20-debugStates](https://github.com/mixpanel/docs/assets/3978760/ac51bae7-d4b4-45d0-817a-1053a6ef7763)

Or... you can skip all that debugging noise and just go to mixpanel, and click into the [events report](https://help.mixpanel.com/hc/en-us/articles/4402837164948-Events-formerly-Live-View-) to see your new fresh event!

![21-MixpanelEvents](https://github.com/mixpanel/docs/assets/3978760/28dfb81d-4a72-4177-938c-109a6194e981)

You just implemented Tealium → Mixpanel. You will repeat this process for additional events you wish to create.


## Adding Event Properties

Because Tealium wraps the Mixpanel JS SDK, Mixpanel's [default event properties](https://docs.mixpanel.com/docs/data-structure/property-reference#default-properties) will be including on every event. 

Any "custom" event properties will need to be mapped within Tealium using he following structure: **MY UDO ⇒**  **`track.properties.KEY_NAME`** where `KEY_NAME` is the **label** you want to use for the **property key in mixpanel**... the **value** will be the value of the UDO at runtime:

![22-NewProps](https://github.com/mixpanel/docs/assets/3978760/2772f1dc-45b7-4089-92bf-f042ac61bdff)

A single event may have many custom properties mapped; that might look like this:

![23-MultipleMappings](https://github.com/mixpanel/docs/assets/3978760/4878ea4e-c2fa-4bc7-b5f5-72da3f969a08)

Adding event properties is as simple as modifying the existing mapping to an event, and saving and publishing. Once you trigger your new tag you will the correct UDO value *and* the label you specified in the mapper show up in mixpanel  

![24-SuccessfulEvent](https://github.com/mixpanel/docs/assets/3978760/41d27add-4d89-424d-830e-ba978e3b17f6)

Note: you can always rename property keys' display labels [in lexicon](https://help.mixpanel.com/hc/en-us/articles/360001307806-Lexicon-Overview#adding-or-changing-descriptions)
       
## Identifying Users

**Important:** cross device tracking assumes you know the identity of the current user.. **`identify()`** should *only* be called on "authenticated" (logged in) pages/actions.

Ultimately, we are trying to get Tealium to render this tag:

```
mixpanel.identify(uniqueUserId)
```

Where `uniqueUserId` is a string value that refers to the canonical user id for the current ("logged in") user.

It’s critically important that this value uniquely identifies the end-user, across all devices they may have.

**Note:** some customer are tempted to use an email address as a unique identifier; this is (generally) not a good identifier, especially if users can change their email address... the value you pass to `identify` should never change for a single user.

- Assuming we have a UDO (or other javascript variable) that points to our UUID (unique user identifier)

![25-IdentityStart](https://github.com/mixpanel/docs/assets/3978760/d916c42d-5055-48ee-9fc1-11c547ac3b03)

- Next, instruct Tealium when to use our `identify` tag... this is similar to how we used `page_view:track` directive to tell tealium to call `.track()` on the "tealium event" "page_view" ... you will probably use some other UDO event here (like `log in` or `sign in`):
    
![26-IdentityMap](https://github.com/mixpanel/docs/assets/3978760/a1cc3d9e-ff89-4491-a9b5-6d565ac68b4a)

    
- Select the `id_of_user` UDO (or whatever value represents our UUID for the end user) in the dropdown and proceed to **SELECT DESTINATION**
    
![27-IdentityAdd](https://github.com/mixpanel/docs/assets/3978760/202e8a8c-8229-4c20-b8e8-5bf468e1d95b)

- Finally, map the `id_of_user` value to `event parameters` for the `identify` event and choose the specific parameter `unique ID` ... then click **ADD**

![28-IdentityFinish](https://github.com/mixpanel/docs/assets/3978760/89ae1139-7c65-4cf7-af0c-d8f6076a351c)

A final implementation of mixpanel within Tealium might look like this:

![29-SampleComplete](https://github.com/mixpanel/docs/assets/3978760/7f5426d4-bbe3-4686-bfcd-e776b4475482)

