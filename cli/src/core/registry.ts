import { DOWNLOAD_TIMEOUT, REGISTRY_URL, USER_AGENT } from './constants.js';

// Registry index format
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

// Per-package version details
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

/**
 * Fetch the main package index from the registry
 */
export async function fetchPackageIndex(): Promise<PackageIndex> {
  const url = `${REGISTRY_URL}/index.json`;

  const response = await fetchWithTimeout(url);

  if (response.status === 404) {
    throw new RegistryError('Registry not found', 'NOT_FOUND');
  }

  if (!response.ok) {
    throw new RegistryError(`Failed to fetch registry: ${response.status}`, 'NETWORK_ERROR');
  }

  try {
    const data = await response.json();
    return data as PackageIndex;
  } catch {
    throw new RegistryError('Invalid registry response', 'INVALID_RESPONSE');
  }
}

/**
 * Fetch version details for a specific package
 */
export async function fetchPackageVersions(name: string): Promise<PackageVersions> {
  const url = `${REGISTRY_URL}/packages/${name}.json`;

  const response = await fetchWithTimeout(url);

  if (response.status === 404) {
    throw new RegistryError(`Package "${name}" not found in registry`, 'NOT_FOUND');
  }

  if (!response.ok) {
    throw new RegistryError(`Failed to fetch package info: ${response.status}`, 'NETWORK_ERROR');
  }

  try {
    const data = await response.json();
    return data as PackageVersions;
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
