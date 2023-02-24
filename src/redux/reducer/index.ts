/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-15 17:02:09
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-24 09:36:33
 * @FilePath: /react-drag/src/redux/reducer/index.ts
 * @Description: 创建组件服务的reducer，reducer的本质就是一个函数
 */
import {
    INCREMENT,
    DECREMENT,
    ADDATTR,
    ADDCHARTS,
    ADDCHARTSOPTIONS,
    ADDCHARTSITE
} from '../type'
import initState from "../state";
export default function countReducer(preState = initState, action) {
    //从action对象中获取：type、data
    const { type, data } = action
    //根据type决定如何加工数据
    switch (type) {
        case INCREMENT: //如果是加
            return { ...preState, res: data }
        case DECREMENT: //若果是减
            return { ...preState, res: data }
        case ADDATTR:
            return {
                ...preState,
                ...data
            }
        case ADDCHARTS:
            return {
                ...preState,
                activeChartsId: data
            }
        case ADDCHARTSOPTIONS:
            return {
                ...preState,
                activeChartsConfig: data
            }
        case ADDCHARTSITE:
            return {
                ...preState,
                activeChartsSite: data
            }
        default:
            return preState
    }
}
