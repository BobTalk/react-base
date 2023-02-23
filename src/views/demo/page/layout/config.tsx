/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-21 10:11:26
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-23 16:46:00
 * @FilePath: /react-base/src/views/demo/page/layout/config.tsx
 * @Description: 配置
 */
import IconRender from "../icon"
import scopeStyle from "./config.module.less";
import mergeClassName from "classnames";
const ConfigPage = (props) => {
    let { className, style } = props;
    return <div style={style} className={mergeClassName("grid gap-[10px]", scopeStyle['config-box'], className)}>
        <IconRender {...props} />
    </div >
}
export default ConfigPage