import pc from 'picocolors';

import { diagnose, displayPath, pruneIssues } from '../core/doctor.js';
import { formatBytes } from '../core/download.js';

interface PruneOptions {
  dryRun?: boolean;
  json?: boolean;
}

export async function prune(options: PruneOptions): Promise<void> {
  if (!options.json) {
    console.log(pc.bold('\nScanning for issues...\n'));
  }

  const { issues } = await diagnose();

  if (issues.length === 0) {
    if (options.json) {
      console.log(JSON.stringify({ removed: [], failed: [] }, null, 2));
    } else {
      console.log(pc.green('Nothing to prune. Everything is clean.'));
    }
    return;
  }

  if (options.dryRun) {
    if (options.json) {
      console.log(JSON.stringify({ dryRun: true, wouldRemove: issues }, null, 2));
      return;
    }

    console.log(
      pc.yellow(`Would remove ${issues.length} item${issues.length === 1 ? '' : 's'}:\n`)
    );
    for (const issue of issues) {
      console.log(`  ${issueLabel(issue.type)}  ${displayPath(issue.path)}`);
    }
    console.log(`\nRun ${pc.cyan('olore prune')} (without --dry-run) to remove them.`);
    return;
  }

  const result = await pruneIssues(issues);

  if (options.json) {
    console.log(JSON.stringify(result, null, 2));
    return;
  }

  if (result.removed.length > 0) {
    let totalFreed = 0;
    console.log(`Removed ${result.removed.length} item${result.removed.length === 1 ? '' : 's'}:`);
    for (const entry of result.removed) {
      totalFreed += entry.freedBytes;
      console.log(
        `  ${pc.green('✓')} ${displayPath(entry.issue.path)} (${issueLabel(entry.issue.type)})`
      );
    }
    if (totalFreed > 0) {
      console.log(`\n${formatBytes(totalFreed)} freed.`);
    }
  }

  if (result.failed.length > 0) {
    console.log('');
    console.log(
      pc.red(
        `Failed to remove ${result.failed.length} item${result.failed.length === 1 ? '' : 's'}:`
      )
    );
    for (const entry of result.failed) {
      console.log(`  ${pc.red('✗')} ${displayPath(entry.issue.path)}: ${entry.error}`);
    }
  }
}

function issueLabel(type: string): string {
  switch (type) {
    case 'dangling-symlink':
      return 'dangling symlink';
    case 'orphaned':
      return 'orphaned package';
    case 'partial-install':
      return 'partial install';
    default:
      return type;
  }
}
