/*
 * @Author: your name
 * @Date: 2022-04-27 17:35:22
 * @LastEditTime: 2023-02-20 14:30:03
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @Description: 上下文
 * @FilePath: /react-demo/src/views/content/index.tsx
 */
import React from "react";
import ChildComp from "./child";
import contextLogic from "./context-logic.js";
let { ColorContext } = contextLogic({
  childColor: ["blue", "yellow"],
  parentColor: [
    "#50e3c2",
    "#05a9f5",
    "#f2a821",
    "#b7e985",
    "#4fcee3",
    "#a389d4",
    "#23dde6",
    "#ebbe16",
    "#55b2f1",
    "#3a95ec",
  ]
})
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