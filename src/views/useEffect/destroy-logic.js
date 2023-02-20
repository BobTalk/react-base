/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-20 10:02:07
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-20 10:08:52
 * @FilePath: /react-base/src/views/useEffect/destroy-logic.js
 * @Description: 销毁逻辑
 */
import { useEffect, useImperativeHandle, useState } from "react";
import unmount from "./component/unmount";
import mount from "./component/mount";
export default function (props, options = {}) {
    let { ref } = options;
    useImperativeHandle(ref, () => ({}));
    const [count, setCount] = useState(0);
    // 初始化时即会执行清除机制
    // useEffect(() => {
    //   console.log("哈哈哈，useEffect 又执行了");
    //   return () => {
    //     console.log("看到我就知道执行了清除机制(～￣▽￣)～");
    //   };
    // }, [count]);
    mount(() => {
        if (!count) return;
        console.log("哈哈哈，useEffect 又执行了");
    }, [count]);
    unmount(() => {
        console.log("看到我就知道执行了清除机制(～￣▽￣)～");
    }, [count]);
    return {
        count,
        setCount
    }
}