/*
 * @Author: your name
 * @Date: 2022-04-27 17:35:22
 * @LastEditTime: 2022-04-27 20:39:58
 * @LastEditors: Please set LastEditors
 * @Description: 上下文
 * @FilePath: /react-demo/src/views/content/index.tsx
 */
import React, { useState, createContext, useContext } from "react";
import ChildComp from "./child";
const ColorContext = createContext({});
export default function ContentProvide() {
  let [colorArr, setColorArr] = useState([
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
  ]);
  return (
    <>
      <ColorContext.Provider value={{ $color: colorArr }}>
        <ChildComp></ChildComp>
      </ColorContext.Provider>
    </>
  );
}

export const ColorContextProvider = () => useContext(ColorContext);
