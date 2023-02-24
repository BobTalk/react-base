/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-21 16:22:42
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-24 11:00:13
 * @FilePath: /react-base/src/views/demo/page/layout/drag-box.js
 * @Description: 拖拽盒子-逻辑
 */
import { useEffect, useRef, useState } from "react";
import { addChartsSite } from "@/redux/action/index.ts";
export default function (props, options = {}) {
    let [isDragDisabled, setDragDisabled] = useState(false);
    let [dragBoxW, setDragBoxW] = useState(200);
    let [dragBoxH, setDragBoxH] = useState(200);
    let [boxX, setBoxX] = useState(null)
    let [boxy, setBoxY] = useState(null)
    const onResize = (event, { element, size, handle }) => {
        let { width, height } = size
        setDragBoxW(() => width)
        setDragBoxH(() => height)
    }
    const dragElSite = (e, data) => {
        let { x, y } = data;
        setBoxX(() => x)
        setBoxY(() => y)
        props.dispatch(addChartsSite({
            ...props.activeChartsSite, [props.chartsId]: { x, y }
        }))
    }
    return {
        onResize,
        isDragDisabled,
        dragBoxW,
        dragBoxH,
        dragElSite,
        boxX,
        boxY:boxy,
        childrenEl: props.children,
        position: { x: boxX ?? props.x ?? options.x ?? 0, y: boxy ?? props.y ?? options.y ?? 0 },
        dragElFlag: props.handle ?? options.handle
    }
}