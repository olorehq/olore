import ora from 'ora';
import pc from 'picocolors';

import { getInstalledPackages } from '../core/paths.js';
import { fetchPackageIndex, PackageIndexEntry, RegistryError } from '../core/registry.js';

interface SearchOptions {
  json?: boolean;
}

export async function search(query: string | undefined, options: SearchOptions): Promise<void> {
  const spinner = ora('Fetching package registry...').start();

  let packages: Record<string, PackageIndexEntry>;
  try {
    const index = await fetchPackageIndex();
    packages = index.packages;
    spinner.stop();
  } catch (error) {
    spinner.fail('Failed to fetch registry');
    if (error instanceof RegistryError) {
      if (error.code === 'NETWORK_ERROR' || error.code === 'TIMEOUT') {
        console.log(pc.red(`\nNetwork error: ${error.message}`));
        console.log(pc.gray('Please check your internet connection and try again.'));
      } else {
        console.log(pc.red(`\nError: ${error.message}`));
      }
    } else {
      console.log(pc.red(`\nError: ${error instanceof Error ? error.message : 'Unknown error'}`));
    }
    process.exit(1);
  }

  // Filter by query if provided
  let entries = Object.entries(packages);
  if (query) {
    const q = query.toLowerCase();
    entries = entries.filter(
      ([name, info]) => name.toLowerCase().includes(q) || info.description.toLowerCase().includes(q)
    );
  }

  if (entries.length === 0) {
    if (query) {
      console.log(pc.yellow(`\nNo packages matching '${query}'`));
    } else {
      console.log(pc.yellow('\nNo packages available in the registry'));
    }
    return;
  }

  // Get installed packages for status markers
  const installed = await getInstalledPackages();
  const installedNames = new Set(installed.map((p) => p.name));
  const installedVersions = new Map<string, string>();
  for (const pkg of installed) {
    installedVersions.set(pkg.name, pkg.version);
  }

  if (options.json) {
    const result = {
      packages: entries.map(([name, info]) => ({
        name,
        description: info.description,
        versions: info.versions,
        installed: installedNames.has(name),
        installedVersion: installedVersions.get(name) || null,
      })),
      ...(query ? { query } : {}),
    };
    console.log(JSON.stringify(result, null, 2));
    return;
  }

  // Table output
  const colName = 20;
  const colDesc = 44;
  const colVersions = 12;

  console.log(pc.bold('\nAvailable packages:\n'));
  console.log(
    pc.gray(
      'PACKAGE'.padEnd(colName) +
        'DESCRIPTION'.padEnd(colDesc) +
        'VERSIONS'.padEnd(colVersions) +
        'INSTALLED'
    )
  );
  console.log(pc.gray('\u2500'.repeat(colName + colDesc + colVersions + 12)));

  for (const [name, info] of entries.sort(([a], [b]) => a.localeCompare(b))) {
    const desc = truncate(info.description, colDesc - 2);
    const versions = info.versions.join(', ');
    const installedVersion = installedVersions.get(name);
    const status = installedVersion ? pc.green(`\u2713 ${installedVersion}`) : '';

    console.log(
      name.padEnd(colName) + desc.padEnd(colDesc) + versions.padEnd(colVersions) + status
    );
  }

  console.log(pc.gray('\u2500'.repeat(colName + colDesc + colVersions + 12)));
  console.log(pc.gray(`${entries.length} package${entries.length === 1 ? '' : 's'} available`));
  console.log(`\nInstall with: ${pc.cyan('olore install <package>')}`);
}

function truncate(str: string, maxLen: number): string {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen - 1) + '\u2026';
}
