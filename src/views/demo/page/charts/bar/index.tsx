/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-21 17:45:41
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-24 13:41:22
 * @FilePath: /react-base/src/views/demo/page/charts/Bar/index.tsx
 * @Description: 柱子
 */
const BarComp = (props) => {
    let { className } = props;
    return <div className={className}>
        {props.children}
    </div>
}
export default BarComp