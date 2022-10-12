/*
 * @Author: your name
 * @Date: 2022-04-27 14:08:57
 * @LastEditTime: 2022-10-12 10:20:52
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @Description: vite配置文件
 * @FilePath: /react-demo/vite.config.ts
 */
import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
import lessToJS from "less-vars-to-js";
import fs from "fs";
const pathResolve = (dir: string) => path.join(__dirname, dir);
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./src/config/variables.less"), "utf8")
);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
      },
    }
  },
  resolve: {
    alias: {
      "@": pathResolve('src')
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8000
  }
})
