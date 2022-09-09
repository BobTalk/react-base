/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-09-09 09:48:25
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-09-09 10:04:43
 * @FilePath: /react-demo/src/views/insertChildNode/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
