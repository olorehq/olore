import fs from 'fs';
import path from 'path';

import pc from 'picocolors';

import { getInstalledPackages, type InstalledPackageInfo } from '../core/paths.js';

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
 * Format a package name for display (e.g., "nextjs" -> "Next.js", "prisma" -> "Prisma").
 */
function formatLibraryName(name: string): string {
  // Handle common special cases
  const specialNames: Record<string, string> = {
    nextjs: 'Next.js',
    'nextjs-docs': 'Next.js',
    't3-env': 'T3 Env',
    rhf: 'React Hook Form',
    'tanstack-query': 'TanStack Query',
    'tanstack-form': 'TanStack Form',
    'ms-agent-framework': 'MS Agent Framework',
  };

  if (specialNames[name]) return specialNames[name];

  // Default: capitalize first letter of each word
  return name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Resolve requested package names to installed packages.
 * Accepts names with or without the "olore-" prefix, and with or without version suffix.
 * e.g., "nextjs", "olore-nextjs", "nextjs@16.1.5", "olore-nextjs-16.1.5"
 */
function resolvePackages(
  requested: string[],
  installed: InstalledPackageInfo[]
): { matched: InstalledPackageInfo[]; notFound: string[] } {
  const matched: InstalledPackageInfo[] = [];
  const notFound: string[] = [];

  for (const req of requested) {
    // Strip olore- prefix if present
    const normalized = req.replace(/^olore-/, '');

    // Try exact name match (e.g., "nextjs" matches name "nextjs")
    let found = installed.find((pkg) => pkg.name === normalized);

    // Try name@version match (e.g., "nextjs@16.1.5")
    if (!found && normalized.includes('@')) {
      const [name, version] = normalized.split('@');
      found = installed.find((pkg) => pkg.name === name && pkg.version === version);
    }

    // Try name-version match (e.g., "nextjs-16.1.5")
    if (!found) {
      found = installed.find((pkg) => `${pkg.name}-${pkg.version}` === normalized);
    }

    if (found) {
      // Avoid duplicates
      if (!matched.includes(found)) {
        matched.push(found);
      }
    } else {
      notFound.push(req);
    }
  }

  return { matched, notFound };
}

/**
 * Build a skill reference table from the given packages.
 */
function buildInjectedContent(packages: InstalledPackageInfo[]): string {
  const rows = packages.map((pkg) => {
    const library = formatLibraryName(pkg.name);
    const version = pkg.version !== 'latest' ? ` ${pkg.version}` : '';
    const skillCommand = `olore-${pkg.name}-${pkg.version}`;
    return `| ${library}${version} | \`${skillCommand}\` |`;
  });

  const lines = [
    MARKER_START,
    '## Documentation Reference',
    '',
    'Use these skills to access up-to-date documentation. Your training data may be outdated.',
    '',
    '| Library | Skill |',
    '|---------|-------|',
    ...rows,
    MARKER_END,
  ];

  return lines.join('\n');
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

export async function inject(packages: string[], options: InjectOptions): Promise<void> {
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

  // Require explicit package names
  if (packages.length === 0) {
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

    console.log(pc.yellow('No packages specified.'));
    console.log(pc.gray('Usage: olore inject <package1> <package2> ...'));
    console.log(pc.gray('Example: olore inject nextjs prisma zod'));
    return;
  }

  // Resolve requested packages against installed ones
  const installed = await getInstalledPackages();
  const { matched, notFound } = resolvePackages(packages, installed);

  if (notFound.length > 0) {
    console.log(pc.yellow(`Not installed: ${notFound.join(', ')}`));
    console.log(pc.gray('Run olore install <package> first.'));
    if (matched.length === 0) return;
  }

  if (matched.length === 0) {
    if (options.json) {
      const result: InjectResult = {
        packagesFound: 0,
        packagesInjected: 0,
        filesWritten: [],
        removed: false,
      };
      console.log(JSON.stringify(result, null, 2));
    }
    return;
  }

  // Build and write injected content
  const content = buildInjectedContent(matched);
  const filesWritten: string[] = [];
  for (const fileName of TARGET_FILES) {
    const filePath = path.join(cwd, fileName);
    smartMerge(filePath, content);
    filesWritten.push(fileName);
  }

  if (options.json) {
    const result: InjectResult = {
      packagesFound: installed.length,
      packagesInjected: matched.length,
      filesWritten,
      removed: false,
    };
    console.log(JSON.stringify(result, null, 2));
    return;
  }

  console.log(
    pc.green(
      `Injected ${matched.length} package${matched.length === 1 ? '' : 's'} into: ${filesWritten.join(', ')}`
    )
  );
  console.log(pc.gray('Run olore inject --remove to clean up.'));
}
