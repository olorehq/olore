import { neon } from "@neondatabase/serverless";
import { RegistryClient } from "./_components/registry-client";

/**
 * Live per-package download totals from Neon, keyed by package name.
 * Falls back to an empty map (callers use the GitHub-baked count) when the
 * database is unavailable or unconfigured (e.g. local dev without DATABASE_URL).
 */
async function getLiveCounts(): Promise<Record<string, number>> {
  if (!process.env.DATABASE_URL) return {};
  try {
    const sql = neon(process.env.DATABASE_URL);
    const rows = (await sql`
      select name, sum(count)::int as downloads from downloads group by name
    `) as { name: string; downloads: number }[];
    return Object.fromEntries(rows.map((r) => [r.name, r.downloads]));
  } catch {
    return {};
  }
}

interface RegistryPackage {
  description: string;
  latest: string;
  versions: Record<
    string,
    {
      version: string;
      files: number;
      size: number;
      downloads: number;
      releasedAt: string;
    }
  >;
}

interface Registry {
  version: number;
  updated: string;
  packages: Record<string, RegistryPackage>;
}

interface PackageInfo {
  name: string;
  description: string;
  downloads: number;
  versions: {
    version: string;
    files: number;
    downloads: number;
  }[];
}

async function getPackages(): Promise<{
  packages: PackageInfo[];
  updated: string;
}> {
  try {
    const res = await fetch(
      "https://github.com/olorehq/olore/releases/download/registry/registry.json",
      { cache: "no-store" }
    );
    if (!res.ok) return { packages: [], updated: "" };

    const [registry, live] = await Promise.all([
      res.json() as Promise<Registry>,
      getLiveCounts(),
    ]);
    const packages: PackageInfo[] = [];

    for (const [name, pkg] of Object.entries(registry.packages)) {
      const versions = Object.entries(pkg.versions).map(([ver, info]) => ({
        version: ver,
        files: info.files || 0,
        downloads: info.downloads || 0,
      }));

      // Prefer the live Neon count; fall back to the GitHub-baked total for
      // packages that have no proxy pings yet (or when the DB is unavailable).
      const githubTotal = versions.reduce((sum, v) => sum + v.downloads, 0);
      const totalDownloads = live[name] ?? githubTotal;

      packages.push({
        name,
        description: pkg.description,
        downloads: totalDownloads,
        versions,
      });
    }

    return {
      packages: packages.sort((a, b) => a.name.localeCompare(b.name)),
      updated: registry.updated,
    };
  } catch {
    return { packages: [], updated: "" };
  }
}

export async function generateMetadata() {
  const { packages } = await getPackages();
  const count = packages.length || 80;
  return {
    title: `Registry - ${count}+ Doc Packages for AI Agents | olore`,
    description: `Browse ${count} version-pinned documentation packages for Claude Code, Codex, and OpenCode. Install with one command. Offline-first.`,
    openGraph: {
      title: `olore Registry - ${count}+ Documentation Packages`,
      description: `Version-pinned docs for AI coding agents. ${count} packages including Next.js, Prisma, Zod, Tailwind CSS, and more.`,
      url: "https://olore.dev/registry",
      type: "website",
    },
    alternates: {
      canonical: "https://olore.dev/registry",
    },
  };
}

export default async function RegistryPage() {
  const { packages, updated } = await getPackages();

  return (
    <>
      {/* Header */}
      <section className="border-b border-zinc-800 p-6">
        <h1 className="mb-2 text-2xl font-bold tracking-tighter text-zinc-100 uppercase md:text-4xl">
          <span className="text-purple-500">&gt;&gt;</span> Package_Registry
        </h1>
        <p className="text-sm text-zinc-500">
          {packages.length} documentation packages available. Install with{" "}
          <span className="text-cyan-400">olore install &lt;name&gt;</span>
          {updated && (
            <span className="ml-4 text-zinc-700">
              Updated {new Date(updated).toLocaleDateString()}
            </span>
          )}
        </p>
      </section>

      {/* Client-side interactive part */}
      <RegistryClient packages={packages} />
    </>
  );
}
