import os from 'os';
import path from 'path';

import fs from 'fs-extra';

/**
 * Platform utilities for cross-platform compatibility.
 * Windows uses NTFS junctions (no admin required), matching npm/pnpm/yarn behavior.
 */

export const isWindows = process.platform === 'win32';

/**
 * Create a directory symlink on Unix or NTFS junction on Windows.
 * Junctions don't require admin privileges and are the standard approach
 * used by npm, pnpm, and yarn on Windows.
 * Falls back to copy if junction creation fails (e.g., non-NTFS filesystem).
 */
export async function linkOrCopy(source: string, target: string): Promise<void> {
  if (isWindows) {
    try {
      await fs.symlink(source, target, 'junction');
    } catch {
      await fs.copy(source, target);
    }
  } else {
    await fs.symlink(source, target, 'dir');
  }
}

/**
 * Expand ~ to home directory using os.homedir() (works on all platforms).
 * Also resolves relative paths to absolute.
 */
export function expandPath(p: string): string {
  if (p.startsWith('~')) {
    return path.join(os.homedir(), p.slice(1));
  }
  return path.resolve(p);
}

/**
 * Check if a path is a local filesystem path (not a registry package name).
 * Handles Unix paths (., /, ~) and Windows paths (C:\, \\server\share).
 */
export function isLocalPath(p: string): boolean {
  // Unix-style paths
  if (p.startsWith('.') || p.startsWith('/') || p.startsWith('~')) {
    return true;
  }
  // Windows drive letter (e.g., C:\, D:/)
  if (/^[A-Za-z]:/.test(p)) {
    return true;
  }
  // Windows UNC path (e.g., \\server\share)
  if (p.startsWith('\\\\')) {
    return true;
  }
  return false;
}

/**
 * Compare two paths for equality, handling case-insensitivity on Windows.
 */
export function pathsEqual(a: string, b: string): boolean {
  if (isWindows) {
    return a.toLowerCase() === b.toLowerCase();
  }
  return a === b;
}

/**
 * Check if path `child` starts with path `parent`, handling case-insensitivity on Windows.
 */
export function pathStartsWith(child: string, parent: string): boolean {
  if (isWindows) {
    return child.toLowerCase().startsWith(parent.toLowerCase());
  }
  return child.startsWith(parent);
}

/**
 * Get the link action description for user-facing messages.
 */
export function getLinkActionText(): string {
  return 'Linking';
}

/**
 * Get the link type description for user-facing messages.
 */
export function getLinkTypeText(): string {
  return 'linked to';
}
