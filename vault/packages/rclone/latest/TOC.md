# rclone Table of Contents

## Directory Map

```
contents/
├── (root)          # Core docs: install, overview, usage, filtering, backends (81 files)
├── commands/       # CLI command reference, auto-generated (91 files)
└── oracleobjectstorage/  # Oracle Object Storage mount tutorial (1 file)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Install rclone | `contents/install.md` |
| Initial setup & configuration | `contents/docs.md` |
| Overview of all backends | `contents/overview.md` |
| Filtering files | `contents/filtering.md` |
| Global flags reference | `contents/flags.md` |
| Remote control API | `contents/rc.md` |
| Bisync | `contents/bisync.md` |
| Mount filesystem | `contents/commands/rclone_mount.md` |
| Troubleshooting | `contents/bugs.md` |
| FAQ | `contents/faq.md` |

## Detailed Structure

### Root level — Core docs (81 files)

#### Setup & Configuration

| File | Description |
|------|-------------|
| `install.md` | Installation guide (all platforms) |
| `docs.md` | Core usage — configure, syntax, subcommands, options |
| `remote_setup.md` | Setting up remotes without GUI |
| `gui.md` | Rclone GUI (rclone rcd + web UI) |
| `docker.md` | Docker plugin for rclone |
| `flags.md` | Global flags and environment variables |
| `filtering.md` | File filtering — include/exclude rules |
| `overview.md` | Feature comparison table for all backends |
| `backends.md` | Backend listing and overview |
| `tiers.md` | Backend support tier definitions |
| `faq.md` | Frequently asked questions |
| `bugs.md` | Known bugs and limitations |

#### Sync & Transfer Operations

| File | Description |
|------|-------------|
| `bisync.md` | Bidirectional sync — full reference |
| `rc.md` | Remote control (rclone rc) API reference |
| `crypt.md` | Crypt backend — encrypt files on remotes |
| `compress.md` | Compress backend |
| `chunker.md` | Chunker backend — split large files |
| `cache.md` | Cache backend |
| `hasher.md` | Hasher backend |
| `union.md` | Union backend — merge multiple remotes |
| `alias.md` | Alias backend |
| `combine.md` | Combine backend |
| `archive.md` | Archive backend (read-only access to archives) |
| `memory.md` | Memory backend |
| `local.md` | Local filesystem backend |
| `http.md` | HTTP backend |

#### Cloud Storage Backends

| File | Description |
|------|-------------|
| `s3.md` | Amazon S3 and S3-compatible (Minio, Wasabi, etc.) |
| `drive.md` | Google Drive |
| `googlecloudstorage.md` | Google Cloud Storage |
| `googlephotos.md` | Google Photos |
| `onedrive.md` | Microsoft OneDrive |
| `azureblob.md` | Azure Blob Storage |
| `azurefiles.md` | Azure Files |
| `dropbox.md` | Dropbox |
| `box.md` | Box |
| `b2.md` | Backblaze B2 |
| `swift.md` | OpenStack Swift / Rackspace Cloud Files |
| `sftp.md` | SFTP |
| `ftp.md` | FTP |
| `smb.md` | SMB / CIFS |
| `webdav.md` | WebDAV |
| `hdfs.md` | Hadoop HDFS |
| `mega.md` | Mega |
| `pcloud.md` | pCloud |
| `storj.md` | Storj |
| `sea file.md` → `seafile.md` | Seafile |
| `jottacloud.md` | Jottacloud |
| `koofr.md` | Koofr |
| `mailru.md` | Mail.ru Cloud |
| `yandex.md` | Yandex Disk |
| `hidrive.md` | HiDrive |
| `iclouddrive.md` | iCloud Drive |
| `protondrive.md` | Proton Drive |
| `internxt.md` | Internxt |
| `filen.md` | Filen |
| `drime.md` | Drime |
| `shade.md` | Shade |
| `gofile.md` | GoFile |
| `imagekit.md` | ImageKit |
| `cloudinary.md` | Cloudinary |
| `filelu.md` | FileLu |
| `linkbox.md` | Linkbox |
| `pixeldrain.md` | Pixeldrain |
| `putio.md` | Put.io |
| `pikpak.md` | PikPak |
| `sia.md` | Sia decentralized storage |
| `storj.md` | Storj |
| `sugarsync.md` | SugarSync |
| `qingstor.md` | QingStor |
| `netstorage.md` | Akamai NetStorage |
| `internetarchive.md` | Internet Archive |
| `doi.md` | DOI (Digital Object Identifiers) |
| `filefabric.md` | Storage Made Easy |
| `filescom.md` | Files.com |
| `fichier.md` | 1Fichier |
| `opendrive.md` | OpenDrive |
| `premiumizeme.md` | Premiumize.me |
| `quatrix.md` | Quatrix |
| `sharefile.md` | Citrix ShareFile |
| `amazonclouddrive.md` | Amazon Cloud Drive (deprecated) |
| `ulozto.md` | Ulozto |

#### Oracle Object Storage

| File | Description |
|------|-------------|
| `oracleobjectstorage/tutorial_mount.md` | Oracle Object Storage mount tutorial |

### commands/ — CLI Reference (91 files)

#### Core Commands

| File | Description |
|------|-------------|
| `commands/rclone.md` | Top-level rclone command |
| `commands/rclone_copy.md` | Copy files from source to dest |
| `commands/rclone_sync.md` | Sync source to dest |
| `commands/rclone_move.md` | Move files from source to dest |
| `commands/rclone_copyto.md` | Copy src to dst, one-to-one |
| `commands/rclone_moveto.md` | Move src to dst, one-to-one |
| `commands/rclone_delete.md` | Remove files in path |
| `commands/rclone_deletefile.md` | Remove a single file |
| `commands/rclone_purge.md` | Remove path and all contents |
| `commands/rclone_mkdir.md` | Make directory |
| `commands/rclone_rmdir.md` | Remove empty directory |
| `commands/rclone_rmdirs.md` | Remove empty directories |
| `commands/rclone_check.md` | Check source and dest match |
| `commands/rclone_checksum.md` | Checks integrity using hash file |
| `commands/rclone_bisync.md` | Bidirectional sync |
| `commands/rclone_mount.md` | Mount remote as filesystem |
| `commands/rclone_nfsmount.md` | Mount remote as NFS share |

#### List & Info Commands

| File | Description |
|------|-------------|
| `commands/rclone_ls.md` | List all objects |
| `commands/rclone_lsd.md` | List directories only |
| `commands/rclone_lsl.md` | List with modification time |
| `commands/rclone_lsf.md` | List formatted for parsing |
| `commands/rclone_lsjson.md` | List as JSON |
| `commands/rclone_listremotes.md` | List all configured remotes |
| `commands/rclone_about.md` | Get quota info |
| `commands/rclone_size.md` | Count objects and their total size |
| `commands/rclone_tree.md` | List in tree format |
| `commands/rclone_ncdu.md` | Interactive ncdu-style browser |
| `commands/rclone_version.md` | Show rclone version |

#### Config Commands

| File | Description |
|------|-------------|
| `commands/rclone_config.md` | Enter interactive configuration |
| `commands/rclone_config_create.md` | Create a new remote |
| `commands/rclone_config_update.md` | Update existing remote |
| `commands/rclone_config_delete.md` | Delete a remote |
| `commands/rclone_config_show.md` | Print all config |
| `commands/rclone_config_dump.md` | Dump config as JSON |
| `commands/rclone_config_edit.md` | Enter interactive config editor |
| `commands/rclone_config_file.md` | Show config file path |
| `commands/rclone_config_paths.md` | Show paths used by rclone |
| `commands/rclone_config_providers.md` | List all available backends |
| `commands/rclone_config_reconnect.md` | Re-authenticate remote |
| `commands/rclone_config_disconnect.md` | Disconnect remote auth |
| `commands/rclone_config_userinfo.md` | Fetch user info |
| `commands/rclone_config_password.md` | Update password |
| `commands/rclone_config_string.md` | Show interpolated config value |
| `commands/rclone_config_touch.md` | Ensure config file exists |
| `commands/rclone_config_redacted.md` | Print redacted config |
| `commands/rclone_config_encryption.md` | Config encryption management |
| `commands/rclone_config_encryption_check.md` | Check config encryption |
| `commands/rclone_config_encryption_set.md` | Set config encryption |
| `commands/rclone_config_encryption_remove.md` | Remove config encryption |

#### Serve & Remote Control Commands

| File | Description |
|------|-------------|
| `commands/rclone_serve.md` | Serve a remote over a protocol |
| `commands/rclone_serve_http.md` | Serve over HTTP |
| `commands/rclone_serve_ftp.md` | Serve over FTP |
| `commands/rclone_serve_sftp.md` | Serve over SFTP |
| `commands/rclone_serve_webdav.md` | Serve over WebDAV |
| `commands/rclone_serve_s3.md` | Serve as S3 server |
| `commands/rclone_serve_nfs.md` | Serve as NFS server |
| `commands/rclone_serve_dlna.md` | Serve as DLNA server |
| `commands/rclone_serve_docker.md` | Serve as Docker volume plugin |
| `commands/rclone_serve_restic.md` | Serve as Restic REST server |
| `commands/rclone_rc.md` | Run remote control command |
| `commands/rclone_rcd.md` | Run rclone remote control server |

#### Utility Commands

| File | Description |
|------|-------------|
| `commands/rclone_cat.md` | Output files to stdout |
| `commands/rclone_rcat.md` | Copy stdin to file on remote |
| `commands/rclone_copyurl.md` | Copy URL content to remote |
| `commands/rclone_link.md` | Generate public link |
| `commands/rclone_touch.md` | Create or update file timestamp |
| `commands/rclone_dedupe.md` | Deduplicate files |
| `commands/rclone_cleanup.md` | Clean up remote |
| `commands/rclone_backend.md` | Backend-specific commands |
| `commands/rclone_authorize.md` | Remote authorization |
| `commands/rclone_obscure.md` | Obscure password for config |
| `commands/rclone_cryptcheck.md` | Validate crypt remote integrity |
| `commands/rclone_cryptdecode.md` | Decode crypt filenames |
| `commands/rclone_hashsum.md` | Calculate hash checksums |
| `commands/rclone_md5sum.md` | MD5 checksum |
| `commands/rclone_sha1sum.md` | SHA1 checksum |
| `commands/rclone_convmv.md` | Rename files for encoding issues |
| `commands/rclone_settier.md` | Set storage tier |
| `commands/rclone_gitannex.md` | Git annex special remote |
| `commands/rclone_selfupdate.md` | Update rclone to latest version |
| `commands/rclone_completion.md` | Shell completion scripts |
| `commands/rclone_completion_bash.md` | Bash completion |
| `commands/rclone_completion_zsh.md` | Zsh completion |
| `commands/rclone_completion_fish.md` | Fish completion |
| `commands/rclone_completion_powershell.md` | PowerShell completion |

#### Archive Commands

| File | Description |
|------|-------------|
| `commands/rclone_archive.md` | Archive operations |
| `commands/rclone_archive_create.md` | Create archive |
| `commands/rclone_archive_extract.md` | Extract archive |
| `commands/rclone_archive_list.md` | List archive contents |

#### Test Commands

| File | Description |
|------|-------------|
| `commands/rclone_test.md` | Test subcommands (development) |
| `commands/rclone_test_info.md` | Discover path limitations |
