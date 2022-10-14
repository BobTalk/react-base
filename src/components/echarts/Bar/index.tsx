/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-12 10:34:22
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-10-14 15:56:32
 * @FilePath: /react-base/src/components/echarts/Bar/index.tsx
 * @Description: 柱子组件
 */
import { forwardRef, useEffect, memo, useRef, useState } from "react";
import * as ECharts from "echarts/core";
import { options } from "./config";
import mergeClass from "classnames";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  // 数据集组件
  DatasetComponent,
  TransformComponent,
  ToolboxComponent,
  MarkLineComponent,
  MarkAreaComponent,
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
ECharts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  MarkLineComponent,
  DatasetComponent,
  TransformComponent,
  MarkAreaComponent,
  ToolboxComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
]);
const BarComponents = forwardRef((props, ref) => {
  const BarRef = useRef({});
  const [option, setOption] = useState(options);
  let chartInstance;
  const initChart = () => {
    if (!BarRef.current) return;
    chartInstance = ECharts.init(BarRef.current);
    chartInstance.setOption(option, true);
    chartInstance.resize();
    chartInstance.off("click");
    chartInstance.on("click", (params) => {
      props?.onClick?.({ clickInfo: params, allProps: props });
    });
  };
  useEffect(() => {
    initChart();
    return () => {
      chartInstance && chartInstance.dispose();
    };
  }, [options]);
  return (
    <div
      ref={BarRef}
      className={mergeClass("relative", props.className)}
      style={props.style}
    ></div>
  );
});
BarComponents.defaultProps = {
  style: {
    height: "min(500px)",
    width: "100%",
  },
  className: "",
};
export default memo(BarComponents, (prv, next) => {
  return prv == next;
});
