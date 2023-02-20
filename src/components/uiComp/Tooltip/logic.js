/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-17 17:46:26
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-17 17:52:32
 * @FilePath: /react-base/src/components/uiComp/Tooltip/logic.tsx
 * @Description: 逻辑文件
 */
import { useRef, useState, useEffect } from "react";
function logic(props, options) {
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
    return {
        nodeClickCb,
        TooltipBoxRef,
        tooltipChangeCb,
        tooltipArr
    }
}
export default logic