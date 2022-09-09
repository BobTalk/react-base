/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-09-09 11:04:30
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-09-09 11:22:05
 * @FilePath: /react-demo/src/views/useSyncExternalStore/index.tsx
 * @Description: 用于读取和订阅外部数据源的 hook
 * const state = useSyncExternalStore(subscribe, getSnapshot[, getServerSnapshot])
 * subscribe: 订阅函数，用于注册一个回调函数，当存储值发生更改时被调用。此外， useSyncExternalStore 会通过带有记忆性的 getSnapshot 来判别数据是否发生变化，如果发生变化，那么会强制更新数据。
 * getSnapshot: 返回当前存储值的函数。必须返回缓存的值。如果 getSnapshot 连续多次调用，则必须返回相同的确切值，除非中间有存储值更新。
 * getServerSnapshot：返回服务端(hydration模式下)渲染期间使用的存储值的函数
 */
import React, { useSyncExternalStore } from "react";
import { combineReducers, createStore } from "redux";
import { Button } from "antd";
const reducer = (state = 1, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "DEL":
      return state - 1;
    default:
      return state;
  }
};

/* 注册reducer,并创建store */
const rootReducer = combineReducers({ countNum: reducer });
const store = createStore(rootReducer, { countNum: 1 });

const Index = () => {
  // 订阅
  const state = useSyncExternalStore(
    store.subscribe,
    () => store.getState().countNum
  );
  return (
    <div>
      <div>{state}</div>
      <div>
        <Button onClick={() => store.dispatch({ type: "ADD" })}>加1</Button>
        <Button
          style={{ marginLeft: 8 }}
          onClick={() => store.dispatch({ type: "DEL" })}
        >
          减1
        </Button>
      </div>
    </div>
  );
};

export default Index;
