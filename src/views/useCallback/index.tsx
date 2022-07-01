/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-07-01 14:46:53
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-07-01 15:12:44
 * @FilePath: /react-demo/src/views/useCallback/index.tsx
 * @Description: useCallBack
 * 当点击切换按钮的时候，未使用CallBack函数包裹会重新生成一个函数(跟之前一样)赋值于onclick事件
 *  useCallback点击对应的onclick自始自终都是一个(地址永远不变)
 */
import React, { useState, useCallback } from "react";
import { Button } from "antd";

const MockMemo: React.FC<any> = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const add = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <div className="flex justify-start">
        {/* 函数地址页面每更新一次函数地址就重新生成一次 */}
        <TestButton title="普通点击" onClick={() => setCount(count + 1)} />
        {/* 函数地址一产生 就不会改变 */}
        <TestButton title="useCallback点击" onClick={add} />
      </div>
      <div style={{ marginTop: 20 }}>count: {count}</div>
      <Button
        onClick={() => {
          setShow(!show);
        }}
      >
        切换
      </Button>
    </div>
  );
};

const TestButton = React.memo((props: any) => {
  return (
    <Button
      color="primary"
      onClick={props.onClick}
      style={
        props.title === "useCallback点击"
          ? {
              marginLeft: 20,
            }
          : undefined
      }
    >
      {props.title}
    </Button>
  );
});

export default MockMemo;
