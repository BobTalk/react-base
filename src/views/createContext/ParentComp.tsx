/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-08-01 09:13:52
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-08-01 09:27:01
 * @FilePath: /react-demo/src/views/createContext/ParentComp.tsx
 * @Description: 父盒子
 */
import React, { ReactElement } from "react";
import CounterContext from "./shared.ts";
import ChildComp from "./ChildComp";
const ParentComp: ReactElement = function () {
  const [count, setCount] = React.useState(0);
  const data = { setCount, count };
  return (
    <CounterContext.Provider value={data}>
      <div>
        父组件 {count}
        <hr />
        <ChildComp></ChildComp>
      </div>
    </CounterContext.Provider>
  );
};

export default ParentComp;
