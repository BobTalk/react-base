/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-07-01 16:08:25
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-07-01 16:09:05
 * @FilePath: /react-demo/src/views/useEffect/component/mount.tsx
 * @Description: 销毁
 */
import { useEffect, useRef } from "react";

const useUnmount = (fn: () => void) => {
  const ref = useRef(fn);
  ref.current = fn;

  useEffect(
    () => () => {
      fn?.();
    },
    []
  );
};

export default useUnmount;
