/*
 * @Author: your name
 * @Date: 2022-05-05 10:18:35
 * @LastEditTime: 2022-05-06 11:16:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react-demo/src/views/useEffect/nodata.tsx
 */
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Input } from "antd";
import { debounce } from "lodash";
const EffectNoData = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({}));
  let [name, setName] = useState("");
  let [age, setAge] = useState(18);
  // 初始化时执行
  useEffect(() => {
    console.log("change");
  }, []);
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

export default EffectNoData;
