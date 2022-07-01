/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-07-01 14:00:13
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-07-01 14:32:42
 * @FilePath: /react-demo/src/views/useCreation/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from "react";
import useCreationFn  from "./component/index.tsx";
const Index: React.FC<any> = () => {
  const [_, setFlag] = useState<boolean>(false);
  const getNowData = () => {
    return Math.random();
  };
  const nowData = useCreationFn(() => getNowData(), []);
  return (
    <div style={{ padding: 50 }}>
      <div>正常函数: {getNowData()} </div>
      <div> 包裹后函数: {nowData} </div>
      <p
        onClick={() => {
          setFlag((v) => !v);
        }}
      >
        渲染
      </p>
    </div>
  );
};
export default Index;
