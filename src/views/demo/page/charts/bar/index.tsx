/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-21 17:45:41
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-24 08:53:57
 * @FilePath: /react-base/src/views/demo/page/charts/Bar/index.tsx
 * @Description: 柱子
 */
const BarComp = (props) => {
    return <span className={props.title}>柱子
        {props.children}
    </span>
}
export default BarComp