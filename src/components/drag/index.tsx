/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-14 10:44:35
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-10-14 11:18:55
 * @FilePath: /react-base/src/components/drag/index.tsx
 * @Description: 拖拽
 */
import { getDataType } from "@/utils.ts";
import { useDrag } from "ahooks";
import { useRef, useState } from "react";
const DragItem = (props) => {
  let { renderItem, data } = props;
  const dragRef = useRef<any>(null);
  const [dragging, setDragging] = useState(false);

  useDrag(data, dragRef, {
    onDragStart: () => {
      setDragging(true);
    },
    onDragEnd: () => {
      setDragging(false);
    },
  });
  return (
    <>
      <div ref={dragRef} className="block  mr-16px  mt-16px">
        {getDataType(data) !== "array"
          ? renderItem(data, 0)
          : data.map((item, index) => renderItem(item, index, data))}
      </div>
    </>
  );
};

export default DragItem;
