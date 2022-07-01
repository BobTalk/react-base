/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-07-01 16:01:40
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-07-01 16:01:46
 * @FilePath: /react-demo/src/views/useLatest/index.tsx
 * @Description: 保证获取页面最新数据
 */
import { useRef } from "react";

const useLatest = <T,>(value: T) => {
  const ref = useRef(value);
  ref.current = value;

  return ref;
};

export default useLatest;
