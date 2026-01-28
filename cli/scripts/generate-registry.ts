#!/usr/bin/env npx tsx
/**
 * Generate registry index files from vault/packages
 *
 * Usage:
 *   npx tsx scripts/generate-registry.ts
 *   npx tsx scripts/generate-registry.ts --packages-dir ../vault/packages --output-dir ../vault/registry
 *
 * This script:
 * 1. Scans vault/packages for all packages and versions
 * 2. Creates tarballs for each version (if not exists)
 * 3. Generates registry/index.json (main index)
 * 4. Generates registry/packages/{name}.json (per-package details)
 */

import { createHash } from 'crypto';
import fs from 'fs-extra';
import path from 'path';
import * as tar from 'tar';

// Types matching CLI's registry.ts
interface PackageIndex {
  version: number;
  updated: string;
  packages: Record<string, PackageIndexEntry>;
}

interface PackageIndexEntry {
  description: string;
  latest: string;
  versions: string[];
}

interface PackageVersions {
  name: string;
  description: string;
  versions: Record<string, VersionInfo>;
}

interface VersionInfo {
  version: string;
  files: number;
  size: number;
  integrity: string;
  downloadUrl: string;
  releasedAt: string;
}

interface OloreLock {
  name: string;
  version: string;
  source: {
    type: string;
    repo?: string;
    ref?: string;
    commit?: string;
    path?: string;
  };
  builtAt: string;
  files: number;
}

// Configuration
const DEFAULT_PACKAGES_DIR = path.resolve(import.meta.dirname, '../../vault/packages');
const DEFAULT_OUTPUT_DIR = path.resolve(import.meta.dirname, '../../vault/registry');
const DOWNLOAD_URL_BASE = 'https://github.com/olorehq/olore/releases/download';

/**
 * Parse command line arguments
 */
function parseArgs(): { packagesDir: string; outputDir: string } {
  const args = process.argv.slice(2);
  let packagesDir = DEFAULT_PACKAGES_DIR;
  let outputDir = DEFAULT_OUTPUT_DIR;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--packages-dir' && args[i + 1]) {
      packagesDir = path.resolve(args[i + 1]);
      i++;
    } else if (args[i] === '--output-dir' && args[i + 1]) {
      outputDir = path.resolve(args[i + 1]);
      i++;
    } else if (args[i] === '--help' || args[i] === '-h') {
      console.log(`
Usage: npx tsx scripts/generate-registry.ts [options]

Options:
  --packages-dir <path>  Path to packages directory (default: ../vault/packages)
  --output-dir <path>    Path to registry output directory (default: ../vault/registry)
  --help, -h             Show this help message
`);
      process.exit(0);
    }
  }

  return { packagesDir, outputDir };
}

/**
 * Extract description from SKILL.md frontmatter
 */
function extractDescription(skillPath: string): string {
  try {
    const content = fs.readFileSync(skillPath, 'utf-8');
    // Match YAML frontmatter: ---\n...\n---
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (match) {
      // Extract description field
      const descMatch = match[1].match(/^description:\s*(.+)$/m);
      if (descMatch) {
        return descMatch[1].trim();
      }
    }
    return 'Documentation package';
  } catch {
    return 'Documentation package';
  }
}

/**
 * Calculate SHA-256 hash in SRI format (sha256-{base64})
 */
async function calculateIntegrity(filePath: string): Promise<string> {
  const hash = createHash('sha256');
  const stream = fs.createReadStream(filePath);

  return new Promise((resolve, reject) => {
    stream.on('data', (data) => hash.update(data));
    stream.on('end', () => resolve(`sha256-${hash.digest('base64')}`));
    stream.on('error', reject);
  });
}

/**
 * Create a tarball from a package version directory
 */
async function createTarball(sourceDir: string, tarballPath: string): Promise<void> {
  // Ensure parent directory exists
  await fs.ensureDir(path.dirname(tarballPath));

  // Create tarball with all contents
  await tar.create(
    {
      file: tarballPath,
      cwd: sourceDir,
      gzip: true,
    },
    ['.']
  );
}

/**
 * Get directory size in bytes
 */
async function getDirSize(dirPath: string): Promise<number> {
  let size = 0;
  const files = await fs.readdir(dirPath, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(dirPath, file.name);
    if (file.isDirectory()) {
      size += await getDirSize(filePath);
    } else {
      const stat = await fs.stat(filePath);
      size += stat.size;
    }
  }

  return size;
}

/**
 * Scan packages directory and build registry data
 */
async function scanPackages(packagesDir: string): Promise<{
  index: PackageIndex;
  packages: Map<string, PackageVersions>;
  tarballs: Map<string, string>; // version key -> tarball path
}> {
  const index: PackageIndex = {
    version: 1,
    updated: new Date().toISOString(),
    packages: {},
  };

  const packages = new Map<string, PackageVersions>();
  const tarballs = new Map<string, string>();

  // Get all package directories
  const packageDirs = await fs.readdir(packagesDir, { withFileTypes: true });

  for (const packageDir of packageDirs) {
    if (!packageDir.isDirectory()) continue;

    const packageName = packageDir.name;
    const packagePath = path.join(packagesDir, packageName);

    // Get all version directories
    const versionDirs = await fs.readdir(packagePath, { withFileTypes: true });
    const versions: string[] = [];
    const versionInfos: Record<string, VersionInfo> = {};
    let packageDescription = 'Documentation package';
    let latestVersion = '';

    for (const versionDir of versionDirs) {
      if (!versionDir.isDirectory()) continue;

      const version = versionDir.name;
      const versionPath = path.join(packagePath, version);
      const lockPath = path.join(versionPath, 'olore-lock.json');
      const skillPath = path.join(versionPath, 'SKILL.md');

      // Skip if no olore-lock.json
      if (!(await fs.pathExists(lockPath))) {
        console.log(`  Skipping ${packageName}/${version} (no olore-lock.json)`);
        continue;
      }

      // Read metadata
      const lock: OloreLock = await fs.readJson(lockPath);
      const description = extractDescription(skillPath);

      // Use first version's description for the package
      if (packageDescription === 'Documentation package') {
        packageDescription = description;
      }

      // Track latest version (prefer 'latest', otherwise highest semver-ish)
      if (version === 'latest') {
        latestVersion = 'latest';
      } else if (latestVersion !== 'latest') {
        // Simple comparison - could be improved with semver
        if (!latestVersion || version > latestVersion) {
          latestVersion = version;
        }
      }

      // Create tarball path
      const tarballName = `${packageName}-${version}.tar.gz`;
      const tarballPath = path.join(packagePath, tarballName);

      // Create tarball if it doesn't exist
      if (!(await fs.pathExists(tarballPath))) {
        console.log(`  Creating tarball: ${tarballName}`);
        await createTarball(versionPath, tarballPath);
      }

      // Calculate integrity and size
      const integrity = await calculateIntegrity(tarballPath);
      const stat = await fs.stat(tarballPath);

      // Build version info
      const versionInfo: VersionInfo = {
        version,
        files: lock.files,
        size: stat.size,
        integrity,
        downloadUrl: `${DOWNLOAD_URL_BASE}/${packageName}@${version}/${tarballName}`,
        releasedAt: lock.builtAt,
      };

      versions.push(version);
      versionInfos[version] = versionInfo;
      tarballs.set(`${packageName}@${version}`, tarballPath);

      console.log(`  Found: ${packageName}@${version} (${lock.files} files, ${(stat.size / 1024).toFixed(1)} KB)`);
    }

    if (versions.length === 0) {
      console.log(`Skipping ${packageName} (no valid versions)`);
      continue;
    }

    // Sort versions (latest first, then reverse alphabetical for semver-ish sorting)
    versions.sort((a, b) => {
      if (a === 'latest') return -1;
      if (b === 'latest') return 1;
      return b.localeCompare(a);
    });

    // Add to index
    index.packages[packageName] = {
      description: packageDescription,
      latest: latestVersion,
      versions,
    };

    // Add to packages map
    packages.set(packageName, {
      name: packageName,
      description: packageDescription,
      versions: versionInfos,
    });

    console.log(`Package: ${packageName} (${versions.length} versions, latest: ${latestVersion})`);
  }

  return { index, packages, tarballs };
}

/**
 * Write registry files
 */
async function writeRegistry(
  outputDir: string,
  index: PackageIndex,
  packages: Map<string, PackageVersions>
): Promise<void> {
  // Ensure output directories exist
  await fs.ensureDir(outputDir);
  await fs.ensureDir(path.join(outputDir, 'packages'));

  // Write main index
  const indexPath = path.join(outputDir, 'index.json');
  await fs.writeJson(indexPath, index, { spaces: 2 });
  console.log(`\nWrote: ${indexPath}`);

  // Write per-package files
  for (const [name, packageData] of packages) {
    const packagePath = path.join(outputDir, 'packages', `${name}.json`);
    await fs.writeJson(packagePath, packageData, { spaces: 2 });
    console.log(`Wrote: ${packagePath}`);
  }
}

/**
 * Main entry point
 */
async function main(): Promise<void> {
  const { packagesDir, outputDir } = parseArgs();

  console.log('Registry Generator');
  console.log('==================');
  console.log(`Packages: ${packagesDir}`);
  console.log(`Output:   ${outputDir}`);
  console.log('');

  // Check packages directory exists
  if (!(await fs.pathExists(packagesDir))) {
    console.error(`Error: Packages directory not found: ${packagesDir}`);
    process.exit(1);
  }

  // Scan packages and build registry data
  console.log('Scanning packages...\n');
  const { index, packages, tarballs } = await scanPackages(packagesDir);

  // Write registry files
  await writeRegistry(outputDir, index, packages);

  // Summary
  const totalPackages = Object.keys(index.packages).length;
  const totalVersions = Array.from(packages.values()).reduce((sum, p) => sum + Object.keys(p.versions).length, 0);

  console.log('\n==================');
  console.log(`Generated registry with ${totalPackages} packages, ${totalVersions} versions`);
  console.log(`Tarballs created: ${tarballs.size}`);
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
