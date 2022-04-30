/*
 * @Author: your name
 * @Date: 2022-04-27 14:51:47
 * @LastEditTime: 2022-04-28 08:53:25
 * @LastEditors: Please set LastEditors
 * @Description:路由配置文件
 * @FilePath: /react-demo/src/router/router.config.js
 */
import ContentComp from "@/views/content/index.tsx";
const routes = [
  {
    path: "/",
    redirect: "/contextIndex",
  },
  {
    path: "/contextIndex",
    element: <ContentComp></ContentComp>,
    meta: {
      title: "首页",
      needLogin: false,
    },
  },
];

export default routes;
