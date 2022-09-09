/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-09-09 10:18:10
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-09-09 10:28:33
 * @FilePath: /react-demo/src/views/forwardRef/child.tsx
 * @Description: 子组件
 */

import { forwardRef, useImperativeHandle } from "react";
import Son from "./Son.tsx";
const Child = ({ childRef }) => {
  // 抛出组件函数
  useImperativeHandle(ref, () => ({}));
  return (
    <div>
      <div>子组件</div>
      <Son sonRef={childRef} />
    </div>
  );
};

const ForwardChild = forwardRef((props, ref) => (
  <Child childRef={ref} {...props} />
));
export default ForwardChild;
