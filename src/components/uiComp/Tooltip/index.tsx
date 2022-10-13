/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-12 14:44:42
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-10-13 11:25:08
 * @FilePath: /react-base/src/components/uiComp/Tooltip/index.tsx
 * @Description: tooltip组件
 */
import { Button, Tooltip } from "antd";
import { memo, useState } from "react";
import RecursionComp from "./child";
const TooltipComp = (props) => {
  const [tooltipArr, setTooltipArr] = useState(props.data);
  const [_, setRefresh] = useState({});
  const tooltipChangeCb = (open, currentItem) => {
    treeForeach((item) => {
      if (item.id == currentItem.id) {
        item.visible = !item.visible;
      }
    }, tooltipArr);
    setRefresh({});
  };
  const nodeClickCb = (currentNode) => {
    console.log("currentNode: ", currentNode);
    let currentDataRoot = findParents(tooltipArr, currentNode.parentId);
    console.log("currentDataRoot: ", currentDataRoot);
    // treeForeach((item) => {
    //   item.visible = false;
    // }, tooltipArr);
    // setRefresh({});
  };

  const treeForeach = (fn, dataSource) => {
    dataSource.forEach((item) => {
      item.children && treeForeach(fn, item.children);
      fn(item);
    });
  };
  // 根据当前数据Id查找父级
  function findParents(array, id, children = "children") {
    let parentArray = [];
    if (array.length === 0) {
      return parentArray;
    }
    function recursion(arrayNew, id, children) {
      for (let i = 0; i < arrayNew.length; i++) {
        let node = arrayNew[i];
        if (node.id === id) {
          parentArray.unshift(node);
          recursion(array, node.parentId, children);
          break;
        } else {
          let childList = node[children];
          if (!!childList) {
            recursion(childList, id, children);
          }
        }
      }
      return parentArray;
    }
    parentArray = recursion(array, id, children);
    return parentArray;
  }
  return (
    <RecursionComp
      nodeClick={nodeClickCb}
      onOpenChange={tooltipChangeCb}
      tooltipArr={tooltipArr}
    ></RecursionComp>
  );
};
TooltipComp.defaultProps = {
  data: [],
};
export default TooltipComp;
