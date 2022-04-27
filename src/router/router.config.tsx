/*
 * @Author: your name
 * @Date: 2022-04-27 14:51:47
 * @LastEditTime: 2022-04-27 17:33:03
 * @LastEditors: Please set LastEditors
 * @Description:路由配置文件
 * @FilePath: /react-demo/src/router/router.config.js
 */
import ContentComp from "@/views/content/index.tsx";
const routes = [
  {
    path: "/",
    redirect: "/contentIndex",
  },
  {
    path: "/contentIndex",
    element: <ContentComp></ContentComp>,
    meta: {
      title: "首页",
      needLogin: false,
    },
  },
];

export default routes;
