/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-21 10:11:15
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-24 14:05:59
 * @FilePath: /react-base/src/views/demo/page/layout/canvas.tsx
 * @Description:画布
 */
import logic from "./canvas-logic.js";
import DragBox from "./drag-box.tsx";
import mergeClassName from "classnames";
import scopeStyle from "./canvas.module.less";
import { useEffect, useState } from "react";
import DragComp from "../../components/icon/Drag.tsx";
const CanvasPage = (props) => {
    let { className, style, getState } = props;
    let { activeChartsConfig, activeChartsId } = getState()
    let [ChartComp, setChartComp] = useState([])
    let [ChartId, setChartId] = useState([])

    const getComp = async (id, type) => {
        let compName = await import(`../charts/${type}/index.tsx`)
        setChartId(() => [...ChartId, id])
        setChartComp(() => [...ChartComp, compName.default])
    }
    useEffect(() => {
        for (let index = 0; index < activeChartsId.length; index++) {
            let chartId = activeChartsId[index].split('_')
            getComp(activeChartsId[index], chartId[1])
        }
    }, [activeChartsId])
    return (
        <div
            style={style}
            className={mergeClassName("flex flex-wrap content-baseline w-full h-full relative", className)}>
            {/* 拖拽盒子父级 需要 relative/absolute */}
            {
                !!ChartComp.length && ChartComp.map((CompName, index) => (
                    <DragBox
                        {...props}
                        key={ChartId[index]}
                        chartsId={ChartId[index]}
                        options={{
                            x: props.activeChartsSite[index]?.x ?? 0,
                            y: props.activeChartsSite[index]?.y ?? 0,
                            handle: '.icon'
                        }}>
                        <CompName className={mergeClassName('w-full h-full relative', scopeStyle['chart-box'])}>
                            <DragComp className={mergeClassName('absolute left-[50%] translate-y-[-50%] translate-x-[-50%] icon', scopeStyle['drag-icon'])} ></DragComp>
                        </CompName>
                    </DragBox>))
            }
        </div >)
}
CanvasPage.defaultProps = {
    activeChartsSite: []
}
export default CanvasPage