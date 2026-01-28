import { createRequire } from 'module';

import { Command } from 'commander';
import pc from 'picocolors';

import { init } from './commands/init.js';
import { install } from './commands/install.js';
import { link } from './commands/link.js';
import { list } from './commands/list.js';
import { order66 } from './commands/order66.js';
import { remove } from './commands/remove.js';

const require = createRequire(import.meta.url);
// Path relative to compiled dist/cli.js
const { version } = require('../package.json');

const program = new Command();

program
  .name('olore')
  .description('Universal documentation for any AI coding agent')
  .version(version)
  .addHelpText('after', `\n${pc.gray('May the Skill be with you.')}`);

// Initialize a new documentation package
program
  .command('init')
  .description('Initialize a documentation package in the current directory')
  .option('-n, --name <name>', 'Package name (default: folder name)')
  .option('-v, --version <version>', 'Package version (default: latest)')
  .option('-y, --yes', 'Skip prompts, use defaults')
  .action(async (options) => {
    try {
      await init(options);
    } catch (error) {
      console.error(pc.red(`Error: ${(error as Error).message}`));
      process.exit(1);
    }
  });

// Remote install from registry
program
  .command('install <package>')
  .alias('i')
  .description('Install a documentation package from the registry')
  .option('-v, --version <version>', 'Install specific version')
  .option('--keep', 'Keep previous version active (for migrations)')
  .option('--force', 'Force installation')
  .action(async (pkg, options) => {
    try {
      await install(pkg, options);
    } catch (error) {
      console.error(pc.red(`Error: ${(error as Error).message}`));
      process.exit(1);
    }
  });

// Link local package (symlink for development)
program
  .command('link <path>')
  .description('Link a local package for development (creates symlink)')
  .action(async (localPath) => {
    try {
      await link(localPath);
    } catch (error) {
      console.error(pc.red(`Error: ${(error as Error).message}`));
      process.exit(1);
    }
  });

// List installed packages
program
  .command('list')
  .alias('ls')
  .description('List installed documentation packages')
  .option('--json', 'Output as JSON')
  .action(async (options) => {
    try {
      await list(options);
    } catch (error) {
      console.error(pc.red(`Error: ${(error as Error).message}`));
      process.exit(1);
    }
  });

// Remove package
program
  .command('remove <package>')
  .alias('rm')
  .description('Remove an installed documentation package')
  .action(async (pkg) => {
    try {
      await remove(pkg);
    } catch (error) {
      console.error(pc.red(`Error: ${(error as Error).message}`));
      process.exit(1);
    }
  });

// Hidden Easter egg command
program
  .command('order66')
  .description(false as unknown as string) // Hide from help
  .action(async () => {
    try {
      await order66();
    } catch (error) {
      console.error(pc.red(`Error: ${(error as Error).message}`));
      process.exit(1);
    }
  });

program.parse();
