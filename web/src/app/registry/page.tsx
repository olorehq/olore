import fs from "fs";
import path from "path";

import { RegistryClient } from "./registry-client";

interface PackageInfo {
  name: string;
  description: string;
  versions: {
    version: string;
    files: number;
    builtAt: string;
  }[];
}

function getPackages(): PackageInfo[] {
  const configsDir = path.resolve(process.cwd(), "../vault/configs");
  const packagesDir = path.resolve(process.cwd(), "../vault/packages");

  if (!fs.existsSync(configsDir)) return [];

  const configFiles = fs
    .readdirSync(configsDir)
    .filter((f) => f.endsWith(".json"));

  const packages: PackageInfo[] = [];

  for (const file of configFiles) {
    try {
      const config = JSON.parse(
        fs.readFileSync(path.join(configsDir, file), "utf-8")
      );
      const name = config.name;
      const description = config.description || "";

      const versions: PackageInfo["versions"] = [];
      const versionKeys = Object.keys(config.versions || {});

      for (const ver of versionKeys) {
        const lockPath = path.join(packagesDir, name, ver, "olore-lock.json");
        if (fs.existsSync(lockPath)) {
          const lock = JSON.parse(fs.readFileSync(lockPath, "utf-8"));
          versions.push({
            version: ver,
            files: lock.files || 0,
            builtAt: lock.builtAt || "",
          });
        }
      }

      if (versions.length > 0) {
        packages.push({ name, description, versions });
      }
    } catch {
      // Skip invalid configs
    }
  }

  return packages.sort((a, b) => a.name.localeCompare(b.name));
}

export const metadata = {
  title: "Registry - olore",
  description:
    "Browse 70+ documentation packages for AI coding agents. Version-pinned docs for Claude Code, Codex, and OpenCode.",
};

export default function RegistryPage() {
  const packages = getPackages();

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
