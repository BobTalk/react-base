/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-07-01 16:08:25
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-07-01 16:22:03
 * @FilePath: /react-demo/src/views/useEffect/component/mount.tsx
 * @Description: 挂载
 */
import { useEffect } from "react";

const useMount = (fn: () => void, eventListener: Array = []) => {
  useEffect(() => {
    fn?.();
  }, eventListener);
};

export default useMount;
