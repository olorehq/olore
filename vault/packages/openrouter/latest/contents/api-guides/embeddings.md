> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# Embeddings

> Generate vector embeddings from text and images

Embeddings are numerical representations of text that capture semantic meaning. They convert text into vectors (arrays of numbers) that can be used for various machine learning tasks. OpenRouter provides a unified API to access embedding models from multiple providers.

## What are embeddings?

Embeddings transform text into high-dimensional vectors where semantically similar texts are positioned closer together in vector space. For example, "cat" and "kitten" would have similar embeddings, while "cat" and "airplane" would be far apart.

These vector representations enable machines to understand relationships between pieces of text, making them essential for many AI applications.

## Common use cases

Embeddings are used in a wide variety of applications:

**RAG (Retrieval-Augmented Generation)**: Build RAG systems that retrieve relevant context from a knowledge base before generating answers. Embeddings help find the most relevant documents to include in the LLM's context.

**Semantic Search**: Convert documents and queries into embeddings, then find the most relevant documents by comparing vector similarity. This provides more accurate results than traditional keyword matching because it understands meaning rather than just matching words.

**Recommendation Systems**: Generate embeddings for items (products, articles, movies) and user preferences to recommend similar items. By comparing embedding vectors, you can find items that are semantically related even if they don't share obvious keywords.

**Clustering and Classification**: Group similar documents together or classify text into categories by analyzing embedding patterns. Documents with similar embeddings likely belong to the same topic or category.

**Duplicate Detection**: Identify duplicate or near-duplicate content by comparing embedding similarity. This works even when text is paraphrased or reworded.

**Anomaly Detection**: Detect unusual or outlier content by identifying embeddings that are far from typical patterns in your dataset.

## How to use embeddings

### Basic request

To generate embeddings, send a POST request to `/embeddings` with your text input and chosen model:

### Batch processing

You can generate embeddings for multiple texts in a single request by passing an array of strings:

### Image input

Some embedding models support image inputs, enabling multimodal embeddings that capture visual content alongside text. This is useful for image search, visual similarity, and cross-modal retrieval tasks.

To send an image, wrap your input in the multimodal format with a `content` array containing `image_url` objects. You can also combine text and images in a single input block.

You can also combine text and images in a single input to generate a joint embedding:

## API reference

For detailed information about request parameters, response format, and all available options, see the [Embeddings API Reference](https://openrouter.ai/docs/api/api-reference/embeddings/submit-an-embedding-request.md).

## Available models

OpenRouter provides access to various embedding models from different providers. You can view all available embedding models at:

[https://openrouter.ai/models?fmt=cards\&output\_modalities=embeddings](https://openrouter.ai/models?fmt=cards\&output_modalities=embeddings)

To list all available embedding models programmatically:

## Practical example: semantic search

Here's a complete example of building a semantic search system using embeddings:

Expected output:

```lines theme={null}
Search results:
1. Dogs are loyal companions (similarity: 0.8234)
2. The cat sat on the mat (similarity: 0.7891)
3. The weather is sunny today (similarity: 0.3456)
4. Machine learning models require training data (similarity: 0.2987)
5. Python is a programming language (similarity: 0.2654)
```

## Best practices

**Choose the right model**: Different embedding models have different strengths. Smaller models (like perplexity/pplx-embed-v1-0.6b or openai/text-embedding-3-small) are faster and cheaper, while larger models (like openai/text-embedding-3-large) provide better quality. Test multiple models to find the best fit for your use case.

**Batch your requests**: When processing multiple texts, send them in a single request rather than making individual API calls. This reduces latency and costs.

**Cache embeddings**: Embeddings for the same text are deterministic (they don't change). Store embeddings in a database or vector store to avoid regenerating them repeatedly.

**Normalize for comparison**: When comparing embeddings, use cosine similarity rather than Euclidean distance. Cosine similarity is scale-invariant and works better for high-dimensional vectors.

**Consider Context Length**: Each model has a maximum input length (context window). Longer texts may need to be chunked or truncated. Check the model's specifications before processing long documents.

**Use Appropriate Chunking**: For long documents, split them into meaningful chunks (paragraphs, sections) rather than arbitrary character limits. This preserves semantic coherence.

## Provider routing

You can control which providers serve your embedding requests using the `provider` parameter. This is useful for:

* Ensuring data privacy with specific providers
* Optimizing for cost or latency
* Using provider-specific features

Example with provider preferences:

```typescript lines theme={null}
{
  "model": "openai/text-embedding-3-small",
  "input": "Your text here",
  "provider": {
    "order": ["openai", "azure"],
    "allow_fallbacks": true,
    "data_collection": "deny"
  }
}
```

For more information, see [Provider Routing](https://openrouter.ai/docs/guides/routing/provider-selection.md).

## Error handling

Common errors you may encounter:

**400 Bad Request**: Invalid input format or missing required parameters. Check that your `input` and `model` parameters are correctly formatted.

**401 Unauthorized**: Invalid or missing API key. Verify your API key is correct and included in the Authorization header.

**402 Payment Required**: Insufficient credits. Add credits to your OpenRouter account.

**404 Not Found**: The specified model doesn't exist or isn't available for embeddings. Check the model name and verify it's an embedding model.

**429 Too Many Requests**: Rate limit exceeded. Implement exponential backoff and retry logic.

**529 Provider Overloaded**: The provider is temporarily overloaded. Enable `allow_fallbacks: true` to automatically use backup providers.

## Limitations

* **No Streaming**: Unlike chat completions, embeddings are returned as complete responses. Streaming is not supported.
* **Token Limits**: Each model has a maximum input length. Texts exceeding this limit will be truncated or rejected.
* **Deterministic Output**: Embeddings for the same input text will always be identical (no temperature or randomness).
* **Language Support**: Some models are optimized for specific languages. Check model documentation for language capabilities.

## Related resources

* [Models Page](https://openrouter.ai/models?fmt=cards\&output_modalities=embeddings) - Browse all available embedding models
* [Provider Routing](https://openrouter.ai/docs/guides/routing/provider-selection.md) - Control which providers serve your requests
* [Authentication](https://openrouter.ai/docs/api_reference/authentication.md) - Learn about API key authentication
* [Errors](https://openrouter.ai/docs/api_reference/errors-and-debugging.md) - Detailed error codes and handling
