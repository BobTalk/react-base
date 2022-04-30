/*
 * @Author: your name
 * @Date: 2022-04-27 19:51:20
 * @LastEditTime: 2022-04-28 08:52:47
 * @LastEditors: Please set LastEditors
 * @Description: 获取父级颜色集合
 * @FilePath: /react-demo/src/views/content/child.tsx
 */
import { ColorContextProvider } from "./";
function ChildColor() {
  let { $color = [] } = ColorContextProvider();
  return (
    <>
      {$color.map((item) => (
        <div
          key={item}
          style={{ background: item, width: "20px", height: "20px" }}
        ></div>
      ))}
    </>
  );
}
export default ChildColor;
