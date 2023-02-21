/*
 * @Author: your name
 * @Date: 2022-04-27 14:08:57
 * @LastEditTime: 2023-02-21 16:06:46
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @Description: 系统入口文件
 * @FilePath: /react-demo/src/main.tsx
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./config/tailwind.css";
import "./assets/styles/reset.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import routeList from "@/router/router.config.tsx";
import { withRoute } from "@/router/format-router.tsx";
import ErrorBoundaryPage from "./components/catchError";
// 路由 browser / history 模式使用BrowserRouter，hash 模式使用HashRouter。
// 如果项目部署在服务器域名子目录下，就给BrowserRouter配置basename属性。
ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundaryPage fallback={<div>渲染出错啦！</div>}>
    {/* <React.StrictMode> */}
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path="/"
          element={<Navigate to={"/layout/contextIndex/colorChild"}></Navigate>}
        ></Route>
        {withRoute(routeList)}
      </Routes>
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </ErrorBoundaryPage>
);
