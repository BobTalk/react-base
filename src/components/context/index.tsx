/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-20 10:39:42
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-21 09:51:29
 * @FilePath: /react-base/src/components/context/index.tsx
 * @Description: 上下文
 */
import React, { createContext, useContext } from "react";
import { getDataType } from "@/utils";
export const createContext2 = function (data) {
    if (getDataType(data) != 'object') {
        // throw new Error("IS NOT JSON OBJECT");
        value: data
    }
    // 默认重新赋值
    return createContext(data)
}
