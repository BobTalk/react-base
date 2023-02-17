import BarComponents from "@/components/echarts/Bar/index.tsx";
import { useDrop } from "ahooks";
import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import DragItem from "@/components/drag";
import BarRootContent from "./shared";
import RenderDragItem from "./renderDragItem";
const BarComp = (props) => {
  const staticDragArr = [
    {
      label: "会员姓名",
      id: 1,
    },
    {
      label: "购买商品",
      id: 2,
    },
    {
      label: "性别",
      id: 3,
    },
    {
      label: "购买时间",
      id: 4,
    },
    {
      label: "会员生日",
      id: 5,
    },
    {
      label: "订单编号",
      id: 6,
    },
    {
      label: "购买数量",
      id: 7,
    },
  ];
  const dropRef = useRef({});
  const chartRef = useRef({});
  let [dragInfo, setDragInfo] = useState([]);
  useDrop(dropRef, {
    onText: (text, e) => {},
    onDom: (content, e) => {
      let dragInfoLen = dragInfo.length + 1;
      let dragData = {
        label: content.label,
        id: dragInfoLen,
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
            id: `${dragInfoLen}-1`,
            parentId: dragInfoLen,
            isActive: false,
            visible: false,
            activeStyleObj: {
              background: "rgba(59, 130, 246, 0.5)",
              color: "#FFF",
            },
            children: [
              {
                label: "数值",
                id: `${dragInfoLen}-1-1`,
                parentId: `${dragInfoLen}-1`,
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
            id: `${dragInfoLen}-2`,
            parentId: dragInfoLen,
            isActive: false,
            visible: false,
            activeStyleObj: {
              background: "rgba(59, 130, 246, 0.5)",
              color: "#FFF",
            },
          },
          {
            label: "最小值",
            id: `${dragInfoLen}-3`,
            parentId: dragInfoLen,
            isActive: false,
            visible: false,
            activeStyleObj: {
              background: "rgba(59, 130, 246, 0.5)",
              color: "#FFF",
            },
          },
          {
            label: "平均值",
            id: `${dragInfoLen}-4`,
            parentId: dragInfoLen,
            isActive: false,
            visible: false,
            activeStyleObj: {
              background: "rgba(59, 130, 246, 0.5)",
              color: "#FFF",
            },
          },
        ],
      };
      setDragInfo((dragInfo) => (dragInfo = [...dragInfo, dragData]));
    },
    onFiles: (files, e) => {},
    onUri: (uri) => {},
    onDragEnter: () => {},
    onDragLeave: () => {},
    onDragOver: () => {},
  });
  return (
    <BarRootContent.Provider value={{ dragInfo }}>
      <div
        className="w-full grid gap-[8px]"
        style={{ gridTemplateColumns: "calc(100% - 378px) 370px" }}
      >
        <BarComponents
          ref={chartRef}
          style={{ height: "500px" }}
        ></BarComponents>

        <div className="inline-grid grid-cols-2 gap-[8px] mt-8px">
          <div>
            {staticDragArr.map((item) => (
              <DragItem
                key={item.id}
                data={item}
                renderItem={(data) => {
                  return <p style={{ textAlign: "center" }}>{data.label}</p>;
                }}
              ></DragItem>
            ))}
          </div>
          <div ref={dropRef} style={{ width: "80%", margin: "0 auto" }}>
            <div className="border min-h-[100px]">
              <RenderDragItem></RenderDragItem>
            </div>
          </div>
        </div>
      </div>
    </BarRootContent.Provider>
  );
};
export default memo(BarComp, (prv, next) => {
  return prv == next;
});
