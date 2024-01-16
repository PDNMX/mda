import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '../build',
  },
  plugins: [react()],
  esbuild: {
    loader: {
      '.js': 'jsx',
    },
  },
});
