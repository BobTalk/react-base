/*
 * @Author: your name
 * @Date: 2022-05-06 14:57:23
 * @LastEditTime: 2022-05-06 15:01:28
 * @LastEditors: Please set LastEditors
 * @Description: reducer
 * @FilePath: /react-demo/src/views/reducer/index.tsx
 */
import { forwardRef, useImperativeHandle, useReducer } from "react";
const reducerComp = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({}));
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle}></input>
      {checked ? "checked" : "not checked"}
    </>
  );
});

export default reducerComp;
