/*
 * @Author: your name
 * @Date: 2022-04-27 14:51:47
 * @LastEditTime: 2022-05-05 19:26:53
 * @LastEditors: Please set LastEditors
 * @Description:路由配置文件
 * @FilePath: /react-demo/src/router/router.config.js
 */
import ContentComp from "@/views/content/index.tsx";
import ContentChildComp from "@/views/content/child.tsx";
import ProjectLayout from "@/views/layout/index.tsx";
import DefaultComp from "@/views/useEffect/default.tsx";
import ArrayComp from "@/views/useEffect/array.tsx";
import DestroyComp from "@/views/useEffect/destroy.tsx";
import NodataComp from "@/views/useEffect/nodata.tsx";
const routeList = [
  {
    path: "/layout",
    component: ProjectLayout,
    children: [
      {
        path: "colorChild",
        component: ContentChildComp,
      },
      {
        path: "contextIndex",
        children: [
          {
            path: "colorChild",
            component: ContentComp,
          },
        ],
      },
      {
        path: "useEffect",
        children: [
          {
            path: "default",
            component: DefaultComp,
          },
          {
            path: "array",
            component: ArrayComp,
          },
          {
            path: "destroy",
            component: DestroyComp,
          },
          {
            path: "nodata",
            component: NodataComp,
          },
        ],
      },
    ],
  },
];
export default routeList;
// export {
//   ContentComp,
//   ContentChildComp,
//   ProjectLayout,
//   nodataComp,
//   destroyComp,
//   arrayComp,
//   defaultComp,
// };
