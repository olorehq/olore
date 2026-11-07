# rclone Table of Contents

## Directory Map

```
contents/
├── *.md                  # Guides, filtering, bisync, rc API, flags, and one page per storage backend (84 files)
├── commands/             # CLI reference, one page per rclone command (100 files)
└── oracleobjectstorage/  # Oracle Object Storage mount tutorial (1 file)
```

## Key Entry Points

| Task | Start Here |
|------|------------|
| Install rclone | `contents/install.md` |
| Basic usage | `contents/docs.md` |
| Choose a backend / compare features | `contents/overview.md`, `contents/tiers.md` |
| Configure S3 | `contents/s3.md` |
| Include/exclude files | `contents/filtering.md` |
| Two-way sync | `contents/bisync.md` |
| Mount a remote | `contents/commands/rclone_mount.md` |
| Remote control API | `contents/rc.md` |
| Global flags | `contents/flags.md` |
| Troubleshooting | `contents/faq.md`, `contents/bugs.md` |

## Detailed Structure

### General guides and overlay remotes

| File | Description |
|------|-------------|
| `install.md` | Rclone Installation |
| `docs.md` | Rclone Usage |
| `overview.md` | Overview of cloud storage systems |
| `tiers.md` | A complete list of supported backends and their stability tiers. |
| `backends.md` | Index page listing all supported backends |
| `remote_setup.md` | Configuring rclone up on a remote / headless machine |
| `filtering.md` | Rclone filtering, includes and excludes |
| `flags.md` | Rclone Global Flags |
| `faq.md` | Rclone Frequently Asked Questions |
| `bugs.md` | Rclone Bugs and Limitations |
| `rc.md` | Remote controlling rclone with its API |
| `bisync.md` | Bidirectional cloud sync solution in rclone |
| `docker.md` | Docker Volume Plugin |
| `gui.md` | Web based Graphical User Interface |
| `alias.md` | Remote Aliases |
| `archive.md` | Archive Remote |
| `cache.md` | Configuration, authentication and options for the cache remote backend |
| `chunker.md` | Split-chunking overlay remote |
| `combine.md` | Combine several remotes into one |
| `compress.md` | Compression Remote |
| `crypt.md` | Encryption overlay remote |
| `hasher.md` | Better checksums for other remotes |
| `union.md` | Remote Unification |

### Storage backends

| File | Description |
|------|-------------|
| `amazonclouddrive.md` | Configuration, authentication and options for the Amazon Drive backend |
| `azureblob.md` | Configuration, authentication and options for the Microsoft Azure Blob Storage backend |
| `azurefiles.md` | Configuration, authentication and options for the Microsoft Azure Files Storage backend |
| `b2.md` | Backblaze B2 |
| `box.md` | Configuration, authentication and options for the Box backend |
| `cloudinary.md` | Configuration, authentication and options for the Cloudinary backend backend |
| `doi.md` | Configuration, authentication and options for the DOI backend |
| `dosya.md` | Configuration, authentication and options for the dosya.dev backend |
| `drime.md` | Configuration, authentication and options for the Drime backend |
| `drive.md` | Configuration, authentication and options for the Google drive backend |
| `dropbox.md` | Configuration, authentication and options for the Dropbox backend |
| `fichier.md` | Configuration, authentication and options for the 1Fichier backend |
| `filefabric.md` | Configuration, authentication and options for the the Enterprise File Fabric backend backend |
| `filelu.md` | Configuration, authentication and options for the FileLu backend |
| `filen.md` | Configuration, authentication and options for the Filen backend |
| `filescom.md` | Configuration, authentication and options for the Files.com backend |
| `ftp.md` | Configuration, authentication and options for the FTP backend backend |
| `gofile.md` | Configuration, authentication and options for the Gofile backend |
| `googlecloudstorage.md` | Configuration, authentication and options for the Google Cloud Storage backend |
| `googlephotos.md` | Configuration, authentication and options for the Google Photos backend |
| `hdfs.md` | Remote for Hadoop Distributed Filesystem |
| `hidrive.md` | Configuration, authentication and options for the HiDrive backend |
| `http.md` | Read only remote for HTTP servers |
| `huaweidrive.md` | Configuration, authentication and options for the Huawei Drive backend |
| `iclouddrive.md` | Configuration, authentication and options for the iCloud Drive and Photos backend |
| `imagekit.md` | Configuration, authentication and options for the ImageKit backend. backend |
| `internetarchive.md` | Configuration, authentication and options for the Internet Archive backend |
| `internxt.md` | Configuration, authentication and options for the Internxt Drive backend |
| `jottacloud.md` | Configuration, authentication and options for the Jottacloud backend |
| `kdrive.md` | Configuration, authentication and options for the kDrive backend |
| `koofr.md` | Configuration, authentication and options for the Koofr backend |
| `linkbox.md` | Configuration, authentication and options for the Linkbox backend |
| `local.md` | Configuration, authentication and options for the the local filesystem backend |
| `mailru.md` | Mail.ru Cloud |
| `mega.md` | Configuration, authentication and options for the Mega backend |
| `memory.md` | Configuration, authentication and options for the Memory backend backend |
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
| `s3.md` | Configuration, authentication and options for the Amazon S3 backend |
| `seafile.md` | Seafile |
| `sftp.md` | SFTP |
| `shade.md` | Shade Backend Docs |
| `sharefile.md` | Configuration, authentication and options for the Citrix ShareFile backend |
| `sia.md` | Remote for Sia Decentralized Cloud |
| `smb.md` | Configuration, authentication and options for the SMB backend backend |
| `storj.md` | Configuration, authentication and options for the Storj backend |
| `sugarsync.md` | Configuration, authentication and options for the SugarSync backend |
| `swift.md` | Swift |
| `ulozto.md` | Configuration, authentication and options for the Uloz.to backend |
| `webdav.md` | Configuration, authentication and options for the WebDAV backend |
| `yandex.md` | Yandex Disk |
| `zoho.md` | Zoho WorkDrive |

### oracleobjectstorage/ (1 file)

| File | Description |
|------|-------------|
| `oracleobjectstorage/tutorial_mount.md` | Oracle Object Storage mounting tutorial |

### commands/ (100 files)

| File | Description |
|------|-------------|
| `commands/rclone_about.md` | Get quota information from the remote. |
| `commands/rclone_archive_create.md` | Archive source file(s) to destination. |
| `commands/rclone_archive_extract.md` | Extract archives from source to destination. |
| `commands/rclone_archive_list.md` | List archive contents from source. |
| `commands/rclone_archive.md` | Perform an action on an archive. |
| `commands/rclone_authorize.md` | Remote authorization. |
| `commands/rclone_backend.md` | Run a backend-specific command. |
| `commands/rclone_bisync.md` | Perform bidirectional synchronization between two paths. |
| `commands/rclone_cat.md` | Concatenates any files and sends them to stdout. |
| `commands/rclone_check.md` | Checks the files in the source and destination match. |
| `commands/rclone_checksum.md` | Checks the files in the destination against a SUM file. |
| `commands/rclone_cleanup.md` | Clean up the remote if possible. |
| `commands/rclone_completion_bash.md` | Output bash completion script for rclone. |
| `commands/rclone_completion_fish.md` | Output fish completion script for rclone. |
| `commands/rclone_completion_powershell.md` | Output powershell completion script for rclone. |
| `commands/rclone_completion_zsh.md` | Output zsh completion script for rclone. |
| `commands/rclone_completion.md` | Output completion script for a given shell. |
| `commands/rclone_config_create.md` | Create a new remote with name, type and options. |
| `commands/rclone_config_delete.md` | Delete an existing remote. |
| `commands/rclone_config_disconnect.md` | Disconnects user from remote |
| `commands/rclone_config_dump.md` | Dump the config file as JSON. |
| `commands/rclone_config_edit.md` | Enter an interactive configuration session. |
| `commands/rclone_config_encryption_check.md` | Check that the config file is encrypted |
| `commands/rclone_config_encryption_remove.md` | Remove the config file encryption password |
| `commands/rclone_config_encryption_set.md` | Set or change the config file encryption password |
| `commands/rclone_config_encryption.md` | set, remove and check the encryption for the config file |
| `commands/rclone_config_file.md` | Show path of configuration file in use. |
| `commands/rclone_config_password.md` | Update password in an existing remote. |
| `commands/rclone_config_paths.md` | Show paths used for configuration, cache, temp etc. |
| `commands/rclone_config_providers.md` | List in JSON format all the providers and options. |
| `commands/rclone_config_reconnect.md` | Re-authenticates user with remote. |
| `commands/rclone_config_redacted.md` | Print redacted (decrypted) config file, or the redacted config for a single remote. |
| `commands/rclone_config_show.md` | Print (decrypted) config file, or the config for a single remote. |
| `commands/rclone_config_string.md` | Print connection string for a single remote. |
| `commands/rclone_config_touch.md` | Ensure configuration file exists. |
| `commands/rclone_config_unset.md` | Unset options in an existing remote. |
| `commands/rclone_config_update.md` | Update options in an existing remote. |
| `commands/rclone_config_userinfo.md` | Prints info about logged in user of remote. |
| `commands/rclone_config.md` | Enter an interactive configuration session. |
| `commands/rclone_convmv.md` | Convert file and directory names in place. |
| `commands/rclone_copy.md` | Copy files from source to dest, skipping identical files. |
| `commands/rclone_copyto.md` | Copy files from source to dest, skipping identical files. |
| `commands/rclone_copyurl.md` | Copy the contents of the URL supplied content to dest:path. |
| `commands/rclone_cryptcheck.md` | Cryptcheck checks the integrity of an encrypted remote. |
| `commands/rclone_cryptdecode.md` | Cryptdecode returns unencrypted file names. |
| `commands/rclone_dedupe.md` | Interactively find duplicate filenames and delete/rename them. |
| `commands/rclone_delete.md` | Remove the files in path. |
| `commands/rclone_deletefile.md` | Remove a single file from remote. |
| `commands/rclone_gitannex.md` | Speaks with git-annex over stdin/stdout. |
| `commands/rclone_gui.md` | Open the web based GUI. |
| `commands/rclone_hashsum.md` | Produces a hashsum file for all the objects in the path. |
| `commands/rclone_index.md` | Write static directory listings into a remote. |
| `commands/rclone_link.md` | Generate public link to file/folder. |
| `commands/rclone_listremotes.md` | List all the remotes in the config file and defined in environment variables. |
| `commands/rclone_ls.md` | List the objects in the path with size and path. |
| `commands/rclone_lsd.md` | List all directories/containers/buckets in the path. |
| `commands/rclone_lsf.md` | List directories and objects in remote:path formatted for parsing. |
| `commands/rclone_lsjson.md` | List directories and objects in the path in JSON format. |
| `commands/rclone_lsl.md` | List the objects in path with modification time, size and path. |
| `commands/rclone_md5sum.md` | Produces an md5sum file for all the objects in the path. |
| `commands/rclone_mkdir.md` | Make the path if it doesn't already exist. |
| `commands/rclone_mount.md` | Mount the remote as file system on a mountpoint. |
| `commands/rclone_move.md` | Move files from source to dest. |
| `commands/rclone_moveto.md` | Move file or directory from source to dest. |
| `commands/rclone_ncdu.md` | Explore a remote with a text based user interface. |
| `commands/rclone_nfsmount.md` | Mount the remote as file system on a mountpoint. |
| `commands/rclone_obscure.md` | Obscure password for use in the rclone config file. |
| `commands/rclone_purge.md` | Remove the path and all of its contents. |
| `commands/rclone_rc.md` | Run a command against a running rclone. |
| `commands/rclone_rcat.md` | Copies standard input to file on remote. |
| `commands/rclone_rcd.md` | Run rclone listening to remote control commands only. |
| `commands/rclone_rmdir.md` | Remove the empty directory at path. |
| `commands/rclone_rmdirs.md` | Remove empty directories under the path. |
| `commands/rclone_selfupdate.md` | Update the rclone binary. |
| `commands/rclone_serve_dlna.md` | Serve remote:path over DLNA |
| `commands/rclone_serve_docker.md` | Serve any remote on docker's volume plugin API. |
| `commands/rclone_serve_ftp.md` | Serve remote:path over FTP. |
| `commands/rclone_serve_http.md` | Serve the remote over HTTP. |
| `commands/rclone_serve_nfs.md` | Serve the remote as an NFS mount |
| `commands/rclone_serve_restic.md` | Serve the remote for restic's REST API. |
| `commands/rclone_serve_s3.md` | Serve remote:path over s3. |
| `commands/rclone_serve_sftp.md` | Serve the remote over SFTP. |
| `commands/rclone_serve_webdav.md` | Serve remote:path over WebDAV. |
| `commands/rclone_serve.md` | Serve a remote over a protocol. |
| `commands/rclone_settier.md` | Changes storage class/tier of objects in remote. |
| `commands/rclone_sha1sum.md` | Produces an sha1sum file for all the objects in the path. |
| `commands/rclone_size.md` | Prints the total size and number of objects in remote:path. |
| `commands/rclone_sync.md` | Make source and dest identical, modifying destination only. |
| `commands/rclone_test_changenotify.md` | Log any change notify requests for the remote passed in. |
| `commands/rclone_test_histogram.md` | Makes a histogram of file name characters. |
| `commands/rclone_test_info.md` | Discovers file name or other limitations for paths. |
| `commands/rclone_test_makefile.md` | Make files with random contents of the size given |
| `commands/rclone_test_makefiles.md` | Make a random file hierarchy in a directory |
| `commands/rclone_test_memory.md` | Load all the objects at remote:path into memory and report memory stats. |
| `commands/rclone_test_speed.md` | Run a speed test to the remote |
| `commands/rclone_test.md` | Run a test command |
| `commands/rclone_touch.md` | Create new file or change file modification time. |
| `commands/rclone_tree.md` | List the contents of the remote in a tree like fashion. |
| `commands/rclone_version.md` | Show the version number. |
| `commands/rclone.md` | Show help for rclone commands, flags and backends. |
