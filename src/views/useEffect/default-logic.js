/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-20 10:02:07
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-20 10:17:28
 * @FilePath: /react-base/src/views/useEffect/destroy-logic.js
 * @Description: 默认逻辑
 */
import { useEffect, useImperativeHandle, useState } from "react";
import unmount from "./component/unmount";
import mount from "./component/mount";
export default function (props, options = {}) {
    let { ref } = options
    // 把子组建中的属性/方法暴露到父组件 ref为父组件元素
    useImperativeHandle(ref, () => ({}))
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        console.log(`useEffect -> checked: ${checked.toString()}`)
    })
    return {
        checked,
        setChecked
    }
}