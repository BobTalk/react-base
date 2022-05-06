/*
 * @Author: your name
 * @Date: 2022-05-05 17:43:38
 * @LastEditTime: 2022-05-05 19:30:54
 * @LastEditors: Please set LastEditors
 * @Description: 路由格式化
 * @FilePath: /react-demo/src/router/format-router.tsx
 */
import { Route, Outlet } from "react-router-dom";
export function withRoute(router) {
  return router.map((item) => (
    <Route
      key={item.path}
      path={item.path}
      element={item.component ? <item.component /> : <Outlet></Outlet>}
    >
      {item.children && withRoute(item.children)}
    </Route>
  ));
}
