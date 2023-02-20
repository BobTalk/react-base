/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-15 16:56:33
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-15 17:18:42
 * @FilePath: /react-drag/src/redux/index.ts
 * @Description: 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */

//引入createStore，专门用于创建redux中最为核心的store对象
import { createStore } from 'redux'
//引入为Count组件服务的reducer
import countReducer from './reducer'
//暴露store
export default createStore(countReducer)
