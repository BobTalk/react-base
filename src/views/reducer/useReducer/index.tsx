/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-09-09 10:39:19
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-09-09 10:47:11
 * @FilePath: /react-demo/src/views/useReducer/index.tsx
 * @Description: useReducer钩子函数
 */
import React, { useReducer } from "react";
import { Button } from "antd";

const ReducerIndex = () => {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action?.type) {
      case "add":
        return state + action?.payload;
      case "sub":
        return state - action?.payload;
      default:
        return state;
    }
  }, 0);

  return (
    <div style={{ padding: 20 }}>
      <div>count：{count}</div>
      <Button
        color="primary"
        onClick={() => dispatch({ type: "add", payload: 1 })}
      >
        加1
      </Button>
      <Button
        color="primary"
        style={{ marginLeft: 8 }}
        onClick={() => dispatch({ type: "sub", payload: 1 })}
      >
        减1
      </Button>
    </div>
  );
};

export default ReducerIndex;
