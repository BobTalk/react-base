/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-08-03 09:58:40
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-08-03 10:10:58
 * @FilePath: /react-demo/src/views/autoScroll/index.tsx
 * @Description: 列表自动往上滚动
 */
import React, { useEffect, useRef, useState } from "react";
import "./1.css";

const AutoScroll = () => {
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

  return (
    <>
      <div className="parent" ref={warper}>
        <div className="child" ref={childDom1}>
          {list.map((item) => (
            <li
              key={item}
              onMouseOver={() => hoverHandler(false)}
              onMouseLeave={() => hoverHandler(true)}
            >
              {item}
            </li>
          ))}
        </div>
        <div className="child" ref={childDom2}></div>
      </div>
    </>
  );
};

export default AutoScroll;
