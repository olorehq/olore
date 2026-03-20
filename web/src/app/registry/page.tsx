import { RegistryClient } from "./registry-client";

export const dynamic = "force-dynamic";

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
      { next: { revalidate: 0 } }
    );
    if (!res.ok) return { packages: [], updated: "" };

    const registry: Registry = await res.json();
    const packages: PackageInfo[] = [];

    for (const [name, pkg] of Object.entries(registry.packages)) {
      const versions = Object.entries(pkg.versions).map(([ver, info]) => ({
        version: ver,
        files: info.files || 0,
        downloads: info.downloads || 0,
      }));

      const totalDownloads = versions.reduce((sum, v) => sum + v.downloads, 0);

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
  const count = packages.length || 70;
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
    <div className="min-h-screen bg-zinc-950 font-mono text-zinc-300 selection:bg-cyan-500/30 selection:text-cyan-200">
      <main className="mx-auto min-h-screen max-w-7xl border-x border-zinc-800">
        {/* Navigation */}
        <nav className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
          <a
            href="/"
            className="text-xl font-bold tracking-widest text-zinc-100"
          >
            <span className="text-zinc-500">[</span> O(pen)LORE{" "}
            <span className="text-zinc-500">]</span>
          </a>
          <div className="flex gap-8 text-sm uppercase">
            <a
              href="/registry"
              className="px-2 py-1 text-cyan-400 transition-colors"
            >
              <span className="mr-1 text-zinc-600">[</span> Registry{" "}
              <span className="ml-1 text-zinc-600">]</span>
            </a>
            <a
              href="https://github.com/olorehq/olore"
              className="px-2 py-1 transition-colors hover:text-cyan-400"
            >
              <span className="mr-1 text-zinc-600">[</span> GitHub{" "}
              <span className="ml-1 text-zinc-600">]</span>
            </a>
          </div>
        </nav>

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

        {/* Footer */}
        <footer className="border-t border-zinc-800">
          <div className="flex items-center justify-between p-6 text-xs text-zinc-500 uppercase">
            <span className="opacity-75">Open Source Forever</span>
            <div className="flex gap-6">
              <a href="/" className="transition-colors hover:text-cyan-400">
                Home
              </a>
              <a
                href="https://github.com/olorehq/olore"
                className="transition-colors hover:text-cyan-400"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
