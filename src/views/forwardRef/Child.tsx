/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-09-09 10:18:10
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-09-09 10:51:28
 * @FilePath: /react-demo/src/views/forwardRef/child.tsx
 * @Description: 子组件
 */

import { forwardRef, useImperativeHandle } from "react";
import Son from "./Son.tsx";
const Child = ({ childRef }) => {
  // 抛出组件函数
  // useImperativeHandle(ref, createHandle, [deps])
  // ref：useRef所创建的ref
  // createHandle：处理的函数，返回值作为暴露给父组件的 ref 对象。
  // deps：依赖项，依赖项更改形成新的 ref 对象。
  useImperativeHandle(ref, () => ({}), []);
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
