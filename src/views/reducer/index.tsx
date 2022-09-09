/*
 * @Author: your name
 * @Date: 2022-05-06 14:57:23
 * @LastEditTime: 2022-09-09 11:03:27
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @Description: reducer
 * @FilePath: /react-demo/src/views/reducer/index.tsx
 */
import { forwardRef, useImperativeHandle, useReducer } from "react";
import ReducerIndex from "./useReducer";
const reducerComp = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({}));
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle}></input>
      {checked ? "checked" : "not checked"}
      <ReducerIndex></ReducerIndex>
    </>
  );
});

export default reducerComp;
