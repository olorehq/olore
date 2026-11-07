# WSL

> For the complete documentation index, see [llms.txt](https://learn.chatgpt.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to the page URL.

When you use WSL2, Codex runs inside the Linux environment instead of using the
native [Windows sandbox](https://learn.chatgpt.com/docs/windows/windows-sandbox). Choose WSL2 when you need Linux-native
tooling, your repositories and developer workflow already live in WSL2, or
the available Windows sandbox implementations don't meet your needs.

WSL1 was supported through Codex `0.114`. Starting in Codex `0.115`, the Linux
sandbox moved to `bubblewrap`, so WSL1 is no longer supported.

## Launch VS Code from inside WSL

For step-by-step instructions, see the [official VS Code WSL tutorial](https://code.visualstudio.com/docs/remote/wsl-tutorial).

### Prerequisites

- Windows with WSL installed. To install WSL, open PowerShell as an administrator, then run `wsl --install` (Ubuntu is a common choice).
- VS Code with the [WSL extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) installed.

### Open VS Code from a WSL terminal

```bash
# From your WSL shell
cd ~/code/your-project
code .
```

This opens a WSL remote window, installs the VS Code Server if needed, and ensures integrated terminals run in Linux.

### Confirm you're connected to WSL

- Look for the green status bar that shows `WSL: <distro>`.
- Integrated terminals should display Linux paths (such as `/home/...`) instead of `C:\`.
- You can verify with:

```bash
  echo $WSL_DISTRO_NAME
```

  This prints your distribution name.

If you don't see "WSL: …" in the status bar, press `Ctrl+Shift+P`, pick `WSL:
  Reopen Folder in WSL`, and keep your repository under `/home/...` (not `C:\`)
  for best performance.

If the Windows app or project picker does not show your WSL repository, type
  `\\wsl$` into the file picker or Explorer, then navigate to your
  distribution's home directory.

## Use Codex CLI with WSL

Run these commands from an elevated PowerShell or Windows Terminal:

```powershell
# Install default Linux distribution (like Ubuntu)
wsl --install

# Start a shell inside Windows Subsystem for Linux
wsl
```

Then run these commands from your WSL shell:

```bash
# Install and run Codex in WSL
curl -fsSL https://chatgpt.com/codex/install.sh | sh
codex
```

## Work on code inside WSL

- Working in Windows-mounted paths like `/mnt/c/...` can be slower than working in Windows-native paths. Keep your repositories under your Linux home directory (like `~/code/my-app`) for faster I/O and fewer symlink and permission issues:
```bash
  mkdir -p ~/code && cd ~/code
  git clone https://github.com/your/repo.git
  cd repo
```
- If you need Windows access to files, they're under `\\wsl$\Ubuntu\home\&lt;user&gt;` in Explorer.

## Troubleshooting and FAQ



### Large repositories feel slow in WSL



- Make sure you're not working under `/mnt/c`. Move the repository to WSL (for example, `~/code/...`).
- Increase memory and CPU for WSL if needed; update WSL to the latest version:
```powershell
  wsl --update
  wsl --shutdown
```







### VS Code in WSL cannot find codex



Verify the binary exists and is on `PATH` inside WSL:

```bash
which codex || echo "codex not found"
```

If the binary isn't found, follow the [Codex CLI setup instructions](#use-codex-cli-with-wsl).