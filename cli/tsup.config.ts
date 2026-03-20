import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/cli.ts'],
  format: ['esm'],
  target: 'node18',
  clean: true,
  dts: true,
  shims: true,
  noExternal: [/.*/],
  banner: {
    js: '#!/usr/bin/env node',
  },
});
