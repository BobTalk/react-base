/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-21 10:11:15
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-23 18:44:50
 * @FilePath: /react-base/src/views/demo/page/layout/canvas.tsx
 * @Description:画布
 */
import logic from "./canvas-logic.js";
import DragBox from "./drag-box.tsx";
import mergeClassName from "classnames";
import { useEffect, useState } from "react";
const CanvasPage = (props) => {
    let { className, style, getState } = props;
    let { activeChartsConfig, activeChartsId } = getState()
    let [ChartComp, setChartComp] = useState([])

    const getComp = async (type) => {
        let compName = await import(`../charts/${type}/index.tsx`)
        setChartComp(() => [...ChartComp, compName.default])
    }
    useEffect(() => {
        for (let index = 0; index < activeChartsId.length; index++) {
            getComp(activeChartsId[index].split('_')[1])
        }
    }, [activeChartsId])
    return (
        <div
            style={style}
            className={mergeClassName("w-full h-full relative", className)}>
            {/* 拖拽盒子父级 需要 relative/absolute */}
            {
                !!ChartComp.length && ChartComp.map((CompName, index) => (
                    <DragBox key={index} options={{
                        x: 20,
                        y: 0,
                        handle: '.title'
                    }}>
                        <CompName />
                    </DragBox>))
            }
        </div >)
}
export default CanvasPage