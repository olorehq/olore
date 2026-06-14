# rclone Table of Contents

## Directory Map

```
contents/
├── (root)              # Core docs: install, usage, filtering, flags, overview (20 files)
├── commands/           # CLI command reference (84 files)
│   ├── rclone.md       # Top-level help and global flags
│   ├── rclone_config_* # Config management subcommands
│   ├── rclone_serve_*  # Serve subcommands (HTTP, FTP, S3, WebDAV, etc.)
│   └── rclone_*.md     # All other commands (copy, sync, move, mount, etc.)
├── (backends)          # Cloud storage backend docs (62 files, mixed in root)
└── oracleobjectstorage/ # Oracle-specific mount tutorial (1 file)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Install rclone | `contents/install.md` |
| First-time usage & config | `contents/docs.md` |
| Overview of all backends | `contents/overview.md` |
| Filtering files | `contents/filtering.md` |
| Global flags reference | `contents/flags.md` |
| S3-compatible storage | `contents/s3.md` |
| Google Drive | `contents/drive.md` |
| Sync / Copy / Move | `contents/commands/rclone_sync.md`, `rclone_copy.md`, `rclone_move.md` |
| Mount as filesystem | `contents/commands/rclone_mount.md` |
| Serve (HTTP/FTP/S3/WebDAV) | `contents/commands/rclone_serve.md` |
| Remote API (rc) | `contents/rc.md` |
| Bisync | `contents/bisync.md` |
| FAQ & Bugs | `contents/faq.md`, `contents/bugs.md` |

## Detailed Structure

### Root — Core Documentation (20 files)

| File | Description |
|------|-------------|
| `install.md` | Installation guide (binary, package manager, Docker) |
| `docs.md` | Main usage documentation: configure, basic syntax, subcommands, options |
| `overview.md` | Feature comparison table across all backends |
| `filtering.md` | File filtering: include/exclude rules, patterns, --filter-from |
| `flags.md` | Global flags reference |
| `bisync.md` | Bidirectional sync: setup, conflict resolution, options |
| `rc.md` | Remote control API (rcd, rc commands, JSON API) |
| `remote_setup.md` | Configuring remotes headlessly / on a remote machine |
| `gui.md` | Web GUI usage |
| `docker.md` | Docker volume plugin for rclone |
| `archive.md` | Archive backend (read zip/squashfs without extracting) |
| `bugs.md` | Known bugs and limitations |
| `faq.md` | Frequently asked questions |
| `tiers.md` | Backend stability tiers reference |

### Root — Virtual / Overlay Backends (8 files)

| File | Description |
|------|-------------|
| `alias.md` | Alias backend: rename a remote |
| `cache.md` | Cache backend: transparent caching layer |
| `chunker.md` | Chunker backend: split large files |
| `combine.md` | Combine backend: merge multiple remotes |
| `compress.md` | Compress backend: transparent compression |
| `crypt.md` | Crypt backend: transparent encryption |
| `hasher.md` | Hasher backend: hash caching overlay |
| `union.md` | Union backend: combine multiple remotes as one |

### Root — Cloud Storage Backends (62 files)

| File | Backend |
|------|---------|
| `s3.md` | Amazon S3 and S3-compatible (MinIO, Wasabi, Backblaze, etc.) |
| `drive.md` | Google Drive |
| `onedrive.md` | Microsoft OneDrive |
| `azureblob.md` | Azure Blob Storage |
| `azurefiles.md` | Azure Files |
| `googlecloudstorage.md` | Google Cloud Storage |
| `b2.md` | Backblaze B2 |
| `dropbox.md` | Dropbox |
| `box.md` | Box |
| `sftp.md` | SFTP |
| `ftp.md` | FTP |
| `http.md` | HTTP (read-only remote) |
| `webdav.md` | WebDAV |
| `smb.md` | SMB / CIFS |
| `local.md` | Local filesystem |
| `swift.md` | OpenStack Swift |
| `storj.md` | Storj decentralized storage |
| `mega.md` | MEGA |
| `pcloud.md` | pCloud |
| `hdfs.md` | Hadoop Distributed File System |
| `googlephotos.md` | Google Photos |
| `internetarchive.md` | Internet Archive |
| `koofr.md` | Koofr |
| `mailru.md` | Mail.ru Cloud |
| `memory.md` | In-memory backend |
| `netstorage.md` | Akamai NetStorage |
| `opendrive.md` | OpenDrive |
| `jottacloud.md` | Jottacloud |
| `yandex.md` | Yandex Disk |
| `zoho.md` | Zoho WorkDrive |
| `seafile.md` | Seafile |
| `sia.md` | Sia decentralized storage |
| `sharefile.md` | Citrix ShareFile |
| `putio.md` | Put.io |
| `premiumizeme.md` | Premiumize.me |
| `qingstor.md` | QingStor |
| `pikpak.md` | PikPak |
| `hidrive.md` | Strato HiDrive |
| `iclouddrive.md` | iCloud Drive |
| `imagekit.md` | ImageKit |
| `fichier.md` | 1Fichier |
| `filefabric.md` | Storage Made Easy File Fabric |
| `filelu.md` | FileLu |
| `filen.md` | Filen |
| `filescom.md` | Files.com |
| `gofile.md` | GoFile |
| `huaweidrive.md` | Huawei Drive |
| `internxt.md` | Internxt |
| `linkbox.md` | Linkbox |
| `pixeldrain.md` | Pixeldrain |
| `protondrive.md` | Proton Drive |
| `quatrix.md` | Quatrix |
| `shade.md` | Shade |
| `sugarsync.md` | SugarSync |
| `ulozto.md` | Uloz.to |
| `amazonclouddrive.md` | Amazon Cloud Drive |
| `cloudinary.md` | Cloudinary |
| `doi.md` | DOI (Digital Object Identifier, read-only) |
| `drime.md` | Drime |
| `hasher.md` | Hasher overlay |
| `mailru.md` | Mail.ru |

### oracleobjectstorage/ (1 file)

| File | Description |
|------|-------------|
| `oracleobjectstorage/tutorial_mount.md` | Oracle Object Storage: mount tutorial |

### commands/ — CLI Reference (84 files)

| File | Description |
|------|-------------|
| `rclone.md` | Root command: global synopsis and flags |
| `rclone_about.md` | Show quota/usage info for a remote |
| `rclone_archive.md` | Archive parent command |
| `rclone_archive_create.md` | Create archive from remote path |
| `rclone_archive_extract.md` | Extract archive to remote path |
| `rclone_archive_list.md` | List contents of archive |
| `rclone_authorize.md` | Remote authorization helper |
| `rclone_backend.md` | Backend-specific commands |
| `rclone_bisync.md` | Bidirectional sync command |
| `rclone_cat.md` | Cat files to stdout |
| `rclone_check.md` | Check files in source and destination match |
| `rclone_checksum.md` | Check files against a checksum file |
| `rclone_cleanup.md` | Clean up remote (empty trash, etc.) |
| `rclone_config.md` | Config management parent command |
| `rclone_config_create.md` | Create a new remote |
| `rclone_config_delete.md` | Delete a remote |
| `rclone_config_disconnect.md` | Disconnect from a remote's OAuth |
| `rclone_config_dump.md` | Dump the config file as JSON |
| `rclone_config_edit.md` | Edit the config interactively |
| `rclone_config_encryption.md` | Config encryption parent command |
| `rclone_config_encryption_check.md` | Check config encryption status |
| `rclone_config_encryption_remove.md` | Remove config encryption |
| `rclone_config_encryption_set.md` | Set config encryption password |
| `rclone_config_file.md` | Show config file path |
| `rclone_config_password.md` | Update config password |
| `rclone_config_paths.md` | Show useful paths |
| `rclone_config_providers.md` | List all available providers |
| `rclone_config_reconnect.md` | Re-authenticate a remote |
| `rclone_config_redacted.md` | Print redacted config |
| `rclone_config_show.md` | Print all remotes |
| `rclone_config_string.md` | Show config value as a string |
| `rclone_config_touch.md` | Ensure config file exists |
| `rclone_config_update.md` | Update an existing remote |
| `rclone_config_userinfo.md` | Show info about logged-in user |
| `rclone_convmv.md` | Rename files encoding fixing |
| `rclone_copy.md` | Copy files from source to dest |
| `rclone_copyto.md` | Copy files to specific dest file/dir |
| `rclone_copyurl.md` | Copy URL content to dest |
| `rclone_cryptcheck.md` | Check a crypt remote is consistent |
| `rclone_cryptdecode.md` | Decode crypt-encoded filenames |
| `rclone_dedupe.md` | Interactively deduplicate files |
| `rclone_delete.md` | Delete files matching filter |
| `rclone_deletefile.md` | Delete a single file |
| `rclone_gitannex.md` | Git-annex external special remote |
| `rclone_gui.md` | Launch web GUI |
| `rclone_hashsum.md` | Produce hashsum file |
| `rclone_link.md` | Generate public link for a file |
| `rclone_listremotes.md` | List all configured remotes |
| `rclone_ls.md` | List objects in path with size and path |
| `rclone_lsd.md` | List directories in path |
| `rclone_lsf.md` | List objects in formatted output |
| `rclone_lsjson.md` | List objects as JSON |
| `rclone_lsl.md` | List objects with modification time |
| `rclone_md5sum.md` | Produce MD5 hashsum file |
| `rclone_mkdir.md` | Create a directory |
| `rclone_mount.md` | Mount a remote as a filesystem |
| `rclone_move.md` | Move files from source to dest |
| `rclone_moveto.md` | Move files to specific dest |
| `rclone_ncdu.md` | Explore storage usage with ncdu-style UI |
| `rclone_nfsmount.md` | Mount remote as NFS |
| `rclone_obscure.md` | Obscure a password for config |
| `rclone_purge.md` | Remove a path and all its contents |
| `rclone_rc.md` | Run a command against rcd |
| `rclone_rcat.md` | Cat files from stdin to remote |
| `rclone_rcd.md` | Run rclone remote control daemon |
| `rclone_rmdir.md` | Remove an empty directory |
| `rclone_rmdirs.md` | Remove empty directories |
| `rclone_selfupdate.md` | Update the rclone binary |
| `rclone_serve.md` | Serve parent command |
| `rclone_serve_dlna.md` | Serve remote as DLNA media server |
| `rclone_serve_docker.md` | Serve remote as Docker volume plugin |
| `rclone_serve_ftp.md` | Serve remote as FTP server |
| `rclone_serve_http.md` | Serve remote as HTTP server |
| `rclone_serve_nfs.md` | Serve remote as NFS server |
| `rclone_serve_restic.md` | Serve remote as Restic REST server |
| `rclone_serve_s3.md` | Serve remote as S3 server |
| `rclone_serve_sftp.md` | Serve remote as SFTP server |
| `rclone_serve_webdav.md` | Serve remote as WebDAV server |
| `rclone_settier.md` | Set storage tier on objects |
| `rclone_sha1sum.md` | Produce SHA-1 hashsum file |
| `rclone_size.md` | Print total size and object count |
| `rclone_sync.md` | Sync source to dest (make identical) |
| `rclone_touch.md` | Create or update timestamp on files |
| `rclone_tree.md` | List contents in tree format |
| `rclone_version.md` | Show version number |
