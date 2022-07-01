/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-07-01 16:32:08
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-07-01 16:48:27
 * @FilePath: /react-demo/src/views/useCountDown/index.tsx
 * @Description: 倒计时
 */
import React, { useState } from "react";
import useCountDown from "./component/index";
import { Button } from "antd";

const Index: React.FC<any> = (props) => {
  const [_, formattedRes, targetTime] = useCountDown({
    targetDate: "2022-07-01 16:50:00",
  });

  const { days, hours, minutes, seconds, milliseconds } = formattedRes;
  console.log("formattedRes: ", formattedRes);
  const [count, setCount] = useState<number>();
  const [countdown] = useCountDown({
    targetDate: count,
    onEnd: () => {
      alert("结束");
    },
  });

  return (
    <div style={{ padding: 20 }}>
      <div>
        距离 {targetTime} 还有 {days} 天 {hours} 时 {minutes} 分{seconds}秒
      </div>
      <div>
        <p style={{ marginTop: 12 }}>动态变化：</p>
        <Button
          color="primary"
          disabled={countdown !== 0}
          onClick={() => setCount(Date.now() + 3000)}
        >
          {countdown === 0 ? "开始" : `还有 ${Math.round(countdown / 1000)}s`}
        </Button>
        <Button style={{ marginLeft: 8 }} onClick={() => setCount(undefined)}>
          停止
        </Button>
      </div>
    </div>
  );
};

export default Index;
