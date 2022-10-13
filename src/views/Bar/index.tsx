import BarComponents from "@/components/echarts/Bar/index.tsx";
import TooltipComp from "../../components/uiComp/Tooltip";
const BarComp = (props) => {
  const titleArr = [
    {
      label: "高级计算",
      id: "2",
      parentId: null,
      visible: false,
      children: [
        {
          label: "求和",
          id: "2-1",
          parentId: "2",
          visible: false,
          children: [
            {
              label: "数值",
              id: "2-1-1",
              parentId: "2-1",
              visible: false,
            },
          ],
        },
        {
          label: "最大值",
          id: "2-2",
          parentId: "2",
        },
        {
          label: "最小值",
          id: "2-3",
          parentId: "2",
        },
        {
          label: "平均值",
          id: "2-4",
          parentId: "2",
        },
      ],
    },
    {
      label: "聚合方式",
      id: "1",
      parentId: null,
      visible: false,
      children: [
        {
          label: "求和",
          id: "1-1",
          parentId: "1",
          visible: false,
          children: [
            {
              label: "数值",
              id: "1-1-1",
              parentId: "1-1",
              visible: false,
            },
          ],
        },
        {
          label: "最大值",
          id: "1-2",
          parentId: "1",
        },
        {
          label: "最小值",
          id: "1-3",
          parentId: "1",
        },
        {
          label: "平均值",
          id: "1-4",
          parentId: "1",
        },
      ],
    },
  ];

  return (
    <div className='flex'>
      <BarComponents></BarComponents>
      <TooltipComp data={titleArr}></TooltipComp>
    </div>
  );
};
export default BarComp;
