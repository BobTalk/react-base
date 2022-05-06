/*
 * @Author: your name
 * @Date: 2022-05-05 10:18:47
 * @LastEditTime: 2022-05-06 11:12:51
 * @LastEditors: Please set LastEditors
 * @Description: effect监听数组
 * @FilePath: /react-demo/src/views/useEffect/array.tsx
 */
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Input } from "antd";
import { debounce } from "lodash";
const EffectArray = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({}));
  let [name, setName] = useState("");
  let [age, setAge] = useState(18);
  // 第一次会执行两次
  useEffect(() => {
    console.log("change");
  }, [name, age]);
  return (
    <>
      <Input
        placeholder="用户名"
        defaultValue={name}
        onChange={debounce((e) => {
          setName(e.target.value);
        }, 1500)}
      />
      <Input
        placeholder="年龄"
        defaultValue={age}
        onChange={debounce((e) => {
          setAge(e.target.value);
        }, 1500)}
      />
    </>
  );
});

export default EffectArray;
