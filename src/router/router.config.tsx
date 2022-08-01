/*
 * @Author: your name
 * @Date: 2022-04-27 14:51:47
 * @LastEditTime: 2022-08-01 09:10:27
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
import useCreationComp from "@/views/useCreation/index.tsx";
import layoutEffectComp from "@/views/layoutEffect/index.tsx";
import reducerComp from "@/views/reducer/index.tsx";
import callBackComp from "@/views/useCallback";
import useUpdateComp from "@/views/useUpdate";
import useReactiveComp from "@/views/useReactive";
import useEventListenerComp from "@/views/useEventListener";
import useHoverComp from "@/views/useHover";
import useCountDownComp from "@/views/useCountDown";
import createContext from "../views/createContext";
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
        path: "useCallBack",
        component: callBackComp,
      },
      {
        path: "useUpdate",
        component: useUpdateComp,
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
      {
        path: "useReactive",
        component: useReactiveComp,
      },
      {
        path: "useEventListener",
        component: useEventListenerComp,
      },
      {
        path: "useHover",
        component: useHoverComp,
      },
      {
        path: "useCountDown",
        component: useCountDownComp,
      },
      {
        path: "createContext",
        component: createContext,
      },
    ],
  },
];
export default routeList;
