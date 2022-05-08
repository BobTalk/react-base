/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-05-08 15:27:37
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-05-08 16:01:40
 * @FilePath: /react-demo/src/views/useMemo/render.tsx
 * @Description: memo 第二参数控制是否渲染 false 渲染 true 不渲染
 */
import { memo } from "react";

const RenderItem = memo(
  ({ fruit = [] }) => {
    return fruit.map((item, index) => (
      <p key={item.toString(10) + index}>{item}</p>
    ));
  },
    (prevProps, nextProps) => { 
        return nextProps.fruit.length == prevProps.fruit.length
    }
);
export default RenderItem;