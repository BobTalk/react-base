import BarComponents from "@/components/echarts/Bar/index.tsx";
import { useDrop } from "ahooks";
import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import DragItem from "../../components/drag";
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
  const dropRef = useRef({});
  useDrop(dropRef, {
    onText: (text, e) => {
      console.log("拖拽了文字进来", text);
    },
    onDom: (content, e) => {
      console.log("拖拽了dom进来", content);
    },
    onFiles: (files, e) => {
      console.log("拖拽了文件进来", files);
    },
    onUri: (uri) => {
      console.log("拖拽了链接进来", uri);
    },
    onDragEnter: () => {},
    onDragLeave: () => {},
    onDragOver: () => {
      console.log("拖拽中");
    },
  });
  return (
    <>
      <div
        className="w-full grid gap-[8px]"
        style={{ gridTemplateColumns: "calc(100% - 308px) 300px" }}
      >
        <div>
          <BarComponents style={{ height: "500px" }}></BarComponents>
        </div>
        {/* <TooltipComp
          data={titleArr}
          active={activeId}
          onClick={(params, activeBtnId) => {
            setActiveId((activeId) => (activeId = activeBtnId));
          }}
        ></TooltipComp> */}
        <div className="inline-grid grid-cols-2 gap-[8px]">
          <div></div>
          <div style={{ width: "80%", margin: "0 auto" }}>
            <div className="border min-h-[100px]"></div>
          </div>
        </div>
      </div>
      {/* <DragItem
        data={{ data: "数据有拖动" }}
        renderItem={(data) => {
          return <p>{data.data}</p>;
        }}
      ></DragItem>
      <div
        ref={dropRef}
        style={{ width: "200px", height: "100px", border: "1px solid blue" }}
      ></div> */}
    </>
  );
};
export default memo(BarComp, (prv, next) => {
  return prv == next;
});
