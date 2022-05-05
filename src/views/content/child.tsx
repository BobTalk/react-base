/*
 * @Author: your name
 * @Date: 2022-04-27 19:51:20
 * @LastEditTime: 2022-05-05 19:26:26
 * @LastEditors: Please set LastEditors
 * @Description: 获取父级颜色集合
 * @FilePath: /react-demo/src/views/content/child.tsx
 */

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ColorContextProvider } from "./";
function ChildColor() {
  let { pathname } = useLocation();
  let scopedColor = ["blue", "yellow"];
  let { $color = [] } = ColorContextProvider();
  let [$colorMerge] = useState(["/layout/contextIndex/colorChild", "/layout/contextIndex"].includes(pathname) ? $color : scopedColor);
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
