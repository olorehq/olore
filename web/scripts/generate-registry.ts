/**
 * generate-registry.ts
 *
 * Generates registry JSON files at Vercel build time by scanning
 * vault/packages/olore-lock.json files and querying GitHub Releases API.
 *
 * See: docs/adr/0005-registry-generation-at-build-time.md
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// --- Configuration ---

const GITHUB_OWNER = "olorehq";
const GITHUB_REPO = "olore";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..", "..");
const VAULT_PACKAGES_DIR = path.join(ROOT_DIR, "vault", "packages");
const VAULT_CONFIGS_DIR = path.join(ROOT_DIR, "vault", "configs");
const OUTPUT_DIR = path.join(ROOT_DIR, "web", "public", "registry");

// --- Types ---

interface OloreLock {
  name: string;
  version: string;
  description?: string;
  source: {
    type: string;
    repo: string;
    ref: string;
    commit: string;
    path: string;
  };
  builtAt: string;
  files: number;
}

interface Config {
  name: string;
  description?: string;
}

interface ReleaseAsset {
  name: string;
  size: number;
  browser_download_url: string;
}

interface ReleaseInfo {
  tag_name: string;
  published_at: string;
  assets: ReleaseAsset[];
}

interface VersionInfo {
  version: string;
  files: number;
  size: number;
  integrity: string;
  downloadUrl: string;
  releasedAt: string;
}

interface PackageRegistry {
  name: string;
  description: string;
  versions: Record<string, VersionInfo>;
}

interface RegistryIndex {
  version: number;
  updated: string;
  packages: Record<
    string,
    {
      description: string;
      latest: string;
      versions: string[];
    }
  >;
}

// --- GitHub API ---

async function fetchRelease(tag: string): Promise<ReleaseInfo | null> {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/tags/${encodeURIComponent(tag)}`;

  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "olore-registry-generator",
  };

  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(url, { headers });

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      console.warn(
        `  GitHub API error for ${tag}: ${response.status} ${response.statusText}`
      );
      return null;
    }

    return (await response.json()) as ReleaseInfo;
  } catch (error) {
    console.warn(
      `  Network error fetching release ${tag}:`,
      error instanceof Error ? error.message : error
    );
    return null;
  }
}

async function fetchSha256(url: string): Promise<string | null> {
  const headers: Record<string, string> = {
    "User-Agent": "olore-registry-generator",
  };

  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(url, { headers });

    if (!response.ok) {
      return null;
    }

    const text = (await response.text()).trim();
    // .sha256 file contains base64-encoded SHA256 hash (SRI format)
    const hash = text.split(/\s+/)[0];
    return `sha256-${hash}`;
  } catch {
    return null;
  }
}

// --- Lock File Discovery ---

function discoverLockFiles(): OloreLock[] {
  const lockFiles: OloreLock[] = [];

  if (!fs.existsSync(VAULT_PACKAGES_DIR)) {
    console.warn("vault/packages directory not found");
    return lockFiles;
  }

  const packageDirs = fs.readdirSync(VAULT_PACKAGES_DIR, {
    withFileTypes: true,
  });

  for (const packageDir of packageDirs) {
    if (!packageDir.isDirectory()) continue;

    const packagePath = path.join(VAULT_PACKAGES_DIR, packageDir.name);
    const versionDirs = fs.readdirSync(packagePath, { withFileTypes: true });

    for (const versionDir of versionDirs) {
      if (!versionDir.isDirectory()) continue;

      const lockPath = path.join(
        packagePath,
        versionDir.name,
        "olore-lock.json"
      );

      if (!fs.existsSync(lockPath)) continue;

      try {
        const lockData = JSON.parse(
          fs.readFileSync(lockPath, "utf-8")
        ) as OloreLock;
        lockFiles.push(lockData);
      } catch (error) {
        console.warn(
          `  Failed to parse ${lockPath}:`,
          error instanceof Error ? error.message : error
        );
      }
    }
  }

  return lockFiles;
}

// --- Config Reading ---

function readConfigDescription(name: string): string | undefined {
  const configPath = path.join(VAULT_CONFIGS_DIR, `${name}.json`);

  if (!fs.existsSync(configPath)) return undefined;

  try {
    const config = JSON.parse(fs.readFileSync(configPath, "utf-8")) as Config;
    return config.description;
  } catch {
    return undefined;
  }
}

// --- Registry Generation ---

async function generateRegistry(): Promise<void> {
  console.log("Generating registry...");
  console.log(`  Vault: ${VAULT_PACKAGES_DIR}`);
  console.log(`  Output: ${OUTPUT_DIR}`);
  console.log(
    `  GitHub token: ${GITHUB_TOKEN ? "provided" : "NOT SET (rate limits may apply)"}`
  );
  console.log();

  // 1. Discover all lock files
  const lockFiles = discoverLockFiles();
  console.log(`Found ${lockFiles.length} package versions`);

  // 2. Group by package name
  const packageMap = new Map<string, OloreLock[]>();
  for (const lock of lockFiles) {
    const existing = packageMap.get(lock.name) || [];
    existing.push(lock);
    packageMap.set(lock.name, existing);
  }

  // 3. Query GitHub Releases for each package version
  const packageRegistries = new Map<string, PackageRegistry>();
  let skipped = 0;
  let included = 0;

  for (const [name, locks] of packageMap) {
    const description =
      locks[0].description || readConfigDescription(name) || "";

    const registry: PackageRegistry = {
      name,
      description,
      versions: {},
    };

    for (const lock of locks) {
      const tag = `${name}@${lock.version}`;
      const release = await fetchRelease(tag);

      if (!release) {
        console.warn(`  Skipping ${tag} - no GitHub Release found`);
        skipped++;
        continue;
      }

      // Find tarball asset
      const tarballName = `${name}-${lock.version}.tar.gz`;
      const tarballAsset = release.assets.find((a) => a.name === tarballName);

      if (!tarballAsset) {
        console.warn(
          `  Skipping ${tag} - tarball asset "${tarballName}" not found in release`
        );
        skipped++;
        continue;
      }

      // Find or fetch integrity hash
      const sha256Asset = release.assets.find(
        (a) => a.name === `${tarballName}.sha256`
      );

      let integrity = "";
      if (sha256Asset) {
        integrity = (await fetchSha256(sha256Asset.browser_download_url)) || "";
      }

      if (!integrity) {
        console.warn(`  Warning: no integrity hash for ${tag}`);
      }

      registry.versions[lock.version] = {
        version: lock.version,
        files: lock.files,
        size: tarballAsset.size,
        integrity,
        downloadUrl: tarballAsset.browser_download_url,
        releasedAt: release.published_at,
      };

      included++;
    }

    // Only add package if it has at least one version
    if (Object.keys(registry.versions).length > 0) {
      packageRegistries.set(name, registry);
    }
  }

  console.log();
  console.log(`Registry: ${included} versions included, ${skipped} skipped`);

  // 4. Generate output files
  fs.mkdirSync(path.join(OUTPUT_DIR, "packages"), { recursive: true });

  // Generate index.json
  const index: RegistryIndex = {
    version: 1,
    updated: new Date().toISOString(),
    packages: {},
  };

  for (const [name, registry] of packageRegistries) {
    const versions = Object.keys(registry.versions);
    // Latest = last version alphabetically (semver-ish sort)
    const latest = versions[versions.length - 1];

    index.packages[name] = {
      description: registry.description,
      latest,
      versions,
    };

    // Generate per-package JSON
    const packageJson = {
      name: registry.name,
      description: registry.description,
      versions: registry.versions,
    };

    const packagePath = path.join(OUTPUT_DIR, "packages", `${name}.json`);
    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + "\n");
    console.log(`  Wrote ${path.relative(ROOT_DIR, packagePath)}`);
  }

  // Sort index packages alphabetically
  const sortedPackages: RegistryIndex["packages"] = {};
  for (const key of Object.keys(index.packages).sort()) {
    sortedPackages[key] = index.packages[key];
  }
  index.packages = sortedPackages;

  const indexPath = path.join(OUTPUT_DIR, "index.json");
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2) + "\n");
  console.log(`  Wrote ${path.relative(ROOT_DIR, indexPath)}`);

  console.log();
  console.log(
    `Registry generated: ${Object.keys(index.packages).length} packages`
  );
}

// --- Main ---

generateRegistry().catch((error) => {
  console.error("Registry generation failed:", error);
  process.exit(1);
});
