# Domains

## Overview

Domains map human-readable addresses to your Vercel deployments. Vercel handles DNS resolution, SSL certificates, and CDN routing.

## Adding a Custom Domain

### Dashboard
Project Settings > Domains > Add Domain

### CLI
```bash
vercel domains add example.com
vercel alias set <deployment-url> example.com
```

## DNS Configuration

Point your domain to Vercel:
- **A Record**: `76.76.21.21`
- **CNAME**: `cname.vercel-dns.com`

Or use Vercel as your nameserver for full DNS management.

## DNS Record Types

| Type | Description |
|---|---|
| **A** | Maps domain to IPv4 address |
| **CNAME** | Maps domain to another domain name |
| **NS** | Specifies authoritative nameservers |
| **MX** | Mail exchange records |
| **TXT** | Text records (verification, SPF, etc.) |

## CLI DNS Management

```bash
vercel dns ls example.com                    # List records
vercel dns add example.com @ A 76.76.21.21   # Add A record
vercel dns rm <record-id>                    # Remove record
```

## SSL Certificates

Vercel automatically provisions and renews SSL certificates for all domains. HTTPS is enforced by default with TLS 1.2/1.3.

```bash
vercel certs ls                   # List certificates
vercel certs issue example.com    # Issue certificate
```

## Branch Domains

Assign domains to specific Git branches:
- `staging.example.com` → `staging` branch
- `example.com` → `main` branch (production)

## More Resources

- Working with DNS
- Working with Nameservers
- Working with SSL
- Troubleshooting Domains
