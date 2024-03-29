/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-09-09 16:32:19
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2024-03-14 22:26:35
 * @FilePath: /react-demo/src/views/useTransition/index.tsx
 * @Description: 数据更新等待状态
 */
import React, { useState, useTransition } from "react";

const Index = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  return (
    <div>
      <div>大家好：我是小杜杜~</div>
      输入框：
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          startTransition(() => {
            const res = [];
            for (let i = 0; i < 2; i++) {
              res.push(e.target.value);
            }
            setList(res);
          });
        }}
      />
      {isPending ? (
        <div>加载中...</div>
      ) : (
        list.map((item, index) => <div key={index}>{item}</div>)
      )}
    </div>
  );
};

export default Index;
