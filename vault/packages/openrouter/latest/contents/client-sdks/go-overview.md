> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# OpenRouter Go SDK

> Go SDK for building AI features against 400+ models through OpenRouter.

The OpenRouter Go SDK gives you type-safe access to 400+ models across providers
through a single unified API.

## Installation

```bash theme={null}
go get github.com/OpenRouterTeam/go-sdk
```

## Quickstart

```go theme={null}
package main

import (
	"context"
	"log"
	"os"

	openrouter "github.com/OpenRouterTeam/go-sdk"
	"github.com/OpenRouterTeam/go-sdk/models/components"
)

func main() {
	ctx := context.Background()

	s := openrouter.New(
		openrouter.WithSecurity(os.Getenv("OPENROUTER_API_KEY")),
	)

	res, err := s.Chat.Send(ctx, components.ChatRequest{
		Messages: []components.ChatMessages{
			components.CreateChatMessagesUser(
				components.ChatUserMessage{
					Content: components.CreateChatUserMessageContentStr(
						"What is the capital of France?",
					),
					Role: components.ChatUserMessageRoleUser,
				},
			),
		},
	}, nil)
	if err != nil {
		log.Fatal(err)
	}
	if res != nil {
		// handle response
	}
}
```

## API reference

Browse the API reference for each resource in the sidebar. Type definitions for
every request, response, and model are linked inline from each resource page.
