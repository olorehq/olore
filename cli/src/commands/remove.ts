import path from 'path';

import fs from 'fs-extra';
import ora from 'ora';
import pc from 'picocolors';

import { getAgentPaths, getInstalledPackages, getOlorePackagePath } from '../core/paths.js';

export async function remove(pkg: string): Promise<void> {
  console.log(pc.bold(`\nRemoving ${pkg}...\n`));

  const packages = await getInstalledPackages();

  // Support both short name (e.g., "zod") and full name (e.g., "zod@latest")
  let name = pkg;
  let version: string | undefined;
  if (pkg.includes('@')) {
    [name, version] = pkg.split('@');
  }

  // Find matching packages
  const matches = packages.filter((p) => {
    if (version) {
      return p.name === name && p.version === version;
    }
    return p.name === name;
  });

  if (matches.length === 0) {
    console.error(pc.red(`Package not found: ${pkg}`));
    console.log('\nInstalled packages:');
    for (const p of packages) {
      console.log(`  ${pc.cyan(p.name)}@${p.version}`);
    }
    process.exit(1);
  }

  if (matches.length > 1 && !version) {
    console.error(pc.red(`Multiple versions found for ${name}:`));
    for (const p of matches) {
      console.log(`  ${pc.cyan(p.name)}@${p.version} (${p.installType})`);
    }
    console.log(`\nSpecify version: ${pc.cyan(`olore remove ${name}@<version>`)}`);
    process.exit(1);
  }

  const found = matches[0];
  const skillName = `olore-${found.name}-${found.version}`;
  const spinner = ora('Removing package...').start();

  const removed: string[] = [];

  // Remove symlinks from all agent skill directories
  const agentPaths = getAgentPaths();
  for (const [agent, basePath] of Object.entries(agentPaths)) {
    const skillPath = path.join(basePath, skillName);
    if (await fs.pathExists(skillPath)) {
      await fs.remove(skillPath);
      removed.push(`${pc.green('✓')} ${agent}`);
    }
  }

  // If installed (not linked), also remove from ~/.olore
  if (found.installType === 'installed') {
    const olorePath = getOlorePackagePath(found.name, found.version);
    if (await fs.pathExists(olorePath)) {
      await fs.remove(olorePath);
      removed.push(`${pc.green('✓')} ~/.olore`);
    }
  }

  spinner.stop();

  if (removed.length === 0) {
    console.log(pc.yellow('No files found to remove.'));
  } else {
    removed.forEach((line) => console.log(`  ${line}`));
    console.log('');
    console.log(pc.green(`Removed ${found.name}@${found.version}`));
  }
}
