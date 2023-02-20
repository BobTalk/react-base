/*
 * @Author: your name
 * @Date: 2022-05-05 10:18:58
 * @LastEditTime: 2023-02-20 10:06:07
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @Description: 销毁作用域
 * @FilePath: /react-demo/src/views/useEffect/destroy.tsx
 */
import { forwardRef } from "react";
import destroy from "./destroy-logic.js";
const EffectDestroy = forwardRef((props, ref) => {
  let {
    count,
    setCount
  } = destroy(props, { ref })
  return (
    <div>
      <p>那啥，你点了我 {count} 次 ????????</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        你觉得你点击我之后会发生什么??????
      </button>
    </div>
  );
});

export default EffectDestroy;
