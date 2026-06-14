---
title: Database Access Allow Rules
description: Restrict database access to specific IP addresses, CIDR ranges, or AWS VPC endpoints.
---

Allow rules let you lock down a database so that only connections from specific sources are accepted. You can restrict by IP address or CIDR range, by AWS VPC endpoint ID, or both at the same time.

<Info>
  **AND semantics.** When both lists are configured, a connection must satisfy **both** rules: the client IP must be on the allowed-IP list **and** the connection must arrive through one of the allowed VPC endpoints.
</Info>

## Show Current Rules

```bash
turso db config allow-rules show <database-name>
```

If no rules are configured, all connections are accepted:

```
Access allow rules are empty: connections from any source are accepted
```

When rules are set, the command prints each list:

```
Allowed IPs:
  203.0.113.7
  10.0.0.0/8
Allowed AWS VPC endpoint IDs:
  vpce-0fe6c8807461bba49
```

## Restrict by IP Address or CIDR

Use `--ip` (repeatable) to set the list of allowed IP addresses and CIDR blocks. The flag **replaces** the current list each time it is used.

```bash
# Allow a single IP
turso db config allow-rules set my-db --ip 203.0.113.7

# Allow a CIDR range
turso db config allow-rules set my-db --ip 10.0.0.0/8

# Allow multiple entries at once
turso db config allow-rules set my-db --ip 203.0.113.7 --ip 10.0.0.0/8
```

Both IPv4 and IPv6 addresses are accepted. CIDR notation (e.g. `10.0.0.0/8`) is supported for ranges.

## Restrict by AWS VPC Endpoint

Use `--aws-vpc` (repeatable) to set the list of allowed [AWS VPC endpoint IDs](/cloud/private-endpoints). IDs must start with `vpce-`.

```bash
turso db config allow-rules set my-db --aws-vpc vpce-0fe6c8807461bba49
```

## Combine IP and VPC Rules

You can set both lists in a single command. Connections must satisfy both constraints.

```bash
turso db config allow-rules set my-db \
  --ip 10.0.0.0/8 \
  --aws-vpc vpce-0fe6c8807461bba49
```

A later call that only specifies `--ip` leaves the VPC list unchanged, and vice versa:

```bash
# Add a new IP without touching the VPC list
turso db config allow-rules set my-db --ip 198.51.100.5
```

## Clear Rules

Remove all allow rules to allow connections from any source:

```bash
turso db config allow-rules clear my-db
```

Clear only one list while leaving the other intact:

```bash
# Clear only the IP list
turso db config allow-rules clear my-db --ips

# Clear only the VPC list
turso db config allow-rules clear my-db --aws-vpcs
```

## API

Allow rules are managed through the database [configuration endpoint](/api-reference/databases/update-configuration). Set `allowed_ips` and/or `allowed_aws_vpc_ids` in the request body:

```bash
curl -L -X PATCH 'https://api.turso.tech/v1/organizations/{organizationSlug}/databases/{databaseName}/configuration' \
  -H 'Authorization: Bearer TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "allowed_ips": ["203.0.113.7", "10.0.0.0/8"],
    "allowed_aws_vpc_ids": ["vpce-0fe6c8807461bba49"]
  }'
```

Pass an explicit empty array to clear a list:

```bash
curl -L -X PATCH 'https://api.turso.tech/v1/organizations/{organizationSlug}/databases/{databaseName}/configuration' \
  -H 'Authorization: Bearer TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{
    "allowed_ips": [],
    "allowed_aws_vpc_ids": []
  }'
```

Omitting a field from the request body leaves that list unchanged.
