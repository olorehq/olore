import fs from "fs";
import path from "path";

import Link from "next/link";

function getPackageNames(): string[] {
  try {
    const configsDir = path.resolve(process.cwd(), "../vault/configs");
    return fs
      .readdirSync(configsDir)
      .filter((f: string) => f.endsWith(".json"))
      .map((f: string) => f.replace(".json", ""))
      .sort();
  } catch {
    return [];
  }
}

const CURATED_PACKAGES = [
  "nextjs",
  "prisma",
  "drizzle",
  "zod",
  "tailwindcss",
  "clerk",
  "supabase",
  "sentry",
  "playwright",
  "hono",
  "ai-sdk",
  "bun",
  "eslint",
  "tanstack-query",
  "zustand",
];

export async function PackageShowcase() {
  const packageNames = getPackageNames();

  return (
    <section className="border-b border-zinc-800 p-6">
      <h2 className="mb-6 text-xl font-bold text-zinc-100 uppercase">
        <span className="text-purple-500">&gt;&gt;</span> Official_Packages
      </h2>
      <div className="flex flex-wrap gap-2 font-mono text-xs">
        {CURATED_PACKAGES.map((pkg) => (
          <span
            key={pkg}
            className="border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-zinc-400"
          >
            {pkg}
          </span>
        ))}
      </div>
      <Link
        href="/registry"
        className="mt-4 inline-block text-sm text-zinc-500 transition-colors hover:text-cyan-400"
      >
        + {packageNames.length - 15} more{" "}
        <span className="text-zinc-600">&rarr;</span> Browse Registry
      </Link>
    </section>
  );
}
