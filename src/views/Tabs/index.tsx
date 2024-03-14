/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2024-03-14 22:28:25
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2024-03-14 22:45:15
 * @FilePath: /react-base/src/views/Tabs/index.tsx
 * @Description: tabs
 */
import { useState } from "react";
import { Tabs } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";

function TabsComp() {
  let [activeTab] = useState(1)
  return <Tabs activeTab={activeTab}>
    {[...Array(10).keys()].map((item) => (
      <p key={item}>Tab {item}</p>
    ))}
  </Tabs>
}

export default TabsComp