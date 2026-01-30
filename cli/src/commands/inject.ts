import fs from 'fs';
import path from 'path';

import pc from 'picocolors';

import { getInstalledPackages } from '../core/paths.js';

const MARKER_START = '<!-- olore:start -->';
const MARKER_END = '<!-- olore:end -->';
const TARGET_FILES = ['AGENTS.md', 'CLAUDE.md'];

interface InjectOptions {
  remove?: boolean;
  json?: boolean;
}

interface InjectResult {
  packagesFound: number;
  packagesInjected: number;
  filesWritten: string[];
  removed: boolean;
}

/**
 * Resolve relative `contents/` paths in INDEX.md to absolute paths
 * based on the real (symlink-resolved) package location.
 */
function resolveIndexPaths(content: string, packagePath: string): string {
  const resolvedBase = fs.realpathSync(packagePath);
  const lines = content.split('\n');

  return lines
    .map((line) => {
      // Match keyword|contents/... lines
      const pipeIndex = line.indexOf('|');
      if (pipeIndex === -1) return line;

      const keywords = line.slice(0, pipeIndex);
      const relativePath = line.slice(pipeIndex + 1).trim();

      // Only transform lines with contents/ paths
      if (!relativePath.startsWith('contents/')) return line;

      const absolutePath = path.join(resolvedBase, relativePath);
      return `${keywords}|${absolutePath}`;
    })
    .join('\n');
}

/**
 * Build combined olore section from all installed packages with INDEX.md.
 */
async function buildInjectedContent(): Promise<{ content: string; count: number }> {
  const packages = await getInstalledPackages();
  const sections: string[] = [];
  let count = 0;

  for (const pkg of packages) {
    const indexPath = path.join(pkg.path, 'INDEX.md');
    if (!fs.existsSync(indexPath)) continue;

    const rawContent = fs.readFileSync(indexPath, 'utf-8');
    const resolved = resolveIndexPaths(rawContent, pkg.path);
    sections.push(resolved);
    count++;
  }

  if (count === 0) {
    return { content: '', count: 0 };
  }

  const combined = [MARKER_START, '', ...sections.map((s) => s.trim()), '', MARKER_END].join('\n');

  return { content: combined, count };
}

/**
 * Smart merge: insert or replace olore section in a file.
 * - File doesn't exist -> create it
 * - File has markers -> replace content between markers
 * - File exists, no markers -> append to end
 */
function smartMerge(filePath: string, injectedContent: string): void {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, injectedContent + '\n', 'utf-8');
    return;
  }

  const existing = fs.readFileSync(filePath, 'utf-8');
  const startIdx = existing.indexOf(MARKER_START);
  const endIdx = existing.indexOf(MARKER_END);

  if (startIdx !== -1 && endIdx !== -1) {
    // Replace existing olore section
    const before = existing.slice(0, startIdx);
    const after = existing.slice(endIdx + MARKER_END.length);
    fs.writeFileSync(filePath, before + injectedContent + after, 'utf-8');
  } else {
    // Append to end
    const separator = existing.endsWith('\n') ? '\n' : '\n\n';
    fs.writeFileSync(filePath, existing + separator + injectedContent + '\n', 'utf-8');
  }
}

/**
 * Remove olore section from a file.
 * Returns true if content was removed.
 */
function removeSection(filePath: string): boolean {
  if (!fs.existsSync(filePath)) return false;

  const content = fs.readFileSync(filePath, 'utf-8');
  const startIdx = content.indexOf(MARKER_START);
  const endIdx = content.indexOf(MARKER_END);

  if (startIdx === -1 || endIdx === -1) return false;

  const before = content.slice(0, startIdx);
  const after = content.slice(endIdx + MARKER_END.length);

  // Clean up: remove trailing whitespace but keep file content intact
  const result = (before + after).replace(/\n{3,}/g, '\n\n').trim();

  if (result.length === 0) {
    fs.unlinkSync(filePath);
  } else {
    fs.writeFileSync(filePath, result + '\n', 'utf-8');
  }

  return true;
}

export async function inject(options: InjectOptions): Promise<void> {
  const cwd = process.cwd();

  if (options.remove) {
    const filesRemoved: string[] = [];

    for (const fileName of TARGET_FILES) {
      const filePath = path.join(cwd, fileName);
      if (removeSection(filePath)) {
        filesRemoved.push(fileName);
      }
    }

    if (options.json) {
      const result: InjectResult = {
        packagesFound: 0,
        packagesInjected: 0,
        filesWritten: filesRemoved,
        removed: true,
      };
      console.log(JSON.stringify(result, null, 2));
      return;
    }

    if (filesRemoved.length === 0) {
      console.log(pc.yellow('No olore sections found in project files.'));
    } else {
      console.log(pc.green(`Removed olore sections from: ${filesRemoved.join(', ')}`));
    }
    return;
  }

  // Build injected content
  const { content, count } = await buildInjectedContent();

  if (count === 0) {
    if (options.json) {
      const result: InjectResult = {
        packagesFound: 0,
        packagesInjected: 0,
        filesWritten: [],
        removed: false,
      };
      console.log(JSON.stringify(result, null, 2));
      return;
    }

    console.log(pc.yellow('No installed packages have INDEX.md files.'));
    console.log(pc.gray('Build packages with the latest templates to generate INDEX.md.'));
    return;
  }

  // Write to target files
  const filesWritten: string[] = [];
  for (const fileName of TARGET_FILES) {
    const filePath = path.join(cwd, fileName);
    smartMerge(filePath, content);
    filesWritten.push(fileName);
  }

  if (options.json) {
    const result: InjectResult = {
      packagesFound: count,
      packagesInjected: count,
      filesWritten,
      removed: false,
    };
    console.log(JSON.stringify(result, null, 2));
    return;
  }

  console.log(
    pc.green(
      `Injected ${count} package${count === 1 ? '' : 's'} into: ${filesWritten.join(', ')}`
    )
  );
  console.log(pc.gray('Run olore inject --remove to clean up.'));
}
