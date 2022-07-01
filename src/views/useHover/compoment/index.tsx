/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-07-01 16:25:01
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-07-01 16:29:49
 * @FilePath: /react-demo/src/views/useHover/index.tsx
 * @Description: hover
 */
import { useState } from "react";
import useEventListener from "../../useEventListener/component";

interface Options {
  onEnter?: () => void;
  onLeave?: () => void;
}

const useHover = (target: any, options?: Options): boolean => {
  const [flag, setFlag] = useState<boolean>(false);
  const { onEnter, onLeave } = options || {};

  useEventListener(
    "mouseenter",
    () => {
      onEnter?.();
      setFlag(true);
    },
    target
  );

  useEventListener(
    "mouseleave",
    () => {
      onLeave?.();
      setFlag(false);
    },
    target
  );

  return flag;
};

export default useHover;
