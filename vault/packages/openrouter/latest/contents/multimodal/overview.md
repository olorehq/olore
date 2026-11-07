> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Multimodal Capabilities

> Send images, PDFs, audio, and video to OpenRouter models, generate speech from text, or transcribe audio to text

OpenRouter supports multiple input and output modalities beyond text, allowing you to send images, PDFs, audio, and video files to compatible models, or generate speech from text through our unified API. This enables rich multimodal interactions for a wide variety of use cases.

## Supported Modalities

### Images

Send images to vision-capable models for analysis, description, OCR, and more. OpenRouter supports multiple image formats and both URL-based and base64-encoded images.

[Learn more about image inputs →](https://openrouter.ai/docs/guides/overview/multimodal/image-understanding.md)

### Image Generation

Generate images from text prompts using AI models with image output capabilities. OpenRouter supports various image generation models that can create high-quality images based on your descriptions.

[Learn more about image generation →](https://openrouter.ai/docs/guides/overview/multimodal/image-generation.md)

### PDFs

Process PDF documents with any model on OpenRouter. Our intelligent PDF parsing system extracts text and handles both text-based and scanned documents.

[Learn more about PDF processing →](https://openrouter.ai/docs/guides/overview/multimodal/pdfs.md)

### Audio

Send audio files to speech-capable models for transcription, analysis, and processing, or receive audio responses from models with audio output capabilities. OpenRouter supports common audio formats for both input and output.

[Learn more about audio →](https://openrouter.ai/docs/guides/overview/multimodal/audio.md)

### Video

Send video files to video-capable models for analysis, description, object detection, and action recognition. OpenRouter supports multiple video formats for comprehensive video understanding tasks.

[Learn more about video inputs →](https://openrouter.ai/docs/guides/overview/multimodal/videos.md)

### Video Generation

Generate videos from text prompts using AI models with video output capabilities. OpenRouter supports an asynchronous video generation API with configurable resolution, aspect ratio, duration, and optional reference images.

[Learn more about video generation →](https://openrouter.ai/docs/guides/overview/multimodal/video-generation.md)

### Text-to-Speech

Generate speech audio from text using a dedicated OpenAI-compatible endpoint. OpenRouter supports multiple TTS providers and voices with output in MP3 or PCM format.

[Learn more about text-to-speech →](https://openrouter.ai/docs/guides/overview/multimodal/tts.md)

### Speech-to-Text

Transcribe audio into text using a dedicated endpoint. OpenRouter supports multiple STT providers and models, returning structured JSON with transcribed text and usage statistics.

[Learn more about speech-to-text →](https://openrouter.ai/docs/guides/overview/multimodal/stt.md)

## Getting Started

Most multimodal inputs use the same [Responses API](https://openrouter.ai/docs/api_reference/responses/overview.md) endpoint, `/api/v1/responses`, with the `input` parameter. Different content types are specified in the message content array:

* **Images**: Use `input_image` content type
* **PDFs**: Use `input_file` content type with PDF data
* **Audio**: Use `input_audio` content type
* **Video**: Use `input_video` content type

You can combine multiple modalities in a single request, and the number of files you can send varies by provider and model.

**Text-to-Speech** uses a separate dedicated endpoint at `/api/v1/audio/speech`. See the [TTS documentation](https://openrouter.ai/docs/guides/overview/multimodal/tts.md) for details.

**Speech-to-Text** uses a separate dedicated endpoint at `/api/v1/audio/transcriptions`. See the [STT documentation](https://openrouter.ai/docs/guides/overview/multimodal/stt.md) for details.

## Model Compatibility

Not all models support every modality. OpenRouter automatically filters available models based on your request content:

* **Vision models**: Required for image processing
* **File-compatible models**: Can process PDFs natively or through our parsing system
* **Audio-capable models**: Required for audio input processing
* **Video-capable models**: Required for video input processing

Use our [Models page](https://openrouter.ai/models) to find models that support your desired input modalities.

## Input Format Support

OpenRouter supports both **direct URLs** and **base64-encoded data** for multimodal inputs:

### URLs (Recommended for public content)

* **Images**: `https://example.com/image.jpg`
* **PDFs**: `https://example.com/document.pdf`
* **Audio**: Not supported via URL (base64 only)
* **Video**: Provider-specific (e.g., YouTube links for Gemini on AI Studio)

### Base64 Encoding (Required for local files)

* **Images**: `data:image/jpeg;base64,{base64_data}`
* **PDFs**: `data:application/pdf;base64,{base64_data}`
* **Audio**: Raw base64 string with format specification
* **Video**: `data:video/mp4;base64,{base64_data}`

> [!NOTE]
>
> URLs are more efficient for large files as they don't require local encoding and reduce request payload size. Base64 encoding is required for local files or when the content is not publicly accessible.
>
> **Note for video URLs**: Video URL support varies by provider. For example, Google Gemini on AI Studio only supports YouTube links. See the [video inputs documentation](https://openrouter.ai/docs/guides/overview/multimodal/videos.md) for provider-specific details.

## Frequently Asked Questions

> [accordion] Can I mix different modalities in one request?
>
> Yes! You can send text, images, PDFs, audio, and video in the same request. The model will process all inputs together.

> [accordion] How is multimodal content priced?
>
> * **Images**: Typically priced per image or as input tokens
> * **PDFs**: Free text extraction, paid OCR processing, or native model pricing
> * **Audio input**: Priced as input tokens based on duration
> * **Audio output**: Priced as output tokens
> * **Video**: Priced as input tokens based on duration and resolution

> [accordion] Which models support video input?
>
> Video support varies by model. Use the [Models page](https://openrouter.ai/docs/guides/overview/models.md) to filter for video-capable models. Check each model's documentation for specific video format and duration limits.

> [accordion] How does video generation work?
>
> Video generation uses an asynchronous API at `/api/v1/videos`. You submit a prompt, receive a job ID, then poll until the video is ready to download. See the [video generation documentation](https://openrouter.ai/docs/guides/overview/multimodal/video-generation.md) for details.

> [accordion] How does text-to-speech work?
>
> Text-to-speech uses a dedicated endpoint at `/api/v1/audio/speech`. Send text and receive a raw audio byte stream. The endpoint is compatible with the OpenAI Audio Speech API, so you can use OpenAI client libraries. See the [TTS documentation](https://openrouter.ai/docs/guides/overview/multimodal/tts.md) for details.

> [accordion] How does speech-to-text work?
>
> Speech-to-text uses a dedicated endpoint at `/api/v1/audio/transcriptions`. Send base64-encoded audio and receive a JSON response with the transcribed text and usage statistics. See the [STT documentation](https://openrouter.ai/docs/guides/overview/multimodal/stt.md) for details.
