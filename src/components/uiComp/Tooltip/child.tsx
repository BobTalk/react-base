import { Button, Tooltip } from "antd";
import { memo, useState } from "react";
const RecursionComp = (props) => {
  let { tooltipArr, visible } = props;
  return tooltipArr.map((item) => {
    if (item.children && item.children.length) {
      return (
        <Tooltip
          arrowPointAtCenter={true}
          trigger="click"
          open={visible}
          visible={visible}
          onOpenChange={props.onOpenChange}
          nodeClick={props.nodeClick}
          key={item.id}
          placement="left"
          title={
            <RecursionComp
              onOpenChange={props.onOpenChange}
              nodeClick={props.nodeClick}
              tooltipArr={item.children}
            ></RecursionComp>
          }
        >
          <Button onClick={props.onOpenChange}>{item.label}</Button>
        </Tooltip>
      );
    } else {
      return (
        <p key={item.id} onClick={props.nodeClick}>
          {item.label}
        </p>
      );
    }
  });
};
export default RecursionComp;
