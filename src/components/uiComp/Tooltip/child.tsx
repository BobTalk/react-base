import { Button, Tooltip } from "antd";
import { memo, useState, useEffect } from "react";
const RecursionComp = (props) => {
  let { tooltipArr, visible } = props;
  return tooltipArr.map((item, index) => {
    return (
      <Tooltip
        onOpenChange={props.onOpenChange}
        nodeClick={props.nodeClick}
        arrowPointAtCenter={props.arrowPointAtCenter}
        getPopupContainer={(triggerNode) => triggerNode.parentNode}
        trigger={props.trigger}
        zIndex={props.zIndex}
        visible={item.visible}
        color={props.color}
        overlayClassName={props.overlayClassName}
        overlayStyle={props.overlayStyle}
        overlayInnerStyle={props.overlayInnerStyle}
        placement={props.placement}
        key={item.id}
        title={
          item.children && item.children.length ? (
            <RecursionComp
              onOpenChange={props.onOpenChange}
              nodeClick={props.nodeClick}
              tooltipArr={item.children}
              arrowPointAtCenter={props.arrowPointAtCenter}
              getPopupContainer={(triggerNode) => triggerNode.parentNode}
              trigger={props.trigger}
              zIndex={props.zIndex}
              visible={item.visible}
              color={props.color}
              overlayClassName={props.overlayClassName}
              overlayStyle={props.overlayStyle}
              overlayInnerStyle={props.overlayInnerStyle}
              placement={props.placement}
            ></RecursionComp>
          ) : (
            ""
          )
        }
      >
        <div>
          <Button
            onClick={(e) => {
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
