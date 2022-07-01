/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-07-01 14:10:28
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-07-01 14:31:56
 * @FilePath: /react-demo/src/views/useCreation/source.ts
 * @Description: useCreation实现
 */
import { DependencyList, useRef } from "react";

const depsAreSame = (
  oldDeps: DependencyList,
  deps: DependencyList
): boolean => {
  if (oldDeps === deps) return true;
  for (let index = 0; index < oldDeps.length; index++) {
    if (!Object.is(oldDeps[i], deps[i])) return false;
  }
  return true;
};

const useCreationFn = <T,>(fn: () => T, deps: DependencyList) => {
  const { current } = useRef({
    deps,
    obj: undefined as undefined | T,
    initialized: false,
  });
  if (current.initialized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps;
    current.obj = fn();
    current.initialized = true;
  }
  return current.obj as T;
};
export default useCreationFn;
