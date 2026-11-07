# Run Codex with an NFS home directory

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

When Linux hosts share a [Codex home](https://learn.chatgpt.com/docs/config-file/config-advanced#config-and-state-locations) (`~/.codex` by default) over Network File System (NFS), they can corrupt a SQLite database if they open it in write-ahead log (WAL) mode at the same time. For interactive work in the CLI or the [Codex app over SSH](https://learn.chatgpt.com/docs/remote-connections#connect-to-an-ssh-host), [migrate the shared home](#migrate-an-existing-nfs-home). For [independent batch jobs](#run-independent-batch-jobs), keep each host’s Codex home or SQLite directory on local disk.

## Why NFS can break SQLite

The Codex app and terminal UI use a SQLite index to list conversations. The databases also store goals and memory-processing state. On local disk, Codex normally uses WAL mode. Processes on different hosts can’t share the memory that WAL needs.

When Codex detects Linux NFS, it creates databases in rollback-journal mode (`DELETE`), which uses file locks instead. Migrate existing WAL databases before opening them from another host.

Codex also saves conversation events in `rollout-*.jsonl` files. These can already live on NFS because one process writes each rollout at a time. Migrating SQLite leaves those files in place.

## Migrate an existing NFS home

### 1. Check the shared home

Run `codex --version` on each host, including any SSH backend. Use a build that includes `codex migrate-nfs-db`, such as [Codex CLI 0.166.0](https://github.com/openai/codex/releases/tag/rust-v0.166.0). Confirm that all hosts using this shared home use the same [SQLite directory](https://learn.chatgpt.com/docs/config-file/environment-variables#core-locations). Ask your storage administrator to verify that a file lock held on one host blocks a conflicting lock on the other. Keep SQLite local if the mount can’t do this.

During migration, do not set or change the SQLite home or log directory.

### 2. Stop Codex on every host

<WarningTip title="Stop all clients before migrating">
  End active turns, close the app and CLI, and stop remote app servers,
  background daemons, and scheduled jobs that use this home. Keep them stopped
  on every host until migration completes. A concurrent writer can corrupt the
  database and lose changes to goals or memories.

Session rollouts are separate files and can’t restore all database state.

</WarningTip>

In [daemon mode](https://learn.chatgpt.com/docs/developer-commands?surface=cli#cli-manage-the-background-server-with-daemon), the CLI connects to a background server that stays running between sessions. Its Unix socket works only on the host that started it. We recommend running the CLI without the daemon when hosts share a Codex home over NFS. Stop the daemon on each host that runs it with `codex app-server daemon stop`.

To keep the CLI from starting it again, set `daemon_auto_start` to `false` under `[features]` in your shared `config.toml`.

```toml
[features]
daemon_auto_start = false
```

For a single CLI session, pass [`--no-daemon`](https://learn.chatgpt.com/docs/developer-commands?surface=cli#cli-global-flags). This flag also bypasses a daemon that’s already running.

### 3. Run the migration

Run the migration on just one Linux host per shared Codex home. Use the home owner’s account and usual configuration. Keep Codex stopped on the other hosts until the migration finishes.

```sh
codex migrate-nfs-db
```

### 4. Resume a conversation

If the command reports `Skipped logs database`, check its location. A logs database on local disk needs no further action. If it’s on NFS, confirm it uses `DELETE` journal mode or move it to local disk before reopening Codex on another host.

After migration succeeds, open the same project on another host as the same user. Resume a familiar conversation in the app or run [`codex --no-daemon resume`](https://learn.chatgpt.com/docs/developer-commands?surface=cli#cli-codex-resume). Check that your last turn is there and that you can continue the conversation.

## Move diagnostic logs to local disk

**Optional, recommended after migration.** Diagnostic logs help you investigate errors and slow launches. Writing them locally reduces traffic on NFS.

Create a private, writable log directory on each host. Set `log_dir` in the user’s `config.toml` to the absolute path for that user. For example, Alice might use this setting.

```toml
log_dir = "/var/local/codex/alice/logs"
```

New logs go to that directory. Older logs stay in place.

A managed `sqlite_home` keeps the SQLite logs database in the required
  directory even when you set `log_dir`. See [managed
  configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration).

## Enforce the journal mode across a fleet

First stop all clients on every host that uses an affected home. The setting carries the name `unsafe` because converting a database while another host writes to it can corrupt it.

With clients stopped, add this setting to the hosts’ [managed configuration](https://learn.chatgpt.com/docs/enterprise/managed-configuration) in `/etc/codex/requirements.toml`.

```toml
unsafe_enforce_sqlite_journal_mode = true
```

The setting applies to every user on the configured hosts. The next time a user opens Codex, it automatically migrates existing WAL databases as it opens them for writing on NFS. For each shared home, let the migration finish on one host before reconnecting other hosts. If migration fails, leave other clients stopped and follow the [recovery steps](#frequently-asked-questions).

## Run independent batch jobs

If an unattended job doesn’t need your interactive session history, run [`codex exec`](https://learn.chatgpt.com/docs/non-interactive-mode) with a Codex home on the worker’s local disk. If session files need to stay on NFS, set `CODEX_SQLITE_HOME` to a private local directory for each job so workers don’t contend for the same database.

- **Keep a conversation record.** Give each job a private, durable `CODEX_HOME` for its rollout and a private, host-local `CODEX_SQLITE_HOME` for its database. The worker’s index is separate from your interactive index. Keep the rollout under `$CODEX_HOME/sessions/` if you need to inspect the job after the worker exits.
- **Keep only the result.** Put the job home on local disk and run [`codex exec --ephemeral`](https://learn.chatgpt.com/docs/non-interactive-mode). It skips saving a resumable session. Use `-o` to write the final response to a durable file or `--json` to stream events to your job runner.

For a job that needs a rollout, have the scheduler create both directories and provision authentication and configuration for the job home. Replace the example paths with this job’s durable Codex home and worker-local SQLite directory. A managed or configured `sqlite_home` takes precedence over `CODEX_SQLITE_HOME`.

```sh
CODEX_HOME="/mnt/nfs/codex/jobs/job-1234" \
CODEX_SQLITE_HOME="/var/local/codex/jobs/job-1234" \
  codex exec "Summarize this repository's build steps."
```

## Frequently asked questions

<ToggleSection title="How can I tell whether an error is related to NFS?">

A migration error such as `cannot open source database exclusively` means Codex couldn’t lock the database. Another client can cause this on local disk too. On Linux, run `findmnt -T "$DB_PATH"` with the path to the affected database. If it reports `nfs` or `nfs4`, check for writers on every host and ask the storage administrator to verify cross-host locking on that mount. Stop the remaining clients before retrying.

</ToggleSection>

<ToggleSection title="What should I look for in the migration output?">

For each database, Codex prints `Migrated database:` and `WAL backup:`, or `Already in DELETE mode:`. If you rely on group permissions or extended access rules, verify those after migration and before reopening clients.

If `log_dir` was already set, the command skips the logs database. Before sharing that database across hosts, make sure it uses `DELETE` or keep it on local disk.

If you see `No databases found.`, check the [effective SQLite directory](https://learn.chatgpt.com/docs/config-file/environment-variables#core-locations) for the user who owns the home. If local staging space is insufficient, choose a host-local directory with enough space and pass its absolute path with `--staging-dir`.

</ToggleSection>

<ToggleSection title="How do I recover after a failed migration?">

Keep other clients stopped. Save the exact error, the database path, and the printed backup path. Some databases may already have migrated. Keep the original database and its sidecar files together in their backup directory. After resolving a lock or space error, rerun `codex migrate-nfs-db` on the same host. For an integrity error or a missing replacement, work from copies before restoring anything. Session rollouts can help rebuild conversation history. Recovering SQLite-only state, including goals, requires an intact database.

Before starting a separate CLI session, confirm that managed storage settings won’t redirect writes to the affected home. Then start Codex using a temporary directory on local disk. The new home may require sign-in.

```sh
recovery_home=$(mktemp -d /tmp/codex-nfs-recovery.XXXXXXXX) &&
  CODEX_HOME="$recovery_home" CODEX_SQLITE_HOME="$recovery_home" \
  codex --no-daemon --sandbox read-only \
    "Help me recover a failed Codex NFS migration, run `$ codex doctor` to get the information about corrupted databases. Backup paths for databases should be in the original database with `_wal_migration_backup` in the end of the file. Ask user for the original error. Plan a recovery using copies and leave the originals untouched."
```

</ToggleSection>