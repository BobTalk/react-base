import { Button, Tooltip } from "antd";
import { memo, useState, useEffect } from "react";
const RecursionComp = (props) => {
  let { tooltipArr, visible } = props;
  return tooltipArr.map((item) => {
    return (
      <Tooltip
        arrowPointAtCenter={true}
        getPopupContainer={(triggerNode) => triggerNode.parentNode}
        trigger="click"
        visible={item.visible}
        onOpenChange={props.onOpenChange}
        nodeClick={props.nodeClick}
        key={item.id}
        placement="left"
        title={
          item.children && item.children.length ? (
            <RecursionComp
              onOpenChange={props.onOpenChange}
              nodeClick={props.nodeClick}
              tooltipArr={item.children}
            ></RecursionComp>
          ) : (
            ""
          )
        }
      >
        <div>
          <Button
            onClick={() => {
              item.children && item.children.length
                ? props.onOpenChange(!visible, item)
                : props.nodeClick(item);
            }}
          >
            {item.label}
          </Button>
        </div>
      </Tooltip>
    );
   
  });
};
export default RecursionComp;
