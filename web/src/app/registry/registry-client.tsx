"use client";

import { useMemo, useState } from "react";

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

export function RegistryClient({ packages }: { packages: PackageInfo[] }) {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "downloads" | "files">("name");

  const filtered = useMemo(() => {
    let result = packages;

    if (query) {
      const q = query.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (sortBy === "downloads") {
      result = [...result].sort((a, b) => b.downloads - a.downloads);
    } else if (sortBy === "files") {
      result = [...result].sort(
        (a, b) => (b.versions[0]?.files || 0) - (a.versions[0]?.files || 0)
      );
    }

    return result;
  }, [packages, query, sortBy]);

  const totalDownloads = packages.reduce((sum, p) => sum + p.downloads, 0);

  return (
    <>
      {/* Stats Bar */}
      <section className="grid grid-cols-3 border-b border-zinc-800 text-center">
        <div className="border-r border-zinc-800 p-4">
          <div className="text-2xl font-bold text-cyan-400">
            {packages.length}
          </div>
          <div className="text-xs text-zinc-500 uppercase">Packages</div>
        </div>
        <div className="border-r border-zinc-800 p-4">
          <div className="text-2xl font-bold text-cyan-400">
            {packages.reduce((sum, p) => sum + p.versions.length, 0)}
          </div>
          <div className="text-xs text-zinc-500 uppercase">Versions</div>
        </div>
        <div className="p-4">
          <div className="text-2xl font-bold text-cyan-400">
            {totalDownloads.toLocaleString()}
          </div>
          <div className="text-xs text-zinc-500 uppercase">Downloads</div>
        </div>
      </section>

      {/* Search + Sort */}
      <section className="flex items-center gap-4 border-b border-zinc-800 p-4">
        <span className="text-purple-500">&gt;</span>
        <input
          type="text"
          placeholder="Search packages..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent text-sm text-zinc-200 placeholder-zinc-600 outline-none"
        />
        <div className="flex gap-1 text-xs uppercase">
          {(["name", "downloads", "files"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSortBy(s)}
              className={`border px-2 py-1 transition-colors ${
                sortBy === s
                  ? "border-cyan-500/50 text-cyan-400"
                  : "border-zinc-800 text-zinc-600 hover:border-zinc-700 hover:text-zinc-400"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      {/* Package List */}
      <section>
        <div className="grid grid-cols-[1fr_80px_80px] border-b border-zinc-800 px-6 py-3 text-xs text-zinc-600 uppercase md:grid-cols-[200px_1fr_80px_80px]">
          <span>Package</span>
          <span className="hidden md:block">Description</span>
          <span className="text-right">Files</span>
          <span className="text-right">DLs</span>
        </div>

        {filtered.length === 0 ? (
          <div className="p-12 text-center text-zinc-600">
            {query
              ? `No packages matching "${query}"`
              : "No packages available"}
          </div>
        ) : (
          filtered.map((pkg) => {
            const latestVersion = pkg.versions[0];
            return (
              <div
                key={pkg.name}
                className="group grid grid-cols-[1fr_80px_80px] border-b border-zinc-800/50 px-6 py-4 transition-colors hover:bg-zinc-900/50 md:grid-cols-[200px_1fr_80px_80px]"
              >
                <div>
                  <span className="text-sm font-bold text-zinc-200 transition-colors group-hover:text-cyan-400">
                    {pkg.name}
                  </span>
                  <div className="mt-1 flex gap-1">
                    {pkg.versions.map((v) => (
                      <span
                        key={v.version}
                        className="border border-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-500"
                      >
                        {v.version}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="hidden self-center text-xs text-zinc-500 md:block">
                  {truncate(pkg.description, 80)}
                </span>
                <span className="self-center text-right text-xs text-zinc-500">
                  {latestVersion?.files || 0}
                </span>
                <span className="self-center text-right text-xs text-zinc-400">
                  {pkg.downloads > 0 ? (
                    pkg.downloads.toLocaleString()
                  ) : (
                    <span className="text-zinc-700">0</span>
                  )}
                </span>
              </div>
            );
          })
        )}
      </section>

      {/* Install Help */}
      <section className="border-t border-zinc-800 bg-zinc-900/50 p-6 text-center">
        <p className="mb-2 text-xs text-zinc-500 uppercase">
          Install any package
        </p>
        <code className="text-sm text-cyan-400">
          olore install &lt;package-name&gt;
        </code>
        <p className="mt-2 text-xs text-zinc-600">
          Example: <code className="text-zinc-400">olore install prisma</code>
        </p>
      </section>
    </>
  );
}

function truncate(str: string, maxLen: number): string {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen - 1) + "\u2026";
}
