import pc from 'picocolors';

import { diagnose, displayPath, formatIssue } from '../core/doctor.js';
import type { Issue } from '../core/doctor.js';

interface DoctorOptions {
  json?: boolean;
}

export async function doctor(options: DoctorOptions): Promise<void> {
  if (!options.json) {
    console.log(pc.bold('\nChecking installed packages...\n'));
  }

  const result = await diagnose();

  if (options.json) {
    console.log(JSON.stringify(result, null, 2));
    if (!result.ok) {
      process.exit(1);
    }
    return;
  }

  if (result.ok) {
    console.log(pc.green('No issues found. Everything looks good.'));
    return;
  }

  const dangling = result.issues.filter((i) => i.type === 'dangling-symlink');
  const orphaned = result.issues.filter((i) => i.type === 'orphaned');
  const partial = result.issues.filter((i) => i.type === 'partial-install');

  console.log(
    `Found ${pc.yellow(String(result.issues.length))} issue${result.issues.length === 1 ? '' : 's'}:\n`
  );

  if (dangling.length > 0) {
    console.log(pc.bold(`Dangling symlinks (${dangling.length}):`));
    for (const issue of dangling) {
      console.log(`  ${formatIssue(issue)}`);
    }
    console.log('');
  }

  if (orphaned.length > 0) {
    console.log(pc.bold(`Orphaned packages (${orphaned.length}):`));
    for (const issue of orphaned) {
      console.log(`  ${formatIssue(issue)}`);
    }
    console.log('');
  }

  if (partial.length > 0) {
    console.log(pc.bold(`Partial installs (${partial.length}):`));
    for (const issue of partial) {
      console.log(`  ${formatIssue(issue)}`);
    }
    console.log('');
  }

  console.log(`Run ${pc.cyan('olore prune')} to fix these issues.`);
  process.exit(1);
}
