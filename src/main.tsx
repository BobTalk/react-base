/*
 * @Author: your name
 * @Date: 2022-04-27 14:08:57
 * @LastEditTime: 2022-04-28 17:38:34
 * @LastEditors: Please set LastEditors
 * @Description: 系统入口文件
 * @FilePath: /react-demo/src/main.tsx
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterWaiter from "@/router/index";
import routes from "@/router/router.config.tsx";
// 路由 browser / history 模式使用BrowserRouter，hash 模式使用HashRouter。
// 如果项目部署在服务器域名子目录下，就给BrowserRouter配置basename属性。
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterWaiter
        routes={routes}
        onRouteBefore={(params) => {
          console.log("params: ", params);
          return false
        }}
      ></RouterWaiter>
    </BrowserRouter>
  </React.StrictMode>
);
