/*
 * @Author: your name
 * @Date: 2022-05-05 10:18:47
 * @LastEditTime: 2023-02-20 10:30:25
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @Description: effect监听数组
 * @FilePath: /react-demo/src/views/useEffect/array.tsx
 */
import { useEffect, useImperativeHandle, useState } from "react";

export default function (props, options = {}) {
  let { ref } = options
  useImperativeHandle(ref, () => ({}));
  let [name, setName] = useState("");
  let [age, setAge] = useState(18);
  // 第一次会执行两次
  useEffect(() => {
    console.log("change");
    return () => {
      console.log('销毁--array');
    }
  }, [name, age])
  return {
    name,
    age,
    setName,
    setAge
  }
};
