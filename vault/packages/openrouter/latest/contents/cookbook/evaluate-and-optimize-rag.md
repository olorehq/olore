> ## Documentation Index
> Fetch the complete documentation index at: https://openrouter.ai/docs/llms.txt
> Use this file to discover all available pages before exploring further.

# RAG with Embeddings & Rerank

> Build retrieval-augmented generation pipelines using OpenRouter's embeddings and rerank APIs

Retrieval-Augmented Generation (RAG) grounds LLM responses in your own data by retrieving relevant documents before generating an answer. This prevents hallucinations and keeps responses up to date without fine-tuning.

OpenRouter provides all three building blocks for a RAG pipeline through a single API:

1. **Embeddings** — convert documents and queries into vectors for semantic search
2. **Rerank** — re-score retrieved candidates for higher precision
3. **[Responses](https://openrouter.ai/docs/api_reference/responses/overview.md)** — generate a final answer using the retrieved context

## How RAG Works

A typical RAG pipeline follows these steps:

1. **Index** — chunk your documents and generate embeddings for each chunk
2. **Retrieve** — embed the user's query and find the most similar document chunks
3. **Rerank** (optional) — re-score the top candidates with a cross-encoder rerank model for better precision
4. **Generate** — pass the top documents as context to an LLM to produce a grounded answer

```lines theme={null}
User Query
    │
    ▼
┌──────────┐     ┌──────────────┐     ┌──────────┐     ┌──────────────┐
│ Embed    │────▶│ Vector Search│────▶│ Rerank   │────▶│ LLM Generate │
│ Query    │     │ (Top N docs) │     │ (Top K)  │     │ with Context │
└──────────┘     └──────────────┘     └──────────┘     └──────────────┘
```

## Step 1: Index Your Documents

Split your documents into chunks and generate embeddings for each chunk. Store the embeddings in a vector database (or in-memory for prototyping).

> [!TIP]
>
> In production, use a vector database (Pinecone, Weaviate, Qdrant, pgvector, etc.) to store and query embeddings efficiently. The in-memory approach shown here is for illustration only.

## Step 2: Retrieve Relevant Documents

When a user asks a question, embed the query and find the most similar document chunks using cosine similarity.

## Step 3: Rerank for Better Precision

Embedding-based retrieval is fast but approximate. A rerank model uses a cross-encoder to compare each document directly against the query, producing more accurate relevance scores. This is especially valuable when you retrieve many candidates (e.g., 20) and want to narrow down to the best few (e.g., 3).

## Step 4: Generate an Answer with Context

Pass the top-ranked documents as context to a chat model. The LLM generates a grounded answer based on the retrieved information.

## Complete Example

Here is a full end-to-end RAG pipeline combining all four steps:

## When to Use Rerank

Reranking adds an extra API call, so it's worth understanding when it helps most:

**Use rerank when:**

* Your knowledge base is large (hundreds or thousands of chunks) and embedding retrieval alone returns noisy results
* Precision matters more than latency (e.g., customer-facing Q\&A, legal or medical documents)
* You retrieve many candidates (e.g., top 20) and need to narrow to the best 3-5

**Skip rerank when:**

* Your knowledge base is small and embedding retrieval already returns highly relevant results
* You need the lowest possible latency (rerank adds one additional API call)
* You're building a prototype and want to keep the pipeline simple

## Multimodal Rerank (Text + Images)

Some rerank models accept images alongside text. Instead of passing plain strings, you pass document objects with an optional `text` field, an optional `image` field, or both. The `image` value can be a remote URL (`http`/`https`) or a base64-encoded data URI (`data:image/...`). At least one of `text` or `image` is required per document.

This is useful when your knowledge base contains diagrams, screenshots, charts, or scanned pages where the visual content carries meaning the caption alone doesn't.

> [!TIP]
>
> Text-only documents can still be passed as plain strings, so you can mix `"a plain string"` and `{ "image": "..." }` entries in the same `documents` array. Browse multimodal rerank models at [openrouter.ai/models?output\_modalities=rerank](https://openrouter.ai/models?fmt=cards\&output_modalities=rerank).

## Chunking Strategies

How you split documents significantly affects retrieval quality:

* **By paragraph or section** — preserves semantic coherence and works well for structured documents
* **Fixed-size with overlap** — split into chunks of \~200-500 tokens with \~50-token overlap to avoid losing context at boundaries
* **By semantic boundary** — use headings, section breaks, or sentence boundaries to create natural chunks

> [!TIP]
>
> Smaller chunks (200-300 tokens) tend to produce more precise retrieval but may lose surrounding context. Larger chunks (500-1000 tokens) preserve more context but may dilute relevance signals. Experiment with your specific data to find the right balance.

## Best Practices

**Use the same embedding model for indexing and querying.** Mixing models produces incompatible vector spaces and will give poor retrieval results.

**Batch your embedding requests.** Send multiple texts in a single API call to reduce latency and costs. The embeddings API accepts arrays of inputs.

**Cache embeddings.** Embeddings for the same text are deterministic. Store them in a database to avoid recomputing.

**Retrieve more than you need, then rerank.** A common pattern is to retrieve 10-20 candidates via embeddings, then rerank to the top 3-5. This combines the speed of embedding search with the precision of cross-encoder reranking.

**Include metadata in your prompt.** When generating, include source metadata (document title, section, URL) alongside the text so the LLM can produce proper citations.

**Set a relevance threshold.** After reranking, filter out documents below a minimum relevance score to avoid injecting irrelevant context that could confuse the LLM.

## Available Models

Browse available models for each step:

* **Embedding models**: [openrouter.ai/models?output\_modalities=embeddings](https://openrouter.ai/models?fmt=cards\&output_modalities=embeddings)
* **Rerank models**: [openrouter.ai/models?output\_modalities=rerank](https://openrouter.ai/models?fmt=cards\&output_modalities=rerank)
* **Chat models**: [openrouter.ai/models](https://openrouter.ai/models)

## Related Resources

* [Embeddings API](https://openrouter.ai/docs/api_reference/embeddings.md) — full API reference for generating embeddings
* [Provider Routing](https://openrouter.ai/docs/guides/routing/provider-selection.md) — control which providers serve your requests
* [Prompt Caching](https://openrouter.ai/docs/guides/best-practices/prompt-caching.md) — reduce costs for repeated prompt prefixes
* [Structured Outputs](https://openrouter.ai/docs/guides/features/structured-outputs.md) — enforce JSON schema on LLM responses for structured RAG output
