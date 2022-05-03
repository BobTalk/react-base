/*
 * @Author: your name
 * @Date: 2022-04-27 14:51:47
 * @LastEditTime: 2022-05-03 17:36:34
 * @LastEditors: Please set LastEditors
 * @Description:路由配置文件
 * @FilePath: /react-demo/src/router/router.config.js
 */
import ContentComp from "@/views/content/index.tsx";
import ContentChildComp from "@/views/content/child.tsx";
const routes = [
  {
    path: "/",
    redirect: "/contextIndex/colorChild",
  },
  {
    path: "/contextIndex",
    element: <ContentComp />,
    meta: {
      title: "首页",
      needLogin: true,
    },
    children: [
      {
        path: "colorChild",
        component: <ContentChildComp />,
        meta: {
          title: "child",
          needLogin: false,
        },
      },
    ],
  },
];

export default routes;
