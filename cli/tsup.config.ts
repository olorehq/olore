import { readFileSync } from 'fs';
import { defineConfig } from 'tsup';

const { version } = JSON.parse(readFileSync('./package.json', 'utf-8'));

export default defineConfig({
  entry: ['src/cli.ts'],
  format: ['esm'],
  target: 'node18',
  clean: true,
  dts: false,
  noExternal: [/.*/],
  define: {
    __CLI_VERSION__: JSON.stringify(version),
  },
  banner: {
    // The shebang must come first so the OS recognises it.
    // The `require` polyfill must come second so that esbuild's own
    // __require shim finds `require` defined and delegates to it instead
    // of throwing "Dynamic require of X is not supported".
    // This is necessary because commander (CJS) calls require('events')
    // at module load time, which fails inside an ESM bundle without this.
    js: [
      '#!/usr/bin/env node',
      'import { createRequire } from "module";',
      'const require = createRequire(import.meta.url);',
    ].join('\n'),
  },
});
