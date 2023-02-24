/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-15 17:01:16
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-24 09:34:59
 * @FilePath: /react-drag/src/redux/action/index.ts
 * @Description: 该文件专门为组件生成action对象
 */
import {
    INCREMENT,
    DECREMENT,
    ADDATTR,
    ADDCHARTS,
    ADDCHARTSOPTIONS,
    ADDCHARTSITE
} from '../type.ts'

export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })
export const addAttrKey = data => ({ type: ADDATTR, data })

export const addChartsId = data => ({ type: ADDCHARTS, data })
export const addChartsConfig = data => ({ type: ADDCHARTSOPTIONS, data })
export const addChartsSite = data => ({ type: ADDCHARTSITE, data })