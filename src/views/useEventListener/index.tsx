/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-07-01 15:56:17
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-07-01 16:04:07
 * @FilePath: /react-demo/src/views/layout/useEventListener/index.tsx
 * @Description: 监听对应页面元素
 */
import React, { useState, useRef } from "react";
import useEventListener from "./component/index";
import { Button } from "antd";

const Index: React.FC<any> = (props) => {
  const [count, setCount] = useState<number>(0);
  const [flag, setFlag] = useState<boolean>(true);
  const [key, setKey] = useState<string>("");
  const ref = useRef(null);

  useEventListener("click", () => setCount((v) => v + 1), ref);
  useEventListener("keydown", (ev) => setKey(ev.key));

  return (
    <div style={{ padding: 20 }}>
      <Button
        color="primary"
        onClick={() => {
          setFlag((v) => !v);
        }}
      >
        切换 {flag ? "unmount" : "mount"}
      </Button>
      {flag && (
        <div>
          <div>数字：{count}</div>
          <button ref={ref}>加1</button>
          <div>监听键盘事件：{key}</div>
        </div>
      )}
    </div>
  );
};

export default Index;
