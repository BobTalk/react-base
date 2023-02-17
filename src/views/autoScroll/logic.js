/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-17 18:09:42
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-17 18:12:32
 * @FilePath: /react-base/src/views/autoScroll/logic.tsx
 * @Description: 列表自动往上滚动逻辑
 */
import React, { useEffect, useRef, useState } from "react";
function logic(props, options) {
    const [list] = useState([1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13]);
    const [isScrolle, setIsScrolle] = useState(true);
    // 滚动速度，值越小，滚动越快
    const speed = 30;
    const warper = useRef();
    const childDom1 = useRef();
    const childDom2 = useRef();

    // 开始滚动
    useEffect(() => {
        // 多拷贝一层，让它无缝滚动
        childDom2.current.innerHTML = childDom1.current.innerHTML;
        let timer;
        if (isScrolle) {
            timer = setInterval(
                () =>
                    warper.current.scrollTop >= childDom1.current.scrollHeight
                        ? (warper.current.scrollTop = 0)
                        : warper.current.scrollTop++,
                speed
            );
        }
        return () => {
            clearTimeout(timer);
        };
    }, [isScrolle]);

    const hoverHandler = (flag) => setIsScrolle(flag);
    return {
        warper,
        childDom1,
        list,
        childDom2
    }
}

export default logic