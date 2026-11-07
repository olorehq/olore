---
title: Recover Deleted Databases
description: Restore databases and groups for up to five days after deletion.
---

Turso Cloud keeps deleted databases and groups recoverable for up to **five days**
after deletion. Restoring brings the database back exactly as it was at the moment
it was deleted — same name, same data. This protects you against accidents, whether
the delete came from a teammate, a script, or an AI agent with too much enthusiasm.

Recovery is available on all paid plans at no additional cost.

<Info>

This is different from [Point-in-Time Recovery](/features/point-in-time-recovery)
(PITR). PITR restores an **existing** database to an earlier point in time, but it
cannot bring back a database that was deleted. Recovery brings back a **deleted**
database at the moment it was deleted.

</Info>

## Requirements

- A **paid plan**. Databases deleted while the organization was on a paid plan can
  be restored.
- **Admin or owner** access to the organization.
- Recovery enabled for the organization (the **Allow restore** toggle — see
  [below](#disabling-recovery)).

## Restore from the dashboard

1. Open the **Restore** page in the [Turso dashboard](https://app.turso.tech).
2. Find the database under **Recently deleted** — you can search by name, ID,
   hostname, or group.
3. Click **Restore**.

Deleted groups appear in their own section on the same page. Restoring a group
also attempts to restore the databases that were deleted along with it.

## Restore with the Platform API

List the databases deleted within the last five days, then restore by the
database's UUID:

<CodeGroup>

```bash List deleted databases
curl -L 'https://api.turso.tech/v3/organizations/{organizationId}/databases?deleted=true' \
  -H 'Authorization: Bearer TOKEN'
```

```bash Restore a database
curl -L -X POST 'https://api.turso.tech/v3/organizations/{organizationId}/databases/{databaseId}/restore' \
  -H 'Authorization: Bearer TOKEN'
```

```bash List deleted groups
curl -L 'https://api.turso.tech/v3/organizations/{organizationId}/deleted-groups' \
  -H 'Authorization: Bearer TOKEN'
```

```bash Restore a group
curl -L -X POST 'https://api.turso.tech/v3/organizations/{organizationId}/groups/{groupId}/restore' \
  -H 'Authorization: Bearer TOKEN'
```

</CodeGroup>

These endpoints identify everything by **UUID** rather than name:
`{organizationId}` is the `id` field from
[Retrieve Organization](/api-reference/organizations/retrieve), and the
database and group UUIDs come from the deleted listings. To restore under a
different name (for example, when a new database already uses the old one),
pass a JSON body: `{ "name": "my-restored-database" }`.

Refer to the API reference for all parameters and response fields:

<CardGroup>

<Card horizontal title="List Deleted Databases" icon="code" href="/api-reference/databases/list-deleted">

</Card>

<Card horizontal title="Restore Database" icon="code" href="/api-reference/databases/restore">

</Card>

<Card horizontal title="List Deleted Groups" icon="code" href="/api-reference/groups/list-deleted">

</Card>

<Card horizontal title="Restore Group" icon="code" href="/api-reference/groups/restore">

</Card>

</CardGroup>

## Restore with an AI agent

The [Turso MCP server](/integrations/mcp) exposes recovery to AI agents, so an
agent that deleted a database by mistake can bring it back in the same session:

| Tool                     | Description                                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------------------------- |
| `list_deleted_databases` | List databases deleted within the last five days. Returns the UUID needed to restore.                     |
| `restore_database`       | Restore a deleted database by UUID, optionally under a new name.                                          |
| `list_deleted_groups`    | List groups deleted within the last five days, including empty groups.                                    |
| `restore_group`          | Restore a deleted group and the databases that were deleted with it.                                      |

## Restoring groups

Destroying a group deletes all of its databases. Restoring the group brings the
group back and attempts to restore those databases as well. If some databases fail
to restore, the group still becomes active — you can retry the failed databases
individually with `restore_database`.

## Disabling recovery

Some organizations need deleted to mean deleted. Admins and owners can turn
recovery off for the whole organization with the **Allow restore** toggle on the
dashboard's Restore page, through the API, or through the MCP server
(`set_organization_restore_enabled`):

```bash
curl -L -X PATCH 'https://api.turso.tech/v1/organizations/{organizationSlug}' \
  -H 'Authorization: Bearer TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{ "restore_enabled": false }'
```

The current state is returned as `restore_enabled` by
[Retrieve Organization](/api-reference/organizations/retrieve).

While recovery is disabled, deleted databases and groups still appear in the
deleted listings, but restore attempts fail until an admin or owner re-enables
recovery.

## Things to know

- The recovery window is **five days** from deletion. After that, the database is
  gone for good.
- Restores are identified by the database's **UUID**, not its name — names can be
  reused. If a new database already exists with the old name, restore the deleted
  one under a new name.
- The restored database contains everything committed up to the moment of
  deletion. To rewind further back in time, follow up with
  [Point-in-Time Recovery](/features/point-in-time-recovery).
- Recovery requires regional support: appearing in the deleted listing does not
  guarantee the database can be recovered.
- To prevent deletion in the first place, enable **delete protection** on the
  [database](/api-reference/databases/update-configuration) or
  [group](/api-reference/groups/update-configuration) — a protected database
  cannot be deleted until protection is turned off.

<CardGroup>

<Card horizontal title="Point-in-Time Recovery" icon="clock-rotate-left" href="/features/point-in-time-recovery">

</Card>

<Card horizontal title="MCP (AI agents)" icon="robot" href="/integrations/mcp">

</Card>

</CardGroup>
