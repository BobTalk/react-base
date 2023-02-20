/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-12 14:44:42
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-20 09:44:23
 * @FilePath: /react-base/src/components/uiComp/Tooltip/index.tsx
 * @Description: tooltip组件
 */

import RecursionComp from "./child";
import { memo } from "react";
import logic from "./logic.js";
const TooltipComp = (props) => {
  let {
    nodeClickCb,
    TooltipBoxRef,
    tooltipChangeCb,
    tooltipArr
  } = logic(props)
  return (
    <div ref={TooltipBoxRef}>
      <RecursionComp
        nodeClick={nodeClickCb}
        color={props.color}
        active={props.active}
        overlayClassName={props.overlayClassName}
        overlayStyle={props.overlayStyle}
        overlayInnerStyle={props.overlayInnerStyle}
        placement={props.placement}
        trigger={props.trigger}
        zIndex={props.zIndex}
        renderChild={props.renderChild}
        onOpenChange={tooltipChangeCb}
        tooltipArr={tooltipArr}
        arrowPointAtCenter={props.arrowPointAtCenter}
      >
        {props.children}
      </RecursionComp>
    </div>
  );
};
TooltipComp.defaultProps = {
  data: [],
  color: "#FFF",
  overlayClassName: "", // 卡片类名
  overlayStyle: {}, // 卡片样式
  overlayInnerStyle: {}, // 卡片内容区域的样式对象
  placement: "left",
  trigger: "click",
  zIndex: 999,
  active: [],
  arrowPointAtCenter: true,
};
export default memo(TooltipComp, (prv, next) => {
  return prv == next;
});
