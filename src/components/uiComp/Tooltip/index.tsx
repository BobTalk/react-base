/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-12 14:44:42
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-10-13 14:18:20
 * @FilePath: /react-base/src/components/uiComp/Tooltip/index.tsx
 * @Description: tooltip组件
 */
import { Button, Tooltip } from "antd";
import { memo, useState } from "react";
import RecursionComp from "./child";
const TooltipComp = (props) => {
  const [tooltipArr, setTooltipArr] = useState(props.data);
  const [_, setRefresh] = useState({});
  const tooltipChangeCb = (open, currentItem) => {
    treeForeach((item) => {
      if (item.id == currentItem.id) {
        item.visible = !item.visible;
      } else if (!currentItem.parentId) {
        item.visible = false;
      }
    }, tooltipArr);
    setRefresh({});
  };
  const nodeClickCb = (currentNode) => {
    treeForeach((item) => {
      item.visible = false;
    }, tooltipArr);
    setRefresh({});
  };

  const treeForeach = (fn, dataSource) => {
    dataSource.forEach((item) => {
      item.children && treeForeach(fn, item.children);
      fn(item);
    });
  };
  return (
    <div>
      <RecursionComp
        nodeClick={nodeClickCb}
        onOpenChange={tooltipChangeCb}
        tooltipArr={tooltipArr}
      ></RecursionComp>
    </div>
  );
};
TooltipComp.defaultProps = {
  data: [],
};
export default TooltipComp;
