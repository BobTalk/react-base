/*
 * @Author: your name
 * @Date: 2022-05-05 10:18:58
 * @LastEditTime: 2022-05-06 11:38:18
 * @LastEditors: Please set LastEditors
 * @Description: 销毁作用域
 * @FilePath: /react-demo/src/views/useEffect/destroy.tsx
 */
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
const EffectDestroy = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({}));
  const [count, setCount] = useState(0);
  // 初始化时即会执行清除机制
  useEffect(() => {
    console.log("哈哈哈，useEffect 又执行了");
    return () => {
      console.log("看到我就知道执行了清除机制(～￣▽￣)～");
    };
  }, [count]);

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
