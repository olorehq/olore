# Ad Creative

An ad creative contains all data for visually rendering the ad. Creatives are **immutable** after creation. Each ad account maintains a creative library for reuse across multiple ads.

## Create a Creative

```bash
POST /v25.0/act_{AD_ACCOUNT_ID}/adcreatives

Parameters:
  name: "My Creative"
  object_story_spec: {
    "page_id": "<PAGE_ID>",
    "link_data": {
      "image_hash": "<IMAGE_HASH>",
      "link": "https://example.com",
      "message": "Check this out!"
    }
  }
  access_token: "<TOKEN>"
```

## Ad Formats

- **Single Image** — one image with text and link
- **Single Video** — one video with text and link
- **Carousel** — multiple scrollable images/videos
- **Collection** — cover image/video with product catalog
- **Stories** — full-screen vertical format

## Placements

A placement is where your ad appears on Facebook. Available placements include:
- Mobile Feed
- Desktop Feed
- Right column
- Stories
- Instagram Feed
- Instagram Stories
- Messenger
- Audience Network

**Recommendation:** Leave the placement field blank to let Facebook optimize across all available placements automatically.

## Upload Images

```bash
POST /v25.0/act_{AD_ACCOUNT_ID}/adimages
  filename: @/path/to/image.jpg
  access_token: "<TOKEN>"
```

Returns an `image_hash` for use in creatives.

## Upload Videos

```bash
POST /v25.0/act_{AD_ACCOUNT_ID}/advideos
  source: @/path/to/video.mp4
  access_token: "<TOKEN>"
```

## Preview an Ad

Three methods:
1. **By ad ID:** `GET /{AD_ID}/previews?ad_format=DESKTOP_FEED_STANDARD`
2. **By creative ID:** `GET /{CREATIVE_ID}/previews?ad_format=DESKTOP_FEED_STANDARD`
3. **By creative spec:** `POST /act_{ID}/generatepreviews` with inline creative data

## Using Page Posts

For Page Post Engagement campaigns, reference an existing post:
```json
{
  "object_story_id": "{PAGE_ID}_{POST_ID}"
}
```
