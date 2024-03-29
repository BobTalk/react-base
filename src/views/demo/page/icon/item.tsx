/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-21 18:10:31
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-24 11:14:52
 * @FilePath: /react-base/src/views/demo/page/icon/item.tsx
 * @Description: 根据类型渲染不同图标
 */

import { memo, useState } from "react";
import { addChartsId, addChartsConfig, addChartsSite } from "../../../../redux/action";
import chartsOptions from "../../chartsConfig/options.js";
import { generateUUID } from "@/utils.ts";
import scopeStyle from "./box.module.less";
const ItemIconComp = ({ options = {}, ...props }) => {
    let { title, icon } = options;
    let { dispatch, getState } = props;
    let [CompName, setCompName] = useState(null);
    // 根据图表类型进行组建加载
    const impComp = async () => {
        let IconComp = await import(`../../components/icon/${icon}.tsx`)
        setCompName(() => IconComp.default)
    };
    impComp()
    // 图表点击事件
    const chartClick = (chartType) => {
        let uuid = generateUUID() + "_" + chartType
        let options = chartsOptions[chartType]
        if (!options) return
        let { activeChartsId = [], activeChartsConfig = {}, activeChartsSite = {} } = getState()
        dispatch(addChartsId([...activeChartsId, uuid]))
        let key = activeChartsConfig[uuid]
        dispatch(addChartsConfig({ ...activeChartsConfig, [uuid]: options }))
        //  图表默认宽高位置
        dispatch(addChartsSite({
            [uuid]: {
                ...activeChartsSite,
                h: 200,
                w: 200,
                x: 0,
                y: 0
            }
        }))
    }
    return CompName ? <div onClick={
        () => { chartClick(icon) }
    } className="grid w-[96px] h-[72px] place-items-center cursor-pointer">
        {/* 图表title */}
        <span className={scopeStyle['title']} > {title} </span>
        {/* icon组件 */}
        <CompName width={40} height={40} />
    </div > : null
}
export default memo(ItemIconComp, (prv, next) => {
    return (prv?.options?.icon == next?.options?.icon)
})