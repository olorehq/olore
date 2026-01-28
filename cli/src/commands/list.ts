import pc from 'picocolors';

import { getInstalledPackages } from '../core/paths.js';

interface ListOptions {
  json?: boolean;
}

export async function list(options: ListOptions): Promise<void> {
  const packages = await getInstalledPackages();

  if (packages.length === 0) {
    // Easter egg: Darth Vader quote
    console.log(pc.yellow('\nI find your lack of skills disturbing.\n'));
    console.log(pc.gray('No packages installed.'));
    console.log(`Run ${pc.cyan('olore install <package>')} to install documentation.`);
    return;
  }

  if (options.json) {
    console.log(JSON.stringify(packages, null, 2));
    return;
  }

  console.log(pc.bold('\nInstalled packages:\n'));
  console.log(
    pc.gray(
      'PACKAGE'.padEnd(25) +
        'VERSION'.padEnd(12) +
        'TYPE'.padEnd(10) +
        'FILES'.padStart(8) +
        'SIZE'.padStart(12)
    )
  );
  console.log(pc.gray('-'.repeat(67)));

  for (const pkg of packages) {
    const typeLabel = pkg.installType === 'linked' ? pc.blue('linked') : pkg.installType;
    console.log(
      pkg.name.padEnd(25) +
        pkg.version.padEnd(12) +
        typeLabel.padEnd(10) +
        String(pkg.files).padStart(8) +
        formatSize(pkg.size).padStart(12)
    );
  }

  console.log(pc.gray('-'.repeat(67)));
  console.log(pc.gray(`Total: ${packages.length} packages`));
  console.log('');
  console.log(pc.gray('Types: installed = in ~/.olore, linked = dev symlink, copied = legacy'));
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
