---
name: olore-rclone-latest
description: Local rclone documentation reference (latest). Rclone documentation. Use for syncing, copying, and managing files across cloud storage backends (S3, GCS, Azure, Google Drive, Dropbox, etc.), CLI commands, mount, serve, filtering, remote configuration, and bisync.
---

# rclone Documentation

Rclone documentation. Use for syncing, copying, and managing files across cloud storage backends (S3, GCS, Azure, Google Drive, Dropbox, etc.), CLI commands, mount, serve, filtering, remote configuration, and bisync.

## Quick Reference

| Task | Entry Point |
|------|-------------|
| Install rclone | `contents/install.md` |
| Basic usage and CLI syntax | `contents/docs.md` |
| Backend feature comparison | `contents/overview.md` |
| Configure a remote | `contents/remote_setup.md` |
| CLI command index | `contents/commands/rclone.md` |
| Copy / sync / move files | `contents/commands/rclone_copy.md`, `rclone_sync.md`, `rclone_move.md` |
| Mount as filesystem | `contents/commands/rclone_mount.md` |
| Serve files (HTTP/S3/SFTP/WebDAV) | `contents/commands/rclone_serve.md` |
| Filtering rules | `contents/filtering.md` |
| Global flags | `contents/flags.md` |
| Bidirectional sync | `contents/bisync.md` |
| Remote control API | `contents/rc.md` |

## When to use

Use this skill when the user asks about:
- Syncing, copying, or moving files between cloud storage providers
- Specific cloud storage backends (S3, Google Drive, Dropbox, Azure, B2, SFTP, etc.)
- rclone CLI commands and their flags
- Mounting cloud storage as a local filesystem
- Serving cloud storage over HTTP, S3, SFTP, WebDAV, FTP, or DLNA
- Bidirectional sync (bisync) configuration and usage
- Filtering files with include/exclude rules
- Configuring and managing remotes
- Encryption, chunking, compression, or caching remotes
- Troubleshooting rclone operations

## How to find information

1. **First**, read `TOC.md` for complete file listing organized by directory
2. Identify the relevant section based on the user's question:
   - Cloud backend questions: root-level `{backend}.md` files
   - CLI command questions: `commands/rclone_{command}.md`
   - Core behavior: `docs.md`, `filtering.md`, `flags.md`, `overview.md`
3. Read the specific file(s) for details

**TOC.md contains all 180 files organized by directory - always check it first.**
