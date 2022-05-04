/*
 * @Author: your name
 * @Date: 2022-04-27 14:08:57
 * @LastEditTime: 2022-05-04 19:23:03
 * @LastEditors: Please set LastEditors
 * @Description: 系统入口文件
 * @FilePath: /react-demo/src/main.tsx
 */
import React from "react";
import ReactDOM from "react-dom/client";
import './config/tailwind.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  ContentChildComp,
  ContentComp,
  ProjectLayout,
} from "@/router/router.config.tsx";
// 路由 browser / history 模式使用BrowserRouter，hash 模式使用HashRouter。
// 如果项目部署在服务器域名子目录下，就给BrowserRouter配置basename属性。
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Navigate to={"/layout/contextIndex"}></Navigate>}></Route>
        <Route path="/layout" element={<ProjectLayout></ProjectLayout>}>
          <Route path="contextIndex" element={<ContentComp></ContentComp>}>
            <Route
              path="colorChild"
              element={<ContentChildComp></ContentChildComp>}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
