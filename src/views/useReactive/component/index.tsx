/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-07-01 15:35:20
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-07-01 15:52:06
 * @FilePath: /react-demo/src/views/useReactive/index.tsx
 * @Description: 响应式
 */
import { useRef } from "react";
import useCreation from "../../useCreation/component";
import useUpdate from "../../useUpdate/component";

const observer = <T extends Record<string, any>>(
  initialVal: T,
  cb: () => void
): T => {
  const proxy = new Proxy<T>(initialVal, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      return typeof res === "object"
        ? observer(res, cb)
        : Reflect.get(target, key);
    },
    set(target, key, val) {
      const ret = Reflect.set(target, key, val);
      cb();
      return ret;
    },
  });
  return proxy;
};

const useReactive = <T extends Record<string, any>>(initialState: T): T => {
  const ref = useRef<T>(initialState);
  const update = useUpdate();
  const state = useCreation(() => {
    return observer(ref.current, () => {
      update();
    });
  }, []);
  return state;
};

export default useReactive;
