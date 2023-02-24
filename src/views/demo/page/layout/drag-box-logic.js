/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-21 16:22:42
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-24 11:32:17
 * @FilePath: /react-base/src/views/demo/page/layout/drag-box.js
 * @Description: 拖拽盒子-逻辑
 */
import { useEffect, useRef, useState } from "react";
import { addChartsSite } from "@/redux/action/index.ts";
export default function (props, options = {}) {
    let [isDragDisabled, setDragDisabled] = useState(false);
    let [dragBoxW, setDragBoxW] = useState(200);
    let [dragBoxH, setDragBoxH] = useState(200);
    let [boxX, setBoxX] = useState(0)
    let [boxy, setBoxY] = useState(0)
    let [isResizableDisabled, setIsResizableDisabled] = useState(false)
    // 存储盒子位置/宽/高
    const dispatchInfo = () => {
        props.dispatch(addChartsSite({
            ...props.activeChartsSite,
            [props.chartsId]: {
                x: boxX,
                y: boxy,
                w: dragBoxW,
                h: dragBoxH
            }
        }))
    }
    const onResize = (event, { element, size, handle }) => {
        let { width, height } = size
        setDragBoxW(() => width)
        setDragBoxH(() => height)
        dispatchInfo()
    }
    const dragElSite = (e, data) => {
        let { x, y } = data;
        setBoxX(() => x)
        setBoxY(() => y)
        dispatchInfo()
    }
    return {
        onResize,
        isDragDisabled,
        dragBoxW,
        dragBoxH,
        dragElSite,
        boxX,
        boxY: boxy,
        isResizableDisabled,
        childrenEl: props.children,
        position: { x: boxX ?? props.x ?? options.x ?? 0, y: boxy ?? props.y ?? options.y ?? 0 },
        dragElFlag: props.handle ?? options.handle
    }
}