import fs from 'fs';
import path from 'path';
import readline from 'readline';

import pc from 'picocolors';

interface InitOptions {
  name?: string;
  version?: string;
  yes?: boolean;
}

async function prompt(question: string, defaultValue?: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    const q = defaultValue ? `${question} (${defaultValue}): ` : `${question}: `;
    rl.question(q, (answer) => {
      rl.close();
      resolve(answer || defaultValue || '');
    });
  });
}

export async function init(options: InitOptions): Promise<void> {
  const cwd = process.cwd();
  const folderName = path.basename(cwd);

  // Check if already initialized
  if (fs.existsSync(path.join(cwd, 'olore.config.json'))) {
    throw new Error('olore.config.json already exists. This folder is already initialized.');
  }

  let name: string;
  let version: string;
  let description: string;

  if (options.yes) {
    // Non-interactive mode
    name = options.name || folderName;
    version = options.version || '1.0.0';
    description = `Documentation for ${name}`;
  } else {
    // Interactive mode
    console.log(pc.bold('\nInitialize olore documentation package\n'));
    name = await prompt('Package name', options.name || folderName);
    version = await prompt('Version', options.version || '1.0.0');
    description = await prompt('Description', `Documentation for ${name}`);
  }

  const fullName = `olore-${name}-${version}`;

  // Create olore.config.json
  const configContent = {
    name,
    version,
    description,
    contentPath: './docs',
    outputPath: './olore-package',
    extensions: ['.md', '.mdx'],
    exclude: [],
  };
  fs.writeFileSync(
    path.join(cwd, 'olore.config.json'),
    JSON.stringify(configContent, null, 2) + '\n'
  );

  // Create docs directory
  const docsDir = path.join(cwd, 'docs');
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir);

    // Create sample getting-started.md
    fs.writeFileSync(
      path.join(docsDir, 'getting-started.md'),
      `# Getting Started with ${name}

Add your documentation content here.

## Overview

Describe what this documentation covers.

## Topics

- Topic 1
- Topic 2
`
    );
  }

  console.log(pc.bold(`\nInitialized olore package: `) + pc.cyan(fullName));
  console.log('');
  console.log(pc.gray('Created:'));
  console.log(pc.green('  ✓ olore.config.json'));
  console.log(pc.green('  ✓ docs/') + pc.gray(' (add your documentation here)'));
  console.log('');
  console.log(pc.gray('Next steps:'));
  console.log('  1. Add your .md files to the ' + pc.cyan('docs/') + ' folder');
  console.log('  2. Run ' + pc.cyan('/olore-docs-packager-1.0.0') + ' in Claude Code to build');
  console.log('  3. Run ' + pc.cyan('olore install ./olore-package') + ' to install');
  console.log('');
}
