// Registry configuration
export const REGISTRY_URL =
  'https://github.com/olorehq/olore/releases/download/registry/registry.json';
export const REGISTRY_FALLBACK_URL = 'https://olore.dev/registry';
export const DOWNLOAD_TIMEOUT = 60000; // 60 seconds

/**
 * Build the User-Agent header string for HTTP requests.
 * @param version - The current CLI version from package.json
 */
export function getUserAgent(version: string): string {
  return `olore-cli/${version}`;
}
