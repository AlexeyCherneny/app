import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

import path from 'path';

let srcPath = '';

try {
  srcPath = path.resolve(__dirname, 'src');
} catch (error) {
  console.error(error);
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isDevBuild = mode === 'development';

  const serverPort = Number.parseInt(env.SERVER_PORT);

  return {
    plugins: [react(), tsconfigPaths()],

    root: path.resolve(__dirname, '.'),
    publicDir: path.join(srcPath, 'public'),
    build: {
      outDir: path.resolve(__dirname, './dist'),
      emptyOutDir: true,
      assetsInlineLimit: isDevBuild ? 0 : 4096,
      cssCodeSplit: !isDevBuild,
      target: isDevBuild ? 'esnext' : 'modules',
      minify: isDevBuild ? false : 'esbuild',
      rollupOptions: {
        output: {
          format: isDevBuild ? 'esm' : undefined,
        },
      },
    },

    server: {
      port: serverPort >= 3000 ? serverPort : 3003,
    },
    resolve: {
      alias: {
        '@': srcPath,
        assets: path.join(srcPath, 'assets'),
        components: path.join(srcPath, 'components'),
        pages: path.join(srcPath, 'pages'),
        router: path.join(srcPath, 'router'),
        styles: path.join(srcPath, 'styles'),
        theme: path.join(srcPath, 'theme'),
        utils: path.join(srcPath, 'utils'),
      },
    },
  }
});
