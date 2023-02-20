/*
 * @Author: your name
 * @Date: 2022-05-05 10:18:47
 * @LastEditTime: 2023-02-20 10:30:17
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @Description: effect监听数组
 * @FilePath: /react-demo/src/views/useEffect/array.tsx
 */
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Input } from "antd";
import { debounce } from "lodash";
import logic from "./array-logic.js";
const EffectArray = forwardRef((props, ref) => {
  let {
    name,
    age,
    setName,
    setAge
  } = logic(props, { ref })
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
