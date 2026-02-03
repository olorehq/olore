import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

import pc from 'picocolors';

// Import version from package.json at build time via tsup
// The version is injected by the build process
import pkg from '../../package.json';
const currentVersion = pkg.version;

const NPM_REGISTRY = 'https://registry.npmjs.org/@olorehq/olore';
const CHECK_INTERVAL_MS = 24 * 60 * 60 * 1000; // 24 hours
const CACHE_DIR = join(homedir(), '.olore');
const CACHE_FILE = join(CACHE_DIR, 'version-check.json');
const FETCH_TIMEOUT = 3000; // 3 seconds — don't slow down CLI

interface VersionCache {
  lastCheck: number;
  latestVersion: string | null;
}

function readCache(): VersionCache | null {
  try {
    if (existsSync(CACHE_FILE)) {
      return JSON.parse(readFileSync(CACHE_FILE, 'utf-8'));
    }
  } catch {
    // Ignore cache read errors
  }
  return null;
}

function writeCache(cache: VersionCache): void {
  try {
    if (!existsSync(CACHE_DIR)) {
      mkdirSync(CACHE_DIR, { recursive: true });
    }
    writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
  } catch {
    // Ignore cache write errors
  }
}

async function fetchLatestVersion(): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);

    const response = await fetch(NPM_REGISTRY, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    });

    clearTimeout(timeoutId);

    if (!response.ok) return null;

    const data = await response.json();
    return data['dist-tags']?.latest || null;
  } catch {
    // Network errors, timeouts — fail silently
    return null;
  }
}

function compareVersions(current: string, latest: string): number {
  const parseVersion = (v: string) =>
    v
      .replace(/^v/, '')
      .split('.')
      .map((n) => parseInt(n, 10) || 0);

  const curr = parseVersion(current);
  const lat = parseVersion(latest);

  for (let i = 0; i < 3; i++) {
    if ((curr[i] || 0) < (lat[i] || 0)) return -1;
    if ((curr[i] || 0) > (lat[i] || 0)) return 1;
  }
  return 0;
}

/**
 * Check for updates and print a notification if outdated.
 * Designed to be non-blocking and fail-silent.
 * Call this after commands that already hit the network (search, install, doctor).
 */
export async function checkForUpdates(): Promise<void> {
  const cache = readCache();
  const now = Date.now();

  // Skip if we checked recently
  if (cache && now - cache.lastCheck < CHECK_INTERVAL_MS) {
    // Use cached result if available
    if (cache.latestVersion && compareVersions(currentVersion, cache.latestVersion) < 0) {
      printUpdateNotice(cache.latestVersion);
    }
    return;
  }

  // Fetch latest version (non-blocking, fail-silent)
  const latestVersion = await fetchLatestVersion();

  // Update cache
  writeCache({
    lastCheck: now,
    latestVersion,
  });

  // Notify if outdated
  if (latestVersion && compareVersions(currentVersion, latestVersion) < 0) {
    printUpdateNotice(latestVersion);
  }
}

function printUpdateNotice(latestVersion: string): void {
  console.log();
  console.log(
    pc.yellow(`⚠️  Update available: ${currentVersion} → ${latestVersion}`) +
      pc.gray(` — Run `) +
      pc.cyan(`npm update -g @olorehq/olore`) +
      pc.gray(` to update`)
  );
}

/**
 * Get current CLI version
 */
export function getVersion(): string {
  return currentVersion;
}
