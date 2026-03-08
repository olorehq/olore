***

title: Embeddings
subtitle: Generate vector embeddings from text and images
headline: >-
Embeddings API | Convert Text and Images to Vector Representations with
OpenRouter
canonical-url: '[https://openrouter.ai/docs/api/reference/embeddings](https://openrouter.ai/docs/api/reference/embeddings)'
'og:site\_name': OpenRouter Documentation
'og:title': Embeddings API - Generate Vector Embeddings from Text and Images
'og:description': >-
Generate vector embeddings from text and images using OpenRouter's unified
embeddings API. Access multiple embedding models from different providers with
a single interface.
'og:image':
type: url
value: >-
[https://openrouter.ai/dynamic-og?title=Embeddings%20API\&description=Generate%20Vector%20Embeddings%20from%20Text%20and%20Images](https://openrouter.ai/dynamic-og?title=Embeddings%20API\&description=Generate%20Vector%20Embeddings%20from%20Text%20and%20Images)
'og:image:width': 1200
'og:image:height': 630
'twitter:card': summary\_large\_image
'twitter:site': '@OpenRouter'
noindex: false
nofollow: false
---------------

Embeddings are numerical representations of text that capture semantic meaning. They convert text into vectors (arrays of numbers) that can be used for various machine learning tasks. OpenRouter provides a unified API to access embedding models from multiple providers.

## What are Embeddings?

Embeddings transform text into high-dimensional vectors where semantically similar texts are positioned closer together in vector space. For example, "cat" and "kitten" would have similar embeddings, while "cat" and "airplane" would be far apart.

These vector representations enable machines to understand relationships between pieces of text, making them essential for many AI applications.

## Common Use Cases

Embeddings are used in a wide variety of applications:

**RAG (Retrieval-Augmented Generation)**: Build RAG systems that retrieve relevant context from a knowledge base before generating answers. Embeddings help find the most relevant documents to include in the LLM's context.

**Semantic Search**: Convert documents and queries into embeddings, then find the most relevant documents by comparing vector similarity. This provides more accurate results than traditional keyword matching because it understands meaning rather than just matching words.

**Recommendation Systems**: Generate embeddings for items (products, articles, movies) and user preferences to recommend similar items. By comparing embedding vectors, you can find items that are semantically related even if they don't share obvious keywords.

**Clustering and Classification**: Group similar documents together or classify text into categories by analyzing embedding patterns. Documents with similar embeddings likely belong to the same topic or category.

**Duplicate Detection**: Identify duplicate or near-duplicate content by comparing embedding similarity. This works even when text is paraphrased or reworded.

**Anomaly Detection**: Detect unusual or outlier content by identifying embeddings that are far from typical patterns in your dataset.

## How to Use Embeddings

### Basic Request

To generate embeddings, send a POST request to `/embeddings` with your text input and chosen model:

<Template
  data={{
  API_KEY_REF,
  MODEL: 'openai/text-embedding-3-small'
}}
>
  <CodeGroup>
    ```typescript title="TypeScript SDK"
    import { OpenRouter } from '@openrouter/sdk';

    const openRouter = new OpenRouter({
      apiKey: '{{API_KEY_REF}}',
    });

    const response = await openRouter.embeddings.generate({
      model: '{{MODEL}}',
      input: 'The quick brown fox jumps over the lazy dog',
    });

    console.log(response.data[0].embedding);
    ```

    ```python title="Python"
    import requests

    response = requests.post(
      "https://openrouter.ai/api/v1/embeddings",
      headers={
        "Authorization": f"Bearer {{API_KEY_REF}}",
        "Content-Type": "application/json",
      },
      json={
        "model": "{{MODEL}}",
        "input": "The quick brown fox jumps over the lazy dog"
      }
    )

    data = response.json()
    embedding = data["data"][0]["embedding"]
    print(f"Embedding dimension: {len(embedding)}")
    ```

    ```typescript title="TypeScript (fetch)"
    const response = await fetch('https://openrouter.ai/api/v1/embeddings', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer {{API_KEY_REF}}',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: '{{MODEL}}',
        input: 'The quick brown fox jumps over the lazy dog',
      }),
    });

    const data = await response.json();
    const embedding = data.data[0].embedding;
    console.log(`Embedding dimension: ${embedding.length}`);
    ```

    ```shell title="Shell"
    curl https://openrouter.ai/api/v1/embeddings \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer $OPENROUTER_API_KEY" \
      -d '{
        "model": "{{MODEL}}",
        "input": "The quick brown fox jumps over the lazy dog"
      }'
    ```
  </CodeGroup>
</Template>

### Batch Processing

You can generate embeddings for multiple texts in a single request by passing an array of strings:

<Template
  data={{
  API_KEY_REF,
  MODEL: 'openai/text-embedding-3-small'
}}
>
  <CodeGroup>
    ```typescript title="TypeScript SDK"
    import { OpenRouter } from '@openrouter/sdk';

    const openRouter = new OpenRouter({
      apiKey: '{{API_KEY_REF}}',
    });

    const response = await openRouter.embeddings.generate({
      model: '{{MODEL}}',
      input: [
        'Machine learning is a subset of artificial intelligence',
        'Deep learning uses neural networks with multiple layers',
        'Natural language processing enables computers to understand text'
      ],
    });

    // Process each embedding
    response.data.forEach((item, index) => {
      console.log(`Embedding ${index}: ${item.embedding.length} dimensions`);
    });
    ```

    ```python title="Python"
    import requests

    response = requests.post(
      "https://openrouter.ai/api/v1/embeddings",
      headers={
        "Authorization": f"Bearer {{API_KEY_REF}}",
        "Content-Type": "application/json",
      },
      json={
        "model": "{{MODEL}}",
        "input": [
          "Machine learning is a subset of artificial intelligence",
          "Deep learning uses neural networks with multiple layers",
          "Natural language processing enables computers to understand text"
        ]
      }
    )

    data = response.json()
    for i, item in enumerate(data["data"]):
      print(f"Embedding {i}: {len(item['embedding'])} dimensions")
    ```

    ```typescript title="TypeScript (fetch)"
    const response = await fetch('https://openrouter.ai/api/v1/embeddings', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer {{API_KEY_REF}}',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: '{{MODEL}}',
        input: [
          'Machine learning is a subset of artificial intelligence',
          'Deep learning uses neural networks with multiple layers',
          'Natural language processing enables computers to understand text'
        ],
      }),
    });

    const data = await response.json();
    data.data.forEach((item, index) => {
      console.log(`Embedding ${index}: ${item.embedding.length} dimensions`);
    });
    ```

    ```shell title="Shell"
    curl https://openrouter.ai/api/v1/embeddings \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer $OPENROUTER_API_KEY" \
      -d '{
        "model": "{{MODEL}}",
        "input": [
          "Machine learning is a subset of artificial intelligence",
          "Deep learning uses neural networks with multiple layers",
          "Natural language processing enables computers to understand text"
        ]
      }'
    ```
  </CodeGroup>
</Template>

### Image Input

Some embedding models support image inputs, enabling multimodal embeddings that capture visual content alongside text. This is useful for image search, visual similarity, and cross-modal retrieval tasks.

To send an image, wrap your input in the multimodal format with a `content` array containing `image_url` objects. You can also combine text and images in a single input block.

<Template
  data={{
  API_KEY_REF,
  MODEL: 'nvidia/llama-nemotron-embed-vl-1b-v2'
}}
>
  <CodeGroup>
    ```python title="Python"
    import requests

    response = requests.post(
      "https://openrouter.ai/api/v1/embeddings",
      headers={
        "Authorization": f"Bearer {{API_KEY_REF}}",
        "Content-Type": "application/json",
      },
      json={
        "model": "{{MODEL}}",
        "input": [
          {
            "content": [
              {"type": "image_url", "image_url": {"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/640px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"}}
            ]
          }
        ],
        "encoding_format": "float",
      }
    )

    data = response.json()
    embedding = data["data"][0]["embedding"]
    print(f"Embedding dimension: {len(embedding)}")
    ```

    ```typescript title="TypeScript (fetch)"
    const response = await fetch('https://openrouter.ai/api/v1/embeddings', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer {{API_KEY_REF}}',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: '{{MODEL}}',
        input: [
          {
            content: [
              { type: 'image_url', image_url: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/640px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg' } }
            ]
          }
        ],
        encoding_format: 'float',
      }),
    });

    const data = await response.json();
    const embedding = data.data[0].embedding;
    console.log(`Embedding dimension: ${embedding.length}`);
    ```

    ```shell title="Shell"
    curl https://openrouter.ai/api/v1/embeddings \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer $OPENROUTER_API_KEY" \
      -d '{
        "model": "{{MODEL}}",
        "input": [
          {
            "content": [
              {"type": "image_url", "image_url": {"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/640px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"}}
            ]
          }
        ],
        "encoding_format": "float"
      }'
    ```
  </CodeGroup>
</Template>

You can also combine text and images in a single input to generate a joint embedding:

<Template
  data={{
  API_KEY_REF,
  MODEL: 'nvidia/llama-nemotron-embed-vl-1b-v2'
}}
>
  <CodeGroup>
    ```python title="Python"
    import requests

    response = requests.post(
      "https://openrouter.ai/api/v1/embeddings",
      headers={
        "Authorization": f"Bearer {{API_KEY_REF}}",
        "Content-Type": "application/json",
      },
      json={
        "model": "{{MODEL}}",
        "input": [
          {
            "content": [
              {"type": "text", "text": "A scenic boardwalk through a green meadow"},
              {"type": "image_url", "image_url": {"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/640px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"}}
            ]
          }
        ],
        "encoding_format": "float",
      }
    )

    data = response.json()
    embedding = data["data"][0]["embedding"]
    print(f"Embedding dimension: {len(embedding)}")
    ```

    ```typescript title="TypeScript (fetch)"
    const response = await fetch('https://openrouter.ai/api/v1/embeddings', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer {{API_KEY_REF}}',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: '{{MODEL}}',
        input: [
          {
            content: [
              { type: 'text', text: 'A scenic boardwalk through a green meadow' },
              { type: 'image_url', image_url: { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/640px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg' } }
            ]
          }
        ],
        encoding_format: 'float',
      }),
    });

    const data = await response.json();
    const embedding = data.data[0].embedding;
    console.log(`Embedding dimension: ${embedding.length}`);
    ```

    ```shell title="Shell"
    curl https://openrouter.ai/api/v1/embeddings \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer $OPENROUTER_API_KEY" \
      -d '{
        "model": "{{MODEL}}",
        "input": [
          {
            "content": [
              {"type": "text", "text": "A scenic boardwalk through a green meadow"},
              {"type": "image_url", "image_url": {"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/640px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"}}
            ]
          }
        ],
        "encoding_format": "float"
      }'
    ```
  </CodeGroup>
</Template>

## API Reference

For detailed information about request parameters, response format, and all available options, see the [Embeddings API Reference](/docs/api-reference/embeddings/create-embeddings).

## Available Models

OpenRouter provides access to various embedding models from different providers. You can view all available embedding models at:

[https://openrouter.ai/models?fmt=cards\&output\_modalities=embeddings](https://openrouter.ai/models?fmt=cards\&output_modalities=embeddings)

To list all available embedding models programmatically:

<Template
  data={{
  API_KEY_REF
}}
>
  <CodeGroup>
    ```typescript title="TypeScript SDK"
    import { OpenRouter } from '@openrouter/sdk';

    const openRouter = new OpenRouter({
      apiKey: '{{API_KEY_REF}}',
    });

    const models = await openRouter.embeddings.listModels();
    console.log(models.data);
    ```

    ```python title="Python"
    import requests

    response = requests.get(
      "https://openrouter.ai/api/v1/embeddings/models",
      headers={
        "Authorization": f"Bearer {{API_KEY_REF}}",
      }
    )

    models = response.json()
    for model in models["data"]:
      print(f"{model['id']}: {model.get('context_length', 'N/A')} tokens")
    ```

    ```typescript title="TypeScript (fetch)"
    const response = await fetch('https://openrouter.ai/api/v1/embeddings/models', {
      headers: {
        'Authorization': 'Bearer {{API_KEY_REF}}',
      },
    });

    const models = await response.json();
    console.log(models.data);
    ```

    ```shell title="Shell"
    curl https://openrouter.ai/api/v1/embeddings/models \
      -H "Authorization: Bearer $OPENROUTER_API_KEY"
    ```
  </CodeGroup>
</Template>

## Practical Example: Semantic Search

Here's a complete example of building a semantic search system using embeddings:

<Template
  data={{
  API_KEY_REF,
  MODEL: 'openai/text-embedding-3-small'
}}
>
  <CodeGroup>
    ```typescript title="TypeScript SDK"
    import { OpenRouter } from '@openrouter/sdk';

    const openRouter = new OpenRouter({
      apiKey: '{{API_KEY_REF}}',
    });

    // Sample documents
    const documents = [
      "The cat sat on the mat",
      "Dogs are loyal companions",
      "Python is a programming language",
      "Machine learning models require training data",
      "The weather is sunny today"
    ];

    // Function to calculate cosine similarity
    function cosineSimilarity(a: number[], b: number[]): number {
      const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
      const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
      const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
      return dotProduct / (magnitudeA * magnitudeB);
    }

    async function semanticSearch(query: string, documents: string[]) {
      // Generate embeddings for all documents and the query
      const response = await openRouter.embeddings.generate({
        model: '{{MODEL}}',
        input: [query, ...documents],
      });

      const queryEmbedding = response.data[0].embedding;
      const docEmbeddings = response.data.slice(1);

      // Calculate similarity scores
      const results = documents.map((doc, i) => ({
        document: doc,
        similarity: cosineSimilarity(
          queryEmbedding as number[],
          docEmbeddings[i].embedding as number[]
        ),
      }));

      // Sort by similarity (highest first)
      results.sort((a, b) => b.similarity - a.similarity);

      return results;
    }

    // Search for documents related to pets
    const results = await semanticSearch("pets and animals", documents);
    console.log("Search results:");
    results.forEach((result, i) => {
      console.log(`${i + 1}. ${result.document} (similarity: ${result.similarity.toFixed(4)})`);
    });
    ```

    ```python title="Python"
    import requests
    import numpy as np

    OPENROUTER_API_KEY = "{{API_KEY_REF}}"

    # Sample documents
    documents = [
      "The cat sat on the mat",
      "Dogs are loyal companions",
      "Python is a programming language",
      "Machine learning models require training data",
      "The weather is sunny today"
    ]

    def cosine_similarity(a, b):
      """Calculate cosine similarity between two vectors"""
      dot_product = np.dot(a, b)
      magnitude_a = np.linalg.norm(a)
      magnitude_b = np.linalg.norm(b)
      return dot_product / (magnitude_a * magnitude_b)

    def semantic_search(query, documents):
      """Perform semantic search using embeddings"""
      # Generate embeddings for query and all documents
      response = requests.post(
        "https://openrouter.ai/api/v1/embeddings",
        headers={
          "Authorization": f"Bearer {OPENROUTER_API_KEY}",
          "Content-Type": "application/json",
        },
        json={
          "model": "{{MODEL}}",
          "input": [query] + documents
        }
      )
      
      data = response.json()
      query_embedding = np.array(data["data"][0]["embedding"])
      doc_embeddings = [np.array(item["embedding"]) for item in data["data"][1:]]
      
      # Calculate similarity scores
      results = []
      for i, doc in enumerate(documents):
        similarity = cosine_similarity(query_embedding, doc_embeddings[i])
        results.append({"document": doc, "similarity": similarity})
      
      # Sort by similarity (highest first)
      results.sort(key=lambda x: x["similarity"], reverse=True)
      
      return results

    # Search for documents related to pets
    results = semantic_search("pets and animals", documents)
    print("Search results:")
    for i, result in enumerate(results):
      print(f"{i + 1}. {result['document']} (similarity: {result['similarity']:.4f})")
    ```
  </CodeGroup>
</Template>

Expected output:

```
Search results:
1. Dogs are loyal companions (similarity: 0.8234)
2. The cat sat on the mat (similarity: 0.7891)
3. The weather is sunny today (similarity: 0.3456)
4. Machine learning models require training data (similarity: 0.2987)
5. Python is a programming language (similarity: 0.2654)
```

## Best Practices

**Choose the Right Model**: Different embedding models have different strengths. Smaller models (like qwen/qwen3-embedding-0.6b or openai/text-embedding-3-small) are faster and cheaper, while larger models (like openai/text-embedding-3-large) provide better quality. Test multiple models to find the best fit for your use case.

**Batch Your Requests**: When processing multiple texts, send them in a single request rather than making individual API calls. This reduces latency and costs.

**Cache Embeddings**: Embeddings for the same text are deterministic (they don't change). Store embeddings in a database or vector store to avoid regenerating them repeatedly.

**Normalize for Comparison**: When comparing embeddings, use cosine similarity rather than Euclidean distance. Cosine similarity is scale-invariant and works better for high-dimensional vectors.

**Consider Context Length**: Each model has a maximum input length (context window). Longer texts may need to be chunked or truncated. Check the model's specifications before processing long documents.

**Use Appropriate Chunking**: For long documents, split them into meaningful chunks (paragraphs, sections) rather than arbitrary character limits. This preserves semantic coherence.

## Provider Routing

You can control which providers serve your embedding requests using the `provider` parameter. This is useful for:

* Ensuring data privacy with specific providers
* Optimizing for cost or latency
* Using provider-specific features

Example with provider preferences:

```typescript
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

For more information, see [Provider Routing](/docs/features/provider-routing).

## Error Handling

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

## Related Resources

* [Models Page](https://openrouter.ai/models?fmt=cards\&output_modalities=embeddings) - Browse all available embedding models
* [Provider Routing](/docs/features/provider-routing) - Control which providers serve your requests
* [Authentication](/docs/api/authentication) - Learn about API key authentication
* [Errors](/docs/api/reference/errors-and-debugging) - Detailed error codes and handling
