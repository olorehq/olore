---
name: olore-rclone-1.74.3
description: Local rclone documentation reference (1.74.3). Rclone documentation. Use for syncing, copying, and managing files across cloud storage backends (S3, GCS, Azure, Google Drive, Dropbox, etc.), CLI commands, mount, serve, filtering, remote configuration, and bisync.
---

# rclone Documentation

Rclone is a command-line program to manage files on cloud storage. It supports over 70 cloud storage backends including S3-compatible storage, Google Drive, OneDrive, Azure Blob, Dropbox, SFTP, FTP, WebDAV, and many more. Use for syncing, copying, moving, mounting, and serving files across cloud remotes with advanced filtering, encryption (crypt backend), and bidirectional sync (bisync).

## Quick Reference

| Task | Entry Point |
|------|-------------|
| Install | `contents/install.md` |
| First-time config & basic usage | `contents/docs.md` |
| Backend overview & feature matrix | `contents/overview.md` |
| Filtering with include/exclude rules | `contents/filtering.md` |
| Global flags | `contents/flags.md` |
| S3 / S3-compatible storage | `contents/s3.md` |
| Google Drive | `contents/drive.md` |
| Sync, Copy, Move commands | `contents/commands/rclone_sync.md` |
| Mount as filesystem | `contents/commands/rclone_mount.md` |
| Serve (HTTP/FTP/S3/WebDAV/SFTP) | `contents/commands/rclone_serve.md` |
| Remote control API | `contents/rc.md` |
| Encryption | `contents/crypt.md` |

## When to use

Use this skill when the user asks about:
- Syncing, copying, or moving files between cloud storage or local filesystem
- Configuring rclone remotes (S3, Google Drive, OneDrive, Azure, Dropbox, SFTP, etc.)
- Mounting a cloud remote as a local filesystem
- Serving files over HTTP, FTP, WebDAV, S3, or SFTP via rclone
- Filtering files with include/exclude patterns
- Encrypting data with the crypt backend
- Bidirectional sync with bisync
- Using the remote control (rc) API
- CLI command syntax and flags for any rclone subcommand
- Troubleshooting rclone operations, quota, or backend-specific issues

## How to find information

1. **First**, read `TOC.md` for the complete file listing organized by directory
2. Identify the relevant section based on the user's question (core docs, backend-specific, or command reference)
3. Read specific files for details

**TOC.md contains all 167 files organized by directory - always check it first.**
