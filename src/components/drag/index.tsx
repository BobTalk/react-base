/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-14 10:44:35
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-20 09:29:48
 * @FilePath: /react-base/src/components/drag/index.tsx
 * @Description: 拖拽
 */
import logic from "./logic.js";
const DragItem = (props) => {
  let {
    dragRef,
    getDataType,
    renderItem,
    data
  } = logic(props)
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
