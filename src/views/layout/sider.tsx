/*
 * @Author: your name
 * @Date: 2022-05-04 19:42:00
 * @LastEditTime: 2023-02-23 16:00:45
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @Description: 导航组件
 * @FilePath: /react-demo/src/views/layout/sider.tsx
 */

import { forwardRef, useImperativeHandle, useState } from "react";
import { Menu, MenuProps } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  path: React.ReactNode,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    path,
    name: label,
  } as MenuItem;
}

const SideComp = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({}));
  let { state } = useLocation();
  let { key } = state ?? { key: "context_1" };
  let [currentActiveKey, setCurrentActiveKey] = useState(key);
  let navigate = useNavigate();
  const items: MenuItem[] = [
    getItem("上下文", "context", null, <AppstoreOutlined />, [
      getItem("父组件数据", "context_1", "/layout/contextIndex/colorChild"),
      getItem("子组件默认数据", "context_2", "/layout/colorChild"),
    ]),
    getItem("图表", "charts", null, <AppstoreOutlined />, [
      getItem("柱子", "bar", "/layout/bar"),
    ]),
    getItem("useEffect", "useEffect", null, <AppstoreOutlined />, [
      getItem("默认", "useEffect_1", "/layout/useEffect/default"),
      getItem("useMount", "useEffect_2", "/layout/useEffect/nodata"),
      getItem("useUpdate", "useEffect_3", "/layout/useEffect/array"),
      getItem("useUnmount", "useEffect_4", "/layout/useEffect/destroy"),
    ]),
    getItem(
      "useLayoutEffect",
      "useLayoutEffect",
      "/layout/useLayoutEffect",
      <AppstoreOutlined />
    ),
    getItem("useMemo", "useMemo", "/layout/useMemo", <AppstoreOutlined />),
    getItem(
      "useReducer",
      "useReducer",
      "/layout/useReducer",
      <AppstoreOutlined />
    ),
    getItem(
      "缓存",
      "useCreationComp",
      "/layout/useCreation",
      <AppstoreOutlined />
    ),
    getItem(
      "callBack",
      "callBackComp",
      "/layout/useCallback",
      <AppstoreOutlined />
    ),
    getItem(
      "强制更新",
      "useUpdateComp",
      "/layout/useUpdate",
      <AppstoreOutlined />
    ),
    getItem(
      "响应式数据",
      "useReactiveComp",
      "/layout/useReactive",
      <AppstoreOutlined />
    ),
    getItem(
      "监听页面操作",
      "useEventListenerComp",
      "/layout/useEventListener",
      <AppstoreOutlined />
    ),
    getItem(
      "hover操作",
      "useHoverComp",
      "/layout/useHover",
      <AppstoreOutlined />
    ),
    getItem(
      "倒计时",
      "useCountDownComp",
      "/layout/useCountDown",
      <AppstoreOutlined />
    ),
    getItem(
      "父子组件数据共享",
      "createContext",
      "/layout/createContext",
      <AppstoreOutlined />
    ),
    getItem(
      "父组件获取子组建元素/调用函数",
      "forwardRef",
      "/layout/forwardRef",
      <AppstoreOutlined />
    ),
    getItem(
      "自动向上滚动",
      "autoScroll",
      "/layout/autoScroll",
      <AppstoreOutlined />
    ),
    getItem(
      "监听数据更新页面",
      "syncExternalStore",
      "/layout/syncExternalStore",
      <AppstoreOutlined />
    ),
    getItem(
      "数据更新等待态",
      "transition",
      "/layout/transition",
      <AppstoreOutlined />
    ),
    getItem(
      "插入子节点",
      "insertChildNode",
      "/layout/insertChildNode",
      <AppstoreOutlined />
    ),
    getItem(
      "DEMO",
      "project",
      "/layout/project",
      <AppstoreOutlined />
    ),
  ];
  const menuItemClick: MenuProps["onClick"] = ({ item, key }) => {
    let { path, name } = item.props;
    setCurrentActiveKey((currentActiveKey) => (currentActiveKey = key));
    document.title = name;
    navigate(path, { state: { key }, replace: false });
  };
  return (
    <Menu
      style={props.style}
      className={props.className}
      onClick={menuItemClick}
      mode="inline"
      selectedKeys={[currentActiveKey]}
      theme="dark"
      items={items}
    />
  );
});
SideComp.defaultProps = {
  style: {},
  className: {}
}
export default SideComp;
