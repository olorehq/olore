---
name: olore-rclone-1.76.0
description: Local rclone documentation reference (1.76.0). Rclone documentation. Use for syncing, copying, and managing files across cloud storage backends (S3, GCS, Azure, Google Drive, Dropbox, etc.), CLI commands, mount, serve, filtering, remote configuration, and bisync.
---

# rclone Documentation

Rclone is a command-line program to manage files on cloud storage. It supports dozens of backends including S3-compatible storage, Google Drive, OneDrive, Azure Blob, Dropbox, SFTP, WebDAV, and many more. Use it for syncing, copying, moving, mounting, and serving files across cloud remotes with filtering, encryption (crypt backend), and bidirectional sync (bisync).

## Quick Reference

| Task | Entry Point |
|------|-------------|
| Install | `contents/install.md` |
| First-time config and usage | `contents/docs.md` |
| Backend overview and feature matrix | `contents/overview.md` |
| Filtering with include/exclude rules | `contents/filtering.md` |
| Global flags | `contents/flags.md` |
| S3 / S3-compatible storage | `contents/s3.md` |
| Sync, copy, move | `contents/commands/rclone_sync.md` |
| Mount as filesystem | `contents/commands/rclone_mount.md` |
| Remote control API | `contents/rc.md` |
| Troubleshooting | `contents/faq.md` |

## When to use

Use this skill when the user asks about:
- Syncing, copying, or moving files between cloud storage or local filesystem
- Configuring rclone remotes (S3, Google Drive, OneDrive, Azure, Dropbox, SFTP, etc.)
- Mounting a cloud remote or serving files over HTTP, FTP, WebDAV, S3, or SFTP
- Filtering files with include/exclude patterns
- Encryption (crypt), bidirectional sync (bisync), and the remote control (rc) API
- CLI command syntax and flags for any rclone subcommand

## How to find information

1. **First**, read `TOC.md` for the complete file listing organized by directory
2. Identify the relevant section based on the user's question (core docs, backends, or command reference)
3. Read specific files for details

**TOC.md contains all 170 files organized by directory - always check it first.**
