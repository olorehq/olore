import path from 'path';

import fs from 'fs-extra';
import ora from 'ora';
import pc from 'picocolors';

import {
  downloadAndExtractToTemp,
  downloadAndInstall,
  DownloadError,
  formatBytes,
} from '../core/download.js';
import { detectAgents, getAgentPaths, getOlorePackagePath } from '../core/paths.js';
import { expandPath, isLocalPath, isWindows, linkOrCopy } from '../core/platform.js';
import { RegistryError, resolveVersion, VersionInfo } from '../core/registry.js';

interface InstallOptions {
  version?: string;
  keep?: boolean;
  force?: boolean;
}

interface OloreLock {
  name: string;
  version: string;
  source?: {
    type: string;
    repo?: string;
    ref?: string;
    commit?: string;
  };
  builtAt?: string;
  files?: number;
}

async function installFromLocal(localPath: string): Promise<void> {
  const fullPath = expandPath(localPath);

  // Verify path exists
  if (!(await fs.pathExists(fullPath))) {
    throw new Error(`Path not found: ${fullPath}`);
  }

  // Verify it's a directory
  const stat = await fs.stat(fullPath);
  if (!stat.isDirectory()) {
    throw new Error(`Not a directory: ${fullPath}`);
  }

  // Check for olore-lock.json
  const lockPath = path.join(fullPath, 'olore-lock.json');
  if (!(await fs.pathExists(lockPath))) {
    throw new Error(`Missing olore-lock.json in ${fullPath}`);
  }

  // Check for SKILL.md
  const skillPath = path.join(fullPath, 'SKILL.md');
  if (!(await fs.pathExists(skillPath))) {
    throw new Error(`Missing SKILL.md in ${fullPath}. Run /generate-agent-skills first.`);
  }

  // Read lock file
  const lock: OloreLock = await fs.readJson(lockPath);
  const packageName = lock.name;
  const packageVersion = lock.version;

  if (!packageName) {
    throw new Error(`Invalid olore-lock.json: missing "name" field`);
  }

  if (!packageVersion) {
    throw new Error(`Invalid olore-lock.json: missing "version" field`);
  }

  // Skill name includes version for multi-version support (e.g., zod3 vs zod4)
  const skillName = `olore-${packageName}-${packageVersion}`;

  // Validate SKILL.md name matches expected folder name
  const skillContent = await fs.readFile(skillPath, 'utf-8');
  const nameMatch = skillContent.match(/^name:\s*(.+)$/m);
  const skillMdName = nameMatch ? nameMatch[1].trim() : null;

  if (skillMdName !== skillName) {
    console.log(pc.yellow(`\nWarning: SKILL.md name mismatch`));
    console.log(pc.gray(`  Expected: ${skillName}`));
    console.log(pc.gray(`  Found:    ${skillMdName || '(none)'}`));
    console.log(pc.yellow(`  Updating SKILL.md to fix...`));

    // Update SKILL.md with correct name
    const updatedContent = skillMdName
      ? skillContent.replace(/^name:\s*.+$/m, `name: ${skillName}`)
      : skillContent.replace(/^---\n/, `---\nname: ${skillName}\n`);
    await fs.writeFile(skillPath, updatedContent);
  }

  console.log(pc.bold(`\nInstalling ${packageName}@${packageVersion} from local path...\n`));

  const agents = detectAgents();
  if (agents.length === 0) {
    console.log(pc.yellow('No agents detected. Creating directories anyway.'));
  }

  const agentPaths = getAgentPaths();

  if (isWindows) {
    // Windows: Copy directly to each agent's skills directory (skip ~/.olore)
    const spinner = ora('Copying to agent directories...').start();

    const copied: string[] = [];
    for (const [agent, skillsDir] of Object.entries(agentPaths)) {
      const targetDir = path.join(skillsDir, skillName);

      await fs.ensureDir(skillsDir);
      await fs.remove(targetDir);
      await fs.copy(fullPath, targetDir);

      copied.push(`${pc.green('✓')} ${agent} ${pc.gray('→')} ${pc.gray(targetDir)}`);
    }

    spinner.stop();
    copied.forEach((line) => console.log(`  ${line}`));
    console.log(pc.gray(`    └─ copied from ${fullPath}`));
  } else {
    // Unix: Copy to ~/.olore central storage, then symlink
    const olorePath = getOlorePackagePath(packageName, packageVersion);
    const spinner = ora('Copying to ~/.olore...').start();

    await fs.ensureDir(path.dirname(olorePath));
    await fs.remove(olorePath);
    await fs.copy(fullPath, olorePath);

    spinner.succeed(`Copied to ${pc.gray(olorePath)}`);

    const linkSpinner = ora('Creating symlinks...').start();

    const linked: string[] = [];
    for (const [agent, skillsDir] of Object.entries(agentPaths)) {
      const targetDir = path.join(skillsDir, skillName);

      await fs.ensureDir(skillsDir);
      await fs.remove(targetDir);
      await linkOrCopy(olorePath, targetDir);

      linked.push(`${pc.green('✓')} ${agent} ${pc.gray('→')} ${pc.gray(targetDir)}`);
    }

    linkSpinner.stop();
    linked.forEach((line) => console.log(`  ${line}`));
    console.log(pc.gray(`    └─ all symlinked to ${olorePath}`));
  }

  console.log('');
  console.log(pc.green('Installation complete!'));
  console.log('');
  console.log(pc.gray('Skill is now available as:'));
  console.log(pc.cyan(`  /${skillName}`) + pc.gray(' (Claude Code)'));
  console.log(pc.cyan(`  $${skillName}`) + pc.gray(' (Codex)'));
  console.log(pc.cyan(`  ${skillName}`) + pc.gray(' (OpenCode)'));
}

export async function install(pkg: string, options: InstallOptions): Promise<void> {
  // Easter egg: --force flag
  if (options.force) {
    console.log(pc.cyan('\n✨ May the Skill be with you.\n'));
  }

  // Check if it's a local path
  if (isLocalPath(pkg)) {
    await installFromLocal(pkg);
    return;
  }

  // Remote install from registry
  await installFromRemote(pkg, options.version);
}

/**
 * Parse package specifier into name and version
 * e.g., "zod@3" -> { name: "zod", version: "3" }
 *       "zod" -> { name: "zod", version: undefined }
 */
function parsePackageSpec(spec: string): { name: string; version?: string } {
  const atIndex = spec.lastIndexOf('@');
  if (atIndex > 0) {
    return {
      name: spec.slice(0, atIndex),
      version: spec.slice(atIndex + 1),
    };
  }
  return { name: spec };
}

async function installFromRemote(pkg: string, optionsVersion?: string): Promise<void> {
  // Parse package specifier (e.g., "zod@3" or "zod")
  const { name, version: specVersion } = parsePackageSpec(pkg);
  const requestedVersion = optionsVersion || specVersion || 'latest';

  console.log(pc.bold(`\nInstalling ${name}@${requestedVersion} from registry...\n`));

  // Step 1: Resolve version from registry
  const spinner = ora('Fetching package info...').start();
  let versionInfo: VersionInfo;

  try {
    versionInfo = await resolveVersion(name, requestedVersion);
    spinner.succeed(`Found ${name}@${versionInfo.version} (${formatBytes(versionInfo.size)})`);
  } catch (error) {
    spinner.fail('Failed to resolve package');
    if (error instanceof RegistryError) {
      if (error.code === 'NOT_FOUND') {
        console.log(pc.yellow(`\nPackage "${name}" not found in registry.`));
        console.log(pc.gray('\nFor local packages, use a path:'));
        console.log(pc.cyan(`  olore install ./vault/packages/${name}/<version>`));
        console.log('');
      } else if (error.code === 'NETWORK_ERROR' || error.code === 'TIMEOUT') {
        console.log(pc.red(`\nNetwork error: ${error.message}`));
        console.log(pc.gray('Please check your internet connection and try again.'));
      }
    } else {
      console.log(pc.red(`\nError: ${error instanceof Error ? error.message : 'Unknown error'}`));
    }
    process.exit(1);
  }

  const skillName = `olore-${name}-${versionInfo.version}`;
  const agents = detectAgents();

  if (agents.length === 0) {
    console.log(pc.yellow('No agents detected. Creating directories anyway.'));
  }

  const agentPaths = getAgentPaths();

  if (isWindows) {
    // Windows: Download to temp, then copy directly to each agent's skills directory
    const downloadSpinner = ora('Downloading package...').start();
    let tempDir: string;

    try {
      tempDir = await downloadAndExtractToTemp(versionInfo.downloadUrl, versionInfo.integrity);
      downloadSpinner.succeed('Downloaded and verified');
    } catch (error) {
      downloadSpinner.fail('Download failed');
      if (error instanceof DownloadError) {
        if (error.code === 'CHECKSUM_MISMATCH') {
          console.log(pc.red('\nChecksum verification failed!'));
          console.log(pc.gray('The downloaded package may be corrupted or tampered with.'));
        } else {
          console.log(pc.red(`\nDownload error: ${error.message}`));
        }
      } else {
        console.log(pc.red(`\nError: ${error instanceof Error ? error.message : 'Unknown error'}`));
      }
      process.exit(1);
    }

    try {
      const copySpinner = ora('Copying to agent directories...').start();

      const copied: string[] = [];
      for (const [agent, skillsDir] of Object.entries(agentPaths)) {
        const targetDir = path.join(skillsDir, skillName);

        await fs.ensureDir(skillsDir);
        await fs.remove(targetDir);
        await fs.copy(tempDir, targetDir);

        copied.push(`${pc.green('✓')} ${agent} ${pc.gray('→')} ${pc.gray(targetDir)}`);
      }

      copySpinner.stop();
      copied.forEach((line) => console.log(`  ${line}`));
    } finally {
      // Clean up temp directory
      await fs.remove(path.dirname(tempDir)).catch(() => {});
    }
  } else {
    // Unix: Download to ~/.olore, then symlink
    const olorePath = getOlorePackagePath(name, versionInfo.version);
    const downloadSpinner = ora('Downloading package...').start();

    try {
      await downloadAndInstall(versionInfo.downloadUrl, olorePath, versionInfo.integrity);
      downloadSpinner.succeed(`Downloaded to ${pc.gray(olorePath)}`);
    } catch (error) {
      downloadSpinner.fail('Download failed');
      if (error instanceof DownloadError) {
        if (error.code === 'CHECKSUM_MISMATCH') {
          console.log(pc.red('\nChecksum verification failed!'));
          console.log(pc.gray('The downloaded package may be corrupted or tampered with.'));
        } else {
          console.log(pc.red(`\nDownload error: ${error.message}`));
        }
      } else {
        console.log(pc.red(`\nError: ${error instanceof Error ? error.message : 'Unknown error'}`));
      }
      process.exit(1);
    }

    const linkSpinner = ora('Creating symlinks...').start();

    const linked: string[] = [];
    for (const [agent, skillsDir] of Object.entries(agentPaths)) {
      const targetDir = path.join(skillsDir, skillName);

      await fs.ensureDir(skillsDir);
      await fs.remove(targetDir);
      await linkOrCopy(olorePath, targetDir);

      linked.push(`${pc.green('✓')} ${agent} ${pc.gray('→')} ${pc.gray(targetDir)}`);
    }

    linkSpinner.stop();
    linked.forEach((line) => console.log(`  ${line}`));
    console.log(pc.gray(`    └─ all symlinked to ${olorePath}`));
  }

  console.log('');
  console.log(pc.green('Installation complete!'));
  console.log('');
  console.log(pc.gray('Skill is now available as:'));
  console.log(pc.cyan(`  /${skillName}`) + pc.gray(' (Claude Code)'));
  console.log(pc.cyan(`  $${skillName}`) + pc.gray(' (Codex)'));
  console.log(pc.cyan(`  ${skillName}`) + pc.gray(' (OpenCode)'));
}
