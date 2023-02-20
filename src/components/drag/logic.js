/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-20 09:26:14
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-20 09:31:34
 * @FilePath: /react-base/src/components/drag/logic.js
 * @Description: 拖拽逻辑
 */
import { getDataType } from "@/utils.ts";
import { useDrag } from "ahooks";
import { useRef, useState } from "react";

export default function (props, options = {}) {
    let { renderItem, data } = props;
    const dragRef = useRef(null);
    const [dragging, setDragging] = useState(false);

    useDrag(data, dragRef, {
        onDragStart: () => {
            setDragging(() => true);
        },
        onDragEnd: () => {
            setDragging(() => false);
        },
    });
    return {
        dragRef,
        getDataType,
        renderItem,
        data
    }
}