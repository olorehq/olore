---
title: AI & Embeddings
description: Vector Similarity Search is built into Turso and libSQL Server as a native feature.
---

Turso and libSQL enable vector search capability without an extension.

## How it works

- Create a table with one or more vector columns (e.g. `FLOAT32`)
- Provide vector values in binary format or convert text representation to binary using the appropriate conversion function (e.g. `vector32(...)`)
- Calculate vector similarity between vectors in the table or from the query itself using dedicated vector functions (e.g. `vector_distance_cos`)
- Create a special vector index to speed up nearest neighbors queries (use the `libsql_vector_idx(column)` expression in the `CREATE INDEX` statement to create vector index)
- Query the index with the special `vector_top_k(idx_name, q_vector, k)` [table-valued function](https://www.sqlite.org/vtab.html#table_valued_functions)

# Vectors

### Types

LibSQL uses the native SQLite BLOB [storage class](https://www.sqlite.org/datatype3.html#storage_classes_and_datatypes) for vector columns. To align with SQLite [affinity rules](https://www.sqlite.org/datatype3.html#determination_of_column_affinity), all type names have two alternatives: one that is easy to type and another with a `_BLOB` suffix that is consistent with affinity rules.

<Info>
  We suggest library authors use type names with the `_BLOB` suffix to make
  results more generic and universal. For regular applications, developers can
  choose either alternative, as the type name only serves as a **hint** for
  SQLite and external extensions.
</Info>

<Info>
  As LibSQL does not introduce a new storage class, all metadata about vectors
  is also encoded in the `BLOB` itself. This comes at the cost of a few bytes
  per row but greatly simplifies the design of the feature.
</Info>

The table below lists six vector types currently supported by LibSQL. Types are listed from more precise and storage-heavy to more compact but less precise alternatives (the number of dimensions in vector $D$ is used to estimate storage requirements for a single vector).

| Type name                   | Storage (bytes)                 | Description                                                                                                                                                                                        |
| --------------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FLOAT64` \| `F64_BLOB`     | $8D + 1$                        | Implementation of [IEEE 754 double precision format](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) for 64-bit floating point numbers                                       |
| `FLOAT32` \| `F32_BLOB`     | $4D$                            | Implementation of [IEEE 754 single precision format](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) for 32-bit floating point numbers                                       |
| `FLOAT16` \| `F16_BLOB`     | $2D + 1$                        | Implementation of [IEEE 754-2008 half precision format](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) for 16-bit floating point numbers                                      |
| `FLOATB16` \| `FB16_BLOB`   | $2D + 1$                        | Implementation of [bfloat16 format](https://en.wikipedia.org/wiki/Bfloat16_floating-point_format) for 16-bit floating point numbers                                                                |
| `FLOAT8` \| `F8_BLOB`       | $D + 14$                        | LibSQL specific implementation which compresses each vector component to single `u8` byte `b` and reconstruct value from it using simple transformation: $\texttt{shift} + \texttt{alpha} \cdot b$ |
| `FLOAT1BIT` \| `F1BIT_BLOB` | $\lceil \frac{D}{8} \rceil + 3$ | LibSQL-specific implementation which compresses each vector component down to 1-bit and packs multiple components into a single machine word, achieving a very compact representation              |

<Info>
  For most applications, the `FLOAT32` type should be a good starting point, but
  you may want to explore more compact options if your table has a large number
  of rows with vectors.
</Info>

<Info>
  While `FLOAT16` and `FLOATB16` use the same amount of storage, they provide
  different trade-offs between speed and accuracy. Generally, operations over
  `bfloat16` are faster but come at the expense of lower precision.
</Info>

### Functions

To work with vectors, LibSQL provides several functions that operate in the vector domain. Each function understands vectors in binary format aligned with the six types described above or in text format as a single JSON array of numbers.

Currently, LibSQL supports the following functions:

| Function name                                                                      | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vector64` \| `vector32` \| `vector16` \| `vectorb16` \| `vector8` \| `vector1bit` | Conversion function which accepts a valid vector and converts it to the corresponding target type                                                                            |
| `vector`                                                                           | Alias for `vector32` conversion function                                                                                                                                     |
| `vector_extract`                                                                   | Extraction function which accepts valid vector and return its text representation                                                                                            |
| `vector_distance_cos`                                                              | Cosine distance (1 - [cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity)) function which operates over vector of **same type** with **same dimensionality** |
| `vector_distance_l2`                                                               | Euclidean distance function which operates over vector of **same type** with **same dimensionality**                                                                         |

### Vectors usage

<Steps>

<Step title="Create a table">

Begin by declaring a column used for storing vectors with the `F32_BLOB` datatype:

```sql
CREATE TABLE movies (
  title     TEXT,
  year      INT,
  embedding F32_BLOB(4) -- 4-dimensional f32 vector
);
```

The number in parentheses `(4)` specifies the dimensionality of the vector. This means each vector in this column will have exactly 4 components.

</Step>

<Step title="Generate and insert embeddings">

Once you generate embeddings for your data (via an LLM), you can insert them into your table:

```sql
INSERT INTO movies (title, year, embedding)
VALUES
  ('Napoleon', 2023, vector32('[0.800, 0.579, 0.481, 0.229]')),
  ('Black Hawk Down', 2001, vector32('[0.406, 0.027, 0.378, 0.056]')),
  ('Gladiator', 2000, vector32('[0.698, 0.140, 0.073, 0.125]')),
  ('Blade Runner', 1982, vector32('[0.379, 0.637, 0.011, 0.647]'));
```

Popular tools like [LangChain](https://www.langchain.com), [Hugging Face](https://huggingface.co) or [OpenAI](https://turso.tech/blog/how-to-generate-and-store-openai-vector-embeddings-with-turso) can be used to generate embeddings.

</Step>

<Step title="Perform a vector similarity search">

You can now write queries combining vectors and standard SQLite data:

```sql
SELECT title,
       vector_extract(embedding),
       vector_distance_cos(embedding, vector32('[0.064, 0.777, 0.661, 0.687]')) AS distance
FROM movies
ORDER BY distance ASC;
```

</Step>

</Steps>

### Understanding Distance Results

The `vector_distance_cos` function calculates the cosine distance, which is defined as:

- Cosine Distance = 1 &mdash; [Cosine Similarity](https://en.wikipedia.org/wiki/Cosine_similarity)

The cosine distance ranges from 0 to 2, where:

- A distance close to 0 indicates that the vectors are nearly identical or exactly matching.
- A distance close to 1 indicates that the vectors are orthogonal (perpendicular).
- A distance close to 2 indicates that the vectors are pointing in opposite directions.

<Note>
  Very small negative numbers close to zero (for example, `-10^-14`) may
  occasionally appear due to floating-point arithmetic precision. These should
  be interpreted as effectively zero, indicating an exact or near-exact match
  between vectors.

```sql
SELECT vector_distance_cos('[1000]', '[1000]');
-- Output: -2.0479999918166e-09
```

</Note>

### Vector Limitations

- Euclidean distance is **not supported** for 1-bit `FLOAT1BIT` vectors
- LibSQL can only operate on vectors with no more than 65536 dimensions

## Indexing

Nearest neighbors (NN) queries are popular for various AI-powered applications ([RAG](https://en.wikipedia.org/wiki/Retrieval-augmented_generation) uses NN queries to extract relevant information, and recommendation engines can suggest items based on embedding similarity).

LibSQL implements [DiskANN](https://turso.tech/blog/approximate-nearest-neighbor-search-with-diskann-in-libsql) algorithm in order to speed up approximate nearest neighbors queries for tables with vector columns.

<Note>
  The DiskANN algorithm trades search accuracy for speed, so LibSQL queries may
  return slightly suboptimal neighbors for tables with a large number of rows.
</Note>

### Vector Index

LibSQL introduces a custom index type that helps speed up nearest neighbors queries against a fixed distance function (cosine similarity by default).

From a syntax perspective, the vector index differs from ordinary application-defined B-Tree indices in that it must wrap the vector column into a `libsql_vector_idx` marker function like this

```sql
CREATE INDEX movies_idx ON movies (libsql_vector_idx(embedding));
```

<Note>
  Vector index works only for column with one of the vector types described
  above
</Note>

The vector index is fully integrated into the LibSQL core, so it inherits all operations and most features from ordinary indices:

- An index created for a table with existing data will be automatically populated with this data
- All updates to the base table will be **automatically** reflected in the index
- You can rebuild index from scratch using `REINDEX movies_idx` command
- You can drop index with `DROP INDEX movies_idx` command
- You can create [partial](https://www.sqlite.org/partialindex.html) vector index with a custom filtering rule:

```sql
CREATE INDEX movies_idx ON movies (libsql_vector_idx(embedding))
WHERE year >= 2000;
```

### Query

At the moment vector index must be queried **explicitly** with special `vector_top_k(idx_name, q_vector, k)` [table-valued function](https://www.sqlite.org/vtab.html#table_valued_functions). The function accepts index name, query vector and amount of neighbors to return. This function searches for `k` approximate nearest neighbors and returns `ROWID` of these rows or `PRIMARY KEY` if base index [does not have ROWID](https://www.sqlite.org/withoutrowid.html).

In order for table-valued function to work query vector **must** have the same vector type and dimensionality.

### Settings

LibSQL vector index optionally can accept settings which must be specified as variadic parameters of the `libsql_vector_idx` function as strings in the format `key=value`:

```sql
CREATE INDEX movies_idx
ON movies(libsql_vector_idx(embedding, 'metric=l2', 'compress_neighbors=float8'));
```

At the moment LibSQL supports the following settings:

| Setting key          | Value type                                                        | Description                                                                                                                                                                                                                                                                             |
| -------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `metric`             | `cosine` \| `l2`                                                  | Which distance function to use for building the index. <br/> Default: `cosine`                                                                                                                                                                                                          |
| `max_neighbors`      | positive integer                                                  | How many neighbors to store for every node in the DiskANN graph. The lower the setting -- the less storage index will use in exchange to search precision. <br/> Default: $3 \sqrt{D}$ where $D$ -- dimensionality of vector column                                                     |
| `compress_neighbors` | `float1bit`\|`float8`\|<br/>`float16`\|`floatb16`\|<br/>`float32` | Which vector type must be used to store neighbors for every node in the DiskANN graph. The more compact vector type is used for neighbors -- the less storage index will use in exchange to search precision. <br/> Default: **no compression** (neighbors has same type as base table) |
| `alpha`              | positive float $\geq 1$                                           | "Density" parameter of general sparse neighborhood graph build during DiskANN algorithm. The lower parameter -- the more sparse is DiskANN graph which can speed up query speed in exchange to lower search precision. <br/>Default: `1.2`                                              |
| `search_l`           | positive integer                                                  | Setting which limits the amount of neighbors visited during vector search. The lower the setting -- the faster will be search query in exchange to search precision. <br/>Default: `200`                                                                                                |
| `insert_l`           | positive integer                                                  | Setting which limits the amount of neighbors visited during vector insert. The lower the setting -- the faster will be insert query in exchange to DiskANN graph navigability properties. <br/>Default: `70`                                                                            |

<Note>
  Vector index for column of type `T1` with `max_neighbors=M` and
  `compress_neighbors=T2` will approximately use $\texttt{N} (Storage(\texttt
  {T1}) + \texttt{M} \cdot Storage(\texttt{T2}))$ storage bytes for `N` rows.
</Note>

### Index usage

<Steps>

<Step title="Create a table">

Begin by declaring a column used for storing vectors with the `F32_BLOB` datatype:

```sql
CREATE TABLE movies (
  title     TEXT,
  year      INT,
  embedding F32_BLOB(4) -- 4-dimensional f32 vector
);
```

The number in parentheses `(4)` specifies the dimensionality of the vector. This means each vector in this column will have exactly 4 components.

</Step>

<Step title="Generate and insert embeddings">

Once you generate embeddings for your data (via an LLM), you can insert them into your table:

```sql
INSERT INTO movies (title, year, embedding)
VALUES
  ('Napoleon', 2023, vector32('[0.800, 0.579, 0.481, 0.229]')),
  ('Black Hawk Down', 2001, vector32('[0.406, 0.027, 0.378, 0.056]')),
  ('Gladiator', 2000, vector32('[0.698, 0.140, 0.073, 0.125]')),
  ('Blade Runner', 1982, vector32('[0.379, 0.637, 0.011, 0.647]'));
```

Popular tools like [LangChain](https://www.langchain.com), [Hugging Face](https://huggingface.co) or [OpenAI](https://turso.tech/blog/how-to-generate-and-store-openai-vector-embeddings-with-turso) can be used to generate embeddings.

</Step>

<Step title="Create an Index">

Create an index using the `libsql_vector_idx` function:

```sql
CREATE INDEX movies_idx ON movies(libsql_vector_idx(embedding));
```

This creates an index optimized for vector similarity searches on the `embedding` column.

<Note>
  The `libsql_vector_idx` marker function is **required** and used by libSQL to
  distinguish `ANN`-indices from ordinary B-Tree indices.
</Note>

</Step>

<Step title="Query the indexed table">

```sql
SELECT title, year
FROM vector_top_k('movies_idx', vector32('[0.064, 0.777, 0.661, 0.687]'), 3)
JOIN movies ON movies.rowid = id
WHERE year >= 2020;
```

This query uses the `vector_top_k` [table-valued function](https://www.sqlite.org/vtab.html#table_valued_functions) to efficiently find the top 3 most similar vectors to `[0.064, 0.777, 0.661, 0.687]` using the index.

</Step>

</Steps>

### Index limitations

- Vector index works only for tables **with** `ROWID` or with singular `PRIMARY KEY`. Composite `PRIMARY KEY` without `ROWID` is not supported
