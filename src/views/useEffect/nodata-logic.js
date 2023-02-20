/*
 * @Author: your name
 * @Date: 2022-05-05 10:18:35
 * @LastEditTime: 2023-02-20 10:35:56
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @Description: 
 * @FilePath: /react-demo/src/views/useEffect/nodata.tsx
 */
import { useEffect, useImperativeHandle, useState } from "react";
export default function (props, options = {}) {
  let { ref } = options;
  useImperativeHandle(ref, () => ({}));
  let [name, setName] = useState("");
  let [age, setAge] = useState(18);
  // 初始化时执行
  useEffect(() => {
    console.log("change");
  }, []);
  return {
    name,
    age,
    setName,
    setAge
  }
}
