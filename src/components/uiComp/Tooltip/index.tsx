/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-12 14:44:42
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-10-14 17:57:34
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
      item.btnActive = false;
    });
    treeForeach((item) => {
      if (item.id == currentItem.id) {
        item.visible = !item.visible;
        item.btnActive = item.visible ? true : false;
      } else if (!currentItem.parentId) {
        item.visible = false;
        item.btnActive = false;
      }
    }, tooltipArr);
    setRefresh({});
  };
  // 查找父级数据
  const findParents = (
    array,
    id,
    isRecursion = false,
    children = "children"
  ) => {
    let parentArray = [];
    if (array.length === 0) {
      return parentArray;
    }
    function recursion(arrayNew, id, isRecursion, children) {
      for (let i = 0; i < arrayNew.length; i++) {
        let node = arrayNew[i];
        if (node.id === id) {
          parentArray.unshift(node);
          isRecursion && recursion(array, node.parentId, isRecursion, children);
          continue;
        } else {
          let childList = node[children];
          if (!!childList) {
            recursion(childList, id, isRecursion, children);
          }
        }
      }
      return parentArray;
    }
    parentArray = recursion(array, id, isRecursion, children);
    return parentArray;
  };
  // 最后一个节点点击事件
  const nodeClickCb = (currentNode, isGlobal = false) => {
    let allParentArr = findParents(tooltipArr, currentNode.parentId, true);
    let activeArr = props.active.includes(currentNode.id)
      ? []
      : [...allParentArr.map((item) => item.id), currentNode.id];
    treeForeach((item) => {
      item.visible = false;
    }, tooltipArr);
    // 把节点点击事件抛出去
    !isGlobal && props?.onClick?.(currentNode, activeArr);
    setRefresh({});
  };

  useEffect(() => {
    const exc = function (e) {
      if (!TooltipBoxRef.current.contains(e.target)) {
        nodeClickCb({}, true);
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
        active={props.active}
        overlayClassName={props.overlayClassName}
        overlayStyle={props.overlayStyle}
        overlayInnerStyle={props.overlayInnerStyle}
        placement={props.placement}
        trigger={props.trigger}
        zIndex={props.zIndex}
        renderChild={props.renderChild}
        onOpenChange={tooltipChangeCb}
        tooltipArr={tooltipArr}
        arrowPointAtCenter={props.arrowPointAtCenter}
      >
        {props.children}
      </RecursionComp>
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
  active: [],
  arrowPointAtCenter: true,
};
export default memo(TooltipComp, (prv, next) => {
  return prv == next;
});
