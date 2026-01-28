import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

import { pathStartsWith } from './platform.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the root of the olore repository (where vault/, .claude/ are)
export function getRepoRoot(): string {
  // cli/dist/core/paths.js -> cli/ -> olore/
  return path.resolve(__dirname, '../../..');
}

// Get the vault path (where configs and packages live)
export function getVaultPath(): string {
  return path.join(getRepoRoot(), 'vault');
}

// Get the .claude path (where skills and agents live)
export function getClaudePath(): string {
  return path.join(getRepoRoot(), '.claude');
}

// Get user's olore directory
export function getOloreHome(): string {
  return path.join(os.homedir(), '.olore');
}

// Get path to a specific package in ~/.olore
export function getOlorePackagePath(name: string, version: string): string {
  return path.join(getOloreHome(), 'packages', name, version);
}

// Check if a symlink points to ~/.olore (installed) or elsewhere (linked)
// On Windows, this also handles copied directories (since symlinks require admin)
export function isInstalledPackage(symlinkPath: string): boolean {
  try {
    const target = fs.readlinkSync(symlinkPath);
    const oloreHome = getOloreHome();
    // Use platform-aware path comparison (case-insensitive on Windows)
    return pathStartsWith(target, oloreHome);
  } catch {
    // Not a symlink, check if it's a directory (copied install on Windows or old-style)
    return fs.existsSync(symlinkPath) && fs.statSync(symlinkPath).isDirectory();
  }
}

// Get the real path a symlink points to
export function getSymlinkTarget(symlinkPath: string): string | null {
  try {
    return fs.readlinkSync(symlinkPath);
  } catch {
    return null;
  }
}

// Agent skill paths
export function getAgentPaths(): Record<string, string> {
  const home = os.homedir();
  return {
    claude: path.join(home, '.claude', 'skills'),
    codex: path.join(home, '.codex', 'skills'),
    opencode: path.join(home, '.config', 'opencode', 'skills'),
  };
}

// Detect which agents are installed
export function detectAgents(): string[] {
  const agents: string[] = [];
  const paths = getAgentPaths();

  for (const [agent, agentPath] of Object.entries(paths)) {
    // Check if parent directory exists (e.g., ~/.claude/)
    const parentDir = path.dirname(agentPath);
    if (fs.existsSync(parentDir)) {
      agents.push(agent);
    }
  }

  return agents;
}

// Package info
export interface PackageInfo {
  name: string;
  files: number;
  size: number;
  path: string;
}

// Installed package info with version from lock file
export interface InstalledPackageInfo extends PackageInfo {
  version: string;
  agent: string;
  installType: 'installed' | 'linked' | 'copied'; // installed = via ~/.olore, linked = direct symlink, copied = old-style copy
  symlinkTarget: string | null;
}

// Get installed packages from agent skill directories
export async function getInstalledPackages(): Promise<InstalledPackageInfo[]> {
  const agentPaths = getAgentPaths();
  const packages: InstalledPackageInfo[] = [];
  const seen = new Set<string>();

  for (const [agent, skillsDir] of Object.entries(agentPaths)) {
    if (!fs.existsSync(skillsDir)) {
      continue;
    }

    const entries = fs.readdirSync(skillsDir, { withFileTypes: true });

    for (const entry of entries) {
      // Only look for olore-* directories or symlinks
      const isValidEntry = entry.isDirectory() || entry.isSymbolicLink();
      if (!isValidEntry || !entry.name.startsWith('olore-')) {
        continue;
      }

      const pkgPath = path.join(skillsDir, entry.name);
      const lockPath = path.join(pkgPath, 'olore-lock.json');

      // Must have olore-lock.json to be a valid olore package
      if (!fs.existsSync(lockPath)) {
        continue;
      }

      // Skip if we've already seen this package (from another agent)
      const pkgName = entry.name;
      if (seen.has(pkgName)) {
        continue;
      }
      seen.add(pkgName);

      try {
        const lock = JSON.parse(fs.readFileSync(lockPath, 'utf-8'));
        const stats = await getDirectoryStats(pkgPath);

        // Determine install type
        const symlinkTarget = getSymlinkTarget(pkgPath);
        let installType: 'installed' | 'linked' | 'copied';
        if (symlinkTarget) {
          // It's a symlink - check if it points to ~/.olore
          installType = isInstalledPackage(pkgPath) ? 'installed' : 'linked';
        } else {
          // Not a symlink - old-style direct copy
          installType = 'copied';
        }

        packages.push({
          name: lock.name || pkgName.replace('olore-', ''),
          version: lock.version || 'unknown',
          files: stats.files,
          size: stats.size,
          path: pkgPath,
          agent,
          installType,
          symlinkTarget,
        });
      } catch {
        // Skip packages with invalid lock files
      }
    }
  }

  return packages.sort((a, b) => a.name.localeCompare(b.name));
}

// Get directory stats (file count and total size)
async function getDirectoryStats(dir: string): Promise<{ files: number; size: number }> {
  let files = 0;
  let size = 0;

  function walk(currentDir: string): void {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile()) {
        files++;
        size += fs.statSync(fullPath).size;
      }
    }
  }

  walk(dir);
  return { files, size };
}

// Get config path for a package
export function getConfigPath(name: string): string | null {
  const configsDir = path.join(getVaultPath(), 'configs');
  const configPath = path.join(configsDir, `${name}.json`);

  if (fs.existsSync(configPath)) {
    return configPath;
  }

  // Try without -docs suffix
  const altPath = path.join(configsDir, `${name}-docs.json`);
  if (fs.existsSync(altPath)) {
    return altPath;
  }

  return null;
}

// List available configs
export function listConfigs(): string[] {
  const configsDir = path.join(getVaultPath(), 'configs');

  if (!fs.existsSync(configsDir)) {
    return [];
  }

  return fs
    .readdirSync(configsDir)
    .filter((f) => f.endsWith('.json') && f !== 'config.schema.json')
    .map((f) => f.replace('.json', ''));
}

// Legacy aliases for backwards compatibility
export const getManifestPath = getConfigPath;
export const listManifests = listConfigs;
