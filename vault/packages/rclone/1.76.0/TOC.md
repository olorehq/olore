# rclone Table of Contents

## Directory Map

```
contents/
├── (root)               # Core docs, overlay backends and storage backend docs (83 files)
│   ├── core docs        # Install, usage, filtering, flags, rc API, bisync, FAQ
│   ├── overlay backends # crypt, union, cache, chunker, combine, alias, ...
│   └── storage backends # s3, drive, onedrive, azureblob, sftp, ... 
├── commands/            # CLI command reference, one page per subcommand (86 files)
└── oracleobjectstorage/ # Oracle Object Storage mount tutorial (1 file)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Install rclone | `contents/install.md` |
| First-time usage and config | `contents/docs.md` |
| Backend feature overview | `contents/overview.md` |
| Filtering files | `contents/filtering.md` |
| Global flags | `contents/flags.md` |
| S3 / S3-compatible storage | `contents/s3.md` |
| Google Drive | `contents/drive.md` |
| Sync files | `contents/commands/rclone_sync.md` |
| Mount a remote | `contents/commands/rclone_mount.md` |
| Serve over HTTP/FTP/S3/WebDAV/SFTP | `contents/commands/rclone_serve.md` |
| Remote control API | `contents/rc.md` |
| Encryption | `contents/crypt.md` |
| Bidirectional sync | `contents/bisync.md` |
| Troubleshooting | `contents/faq.md` |

## Detailed Structure


### Core docs (root) (14 files)

| File | Description |
|------|-------------|
| `bisync.md` | Bisync: bidirectional sync between two paths, usage, flags, limitations and troubleshooting |
| `bugs.md` | Known bugs and limitations of rclone |
| `docker.md` | Docker volume plugin: installing and using rclone to back Docker volumes |
| `docs.md` | Main usage guide: configuration, syntax, path rules, subcommands and key options |
| `faq.md` | Frequently asked questions and answers about rclone behavior |
| `filtering.md` | Include/exclude filter rules, patterns, and filter flags |
| `flags.md` | Reference list of global flags available to every rclone command |
| `gui.md` | The official web-based graphical user interface and how to start it |
| `install.md` | Installing rclone on all platforms, package managers, Docker and from source |
| `local.md` | Local filesystem backend: paths, options and platform-specific notes |
| `overview.md` | Overview and feature matrix of supported cloud storage systems (hashes, modtimes, features) |
| `rc.md` | Remote control HTTP API: starting the rc server, commands, authentication and options |
| `remote_setup.md` | Configuring rclone with oauth2 on a remote or headless machine |
| `tiers.md` | Backend support tiers and stability ratings of all supported backends |

### Overlay and utility backends (root) (10 files)

| File | Description |
|------|-------------|
| `alias.md` | Alias backend providing a new name for another remote |
| `archive.md` | Archive backend for read-only access to the contents of archive files (zip, tar, etc.) |
| `cache.md` | Cache backend wrapping another remote to cache file structure and data |
| `chunker.md` | Chunker overlay backend that transparently splits large files into chunks |
| `combine.md` | Combine backend joining several remotes into a single directory tree |
| `compress.md` | Experimental compress overlay backend for transparent compression |
| `crypt.md` | Crypt overlay backend: encryption setup, file name encryption and options |
| `hasher.md` | Hasher overlay backend providing additional checksums for other remotes |
| `memory.md` | In-RAM memory backend that does not persist data |
| `union.md` | Union backend joining several remotes into a single unified view |

### Storage backends (root) (59 files)

| File | Description |
|------|-------------|
| `amazonclouddrive.md` | Configuration, authentication and options for the Amazon Drive backend |
| `azureblob.md` | Configuration, authentication and options for the Microsoft Azure Blob Storage backend |
| `azurefiles.md` | Configuration, authentication and options for the Microsoft Azure Files Storage backend |
| `b2.md` | Configuration, authentication and options for the B2 backend |
| `box.md` | Configuration, authentication and options for the Box backend |
| `cloudinary.md` | Configuration, authentication and options for the Cloudinary backend |
| `doi.md` | Read-only DOI backend for reading files from digital object identifier datasets |
| `dosya.md` | Configuration, authentication and options for the dosya.dev backend |
| `drime.md` | Configuration, authentication and options for the Drime backend |
| `drive.md` | Configuration, authentication and options for the Google drive backend |
| `dropbox.md` | Configuration, authentication and options for the Dropbox backend |
| `fichier.md` | Configuration, authentication and options for the 1Fichier backend |
| `filefabric.md` | Configuration, authentication and options for the the Enterprise File Fabric backend |
| `filelu.md` | Configuration, authentication and options for the FileLu backend |
| `filen.md` | Configuration, authentication and options for the Filen backend |
| `filescom.md` | Configuration, authentication and options for the Files.com backend |
| `ftp.md` | Configuration, authentication and options for the FTP backend |
| `gofile.md` | Configuration, authentication and options for the Gofile backend |
| `googlecloudstorage.md` | Configuration, authentication and options for the Google Cloud Storage backend |
| `googlephotos.md` | Configuration, authentication and options for the Google Photos backend |
| `hdfs.md` | Configuration, authentication and options for the Hadoop HDFS backend |
| `hidrive.md` | Configuration, authentication and options for the HiDrive backend |
| `http.md` | Read-only HTTP backend for reading files from web servers |
| `huaweidrive.md` | Configuration, authentication and options for the Huawei Drive backend |
| `iclouddrive.md` | Configuration, authentication and options for the iCloud Drive and Photos backend |
| `imagekit.md` | Configuration, authentication and options for the ImageKit backend backend |
| `internetarchive.md` | Configuration, authentication and options for the Internet Archive backend |
| `internxt.md` | Configuration, authentication and options for the Internxt Drive backend |
| `jottacloud.md` | Configuration, authentication and options for the Jottacloud backend |
| `kdrive.md` | Configuration, authentication and options for the kDrive backend |
| `koofr.md` | Configuration, authentication and options for the Koofr backend |
| `linkbox.md` | Configuration, authentication and options for the Linkbox backend |
| `mailru.md` | Configuration, authentication and options for the Mailru backend |
| `mega.md` | Configuration, authentication and options for the Mega backend |
| `netstorage.md` | Configuration, authentication and options for the Akamai NetStorage backend |
| `onedrive.md` | Configuration, authentication and options for the Microsoft OneDrive backend |
| `opendrive.md` | Configuration, authentication and options for the OpenDrive backend |
| `pcloud.md` | Configuration, authentication and options for the pCloud backend |
| `pikpak.md` | Configuration, authentication and options for the PikPak backend |
| `pixeldrain.md` | Configuration, authentication and options for the Pixeldrain backend |
| `premiumizeme.md` | Configuration, authentication and options for the premiumize.me backend |
| `protondrive.md` | Configuration, authentication and options for the Proton Drive backend |
| `putio.md` | Configuration, authentication and options for the put.io backend |
| `qingstor.md` | Configuration, authentication and options for the QingStor Object Storage backend |
| `quatrix.md` | Configuration, authentication and options for the Quatrix backend |
| `s3.md` | Configuration, authentication and options for the Amazon S3 backend and S3-compatible providers |
| `seafile.md` | Configuration, authentication and options for the Seafile backend |
| `sftp.md` | Configuration, authentication and options for the SFTP backend |
| `shade.md` | Configuration, authentication and options for the Shade backend |
| `sharefile.md` | Configuration, authentication and options for the Citrix ShareFile backend |
| `sia.md` | Configuration, authentication and options for the Sia backend |
| `smb.md` | Configuration, authentication and options for the SMB backend |
| `storj.md` | Configuration, authentication and options for the Storj backend |
| `sugarsync.md` | Configuration, authentication and options for the SugarSync backend |
| `swift.md` | Configuration, authentication and options for the Swift backend |
| `ulozto.md` | Configuration, authentication and options for the Uloz.to backend |
| `webdav.md` | Configuration, authentication and options for the WebDAV backend |
| `yandex.md` | Configuration, authentication and options for the Yandex backend |
| `zoho.md` | Configuration, authentication and options for the Zoho backend |

### commands/ (86 files)

| File | Description |
|------|-------------|
| `commands/rclone.md` | Show help for rclone commands, flags and backends |
| `commands/rclone_about.md` | Get quota information from the remote |
| `commands/rclone_archive.md` | Perform an action on an archive |
| `commands/rclone_archive_create.md` | Archive source file(s) to destination |
| `commands/rclone_archive_extract.md` | Extract archives from source to destination |
| `commands/rclone_archive_list.md` | List archive contents from source |
| `commands/rclone_authorize.md` | Remote authorization |
| `commands/rclone_backend.md` | Run a backend-specific command |
| `commands/rclone_bisync.md` | Perform bidirectional synchronization between two paths |
| `commands/rclone_cat.md` | Concatenates any files and sends them to stdout |
| `commands/rclone_check.md` | Checks the files in the source and destination match |
| `commands/rclone_checksum.md` | Checks the files in the destination against a SUM file |
| `commands/rclone_cleanup.md` | Clean up the remote if possible |
| `commands/rclone_config.md` | Enter an interactive configuration session |
| `commands/rclone_config_create.md` | Create a new remote with name, type and options |
| `commands/rclone_config_delete.md` | Delete an existing remote |
| `commands/rclone_config_disconnect.md` | Disconnects user from remote |
| `commands/rclone_config_dump.md` | Dump the config file as JSON |
| `commands/rclone_config_edit.md` | Enter an interactive configuration session |
| `commands/rclone_config_encryption.md` | set, remove and check the encryption for the config file |
| `commands/rclone_config_encryption_check.md` | Check that the config file is encrypted |
| `commands/rclone_config_encryption_remove.md` | Remove the config file encryption password |
| `commands/rclone_config_encryption_set.md` | Set or change the config file encryption password |
| `commands/rclone_config_file.md` | Show path of configuration file in use |
| `commands/rclone_config_password.md` | Update password in an existing remote |
| `commands/rclone_config_paths.md` | Show paths used for configuration, cache, temp etc |
| `commands/rclone_config_providers.md` | List in JSON format all the providers and options |
| `commands/rclone_config_reconnect.md` | Re-authenticates user with remote |
| `commands/rclone_config_redacted.md` | Print redacted (decrypted) config file, or the redacted config for a single remote |
| `commands/rclone_config_show.md` | Print (decrypted) config file, or the config for a single remote |
| `commands/rclone_config_string.md` | Print connection string for a single remote |
| `commands/rclone_config_touch.md` | Ensure configuration file exists |
| `commands/rclone_config_unset.md` | Unset options in an existing remote |
| `commands/rclone_config_update.md` | Update options in an existing remote |
| `commands/rclone_config_userinfo.md` | Prints info about logged in user of remote |
| `commands/rclone_convmv.md` | Convert file and directory names in place |
| `commands/rclone_copy.md` | Copy files from source to dest, skipping identical files |
| `commands/rclone_copyto.md` | Copy files from source to dest, skipping identical files |
| `commands/rclone_copyurl.md` | Copy the contents of the URL supplied content to dest:path |
| `commands/rclone_cryptcheck.md` | Cryptcheck checks the integrity of an encrypted remote |
| `commands/rclone_cryptdecode.md` | Cryptdecode returns unencrypted file names |
| `commands/rclone_dedupe.md` | Interactively find duplicate filenames and delete/rename them |
| `commands/rclone_delete.md` | Remove the files in path |
| `commands/rclone_deletefile.md` | Remove a single file from remote |
| `commands/rclone_gitannex.md` | Speaks with git-annex over stdin/stdout |
| `commands/rclone_gui.md` | Open the web based GUI |
| `commands/rclone_hashsum.md` | Produces a hashsum file for all the objects in the path |
| `commands/rclone_link.md` | Generate public link to file/folder |
| `commands/rclone_listremotes.md` | List all the remotes in the config file and defined in environment variables |
| `commands/rclone_ls.md` | List the objects in the path with size and path |
| `commands/rclone_lsd.md` | List all directories/containers/buckets in the path |
| `commands/rclone_lsf.md` | List directories and objects in remote:path formatted for parsing |
| `commands/rclone_lsjson.md` | List directories and objects in the path in JSON format |
| `commands/rclone_lsl.md` | List the objects in path with modification time, size and path |
| `commands/rclone_md5sum.md` | Produces an md5sum file for all the objects in the path |
| `commands/rclone_mkdir.md` | Make the path if it doesn't already exist |
| `commands/rclone_mount.md` | Mount the remote as file system on a mountpoint |
| `commands/rclone_move.md` | Move files from source to dest |
| `commands/rclone_moveto.md` | Move file or directory from source to dest |
| `commands/rclone_ncdu.md` | Explore a remote with a text based user interface |
| `commands/rclone_nfsmount.md` | Mount the remote as file system on a mountpoint |
| `commands/rclone_obscure.md` | Obscure password for use in the rclone config file |
| `commands/rclone_purge.md` | Remove the path and all of its contents |
| `commands/rclone_rc.md` | Run a command against a running rclone |
| `commands/rclone_rcat.md` | Copies standard input to file on remote |
| `commands/rclone_rcd.md` | Run rclone listening to remote control commands only |
| `commands/rclone_rmdir.md` | Remove the empty directory at path |
| `commands/rclone_rmdirs.md` | Remove empty directories under the path |
| `commands/rclone_selfupdate.md` | Update the rclone binary |
| `commands/rclone_serve.md` | Serve a remote over a protocol |
| `commands/rclone_serve_dlna.md` | Serve remote:path over DLNA |
| `commands/rclone_serve_docker.md` | Serve any remote on docker's volume plugin API |
| `commands/rclone_serve_ftp.md` | Serve remote:path over FTP |
| `commands/rclone_serve_http.md` | Serve the remote over HTTP |
| `commands/rclone_serve_nfs.md` | Serve the remote as an NFS mount |
| `commands/rclone_serve_restic.md` | Serve the remote for restic's REST API |
| `commands/rclone_serve_s3.md` | Serve remote:path over s3 |
| `commands/rclone_serve_sftp.md` | Serve the remote over SFTP |
| `commands/rclone_serve_webdav.md` | Serve remote:path over WebDAV |
| `commands/rclone_settier.md` | Changes storage class/tier of objects in remote |
| `commands/rclone_sha1sum.md` | Produces an sha1sum file for all the objects in the path |
| `commands/rclone_size.md` | Prints the total size and number of objects in remote:path |
| `commands/rclone_sync.md` | Make source and dest identical, modifying destination only |
| `commands/rclone_touch.md` | Create new file or change file modification time |
| `commands/rclone_tree.md` | List the contents of the remote in a tree like fashion |
| `commands/rclone_version.md` | Show the version number |

### oracleobjectstorage/ (1 files)

| File | Description |
|------|-------------|
| `oracleobjectstorage/tutorial_mount.md` | Tutorial for mounting Oracle Object Storage with rclone mount |
