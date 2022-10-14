import BarComponents from "@/components/echarts/Bar/index.tsx";
import { useState } from "react";
import TooltipComp from "../../components/uiComp/Tooltip";
const BarComp = (props) => {
  const titleArr = [
    {
      label: "高级计算",
      id: "2",
      parentId: null,
      visible: false,
      isActive: false,
      activeStyleObj: {
        background: "rgba(59, 130, 246, 0.5)",
        color: "#FFF",
      },
      children: [
        {
          label: "求和",
          id: "2-1",
          parentId: "2",
          isActive: false,
          visible: false,
          activeStyleObj: {
            background: "rgba(59, 130, 246, 0.5)",
            color: "#FFF",
          },
          children: [
            {
              label: "数值",
              id: "2-1-1",
              parentId: "2-1",
              isActive: false,
              visible: false,
              activeStyleObj: {
                background: "rgba(59, 130, 246, 0.5)",
                color: "#FFF",
              },
            },
          ],
        },
        {
          label: "最大值",
          id: "2-2",
          parentId: "2",
          isActive: false,
          visible: false,
          activeStyleObj: {
            background: "rgba(59, 130, 246, 0.5)",
            color: "#FFF",
          },
        },
        {
          label: "最小值",
          id: "2-3",
          parentId: "2",
          isActive: false,
          visible: false,
          activeStyleObj: {
            background: "rgba(59, 130, 246, 0.5)",
            color: "#FFF",
          },
        },
        {
          label: "平均值",
          id: "2-4",
          parentId: "2",
          isActive: false,
          visible: false,
          activeStyleObj: {
            background: "rgba(59, 130, 246, 0.5)",
            color: "#FFF",
          },
        },
      ],
    },
    {
      label: "聚合方式",
      id: "1",
      parentId: null,
      isActive: false,
      visible: false,
      activeStyleObj: {
        background: "rgba(59, 130, 246, 0.5)",
        color: "#FFF",
      },
      children: [
        {
          label: "求和",
          id: "1-1",
          parentId: "1",
          visible: false,
          isActive: false,
          activeStyleObj: {
            background: "rgba(59, 130, 246, 0.5)",
            color: "#FFF",
          },
          children: [
            {
              label: "数值",
              id: "1-1-1",
              parentId: "1-1",
              visible: false,
              isActive: false,
              activeStyleObj: {
                background: "rgba(59, 130, 246, 0.5)",
                color: "#FFF",
              },
            },
          ],
        },
        {
          label: "最大值",
          id: "1-2",
          parentId: "1",
          visible: false,
          isActive: false,
          activeStyleObj: {
            background: "rgba(59, 130, 246, 0.5)",
            color: "#FFF",
          },
          children: [
            {
              label: "String",
              id: "1-2-1",
              parentId: "1-2",
              visible: false,
              isActive: false,
              activeStyleObj: {
                background: "rgba(59, 130, 246, 0.5)",
                color: "#FFF",
              },
            },
            {
              label: "Number",
              id: "1-2-2",
              parentId: "1-2",
              visible: false,
              isActive: false,
              activeStyleObj: {
                background: "rgba(59, 130, 246, 0.5)",
                color: "#FFF",
              },
            },
          ],
        },
        {
          label: "最小值",
          id: "1-3",
          parentId: "1",
          visible: false,
          isActive: false,
          activeStyleObj: {
            background: "rgba(59, 130, 246, 0.5)",
            color: "#FFF",
          },
          children: [
            {
              label: "vue",
              id: "1-3-1",
              parentId: "1-3",
              visible: false,
              isActive: false,
              activeStyleObj: {
                background: "rgba(59, 130, 246, 0.5)",
                color: "#FFF",
              },
            },
            {
              label: "react",
              id: "1-3-2",
              parentId: "1-3",
              visible: false,
              isActive: false,
              activeStyleObj: {
                background: "rgba(59, 130, 246, 0.5)",
                color: "#FFF",
              },
            },
          ],
        },
        {
          label: "平均值",
          id: "1-4",
          parentId: "1",
          visible: false,
          isActive: false,
          activeStyleObj: {
            background: "rgba(59, 130, 246, 0.5)",
            color: "#FFF",
          },
        },
      ],
    },
  ];
  const [activeId, setActiveId] = useState([]);
  return (
    <div className="flex">
      <BarComponents></BarComponents>
      <TooltipComp
        data={titleArr}
        active={activeId}
        onClick={(params, activeBtnId) => {
          setActiveId((activeId) => (activeId = activeBtnId));
        }}
      ></TooltipComp>
    </div>
  );
};
export default BarComp;
