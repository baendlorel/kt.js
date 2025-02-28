import path from 'path';
import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],
      imports: [
        {
          './src/yuka': [
            ['Yuka', 'Yuka'],
            ['useYuka', 'useYuka'],
          ],
        },
      ],
    }),
  ],
  build: {
    outDir: '../app/html',
    assetsDir: 'src',
  },
  server: {
    proxy: {
      '/was': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        ws: false,
        secure: false,
        proxyTimeout: 600000, // 60秒超时
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('代理请求:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            proxyRes.headers['Access-Control-Allow-Origin'] = '*';
            console.log('代理响应:', proxyRes.statusCode);
            console.log('代理响应statusMessage:', proxyRes.statusMessage);
          });
          proxy.on('error', (err, req, res) => {
            console.error('代理错误:', err);
            console.error('代理错误res:', res.statusCode, res.statusMessage);
          });
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
