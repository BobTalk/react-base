/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-21 10:11:15
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-21 16:11:43
 * @FilePath: /react-base/src/views/demo/page/layout/canvas.tsx
 * @Description:画布
 */
import logic from "./canvas-logic.js";
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
const CanvasPage = (props) => {
    let {
        dragArea,
        onResize,
        isDragDisabled,
        dragBoxW,
        dragBoxH
    } = logic(props)
    return (
        <div className="w-full h-full relative">
            {/* 拖拽盒子父级 需要 relative/absolute */}
            <Draggable bounds="parent" handle='.drag-box' disabled={isDragDisabled}>
                <Resizable
                    width={dragBoxW}
                    height={dragBoxH}
                    className="border hover-handles"
                    onResize={onResize}>
                    <div style={{ width: dragBoxW, height: dragBoxH }}>
                        <p className="drag-box">Drag Me</p>
                        <div  >
                            I can only be moved within my offsetParent.<br /><br />
                            Both parent padding and child margin work properly.
                        </div>
                    </div>
                </Resizable>
            </Draggable>
        </div>)
}
export default CanvasPage