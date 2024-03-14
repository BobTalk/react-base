import { useState } from "react";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";

function TabsComp() {
    let [activeTab] = useState(1)
    return <Tabs activeTab={activeTab}>
    {[...Array(10).keys()].map((item) => (
      <Tab key={item}>Tab {item}</Tab>
    ))}
  </Tabs>
 }

export default TabsComp