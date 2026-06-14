# twikit Documentation Structure

4 files, ~140 KB total. All files live in `contents/` (flat layout — small package).

## File Index

| File | Bytes | Description |
|------|-------|-------------|
| `contents/api-reference.md` | ~128 KB | Full Sphinx-rendered API reference (Client + every model class). |
| `contents/readme.md` | ~3.5 KB | Install instructions and end-to-end usage examples. |
| `contents/ratelimits.md` | ~6 KB | Per-method 15-minute rate-limit table. |
| `contents/account-safety.md` | ~2 KB | Operational guidance to avoid account ban. |

## api-reference.md — Section Map

The single API page is large; jump to the relevant `class` or `async <method>` heading. Major sections (in source order):

| Section | What it covers |
|---------|----------------|
| `class twikit.client.client.Client` | Constructor (`language`, `proxy`, `captcha_solver`, `user_agent`) and **all** Client methods: `login`, `logout`, `unlock`, `create_tweet`, `delete_tweet`, `get_tweet_by_id`, `search_tweet`, `get_user_by_id`, `get_user_by_screen_name`, `follow_user`, `unfollow_user`, `block_user`, `mute_user`, `send_dm`, `get_dm_history`, list/community/trend/notification/media/streaming methods. **Most lookups end here.** |
| `class twikit.tweet.Tweet` | Tweet model — fields (`id`, `text`, `created_at`, `user`, `media`, `urls`, `hashtags`, `quote`, `replies`, `community_note`) and instance methods (`favorite`, `unfavorite`, `retweet`, `delete`, `reply`, `bookmark`). |
| `class twikit.tweet.Poll` | Poll attached to a tweet — choices, end time, `vote()`. |
| `class twikit.tweet.CommunityNote` | Community Note attached to a tweet. |
| `class twikit.user.User` | User model — profile fields and follow/block/mute/get-tweets methods. |
| `class twikit.message.Message` | Direct-message model. |
| `class twikit.streaming.StreamingSession` + Payload/event subtypes | Real-time event stream: `ConfigEvent`, `SubscriptionsEvent`, `TweetEngagementEvent`, `DMUpdateEvent`, `DMTypingEvent`, `Topic`. |
| `class twikit.media.Media` / `Photo` / `Video` / `AnimatedGif` / `Stream` | Media object hierarchy returned from upload and tweet attachments. |
| `class twikit.trend.*` | `Trend`, `PlaceTrends`, `PlaceTrend`, `Location`. |
| `class twikit.list.List` | List model and methods. |
| `class twikit.community.*` | `CommunityCreator`, `CommunityRule`, `CommunityMember`, `Community`. |
| `class twikit.notification.Notification` | Notification feed item. |
| `class twikit.geo.Place` | Geo place lookup. |

**Tip:** the file uses `*param: type = default*` Sphinx-style signatures and inline `>>>` blocks for examples — every public method has at least one example.
