/*
 * @Author: your name
 * @Date: 2022-04-27 19:51:20
 * @LastEditTime: 2022-04-30 20:50:54
 * @LastEditors: Please set LastEditors
 * @Description: 获取父级颜色集合
 * @FilePath: /react-demo/src/views/content/child.tsx
 */

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ColorContextProvider } from "./";
function ChildColor() {
  let { pathname } = useLocation();
  console.log("location: ", pathname);
  let scopedColor = ["blue", "yellow"];
  let { $color = [] } = ColorContextProvider();
  let [$colorMerge] = useState(pathname == "/contextIndex/colorChild" ? scopedColor : $color);
  return (
    <>
      {$colorMerge.map((item) => (
        <div
          key={item}
          style={{ background: item, width: "20px", height: "20px" }}
        ></div>
      ))}
    </>
  );
}
export default ChildColor;
