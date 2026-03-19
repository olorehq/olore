# Developer Environments


## Separate Development Data

We recommend that you set up a separate project for your development environment. Keeping your development data separate is important to maintain the integrity of your Mixpanel data. It's easy to prevent development data from cluttering your production project, but hard to detangle in later stages of a project.

To set up separate environments:

1. Create two separate Mixpanel projects for development and production. Mixpanel doesn't limit the number of projects you can use. If you are on an MTU plan, keep in mind that an organization is charged based on the total number of MTUs across all projects. This means that if a user performs a qualifying event in multiple projects, they are counted once per project. Once you have tested thoroughly in your development environment, stop sending data to your development project to avoid double-counting MTUs across projects.
2. Use the logic in the code snippet below to switch automatically between the two project tokens when you're in development or when you're ready to push data to production.
3. Specify your production domain and project tokens. 

Dynamically changing project tokens ensure your testing data does not contaminate your production environment. It allows you to easily build reports from true user data. Plus, it removes the need to swap out tokens before every push to production. 

Remember, use this solution only if your development environment uses a different hostname, such as development.yourdomain.com.

```javascript
var productionHost = 'Your production Domain'; 
var devToken = 'Development Token'; 
var prodToken = 'Production Token'; 

//If the hostname is anything other than your production domain, initialize the Mixpanel library with your Development Token 

if (window.location.hostname.toLowerCase().search(productionHost) < 0) { mixpanel.init(devToken);
 } else { mixpanel.init(prodToken); } 
 ```
## When to Use Multiple Production Projects
 
You can choose to send production data from multiple sources (for example, your website and mobile app) to the same Mixpanel project or to two separate projects. It’s up to you to determine which is best for your business, but here are a few tips to help you decide:

### Factors to Consider

**Do you want to track and study cross-platform user behavior?**
 
- For example, do you foresee leveraging either platform to convert users to another platform or contributing to the other platform's retention? Or is it common for users to begin a flow on your web app and complete that flow on your mobile app?
- If so, then you probably do want to study behavior cross-platform and should send the data to the same project. Sending data to two different projects means you won’t be able to easily compare any behavior from the app to the website or vice versa.

**Do your app and website offer fundamentally different functionality?**
 
- If the purpose and features of your data sources vary widely, you might consider using two different projects and analyzing each separately.
- Sending both types of data to the same project could clutter your analytics for both mobile and web, as having a many unique event and property names from different platforms can clutter the UI and dropdown menus in your Mixpanel project.

**Note**
An organization is charged based on data across all projects. This means that if the same event is being sent to multiple projects, it will count against your data allowance once per each project.

### Best Practices for Cross-Platform Tracking

Generally speaking, Mixpanel users have more flexibility and get more valuable insights when combining the tracking of multiple platforms into a single project to study their overall user experience across platforms.

While we generally recommend sending data from all platforms to a single project, it’s also best practice to create separate development and production projects to avoid cluttering production data with test data, regardless of platform. If you send events from all platforms to one project, you can still differentiate actions taken on your app vs. website via segmentation and filtering using the Operating System property (the Mixpanel JavaScript, iOS, and Android libraries store the Operating System property by default).

If you decide to send events from multiple platforms to the same Mixpanel projects, follow these guidelines for the best results:

- Make sure events that are the same across platforms are named the same way. For example, you wouldn’t want to create an Event on your website called Sign in and an Event on your app called Log in if they represent the same user action.

- Capitalization matters: calling one event “Purchase” and one “purchase” will show as two different events in your report dropdowns!

- Ensure you’re handling user identity properly so that you can track users across platforms without counting them as a different user on each platform. Learn more about [identifying users](/docs/tracking-methods/id-management/identifying-users).

- Advanced tip: You can initialize multiple instances of Mixpanel on the same app to send certain events to their own, different project. This would allow you to send some events to a different project if you have some different functionality on certain platforms and want to analyze that activity separately.
 
## Send Data to Multiple Projects

You can initialize separate Mixpanel objects with different tokens to send event and property updates to separate projects.

This separation is useful when you want certain events to appear in one project and others events to appear in a different project.

### Web

Sending event data from a single website to multiple different Mixpanel projects is possible by using the JavaScript library and modifying the mixpanel.init call.

The optional library_name parameter in the mixpanel.init function allows you to specify which library to write to in all tracking calls.

For example, suppose you have project A with a token of "123abc" and project B with a token of "456def."

After your initial Project A init call (with 123abc), you could set up a second instance of the initialization like this:

```javascript
// Replace 456def with your project B token
mixpanel.init("456def", {}, "project_b")
```
You would then send any project B calls like this:

```javascript
mixpanel.project_b.track("event name")
```
Any standard track calls without a specified project name would go to the initial Mixpanel project.

### iOS

You can create multiple instances of the Mixpanel API and switch back and forth between two projects by using the initWithToken method.

You can specify your second project token in this method.

Note that codeless events and A/B testing will always apply to the instance with sharedInstanceWithToken.

For example:

```objc
Mixpanel *master = [Mixpanel sharedInstanceWithToken:MASTER_TOKEN];

Mixpanel *publisher = [[Mixpanel alloc] initWithToken:PUBLISHER_TOKEN andFlushInterval: 60];

[master track:@"..."];

[publisher track:@"..."];
```
### Android

To initialize multiple instances of Mixpanel on Android, construct separate Mixpanel objects.

For example:

```java
public class MainActivity extends AppCompatActivity {
    public MixpanelAPI mixpanel;
    public MixpanelAPI mMixpanel;

    private static final String projectToken = "TOKEN 1";
    private static final String projectToken_t = "TOKEN 2";
    private static Context context;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);


        setContentView(R.layout.activity_main);

        mixpanel = MixpanelAPI.getInstance(this, projectToken);
        mMixpanel = MixpanelAPI.getInstance(this, projectToken_t);
        mixpanel.identify(mixpanel.getDistinctId());
        mMixpanel.identify(mMixpanel.getDistinctId());


        try {
            JSONObject props = new JSONObject();
            props.put("Screen", "MainActivity");
            mixpanel.track("Viewed Screen", props);
            mMixpanel.track("Viewed Screen", props);
        } catch (JSONException e) {
            Log.e("MYAPP", "Unable to add properties to JSONObject", e);
        }
    }
}
```
