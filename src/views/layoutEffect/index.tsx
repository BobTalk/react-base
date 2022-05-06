import {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useState,
} from "react";

/*
 * @Author: your name
 * @Date: 2022-05-06 14:23:43
 * @LastEditTime: 2022-05-06 14:49:30
 * @LastEditors: Please set LastEditors
 * @Description: useLayoutEffect 在挂载真实DOM元素之前使用
 * @FilePath: /react-demo/src/views/layoutEffect/index.tsx
 */
const LayoutEffectComp = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({}));
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const resize = ({ x, y }) => {
    setHeight(y);
    setWidth(x);
  };
  useLayoutEffect(() => {
    window.addEventListener("mousemove", resize);
    return () => window.removeEventListener("mousemove", resize);
  }, []);
  return [width,<br/>, height];
});
export default LayoutEffectComp;
