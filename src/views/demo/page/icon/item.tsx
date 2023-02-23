/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-21 18:10:31
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-23 17:25:59
 * @FilePath: /react-base/src/views/demo/page/icon/item.tsx
 * @Description: 根据类型渲染不同图标
 */

import { memo, useState } from "react";
import { addChartsId, addChartsConfig } from "../../../../redux/action";
import chartsOptions from "../../chartsConfig/options.js";
import { generateUUID } from "@/utils.ts";
import scopeStyle from "./box.module.less";
const ItemIconComp = ({ options = {}, ...props }) => {
    let { title, icon } = options;
    let { dispatch, getState } = props;
    let [CompName, setCompName] = useState(null);
    const impComp = async () => {
        let IconComp = await import(`../../components/icon/${icon}.tsx`)
        setCompName(() => IconComp.default)
    };
    impComp()
    const chartClick = (chartType) => {
        let uuid = generateUUID()
        let options = chartsOptions[chartType]
        let { activeChartsId = [], activeChartsConfig = {} } = getState()
        dispatch(addChartsId([...activeChartsId, uuid]))
        let key = activeChartsConfig[uuid]
        dispatch(addChartsConfig({ [uuid]: options }))
    }
    return CompName ? <div onClick={
        () => { chartClick(icon) }
    } className="grid w-[96px] h-[72px] place-items-center cursor-pointer">
        <span className={scopeStyle['title']} > {title} </span>
        <CompName width={40} height={40} />
    </div > : null
}
export default memo(ItemIconComp, (prv, next) => {
    return (prv?.options?.icon == next?.options?.icon)
})