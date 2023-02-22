/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-21 17:56:35
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-22 09:52:42
 * @FilePath: /react-base/src/views/demo/page/icon/index.tsx
 * @Description: 遍历图表配置
 */
import iconCompList from "../../chartsConfig/chart.js";
import ItemIconComp from "./item.tsx";
const IconRender = (props) => {
    let allChartKeys = Object.keys(iconCompList)
    return (<>
        {
            allChartKeys.map((itemKeys) => (<ItemIconComp key={itemKeys} options={iconCompList[itemKeys]} />))
        }
    </>)
}
export default IconRender