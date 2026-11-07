---
title: GraphQL connections
description: >-
  The flattenConnection function turns a Storefront API connection into a plain
  array. Use the function to render list fields without branching on the
  connection shape.
api_version: 2026-10
source_url:
  html: >-
    https://shopify.dev/docs/api/hydrogen/latest/storefront-client/flatten-connection
  md: >-
    https://shopify.dev/docs/api/hydrogen/latest/storefront-client/flatten-connection.md
api_name: hydrogen
---

# Graph​QL connections

The `flattenConnection` function turns a Storefront API connection into a plain array. Use the function to render list fields without branching on the connection shape.

Import `flattenConnection` from `@shopify/hydrogen`.

***

## Connection flattening

## flatten​Connection(**[connection](#flattenconnection-propertydetail-connection)**​)

Returns the items of a Storefront API connection, such as cart lines, as a flat array.

The function accepts the `nodes` shape and the `edges` shape. For the `nodes` shape, the function returns the original array. Copy the result before you sort or change it. The function returns an empty array for `undefined`, `null`, or a connection with neither field. A `null` input also logs a warning.

### Parameters

* **connection**

  **Connection\<T>**

  The Storefront API connection field to flatten.

### Returns

* **(T)\[]**

  The connection's items as a flat array, or an empty array when there are none.

### Connection

A GraphQL connection in either the nodes shape or the edges shape.

* edges

  The connection's items, each wrapped in an edge object.

  ```ts
  Array<{ node: T }>
  ```

* nodes

  The connection's items as a flat list.

  ```ts
  T[]
  ```

### Examples

* #### Flatten a connection

  ##### Description

  Read the status of an order's first fulfillment. This example accepts the connection in either the \`nodes\` or \`edges\` shape.

  ##### TypeScript

  ```ts
  import { flattenConnection } from "@shopify/hydrogen";

  type Fulfillment = { status: string };

  export function getFirstFulfillmentStatus(order: {
    fulfillments: { nodes?: Fulfillment[]; edges?: Array<{ node: Fulfillment }> };
  }) {
    return flattenConnection(order.fulfillments)[0]?.status;
  }
  ```

***
