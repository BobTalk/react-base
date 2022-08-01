/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-08-01 09:13:59
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-08-01 09:28:29
 * @FilePath: /react-demo/src/views/createContext/ChildComp.tsx
 * @Description: 子组件
 */

import CounterContext from "./shared.ts";
import React, { ReactElement, useContext } from "react";
const ChildComp: ReactElement = function () {
  const { count, setCount } = useContext(CounterContext);
  return <button onClick={() => setCount(count + 1)}>子组件事件(+)</button>;
};

export default ChildComp;
