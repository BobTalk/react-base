/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-14 16:44:56
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-10-14 17:09:00
 * @FilePath: /react-base/src/views/Bar/renderDragItem.tsx
 * @Description: 渲染拖拽项
 */
import { useContext, useEffect, useState } from "react";
import BarRootData from "./shared.ts";
import TooltipComp from "@/components/uiComp/Tooltip";
const RenderDragItem = () => {
  let { dragInfo } = useContext(BarRootData);
  const [activeId, setActiveId] = useState([]);
  return (
    <TooltipComp
      key={dragInfo.length}
      data={dragInfo}
      active={activeId}
      onClick={(params, activeBtnId) => {
        setActiveId((activeId) => (activeId = activeBtnId));
      }}
    ></TooltipComp>
  );
};
export default RenderDragItem;
