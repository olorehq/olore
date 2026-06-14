# twikit package

## Twikit Twitter API Wrapper

[https://github.com/d60/twikit](https://github.com/d60/twikit) A Python library for interacting with the Twitter API.

## Client

class twikit.client.client.Client(*language: str = 'en-US'*, *proxy: str \| None = None*, *captcha_solver: [Capsolver](#twikit._captcha.capsolver.Capsolver "twikit._captcha.capsolver.Capsolver") \| None = None*, *user_agent: str \| None = None*, *\*\*kwargs*)[\[source\]](_modules/twikit/client/client.html#Client)  
A client for interacting with the Twitter API. Since this class is for asynchronous use, methods must be executed using await.

Parameters:  
- **language** (`str` \| None, default=None) – The language code to use in API requests.

- **proxy** (`str` \| None, default=None) – The proxy server URL to use for request (e.g., ‘[http://0.0.0.0:0000](http://0.0.0.0:0000)’).

- **captcha_solver** ([`Capsolver`](#twikit._captcha.capsolver.Capsolver "twikit._captcha.capsolver.Capsolver") \| None, default=None) – See [`Capsolver`](#twikit._captcha.capsolver.Capsolver "twikit._captcha.capsolver.Capsolver").

Examples

    >>> client = Client(language='en-US')

    >>> await client.login(
    ...     auth_info_1='example_user',
    ...     auth_info_2='email@example.com',
    ...     password='00000000'
    ... )

async login(*\**, *auth_info_1: str*, *auth_info_2: str \| None = None*, *password: str*, *totp_secret: str \| None = None*, *cookies_file: str \| None = None*, *enable_ui_metrics: bool = True*) → dict[\[source\]](_modules/twikit/client/client.html#Client.login)  
Logs into the account using the specified login information. auth_info_1 and password are required parameters. auth_info_2 is optional and can be omitted, but it is recommended to provide if available. The order in which you specify authentication information (auth_info_1 and auth_info_2) is flexible.

Parameters:  
- **auth_info_1** (`str`) – The first piece of authentication information, which can be a username, email address, or phone number.

- **auth_info_2** (`str`, default=None) – The second piece of authentication information, which is optional but recommended to provide. It can be a username, email address, or phone number.

- **password** (`str`) – The password associated with the account.

- **totp_secret** (`str`, default=None) – The TOTP (Time-Based One-Time Password) secret key used for two-factor authentication (2FA).

- **cookies_file** (`str`, default=None) – The file path used for storing and loading cookies. If the specified file exists, cookies will be loaded from it, potentially bypassing the login process. After a successful login, cookies will be saved to this file for future use.

- **enable_ui_metrics** (`bool`, default=True) – If set to True, obfuscated ui_metrics function will be executed using js2py, and the result will be sent to the API. Enabling this may reduce the risk of account suspension.

Examples

    >>> await client.login(
    ...     auth_info_1='example_user',
    ...     auth_info_2='email@example.com',
    ...     password='00000000'
    ... )

async logout() → Response[\[source\]](_modules/twikit/client/client.html#Client.logout)  
Logs out of the currently logged-in account.

async unlock() → None[\[source\]](_modules/twikit/client/client.html#Client.unlock)  
Unlocks the account using the provided CAPTCHA solver.

See also

`capsolver`

get_cookies() → dict[\[source\]](_modules/twikit/client/client.html#Client.get_cookies)  
Get the cookies. You can skip the login procedure by loading the saved cookies using the [`set_cookies()`](#twikit.client.client.Client.set_cookies "twikit.client.client.Client.set_cookies") method.

Examples

    >>> client.get_cookies()

See also

[`set_cookies`](#twikit.client.client.Client.set_cookies "twikit.client.client.Client.set_cookies"), [`load_cookies`](#twikit.client.client.Client.load_cookies "twikit.client.client.Client.load_cookies"), [`save_cookies`](#twikit.client.client.Client.save_cookies "twikit.client.client.Client.save_cookies")

save_cookies(*path: str*) → None[\[source\]](_modules/twikit/client/client.html#Client.save_cookies)  
Save cookies to file in json format. You can skip the login procedure by loading the saved cookies using the [`load_cookies()`](#twikit.client.client.Client.load_cookies "twikit.client.client.Client.load_cookies") method.

Parameters:  
**path** (`str`) – The path to the file where the cookie will be stored.

Examples

    >>> client.save_cookies('cookies.json')

See also

[`load_cookies`](#twikit.client.client.Client.load_cookies "twikit.client.client.Client.load_cookies"), [`get_cookies`](#twikit.client.client.Client.get_cookies "twikit.client.client.Client.get_cookies"), [`set_cookies`](#twikit.client.client.Client.set_cookies "twikit.client.client.Client.set_cookies")

set_cookies(*cookies: dict*, *clear_cookies: bool = False*) → None[\[source\]](_modules/twikit/client/client.html#Client.set_cookies)  
Sets cookies. You can skip the login procedure by loading a saved cookies.

Parameters:  
**cookies** (`dict`) – The cookies to be set as key value pair.

Examples

    >>> with open('cookies.json', 'r', encoding='utf-8') as f:
    ...     client.set_cookies(json.load(f))

See also

[`get_cookies`](#twikit.client.client.Client.get_cookies "twikit.client.client.Client.get_cookies"), [`load_cookies`](#twikit.client.client.Client.load_cookies "twikit.client.client.Client.load_cookies"), [`save_cookies`](#twikit.client.client.Client.save_cookies "twikit.client.client.Client.save_cookies")

load_cookies(*path: str*) → None[\[source\]](_modules/twikit/client/client.html#Client.load_cookies)  
Loads cookies from a file. You can skip the login procedure by loading a saved cookies.

Parameters:  
**path** (`str`) – Path to the file where the cookie is stored.

Examples

    >>> client.load_cookies('cookies.json')

See also

[`get_cookies`](#twikit.client.client.Client.get_cookies "twikit.client.client.Client.get_cookies"), [`save_cookies`](#twikit.client.client.Client.save_cookies "twikit.client.client.Client.save_cookies"), [`set_cookies`](#twikit.client.client.Client.set_cookies "twikit.client.client.Client.set_cookies")

set_delegate_account(*user_id: str \| None*) → None[\[source\]](_modules/twikit/client/client.html#Client.set_delegate_account)  
Sets the account to act as.

Parameters:  
**user_id** (`str` \| None) – The user ID of the account to act as. Set to None to clear the delegated account.

async user_id() → str[\[source\]](_modules/twikit/client/client.html#Client.user_id)  
Retrieves the user ID associated with the authenticated account.

async user() → [User](#twikit.user.User "twikit.user.User")[\[source\]](_modules/twikit/client/client.html#Client.user)  
Retrieve detailed information about the authenticated user.

async search_tweet(*query: str*, *product: Literal\['Top', 'Latest', 'Media'\]*, *count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")\][\[source\]](_modules/twikit/client/client.html#Client.search_tweet)  
Searches for tweets based on the specified query and product type.

Parameters:  
- **query** (`str`) – The search query.

- **product** (*{'Top',* *'Latest',* *'Media'}*) – The type of tweets to retrieve.

- **count** (`int`, default=20) – The number of tweets to retrieve, between 1 and 20.

- **cursor** (`str`, default=20) – Token to retrieve more tweets.

Returns:  
An instance of the Result class containing the search results.

Return type:  
Result\[`Tweet`\]

Examples

    >>> tweets = await client.search_tweet('query', 'Top')
    >>> for tweet in tweets:
    ...    print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    ...

    >>> more_tweets = await tweets.next()  # Retrieve more tweets
    >>> for tweet in more_tweets:
    ...     print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    ...

    >>> # Retrieve previous tweets
    >>> previous_tweets = await tweets.previous()

async search_user(*query: str*, *count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/client/client.html#Client.search_user)  
Searches for users based on the provided query.

Parameters:  
- **query** (`str`) – The search query for finding users.

- **count** (`int`, default=20) – The number of users to retrieve in each request.

- **cursor** (`str`, default=None) – Token to retrieve more users.

Returns:  
An instance of the Result class containing the search results.

Return type:  
Result\[`User`\]

Examples

    >>> result = await client.search_user('query')
    >>> for user in result:
    ...     print(user)
    <User id="...">
    <User id="...">
    ...
    ...

    >>> more_results = await result.next()  # Retrieve more search results
    >>> for user in more_results:
    ...     print(user)
    <User id="...">
    <User id="...">
    ...
    ...

async get_similar_tweets(*tweet_id: str*) → list\[[Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")\][\[source\]](_modules/twikit/client/client.html#Client.get_similar_tweets)  
Retrieves tweets similar to the specified tweet (Twitter premium only).

Parameters:  
**tweet_id** (`str`) – The ID of the tweet for which similar tweets are to be retrieved.

Returns:  
A list of Tweet objects representing tweets similar to the specified tweet.

Return type:  
list\[`Tweet`\]

async get_user_highlights_tweets(*user_id: str*, *count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")\][\[source\]](_modules/twikit/client/client.html#Client.get_user_highlights_tweets)  
Retrieves highlighted tweets from a user’s timeline.

Parameters:  
- **user_id** (`str`) – The user ID

- **count** (`int`, default=20) – The number of tweets to retrieve.

Returns:  
An instance of the Result class containing the highlighted tweets.

Return type:  
Result\[`Tweet`\]

Examples

    >>> result = await client.get_user_highlights_tweets('123456789')
    >>> for tweet in result:
    ...     print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    ...

    >>> more_results = await result.next()  # Retrieve more highlighted tweets
    >>> for tweet in more_results:
    ...     print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    ...

async upload_media(*source: str \| bytes*, *wait_for_completion: bool = False*, *status_check_interval: float \| None = None*, *media_type: str \| None = None*, *media_category: str \| None = None*, *is_long_video: bool = False*) → str[\[source\]](_modules/twikit/client/client.html#Client.upload_media)  
Uploads media to twitter.

Parameters:  
- **source** (`str` \| `bytes`) – The source of the media to be uploaded. It can be either a file path or bytes of the media content.

- **wait_for_completion** (`bool`, default=False) – Whether to wait for the completion of the media upload process.

- **status_check_interval** (`float`, default=1.0) – The interval (in seconds) to check the status of the media upload process.

- **media_type** (`str`, default=None) – The MIME type of the media. If not specified, it will be guessed from the source.

- **media_category** (`str`, default=None) – The media category.

- **is_long_video** (`bool`, default=False) – If this is True, videos longer than 2:20 can be uploaded. (Twitter Premium only)

Returns:  
The media ID of the uploaded media.

Return type:  
`str`

Examples

Videos, images and gifs can be uploaded.

    >>> media_id_1 = await client.upload_media(
    ...     'media1.jpg',
    ... )

    >>> media_id_2 = await client.upload_media(
    ...     'media2.mp4',
    ...     wait_for_completion=True
    ... )

    >>> media_id_3 = await client.upload_media(
    ...     'media3.gif',
    ...     wait_for_completion=True,
    ...     media_category='tweet_gif'  # media_category must be specified
    ... )

async check_media_status(*media_id: str*, *is_long_video: bool = False*) → dict[\[source\]](_modules/twikit/client/client.html#Client.check_media_status)  
Check the status of uploaded media.

Parameters:  
**media_id** (`str`) – The media ID of the uploaded media.

Returns:  
A dictionary containing information about the status of the uploaded media.

Return type:  
dict

async create_media_metadata(*media_id: str*, *alt_text: str \| None = None*, *sensitive_warning: list\[Literal\['adult_content', 'graphic_violence', 'other'\]\] = None*) → Response[\[source\]](_modules/twikit/client/client.html#Client.create_media_metadata)  
Adds metadata to uploaded media.

Parameters:  
- **media_id** (`str`) – The media id for which to create metadata.

- **alt_text** (`str` \| None, default=None) – Alternative text for the media.

- **sensitive_warning** (*list{'adult_content',* *'graphic_violence',* *'other'}*) – A list of sensitive content warnings for the media.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

Examples

    >>> media_id = await client.upload_media('media.jpg')
    >>> await client.create_media_metadata(
    ...     media_id,
    ...     alt_text='This is a sample media',
    ...     sensitive_warning=['other']
    ... )
    >>> await client.create_tweet(media_ids=[media_id])

async create_poll(*choices: list\[str\]*, *duration_minutes: int*) → str[\[source\]](_modules/twikit/client/client.html#Client.create_poll)  
Creates a poll and returns card-uri.

Parameters:  
- **choices** (list\[`str`\]) – A list of choices for the poll. Maximum of 4 choices.

- **duration_minutes** (`int`) – The duration of the poll in minutes.

Returns:  
The URI of the created poll card.

Return type:  
`str`

Examples

Create a poll with three choices lasting for 60 minutes:

    >>> choices = ['Option A', 'Option B', 'Option C']
    >>> duration_minutes = 60
    >>> card_uri = await client.create_poll(choices, duration_minutes)
    >>> print(card_uri)
    'card://0000000000000000000'

async vote(*selected_choice: str*, *card_uri: str*, *tweet_id: str*, *card_name: str*) → [Poll](#twikit.tweet.Poll "twikit.tweet.Poll")[\[source\]](_modules/twikit/client/client.html#Client.vote)  
Vote on a poll with the selected choice. :param selected_choice: The label of the selected choice for the vote. :type selected_choice: `str` :param card_uri: The URI of the poll card. :type card_uri: `str` :param tweet_id: The ID of the original tweet containing the poll. :type tweet_id: `str` :param card_name: The name of the poll card. :type card_name: `str`

Returns:  
The Poll object representing the updated poll after voting.

Return type:  
`Poll`

async create_tweet(*text: str = ''*, *media_ids: list\[str\] \| None = None*, *poll_uri: str \| None = None*, *reply_to: str \| None = None*, *conversation_control: Literal\['followers', 'verified', 'mentioned'\] \| None = None*, *attachment_url: str \| None = None*, *community_id: str \| None = None*, *share_with_followers: bool = False*, *is_note_tweet: bool = False*, *richtext_options: list\[dict\] = None*, *edit_tweet_id: str \| None = None*) → [Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")[\[source\]](_modules/twikit/client/client.html#Client.create_tweet)  
Creates a new tweet on Twitter with the specified text, media, and poll.

Parameters:  
- **text** (`str`, default=’’) – The text content of the tweet.

- **media_ids** (list\[`str`\], default=None) – A list of media IDs or URIs to attach to the tweet. media IDs can be obtained by using the upload_media method.

- **poll_uri** (`str`, default=None) – The URI of a Twitter poll card to attach to the tweet. Poll URIs can be obtained by using the create_poll method.

- **reply_to** (`str`, default=None) – The ID of the tweet to which this tweet is a reply.

- **conversation_control** (*{'followers',* *'verified',* *'mentioned'}*) – The type of conversation control for the tweet: - ‘followers’: Limits replies to followers only. - ‘verified’: Limits replies to verified accounts only. - ‘mentioned’: Limits replies to mentioned accounts only.

- **attachment_url** (`str`) – URL of the tweet to be quoted.

- **is_note_tweet** (`bool`, default=False) – If this option is set to True, tweets longer than 280 characters can be posted (Twitter Premium only).

- **richtext_options** (list\[`dict`\], default=None) – Options for decorating text (Twitter Premium only).

- **edit_tweet_id** (`str` \| None, default=None) – ID of the tweet to edit (Twitter Premium only).

Raises:  
[**DuplicateTweet**](#twikit.errors.DuplicateTweet "twikit.errors.DuplicateTweet") –

Returns:  
The Created Tweet.

Return type:  
`Tweet`

Examples

Create a tweet with media:

    >>> tweet_text = 'Example text'
    >>> media_ids = [
    ...     await client.upload_media('image1.png'),
    ...     await client.upload_media('image2.png')
    ... ]
    >>> await client.create_tweet(
    ...     tweet_text,
    ...     media_ids=media_ids
    ... )

Create a tweet with a poll:

    >>> tweet_text = 'Example text'
    >>> poll_choices = ['Option A', 'Option B', 'Option C']
    >>> duration_minutes = 60
    >>> poll_uri = await client.create_poll(poll_choices, duration_minutes)
    >>> await client.create_tweet(
    ...     tweet_text,
    ...     poll_uri=poll_uri
    ... )

See also

[`upload_media`](#twikit.client.client.Client.upload_media "twikit.client.client.Client.upload_media"), [`create_poll`](#twikit.client.client.Client.create_poll "twikit.client.client.Client.create_poll")

async create_scheduled_tweet(*scheduled_at: int*, *text: str = ''*, *media_ids: list\[str\] \| None = None*) → str[\[source\]](_modules/twikit/client/client.html#Client.create_scheduled_tweet)  
Schedules a tweet to be posted at a specified timestamp.

Parameters:  
- **scheduled_at** (`int`) – The timestamp when the tweet should be scheduled for posting.

- **text** (`str`, default=’’) – The text content of the tweet, by default an empty string.

- **media_ids** (list\[`str`\], default=None) – A list of media IDs to be attached to the tweet, by default None.

Returns:  
The ID of the scheduled tweet.

Return type:  
`str`

Examples

Create a tweet with media:

    >>> scheduled_time = int(time.time()) + 3600  # One hour from now
    >>> tweet_text = 'Example text'
    >>> media_ids = [
    ...     await client.upload_media('image1.png'),
    ...     await client.upload_media('image2.png')
    ... ]
    >>> await client.create_scheduled_tweet(
    ...     scheduled_time
    ...     tweet_text,
    ...     media_ids=media_ids
    ... )

async delete_tweet(*tweet_id: str*) → Response[\[source\]](_modules/twikit/client/client.html#Client.delete_tweet)  
Deletes a tweet.

Parameters:  
**tweet_id** (`str`) – ID of the tweet to be deleted.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

Examples

    >>> tweet_id = '0000000000'
    >>> await delete_tweet(tweet_id)

async get_user_by_screen_name(*screen_name: str*) → [User](#twikit.user.User "twikit.user.User")[\[source\]](_modules/twikit/client/client.html#Client.get_user_by_screen_name)  
Fetches a user by screen name.

### Parameter

screen_name`str`  
The screen name of the Twitter user.

&nbsp;

returns:  
An instance of the User class representing the Twitter user.

rtype:  
`User`

Examples

    >>> target_screen_name = 'example_user'
    >>> user = await client.get_user_by_name(target_screen_name)
    >>> print(user)
    <User id="...">

async get_user_by_id(*user_id: str*) → [User](#twikit.user.User "twikit.user.User")[\[source\]](_modules/twikit/client/client.html#Client.get_user_by_id)  
Fetches a user by ID

### Parameter

user_id`str`  
The ID of the Twitter user.

&nbsp;

returns:  
An instance of the User class representing the Twitter user.

rtype:  
`User`

Examples

    >>> target_screen_name = '000000000'
    >>> user = await client.get_user_by_id(target_screen_name)
    >>> print(user)
    <User id="000000000">

async reverse_geocode(*lat: float*, *long: float*, *accuracy: str \| float \| None = None*, *granularity: str \| None = None*, *max_results: int \| None = None*) → list\[[Place](#twikit.geo.Place "twikit.geo.Place")\][\[source\]](_modules/twikit/client/client.html#Client.reverse_geocode)  
Given a latitude and a longitude, searches for up to 20 places that

Parameters:  
- **lat** (`float`) – The latitude to search around.

- **long** (`float`) – The longitude to search around.

- **accuracy** (`str` \| `float` None, default=None) – A hint on the “region” in which to search.

- **granularity** (`str` \| None, default=None) – This is the minimal granularity of place types to return and must be one of: neighborhood, city, admin or country.

- **max_results** (`int` \| None, default=None) – A hint as to the number of results to return.

Return type:  
list\[[`Place`](#twikit.geo.Place "twikit.geo.Place")\]

async search_geo(*lat: float \| None = None*, *long: float \| None = None*, *query: str \| None = None*, *ip: str \| None = None*, *granularity: str \| None = None*, *max_results: int \| None = None*) → list\[[Place](#twikit.geo.Place "twikit.geo.Place")\][\[source\]](_modules/twikit/client/client.html#Client.search_geo)  
Search for places that can be attached to a Tweet via POST statuses/update.

Parameters:  
- **lat** (`float` \| None) – The latitude to search around.

- **long** (`float` \| None) – The longitude to search around.

- **query** (`str` \| None) – Free-form text to match against while executing a geo-based query, best suited for finding nearby locations by name. Remember to URL encode the query.

- **ip** (`str` \| None) – An IP address. Used when attempting to fix geolocation based off of the user’s IP address.

- **granularity** (`str` \| None) – This is the minimal granularity of place types to return and must be one of: neighborhood, city, admin or country.

- **max_results** (`int` \| None) – A hint as to the number of results to return.

Return type:  
list\[[`Place`](#twikit.geo.Place "twikit.geo.Place")\]

async get_place(*id: str*) → [Place](#twikit.geo.Place "twikit.geo.Place")[\[source\]](_modules/twikit/client/client.html#Client.get_place)  
Parameters:  
**id** (`str`) – The ID of the place.

Return type:  
[`Place`](#twikit.geo.Place "twikit.geo.Place")

async get_tweet_by_id(*tweet_id: str*, *cursor: str \| None = None*) → [Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")[\[source\]](_modules/twikit/client/client.html#Client.get_tweet_by_id)  
Fetches a tweet by tweet ID.

Parameters:  
**tweet_id** (`str`) – The ID of the tweet.

Returns:  
A Tweet object representing the fetched tweet.

Return type:  
`Tweet`

Examples

    >>> target_tweet_id = '...'
    >>> tweet = client.get_tweet_by_id(target_tweet_id)
    >>> print(tweet)
    <Tweet id="...">

async get_tweets_by_ids(*ids: list\[str\]*) → list\[[Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")\][\[source\]](_modules/twikit/client/client.html#Client.get_tweets_by_ids)  
Retrieve multiple tweets by IDs.

Parameters:  
**ids** (list\[`str`\]) – A list of tweet IDs to retrieve.

Returns:  
List of tweets.

Return type:  
list\[`Tweet`\]

Examples

    >>> tweet_ids = ['1111111111', '1111111112', '111111113']
    >>> tweets = await client.get_tweets_by_ids(tweet_ids)
    >>> print(tweets)
    [<Tweet id="1111111111">, <Tweet id="1111111112">, <Tweet id="111111113">]

async get_scheduled_tweets() → list\[ScheduledTweet\][\[source\]](_modules/twikit/client/client.html#Client.get_scheduled_tweets)  
Retrieves scheduled tweets.

Returns:  
List of ScheduledTweet objects representing the scheduled tweets.

Return type:  
list\[`ScheduledTweet`\]

async delete_scheduled_tweet(*tweet_id: str*) → Response[\[source\]](_modules/twikit/client/client.html#Client.delete_scheduled_tweet)  
Delete a scheduled tweet.

Parameters:  
**tweet_id** (`str`) – The ID of the scheduled tweet to delete.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

async get_retweeters(*tweet_id: str*, *count: int = 40*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/client/client.html#Client.get_retweeters)  
Retrieve users who retweeted a specific tweet.

Parameters:  
- **tweet_id** (`str`) – The ID of the tweet.

- **count** (`int`, default=40) – The maximum number of users to retrieve.

- **cursor** (`str`, default=None) – A string indicating the position of the cursor for pagination.

Returns:  
A list of users who retweeted the tweet.

Return type:  
Result\[`User`\]

Examples

    >>> tweet_id = '...'
    >>> retweeters = client.get_retweeters(tweet_id)
    >>> print(retweeters)
    [<User id="...">, <User id="...">, ..., <User id="...">]

    >>> more_retweeters = retweeters.next()  # Retrieve more retweeters.
    >>> print(more_retweeters)
    [<User id="...">, <User id="...">, ..., <User id="...">]

async get_favoriters(*tweet_id: str*, *count: int = 40*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/client/client.html#Client.get_favoriters)  
Retrieve users who favorited a specific tweet.

Parameters:  
- **tweet_id** (`str`) – The ID of the tweet.

- **count** (*int,* *default=40*) – The maximum number of users to retrieve.

- **cursor** (`str`, default=None) – A string indicating the position of the cursor for pagination.

Returns:  
A list of users who favorited the tweet.

Return type:  
Result\[`User`\]

Examples

    >>> tweet_id = '...'
    >>> favoriters = await client.get_favoriters(tweet_id)
    >>> print(favoriters)
    [<User id="...">, <User id="...">, ..., <User id="...">]

    >>> # Retrieve more favoriters.
    >>> more_favoriters = await favoriters.next()
    >>> print(more_favoriters)
    [<User id="...">, <User id="...">, ..., <User id="...">]

async get_community_note(*note_id: str*) → [CommunityNote](#twikit.tweet.CommunityNote "twikit.tweet.CommunityNote")[\[source\]](_modules/twikit/client/client.html#Client.get_community_note)  
Fetches a community note by ID.

Parameters:  
**note_id** (`str`) – The ID of the community note.

Returns:  
A CommunityNote object representing the fetched community note.

Return type:  
`CommunityNote`

Raises:  
[**TwitterException**](#twikit.errors.TwitterException "twikit.errors.TwitterException") – Invalid note ID.

Examples

    >>> note_id = '...'
    >>> note = client.get_community_note(note_id)
    >>> print(note)
    <CommunityNote id="...">

async get_user_tweets(*user_id: str*, *tweet_type: Literal\['Tweets', 'Replies', 'Media', 'Likes'\]*, *count: int = 40*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")\][\[source\]](_modules/twikit/client/client.html#Client.get_user_tweets)  
Fetches tweets from a specific user’s timeline.

Parameters:  
- **user_id** (`str`) – The ID of the Twitter user whose tweets to retrieve. To get the user id from the screen name, you can use get_user_by_screen_name method.

- **tweet_type** (*{'Tweets',* *'Replies',* *'Media',* *'Likes'}*) – The type of tweets to retrieve.

- **count** (`int`, default=40) – The number of tweets to retrieve.

- **cursor** (`str`, default=None) – The cursor for fetching the next set of results.

Returns:  
A Result object containing a list of Tweet objects.

Return type:  
Result\[`Tweet`\]

Examples

    >>> user_id = '...'

If you only have the screen name, you can get the user id as follows:

    >>> screen_name = 'example_user'
    >>> user = client.get_user_by_screen_name(screen_name)
    >>> user_id = user.id

    >>> tweets = await client.get_user_tweets(user_id, 'Tweets', count=20)
    >>> for tweet in tweets:
    ...    print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    ...

    >>> more_tweets = await tweets.next()  # Retrieve more tweets
    >>> for tweet in more_tweets:
    ...     print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    ...

    >>> # Retrieve previous tweets
    >>> previous_tweets = await tweets.previous()

See also

[`get_user_by_screen_name`](#twikit.client.client.Client.get_user_by_screen_name "twikit.client.client.Client.get_user_by_screen_name")

async get_timeline(*count: int = 20*, *seen_tweet_ids: list\[str\] \| None = None*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")\][\[source\]](_modules/twikit/client/client.html#Client.get_timeline)  
Retrieves the timeline. Retrieves tweets from Home -\> For You.

Parameters:  
- **count** (`int`, default=20) – The number of tweets to retrieve.

- **seen_tweet_ids** (list\[`str`\], default=None) – A list of tweet IDs that have been seen.

- **cursor** (`str`, default=None) – A cursor for pagination.

Returns:  
A Result object containing a list of Tweet objects.

Return type:  
Result\[`Tweet`\]

Example

    >>> tweets = await client.get_timeline()
    >>> for tweet in tweets:
    ...     print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    ...
    >>> more_tweets = await tweets.next() # Retrieve more tweets
    >>> for tweet in more_tweets:
    ...     print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    ...

async get_latest_timeline(*count: int = 20*, *seen_tweet_ids: list\[str\] \| None = None*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")\][\[source\]](_modules/twikit/client/client.html#Client.get_latest_timeline)  
Retrieves the timeline. Retrieves tweets from Home -\> Following.

Parameters:  
- **count** (`int`, default=20) – The number of tweets to retrieve.

- **seen_tweet_ids** (list\[`str`\], default=None) – A list of tweet IDs that have been seen.

- **cursor** (`str`, default=None) – A cursor for pagination.

Returns:  
A Result object containing a list of Tweet objects.

Return type:  
Result\[`Tweet`\]

Example

    >>> tweets = await client.get_latest_timeline()
    >>> for tweet in tweets:
    ...     print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    ...
    >>> more_tweets = await tweets.next() # Retrieve more tweets
    >>> for tweet in more_tweets:
    ...     print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    ...

async favorite_tweet(*tweet_id: str*) → Response[\[source\]](_modules/twikit/client/client.html#Client.favorite_tweet)  
Favorites a tweet.

Parameters:  
**tweet_id** (`str`) – The ID of the tweet to be liked.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

Examples

    >>> tweet_id = '...'
    >>> await client.favorite_tweet(tweet_id)

See also

[`unfavorite_tweet`](#twikit.client.client.Client.unfavorite_tweet "twikit.client.client.Client.unfavorite_tweet")

async unfavorite_tweet(*tweet_id: str*) → Response[\[source\]](_modules/twikit/client/client.html#Client.unfavorite_tweet)  
Unfavorites a tweet.

Parameters:  
**tweet_id** (`str`) – The ID of the tweet to be unliked.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

Examples

    >>> tweet_id = '...'
    >>> await client.unfavorite_tweet(tweet_id)

See also

[`favorite_tweet`](#twikit.client.client.Client.favorite_tweet "twikit.client.client.Client.favorite_tweet")

async retweet(*tweet_id: str*) → Response[\[source\]](_modules/twikit/client/client.html#Client.retweet)  
Retweets a tweet.

Parameters:  
**tweet_id** (`str`) – The ID of the tweet to be retweeted.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

Examples

    >>> tweet_id = '...'
    >>> await client.retweet(tweet_id)

See also

[`delete_retweet`](#twikit.client.client.Client.delete_retweet "twikit.client.client.Client.delete_retweet")

async delete_retweet(*tweet_id: str*) → Response[\[source\]](_modules/twikit/client/client.html#Client.delete_retweet)  
Deletes the retweet.

Parameters:  
**tweet_id** (`str`) – The ID of the retweeted tweet to be unretweeted.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

Examples

    >>> tweet_id = '...'
    >>> await client.delete_retweet(tweet_id)

See also

[`retweet`](#twikit.client.client.Client.retweet "twikit.client.client.Client.retweet")

async bookmark_tweet(*tweet_id: str*, *folder_id: str \| None = None*) → Response[\[source\]](_modules/twikit/client/client.html#Client.bookmark_tweet)  
Adds the tweet to bookmarks.

Parameters:  
- **tweet_id** (`str`) – The ID of the tweet to be bookmarked.

- **folder_id** (`str` \| None, default=None) – The ID of the folder to add the bookmark to.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

Examples

    >>> tweet_id = '...'
    >>> await client.bookmark_tweet(tweet_id)

async delete_bookmark(*tweet_id: str*) → Response[\[source\]](_modules/twikit/client/client.html#Client.delete_bookmark)  
Removes the tweet from bookmarks.

Parameters:  
**tweet_id** (`str`) – The ID of the tweet to be removed from bookmarks.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

Examples

    >>> tweet_id = '...'
    >>> await client.delete_bookmark(tweet_id)

See also

[`bookmark_tweet`](#twikit.client.client.Client.bookmark_tweet "twikit.client.client.Client.bookmark_tweet")

async get_bookmarks(*count: int = 20*, *cursor: str \| None = None*, *folder_id: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")\][\[source\]](_modules/twikit/client/client.html#Client.get_bookmarks)  
Retrieves bookmarks from the authenticated user’s Twitter account.

Parameters:  
- **count** (`int`, default=20) – The number of bookmarks to retrieve.

- **folder_id** (`str` \| None, default=None) – Folder to retrieve bookmarks.

Returns:  
A Result object containing a list of Tweet objects representing bookmarks.

Return type:  
Result\[`Tweet`\]

Example

    >>> bookmarks = await client.get_bookmarks()
    >>> for bookmark in bookmarks:
    ...     print(bookmark)
    <Tweet id="...">
    <Tweet id="...">

    >>> # # To retrieve more bookmarks
    >>> more_bookmarks = await bookmarks.next()
    >>> for bookmark in more_bookmarks:
    ...     print(bookmark)
    <Tweet id="...">
    <Tweet id="...">

async delete_all_bookmarks() → Response[\[source\]](_modules/twikit/client/client.html#Client.delete_all_bookmarks)  
Deleted all bookmarks.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

Examples

    >>> await client.delete_all_bookmarks()

async get_bookmark_folders(*cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[BookmarkFolder\][\[source\]](_modules/twikit/client/client.html#Client.get_bookmark_folders)  
Retrieves bookmark folders.

Returns:  
Result object containing a list of bookmark folders.

Return type:  
Result\[`BookmarkFolder`\]

Examples

    >>> folders = await client.get_bookmark_folders()
    >>> print(folders)
    [<BookmarkFolder id="...">, ..., <BookmarkFolder id="...">]
    >>> more_folders = await folders.next()  # Retrieve more folders

async edit_bookmark_folder(*folder_id: str*, *name: str*) → BookmarkFolder[\[source\]](_modules/twikit/client/client.html#Client.edit_bookmark_folder)  
Edits a bookmark folder.

Parameters:  
- **folder_id** (`str`) – ID of the folder to edit.

- **name** (`str`) – New name for the folder.

Returns:  
Updated bookmark folder.

Return type:  
`BookmarkFolder`

Examples

    >>> await client.edit_bookmark_folder('123456789', 'MyFolder')

async delete_bookmark_folder(*folder_id: str*) → Response[\[source\]](_modules/twikit/client/client.html#Client.delete_bookmark_folder)  
Deletes a bookmark folder.

Parameters:  
**folder_id** (`str`) – ID of the folder to delete.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

async create_bookmark_folder(*name: str*) → BookmarkFolder[\[source\]](_modules/twikit/client/client.html#Client.create_bookmark_folder)  
Creates a bookmark folder.

Parameters:  
**name** (`str`) – Name of the folder.

Returns:  
Newly created bookmark folder.

Return type:  
`BookmarkFolder`

async follow_user(*user_id: str*) → [User](#twikit.user.User "twikit.user.User")[\[source\]](_modules/twikit/client/client.html#Client.follow_user)  
Follows a user.

Parameters:  
**user_id** (`str`) – The ID of the user to follow.

Returns:  
The followed user.

Return type:  
`User`

Examples

    >>> user_id = '...'
    >>> await client.follow_user(user_id)

See also

[`unfollow_user`](#twikit.client.client.Client.unfollow_user "twikit.client.client.Client.unfollow_user")

async unfollow_user(*user_id: str*) → [User](#twikit.user.User "twikit.user.User")[\[source\]](_modules/twikit/client/client.html#Client.unfollow_user)  
Unfollows a user.

Parameters:  
**user_id** (`str`) – The ID of the user to unfollow.

Returns:  
The unfollowed user.

Return type:  
`User`

Examples

    >>> user_id = '...'
    >>> await client.unfollow_user(user_id)

See also

[`follow_user`](#twikit.client.client.Client.follow_user "twikit.client.client.Client.follow_user")

async block_user(*user_id: str*) → [User](#twikit.user.User "twikit.user.User")[\[source\]](_modules/twikit/client/client.html#Client.block_user)  
Blocks a user.

Parameters:  
**user_id** (`str`) – The ID of the user to block.

Returns:  
The blocked user.

Return type:  
`User`

See also

[`unblock_user`](#twikit.client.client.Client.unblock_user "twikit.client.client.Client.unblock_user")

async unblock_user(*user_id: str*) → [User](#twikit.user.User "twikit.user.User")[\[source\]](_modules/twikit/client/client.html#Client.unblock_user)  
Unblocks a user.

Parameters:  
**user_id** (`str`) – The ID of the user to unblock.

Returns:  
The unblocked user.

Return type:  
`User`

See also

[`block_user`](#twikit.client.client.Client.block_user "twikit.client.client.Client.block_user")

async mute_user(*user_id: str*) → [User](#twikit.user.User "twikit.user.User")[\[source\]](_modules/twikit/client/client.html#Client.mute_user)  
Mutes a user.

Parameters:  
**user_id** (`str`) – The ID of the user to mute.

Returns:  
The muted user.

Return type:  
`User`

See also

[`unmute_user`](#twikit.client.client.Client.unmute_user "twikit.client.client.Client.unmute_user")

async unmute_user(*user_id: str*) → [User](#twikit.user.User "twikit.user.User")[\[source\]](_modules/twikit/client/client.html#Client.unmute_user)  
Unmutes a user.

Parameters:  
**user_id** (`str`) – The ID of the user to unmute.

Returns:  
The unmuted user.

Return type:  
`User`

See also

[`mute_user`](#twikit.client.client.Client.mute_user "twikit.client.client.Client.mute_user")

async get_trends(*category: Literal\['trending', 'for-you', 'news', 'sports', 'entertainment'\]*, *count: int = 20*, *retry: bool = True*, *additional_request_params: dict \| None = None*) → list\[[Trend](#twikit.trend.Trend "twikit.trend.Trend")\][\[source\]](_modules/twikit/client/client.html#Client.get_trends)  
Retrieves trending topics on Twitter.

Parameters:  
- **category** (*{'trending',* *'for-you',* *'news',* *'sports',* *'entertainment'}*) – The category of trends to retrieve. Valid options include: - ‘trending’: General trending topics. - ‘for-you’: Trends personalized for the user. - ‘news’: News-related trends. - ‘sports’: Sports-related trends. - ‘entertainment’: Entertainment-related trends.

- **count** (`int`, default=20) – The number of trends to retrieve.

- **retry** (`bool`, default=True) – If no trends are fetched continuously retry to fetch trends.

- **additional_request_params** (`dict`, default=None) – Parameters to be added on top of the existing trends API parameters. Typically, it is used as additional_request_params = {‘candidate_source’: ‘trends’} when this function doesn’t work otherwise.

Returns:  
A list of Trend objects representing the retrieved trends.

Return type:  
list\[`Trend`\]

Examples

    >>> trends = await client.get_trends('trending')
    >>> for trend in trends:
    ...     print(trend)
    <Trend name="...">
    <Trend name="...">
    ...

async get_available_locations() → list\[[Location](#twikit.trend.Location "twikit.trend.Location")\][\[source\]](_modules/twikit/client/client.html#Client.get_available_locations)  
Retrieves locations where trends can be retrieved.

Return type:  
list\[[`Location`](#twikit.trend.Location "twikit.trend.Location")\]

async get_place_trends(*woeid: int*) → [PlaceTrends](#twikit.trend.PlaceTrends "twikit.trend.PlaceTrends")[\[source\]](_modules/twikit/client/client.html#Client.get_place_trends)  
Retrieves the top 50 trending topics for a specific id. You can get available woeid using [`Client.get_available_locations`](#twikit.client.client.Client.get_available_locations "twikit.client.client.Client.get_available_locations").

async get_user_followers(*user_id: str*, *count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/client/client.html#Client.get_user_followers)  
Retrieves a list of followers for a given user.

Parameters:  
- **user_id** (`str`) – The ID of the user for whom to retrieve followers.

- **count** (*int,* *default=20*) – The number of followers to retrieve.

Returns:  
A list of User objects representing the followers.

Return type:  
Result\[`User`\]

async get_latest_followers(*user_id: str \| None = None*, *screen_name: str \| None = None*, *count: int = 200*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/client/client.html#Client.get_latest_followers)  
Retrieves the latest followers. Max count : 200

async get_latest_friends(*user_id: str \| None = None*, *screen_name: str \| None = None*, *count: int = 200*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/client/client.html#Client.get_latest_friends)  
Retrieves the latest friends (following users). Max count : 200

async get_user_verified_followers(*user_id: str*, *count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/client/client.html#Client.get_user_verified_followers)  
Retrieves a list of verified followers for a given user.

Parameters:  
- **user_id** (`str`) – The ID of the user for whom to retrieve verified followers.

- **count** (`int`, default=20) – The number of verified followers to retrieve.

Returns:  
A list of User objects representing the verified followers.

Return type:  
Result\[`User`\]

async get_user_followers_you_know(*user_id: str*, *count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/client/client.html#Client.get_user_followers_you_know)  
Retrieves a list of common followers.

Parameters:  
- **user_id** (`str`) – The ID of the user for whom to retrieve followers you might know.

- **count** (`int`, default=20) – The number of followers you might know to retrieve.

Returns:  
A list of User objects representing the followers you might know.

Return type:  
Result\[`User`\]

async get_user_following(*user_id: str*, *count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/client/client.html#Client.get_user_following)  
Retrieves a list of users whom the given user is following.

Parameters:  
- **user_id** (`str`) – The ID of the user for whom to retrieve the following users.

- **count** (`int`, default=20) – The number of following users to retrieve.

Returns:  
A list of User objects representing the users being followed.

Return type:  
Result\[`User`\]

async get_user_subscriptions(*user_id: str*, *count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/client/client.html#Client.get_user_subscriptions)  
Retrieves a list of users to which the specified user is subscribed.

Parameters:  
- **user_id** (`str`) – The ID of the user for whom to retrieve subscriptions.

- **count** (`int`, default=20) – The number of subscriptions to retrieve.

Returns:  
A list of User objects representing the subscribed users.

Return type:  
Result\[`User`\]

async get_followers_ids(*user_id: str \| None = None*, *screen_name: str \| None = None*, *count: int = 5000*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[int\][\[source\]](_modules/twikit/client/client.html#Client.get_followers_ids)  
Fetches the IDs of the followers of a specified user.

Parameters:  
- **user_id** (`str` \| None, default=None) – The ID of the user for whom to return results.

- **screen_name** (`str` \| None, default=None) – The screen name of the user for whom to return results.

- **count** (`int`, default=5000) – The maximum number of IDs to retrieve.

Returns:  
A Result object containing the IDs of the followers.

Return type:  
`` Result`[:class:`int ``\]

async get_friends_ids(*user_id: str \| None = None*, *screen_name: str \| None = None*, *count: int = 5000*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[int\][\[source\]](_modules/twikit/client/client.html#Client.get_friends_ids)  
Fetches the IDs of the friends (following users) of a specified user.

Parameters:  
- **user_id** (`str` \| None, default=None) – The ID of the user for whom to return results.

- **screen_name** (`str` \| None, default=None) – The screen name of the user for whom to return results.

- **count** (`int`, default=5000) – The maximum number of IDs to retrieve.

Returns:  
A Result object containing the IDs of the friends.

Return type:  
`` Result`[:class:`int ``\]

async send_dm(*user_id: str*, *text: str*, *media_id: str \| None = None*, *reply_to: str \| None = None*) → [Message](#twikit.message.Message "twikit.message.Message")[\[source\]](_modules/twikit/client/client.html#Client.send_dm)  
Send a direct message to a user.

Parameters:  
- **user_id** (`str`) – The ID of the user to whom the direct message will be sent.

- **text** (`str`) – The text content of the direct message.

- **media_id** (`str`, default=None) – The media ID associated with any media content to be included in the message. Media ID can be received by using the `upload_media()` method.

- **reply_to** (`str`, default=None) – Message ID to reply to.

Returns:  
Message object containing information about the message sent.

Return type:  
`Message`

Examples

    >>> # send DM with media
    >>> user_id = '000000000'
    >>> media_id = await client.upload_media('image.png')
    >>> message = await client.send_dm(user_id, 'text', media_id)
    >>> print(message)
    <Message id='...'>

See also

[`upload_media`](#twikit.client.client.Client.upload_media "twikit.client.client.Client.upload_media"), [`delete_dm`](#twikit.client.client.Client.delete_dm "twikit.client.client.Client.delete_dm")

async add_reaction_to_message(*message_id: str*, *conversation_id: str*, *emoji: str*) → Response[\[source\]](_modules/twikit/client/client.html#Client.add_reaction_to_message)  
Adds a reaction emoji to a specific message in a conversation.

Parameters:  
- **message_id** (`str`) – The ID of the message to which the reaction emoji will be added. Group ID (‘00000000’) or partner_ID-your_ID (‘00000000-00000001’)

- **conversation_id** (`str`) – The ID of the conversation containing the message.

- **emoji** (`str`) – The emoji to be added as a reaction.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

Examples

    >>> message_id = '00000000'
    >>> conversation_id = f'00000001-{await client.user_id()}'
    >>> await client.add_reaction_to_message(
    ...    message_id, conversation_id, 'Emoji here'
    ... )

async remove_reaction_from_message(*message_id: str*, *conversation_id: str*, *emoji: str*) → Response[\[source\]](_modules/twikit/client/client.html#Client.remove_reaction_from_message)  
Remove a reaction from a message.

Parameters:  
- **message_id** (`str`) – The ID of the message from which to remove the reaction.

- **conversation_id** (`str`) – The ID of the conversation where the message is located. Group ID (‘00000000’) or partner_ID-your_ID (‘00000000-00000001’)

- **emoji** (`str`) – The emoji to remove as a reaction.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

Examples

    >>> message_id = '00000000'
    >>> conversation_id = f'00000001-{await client.user_id()}'
    >>> await client.remove_reaction_from_message(
    ...    message_id, conversation_id, 'Emoji here'
    ... )

async delete_dm(*message_id: str*) → Response[\[source\]](_modules/twikit/client/client.html#Client.delete_dm)  
Deletes a direct message with the specified message ID.

Parameters:  
**message_id** (`str`) – The ID of the direct message to be deleted.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

Examples

    >>> await client.delete_dm('0000000000')

async get_dm_history(*user_id: str*, *max_id: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[Message](#twikit.message.Message "twikit.message.Message")\][\[source\]](_modules/twikit/client/client.html#Client.get_dm_history)  
Retrieves the DM conversation history with a specific user.

Parameters:  
- **user_id** (`str`) – The ID of the user with whom the DM conversation history will be retrieved.

- **max_id** (`str`, default=None) – If specified, retrieves messages older than the specified max_id.

Returns:  
A Result object containing a list of Message objects representing the DM conversation history.

Return type:  
Result\[`Message`\]

Examples

    >>> messages = await client.get_dm_history('0000000000')
    >>> for message in messages:
    >>>     print(message)
    <Message id="...">
    <Message id="...">
    ...
    ...

    >>> more_messages = await messages.next()  # Retrieve more messages
    >>> for message in more_messages:
    >>>     print(message)
    <Message id="...">
    <Message id="...">
    ...
    ...

async send_dm_to_group(*group_id: str*, *text: str*, *media_id: str \| None = None*, *reply_to: str \| None = None*) → GroupMessage[\[source\]](_modules/twikit/client/client.html#Client.send_dm_to_group)  
Sends a message to a group.

Parameters:  
- **group_id** (`str`) – The ID of the group in which the direct message will be sent.

- **text** (`str`) – The text content of the direct message.

- **media_id** (`str`, default=None) – The media ID associated with any media content to be included in the message. Media ID can be received by using the `upload_media()` method.

- **reply_to** (`str`, default=None) – Message ID to reply to.

Returns:  
GroupMessage object containing information about the message sent.

Return type:  
`GroupMessage`

Examples

    >>> # send DM with media
    >>> group_id = '000000000'
    >>> media_id = await client.upload_media('image.png')
    >>> message = await client.send_dm_to_group(group_id, 'text', media_id)
    >>> print(message)
    <GroupMessage id='...'>

See also

[`upload_media`](#twikit.client.client.Client.upload_media "twikit.client.client.Client.upload_media"), [`delete_dm`](#twikit.client.client.Client.delete_dm "twikit.client.client.Client.delete_dm")

async get_group_dm_history(*group_id: str*, *max_id: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[GroupMessage\][\[source\]](_modules/twikit/client/client.html#Client.get_group_dm_history)  
Retrieves the DM conversation history in a group.

Parameters:  
- **group_id** (`str`) – The ID of the group in which the DM conversation history will be retrieved.

- **max_id** (`str`, default=None) – If specified, retrieves messages older than the specified max_id.

Returns:  
A Result object containing a list of GroupMessage objects representing the DM conversation history.

Return type:  
Result\[`GroupMessage`\]

Examples

    >>> messages = await client.get_group_dm_history('0000000000')
    >>> for message in messages:
    >>>     print(message)
    <GroupMessage id="...">
    <GroupMessage id="...">
    ...
    ...

    >>> more_messages = await messages.next()  # Retrieve more messages
    >>> for message in more_messages:
    >>>     print(message)
    <GroupMessage id="...">
    <GroupMessage id="...">
    ...
    ...

async get_group(*group_id: str*) → Group[\[source\]](_modules/twikit/client/client.html#Client.get_group)  
Fetches a guild by ID.

Parameters:  
**group_id** (`str`) – The ID of the group to retrieve information for.

Returns:  
An object representing the retrieved group.

Return type:  
`Group`

async add_members_to_group(*group_id: str*, *user_ids: list\[str\]*) → Response[\[source\]](_modules/twikit/client/client.html#Client.add_members_to_group)  
Adds members to a group.

Parameters:  
- **group_id** (`str`) – ID of the group to which the member is to be added.

- **user_ids** (list\[`str`\]) – List of IDs of users to be added.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

Examples

    >>> group_id = '...'
    >>> members = ['...']
    >>> await client.add_members_to_group(group_id, members)

async change_group_name(*group_id: str*, *name: str*) → Response[\[source\]](_modules/twikit/client/client.html#Client.change_group_name)  
Changes group name

Parameters:  
- **group_id** (`str`) – ID of the group to be renamed.

- **name** (`str`) – New name.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

async create_list(*name: str*, *description: str = ''*, *is_private: bool = False*) → [List](#twikit.list.List "twikit.list.List")[\[source\]](_modules/twikit/client/client.html#Client.create_list)  
Creates a list.

Parameters:  
- **name** (`str`) – The name of the list.

- **description** (`str`, default=’’) – The description of the list.

- **is_private** (`bool`, default=False) – Indicates whether the list is private (True) or public (False).

Returns:  
The created list.

Return type:  
`List`

Examples

    >>> list = await client.create_list(
    ...     'list name',
    ...     'list description',
    ...     is_private=True
    ... )
    >>> print(list)
    <List id="...">

async edit_list_banner(*list_id: str*, *media_id: str*) → Response[\[source\]](_modules/twikit/client/client.html#Client.edit_list_banner)  
Edit the banner image of a list.

Parameters:  
- **list_id** (`str`) – The ID of the list.

- **media_id** (`str`) – The ID of the media to use as the new banner image.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

Examples

    >>> list_id = '...'
    >>> media_id = await client.upload_media('image.png')
    >>> await client.edit_list_banner(list_id, media_id)

async delete_list_banner(*list_id: str*) → Response[\[source\]](_modules/twikit/client/client.html#Client.delete_list_banner)  
Deletes list banner.

Parameters:  
**list_id** (`str`) – ID of the list from which the banner is to be removed.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

async edit_list(*list_id: str*, *name: str \| None = None*, *description: str \| None = None*, *is_private: bool \| None = None*) → [List](#twikit.list.List "twikit.list.List")[\[source\]](_modules/twikit/client/client.html#Client.edit_list)  
Edits list information.

Parameters:  
- **list_id** (`str`) – The ID of the list to edit.

- **name** (`str`, default=None) – The new name for the list.

- **description** (`str`, default=None) – The new description for the list.

- **is_private** (`bool`, default=None) – Indicates whether the list should be private (True) or public (False).

Returns:  
The updated Twitter list.

Return type:  
`List`

Examples

    >>> await client.edit_list(
    ...     'new name', 'new description', True
    ... )

async add_list_member(*list_id: str*, *user_id: str*) → [List](#twikit.list.List "twikit.list.List")[\[source\]](_modules/twikit/client/client.html#Client.add_list_member)  
Adds a user to a list.

Parameters:  
- **list_id** (`str`) – The ID of the list.

- **user_id** (`str`) – The ID of the user to add to the list.

Returns:  
The updated Twitter list.

Return type:  
`List`

Examples

    >>> await client.add_list_member('list id', 'user id')

async remove_list_member(*list_id: str*, *user_id: str*) → [List](#twikit.list.List "twikit.list.List")[\[source\]](_modules/twikit/client/client.html#Client.remove_list_member)  
Removes a user from a list.

Parameters:  
- **list_id** (`str`) – The ID of the list.

- **user_id** (`str`) – The ID of the user to remove from the list.

Returns:  
The updated Twitter list.

Return type:  
`List`

Examples

    >>> await client.remove_list_member('list id', 'user id')

async get_lists(*count: int = 100*, *cursor: str = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[List](#twikit.list.List "twikit.list.List")\][\[source\]](_modules/twikit/client/client.html#Client.get_lists)  
Retrieves a list of user lists.

Parameters:  
**count** (`int`) – The number of lists to retrieve.

Returns:  
Retrieved lists.

Return type:  
Result\[`List`\]

Examples

    >>> lists = client.get_lists()
    >>> for list_ in lists:
    ...     print(list_)
    <List id="...">
    <List id="...">
    ...
    ...
    >>> more_lists = lists.next()  # Retrieve more lists

async get_list(*list_id: str*) → [List](#twikit.list.List "twikit.list.List")[\[source\]](_modules/twikit/client/client.html#Client.get_list)  
Retrieve list by ID.

Parameters:  
**list_id** (`str`) – The ID of the list to retrieve.

Returns:  
List object.

Return type:  
`List`

async get_list_tweets(*list_id: str*, *count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")\][\[source\]](_modules/twikit/client/client.html#Client.get_list_tweets)  
Retrieves tweets from a list.

Parameters:  
- **list_id** (`str`) – The ID of the list to retrieve tweets from.

- **count** (`int`, default=20) – The number of tweets to retrieve.

- **cursor** (`str`, default=None) – The cursor for pagination.

Returns:  
A Result object containing the retrieved tweets.

Return type:  
Result\[`Tweet`\]

Examples

    >>> tweets = await client.get_list_tweets('list id')
    >>> for tweet in tweets:
    ...    print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    ...

    >>> more_tweets = await tweets.next()  # Retrieve more tweets
    >>> for tweet in more_tweets:
    ...     print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    ...

async get_list_members(*list_id: str*, *count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/client/client.html#Client.get_list_members)  
Retrieves members of a list.

Parameters:  
- **list_id** (`str`) – List ID.

- **count** (*int,* *default=20*) – Number of members to retrieve.

Returns:  
Members of a list

Return type:  
Result\[`User`\]

Examples

    >>> members = client.get_list_members(123456789)
    >>> for member in members:
    ...     print(member)
    <User id="...">
    <User id="...">
    ...
    ...
    >>> more_members = members.next()  # Retrieve more members

async get_list_subscribers(*list_id: str*, *count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/client/client.html#Client.get_list_subscribers)  
Retrieves subscribers of a list.

Parameters:  
- **list_id** (`str`) – List ID.

- **count** (`int`, default=20) – Number of subscribers to retrieve.

Returns:  
Subscribers of a list

Return type:  
Result\[`User`\]

Examples

    >>> members = client.get_list_subscribers(123456789)
    >>> for subscriber in subscribers:
    ...     print(subscriber)
    <User id="...">
    <User id="...">
    ...
    ...
    >>> more_subscribers = members.next()  # Retrieve more subscribers

async search_list(*query: str*, *count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[List](#twikit.list.List "twikit.list.List")\][\[source\]](_modules/twikit/client/client.html#Client.search_list)  
Search for lists based on the provided query.

Parameters:  
- **query** (`str`) – The search query.

- **count** (`int`, default=20) – The number of lists to retrieve.

Returns:  
An instance of the Result class containing the search results.

Return type:  
Result\[`List`\]

Examples

    >>> lists = await client.search_list('query')
    >>> for list in lists:
    ...     print(list)
    <List id="...">
    <List id="...">
    ...

    >>> more_lists = await lists.next()  # Retrieve more lists

async get_notifications(*type: Literal\['All', 'Verified', 'Mentions'\]*, *count: int = 40*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[Notification](#twikit.notification.Notification "twikit.notification.Notification")\][\[source\]](_modules/twikit/client/client.html#Client.get_notifications)  
Retrieve notifications based on the provided type.

Parameters:  
- **type** (*{'All',* *'Verified',* *'Mentions'}*) – Type of notifications to retrieve. All: All notifications Verified: Notifications relating to authenticated users Mentions: Notifications with mentions

- **count** (`int`, default=40) – Number of notifications to retrieve.

Returns:  
List of retrieved notifications.

Return type:  
Result\[`Notification`\]

Examples

    >>> notifications = await client.get_notifications('All')
    >>> for notification in notifications:
    ...     print(notification)
    <Notification id="...">
    <Notification id="...">
    ...
    ...

    >>> # Retrieve more notifications
    >>> more_notifications = await notifications.next()

async search_community(*query: str*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[Community](#twikit.community.Community "twikit.community.Community")\][\[source\]](_modules/twikit/client/client.html#Client.search_community)  
Searchs communities based on the specified query.

Parameters:  
**query** (`str`) – The search query.

Returns:  
List of retrieved communities.

Return type:  
Result\[`Community`\]

Examples

    >>> communities = await client.search_communities('query')
    >>> for community in communities:
    ...     print(community)
    <Community id="...">
    <Community id="...">
    ...

    >>> # Retrieve more communities
    >>> more_communities = await communities.next()

async get_community(*community_id: str*) → [Community](#twikit.community.Community "twikit.community.Community")[\[source\]](_modules/twikit/client/client.html#Client.get_community)  
Retrieves community by ID.

Parameters:  
**list_id** (`str`) – The ID of the community to retrieve.

Returns:  
Community object.

Return type:  
`Community`

async get_community_tweets(*community_id: str*, *tweet_type: Literal\['Top', 'Latest', 'Media'\]*, *count: int = 40*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")\][\[source\]](_modules/twikit/client/client.html#Client.get_community_tweets)  
Retrieves tweets from a community.

Parameters:  
- **community_id** (`str`) – The ID of the community.

- **tweet_type** (*{'Top',* *'Latest',* *'Media'}*) – The type of tweets to retrieve.

- **count** (`int`, default=40) – The number of tweets to retrieve.

Returns:  
List of retrieved tweets.

Return type:  
Result\[`Tweet`\]

Examples

    >>> community_id = '...'
    >>> tweets = await client.get_community_tweets(community_id, 'Latest')
    >>> for tweet in tweets:
    ...     print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    >>> more_tweets = await tweets.next()  # Retrieve more tweets

async get_communities_timeline(*count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")\][\[source\]](_modules/twikit/client/client.html#Client.get_communities_timeline)  
Retrieves tweets from communities timeline.

Parameters:  
**count** (`int`, default=20) – The number of tweets to retrieve.

Returns:  
List of retrieved tweets.

Return type:  
Result\[`Tweet`\]

Examples

    >>> tweets = await client.get_communities_timeline()
    >>> for tweet in tweets:
    ...     print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    >>> more_tweets = await tweets.next()  # Retrieve more tweets

async join_community(*community_id: str*) → [Community](#twikit.community.Community "twikit.community.Community")[\[source\]](_modules/twikit/client/client.html#Client.join_community)  
Join a community.

Parameters:  
**community_id** (`str`) – The ID of the community to join.

Returns:  
The joined community.

Return type:  
`Community`

async leave_community(*community_id: str*) → [Community](#twikit.community.Community "twikit.community.Community")[\[source\]](_modules/twikit/client/client.html#Client.leave_community)  
Leave a community.

Parameters:  
**community_id** (`str`) – The ID of the community to leave.

Returns:  
The left community.

Return type:  
`Community`

async request_to_join_community(*community_id: str*, *answer: str \| None = None*) → [Community](#twikit.community.Community "twikit.community.Community")[\[source\]](_modules/twikit/client/client.html#Client.request_to_join_community)  
Request to join a community.

Parameters:  
- **community_id** (`str`) – The ID of the community to request to join.

- **answer** (`str`, default=None) – The answer to the join request.

Returns:  
The requested community.

Return type:  
`Community`

async get_community_members(*community_id: str*, *count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[CommunityMember](#twikit.community.CommunityMember "twikit.community.CommunityMember")\][\[source\]](_modules/twikit/client/client.html#Client.get_community_members)  
Retrieves members of a community.

Parameters:  
- **community_id** (`str`) – The ID of the community.

- **count** (`int`, default=20) – The number of members to retrieve.

Returns:  
List of retrieved members.

Return type:  
Result\[`CommunityMember`\]

async get_community_moderators(*community_id: str*, *count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[CommunityMember](#twikit.community.CommunityMember "twikit.community.CommunityMember")\][\[source\]](_modules/twikit/client/client.html#Client.get_community_moderators)  
Retrieves moderators of a community.

Parameters:  
- **community_id** (`str`) – The ID of the community.

- **count** (`int`, default=20) – The number of moderators to retrieve.

Returns:  
List of retrieved moderators.

Return type:  
Result\[`CommunityMember`\]

async search_community_tweet(*community_id: str*, *query: str*, *count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")\][\[source\]](_modules/twikit/client/client.html#Client.search_community_tweet)  
Searchs tweets in a community.

Parameters:  
- **community_id** (`str`) – The ID of the community.

- **query** (`str`) – The search query.

- **count** (`int`, default=20) – The number of tweets to retrieve.

Returns:  
List of retrieved tweets.

Return type:  
Result\[`Tweet`\]

async get_streaming_session(*topics: set\[str\]*, *auto_reconnect: bool = True*) → [StreamingSession](#twikit.streaming.StreamingSession "twikit.streaming.StreamingSession")[\[source\]](_modules/twikit/client/client.html#Client.get_streaming_session)  
Returns a session for interacting with the streaming API.

Parameters:  
- **topics** (set\[`str`\]) – The set of topics to stream. Topics can be generated using [`Topic`](#twikit.streaming.Topic "twikit.streaming.Topic").

- **auto_reconnect** (`bool`, default=True) – Whether to automatically reconnect when disconnected.

Returns:  
A stream session instance.

Return type:  
[`StreamingSession`](#twikit.streaming.StreamingSession "twikit.streaming.StreamingSession")

Examples

    >>> from twikit.streaming import Topic
    >>>
    >>> topics = {
    ...     Topic.tweet_engagement('1739617652'), # Stream tweet engagement
    ...     Topic.dm_update('17544932482-174455537996'), # Stream DM update
    ...     Topic.dm_typing('17544932482-174455537996') # Stream DM typing
    ... }
    >>> session = await client.get_streaming_session(topics)
    >>>
    >>> async for topic, payload in session:
    ...     if payload.dm_update:
    ...         conversation_id = payload.dm_update.conversation_id
    ...         user_id = payload.dm_update.user_id
    ...         print(f'{conversation_id}: {user_id} sent a message')
    >>>
    >>>     if payload.dm_typing:
    ...         conversation_id = payload.dm_typing.conversation_id
    ...         user_id = payload.dm_typing.user_id
    ...         print(f'{conversation_id}: {user_id} is typing')
    >>>
    >>>     if payload.tweet_engagement:
    ...         like = payload.tweet_engagement.like_count
    ...         retweet = payload.tweet_engagement.retweet_count
    ...         view = payload.tweet_engagement.view_count
    ...         print('Tweet engagement updated:'
    ...               f'likes: {like} retweets: {retweet} views: {view}')

Topics to stream can be added or deleted using [`StreamingSession.update_subscriptions`](#twikit.streaming.StreamingSession.update_subscriptions "twikit.streaming.StreamingSession.update_subscriptions") method.

    >>> subscribe_topics = {
    ...     Topic.tweet_engagement('1749528513'),
    ...     Topic.tweet_engagement('1765829534')
    ... }
    >>> unsubscribe_topics = {
    ...     Topic.tweet_engagement('1739617652'),
    ...     Topic.dm_update('17544932482-174455537996'),
    ...     Topic.dm_update('17544932482-174455537996')
    ... }
    >>> await session.update_subscriptions(
    ...     subscribe_topics, unsubscribe_topics
    ... )

See also

[`StreamingSession`](#twikit.streaming.StreamingSession "twikit.streaming.StreamingSession"), [`StreamingSession.update_subscriptions`](#twikit.streaming.StreamingSession.update_subscriptions "twikit.streaming.StreamingSession.update_subscriptions"), [`Payload`](#twikit.streaming.Payload "twikit.streaming.Payload"), [`Topic`](#twikit.streaming.Topic "twikit.streaming.Topic")

## Tweet

class twikit.tweet.Tweet(*client: [Client](#twikit.client.client.Client "twikit.client.client.Client")*, *data: dict*, *user: [User](#twikit.user.User "twikit.user.User") = None*)[\[source\]](_modules/twikit/tweet.html#Tweet)  
id  
The unique identifier of the tweet.

Type:  
`str`

created_at  
The date and time when the tweet was created.

Type:  
`str`

created_at_datetime  
The created_at converted to datetime.

Type:  
`datetime`

user  
Author of the tweet.

Type:  
`User`

text  
The full text of the tweet.

Type:  
`str`

lang  
The language of the tweet.

Type:  
`str`

in_reply_to  
The tweet ID this tweet is in reply to, if any

Type:  
`str`

is_quote_status  
Indicates if the tweet is a quote status.

Type:  
`bool`

quote  
The Tweet being quoted (if any)

Type:  
[`Tweet`](#twikit.tweet.Tweet "twikit.tweet.Tweet") \| None

retweeted_tweet  
The Tweet being retweeted (if any)

Type:  
[`Tweet`](#twikit.tweet.Tweet "twikit.tweet.Tweet") \| None

possibly_sensitive  
Indicates if the tweet content may be sensitive.

Type:  
`bool`

possibly_sensitive_editable  
Indicates if the tweet’s sensitivity can be edited.

Type:  
`bool`

quote_count  
The count of quotes for the tweet.

Type:  
`int`

media  
A list of media entities associated with the tweet. [https://github.com/d60/twikit/blob/main/examples/download_tweet_media.py](https://github.com/d60/twikit/blob/main/examples/download_tweet_media.py)

Type:  
list\[[`media.Photo`](#twikit.media.Photo "twikit.media.Photo") \| [`media.AnimatedGif`](#twikit.media.AnimatedGif "twikit.media.AnimatedGif") \| [`media.Video`](#twikit.media.Video "twikit.media.Video")\]

reply_count  
The count of replies to the tweet.

Type:  
`int`

favorite_count  
The count of favorites or likes for the tweet.

Type:  
`int`

favorited  
Indicates if the tweet is favorited.

Type:  
`bool`

view_count  
The count of views.

Type:  
`int` \| None

view_count_state  
The state of the tweet views.

Type:  
`str` \| None

retweet_count  
The count of retweets for the tweet.

Type:  
`int`

bookmark_count  
The count of bookmarks for the tweet.

Type:  
`int`

bookmarked  
Indicates if the tweet is bookmarked.

Type:  
`bool`

place  
The location associated with the tweet.

Type:  
[`Place`](#twikit.geo.Place "twikit.geo.Place") \| None

editable_until_msecs  
The timestamp until which the tweet is editable.

Type:  
`int`

is_translatable  
Indicates if the tweet is translatable.

Type:  
`bool`

is_edit_eligible  
Indicates if the tweet is eligible for editing.

Type:  
`bool`

edits_remaining  
The remaining number of edits allowed for the tweet.

Type:  
`int`

edit_tweet_ids  
List of tweet IDs representing the edit history of the tweet.

Type:  
`` list`[:class:`int ``\]

replies  
Replies to the tweet.

Type:  
Result\[[`Tweet`](#twikit.tweet.Tweet "twikit.tweet.Tweet")\] \| None

reply_to  
A list of Tweet objects representing the tweets to which to reply.

Type:  
list\[[`Tweet`](#twikit.tweet.Tweet "twikit.tweet.Tweet")\] \| None

related_tweets  
Related tweets.

Type:  
list\[[`Tweet`](#twikit.tweet.Tweet "twikit.tweet.Tweet")\] \| None

hashtags  
Hashtags included in the tweet text.

Type:  
list\[`str`\]

has_card  
Indicates if the tweet contains a card.

Type:  
`bool`

thumbnail_title  
The title of the webpage displayed inside tweet’s card.

Type:  
`str` \| None

thumbnail_url  
Link to the image displayed in the tweet’s card.

Type:  
`str` \| None

urls  
Information about URLs contained in the tweet.

Type:  
`list`

full_text  
The full text of the tweet.

Type:  
`str` \| None

async delete() → Response[\[source\]](_modules/twikit/tweet.html#Tweet.delete)  
Deletes the tweet.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

Examples

    >>> await tweet.delete()

async favorite() → Response[\[source\]](_modules/twikit/tweet.html#Tweet.favorite)  
Favorites the tweet.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

See also

`Client.favorite_tweet`

async unfavorite() → Response[\[source\]](_modules/twikit/tweet.html#Tweet.unfavorite)  
Favorites the tweet.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

See also

`Client.unfavorite_tweet`

async retweet() → Response[\[source\]](_modules/twikit/tweet.html#Tweet.retweet)  
Retweets the tweet.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

See also

`Client.retweet`

async delete_retweet() → Response[\[source\]](_modules/twikit/tweet.html#Tweet.delete_retweet)  
Deletes the retweet.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

See also

`Client.delete_retweet`

async bookmark() → Response[\[source\]](_modules/twikit/tweet.html#Tweet.bookmark)  
Adds the tweet to bookmarks.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

See also

`Client.bookmark_tweet`

async delete_bookmark() → Response[\[source\]](_modules/twikit/tweet.html#Tweet.delete_bookmark)  
Removes the tweet from bookmarks.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

See also

`Client.delete_bookmark`

async reply(*text: str = ''*, *media_ids: list\[str\] \| None = None*, *\*\*kwargs*) → [Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")[\[source\]](_modules/twikit/tweet.html#Tweet.reply)  
Replies to the tweet.

Parameters:  
- **text** (`str`, default=’’) – The text content of the reply.

- **media_ids** (list\[`str`\], default=None) – A list of media IDs or URIs to attach to the reply. Media IDs can be obtained by using the upload_media method.

Returns:  
The created tweet.

Return type:  
[`Tweet`](#twikit.tweet.Tweet "twikit.tweet.Tweet")

Examples

    >>> tweet_text = 'Example text'
    >>> media_ids = [
    ...     client.upload_media('image1.png'),
    ...     client.upload_media('image2.png')
    ... ]
    >>> await tweet.reply(
    ...     tweet_text,
    ...     media_ids=media_ids
    ... )

See also

`None`

async get_retweeters(*count: str = 40*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/tweet.html#Tweet.get_retweeters)  
Retrieve users who retweeted the tweet.

Parameters:  
- **count** (`int`, default=40) – The maximum number of users to retrieve.

- **cursor** (`str`, default=None) – A string indicating the position of the cursor for pagination.

Returns:  
A list of users who retweeted the tweet.

Return type:  
Result\[`User`\]

Examples

    >>> tweet_id = '...'
    >>> retweeters = tweet.get_retweeters()
    >>> print(retweeters)
    [<User id="...">, <User id="...">, ..., <User id="...">]

    >>> more_retweeters = retweeters.next()  # Retrieve more retweeters.
    >>> print(more_retweeters)
    [<User id="...">, <User id="...">, ..., <User id="...">]

async get_favoriters(*count: str = 40*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/tweet.html#Tweet.get_favoriters)  
Retrieve users who favorited a specific tweet.

Parameters:  
- **tweet_id** (`str`) – The ID of the tweet.

- **count** (`int`, default=40) – The maximum number of users to retrieve.

- **cursor** (`str`, default=None) – A string indicating the position of the cursor for pagination.

Returns:  
A list of users who favorited the tweet.

Return type:  
Result\[`User`\]

Examples

    >>> tweet_id = '...'
    >>> favoriters = tweet.get_favoriters()
    >>> print(favoriters)
    [<User id="...">, <User id="...">, ..., <User id="...">]

    >>> more_favoriters = favoriters.next()  # Retrieve more favoriters.
    >>> print(more_favoriters)
    [<User id="...">, <User id="...">, ..., <User id="...">]

async get_similar_tweets() → list\[[Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")\][\[source\]](_modules/twikit/tweet.html#Tweet.get_similar_tweets)  
Retrieves tweets similar to the tweet (Twitter premium only).

Returns:  
A list of Tweet objects representing tweets similar to the tweet.

Return type:  
list\[[`Tweet`](#twikit.tweet.Tweet "twikit.tweet.Tweet")\]

&nbsp;

class twikit.tweet.Poll(*client: [Client](#twikit.client.client.Client "twikit.client.client.Client")*, *data: dict*, *tweet: [Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet") \| None = None*)[\[source\]](_modules/twikit/tweet.html#Poll)  
Represents a poll associated with a tweet. .. attribute:: tweet

> The tweet associated with the poll.
>
> type:  
> [`Tweet`](#twikit.tweet.Tweet "twikit.tweet.Tweet")

id  
The unique identifier of the poll.

Type:  
`str`

name  
The name of the poll.

Type:  
`str`

choices  
A list containing dictionaries representing poll choices. Each dictionary contains ‘label’ and ‘count’ keys for choice label and count.

Type:  
list\[`dict`\]

duration_minutes  
The duration of the poll in minutes.

Type:  
`int`

end_datetime_utc  
The end date and time of the poll in UTC format.

Type:  
`str`

last_updated_datetime_utc  
The last updated date and time of the poll in UTC format.

Type:  
`str`

selected_choice  
Number of the selected choice.

Type:  
`str` \| None

async vote(*selected_choice: str*) → [Poll](#twikit.tweet.Poll "twikit.tweet.Poll")[\[source\]](_modules/twikit/tweet.html#Poll.vote)  
Vote on the poll with the specified selected choice. :param selected_choice: The label of the selected choice for the vote. :type selected_choice: `str`

Returns:  
The Poll object representing the updated poll after voting.

Return type:  
[`Poll`](#twikit.tweet.Poll "twikit.tweet.Poll")

&nbsp;

class twikit.tweet.CommunityNote(*client: [Client](#twikit.client.client.Client "twikit.client.client.Client")*, *data: dict*)[\[source\]](_modules/twikit/tweet.html#CommunityNote)  
Represents a community note.

id  
The ID of the community note.

Type:  
`str`

text  
The text content of the community note.

Type:  
`str`

misleading_tags  
A list of tags indicating misleading information.

Type:  
list\[`str`\]

trustworthy_sources  
Indicates if the sources are trustworthy.

Type:  
`bool`

helpful_tags  
A list of tags indicating helpful information.

Type:  
list\[`str`\]

created_at  
The timestamp when the note was created.

Type:  
`int`

can_appeal  
Indicates if the note can be appealed.

Type:  
`bool`

appeal_status  
The status of the appeal.

Type:  
`str`

is_media_note  
Indicates if the note is related to media content.

Type:  
`bool`

media_note_matches  
Matches related to media content.

Type:  
`str`

birdwatch_profile  
Birdwatch profile associated with the note.

Type:  
`dict`

tweet_id  
The ID of the tweet associated with the note.

Type:  
`str`

## User

class twikit.user.User(*client: [Client](#twikit.client.client.Client "twikit.client.client.Client")*, *data: dict*)[\[source\]](_modules/twikit/user.html#User)  
id  
The unique identifier of the user.

Type:  
`str`

created_at  
The date and time when the user account was created.

Type:  
`str`

name  
The user’s name.

Type:  
`str`

screen_name  
The user’s screen name.

Type:  
`str`

profile_image_url  
The URL of the user’s profile image (HTTPS version).

Type:  
`str`

profile_banner_url  
The URL of the user’s profile banner.

Type:  
`str`

url  
The user’s URL.

Type:  
`str`

location  
The user’s location information.

Type:  
`str`

description  
The user’s profile description.

Type:  
`str`

description_urls  
URLs found in the user’s profile description.

Type:  
`list`

urls  
URLs associated with the user.

Type:  
`list`

pinned_tweet_ids  
The IDs of tweets that the user has pinned to their profile.

Type:  
`str`

is_blue_verified  
Indicates if the user is verified with a blue checkmark.

Type:  
`bool`

verified  
Indicates if the user is verified.

Type:  
`bool`

possibly_sensitive  
Indicates if the user’s content may be sensitive.

Type:  
`bool`

can_dm  
Indicates whether the user can receive direct messages.

Type:  
`bool`

can_media_tag  
Indicates whether the user can be tagged in media.

Type:  
`bool`

want_retweets  
Indicates if the user wants retweets.

Type:  
`bool`

default_profile  
Indicates if the user has the default profile.

Type:  
`bool`

default_profile_image  
Indicates if the user has the default profile image.

Type:  
`bool`

has_custom_timelines  
Indicates if the user has custom timelines.

Type:  
`bool`

followers_count  
The count of followers.

Type:  
`int`

fast_followers_count  
The count of fast followers.

Type:  
`int`

normal_followers_count  
The count of normal followers.

Type:  
`int`

following_count  
The count of users the user is following.

Type:  
`int`

favourites_count  
The count of favorites or likes.

Type:  
`int`

listed_count  
The count of lists the user is a member of.

Type:  
`int`

media_count  
The count of media items associated with the user.

Type:  
`int`

statuses_count  
The count of tweets.

Type:  
`int`

is_translator  
Indicates if the user is a translator.

Type:  
`bool`

translator_type  
The type of translator.

Type:  
`str`

profile_interstitial_type  
The type of profile interstitial.

Type:  
`str`

withheld_in_countries  
Countries where the user’s content is withheld.

Type:  
list\[`str`\]

property created_at_datetime: datetime  

async get_tweets(*tweet_type: Literal\['Tweets', 'Replies', 'Media', 'Likes'\]*, *count: int = 40*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")\][\[source\]](_modules/twikit/user.html#User.get_tweets)  
Retrieves the user’s tweets.

Parameters:  
- **tweet_type** (*{'Tweets',* *'Replies',* *'Media',* *'Likes'}*) – The type of tweets to retrieve.

- **count** (`int`, default=40) – The number of tweets to retrieve.

Returns:  
A Result object containing a list of Tweet objects.

Return type:  
Result\[`Tweet`\]

Examples

    >>> user = await client.get_user_by_screen_name('example_user')
    >>> tweets = await user.get_tweets('Tweets', count=20)
    >>> for tweet in tweets:
    ...    print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    ...

    >>> more_tweets = await tweets.next()  # Retrieve more tweets
    >>> for tweet in more_tweets:
    ...     print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    ...

async follow() → Response[\[source\]](_modules/twikit/user.html#User.follow)  
Follows the user.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

See also

`Client.follow_user`

async unfollow() → Response[\[source\]](_modules/twikit/user.html#User.unfollow)  
Unfollows the user.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

See also

`Client.unfollow_user`

async block() → Response[\[source\]](_modules/twikit/user.html#User.block)  
Blocks a user.

Parameters:  
**user_id** (`str`) – The ID of the user to block.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

See also

[`unblock`](#twikit.user.User.unblock "twikit.user.User.unblock")

async unblock() → Response[\[source\]](_modules/twikit/user.html#User.unblock)  
Unblocks a user.

Parameters:  
**user_id** (`str`) – The ID of the user to unblock.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

See also

[`block`](#twikit.user.User.block "twikit.user.User.block")

async mute() → Response[\[source\]](_modules/twikit/user.html#User.mute)  
Mutes a user.

Parameters:  
**user_id** (`str`) – The ID of the user to mute.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

See also

[`unmute`](#twikit.user.User.unmute "twikit.user.User.unmute")

async unmute() → Response[\[source\]](_modules/twikit/user.html#User.unmute)  
Unmutes a user.

Parameters:  
**user_id** (`str`) – The ID of the user to unmute.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

See also

[`mute`](#twikit.user.User.mute "twikit.user.User.mute")

async get_followers(*count: int = 20*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/user.html#User.get_followers)  
Retrieves a list of followers for the user.

Parameters:  
**count** (`int`, default=20) – The number of followers to retrieve.

Returns:  
A list of User objects representing the followers.

Return type:  
Result\[[`User`](#twikit.user.User "twikit.user.User")\]

See also

`Client.get_user_followers`

async get_verified_followers(*count: int = 20*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/user.html#User.get_verified_followers)  
Retrieves a list of verified followers for the user.

Parameters:  
**count** (`int`, default=20) – The number of verified followers to retrieve.

Returns:  
A list of User objects representing the verified followers.

Return type:  
Result\[[`User`](#twikit.user.User "twikit.user.User")\]

See also

`Client.get_user_verified_followers`

async get_followers_you_know(*count: int = 20*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/user.html#User.get_followers_you_know)  
Retrieves a list of followers whom the user might know.

Parameters:  
**count** (`int`, default=20) – The number of followers you might know to retrieve.

Returns:  
A list of User objects representing the followers you might know.

Return type:  
Result\[[`User`](#twikit.user.User "twikit.user.User")\]

See also

`Client.get_user_followers_you_know`

async get_following(*count: int = 20*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/user.html#User.get_following)  
Retrieves a list of users whom the user is following.

Parameters:  
**count** (`int`, default=20) – The number of following users to retrieve.

Returns:  
A list of User objects representing the users being followed.

Return type:  
Result\[[`User`](#twikit.user.User "twikit.user.User")\]

See also

`Client.get_user_following`

async get_subscriptions(*count: int = 20*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/user.html#User.get_subscriptions)  
Retrieves a list of users whom the user is subscribed to.

Parameters:  
**count** (`int`, default=20) – The number of subscriptions to retrieve.

Returns:  
A list of User objects representing the subscribed users.

Return type:  
Result\[[`User`](#twikit.user.User "twikit.user.User")\]

See also

`Client.get_user_subscriptions`

async get_latest_followers(*count: int \| None = None*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/user.html#User.get_latest_followers)  
Retrieves the latest followers. Max count : 200

async get_latest_friends(*count: int \| None = None*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/user.html#User.get_latest_friends)  
Retrieves the latest friends (following users). Max count : 200

async send_dm(*text: str*, *media_id: str = None*, *reply_to=None*) → [Message](#twikit.message.Message "twikit.message.Message")[\[source\]](_modules/twikit/user.html#User.send_dm)  
Send a direct message to the user.

Parameters:  
- **text** (`str`) – The text content of the direct message.

- **media_id** (`str`, default=None) – The media ID associated with any media content to be included in the message. Media ID can be received by using the `upload_media()` method.

- **reply_to** (`str`, default=None) – Message ID to reply to.

Returns:  
Message object containing information about the message sent.

Return type:  
`Message`

Examples

    >>> # send DM with media
    >>> media_id = await client.upload_media('image.png')
    >>> message = await user.send_dm('text', media_id)
    >>> print(message)
    <Message id="...">

See also

`Client.upload_media`, `Client.send_dm`

async get_dm_history(*max_id: str = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[Message](#twikit.message.Message "twikit.message.Message")\][\[source\]](_modules/twikit/user.html#User.get_dm_history)  
Retrieves the DM conversation history with the user.

Parameters:  
**max_id** (`str`, default=None) – If specified, retrieves messages older than the specified max_id.

Returns:  
A Result object containing a list of Message objects representing the DM conversation history.

Return type:  
Result\[`Message`\]

Examples

    >>> messages = await user.get_dm_history()
    >>> for message in messages:
    >>>     print(message)
    <Message id="...">
    <Message id="...">
    ...
    ...

    >>> more_messages = await messages.next()  # Retrieve more messages
    >>> for message in more_messages:
    >>>     print(message)
    <Message id="...">
    <Message id="...">
    ...
    ...

async get_highlights_tweets(*count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")\][\[source\]](_modules/twikit/user.html#User.get_highlights_tweets)  
Retrieves highlighted tweets from the user’s timeline.

Parameters:  
**count** (`int`, default=20) – The number of tweets to retrieve.

Returns:  
An instance of the Result class containing the highlighted tweets.

Return type:  
Result\[`Tweet`\]

Examples

    >>> result = await user.get_highlights_tweets()
    >>> for tweet in result:
    ...     print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    ...

    >>> more_results = await result.next()  # Retrieve more highlighted tweets
    >>> for tweet in more_results:
    ...     print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    ...

async update() → None[\[source\]](_modules/twikit/user.html#User.update)  

## Message

class twikit.message.Message(*client: [Client](#twikit.client.client.Client "twikit.client.client.Client")*, *data: dict*, *sender_id: str*, *recipient_id: str*)[\[source\]](_modules/twikit/message.html#Message)  
Represents a direct message.

id  
The ID of the message.

Type:  
`str`

time  
The timestamp of the message.

Type:  
`str`

text  
The text content of the message.

Type:  
`str`

attachment  
Attachment Information.

Type:  
`dict`

async reply(*text: str*, *media_id: str \| None = None*) → [Message](#twikit.message.Message "twikit.message.Message")[\[source\]](_modules/twikit/message.html#Message.reply)  
Replies to the message.

Parameters:  
- **text** (`str`) – The text content of the direct message.

- **media_id** (`str`, default=None) – The media ID associated with any media content to be included in the message. Media ID can be received by using the `upload_media()` method.

Returns:  
Message object containing information about the message sent.

Return type:  
[`Message`](#twikit.message.Message "twikit.message.Message")

See also

`Client.send_dm`

async add_reaction(*emoji: str*) → Response[\[source\]](_modules/twikit/message.html#Message.add_reaction)  
Adds a reaction to the message.

Parameters:  
**emoji** (`str`) – The emoji to be added as a reaction.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

async remove_reaction(*emoji: str*) → Response[\[source\]](_modules/twikit/message.html#Message.remove_reaction)  
Removes a reaction from the message.

Parameters:  
**emoji** (`str`) – The emoji to be removed.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

async delete() → Response[\[source\]](_modules/twikit/message.html#Message.delete)  
Deletes the message.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

See also

`Client.delete_dm`

## Streaming

With the streaming API, you can receive real-time events such as tweet engagements, DM updates, and DM typings. The basic procedure involves looping through the stream session obtained with [`Client.get_streaming_session`](#twikit.client.client.Client.get_streaming_session "twikit.client.client.Client.get_streaming_session") and, if necessary, updating the topics to be streamed using [`StreamingSession.update_subscriptions`](#twikit.streaming.StreamingSession.update_subscriptions "twikit.streaming.StreamingSession.update_subscriptions").

Example Code:

    from twikit.streaming import Topic

    topics = {
        Topic.tweet_engagement('1739617652'), # Stream tweet engagement
        Topic.dm_update('17544932482-174455537996'), # Stream DM update
        Topic.dm_typing('17544932482-174455537996') # Stream DM typing
    }
    session = client.get_streaming_session(topics)

    for topic, payload in session:
        if payload.dm_update:
            conversation_id = payload.dm_update.conversation_id
            user_id = payload.dm_update.user_id
            print(f'{conversation_id}: {user_id} sent a message')

        if payload.dm_typing:
            conversation_id = payload.dm_typing.conversation_id
            user_id = payload.dm_typing.user_id
            print(f'{conversation_id}: {user_id} is typing')

        if payload.tweet_engagement:
            like = payload.tweet_engagement.like_count
            retweet = payload.tweet_engagement.retweet_count
            view = payload.tweet_engagement.view_count
            print(f'Tweet engagement updated likes: {like} retweets: {retweet} views: {view}')

class twikit.streaming.StreamingSession(*client: [Client](#twikit.client.client.Client "twikit.client.client.Client")*, *session_id: str*, *stream: AsyncGenerator\[[Payload](#twikit.streaming.Payload "twikit.streaming.Payload")\]*, *topics: set\[str\]*, *auto_reconnect: bool*)[\[source\]](_modules/twikit/streaming.html#StreamingSession)  
Represents a streaming session.

id  
The ID or the session.

Type:  
`str`

topics  
The topics to stream.

Type:  
set\[`str`\]

See also

[`Client.get_streaming_session`](#twikit.client.client.Client.get_streaming_session "twikit.client.client.Client.get_streaming_session")

async reconnect() → tuple\[str, [Payload](#twikit.streaming.Payload "twikit.streaming.Payload")\][\[source\]](_modules/twikit/streaming.html#StreamingSession.reconnect)  
Reconnects the session.

async update_subscriptions(*subscribe: set\[str\] \| None = None*, *unsubscribe: set\[str\] \| None = None*) → [Payload](#twikit.streaming.Payload "twikit.streaming.Payload")[\[source\]](_modules/twikit/streaming.html#StreamingSession.update_subscriptions)  
Updates subscriptions for the session.

Parameters:  
- **subscribe** (set\[`str`\], default=None) – Topics to subscribe to.

- **unsubscribe** (set\[`str`\], default=None) – Topics to unsubscribe from.

Examples

    >>> from twikit.streaming import Topic
    ...
    >>> subscribe_topics = {
    ...     Topic.tweet_engagement('1749528513'),
    ...     Topic.tweet_engagement('1765829534')
    ... }
    >>> unsubscribe_topics = {
    ...     Topic.tweet_engagement('17396176529'),
    ...     Topic.dm_update('17544932482-174455537996'),
    ...     Topic.dm_typing('17544932482-174455537996)'
    ... }
    >>> await session.update_subscriptions(
    ...     subscribe_topics, unsubscribe_topics
    ... )

Note

dm_update and dm_update cannot be added.

See also

[`Topic`](#twikit.streaming.Topic "twikit.streaming.Topic")

&nbsp;

class twikit.streaming.Payload(*config: [ConfigEvent](#twikit.streaming.ConfigEvent "twikit.streaming.ConfigEvent") \| None = None*, *subscriptions: [SubscriptionsEvent](#twikit.streaming.SubscriptionsEvent "twikit.streaming.SubscriptionsEvent") \| None = None*, *tweet_engagement: [TweetEngagementEvent](#twikit.streaming.TweetEngagementEvent "twikit.streaming.TweetEngagementEvent") \| None = None*, *dm_update: [DMUpdateEvent](#twikit.streaming.DMUpdateEvent "twikit.streaming.DMUpdateEvent") \| None = None*, *dm_typing: [DMTypingEvent](#twikit.streaming.DMTypingEvent "twikit.streaming.DMTypingEvent") \| None = None*)[\[source\]](_modules/twikit/streaming.html#Payload)  
Represents a payload containing several types of events.

config: [ConfigEvent](#twikit.streaming.ConfigEvent "twikit.streaming.ConfigEvent") \| None  
The configuration event.

subscriptions: [SubscriptionsEvent](#twikit.streaming.SubscriptionsEvent "twikit.streaming.SubscriptionsEvent") \| None  
The subscriptions event.

tweet_engagement: [TweetEngagementEvent](#twikit.streaming.TweetEngagementEvent "twikit.streaming.TweetEngagementEvent") \| None  
The tweet engagement event.

dm_update: [DMUpdateEvent](#twikit.streaming.DMUpdateEvent "twikit.streaming.DMUpdateEvent") \| None  
The direct message update event.

dm_typing: [DMTypingEvent](#twikit.streaming.DMTypingEvent "twikit.streaming.DMTypingEvent") \| None  
The direct message typing event.

&nbsp;

class twikit.streaming.ConfigEvent(*session_id: str*, *subscription_ttl_millis: int*, *heartbeat_millis: int*)[\[source\]](_modules/twikit/streaming.html#ConfigEvent)  
Event representing configuration data.

session_id: str  
The session ID associated with the configuration.

subscription_ttl_millis: int  
The time to live for the subscription.

heartbeat_millis: int  
The heartbeat interval in milliseconds.

&nbsp;

class twikit.streaming.SubscriptionsEvent(*errors: list*)[\[source\]](_modules/twikit/streaming.html#SubscriptionsEvent)  
Event representing subscription status.

errors: list  
A list of errors.

&nbsp;

class twikit.streaming.TweetEngagementEvent(*like_count: str \| None*, *retweet_count: str \| None*, *view_count: str \| None*, *view_count_state: str \| None*, *quote_count: int \| None*, *reply_count: int \| None*)[\[source\]](_modules/twikit/streaming.html#TweetEngagementEvent)  
Event representing tweet engagement metrics.

like_count: str \| None  
The number of likes on the tweet.

retweet_count: str \| None  
The number of retweets of the tweet.

view_count: str \| None  
The number of views of the tweet.

view_count_state: str \| None  
The state of view count.

quote_count: int \| None  
The number of quotes of the tweet.

reply_count: int \| None  
Alias for field number 5

&nbsp;

class twikit.streaming.DMUpdateEvent(*conversation_id: str*, *user_id: str*)[\[source\]](_modules/twikit/streaming.html#DMUpdateEvent)  
Event representing a (DM) update.

conversation_id: str  
The ID of the conversation associated with the DM.

user_id: str  
ID of the user who sent the DM.

&nbsp;

class twikit.streaming.DMTypingEvent(*conversation_id: str*, *user_id: str*)[\[source\]](_modules/twikit/streaming.html#DMTypingEvent)  
Event representing typing indication in a DM conversation.

conversation_id: str  
The conversation where typing indication occurred.

user_id: str  
The ID of the typing user.

&nbsp;

class twikit.streaming.Topic[\[source\]](_modules/twikit/streaming.html#Topic)  
Utility class for generating topic strings for streaming.

static tweet_engagement(*tweet_id: str*) → str[\[source\]](_modules/twikit/streaming.html#Topic.tweet_engagement)  
Generates a topic string for tweet engagement events.

Parameters:  
**tweet_id** (`str`) – The ID of the tweet.

Returns:  
The topic string for tweet engagement events.

Return type:  
`str`

static dm_update(*conversation_id: str*) → str[\[source\]](_modules/twikit/streaming.html#Topic.dm_update)  
Generates a topic string for direct message update events.

Parameters:  
**conversation_id** (`str`) – The ID of the conversation. Group ID (00000000) or partner_ID-your_ID (00000000-00000001)

Returns:  
The topic string for direct message update events.

Return type:  
`str`

static dm_typing(*conversation_id: str*) → str[\[source\]](_modules/twikit/streaming.html#Topic.dm_typing)  
Generates a topic string for direct message typing events.

Parameters:  
**conversation_id** (`str`) – The ID of the conversation. Group ID (00000000) or partner_ID-your_ID (00000000-00000001)

Returns:  
The topic string for direct message typing events.

Return type:  
`str`

## Media

class twikit.media.Media(*client: [Client](#twikit.client.client.Client "twikit.client.client.Client")*, *data: dict*)[\[source\]](_modules/twikit/media.html#Media)  
A base class representing media object.

id  
The media ID.

Type:  
`str`

display_url  
The display URL.

Type:  
`str`

expanded_url  
The expanded display URL.

Type:  
`str`

media_url  
The media URL.

Type:  
`str`

source_status_id  
The source tweet ID.

Type:  
`str`

source_user_id  
The ID of the user who posted the source tweet.

Type:  
`str`

type  
The media type.

Type:  
`str`

url  
The URL of the media.

Type:  
`str`

sizes  
The sizes of the media.

Type:  
`dict`

original_info  
Type:  
`str`

width  
The width of the media.

Type:  
`int`

height  
The height of the media.

Type:  
`int`

focus_rects  
Type:  
`list`

&nbsp;

class twikit.media.Photo(*client: [Client](#twikit.client.client.Client "twikit.client.client.Client")*, *data: dict*)[\[source\]](_modules/twikit/media.html#Photo)  
Bases: [`Media`](#twikit.media.Media "twikit.media.Media")

A class representing a photo media object.

features  
The features of the photo.

Type:  
`dict`

&nbsp;

class twikit.media.Video(*client: [Client](#twikit.client.client.Client "twikit.client.client.Client")*, *data: dict*)[\[source\]](_modules/twikit/media.html#Video)  
Bases: [`Media`](#twikit.media.Media "twikit.media.Media")

A class representing a video media object.

    # Video download example
    tweet = await client.get_tweet_by_id('00000000000')
    video = tweet.media[0]
    streams = video.streams
    await streams[0].download('output.mp4')

video_info  
The video information.

Type:  
`dict`

aspect_ratio  
The aspect ratio of the video.

Type:  
`tuple[int,`` ``int]`

duration_millis  
The duration of the video in milliseconds.

Type:  
`int`

streams  
The list of video streams for the video.

Type:  
list\[[`Stream`](#twikit.media.Stream "twikit.media.Stream")\]

async get_subtitles() → WebVTT \| None[\[source\]](_modules/twikit/media.html#Video.get_subtitles)  
Retrieves the subtitles for the video.

Returns:  
Returns the subtitles for the video. If the video does not have subtitles, returns None. Refer [https://github.com/glut23/webvtt-py](https://github.com/glut23/webvtt-py) for more information.

Return type:  
`webvtt.WebVTT` \| None

Examples

    tweet = await client.get_tweet_by_id('00000000000')
    video = tweet.media[0]
    subtitles = await video.get_subtitles()
    for l in subtitles:
        print(l.start)
        print(l.end)
        print(l.text)

&nbsp;

class twikit.media.AnimatedGif(*client: [Client](#twikit.client.client.Client "twikit.client.client.Client")*, *data: dict*)[\[source\]](_modules/twikit/media.html#AnimatedGif)  
Bases: [`Media`](#twikit.media.Media "twikit.media.Media")

A class representing an animated GIF media object.

video_info  
The video information of the GIF.

Type:  
`dict`

aspect_ratio  
The aspect ratio of the GIF.

Type:  
`tuple[int,`` ``int]`

streams  
The list of video streams for the GIF.

Type:  
list\[[`Stream`](#twikit.media.Stream "twikit.media.Stream")\]

&nbsp;

class twikit.media.Stream(*client: [Client](#twikit.client.client.Client "twikit.client.client.Client")*, *data: dict*)[\[source\]](_modules/twikit/media.html#Stream)  
The Stream class represents a media stream

url  
The url of the stream.

Type:  
`str`

bitrate  
The bitrate of the stream.

Type:  
`int`

content_type  
The mimetype of the stream content.

Type:  
`str`

async get() → bytes[\[source\]](_modules/twikit/media.html#Stream.get)  
Retrieves the stream content.

Returns:  
The raw content of the stream.

Return type:  
`bytes`

async download(*output_path: str*) → None[\[source\]](_modules/twikit/media.html#Stream.download)  
Downloads the stream content and saves it to the specified file.

Parameters:  
**output_path** (`str`) – The path where the downloaded file will be saved.

## Trend

class twikit.trend.Trend(*client: [Client](#twikit.client.client.Client "twikit.client.client.Client")*, *data: dict*)[\[source\]](_modules/twikit/trend.html#Trend)  
name  
The name of the trending topic.

Type:  
`str`

tweets_count  
The count of tweets associated with the trend.

Type:  
`int`

domain_context  
The context or domain associated with the trend.

Type:  
`str`

grouped_trends  
A list of trend names grouped under the main trend.

Type:  
`` list`[:class:`str ``\]

&nbsp;

class twikit.trend.PlaceTrends[\[source\]](_modules/twikit/trend.html#PlaceTrends)  
trends: list\[[PlaceTrend](#twikit.trend.PlaceTrend "twikit.trend.PlaceTrend")\]  

as_of: str  

created_at: str  

locations: dict  

&nbsp;

class twikit.trend.PlaceTrend(*client: [Client](#twikit.client.client.Client "twikit.client.client.Client")*, *data: dict*)[\[source\]](_modules/twikit/trend.html#PlaceTrend)  
name  
The name of the trend.

Type:  
`str`

url  
The URL to view the trend.

Type:  
`str`

query  
The search query corresponding to the trend.

Type:  
`str`

tweet_volume  
The volume of tweets associated with the trend.

Type:  
`int`

name: str  

url: str  

promoted_content: None  

query: str  

tweet_volume: int  

&nbsp;

class twikit.trend.Location(*client: [Client](#twikit.client.client.Client "twikit.client.client.Client")*, *data: dict*)[\[source\]](_modules/twikit/trend.html#Location)  
woeid: int  

country: str  

country_code: str  

name: str  

parentid: int  

placeType: dict  

url: str  

async get_trends() → [PlaceTrends](#twikit.trend.PlaceTrends "twikit.trend.PlaceTrends")[\[source\]](_modules/twikit/trend.html#Location.get_trends)  

## List

class twikit.list.List(*client: [Client](#twikit.client.client.Client "twikit.client.client.Client")*, *data: dict*)[\[source\]](_modules/twikit/list.html#List)  
Class representing a Twitter List.

id  
The unique identifier of the List.

Type:  
`str`

created_at  
The timestamp when the List was created.

Type:  
`int`

default_banner  
Information about the default banner of the List.

Type:  
`dict`

banner  
Information about the banner of the List. If custom banner is not set, it defaults to the default banner.

Type:  
`dict`

description  
The description of the List.

Type:  
`str`

following  
Indicates if the authenticated user is following the List.

Type:  
`bool`

is_member  
Indicates if the authenticated user is a member of the List.

Type:  
`bool`

member_count  
The number of members in the List.

Type:  
`int`

mode  
The mode of the List, either ‘Private’ or ‘Public’.

Type:  
{‘Private’, ‘Public’}

muting  
Indicates if the authenticated user is muting the List.

Type:  
`bool`

name  
The name of the List.

Type:  
`str`

pinning  
Indicates if the List is pinned.

Type:  
`bool`

subscriber_count  
The number of subscribers to the List.

Type:  
`int`

property created_at_datetime: datetime  

async edit_banner(*media_id: str*) → Response[\[source\]](_modules/twikit/list.html#List.edit_banner)  
Edit the banner image of the list.

Parameters:  
**media_id** (`str`) – The ID of the media to use as the new banner image.

Returns:  
Response returned from twitter api.

Return type:  
`httpx.Response`

Examples

    >>> media_id = await client.upload_media('image.png')
    >>> await media.edit_banner(media_id)

async delete_banner() → Response[\[source\]](_modules/twikit/list.html#List.delete_banner)  
Deletes the list banner.

async edit(*name: str \| None = None*, *description: str \| None = None*, *is_private: bool \| None = None*) → [List](#twikit.list.List "twikit.list.List")[\[source\]](_modules/twikit/list.html#List.edit)  
Edits list information.

Parameters:  
- **name** (`str`, default=None) – The new name for the list.

- **description** (`str`, default=None) – The new description for the list.

- **is_private** (`bool`, default=None) – Indicates whether the list should be private (True) or public (False).

Returns:  
The updated Twitter list.

Return type:  
[`List`](#twikit.list.List "twikit.list.List")

Examples

    >>> await list.edit(
    ...     'new name', 'new description', True
    ... )

async add_member(*user_id: str*) → Response[\[source\]](_modules/twikit/list.html#List.add_member)  
Adds a member to the list.

async remove_member(*user_id: str*) → Response[\[source\]](_modules/twikit/list.html#List.remove_member)  
Removes a member from the list.

async get_tweets(*count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")\][\[source\]](_modules/twikit/list.html#List.get_tweets)  
Retrieves tweets from the list.

Parameters:  
- **count** (`int`, default=20) – The number of tweets to retrieve.

- **cursor** (`str`, default=None) – The cursor for pagination.

Returns:  
A Result object containing the retrieved tweets.

Return type:  
Result\[`Tweet`\]

Examples

    >>> tweets = await list.get_tweets()
    >>> for tweet in tweets:
    ...    print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    ...

    >>> more_tweets = await tweets.next()  # Retrieve more tweets
    >>> for tweet in more_tweets:
    ...     print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    ...

async get_members(*count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/list.html#List.get_members)  
Retrieves members of the list.

Parameters:  
**count** (`int`, default=20) – Number of members to retrieve.

Returns:  
Members of the list

Return type:  
Result\[`User`\]

Examples

    >>> members = list_.get_members()
    >>> for member in members:
    ...     print(member)
    <User id="...">
    <User id="...">
    ...
    ...
    >>> more_members = members.next()  # Retrieve more members

async get_subscribers(*count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[User](#twikit.user.User "twikit.user.User")\][\[source\]](_modules/twikit/list.html#List.get_subscribers)  
Retrieves subscribers of the list.

Parameters:  
**count** (`int`, default=20) – Number of subscribers to retrieve.

Returns:  
Subscribers of the list

Return type:  
Result\[`User`\]

Examples

    >>> subscribers = list_.get_subscribers()
    >>> for subscriber in subscribers:
    ...     print(subscriber)
    <User id="...">
    <User id="...">
    ...
    ...
    >>> more_subscribers = subscribers.next()  # Retrieve more subscribers

async update() → None[\[source\]](_modules/twikit/list.html#List.update)  

## Community

class twikit.community.CommunityCreator(*id*, *screen_name*, *verified*)[\[source\]](_modules/twikit/community.html#CommunityCreator)  
id: str  
Alias for field number 0

screen_name: str  
Alias for field number 1

verified: bool  
Alias for field number 2

&nbsp;

class twikit.community.CommunityRule(*id*, *name*)[\[source\]](_modules/twikit/community.html#CommunityRule)  
id: str  
Alias for field number 0

name: str  
Alias for field number 1

&nbsp;

class twikit.community.CommunityMember(*client: [Client](#twikit.client.client.Client "twikit.client.client.Client")*, *data: dict*)[\[source\]](_modules/twikit/community.html#CommunityMember)  
id: str  

community_role: str  

super_following: bool  

super_follow_eligible: bool  

super_followed_by: bool  

smart_blocking: bool  

is_blue_verified: bool  

screen_name: str  

name: str  

follow_request_sent: bool  

protected: bool  

following: bool  

followed_by: bool  

blocking: bool  

profile_image_url_https: str  

verified: bool  

&nbsp;

class twikit.community.Community(*client: [Client](#twikit.client.client.Client "twikit.client.client.Client")*, *data: dict*)[\[source\]](_modules/twikit/community.html#Community)  
id  
The ID of the community.

Type:  
`str`

name  
The name of the community.

Type:  
`str`

member_count  
The count of members in the community.

Type:  
`int`

is_nsfw  
Indicates if the community is NSFW.

Type:  
`bool`

members_facepile_results  
The profile image URLs of members.

Type:  
list\[`str`\]

banner  
The banner information of the community.

Type:  
`dict`

is_member  
Indicates if the user is a member of the community.

Type:  
`bool`

role  
The role of the user in the community.

Type:  
`str`

description  
The description of the community.

Type:  
`str`

creator  
The creator of the community.

Type:  
`User` \| [`CommunityCreator`](#twikit.community.CommunityCreator "twikit.community.CommunityCreator")

admin  
The admin of the community.

Type:  
`User`

join_policy  
The join policy of the community.

Type:  
`str`

created_at  
The timestamp of the community’s creation.

Type:  
`int`

invites_policy  
The invites policy of the community.

Type:  
`str`

is_pinned  
Indicates if the community is pinned.

Type:  
`bool`

rules  
The rules of the community.

Type:  
list\[[`CommunityRule`](#twikit.community.CommunityRule "twikit.community.CommunityRule")\]

id: str  

name: str  

member_count: int  

is_nsfw: bool  

members_facepile_results: list\[str\]  

banner: dict  

is_member: bool  

role: str  

description: str  

join_policy: str  

created_at: int  

invites_policy: str  

is_pinned: bool  

rules: list  

async get_tweets(*tweet_type: Literal\['Top', 'Latest', 'Media'\]*, *count: int = 40*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")\][\[source\]](_modules/twikit/community.html#Community.get_tweets)  
Retrieves tweets from the community.

Parameters:  
- **tweet_type** (*{'Top',* *'Latest',* *'Media'}*) – The type of tweets to retrieve.

- **count** (`int`, default=40) – The number of tweets to retrieve.

Returns:  
List of retrieved tweets.

Return type:  
Result\[`Tweet`\]

Examples

    >>> tweets = await community.get_tweets('Latest')
    >>> for tweet in tweets:
    ...     print(tweet)
    <Tweet id="...">
    <Tweet id="...">
    ...
    >>> more_tweets = await tweets.next()  # Retrieve more tweets

async join() → [Community](#twikit.community.Community "twikit.community.Community")[\[source\]](_modules/twikit/community.html#Community.join)  
Join the community.

async leave() → [Community](#twikit.community.Community "twikit.community.Community")[\[source\]](_modules/twikit/community.html#Community.leave)  
Leave the community.

async request_to_join(*answer: str \| None = None*) → [Community](#twikit.community.Community "twikit.community.Community")[\[source\]](_modules/twikit/community.html#Community.request_to_join)  
Request to join the community.

async get_members(*count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[CommunityMember](#twikit.community.CommunityMember "twikit.community.CommunityMember")\][\[source\]](_modules/twikit/community.html#Community.get_members)  
Retrieves members of the community.

Parameters:  
**count** (`int`, default=20) – The number of members to retrieve.

Returns:  
List of retrieved members.

Return type:  
Result\[[`CommunityMember`](#twikit.community.CommunityMember "twikit.community.CommunityMember")\]

async get_moderators(*count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[CommunityMember](#twikit.community.CommunityMember "twikit.community.CommunityMember")\][\[source\]](_modules/twikit/community.html#Community.get_moderators)  
Retrieves moderators of the community.

Parameters:  
**count** (`int`, default=20) – The number of moderators to retrieve.

Returns:  
List of retrieved moderators.

Return type:  
Result\[[`CommunityMember`](#twikit.community.CommunityMember "twikit.community.CommunityMember")\]

async search_tweet(*query: str*, *count: int = 20*, *cursor: str \| None = None*) → [Result](#twikit.utils.Result "twikit.utils.Result")\[[Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")\][\[source\]](_modules/twikit/community.html#Community.search_tweet)  
Searchs tweets in the community.

Parameters:  
- **query** (`str`) – The search query.

- **count** (`int`, default=20) – The number of tweets to retrieve.

Returns:  
List of retrieved tweets.

Return type:  
Result\[`Tweet`\]

async update() → None[\[source\]](_modules/twikit/community.html#Community.update)  

## Notification

class twikit.notification.Notification(*client: [Client](#twikit.client.client.Client "twikit.client.client.Client")*, *data: dict*, *tweet: [Tweet](#twikit.tweet.Tweet "twikit.tweet.Tweet")*, *from_user: [User](#twikit.user.User "twikit.user.User")*)[\[source\]](_modules/twikit/notification.html#Notification)  
id  
The unique identifier of the notification.

Type:  
`str`

timestamp_ms  
The timestamp of the notification in milliseconds.

Type:  
`int`

icon  
Dictionary containing icon data for the notification.

Type:  
`dict`

message  
The message text of the notification.

Type:  
`str`

tweet  
The tweet associated with the notification.

Type:  
[`Tweet`](#twikit.tweet.Tweet "twikit.tweet.Tweet")

from_user  
The user who triggered the notification.

Type:  
[`User`](#twikit.user.User "twikit.user.User")

## Geo

class twikit.geo.Place(*client: [Client](#twikit.client.client.Client "twikit.client.client.Client")*, *data: dict*)[\[source\]](_modules/twikit/geo.html#Place)  
id  
The ID of the place.

Type:  
`str`

name  
The name of the place.

Type:  
`str`

full_name  
The full name of the place.

Type:  
`str`

country  
The country where the place is located.

Type:  
`str`

country_code  
The ISO 3166-1 alpha-2 country code of the place.

Type:  
`str`

url  
The URL providing more information about the place.

Type:  
`str`

place_type  
The type of place.

Type:  
`str`

attributes  
Type:  
`dict`

bounding_box  
The bounding box that defines the geographical area of the place.

Type:  
`dict`

centroid  
The geographical center of the place, represented by latitude and longitude.

Type:  
list\[`float`\] \| None

contained_within  
A list of places that contain this place.

Type:  
list\[[`Place`](#twikit.geo.Place "twikit.geo.Place")\]

async update() → None[\[source\]](_modules/twikit/geo.html#Place.update)  

## Capsolver

class twikit.\_captcha.capsolver.Capsolver(*api_key: str*, *max_attempts: int = 3*, *get_result_interval: float = 1.0*, *use_blob_data: bool = False*)[\[source\]](_modules/twikit/_captcha/capsolver.html#Capsolver)  
You can automatically unlock the account by passing the captcha_solver argument when initialising the [`Client`](#twikit.client.client.Client "twikit.client.client.Client").

First, visit [https://capsolver.com](https://capsolver.com) and obtain your Capsolver API key. Next, pass the Capsolver instance to the client as shown in the example.

    from twikit.twikit_async import Capsolver, Client
    solver = Capsolver(
        api_key='your_api_key',
        max_attempts=10
    )
    client = Client(captcha_solver=solver)

Parameters:  
- **api_key** (`str`) – Capsolver API key.

- **max_attempts** (`int`, default=3) – The maximum number of attempts to solve the captcha.

- **get_result_interval** (`float`, default=1.0)

- **use_blob_data** (`bool`, default=False)

## Utils

class twikit.utils.Result(*results: list\[T\]*, *fetch_next_result: Awaitable \| None = None*, *next_cursor: str \| None = None*, *fetch_previous_result: Awaitable \| None = None*, *previous_cursor: str \| None = None*)[\[source\]](_modules/twikit/utils.html#Result)  
This class is for storing multiple results. The next method can be used to retrieve further results. As with a regular list, you can access elements by specifying indexes and iterate over elements using a for loop.

next_cursor  
Cursor used to obtain the next result.

Type:  
`str`

previous_cursor  
Cursor used to obtain the previous result.

Type:  
`str`

token  
Alias of next_cursor.

Type:  
`str`

cursor  
Alias of next_cursor.

Type:  
`str`

async next() → [Result](#twikit.utils.Result "twikit.utils.Result")\[T\][\[source\]](_modules/twikit/utils.html#Result.next)  
The next result.

async previous() → [Result](#twikit.utils.Result "twikit.utils.Result")\[T\][\[source\]](_modules/twikit/utils.html#Result.previous)  
The previous result.

classmethod empty()[\[source\]](_modules/twikit/utils.html#Result.empty)  

## Errors

exception twikit.errors.TwitterException(*\*args: object*, *headers: dict \| None = None*)[\[source\]](_modules/twikit/errors.html#TwitterException)  
Base class for Twitter API related exceptions.

&nbsp;

exception twikit.errors.BadRequest(*\*args: object*, *headers: dict \| None = None*)[\[source\]](_modules/twikit/errors.html#BadRequest)  
Exception raised for 400 Bad Request errors.

&nbsp;

exception twikit.errors.Unauthorized(*\*args: object*, *headers: dict \| None = None*)[\[source\]](_modules/twikit/errors.html#Unauthorized)  
Exception raised for 401 Unauthorized errors.

&nbsp;

exception twikit.errors.Forbidden(*\*args: object*, *headers: dict \| None = None*)[\[source\]](_modules/twikit/errors.html#Forbidden)  
Exception raised for 403 Forbidden errors.

&nbsp;

exception twikit.errors.NotFound(*\*args: object*, *headers: dict \| None = None*)[\[source\]](_modules/twikit/errors.html#NotFound)  
Exception raised for 404 Not Found errors.

&nbsp;

exception twikit.errors.RequestTimeout(*\*args: object*, *headers: dict \| None = None*)[\[source\]](_modules/twikit/errors.html#RequestTimeout)  
Exception raised for 408 Request Timeout errors.

&nbsp;

exception twikit.errors.TooManyRequests(*\*args*, *headers: dict \| None = None*)[\[source\]](_modules/twikit/errors.html#TooManyRequests)  
Exception raised for 429 Too Many Requests errors.

&nbsp;

exception twikit.errors.ServerError(*\*args: object*, *headers: dict \| None = None*)[\[source\]](_modules/twikit/errors.html#ServerError)  
Exception raised for 5xx Server Error responses.

&nbsp;

exception twikit.errors.CouldNotTweet(*\*args: object*, *headers: dict \| None = None*)[\[source\]](_modules/twikit/errors.html#CouldNotTweet)  
Exception raised when a tweet could not be sent.

&nbsp;

exception twikit.errors.DuplicateTweet(*\*args: object*, *headers: dict \| None = None*)[\[source\]](_modules/twikit/errors.html#DuplicateTweet)  
Exception raised when a tweet is a duplicate of another.

&nbsp;

exception twikit.errors.TweetNotAvailable(*\*args: object*, *headers: dict \| None = None*)[\[source\]](_modules/twikit/errors.html#TweetNotAvailable)  
Exceptions raised when a tweet is not available.

&nbsp;

exception twikit.errors.InvalidMedia(*\*args: object*, *headers: dict \| None = None*)[\[source\]](_modules/twikit/errors.html#InvalidMedia)  
Exception raised when there is a problem with the media ID sent with the tweet.

&nbsp;

exception twikit.errors.UserNotFound(*\*args: object*, *headers: dict \| None = None*)[\[source\]](_modules/twikit/errors.html#UserNotFound)  
Exception raised when a user does not exsit.

&nbsp;

exception twikit.errors.UserUnavailable(*\*args: object*, *headers: dict \| None = None*)[\[source\]](_modules/twikit/errors.html#UserUnavailable)  
Exception raised when a user is unavailable.

&nbsp;

exception twikit.errors.AccountSuspended(*\*args: object*, *headers: dict \| None = None*)[\[source\]](_modules/twikit/errors.html#AccountSuspended)  
Exception raised when the account is suspended.

&nbsp;

exception twikit.errors.AccountLocked(*\*args: object*, *headers: dict \| None = None*)[\[source\]](_modules/twikit/errors.html#AccountLocked)  
Exception raised when the account is locked (very likey is Arkose challenge).

&nbsp;

twikit.errors.raise_exceptions_from_response(*errors: list\[dict\]*)[\[source\]](_modules/twikit/errors.html#raise_exceptions_from_response)  
