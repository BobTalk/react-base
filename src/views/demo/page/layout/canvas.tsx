/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-21 10:11:15
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-21 16:55:41
 * @FilePath: /react-base/src/views/demo/page/layout/canvas.tsx
 * @Description:画布
 */
import logic from "./canvas-logic.js";
import DragBox from "./drag-box.tsx";
const CanvasPage = (props) => {
    return (
        <div className="w-full h-full relative">
            {/* 拖拽盒子父级 需要 relative/absolute */}
            <DragBox options={{
                x: 20,
                y: 0,
                handle: '.title'
            }}>
                <p className="title">drag me</p>
                <span>第一个盒子</span>
            </DragBox>
            <DragBox options={{ x: 120, y: 100 }} >
                <span>第二个盒子</span>
            </DragBox>
        </div >)
}
export default CanvasPage