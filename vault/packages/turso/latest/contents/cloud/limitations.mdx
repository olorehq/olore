---
title: Limitations
description: Known limitations and differences when using SQLite on Turso Cloud.
---

# Limitations

Turso Cloud is compatible with most SQLite features, but there are some known limitations to be aware of — especially if you're migrating from vanilla SQLite.

## Pragma statements

Some SQLite pragma statements behave differently on Turso Cloud or are not supported.

| Pragma | Notes |
| --- | --- |
| `user_version` | Read-only on Turso Cloud. Use a `_schema_version` table instead to track schema migrations. |
| `application_id` | Read-only on Turso Cloud. Use a `_metadata` table instead to store application identifiers. |
| `busy_timeout` | Not supported. Turso Cloud manages concurrency internally, so setting a busy timeout has no effect. |
| `journal_mode` | Not supported. Turso Cloud manages journaling internally and does not allow changing the journal mode. |

<Warning>
If you're using `PRAGMA user_version` to track schema migrations (common in vanilla SQLite), you'll need to switch to a table-based approach on Turso Cloud:

```sql
CREATE TABLE IF NOT EXISTS _schema_version (version INTEGER NOT NULL);
INSERT INTO _schema_version (version) VALUES (0);
```
</Warning>
