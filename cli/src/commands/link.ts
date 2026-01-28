import path from 'path';

import fs from 'fs-extra';
import ora from 'ora';
import pc from 'picocolors';

import { detectAgents, getAgentPaths } from '../core/paths.js';
import { expandPath, getLinkActionText, getLinkTypeText, linkOrCopy } from '../core/platform.js';

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

export async function link(localPath: string): Promise<void> {
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
    throw new Error(`Missing SKILL.md in ${fullPath}. Run /build-docs first.`);
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

  // Skill name includes version for multi-version support
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

    const updatedContent = skillMdName
      ? skillContent.replace(/^name:\s*.+$/m, `name: ${skillName}`)
      : skillContent.replace(/^---\n/, `---\nname: ${skillName}\n`);
    await fs.writeFile(skillPath, updatedContent);
  }

  console.log(pc.bold(`\nLinking ${packageName}@${packageVersion}...\n`));

  // Detect available agents
  const agents = detectAgents();
  if (agents.length === 0) {
    console.log(pc.yellow('No agents detected. Creating directories anyway.'));
  }

  const agentPaths = getAgentPaths();
  const spinner = ora(`${getLinkActionText()}...`).start();

  // Link (or copy on Windows) to each agent
  const linked: string[] = [];
  for (const [agent, skillsDir] of Object.entries(agentPaths)) {
    const targetDir = path.join(skillsDir, skillName);

    // Create skills directory if needed
    await fs.ensureDir(skillsDir);

    // Remove existing installation (file, symlink, or directory)
    await fs.remove(targetDir);

    // Create symlink (Unix) or copy (Windows)
    await linkOrCopy(fullPath, targetDir);

    linked.push(`${pc.blue('⛓')} ${agent} ${pc.gray('→')} ${pc.gray(targetDir)}`);
  }

  spinner.stop();
  linked.forEach((line) => console.log(`  ${line}`));
  console.log(pc.gray(`    └─ ${getLinkTypeText()} ${fullPath}`));

  console.log('');
  console.log(pc.blue('Link complete!'));
  console.log('');
  console.log(pc.gray('Skill is now available as:'));
  console.log(pc.cyan(`  /${skillName}`) + pc.gray(' (Claude Code)'));
  console.log(pc.cyan(`  $${skillName}`) + pc.gray(' (Codex)'));
  console.log(pc.cyan(`  ${skillName}`) + pc.gray(' (OpenCode)'));
  console.log('');
  console.log(pc.gray(`Development mode: ${getLinkTypeText()} source (bypasses ~/.olore).`));
  console.log(pc.gray('On Unix, changes to source are immediately visible.'));
  console.log(pc.gray('On Windows, re-run link after changes.'));
  console.log(
    pc.gray('Use ') + pc.cyan('olore install') + pc.gray(' for a stable copy in ~/.olore.')
  );
}
