/*
 * @Author: your name
 * @Date: 2022-05-05 17:43:38
 * @LastEditTime: 2022-05-05 19:25:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react-demo/src/router/format-router.tsx
 */
import { Route, Outlet } from "react-router-dom";
export function withRoute(router) {
    return router.map((item) => (
    <Route key={item.path} path={item.path} element={item.component ? <item.component /> : <Outlet></Outlet>}>
      {item.children && withRoute(item.children)}
    </Route>
  ));
}
