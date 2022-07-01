/*
 * @Author: your name
 * @Date: 2022-04-27 14:51:47
 * @LastEditTime: 2022-07-01 14:34:04
 * @LastEditors: heyongqiang 1498833800@qq.com
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
import memoComp from "@/views/useMemo/index.tsx";
import useCreationComp from '@/views/useCreation/index.tsx';
import layoutEffectComp from "@/views/layoutEffect/index.tsx";
import reducerComp from "@/views/reducer/index.tsx";
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
      {
        path: "useMemo",
        component: memoComp,
      },
      {
        path: "useCreation",
        component: useCreationComp,
      },
      {
        path: "useLayoutEffect",
        component: layoutEffectComp,
      },
      {
        path: "useReducer",
        component: reducerComp,
      },
    ],
  },
];
export default routeList;
