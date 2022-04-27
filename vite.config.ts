/*
 * @Author: your name
 * @Date: 2022-04-27 14:08:57
 * @LastEditTime: 2022-04-27 14:29:12
 * @LastEditors: Please set LastEditors
 * @Description: vite配置文件
 * @FilePath: /react-demo/vite.config.ts
 */
import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
const pathResolve = (dir: string) => path.join(__dirname, dir);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": pathResolve('src')
    },
  },
  server: {
    host: '0.0.0.0'
  }
})
