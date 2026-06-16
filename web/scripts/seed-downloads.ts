/**
 * One-time seed: baseline the `downloads` table from GitHub's current
 * per-version download_count (already baked into registry.json).
 *
 * Run ONCE, BEFORE the registry is flipped to proxy downloadUrls, so no live
 * pings exist yet. Idempotent (ON CONFLICT DO NOTHING) — re-running is a no-op,
 * so it never clobbers counts accumulated after cutover.
 *
 *   DATABASE_URL=... pnpm tsx scripts/seed-downloads.ts
 */
import { neon } from "@neondatabase/serverless";

const REGISTRY_URL =
  "https://github.com/olorehq/olore/releases/download/registry/registry.json";

interface VersionInfo {
  version: string;
  downloads?: number;
}
interface Registry {
  packages: Record<string, { versions: Record<string, VersionInfo> }>;
}

async function main() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    console.error("DATABASE_URL is not set");
    process.exit(1);
  }

  const sql = neon(dbUrl);

  const res = await fetch(REGISTRY_URL, { cache: "no-store" });
  if (!res.ok) {
    console.error(`Failed to fetch registry: ${res.status}`);
    process.exit(1);
  }
  const registry: Registry = await res.json();

  let seeded = 0;
  for (const [name, pkg] of Object.entries(registry.packages)) {
    for (const [version, info] of Object.entries(pkg.versions)) {
      const count = info.downloads ?? 0;
      if (count <= 0) continue;
      await sql`
        insert into downloads (name, version, count)
        values (${name}, ${version}, ${count})
        on conflict (name, version) do nothing
      `;
      seeded++;
    }
  }

  console.log(`Seeded ${seeded} version rows from GitHub download counts.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
