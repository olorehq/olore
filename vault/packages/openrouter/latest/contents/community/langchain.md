> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# LangChain

> Using OpenRouter with LangChain

## Using LangChain

LangChain provides a standard interface for working with chat models. You can use OpenRouter with LangChain using the dedicated `ChatOpenRouter` integration packages. For more details on LangChain's model interface, see the [LangChain Models documentation](https://docs.langchain.com/oss/python/langchain/models).

**Resources:**

* [LangChain Python integration](https://docs.langchain.com/oss/python/integrations/chat/openrouter): [langchain-openrouter on PyPI](https://pypi.org/project/langchain-openrouter/)
* [LangChain JavaScript integration](https://docs.langchain.com/oss/javascript/integrations/chat/openrouter): [@langchain/openrouter on npm](https://www.npmjs.com/package/@langchain/openrouter)

```typescript title="TypeScript" lines theme={null}
import { ChatOpenRouter } from "@langchain/openrouter";

const model = new ChatOpenRouter(
  "anthropic/claude-sonnet-4.6",
  { temperature: 0.8 }
);

// Example usage
const response = await model.invoke([
  { role: "system", content: "You are a helpful assistant." },
  { role: "user", content: "Hello, how are you?" },
]);
```

```python title="Python" lines theme={null}
from langchain_openrouter import ChatOpenRouter

model = ChatOpenRouter(
    model="anthropic/claude-sonnet-4.6",
    temperature=0.8,
)

# Example usage
response = model.invoke("What NFL team won the Super Bowl in the year Justin Bieber was born?")
print(response.content)
```

For full documentation (including streaming, tool calling, structured output, reasoning, multimodal inputs, provider routing, and more), see the LangChain integration guides:

* [Python: ChatOpenRouter](https://docs.langchain.com/oss/python/integrations/chat/openrouter)
* [JavaScript: ChatOpenRouter](https://docs.langchain.com/oss/javascript/integrations/chat/openrouter)
