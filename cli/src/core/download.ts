import { createHash } from 'crypto';
import { createWriteStream } from 'fs';
import os from 'os';
import path from 'path';
import { Readable } from 'stream';
import { pipeline } from 'stream/promises';

import fs from 'fs-extra';
import * as tar from 'tar';

import { DOWNLOAD_TIMEOUT, USER_AGENT } from './constants.js';

// Custom error for download operations
export class DownloadError extends Error {
  constructor(
    message: string,
    public code: 'NETWORK_ERROR' | 'CHECKSUM_MISMATCH' | 'EXTRACTION_FAILED' | 'TIMEOUT'
  ) {
    super(message);
    this.name = 'DownloadError';
  }
}

/**
 * Download a file from a URL to a destination path
 */
export async function downloadFile(url: string, dest: string): Promise<void> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), DOWNLOAD_TIMEOUT);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': USER_AGENT,
      },
    });

    if (!response.ok) {
      throw new DownloadError(
        `Download failed: ${response.status} ${response.statusText}`,
        'NETWORK_ERROR'
      );
    }

    if (!response.body) {
      throw new DownloadError('No response body', 'NETWORK_ERROR');
    }

    // Ensure destination directory exists
    await fs.ensureDir(path.dirname(dest));

    // Convert web ReadableStream to Node.js Readable
    const nodeReadable = Readable.fromWeb(response.body as any);

    // Stream to file
    const writeStream = createWriteStream(dest);
    await pipeline(nodeReadable, writeStream);
  } catch (error) {
    if (error instanceof DownloadError) {
      throw error;
    }
    if (error instanceof Error && error.name === 'AbortError') {
      throw new DownloadError(`Download timed out after ${DOWNLOAD_TIMEOUT}ms`, 'TIMEOUT');
    }
    throw new DownloadError(
      `Download error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      'NETWORK_ERROR'
    );
  } finally {
    clearTimeout(timeoutId);
  }
}

/**
 * Calculate SHA256 checksum of a file
 */
export async function calculateChecksum(filePath: string): Promise<string> {
  const hash = createHash('sha256');
  const stream = fs.createReadStream(filePath);

  return new Promise((resolve, reject) => {
    stream.on('data', (data) => hash.update(data));
    stream.on('end', () => resolve(`sha256-${hash.digest('base64')}`));
    stream.on('error', reject);
  });
}

/**
 * Verify a file's checksum matches expected value
 */
export async function verifyChecksum(filePath: string, expected: string): Promise<boolean> {
  const actual = await calculateChecksum(filePath);
  return actual === expected;
}

/**
 * Extract a tarball to a destination directory
 */
export async function extractTarball(tarball: string, dest: string): Promise<void> {
  // Ensure destination exists and is empty
  await fs.ensureDir(dest);

  try {
    await tar.extract({
      file: tarball,
      cwd: dest,
      strip: 1, // Remove top-level directory from archive
    });
  } catch (error) {
    throw new DownloadError(
      `Failed to extract tarball: ${error instanceof Error ? error.message : 'Unknown error'}`,
      'EXTRACTION_FAILED'
    );
  }
}

/**
 * Download and install a package from URL
 * @param url Download URL for the tarball
 * @param dest Destination directory
 * @param integrity Expected checksum (sha256-...)
 * @returns Path to the extracted package
 */
export async function downloadAndInstall(
  url: string,
  dest: string,
  integrity: string
): Promise<string> {
  // Create temp directory for download
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'olore-'));
  const tarballPath = path.join(tempDir, 'package.tar.gz');

  try {
    // Download the tarball
    await downloadFile(url, tarballPath);

    // Verify checksum
    const checksumValid = await verifyChecksum(tarballPath, integrity);
    if (!checksumValid) {
      const actual = await calculateChecksum(tarballPath);
      throw new DownloadError(
        `Checksum verification failed.\nExpected: ${integrity}\nActual: ${actual}`,
        'CHECKSUM_MISMATCH'
      );
    }

    // Remove existing destination if present
    await fs.remove(dest);

    // Extract to destination
    await extractTarball(tarballPath, dest);

    return dest;
  } finally {
    // Clean up temp directory
    await fs.remove(tempDir).catch(() => {
      // Ignore cleanup errors
    });
  }
}

/**
 * Get the size of a file in bytes
 */
export async function getFileSize(filePath: string): Promise<number> {
  const stats = await fs.stat(filePath);
  return stats.size;
}

/**
 * Format bytes to human-readable string
 */
export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}
