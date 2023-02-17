/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-08-03 09:58:40
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-17 18:28:20
 * @FilePath: /react-demo/src/views/autoScroll/index.tsx
 * @Description: 列表自动往上滚动
 */

import scopeStyle from "./auto-scroll.module.css";
import logic from "./logic.js";
const AutoScroll = () => {
  let { warper, childDom1, list, childDom2, hoverHandler } = logic()
  return (
    <>
      <div className={scopeStyle.parent} ref={warper}>
        <div className={scopeStyle.child} ref={childDom1}>
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
        <div className={scopeStyle.child} ref={childDom2}></div>
      </div>
    </>
  );
};

export default AutoScroll;
