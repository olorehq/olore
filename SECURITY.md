# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in olore, please report it responsibly.

**Do NOT open a public GitHub issue for security vulnerabilities.**

Instead, please email security concerns to the maintainers directly or use GitHub's private vulnerability reporting feature.

### What to Include

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### What to Expect

- Acknowledgment within 48 hours
- Status update within 7 days
- Coordinated disclosure after fix is available

## Security Model

olore is designed with security in mind:

1. **No code execution** - The CLI only moves and copies static documentation files
2. **Checksum verification** - All downloads are verified with SHA-256 hashes
3. **No secrets** - No credentials or API keys are stored or transmitted
4. **Symlinks only** - User files are never overwritten; only symlinks are created
5. **Source verification** - Packages are only built from official GitHub repositories

## Scope

The following are in scope for security reports:

- Path traversal vulnerabilities
- Symlink attacks
- Checksum bypass
- Arbitrary file write/overwrite
- Command injection (if any shell commands are used)

The following are out of scope:

- Vulnerabilities in upstream documentation content
- Social engineering attacks
- Denial of service through large files (expected behavior)
