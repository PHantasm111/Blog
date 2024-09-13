import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: '0.0.0.0',
    port: 5173,
    open: true,
    proxy: {
      // 代理以 /auth 开头的请求，重写为 /api/auth
      '/auth': {
        target: 'http://localhost:3000', // 这里直接使用后端服务器地址，不加 /api
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, '/api/auth'), // 将 /auth 重写为 /api/auth
      },
      // 代理其他类似的路由
      '/posts': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/posts/, '/api/posts'), // 将 /posts 重写为 /api/posts
      },
      '/users': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/users/, '/api/users'), // 将 /users 重写为 /api/users
      },
    }
  }
})
