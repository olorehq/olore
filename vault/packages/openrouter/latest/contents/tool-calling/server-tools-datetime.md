> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Datetime

> Give any model access to the current date and time

Beta

> [!NOTE]
>
> **Beta**
>
> Server tools are currently in beta. The API and behavior may change.

The `openrouter:datetime` server tool gives any model access to the current date and time. This is useful for prompts that require temporal awareness: scheduling, time-sensitive questions, or any task where the model needs to know "right now."

## Quick Start

## Configuration

The datetime tool accepts an optional `timezone` parameter:

```json lines theme={null}
{
  "type": "openrouter:datetime",
  "parameters": {
    "timezone": "America/New_York"
  }
}
```

| Parameter | Type | Default | Description |
| - | - | - | - |
| `timezone` | string | `UTC` | IANA timezone name (e.g. `"America/New_York"`, `"Europe/London"`, `"Asia/Tokyo"`) |

## Response

When the model calls the datetime tool, it receives a response like:

```json lines theme={null}
{
  "datetime": "2025-07-15T14:30:00.000-04:00",
  "timezone": "America/New_York"
}
```

## Pricing

The datetime tool has no additional cost beyond standard token usage.

## Next Steps

* [Server Tools Overview](https://openrouter.ai/docs/guides/features/server-tools.md). Learn about server tools
* [Web Search](https://openrouter.ai/docs/guides/features/server-tools/web-search.md). Search the web for real-time information
* [Tool Calling](https://openrouter.ai/docs/guides/features/tool-calling.md). Learn about user-defined tool calling
