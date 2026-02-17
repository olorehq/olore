import fs from 'fs';
import path from 'path';

import pc from 'picocolors';

import { getInstalledPackages, InstalledPackageInfo } from '../core/paths.js';

const MARKER_START = '<!-- olore:start -->';
const MARKER_END = '<!-- olore:end -->';
const TARGET_FILES = ['AGENTS.md', 'CLAUDE.md'];

interface InjectOptions {
  remove?: boolean;
  json?: boolean;
  all?: boolean; // New flag to inject all packages (old behavior)
}

interface InjectResult {
  packagesFound: number;
  packagesInjected: number;
  filesWritten: string[];
  removed: boolean;
}

/**
 * Mapping from npm package names to olore package names.
 * Handles cases where the npm name differs from the olore package name.
 */
const NPM_TO_OLORE: Record<string, string> = {
  // Prisma
  '@prisma/client': 'prisma',
  prisma: 'prisma',
  // Next.js
  next: 'nextjs',
  // Drizzle
  'drizzle-orm': 'drizzle',
  'drizzle-kit': 'drizzle',
  // tRPC
  '@trpc/server': 'trpc',
  '@trpc/client': 'trpc',
  '@trpc/react-query': 'trpc',
  // Hono
  hono: 'hono',
  // Zod
  zod: 'zod',
  // TanStack Query
  '@tanstack/react-query': 'tanstack-query',
  '@tanstack/vue-query': 'tanstack-query',
  '@tanstack/solid-query': 'tanstack-query',
  // React Hook Form
  'react-hook-form': 'rhf',
  // Sentry
  '@sentry/node': 'sentry',
  '@sentry/react': 'sentry',
  '@sentry/nextjs': 'sentry',
  '@sentry/browser': 'sentry',
  // Supabase
  '@supabase/supabase-js': 'supabase',
  // Cloudflare
  wrangler: 'cloudflare',
  '@cloudflare/workers-types': 'cloudflare',
  // LangChain
  langchain: 'langchain',
  '@langchain/core': 'langchain',
  // Lucia
  lucia: 'lucia',
  // Vitest
  vitest: 'vitest',
  // Astro
  astro: 'astro',
  // OpenNext
  'open-next': 'opennext',
  // PartyKit / PartyServer
  partykit: 'partykit',
  partysocket: 'partykit',
  partyserver: 'partyserver',
  // T3 Env
  '@t3-oss/env-core': 't3-env',
  '@t3-oss/env-nextjs': 't3-env',
  // XState
  xstate: 'xstate',
  '@xstate/react': 'xstate',
  // Convex
  convex: 'convex',
  // Clerk
  '@clerk/nextjs': 'clerk',
  '@clerk/clerk-react': 'clerk',
  // Neon
  '@neondatabase/serverless': 'neon',
  // Neverthrow
  neverthrow: 'neverthrow',
  // Axiom
  '@axiomhq/js': 'axiom',
  '@axiomhq/nextjs': 'axiom',
  // PostHog
  'posthog-js': 'posthog',
  'posthog-node': 'posthog',
  // Checkly
  checkly: 'checkly',
  // Turso
  '@libsql/client': 'turso',
};

/**
 * Detect project dependencies from package.json.
 * Returns a Set of olore package names that match project dependencies.
 */
function detectProjectDependencies(cwd: string): Set<string> {
  const olorePackages = new Set<string>();
  const packageJsonPath = path.join(cwd, 'package.json');

  if (!fs.existsSync(packageJsonPath)) {
    return olorePackages;
  }

  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    const allDeps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    };

    for (const npmPackage of Object.keys(allDeps)) {
      // Check direct mapping
      if (NPM_TO_OLORE[npmPackage]) {
        olorePackages.add(NPM_TO_OLORE[npmPackage]);
      }
      // Also check if the npm package name matches an olore package directly
      // (e.g., "hono" → "hono", "zod" → "zod")
      else if (npmPackage === npmPackage.toLowerCase().replace(/[^a-z0-9-]/g, '')) {
        olorePackages.add(npmPackage);
      }
    }
  } catch {
    // Ignore parse errors
  }

  return olorePackages;
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
 * Build a skill reference table from installed packages.
 * If projectDeps is provided, only includes packages that match project dependencies.
 */
async function buildInjectedContent(
  projectDeps?: Set<string>
): Promise<{ content: string; count: number; filtered: number }> {
  const allPackages = await getInstalledPackages();

  if (allPackages.length === 0) {
    return { content: '', count: 0, filtered: 0 };
  }

  // Filter packages if projectDeps is provided
  let packages: InstalledPackageInfo[];
  if (projectDeps && projectDeps.size > 0) {
    packages = allPackages.filter((pkg) => projectDeps.has(pkg.name));
  } else {
    packages = allPackages;
  }

  const filtered = allPackages.length - packages.length;

  if (packages.length === 0) {
    return { content: '', count: 0, filtered };
  }

  const rows = packages.map((pkg) => {
    const library = formatLibraryName(pkg.name);
    const version = pkg.version !== 'latest' ? ` ${pkg.version}` : '';
    const skillCommand = `/olore-${pkg.name}-${pkg.version}`;
    return `| ${library}${version} | \`${skillCommand}\` |`;
  });

  const lines = [
    MARKER_START,
    '## Documentation Reference',
    '',
    'Use these skill commands to access up-to-date documentation. Your training data may be outdated.',
    '',
    '| Library | Skill Command |',
    '|---------|---------------|',
    ...rows,
    MARKER_END,
  ];

  return { content: lines.join('\n'), count: packages.length, filtered };
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

  // Detect project dependencies unless --all flag is used
  let projectDeps: Set<string> | undefined;
  if (!options.all) {
    projectDeps = detectProjectDependencies(cwd);
    if (projectDeps.size === 0) {
      // No package.json found or no dependencies - fall back to all packages
      projectDeps = undefined;
    }
  }

  // Build injected content
  const { content, count, filtered } = await buildInjectedContent(projectDeps);

  if (count === 0) {
    if (options.json) {
      const result: InjectResult = {
        packagesFound: filtered,
        packagesInjected: 0,
        filesWritten: [],
        removed: false,
      };
      console.log(JSON.stringify(result, null, 2));
      return;
    }

    if (filtered > 0) {
      console.log(
        pc.yellow(`No installed packages match your project dependencies.`)
      );
      console.log(
        pc.gray(`${filtered} package${filtered === 1 ? '' : 's'} installed but not used in this project.`)
      );
      console.log(pc.gray('Run olore inject --all to inject all installed packages.'));
    } else {
      console.log(pc.yellow('No installed packages found.'));
      console.log(pc.gray('Run olore install <package> to install documentation packages.'));
    }
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
      packagesFound: count + filtered,
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
  if (filtered > 0) {
    console.log(
      pc.gray(`Filtered ${filtered} package${filtered === 1 ? '' : 's'} not in project dependencies.`)
    );
  }
  console.log(pc.gray('Run olore inject --remove to clean up.'));
}
