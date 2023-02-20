/*
 * @Author: your name
 * @Date: 2022-04-27 19:51:20
 * @LastEditTime: 2023-02-20 13:38:22
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @Description: 获取父级颜色集合
 * @FilePath: /react-demo/src/views/content/child.tsx
 */

import { useState } from "react";
import { useLocation } from "react-router-dom";
import TestProps from "./test";
function ChildColor(props) {
  let { parentColor, childColor } = props;
  let { pathname } = useLocation();
  let [$colorMerge] = useState(["/layout/contextIndex/colorChild", "/layout/contextIndex"].includes(pathname) ? parentColor : childColor);
  return (
    <>
      <TestProps {...props}></TestProps>
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
