import { defineConfig } from 'cypress';
import viteConfig from './vite.config';

export default defineConfig({
  component: {
    devServer: {
      viteConfig,
      bundler: 'vite',
      framework: 'react',
    }
  },
});
