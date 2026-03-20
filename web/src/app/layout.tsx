import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://olore.dev";
const title = "olore - Docs as Agent Skills";
const description =
  "Version-pinned documentation packages for AI coding agents. Works offline with Claude Code, Codex, and OpenCode. 70+ packages available.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "olore",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  keywords: [
    "olore",
    "documentation package manager",
    "AI coding agent",
    "Claude Code",
    "Codex",
    "OpenCode",
    "developer tools",
    "offline documentation",
    "version-pinned docs",
    "context7 alternative",
    "AI agent skills",
    "documentation as code",
    "package registry",
    "stop AI hallucinations",
  ],
  authors: [
    {
      name: "olore contributors",
      url: "https://github.com/olorehq/olore",
    },
  ],
  creator: "olore contributors",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "olore",
      alternateName: "O(pen)LORE",
      description:
        "Documentation package manager for AI coding agents. Version-pinned, offline-first docs for Claude Code, Codex, and OpenCode.",
      url: "https://olore.dev",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "macOS, Linux, Windows",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      license: "https://opensource.org/licenses/MIT",
      downloadUrl: "https://www.npmjs.com/package/@olorehq/olore",
      codeRepository: "https://github.com/olorehq/olore",
      author: {
        "@type": "Organization",
        name: "olorehq",
        url: "https://github.com/olorehq",
      },
    },
    {
      "@type": "WebSite",
      name: "olore",
      url: "https://olore.dev",
      description: "Documentation package manager for AI coding agents",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
