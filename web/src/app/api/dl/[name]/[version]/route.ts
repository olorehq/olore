import { neon } from "@neondatabase/serverless";
import { after } from "next/server";

// Always execute — never statically cache a counting redirect.
export const dynamic = "force-dynamic";
// Node.js runtime (default) keeps this colocated with Neon (see vercel.json regions).

const sql = neon(process.env.DATABASE_URL!);

// Package/version slugs only — blocks key injection and counter spam.
const SAFE = /^[a-z0-9][a-z0-9._-]*$/i;
const REPO = "olorehq/olore";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ name: string; version: string }> }
) {
  const { name, version } = await params;

  if (!SAFE.test(name) || !SAFE.test(version)) {
    return new Response("bad request", { status: 400 });
  }

  // GitHub serves the bytes; we only count and redirect.
  const target = `https://github.com/${REPO}/releases/download/${name}@${version}/${name}-${version}.tar.gz`;

  // Runs after the redirect is sent: never blocks install, survives function freeze.
  after(async () => {
    try {
      await sql`
        insert into downloads (name, version, count)
        values (${name}, ${version}, 1)
        on conflict (name, version) do update set count = downloads.count + 1
      `;
    } catch {
      // GitHub's own download_count is the cross-check; a dropped ping is acceptable.
    }
  });

  return Response.redirect(target, 302);
}
