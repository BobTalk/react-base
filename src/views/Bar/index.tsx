import BarComponents from "@/components/echarts/Bar/index.tsx";
import TooltipComp from "../../components/uiComp/Tooltip";
const BarComp = (props) => {
  // <BarComponents></BarComponents>;
  const titleArr = [
    {
      label: "高级计算",
      id: "2",
    },
    {
      label: "聚合方式",
      id: "1",
      visible: false,
      children: [
        {
          label: "求和",
          id: "1-1",
          visible: false,
          children: [
            {
              label: "数值",
              id: "1-1-1",
              visible: false,
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

  return <TooltipComp data={titleArr}></TooltipComp>;
};
export default BarComp;
