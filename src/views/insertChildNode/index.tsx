/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-09-09 09:48:25
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-10-14 17:36:09
 * @FilePath: /react-demo/src/views/insertChildNode/index.tsx
 * @Description: 插入子节点
 */
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
const Child = ({ children }) => {
  const ref = useRef();
  let id = useId();
  const [newDom, setNewDom] = useState();
  useEffect(() => {
    setNewDom(createPortal(children, ref.current));
  }, []);
  return (
    <div id={id}>
      <div ref={ref}>同级的节点</div>
      <div>{newDom}</div>
    </div>
  );
};

const Index = () => {
  return (
    <div style={{ padding: 20 }}>
      <Child>
        <div>hello </div>
      </Child>
    </div>
  );
};
export default Index;
