/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-14 09:45:01
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-23 10:37:43
 * @FilePath: /react-drag/vite.config.ts
 * @Description: vite配置文件
 */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import vitePluginImp from 'vite-plugin-imp'
import lessToJS from "less-vars-to-js";
import fs from "fs";
function urlJoin(url = './') {
  return path.resolve(__dirname, url)
}
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./src/config/variables.less"), "utf8")
);
const configInfo = ({ command, mode, ssrBuild }) => {

  let env = loadEnv(mode, process.cwd(), ['VITE_', 'VUE_', 'HYQ_'])
  return ({
    root: process.cwd(),
    base: '/',
    publicDir: urlJoin('/public'), // public  false不使用此功能
    plugins: [
      react(),
      // 页面注入
      createHtmlPlugin({
        minify: true,
        entry: '/src/main.tsx',
        // template: urlJoin('/index.html'),
      }),
      vitePluginImp({
        libList: [
          {
            libName: "antd",
            style: (name) => `antd/es/${name}/style`,
          },
        ],
      })
    ],
    envDri: './',
    // envPrefix: ["VUE_", "VITE_"],
    resolve: {
      alias: {
        "@": urlJoin('/src'),
        "public": urlJoin('/public')
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      preserveSymlinks: false, // 启用此选项会使 Vite 通过原始文件路径（即不跟随符号链接的路径） 默认false
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import 'public/javascript/fn.less';`,
          javascriptEnabled: true,
          modifyVars: themeVariables,
        },
      }
    },
    json: {},
    esbuild: {
      drop: mode !== 'development' ? ['console', 'debugger'] : [],
    },
    assetsInclude: ["/index.html"], // 静态资源
    logLevel: 'info',  // 'info' | 'warn' | 'error' | 'silent'
    //全局变量 
    define: {
      globalThis: env
    },
    build: {
      // target: 'es2015',
      minify: 'terser', // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
      manifest: false, // 是否产出maifest.json
      cssTarget: 'chrome80',
      sourcemap: false, // 是否产出soucemap.json
      outDir: 'dist', // 产出目录
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {},
    },
    server: {
      port: env.HYQ_APP_PORT,
      host: true,
      open: true,
      strictPort: true,  // 端口已被则直接退出
      origin: `http://localhost:${env.HYQ_APP_PORT}`,
      proxy: {}
    }
  })
}
export default defineConfig(({ command, mode, ssrBuild }) => {
  return configInfo({ command, mode, ssrBuild })
})
