# rclone Table of Contents

## Directory Map

```
contents/
├── (root)              # Backend docs, core concepts, guides (80 files)
│   ├── install.md      # Installation
│   ├── docs.md         # Usage overview
│   ├── overview.md     # Backend feature comparison
│   ├── filtering.md    # Filtering rules
│   ├── flags.md        # Global flags reference
│   ├── bisync.md       # Bidirectional sync
│   ├── rc.md           # Remote control API
│   ├── gui.md          # Web GUI
│   ├── faq.md          # FAQ
│   ├── bugs.md         # Known limitations
│   └── ...cloud storage backends (S3, Drive, Dropbox, etc.)
├── commands/           # CLI command reference (99 files)
│   ├── rclone.md       # Main command
│   ├── rclone_copy.md
│   ├── rclone_sync.md
│   ├── rclone_move.md
│   ├── rclone_config*.md
│   ├── rclone_serve_*.md
│   └── ...
└── oracleobjectstorage/ # Oracle Object Storage extras (1 file)
    └── tutorial_mount.md
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Install rclone | `contents/install.md` |
| Basic usage / CLI syntax | `contents/docs.md` |
| Backend feature comparison | `contents/overview.md` |
| Configure a remote | `contents/remote_setup.md` |
| CLI command reference | `contents/commands/rclone.md` |
| Copy files | `contents/commands/rclone_copy.md` |
| Sync files | `contents/commands/rclone_sync.md` |
| Mount as filesystem | `contents/commands/rclone_mount.md` |
| Serve files (HTTP/S3/SFTP/etc.) | `contents/commands/rclone_serve.md` |
| Bisync (two-way sync) | `contents/bisync.md` |
| Filtering rules | `contents/filtering.md` |
| Global flags | `contents/flags.md` |
| Remote control API | `contents/rc.md` |
| S3-compatible storage | `contents/s3.md` |
| Google Drive | `contents/drive.md` |
| Dropbox | `contents/dropbox.md` |
| Azure Blob Storage | `contents/azureblob.md` |
| Encryption | `contents/crypt.md` |
| FAQ | `contents/faq.md` |
| Known bugs/limitations | `contents/bugs.md` |

## Detailed Structure

### Root — Core docs & guides (80 files)

| File | Description |
|------|-------------|
| `install.md` | Installation guide (all platforms) |
| `docs.md` | Usage overview, CLI syntax, configuration basics |
| `overview.md` | Feature matrix across all cloud storage backends |
| `filtering.md` | File filtering with include/exclude rules |
| `flags.md` | Global flags reference |
| `remote_setup.md` | Configure rclone on headless/remote machines |
| `faq.md` | Frequently asked questions |
| `bugs.md` | Known bugs and limitations |
| `bisync.md` | Bidirectional sync documentation |
| `rc.md` | Remote control (rc) API reference |
| `gui.md` | Web GUI usage |
| `docker.md` | Docker integration |
| `archive.md` | Archive (create/extract/list) support |

### Root — Cloud Storage Backends

| File | Backend |
|------|---------|
| `s3.md` | Amazon S3 and S3-compatible storage |
| `drive.md` | Google Drive |
| `dropbox.md` | Dropbox |
| `azureblob.md` | Azure Blob Storage |
| `azurefiles.md` | Azure Files |
| `b2.md` | Backblaze B2 |
| `box.md` | Box |
| `swift.md` | OpenStack Swift / Rackspace Cloud Files |
| `googlecloudstorage.md` | Google Cloud Storage |
| `googlephotos.md` | Google Photos |
| `onedrive.md` | Microsoft OneDrive |
| `sftp.md` | SFTP |
| `ftp.md` | FTP |
| `webdav.md` | WebDAV |
| `smb.md` | SMB / CIFS |
| `local.md` | Local filesystem |
| `crypt.md` | Encryption remote |
| `cache.md` | Cache remote |
| `chunker.md` | Chunker (splits large files) |
| `compress.md` | Compress remote |
| `union.md` | Union remote (merge multiple remotes) |
| `combine.md` | Combine remote |
| `alias.md` | Alias remote |
| `hasher.md` | Hasher remote |
| `memory.md` | In-memory remote |
| `http.md` | HTTP/HTTPS remote (read-only) |
| `mega.mega.md` | MEGA |
| `pcloud.md` | pCloud |
| `storj.md` | Storj (Tardigrade) |
| `sia.md` | Sia decentralised storage |
| `hdfs.md` | Hadoop HDFS |
| `seafile.md` | Seafile |
| `jottacloud.md` | Jottacloud |
| `hidrive.md` | HiDrive |
| `koofr.md` | Koofr |
| `mailru.md` | Mail.ru Cloud |
| `yandex.md` | Yandex Disk |
| `putio.md` | Put.io |
| `pikpak.md` | PikPak |
| `protondrive.md` | Proton Drive |
| `iclouddrive.md` | iCloud Drive |
| `internetarchive.md` | Internet Archive |
| `oracleobjectstorage/tutorial_mount.md` | Oracle Object Storage mount tutorial |
| `doi.md` | DOI (Digital Object Identifiers) read-only remote |
| `netstorage.md` | Akamai NetStorage |
| `premiumizeme.md` | Premiumize.me |
| `qingstor.md` | QingStor Object Storage |
| `quatrix.md` | Quatrix |
| `imagekit.md` | ImageKit |
| `cloudinary.md` | Cloudinary |
| `filefabric.md` | Storage Made Easy File Fabric |
| `filelu.md` | FileLu |
| `filen.md` | Filen |
| `filescom.md` | Files.com |
| `fichier.md` | 1Fichier |
| `gofile.md` | GoFile |
| `linkbox.md` | Linkbox |
| `drime.md` | Drime |
| `shade.md` | Shade |
| `sharefile.md` | Citrix ShareFile |
| `sugarsync.md` | SugarSync |
| `opendrive.md` | OpenDrive |
| `amazonclouddrive.md` | Amazon Cloud Drive (defunct) |
| `ulozto.md` | Úložto |
| `huaweidrive.md` | Huawei Drive |
| `internxt.md` | Internxt |
| `pixeldrain.md` | Pixeldrain |
| `zoho.md` | Zoho WorkDrive |

### commands/ — CLI Command Reference (99 files)

| File | Command |
|------|---------|
| `rclone.md` | rclone (main command + global options) |
| `rclone_copy.md` | Copy files from source to destination |
| `rclone_sync.md` | Sync source to destination |
| `rclone_move.md` | Move files from source to destination |
| `rclone_moveto.md` | Move file or directory to a destination |
| `rclone_copyto.md` | Copy files to a destination with rename |
| `rclone_copyurl.md` | Copy URL content to destination |
| `rclone_delete.md` | Remove files in a path |
| `rclone_deletefile.md` | Remove a single file |
| `rclone_purge.md` | Remove path and all contents |
| `rclone_mkdir.md` | Make directory |
| `rclone_rmdir.md` | Remove directory |
| `rclone_rmdirs.md` | Remove empty directories |
| `rclone_ls.md` | List objects and their sizes |
| `rclone_lsd.md` | List directories only |
| `rclone_lsl.md` | List with modification time |
| `rclone_lsf.md` | List files/dirs in easy-to-parse format |
| `rclone_lsjson.md` | List in JSON format |
| `rclone_tree.md` | List contents in tree format |
| `rclone_ncdu.md` | Explore storage usage with ncdu TUI |
| `rclone_check.md` | Check files in source and destination match |
| `rclone_checksum.md` | Check files against a checksum file |
| `rclone_cryptcheck.md` | Check integrity of encrypted remote |
| `rclone_cryptdecode.md` | Decode encrypted filenames |
| `rclone_dedupe.md` | Interactively find and remove duplicates |
| `rclone_about.md` | Get quota information |
| `rclone_size.md` | Print total size and object count |
| `rclone_hashsum.md` | Produce a hash file from remote |
| `rclone_md5sum.md` | MD5 checksums |
| `rclone_sha1sum.md` | SHA1 checksums |
| `rclone_cat.md` | Concatenate files and send to stdout |
| `rclone_rcat.md` | Copy standard input to file on remote |
| `rclone_touch.md` | Create or update timestamps of files |
| `rclone_link.md` | Generate public link to file/folder |
| `rclone_settier.md` | Set storage tier for objects |
| `rclone_convmv.md` | Rename files to conform with Unicode NFC/NFD |
| `rclone_bisync.md` | Bidirectional sync |
| `rclone_mount.md` | Mount remote as filesystem |
| `rclone_nfsmount.md` | Mount remote as NFS share |
| `rclone_serve.md` | Serve remote over a protocol |
| `rclone_serve_http.md` | Serve over HTTP |
| `rclone_serve_ftp.md` | Serve over FTP |
| `rclone_serve_sftp.md` | Serve over SFTP |
| `rclone_serve_webdav.md` | Serve over WebDAV |
| `rclone_serve_s3.md` | Serve as S3-compatible endpoint |
| `rclone_serve_dlna.md` | Serve over DLNA/UPnP AV |
| `rclone_serve_docker.md` | Docker volume plugin |
| `rclone_serve_nfs.md` | Serve as NFS server |
| `rclone_serve_restic.md` | Serve as Restic REST server |
| `rclone_rc.md` | Run a command against running rclone |
| `rclone_rcd.md` | Start rclone remote control daemon |
| `rclone_backend.md` | Run backend-specific commands |
| `rclone_listremotes.md` | List configured remotes |
| `rclone_config.md` | Enter interactive configuration session |
| `rclone_config_create.md` | Create a new remote |
| `rclone_config_update.md` | Update existing remote |
| `rclone_config_delete.md` | Delete a remote |
| `rclone_config_show.md` | Print configuration |
| `rclone_config_dump.md` | Dump configuration as JSON |
| `rclone_config_edit.md` | Enter configuration editor |
| `rclone_config_file.md` | Show config file location |
| `rclone_config_paths.md` | Show config, cache, temp paths |
| `rclone_config_reconnect.md` | Re-authenticate existing remote |
| `rclone_config_disconnect.md` | Disconnect a remote (remove OAuth token) |
| `rclone_config_userinfo.md` | Print remote user info |
| `rclone_config_providers.md` | List available providers |
| `rclone_config_string.md` | Show value of config string |
| `rclone_config_touch.md` | Ensure config file exists |
| `rclone_config_redacted.md` | Print redacted config |
| `rclone_config_password.md` | Update password in existing remote |
| `rclone_config_encryption.md` | Config encryption commands |
| `rclone_config_encryption_set.md` | Set config encryption |
| `rclone_config_encryption_remove.md` | Remove config encryption |
| `rclone_config_encryption_check.md` | Check config encryption |
| `rclone_obscure.md` | Obscure a password for use in config |
| `rclone_authorize.md` | Remote authorization |
| `rclone_selfupdate.md` | Update rclone to latest release |
| `rclone_version.md` | Show version information |
| `rclone_gendocs.md` | Output docs in Markdown for web |
| `rclone_gitannex.md` | Git Annex special remote |
| `rclone_gui.md` | Launch web GUI |
| `rclone_completion.md` | Shell completion (overview) |
| `rclone_completion_bash.md` | Bash completion |
| `rclone_completion_fish.md` | Fish completion |
| `rclone_completion_zsh.md` | Zsh completion |
| `rclone_completion_powershell.md` | PowerShell completion |
| `rclone_archive.md` | Archive commands |
| `rclone_archive_create.md` | Create archive |
| `rclone_archive_extract.md` | Extract archive |
| `rclone_archive_list.md` | List archive contents |
| `rclone_test.md` | Test commands |
| `rclone_test_changenotify.md` | Test change notify |
| `rclone_test_histogram.md` | Test histogram |
| `rclone_test_info.md` | Show backend info |
| `rclone_test_makefile.md` | Make test file |
| `rclone_test_makefiles.md` | Make test files |
| `rclone_test_memory.md` | Memory test |
| `rclone_test_speed.md` | Speed test |

### oracleobjectstorage/ (1 file)

| File | Description |
|------|-------------|
| `tutorial_mount.md` | Mounting Oracle Object Storage with rclone |
