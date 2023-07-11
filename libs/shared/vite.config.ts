import { resolve } from 'path';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { workspaceRoot } from '@nx/devkit';

export default defineConfig({
  css: {
    postcss: resolve(__dirname, 'postcss.config.js'),
  },
  define: {
    'process.env.DEBUG_PRINT_LIMIT': 10_000,
  },
  plugins: [
    react(),
    tsconfigPaths({
      root: workspaceRoot,
    }),
  ],
  server: {
    fs: {
      allow: [searchForWorkspaceRoot(workspaceRoot)],
    },
  },
});
