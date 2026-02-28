import { DOWNLOAD_TIMEOUT, REGISTRY_FALLBACK_URL, REGISTRY_URL, USER_AGENT } from './constants.js';

// Registry index format (v1 — used by search, derived from combined registry)
export interface PackageIndex {
  version: number;
  updated: string;
  packages: Record<string, PackageIndexEntry>;
}

export interface PackageIndexEntry {
  description: string;
  latest: string;
  versions: string[];
}

// Per-package version details (v1 — used by install, derived from combined registry)
export interface PackageVersions {
  name: string;
  description: string;
  versions: Record<string, VersionInfo>;
}

export interface VersionInfo {
  version: string;
  files: number;
  size: number;
  integrity: string;
  downloadUrl: string;
  releasedAt: string;
}

// Combined registry format (v2 — single file from GitHub Release)
export interface CombinedRegistry {
  version: 2;
  updated: string;
  packages: Record<string, CombinedPackageEntry>;
}

export interface CombinedPackageEntry {
  description: string;
  latest: string;
  versions: Record<string, VersionInfo>;
}

// Custom error for registry operations
export class RegistryError extends Error {
  constructor(
    message: string,
    public code: 'NETWORK_ERROR' | 'NOT_FOUND' | 'INVALID_RESPONSE' | 'TIMEOUT'
  ) {
    super(message);
    this.name = 'RegistryError';
  }
}

async function fetchWithTimeout(
  url: string,
  timeout: number = DOWNLOAD_TIMEOUT
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': USER_AGENT,
      },
    });
    return response;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new RegistryError(`Request timed out after ${timeout}ms`, 'TIMEOUT');
    }
    throw new RegistryError(
      `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      'NETWORK_ERROR'
    );
  } finally {
    clearTimeout(timeoutId);
  }
}

// Module-level cache for combined registry
let cachedRegistry: CombinedRegistry | null = null;

/**
 * Fetch the combined registry from GitHub Releases, with fallback to Vercel.
 */
async function fetchCombinedRegistry(): Promise<CombinedRegistry> {
  if (cachedRegistry) {
    return cachedRegistry;
  }

  // Primary: GitHub Release asset
  try {
    const response = await fetchWithTimeout(REGISTRY_URL);
    if (response.ok) {
      const data = await response.json();
      if (data.version === 2) {
        cachedRegistry = data as CombinedRegistry;
        return cachedRegistry;
      }
    }
  } catch {
    // Fall through to Vercel fallback
  }

  // Fallback: Vercel registry (v1 index.json → construct combined format)
  const url = `${REGISTRY_FALLBACK_URL}/index.json`;
  const response = await fetchWithTimeout(url);

  if (response.status === 404) {
    throw new RegistryError('Registry not found', 'NOT_FOUND');
  }

  if (!response.ok) {
    throw new RegistryError(`Failed to fetch registry: ${response.status}`, 'NETWORK_ERROR');
  }

  let index: PackageIndex;
  try {
    index = (await response.json()) as PackageIndex;
  } catch {
    throw new RegistryError('Invalid registry response', 'INVALID_RESPONSE');
  }

  // Build a thin combined registry — versions are fetched on demand
  const packages: Record<string, CombinedPackageEntry> = {};
  for (const [name, entry] of Object.entries(index.packages)) {
    packages[name] = {
      description: entry.description,
      latest: entry.latest,
      versions: {}, // populated on demand in fetchPackageVersions
    };
  }

  cachedRegistry = {
    version: 2,
    updated: index.updated,
    packages,
  };
  return cachedRegistry;
}

/**
 * Fetch the main package index from the registry
 */
export async function fetchPackageIndex(): Promise<PackageIndex> {
  const combined = await fetchCombinedRegistry();

  const packages: Record<string, PackageIndexEntry> = {};
  for (const [name, entry] of Object.entries(combined.packages)) {
    packages[name] = {
      description: entry.description,
      latest: entry.latest,
      versions:
        Object.keys(entry.versions).length > 0 ? Object.keys(entry.versions) : [entry.latest],
    };
  }

  return {
    version: combined.version,
    updated: combined.updated,
    packages,
  };
}

/**
 * Fetch version details for a specific package
 */
export async function fetchPackageVersions(name: string): Promise<PackageVersions> {
  const combined = await fetchCombinedRegistry();
  const entry = combined.packages[name];

  if (!entry) {
    throw new RegistryError(`Package "${name}" not found in registry`, 'NOT_FOUND');
  }

  // If the combined registry has inline version data, use it directly
  if (Object.keys(entry.versions).length > 0) {
    return {
      name,
      description: entry.description,
      versions: entry.versions,
    };
  }

  // Fallback: fetch per-package JSON from Vercel (thin combined registry from v1 fallback)
  const url = `${REGISTRY_FALLBACK_URL}/packages/${name}.json`;
  const response = await fetchWithTimeout(url);

  if (response.status === 404) {
    throw new RegistryError(`Package "${name}" not found in registry`, 'NOT_FOUND');
  }

  if (!response.ok) {
    throw new RegistryError(`Failed to fetch package info: ${response.status}`, 'NETWORK_ERROR');
  }

  try {
    const data = await response.json();
    const versions = data as PackageVersions;

    // Backfill into cache so subsequent calls don't re-fetch
    entry.versions = versions.versions;

    return versions;
  } catch {
    throw new RegistryError('Invalid package response', 'INVALID_RESPONSE');
  }
}

/**
 * Resolve a package name and optional version to full version info
 * @param name Package name (e.g., "zod")
 * @param version Optional version (e.g., "3" or "latest"). Defaults to "latest"
 * @returns VersionInfo for the resolved version
 */
export async function resolveVersion(name: string, version?: string): Promise<VersionInfo> {
  const packageVersions = await fetchPackageVersions(name);
  const targetVersion = version || 'latest';

  const versionInfo = packageVersions.versions[targetVersion];

  if (!versionInfo) {
    const availableVersions = Object.keys(packageVersions.versions).join(', ');
    throw new RegistryError(
      `Version "${targetVersion}" not found for package "${name}". Available: ${availableVersions}`,
      'NOT_FOUND'
    );
  }

  return versionInfo;
}

/**
 * List all packages in the registry
 */
export async function listRemotePackages(): Promise<PackageIndex['packages']> {
  const index = await fetchPackageIndex();
  return index.packages;
}

/**
 * Check if a package exists in the registry
 */
export async function packageExists(name: string): Promise<boolean> {
  try {
    await fetchPackageVersions(name);
    return true;
  } catch (error) {
    if (error instanceof RegistryError && error.code === 'NOT_FOUND') {
      return false;
    }
    throw error;
  }
}
