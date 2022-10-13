/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-12 14:44:42
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-10-13 19:00:29
 * @FilePath: /react-base/src/components/uiComp/Tooltip/index.tsx
 * @Description: tooltip组件
 */
import { Button, Tooltip } from "antd";
import { memo, useRef, useState, useEffect } from "react";
import RecursionComp from "./child";
const TooltipComp = (props) => {
  const [tooltipArr, setTooltipArr] = useState(props.data);
  const [_, setRefresh] = useState({});
  const TooltipBoxRef = useRef();
  const tooltipChangeCb = (open, currentItem, prv) => {
    let parentArr = findParents(tooltipArr, currentItem.parentId) || [];
    // 抓取当前节点的父节点
    parentArr[0]?.children.forEach((item) => {
      item.visible = false;
    });
    treeForeach((item) => {
      if (item.id == currentItem.id) {
        item.visible = !item.visible;
      } else if (!currentItem.parentId) {
        item.visible = false;
      }
    }, tooltipArr);
    setRefresh({});
  };

  const findParents = (array, id, children = "children") => {
    let parentArray = [];
    if (array.length === 0) {
      return parentArray;
    }
    function recursion(arrayNew, id, children) {
      for (let i = 0; i < arrayNew.length; i++) {
        let node = arrayNew[i];
        if (node.id === id) {
          parentArray.unshift(node);
          continue;
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
  };

  const nodeClickCb = (currentNode) => {
    treeForeach((item) => {
      item.visible = false;
    }, tooltipArr);
    setRefresh({});
  };

  useEffect(() => {
    const exc = function (e) {
      if (!TooltipBoxRef.current.contains(e.target)) {
        nodeClickCb({});
      }
    };
    window.addEventListener("click", exc);
    return () => {
      window.removeEventListener("click", exc);
    };
  }, []);

  const treeForeach = (fn, dataSource) => {
    dataSource.forEach((item) => {
      item.children && treeForeach(fn, item.children);
      fn(item);
    });
  };
  return (
    <div ref={TooltipBoxRef}>
      <RecursionComp
        nodeClick={nodeClickCb}
        color={props.color}
        overlayClassName={props.overlayClassName}
        overlayStyle={props.overlayStyle}
        overlayInnerStyle={props.overlayInnerStyle}
        placement={props.placement}
        trigger={props.trigger}
        zIndex={props.zIndex}
        onOpenChange={tooltipChangeCb}
        tooltipArr={tooltipArr}
        arrowPointAtCenter={props.arrowPointAtCenter}
      ></RecursionComp>
    </div>
  );
};
TooltipComp.defaultProps = {
  data: [],
  color: "#FFF",
  overlayClassName: "", // 卡片类名
  overlayStyle: {}, // 卡片样式
  overlayInnerStyle: {}, // 卡片内容区域的样式对象
  placement: "left",
  trigger: "click",
  zIndex: 999,
  arrowPointAtCenter: true,
};
export default TooltipComp;
