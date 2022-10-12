/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-12 14:44:42
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-10-12 15:56:34
 * @FilePath: /react-base/src/components/uiComp/Tooltip/index.tsx
 * @Description: tooltip组件
 */
import { Button, Tooltip } from "antd";
import { memo, useState } from "react";
import RecursionComp from "./child";
const TooltipComp = () => {
  const [visible, setVisible] = useState(false);
  const titleArr = [
    {
      label: "高级计算",
      id: "2",
    },
    {
      label: "聚合方式",
      id: "1",
      children: [
        {
          label: "求和",
          id: "1-1",
          children: [
            {
              label: "数值",
              id: "1-1-1",
            },
          ],
        },
        {
          label: "最大值",
          id: "1-2",
        },
        {
          label: "最小值",
          id: "1-3",
        },
        {
          label: "平均值",
          id: "1-4",
        },
      ],
    },
  ];
  const tooltipChangeCb = (open) => {
    console.log("open: ", open);
    setVisible((visible) => (visible = open));
  };
  const nodeClickCb = () => {
    console.log("nodeClick");
    setVisible((visible) => (visible = false));
  };

  return (
    <RecursionComp
      visible={visible}
      nodeClick={nodeClickCb}
      onOpenChange={tooltipChangeCb}
      tooltipArr={titleArr}
    ></RecursionComp>
  );
};
export default TooltipComp;
