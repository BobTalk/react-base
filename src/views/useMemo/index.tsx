/*
 * @Author: your name
 * @Date: 2022-05-06 11:55:08
 * @LastEditTime: 2022-05-06 13:07:14
 * @LastEditors: Please set LastEditors
 * @Description: useMemo 具有缓存作用  <值>
 * @FilePath: /react-demo/src/views/useMemo/index.tsx
 */
import {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { Input } from "antd";
const memoComp = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({}));
  let [inputVal, setInputVal] = useState("");
  let [fruit, setFruit] = useState(["apple", "pear", "banana"]);
  let memoFruit = useMemo(() => {
    console.log(fruit);
    return [...fruit, 'Origin'];
  }, [fruit]);
  useEffect(() => {
    console.log("effect: ", memoFruit);
  }, [memoFruit]);
  return (
    <>
      input:
      <Input
        placeholder="请输入"
        defaultValue={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      ></Input>
      add fruit:
      <Input
        placeholder="请输入"
        defaultValue={inputVal}
        onPressEnter={(e) => setFruit([...fruit, e.target.value])}
      ></Input>
      {fruit.map((item, index) => (
        <p key={item.toString(10) + index}>{item}</p>
      ))}
    </>
  );
});
export default memoComp;
