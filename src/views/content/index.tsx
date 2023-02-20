/*
 * @Author: your name
 * @Date: 2022-04-27 17:35:22
 * @LastEditTime: 2023-02-20 14:24:55
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @Description: 上下文
 * @FilePath: /react-demo/src/views/content/index.tsx
 */
import React from "react";
import ChildComp from "./child";
import contextLogic from "./context-logic.js";
let { ColorContext } = contextLogic()
export default function ContentProvide(props) {
  return (
    <ColorContext.Provider value={{
      ...ColorContext['_currentValue']
    }}>
      <ColorContext.Consumer>
        {
          (val) => <ChildComp  {...val} />
        }
      </ColorContext.Consumer>
    </ColorContext.Provider>
  );
}

export const getContext2 = () => React.useContext(ColorContext)