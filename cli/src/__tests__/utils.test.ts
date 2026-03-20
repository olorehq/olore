import { describe, expect, it } from 'vitest';

import { formatBytes } from '../core/download.js';
import { expandPath, isLocalPath } from '../core/platform.js';
import { compareVersions } from '../core/version-check.js';

describe('formatBytes', () => {
  it('returns "0 B" for zero bytes', () => {
    expect(formatBytes(0)).toBe('0 B');
  });

  it('formats bytes', () => {
    expect(formatBytes(512)).toBe('512 B');
  });

  it('formats kilobytes', () => {
    expect(formatBytes(1024)).toBe('1 KB');
  });

  it('formats megabytes', () => {
    expect(formatBytes(1024 * 1024)).toBe('1 MB');
  });

  it('formats with one decimal place when not a whole number', () => {
    expect(formatBytes(1536)).toBe('1.5 KB');
  });
});

describe('compareVersions', () => {
  it('returns 0 for equal versions', () => {
    expect(compareVersions('1.2.3', '1.2.3')).toBe(0);
  });

  it('returns -1 when current is older', () => {
    expect(compareVersions('1.0.0', '1.0.1')).toBe(-1);
    expect(compareVersions('1.0.0', '2.0.0')).toBe(-1);
  });

  it('returns 1 when current is newer', () => {
    expect(compareVersions('1.0.1', '1.0.0')).toBe(1);
    expect(compareVersions('2.0.0', '1.9.9')).toBe(1);
  });

  it('handles v-prefixed version strings', () => {
    expect(compareVersions('v1.0.0', 'v1.0.1')).toBe(-1);
    expect(compareVersions('v1.0.1', 'v1.0.0')).toBe(1);
    expect(compareVersions('v1.0.0', 'v1.0.0')).toBe(0);
  });

  it('handles missing patch segment', () => {
    expect(compareVersions('1.0', '1.0.0')).toBe(0);
  });
});

describe('isLocalPath', () => {
  it('detects relative paths starting with ./', () => {
    expect(isLocalPath('./vault/packages/zod')).toBe(true);
  });

  it('detects relative paths starting with ../', () => {
    expect(isLocalPath('../other')).toBe(true);
  });

  it('detects absolute Unix paths', () => {
    expect(isLocalPath('/usr/local/packages')).toBe(true);
  });

  it('detects home-relative paths', () => {
    expect(isLocalPath('~/projects/my-pkg')).toBe(true);
  });

  it('returns false for registry package names', () => {
    expect(isLocalPath('zod')).toBe(false);
    expect(isLocalPath('prisma')).toBe(false);
  });

  it('detects Windows drive paths', () => {
    expect(isLocalPath('C:\\packages\\zod')).toBe(true);
    expect(isLocalPath('D:/packages')).toBe(true);
  });

  it('detects Windows UNC paths', () => {
    expect(isLocalPath('\\\\server\\share')).toBe(true);
  });
});

describe('expandPath', () => {
  it('expands ~ to the home directory', () => {
    const result = expandPath('~/foo/bar');
    expect(result).not.toContain('~');
    expect(result.endsWith('/foo/bar')).toBe(true);
  });

  it('resolves a relative path to an absolute path', () => {
    const result = expandPath('./some/relative');
    expect(result.startsWith('/')).toBe(true);
  });

  it('returns absolute paths unchanged (modulo resolution)', () => {
    const result = expandPath('/absolute/path');
    expect(result).toBe('/absolute/path');
  });
});
