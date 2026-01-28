import path from 'path';

import fs from 'fs-extra';
import ora from 'ora';
import pc from 'picocolors';

import { getAgentPaths, getInstalledPackages, getOlorePackagePath } from '../core/paths.js';

export async function order66(): Promise<void> {
  console.log(pc.red('\n⚠️  Execute Order 66?\n'));
  console.log(pc.yellow('This will remove ALL installed documentation packages.'));

  const packages = await getInstalledPackages();

  if (packages.length === 0) {
    console.log(pc.gray('\nNo packages to remove. The Jedi are already gone.'));
    return;
  }

  console.log(pc.gray(`\nPackages to be removed: ${packages.length}`));
  for (const pkg of packages) {
    console.log(pc.gray(`  - ${pkg.name}@${pkg.version}`));
  }

  // Easter egg message
  console.log(pc.red('\n"It will be done, my lord."\n'));

  const spinner = ora('Executing Order 66...').start();

  let removedCount = 0;
  const agentPaths = getAgentPaths();

  for (const pkg of packages) {
    const skillName = `olore-${pkg.name}-${pkg.version}`;

    // Remove symlinks from all agent skill directories
    for (const [, basePath] of Object.entries(agentPaths)) {
      const skillPath = path.join(basePath, skillName);
      if (await fs.pathExists(skillPath)) {
        await fs.remove(skillPath);
      }
    }

    // If installed (not linked), also remove from ~/.olore
    if (pkg.installType === 'installed') {
      const olorePath = getOlorePackagePath(pkg.name, pkg.version);
      if (await fs.pathExists(olorePath)) {
        await fs.remove(olorePath);
      }
    }

    removedCount++;
  }

  spinner.succeed(`Removed ${removedCount} packages`);
  console.log(pc.gray('\nThe Jedi have been eliminated.'));
}
