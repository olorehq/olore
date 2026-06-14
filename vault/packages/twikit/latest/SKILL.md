---
name: olore-twikit-latest
description: Local twikit documentation reference (latest). Async Python wrapper for the Twitter/X internal API — no API key required. Use for Client login (auth_info_1/auth_info_2/password/TOTP/cookies), tweets (create/delete/like/retweet/bookmark, search, get_tweet_by_id, polls, community notes), users (get_user_by_id/screen_name, follow/block/mute, followers/following), DMs, lists, communities, notifications, trends, media upload, streaming events, geo/places, rate limits, and account-protection guidance.
---

# twikit Documentation

twikit is an async Python library that scrapes the Twitter/X internal GraphQL API — no developer API key needed. It exposes a single `Client` class plus model classes (`Tweet`, `User`, `Message`, `List`, `Community`, `Trend`, `Media`, `Notification`, `Place`, `StreamingSession`, ...). All client methods are coroutines and must be `await`ed.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/api-reference.md` | twikit package — full API reference | Sphinx-rendered API docs (~128KB, 4400+ lines, 188 classes/methods). Covers `twikit.client.client.Client` (login, logout, unlock, get/create/delete tweets, search_tweet, get_user_by_*, follow/unfollow, send_dm, lists, communities, trends, media upload, streaming) and every model: `Tweet`, `Poll`, `CommunityNote`, `User`, `Message`, `StreamingSession` + Payload/event subtypes, `Media`/`Photo`/`Video`/`AnimatedGif`/`Stream`, `Trend`/`PlaceTrend`/`Location`, `List`, `Community`/`CommunityMember`/`CommunityRule`/`CommunityCreator`, `Notification`, `Place`. **Start here for any API call signature.** |
| `contents/readme.md` | README — install + usage examples | `pip install twikit` and concrete examples: instantiating `Client(language='en-US')`, logging in with username+password (or `cookies_file`), `await client.create_tweet(text=..., media_ids=...)`, `await client.search_tweet(query, product='Top')`, `await client.get_user_by_screen_name(...)`. Use for the canonical "how do I get started" pattern. |
| `contents/ratelimits.md` | Rate Limits | Per-endpoint rate limit table — every limit resets every 15 minutes. Lists Client method names (`create_tweet`, `delete_tweet`, `search_tweet`, `get_user_tweets`, `follow_user`, `send_dm`, ...) with their 15-min cap and the underlying GraphQL endpoint. Consult before designing high-volume loops. |
| `contents/account-safety.md` | Account-Protection Guidance | Operational guidance to avoid account ban: prefer `cookies_file` over re-logging in, throttle requests, avoid suspicious patterns, use a residential proxy. Required reading before automating real accounts. |

## When to Use

Use this skill when the user asks about:
- Logging into Twitter/X programmatically without the official API (`Client.login`, `cookies_file`, TOTP 2FA, captcha solving via `Capsolver`)
- Posting / deleting / liking / retweeting / bookmarking tweets
- Tweet search (`search_tweet` with `product='Top'|'Latest'|'Media'|'People'|'Lists'`), getting a tweet by ID, replies, quotes
- Polls and Community Notes on tweets
- User lookup by ID or screen name, follow/unfollow/block/mute, listing followers/following/subscriptions
- Direct messages — sending, fetching conversation history, DM events via streaming
- Lists — create, edit members, fetch list tweets and members
- Communities — join/leave, fetch members, rules, community tweets
- Trends and trending topics by location (`get_trends`, `get_place_trends`)
- Notifications feed
- Media upload pipeline (`upload_media` for photo/video/GIF, `create_media_metadata`)
- Real-time streaming (`StreamingSession`, `Topic`, tweet engagement / DM update / typing events)
- Geo / Place lookups
- Rate limits per endpoint and how to respect them
- How to keep an account from being banned (`ToProtectYourAccount`)
- Migration / async patterns: every method is a coroutine, must be awaited inside `asyncio.run(...)` or an existing event loop
- TOS warning: this uses the unofficial internal API and may violate Twitter's TOS

## How to Find Information

1. **For any class or method signature** — search `contents/api-reference.md`. It is a single Sphinx-rendered page; grep for `class twikit.` to find a model, or for `async <method_name>` (e.g. `async create_tweet`, `async search_tweet`, `async get_user_by_screen_name`) to find a Client method. All parameter types, defaults, return types, and inline `>>>` examples are inline.
2. **For getting started / first script** — `contents/readme.md`. Shows the minimum viable async loop and login flow.
3. **For rate-limit budgeting** — `contents/ratelimits.md`. Look up the method name in the table to see the 15-minute cap.
4. **Before automating a real account** — `contents/account-safety.md`. Short but mandatory.

## Notes

- This library is unofficial and uses Twitter's internal GraphQL API. Account suspension risk exists; respect the safety guidance.
- All `Client` methods are `async`. Wrap calls in `asyncio.run(main())` or `await` them inside an existing async function.
- Source: https://github.com/d60/twikit · Docs: https://twikit.readthedocs.io/en/latest/
