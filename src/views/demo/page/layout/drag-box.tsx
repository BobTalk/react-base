/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-21 16:21:22
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-23 15:48:45
 * @FilePath: /react-base/src/views/demo/page/layout/drag-box.tsx
 * @Description: 拖拽盒子
 */
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import { pxToRem } from '../../../../utils.js';
import logic from "./drag-box-logic.js";
const DragBox = ({ options = {}, ...props }) => {
    let {
        onResize,
        isDragDisabled,
        dragBoxW,
        dragBoxH,
        childrenEl,
        position,
        dragElFlag,
        dragElSite
    } = logic(props, options)
    return <Draggable
        bounds="parent"
        handle={dragElFlag}
        position={position}
        onDrag={dragElSite}
        disabled={isDragDisabled}>
        <Resizable
            width={dragBoxW}
            height={dragBoxH}
            className="border"
            onResize={onResize}>
            <div className='_drag' style={{ width: pxToRem(dragBoxW), height: pxToRem(dragBoxH) }}>
                {childrenEl}
            </div>
        </Resizable>
    </Draggable>
}
DragBox.defaultProps = {}
export default DragBox