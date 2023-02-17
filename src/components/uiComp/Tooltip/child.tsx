/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-12 15:38:26
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-17 17:47:19
 * @FilePath: /react-base/src/components/uiComp/Tooltip/child.tsx
 * @Description: 每一项
 */
import { Button, Tooltip } from "antd";
import { memo, useState, useEffect } from "react";
import { getDataType } from "../../../utils";
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
        active={props.active}
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
              active={props.active}
              overlayClassName={props.overlayClassName}
              overlayStyle={props.overlayStyle}
              overlayInnerStyle={props.overlayInnerStyle}
              placement={props.placement}
              renderChild={props.renderChild}
            ></RecursionComp>
          ) : (
            ""
          )
        }
      >
        <div className={index ? "mt-[8px]" : ""}>
          {props.children ? (
            <div
              data-active={props.active?.join(",")}
              style={
                props.active?.includes(item.id) ? item?.activeStyleObj : {}
              }
              className="w-full"
              onClick={(e) => {
                item.children && item.children.length
                  ? props.onOpenChange(!visible, item)
                  : props.nodeClick(item);
              }}
            >
              {props.children}
            </div>
          ) : getDataType(props.renderChild) == "function" ? (
            <div
              style={
                props.active?.includes(item.id) ? item?.activeStyleObj : {}
              }
              className="w-full"
              renderChild={props.renderChild}
              onClick={(e) => {
                item.children && item.children.length
                  ? props.onOpenChange(!visible, item)
                  : props.nodeClick(item);
              }}
            >
              {props.renderChild(item)}
            </div>
          ) : (
            <Button
              data-active={props.active?.join(",")}
              style={
                props.active?.includes(item.id) ? item?.activeStyleObj : {}
              }
              className="w-full"
              onClick={(e) => {
                item.children && item.children.length
                  ? props.onOpenChange(!visible, item)
                  : props.nodeClick(item);
              }}
            >
              {item.label}
            </Button>
          )}
        </div>
      </Tooltip>
    );
  });
};
export default RecursionComp;
