> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Video Inputs

> How to send video files to OpenRouter models

OpenRouter supports sending video files to compatible models via the API. This guide shows you how to work with video through the API.

OpenRouter supports both **direct URLs** and **base64-encoded data URLs** for videos:

* **URLs**: Efficient for publicly accessible videos as they don't require local encoding
* **Base64 Data URLs**: Required for local files or private videos that aren't publicly accessible

> [!NOTE]
>
> **Important:** Video URL support varies by provider. OpenRouter only sends video URLs to providers that explicitly support them. For example, Google Gemini on AI Studio only supports YouTube links (not Vertex AI).

> [!WARNING]
>
> **API Only:** Video inputs are currently only supported via the API. Video uploads are not available in the OpenRouter chatroom interface at this time.

## Video Inputs

You can send video files to compatible models through the [Responses API](https://openrouter.ai/docs/api_reference/responses/overview.md) (`/api/v1/responses`) using the `input_video` content type. The `video_url` can be either a URL or a base64-encoded data URL. Only models with video processing capabilities handle these requests.

You can search for models that support video by filtering to video input modality on our [Models page](https://openrouter.ai/docs/guides/overview/models.md).

### Using Video URLs

Here's how to send a video using a URL. Note that for Google Gemini on AI Studio, only YouTube links are supported:

### Using Base64 Encoded Videos

For locally stored videos, you can send them using base64 encoding as data URLs:

### Video Processing Mode

> [!NOTE]
>
> Video processing modes are currently a **Google Gemini** feature. When a processing mode is set, OpenRouter routes the request to an endpoint that supports it. Other providers ignore the `processing` field.

Google Gemini's [agentic video understanding](https://ai.google.dev/gemini-api/docs/video-understanding#agentic-video) lets the model dynamically navigate a video, loading only the frames, transcript, and audio it needs based on your prompt, instead of sampling the whole video at a fixed frame rate.

Set the optional `processing` field on the video part to control this:

* `agentic`: The model actively navigates the video timeline while answering. Best for long-form videos or queries targeting specific moments
* `static`: The video is sampled at a fixed frame rate in a single pass. Best for latency-sensitive queries on short clips

If `processing` is omitted, OpenRouter does not send a value upstream and Gemini's default applies.

For supported models, mode selection guidance, and token accounting details, refer to [Google's video understanding docs](https://ai.google.dev/gemini-api/docs/video-understanding#agentic-video) as the source of truth.

The `processing` field is supported in two OpenRouter APIs:

* **Responses API** (`/api/v1/responses`): on the `input_video` content part
* **Chat Completions API** (`/api/v1/chat/completions`): on the `video_url` content part

The Messages API (`/api/v1/messages`) does not support video inputs.

#### Responses API

#### Chat Completions API

#### Response handling per API

When agentic processing is used, the model's internal video navigation steps are returned as encrypted reasoning rather than as tool calls, and the response finishes normally. The exact shape depends on the API:

* **Responses API**: The navigation steps appear as `reasoning` output items with `encrypted_content`. To preserve the video context on follow-up turns, echo the response's output items (including the `reasoning` items) back in the `input` of the next request.
* **Chat Completions API**: The navigation steps appear as encrypted `reasoning_details` entries on the assistant message, and the response finishes with `finish_reason: "stop"`. To preserve the video context on follow-up turns, send the assistant message back with its `reasoning_details` intact, as with other [reasoning token](https://openrouter.ai/docs/guides/best-practices/reasoning-tokens.md) round-tripping.

## Supported Video Formats

OpenRouter supports the following video formats:

* `video/mp4`
* `video/mpeg`
* `video/mov`
* `video/webm`

## Common Use Cases

Video inputs enable a wide range of applications:

* **Video Summarization**: Generate text summaries of video content
* **Object and Activity Recognition**: Identify objects, people, and actions in videos
* **Scene Understanding**: Describe settings, environments, and contexts
* **Sports Analysis**: Analyze gameplay, movements, and tactics
* **Surveillance**: Monitor and analyze security footage
* **Educational Content**: Analyze instructional videos and provide insights

## Best Practices

### File Size Considerations

Video files can be large, which affects both upload time and processing costs:

* **Compress videos** when possible to reduce file size without significant quality loss
* **Trim videos** to include only relevant segments
* **Consider resolution**: Lower resolutions (e.g., 720p vs 4K) reduce file size while maintaining usability for most analysis tasks
* **Frame rate**: Lower frame rates can reduce file size for videos where high temporal resolution isn't critical

### Optimal Video Length

Different models may have different limits on video duration:

* Check model-specific documentation for maximum video length
* For long videos, consider splitting into shorter segments
* Focus on key moments rather than sending entire long-form content

### Quality vs. Size Trade-offs

Balance video quality with practical considerations:

* **High quality** (1080p+, high bitrate): Best for detailed visual analysis, object detection, text recognition
* **Medium quality** (720p, moderate bitrate): Suitable for most general analysis tasks
* **Lower quality** (480p, lower bitrate): Acceptable for basic scene understanding and action recognition

## Provider-Specific Video URL Support

Video URL support varies significantly by provider:

* **Google Gemini (AI Studio)**: Only supports YouTube links (e.g., `https://www.youtube.com/watch?v=...`)
* **Google Gemini (Vertex AI)**: Does not support video URLs. Use base64-encoded data URLs instead
* **Other providers**: Check model-specific documentation for video URL support

## Troubleshooting

**Video not processing?**

* Verify the model supports video input (check `input_modalities` includes `"video"`)
* If using a video URL, confirm the provider supports video URLs (see Provider-Specific Video URL Support above)
* For Gemini on AI Studio, ensure you're using a YouTube link, not a direct video file URL
* If the video URL isn't working, try using a base64-encoded data URL instead
* Check that the video format is supported
* Verify the video file isn't corrupted

**Large file errors?**

* Compress the video to reduce file size
* Reduce video resolution or frame rate
* Trim the video to a shorter duration
* Check model-specific file size limits
* Consider using a video URL (if supported by the provider) instead of base64 encoding for large files

**Poor analysis results?**

* Ensure video quality is sufficient for the task
* Provide clear, specific prompts about what to analyze
* Consider if the video duration is appropriate for the model
* Check if the video content is clearly visible and well-lit
