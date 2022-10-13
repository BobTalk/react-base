import BarComponents from "@/components/echarts/Bar/index.tsx";
import TooltipComp from "../../components/uiComp/Tooltip";
const BarComp = (props) => {
  const titleArr = [
    {
      label: "高级计算",
      id: "2",
      parentId: null,
      visible: false,
      isActive: false,
      children: [
        {
          label: "求和",
          id: "2-1",
          parentId: "2",
          isActive: false,
          visible: false,
          children: [
            {
              label: "数值",
              id: "2-1-1",
              parentId: "2-1",
              isActive: false,
              visible: false,
            },
          ],
        },
        {
          label: "最大值",
          id: "2-2",
          parentId: "2",
          isActive: false,
          visible: false,
        },
        {
          label: "最小值",
          id: "2-3",
          parentId: "2",
          isActive: false,
          visible: false,
        },
        {
          label: "平均值",
          id: "2-4",
          parentId: "2",
          isActive: false,
          visible: false,
        },
      ],
    },
    {
      label: "聚合方式",
      id: "1",
      parentId: null,
      isActive: false,
      visible: false,
      children: [
        {
          label: "求和",
          id: "1-1",
          parentId: "1",
          visible: false,
          isActive: false,
          children: [
            {
              label: "数值",
              id: "1-1-1",
              parentId: "1-1",
              visible: false,
              isActive: false,
            },
          ],
        },
        {
          label: "最大值",
          id: "1-2",
          parentId: "1",
          visible: false,
          isActive: false,
          children: [
            {
              label: "String",
              id: "1-2-1",
              parentId: "1-2",
              visible: false,
              isActive: false,
            },
            {
              label: "Number",
              id: "1-2-2",
              parentId: "1-2",
              visible: false,
              isActive: false,
            },
          ],
        },
        {
          label: "最小值",
          id: "1-3",
          parentId: "1",
          visible: false,
          isActive: false,
          children: [
            {
              label: "vue",
              id: "1-3-1",
              parentId: "1-3",
              visible: false,
              isActive: false,
            },
            {
              label: "react",
              id: "1-3-2",
              parentId: "1-3",
              visible: false,
              isActive: false,
            },
          ],
        },
        {
          label: "平均值",
          id: "1-4",
          parentId: "1",
          visible: false,
          isActive: false,
        },
      ],
    },
  ];

  return (
    <div className="flex">
      <BarComponents></BarComponents>
      <TooltipComp data={titleArr}></TooltipComp>
    </div>
  );
};
export default BarComp;
