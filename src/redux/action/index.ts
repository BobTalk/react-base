/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-15 17:01:16
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-15 18:14:21
 * @FilePath: /react-drag/src/redux/action/index.ts
 * @Description: 该文件专门为组件生成action对象
 */
import { INCREMENT, DECREMENT, ADDATTR } from '../type.ts'

export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })

export const addAttrKey = data => ({ type: ADDATTR, data })