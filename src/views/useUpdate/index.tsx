/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-07-01 15:21:11
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-07-01 15:24:42
 * @FilePath: /react-demo/src/views/useUpdate/index.tsx
 * @Description: 强制刷新页面
 */
import { Button } from "antd";
import React from "react";
import useUpdate from "./component/index";

const Index: React.FC<any> = (props) => {
  const update = useUpdate();

  return (
    <div style={{ padding: 50 }}>
      <div>时间：{Date.now()}</div>
      <Button color="primary" onClick={update}>
        更新时间
      </Button>
    </div>
  );
};

export default Index;
