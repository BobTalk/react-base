/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-21 17:56:35
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-22 09:28:29
 * @FilePath: /react-base/src/views/demo/page/icon/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import iconCompList from "../../chartsConfig/chart.js";
import BarIconComp from "../../components/icon/Bar.tsx";
import ItemIconComp from "./item.tsx";
const IconRender = (props) => {
    let allChartKeys = Object.keys(iconCompList)
    console.log('allChartKeys: ', allChartKeys);
    return (<>
        {
            allChartKeys.map((itemKeys) => (<ItemIconComp key={itemKeys} options={iconCompList[itemKeys]} />))
        }
    </>)
}
export default IconRender