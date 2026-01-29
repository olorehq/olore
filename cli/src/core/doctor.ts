import fs from 'fs';
import os from 'os';
import path from 'path';

import fsExtra from 'fs-extra';

import { formatBytes } from './download.js';
import { getAgentPaths, getOloreHome } from './paths.js';

// --- Types ---

export interface DanglingSymlinkIssue {
  type: 'dangling-symlink';
  path: string;
  target: string;
  agent: string;
}

export interface OrphanedPackageIssue {
  type: 'orphaned';
  path: string;
  name: string;
  version: string;
  files: number;
  size: number;
}

export interface PartialInstallIssue {
  type: 'partial-install';
  path: string;
  name: string;
  version: string;
}

export type Issue = DanglingSymlinkIssue | OrphanedPackageIssue | PartialInstallIssue;

export interface DiagnosticResult {
  ok: boolean;
  issues: Issue[];
}

export interface PruneResult {
  removed: PruneEntry[];
  failed: PruneFailure[];
}

export interface PruneEntry {
  issue: Issue;
  freedBytes: number;
}

export interface PruneFailure {
  issue: Issue;
  error: string;
}

// --- Diagnostic Functions ---

/**
 * Run full diagnostics: scan agent dirs for dangling symlinks,
 * scan ~/.olore for orphaned packages and partial installs.
 */
export async function diagnose(): Promise<DiagnosticResult> {
  const issues: Issue[] = [];

  const [dangling, orphaned, partial] = await Promise.all([
    scanAgentDirs(),
    scanOrphanedPackages(),
    scanPartialInstalls(),
  ]);

  issues.push(...dangling, ...orphaned, ...partial);

  return {
    ok: issues.length === 0,
    issues,
  };
}

/**
 * Find dangling olore-* symlinks in all agent skill directories.
 * A symlink is dangling if its target does not exist on disk.
 */
export async function scanAgentDirs(): Promise<Issue[]> {
  const issues: Issue[] = [];
  const agentPaths = getAgentPaths();

  for (const [agent, skillsDir] of Object.entries(agentPaths)) {
    if (!fs.existsSync(skillsDir)) {
      continue;
    }

    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(skillsDir, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const entry of entries) {
      if (!entry.name.startsWith('olore-')) {
        continue;
      }

      // Only check symlinks/junctions
      if (!entry.isSymbolicLink()) {
        continue;
      }

      const fullPath = path.join(skillsDir, entry.name);
      const target = readSymlinkTarget(fullPath);
      if (target === null) {
        continue;
      }

      // Resolve relative targets against the symlink's parent directory
      const resolvedTarget = path.resolve(skillsDir, target);

      if (!fs.existsSync(resolvedTarget)) {
        issues.push({
          type: 'dangling-symlink',
          path: fullPath,
          target: resolvedTarget,
          agent,
        });
      }
    }
  }

  return issues;
}

/**
 * Find packages in ~/.olore/packages/ that no agent skill directory references.
 * A package is orphaned if no symlink in any agent dir points to it.
 */
export async function scanOrphanedPackages(): Promise<Issue[]> {
  const issues: Issue[] = [];
  const packagesDir = path.join(getOloreHome(), 'packages');

  if (!fs.existsSync(packagesDir)) {
    return issues;
  }

  const activeTargets = await collectActiveSymlinkTargets();

  // Walk ~/.olore/packages/{name}/{version}/
  let nameEntries: fs.Dirent[];
  try {
    nameEntries = fs.readdirSync(packagesDir, { withFileTypes: true });
  } catch {
    return issues;
  }

  for (const nameEntry of nameEntries) {
    if (!nameEntry.isDirectory()) {
      continue;
    }

    const nameDir = path.join(packagesDir, nameEntry.name);
    let versionEntries: fs.Dirent[];
    try {
      versionEntries = fs.readdirSync(nameDir, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const versionEntry of versionEntries) {
      if (!versionEntry.isDirectory()) {
        continue;
      }

      const versionDir = path.join(nameDir, versionEntry.name);

      // Skip partial installs (handled by scanPartialInstalls)
      const lockPath = path.join(versionDir, 'olore-lock.json');
      if (!fs.existsSync(lockPath)) {
        continue;
      }

      // Check if any agent symlink points to this directory
      const realPath = fs.realpathSync(versionDir);
      if (activeTargets.has(realPath)) {
        continue;
      }

      // It's orphaned - collect stats
      const stats = getDirectoryStats(versionDir);
      issues.push({
        type: 'orphaned',
        path: versionDir,
        name: nameEntry.name,
        version: versionEntry.name,
        files: stats.files,
        size: stats.size,
      });
    }
  }

  return issues;
}

/**
 * Find directories in ~/.olore/packages/ that are missing olore-lock.json,
 * indicating a partial or interrupted install.
 */
export async function scanPartialInstalls(): Promise<Issue[]> {
  const issues: Issue[] = [];
  const packagesDir = path.join(getOloreHome(), 'packages');

  if (!fs.existsSync(packagesDir)) {
    return issues;
  }

  let nameEntries: fs.Dirent[];
  try {
    nameEntries = fs.readdirSync(packagesDir, { withFileTypes: true });
  } catch {
    return issues;
  }

  for (const nameEntry of nameEntries) {
    if (!nameEntry.isDirectory()) {
      continue;
    }

    const nameDir = path.join(packagesDir, nameEntry.name);
    let versionEntries: fs.Dirent[];
    try {
      versionEntries = fs.readdirSync(nameDir, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const versionEntry of versionEntries) {
      if (!versionEntry.isDirectory()) {
        continue;
      }

      const versionDir = path.join(nameDir, versionEntry.name);
      const lockPath = path.join(versionDir, 'olore-lock.json');

      if (!fs.existsSync(lockPath)) {
        issues.push({
          type: 'partial-install',
          path: versionDir,
          name: nameEntry.name,
          version: versionEntry.name,
        });
      }
    }
  }

  return issues;
}

/**
 * Collect the real paths of all symlink targets from all agent skill directories.
 * Only considers olore-* entries that are symlinks.
 */
export async function collectActiveSymlinkTargets(): Promise<Set<string>> {
  const targets = new Set<string>();
  const agentPaths = getAgentPaths();

  for (const skillsDir of Object.values(agentPaths)) {
    if (!fs.existsSync(skillsDir)) {
      continue;
    }

    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(skillsDir, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const entry of entries) {
      if (!entry.name.startsWith('olore-') || !entry.isSymbolicLink()) {
        continue;
      }

      const fullPath = path.join(skillsDir, entry.name);
      try {
        // Use realpathSync which resolves the symlink and gives the canonical path
        const realTarget = fs.realpathSync(fullPath);
        targets.add(realTarget);
      } catch {
        // Dangling symlink - can't resolve, skip
      }
    }
  }

  return targets;
}

/**
 * Remove all issues found by diagnose().
 * Handles each item individually so one failure doesn't block others.
 */
export async function pruneIssues(issues: Issue[]): Promise<PruneResult> {
  const removed: PruneEntry[] = [];
  const failed: PruneFailure[] = [];

  for (const issue of issues) {
    // Check if still exists (race condition guard)
    // Use lstatSync for dangling symlinks since existsSync follows symlinks
    if (!pathExists(issue.path)) {
      continue;
    }

    try {
      let freedBytes = 0;

      if (issue.type === 'dangling-symlink') {
        // Remove just the symlink itself
        await fsExtra.remove(issue.path);
      } else if (issue.type === 'orphaned') {
        freedBytes = issue.size;
        await fsExtra.remove(issue.path);
        await cleanEmptyParentDir(issue.path);
      } else if (issue.type === 'partial-install') {
        const stats = getDirectoryStats(issue.path);
        freedBytes = stats.size;
        await fsExtra.remove(issue.path);
        await cleanEmptyParentDir(issue.path);
      }

      removed.push({ issue, freedBytes });
    } catch (error) {
      failed.push({
        issue,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  return { removed, failed };
}

// --- Helpers ---

/**
 * Check if a path exists on disk, including dangling symlinks.
 * fs.existsSync follows symlinks and returns false for dangling ones.
 * This uses lstatSync which checks the entry itself.
 */
function pathExists(p: string): boolean {
  try {
    fs.lstatSync(p);
    return true;
  } catch {
    return false;
  }
}

function readSymlinkTarget(symlinkPath: string): string | null {
  try {
    return fs.readlinkSync(symlinkPath);
  } catch {
    return null;
  }
}

/**
 * Remove the parent directory if it's empty after a version dir was removed.
 * e.g., remove ~/.olore/packages/zod/ if it has no more version subdirectories.
 */
async function cleanEmptyParentDir(removedPath: string): Promise<void> {
  const parentDir = path.dirname(removedPath);
  try {
    const remaining = fs.readdirSync(parentDir);
    if (remaining.length === 0) {
      await fsExtra.remove(parentDir);
    }
  } catch {
    // Parent already gone or permission error - ignore
  }
}

function getDirectoryStats(dir: string): { files: number; size: number } {
  let files = 0;
  let size = 0;

  function walk(currentDir: string): void {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(currentDir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile()) {
        try {
          files++;
          size += fs.statSync(fullPath).size;
        } catch {
          // Skip files we can't stat
        }
      }
    }
  }

  walk(dir);
  return { files, size };
}

/**
 * Format a file path for display, replacing home directory with ~.
 */
export function displayPath(p: string): string {
  const home = os.homedir();
  if (p.startsWith(home)) {
    return '~' + p.slice(home.length);
  }
  return p;
}

/**
 * Format an issue for human-readable display.
 */
export function formatIssue(issue: Issue): string {
  switch (issue.type) {
    case 'dangling-symlink':
      return `${displayPath(issue.path)}  ->  ${displayPath(issue.target)} (missing)`;
    case 'orphaned':
      return `${displayPath(issue.path)}  (no agent links, ${issue.files} files, ${formatBytes(issue.size)})`;
    case 'partial-install':
      return `${displayPath(issue.path)}  (missing olore-lock.json)`;
  }
}
