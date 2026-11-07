> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Audio

> How to send and receive audio with OpenRouter models

OpenRouter supports both sending audio files to compatible models and receiving audio responses via the API. This guide covers how to work with audio inputs and outputs.

## Audio Inputs

Send audio files to compatible models for transcription, analysis, and processing. Audio input requests use the [Responses API](https://openrouter.ai/docs/api_reference/responses/overview.md) (`/api/v1/responses`) with the `input_audio` content type. Audio files must be base64-encoded and include the format specification.

**Note**: Audio files must be **base64-encoded** - direct URLs are not supported for audio content.

You can search for models that support audio input by filtering to audio input modality on our [Models page](https://openrouter.ai/docs/guides/overview/models.md).

### Sending Audio Files

Here's how to send an audio file for processing:

### Supported Audio Input Formats

The Responses API (`/api/v1/responses`) accepts two `format` values for `input_audio`:

* `wav` - WAV audio
* `mp3` - MP3 audio

Chat Completions (`/api/v1/chat/completions`) accepts any format string the provider supports, such as `aiff`, `aac`, `ogg`, `flac`, `m4a`, `pcm16`, or `pcm24`, in the `input_audio.format` field of its content parts.

**Note:** Check your model's documentation to confirm which audio formats it supports. Not all models support all formats.

## Audio Output

OpenRouter supports receiving audio responses from models that have audio output capabilities. To request audio output, include the `modalities` and `audio` parameters in your request. Audio output uses the Chat Completions API (`/api/v1/chat/completions`), because the Responses API does not accept the `audio` parameter.

You can search for models that support audio output by filtering to audio output modality on our [Models page](https://openrouter.ai/docs/guides/overview/models.md).

### Requesting Audio Output

To receive audio output, set `modalities` to `["text", "audio"]` and provide the `audio` configuration with your desired voice and format:

### Streaming Chunk Format

Audio output requires streaming (`stream: true`). Audio data and transcript are delivered incrementally via the `delta.audio` field in each chunk:

```json lines theme={null}
{
  "choices": [
    {
      "delta": {
        "audio": {
          "data": "<base64-encoded audio chunk>",
          "transcript": "Hello"
        }
      }
    }
  ]
}
```

### Audio Configuration Options

The `audio` parameter accepts the following options:

| Option | Description |
| - | - |
| `voice` | The voice to use for audio generation (e.g., `alloy`, `echo`, `fable`, `onyx`, `nova`, `shimmer`). Available voices vary by model. |
| `format` | The audio format for the output (e.g., `wav`, `mp3`, `flac`, `opus`, `pcm16`). Available formats vary by model. |
